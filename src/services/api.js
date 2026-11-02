const BASE=import.meta.env.VITE_API_URL||'http://localhost:4000/api';
export async function api(path,options={}){const res=await fetch(`${BASE}${path}`,{...options,headers:{'Content-Type':'application/json',...(options.headers||{})}});const data=await res.json().catch(()=>({}));if(!res.ok)throw new Error(data.error||`Request failed (${res.status})`);return data;}
export const send=(path,method,body)=>api(path,{method,body:JSON.stringify(body)});
