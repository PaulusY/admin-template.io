import{L as x,a3 as S,a6 as k,a7 as s,o as i,a as B,_ as e,T as l,b as C,F as A,aa as U,Y as V,S as _}from"./vue.1660200332852.js";import{a as M}from"./index.1660200332852.js";const R=x({name:"systemEditDic",setup(){const o=S({isShowDialog:!1,ruleForm:{dicName:"",fieldName:"",status:!0,list:[{id:Math.random(),label:"",value:""}],describe:"",fieldNameList:[]}}),a=t=>{t.fieldName==="SYS_UERINFO"?t.list=[{id:Math.random(),label:"sex",value:"1"},{id:Math.random(),label:"sex",value:"0"}]:t.list=[{id:Math.random(),label:"role",value:"admin"},{id:Math.random(),label:"role",value:"common"},{id:Math.random(),label:"roleName",value:"\u8D85\u7EA7\u7BA1\u7406\u5458"},{id:Math.random(),label:"roleName",value:"\u666E\u901A\u7528\u6237"}],o.ruleForm=t,o.isShowDialog=!0},r=()=>{o.isShowDialog=!1};return{openDialog:a,closeDialog:r,onCancel:()=>{r()},onSubmit:()=>{r()},onAddRow:()=>{o.ruleForm.list.push({id:Math.random(),label:"",value:""})},onDelRow:t=>{o.ruleForm.list.splice(t,1)},...k(o)}}}),$={class:"system-edit-dic-container"},z=C("span",{class:"ml10"},"\u5B57\u6BB5",-1),L={class:"dialog-footer"},P=V("\u53D6 \u6D88"),T=V("\u4FEE \u6539");function Y(o,a,r,g,h,D){const f=s("el-alert"),t=s("el-input"),d=s("el-form-item"),n=s("el-col"),w=s("el-switch"),E=s("ele-Plus"),F=s("el-icon"),c=s("el-button"),v=s("ele-Delete"),b=s("el-row"),y=s("el-form"),N=s("el-dialog");return i(),B("div",$,[e(N,{title:"\u4FEE\u6539\u5B57\u5178",modelValue:o.isShowDialog,"onUpdate:modelValue":a[4]||(a[4]=u=>o.isShowDialog=u),width:"769px"},{footer:l(()=>[C("span",L,[e(c,{onClick:o.onCancel,size:"default"},{default:l(()=>[P]),_:1},8,["onClick"]),e(c,{type:"primary",onClick:o.onSubmit,size:"default"},{default:l(()=>[T]),_:1},8,["onClick"])])]),default:l(()=>[e(f,{title:"\u534A\u6210\u54C1\uFF0C\u4EA4\u4E92\u8FC7\u4E8E\u590D\u6742\uFF0C\u8BF7\u81EA\u884C\u6269\u5C55\uFF01",type:"warning",closable:!1,class:"mb20"}),e(y,{model:o.ruleForm,size:"default","label-width":"90px"},{default:l(()=>[e(b,{gutter:35},{default:l(()=>[e(n,{xs:24,sm:12,md:12,lg:12,xl:12,class:"mb20"},{default:l(()=>[e(d,{label:"\u5B57\u5178\u540D\u79F0"},{default:l(()=>[e(t,{modelValue:o.ruleForm.dicName,"onUpdate:modelValue":a[0]||(a[0]=u=>o.ruleForm.dicName=u),placeholder:"\u8BF7\u8F93\u5165\u5B57\u5178\u540D\u79F0",clearable:""},null,8,["modelValue"])]),_:1})]),_:1}),e(n,{xs:24,sm:12,md:12,lg:12,xl:12,class:"mb20"},{default:l(()=>[e(d,{label:"\u5B57\u6BB5\u540D"},{default:l(()=>[e(t,{modelValue:o.ruleForm.fieldName,"onUpdate:modelValue":a[1]||(a[1]=u=>o.ruleForm.fieldName=u),placeholder:"\u8BF7\u8F93\u5165\u5B57\u6BB5\u540D\uFF0C\u62FC\u63A5 ruleForm.list",clearable:""},null,8,["modelValue"])]),_:1})]),_:1}),e(n,{xs:24,sm:24,md:24,lg:24,xl:24,class:"mb20"},{default:l(()=>[e(d,{label:"\u5B57\u5178\u72B6\u6001"},{default:l(()=>[e(w,{modelValue:o.ruleForm.status,"onUpdate:modelValue":a[2]||(a[2]=u=>o.ruleForm.status=u),"inline-prompt":"","active-text":"\u542F","inactive-text":"\u7981"},null,8,["modelValue"])]),_:1})]),_:1}),e(n,{xs:24,sm:24,md:24,lg:24,xl:24,class:"mb20"},{default:l(()=>[(i(!0),B(A,null,U(o.ruleForm.list,(u,m)=>(i(),_(b,{gutter:35,key:m},{default:l(()=>[e(n,{xs:24,sm:12,md:12,lg:12,xl:12,class:"mb20"},{default:l(()=>[e(d,{prop:`list[${m}].label`},{label:l(()=>[m===0?(i(),_(c,{key:0,type:"primary",circle:"",size:"small",onClick:o.onAddRow},{default:l(()=>[e(F,null,{default:l(()=>[e(E)]),_:1})]),_:1},8,["onClick"])):(i(),_(c,{key:1,type:"danger",circle:"",size:"small",onClick:p=>o.onDelRow(m)},{default:l(()=>[e(F,null,{default:l(()=>[e(v)]),_:1})]),_:2},1032,["onClick"])),z]),default:l(()=>[e(t,{modelValue:u.label,"onUpdate:modelValue":p=>u.label=p,style:{width:"100%"},placeholder:"\u8BF7\u8F93\u5165\u5B57\u6BB5\u540D"},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1032,["prop"])]),_:2},1024),e(n,{xs:24,sm:12,md:12,lg:12,xl:12,class:"mb20"},{default:l(()=>[e(d,{label:"\u5C5E\u6027",prop:`list[${m}].value`},{default:l(()=>[e(t,{modelValue:u.value,"onUpdate:modelValue":p=>u.value=p,style:{width:"100%"},placeholder:"\u8BF7\u8F93\u5165\u5C5E\u6027\u503C"},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1032,["prop"])]),_:2},1024)]),_:2},1024))),128))]),_:1}),e(n,{xs:24,sm:24,md:24,lg:24,xl:24,class:"mb20"},{default:l(()=>[e(d,{label:"\u5B57\u5178\u63CF\u8FF0"},{default:l(()=>[e(t,{modelValue:o.ruleForm.describe,"onUpdate:modelValue":a[3]||(a[3]=u=>o.ruleForm.describe=u),type:"textarea",placeholder:"\u8BF7\u8F93\u5165\u5B57\u5178\u63CF\u8FF0",maxlength:"150"},null,8,["modelValue"])]),_:1})]),_:1})]),_:1})]),_:1},8,["model"])]),_:1},8,["modelValue"])])}const j=M(R,[["render",Y]]);export{j as default};
