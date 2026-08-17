import json, time, urllib.request, urllib.error, sys

API_URL = "https://grsaiapi.com/v1/api/generate"
TOKEN = "sk-c1ed54896e49438d89ef3ae388832bf0"
SLUG = "electric-wheelchair-vs-manual-wheelchair-b2b-guide"
OUT = f"public/images/news/{SLUG}-banner.png"
URL_FILE = "_banner_url.txt"

prompt = (
    "Professional B2B product photography close-up: a modern electric wheelchair with "
    "joystick control and a lightweight manual wheelchair placed side by side, the "
    "pair of wheelchairs filling 80 percent of the frame width and perfectly centered "
    "in the middle of the image, symmetric composition with equal space on both "
    "sides, bright clean medical showroom background, soft studio lighting, "
    "realistic, sharp focus, no people, no text, no logos, no watermark."
)

def call(model, extra):
    body = {"prompt": prompt, "model": model, "aspectRatio": "16:9", "replyType": "json"}
    body.update(extra)
    req = urllib.request.Request(
        API_URL,
        data=json.dumps(body).encode(),
        headers={"Content-Type": "application/json", "Authorization": f"Bearer {TOKEN}"},
        method="POST",
    )
    with urllib.request.urlopen(req, timeout=120) as resp:
        return json.loads(resp.read().decode())

def extract_url(obj):
    for key in ("results", "images", "data"):
        v = obj.get(key)
        if isinstance(v, list) and v and isinstance(v[0], dict):
            u = v[0].get("url")
            if u:
                return u
    if isinstance(obj.get("data"), dict):
        u = obj["data"].get("url")
        if u:
            return u
    return obj.get("url") or obj.get("imageUrl")

def download(url, path, retries=3):
    for i in range(retries):
        try:
            req = urllib.request.Request(url, headers={"User-Agent": "Mozilla/5.0"})
            with urllib.request.urlopen(req, timeout=120) as r, open(path, "wb") as f:
                f.write(r.read())
            return True
        except Exception as e:
            print(f"download attempt {i+1} failed: {e}", flush=True)
            time.sleep(10)
    return False

# Attempt 1: nano-banana-2
for attempt in range(3):
    try:
        print(f"attempt {attempt+1}: nano-banana-2", flush=True)
        obj = call("nano-banana-2", {"imageSize": "2K"})
        print("resp keys:", list(obj.keys()), "status:", obj.get("status"), flush=True)
        url = extract_url(obj)
        if url:
            print("URL:", url, flush=True)
            with open(URL_FILE, "w") as f:
                f.write(url)
            if download(url, OUT):
                print("DOWNLOADED", OUT, flush=True)
                sys.exit(0)
        else:
            print("no url in response:", json.dumps(obj)[:300], flush=True)
    except urllib.error.HTTPError as e:
        print(f"HTTPError {e.code}: {e.read().decode()[:300]}", flush=True)
    except Exception as e:
        print(f"error: {e}", flush=True)
    time.sleep(10)

# Attempt 2: gpt-image-2 fallback (no imageSize)
for attempt in range(3):
    try:
        print(f"fallback attempt {attempt+1}: gpt-image-2", flush=True)
        obj = call("gpt-image-2", {})
        url = extract_url(obj)
        if url:
            print("URL:", url, flush=True)
            with open(URL_FILE, "w") as f:
                f.write(url)
            if download(url, OUT):
                print("DOWNLOADED", OUT, flush=True)
                sys.exit(0)
        else:
            print("no url:", json.dumps(obj)[:300], flush=True)
    except Exception as e:
        print(f"fallback error: {e}", flush=True)
    time.sleep(10)

print("ALL ATTEMPTS FAILED", flush=True)
sys.exit(1)
