import{L as _,s as c,a3 as N,m as f,K as R,n as p,l as T,H as g,j as k,a6 as A,a as K,_ as v,T as w,k as y,aE as C,a7 as L,o as u,$ as B,S as d,W as $,aH as P}from"./vue.1660209806968.js";import{_ as x,c as S,u as E,S as H}from"./index.1660209806968.js";const I=_({name:"layoutParentView",setup(){const{proxy:s}=y(),a=C(),l=S(),m=E(),{keepAliveNames:o,cachedViews:i}=c(l),{themeConfig:t}=c(m),e=N({refreshRouterViewKey:null,keepAliveNameList:[]}),h=f(()=>t.value.animation),V=f(()=>t.value.isTagsview?i.value:e.keepAliveNameList);return R(()=>{e.keepAliveNameList=o.value,s.mittBus.on("onTagsViewRefreshRouterView",n=>{e.keepAliveNameList=o.value.filter(r=>a.name!==r),e.refreshRouterViewKey=null,p(()=>{e.refreshRouterViewKey=n,e.keepAliveNameList=o.value})})}),T(()=>{p(()=>{setTimeout(()=>{var n;t.value.isCacheTagsView&&(i.value=(n=H.get("tagsViewList"))==null?void 0:n.map(r=>r.name))},0)})}),g(()=>{s.mittBus.off("onTagsViewRefreshRouterView",()=>{})}),k(()=>a.fullPath,()=>{e.refreshRouterViewKey=decodeURI(a.fullPath)}),{setTransitionName:h,getKeepAliveNames:V,...A(e)}}}),M={class:"h100"};function U(s,a,l,m,o,i){const t=L("router-view");return u(),K("div",M,[v(t,null,{default:w(({Component:e})=>[v(B,{name:s.setTransitionName,mode:"out-in"},{default:w(()=>[(u(),d(P,{include:s.getKeepAliveNames},[(u(),d($(e),{key:s.refreshRouterViewKey,class:"w100"}))],1032,["include"]))]),_:2},1032,["name"])]),_:1})])}var W=x(I,[["render",U]]);export{W as default};