import{L as c,s as f,a3 as u,m as d,l as g,j as h,a6 as p,U as m,a as v,b as w,V as _,P as L,aE as T,n as V,an as b,o as C}from"./vue.1660209806968.js";import{_ as D,u as R,b as $}from"./index.1660209806968.js";const k=c({name:"layoutIfameView",setup(){const e=R(),o=$(),{themeConfig:i}=f(e),{isTagsViewCurrenFull:n}=f(o),r=T(),a=u({iframeDom:null,iframeLoading:!0,iframeUrl:""}),s=()=>{a.iframeUrl=r.meta.isLink,V(()=>{a.iframeLoading=!0;const t=a.iframeDom;if(!t)return!1;t.onload=()=>{a.iframeLoading=!1}})},l=d(()=>{let{isTagsview:t}=i.value;return n.value?"1px":t?"86px":"51px"});return g(()=>{s()}),h(()=>r.path,()=>{s()}),{setIframeHeight:l,...p(a)}}}),x=["src"];function y(e,o,i,n,r,a){const s=b("loading");return m((C(),v("div",{class:"layout-view-bg-white flex mt1",style:L({height:`calc(100vh - ${e.setIframeHeight}`,border:"none"})},[m(w("iframe",{src:e.iframeUrl,frameborder:"0",height:"100%",width:"100%",ref:"iframeDom"},null,8,x),[[_,!e.iframeLoading]])],4)),[[s,e.iframeLoading]])}var B=D(k,[["render",y]]);export{B as default};
