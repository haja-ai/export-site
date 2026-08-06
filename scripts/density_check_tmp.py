# -*- coding: utf-8 -*-
import sys, json

content = open(sys.argv[1], encoding='utf-8').read()
kw = content.lower().count("electric wheelchair")
words = content.split()
density = (kw * 2) / len(words) * 100
print(f"instances={kw}, words={len(words)}, density={density:.2f}%")
