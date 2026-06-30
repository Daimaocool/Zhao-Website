import fs from 'node:fs/promises';
const token=process.env.BAIDU_TOKEN;
if(!token){console.error('Set BAIDU_TOKEN from Baidu Search Resource Platform.');process.exit(1)}
const site='https://zhao.hiyeup.com';
const urls=(await fs.readFile(new URL('../urls.txt',import.meta.url),'utf8')).trim();
const endpoint=`http://data.zz.baidu.com/urls?site=${encodeURIComponent(site)}&token=${encodeURIComponent(token)}`;
const response=await fetch(endpoint,{method:'POST',headers:{'content-type':'text/plain; charset=utf-8'},body:urls});
console.log('Baidu status:',response.status);
console.log(await response.text());
if(!response.ok) process.exitCode=1;
