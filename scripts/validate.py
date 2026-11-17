"""Validate catalog integrity, not linguistic truth or exhaustiveness."""
from pathlib import Path
import json,re
r=Path(__file__).resolve().parents[1]
cat=json.loads((r/'data/catalogs.json').read_text());cs=json.loads((r/'data/cases.json').read_text())
assert set(cat)=={'P','O','S'}
lookup={}
for axis,section in cat.items():
 groups=section['groups'];assert groups
 assert len({g['id'] for g in groups})==len(groups)
 entries=[e for g in groups for e in g['entries']]
 assert len({e['id'] for e in entries})==len(entries),axis
 lookup[axis]={e['id'] for e in entries}
 for g in groups:
  assert all(g.get(k) for k in ('id','name','definition','entries')),(axis,g.get('id'))
  for e in g['entries']:
   assert all(e.get(k) for k in ('id','name','definition','boundary','parentReason')),(axis,e.get('id'))
   assert isinstance(e.get('aliases',[]),list)
   examples=([e['example']] if e.get('example') else [])+e.get('pairedExamples',[])
   assert examples,(axis,e['id'],'no example')
   for ex in examples:
    assert ex.get('text') and ex.get('kind'),(axis,e['id'],'example labels')
    if ex['kind']!='构造':assert ex.get('source',{}).get('url','').startswith('https://'),(axis,e['id'],'source')
for t in cat['P'].get('coverage',[]):
 assert t['entryIds'] and set(t['entryIds'])<=lookup['P'],t
 assert t.get('discrimination'),t
for a in ('P','O','S'):
 names=[e['name'] for g in cat[a]['groups'] for e in g['entries']]
 assert len(names)==len(set(names)),(a,'duplicate canonical names')
print('CATALOG', '; '.join(f"{a}: {len(v['groups'])} groups / {len(lookup[a])} entries" for a,v in cat.items()))
assert len({c['id'] for c in cs})==len(cs)
for c in cs:
 assert all(c.get(k) for k in ('id','kind','quote','context','roles','alternative','cop','style','content','outcome','axis_note'))
 for a,ids in c['axes'].items():assert set(ids)<=lookup[a],(c['id'],a,ids)
 if c['kind']=='构造':assert c['source'] is None
 else:assert c['source']['url'].startswith('https://')
for f in r.rglob('*.md'):
 for target in re.findall(r'\]\(([^)]+)\)',f.read_text()):
  if not re.match(r'https?://|#|mailto:',target):assert (f.parent/target.split('#')[0]).exists(),(f,target)
for target in re.findall(r'(?:src|href)="([^"]+)"',(r/'index.html').read_text()):
 if not re.match(r'https?://|#',target):assert (r/target).exists(),target
print(f'PASS: sources, examples, aliases, IDs, case links and local links; {len(cs)} shared cases.')
