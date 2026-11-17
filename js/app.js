"use strict";
const $ = s => document.querySelector(s);
let catalogs, cases, axis = 'P';
const labels = {P:'目的',O:'操作',S:'风格'};
function el(tag, text, cls) { const n=document.createElement(tag); if(text!==undefined)n.textContent=text; if(cls)n.className=cls; return n; }
function name(a,id){return catalogs[a].find(x=>x.id===id)?.name || id;}
function appendField(dl,k,v){dl.append(el('dt',k),el('dd',v));}
function render(){
 const q=$('#q').value.trim().toLowerCase(), cl=$('#cluster').value, kind=$('#kind').value;
 const visible=cases.filter(c=>(!cl||c.cluster===cl)&&(!kind||(kind==='sourced'?c.kind!=='构造':c.kind===kind))&&(!q||JSON.stringify(c).toLowerCase().includes(q)||Object.entries(c.axes).some(([a,ids])=>ids.some(id=>name(a,id).includes(q)))));
 const entries=catalogs[axis].filter(e=>(!cl||!e.cluster||e.cluster===cl)&&(!q||JSON.stringify(e).toLowerCase().includes(q)||visible.some(c=>c.axes[axis].includes(e.id)))&&(!kind||visible.some(c=>c.axes[axis].includes(e.id))));
 const grid=el('div',undefined,'grid');
 for(const e of entries){const card=el('article',undefined,'card');card.append(el('p',axis+' / '+e.status,'meta'),el('h3',e.name),el('p',e.definition),el('p','边界：'+e.boundary,'boundary'));const links=el('div',undefined,'case-links');const linked=visible.filter(c=>c.axes[axis].includes(e.id));if(!linked.length)links.append(el('span','当前筛选下暂无案例，待补材料。','meta'));for(const c of linked){const a=el('a',c.id);a.href='#case-'+c.id;links.append(a);}card.append(links);grid.append(card);}
 $('#catalog').replaceChildren(entries.length?grid:el('p','没有匹配词条，请调整搜索或筛选。','empty'));
 const nodes=[];
 for(const c of visible){const d=el('details');d.id='case-'+c.id;const sum=el('summary',c.id+' · '+c.kind+' · '+c.quote);d.append(sum,el('blockquote',c.quote));for(const a of ['P','O','S']){const row=el('p');row.append(el('strong',a+' '+labels[a]+'：'));row.append(el('span',c.axes[a].map(id=>name(a,id)).join(' / ')||'本版未标'));d.append(row);}const dl=el('dl');for(const [k,v] of [['语境',c.context],['参与者',c.roles],['竞争分析',c.alternative],['C 概念',c.cop.C.join('、')],['O 分析',c.cop.O.join('、')],['风格依据',c.style],['话语内容',c.content],['实际结果',c.outcome],['证据限度',c.axis_note]])appendField(dl,k,v);d.append(dl);if(c.source){const p=el('p');const a=el('a',c.source.title+' · 原文');a.href=c.source.url;a.rel='noopener noreferrer';p.append(a,el('span','；定位：'+c.source.locator+'；核验 '+c.source.accessed));d.append(p);}else d.append(el('p','构造案例：用于概念检验，不是自然语料。','boundary'));nodes.push(d);}
 $('#cases').replaceChildren(...(nodes.length?nodes:[el('p','没有匹配案例。','empty')]));$('#status').textContent=axis+' '+labels[axis]+'：'+entries.length+' 个候选；'+visible.length+' 条共同案例（全库 '+cases.length+' 条）。';
 openHash();
}
function openHash(){const id=location.hash.slice(1);if(!/^case-[BQ]\d+$/.test(id))return;const n=document.getElementById(id);if(n){n.open=true;requestAnimationFrame(()=>n.scrollIntoView({block:'start'}));}}
async function start(){try{const response=await Promise.all(['data/catalogs.json','data/cases.json'].map(async p=>{const r=await fetch(p);if(!r.ok)throw Error(p);return r.json();}));[catalogs,cases]=response;for(const s of ['#q','#cluster','#kind'])$(s).addEventListener(s==='#q'?'input':'change',render);document.querySelectorAll('[data-axis]').forEach(b=>b.addEventListener('click',()=>{axis=b.dataset.axis;document.querySelectorAll('[data-axis]').forEach(x=>x.setAttribute('aria-pressed',String(x===b)));render();}));$('#reset').addEventListener('click',()=>{$('#q').value='';$('#cluster').value='';$('#kind').value='';render();});window.addEventListener('hashchange',openHash);document.addEventListener('click',e=>{if(e.target.closest('a[href^="#case-"]'))setTimeout(openHash,0);});render();}catch(e){$('#status').textContent='数据未能载入。请通过本地 HTTP 服务器打开，或稍后重试。';}}
start();
