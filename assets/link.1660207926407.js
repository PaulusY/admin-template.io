import{L as i,s as u,a3 as c,m as l,j as f,a6 as m,aE as p,o as h,a as g,b as k,Z as r,P as d}from"./vue.1660207926407.js";import{u as R,a as v}from"./index.1660207926407.js";const L=i({name:"layoutLinkView",setup(){const e=R(),{themeConfig:a}=u(e),t=p(),s=c({currentRouteMeta:{isLink:"",title:""}}),o=l(()=>{let{isTagsview:n}=a.value;return n?"115px":"80px"});return f(()=>t.path,()=>{s.currentRouteMeta=t.meta},{immediate:!0}),{setLinkHeight:o,...m(s)}}}),_=["href"];function w(e,a,t,s,o,n){return h(),g("div",{class:"layout-view-bg-white flex layout-view-link",style:d({height:`calc(100vh - ${e.setLinkHeight}`})},[k("a",{href:e.currentRouteMeta.isLink,target:"_blank",rel:"opener",class:"flex-margin"},r(e.currentRouteMeta.title)+"\uFF1A"+r(e.currentRouteMeta.isLink),9,_)],4)}const $=v(L,[["render",w]]);export{$ as default};