import json

# Read the file
with open('C:\\Users\\Administrator\\Desktop\\export-site\\lib\\news.js', 'r', encoding='utf-8') as f:
    src = f.read()

# Check existing state
opens = src.count('\n    content: `\n')
closes = src.count('`,\n')
print(f"Before - opens: {opens}, closes: {closes}")

slug = "electric-wheelchair-controller-types-comparison-b2b"
banner_image = "/images/news/electric-wheelchair-controller-types-comparison-b2b-banner.webp"
article_title = "Electric Wheelchair Controller Comparison: Joystick, Head-Array, and Sip-and-Puff Controls"
article_summary = "The controller is the most personal component of any electric wheelchair. This guide compares joystick, head-array, sip-and-puff, switch, and voice control systems across cost, user suitability, installation complexity, and inventory strategy for B2B importers and distributors."

article_content = r'''
  // ===== 2026-07-30: Controller Types Comparison =====
  {
    slug: 'ELECTRIC_WHEELCHAIR_SLUG_PLACEHOLDER',
    bannerImage: 'ELECTRIC_WHEELCHAIR_BANNER_PLACEHOLDER',
    title: 'ELECTRIC_WHEELCHAIR_TITLE_PLACEHOLDER',
    date: '2026-07-30',
    summary:
      'ELECTRIC_WHEELCHAIR_SUMMARY_PLACEHOLDER',
    tags: ['Comparison', 'Controller Guide', 'Electric Wheelchair', 'B2B Guide'],
    source: 'MiniElephant Official',
    sourceUrl: 'https://www.semwheelchair.com/news/ELECTRIC_WHEELCHAIR_SLUG_PLACEHOLDER',
    content: `
## Electric Wheelchair Controller Types: A Complete Comparison

**The takeaway:** The controller is the most personal component of any electric wheelchair — it is the interface between the user and the machine. For B2B importers, understanding the differences between joystick, head-array, sip-and-puff, and other controller types is essential for selecting the right electric wheelchair models for your target market segments.

### Introduction

Every electric wheelchair depends on a controller system to translate user input into precise movement. While the standard joystick controller dominates the market — installed on approximately 85% of electric wheelchairs sold globally — a range of alternative control systems serves users who cannot operate a traditional joystick due to limited hand dexterity, tremors, or high-level spinal cord injuries.

For B2B buyers sourcing electric wheelchairs, controller selection impacts more than just user comfort. It determines market reach, end-user satisfaction, warranty claim rates, and after-sales service complexity. This guide compares the major electric wheelchair controller types across the factors that matter most to importers and distributors.

### Controller Type Comparison Table

| Controller Type | Primary User Group | Ease of Learning | Cost Premium | Est. Market Share |
|----------------|-------------------|-----------------|-------------|------------------|
| **Standard Joystick** | General users with hand function | Very easy — minutes | Baseline | ~85% |
| **Proportional Joystick** | Users needing fine speed control | Easy | +$20-50 | ~10% |
| **Head-Array Control** | Quadriplegic or limited hand function | Moderate — hours to learn | +$200-500 | ~3% |
| **Sip-and-Puff** | High-level spinal cord injuries | Steep — days to learn | +$300-600 | ~1% |
| **Switch Control** | Severe mobility limitations | Simple but slow | +$100-300 | ~0.5% |
| **Voice Control** | Emerging — hands-free preference | Easy | +$150-400 | <0.5% |

### Standard Joystick: The Market Standard

The standard joystick remains the default control system for the overwhelming majority of electric wheelchairs. The MiniRedone series uses a proportional joystick controller with the following characteristics:

- **Intuitive operation** — Push forward to go forward, pull back to reverse, tilt sideways to turn
- **Proportional speed control** — The further the joystick is pushed, the faster the wheelchair moves
- **Programmable parameters** — Maximum speed, acceleration curves, braking sensitivity, and turning speed can all be adjusted for each user
- **Built-in display** — Battery level indicator, current speed setting, and diagnostic fault codes

**Why it dominates:** The joystick requires no specialized training, works for most users with any degree of hand or finger function, and adds minimal cost to the electric wheelchair. For B2B importers targeting the general mobility market, joystick-controlled electric wheelchairs cover approximately 85-90% of end-user demand.

### Head-Array Control Systems

Head-array systems replace the joystick with proximity sensors — typically infrared or ultrasonic — that detect head position and movement:

- Tilt head forward = forward motion
- Tilt head backward = reverse
- Tilt head to one side = turn in that direction
- Return to center = stop

**Best suited for:** Users with C3-C5 spinal cord injuries, advanced amyotrophic lateral sclerosis (ALS), severe arthritis, or conditions that significantly limit hand and arm function.

**Considerations for B2B importers:**
- Requires per-user calibration — adds 30-60 minutes of setup time for each new user
- More sensitive to environmental factors — direct sunlight can interfere with infrared sensors
- Higher warranty risk if sensors are not properly protected during installation
- Niche but consistent demand — typically 2-5% of institutional electric wheelchair orders

### Sip-and-Puff Control

Sip-and-puff systems use pneumatic pressure — sipping (inhaling) and puffing (exhaling) into a tube — to send commands:

- Hard sip = forward
- Hard puff = stop or reverse
- Soft sip or puff = secondary functions (speed adjustment, mode switching)
- Pattern combinations = additional controls (horn, lights, tilt)

**Best suited for:** Users with C1-C3 spinal cord injuries who may also require ventilator support, or those with extremely limited voluntary movement.

**Considerations for B2B importers:**
- Very small addressable market — approximately 1% of electric wheelchair users require sip-and-puff
- Requires the most user training and adaptation period — typically 2-5 days
- Hygienic maintenance of the mouthpiece is essential — recommend spare mouthpieces with each electric wheelchair
- Medical institution tenders occasionally specify this control type for specific patient populations

### Switch Control Systems

Switch control uses one or more mechanical or pneumatic switches that the user activates with whatever body part offers consistent voluntary movement — hand, elbow, chin, knee, or even eyebrow:

- Single switch mode: The electric wheelchair scans through available functions sequentially; the user activates the switch to select the desired function
- Multiple switch mode: Each switch is mapped to a specific command (forward, left, right, stop)

**Best suited for:** Users with very limited but consistent voluntary movement. Frequently prescribed for pediatric users with developmental disabilities or early-intervention cases.

**Considerations for B2B importers:**
- Switch placement is highly individual — requires an occupational therapy evaluation for optimal positioning
- Scanning mode (single switch) can be slow — a simple command like "turn left" may take 3-8 seconds
- Spare parts are relatively simple and low-cost
- Ideal accessibility add-on for distributor product lines

### Comparing Controller Technologies

| Factor | Standard Joystick | Head-Array | Sip-and-Puff | Switch Control |
|--------|-----------------|------------|-------------|---------------|
| **Controller module cost** | $40-80 | $200-400 | $300-500 | $100-200 |
| **Installation complexity** | Plug-and-play | Professional setup | Professional setup | Moderate |
| **Spare parts availability** | Widely available | Special order | Special order | Limited |
| **User training time** | Minutes | 1-3 hours | 2-5 days | 1-3 hours |
| **Warranty claim rate** | Low (<2%) | Moderate | Moderate | Low |
| **Battery range impact** | Negligible | Negligible | Negligible | Negligible |

### Controller Compatibility with Electric Wheelchair Platforms

For B2B importers, one of the most important considerations is whether a single electric wheelchair platform supports multiple controller types. Modular controller architecture — where the control module can be swapped without replacing the entire wheelchair — offers significant advantages:

- **Reduced inventory complexity** — Stock one electric wheelchair model and install the appropriate controller per order
- **Lower spare parts burden** — One controller base serves multiple control types
- **Faster order fulfillment** — Configure the control system locally rather than waiting for factory customization

The MiniRedone series uses a modular controller architecture with an industry-standard DX/R-net compatible interface, allowing distributors to swap control modules without modifying the electric wheelchair frame or wiring harness.

### Controller Programming: The Hidden Differentiator

All modern electric wheelchair controllers require programming to match each user's specific needs. The ability to program controllers in-house is a competitive advantage for distributors:

| Programmable Parameter | Standard Joystick | Alternative Controls |
|----------------------|------------------|---------------------|
| Maximum forward speed | Yes | Yes |
| Maximum reverse speed | Yes | Yes |
| Acceleration and deceleration profiles | Yes | Yes |
| Braking sensitivity | Yes | Yes |
| Joystick dead zone and throw range | Yes | N/A |
| Turn sensitivity and radius | Yes | Yes |
| Drive mode presets (indoor/outdoor) | Yes | Yes |
| Battery discharge cutoff voltage | Yes | Yes |

For B2B distributors, having at least one technician trained in controller programming is a significant market advantage — many competing distributors lack this capability and must refer users back to the manufacturer.

### Inventory Strategy for New Importers

| Business Stage | Recommended Controller Mix | Rationale |
|---------------|---------------------------|-----------|
| First 6 months | 95% standard joystick, 5% head-array compatible | Establish core demand before expanding |
| 6-18 months | 90% standard joystick, 8% head-array, 2% switch | Add niche options as customer base grows |
| 18+ months | 85% standard joystick, 10% head-array, 3% sip-and-puff, 2% switch | Full coverage for institutional tenders |

### Frequently Asked Questions

**Q: Can any electric wheelchair accept alternative controllers?**
A: No. Not all electric wheelchair platforms support alternative control systems. Look for modular controller architectures with industry-standard interfaces such as DX, R-net, or similar protocols. The MiniRedone series uses a compatible modular interface.

**Q: Do alternative controllers affect battery range?**
A: Negligibly. The controller itself draws minimal power compared to the drive motors — typically less than 5 watts. Any real-world range difference is attributable to driving style rather than the controller type itself.

**Q: Which controller type has the lowest warranty claims?**
A: Standard joystick controllers consistently have the lowest warranty claim rate among all electric wheelchair controller types — typically below 2% in the first year. Head-array and sip-and-puff systems report higher rates (3-5%) due to their additional mechanical and electronic complexity.

**Q: Is voice control the future of electric wheelchair controls?**
A: Voice control is an emerging technology for electric wheelchairs but faces three significant challenges: reliable voice recognition in noisy outdoor environments, guaranteed emergency stop response, and medical device regulatory classification. Voice-assisted control (voice commands combined with a joystick) is more likely than pure voice control in the near term.

**Q: What is the minimum controller inventory for a new distributor?**
A: For a new B2B importer entering the electric wheelchair market, stock 90% standard joystick models and 10% head-array-compatible electric wheelchairs. Sip-and-puff and switch controls can be ordered per-request — demand is too small and user-specific to carry in stock.

> **Explore the MiniRedone modular controller system:** [www.semwheelchair.com/products](https://www.semwheelchair.com/products) — all models support standard joystick control with optional alternative controller upgrades.
> **Request OEM controller customization:** [www.semwheelchair.com/contact](https://www.semwheelchair.com/contact)
`,
  },
'''

# Replace placeholders
article = article_content.replace('ELECTRIC_WHEELCHAIR_SLUG_PLACEHOLDER', slug)
article = article.replace('ELECTRIC_WHEELCHAIR_BANNER_PLACEHOLDER', banner_image)
article = article.replace('ELECTRIC_WHEELCHAIR_TITLE_PLACEHOLDER', article_title)
article = article.replace('ELECTRIC_WHEELCHAIR_SUMMARY_PLACEHOLDER', article_summary)

# Find the last ] and insert before it
insert_pos = src.rfind('\n];')
before = src[:insert_pos]
after = src[insert_pos:]

new_src = before + '\n' + article + after

# Validate template literal integrity
opens_new = new_src.count('\n    content: `\n')
closes_new = new_src.count('`,\n')
print(f"After - opens: {opens_new}, closes: {closes_new}")

if opens_new != closes_new:
    print("❌ MISMATCH! Cannot write.")
    # Debug: find the problematic area
    lines = new_src.split('\n')
    for i in range(max(0, insert_pos-10), min(len(lines), insert_pos+15)):
        print(f"L{i+1}: {repr(lines[i][:100])}")
else:
    with open('C:\\Users\\Administrator\\Desktop\\export-site\\lib\\news.js', 'w', encoding='utf-8') as f:
        f.write(new_src)
    print("✅ File written successfully!")

# Verify
with open('C:\\Users\\Administrator\\Desktop\\export-site\\lib\\news.js', 'r', encoding='utf-8') as f:
    verified = f.read()
v_opens = verified.count('\n    content: `\n')
v_closes = verified.count('`,\n')
v_slug = verified.count("slug: 'electric-wheelchair-controller-types-comparison-b2b'")
print(f"Verification - opens: {v_opens}, closes: {v_closes}, slug count: {v_slug}")
