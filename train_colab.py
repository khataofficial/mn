# Fine-tune Qwen2.5-3B on the Khata AI dataset (free Google Colab T4 GPU is enough, ~30-60 min).
# Colab: Runtime > Change runtime type > T4 GPU. Upload train.jsonl, eval.jsonl, tools_edit.json, tools_view.json.
# First cell:   !pip install unsloth
import json
from unsloth import FastLanguageModel
from unsloth.chat_templates import train_on_responses_only
from datasets import Dataset
from trl import SFTTrainer, SFTConfig

MODEL = "unsloth/Qwen2.5-3B-Instruct"
model, tok = FastLanguageModel.from_pretrained(MODEL, max_seq_length=3072, load_in_4bit=True)
model = FastLanguageModel.get_peft_model(model, r=16, lora_alpha=32, lora_dropout=0,
    target_modules=["q_proj","k_proj","v_proj","o_proj","gate_proj","up_proj","down_proj"], use_gradient_checkpointing="unsloth")

TOOLS = {"edit": json.load(open("tools_edit.json")), "view": json.load(open("tools_view.json"))}
def load(fn):
    rows = []
    for l in open(fn):
        r = json.loads(l)
        rows.append({"text": tok.apply_chat_template(r["messages"], tools=TOOLS[r["mode"]], tokenize=False)})
    return Dataset.from_list(rows)
train, ev = load("train.jsonl"), load("eval.jsonl")
print(train[0]["text"][-700:])   # check: you should see <tool_call>{...}</tool_call> in the assistant part

trainer = SFTTrainer(model=model, tokenizer=tok, train_dataset=train, eval_dataset=ev, args=SFTConfig(
    dataset_text_field="text", max_seq_length=3072, per_device_train_batch_size=2, gradient_accumulation_steps=4,
    num_train_epochs=2, learning_rate=2e-4, lr_scheduler_type="cosine", warmup_ratio=0.03, logging_steps=25,
    eval_strategy="steps", eval_steps=300, optim="adamw_8bit", output_dir="out", report_to="none", seed=7))
# learn only from the assistant's replies / tool calls, not from the system prompt
trainer = train_on_responses_only(trainer, instruction_part="<|im_start|>user\n", response_part="<|im_start|>assistant\n")
trainer.train()

# Export for Ollama (creates khata-ai-gguf/ with a .gguf file)
model.save_pretrained_gguf("khata-ai-gguf", tok, quantization_method="q4_k_m")
# Download khata-ai-gguf/*.gguf to your PC (Colab left sidebar > Files).
