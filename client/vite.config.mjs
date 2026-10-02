import {defineConfig} from 'vite';
import react from '@vitejs/plugin-react';
import fs from 'node:fs';
export default defineConfig({plugins:[react(),{
 name:'movies-api',
 configureServer(server){server.middlewares.use('/api/movies',(req,res)=>{
 const movies=JSON.parse(fs.readFileSync(new URL('./public/movies.json',import.meta.url),'utf8'));
 const id=req.url.split('?')[0].replace(/^\//,'');
 const data=id?movies.find(m=>String(m.id)===id):movies;
 res.statusCode=data?200:404;res.setHeader('Content-Type','application/json');res.end(JSON.stringify(data||{message:'Movie not found.'}));
 });}
}]});
