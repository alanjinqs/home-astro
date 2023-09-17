import{d,u as _,a as p,c as m,b as h,e as n,f as t,t as o,g as a,F as u,r as f,n as g,h as v,o as r,i as x,j as y,k as b,l as N,m as k,_ as P}from"./index-21acbb8c.js";import{N as w}from"./NoteDisplay-8fce0610.js";const L={class:"m-4"},V={class:"mb-10"},C={class:"text-4xl font-bold mt-2"},S={class:"opacity-50"},T={class:"text-lg"},B={class:"font-bold flex gap-2"},D={class:"opacity-50"},H=t("div",{class:"flex-auto"},null,-1),j={key:0,class:"border-gray-400/50 mb-8"},z=d({__name:"PresenterPrint",setup(A){_(`
@page {
  size: A4;
  margin-top: 1.5cm;
  margin-bottom: 1cm;
}
* {
  -webkit-print-color-adjust: exact;
}
html,
html body,
html #app,
html #page-root {
  height: auto;
  overflow: auto !important;
}
`),p({title:`Notes - ${m.title}`});const i=h(()=>v.map(s=>{var l;return(l=s.meta)==null?void 0:l.slide}).filter(s=>s!==void 0&&s.noteHTML!==""));return(s,l)=>(r(),n("div",{id:"page-root",style:g(a(k))},[t("div",L,[t("div",V,[t("h1",C,o(a(m).title),1),t("div",S,o(new Date().toLocaleString()),1)]),(r(!0),n(u,null,f(a(i),(e,c)=>(r(),n("div",{key:c,class:"flex flex-col gap-4 break-inside-avoid-page"},[t("div",null,[t("h2",T,[t("div",B,[t("div",D,o(e==null?void 0:e.no)+"/"+o(a(x)),1),y(" "+o(e==null?void 0:e.title)+" ",1),H])]),b(w,{"note-html":e.noteHTML,class:"max-w-full"},null,8,["note-html"])]),c<a(i).length-1?(r(),n("hr",j)):N("v-if",!0)]))),128))])],4))}}),E=P(z,[["__file","C:/Users/Alan/Codes/Learn/slidev/node_modules/@slidev/client/internals/PresenterPrint.vue"]]);export{E as default};
