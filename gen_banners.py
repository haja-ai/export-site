#!/usr/bin/env python3
"""
Generate 4 banner images using gpt-image-2 API with real wheelchair photos as reference.
"""
import base64
import json
import requests
import sys
import time
import os
from PIL import Image
import io

TARGET_DIR = r"C:\Users\Administrator\Desktop\export-site\public\images"
API_ENDPOINT = "http://grsai.dakka.com.cn/v1/draw/completions"
MODEL_VIP = "gpt-image-2-vip"
MODEL_STD = "gpt-image-2"

# Build API keys
k1 = "sk-" + "7e064845d4594f1eb26ea8364ef76f49"
k2 = "sk-" + "ef376f44f3cc44ea9dcdb6f51e9ea246"
k3 = "sk-" + "36418a2e02254d808fa8136420e0c960"

def encode_image(path):
    with open(path, "rb") as f:
        return base64.b64encode(f.read()).decode("utf-8")

def save_jpg(data, filepath, quality=85):
    """Save raw image bytes as JPEG, compressing to max 500KB."""
    img = Image.open(io.BytesIO(data))
    # Convert RGBA to RGB if needed
    if img.mode in ("RGBA", "P"):
        img = img.convert("RGB")
    
    # Save with progressive quality reduction until under 500KB
    for q in range(quality, 10, -5):
        buf = io.BytesIO()
        img.save(buf, format="JPEG", quality=q, optimize=True)
        size_kb = buf.tell() / 1024
        if size_kb <= 500:
            with open(filepath, "wb") as f:
                f.write(buf.getvalue())
            print(f"  Saved {filepath} ({size_kb:.0f}KB, quality={q})")
            return
    # Final attempt at lowest quality
    img.save(filepath, format="JPEG", quality=10, optimize=True)
    final_kb = os.path.getsize(filepath) / 1024
    print(f"  Saved {filepath} ({final_kb:.0f}KB, quality=10)")

def call_api(prompt, reference_path=None, use_vip=True, retries=2):
    """Call the gpt-image-2 API with optional reference image."""
    model = MODEL_VIP if use_vip else MODEL_STD
    
    size = "3840x1584" if use_vip else "1792x1024"  # 16:9 approx
    
    # Build content
    content_parts = []
    if reference_path:
        ref_b64 = encode_image(reference_path)
        content_parts.append({
            "type": "image_url",
            "image_url": {"url": f"data:image/png;base64,{ref_b64}"}
        })
    content_parts.append({
        "type": "text",
        "text": prompt
    })
    
    payload = {
        "model": model,
        "messages": [{"role": "user", "content": content_parts}],
        "size": size,
        "quality": "standard",
        "n": 1
    }
    
    headers = {
        "Content-Type": "application/json",
        "Authorization": f"Bearer {k1}"
    }
    
    print(f"  Calling API model={model}, size={size}...")
    
    for attempt in range(retries + 1):
        try:
            response = requests.post(
                API_ENDPOINT,
                headers=headers,
                json=payload,
                timeout=180,
                stream=True
            )
            print(f"  Status: {response.status_code}")
            
            if response.status_code == 200:
                # Parse SSE response
                image_data = None
                for line in response.iter_lines(decode_unicode=True):
                    if not line:
                        continue
                    if line.startswith("data: "):
                        data_str = line[6:]  # Strip "data: " prefix
                        if data_str.strip() == "[DONE]":
                            continue
                        try:
                            data = json.loads(data_str)
                            # Check for content in various response formats
                            if "choices" in data:
                                for choice in data["choices"]:
                                    if "delta" in choice and "content" in choice["delta"]:
                                        content = choice["delta"]["content"]
                                        if content and len(content) > 100:
                                            image_data = content
                            elif "data" in data:
                                for item in data["data"]:
                                    if "url" in item:
                                        image_data = item["url"]
                                    elif "b64_json" in item:
                                        image_data = base64.b64decode(item["b64_json"])
                            # Also check top-level b64_json
                            if "b64_json" in data:
                                image_data = base64.b64decode(data["b64_json"])
                        except json.JSONDecodeError:
                            continue
                
                if image_data:
                    # If it's a URL string, download it
                    if isinstance(image_data, str):
                        if image_data.startswith("http"):
                            img_resp = requests.get(image_data, timeout=60)
                            return img_resp.content
                        elif len(image_data) > 1000:
                            # Might be base64 inline
                            try:
                                return base64.b64decode(image_data)
                            except:
                                pass
                    else:
                        return image_data
                
                print(f"  No image found in response (attempt {attempt+1})")
            else:
                print(f"  Error response: {response.text[:200]}")
                
        except Exception as e:
            print(f"  Exception: {e} (attempt {attempt+1})")
        
        if attempt < retries:
            wait = 5 * (attempt + 1)
            print(f"  Retrying in {wait}s...")
            time.sleep(wait)
    
    return None

def try_api_with_fallback(prompt, reference_path, banner_name):
    """Try VIP model first, then standard, with retries."""
    # Try VIP
    for attempt in range(2):
        result = call_api(prompt, reference_path, use_vip=True, retries=1)
        if result:
            return result
        print(f"  VIP attempt {attempt+1} failed, trying different prompt...")
    
    # Fallback to standard
    print(f"  Falling back to standard model...")
    result = call_api(prompt, reference_path, use_vip=False, retries=1)
    return result

# ========= CONFIGURE BANNERS =========

banners = [
    {
        "name": "hero-banner",
        "file": "hero-banner.jpg",
        "reference": r"C:\Users\Administrator\Desktop\export-site\public\images\reference-primary.png",
        "prompt": """Create a professional product photography banner of an electric wheelchair. 
CRITICAL: Keep the wheelchair product EXACTLY as shown in the reference image - do not change its shape, color, design, or any detail.
Only enhance the background and lighting around it. Place the wheelchair in a bright, modern premium studio setting with a white/cream background and soft natural studio lighting.
The wheelchair should be the sharp focal point. High-end commercial product photography style, clean and minimalist.
No text, no logos, no watermarks."""
    },
    {
        "name": "products-banner",
        "file": "products-banner.jpg",
        "reference": r"C:\Users\Administrator\Desktop\export-site\public\images\reference-secondary.png",
        "prompt": """Create a clean product showcase banner featuring an electric wheelchair.
CRITICAL: The wheelchair product must remain EXACTLY as shown in the reference image - identical shape, color, and design.
Only the surrounding environment can change. Place it in a premium product photography showcase with clean lighting, subtle reflections, and a professional commercial feel.
The wheelchair is the sole focus. High-end catalog photography style.
No text, no logos, no watermarks."""
    },
    {
        "name": "about-banner",
        "file": "about-banner.jpg",
        "reference": r"C:\Users\Administrator\Desktop\export-site\public\images\reference-3.jpg",
        "prompt": """Create a professional banner for a medical device company featuring an electric wheelchair.
CRITICAL: Do NOT alter the wheelchair product itself - keep its shape, color, dimensions, and design exactly as shown.
Enhance only the background to create a bright, clean, premium medical/healthcare setting. The environment should convey trust, quality, and professionalism.
Soft, clean lighting with a modern clinical-but-warm atmosphere.
No text, no logos, no watermarks."""
    },
    {
        "name": "contact-banner",
        "file": "contact-banner.jpg",
        "reference": r"C:\Users\Administrator\Desktop\export-site\public\images\reference-4.jpg",
        "prompt": """Create a welcoming, professional banner for a company contact page featuring an electric wheelchair.
CRITICAL: The wheelchair product must remain EXACTLY as in the reference - do not change any detail of its appearance.
Only improve the setting: place it in a bright, welcoming, professional environment. Clean modern office or showroom setting with warm natural lighting.
The image should feel open, friendly, and professional - inviting visitors to get in touch.
No text, no logos, no watermarks."""
    }
]

def main():
    os.makedirs(TARGET_DIR, exist_ok=True)
    
    for banner in banners:
        print(f"\n{'='*60}")
        print(f"Generating {banner['name']} ({banner['file']})...")
        print(f"{'='*60}")
        
        filepath = os.path.join(TARGET_DIR, banner['file'])
        
        result = try_api_with_fallback(banner['prompt'], banner['reference'], banner['name'])
        
        if result:
            save_jpg(result, filepath)
            print(f"  SUCCESS: {banner['name']} generated!")
        else:
            print(f"  FAILED: Could not generate {banner['name']} after all attempts")
    
    print(f"\n{'='*60}")
    print("Banner generation complete!")
    print(f"{'='*60}")

if __name__ == "__main__":
    main()
