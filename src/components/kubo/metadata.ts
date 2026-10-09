export function kuboHead(title:string,description:string) {
 return {meta:[{title:`${title} · Kubo`},{name:'description',content:description},{property:'og:title',content:`${title} · Kubo`},{property:'og:description',content:description},{property:'og:type',content:'website'},{name:'twitter:card',content:'summary_large_image'}]};
}
