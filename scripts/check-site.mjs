import fs from 'node:fs/promises';
const urls=(await fs.readFile(new URL('../urls.txt',import.meta.url),'utf8')).trim().split(/\r?\n/).filter(Boolean);
let failed=0;
for(const url of urls){try{const r=await fetch(url,{redirect:'follow'});const text=await r.text();const ok=r.ok&&/<link[^>]+rel=["']canonical["']/i.test(text)&&/<h1[\s>]/i.test(text);console.log(ok?'OK':'FAIL',r.status,url);if(!ok)failed++}catch(e){console.log('ERROR',url,e.message);failed++}}
if(failed){console.error(`${failed} URL(s) failed checks`);process.exitCode=1}
