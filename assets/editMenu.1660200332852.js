import{L as I,s as T,a3 as M,l as v,a6 as $,a7 as d,o as f,a as b,_ as e,T as l,b as A,Z as B,X as _,F as S,S as x,Y as r}from"./vue.1660200332852.js";import{d as N,a as z}from"./index.1660200332852.js";import{I as H}from"./index.16602003328525.js";const K=I({name:"systemEditMenu",components:{IconSelector:H},setup(){const u=N(),{routesList:o}=T(u),p=M({isShowDialog:!1,ruleForm:{menuSuperior:[],menuType:"menu",name:"",component:"",isLink:!1,menuSort:0,path:"",redirect:"",meta:{title:"",icon:"",isHide:!1,isKeepAlive:!0,isAffix:!1,isLink:"",isIframe:!1,roles:""},btnPower:""},menuData:[]}),V=t=>{const i=[];return t.map(n=>{n.title=n.meta.title,n.id=Math.random(),i.push({...n}),n.children&&V(n.children)}),i},D=t=>{var i;t.menuType="menu",t.menuSort=Math.random(),t.component=(i=`${t.component} `.match(/\'(.+)\'/g))==null?void 0:i.join("").replace(/\'/g,""),p.ruleForm=t,p.isShowDialog=!0},F=()=>{p.isShowDialog=!1},c=()=>{p.ruleForm.meta.isIframe?p.ruleForm.isLink=!0:p.ruleForm.isLink=!1},m=()=>{F()},s=()=>{F()};return v(()=>{p.menuData=V(o.value)}),{openDialog:D,closeDialog:F,onSelectIframeChange:c,onCancel:m,onSubmit:s,...$(p)}}}),P={class:"system-edit-menu-container"},R={key:0},j=r("\u83DC\u5355"),X=r("\u6309\u94AE"),Y=r("\u9690\u85CF"),Z=r("\u4E0D\u9690\u85CF"),q=r("\u7F13\u5B58"),G=r("\u4E0D\u7F13\u5B58"),J=r("\u56FA\u5B9A"),O=r("\u4E0D\u56FA\u5B9A"),Q=r("\u662F"),W=r("\u5426"),ee=r("\u662F"),le=r("\u5426"),ue={class:"dialog-footer"},oe=r("\u53D6 \u6D88"),ae=r("\u4FEE \u6539");function te(u,o,p,V,D,F){const c=d("el-cascader"),m=d("el-form-item"),s=d("el-col"),t=d("el-radio"),i=d("el-radio-group"),n=d("el-input"),h=d("IconSelector"),g=d("el-option"),k=d("el-select"),y=d("el-input-number"),U=d("el-row"),L=d("el-form"),C=d("el-button"),w=d("el-dialog");return f(),b("div",P,[e(w,{title:"\u4FEE\u6539\u83DC\u5355",modelValue:u.isShowDialog,"onUpdate:modelValue":o[17]||(o[17]=a=>u.isShowDialog=a),width:"769px"},{footer:l(()=>[A("span",ue,[e(C,{onClick:u.onCancel,size:"default"},{default:l(()=>[oe]),_:1},8,["onClick"]),e(C,{type:"primary",onClick:u.onSubmit,size:"default"},{default:l(()=>[ae]),_:1},8,["onClick"])])]),default:l(()=>[e(L,{model:u.ruleForm,size:"default","label-width":"80px"},{default:l(()=>[e(U,{gutter:35},{default:l(()=>[e(s,{xs:24,sm:24,md:24,lg:24,xl:24,class:"mb20"},{default:l(()=>[e(m,{label:"\u4E0A\u7EA7\u83DC\u5355"},{default:l(()=>[e(c,{options:u.menuData,props:{checkStrictly:!0,value:"path",label:"title"},placeholder:"\u8BF7\u9009\u62E9\u4E0A\u7EA7\u83DC\u5355",clearable:"",class:"w100",modelValue:u.ruleForm.menuSuperior,"onUpdate:modelValue":o[0]||(o[0]=a=>u.ruleForm.menuSuperior=a)},{default:l(({node:a,data:E})=>[A("span",null,B(E.title),1),a.isLeaf?_("",!0):(f(),b("span",R," ("+B(E.children.length)+") ",1))]),_:1},8,["options","modelValue"])]),_:1})]),_:1}),e(s,{xs:24,sm:24,md:24,lg:24,xl:24,class:"mb20"},{default:l(()=>[e(m,{label:"\u83DC\u5355\u7C7B\u578B"},{default:l(()=>[e(i,{modelValue:u.ruleForm.menuType,"onUpdate:modelValue":o[1]||(o[1]=a=>u.ruleForm.menuType=a)},{default:l(()=>[e(t,{label:"menu"},{default:l(()=>[j]),_:1}),e(t,{label:"btn"},{default:l(()=>[X]),_:1})]),_:1},8,["modelValue"])]),_:1})]),_:1}),e(s,{xs:24,sm:12,md:12,lg:12,xl:12,class:"mb20"},{default:l(()=>[e(m,{label:"\u83DC\u5355\u540D\u79F0"},{default:l(()=>[e(n,{modelValue:u.ruleForm.meta.title,"onUpdate:modelValue":o[2]||(o[2]=a=>u.ruleForm.meta.title=a),placeholder:"\u683C\u5F0F\uFF1Amessage.router.xxx",clearable:""},null,8,["modelValue"])]),_:1})]),_:1}),u.ruleForm.menuType==="menu"?(f(),b(S,{key:0},[e(s,{xs:24,sm:12,md:12,lg:12,xl:12,class:"mb20"},{default:l(()=>[e(m,{label:"\u8DEF\u7531\u540D\u79F0"},{default:l(()=>[e(n,{modelValue:u.ruleForm.name,"onUpdate:modelValue":o[3]||(o[3]=a=>u.ruleForm.name=a),placeholder:"\u8DEF\u7531\u4E2D\u7684 name \u503C",clearable:""},null,8,["modelValue"])]),_:1})]),_:1}),e(s,{xs:24,sm:12,md:12,lg:12,xl:12,class:"mb20"},{default:l(()=>[e(m,{label:"\u8DEF\u7531\u8DEF\u5F84"},{default:l(()=>[e(n,{modelValue:u.ruleForm.path,"onUpdate:modelValue":o[4]||(o[4]=a=>u.ruleForm.path=a),placeholder:"\u8DEF\u7531\u4E2D\u7684 path \u503C",clearable:""},null,8,["modelValue"])]),_:1})]),_:1}),e(s,{xs:24,sm:12,md:12,lg:12,xl:12,class:"mb20"},{default:l(()=>[e(m,{label:"\u91CD\u5B9A\u5411"},{default:l(()=>[e(n,{modelValue:u.ruleForm.redirect,"onUpdate:modelValue":o[5]||(o[5]=a=>u.ruleForm.redirect=a),placeholder:"\u8BF7\u8F93\u5165\u8DEF\u7531\u91CD\u5B9A\u5411",clearable:""},null,8,["modelValue"])]),_:1})]),_:1}),e(s,{xs:24,sm:12,md:12,lg:12,xl:12,class:"mb20"},{default:l(()=>[e(m,{label:"\u83DC\u5355\u56FE\u6807"},{default:l(()=>[e(h,{placeholder:"\u8BF7\u8F93\u5165\u83DC\u5355\u56FE\u6807",modelValue:u.ruleForm.meta.icon,"onUpdate:modelValue":o[6]||(o[6]=a=>u.ruleForm.meta.icon=a),type:"all"},null,8,["modelValue"])]),_:1})]),_:1}),e(s,{xs:24,sm:12,md:12,lg:12,xl:12,class:"mb20"},{default:l(()=>[e(m,{label:"\u7EC4\u4EF6\u8DEF\u5F84"},{default:l(()=>[e(n,{modelValue:u.ruleForm.component,"onUpdate:modelValue":o[7]||(o[7]=a=>u.ruleForm.component=a),placeholder:"\u7EC4\u4EF6\u8DEF\u5F84",clearable:""},null,8,["modelValue"])]),_:1})]),_:1}),e(s,{xs:24,sm:12,md:12,lg:12,xl:12,class:"mb20"},{default:l(()=>[e(m,{label:"\u94FE\u63A5\u5730\u5740"},{default:l(()=>[e(n,{modelValue:u.ruleForm.meta.isLink,"onUpdate:modelValue":o[8]||(o[8]=a=>u.ruleForm.meta.isLink=a),placeholder:"\u5916\u94FE/\u5185\u5D4C\u65F6\u94FE\u63A5\u5730\u5740\uFF08http:xxx.com\uFF09",clearable:"",disabled:!u.ruleForm.isLink},null,8,["modelValue","disabled"])]),_:1})]),_:1}),e(s,{xs:24,sm:12,md:12,lg:12,xl:12,class:"mb20"},{default:l(()=>[e(m,{label:"\u6743\u9650\u6807\u8BC6"},{default:l(()=>[e(k,{modelValue:u.ruleForm.meta.roles,"onUpdate:modelValue":o[9]||(o[9]=a=>u.ruleForm.meta.roles=a),multiple:"",placeholder:"\u53D6\u89D2\u8272\u7BA1\u7406",clearable:"",class:"w100"},{default:l(()=>[e(g,{label:"admin",value:"admin"}),e(g,{label:"common",value:"common"})]),_:1},8,["modelValue"])]),_:1})]),_:1})],64)):_("",!0),u.ruleForm.menuType==="btn"?(f(),x(s,{key:1,xs:24,sm:12,md:12,lg:12,xl:12,class:"mb20"},{default:l(()=>[e(m,{label:"\u6743\u9650\u6807\u8BC6"},{default:l(()=>[e(n,{modelValue:u.ruleForm.btnPower,"onUpdate:modelValue":o[10]||(o[10]=a=>u.ruleForm.btnPower=a),placeholder:"\u8BF7\u8F93\u5165\u6743\u9650\u6807\u8BC6",clearable:""},null,8,["modelValue"])]),_:1})]),_:1})):_("",!0),e(s,{xs:24,sm:12,md:12,lg:12,xl:12,class:"mb20"},{default:l(()=>[e(m,{label:"\u83DC\u5355\u6392\u5E8F"},{default:l(()=>[e(y,{modelValue:u.ruleForm.menuSort,"onUpdate:modelValue":o[11]||(o[11]=a=>u.ruleForm.menuSort=a),"controls-position":"right",placeholder:"\u8BF7\u8F93\u5165\u6392\u5E8F",class:"w100"},null,8,["modelValue"])]),_:1})]),_:1}),u.ruleForm.menuType==="menu"?(f(),b(S,{key:2},[e(s,{xs:24,sm:12,md:12,lg:12,xl:12,class:"mb20"},{default:l(()=>[e(m,{label:"\u662F\u5426\u9690\u85CF"},{default:l(()=>[e(i,{modelValue:u.ruleForm.meta.isHide,"onUpdate:modelValue":o[12]||(o[12]=a=>u.ruleForm.meta.isHide=a)},{default:l(()=>[e(t,{label:!0},{default:l(()=>[Y]),_:1}),e(t,{label:!1},{default:l(()=>[Z]),_:1})]),_:1},8,["modelValue"])]),_:1})]),_:1}),e(s,{xs:24,sm:12,md:12,lg:12,xl:12,class:"mb20"},{default:l(()=>[e(m,{label:"\u9875\u9762\u7F13\u5B58"},{default:l(()=>[e(i,{modelValue:u.ruleForm.meta.isKeepAlive,"onUpdate:modelValue":o[13]||(o[13]=a=>u.ruleForm.meta.isKeepAlive=a)},{default:l(()=>[e(t,{label:!0},{default:l(()=>[q]),_:1}),e(t,{label:!1},{default:l(()=>[G]),_:1})]),_:1},8,["modelValue"])]),_:1})]),_:1}),e(s,{xs:24,sm:12,md:12,lg:12,xl:12,class:"mb20"},{default:l(()=>[e(m,{label:"\u662F\u5426\u56FA\u5B9A"},{default:l(()=>[e(i,{modelValue:u.ruleForm.meta.isAffix,"onUpdate:modelValue":o[14]||(o[14]=a=>u.ruleForm.meta.isAffix=a)},{default:l(()=>[e(t,{label:!0},{default:l(()=>[J]),_:1}),e(t,{label:!1},{default:l(()=>[O]),_:1})]),_:1},8,["modelValue"])]),_:1})]),_:1}),e(s,{xs:24,sm:12,md:12,lg:12,xl:12,class:"mb20"},{default:l(()=>[e(m,{label:"\u662F\u5426\u5916\u94FE"},{default:l(()=>[e(i,{modelValue:u.ruleForm.isLink,"onUpdate:modelValue":o[15]||(o[15]=a=>u.ruleForm.isLink=a),disabled:u.ruleForm.meta.isIframe},{default:l(()=>[e(t,{label:!0},{default:l(()=>[Q]),_:1}),e(t,{label:!1},{default:l(()=>[W]),_:1})]),_:1},8,["modelValue","disabled"])]),_:1})]),_:1}),e(s,{xs:24,sm:12,md:12,lg:12,xl:12,class:"mb20"},{default:l(()=>[e(m,{label:"\u662F\u5426\u5185\u5D4C"},{default:l(()=>[e(i,{modelValue:u.ruleForm.meta.isIframe,"onUpdate:modelValue":o[16]||(o[16]=a=>u.ruleForm.meta.isIframe=a),onChange:u.onSelectIframeChange},{default:l(()=>[e(t,{label:!0},{default:l(()=>[ee]),_:1}),e(t,{label:!1},{default:l(()=>[le]),_:1})]),_:1},8,["modelValue","onChange"])]),_:1})]),_:1})],64)):_("",!0)]),_:1})]),_:1},8,["model"])]),_:1},8,["modelValue"])])}const de=z(K,[["render",te]]);export{de as default};
