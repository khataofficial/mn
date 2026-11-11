// My Khata - login, sync, offline queue, WhatsApp share. script.js loads after this file.
(function () {
  const C = window.KHATA_CFG, ls = localStorage;
  const p = (new URLSearchParams(location.search).get('p') || '').replace(/[^a-zA-Z0-9]/g, '').slice(0, 12);
  const sfx = p ? '-' + p : '', KEY = 'khata-data' + sfx, K = n => 'kh_' + n + sfx;
  let pendingPwh = null, sb = null, uid = null, email = '', timer = null, busy = false;
  const T = (pr, ms) => Promise.race([pr, new Promise((_, j) => setTimeout(() => j(new Error('timeout')), ms || 8000))]);
  async function sha(s) { try { if (window.crypto && crypto.subtle) { const h = await crypto.subtle.digest('SHA-256', new TextEncoder().encode(s)); return Array.from(new Uint8Array(h)).map(x => x.toString(16).padStart(2, '0')).join(''); } } catch (e) {} return 'plain:' + btoa(unescape(encodeURIComponent(s))); }
  const read = () => { try { return JSON.parse(ls.getItem(KEY)); } catch (e) { return null; } };
  const dropLock = () => ['my-khata-pin-v1' + sfx, 'my-khata-biometric-v1' + sfx].forEach(k => ls.removeItem(k)); // app lock (PIN / fingerprint) belongs to the account, not the phone
  const SYNC = () => ls.getItem(K('sync')) !== 'off'; // user can keep data on this phone only
  const emit = () => { try { window.dispatchEvent(new Event('khata-sync')); } catch (e) {} }; // tells the UI (status circle) that something changed

  // Device / install detection. AI exists on laptops (desktop) only, and only runs when the laptop app was downloaded.
  try { if (/[?&]kai=1(&|$)/.test(location.search)) localStorage.setItem('kh_desk', '1'); } catch (e) {}   // opened from the "My Khata" shortcut
  const UA0 = navigator.userAgent || '';
  const IS_MOBILE = /Android|iPhone|iPad|iPod|Mobile/i.test(UA0) || (/Macintosh/i.test(UA0) && navigator.maxTouchPoints > 1);
  const IS_INSTALLED = ['standalone', 'window-controls-overlay', 'minimal-ui'].some(m => matchMedia('(display-mode: ' + m + ')').matches) || !!navigator.standalone;
  let HAS_APP = false; try { HAS_APP = localStorage.getItem('kh_desk') === '1'; } catch (e) {}
  window.__khEnv = { mobile: IS_MOBILE, desktop: !IS_MOBILE, installed: IS_INSTALLED, appReady: !IS_MOBILE && (IS_INSTALLED || HAS_APP) };
  function boot() {
    const s = document.createElement('script'); s.src = 'script.js';
    s.onload = () => {
      if (IS_MOBILE) return;                       // phone / tablet: ai.js is never downloaded, nothing is shown
      const a = document.createElement('script'); a.src = 'ai.js'; document.body.appendChild(a);   // laptop: setup page + (after setup) the AI
    };
    document.body.appendChild(s);
  }
  function uniq(a, b, k) { const m = new Map(); (b || []).concat(a || []).forEach(x => m.set(k(x), x)); return [...m.values()]; }
  const key = x => (x && x.id != null) ? 'i' + x.id : JSON.stringify(x);
  function merge(L, S) { // conflict: combine data from both sides (deleted items may reappear)
    const o = Object.assign({}, S, L);
    ['inventory', 'capitalEntries', 'expenses', 'stockPurchases'].forEach(f => o[f] = uniq(L[f], S[f], key));
    const cm = new Map((S.customers || []).map(c => [c.id, c]));
    (L.customers || []).forEach(c => { const s = cm.get(c.id); cm.set(c.id, s ? Object.assign({}, s, c, { entries: uniq(c.entries, s.entries, e => JSON.stringify(e)) }) : c); });
    o.customers = [...cm.values()];
    // AI chats / memory / edit log: union by id, the newest version of each item wins (a deleted item stays deleted).
    ['aiChats', 'aiMemory', 'aiLog'].forEach(f => {
      if (!((L[f] && L[f].length) || (S[f] && S[f].length))) return;
      const m = new Map(); (S[f] || []).concat(L[f] || []).forEach(x => { if (!x || x.id == null) return; const q = m.get(x.id); if (!q || (x.u || 0) >= (q.u || 0)) m.set(x.id, x); });
      o[f] = [...m.values()].sort((a, b) => (b.u || 0) - (a.u || 0));
    });
    return o;
  }

  // ---------- login screen ----------
  function gate(canSkip) {
    return new Promise(res => {
      let mode = 'up'; // default view: create a new account
      const inp = 'width:100%;padding:12px;border:1px solid #e4e4e7;border-radius:10px;font:inherit;font-size:15px;box-sizing:border-box';
      const btn = 'width:100%;border:0;border-radius:10px;padding:12px;font:inherit;font-weight:800;font-size:14px;cursor:pointer;margin-top:6px;';
      const d = document.createElement('div');
      d.style.cssText = 'position:fixed;inset:0;z-index:9999;background:#f4f4f5;display:flex;align-items:center;justify-content:center;padding:16px;font-family:Inter,sans-serif;overflow:auto;color-scheme:light';
      d.innerHTML = `<style>
#g-w:focus-within,#g-p:focus{border-color:#111111!important;box-shadow:0 0 0 3px rgba(0,0,0,.12)}
#g-e:focus,#g-p:focus{outline:none}
#g-e,#g-p{background:#fff!important;color:#111!important;color-scheme:light}
#g-e::placeholder,#g-p::placeholder{color:#8a8a93}
#g-e:-webkit-autofill,#g-e:-webkit-autofill:hover,#g-e:-webkit-autofill:focus,#g-p:-webkit-autofill,#g-p:-webkit-autofill:hover,#g-p:-webkit-autofill:focus{-webkit-box-shadow:0 0 0 1000px #fff inset!important;box-shadow:0 0 0 1000px #fff inset!important;-webkit-text-fill-color:#111!important;caret-color:#111;transition:background-color 99999s ease-out 0s}
@keyframes ghIn{from{opacity:0;transform:translateY(16px) scale(.98)}to{opacity:1;transform:none}}
#g-card{animation:ghIn .5s cubic-bezier(.22,1,.36,1) both}
#g-m:empty,#g-dom:empty,#g-sub:empty{display:none}
#g-skip:hover{background:#d4d4d8}
#g-go,#g-sw{transition:transform .15s ease,opacity .2s ease}
#g-go:active,#g-sw:active{transform:scale(.98)}
#g-go:disabled{opacity:.6}
#g-w,#g-p{transition:border-color .2s ease,box-shadow .2s ease}
@media (prefers-reduced-motion:reduce){#g-card{animation:none}}
</style>
<div id="g-card" style="position:relative;max-width:380px;width:100%;background:#ffffff;border:1px solid #e4e4e7;border-radius:18px;padding:22px;box-shadow:0 2px 8px rgba(43,27,18,.15);color:#111111">
${canSkip ? `<button id="g-skip" style="position:absolute;top:18px;right:18px;background:#e4e4e7;color:#111;border:0;border-radius:99px;padding:7px 16px;font:inherit;font-size:13px;font-weight:700;cursor:pointer">Skip</button>` : ''}<h1 style="margin:0 0 4px;color:#111;font-size:22px">My Khata</h1>
<div id="g-sub" style="font-size:12px;color:#666666;margin-bottom:14px"></div>
<div id="g-w" style="display:flex;align-items:center;margin-bottom:10px;border:1px solid #e4e4e7;border-radius:10px;background:#fff;overflow:hidden">
  <input id="g-e" type="text" placeholder="Username" autocomplete="username" autocapitalize="none" style="${inp};border:0;border-radius:0;flex:1;min-width:0;outline:none">
  <span id="g-dom" style="padding:0 12px 0 0;color:#666666;font-size:14px"></span>
</div>
<input id="g-p" type="password" placeholder="Password" autocomplete="new-password" style="${inp};margin-bottom:10px;outline:none">
<div id="g-m" style="color:#111111;font-size:12px;font-weight:700;margin:-2px 0 10px"></div>
<button id="g-fp" hidden style="background:none;border:0;color:#111111;font:inherit;font-size:12px;font-weight:700;cursor:pointer;padding:0 0 8px;text-decoration:underline"></button>
<button id="g-go" style="${btn}background:#111111;color:#fff"></button>
<button id="g-sw" style="${btn}background:transparent;color:#666666;border:1px solid #e4e4e7"></button>
</div>`;
      document.body.appendChild(d);
      const $ = id => d.querySelector('#' + id), msg = (t, ok) => { $('g-m').style.color = ok ? '#111111' : '#111111'; $('g-m').textContent = t; if (t && !ok && $('g-m').animate) $('g-m').animate([{ transform: 'translateX(0)' }, { transform: 'translateX(-7px)' }, { transform: 'translateX(7px)' }, { transform: 'translateX(0)' }], { duration: 280 }); };
      // Username only -> append @gmail.com; a full email (contains @) is used as typed
      const getEmail = () => {
        const v = $('g-e').value.trim().toLowerCase();
        if (!v) return '';
        return v.includes('@') ? v : v + '@gmail.com';
      };
      function paint() {
        $('g-sub').textContent = mode === 'in' ? 'Login your account' : 'Create a new account';
        $('g-go').textContent = mode === 'in' ? 'Login' : 'Create';
        $('g-sw').textContent = mode === 'in' ? 'Create' : 'Login';
        $('g-fp').hidden = mode !== 'in';
        $('g-p').autocomplete = mode === 'in' ? 'current-password' : 'new-password';
      }
      paint(); $('g-e').value = ''; $('g-p').value = '';
      const km = ls.getItem('kh_msg'); if (km) { ls.removeItem('kh_msg'); msg(km, true); }
      // Hide the @gmail.com suffix once the user types a full email address
      $('g-e').oninput = () => { $('g-dom').style.display = $('g-e').value.includes('@') ? 'none' : ''; };
      // Keyboard: Enter = next field / login, Up/Down arrows move between fields
      const order = ['g-skip', 'g-e', 'g-p', 'g-go', 'g-sw'].map($).filter(Boolean);
      d.addEventListener('keydown', ev => {
        const a = document.activeElement, i = order.indexOf(a); if (i < 0) return;
        if (ev.key === 'ArrowDown' || ev.key === 'ArrowUp') { ev.preventDefault(); order[Math.max(0, Math.min(order.length - 1, i + (ev.key === 'ArrowDown' ? 1 : -1)))].focus(); }
        // Enter: username -> password box, password -> Login/Create. (Buttons keep their normal Enter = click.)
        else if (ev.key === 'Enter' && a === $('g-e')) { ev.preventDefault(); $('g-p').focus(); }
        else if (ev.key === 'Enter' && a === $('g-p')) { ev.preventDefault(); $('g-go').click(); }
      });
      $('g-sw').onclick = () => { mode = mode === 'in' ? 'up' : 'in'; msg(''); paint(); };
      if (canSkip) $('g-skip').onclick = () => { if (ls.getItem(K('owner')) && !confirm('This device has saved data from an account. Continue as guest and use the data on this device?')) return; ls.setItem(K('guest'), '1'); d.remove(); res(null); }; // guest mode: no account, data on this device only
      $('g-fp').onclick = async () => {
        const e = getEmail(); if (!e) return msg('Please enter your email first');
        const r = await sb.auth.resetPasswordForEmail(e, { redirectTo: location.href.split('?')[0] });
        msg(r.error ? r.error.message : 'A password reset link has been sent to your email.', !r.error);
      };
      $('g-go').onclick = async () => {
        const e = getEmail(), pw = $('g-p').value;
        if (!e || pw.length < 6) return msg('Please enter your email and a password of at least 6 characters');
        $('g-go').disabled = true; msg('Please wait...', true);
        const r = mode === 'in' ? await sb.auth.signInWithPassword({ email: e, password: pw }) : await sb.auth.signUp({ email: e, password: pw });
        $('g-go').disabled = false;
        if (r.error) return msg(r.error.message);
        if (!r.data.session) return msg('A confirmation link has been sent to your email. Please confirm it, then log in.', true);
        try { pendingPwh = await sha('khata-pw:' + r.data.session.user.id + ':' + pw); } catch (x) {}
        ls.removeItem(K('guest'));
        if (mode === 'up' || ls.getItem(K('owner')) !== r.data.session.user.id) dropLock();   // new / different account: no old app password
        d.remove(); res(r.data.session);
      };
    });
  }

  // ---------- pull: fetch data from the server ----------
  async function pull() {
    const [dr, pr] = await T(Promise.all([
      sb.from('khata_data').select('data,version').eq('user_id', uid).maybeSingle(),
      sb.from('profiles').select('plan,plan_expires_at').eq('id', uid).maybeSingle()
    ]));
    if (dr.error) throw dr.error;
    if (!SYNC()) { // cloud data OFF: only read the plan, never touch local data
      const lo = read();
      if (lo && !pr.error && pr.data) { const x0 = pr.data.plan_expires_at ? new Date(pr.data.plan_expires_at).getTime() : 0; lo.subscription = x0 > Date.now() ? { plan: pr.data.plan, activatedAt: x0, expiresAt: x0 } : { plan: null, activatedAt: null, expiresAt: null }; ls.setItem(KEY, JSON.stringify(lo)); }
      ls.setItem(K('owner'), uid); return;
    }
    const owner = ls.getItem(K('owner'));
    if (owner && owner !== uid) { [KEY, K('ver'), K('dirty'), K('pwh')].forEach(k => ls.removeItem(k)); dropLock(); }
    let local = read(), dirty = !!ls.getItem(K('dirty')), data = local;
    if (dr.data) {
      const S = dr.data.data;
      if (local && (dirty || !owner)) { data = merge(local, S); ls.setItem(K('dirty'), Date.now()); }
      else data = S;
      ls.setItem(K('ver'), dr.data.version);
    } else if (local) ls.setItem(K('dirty'), Date.now());
    if (data) {
      if (!pr.error && pr.data) {
        const ex = pr.data.plan_expires_at ? new Date(pr.data.plan_expires_at).getTime() : 0;
        data.subscription = ex > Date.now() ? { plan: pr.data.plan, activatedAt: ex, expiresAt: ex } : { plan: null, activatedAt: null, expiresAt: null };
      }
      ls.setItem(KEY, JSON.stringify(data));
    }
    ls.setItem(K('owner'), uid);
  }

  // ---------- push: send data to the server (stays queued as dirty while offline) ----------
  async function flush() {
    if (busy || !sb || !uid || !navigator.onLine || !SYNC() || !ls.getItem(K('dirty'))) return;
    busy = true;
    try {
      const mark = ls.getItem(K('dirty')), d = read(); if (!d) return;
      const out = Object.assign({}, d); delete out.subscription;
      const r = await T(sb.rpc('push_data', { p_data: out, p_base: +ls.getItem(K('ver')) || 0, p_shop: (d.shop && d.shop.shopName) || '' }), 20000);
      if (r.error) throw r.error;
      if (!r.data.ok) { // another device changed the data too: merge and reload
        const m = merge(d, r.data.data); m.subscription = d.subscription;
        ls.setItem(KEY, JSON.stringify(m)); ls.setItem(K('ver'), r.data.version); ls.setItem(K('dirty'), Date.now());
        location.reload(); return;
      }
      ls.setItem(K('ver'), r.data.version);
      if (ls.getItem(K('dirty')) === mark) ls.removeItem(K('dirty'));
    } catch (e) { /* offline or server error: data stays dirty and will be retried */ }
    finally { busy = false; emit(); }
  }
  async function resync() {
    pingDevice();
    if (!sb || !uid || !navigator.onLine || !SYNC()) return;
    if (ls.getItem(K('dirty'))) return flush();
    try {
      const r = await sb.from('khata_data').select('version').eq('user_id', uid).maybeSingle();
      if (r.data && r.data.version > (+ls.getItem(K('ver')) || 0)) location.reload();
    } catch (e) {}
  }

  // ---------- devices: which phones/PCs are logged in to this account ----------
  const DREG = K('devreg');
  const devKey = () => { let k = ls.getItem(K('dev')); if (!k) { k = (crypto.randomUUID ? crypto.randomUUID() : Date.now() + '-' + Math.random().toString(36).slice(2)); ls.setItem(K('dev'), k); } return k; };
  async function devName() {
    const ua = navigator.userAgent || ''; let model = '';
    try { const u = navigator.userAgentData; if (u && u.getHighEntropyValues) { const h = await u.getHighEntropyValues(['model']); if (h && h.model) model = h.model; } } catch (e) {}
    if (!model) { const m = ua.match(/Android[^;]*;\s*([^;)]+?)(?:\s+Build|[;)])/); if (m && m[1] && m[1].trim() !== 'K') model = m[1].trim(); }
    if (!model) model = /iPhone/.test(ua) ? 'iPhone' : /iPad/.test(ua) ? 'iPad' : '';
    const os = /Android/.test(ua) ? 'Android' : /iPhone|iPad/.test(ua) ? 'iOS' : /Windows/.test(ua) ? 'Windows' : /Mac OS X/.test(ua) ? 'Mac' : /Linux/.test(ua) ? 'Linux' : 'Device';
    const br = /Edg\//.test(ua) ? 'Edge' : /OPR\//.test(ua) ? 'Opera' : /Firefox\//.test(ua) ? 'Firefox' : /Chrome\//.test(ua) ? 'Chrome' : /Safari\//.test(ua) ? 'Safari' : 'Browser';
    return (model || os) + ' \u00b7 ' + br;
  }
  async function geo() { // city from IP (cached 6 h). Falls back to empty if the lookup is blocked.
    try { const c = JSON.parse(ls.getItem('kh_geo') || 'null'); if (c && Date.now() - c.t < 6 * 36e5) return c; } catch (e) {}
    const get = async (u, f) => { try { const r = await T(fetch(u), 5000); return r.ok ? f(await r.json()) : null; } catch (e) { return null; } };
    let g = await get('https://get.geojs.io/v1/ip/geo.json', j => ({ city: j.city || '', country: j.country || '' }));
    if (!g || (!g.city && !g.country)) g = await get('https://ipwho.is/', j => j.success === false ? null : ({ city: j.city || '', country: j.country || '' }));
    if (g && (g.city || g.country)) { g.t = Date.now(); ls.setItem('kh_geo', JSON.stringify(g)); return g; }
    return { city: '', country: '' };
  }
  let lastPing = 0;
  async function pingDevice() { // registers this device, keeps "last active" fresh, and detects "removed from another device"
    if (!sb || !uid || api.guest || !navigator.onLine || Date.now() - lastPing < 45000) return;
    lastPing = Date.now();
    try {
      const [n, g] = await Promise.all([devName(), geo()]);
      const r = await T(sb.rpc('device_ping', { p_key: devKey(), p_name: n, p_city: g.city || '', p_country: g.country || '', p_new: !ls.getItem(DREG) }), 8000);
      if (r.error) return;                                   // server part not installed yet: do nothing
      if (r.data === false) return kick();                   // this device was removed from the list
      ls.setItem(DREG, '1');
    } catch (e) {}
  }
  async function kick() { // another device removed this one
    try { await flush(); } catch (e) {}
    try { await T(sb.auth.signOut({ scope: 'local' }), 4000); } catch (e) {}
    ls.removeItem(DREG); ls.removeItem(K('pwh')); ls.removeItem('sb-khata' + sfx);
    if (SYNC()) { [KEY, K('ver'), K('dirty'), K('owner'), K('guest')].forEach(k => ls.removeItem(k)); dropLock(); } // cloud copy is safe; keep phone-only data untouched
    ls.setItem('kh_msg', 'This device was signed out from another device.');
    location.reload();
  }

  // ---------- public helpers ----------
  const api = {
    rpc(fn, args) { return sb ? sb.rpc(fn, args) : Promise.resolve({ error: { message: 'Not connected' } }); },
    email: '',
    // Account (website) password check - used to open locked customers. true / false / null (cannot verify now)
    async verifyPw(pw) {
      if (!pw) return false;
      const h = await sha('khata-pw:' + uid + ':' + pw), st = ls.getItem(K('pwh'));
      if (st === h) return true;
      if (!sb || !email || !navigator.onLine) return st ? false : null;
      try {
        const r = await T(sb.auth.signInWithPassword({ email: email, password: pw }), 10000);
        if (r.error) return /invalid|credentials/i.test(r.error.message || '') ? false : null;
        ls.setItem(K('pwh'), h); return true;
      } catch (e) { return null; }
    },
    async changePw(pw) {
      if (!sb || !navigator.onLine) return { ok: false, msg: 'Internet is needed to change the password' };
      try {
        const r = await T(sb.auth.updateUser({ password: pw }), 10000);
        if (r.error) return { ok: false, msg: r.error.message };
        ls.setItem(K('pwh'), await sha('khata-pw:' + uid + ':' + pw));
        return { ok: true, msg: 'Password changed' };
      } catch (e) { return { ok: false, msg: 'Could not change the password' }; }
    },
    push() { if (!SYNC()) return; ls.setItem(K('dirty'), Date.now()); clearTimeout(timer); timer = setTimeout(flush, 1500); emit(); },
    wa(c, bal, shop) {
      let ph = (c.phone || '').replace(/\D/g, '');
      if (ph.startsWith('0')) ph = '92' + ph.slice(1);
      const R = n => 'Rs ' + Math.round(n).toLocaleString('en-US');
      const D = ms => new Date(ms).toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' });
      const E = (c.entries || []).slice().sort((a, b) => a.time - b.time);
      let paid = 0, credit = 0;
      const L = E.map(x => {
        if (x.type === 'item') { credit += x.total; return D(x.time) + ': ' + x.item + ' ' + x.qty + ' x ' + R(x.rate) + ' = ' + R(x.total); }
        paid += x.amount; return D(x.time) + ': Payment mili ' + R(x.amount);
      });
      const head = 'Assalam o Alaikum ' + c.name + ',\n' + shop + ' ka poora hisab:\n-----------------\n';
      const foot = '-----------------\nKul udhaar: ' + R(credit) + '\nPayment mili: ' + R(paid) + '\n*Baqaya: ' + R(bal) + '*';
      let lines = L, note = '';
      const build = () => head + note + lines.join('\n') + (lines.length ? '\n' : '') + foot;
      while (lines.length > 1 && encodeURIComponent(build()).length > 6500) { // WhatsApp link ki lambai ki hadd
        lines = lines.slice(1); note = '(Purani ' + (L.length - lines.length) + ' entries chhodi gayi, baqaya poora sahi hai)\n';
      }
      window.open('https://wa.me/' + ph + '?text=' + encodeURIComponent(build()), '_blank');
    }
  };
  window.__ks = api;
  api.syncOn = SYNC;
  api.guest = false;
  // Where is the data right now? Used by the status circle next to Settings.
  // 'synced' (theme colour) = safe on cloud AND on this device. Every other state = green.
  api.status = () => {
    if (api.guest) return { state: 'guest', label: 'Guest mode - data only on this device' };
    if (!uid) return { state: 'offline', label: 'Not logged in - working from this device' };
    if (!SYNC()) return { state: 'local', label: 'Cloud sync OFF - data only on this device' };
    if (ls.getItem(K('dirty'))) return { state: 'pending', label: navigator.onLine ? 'Uploading to cloud...' : 'Offline - will upload when online' };
    return { state: 'synced', label: 'Safe on cloud and on this device' };
  };
  api.showLogin = () => { ls.removeItem(K('guest')); location.reload(); }; // guest -> login screen (guest data is merged into the account)
  api.setSync = async on => {
    if (!on) { ls.setItem(K('sync'), 'off'); ls.removeItem(K('dirty')); clearTimeout(timer); emit(); return { ok: true, msg: 'Cloud sync is OFF. Your data now stays only on this phone.' }; }
    ls.setItem(K('sync'), 'on'); ls.setItem(K('dirty'), Date.now()); emit();
    if (!navigator.onLine) return { ok: true, msg: 'Cloud sync is ON. Your data will upload when you are online.' };
    try { await pull(); await flush(); } catch (e) { return { ok: false, msg: (e && e.message) || 'Could not reach the server' }; }
    return { ok: true, reload: true, msg: 'Done — your data is now on the cloud.' };
  };
  api.syncNow = async () => {
    if (!SYNC()) return { ok: false, msg: 'Turn cloud sync on first.' };
    if (!navigator.onLine) return { ok: false, msg: 'You are offline.' };
    ls.setItem(K('dirty'), Date.now()); await flush();
    return ls.getItem(K('dirty')) ? { ok: false, msg: 'Upload failed. Try again.' } : { ok: true, msg: 'Everything is uploaded.' };
  };
  api.devices = async () => {
    const r = await sb.rpc('list_devices'); if (r.error) throw r.error;
    const me = devKey();
    return (r.data || []).map(x => ({ id: x.device_key, name: x.name, city: x.city, country: x.country, last_seen: x.last_seen, current: x.device_key === me }));
  };
  api.signOutDevice = async id => {
    if (id === devKey()) return { ok: false, msg: 'This is the device you are using.' };
    const r = await sb.rpc('remove_device', { p_key: id });
    return r.error ? { ok: false, msg: r.error.message } : { ok: true, msg: 'Device removed. It signs out within a minute.' };
  };
  api.signOutOthers = async () => {
    if (!navigator.onLine) return { ok: false, msg: 'You are offline.' };
    try { await T(sb.auth.signOut({ scope: 'others' }), 8000); } catch (e) {}
    const r = await sb.rpc('remove_other_devices', { p_key: devKey() });
    return r.error ? { ok: false, msg: r.error.message } : { ok: true, msg: 'All other devices are signed out.' };
  };
  api.removeCloud = async () => {
    if (SYNC()) return { ok: false, msg: 'Turn cloud sync off first.' };
    try {
      const r = await sb.from('khata_data').delete().eq('user_id', uid).select('user_id');
      if (r.error) return { ok: false, msg: r.error.message };
      if (!r.data || !r.data.length) return { ok: false, msg: 'Nothing was deleted (no cloud copy, or the server has no delete rule yet).' };
      ls.removeItem(K('ver')); return { ok: true, msg: 'Cloud copy removed.' };
    } catch (e) { return { ok: false, msg: 'Could not remove it.' }; }
  };

  async function signOut() {
    try { await flush(); } catch (e) {}
    if (ls.getItem(K('dirty')) && !confirm('Some changes have not been saved online yet. Log out anyway? (Those changes may be lost.)')) return;
    if (!SYNC() && !confirm('Cloud sync is OFF, so your data exists only on this phone and will be deleted from it when you log out. Download a backup first (Settings > Data & Cloud). Log out anyway?')) return;
    try { if (navigator.onLine) await T(sb.rpc('remove_device', { p_key: devKey() }), 4000); } catch (e) {}
    try { await T(sb.auth.signOut({ scope: 'local' }), 5000); } catch (e) {}   // this device only
    [KEY, K('ver'), K('dirty'), K('owner'), K('pwh'), K('guest'), DREG, 'sb-khata' + sfx].forEach(k => ls.removeItem(k));
    dropLock();
    location.reload();
  }
  document.addEventListener('click', e => { if (e.target.closest && e.target.closest('#cloud-out-btn')) signOut(); });
  window.addEventListener('online', () => { emit(); resync(); });
  window.addEventListener('offline', emit);
  document.addEventListener('visibilitychange', () => { if (!document.hidden) resync(); });
  setInterval(() => { if (!document.hidden) resync(); }, 60000);


  // ---------- PWA: service worker, update notice, install button ----------
  function pill(txt, fn) {
    document.getElementById('kh-pill') && document.getElementById('kh-pill').remove();
    const b = document.createElement('div'); b.id = 'kh-pill';
    b.style.cssText = 'position:fixed;right:14px;bottom:calc(14px + env(safe-area-inset-bottom,0px));z-index:9997;background:#111111;color:#ffffff;border-radius:999px;padding:10px 14px;font:600 13px Inter,sans-serif;box-shadow:0 4px 14px rgba(0,0,0,.3);display:flex;gap:10px;align-items:center;max-width:90vw';
    b.innerHTML = '<span style="cursor:pointer">' + txt + '</span><span style="opacity:.6;cursor:pointer">✕</span>';
    b.firstChild.onclick = () => { fn && fn(); b.remove(); }; b.lastChild.onclick = () => b.remove();
    document.body.appendChild(b);
  }
  const standalone = matchMedia('(display-mode: standalone)').matches || navigator.standalone;
  if ('serviceWorker' in navigator) {
    const had = !!navigator.serviceWorker.controller;
    navigator.serviceWorker.register('service-worker.js').catch(() => {});
    navigator.serviceWorker.addEventListener('controllerchange', () => { if (had) pill('🔄 Naya version tayyar — Refresh karein', () => location.reload()); });
  }
  let dip = null;
  window.addEventListener('beforeinstallprompt', e => {
    e.preventDefault(); dip = e;
    if (!standalone && !ls.getItem('kh_noinst')) setTimeout(() => pill('📲 App install karein', async () => { dip.prompt(); await dip.userChoice; dip = null; }), 4000);
  });
  window.addEventListener('appinstalled', () => { const p2 = document.getElementById('kh-pill'); p2 && p2.remove(); });
  if (!standalone && /iphone|ipad|ipod/i.test(navigator.userAgent) && !ls.getItem('kh_ios'))
    setTimeout(() => { pill('📲 Install: Share ⬆️ → Add to Home Screen', () => ls.setItem('kh_ios', 1)); }, 5000);

  // ---------- start ----------
  async function start() {
    const offlineOK = !!ls.getItem(K('owner')), guestFlag = ls.getItem(K('guest')) === '1';
    if (!window.supabase || !C || C.URL.includes('YOUR-')) {
      if (guestFlag) api.guest = true;
      if (offlineOK || guestFlag) return boot();
      document.body.innerHTML = '<p style="padding:24px;font-family:sans-serif">An internet connection is required on first use. Please add your Supabase URL/KEY in config.js.</p>'; return;
    }
    sb = window.supabase.createClient(C.URL, C.KEY, { auth: { storageKey: 'sb-khata' + sfx, persistSession: true, autoRefreshToken: true } });
    let session = null;
    try { session = (await T(sb.auth.getSession(), 4000)).data.session; } catch (e) {}
    if (session) ls.removeItem(K('guest'));            // logged in -> not a guest any more
    else if (guestFlag) api.guest = true;              // user chose "Skip login" before
    else {
      if (offlineOK && !navigator.onLine) return boot();
      session = await gate(true);                      // Skip is always available; if account data is on this device we ask first
      if (!session) api.guest = true;
    }
    if (api.guest) { boot(); emit(); return; }
    uid = session.user.id; email = session.user.email; api.email = email;
    try { await pull(); } catch (e) { /* offline: continue with local data */ }
    if (pendingPwh) ls.setItem(K('pwh'), pendingPwh);
    boot(); flush(); emit(); pingDevice();
  }
  start();
})();
