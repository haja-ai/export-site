"""Generate banner images for all news articles using gpt-image-2 API"""
import urllib.request, json, os, sys, time
from PIL import Image
from io import BytesIO

API_KEY = "sk-c1ed54896e49438d89ef3ae388832bf0"
API_URL = "https://grsaiapi.com/v1/api/generate"
NEWS_DIR = r"C:\Users\Administrator\Desktop\export-site\public\images\news"
os.makedirs(NEWS_DIR, exist_ok=True)

prompts = {
    "electric-wheelchair-vs-mobility-scooter-b2b-guide": "A side-by-side comparison scene of an electric wheelchair and a mobility scooter in a modern showroom, clean professional B2B style, 16:9",
    "electric-wheelchair-certification-guide-2026-b2b": "Professional certification documents and certificates on a desk with medical device labels, CE marking, FDA logo visible, clean office lighting, 16:9",
    "electric-wheelchair-warranty-after-sales-guide": "Customer service representative shaking hands with a client in a modern office, warranty documents on table, professional B2B setting, 16:9",
    "shipping-importing-electric-wheelchairs-b2b": "Shipping containers at a busy international port with cargo being loaded, logistics and freight scene, professional photography style, 16:9",
    "electric-wheelchair-market-trends-2026-b2b": "A data analyst looking at a dashboard with growth charts and market data on large screens, modern office, business analytics theme, 16:9",
    "electric-wheelchair-outdoor-terrain-guide": "An electric wheelchair moving on a paved park path with trees and sunlight, outdoor accessibility scene, realistic style, 16:9",
    "electric-wheelchair-maintenance-tips-b2b": "A maintenance technician in a clean workshop inspecting wheelchair parts with tools, professional service environment, 16:9",
    "lightweight-vs-extra-wide-electric-wheelchair-comparison": "Two different wheelchair models side by side showing size difference, clean white background, product comparison layout, 16:9",
    "electric-wheelchair-hub-motor-technology-benefits": "Close-up of a modern electric wheelchair wheel hub motor mechanism, cross-section engineering style, technical blueprint atmosphere, 16:9",
    "electric-wheelchair-safety-features-guide": "Safety inspection checklist with a wheelchair in background, professional testing environment, bright clean lighting, 16:9",
    "electric-wheelchair-battery-maintenance-guide": "A technician testing a lithium battery pack with a multimeter in a clean electronics workshop, safety goggles, professional setting, 16:9",
    "oem-odm-electric-wheelchair-customization-guide": "A product designer reviewing wheelchair color samples and material swatches in a modern design studio, customization theme, 16:9",
    "electric-wheelchair-battery-guide-2026": "Various lithium battery packs arranged on a clean white surface with technical labels, battery technology showcase, 16:9",
    "folding-electric-wheelchair-b2b-logistics": "A folded wheelchair being placed into a car trunk, portability and storage concept, lifestyle photography style, 16:9",
    "minielephant-launches-miniredone-series": "A product launch event stage with modern wheelchair display, dramatic lighting, corporate event photography style, 16:9",
    "choosing-right-electric-wheelchair-b2b": "A business buyer examining different wheelchair options in a showroom, comparison shopping concept, professional B2B setting, 16:9",
    "magnesium-alloy-wheelchair-frames-advantage": "Close-up of a lightweight magnesium alloy wheelchair frame on a workbench, showing the one-piece die-cast structure, industrial design, 16:9",
    "south-america-electric-wheelchair-market-2026-b2b": "Aerial view of a South American city skyline with modern buildings, business and market growth concept, warm golden hour lighting, 16:9",
    "electric-wheelchair-manufacturer-china-b2b-guide": "Modern factory building exterior with clean architecture, China manufacturing landscape, blue sky with clouds, professional photo style, 16:9",
}

def gen_one(slug, prompt):
    path = os.path.join(NEWS_DIR, f"{slug}-banner.webp")
    if os.path.exists(path) and os.path.getsize(path) > 5000:
        return f"SKIP (exists)"
    
    payload = {"model": "gpt-image-2", "prompt": prompt, "aspectRatio": "16:9", "replyType": "json"}
    req = urllib.request.Request(API_URL)
    req.add_header("Content-Type", "application/json")
    req.add_header("Authorization", f"Bearer {API_KEY}")
    req.data = json.dumps(payload).encode("utf-8")
    
    try:
        with urllib.request.urlopen(req, timeout=120) as resp:
            result = json.loads(resp.read())
        if result.get("status") != "succeeded":
            return f"FAIL: {result.get('error','?')[:40]}"
        
        img_url = result["results"][0]["url"]
        with urllib.request.urlopen(img_url, timeout=60) as ir:
            img_data = ir.read()
        
        img = Image.open(BytesIO(img_data))
        w, h = img.size
        if w > 1920:
            ratio = 1920 / w
            img = img.resize((1920, int(h * ratio)), Image.LANCZOS)
        img.save(path, "WEBP", quality=82, optimize=True)
        return f"OK {os.path.getsize(path)//1024}KB"
    except Exception as e:
        return f"ERR: {str(e)[:50]}"

for slug, prompt in prompts.items():
    result = gen_one(slug, prompt)
    print(f"[{result:<25}] {slug}")
    sys.stdout.flush()

print("\nAll done!")
