# -*- coding: utf-8 -*-
"""Adjust keyword density: replace some instances with synonyms, re-count."""
import re

with open(r"C:\Users\Administrator\Desktop\export-site\scripts\_draft_check.py", encoding="utf-8") as f:
    src = f.read()

# Extract the content string from the draft script
m = re.search(r'content = """(.*?)"""\n\nkw', src, re.DOTALL)
content = m.group(1)

repl = [
    ("hold a loaded electric wheelchair on a 10-degree", "hold a loaded wheelchair on a 10-degree"),
    ("parking brake on their electric wheelchair cannot hold", "parking brake on their unit cannot hold"),
    ("that slows the electric wheelchair when the joystick", "that slows the wheelchair when the joystick"),
    ("keeps the electric wheelchair stationary when it stops", "keeps the wheelchair stationary when it stops"),
    ("parking braking on a well-designed electric wheelchair is mechanical", "parking braking on a well-designed wheelchair is mechanical"),
    ("hold the full rated load (150 kg on most mid-size electric wheelchairs)", "hold the full rated load (150 kg on most mid-size models)"),
    ("what happens to the electric wheelchair when the battery dies", "what happens to the wheelchair when the battery dies"),
    ("how often do pads, cables, or actuators need service on the electric wheelchair?", "how often do pads, cables, or actuators need service?"),
    ("how much does the brake system add to the wholesale price of the electric wheelchair?", "how much does the brake system add to the wholesale price?"),
    ("Range extender on most electric wheelchairs", "Range extender on most models"),
    ("if the electric wheelchair loses power on a slope", "if the wheelchair loses power on a slope"),
    ("higher customer confidence in the electric wheelchair brand", "higher customer confidence in the brand"),
    ("Manual brakes on an electric wheelchair use a cable", "Manual brakes on a wheelchair use a cable"),
    ("manual-brake electric wheelchairs show measurable", "manual-brake models show measurable"),
    ("the moment the electric wheelchair loses power", "the moment the wheelchair loses power"),
]

for old, new in repl:
    if old in content:
        content = content.replace(old, new)
    else:
        print(f"WARN not found: {old[:60]}")

kw = content.lower().count("electric wheelchair")
words = content.split()
density = (kw * 2) / len(words) * 100
print(f"instances={kw}, words={len(words)}, density={density:.1f}%")

with open(r"C:\Users\Administrator\Desktop\export-site\scripts\_draft_final.txt", "w", encoding="utf-8", newline="\n") as f:
    f.write(content)
print("saved to _draft_final.txt")
