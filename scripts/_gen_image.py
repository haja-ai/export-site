# -*- coding: utf-8 -*-
"""Generate banner image via nano-banana-2 API, download to temp."""
import json
import os
import re
import time
import urllib.request

# Read API key from .env.production
key = None
env_path = r"C:\Users\Administrator\Desktop\export-site\.env.production"
with open(env_path, encoding="utf-8") as f:
    for line in f:
        m = re.match(r"GPT_IMAGE_KEY=(.+)", line.strip())
        if m:
            key = m.group(1).strip()
print("key found:", bool(key))

prompt = (
    "Professional B2B product photography, a modern electric wheelchair with a rear "
    "hub motor and brake assembly parked on a gentle ramp incline, clean studio lighting, "
    "white-gray background, realistic, sharp detail on the rear wheel and motor, "
    "centered composition with the wheelchair in the middle of the frame, "
    "no people, no text, no logos, no brand names"
)

nodes = [
    ("global", "https://grsaiapi.com/v1/api/generate"),
    ("china", "https://grsai.dakka.com.cn/v1/api/generate"),
]

headers = {
    "Content-Type": "application/json",
    "Authorization": f"Bearer {key}",
}

saved = None
for attempt in range(1, 4):
    for node_name, url in nodes:
        body = {
            "model": "nano-banana-2",
            "prompt": prompt,
            "aspectRatio": "16:9",
            "imageSize": "2K",
            "replyType": "json",
        }
        req = urllib.request.Request(url, data=json.dumps(body).encode("utf-8"), headers=headers, method="POST")
        try:
            with urllib.request.urlopen(req, timeout=120) as resp:
                data = json.loads(resp.read().decode("utf-8"))
            img_url = None
            # Extract order: results[0].url -> top-level url -> images[0] -> data.url
            try:
                img_url = data["results"][0]["url"]
            except Exception:
                pass
            if not img_url:
                img_url = data.get("url")
            if not img_url:
                imgs = data.get("images") or data.get("data")
                if isinstance(imgs, dict):
                    img_url = imgs.get("url")
                elif isinstance(imgs, list) and imgs:
                    img_url = imgs[0].get("url") if isinstance(imgs[0], dict) else imgs[0]
            print(f"attempt {attempt} node={node_name} status={data.get('status')} img_url={img_url}")
            if img_url:
                out = r"C:\Users\Administrator\Desktop\export-site\scripts\_banner_raw.png"
                req2 = urllib.request.Request(img_url, headers={"User-Agent": "Mozilla/5.0"})
                with urllib.request.urlopen(req2, timeout=120) as r2:
                    raw = r2.read()
                with open(out, "wb") as f:
                    f.write(raw)
                print("downloaded bytes:", len(raw), "->", out)
                saved = out
                break
        except Exception as e:
            print(f"attempt {attempt} node={node_name} ERROR: {type(e).__name__}: {e}")
    if saved:
        break
    time.sleep(10)

if not saved:
    print("ALL ATTEMPTS FAILED")
