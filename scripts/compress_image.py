from PIL import Image
import os

input_file = r"C:\Users\Administrator\Desktop\export-site\public\images\news\frame-comp.png"
output_file = r"C:\Users\Administrator\Desktop\export-site\public\images\news\electric-wheelchair-frame-materials-comparison-b2b-banner.webp"

img = Image.open(input_file)
print(f'Original size: {img.size}')

# Resize to max 1600px wide
if img.width > 1600:
    ratio = 1600.0 / img.width
    new_h = int(img.height * ratio)
    img = img.resize((1600, new_h), Image.LANCZOS)
    print(f'Resized to: {img.size}')

# Convert to RGB if RGBA
if img.mode == 'RGBA':
    img = img.convert('RGB')

# Save as WebP quality 75
img.save(output_file, 'WEBP', quality=75)
size_kb = os.path.getsize(output_file) / 1024
print(f'Saved to: {output_file}')
print(f'WebP size: {size_kb:.1f} KB')
