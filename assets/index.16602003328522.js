import{u,L as n,_ as a,a as l}from"./index.1660200332852.js";import{L as _,aF as i,s as c,K as d,H as m,k as f,o as p,S as y,W as L}from"./vue.1660200332852.js";const v=_({name:"layout",components:{defaults:i(()=>a(()=>import("./defaults.1660200332852.js"),["assets/defaults.1660200332852.js","assets/vue.1660200332852.js","assets/index.1660200332852.js","assets/index.1660200332852.css","assets/aside.1660200332852.js","assets/main.1660200332852.js","assets/main.1660200332852.css","assets/logo-mini.1660200332852.js","assets/parent.1660200332852.js"])),classic:i(()=>a(()=>import("./classic.1660200332852.js"),["assets/classic.1660200332852.js","assets/vue.1660200332852.js","assets/index.1660200332852.js","assets/index.1660200332852.css","assets/aside.1660200332852.js","assets/main.1660200332852.js","assets/main.1660200332852.css","assets/logo-mini.1660200332852.js","assets/parent.1660200332852.js"])),transverse:i(()=>a(()=>import("./transverse.1660200332852.js"),["assets/transverse.1660200332852.js","assets/main.1660200332852.js","assets/main.1660200332852.css","assets/vue.1660200332852.js","assets/index.1660200332852.js","assets/index.1660200332852.css","assets/logo-mini.1660200332852.js","assets/parent.1660200332852.js"])),columns:i(()=>a(()=>import("./columns.1660200332852.js"),["assets/columns.1660200332852.js","assets/columns.1660200332852.css","assets/vue.1660200332852.js","assets/index.1660200332852.js","assets/index.1660200332852.css","assets/aside.1660200332852.js","assets/main.1660200332852.js","assets/main.1660200332852.css","assets/logo-mini.1660200332852.js","assets/parent.1660200332852.js"]))},setup(){const{proxy:o}=f(),r=u(),{themeConfig:e}=c(r),t=()=>{n.get("oldLayout")||n.set("oldLayout",e.value.layout);const s=document.body.clientWidth;s<1e3?(e.value.isCollapse=!1,o.mittBus.emit("layoutMobileResize",{layout:"defaults",clientWidth:s})):o.mittBus.emit("layoutMobileResize",{layout:n.get("oldLayout")?n.get("oldLayout"):e.value.layout,clientWidth:s})};return d(()=>{t(),window.addEventListener("resize",t)}),m(()=>{window.removeEventListener("resize",t)}),{themeConfig:e}}});function E(o,r,e,t,s,C){return p(),y(L(o.themeConfig.layout))}const h=l(v,[["render",E]]);export{h as default};