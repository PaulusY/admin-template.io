import{L as f,s as d,a7 as e,o as n,S as c,T as r,_ as o,b as u,X as g}from"./vue.1660200332852.js";import{u as h,a as C}from"./index.1660200332852.js";import{A as T}from"./aside.1660200332852.js";import{H as k,M as w,T as b}from"./main.1660200332852.js";import"./logo-mini.1660200332852.js";import"./parent.1660200332852.js";const y=f({name:"layoutClassic",components:{Asides:T,Headers:k,Mains:w,TagsView:b},setup(){const s=h(),{themeConfig:t}=d(s);return{themeConfig:t}}}),V={class:"flex-center layout-backtop"};function x(s,t,A,H,M,$){const i=e("Headers"),m=e("Asides"),p=e("TagsView"),_=e("Mains"),a=e("el-container"),l=e("el-backtop");return n(),c(a,{class:"layout-container flex-center"},{default:r(()=>[o(i),o(a,{class:"layout-mian-height-50 w100"},{default:r(()=>[o(m),u("div",V,[s.themeConfig.isTagsview?(n(),c(p,{key:0})):g("",!0),o(_)])]),_:1}),o(l,{target:".layout-backtop .el-main .el-scrollbar__wrap"})]),_:1})}const X=C(y,[["render",x]]);export{X as default};
