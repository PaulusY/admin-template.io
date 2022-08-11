import{_ as C}from"./index.1660209806968.js";import{L as V,a3 as w,a6 as S,a as k,_ as l,T as u,a7 as t,o as v,b as _,Y as b,aC as x,aD as y}from"./vue.1660209806968.js";const A=V({name:"systemEditRole",setup(){const e=w({isShowDialog:!1,ruleForm:{roleName:"",roleSign:"",sort:0,status:!0,describe:""},menuData:[],menuProps:{children:"children",label:"label"}}),o=n=>{e.ruleForm=n,e.isShowDialog=!0,p()},r=()=>{e.isShowDialog=!1},i=()=>{r()},m=()=>{r()},p=()=>{e.menuData=[{id:1,label:"\u7CFB\u7EDF\u7BA1\u7406",children:[{id:11,label:"\u83DC\u5355\u7BA1\u7406",children:[{id:111,label:"\u83DC\u5355\u65B0\u589E"},{id:112,label:"\u83DC\u5355\u4FEE\u6539"},{id:113,label:"\u83DC\u5355\u5220\u9664"},{id:114,label:"\u83DC\u5355\u67E5\u8BE2"}]},{id:12,label:"\u89D2\u8272\u7BA1\u7406",children:[{id:121,label:"\u89D2\u8272\u65B0\u589E"},{id:122,label:"\u89D2\u8272\u4FEE\u6539"},{id:123,label:"\u89D2\u8272\u5220\u9664"},{id:124,label:"\u89D2\u8272\u67E5\u8BE2"}]},{id:13,label:"\u7528\u6237\u7BA1\u7406",children:[{id:131,label:"\u7528\u6237\u65B0\u589E"},{id:132,label:"\u7528\u6237\u4FEE\u6539"},{id:133,label:"\u7528\u6237\u5220\u9664"},{id:134,label:"\u7528\u6237\u67E5\u8BE2"}]}]},{id:2,label:"\u6743\u9650\u7BA1\u7406",children:[{id:21,label:"\u524D\u7AEF\u63A7\u5236",children:[{id:211,label:"\u9875\u9762\u6743\u9650"},{id:212,label:"\u9875\u9762\u6743\u9650"}]},{id:22,label:"\u540E\u7AEF\u63A7\u5236",children:[{id:221,label:"\u9875\u9762\u6743\u9650"}]}]}]};return{openDialog:o,closeDialog:r,onCancel:i,onSubmit:m,...S(e)}}}),N=e=>(x("data-v-b063dd22"),e=e(),y(),e),U={class:"system-edit-role-container"},I=N(()=>_("span",null,"\u89D2\u8272\u6807\u8BC6",-1)),R={class:"dialog-footer"},$=b("\u53D6 \u6D88"),z=b("\u4FEE \u6539");function P(e,o,r,i,m,p){const n=t("el-input"),d=t("el-form-item"),s=t("el-col"),f=t("el-tooltip"),F=t("el-input-number"),D=t("el-switch"),E=t("el-tree"),g=t("el-row"),h=t("el-form"),c=t("el-button"),B=t("el-dialog");return v(),k("div",U,[l(B,{title:"\u4FEE\u6539\u89D2\u8272",modelValue:e.isShowDialog,"onUpdate:modelValue":o[5]||(o[5]=a=>e.isShowDialog=a),width:"769px"},{footer:u(()=>[_("span",R,[l(c,{onClick:e.onCancel,size:"default"},{default:u(()=>[$]),_:1},8,["onClick"]),l(c,{type:"primary",onClick:e.onSubmit,size:"default"},{default:u(()=>[z]),_:1},8,["onClick"])])]),default:u(()=>[l(h,{model:e.ruleForm,size:"default","label-width":"90px"},{default:u(()=>[l(g,{gutter:35},{default:u(()=>[l(s,{xs:24,sm:12,md:12,lg:12,xl:12,class:"mb20"},{default:u(()=>[l(d,{label:"\u89D2\u8272\u540D\u79F0"},{default:u(()=>[l(n,{modelValue:e.ruleForm.roleName,"onUpdate:modelValue":o[0]||(o[0]=a=>e.ruleForm.roleName=a),placeholder:"\u8BF7\u8F93\u5165\u89D2\u8272\u540D\u79F0",clearable:""},null,8,["modelValue"])]),_:1})]),_:1}),l(s,{xs:24,sm:12,md:12,lg:12,xl:12,class:"mb20"},{default:u(()=>[l(d,{label:"\u89D2\u8272\u6807\u8BC6"},{label:u(()=>[l(f,{effect:"dark",content:"\u7528\u4E8E `router/route.ts` meta.roles",placement:"top-start"},{default:u(()=>[I]),_:1})]),default:u(()=>[l(n,{modelValue:e.ruleForm.roleSign,"onUpdate:modelValue":o[1]||(o[1]=a=>e.ruleForm.roleSign=a),placeholder:"\u8BF7\u8F93\u5165\u89D2\u8272\u6807\u8BC6",clearable:""},null,8,["modelValue"])]),_:1})]),_:1}),l(s,{xs:24,sm:12,md:12,lg:12,xl:12,class:"mb20"},{default:u(()=>[l(d,{label:"\u6392\u5E8F"},{default:u(()=>[l(F,{modelValue:e.ruleForm.sort,"onUpdate:modelValue":o[2]||(o[2]=a=>e.ruleForm.sort=a),min:0,max:999,"controls-position":"right",placeholder:"\u8BF7\u8F93\u5165\u6392\u5E8F",class:"w100"},null,8,["modelValue"])]),_:1})]),_:1}),l(s,{xs:24,sm:12,md:12,lg:12,xl:12,class:"mb20"},{default:u(()=>[l(d,{label:"\u89D2\u8272\u72B6\u6001"},{default:u(()=>[l(D,{modelValue:e.ruleForm.status,"onUpdate:modelValue":o[3]||(o[3]=a=>e.ruleForm.status=a),"inline-prompt":"","active-text":"\u542F","inactive-text":"\u7981"},null,8,["modelValue"])]),_:1})]),_:1}),l(s,{xs:24,sm:24,md:24,lg:24,xl:24,class:"mb20"},{default:u(()=>[l(d,{label:"\u89D2\u8272\u63CF\u8FF0"},{default:u(()=>[l(n,{modelValue:e.ruleForm.describe,"onUpdate:modelValue":o[4]||(o[4]=a=>e.ruleForm.describe=a),type:"textarea",placeholder:"\u8BF7\u8F93\u5165\u89D2\u8272\u63CF\u8FF0",maxlength:"150"},null,8,["modelValue"])]),_:1})]),_:1}),l(s,{xs:24,sm:24,md:24,lg:24,xl:24,class:"mb20"},{default:u(()=>[l(d,{label:"\u83DC\u5355\u6743\u9650"},{default:u(()=>[l(E,{data:e.menuData,props:e.menuProps,"default-checked-keys":[112,113],"node-key":"id","show-checkbox":"",class:"menu-data-tree"},null,8,["data","props"])]),_:1})]),_:1})]),_:1})]),_:1},8,["model"])]),_:1},8,["modelValue"])])}var M=C(A,[["render",P],["__scopeId","data-v-b063dd22"]]);export{M as default};
