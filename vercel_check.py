import urllib.request, json

env_path = r"C:\Users\Administrator\Desktop\export-site\.env"
token = None
with open(env_path) as f:
    for line in f:
        line = line.strip()
        if "VERCEL_TOKEN=" in line:
            token = line.split("=", 1)[1].strip()
            break

if not token:
    print("ERROR: Could not read VERCEL_TOKEN from .env")
else:
    print(f"Token read: {token[:10]}...{token[-4:]}")
    req = urllib.request.Request("https://api.vercel.com/v1/deployments?limit=1")
    req.add_header("Authorization", "Bearer " + token)
    try:
        with urllib.request.urlopen(req, timeout=15) as resp:
            data = json.loads(resp.read())
            dep = data['deployments'][0]
            print("readyState:", dep.get('readyState'))
            print("aliases:", dep.get('alias', []))
            print("url:", dep.get('url', 'N/A'))
            print("created:", dep.get('created', 'N/A'))
    except urllib.error.HTTPError as e:
        print("HTTP Error:", e.code, e.reason)
        print("Body:", e.read().decode()[:500])
    except urllib.error.URLError as e:
        print("URL Error:", e.reason)
    except Exception as e:
        print("Error:", type(e).__name__, str(e))
