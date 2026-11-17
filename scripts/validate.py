"""Check transport integrity; does not validate linguistic truth."""
from pathlib import Path
import json, re
r=Path(__file__).resolve().parents[1]
cat=json.loads((r/'data/catalogs.json').read_text())
cs=json.loads((r/'data/cases.json').read_text())
assert set(cat)=={'P','O','S'}
for a,entries in cat.items():
 assert len({e['id'] for e in entries})==len(entries)
 for e in entries:
  assert all(e.get(k) for k in ('id','name','definition','boundary','status'))
assert len({c['id'] for c in cs})==len(cs)
for c in cs:
 for k in ('id','cluster','kind','quote','context','roles','alternative','cop','style','content','outcome','certainty','axis_note'): assert c.get(k),(c['id'],k)
 assert c['cluster'] in ('blame','pleading')
 assert set(c['axes'])=={'P','O','S'}
 for a,ids in c['axes'].items(): assert set(ids)<={e['id'] for e in cat[a]},(c['id'],a)
 if c['kind']=='构造': assert c['source'] is None
 else:
  assert c['source']['url'].startswith('https://')
  assert all(c['source'].get(k) for k in ('title','locator','accessed'))
for f in r.rglob('*.md'):
 for target in re.findall(r'\]\(([^)]+)\)',f.read_text()):
  if not re.match(r'https?://|#',target): assert (f.parent/target.split('#')[0]).exists(),(f,target)
for target in re.findall(r'(?:src|href)="([^"]+)"',(r/'index.html').read_text()):
 if not re.match(r'https?://|#',target):assert (r/target).exists(),target
print(f'PASS: {sum(map(len,cat.values()))} entries / 3 axes; {len(cs)} cases; source labels, cross references and local links valid.')
