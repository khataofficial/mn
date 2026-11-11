document.addEventListener('contextmenu',function(efk4){var t=efk4.target;if(t&&t.closest&&t.closest('input,textarea,[contenteditable]'))return;efk4.preventDefault();});document.addEventListener('keydown',function(e){var k=String(e.key||'').toLowerCase(),c=e.ctrlKey||e.metaKey;if(/^f([1-9]|1[0-2])$/.test(k)||(e.keyCode>=112&&e.keyCode<=123)){e.preventDefault();e.stopPropagation();return;}if(c&&(k==='u'||k==='s'||k==='p'||k==='i'||k==='j'||(e.shiftKey&&(k==='c'||k==='k')))){e.preventDefault();e.stopPropagation();}},true);(function(){const efk4 = document.getElementById('root');

/* ---------- default data ---------- */
function NEWD(){return{customers:[],inventory:[],capitalEntries:[],expenses:[],stockPurchases:[],shop:null,subscription:{plan:null,activatedAt:null,expiresAt:null},customization:{appName:null,icon:null,wallpaper:null,bubbleColor:null,bubbleActiveColor:null},settings:{strict:true},ads:[],bills:[]};}
let DYER = NEWD();
let egF ={screen:'home',customerId:null};let uyMQ ={};let $Wx = null;let knH = '';let K041 = '';let T52V = 'all';let KV4m = false;let VCQQ = '';const yo15 =(new URLSearchParams(location.search).get('p')|| '').replace(/[^a-zA-Z0-9]/g,'').slice(0,12)|| null;const gr5y = yo15 ?('-' + yo15):'';const l_ = 'khata-data' + gr5y;const Zo = ['khata-data-v3','khata-data-v2','khata-data-v1'];const o4t9 = 24 * 60 * 60 * 1000;const mK5 = 5000;const xcs = 90;const R5pr = 5;const sDC = 30;const mVvw = [ "Atta (Wheat Flour)","Baby Wipes","Bathing Soap","Besan (Gram Flour)","Biscuits","Black Pepper","Bleach","Body Lotion","Bread","Butter","Candles","Car Freshener","Cereal","Chai Patti (Tea Leaves)","Chana Dal","Chewing Gum","Chicken Masala","Chili Powder","Chips","Chocolate","Cigarettes","Cling Film","Coconut Oil","Coffee","Cold Drink","Cooking Oil","Cornflakes","Cotton Buds","Cumin Seeds","Curd (Dahi)","Deodorant","Detergent Powder","Dettol","Diapers","Dish Soap","Egg Tray","Eggs","Energy Drink","Envelopes","Face Wash","Fairy Liquid","Garam Masala","Garlic","Ghee","Ginger","Glass Cleaner","Green Tea","Hair Oil","Hand Sanitizer","Hand Wash","Henna","Honey","Ice Cream","Incense Sticks","Instant Noodles","Jam","Juice Box","Ketchup","Kitchen Towel","Lentils (Daal)","Lighter","Lipstick","Lassi","Macaroni","Maggi Noodles","Margarine","Matchbox","Mayonnaise","Milk","Milk Powder","Mineral Water","Mosquito Coil","Mouthwash","Nail Polish","Namkeen","Napkins","Nescafe","Newspaper","Notebook","Nuts (Mix)","Olive Oil","Onion","Pampers","Paper Napkins","Paper Towel","Pasta","Pen","Pencil","Perfume","Petroleum Jelly","Pickle (Achar)","Plastic Bags","Potato Chips","Pulses","Rice","Salt","Sanitary Pads","Sauce","Shampoo","Shaving Cream","Shaving Razor","Shoe Polish","Slippers","Soap","Soft Drink","Sponge","Spices Mix","Sugar","Sunflower Oil","Surf Excel","Tea Bags","Tea Whitener","Tissue Paper","Toilet Cleaner","Toilet Paper","Tomato","Tomato Paste","Toothbrush","Toothpaste","Vegetable Oil","Vermicelli (Seviyan)","Vinegar","Wafer Biscuits","Washing Powder","Water Bottle","Yeast","Yogurt" ];function e2(){const uohs = DYER.inventory.map(TOC => TOC.name);return Array.from(new Set([...uohs,...mVvw])).sort((_ddy,m3)=> _ddy.localeCompare(m3));}function Jrq(KV,Am8w){return `<datalist id="${KV}">${Am8w.map(AxH => `<option value="${YoYV(AxH)}"></option>`).join('')}</datalist>`;}function kB(){return Date.now().toString(36)+ Math.random().toString(36).slice(2,8);}document.addEventListener('input',e=>{const t=e.target;if(t&&t.id==='pa-n')t.value=t.value.replace(/[^0-9+\-]/g,'');});
function phoneOnly(inp){inp.addEventListener('input',()=>{inp.value=inp.value.replace(/[^0-9+\-]/g,'');});}
function Cy(beFt){beFt = beFt.trim();if(!beFt)return beFt;return beFt.charAt(0).toUpperCase()+ beFt.slice(1);}function UscD(Sj){Sj = Math.round(Sj);return Sj.toLocaleString('en-US');}function GlZA(Qkhc){return new Date(Qkhc).toLocaleDateString('en-GB',{day:'2-digit',month:'short',year:'numeric'});}function q1rX(Lh){return new Date(Lh).toLocaleTimeString('en-GB',{hour:'2-digit',minute:'2-digit'});}function YoYV(rD37){const M75I = document.createElement('div');M75I.textContent = rD37;return M75I.innerHTML;}

/* ---------- settings / ads helpers ---------- */
/* Stock & cash check: ON by default, user can turn it OFF from the Inventory tab */
function STRICT(){return !(DYER.settings && DYER.settings.strict === false);}
function NL(s){s = String(s || '').trim();if(!s)return '';if(!/^https?:\/\//i.test(s))s = 'https://' + s;try{const u = new URL(s);if(u.protocol !== 'http:' && u.protocol !== 'https:')return '';return u.href;}catch(e){return '';}}
function OPENL(url){const u = NL(url);if(!u){Nek('Invalid link');return;}window.open(u,'_blank','noopener');}
(function(){const s = document.createElement('style');s.textContent = '.ad-card{background:#fff8ea;border:1px solid var(--gold-line);border-radius:12px;padding:14px;box-shadow:var(--card-shadow);cursor:pointer;position:relative;overflow:hidden;display:flex;flex-direction:column;gap:6px}.ad-card::before{content:"";position:absolute;left:0;top:0;bottom:0;width:5px;background:var(--blue)}.ad-card .ad-head{font-size:17px;font-weight:800;color:var(--ink);word-break:break-word}.ad-card .ad-detail{font-size:13px;color:var(--ink-soft);line-height:1.4;word-break:break-word}.ad-card .ad-comment{font-size:12px;font-weight:600;color:var(--amber);word-break:break-word}.ad-card .ad-link{font-size:11px;color:var(--blue);word-break:break-all}.ad-card .ad-actions{display:flex;gap:6px;margin-top:4px}.ad-card .ad-actions button{border:1px solid var(--gold-line);background:var(--paper-dark);border-radius:8px;padding:6px 10px;font-size:13px;font-weight:700;cursor:pointer;color:var(--ink-soft)}.ad-card .ad-actions .ad-open{background:var(--blue);color:#fff;border-color:var(--blue);flex:1}.ad-card .ad-actions .ad-wa{display:flex;align-items:center;justify-content:center;padding:4px 8px}.ad-card .ad-actions .ad-wa svg{display:block}.char-count{font-size:11px;color:var(--ink-soft);text-align:right;margin-top:3px}.strict-row{display:flex;align-items:center;gap:10px;margin-bottom:12px;flex-wrap:wrap}.strict-hint{font-size:11px;color:var(--ink-soft);flex:1;min-width:160px}.ad-dp img{padding:0!important;background:transparent!important;object-fit:cover!important}';document.head.appendChild(s);})();

function S_(){const ydD$ = localStorage.getItem(l_);if(ydD$){try{DYER = JSON.parse(ydD$);}catch(TUei){DYER = NEWD();}}else{DYER = NEWD();}if(!DYER.subscription)DYER.subscription ={plan:null,activatedAt:null,expiresAt:null};if(!DYER.customization)DYER.customization ={appName:null,icon:null,wallpaper:null,bubbleColor:null,bubbleActiveColor:null};if(!DYER.settings)DYER.settings ={strict:true};if(!DYER.ads)DYER.ads = [];if(DYER.shop && !DYER.shop.paymentMethod)DYER.shop.paymentMethod = null;if(!DYER.bills)DYER.bills=[];if(DYER.customization&&DYER.customization.icon)DYER.customization.icon=null;PF9u();if(DYER.shop){egF = MzIo()?{screen:'lock',customerId:null}:{screen:'home',customerId:null};}else{egF ={screen:'setup',customerId:null};}KV4m = DYER.shop ? !MzIo() : false;ynNo();}function $O(){localStorage.setItem(l_,JSON.stringify(DYER));window.__ks&&window.__ks.push();}window.__kd={get:()=>DYER,save:$O,fin:r7nF,render:ynNo,toast:Nek,sell:bF,pay:cst0,addCustomer:dt,addStock:zLI2,addExpense:WoXS,custTotals:zti2,custStatus:Iz$,stockStatus:q5RY,allTotals:hyLU,screen:()=>egF.screen,strict:STRICT};function CzvP(g980,BtI,W4c){return new Promise((xD_,Bq)=>{const KCF2 = new FileReader();KCF2.onerror =()=> Bq(new Error('read failed'));KCF2.onload =()=>{const Q7 = new Image();Q7.onerror =()=> Bq(new Error('image decode failed'));Q7.onload =()=>{let{width:y_t,height:WH1Y}= Q7;if(y_t > BtI || WH1Y > BtI){const ufgw = BtI / Math.max(y_t,WH1Y);y_t = Math.round(y_t * ufgw);WH1Y = Math.round(WH1Y * ufgw);}const nHXF = document.createElement('canvas');nHXF.width = y_t;nHXF.height = WH1Y;nHXF.getContext('2d').drawImage(Q7,0,0,y_t,WH1Y);xD_(nHXF.toDataURL('image/jpeg',W4c));};Q7.src = KCF2.result;};KCF2.readAsDataURL(g980);});}let FF1a = null;function PF9u(){const gnnv = DYER.customization ||{};const KnNi = gnnv.appName ? gnnv.appName:'My Khata';document.title = KnNi;let Slc = document.querySelector('link[rel="icon"]');let sBA = document.querySelector('link[rel="apple-touch-icon"]');khApply();const En28 = khIconPNG(192,false),En512 = khIconPNG(512,false),EnM = khIconPNG(512,true);if(Slc){Slc.setAttribute('type','image/svg+xml');Slc.removeAttribute('sizes');Slc.setAttribute('href',khIconURI(true));}if(sBA)sBA.setAttribute('href',khIconPNG(180,false));let Rm8 = document.querySelector('meta[name="apple-mobile-web-app-title"]');if(Rm8)Rm8.setAttribute('content',KnNi);document.body.style.background = '';khApply();const ku_ = document.documentElement.style;const n$v = khBG();let _ZSH = document.getElementById('app-theme-color');if(_ZSH)_ZSH.setAttribute('content',n$v);const s2 = new URL('./' +(yo15 ?('?p=' + yo15):''),location.href).href;const ab = u => new URL(u,location.href).href;const wQVB ={name:KnNi,short_name:KnNi.slice(0,12)|| 'Khata',start_url:s2,id:s2,scope:ab('./'),description:'Free khata book: credit, stock, rent & bills',lang:'en',orientation:'portrait',categories:['finance','business'],display_override:['standalone','minimal-ui'],display:'standalone',background_color:n$v,theme_color:n$v,icons:[{src:ab(En28),sizes:'192x192',type:'image/png',purpose:'any'},{src:ab(En512),sizes:'512x512',type:'image/png',purpose:'any'},{src:ab(EnM),sizes:'512x512',type:'image/png',purpose:'maskable'}]};const sF = new Blob([JSON.stringify(wQVB)],{type:'application/manifest+json'});const JJkv = URL.createObjectURL(sF);const QKm = document.getElementById('app-manifest-link');if(QKm)QKm.setAttribute('href',JJkv);if(FF1a)URL.revokeObjectURL(FF1a);FF1a = JJkv;}const yegt = 'my-khata-biometric-v1' + gr5y;function mS0A(){return !!localStorage.getItem(yegt);}function pA(qBiU){let f2Ux = '';qBiU.forEach(Zj => f2Ux += String.fromCharCode(Zj));return btoa(f2Ux).replace(/\+/g,'-').replace(/\//g,'_').replace(/=+$/,'');}function Dj(kfdM){const x3WQ = kfdM.replace(/-/g,'+').replace(/_/g,'/');const eDFR = x3WQ + '='.repeat((4 - x3WQ.length % 4)% 4);const jh = atob(eDFR);return Uint8Array.from(jh,Gb => Gb.charCodeAt(0));}async function vOd(){try{if(!window.isSecureContext || !window.PublicKeyCredential || !navigator.credentials)return false;if(!PublicKeyCredential.isUserVerifyingPlatformAuthenticatorAvailable)return false;return await PublicKeyCredential.isUserVerifyingPlatformAuthenticatorAvailable();}catch(lU){return false;}}async function fxv(){const rmi = await vOd();if(!rmi){Nek('Fingerprint is not available here. Use HTTPS and a phone with biometric lock.');return false;}try{const Wgb8 = crypto.getRandomValues(new Uint8Array(32));const wv2 = crypto.getRandomValues(new Uint8Array(16));const D6oc = await navigator.credentials.create({publicKey:{challenge:Wgb8,rp:{name:'My Khata',id:location.hostname},user:{id:wv2,name:'my-khata-user',displayName:DYER.shop?.ownerName || 'My Khata'},pubKeyCredParams:[{type:'public-key',alg:-7},{type:'public-key',alg:-257}],authenticatorSelection:{authenticatorAttachment:'platform',userVerification:'required',residentKey:'preferred'},timeout:60000,attestation:'none'}});if(!D6oc)throw new Error('No biometric credential created');localStorage.setItem(yegt,JSON.stringify({id:pA(new Uint8Array(D6oc.rawId)),createdAt:Date.now()}));return true;}catch(lc){Nek(lc && lc.name === 'NotAllowedError' ? 'Fingerprint setup cancelled.':'Fingerprint setup failed.');return false;}}async function GBKT(){const rvs1 = localStorage.getItem(yegt);if(!rvs1){egF ={screen:'biometricSetup',customerId:null};ynNo();return;}const NrUr = await vOd();if(!NrUr){Nek('Fingerprint is not available. Open this app on a supported HTTPS device.');return;}try{const J1jg = JSON.parse(rvs1);const HhHJ = crypto.getRandomValues(new Uint8Array(32));const ih7S = await navigator.credentials.get({publicKey:{challenge:HhHJ,allowCredentials:[{type:'public-key',id:Dj(J1jg.id)}],userVerification:'required',timeout:60000}});if(!ih7S)throw new Error('Biometric verification failed');KV4m = true;egF ={screen:'home',customerId:null};ynNo();}catch(GYWg){Nek(GYWg && GYWg.name === 'NotAllowedError' ? 'Fingerprint verification cancelled.':'Fingerprint verification failed.');}}const nVk = 'my-khata-pin-v1' + gr5y;function YP4(){const Hd = navigator.userAgent || '';if(/Android|iPhone|iPad|iPod|Mobile/i.test(Hd))return true;if(/Macintosh/i.test(Hd)&& navigator.maxTouchPoints > 1)return true;return false;}function Lo2C(){return !!localStorage.getItem(nVk);}function MzIo(){return YP4()? mS0A():Lo2C();}async function kNEN(l_Gz){try{if(window.crypto && crypto.subtle){const Wi = await crypto.subtle.digest('SHA-256',new TextEncoder().encode('khata-salt:' + l_Gz));return Array.from(new Uint8Array(Wi)).map(w3IG => w3IG.toString(16).padStart(2,'0')).join('');}}catch(UI){}return 'plain:' + btoa(l_Gz);}async function _SoC(fsyL){localStorage.setItem(nVk,await kNEN(fsyL));}async function kgzP(UVZC){return localStorage.getItem(nVk)=== await kNEN(UVZC);}function ZTki(EIsV){return /^\d{4,8}$/.test(EIsV);}function dcMQ(){if(!MzIo())return;KV4m = false;$Wx = null;egF ={screen:'lock',customerId:null};ynNo();}

/* ---------- subscription (activated by the owner from admin.html; no in-app code entry) ---------- */
const fp = 50;const _puA ={monthly:24,yearly:159};const wU = '923703696526';
function dNW(){return !!(DYER.subscription && DYER.subscription.expiresAt && DYER.subscription.expiresAt > Date.now());}function t7e(){return DYER.customers.length < fp || dNW();}
function KJ8i(jVi){const CsST = Fd();const D4 = _puA[jVi];const noL3 = DYER.shop && DYER.shop.paymentMethod === 'easypaisa' ? 'EasyPaisa':'JazzCash';const Xtvh =(DYER.shop && DYER.shop.paymentAccount)|| 'N/A';const YoKe = encodeURIComponent(`Hi, I paid Rs ${D4} for my "${CsST}" Khata ${jVi} subscription.\nPaid from ${noL3} number: ${Xtvh}\nAccount: ${window.__ks?window.__ks.email:''}\nPlease activate my plan.`);return `https://wa.me/${wU}?text=${YoKe}`;}

function qRW(){egF ={screen:'home',customerId:null};if(khLimit())return;$Wx ={type:'newCustomer'};ynNo();}function r5_h(){egF ={screen:'inventory',customerId:null};$Wx ={type:'addStock'};ynNo();}function ors(){egF ={screen:'finance',customerId:null};$Wx ={type:'addCapital'};ynNo();}function FRq(){egF ={screen:'finance',customerId:null};$Wx ={type:'addExpense'};ynNo();}function Bsu(){egF ={screen:'profit',customerId:null};ynNo();}function hsTi(){if(egF.screen === 'settings'){khBack();return;}if(egF.screen === 'detail'){Q7A();}else if(egF.screen === 'inventory' || egF.screen === 'profit' || egF.screen === 'finance' || egF.screen === 'subscribe' || egF.screen === 'ads'){Q7A();}}const i4 ={n:qRW,a:qRW,s:r5_h,c:ors,e:FRq,i:PR77,f:T4XZ,p:Bsu,b:hsTi,l:dcMQ,h:Q7A,d:()=>{egF={screen:'ads',customerId:null};ADSTALE=true;ynNo();},y:khDotToggle};function kso3(y0YA){if(!KV4m || $Wx)return;const LI = ['home','detail','inventory','profit','finance','subscribe','ads'];if(LI.indexOf(egF.screen)=== -1)return;const Dp = i4[y0YA];if(Dp)Dp();}document.addEventListener('keydown',function(XZ){const lG = document.activeElement;const NEyB =(lG && lG.tagName)|| '';if(NEyB === 'INPUT' || NEyB === 'TEXTAREA' ||(lG && lG.isContentEditable))return;if(!XZ.key || XZ.key.length !== 1 || XZ.ctrlKey || XZ.metaKey || XZ.altKey)return;kso3(XZ.key.toLowerCase());});let iZTR = null;function Nek(N9_b){let AuRS = document.querySelector('.toast');if(AuRS)AuRS.remove();AuRS = document.createElement('div');AuRS.className = 'toast';AuRS.textContent = N9_b;document.body.appendChild(AuRS);khIZ(AuRS);clearTimeout(iZTR);iZTR = setTimeout(()=> AuRS.remove(),2400);}function j3(G5){return DYER.customers.find(lm$ => lm$.id === G5);}function cKTL(Jw){return DYER.inventory.find(gHUm => gHUm.id === Jw);}function zti2(cBX){let VfCb = 0,T_ = 0;(cBX.entries || []).forEach(dPE4 =>{if(dPE4.type === 'item')VfCb += dPE4.total;else if(dPE4.type === 'payment')T_ += dPE4.amount;});return{totalItems:VfCb,totalPayments:T_,balance:VfCb - T_};}function T5Kb(gCwj){let b1 = null;(gCwj.entries || []).forEach(Wbhq =>{if(Wbhq.type === 'payment' &&(!b1 || Wbhq.time > b1))b1 = Wbhq.time;});return b1;}function tKN(Pq5r){const W3j = zti2(Pq5r);if(W3j.balance < mK5)return false;const jIWf = T5Kb(Pq5r)|| Pq5r.createdAt;return(Date.now()- jIWf)>= xcs * o4t9;}function Iz$($VMW){if(tKN($VMW))return 'defaulter';const uszl = zti2($VMW);if(uszl.balance <= 0)return 'cleared';return 'other';}function hyLU(){let kh3u = 0,QlYF = 0,Q__ = 0,e9uN = 0;DYER.customers.forEach(z4ip =>{const aFU5 = zti2(z4ip);kh3u += aFU5.totalItems;QlYF += aFU5.totalPayments;const ZdPK = Iz$(z4ip);if(ZdPK === 'defaulter')Q__++;if(ZdPK === 'cleared')e9uN++;});return{totalItems:kh3u,totalPayments:QlYF,balance:kh3u - QlYF,defaulters:Q__,cleared:e9uN};}function q5RY(brKc){const QVq7 = brKc.lastSoldAt || brKc.createdAt;const RgB =(Date.now()- QVq7)/ o4t9;if(RgB >= sDC)return 'fail';if(brKc.qty <= R5pr)return 'restock';return 'ok';}function Gku(x_Wj){const m_m2 = new Date(x_Wj);m_m2.setHours(0,0,0,0);return m_m2.getTime();}function ItUd(tWcW){const Oz = new Date(tWcW);const GAn5 =(Oz.getDay()+ 6)% 7;Oz.setHours(0,0,0,0);Oz.setDate(Oz.getDate()- GAn5);return Oz.getTime();}function oO(eIY7){const vD = new Date(eIY7);vD.setHours(0,0,0,0);vD.setDate(1);return vD.getTime();}function nZ4c(wWOK){const K63a = new Date(wWOK);K63a.setHours(0,0,0,0);K63a.setMonth(0,1);return K63a.getTime();}function Mzep(HP4C){if(HP4C.type !== 'item')return 0;let p_E3 = HP4C.costAtSale;if(p_E3 == null && HP4C.productId){const MiFU = cKTL(HP4C.productId);if(MiFU)p_E3 = MiFU.costRate;}if(p_E3 == null)return 0;return(HP4C.rate - p_E3)* HP4C.qty;}function oY6G(Fl8u){let ia = 0;DYER.customers.forEach(TM =>{(TM.entries || []).forEach(a1J6 =>{if(a1J6.type === 'item' && a1J6.time >= Fl8u)ia += Mzep(a1J6);});});return ia;}function s9(){const AaYR = Date.now();return{today:oY6G(Gku(AaYR)),week:oY6G(ItUd(AaYR)),month:oY6G(oO(AaYR)),year:oY6G(nZ4c(AaYR)),lifetime:oY6G(0)};}function c_b(cD){const b7X = new Map();DYER.customers.forEach($2 =>{($2.entries || []).forEach(cm =>{if(cm.type === 'item'){const BBZQ = cD(cm.time);b7X.set(BBZQ,(b7X.get(BBZQ)|| 0)+ Mzep(cm));}});});return Array.from(b7X.entries()).sort((JiuY,N_EO)=> N_EO[0] - JiuY[0]).map(([yMMZ,sC4])=>({key:yMMZ,profit:sC4}));}function Xk(){return DYER.inventory.reduce((G8_D,tQf)=> G8_D +(tQf.qty * tQf.costRate),0);}function r7nF(){const D0V6 = DYER.capitalEntries.reduce(($KvX,j2)=> $KvX + j2.amount,0);const Uj05 = Xk();const DpSW = DYER.stockPurchases.reduce((Hf,pi4)=> Hf + pi4.amount,0);const ELy1 = DYER.expenses.reduce((NbD,RwoR)=> NbD + RwoR.amount,0);const eX2 = DYER.expenses.filter(fCDR => fCDR.category === 'personal').reduce((G_o1,xAQY)=> G_o1 + xAQY.amount,0);const wP = DYER.expenses.filter(o6Jw => o6Jw.category === 'business').reduce((Va2,R7Cs)=> Va2 + R7Cs.amount,0);const RrF = DYER.customers.reduce((Zlis,N4on)=> Zlis + zti2(N4on).totalPayments,0);const $V$ = D0V6 + RrF - DpSW - ELy1;return{totalCapital:D0V6,stockValue:Uj05,totalExpenses:ELy1,personalExpenses:eX2,businessExpenses:wP,totalReceived:RrF,cashOnHand:$V$};}function eS(tPx6){egF ={screen:'detail',customerId:tPx6};if(!uyMQ[tPx6])uyMQ[tPx6] = Date.now();ynNo();}function Q7A(){egF ={screen:'home',customerId:null};ynNo();}function PR77(){egF ={screen:'inventory',customerId:null};ynNo();}function T4XZ(){egF ={screen:'finance',customerId:null};ynNo();}function khLimit(){if(!t7e()){$Wx=null;egF={screen:'subscribe',customerId:null};ynNo();Nek('Free plan limit: '+fp+' customers. Upgrade to Pro for unlimited.');return true;}return false;}function dt(iR_m,L$Cq){if(!iR_m || !iR_m.trim())return;if(khLimit())return;const Pb ={id:kB(),name:Cy(iR_m),phone:(L$Cq || '').trim()|| null,hidden:false,photo:null,createdAt:Date.now(),entries:[]};DYER.customers.unshift(Pb);$O();$Wx = null;ynNo();eS(Pb.id);}function N4(LO31,LXl,kBR3){const H5kB = j3(LO31);if(!H5kB)return;if(LXl && LXl.trim())H5kB.name = Cy(LXl);H5kB.phone =(kBR3 || '').trim()|| null;$O();$Wx = null;ynNo();}function z5J(U3bN){const XZeo = j3(U3bN);if(!XZeo)return;XZeo.hidden = true;$O();Q7A();Nek('Account hidden');}function UT8G(nnEr){const ZM6v = j3(nnEr);if(!ZM6v)return;ZM6v.hidden = false;$O();ynNo();Nek('Account unlocked');}function mpH(HHnK,p4LT){const dah7 = j3(HHnK);if(!dah7)return;dah7.photo = p4LT;$O();ynNo();}function G5W(gY){const WA8P = gY.trim().toLowerCase();if(!WA8P)return null;return DYER.inventory.find(KZeJ => KZeJ.name.toLowerCase()=== WA8P)|| null;}

/* ---------- sell item (stock check only when the Stock & cash check is ON) ---------- */
function bF(WuM,TH,B5$,_sn4,$vq){const ix = j3(WuM);if(!ix)return;B5$ = parseFloat(B5$);_sn4 = parseFloat(_sn4);if(!TH.trim()|| isNaN(B5$)|| isNaN(_sn4)|| B5$ <= 0 || _sn4 < 0){Nek('Please fill item, quantity and rate correctly.');return;}if(!$vq){const KW = G5W(TH);if(KW)$vq = KW.id;}const p65 = $vq ? cKTL($vq):null;if(STRICT()){if(!p65){Nek(`"${TH.trim()}" is not in stock. Add it in Inventory first.`);return;}if(p65.qty <= 0){Nek(`${p65.name} is out of stock. Add more stock first.`);return;}if(B5$ > p65.qty){Nek(`Not enough stock! Only ${p65.qty} left — buy more stock first.`);return;}}const fFo = p65 ? p65.costRate:null;const hrB = uyMQ[WuM] || Date.now();ix.entries.unshift({id:kB(),type:'item',time:hrB,item:TH.trim(),qty:B5$,rate:_sn4,total:B5$ * _sn4,productId:p65 ? p65.id:null,costAtSale:fFo});if(p65){TFly(p65.id,B5$);p65.sellRate = _sn4;}$O();$Wx = null;ynNo();}

function cst0(miul,LYT){const D7 = j3(miul);if(!D7)return;LYT = parseFloat(LYT);if(isNaN(LYT)|| LYT <= 0)return;const gcv = uyMQ[miul] || Date.now();D7.entries.unshift({id:kB(),type:'payment',time:gcv,amount:LYT});$O();$Wx = null;ynNo();}function zLI2(HM,I5,KE3I){HM = HM.trim();if(!HM)return;I5 = parseFloat(I5)|| 0;KE3I = parseFloat(KE3I)|| 0;let aD = DYER.inventory.find(pF_x => pF_x.name.toLowerCase()=== HM.toLowerCase());if(aD){aD.qty += KE3I;if(I5)aD.costRate = I5;}else{DYER.inventory.unshift({id:kB(),name:Cy(HM),costRate:I5,sellRate:0,qty:KE3I,createdAt:Date.now(),lastSoldAt:null});}if(I5 > 0 && KE3I > 0){DYER.stockPurchases.unshift({id:kB(),product:Cy(HM),costRate:I5,qty:KE3I,amount:I5 * KE3I,time:Date.now()});}$O();}function TFly(MUFZ,C53i){const uMDW = cKTL(MUFZ);if(!uMDW)return;uMDW.qty = Math.max(0,uMDW.qty - C53i);uMDW.lastSoldAt = Date.now();$O();}function vZf7(AG,vq){AG = parseFloat(AG);if(isNaN(AG)|| AG <= 0)return;DYER.capitalEntries.unshift({id:kB(),amount:AG,note:(vq || '').trim(),time:Date.now()});$O();}function WoXS(O6g8,U1,l8P8){l8P8 = parseFloat(l8P8);U1 =(U1 || '').trim();if(isNaN(l8P8)|| l8P8 <= 0 || !U1)return;DYER.expenses.unshift({id:kB(),category:O6g8,label:U1,amount:l8P8,time:Date.now()});$O();}function a$(nC1){const NQ = [],Ivp ={};nC1.forEach(WM52 =>{const uEa = WM52.time;if(!Ivp[uEa]){Ivp[uEa] ={time:WM52.time,items:[]};NQ.push(Ivp[uEa]);}Ivp[uEa].items.push(WM52);});NQ.sort((Gok,Nc)=> Nc.time - Gok.time);return NQ;}function i2Tq(jj97){const zpre = jj97.trim().split(/\s+/);return zpre[0] ? zpre[0][0].toUpperCase():'?';}function OpwO(O7E){if(O7E.photo)return `<img src="${O7E.photo}">`;return i2Tq(O7E.name);}function Fs(I_CM){const h9 = document.createElement('div');h9.className = 'img-lightbox';h9.innerHTML = `
 <button class="lb-close" aria-label="Close">✕</button>
 <div class="lb-content">
 ${I_CM.photo ? `<img src="${I_CM.photo}" alt="${YoYV(I_CM.name)}">` : `<div class="lb-placeholder">${i2Tq(I_CM.name)}</div>`}
 <button class="lb-change-btn">📷 ${I_CM.photo ? 'Change Photo' : 'Add Photo'}</button>
 </div>
 `;h9.addEventListener('click',(rx)=>{if(rx.target === h9 || rx.target.classList.contains('lb-close'))h9.remove();});h9.querySelector('.lb-change-btn').onclick =()=>{const DM4m = document.createElement('input');DM4m.type = 'file';DM4m.accept = 'image/*';DM4m.onchange =(f$3)=>{const VL = f$3.target.files[0];if(!VL)return;const G7C = new FileReader();G7C.onload =()=>{mpH(I_CM.id,G7C.result);h9.remove();};G7C.readAsDataURL(VL);};DM4m.click();};document.body.appendChild(h9);}function t0(OO,iQ6A){const x3H = Array.from(OO.querySelectorAll('input, select'));x3H.forEach((koSR,s4T)=>{koSR.addEventListener('keydown',(WlrO)=>{if(WlrO.key === 'Enter'){WlrO.preventDefault();if(s4T < x3H.length - 1){x3H[s4T + 1].focus();x3H[s4T + 1].select && x3H[s4T + 1].select();}else{const nqdD = OO.querySelector(iQ6A);if(nqdD)nqdD.click();}}});});}function x5YE(){if(document.__keyboardNavInstalled)return;document.__keyboardNavInstalled = true;document.addEventListener('keydown',function(q_){const PYr = document.activeElement;const Ls6 =(PYr && PYr.tagName)|| '';const HT9 = Ls6 === 'INPUT' || Ls6 === 'TEXTAREA' || Ls6 === 'SELECT' ||(PYr && PYr.isContentEditable);if(HT9)return;const iQRq = Array.from(document.querySelectorAll('button:not([disabled]), [tabindex="0"], input:not([disabled]), select:not([disabled]), textarea:not([disabled])')).filter(og => og.offsetParent !== null);if(!iQRq.length)return;const Zh = iQRq.indexOf(PYr);if(q_.key === 'ArrowDown' || q_.key === 'ArrowRight'){q_.preventDefault();const l_cC = iQRq[Math.min(iQRq.length - 1,Zh + 1)];if(l_cC)l_cC.focus();return;}if(q_.key === 'ArrowUp' || q_.key === 'ArrowLeft'){q_.preventDefault();const IRs = iQRq[Math.max(0,Zh - 1)];if(IRs)IRs.focus();return;}if(q_.key === 'Enter' && PYr && typeof PYr.click === 'function'){q_.preventDefault();PYr.click();return;}if(q_.key === 'Backspace'){q_.preventDefault();hsTi();}});}

/* ---------- rent & bills ---------- */
function BL(){return DYER.bills=DYER.bills||[];}
function bdt(t){const a=t.split('-');return new Date(+a[0],+a[1]-1,+a[2]);}
function bstr(d){return d.getFullYear()+'-'+String(d.getMonth()+1).padStart(2,'0')+'-'+String(d.getDate()).padStart(2,'0');}
function bleft(b){const t=new Date();t.setHours(0,0,0,0);return Math.round((bdt(b.due)-t)/864e5);}
function bnext(b){const d=bdt(b.due),y=d.getFullYear(),m=d.getMonth()+1,dim=new Date(y,m+1,0).getDate();return bstr(new Date(y,m,Math.min(b.day||d.getDate(),dim)));}
function bstate(b){const n=bleft(b);return n<0?(-n)+(n===-1?' day overdue!':' days overdue!'):n===0?'Due today!':n===1?'Due tomorrow':n+(n===1?' day left':' days left');}
function bpay(id){const b=BL().find(x=>x.id===id);if(!b||!confirm('"'+b.name+'" (Rs '+UscD(b.amount)+') ada ho gaya?'))return;if(confirm('Finance ke Expense mein bhi likh dein?'))WoXS(b.cat||'business',b.name,b.amount);if(b.repeat)b.due=bnext(b);else DYER.bills=BL().filter(x=>x.id!==id);$O();ynNo();Nek('Paid ✔');}
function BA(){const w=document.createElement('div');BL().filter(b=>bleft(b)<=(b.remind||0)).sort((x,y)=>bleft(x)-bleft(y)).forEach(b=>{const n=bleft(b),e=document.createElement('div');e.className='defaulter-strip';e.style.cssText='display:flex;justify-content:space-between;align-items:center;gap:8px;margin-bottom:8px;'+(n>0?'background:var(--card2)!important;color:var(--ink)!important;border:1px solid var(--line);':'');e.innerHTML='<span>'+(n<=0?'🔴 ':'🟡 ')+YoYV(b.name)+' — Rs '+UscD(b.amount)+' • '+bstate(b)+'</span><button class="lock-btn" style="font-size:13px;font-weight:700">✔ Paid</button>';e.querySelector('button').onclick=()=>bpay(b.id);w.appendChild(e);});return w;}
function BS(){const w=document.createElement('div'),bl=BL().slice().sort((x,y)=>x.due.localeCompare(y.due)),tot=bl.reduce((a,b)=>a+b.amount,0);
w.innerHTML='<div class="section-title">Rent &amp; Bills (Monthly)</div><button class="add-btn secondary" id="bill-add" style="margin-bottom:10px;">+ Add Rent / Bill</button>'+(bl.length?'<div class="l-meta" style="margin-bottom:6px;">Total per month: Rs '+UscD(tot)+'</div>':'');
w.querySelector('#bill-add').onclick=()=>{$Wx={type:'bill'};ynNo();};
const l=document.createElement('div');l.className='ledger-list';if(!bl.length)l.innerHTML='<div class="no-results">No rent or bills added yet.</div>';
bl.forEach(b=>{const n=bleft(b),r=document.createElement('div');r.className='ledger-line';r.innerHTML='<div class="l-desc"><div class="l-name">'+YoYV(b.name)+'</div><div class="l-meta">'+GlZA(bdt(b.due).getTime())+' · <b style="color:'+(n<=0?'var(--ledger-red)':n<=b.remind?'var(--ink)':'var(--ink-soft)')+'">'+bstate(b)+'</b>'+(b.repeat?' · 🔁 monthly':'')+'</div></div><div class="l-amt">Rs '+UscD(b.amount)+'</div><div style="display:flex;gap:2px"><button class="lock-btn" data-a="pay" title="Paid">✔</button><button class="lock-btn" data-a="edit" title="Edit">✏️</button><button class="lock-btn" data-a="del" title="Delete">🗑️</button></div>';
r.querySelector('[data-a=pay]').onclick=()=>bpay(b.id);r.querySelector('[data-a=edit]').onclick=()=>{$Wx={type:'bill',billId:b.id};ynNo();};
r.querySelector('[data-a=del]').onclick=()=>{if(confirm('Delete "'+b.name+'"?')){DYER.bills=BL().filter(x=>x.id!==b.id);$O();ynNo();Nek('Deleted');}};l.appendChild(r);});
w.appendChild(l);return w;}
function BM(O,M){const e=BL().find(x=>x.id===$Wx.billId)||null,q=i=>M.querySelector(i);
M.innerHTML='<h3>'+(e?'Edit':'Add')+' Rent / Bill</h3><div class="field"><label>Name</label><input type="text" id="m-b-name" list="bill-names" placeholder="e.g. Shop Rent" value="'+(e?YoYV(e.name):'')+'"><datalist id="bill-names">'+['Shop Rent','Home Rent','Electricity Bill','Gas Bill','Water Bill','Internet Bill','Phone Bill','Committee','Salary'].map(x=>'<option value="'+x+'">').join('')+'</datalist></div><div class="field"><label>Amount</label><input type="number" id="m-b-amt" inputmode="decimal" value="'+(e?e.amount:'')+'"></div><div class="field"><label>Type</label><select id="m-b-cat"><option value="business">Business (shop)</option><option value="personal">Personal (home)</option></select></div><div class="field"><label>Due date</label><input type="date" id="m-b-date" value="'+(e?e.due:'')+'"></div><div class="field"><label>Remind me this many days before</label><input type="number" id="m-b-rem" inputmode="numeric" value="'+(e?e.remind:3)+'"></div><div class="field"><label><input type="checkbox" id="m-b-rep" '+(!e||e.repeat?'checked':'')+' style="width:auto"> Har mahine repeat</label></div><div class="modal-actions"><button class="cancel">Cancel</button><button class="confirm">Save</button></div>';
q('#m-b-cat').value=e?e.cat:'business';q('.cancel').onclick=()=>{$Wx=null;ynNo();};
q('.confirm').onclick=()=>{const nm=q('#m-b-name').value.trim(),am=parseFloat(q('#m-b-amt').value),du=q('#m-b-date').value;
if(!nm){Nek('Enter a name');return;}if(!(am>0)){Nek('Enter a valid amount');return;}if(!du){Nek('Select a due date');return;}
const o={id:e?e.id:kB(),name:Cy(nm),amount:am,cat:q('#m-b-cat').value,due:du,day:bdt(du).getDate(),remind:Math.max(0,parseInt(q('#m-b-rem').value)||0),repeat:q('#m-b-rep').checked};
if(e)Object.assign(e,o);else BL().push(o);$O();$Wx=null;ynNo();Nek('Saved');};
O.appendChild(M);return O;}


/* ---------- public ads (shared by all users, approved by admin first) ---------- */
let ADLIST = null,ADMINE = [],ADLOAD = false,ADERR = '',ADSTALE = false,ADVIEW = 'all';
const ADBAD = /(porn|xxx|xvideo|xnxx|xhamster|redtube|youporn|hentai|brazzers|nsfw|nude|sexcam|camgirl)/i;
(function(){const s = document.createElement('style');s.textContent = '.ad-actions button.on{background:var(--ledger-red);color:#fff;border-color:var(--ledger-red)}.ad-actions button:disabled{opacity:.45;cursor:default}.ad-status{display:inline-block;font-size:11px;font-weight:800;padding:3px 9px;border-radius:20px;align-self:flex-start}.ad-status.pending{background:rgba(184,134,11,.15);color:var(--amber)}.ad-status.approved{background:rgba(63,111,82,.15);color:var(--paid-green)}.ad-status.rejected{background:rgba(122,16,16,.12);color:#7a1010}.ad-err{background:rgba(122,16,16,.1);color:#7a1010;border-radius:10px;padding:10px 12px;font-size:12.5px;font-weight:600;margin-bottom:12px}.ad-mine-tag{font-size:11px;color:var(--ink-soft);font-weight:700}';document.head.appendChild(s);})();
function KS(){return(window.__ks && window.__ks.rpc)? window.__ks:null;}
function sortAds(){if(!ADLIST)return;ADLIST.sort((a,b)=>((b.likes - b.reports)-(a.likes - a.reports))||(a.reports - b.reports)||(new Date(b.created_at)- new Date(a.created_at)));}
function loadAds(){if(ADLOAD)return;const ks = KS();if(!ks || !navigator.onLine){ADERR = 'No internet connection. Connect to the internet and try again.';if(!ADLIST)ADLIST = [];return;}ADLOAD = true;Promise.all([ks.rpc('list_ads'),ks.rpc('my_ads')]).then(res =>{if(res[0].error)throw res[0].error;ADLIST = res[0].data || [];ADMINE = (res[1] && res[1].data)|| [];ADERR = '';sortAds();}).catch(e =>{ADERR = khNetMsg(e,'Could not load ads. Please try again.');if(!ADLIST)ADLIST = [];}).then(()=>{ADLOAD = false;if(egF.screen === 'ads' && !$Wx)ynNo();});}
function adParse(a){const d=String(a.detail||'');const m=/\s*\[\[img:(\S+?)\]\]/.exec(d);const w=/\s*\[\[wa:(\d{10,15})\]\]/.exec(d);return{text:d.replace(/\s*\[\[img:\S+?\]\]/,'').replace(/\s*\[\[wa:\d+\]\]/,'').trim(),img:m?m[1]:'',wa:w?w[1]:''};}
function waNum(v){let d=String(v||'').replace(/\D/g,'');if(d.indexOf('0092')===0)d=d.slice(2);else if(d.charAt(0)==='0')d='92'+d.slice(1);return d;}
function adWA(a){const ap=adParse(a);if(!ap.wa)return;window.open('https://wa.me/'+ap.wa+'?text='+encodeURIComponent('Hi, I saw your ad "'+(a.title||'')+'" on My Khata.'),'_blank','noopener');}
/* DP = ad ki apni image ([[img:...]]). Image na ho ya load na ho to heading ka pehla letter dikhta hai */
function adDP(a,imgUrl){var l=YoYV((a.title||hostOf(a.link||'')||'?').trim().charAt(0).toUpperCase());var src=imgUrl||adParse(a).img||'';if(String(src).indexOf('https://')!==0)src='';return '<div class="ad-dp"><span class="ad-dp-l">'+l+'</span>'+(src?'<img src="'+String(src).replace(/"/g,'%22')+'" alt="" loading="lazy" referrerpolicy="no-referrer" onerror="this.remove()">':'')+'</div>';}
function khUN(e){e=String(e||'');var i=e.indexOf('@');return i>0?e.slice(0,i):e;}
function adImg(u){return u?'<img class="ad-img" src="'+String(u).replace(/"/g,'%22')+'" alt="" loading="lazy" referrerpolicy="no-referrer" onerror="this.remove()">':'';}
function hostOf(u){try{return new URL(u).hostname;}catch(e){return u;}}
function voteAd(a,kind){if(a._b)return;const ks = KS();if(!ks || !navigator.onLine){Nek('No internet connection');return;}if(kind === 'report' && !a.my_report && !confirm('Report this ad? An ad with 30 reports is removed.'))return;a._b = 1;ks.rpc('vote_ad',{p_ad:a.id,p_kind:kind}).then(r =>{a._b = 0;if(r.error){Nek(khNetMsg(r.error));return;}const d = r.data || {};if(d.deleted){ADLIST = ADLIST.filter(x => x.id !== a.id);Nek('Ad removed');}else{a.likes = d.likes;a.reports = d.reports;a.my_like = d.my_like;a.my_report = d.my_report;sortAds();Nek(kind === 'like' ? (d.my_like ? 'Liked' : 'Like removed') : (d.my_report ? 'Reported — thank you' : 'Report removed'));}if(egF.screen === 'ads' && !$Wx)ynNo();}).catch(()=>{a._b = 0;Nek('No internet connection');});}
let ADQ = '',ADSORT = 'top';
function adAgo(t){const ms = new Date(t).getTime();if(!isFinite(ms))return '';const m = Math.max(0,(Date.now() - ms) / 60000);if(m < 60)return Math.max(1,Math.floor(m)) + 'm ago';if(m < 1440)return Math.floor(m / 60) + 'h ago';if(m < 43200)return Math.floor(m / 1440) + 'd ago';return GlZA(ms);}
function adShare(a){const u = NL(a.link);if(!u)return;if(navigator.share){navigator.share({title:a.title || 'Ad',text:a.title || '',url:u}).catch(()=>{});return;}if(navigator.clipboard && navigator.clipboard.writeText){navigator.clipboard.writeText(u).then(()=>Nek('Link copied'),()=>Nek(u));}else Nek(u);}
function adCard(a){const c = document.createElement('div');c.className = 'ad-card';const isMine = ADVIEW === 'mine';const mine = isMine || a.mine;const ap = adParse(a);
const stat = isMine ? `<span class="ad-status ${YoYV(a.status)}">${a.status === 'pending' ? '⏳ Waiting for admin review' : a.status === 'approved' ? '✅ Approved (public)' : '⛔ Rejected'}</span>` : '';
const when = a.created_at ? ' · ' + adAgo(a.created_at) : '';
const vote = isMine
? `<span class="ad-mine-tag" style="align-self:center">👍 ${a.likes || 0} · 🚩 ${a.reports || 0}</span><button class="ad-del" title="Delete">🗑️</button>`
: `<button class="ad-like ${a.my_like ? 'on' : ''}" ${mine ? 'disabled' : ''} title="${mine ? 'You cannot vote on your own ad' : (a.my_like ? 'Remove like' : 'Like this ad')}">👍 <b>${a.likes || 0}</b><span class="vl">${a.my_like ? 'Liked' : 'Like'}</span></button><button class="ad-rep ${a.my_report ? 'on' : ''}" ${mine ? 'disabled' : ''} title="${mine ? 'You cannot report your own ad' : (a.my_report ? 'Remove report' : 'Report this ad')}">🚩 <b>${a.reports || 0}</b><span class="vl">${a.my_report ? 'Reported' : 'Report'}</span></button>`;
c.innerHTML = `${stat}<div class="ad-top">${adDP(a)}<div class="ad-meta"><div class="ad-head">${YoYV(a.title || '')}</div><div class="ad-link">🔗 ${YoYV(hostOf(a.link || ''))}${YoYV(when)}</div></div></div>${ap.text ? `<div class="ad-detail">${YoYV(ap.text)}</div>` : ''}${a.comment ? `<div class="ad-comment">💬 ${YoYV(a.comment)}</div>` : ''}<div class="ad-actions"><button class="ad-open">Open Link</button>${ap.wa ? `<button class="ad-wa" title="Chat on WhatsApp" aria-label="WhatsApp">${khWAimg(20)}</button>` : ''}${vote}<button class="ad-share" title="Share">${khIC('share-2',16)}</button></div>${a.mine && !isMine ? '<div class="ad-mine-tag">Your ad</div>' : ''}`;
c.onclick = ()=> OPENL(a.link);
c.querySelector('.ad-open').onclick = (ev)=>{ev.stopPropagation();OPENL(a.link);};
c.querySelector('.ad-share').onclick = (ev)=>{ev.stopPropagation();adShare(a);};
const wb = c.querySelector('.ad-wa');if(wb)wb.onclick = (ev)=>{ev.stopPropagation();adWA(a);};
const dl = c.querySelector('.ad-del');if(dl)dl.onclick = (ev)=>{ev.stopPropagation();if(!confirm('Delete this ad?'))return;const ks = KS();if(!ks)return;ks.rpc('delete_my_ad',{p_id:a.id}).then(r =>{if(r.error){Nek(khNetMsg(r.error));return;}ADSTALE = true;ynNo();Nek('Ad deleted');});};
const lk = c.querySelector('.ad-like');if(lk)lk.onclick = (ev)=>{ev.stopPropagation();voteAd(a,'like');};
const rp = c.querySelector('.ad-rep');if(rp)rp.onclick = (ev)=>{ev.stopPropagation();voteAd(a,'report');};
return c;}
function AdsScreen(){const w = document.createElement('div');if(ADLIST === null || ADSTALE){ADSTALE = false;loadAds();}
const top = document.createElement('div');top.className = 'ad-top-row';
top.innerHTML = '<button class="add-btn blue" id="ad-new" style="margin:0;flex:1">+ Submit Your Ad</button><button class="icon-btn ad-ref" id="ad-ref" aria-label="Refresh ads" data-tip="Refresh">' + khIC('refresh',20) + '</button>';
top.querySelector('#ad-new').onclick = ()=>{$Wx = {type:'ad'};ynNo();};
top.querySelector('#ad-ref').onclick = ()=>{ADSTALE = true;ynNo();Nek('Refreshing…');};
w.appendChild(top);
const note = document.createElement('div');note.className = 'strict-hint';note.style.margin = '0 0 10px';note.textContent = 'Every ad is checked by the admin before others can see it.';w.appendChild(note);
const f = document.createElement('div');f.className = 'filter-row';
f.innerHTML = `<button class="chip-toggle ${ADVIEW === 'all' ? 'on' : ''}" data-v="all">🌐 All Ads</button><button class="chip-toggle ${ADVIEW === 'mine' ? 'on' : ''}" data-v="mine">👤 My Ads${ADMINE.length ? ' (' + ADMINE.length + ')' : ''}</button>${ADVIEW === 'all' ? `<span class="ad-sort"><button class="chip-toggle ${ADSORT === 'top' ? 'on' : ''}" data-s="top">Top</button><button class="chip-toggle ${ADSORT === 'new' ? 'on' : ''}" data-s="new">Newest</button></span>` : ''}`;
f.querySelectorAll('[data-v]').forEach(c =>{c.onclick = ()=>{ADVIEW = c.getAttribute('data-v');ynNo();};});
f.querySelectorAll('[data-s]').forEach(c =>{c.onclick = ()=>{ADSORT = c.getAttribute('data-s');ynNo();};});
w.appendChild(f);
if(ADERR){const e = document.createElement('div');e.className = 'ad-err';e.innerHTML = '<span></span> <button class="link-btn" id="ad-retry">Try again</button>';e.firstChild.textContent = ADERR;e.querySelector('#ad-retry').onclick = ()=>{ADSTALE = true;ynNo();};w.appendChild(e);}
if(ADLIST === null){const sk = document.createElement('div');sk.className = 'cards-grid';sk.innerHTML = '<div class="ad-skel"></div><div class="ad-skel"></div>';w.appendChild(sk);return w;}
const sw = document.createElement('div');sw.className = 'search-wrap';sw.innerHTML = `<input type="text" id="ad-search" placeholder="Search ads…" value="${YoYV(ADQ).replace(/"/g,'&quot;')}"><span class="search-icon">🔍</span>`;w.appendChild(sw);
const grid = document.createElement('div');w.appendChild(grid);
function draw(){grid.innerHTML = '';let list = (ADVIEW === 'mine' ? ADMINE : ADLIST).slice();const q = ADQ.trim().toLowerCase();
if(q)list = list.filter(a => ((a.title || '') + ' ' + adParse(a).text + ' ' + (a.comment || '') + ' ' + hostOf(a.link || '')).toLowerCase().includes(q));
if(ADVIEW === 'all' && ADSORT === 'new')list.sort((a,b)=> new Date(b.created_at) - new Date(a.created_at));
if(!list.length){grid.className = '';grid.innerHTML = q ? '<div class="no-results">No ads match your search.</div>' : (ADVIEW === 'mine' ? '<div class="empty-state"><div class="big">📢</div><div>You have not submitted any ads yet.<br>Tap “Submit Your Ad” above.</div></div>' : '<div class="empty-state"><div class="big">📢</div><div>No ads yet.<br>Be the first to submit one.</div></div>');khIZ(grid);return;}
grid.className = 'cards-grid';list.forEach(a => grid.appendChild(adCard(a)));khIZ(grid);}
sw.querySelector('input').oninput = (e)=>{ADQ = e.target.value;draw();};draw();return w;}
function AM(O,M){M.innerHTML = `
 <h3>Submit Ad</h3>
 <div style="font-size:12px;color:var(--ink-soft);line-height:1.5;margin-bottom:12px;">Your ad is shown to everyone only after the admin approves it. Adult / porn content is rejected.</div>
 <div class="ad-pv" id="m-ad-pv"></div>
 <div class="field"><label>Heading</label><input type="text" id="m-ad-title" maxlength="60" placeholder="e.g. Ahmed Store Online"><div class="char-count" id="m-ad-tc">0 / 60</div></div>
 <div class="field"><label>Details (optional)</label><input type="text" id="m-ad-detail" maxlength="160" placeholder="e.g. Fresh groceries, home delivery"><div class="char-count" id="m-ad-dc">0 / 160</div></div>
 <div class="field"><label>Website / App Link</label><input type="text" id="m-ad-link" inputmode="url" placeholder="e.g. mywebsite.com"></div>
 <div class="field"><label>WhatsApp number (optional)</label><input type="tel" id="m-ad-wa" inputmode="tel" maxlength="15" placeholder="e.g. 03001234567"><div class="strict-hint" style="margin-top:3px">If you add it, a WhatsApp button shows on your ad so customers can chat with you.</div></div>
 <div class="field"><label>Comment (max 50 characters)</label><input type="text" id="m-ad-comment" maxlength="50" placeholder="Short comment"><div class="char-count" id="m-ad-count">0 / 50</div></div>
 <div class="modal-actions"><button class="cancel">Cancel</button><button class="confirm">Submit</button></div>
 `;const q = s => M.querySelector(s);
function pv(){const t = q('#m-ad-title').value.trim(),d = q('#m-ad-detail').value.trim(),l = NL(q('#m-ad-link').value),i = '',c = q('#m-ad-comment').value.trim();
q('#m-ad-tc').textContent = q('#m-ad-title').value.length + ' / 60';q('#m-ad-dc').textContent = q('#m-ad-detail').value.length + ' / 160';q('#m-ad-count').textContent = q('#m-ad-comment').value.length + ' / 50';
q('#m-ad-pv').innerHTML = '<div class="ad-card" style="cursor:default"><div class="ad-top">' + adDP({title:t,link:l},i) + '<div class="ad-meta"><div class="ad-head">' + (YoYV(t) || 'Your heading') + '</div><div class="ad-link">🔗 ' + (YoYV(l ? hostOf(l) : '') || 'yourwebsite.com') + '</div></div></div>' + (d ? '<div class="ad-detail">' + YoYV(d) + '</div>' : '') + (c ? '<div class="ad-comment">💬 ' + YoYV(c) + '</div>' : '') + '</div><div class="ad-pv-l">Preview</div>';khIZ(q('#m-ad-pv'));}
['#m-ad-title','#m-ad-detail','#m-ad-link','#m-ad-comment'].forEach(id => q(id).addEventListener('input',pv));pv();
q('.cancel').onclick = ()=>{$Wx = null;ynNo();};const cf = q('.confirm');
cf.onclick = ()=>{const title = q('#m-ad-title').value.trim(),detail = q('#m-ad-detail').value.trim(),link = NL(q('#m-ad-link').value),imgRaw = '',img = '',comment = q('#m-ad-comment').value.trim().slice(0,50);
if(!title){Nek('Enter a heading');return;}if(!link){Nek('Enter a valid website / app link');return;}
const waRaw = q('#m-ad-wa').value.trim(),wa = waRaw ? waNum(waRaw) : '';if(waRaw && !/^\d{10,15}$/.test(wa)){Nek('Enter a valid WhatsApp number (e.g. 03001234567)');return;}
if(imgRaw && (!img || img.indexOf('https://') !== 0)){Nek('Image link must start with https://');return;}
if(ADBAD.test(title + ' ' + detail + ' ' + link + ' ' + comment + ' ' + img)){Nek('This content is not allowed');return;}
const ks = KS();if(!ks || !navigator.onLine){Nek('No internet connection');return;}cf.disabled = true;
ks.rpc('submit_ad',{p_title:title,p_detail:detail + (img ? ' [[img:' + img + ']]' : '') + (wa ? ' [[wa:' + wa + ']]' : ''),p_link:link,p_comment:comment}).then(r =>{cf.disabled = false;if(r.error){Nek(khNetMsg(r.error));return;}const st = r.data && r.data.status;$Wx = null;ADSTALE = true;ADVIEW = 'mine';ynNo();Nek(st === 'rejected' ? 'This ad was rejected (not allowed)':'Submitted — public after admin approval');}).catch(()=>{cf.disabled = false;Nek('No internet connection');});};
phoneOnly(q('#m-ad-wa'));t0(M,'.confirm');O.appendChild(M);setTimeout(()=> q('#m-ad-title')?.focus(),50);return O;}


function ynNo0(){efk4.innerHTML = '';if(egF.screen === 'setup'){efk4.appendChild(_x$());return;}if(egF.screen === 'biometricSetup'){efk4.appendChild(ysU());return;}if(egF.screen === 'lock'){efk4.appendChild(Bb());return;}if(!KV4m){egF ={screen:'lock',customerId:null};efk4.appendChild(Bb());return;}efk4.appendChild(J_());if(egF.screen==='home'||egF.screen==='finance')efk4.appendChild(BA());if(egF.screen !== 'settings')efk4.appendChild(v3());if(egF.screen === 'home')efk4.appendChild(ue2());else if(egF.screen === 'settings')efk4.appendChild(khSet());else if(egF.screen === 'detail')efk4.appendChild(sRC());else if(egF.screen === 'inventory')efk4.appendChild(qLOA());else if(egF.screen === 'profit')efk4.appendChild(T32());else if(egF.screen === 'finance')efk4.appendChild(oMBr());else if(egF.screen === 'ads')efk4.appendChild(AdsScreen());else if(egF.screen === 'subscribe')efk4.appendChild(Jqim());if($Wx)efk4.appendChild(smh$());}function Fd(){if(!DYER.shop)return 'My Khata';return DYER.shop.shopName ||(DYER.shop.ownerName + "'s Khata");}function J_(){const h = document.createElement('header');h.className = 'top';const paid = dNW();
h.innerHTML = '<div class="top-l">' + '<img class="hdr-av" alt=""' + (khPhoto(DYER.shop||{}) ? '' : ' data-dp="1"') + ' src="' + (khPhoto(DYER.shop||{}) || khLogoURI()) + '">' + '<div><div class="name-row"><h1>' + YoYV(Fd()) + '</h1><button class="plan-badge ' + (paid ? 'pro' : 'free') + '" id="sub-status-btn" data-tip="' + (paid ? 'My subscription' : 'Upgrade to Pro') + '">' + (paid ? khIC('crown', 14) + 'Pro' : 'Free') + '</button></div><div class="sub">Customer credit ledger, stock &amp; finance</div></div></div><div class="icons"><button class="sync-dot" id="sync-dot" type="button" aria-label="Data status"><i></i></button><button class="icon-btn" id="settings-btn" data-tip="Settings">' + khIC('settings', 20) + '</button></div>';
h.querySelector('#sub-status-btn').onclick = khToSub;h.querySelector('#settings-btn').onclick = khOpen;{const sd=h.querySelector('#sync-dot');if(sd){sd.onclick=khDotToggle;khDot(h);}}return h;}function v3(){const LuE = document.createElement('div');LuE.className = 'tabs';const _nr = egF.screen === 'home' || egF.screen === 'detail';LuE.innerHTML = `
 <button class="tab-btn ${_nr ? 'active' : ''}" id="tab-cust">Accounts</button>
 <button class="tab-btn ${egF.screen === 'inventory' ? 'active' : ''}" id="tab-inv">Inventory</button>
 <button class="tab-btn ${egF.screen === 'profit' ? 'active' : ''}" id="tab-profit">Profit</button>
 <button class="tab-btn ${egF.screen === 'finance' ? 'active' : ''}" id="tab-fin">Finance</button>
 <button class="tab-btn ${egF.screen === 'ads' ? 'active' : ''}" id="tab-ads">Ads</button>
 `;LuE.querySelector('#tab-cust').onclick = Q7A;LuE.querySelector('#tab-inv').onclick = PR77;LuE.querySelector('#tab-profit').onclick =()=>{egF ={screen:'profit',customerId:null};ynNo();};LuE.querySelector('#tab-fin').onclick = T4XZ;LuE.querySelector('#tab-ads').onclick =()=>{egF ={screen:'ads',customerId:null};ADSTALE = true;ynNo();};return LuE;}function _x$(){const bJbG = document.createElement('div');bJbG.className = 'auth-wrap';bJbG.innerHTML = `
 <div class="auth-card">
 <h1>📒 Welcome</h1>
 <div class="auth-sub">Enter your shop name to get started.</div>
 <div class="field">
 <label>Shop Name</label>
 <input type="text" id="su-shopname" placeholder="e.g. Ahmed General Store" autofocus>
 </div>
 <button class="auth-btn" id="su-go">Continue</button>
 </div>
 `;t0(bJbG,'#su-go');bJbG.querySelector('#su-go').onclick = ()=>{const jta = bJbG.querySelector('#su-shopname').value.trim();if(!jta){Nek('Please enter your shop name');return;}const un = Cy(khUN((window.__ks && window.__ks.email)|| '')) || 'My Khata';DYER.shop ={ownerName:un,shopName:jta,paymentMethod:null,paymentAccount:null};$O();KV4m = true;egF ={screen:'home',customerId:null};ynNo();};return bJbG;}function ysU(){const $x = YP4();const vUCi = document.createElement('div');vUCi.className = 'auth-wrap';if($x){vUCi.innerHTML = `
 <div class="auth-card">
 <h1>🖐️ Fingerprint Lock</h1>
 <div class="auth-sub">Your Khata is not protected yet. Set up your phone's biometric lock.</div>
 <button class="auth-btn" id="bio-enable">Enable Fingerprint</button>
 </div>
 `;vUCi.querySelector('#bio-enable').onclick = async()=>{const B_T_ = await fxv();if(B_T_){$O();KV4m = true;egF ={screen:'home',customerId:null};ynNo();}};}else{vUCi.innerHTML = `
 <div class="auth-card">
 <h1>🔑 Set a PIN</h1>
 <div class="auth-sub">Your Khata is not protected yet. Create a PIN (4-8 digits).</div>
 <div class="field">
 <label>Create PIN</label>
 <input type="password" id="pin-new" inputmode="numeric" maxlength="8" placeholder="••••" autofocus>
 </div>
 <div class="field">
 <label>Confirm PIN</label>
 <input type="password" id="pin-new2" inputmode="numeric" maxlength="8" placeholder="••••">
 </div>
 <button class="auth-btn" id="pin-save">Save PIN</button>
 </div>
 `;const faM = async()=>{const lazk = vUCi.querySelector('#pin-new').value.trim();const F5S = vUCi.querySelector('#pin-new2').value.trim();if(!ZTki(lazk)){Nek('PIN must be 4 to 8 digits');return;}if(lazk !== F5S){Nek('PINs do not match');return;}await _SoC(lazk);KV4m = true;egF ={screen:'home',customerId:null};ynNo();};vUCi.querySelector('#pin-save').onclick = faM;vUCi.querySelector('#pin-new2').addEventListener('keydown',fUbQ =>{if(fUbQ.key === 'Enter')faM();});}return vUCi;}function Bb(){const vETG = YP4();const _Q = document.createElement('div');_Q.className = 'auth-wrap';if(vETG){_Q.innerHTML = `
 <div class="auth-card">
 <div style="text-align:center;font-size:52px;margin-bottom:8px;">🔐</div>
 <h1>My Khata Locked</h1>
 <div class="auth-sub">Use your fingerprint to continue.</div>
 <button class="auth-btn" id="bio-unlock">🖐️ Unlock with Fingerprint</button>
 </div>
 `;_Q.querySelector('#bio-unlock').onclick = GBKT;}else{_Q.innerHTML = `
 <div class="auth-card">
 <div style="text-align:center;font-size:52px;margin-bottom:8px;">🔐</div>
 <h1>My Khata Locked</h1>
 <div class="auth-sub">Enter your PIN to continue.</div>
 <div class="field">
 <input type="password" id="pin-input" inputmode="numeric" maxlength="8" placeholder="••••" autofocus style="text-align:center;letter-spacing:6px;">
 </div>
 <button class="auth-btn" id="pin-unlock">🔑 Unlock</button>
 </div>
 `;const QmXg = _Q.querySelector('#pin-input');const $VEc = async()=>{if(await kgzP(QmXg.value.trim())){KV4m = true;egF ={screen:'home',customerId:null};ynNo();}else{QmXg.value = '';Nek('Wrong PIN');}};_Q.querySelector('#pin-unlock').onclick = $VEc;QmXg.addEventListener('keydown',Aa4 =>{if(Aa4.key === 'Enter')$VEc();});setTimeout(()=> QmXg.focus(),50);}return _Q;}

/* ---------- subscription screen (no code entry; WhatsApp only) ---------- */
let Swf = 'monthly';
function khPayAsk(){const M0=document.createElement('div');let m='jazzcash';M0.innerHTML='<button class="back-btn" id="pa-back">&larr; Back</button><h2 style="margin:0 0 6px;">Payment account</h2><div class="strict-hint" style="margin-bottom:14px">We ask this only once, so we can match your payment. You can change it later from Settings.</div><div class="paymethod-row"><button type="button" class="paymethod-opt" data-m="jazzcash">JazzCash</button><button type="button" class="paymethod-opt" data-m="easypaisa">EasyPaisa</button></div><div class="field"><label id="pa-l"></label><input type="text" id="pa-n" inputmode="tel" placeholder="e.g. 03001234567"></div><button class="add-btn" id="pa-go">Continue</button>';
const paint=()=>{M0.querySelectorAll('.paymethod-opt').forEach(x=>x.classList.toggle('on',x.dataset.m===m));M0.querySelector('#pa-l').textContent='Your '+(m==='jazzcash'?'JazzCash':'EasyPaisa')+' number';};paint();M0.querySelectorAll('.paymethod-opt').forEach(x=>x.onclick=()=>{m=x.dataset.m;paint();});M0.querySelector('#pa-back').onclick=Q7A;
const go=()=>{const n=M0.querySelector('#pa-n').value.trim();if(!khPayOK(n)){Nek('Enter a valid mobile number (e.g. 03001234567)');return;}DYER.shop.paymentMethod=m;DYER.shop.paymentAccount=n;$O();ynNo();};M0.querySelector('#pa-go').onclick=go;M0.querySelector('#pa-n').addEventListener('keydown',e=>{if(e.key==='Enter')go();});return M0;}
function Jqim(){const M0 = document.createElement('div');const hAHv = dNW();const pgt = DYER.customers.length;M0.innerHTML = `
 <button class="back-btn" id="sub-back">&larr; Back</button>
 <div class="sub-head"><h2 style="margin:0">Subscription</h2><button type="button" class="wa-img-btn${khWaPop?' kh-pop':''}" id="sub-wa-ic"${(DYER.shop&&DYER.shop.paymentAccount)?'':' style="display:none"'} data-tip="Send payment proof on WhatsApp">${khWAimg(30)}</button></div>
 <div class="sub-badge ${hAHv ? 'active' : 'inactive'}">
 ${hAHv ? '✅ Active — ' + (DYER.subscription.plan === 'yearly' ? 'Yearly' : 'Monthly') + ' plan, valid till ' + GlZA(DYER.subscription.expiresAt)
 : '⚠️ Free plan — ' + pgt + ' / ' + fp + ' customers used'}
 </div>
 ${hAHv ? '' : `
 <div class="set-note">Free: up to ${fp} customers. Pro: unlimited customers. Every setting is free for everyone.</div>
 <div class="plan-row">
 <div class="plan-card ${Swf === 'monthly' ? 'selected' : ''}" id="plan-monthly">
 <div class="plan-name">Monthly</div>
 <div class="plan-price">Rs ${_puA.monthly}</div>
 <div class="plan-note">per month</div>
 </div>
 <div class="plan-card ${Swf === 'yearly' ? 'selected' : ''}" id="plan-yearly">
 <div class="plan-name">Yearly</div>
 <div class="plan-price">Rs ${_puA.yearly}</div>
 <div class="plan-note">per year — best value</div>
 </div>
 </div>
 `}
 ${(DYER.shop && !DYER.shop.paymentAccount) ? `<div class="pay-box kh-pa" id="pa-box"><h3 style="margin:0 0 6px">Payment account</h3><div class="strict-hint" style="margin-bottom:12px">We ask this only once, so we can match your payment. You can change it later from Settings. Tap Continue to unlock the WhatsApp button.</div><div class="paymethod-row"><button type="button" class="paymethod-opt" data-m="jazzcash">JazzCash</button><button type="button" class="paymethod-opt" data-m="easypaisa">EasyPaisa</button></div><div class="field"><label id="pa-l"></label><input type="text" id="pa-n" inputmode="tel" placeholder="e.g. 03001234567"></div><button class="add-btn" id="pa-go" style="margin-bottom:0">Continue</button></div>` : ''}
 ${hAHv ? '' : `
 <div class="pay-box" style="text-align:center">
 <div class="qr-wrap"><img class="qr-img" alt="Payment QR code" width="180" height="180"></div>
 <div style="font-weight:800;margin-top:10px">Scan to pay <b>Rs ${_puA[Swf]}</b> (${Swf === 'yearly' ? 'Yearly' : 'Monthly'})</div>
 ${(DYER.shop && DYER.shop.paymentAccount) ? '<div style="font-size:12px;color:var(--ink-soft);margin-top:6px">Paying from ' + (DYER.shop.paymentMethod === 'easypaisa' ? 'EasyPaisa' : 'JazzCash') + ' ' + YoYV(DYER.shop.paymentAccount) + ' · <button type="button" class="link-btn" id="sub-chg">Change</button></div>' : ''}
 <div style="font-size:12px;color:var(--ink-soft);margin-top:4px;line-height:1.5">${(DYER.shop && DYER.shop.paymentAccount) ? 'After paying, tap the WhatsApp icon at the top right and send your payment proof. Your plan will be activated for you; reopen the app afterwards to see it.' : 'First fill the form above and tap Continue. The WhatsApp button will then appear, so you can send your payment proof after paying.'}</div>
 </div>
 
 `}
 `;M0.querySelector('#sub-back').onclick = Q7A;M0.querySelector('#sub-wa-ic').onclick = khWA;{const ch = M0.querySelector('#sub-chg');if(ch)ch.onclick =()=>{khStk = ['root','payacc'];egF ={screen:'settings',customerId:null};ynNo();};}{const qi = M0.querySelector('.qr-img');if(qi){qi.onerror =()=>{qi.onerror = null;qi.src = khQR();};qi.src = 'qr.png';}}{const pb=M0.querySelector('#pa-box');if(pb){let pm='jazzcash';const pt=()=>{pb.querySelectorAll('.paymethod-opt').forEach(x=>x.classList.toggle('on',x.dataset.m===pm));pb.querySelector('#pa-l').textContent='Your '+(pm==='jazzcash'?'JazzCash':'EasyPaisa')+' number';};pt();pb.querySelectorAll('.paymethod-opt').forEach(x=>x.onclick=()=>{pm=x.dataset.m;pt();});const pgo=()=>{const n=pb.querySelector('#pa-n').value.trim();if(!khPayOK(n)){khShake(pb.querySelector('.field'));Nek('Enter a valid mobile number (e.g. 03001234567)');pb.querySelector('#pa-n').focus();return;}if(pb.classList.contains('kh-out'))return;DYER.shop.paymentMethod=pm;DYER.shop.paymentAccount=n;$O();khWaPop=true;pb.classList.add('kh-out');setTimeout(()=>{ynNo();khWaPop=false;},440);};pb.querySelector('#pa-go').onclick=pgo;pb.querySelector('#pa-n').addEventListener('keydown',e=>{if(e.key==='Enter')pgo();});}}
if(!hAHv){const rBNI = M0.querySelector('#plan-monthly');const oy = M0.querySelector('#plan-yearly');rBNI.onclick =()=>{Swf = 'monthly';ynNo();};oy.onclick =()=>{Swf = 'yearly';ynNo();};}return M0;}

function T32(){const tL = document.createElement('div');const y2O$ = s9();const Km$x = document.createElement('div');Km$x.className = 'cards-grid';Km$x.innerHTML = `
 <div class="gt-card ${y2O$.lifetime >= 0 ? 'green' : 'red'}" style="min-width:auto;grid-column:1/-1;"><div class="label">Total Lifetime Profit</div><div class="value">Rs ${UscD(y2O$.lifetime)}</div></div>
 <div class="gt-card ${y2O$.today >= 0 ? 'green' : 'red'}" style="min-width:auto;"><div class="label">Today's Profit</div><div class="value">Rs ${UscD(y2O$.today)}</div></div>
 <div class="gt-card ${y2O$.week >= 0 ? 'green' : 'red'}" style="min-width:auto;"><div class="label">This Week's Profit</div><div class="value">Rs ${UscD(y2O$.week)}</div></div>
 <div class="gt-card ${y2O$.month >= 0 ? 'green' : 'red'}" style="min-width:auto;"><div class="label">This Month's Profit</div><div class="value">Rs ${UscD(y2O$.month)}</div></div>
 <div class="gt-card ${y2O$.year >= 0 ? 'green' : 'red'}" style="min-width:auto;"><div class="label">This Year's Profit</div><div class="value">Rs ${UscD(y2O$.year)}</div></div>
 `;tL.appendChild(Km$x);const MnC5 = document.createElement('div');MnC5.className = 'empty-state';MnC5.style.padding = '20px 10px';MnC5.innerHTML = `<div style="font-size:13px;">Profit = selling price − stock cost price, for items linked to Inventory.</div>`;tL.appendChild(MnC5);function MCXJ(me,wK,KevE){const ysNW = document.createElement('div');ysNW.className = 'section-title';ysNW.textContent = me;tL.appendChild(ysNW);const _wE = document.createElement('div');_wE.className = 'ledger-list';const Qf = c_b(wK);if(Qf.length === 0){_wE.innerHTML = `<div class="no-results">No data yet.</div>`;}else{Qf.forEach(U5Y_ =>{const Q$hA = document.createElement('div');Q$hA.className = 'ledger-line';Q$hA.innerHTML = `
 <div class="l-desc"><div class="l-name">${KevE(U5Y_.key)}</div></div>
 <div class="l-amt" style="color:${U5Y_.profit >= 0 ? 'var(--paid-green)' : 'var(--ledger-red)'};">Rs ${UscD(U5Y_.profit)}</div>
 `;_wE.appendChild(Q$hA);});}tL.appendChild(_wE);}MCXJ('Daily Profit History',jqtx => Gku(jqtx),qgX => GlZA(qgX));MCXJ('Weekly Profit History',XrVb => ItUd(XrVb),qH =>{const euAM = qH + 6 * 86400000;return GlZA(qH)+ ' – ' + GlZA(euAM);});MCXJ('Monthly Profit History',EwJ4 => oO(EwJ4),QSWe => new Date(QSWe).toLocaleDateString('en-GB',{month:'long',year:'numeric'}));MCXJ('Yearly Profit History',A9C3 => nZ4c(A9C3),st => String(new Date(st).getFullYear()));return tL;}function oMBr(){const CNUF = document.createElement('div');const g2 = r7nF();const xiIe = document.createElement('div');xiIe.className = 'grand-totals';xiIe.innerHTML = `
 <div class="gt-card ${g2.cashOnHand >= 0 ? 'green' : 'red'}"><div class="label">Cash on Hand</div><div class="value">Rs ${UscD(g2.cashOnHand)}</div></div>
 <div class="gt-card blue mono-amt"><div class="label">Total Capital Invested</div><div class="value">Rs ${UscD(g2.totalCapital)}</div></div>
 `;CNUF.appendChild(xiIe);const Je_O = document.createElement('div');Je_O.className = 'grand-totals';Je_O.innerHTML = `
 <div class="gt-card"><div class="label">Received from Customers</div><div class="value">Rs ${UscD(g2.totalReceived)}</div></div>
 <div class="gt-card amber"><div class="label">Stock Value (in hand)</div><div class="value">Rs ${UscD(g2.stockValue)}</div></div>
 `;CNUF.appendChild(Je_O);const bkQf = document.createElement('div');bkQf.className = 'grand-totals';bkQf.innerHTML = `
 <div class="gt-card blue mono-amt"><div class="label">Personal Expenses</div><div class="value">Rs ${UscD(g2.personalExpenses)}</div></div>
 <div class="gt-card amber"><div class="label">Business Expenses</div><div class="value">Rs ${UscD(g2.businessExpenses)}</div></div>
 `;CNUF.appendChild(bkQf);const tyIB = document.createElement('div');tyIB.className = 'btn-row';tyIB.innerHTML = `
 <button class="add-btn blue" id="fin-add-capital" style="margin-bottom:16px;">+ Add Capital</button>
 <button class="add-btn secondary" id="fin-add-expense" style="margin-bottom:16px;">+ Add Expense</button>
 `;CNUF.appendChild(tyIB);tyIB.querySelector('#fin-add-capital').onclick =()=>{$Wx ={type:'addCapital'};ynNo();};tyIB.querySelector('#fin-add-expense').onclick =()=>{$Wx ={type:'addExpense'};ynNo();};CNUF.appendChild(BS());const RUM = document.createElement('div');RUM.className = 'section-title';RUM.textContent = 'Capital / Investment History';CNUF.appendChild(RUM);const WM = document.createElement('div');WM.className = 'ledger-list';if(DYER.capitalEntries.length === 0){WM.innerHTML = `<div class="no-results">No capital added yet.</div>`;}else{DYER.capitalEntries.forEach($pPF =>{const kc = document.createElement('div');kc.className = 'ledger-line';kc.innerHTML = `
 <div class="l-desc"><div class="l-name">${YoYV($pPF.note || 'Capital added')}</div><div class="l-meta">${GlZA($pPF.time)} · ${q1rX($pPF.time)}</div></div>
 <div class="l-amt" style="color:var(--blue);">+Rs ${UscD($pPF.amount)}</div>
 `;WM.appendChild(kc);});}CNUF.appendChild(WM);const EB = document.createElement('div');EB.className = 'section-title';EB.textContent = 'Expense History';CNUF.appendChild(EB);const pU = document.createElement('div');pU.className = 'ledger-list';if(DYER.expenses.length === 0){pU.innerHTML = `<div class="no-results">No expenses recorded yet.</div>`;}else{DYER.expenses.forEach(aMhF =>{const Rq = document.createElement('div');Rq.className = 'ledger-line';Rq.innerHTML = `
 <div class="l-desc">
 <div class="l-name"><span class="cat-badge ${aMhF.category}">${aMhF.category === 'personal' ? 'Personal' : 'Business'}</span>${YoYV(aMhF.label)}</div>
 <div class="l-meta">${GlZA(aMhF.time)} · ${q1rX(aMhF.time)}</div>
 </div>
 <div class="l-amt" style="color:var(--ledger-red);">-Rs ${UscD(aMhF.amount)}</div>
 `;pU.appendChild(Rq);});}CNUF.appendChild(pU);return CNUF;}function ue2(){const L8pY = document.createElement('div');const eMb0 = hyLU();const z5i = document.createElement('div');z5i.className = 'grand-totals';z5i.innerHTML = `
 <div class="gt-card"><div class="label">Total Due</div><div class="value" style="color:${eMb0.balance > 0 ? 'var(--ledger-red)' : 'var(--paid-green)'}">Rs ${UscD(eMb0.balance)}</div></div>
 <div class="gt-card amber"><div class="label">Defaulters</div><div class="value">${eMb0.defaulters}</div></div>
 <div class="gt-card green"><div class="label">Cleared</div><div class="value">${eMb0.cleared}</div></div>
 `;L8pY.appendChild(z5i);const fFO = document.createElement('button');fFO.className = 'add-btn';fFO.textContent = '+ New Account';fFO.onclick =()=>{if(khLimit())return;$Wx ={type:'newCustomer'};ynNo();};L8pY.appendChild(fFO);if(!dNW()){const lh=document.createElement('div');lh.className='strict-hint';lh.style.cssText='margin:-6px 0 12px;text-align:center';lh.textContent='Free plan: '+DYER.customers.length+' / '+fp+' customers';L8pY.appendChild(lh);}if(DYER.customers.length === 0){const YYPJ = document.createElement('div');YYPJ.className = 'empty-state';YYPJ.innerHTML = `<div class="big">📒</div><div>No accounts yet.<br>Add your first customer.</div>`;L8pY.appendChild(YYPJ);return L8pY;}const lMY = document.createElement('div');lMY.className = 'filter-row';const nvV = [{key:'all',label:'All'},{key:'cleared',label:'✅ Cleared'},{key:'other',label:'🟡 Unpaid'},{key:'defaulter',label:'⚠ Defaulter'},{key:'hidden',label:'🔐 Lock'}];lMY.innerHTML = nvV.map(QJjQ => `<button class="chip-toggle ${T52V === QJjQ.key ? 'on' : ''}" data-key="${QJjQ.key}">${QJjQ.label}</button>`).join('');lMY.querySelectorAll('.chip-toggle').forEach(Mk23 =>{Mk23.onclick =()=>{T52V = Mk23.getAttribute('data-key');ynNo();};});L8pY.appendChild(lMY);if(T52V === 'hidden'){const lb = document.createElement('button');lb.className = 'add-btn blue';lb.innerHTML = '🔐 Add customer to Lock';lb.onclick =()=>{$Wx ={type:'lockPick'};ynNo();};L8pY.appendChild(lb);}const GoAR = document.createElement('div');GoAR.className = 'search-wrap';GoAR.innerHTML = `<input type="text" id="m-search" placeholder="Search customer name…" value="${YoYV(knH)}"><span class="search-icon">🔍</span>`;L8pY.appendChild(GoAR);const mfuJ = GoAR.querySelector('#m-search');mfuJ.oninput =()=>{knH = mfuJ.value;const D9nh = L8pY.querySelector('.cards-grid');const rFJ = L8pY.querySelector('.no-results');if(D9nh)D9nh.remove();if(rFJ)rFJ.remove();L8pY.appendChild(_O0());};L8pY.appendChild(_O0());return L8pY;}function _O0(){const Ju = knH.trim().toLowerCase();let Hlzb = T52V === 'hidden' ? DYER.customers.filter(gsDZ => gsDZ.hidden):DYER.customers.filter(a4n => !a4n.hidden);let D2x0 = Ju ? Hlzb.filter(uVeu => uVeu.name.toLowerCase().includes(Ju)):Hlzb;if(T52V !== 'all' && T52V !== 'hidden')D2x0 = D2x0.filter(ZU => Iz$(ZU)=== T52V);if(D2x0.length === 0){const _gn = document.createElement('div');_gn.className = 'no-results';_gn.textContent = T52V === 'hidden' ? 'No locked accounts.':'No customer found.';return _gn;}const RRw = document.createElement('div');RRw.className = 'cards-grid';D2x0.forEach($6 =>{const YRqK = zti2($6);const mb = Iz$($6);const EQ = document.createElement('div');EQ.className = 'cust-card' +(mb === 'defaulter' ? ' defaulter':mb === 'cleared' ? ' cleared':'');EQ.onclick = async()=>{if($6.hidden && !(await khAuth()))return;eS($6.id);};let E$TL = '';if(mb === 'defaulter')E$TL = '<span class="defaulter-badge">DEFAULTER</span>';else if(mb === 'cleared')E$TL = '<span class="cleared-badge">CLEARED</span>';EQ.innerHTML = `
 ${E$TL}
 <div class="cust-top">
 <div class="avatar">${OpwO($6)}</div>
 <div><div class="cust-name">${YoYV($6.name)}</div><div class="cust-date">First day: ${GlZA($6.createdAt)}${$6.phone ? ' • 📞 ' + YoYV($6.phone) : ''}</div></div>
 </div>
 <div class="cust-balance-row">
 <span>Amount Due</span>
 <span class="bal-val" style="color:${YRqK.balance > 0 ? 'var(--ledger-red)' : 'var(--paid-green)'}">Rs ${UscD(YRqK.balance)}</span>
 </div>
 ${T52V === 'hidden' ? '<button class="add-btn secondary unhide-quick" style="margin:0;padding:8px;font-size:12px;">🔓 Unlock</button>' : ''}
 `;if(T52V === 'hidden'){EQ.querySelector('.unhide-quick').onclick =(F7az)=>{F7az.stopPropagation();UT8G($6.id);};}RRw.appendChild(EQ);});return RRw;}function sRC(){const q6 = j3(egF.customerId);const LbUv = document.createElement('div');if(!q6){LbUv.innerHTML = `<div class="empty-state">Account not found.</div>`;return LbUv;}const wo4 = document.createElement('button');wo4.className = 'back-btn';wo4.textContent = '← Back to all accounts';wo4.onclick = Q7A;LbUv.appendChild(wo4);const iXq = zti2(q6);const ABT = tKN(q6);const oQmw = document.createElement('div');oQmw.className = 'detail-header';oQmw.innerHTML = `
 <div class="cust-top">
 <div class="avatar" id="cust-dp">${OpwO(q6)}</div>
 <div style="flex:1"><div class="cust-name">${YoYV(q6.name)}</div><div class="cust-date">Account opened: ${GlZA(q6.createdAt)}${q6.phone ? ' • 📞 ' + YoYV(q6.phone) : ''}</div></div>
 <button class="lock-btn" id="cust-wa-btn" title="Send statement on WhatsApp">${khWAimg(24)}</button><button class="lock-btn" id="cust-edit-btn" title="Edit Account">✏️</button>
 </div>
 <div class="totals-row">
 <div class="pill red">Total Credit<span class="v">Rs ${UscD(iXq.totalItems)}</span></div>
 <div class="pill green">Received<span class="v">Rs ${UscD(iXq.totalPayments)}</span></div>
 <div class="pill neutral">Balance<span class="v" style="color:${iXq.balance > 0 ? 'var(--ledger-red)' : 'var(--paid-green)'}">Rs ${UscD(iXq.balance)}</span></div>
 </div>
 ${ABT ? '<div class="defaulter-strip">⚠ DEFAULTER — Rs ' + UscD(mK5) + '+ due, no payment in 3+ months</div>' : ''}
 ${q6.hidden ? '<div class="defaulter-strip" style="background:rgba(43,27,18,0.08);color:var(--ink-soft);">🔐 This account is locked. It opens only with your account password.</div>' : ''}
 `;LbUv.appendChild(oQmw);oQmw.querySelector('#cust-dp').addEventListener('click',()=> Fs(q6));oQmw.querySelector('#cust-edit-btn').addEventListener('click',()=>{$Wx ={type:'editCustomer',customerId:q6.id};ynNo();});oQmw.querySelector('#cust-wa-btn').addEventListener('click',()=>{if(window.__ks&&window.__ks.wa)window.__ks.wa(q6,iXq.balance,Fd());else Nek('WhatsApp is not ready');});const dTm0 = document.createElement('div');dTm0.className = 'action-row';dTm0.innerHTML = `<button class="item-btn">+ Add Item (Credit)</button><button class="pay-btn">+ Payment Received</button>`;dTm0.querySelector('.item-btn').onclick =()=>{$Wx ={type:'item',customerId:q6.id};ynNo();};dTm0.querySelector('.pay-btn').onclick =()=>{$Wx ={type:'payment',customerId:q6.id};ynNo();};LbUv.appendChild(dTm0);const W6 = document.createElement('div');W6.className = 'btn-row';W6.style.marginTop = '10px';W6.innerHTML = q6.hidden ? `<button class="add-btn secondary" id="cust-unhide-btn">🔓 Unlock Account</button>`:``;LbUv.appendChild(W6);if(q6.hidden)W6.querySelector('#cust-unhide-btn').onclick =()=> UT8G(q6.id);if(!q6.entries || q6.entries.length === 0){const Wb6 = document.createElement('div');Wb6.className = 'empty-state';Wb6.innerHTML = `<div class="big">🧾</div><div>No entries yet.<br>Add the first item or payment.</div>`;LbUv.appendChild(Wb6);return LbUv;}const t2 = a$(q6.entries);t2.forEach(tem =>{const ND1 = document.createElement('div');ND1.className = 'session-block';const wKT$ = document.createElement('div');wKT$.className = 'session-date';wKT$.innerHTML = `<span>${GlZA(tem.time)}</span><span>${q1rX(tem.time)}</span>`;ND1.appendChild(wKT$);tem.items.forEach(moAj =>{const FC9_ = document.createElement('div');if(moAj.type === 'item'){FC9_.className = 'entry-line item';FC9_.innerHTML = `
 <div class="entry-desc"><div class="item-name">${YoYV(moAj.item)}</div><div class="item-meta">${moAj.qty} × Rs ${UscD(moAj.rate)}</div></div>
 <div class="entry-amt">Rs ${UscD(moAj.total)}</div>
 `;}else{FC9_.className = 'entry-line payment';FC9_.innerHTML = `<div class="entry-desc"><div class="item-name">Payment Received</div></div><div class="entry-amt">Rs ${UscD(moAj.amount)}</div>`;}ND1.appendChild(FC9_);});LbUv.appendChild(ND1);});return LbUv;}

/* ---------- inventory (with Stock & cash check toggle) ---------- */
function qLOA(){const xReT = document.createElement('div');const WZPW = document.createElement('button');WZPW.className = 'add-btn secondary';WZPW.textContent = '+ Add Stock';WZPW.onclick =()=>{$Wx ={type:'addStock'};ynNo();};xReT.appendChild(WZPW);const sr = document.createElement('div');sr.className = 'strict-row';const tg = document.createElement('button');tg.className = 'chip-toggle' +(STRICT()? ' on':'');tg.textContent =(STRICT()? '✅ ':'⛔ ')+ 'Stock & cash check: ' +(STRICT()? 'ON':'OFF');tg.onclick =()=>{DYER.settings = DYER.settings ||{};DYER.settings.strict = !STRICT();$O();ynNo();Nek('Stock & cash check ' +(STRICT()? 'ON':'OFF'));};const hint = document.createElement('div');hint.className = 'strict-hint';hint.textContent = STRICT()? 'Selling needs the product in stock, and buying stock needs enough cash.':'Selling and buying stock are allowed without stock or cash limits.';sr.appendChild(tg);sr.appendChild(hint);if(DYER.inventory.length === 0){const SV = document.createElement('div');SV.className = 'empty-state';SV.innerHTML = `<div class="big">📦</div><div>No stock added yet.<br>Add the products you buy for the shop.</div>`;xReT.appendChild(SV);return xReT;}const zD6W = document.createElement('div');zD6W.className = 'search-wrap';zD6W.innerHTML = `<input type="text" id="m-stock-search" placeholder="Search product…" value="${YoYV(K041)}"><span class="search-icon">🔍</span>`;xReT.appendChild(zD6W);const HEXo = zD6W.querySelector('#m-stock-search');HEXo.oninput =()=>{K041 = HEXo.value;const I4TI = xReT.querySelector('.cards-grid');const MGim = xReT.querySelector('.no-results');if(I4TI)I4TI.remove();if(MGim)MGim.remove();xReT.appendChild(cv6());};xReT.appendChild(cv6());return xReT;}function cv6(){const kG = K041.trim().toLowerCase();const GV = kG ? DYER.inventory.filter(dCQh => dCQh.name.toLowerCase().includes(kG)):DYER.inventory;if(GV.length === 0){const SN = document.createElement('div');SN.className = 'no-results';SN.textContent = 'No product found.';return SN;}const G7en = document.createElement('div');G7en.className = 'cards-grid';GV.forEach(OK_W =>{const Y6yl = q5RY(OK_W);const Dh = document.createElement('div');Dh.className = 'stock-card ' + Y6yl;Dh.onclick =()=>{$Wx ={type:'restock',productId:OK_W.id};ynNo();};const d3L$ = Y6yl === 'ok' ? 'In Stock':(Y6yl === 'restock' ? 'Restock Needed':'Not Selling (Fail)');const jF = OK_W.sellRate - OK_W.costRate;const vOxs = OK_W.sellRate > 0 ? 'Rs ' + UscD(OK_W.sellRate):'not set';Dh.innerHTML = `
 <div class="stock-name">${YoYV(OK_W.name)}</div>
 <div class="stock-meta">Cost Rs ${UscD(OK_W.costRate)} · Sell ${vOxs} · Qty: ${OK_W.qty}</div>
 <div class="stock-meta">Profit/unit: <b style="color:${jF >= 0 ? 'var(--paid-green)' : 'var(--ledger-red)'}">${OK_W.sellRate > 0 ? 'Rs ' + UscD(jF) : '—'}</b></div>
 <span class="stock-badge ${Y6yl}">${d3L$}</span>
 `;G7en.appendChild(Dh);});return G7en;}function smh$(){const IdR = document.createElement('div');IdR.className = 'modal-overlay';IdR.onclick =(Qi)=>{if(Qi.target === IdR){$Wx = null;ynNo();}};const oe = document.createElement('div');oe.className = 'modal';oe.onclick =(FEwc)=> FEwc.stopPropagation();if($Wx.type === 'newCustomer')return bJ(IdR,oe);if($Wx.type === 'editCustomer')return JzWG(IdR,oe);if($Wx.type === 'resetAll')return _b(IdR,oe);if($Wx.type === 'item')return rUfK(IdR,oe);if($Wx.type === 'payment')return cZPP(IdR,oe);if($Wx.type === 'addStock')return bGXo(IdR,oe);if($Wx.type === 'restock')return eCg(IdR,oe);if($Wx.type === 'pickProduct')return fh(IdR,oe);if($Wx.type === 'addCapital')return fQT(IdR,oe);if($Wx.type === 'addExpense')return KN3(IdR,oe);if($Wx.type === 'bill')return BM(IdR,oe);if($Wx.type === 'ad')return AM(IdR,oe);if($Wx.type === 'lockPick')return khLP(IdR,oe);return IdR;}function IyEF(){localStorage.removeItem(l_);localStorage.removeItem(nVk);Zo.forEach(EYI8 => localStorage.removeItem(EYI8));DYER = NEWD();uyMQ ={};KV4m = false;VCQQ = '';$Wx = null;egF ={screen:'setup',customerId:null};PF9u();ynNo();Nek('All data deleted');}function _b(Iw5v,cZB4){cZB4.innerHTML = `
 <h3>Delete All Data</h3>
 <p style="font-size:14px;color:var(--ink-soft);line-height:1.5;margin:0 0 16px;">This will permanently delete <b>all</b> customers, inventory, payments, and finance records. This cannot be undone — you will be taken back to the setup screen.</p>
 <div class="modal-actions"><button class="cancel">Cancel</button><button class="confirm">Delete Everything</button></div>
 `;cZB4.querySelector('.cancel').onclick =()=>{$Wx = null;ynNo();};cZB4.querySelector('.confirm').onclick =()=> IyEF();Iw5v.appendChild(cZB4);return Iw5v;}function JzWG(p5l9,tt_z){const Txy = j3($Wx.customerId);if(!Txy){$Wx = null;ynNo();return p5l9;}tt_z.innerHTML = `
 <h3>Edit Account</h3>
 <div class="field"><label>Customer Name</label><input type="text" id="m-e-name" value="${YoYV(Txy.name)}" autofocus></div>
 <div class="field"><label>Phone Number (optional)</label><input type="tel" id="m-e-phone" value="${YoYV(Txy.phone || '')}" maxlength="13" placeholder="e.g. 0300-1234567" inputmode="tel"></div>
 <div class="modal-actions"><button class="cancel">Cancel</button><button class="confirm">Save Changes</button></div>
 `;tt_z.querySelector('.cancel').onclick =()=>{$Wx = null;ynNo();};tt_z.querySelector('.confirm').onclick =()=> N4(Txy.id,tt_z.querySelector('#m-e-name').value,tt_z.querySelector('#m-e-phone').value);phoneOnly(tt_z.querySelector('#m-e-phone'));t0(tt_z,'.confirm');p5l9.appendChild(tt_z);setTimeout(()=> tt_z.querySelector('#m-e-name')?.focus(),50);return p5l9;}function bJ(XZ1h,_rZb){_rZb.innerHTML = `
 <h3>New Account</h3>
 <div class="field"><label>Customer Name</label><input type="text" id="m-name" placeholder="e.g. Ahmed Bhai" autofocus></div>
<div class="field"><label>Phone Number</label><input type="tel" id="m-phone" maxlength="13" placeholder="e.g. 0300-1234567" value="+92" inputmode="tel" autocomplete="tel"></div>
 <div class="modal-actions"><button class="cancel">Cancel</button><button class="confirm">Create Account</button></div>
 `;_rZb.querySelector('.cancel').onclick =()=>{$Wx = null;ynNo();};_rZb.querySelector('.confirm').onclick =()=> dt(_rZb.querySelector('#m-name').value,_rZb.querySelector('#m-phone').value);_rZb.querySelector('#m-phone').addEventListener('input',e=>{e.target.value=e.target.value.replace(/[^0-9+\-]/g,'');});phoneOnly(_rZb.querySelector('#m-phone'));t0(_rZb,'.confirm');XZ1h.appendChild(_rZb);setTimeout(()=> _rZb.querySelector('#m-name')?.focus(),50);return XZ1h;}function rUfK(kajM,cHc){const k9 = $Wx.prefill ||{};const IxH = k9.productId ? cKTL(k9.productId):null;const Q5t =(k9.rate != null && k9.rate > 0)? k9.rate:'';cHc.innerHTML = `
 <h3>Add Item</h3>
 <button type="button" class="add-btn secondary" id="m-scan-open" style="margin-bottom:14px;">🔍 Select Product from Stock</button>
 <div class="field">
 <label>Item Name</label>
 <input type="text" id="m-item" list="dl-own-products" placeholder="e.g. Sugar" value="${YoYV(k9.item || '')}">
 ${Jrq('dl-own-products', DYER.inventory.map(wJBv => wJBv.name).sort((Wamy, eh) => Wamy.localeCompare(eh)))}
 </div>
 <div class="field-row">
 <div class="field">
 <label>Quantity${IxH ? ' <span style="font-weight:400;">(in stock: ' + IxH.qty + ')</span>' : ''}</label>
 <input type="number" id="m-qty" placeholder="e.g. 2" inputmode="decimal">
 </div>
 <div class="field">
 <label>Rate (per unit)${IxH && !Q5t ? ' <span style="font-weight:400;">(set your price)</span>' : ''}</label>
 <input type="number" id="m-rate" placeholder="e.g. 150" inputmode="decimal" value="${Q5t}">
 </div>
 </div>
 <div class="calc-preview">Total Amount: <b id="m-preview-val">Rs 0</b></div>
 <div class="modal-actions"><button class="cancel">Cancel</button><button class="confirm">Save</button></div>
 `;
 const i8l0 = cHc.querySelector('#m-qty');const gOlL = cHc.querySelector('#m-rate');const lb3V = cHc.querySelector('#m-preview-val');function k5AY(){const m0AG = parseFloat(i8l0.value)|| 0;const duzg = parseFloat(gOlL.value)|| 0;lb3V.textContent = 'Rs ' + UscD(m0AG * duzg);}i8l0.oninput = k5AY;gOlL.oninput = k5AY;k5AY();cHc.querySelector('#m-scan-open').onclick =()=>{$Wx ={type:'pickProduct',customerId:$Wx.customerId};ynNo();};cHc.querySelector('.cancel').onclick =()=>{$Wx = null;ynNo();};cHc.querySelector('.confirm').onclick =()=>{bF($Wx.customerId,cHc.querySelector('#m-item').value,i8l0.value,gOlL.value,k9.productId || null);};t0(cHc,'.confirm');kajM.appendChild(cHc);setTimeout(()=>{const V_ = k9.item ? i8l0:cHc.querySelector('#m-item');V_?.focus();},50);return kajM;}function cZPP(y0s,Aa7l){Aa7l.innerHTML = `
 <h3>Payment Received</h3>
 <div class="field"><label>Amount</label><input type="number" id="m-amount" placeholder="e.g. 500" inputmode="decimal"></div>
 <div class="modal-actions"><button class="cancel">Cancel</button><button class="confirm pay">Record</button></div>
 `;Aa7l.querySelector('.cancel').onclick =()=>{$Wx = null;ynNo();};Aa7l.querySelector('.confirm').onclick =()=> cst0($Wx.customerId,Aa7l.querySelector('#m-amount').value);t0(Aa7l,'.confirm');y0s.appendChild(Aa7l);setTimeout(()=> Aa7l.querySelector('#m-amount')?.focus(),50);return y0s;}

/* ---------- add stock / restock (cash check only when the Stock & cash check is ON) ---------- */
function bGXo(nAqO,DMp){DMp.innerHTML = `
 <h3>Add Stock</h3>
 <div class="field">
 <label>Product Name</label>
 <input type="text" id="m-p-name" list="dl-products" placeholder="Start typing… e.g. Sugar" autofocus>
 ${Jrq('dl-products', e2())}
 </div>
 <div class="field-row">
 <div class="field"><label>Cost Rate (you paid)</label><input type="number" id="m-p-cost" placeholder="e.g. 120" inputmode="decimal"></div>
 <div class="field"><label>Quantity</label><input type="number" id="m-p-qty" placeholder="e.g. 20" inputmode="decimal"></div>
 </div>
 <div class="modal-actions"><button class="cancel">Cancel</button><button class="confirm stock">Save</button></div>
 `;DMp.querySelector('.cancel').onclick =()=>{$Wx = null;ynNo();};DMp.querySelector('.confirm').onclick =()=>{const I0Hc = parseFloat(DMp.querySelector('#m-p-cost').value)|| 0;const Lg9 = parseFloat(DMp.querySelector('#m-p-qty').value)|| 0;const w7oJ = I0Hc * Lg9;if(STRICT() && w7oJ > 0){const iiw = r7nF().cashOnHand;if(w7oJ > iiw){Nek(`Not enough cash on hand (Rs ${UscD(iiw)} available) — add capital first`);return;}}zLI2(DMp.querySelector('#m-p-name').value,DMp.querySelector('#m-p-cost').value,DMp.querySelector('#m-p-qty').value);$Wx = null;ynNo();Nek('Stock added — set the sell rate the first time you sell it');};t0(DMp,'.confirm');nAqO.appendChild(DMp);setTimeout(()=> DMp.querySelector('#m-p-name')?.focus(),50);return nAqO;}function eCg(VTi,IP){const pY = cKTL($Wx.productId);if(!pY){$Wx = null;ynNo();return VTi;}IP.innerHTML = `
 <h3>${YoYV(pY.name)}</h3>
 <div class="field-row">
 <div class="field"><label>Cost Rate</label><input type="number" id="m-r-cost" value="${pY.costRate}" inputmode="decimal"></div>
 <div class="field"><label>Sell Rate</label><input type="number" id="m-r-sell" value="${pY.sellRate}" inputmode="decimal"></div>
 </div>
 <div class="field"><label>Current Quantity</label><input type="number" id="m-r-qty" value="${pY.qty}" inputmode="decimal"></div>
 <div class="field"><label>Add More Stock</label><input type="number" id="m-r-add" placeholder="e.g. 10" inputmode="decimal"></div>
 <div class="modal-actions"><button class="cancel">Cancel</button><button class="confirm stock">Save</button></div>
 `;IP.querySelector('.cancel').onclick =()=>{$Wx = null;ynNo();};IP.querySelector('.confirm').onclick =()=>{const zs5 = parseFloat(IP.querySelector('#m-r-cost').value)|| pY.costRate;const W6sy = parseFloat(IP.querySelector('#m-r-add').value);if(STRICT() && !isNaN(W6sy)&& W6sy > 0){const neX = zs5 * W6sy;const kq = r7nF().cashOnHand;if(neX > kq){Nek(`Not enough cash on hand (Rs ${UscD(kq)} available) — add capital first`);return;}}pY.costRate = zs5;pY.sellRate = parseFloat(IP.querySelector('#m-r-sell').value)|| pY.sellRate;const zY = parseFloat(IP.querySelector('#m-r-qty').value);if(!isNaN(zY))pY.qty = zY;if(!isNaN(W6sy)&& W6sy > 0){pY.qty += W6sy;DYER.stockPurchases.unshift({id:kB(),product:pY.name,costRate:pY.costRate,qty:W6sy,amount:pY.costRate * W6sy,time:Date.now()});}$O();$Wx = null;ynNo();Nek('Stock updated');};t0(IP,'.confirm');VTi.appendChild(IP);setTimeout(()=> IP.querySelector('#m-r-add')?.focus(),50);return VTi;}function fh(jtjJ,g9){let uU = '';function R7ej(){const L$9 = uU.trim().toLowerCase();const yiX = L$9 ? DYER.inventory.filter(iPl7 => iPl7.name.toLowerCase().includes(L$9)):DYER.inventory;if(yiX.length === 0)return '<div class="picker-empty">No matching product. Add it in Inventory first.</div>';return yiX.map(v6LF => `
 <div class="picker-item" data-id="${v6LF.id}">
 <div><div class="pn">${YoYV(v6LF.name)}</div><div class="pm">Qty in stock: ${v6LF.qty}</div></div>
 <div class="pm">${v6LF.sellRate > 0 ? 'Rs ' + UscD(v6LF.sellRate) : 'rate not set'}</div>
 </div>
 `).join('');}g9.innerHTML = `
 <h3>Select Product</h3>
 <input type="text" class="picker-search" id="m-pick-search" placeholder="Search product name…">
 <div class="picker-list" id="m-pick-list">${R7ej()}</div>
 <div class="modal-actions"><button class="cancel">Cancel</button></div>
 `;function lyor(){g9.querySelectorAll('.picker-item').forEach(nuuX =>{nuuX.onclick =()=>{const Wn = cKTL(nuuX.getAttribute('data-id'));if(!Wn)return;$Wx ={type:'item',customerId:$Wx.customerId,prefill:{item:Wn.name,rate:Wn.sellRate,productId:Wn.id}};ynNo();};});}lyor();g9.querySelector('#m-pick-search').oninput =(qbJ)=>{uU = qbJ.target.value;g9.querySelector('#m-pick-list').innerHTML = R7ej();lyor();};g9.querySelector('.cancel').onclick =()=>{$Wx ={type:'item',customerId:$Wx.customerId};ynNo();};jtjJ.appendChild(g9);return jtjJ;}function fQT(xUN,_t){_t.innerHTML = `
 <h3>Add Capital / Investment</h3>
 <div class="field"><label>Amount</label><input type="number" id="m-cap-amount" placeholder="e.g. 50000" inputmode="decimal" autofocus></div>
 <div class="field"><label>Note (optional)</label><input type="text" id="m-cap-note" placeholder="e.g. Initial investment"></div>
 <div class="modal-actions"><button class="cancel">Cancel</button><button class="confirm blue">Add</button></div>
 `;_t.querySelector('.cancel').onclick =()=>{$Wx = null;ynNo();};_t.querySelector('.confirm').onclick =()=>{const _oVR = _t.querySelector('#m-cap-amount').value;if(!parseFloat(_oVR)|| parseFloat(_oVR)<= 0){Nek('Enter a valid amount');return;}vZf7(_oVR,_t.querySelector('#m-cap-note').value);$Wx = null;ynNo();Nek('Capital added');};t0(_t,'.confirm');xUN.appendChild(_t);setTimeout(()=> _t.querySelector('#m-cap-amount')?.focus(),50);return xUN;}function KN3(w1,JDL){JDL.innerHTML = `
 <h3>Add Expense</h3>
 <div class="field">
 <label>Category</label>
 <select id="m-exp-cat">
 <option value="business">Business (shop) expense</option>
 <option value="personal">Personal expense</option>
 </select>
 </div>
 <div class="field"><label>Label</label><input type="text" id="m-exp-label" placeholder="e.g. Electricity bill, Salary - Ali, Gas, Tax"></div>
 <div class="field"><label>Amount</label><input type="number" id="m-exp-amount" placeholder="e.g. 3000" inputmode="decimal"></div>
 <div class="modal-actions"><button class="cancel">Cancel</button><button class="confirm">Add</button></div>
 `;JDL.querySelector('.cancel').onclick =()=>{$Wx = null;ynNo();};JDL.querySelector('.confirm').onclick =()=>{const PtA = JDL.querySelector('#m-exp-label').value;const rE = JDL.querySelector('#m-exp-amount').value;if(!PtA.trim()){Nek('Enter what this expense is for');return;}if(!parseFloat(rE)|| parseFloat(rE)<= 0){Nek('Enter a valid amount');return;}WoXS(JDL.querySelector('#m-exp-cat').value,PtA,rE);$Wx = null;ynNo();Nek('Expense added');};t0(JDL,'.confirm');w1.appendChild(JDL);setTimeout(()=> JDL.querySelector('#m-exp-label')?.focus(),50);return w1;}/* ===== PRO UI: icons, theme, plan strip, settings, locked customers, ads on open ===== */
const khP={
'khataai':'<path fill="currentColor" stroke="none" fill-rule="evenodd" transform="scale(0.064516) translate(-70 -70)" d="M319.5 349.5L315.8 345.3L314.0 344.3L307.4 343.9L267.4 356.1L223.2 370.7L218.5 374.9L217.1 377.8L216.2 381.1L216.2 383.9L217.1 387.2L218.5 389.5L222.7 392.8L226.4 393.8L229.7 393.3L274.9 377.3L312.1 366.5L315.4 364.6L319.5 359.4L320.5 356.6L320.5 352.3ZM346.6 305.7L344.2 301.0L341.0 298.2L338.2 297.2L333.5 297.2L284.2 312.8L270.2 316.5L219.9 332.5L215.3 336.8L213.4 340.6L212.9 342.9L213.4 347.1L214.8 350.4L219.0 354.2L221.3 355.2L226.9 355.2L264.6 342.4L339.6 319.8L342.4 317.9L344.7 315.1L346.6 310.4ZM344.7 266.6L342.4 262.4L339.6 260.0L337.2 259.1L333.1 258.6L234.4 288.3L219.9 293.0L215.3 295.8L212.5 299.6L211.1 304.8L211.5 309.0L212.9 311.8L216.2 315.1L219.9 316.5L225.0 316.5L264.1 303.8L324.7 285.4L335.8 282.6L339.6 280.7L343.3 276.5L345.2 270.8ZM103.5 158.7L99.3 168.1L97.5 178.0L97.9 318.9L98.9 327.4L101.7 336.3L105.4 343.4L107.7 346.7L114.7 353.7L145.9 374.0L173.4 390.5L197.1 405.6L199.0 405.6L201.3 404.1L201.8 403.2L201.8 366.5L200.4 360.8L198.0 356.1L192.0 349.5L175.7 338.7L162.2 330.7L157.5 325.5L154.7 318.4L155.2 221.4L157.5 215.7L160.3 212.4L165.0 209.6L168.7 208.7L173.8 209.1L179.9 212.0L213.9 231.7L239.0 245.4L253.0 254.4L260.0 257.6L264.1 257.6L295.8 244.5L314.4 235.5L335.4 227.0L354.0 218.1L361.0 217.6L365.2 219.5L368.9 222.8L371.7 228.4L371.7 339.6L370.3 343.9L368.0 348.1L361.5 354.7L352.6 359.4L268.8 397.1L231.1 416.4L230.2 417.3L230.2 419.2L236.7 423.9L243.2 426.8L249.2 427.7L254.4 427.2L260.9 424.9L314.0 400.8L341.9 389.1L391.2 366.0L397.3 361.8L403.4 355.6L407.1 350.4L411.3 342.0L413.1 335.8L414.1 329.7L414.5 175.7L413.6 172.4L411.3 168.1L406.6 163.9L399.6 161.6L395.9 161.6L389.4 163.4L364.7 174.7L329.3 192.6L316.8 197.8L286.5 212.4L164.5 144.1L150.1 137.1L145.4 136.1L136.6 136.1L125.9 138.9L120.3 141.8L114.2 146.0L107.3 153.1ZM395.0 122.9L391.2 119.2L386.6 117.3L378.2 117.7L364.2 124.8L344.7 133.3L334.9 138.5L313.0 147.9L279.5 163.9L275.3 165.3L256.2 174.7L254.8 176.6L256.2 178.0L261.4 180.4L287.0 195.0L289.3 195.0L315.8 182.3L339.6 171.9L362.8 160.1L389.4 148.4L393.1 145.1L396.8 137.5L397.3 128.6ZM350.3 94.2L345.6 88.5L342.4 86.7L339.6 85.7L333.5 85.7L330.7 86.7L301.9 101.7L217.1 143.2L208.3 147.9L207.3 148.8L207.3 150.2L239.0 167.7L241.3 167.2L323.7 126.7L324.7 125.8L344.2 116.8L348.9 111.6L351.2 105.5L351.7 99.4Z"/>',
'sparkles':'<path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z"/><path d="M20 3v4"/><path d="M22 5h-4"/><path d="M4 17v2"/><path d="M5 18H3"/>',
'settings':'<path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"/><circle cx="12" cy="12" r="3"/>',
'crown':'<path d="M11.562 3.266a.5.5 0 0 1 .876 0L15.39 8.87a1 1 0 0 0 1.516.294L21.183 5.5a.5.5 0 0 1 .798.519l-2.834 10.246a1 1 0 0 1-.956.734H5.81a1 1 0 0 1-.957-.734L2.02 6.02a.5.5 0 0 1 .798-.519l4.276 3.664a1 1 0 0 0 1.516-.294z"/><path d="M5 21h14"/>',
'lock':'<rect width="18" height="11" x="3" y="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/>',
'unlock':'<rect width="18" height="11" x="3" y="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 9.9-1"/>',
'lock-keyhole':'<circle cx="12" cy="16" r="1"/><rect x="3" y="10" width="18" height="12" rx="2"/><path d="M7 10V7a5 5 0 0 1 10 0v3"/>',
'user':'<path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/>',
'palette':'<circle cx="13.5" cy="6.5" r=".5"/><circle cx="17.5" cy="10.5" r=".5"/><circle cx="8.5" cy="7.5" r=".5"/><circle cx="6.5" cy="12.5" r=".5"/><path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z"/>',
'cloud':'<path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"/>',
'cloud-off':'<path d="m2 2 20 20"/><path d="M5.782 5.782A7 7 0 0 0 9 19h8.5a4.5 4.5 0 0 0 1.307-.193"/><path d="M21.532 16.5A4.5 4.5 0 0 0 17.5 10h-1.79A7.008 7.008 0 0 0 10 5.07"/>',
'shield':'<path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/>',
'package':'<path d="m7.5 4.27 9 5.15"/><path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"/><path d="m3.3 7 8.7 5 8.7-5"/><path d="M12 22V12"/>',
'megaphone':'<path d="m3 11 18-5v12L3 14v-3z"/><path d="M11.6 16.8a3 3 0 1 1-5.8-1.6"/>',
'help-circle':'<circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/><path d="M12 17h.01"/>',
'chevron-right':'<path d="m9 18 6-6-6-6"/>',
'arrow-left':'<path d="m12 19-7-7 7-7"/><path d="M19 12H5"/>',
'sun':'<circle cx="12" cy="12" r="4"/><path d="M12 2v2"/><path d="M12 20v2"/><path d="m4.93 4.93 1.41 1.41"/><path d="m17.66 17.66 1.41 1.41"/><path d="M2 12h2"/><path d="M20 12h2"/><path d="m6.34 17.66-1.41 1.41"/><path d="m19.07 4.93-1.41 1.41"/>',
'moon':'<path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/>',
'smartphone':'<rect width="14" height="20" x="5" y="2" rx="2" ry="2"/><path d="M12 18h.01"/>',
'check':'<path d="M20 6 9 17l-5-5"/>',
'circle-check':'<circle cx="12" cy="12" r="10"/><path d="m9 12 2 2 4-4"/>',
'clock':'<circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>',
'triangle-alert':'<path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3"/><path d="M12 9v4"/><path d="M12 17h.01"/>',
'search':'<circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/>',
'phone':'<path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>',
'pencil':'<path d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z"/>',
'trash-2':'<path d="M3 6h18"/><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"/><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"/><line x1="10" x2="10" y1="11" y2="17"/><line x1="14" x2="14" y1="11" y2="17"/>',
'eye':'<path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0"/><circle cx="12" cy="12" r="3"/>',
'eye-off':'<path d="M10.733 5.076a10.744 10.744 0 0 1 11.205 6.575 1 1 0 0 1 0 .696 10.747 10.747 0 0 1-1.444 2.49"/><path d="M14.084 14.158a3 3 0 0 1-4.242-4.242"/><path d="M17.479 17.499a10.75 10.75 0 0 1-15.417-5.151 1 1 0 0 1 0-.696 10.75 10.75 0 0 1 4.446-5.143"/><path d="m2 2 20 20"/>',
'log-out':'<path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><polyline points="16 17 21 12 16 7"/><line x1="21" x2="9" y1="12" y2="12"/>',
'credit-card':'<rect width="20" height="14" x="2" y="5" rx="2"/><line x1="2" x2="22" y1="10" y2="10"/>',
'book-open':'<path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/>',
'file-text':'<path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"/><path d="M14 2v4a2 2 0 0 0 2 2h4"/><path d="M10 9H8"/><path d="M16 13H8"/><path d="M16 17H8"/>',
'thumbs-up':'<path d="M7 10v12"/><path d="M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2a3.13 3.13 0 0 1 3 3.88Z"/>',
'flag':'<path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"/><line x1="4" x2="4" y1="22" y2="15"/>',
'link':'<path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/>',
'message-circle':'<path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z"/>',
'globe':'<circle cx="12" cy="12" r="10"/><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/><path d="M2 12h20"/>',
'refresh':'<path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8"/><path d="M21 3v5h-5"/><path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16"/><path d="M8 16H3v5"/>',
'key':'<circle cx="7.5" cy="15.5" r="5.5"/><path d="m21 2-9.6 9.6"/><path d="m15.5 7.5 3 3L22 7l-3-3"/>',
'fingerprint':'<path d="M12 10a2 2 0 0 0-2 2c0 1.02-.1 2.51-.26 4"/><path d="M14 13.12c0 2.38 0 6.38-1 8.88"/><path d="M17.29 21.02c.12-.6.43-2.3.5-3.02"/><path d="M2 12a10 10 0 0 1 18-6"/><path d="M2 16h.01"/><path d="M21.8 16c.2-2 .131-5.354 0-6"/><path d="M5 19.5C5.5 18 6 15 6 12a6 6 0 0 1 .34-2"/><path d="M8.65 22c.21-.66.45-1.32.57-2"/><path d="M9 6.8a6 6 0 0 1 9 5.2v2"/>',
'camera':'<path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z"/><circle cx="12" cy="13" r="3"/>',
'repeat':'<path d="m17 2 4 4-4 4"/><path d="M3 11v-1a4 4 0 0 1 4-4h14"/><path d="m7 22-4-4 4-4"/><path d="M21 13v1a4 4 0 0 1-4 4H3"/>',
'lightbulb':'<path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5"/><path d="M9 18h6"/><path d="M10 22h4"/>',
'circle-alert':'<circle cx="12" cy="12" r="10"/><line x1="12" x2="12" y1="8" y2="12"/><line x1="12" x2="12.01" y1="16" y2="16"/>',
'ban':'<circle cx="12" cy="12" r="10"/><path d="m4.9 4.9 14.2 14.2"/>',
'x':'<path d="M18 6 6 18"/><path d="m6 6 12 12"/>',
'image':'<rect width="18" height="18" x="3" y="3" rx="2" ry="2"/><circle cx="9" cy="9" r="2"/><path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"/>',
'upload':'<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="17 8 12 3 7 8"/><line x1="12" x2="12" y1="3" y2="15"/>',
'bell':'<path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"/><path d="M10.3 21a1.94 1.94 0 0 0 3.4 0"/>',
'info':'<circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><path d="M12 8h.01"/>',
'plus':'<path d="M5 12h14"/><path d="M12 5v14"/>','whatsapp':'<path d="M3 21l1.65-4.9A9 9 0 1 1 8 19.5z"/><path d="M9 9.5c0 3 2.5 5.5 5.5 5.5l1.2-1.3-2-1-.9.8a4 4 0 0 1-2-2l.8-.9-1-2z"/>','download':'<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" x2="12" y1="15" y2="3"/>','share-2':'<circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><line x1="8.59" x2="15.42" y1="13.51" y2="17.49"/><line x1="15.41" x2="8.59" y1="6.51" y2="10.49"/>','copy':'<rect width="14" height="14" x="8" y="8" rx="2" ry="2"/><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"/>','zap':'<path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"/>'
};
function khWAimg(s){return '<svg class="wa-img" viewBox="0 0 24 24" width="'+s+'" height="'+s+'" role="img" aria-label="WhatsApp"><path fill="#25D366" d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>';}
function khIC(n,s){return '<span class="ic"><svg viewBox="0 0 24 24" aria-hidden="true"'+(s?' style="width:'+s+'px;height:'+s+'px"':'')+'>'+(khP[n]||'')+'</svg></span>';}
/* every emoji used anywhere in the app is swapped for an icon after each render */
const khEMO={'📒':'book-open','🎨':'palette','💳':'credit-card','⚠':'triangle-alert','🔒':'lock','🔓':'unlock','🚪':'log-out','🗑':'trash-2','✅':'circle-check','🟡':'clock','🙈':'eye-off','🔍':'search','📞':'phone','✏':'pencil','📲':'message-circle','🔐':'lock-keyhole','🖐':'fingerprint','🔑':'key','📦':'package','🧾':'file-text','📢':'megaphone','👍':'thumbs-up','🚩':'flag','🔗':'link','💬':'message-circle','⏳':'clock','⛔':'ban','🌐':'globe','👤':'user','⟳':'refresh','✔':'check','🔴':'circle-alert','🔁':'repeat','👁':'eye','💡':'lightbulb','📷':'camera','✕':'x','🔄':'refresh'};
const khRE=new RegExp('('+Object.keys(khEMO).sort((a,b)=>b.length-a.length).join('|')+')\\uFE0F?','g');
function khIZ(root){if(!root)return;const w=document.createTreeWalker(root,NodeFilter.SHOW_TEXT,null),list=[];let n;while((n=w.nextNode())){const p=n.parentNode;if(!p||/^(SCRIPT|STYLE|TEXTAREA|OPTION|TITLE)$/.test(p.nodeName))continue;khRE.lastIndex=0;if(khRE.test(n.nodeValue))list.push(n);}
list.forEach(n=>{const t=n.nodeValue,f=document.createDocumentFragment();let last=0,m;khRE.lastIndex=0;while((m=khRE.exec(t))){if(m.index>last)f.appendChild(document.createTextNode(t.slice(last,m.index)));const s=document.createElement('span');s.innerHTML=khIC(khEMO[m[1]]);f.appendChild(s.firstChild);last=m.index+m[0].length;}if(last<t.length)f.appendChild(document.createTextNode(t.slice(last)));n.parentNode.replaceChild(f,n);});}

/* ---------- theme: light / dark + accent (only the light-blue parts change) ---------- */
let khPrev=null;
function khTS(){const c=(DYER&&DYER.customization)||{},p=khPrev||{};return{mode:p.mode||c.mode||'light',accent:c.colorOn===false?'auto':((a)=>(!a||String(a).toLowerCase()==='#4aa8e8')?'auto':a)(p.accent||c.accent)};}
function khDark(m){return m==='dark'||(m==='auto'&&window.matchMedia&&matchMedia('(prefers-color-scheme: dark)').matches);}
function khApply(){const t=khTS(),r=document.documentElement;r.setAttribute('data-theme',khDark(t.mode)?'dark':'light');if(t.accent==='auto'){r.style.removeProperty('--accent');r.style.removeProperty('--on-accent');}else{r.style.setProperty('--accent',t.accent);r.style.setProperty('--on-accent','#fff');}khDPRefresh();}
function khBG(){return khDark(khTS().mode)?'#0d0d0f':'#ffffff';}
/* ---------- app icon: My Khata book logo, colour follows the theme (no image files) ---------- */
const KH_LOGO="M319.5 349.5L315.8 345.3L314.0 344.3L307.4 343.9L267.4 356.1L223.2 370.7L218.5 374.9L217.1 377.8L216.2 381.1L216.2 383.9L217.1 387.2L218.5 389.5L222.7 392.8L226.4 393.8L229.7 393.3L274.9 377.3L312.1 366.5L315.4 364.6L319.5 359.4L320.5 356.6L320.5 352.3ZM346.6 305.7L344.2 301.0L341.0 298.2L338.2 297.2L333.5 297.2L284.2 312.8L270.2 316.5L219.9 332.5L215.3 336.8L213.4 340.6L212.9 342.9L213.4 347.1L214.8 350.4L219.0 354.2L221.3 355.2L226.9 355.2L264.6 342.4L339.6 319.8L342.4 317.9L344.7 315.1L346.6 310.4ZM344.7 266.6L342.4 262.4L339.6 260.0L337.2 259.1L333.1 258.6L234.4 288.3L219.9 293.0L215.3 295.8L212.5 299.6L211.1 304.8L211.5 309.0L212.9 311.8L216.2 315.1L219.9 316.5L225.0 316.5L264.1 303.8L324.7 285.4L335.8 282.6L339.6 280.7L343.3 276.5L345.2 270.8ZM103.5 158.7L99.3 168.1L97.5 178.0L97.9 318.9L98.9 327.4L101.7 336.3L105.4 343.4L107.7 346.7L114.7 353.7L145.9 374.0L173.4 390.5L197.1 405.6L199.0 405.6L201.3 404.1L201.8 403.2L201.8 366.5L200.4 360.8L198.0 356.1L192.0 349.5L175.7 338.7L162.2 330.7L157.5 325.5L154.7 318.4L155.2 221.4L157.5 215.7L160.3 212.4L165.0 209.6L168.7 208.7L173.8 209.1L179.9 212.0L213.9 231.7L239.0 245.4L253.0 254.4L260.0 257.6L264.1 257.6L295.8 244.5L314.4 235.5L335.4 227.0L354.0 218.1L361.0 217.6L365.2 219.5L368.9 222.8L371.7 228.4L371.7 339.6L370.3 343.9L368.0 348.1L361.5 354.7L352.6 359.4L268.8 397.1L231.1 416.4L230.2 417.3L230.2 419.2L236.7 423.9L243.2 426.8L249.2 427.7L254.4 427.2L260.9 424.9L314.0 400.8L341.9 389.1L391.2 366.0L397.3 361.8L403.4 355.6L407.1 350.4L411.3 342.0L413.1 335.8L414.1 329.7L414.5 175.7L413.6 172.4L411.3 168.1L406.6 163.9L399.6 161.6L395.9 161.6L389.4 163.4L364.7 174.7L329.3 192.6L316.8 197.8L286.5 212.4L164.5 144.1L150.1 137.1L145.4 136.1L136.6 136.1L125.9 138.9L120.3 141.8L114.2 146.0L107.3 153.1ZM395.0 122.9L391.2 119.2L386.6 117.3L378.2 117.7L364.2 124.8L344.7 133.3L334.9 138.5L313.0 147.9L279.5 163.9L275.3 165.3L256.2 174.7L254.8 176.6L256.2 178.0L261.4 180.4L287.0 195.0L289.3 195.0L315.8 182.3L339.6 171.9L362.8 160.1L389.4 148.4L393.1 145.1L396.8 137.5L397.3 128.6ZM350.3 94.2L345.6 88.5L342.4 86.7L339.6 85.7L333.5 85.7L330.7 86.7L301.9 101.7L217.1 143.2L208.3 147.9L207.3 148.8L207.3 150.2L239.0 167.7L241.3 167.2L323.7 126.7L324.7 125.8L344.2 116.8L348.9 111.6L351.2 105.5L351.7 99.4Z";
function khIconColors(){const a=khTS().accent;return{ink:(a&&a!=='auto')?a:'#111111',paper:'#ffffff'};}
function khIconURI(fav){const o=khIconColors(),a=khTS().accent,cu=(a&&a!=='auto'),hd='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">';
if(!fav)return 'data:image/svg+xml,'+encodeURIComponent(hd+'<rect x="16" y="16" width="480" height="480" rx="110" fill="'+o.paper+'"/><path fill="'+o.ink+'" fill-rule="evenodd" d="'+KH_LOGO+'"/></svg>');
/* browser tab: browser light -> black tile, browser dark -> white tile */
return 'data:image/svg+xml,'+encodeURIComponent(hd+'<style>.t{fill:#000}.h{fill:'+(cu?a:'#fff')+'}@media (prefers-color-scheme:dark){.t{fill:#fff}.h{fill:'+(cu?a:'#000')+'}}</style><rect class="t" x="16" y="16" width="480" height="480" rx="110"/><path class="h" fill-rule="evenodd" d="'+KH_LOGO+'"/></svg>');}
function khIconPNG(sz,mask){try{const c=document.createElement('canvas');c.width=c.height=sz;const x=c.getContext('2d'),k=sz/512,o=khIconColors();x.fillStyle=o.paper;if(mask){x.fillRect(0,0,sz,sz);}else{const a=16*k,w=480*k,r=110*k;x.beginPath();x.moveTo(a+r,a);x.arcTo(a+w,a,a+w,a+w,r);x.arcTo(a+w,a+w,a,a+w,r);x.arcTo(a,a+w,a,a,r);x.arcTo(a,a,a+w,a,r);x.closePath();x.fill();}
const f=(mask?0.92:1)*k;x.save();x.translate(256*k,256*k);x.scale(f,f);x.translate(-256,-256);x.fillStyle=o.ink;x.fill(new Path2D(KH_LOGO),'evenodd');x.restore();return c.toDataURL('image/png');}catch(e){return khIconURI();}}
function khChoose(patch){DYER.customization=Object.assign({},DYER.customization||{},patch);$O();khPrev=null;khApply();PF9u();Nek('Saved');khRefresh();}
if(window.matchMedia)try{matchMedia('(prefers-color-scheme: dark)').addEventListener('change',()=>{if(DYER)PF9u();else khApply();});}catch(e){}

/* ---------- plan strip on the home screen ---------- */
function khToSub(){if(khGuest()){khLoginAsk('Plans and subscription need an account.');return;}egF={screen:'subscribe',customerId:null};ynNo();}
function khPlan(){const w=document.createElement('div'),p=dNW(),n=DYER.customers.length,s=DYER.subscription||{};w.className='plan-strip '+(p?'paid':'free');
if(p){const d=Math.max(0,Math.ceil((s.expiresAt-Date.now())/864e5));w.innerHTML='<span class="ps-ic">'+khIC('crown',22)+'</span><div><div class="ps-t">Pro — '+(s.plan==='yearly'?'Yearly':'Monthly')+'</div><div class="ps-s">Valid till '+GlZA(s.expiresAt)+' · '+d+' days left</div></div><span class="ps-go">Manage</span>';}
else{const pc=Math.min(100,Math.round(n/fp*100));w.innerHTML='<span class="ps-ic">'+khIC('user',22)+'</span><div style="flex:1;min-width:0"><div class="ps-t">Free plan</div><div class="ps-s">'+n+' / '+fp+' customers used</div><div class="ps-bar"><i style="width:'+pc+'%"></i></div></div><span class="ps-go">Upgrade</span>';}
w.onclick=khToSub;return w;}
function khQR(){const n=25;let seed=7,r='';const rnd=()=>(seed=(seed*1103515245+12345)&0x7fffffff)/0x7fffffff;
const fin=(x,y)=>{for(const o of [[0,0],[n-7,0],[0,n-7]]){const dx=x-o[0],dy=y-o[1];if(dx>=0&&dx<7&&dy>=0&&dy<7)return(dx==0||dx==6||dy==0||dy==6||(dx>=2&&dx<=4&&dy>=2&&dy<=4))?1:0;}return -1;};
for(let y=0;y<n;y++)for(let x=0;x<n;x++){let v=fin(x,y);if(v<0){const nf=(x<8&&y<8)||(x>=n-8&&y<8)||(x<8&&y>=n-8);v=nf?0:(rnd()>.5?1:0);}if(v)r+='<rect x="'+x+'" y="'+y+'" width="1" height="1"/>';}
return 'data:image/svg+xml;utf8,'+encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" viewBox="-2 -2 '+(n+4)+' '+(n+4)+'" shape-rendering="crispEdges"><rect x="-2" y="-2" width="'+(n+4)+'" height="'+(n+4)+'" fill="#fff"/><g fill="#111">'+r+'</g></svg>');}

/* ---------- locked customers (fingerprint / PIN to open) ---------- */
function khPin(){return new Promise(res=>{const o=document.createElement('div');o.className='modal-overlay';o.style.zIndex=300;o.innerHTML='<div class="modal"><h3>Locked account</h3><div class="field"><label>Enter your account password</label><input type="password" id="kpin" autocomplete="current-password" placeholder="Website login password"></div><div class="modal-actions"><button class="cancel">Cancel</button><button class="confirm">Open</button></div></div>';document.body.appendChild(o);khIZ(o);const i=o.querySelector('#kpin');setTimeout(()=>i.focus(),50);const done=v=>{o.remove();res(v);};o.querySelector('.cancel').onclick=()=>done(false);o.querySelector('.confirm').onclick=async()=>{const ks=window.__ks;let ok=false;try{ok=ks&&ks.verifyPw?await ks.verifyPw(i.value):false;}catch(e){}if(ok===true)done(true);else{i.value='';Nek(ok===null?'Internet is needed to verify your password':'Wrong password');}};i.addEventListener('keydown',e=>{if(e.key==='Enter')o.querySelector('.confirm').click();});});}
async function khAuth(){return khPin();}
async function khAuthOld(){if(YP4()&&mS0A()){try{if(!(await vOd())){Nek('Fingerprint is not available here');return false;}const j=JSON.parse(localStorage.getItem(yegt));await navigator.credentials.get({publicKey:{challenge:crypto.getRandomValues(new Uint8Array(32)),allowCredentials:[{type:'public-key',id:Dj(j.id)}],userVerification:'required',timeout:60000}});return true;}catch(e){Nek('Verification cancelled');return false;}}
if(Lo2C())return khPin();return true;}
function khLP(O,M){M.innerHTML='<h3>🔐 Add customer to Lock</h3><div style="font-size:12px;color:var(--ink-soft);margin-bottom:10px;line-height:1.5">Locked accounts leave the main list and open only with your account password.</div><input class="picker-search" id="lp-q" placeholder="Search customer…"><div class="picker-list" id="lp-l"></div><div class="modal-actions"><button class="cancel">Close</button></div>';
const l=M.querySelector('#lp-l'),q=M.querySelector('#lp-q');
function draw(){const s=q.value.trim().toLowerCase(),a=DYER.customers.filter(c=>!c.hidden&&c.name.toLowerCase().includes(s));l.innerHTML=a.length?'':'<div class="picker-empty">No customers to lock.</div>';a.forEach(c=>{const d=document.createElement('div');d.className='picker-item';d.innerHTML='<div><div class="pn">'+YoYV(c.name)+'</div><div class="pm">Due Rs '+UscD(zti2(c).balance)+'</div></div>'+khIC('lock',18);d.onclick=()=>{c.hidden=true;$O();$Wx=null;Nek('Account locked');ynNo();};l.appendChild(d);});khIZ(l);}
q.oninput=draw;draw();M.querySelector('.cancel').onclick=()=>{$Wx=null;ynNo();};O.appendChild(M);return O;}

/* ---------- text ads when the app opens ---------- */
let khAdShown=false;
function khAdOK(){return !(DYER.settings&&DYER.settings.adsOpen===false);}
function khAds(){if(khAdShown)return;khAdShown=true;if(!khAdOK())return;const ks=KS();if(!ks)return;
ks.rpc('list_ads').then(res=>{const all=((res&&res.data)||[]).filter(x=>NL(x.link));if(!all.length)return;
const key='khata-lastad'+gr5y;let last='';try{last=localStorage.getItem(key)||'';}catch(e){}
let pool=all.filter(x=>String(x.id)!==last);if(!pool.length)pool=all;
const wt=pool.map(x=>Math.max(1,1+(x.likes||0)-2*(x.reports||0)));let roll=Math.random()*wt.reduce((p,q)=>p+q,0),a=pool[0];for(let i=0;i<pool.length;i++){roll-=wt[i];if(roll<=0){a=pool[i];break;}}
try{localStorage.setItem(key,String(a.id));}catch(e){}
const ap=adParse(a),o=document.createElement('div');o.className='modal-overlay';o.style.zIndex=250;
o.innerHTML='<div class="modal ad-pop"><div class="ad-pop-top"><span class="ad-pop-tag">Sponsored</span><button class="ad-pop-x" aria-label="Skip">Skip</button></div><div class="ad-top">'+adDP(a)+'<div class="ad-meta"><div class="ad-head">'+YoYV(a.title||'')+'</div><div class="ad-link">'+YoYV(hostOf(a.link||''))+'</div></div></div>'+(ap.text?'<div class="ad-detail">'+YoYV(ap.text)+'</div>':'')+(a.comment?'<div class="ad-comment">💬 '+YoYV(a.comment)+'</div>':'')+'<div style="display:flex;gap:8px"><button class="add-btn blue ad-pop-go" style="flex:1;margin:0">Open</button>'+(ap.wa?'<button class="add-btn secondary ad-pop-wa" style="width:auto;margin:0;padding:8px 14px" aria-label="WhatsApp">'+khWAimg(22)+'</button>':'')+'</div></div>';
const close=()=>o.remove();
o.querySelector('.ad-pop-go').onclick=()=>{OPENL(a.link);close();};{const pw=o.querySelector('.ad-pop-wa');if(pw)pw.onclick=()=>{adWA(a);close();};}o.querySelector('.ad-pop-x').onclick=close;
o.onclick=e=>{if(e.target===o)close();};document.body.appendChild(o);khIZ(o);}).catch(()=>{});}


/* ---------- guest mode + data-status circle ---------- */
function khGuest(){return !!(window.__ks&&window.__ks.guest);}
function khModal(title,html,btns){const o=document.createElement('div');o.className='modal-overlay';o.innerHTML='<div class="modal"><h3>'+title+'</h3><div class="kh-mtxt">'+html+'</div><div class="modal-actions"></div></div>';const a=o.querySelector('.modal-actions');const close=()=>o.remove();btns.forEach(b=>{const x=document.createElement('button');x.className=b.cls||'cancel';x.textContent=b.t;x.onclick=()=>{close();b.fn&&b.fn();};a.appendChild(x);});o.onclick=e=>{if(e.target===o)close();};document.body.appendChild(o);return o;}
function khLoginAsk(why){khModal('&#128274; Login required','<p>'+why+'</p><p class="kh-mnote">Nothing is lost: everything you entered as a guest moves into your account when you log in.</p>',[{t:'Not now'},{t:'Login / Create account',cls:'confirm',fn:()=>{if(window.__ks&&window.__ks.showLogin)window.__ks.showLogin();}}]);}
function khDot(root){const d=(root||document).querySelector('#sync-dot');if(!d||!window.__ks||!window.__ks.status)return;const ks=window.__ks,s=ks.status(),on=!!(ks.syncOn&&ks.syncOn()),tip=s.label+(khGuest()?'':'  ·  Tap or press Y to turn '+(on?'off':'on'));d.dataset.s=s.state;d.setAttribute('data-tip',tip);d.setAttribute('aria-label',tip);d.setAttribute('aria-keyshortcuts','Y');}
function khDotToggle(){const ks=window.__ks;if(!ks||!ks.status)return;if(khGuest()){khLoginAsk('Login to turn on cloud sync.');return;}if(!ks.setSync||!ks.syncOn){Nek('Cloud is not ready');return;}khSyncSet(!ks.syncOn());}
function khDotOpen(){const ks=window.__ks;if(!ks||!ks.status)return;const s=ks.status(),st=s.state;let t,txt,btn;
if(st==='guest'){t='Guest mode';txt='<p>Your data is saved <b>only on this device</b>. If you clear browser data or change phone it will be lost.</p><p class="kh-mnote">Login to back it up on the cloud and unlock Settings.</p>';btn={t:'Login / Create account',cls:'confirm',fn:()=>ks.showLogin()};}
else if(st==='local'){t='Only on this device';txt='<p>Cloud sync is <b>OFF</b>, so your data is not backed up online.</p><p class="kh-mnote">Turn it on in Settings &gt; Cloud sync.</p>';btn={t:'Open Settings',cls:'confirm',fn:khOpen};}
else if(st==='pending'){t=navigator.onLine?'Uploading...':'Offline';txt='<p>'+(navigator.onLine?'Your latest changes are waiting to upload to the cloud.':'You are offline. Your changes are saved on this device and will upload automatically when you are online.')+'</p>';btn=navigator.onLine?{t:'Sync now',cls:'confirm',fn:()=>ks.syncNow().then(r=>{Nek(r.msg);khDot();})}:null;}
else if(st==='offline'){t='Not logged in';txt='<p>You are working offline from the data on this device. Log in again when you are online.</p>';btn=null;}
else{t='All safe &#10003;';txt='<p>Your data is on the <b>cloud</b> and on <b>this device</b>.</p>';btn={t:'Sync now',cls:'confirm',fn:()=>ks.syncNow().then(r=>{Nek(r.msg);khDot();})};}
khModal(t,txt,[{t:'Close'}].concat(btn?[btn]:[]));}
window.addEventListener('khata-sync',()=>khDot());window.addEventListener('online',()=>khDot());window.addEventListener('offline',()=>khDot());setInterval(()=>khDot(),3000);
/* ---------- settings: one easy page ---------- */
let khStk=['root'];
const khNote=(t,c)=>{const d=document.createElement('div');d.className='set-note'+(c?' '+c:'');d.innerHTML=t;return d;};
const khBtn=(txt,cls,fn)=>{const b=document.createElement('button');b.className='add-btn '+(cls||'');b.innerHTML=txt;b.onclick=fn;return b;};
const khField=(label,id,val,type,ph)=>'<div class="field"><label>'+label+'</label><input type="'+(type||'text')+'" id="'+id+'" value="'+YoYV(val||'').replace(/"/g,'&quot;')+'" placeholder="'+(ph||'')+'"></div>';
function khRow(it){const r=document.createElement('div');r.className='set-row'+((it.go||it.act||it.toggle)?' tap':'');let rt='';
if(it.toggle)rt='<button class="sw'+(it.toggle.get()?' on':'')+'" aria-label="Toggle"><i></i></button>';else if(it.sel)rt='<span class="sel-ic">'+khIC('check',20)+'</span>';else if(it.go)rt=khIC('chevron-right',18);else if(it.val!=null)rt='<span class="set-val">'+YoYV(String(it.val))+'</span>';
r.innerHTML='<span class="set-ic">'+(it.wa?khWAimg(22):khIC(it.ic||'settings',20))+'</span><div class="set-tx"><div class="set-t">'+YoYV(it.t)+(it.tag?'<span class="set-tag">'+it.tag+'</span>':'')+'</div>'+(it.d?'<div class="set-d">'+YoYV(it.d)+'</div>':'')+'</div>'+rt;
if(it.go)r.onclick=()=>khGo(it.go);else if(it.act)r.onclick=it.act;else if(it.toggle)r.onclick=()=>it.toggle.set(!it.toggle.get());if(it.go||it.act||it.toggle){r.tabIndex=0;r.setAttribute('role','button');}return r;}
function khList(items){const l=document.createElement('div');l.className='set-list';items.forEach(i=>l.appendChild(khRow(i)));return l;}
let khKbd=false;
document.addEventListener('keydown',()=>{khKbd=true;},true);document.addEventListener('pointerdown',()=>{khKbd=false;},true);
function khFocusFirst(){if(!khKbd)return;setTimeout(()=>{const r=document.querySelector('.set-row.tap');if(r)r.focus();},0);}
function khOpen(){if(khGuest()){khLoginAsk('Settings are only available after you log in.');return;}khStk=['root'];egF={screen:'settings',customerId:null};ynNo();window.scrollTo(0,0);khFocusFirst();}
function khGo(id){khStk.push(id);ynNo();window.scrollTo(0,0);khFocusFirst();}
function khPop(){if(khStk.length>1){khStk.pop();ynNo();khFocusFirst();}else{khPrev=null;khApply();khStk=['root'];Q7A();}}
function khBack(){khPop();}
/* ---------- keyboard: Enter = next, Up/Down = move, Esc/Back = one layer ---------- */
(function(){
document.__keyboardNavInstalled=true;
const st=document.createElement('style');st.textContent='.set-row.tap:focus-visible,.back-btn:focus-visible,.tab-btn:focus-visible,.add-btn:focus-visible,.auth-btn:focus-visible,.icon-btn:focus-visible{outline:2px solid var(--accent,#111);outline-offset:2px}.set-row.tap:focus-visible{outline-offset:-2px}';document.head.appendChild(st);
const SEL='input:not([disabled]):not([type=hidden]):not([type=file]),select:not([disabled]),textarea:not([disabled]),button:not([disabled]),[tabindex="0"]';
const FIELD=/^(INPUT|SELECT|TEXTAREA)$/,SKIPT=/^(date|time|datetime-local|month|week|range|color|radio)$/;
const scope=()=>{const m=document.querySelectorAll('.modal-overlay,.img-lightbox');return m.length?m[m.length-1]:document;};
const items=()=>Array.from(scope().querySelectorAll(SEL)).filter(el=>el.getClientRects().length>0&&!el.matches('.set-row .sw')&&el.tabIndex>=0);
const focusEl=el=>{if(!el)return;el.focus();if(FIELD.test(el.tagName)&&/^(text|password|search|tel|email|url|number)$/.test(el.type||''))try{el.select();}catch(x){}};
document.addEventListener('keydown',e=>{
  if(e.defaultPrevented||e.altKey||e.ctrlKey||e.metaKey)return;
  const a=document.activeElement,tag=(a&&a.tagName)||'',k=e.key,isF=FIELD.test(tag),inSet=egF.screen==='settings';
  if(k==='Escape'){
    if($Wx){e.preventDefault();$Wx=null;ynNo();return;}
    const lb=document.querySelector('.img-lightbox');if(lb){e.preventDefault();lb.remove();return;}
    if(inSet&&!document.querySelector('.modal-overlay')){e.preventDefault();khBack();}
    return;
  }
  const list=items(),i=list.indexOf(a);
  const go=d=>{if(!list.length)return false;if(i<0){const pri=list.filter(el=>!el.closest('header.top,.tabs'));if(pri.length){e.preventDefault();focusEl(d>0?pri[0]:pri[pri.length-1]);return true;}}let n=i<0?(d>0?0:list.length-1):i+d;const gp=(a&&a.matches&&a.matches('.seg-b,.sw-c'))?a.parentElement:null;if(gp)while(list[n]&&list[n].parentElement===gp)n+=d;if(n<0||n>=list.length)return true;e.preventDefault();focusEl(list[n]);return true;};
  if(isF){
    const t=(a.type||'').toLowerCase();
    if(tag==='SELECT'||SKIPT.test(t))return;
    if(k==='ArrowDown'||k==='ArrowUp'){
      if(tag==='TEXTAREA'){const bf=a.value.slice(0,a.selectionStart),af=a.value.slice(a.selectionEnd);if(k==='ArrowUp'&&bf.indexOf('\n')!==-1)return;if(k==='ArrowDown'&&af.indexOf('\n')!==-1)return;}
      go(k==='ArrowDown'?1:-1);return;
    }
    if(k==='Enter'&&tag!=='TEXTAREA'&&a.closest('.modal,.auth-card,.set-note,.set-blk,.field,.pay-box')){
      const nx=list[i+1];if(!nx)return;e.preventDefault();
      if(FIELD.test(nx.tagName))focusEl(nx);else if(nx.tagName==='BUTTON'&&!nx.matches('.back-btn,.secondary,.tab-btn,.icon-btn,.sw'))nx.click();else focusEl(nx);
    }
    return;
  }
  if(k==='ArrowDown'){go(1);return;}
  if(k==='ArrowUp'){go(-1);return;}
  if((k==='ArrowLeft'||k==='ArrowRight')&&a&&a.matches&&a.matches('.seg-b,.sw-c')){const sib=[...a.parentElement.querySelectorAll('.seg-b,.sw-c')].filter(x=>x.getClientRects().length>0),j=sib.indexOf(a),nx=sib[j+(k==='ArrowRight'?1:-1)];e.preventDefault();if(nx)focusEl(nx);return;}
  if(k==='ArrowLeft'){if(inSet&&!document.querySelector('.modal-overlay')){e.preventDefault();khBack();}else go(-1);return;}
  if(k==='ArrowRight'){if(inSet&&a&&a.classList&&a.classList.contains('set-row')){e.preventDefault();a.click();}else go(1);return;}
  if((k==='Enter'||k===' ')&&a&&a.getAttribute&&a.getAttribute('role')==='button'&&tag!=='BUTTON'){e.preventDefault();a.click();return;}
  if(k==='Backspace'&&inSet){e.preventDefault();khBack();}
});
})();

let khWaPop=false;
function khPayOK(n){const d=String(n||'').replace(/\D/g,'');return d.length>=10&&d.length<=13;}
function khShake(el){if(el&&el.animate)el.animate([{transform:'translateX(0)'},{transform:'translateX(-8px)'},{transform:'translateX(8px)'},{transform:'translateX(-5px)'},{transform:'translateX(0)'}],{duration:320,easing:'ease-out'});}
function khNetMsg(e,fb){const m=String((e&&e.message)||'');if(!navigator.onLine||/failed to fetch|networkerror|network request|load failed|timeout|not connected/i.test(m))return 'No internet connection. Connect to the internet and try again.';return m||fb||'Something went wrong';}
function khDPRefresh(){try{document.querySelectorAll('img[data-dp]').forEach(i=>{i.src=khLogoURI();});}catch(e){}}
/* ---------- animations: page transitions + staggered lists (only on screen change) + offline banner ---------- */
(function(){
const st=document.createElement('style');st.textContent=`
@keyframes khUp{from{opacity:0;transform:translateY(16px)}to{opacity:1;transform:none}}
@keyframes khFwd{from{opacity:0;transform:translateX(34px)}to{opacity:1;transform:none}}
@keyframes khBk{from{opacity:0;transform:translateX(-34px)}to{opacity:1;transform:none}}
@keyframes khL{from{opacity:0;transform:translateX(30px)}to{opacity:1;transform:none}}
@keyframes khR{from{opacity:0;transform:translateX(-30px)}to{opacity:1;transform:none}}
@keyframes khFade{from{opacity:0}to{opacity:1}}
@keyframes khSheet{from{opacity:0;transform:translateY(22px) scale(.97)}to{opacity:1;transform:none}}
@keyframes khItem{from{opacity:0;transform:translateY(14px) scale(.985)}to{opacity:1;transform:none}}
@keyframes khPopIn{0%{opacity:0;transform:scale(.5)}60%{opacity:1;transform:scale(1.14)}100%{opacity:1;transform:none}}
@keyframes khPulse{0%,100%{box-shadow:0 0 0 0 rgba(37,211,102,.5)}70%{box-shadow:0 0 0 14px rgba(37,211,102,0)}}
@keyframes khSel{0%{transform:scale(.97)}60%{transform:scale(1.03)}100%{transform:none}}
@keyframes khSlideUp{0%{opacity:1;transform:none;max-height:460px}100%{opacity:0;transform:translateY(-34px);max-height:0;margin-top:0;margin-bottom:0;padding-top:0;padding-bottom:0;border-width:0}}
#root.kh-up>:not(header.top):not(.tabs){animation:khUp .42s cubic-bezier(.22,1,.36,1) both}
#root.kh-fwd>:not(header.top):not(.tabs){animation:khFwd .36s cubic-bezier(.22,1,.36,1) both}
#root.kh-bk>:not(header.top):not(.tabs){animation:khBk .36s cubic-bezier(.22,1,.36,1) both}
#root.kh-l>:not(header.top):not(.tabs){animation:khL .34s cubic-bezier(.22,1,.36,1) both}
#root.kh-r>:not(header.top):not(.tabs){animation:khR .34s cubic-bezier(.22,1,.36,1) both}
.kh-item{animation:khItem .46s cubic-bezier(.22,1,.36,1) both;animation-delay:calc(var(--i,0) * 45ms + 70ms)}
.modal-overlay{animation:khFade .22s ease both}
.modal-overlay>*{animation:khSheet .3s cubic-bezier(.22,1,.36,1) both}
.toast{animation:khFade .25s ease both}
.kh-pop{animation:khPopIn .55s cubic-bezier(.2,.9,.3,1.3) both,khPulse 1.6s ease-out .6s 2}
.kh-pa{max-width:420px;margin:18px auto;text-align:center;overflow:hidden}
.kh-pa .field{text-align:left}
.kh-pa .field label{display:block;text-align:center}
.kh-pa input{text-align:center}
.kh-pa .paymethod-row{justify-content:center}
.kh-pa.kh-out{animation:khSlideUp .44s cubic-bezier(.4,0,.2,1) forwards;pointer-events:none}
.qr-img{animation:khFade .6s ease both}
.plan-card.selected:not(.kh-item){animation:khSel .32s ease}
button,.set-row.tap,.plan-card,.cust-card,.paymethod-opt{transition:transform .15s ease,box-shadow .2s ease,background-color .2s ease,border-color .2s ease,opacity .2s ease,filter .2s ease}
input,select,textarea{transition:border-color .2s ease,box-shadow .2s ease}
.sw,.sw i{transition:all .22s cubic-bezier(.4,0,.2,1)}
.add-btn:active,.plan-card:active,.set-row.tap:active,.wa-img-btn:active,.paymethod-opt:active,.back-btn:active,.tab-btn:active,.cust-card:active{transform:scale(.97)}
@media (hover:hover){.plan-card:hover,.cust-card:hover{transform:translateY(-2px)}.add-btn:hover{filter:brightness(1.08)}.set-row.tap:hover{filter:brightness(.97)}}
#kh-net{position:fixed;top:0;left:0;right:0;z-index:99999;display:flex;align-items:center;justify-content:center;gap:8px;padding:8px 14px;padding-top:calc(8px + env(safe-area-inset-top,0px));font:600 13px Inter,system-ui,sans-serif;color:#fff;transform:translateY(-110%);transition:transform .35s cubic-bezier(.22,1,.36,1);pointer-events:none}
#kh-net.show{transform:none}
#kh-net.off{background:#b42318}
#kh-net.on{background:#157f3b}
@media (prefers-reduced-motion:reduce){#root[class*="kh-"]>*,.kh-item{animation-name:khFade!important;animation-delay:0s!important;animation-duration:.2s!important}.kh-pop,.kh-pa.kh-out{animation-duration:.2s!important}}
`;document.head.appendChild(st);
const TABS=['home','inventory','profit','finance','ads'];
const depthOf=sc=>TABS.indexOf(sc)>=0?0:(sc==='settings'?khStk.length:1);
const SKIP=/^(SELECT|OPTION|SVG|PATH|SCRIPT|STYLE|HEADER)$/i;
const mark=(kids)=>{let i=0;for(const k of kids){if(i>=14)break;if(k.nodeType!==1||k.classList.contains('kh-item'))continue;k.style.setProperty('--i',i++);k.classList.add('kh-item');}};
function stagger(){
  [...efk4.children].filter(c=>!c.matches('header.top,.tabs')).forEach(c=>{
    let t=c;for(let n=0;n<2&&t.children.length===1&&!SKIP.test(t.firstElementChild.tagName);n++)t=t.firstElementChild;
    if(t.children.length>=2)mark([...t.children]);
    c.querySelectorAll('*').forEach(par=>{
      if(SKIP.test(par.tagName)||par.children.length<2)return;
      const g={};[...par.children].forEach(k=>{const n=(k.className&&typeof k.className==='string')?k.className.replace(/\bkh-item\b/,'').trim():'';if(n)(g[n]=g[n]||[]).push(k);});
      Object.values(g).forEach(l=>{if(l.length>=2)mark(l);});
    });
  });
}
let last='',lastD=0,lastSc='',lastT=0;
new MutationObserver(()=>{
  const sc=egF.screen,set=sc==='settings',k=sc+'|'+(set?khStk.join('>'):''),d=depthOf(sc);if(k===last){if(Date.now()-lastT<700){try{stagger();}catch(e){}}return;}lastT=Date.now();
  let cls='kh-up';
  if(d>lastD)cls='kh-fwd';else if(d<lastD)cls='kh-bk';
  else if(d===0&&TABS.indexOf(lastSc)>=0&&TABS.indexOf(sc)>=0)cls=TABS.indexOf(sc)>TABS.indexOf(lastSc)?'kh-l':'kh-r';
  last=k;lastD=d;lastSc=sc;
  efk4.classList.remove('kh-up','kh-fwd','kh-bk','kh-l','kh-r');void efk4.offsetWidth;efk4.classList.add(cls);
  try{stagger();}catch(e){}
  clearTimeout(efk4._kt);efk4._kt=setTimeout(()=>efk4.classList.remove(cls),1200);
}).observe(efk4,{childList:true});
const nb=document.createElement('div');nb.id='kh-net';nb.setAttribute('role','status');nb.innerHTML='<span id="kh-net-t"></span>';document.body.appendChild(nb);
let was=navigator.onLine;const nt=nb.querySelector('#kh-net-t');
const net=()=>{const on=navigator.onLine;
 if(!on){nb.className='off show';nt.textContent='No internet connection';}
 else if(!was){nb.className='on show';nt.textContent='Back online';clearTimeout(nb._t);nb._t=setTimeout(()=>nb.classList.remove('show'),2200);if(egF.screen==='ads'&&!$Wx){ADSTALE=true;ynNo();}}
 else nb.classList.remove('show');was=on;};
window.addEventListener('online',net);window.addEventListener('offline',net);net();
})();

function khRefresh(){const y=window.scrollY;ynNo();window.scrollTo(0,y);}
function khSet(){const id=khStk[khStk.length-1],pg=khPG[id]||khPG.root;
const w=document.createElement('div');
w.innerHTML='<button class="back-btn" id="set-back">'+khIC('arrow-left',16)+' '+(khStk.length>1?'Back':'Home')+'</button><h2 class="set-h">'+khIC(pg.ic||'settings',22)+' '+YoYV(pg.t)+'</h2>'+(khStk.length>1?'<div class="set-crumb">'+YoYV(khStk.map(x=>(khPG[x]||khPG.root).t).join(' › '))+'</div>':'');
w.querySelector('#set-back').onclick=khBack;const b=document.createElement('div');
if(pg.build)pg.build(b);else b.appendChild(khList(pg.items()));w.appendChild(b);return w;}

/* ---------- backup & restore ---------- */
function khBackup(){const o=Object.assign({},DYER);delete o.subscription;const a=document.createElement('a');a.href=URL.createObjectURL(new Blob([JSON.stringify(o)],{type:'application/json'}));a.download='khata-backup-'+new Date().toISOString().slice(0,10)+'.json';document.body.appendChild(a);a.click();a.remove();setTimeout(()=>URL.revokeObjectURL(a.href),4000);DYER.settings=DYER.settings||{};DYER.settings.lastBackup=Date.now();$O();Nek('Backup downloaded');khRefresh();}
function khRestore(f){if(!f)return;const r=new FileReader();r.onerror=()=>Nek('Could not read that file');
r.onload=()=>{let o;try{o=JSON.parse(r.result);}catch(e){Nek('This is not a valid backup file');return;}
if(!o||typeof o!=='object'||!Array.isArray(o.customers)||!Array.isArray(o.inventory)){Nek('This is not a My Khata backup file');return;}
if(!confirm('Restore this backup?\n\n'+o.customers.length+' customers and '+o.inventory.length+' products in the file will REPLACE the data on this device.'))return;
const keepSub=DYER.subscription,keepShop=DYER.shop,d=Object.assign(NEWD(),o);
d.subscription=keepSub;if(!d.shop)d.shop=keepShop;
['capitalEntries','expenses','stockPurchases','ads','bills'].forEach(k=>{if(!Array.isArray(d[k]))d[k]=[];});
if(!d.settings)d.settings={strict:true};if(!d.customization)d.customization=NEWD().customization;d.customization.icon=null;
DYER=d;$O();PF9u();Nek('Backup restored');khRefresh();};r.readAsText(f);}
async function khSyncSet(v){const ks=window.__ks;Nek('Please wait…');const r=await ks.setSync(v);Nek(r.msg);if(r.reload)setTimeout(()=>location.reload(),700);else ynNo();}

/* ---------- profile photo ---------- */
function khPhoto(s){const p=s&&s.photo;return(typeof p==='string'&&/^data:image\/(jpeg|png|webp);base64,[A-Za-z0-9+\/=]+$/.test(p))?p:'';}
function khLogoURI(){const cs=getComputedStyle(document.documentElement),bg=(cs.getPropertyValue('--accent')||'').trim()||'#111',fg=(cs.getPropertyValue('--on-accent')||'').trim()||'#fff';return 'data:image/svg+xml;utf8,'+encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><rect width="512" height="512" fill="'+bg+'"/><path fill="'+fg+'" fill-rule="evenodd" transform="translate(256 256) scale(.78) translate(-256 -256)" d="M319.5 349.5L315.8 345.3L314.0 344.3L307.4 343.9L267.4 356.1L223.2 370.7L218.5 374.9L217.1 377.8L216.2 381.1L216.2 383.9L217.1 387.2L218.5 389.5L222.7 392.8L226.4 393.8L229.7 393.3L274.9 377.3L312.1 366.5L315.4 364.6L319.5 359.4L320.5 356.6L320.5 352.3ZM346.6 305.7L344.2 301.0L341.0 298.2L338.2 297.2L333.5 297.2L284.2 312.8L270.2 316.5L219.9 332.5L215.3 336.8L213.4 340.6L212.9 342.9L213.4 347.1L214.8 350.4L219.0 354.2L221.3 355.2L226.9 355.2L264.6 342.4L339.6 319.8L342.4 317.9L344.7 315.1L346.6 310.4ZM344.7 266.6L342.4 262.4L339.6 260.0L337.2 259.1L333.1 258.6L234.4 288.3L219.9 293.0L215.3 295.8L212.5 299.6L211.1 304.8L211.5 309.0L212.9 311.8L216.2 315.1L219.9 316.5L225.0 316.5L264.1 303.8L324.7 285.4L335.8 282.6L339.6 280.7L343.3 276.5L345.2 270.8ZM103.5 158.7L99.3 168.1L97.5 178.0L97.9 318.9L98.9 327.4L101.7 336.3L105.4 343.4L107.7 346.7L114.7 353.7L145.9 374.0L173.4 390.5L197.1 405.6L199.0 405.6L201.3 404.1L201.8 403.2L201.8 366.5L200.4 360.8L198.0 356.1L192.0 349.5L175.7 338.7L162.2 330.7L157.5 325.5L154.7 318.4L155.2 221.4L157.5 215.7L160.3 212.4L165.0 209.6L168.7 208.7L173.8 209.1L179.9 212.0L213.9 231.7L239.0 245.4L253.0 254.4L260.0 257.6L264.1 257.6L295.8 244.5L314.4 235.5L335.4 227.0L354.0 218.1L361.0 217.6L365.2 219.5L368.9 222.8L371.7 228.4L371.7 339.6L370.3 343.9L368.0 348.1L361.5 354.7L352.6 359.4L268.8 397.1L231.1 416.4L230.2 417.3L230.2 419.2L236.7 423.9L243.2 426.8L249.2 427.7L254.4 427.2L260.9 424.9L314.0 400.8L341.9 389.1L391.2 366.0L397.3 361.8L403.4 355.6L407.1 350.4L411.3 342.0L413.1 335.8L414.1 329.7L414.5 175.7L413.6 172.4L411.3 168.1L406.6 163.9L399.6 161.6L395.9 161.6L389.4 163.4L364.7 174.7L329.3 192.6L316.8 197.8L286.5 212.4L164.5 144.1L150.1 137.1L145.4 136.1L136.6 136.1L125.9 138.9L120.3 141.8L114.2 146.0L107.3 153.1ZM395.0 122.9L391.2 119.2L386.6 117.3L378.2 117.7L364.2 124.8L344.7 133.3L334.9 138.5L313.0 147.9L279.5 163.9L275.3 165.3L256.2 174.7L254.8 176.6L256.2 178.0L261.4 180.4L287.0 195.0L289.3 195.0L315.8 182.3L339.6 171.9L362.8 160.1L389.4 148.4L393.1 145.1L396.8 137.5L397.3 128.6ZM350.3 94.2L345.6 88.5L342.4 86.7L339.6 85.7L333.5 85.7L330.7 86.7L301.9 101.7L217.1 143.2L208.3 147.9L207.3 148.8L207.3 150.2L239.0 167.7L241.3 167.2L323.7 126.7L324.7 125.8L344.2 116.8L348.9 111.6L351.2 105.5L351.7 99.4Z"/></svg>');}
function khAvHTML(){const s=DYER.shop||{},p=khPhoto(s);return '<img '+(p?'':'data-dp="1" ')+'src="'+(p||khLogoURI())+'" alt="">';}

/* ---------- settings: layers (home = categories, each opens its own page) ---------- */
function khBox(els){const l=document.createElement('div');l.className='set-list';els.forEach(e=>l.appendChild(e));return l;}
const khCats=()=>[
{id:'account',t:'Account',ic:'user',d:'Profile, devices, sign out',els:()=>{const em=(window.__ks&&window.__ks.email)||'';const rows=a=>a.map(khRow);return rows([
{ic:'user',t:'Profile & photo',d:'Your name, shop name and picture',go:'prof'},
{ic:'credit-card',t:'Payment account',d:'JazzCash / EasyPaisa number',go:'payacc'},
{ic:'smartphone',t:'Active devices',d:'Where this account is logged in',go:'devices'},
{ic:'log-out',t:'Login & sign out',d:khUN(em),go:'login'},
{ic:'trash-2',t:'Delete all data',d:'Danger zone',go:'danger'}]);}},
{id:'appearance',t:'Appearance',ic:'sun',d:'Mode, colours, app name',els:()=>{const rows=a=>a.map(khRow);const t=khTS(),cur=t.accent.toLowerCase();
const mode=document.createElement('div');mode.className='set-blk';mode.dataset.s='display mode light dark auto night theme';
mode.innerHTML='<div class="set-t">Display mode</div><div class="seg">'+[['light','sun','Light'],['dark','moon','Dark'],['auto','smartphone','Auto']].map(x=>'<button type="button" class="seg-b'+(t.mode===x[0]?' on':'')+'" data-m="'+x[0]+'">'+khIC(x[1],16)+' '+x[2]+'</button>').join('')+'</div>';
mode.querySelectorAll('.seg-b').forEach(x=>x.onclick=()=>khChoose({mode:x.dataset.m}));
const acc=document.createElement('div');acc.className='set-blk';acc.dataset.s='theme colour color accent';
const colOn=((DYER.customization||{}).colorOn!==false);acc.innerHTML='<div class="set-top"><div class="set-t">Theme colour</div><button type="button" class="sw'+(colOn?' on':'')+'" aria-label="Theme colour on or off" aria-pressed="'+colOn+'"><i></i></button></div><div class="sw-grid"></div>';
['auto','#2563eb','#14b8a6','#22c55e','#f59e0b','#ef4444','#ec4899','#a855f7'].forEach(col=>{const x=document.createElement('button');x.type='button';x.className='sw-c'+(col===cur?' sel':'');x.style.background=col==='auto'?'linear-gradient(135deg,#111 50%,#fff 50%)':col;x.title=col==='auto'?'Black / White (default)':col;x.onclick=()=>khChoose({accent:col});acc.querySelector('.sw-grid').appendChild(x);});
if(!colOn)acc.querySelector('.sw-grid').style.display='none';acc.querySelector('.sw').onclick=()=>khChoose({colorOn:!colOn});
const cz=DYER.customization||{};return [mode,acc,...rows([{ic:'pencil',t:'App name',d:cz.appName||'My Khata',go:'brand'}])];}},
{id:'data',t:'Data & Cloud',ic:'cloud',d:'Cloud sync, backup and restore',els:()=>{const rows=a=>a.map(khRow);const lb=DYER.settings&&DYER.settings.lastBackup;return rows([
{ic:window.__ks&&window.__ks.syncOn&&!window.__ks.syncOn()?'cloud-off':'cloud',t:'Cloud sync',d:'Store your data online or keep it on this phone',go:'sync'},
{ic:'download',t:'Backup & Restore',d:lb?'Last backup: '+GlZA(lb):'Save a copy of your data, or restore one',go:'backup'}]);}},
{id:'security',t:'Security',ic:'lock',d:'App lock, locked customers',els:()=>{const rows=a=>a.map(khRow);return rows([
{ic:'lock',t:'App lock',d:MzIo()?(YP4()?'Fingerprint':'PIN'):'Off - tap to set',go:'lock'},
{ic:'lock-keyhole',t:'Locked customers',d:'Open with your account password',go:'lockedc'}]);}},
{id:'business',t:'Business',ic:'package',d:'Stock rules, rent & bills',els:()=>{const rows=a=>a.map(khRow);return rows([
{ic:'package',t:'Stock & cash check',d:STRICT()?'ON — selling needs stock, buying stock needs cash':'OFF — no stock or cash limits',toggle:{get:()=>STRICT(),set:v=>{DYER.settings=DYER.settings||{};DYER.settings.strict=v;$O();Nek('Stock & cash check '+(v?'ON':'OFF'));khRefresh();}}},
{ic:'file-text',t:'Rent & Bills',d:'Add or edit monthly bills and reminders',act:()=>{egF={screen:'finance',customerId:null};ynNo();}},
{ic:'info',t:'Business rules',d:'Defaulter, restock and free limit',go:'rules'}]);}},
...(khAIShow()?[{id:'ai',t:'Khata AI',ic:'khataai',d:khAIDesc(),els:()=>khAIEls()}]:[]),
{id:'ads',t:'Ads',ic:'megaphone',d:'Show, submit and review ads',els:()=>{const rows=a=>a.map(khRow);return rows([
{ic:'megaphone',t:'Show an ad when the app opens',d:khAdOK()?'ON':'OFF',toggle:{get:()=>khAdOK(),set:v=>{DYER.settings=DYER.settings||{};DYER.settings.adsOpen=v;$O();Nek('App-open ad '+(v?'ON':'OFF'));khRefresh();}}},
{ic:'user',t:'My ads',d:'Ads you submitted and their status',act:()=>{ADVIEW='mine';ADSTALE=true;egF={screen:'ads',customerId:null};ynNo();}},
{ic:'plus',t:'Submit an ad',d:'Checked by the admin before it goes public',act:()=>{ADVIEW='mine';ADSTALE=true;egF={screen:'ads',customerId:null};$Wx={type:'ad'};ynNo();}},
{ic:'info',t:'Ad rules',go:'adrules'}]);}},
{id:'help',t:'Help',ic:'info',d:'Shortcuts, support, about',els:()=>{const rows=a=>a.map(khRow);return rows([
{ic:'info',t:'Keyboard shortcuts',go:'keys'},{ic:'info',t:'About My Khata',go:'about'},
{wa:true,ic:'message-circle',t:'Contact support',d:'Message us on WhatsApp',act:()=>window.open('https://wa.me/'+wU+'?text='+encodeURIComponent('Hi, I need help with My Khata'),'_blank','noopener')}]);}}
];
/* ---------- Khata AI settings (moved here from the AI chat panel) ---------- */
(function(){const st=document.createElement('style');st.textContent='.ai-hero{display:flex;align-items:center;gap:12px}.ai-orb{width:50px;height:50px;border-radius:15px;background:var(--accent,#111);color:var(--on-accent,#fff);display:flex;align-items:center;justify-content:center;flex-shrink:0}.ai-ht{flex:1;min-width:0}.ai-st{display:flex;align-items:center;gap:7px;font-size:12px;font-weight:600;color:var(--ink-soft,#777);margin-top:3px}.ai-dot{width:8px;height:8px;border-radius:50%;background:var(--ink-soft,#777);flex-shrink:0}.ai-st.ok .ai-dot{background:#22c55e;box-shadow:0 0 0 4px rgba(34,197,94,.18)}.ai-st.bad .ai-dot{background:#ef4444}.ai-st.wait .ai-dot{animation:ai-p 1s infinite}.ai-test{width:40px;height:40px;border-radius:12px;border:1px solid var(--line,#e5e5e5);background:var(--card2,#f2f2f2);color:var(--ink,#333);cursor:pointer;display:flex;align-items:center;justify-content:center;padding:0;flex-shrink:0}.ai-test.spin svg{animation:ai-s .8s linear infinite}.ai-d{font-size:12px;color:var(--ink-soft,#777);margin-top:8px;line-height:1.5}.ai-steps{list-style:none;counter-reset:s;margin:12px 0 0;padding:0;display:flex;flex-direction:column;gap:16px}.ai-steps li{counter-increment:s;position:relative;padding-left:38px;display:flex;flex-direction:column;gap:3px;font-size:13px;min-height:26px}.ai-steps li::before{content:counter(s);position:absolute;left:0;top:0;width:26px;height:26px;border-radius:50%;background:var(--accent,#111);color:var(--on-accent,#fff);font-weight:800;font-size:12px;display:flex;align-items:center;justify-content:center}.ai-steps span{color:var(--ink-soft,#777)}.ai-code{display:flex;align-items:center;gap:8px;background:var(--card2,#f2f2f2);border:1px solid var(--line,#e5e5e5);border-radius:10px;padding:8px 10px;margin-top:4px}.ai-code code{flex:1;font-family:ui-monospace,Consolas,monospace;font-size:12px;word-break:break-all}.ai-code button{border:0;background:none;color:var(--ink,#333);cursor:pointer;padding:4px;display:flex}.ai-mi{display:flex;align-items:center;gap:8px;padding:8px 6px 8px 12px;border:1px solid var(--line,#e5e5e5);background:var(--card2,#f2f2f2);border-radius:10px;margin-top:6px;font-size:13px}.ai-mi span{flex:1;min-width:0;word-break:break-word}.ai-mi button{border:0;background:none;color:var(--ink-soft,#777);cursor:pointer;padding:6px;display:flex;border-radius:8px}.ai-addrow{display:flex;gap:8px;margin-top:10px}.ai-addrow input{flex:1;min-width:0;padding:11px;border:1px solid var(--line,#e5e5e5);border-radius:11px;font:inherit;font-size:15px;background:var(--input,#f9f9f9);color:var(--ink,#333)}.ai-addrow button{border:0;border-radius:11px;padding:0 16px;background:var(--accent,#111);color:var(--on-accent,#fff);font:inherit;font-weight:700;cursor:pointer}.ai-log{display:flex;justify-content:space-between;gap:10px;font-size:12.5px;padding:7px 0;border-top:1px solid var(--line,#e5e5e5)}.ai-log:first-of-type{border-top:0}.ai-log span:last-child{color:var(--ink-soft,#777);white-space:nowrap}@keyframes ai-p{50%{opacity:.3}}@keyframes ai-s{to{transform:rotate(360deg)}}@media (prefers-reduced-motion:reduce){.ai-dot,.ai-test svg{animation:none!important}}';document.head.appendChild(st);})();
function khAIA(){const a=window.__khAI;return a&&a.cfg?a:null;}
function khAIShow(){const e=window.__khEnv;return !!(e&&e.desktop);}
function khAIDesc(){const a=khAIA();if(!a)return 'Ask questions about your khata';const c=a.cfg();return (c.mode==='off'?'Off':c.mode==='edit'?'Edit mode':'View only')+(c.model?' · '+c.model:' · not set up yet');}
function khAIEls(){
const A=khAIA();if(!A){const e=window.__khEnv||{};return [khNote('Khata AI is still loading. Go back and open this page again in a moment.')];}
const out=[],q=s=>String(s).replace(/"/g,'&quot;'),blk=(s,h)=>{const d=document.createElement('div');d.className='set-blk';d.dataset.s='ai khata assistant ollama model '+s;d.innerHTML=h;return d;};
/* status */
const hero=blk('connection status test','<div class="ai-hero"><div class="ai-orb">'+(A.icon?A.icon(26):khIC('sparkles',26))+'</div><div class="ai-ht"><div class="set-t">Khata AI</div><div class="ai-st"><i class="ai-dot"></i><span>Not checked yet</span></div></div><button type="button" class="ai-test" aria-label="Test connection">'+khIC('refresh',18)+'</button></div>');
const stEl=hero.querySelector('.ai-st'),stTx=stEl.querySelector('span'),tb=hero.querySelector('.ai-test');
const setSt=(k,t)=>{stEl.className='ai-st '+k;stTx.textContent=t;};
/* permission */
const perm=blk('permission off view edit','<div class="set-t">What can the AI do?</div><div class="seg">'+[['off','ban','Off'],['view','eye','View only'],['edit','pencil','Edit']].map(x=>'<button type="button" class="seg-b" data-m="'+x[0]+'">'+khIC(x[1],16)+' '+x[2]+'</button>').join('')+'</div><div class="ai-d"></div>');
const pd=perm.querySelector('.ai-d'),MT={off:'AI is off.',view:'AI can only read your khata.',edit:'AI can add entries after you tap Yes. It never deletes.'};
const paint=()=>{const m=A.cfg().mode;perm.querySelectorAll('.seg-b').forEach(x=>x.classList.toggle('on',x.dataset.m===m));pd.textContent=MT[m]||MT.view;};paint();
perm.querySelectorAll('.seg-b').forEach(x=>x.onclick=()=>{A.setCfg({mode:x.dataset.m});paint();A.changed();});
/* model + address */
const cur=A.cfg(),mdl=blk('model choose','<div class="set-t">Model</div><div class="field" style="margin:8px 0 0"><select aria-label="Model"></select></div>');
const sel=mdl.querySelector('select');sel.innerHTML=cur.model?'<option value="'+q(YoYV(cur.model))+'">'+YoYV(cur.model)+'</option>':'<option value="">Not connected</option>';
sel.onchange=()=>{A.setCfg({model:sel.value});A.changed();};
const adr=blk('address host url advanced','<details class="ai-d"><summary>Advanced</summary><div class="field" style="margin:8px 0 0"><input type="text" value="'+q(YoYV(cur.host))+'" aria-label="Ollama address" autocapitalize="none" spellcheck="false"></div></details>');
const addr=adr.querySelector('input');addr.onchange=()=>{const h=addr.value.trim();if(/^https?:\/\//i.test(h)){A.setCfg({host:h});test();}else Nek('Address must start with http:// or https://');};
/* test */
let rt=0;const again=()=>{clearTimeout(rt);rt=setTimeout(()=>{if(hero.isConnected&&khStk[khStk.length-1]==='c-ai')test();},4000);};
async function test(){
tb.classList.add('spin');setSt('wait','Checking…');
try{const ms=await A.tags();
if(!ms.length){setSt('bad','Almost ready. Tap the setup button.');sel.innerHTML='<option value="">No models</option>';setup.style.display='';again();return;}
const names=ms.map(x=>x.name),c=A.cfg().model,pick=names.includes(c)?c:(names.find(n=>/qwen2\.5|llama3\.[12]/.test(n))||names[0]);
sel.innerHTML=names.map(n=>'<option value="'+q(YoYV(n))+'"'+(n===pick?' selected':'')+'>'+YoYV(n)+'</option>').join('');A.setCfg({model:pick});A.changed();
setSt('ok',A.appReady?'Connected':'Connected. Now download the Khata App so AI starts and stops with Khata.');setup.style.display=A.appReady?'none':'';
}catch(e){setSt('bad','Not connected. Tap the setup button.');setup.style.display='';again();if(!A.cfg().model)sel.innerHTML='<option value="">-</option>';}
finally{tb.classList.remove('spin');}
}
tb.onclick=test;
/* setup: ONE button */
const OL=A.ollama||{os:'other',dl:()=>({url:'https://ollama.com/download'}),label:()=>'⬇ Download Ollama'},
btnS='display:block;width:100%;margin-top:10px;padding:13px 14px;border:0;border-radius:12px;background:var(--accent,#111);color:var(--on-accent,#fff);font:inherit;font-weight:700;font-size:14px;cursor:pointer';
const setup=blk('setup install download bat',A.mobile?'<div class="set-t">Set up AI</div><div class="ai-d">Use the AI on a PC or laptop.</div>':'<div class="set-t">Set up AI</div><div class="ai-d">'+(OL.os==='win'?'One file installs the Khata app, Ollama and the AI model together. Open Khata from the new My Khata icon: the AI starts with Khata and stops when you close it.':'Installs Ollama and the AI model.')+'</div><button type="button" data-setup="1" style="'+btnS+'">'+YoYV(OL.label?OL.label():'⬇ Download')+'</button>');
setup.onclick=e=>{const b=e.target.closest('[data-setup]');if(!b)return;if(OL.oneClick)OL.oneClick(b);else window.open(OL.dl().url,'_blank','noopener');};
/* saved chats, memory, AI edits (all stored inside the khata data, so they sync online like everything else) */
const memB=blk('memory remember notes nickname yaad rakho','<div class="set-t">Memory</div><div class="ai-d">Notes the AI remembers, like nicknames.</div><div class="ai-mem"></div><div class="ai-addrow"><input type="text" maxlength="160" placeholder="e.g. Ali bhai = Ali Raza" aria-label="New memory note"><button type="button" class="ai-add">Add</button></div>');
const memL=memB.querySelector('.ai-mem'),memI=memB.querySelector('input');
const drawMem=()=>{const l=A.mem?A.mem.list():[];memL.innerHTML=l.length?l.map(m=>'<div class="ai-mi"><span>'+YoYV(m.t)+'</span><button type="button" data-id="'+q(YoYV(m.id))+'" aria-label="Delete note">'+khIC('x',16)+'</button></div>').join(''):'<div class="ai-d">Nothing remembered yet.</div>';};
memL.onclick=e=>{const b=e.target.closest('[data-id]');if(!b)return;A.mem.del(b.getAttribute('data-id'));drawMem();};
const addMem=()=>{const r=A.mem.add(memI.value);if(r.err){Nek(r.err);return;}memI.value='';drawMem();Nek('Remembered');};
memB.querySelector('.ai-add').onclick=addMem;memI.addEventListener('keydown',e=>{if(e.key==='Enter'){e.preventDefault();addMem();}});drawMem();
const hisB=blk('saved chats history delete clear online','<div class="set-t">Saved chats</div><div class="ai-d"></div>');
const hisD=hisB.querySelector('.ai-d');
const drawHis=()=>{const n=A.chats?A.chats.count():0,ks=window.__ks;let w='';try{w=ks&&ks.status?ks.status().label:'';}catch(e){}hisD.textContent=(n?n+(n===1?' chat is':' chats are'):'No chats')+' saved with your khata'+(n?'':' yet')+'.'+(w?' '+w+'.':'');};
drawHis();
const clr=khBtn('Delete all saved chats','',()=>{if(!A.chats||!A.chats.count()){Nek('No saved chats');return;}if(!confirm('Delete all saved AI chats? Your khata entries are not touched. Memory notes stay.'))return;A.chats.clear();drawHis();Nek('Chats deleted');});clr.style.marginTop='10px';hisB.appendChild(clr);
const lg=A.log?A.log():[];
const logB=lg.length?blk('ai edits changes activity log','<div class="set-t">Recent AI changes</div>'+lg.map(x=>'<div class="ai-log"><span>'+YoYV(x.t)+'</span><span>'+YoYV(x.d)+'</span></div>').join('')):null;
out.push(hero,perm,setup,mdl,memB,hisB,adr);if(logB)out.push(logB);out.push(khRow({ic:'khataai',t:'Open Khata AI chat',d:'Ask about your khata',act:()=>A.open()}));
if(khStk[khStk.length-1]==='c-ai')setTimeout(test,0);
return out;}
window.__kd.aiSettings=function(){if(khGuest()){khLoginAsk('Settings are only available after you log in.');return;}khStk=['root','c-ai'];egF={screen:'settings',customerId:null};ynNo();window.scrollTo(0,0);};

/* ---------- settings home: everything on ONE page ---------- */
function khRoot(b){const s=DYER.shop||{},em=(window.__ks&&window.__ks.email)||'',paid=dNW(),nm=s.ownerName||'My Khata';
const c=document.createElement('div');c.className='set-prof';
c.innerHTML='<div class="set-av">'+khAvHTML()+'</div><div class="set-pi"><div class="set-pn">'+YoYV(nm)+'</div><div class="set-ps">'+YoYV(s.shopName||'')+'</div><div class="set-ps">'+YoYV(khUN(em))+'</div></div><span class="set-plan'+(paid?' pro':'')+'">'+(paid?'PRO':'FREE')+'</span>';
c.onclick=()=>khGo('prof');b.appendChild(c);
b.appendChild(khPlan());
const sb=document.createElement('div');sb.className='search-wrap';sb.innerHTML='<input type="text" id="set-q" placeholder="Search settings…" autocomplete="off"><span class="search-icon">🔍</span>';b.appendChild(sb);
const home=document.createElement('div');home.className='set-list';khCats().forEach(c=>home.appendChild(khRow({ic:c.ic,t:c.t,d:c.d,go:'c-'+c.id})));b.appendChild(home);
const res=document.createElement('div');res.style.display='none';b.appendChild(res);let built=false;
sb.querySelector('input').oninput=e=>{const q=e.target.value.trim().toLowerCase();
if(!q){res.style.display='none';home.style.display='';return;}
if(!built){built=true;khCats().forEach(c=>{const h=document.createElement('div');h.className='set-sec';h.textContent=c.t;res.appendChild(h);res.appendChild(khBox(c.els()));});}
home.style.display='none';res.style.display='';
res.querySelectorAll('.set-list').forEach(l=>{let any=false;l.querySelectorAll('.set-row,.set-blk').forEach(r=>{const ok=(r.dataset.s||r.textContent).toLowerCase().includes(q);r.style.display=ok?'':'none';if(ok)any=true;});l.style.display=any?'':'none';const h=l.previousElementSibling;if(h&&h.classList.contains('set-sec'))h.style.display=any?'':'none';});};}

function khAgo(t){const m=Math.max(0,Math.round((Date.now()-new Date(t).getTime())/60000));if(m<2)return 'Active now';if(m<60)return m+' min ago';const h=Math.round(m/60);if(h<24)return h+' h ago';return Math.round(h/24)+' d ago';}
async function khDevInfo(){const ua=navigator.userAgent||'';let model='';try{const u=navigator.userAgentData;if(u&&u.getHighEntropyValues){const h=await u.getHighEntropyValues(['model']);if(h&&h.model)model=h.model;}}catch(e){}
if(!model){const m=ua.match(/Android[^;]*;\s*([^;)]+?)(?:\s+Build|[;)])/);if(m&&m[1]&&m[1].trim()!=='K')model=m[1].trim();}
if(!model){if(/iPhone/.test(ua))model='iPhone';else if(/iPad/.test(ua))model='iPad';}
const os=/Android/.test(ua)?'Android':/iPhone|iPad/.test(ua)?'iOS':/Windows/.test(ua)?'Windows':/Mac OS X/.test(ua)?'Mac':/Linux/.test(ua)?'Linux':'Device';
const br=/Edg\//.test(ua)?'Edge':/OPR\//.test(ua)?'Opera':/Firefox\//.test(ua)?'Firefox':/Chrome\//.test(ua)?'Chrome':/Safari\//.test(ua)?'Safari':'Browser';
return{model,os,browser:br,name:(model||os)+' · '+br};}
(function(){const st=document.createElement('style');st.textContent='.ad-pop-top .ad-pop-x{width:auto;height:34px;padding:0 16px;border-radius:99px;font:700 13px Inter,sans-serif}.set-top{display:flex;align-items:center;justify-content:space-between;gap:12px;margin-bottom:10px}.set-top .set-t{margin:0}.set-row .add-btn{width:auto;margin:0;padding:8px 14px;font-size:12px;flex-shrink:0}';document.head.appendChild(st);})();
const khPG={
root:{t:'Settings',ic:'settings',build:b=>khRoot(b)},
prof:{t:'Profile',ic:'user',build:b=>{const s=DYER.shop||{},ph=khPhoto(s);
const top=document.createElement('div');top.className='prof-photo';
top.innerHTML='<div class="set-av big">'+khAvHTML()+'</div><div class="prof-btns"><button type="button" class="add-btn" id="pf-up">'+khIC('camera',16)+' '+(ph?'Change photo':'Upload photo')+'</button>'+(ph?'<button type="button" class="add-btn secondary" id="pf-rm">Remove photo</button>':'')+'</div><input type="file" id="pf-file" accept="image/*" hidden>';
b.appendChild(top);
top.querySelector('#pf-up').onclick=()=>top.querySelector('#pf-file').click();
top.querySelector('#pf-file').onchange=e=>{const f=e.target.files[0];if(!f)return;if(!/^image\//.test(f.type)){Nek('Please choose an image');return;}
CzvP(f,256,0.82).then(d=>{DYER.shop.photo=d;$O();Nek('Photo saved');khRefresh();}).catch(()=>Nek('Could not read that image'));};
const rm=top.querySelector('#pf-rm');if(rm)rm.onclick=()=>{DYER.shop.photo=null;$O();Nek('Photo removed');khRefresh();};
const w=document.createElement('div');w.innerHTML=khField('Your name','pf-o',s.ownerName)+khField('Shop name','pf-s',s.shopName,'text','e.g. Ahmed General Store');b.appendChild(w);
b.appendChild(khBtn('Save','',()=>{const o=w.querySelector('#pf-o').value.trim();if(!o){Nek('Please enter your name');return;}DYER.shop.ownerName=Cy(o);DYER.shop.shopName=w.querySelector('#pf-s').value.trim()||null;$O();Nek('Saved');khRefresh();}));}},
brand:{t:'App name',ic:'pencil',build:b=>{const c=DYER.customization||{};let nm=c.appName||'';const w=document.createElement('div');
w.innerHTML='<div class="cz-preview"><img class="cz-preview-icon" src="'+khIconURI()+'" alt=""><div class="cz-preview-text"><div class="cz-preview-name" id="bp-n"></div><div class="cz-preview-sub">Browser tab &amp; home screen name</div></div></div>'+khField('App / tab name','bn',nm,'text','e.g. Ahmed Store');b.appendChild(w);
const q=x=>w.querySelector(x);q('#bp-n').textContent=nm||'My Khata';q('#bn').maxLength=24;q('#bn').oninput=e=>{nm=e.target.value;q('#bp-n').textContent=nm.trim()||'My Khata';};
b.appendChild(khBtn('Save','',()=>{DYER.customization=Object.assign({},DYER.customization||{},{appName:nm.trim()||null,icon:null});$O();PF9u();Nek('Saved. Re-add the app to your home screen to see the new name.');khRefresh();}));
if(c.appName)b.appendChild(khBtn('Reset name','secondary',()=>{DYER.customization=Object.assign({},DYER.customization||{},{appName:null,icon:null});$O();PF9u();Nek('Name reset');khRefresh();}));}},
backup:{t:'Backup & Restore',ic:'download',build:b=>{const lb=DYER.settings&&DYER.settings.lastBackup;
b.appendChild(khNote('<b>What is a backup for?</b><br>It is a file with all your customers, stock, finance and bills. If you lose or change your phone, clear the browser, or delete the app, you can restore everything from this file. Cloud sync is another way to stay safe — a backup file is your own extra copy.'));
b.appendChild(khNote(lb?'Last backup: <b>'+GlZA(lb)+' · '+q1rX(lb)+'</b>':'You have not made a backup yet.'));
b.appendChild(khBtn(khIC('download',16)+' Download backup file','',khBackup));
const f=document.createElement('input');f.type='file';f.accept='.json,application/json';f.hidden=true;f.onchange=e=>{khRestore(e.target.files[0]);e.target.value='';};b.appendChild(f);
b.appendChild(khBtn(khIC('upload',16)+' Restore from backup file','secondary',()=>f.click()));
b.appendChild(khNote('Restoring replaces the data on this phone with the file. Your subscription is not changed.','warn'));}},
payacc:{t:'Payment account',ic:'credit-card',build:b=>{const s=DYER.shop||{};let m=s.paymentMethod==='easypaisa'?'easypaisa':'jazzcash';const w=document.createElement('div');
w.innerHTML='<div class="paymethod-row"><button type="button" class="paymethod-opt" data-m="jazzcash">JazzCash</button><button type="button" class="paymethod-opt" data-m="easypaisa">EasyPaisa</button></div>'+khField('Your account number','pa-n',s.paymentAccount,'text','e.g. 03001234567');b.appendChild(w);
const paint=()=>w.querySelectorAll('.paymethod-opt').forEach(x=>x.classList.toggle('on',x.dataset.m===m));paint();w.querySelectorAll('.paymethod-opt').forEach(x=>x.onclick=()=>{m=x.dataset.m;paint();});
b.appendChild(khBtn('Save','',()=>{const n=w.querySelector('#pa-n').value.trim();if(!khPayOK(n)){Nek('Enter a valid mobile number (e.g. 03001234567)');return;}DYER.shop.paymentMethod=m;DYER.shop.paymentAccount=n;$O();Nek('Saved');ynNo();}));}},
chpw:{t:'Change password',ic:'key',build:b=>{const w=document.createElement('div');w.innerHTML=khField('New password (min 6 characters)','cp1','','password')+khField('Confirm new password','cp2','','password');b.appendChild(khNote('This is your website login password. It also opens your locked customers.'));b.appendChild(w);b.appendChild(khBtn('Change password','',async()=>{const a=w.querySelector('#cp1').value,c=w.querySelector('#cp2').value;if(a.length<6){Nek('Password must be at least 6 characters');return;}if(a!==c){Nek('Passwords do not match');return;}const ks=window.__ks;if(!ks||!ks.changePw){Nek('Cloud is not ready');return;}Nek('Please wait…');const r=await ks.changePw(a);Nek(r.msg);if(r.ok)khBack();}));}},
login:{t:'Login & sign out',ic:'log-out',build:b=>{b.appendChild(khList([{ic:'user',t:'Signed in as',val:khUN((window.__ks&&window.__ks.email)||'')||'-'},{ic:'key',t:'Change password',d:'Also opens your locked customers',go:'chpw'}]));const s=khBtn('🚪 Sign out','',null);s.id='cloud-out-btn';s.style.marginTop='14px';b.appendChild(s);}},
devices:{t:'Active devices',ic:'smartphone',build:b=>{const ks=window.__ks,box=document.createElement('div');box.className='set-list';b.appendChild(box);
const paint=list=>{box.innerHTML='';list.forEach(d=>{const r=khRow({ic:'smartphone',t:d.name||'Unknown device',tag:d.current?'This device':'',d:[d.place,d.when].filter(Boolean).join(' · ')});
if(!d.current&&ks&&ks.signOutDevice){const x=document.createElement('button');x.type='button';x.className='add-btn';x.textContent='Sign out';x.onclick=async()=>{x.disabled=true;let rs=null;try{rs=await ks.signOutDevice(d.id);}catch(e){}Nek((rs&&rs.msg)||'Device signed out');load();};r.appendChild(x);}box.appendChild(r);});};
const load=async()=>{const i=await khDevInfo(),me={id:'me',current:true,name:i.name,when:'Active now'};paint([me]);let others=[];try{if(ks&&ks.devices){const r=await ks.devices();const cu=(r||[]).find(x=>x.current);if(cu)me.place=[cu.city,cu.country].filter(Boolean).join(', ');others=(r||[]).filter(x=>!x.current).map(x=>({id:x.id,name:x.name,place:[x.city,x.country].filter(Boolean).join(', '),when:x.last_seen?khAgo(x.last_seen):''}));}}catch(e){}paint([me].concat(others));};load();
if(ks&&ks.signOutOthers)b.appendChild(khBtn('Sign out all other devices','secondary',async()=>{if(!confirm('Sign out every other device?'))return;Nek('Please wait…');const rs=await ks.signOutOthers();Nek(rs.msg);load();}));}},
sync:{t:'Cloud sync',ic:'cloud',build:b=>{const ks=window.__ks;if(!ks||!ks.setSync){b.appendChild(khNote('Cloud module is not ready. Reload the app and try again.'));return;}const on=ks.syncOn();
b.appendChild(khList([{ic:on?'cloud':'cloud-off',t:'Store my data on the cloud',d:on?'ON':'OFF',toggle:{get:()=>ks.syncOn(),set:v=>khSyncSet(v)}}]));
if(on)b.appendChild(khBtn('🔄 Sync now','',async()=>{Nek('Syncing…');const r=await ks.syncNow();Nek(r.msg);}));
else{b.appendChild(khBtn('☁ Move my data to the cloud (one click)','',()=>khSyncSet(true)));b.appendChild(khBtn('🗑 Remove my old cloud copy','secondary',async()=>{if(!confirm('Delete the copy of your data stored on the server? Data on this phone stays.'))return;const r=await ks.removeCloud();Nek(r.msg);}));}}},
lock:{t:'App lock',ic:'lock',build:b=>{const mob=YP4(),on=MzIo();
b.appendChild(khNote(on?'App lock is ON. '+(mob?'Fingerprint':'PIN')+' is asked every time the app opens.':'App lock is OFF. Your Khata opens directly. Turn it on if you want a '+(mob?'fingerprint':'PIN')+' lock.'));
if(on){const l=[{ic:'lock',t:'Lock app now',d:'Ask for '+(mob?'fingerprint':'PIN')+' again',act:()=>dcMQ()},{ic:mob?'fingerprint':'key',t:'Lock method',val:mob?'Fingerprint':'PIN'}];
if(mob)l.push({ic:'fingerprint',t:'Register fingerprint again',d:'Use if the fingerprint stopped working',act:async()=>{if(await fxv())Nek('Fingerprint updated');}});b.appendChild(khList(l));}
if(mob){if(!on)b.appendChild(khBtn('🖐️ Turn on fingerprint lock','',async()=>{if(await fxv()){Nek('Fingerprint lock is ON');ynNo();}}));}
else{const f=document.createElement('div');f.className='set-note';f.style.marginTop='12px';
f.innerHTML='<div class="field"><label>'+(on?'New PIN (4-8 digits)':'Set a PIN (4-8 digits)')+'</label><input type="password" id="np1" inputmode="numeric" maxlength="8"></div><div class="field"><label>Confirm PIN</label><input type="password" id="np2" inputmode="numeric" maxlength="8"></div>';
f.appendChild(khBtn(on?'Change PIN':'Turn on PIN lock','',async()=>{const a=f.querySelector('#np1').value.trim(),c=f.querySelector('#np2').value.trim();if(!ZTki(a)){Nek('PIN must be 4 to 8 digits');return;}if(a!==c){Nek('PINs do not match');return;}await _SoC(a);Nek(on?'PIN changed':'PIN lock is ON');ynNo();}));b.appendChild(f);}
if(on)b.appendChild(khBtn('Turn off app lock','secondary',()=>{if(!confirm('Turn off the app lock? Your Khata will open without a '+(mob?'fingerprint':'PIN')+'.'))return;localStorage.removeItem(mob?yegt:nVk);Nek('App lock turned off');ynNo();}));
}},
lockedc:{t:'Locked customers',ic:'lock-keyhole',build:b=>{b.appendChild(khNote('Locked accounts leave the main list and open only with your account password.'));
b.appendChild(khBtn('🔐 Add customer to Lock','blue',()=>{$Wx={type:'lockPick'};ynNo();}));const ls=DYER.customers.filter(c=>c.hidden);
if(!ls.length){b.appendChild(khNote('No locked customers yet.'));return;}b.appendChild(khList(ls.map(c=>({ic:'lock',t:c.name,d:'Due Rs '+UscD(zti2(c).balance)+' · tap to unlock',act:()=>UT8G(c.id)}))));}},
rules:{t:'Business rules',ic:'info',build:b=>{b.appendChild(khList([
{ic:'triangle-alert',t:'Defaulter',val:'Rs '+UscD(mK5)+'+ due, no payment for '+xcs+' days'},
{ic:'package',t:'Restock alert',val:R5pr+' units or fewer'},
{ic:'clock',t:'Not selling',val:'No sale for '+sDC+' days'},
{ic:'user',t:'Free plan limit',val:fp+' customers'}]));}},
adrules:{t:'Ad rules',ic:'info',build:b=>{b.appendChild(khNote('Every ad is checked by the admin before others can see it. Adult content is rejected. An ad with 30 reports is removed automatically.'));}},
keys:{t:'Keyboard shortcuts',ic:'info',build:b=>{const K=[['H','Accounts (home)'],['N','New account'],['I','Inventory'],['S','Add stock'],['P','Profit'],['F','Finance'],['C','Add capital'],['E','Add expense'],['D','Ads'],['L','Lock app'],['Y','Cloud sync on / off'],['B','Back (Backspace also works)'],['Arrows','Move between buttons'],['Enter','Press the selected button']];b.appendChild(khNote('Shortcuts work when you are not typing in a field. Hover over any button to see its key.'));const l=document.createElement('div');l.className='set-list';K.forEach(x=>{const r=document.createElement('div');r.className='set-row';r.innerHTML='<div class="set-tx"><div class="set-t">'+x[1]+'</div></div><span class="kbd">'+x[0]+'</span>';l.appendChild(r);});b.appendChild(l);}},
about:{t:'About My Khata',ic:'info',build:b=>{b.appendChild(khNote('My Khata is a free khata book for customer credit, stock, profit, rent & bills. It works offline and can sync across your devices.'));}},
danger:{t:'Danger zone',ic:'trash-2',build:b=>{b.appendChild(khNote('Deleting all data removes every customer, product, payment and finance record from this device. This cannot be undone.','warn'));b.appendChild(khBtn('🗑 Delete all data','',()=>{$Wx={type:'resetAll'};ynNo();}));}}
};
khCats().forEach(c=>{khPG['c-'+c.id]={t:c.t,ic:c.ic,build:b=>b.appendChild(khBox(c.els()))};});
function khWA(){const em=(window.__ks&&window.__ks.email)||'';if(egF.screen==='subscribe'&&!dNW()){window.open(KJ8i(Swf),'_blank','noopener');return;}window.open('https://wa.me/'+wU+'?text='+encodeURIComponent('Hi, I need help with My Khata'+(em?'\nAccount: '+em:'')),'_blank','noopener');}
function khKeys(){const T=(el,k,n)=>{if(el){el.setAttribute('data-tip',n+'  ·  Press '+k);el.setAttribute('aria-keyshortcuts',k);}};const g=id=>document.getElementById(id);T(g('tab-cust'),'H','Accounts');T(g('tab-inv'),'I','Inventory');T(g('tab-profit'),'P','Profit');T(g('tab-fin'),'F','Finance');T(g('tab-ads'),'D','Ads');T(g('fin-add-capital'),'C','Add capital');T(g('fin-add-expense'),'E','Add expense');document.querySelectorAll('.back-btn').forEach(x=>T(x,'B','Back'));document.querySelectorAll('.add-btn').forEach(x=>{const t=x.textContent||'';if(/New Account/.test(t))T(x,'N','New account');else if(/Add Stock/.test(t))T(x,'S','Add stock');});}
function ynNo(){ynNo0();khIZ(efk4);khKeys();if(KV4m&&!khAdShown&&egF.screen==='home'&&DYER.shop)khAds();khSync();khAdsHook();}

/* ---------- phone Back button = Backspace (history sync) ---------- */
var khPushed=0,khSkip=0;
function khLayers(){var s=egF.screen,n=0;if(s==='settings')n=Math.max(1,khStk.length);else if(s==='detail'||s==='inventory'||s==='profit'||s==='finance'||s==='subscribe'||s==='ads')n=1;return n+document.querySelectorAll('.modal-overlay,.img-lightbox').length;}
function khSync(){var L=khLayers();if(L>khPushed){try{while(khPushed<L){khPushed++;history.pushState({kh:khPushed},'');}}catch(e){}}else if(L<khPushed){var d=khPushed-L;khPushed=L;khSkip++;try{history.go(-d);}catch(e){khSkip--;}}}
function khBackAction(){var o=document.querySelectorAll('.modal-overlay,.img-lightbox');if(o.length){var t=o[o.length-1];if($Wx&&efk4.contains(t)){$Wx=null;ynNo();return;}var b=t.querySelector('.cancel,.lb-close,.ad-pop-x');if(b)b.click();else t.remove();return;}if(egF.screen==='settings'){khPop();return;}if(['detail','inventory','profit','finance','subscribe','ads'].indexOf(egF.screen)>-1)Q7A();}
window.addEventListener('popstate',function(e){var k=(e.state&&e.state.kh)||0;khPushed=k;if(khSkip>0){khSkip--;khSync();return;}khBackAction();khSync();});
try{var khS0=history.state;if(khS0&&khS0.kh>0){khSkip++;history.go(-khS0.kh);}else history.replaceState({kh:0},'');}catch(e){}
try{new MutationObserver(function(){khSync();}).observe(document.body,{childList:true});}catch(e){}

/* ---------- tells adsense.js when the real app is on screen (not setup / PIN lock) ---------- */
function khAdsHook(){window.__khAppOK=!!(KV4m&&DYER.shop);try{window.dispatchEvent(new Event('khata-view'));}catch(e){}}

x5YE();S_();})();
