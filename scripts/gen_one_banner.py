"""Generate a single news banner image with MiniElephant logo, download, compress to webp.
Usage: python gen_one_banner.py <slug> "<prompt>"
"""
import json, sys, time, os, urllib.request

API_KEY = "sk-c1ed54896e49438d89ef3ae388832bf0"
LOGO_URL = "https://www.semwheelchair.com/images/mini-elephant-logo.png"
OUT_DIR = r"C:\Users\Administrator\Desktop\export-site\public\images\news"

def generate(url, data, timeout=240):
    req = urllib.request.Request(
        url,
        data=json.dumps(data).encode("utf-8"),
        headers={"Content-Type": "application/json", "Authorization": f"Bearer {API_KEY}"}
    )
    with urllib.request.urlopen(req, timeout=timeout) as resp:
        return json.loads(resp.read().decode("utf-8"))

def main():
    slug = sys.argv[1]
    prompt = sys.argv[2]
    payload = {
        "model": "nano-banana-2",
        "prompt": prompt,
        "aspectRatio": "16:9",
        "imageSize": "2K",
        "replyType": "json",
        "images": [LOGO_URL],
    }
    img_url = None
    for endpoint, name in [("https://grsaiapi.com/v1/api/generate", "global"),
                           ("https://grsai.dakka.com.cn/v1/api/generate", "cn")]:
        for attempt in range(4):
            try:
                print(f"[{slug}] {name} attempt {attempt+1}", flush=True)
                res = generate(endpoint, payload)
                if isinstance(res, dict) and res.get("results"):
                    img_url = res["results"][0].get("url")
                    if img_url:
                        break
            except Exception as e:
                print(f"  warn: {e}", flush=True)
                time.sleep(10)
        if img_url:
            break

    if not img_url:
        print("FAILED", flush=True)
        sys.exit(1)

    # download
    tmp_png = os.path.join(OUT_DIR, f"_{slug}_tmp.png")
    for attempt in range(3):
        try:
            req = urllib.request.Request(img_url, headers={"User-Agent": "Mozilla/5.0"})
            with urllib.request.urlopen(req, timeout=90) as resp:
                data = resp.read()
            with open(tmp_png, "wb") as f:
                f.write(data)
            print(f"DOWNLOADED {len(data)} bytes", flush=True)
            break
        except Exception as e:
            print(f"  download warn: {e}", flush=True)
            time.sleep(8)
    else:
        print("FAILED", flush=True)
        sys.exit(1)

    # ffmpeg compress to webp (max 1600px)
    out_webp = os.path.join(OUT_DIR, f"{slug}-banner.webp")
    import subprocess
    cmd = ["ffmpeg", "-y", "-i", tmp_png,
           "-vf", "scale='if(gt(iw,1600),1600,iw)':-1", "-q:v", "75", out_webp]
    r = subprocess.run(cmd, capture_output=True)
    os.remove(tmp_png)
    if os.path.exists(out_webp):
        print(f"OK {os.path.getsize(out_webp)} bytes {out_webp}", flush=True)
    else:
        print(f"FFMPEG FAILED: {r.stderr.decode()[-300:]}", flush=True)
        sys.exit(1)

if __name__ == "__main__":
    main()
