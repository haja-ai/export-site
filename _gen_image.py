#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""Generate banner image for electric-wheelchair-charging-time-comparison-b2b via nano-banana-2."""
import json, os, re, sys, time, urllib.request, urllib.error

SLUG = "electric-wheelchair-charging-time-comparison-b2b"

def read_key():
    try:
        with open(".env.production", "r", encoding="utf-8") as f:
            for line in f:
                m = re.match(r"GPT_IMAGE_KEY=(.+)", line.strip())
                if m:
                    return m.group(1).strip().strip('"').strip("'")
    except Exception as e:
        print("env read error:", e)
    return "sk-c1ed54896e49438d89ef3ae388832bf0"

KEY = read_key()

PROMPT = ("Professional B2B product photography of a modern charging station area in a bright clean "
          "medical equipment showroom. A sleek white charging dock mounted on a wall with a black power "
          "cable neatly coiled and plugged in, soft natural daylight from large windows, minimalist "
          "white and light gray interior, clean and realistic, centered composition, high quality, "
          "no people, no text, no logos, no watermark, no wheelchair visible.")

def call_api(base_url, model, extra_params=None):
    params = {
        "prompt": PROMPT,
        "model": model,
        "aspectRatio": "16:9",
        "replyType": "json",
    }
    if extra_params:
        params.update(extra_params)
    req = urllib.request.Request(
        base_url + "/v1/api/generate",
        data=json.dumps(params).encode("utf-8"),
        headers={"Content-Type": "application/json", "Authorization": "Bearer " + KEY},
        method="POST",
    )
    with urllib.request.urlopen(req, timeout=90) as resp:
        return json.loads(resp.read().decode("utf-8"))

def extract_url(data):
    # CRITICAL: success shape is {"status":"succeeded","results":[{"url": ...}]}
    for path in [("results", 0, "url"), ("url",), ("images", 0), ("data", "url"), ("imageUrl",)]:
        cur = data
        ok = True
        for part in path:
            if isinstance(cur, dict) and part in cur:
                cur = cur[part]
            elif isinstance(cur, list) and isinstance(part, int) and part < len(cur):
                cur = cur[part]
            else:
                ok = False
                break
        if ok and isinstance(cur, str) and cur.startswith("http"):
            return cur
    return None

attempts = [
    ("https://grsaiapi.com", "nano-banana-2", {"imageSize": "2K"}),
    ("https://grsai.dakka.com.cn", "nano-banana-2", {"imageSize": "2K"}),
    ("https://grsaiapi.com", "gpt-image-2", None),
]

url = None
for base, model, extra in attempts:
    for attempt in range(1, 4):
        try:
            print(f"[try] {base} model={model} attempt={attempt}")
            data = call_api(base, model, extra)
            print("status:", data.get("status"), "| progress:", data.get("progress"))
            u = extract_url(data)
            if u:
                print("URL:", u)
                url = u
                break
        except Exception as e:
            print("error:", repr(e))
        time.sleep(10)
    if url:
        break

if not url:
    print("NO_IMAGE_URL")
    sys.exit(1)

with open("_banner_url.txt", "w", encoding="utf-8") as f:
    f.write(url)
print("saved url to _banner_url.txt")

# download
req = urllib.request.Request(url, headers={"User-Agent": "Mozilla/5.0"})
with urllib.request.urlopen(req, timeout=90) as resp:
    raw = resp.read()
print("downloaded bytes:", len(raw))
with open("_banner_raw.png", "wb") as f:
    f.write(raw)
print("OK")
