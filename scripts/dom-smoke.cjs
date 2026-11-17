// Optional development test: npm install --prefix /tmp/taxonomy-test jsdom
const fs=require('fs'),path=require('path'),assert=require('assert');
const {JSDOM}=require(process.env.JSDOM_PATH||'/tmp/taxonomy-test/node_modules/jsdom');
const root=path.resolve(__dirname,'..');
const cat=JSON.parse(fs.readFileSync(path.join(root,'data/catalogs.json')));
const count=a=>cat[a].groups.reduce((n,g)=>n+g.entries.length,0);
const dom=new JSDOM(fs.readFileSync(path.join(root,'index.html'),'utf8'),{url:'http://localhost/',runScripts:'outside-only',pretendToBeVisual:true});
const w=dom.window;w.HTMLElement.prototype.scrollIntoView=function(){};w.fetch=async p=>({ok:true,json:async()=>JSON.parse(fs.readFileSync(path.join(root,p),'utf8'))});
w.eval(fs.readFileSync(path.join(root,'js/app.js'),'utf8'));
const tick=()=>new Promise(r=>setTimeout(r,30));const $=s=>w.document.querySelector(s),n=s=>w.document.querySelectorAll(s).length;
const input=v=>{$('#q').value=v;$('#q').dispatchEvent(new w.Event('input'));};
(async()=>{await tick();assert.equal(n('.card'),count('P'));assert($('#status').textContent.includes('目的'));for(const a of ['O','S','P']){$('[data-axis="'+a+'"]').click();assert.equal(n('.card'),count(a));assert.equal(n('#groups button'),cat[a].groups.length+1);}
 $('#groups button:nth-child(2)').click();assert.equal(n('.card'),cat.P.groups[0].entries.length);$('#reset').click();input('完全不存在的字符串ZZZ');assert.equal(n('.card'),0);assert.equal(n('#cases .case'),0);$('#reset').click();assert.equal(n('.card'),count('P'));
 for(const q of ['请求','請求','道歉','授权']){input(q);assert(n('.card')>0,'search '+q);}$('#reset').click();$('#kind').value='sourced';$('#kind').dispatchEvent(new w.Event('change'));assert.equal(n('#cases .case'),10);$('#reset').click();
 w.location.hash='case-Q01';await tick();assert($('#case-Q01').open);input('不存在xyz');w.location.hash='case-B01';await tick();assert($('#case-B01').open,'deep link clears conflicting search');
 w.location.hash='entry-P-authorize';await tick();assert($('#entry-P-authorize'));assert($('#entry-P-authorize details').open);w.location.hash='case-P-S01';await tick();assert($('#case-P-S01').open);assert.equal(n('#guide details'),2);assert.equal(cat.P.coverage.length,32);
 console.log('PASS DOM: exact group/leaf counts, all 3 axes, groups, no results, reset, simplified/traditional search, evidence filter, preserved case deep links.');w.close();})().catch(e=>{console.error(e);process.exit(1)});
