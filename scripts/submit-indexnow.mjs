import fs from 'node:fs/promises';
const host='zhao.hiyeup.com';
const key='f0740c06700d2223d234791d1dc14316';
const keyLocation=`https://${host}/${key}.txt`;
const urlList=(await fs.readFile(new URL('../urls.txt',import.meta.url),'utf8')).trim().split(/\r?\n/).filter(Boolean);
const response=await fetch('https://api.indexnow.org/indexnow',{method:'POST',headers:{'content-type':'application/json; charset=utf-8'},body:JSON.stringify({host,key,keyLocation,urlList})});
console.log('IndexNow status:',response.status);
console.log(await response.text());
if(!response.ok) process.exitCode=1;
