import{L as i,s as u,a3 as c,m as l,j as f,a6 as m,a as p,b as h,Z as n,P as g,aE as k,o as d}from"./vue.1660209806968.js";import{_ as v,u as R}from"./index.1660209806968.js";const _=i({name:"layoutLinkView",setup(){const e=R(),{themeConfig:s}=u(e),t=k(),a=c({currentRouteMeta:{isLink:"",title:""}}),o=l(()=>{let{isTagsview:r}=s.value;return r?"115px":"80px"});return f(()=>t.path,()=>{a.currentRouteMeta=t.meta},{immediate:!0}),{setLinkHeight:o,...m(a)}}}),L=["href"];function w(e,s,t,a,o,r){return d(),p("div",{class:"layout-view-bg-white flex layout-view-link",style:g({height:`calc(100vh - ${e.setLinkHeight}`})},[h("a",{href:e.currentRouteMeta.isLink,target:"_blank",rel:"opener",class:"flex-margin"},n(e.currentRouteMeta.title)+"\uFF1A"+n(e.currentRouteMeta.isLink),9,L)],4)}var $=v(_,[["render",w]]);export{$ as default};