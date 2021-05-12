var e=Object.defineProperty,t=Object.prototype.hasOwnProperty,a=Object.getOwnPropertySymbols,r=Object.prototype.propertyIsEnumerable,o=(t,a,r)=>a in t?e(t,a,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[a]=r,l=(e,t,a)=>new Promise(((r,o)=>{var l=e=>{try{s(a.next(e))}catch(t){o(t)}},n=e=>{try{s(a.throw(e))}catch(t){o(t)}},s=e=>e.done?r(e.value):Promise.resolve(e.value).then(l,n);s((a=a.apply(e,t)).next())}));import{h as n,i as s}from"./useForm.0ea7504e.js";import{T as i}from"./index.64b50db7.js";import{c6 as d,e as u,q as c,k as m,w as p,dN as f,dU as b,dV as v,r as w,o as h,m as y,D as g,n as x,am as D}from"./index.2e7996b3.js";import{_ as I,a as j}from"./useDrawer.6c65f512.js";import{_ as P}from"./index.vue_vue&type=style&index=0&lang.aff7daf2.js";const _=[{title:"角色名称",dataIndex:"roleName",width:200},{title:"角色值",dataIndex:"roleValue",width:180},{title:"排序",dataIndex:"orderNo",width:50},{title:"状态",dataIndex:"status",width:80,customRender:({record:e})=>{const t=1==~~e.status,a=t?"启用":"停用";return d(i,{color:t?"green":"red"},(()=>a))}},{title:"创建时间",dataIndex:"createTime",width:180},{title:"备注",dataIndex:"remark"}],F=[{field:"roleName",label:"角色名称",component:"Input",colProps:{span:8}},{field:"status",label:"状态",component:"Select",componentProps:{options:[{label:"启用",value:"1"},{label:"停用",value:"0"}]},colProps:{span:8}}],O=[{field:"id",label:"id",component:"Input",show:!1},{field:"roleName",label:"角色名称",required:!0,component:"Input"},{field:"roleValue",label:"角色值",required:!0,component:"Input"},{field:"status",label:"状态",component:"RadioButtonGroup",defaultValue:"0",componentProps:{options:[{label:"启用",value:"1"},{label:"停用",value:"0"}]}},{label:"备注",field:"remark",component:"InputTextArea"},{label:" ",field:"menu",slot:"menu",component:"Input"}];var B=u({name:"RoleDrawer",components:{BasicDrawer:I,BasicForm:n,BasicTree:P},emits:["success","register"],setup(e,{emit:n}){const i=c(!0),d=c([]),[u,{resetFields:w,setFieldsValue:h,validate:y}]=s({labelWidth:90,schemas:O,showActionButtonGroup:!1}),[g,{setDrawerProps:x,closeDrawer:D}]=j((e=>l(this,null,(function*(){w(),x({confirmLoading:!1}),i.value=!!(null==e?void 0:e.isUpdate),p(i)&&h(((e,l)=>{for(var n in l||(l={}))t.call(l,n)&&o(e,n,l[n]);if(a)for(var n of a(l))r.call(l,n)&&o(e,n,l[n]);return e})({},e.record)),d.value=yield f({status:"1"})}))));return{registerDrawer:g,registerForm:u,getTitle:m((()=>p(i)?"编辑角色":"新增角色")),handleSubmit:function(){return l(this,null,(function*(){try{const t=yield y();if(x({confirmLoading:!0}),0!=t.id&&null!=typeof t.id&&t.id)e=yield v(t);else var e=yield b(t);e&&(D(),n("success"))}finally{x({confirmLoading:!1})}}))},treeData:d}}});B.render=function(e,t,a,r,o,l){const n=w("BasicTree"),s=w("BasicForm"),i=w("BasicDrawer");return h(),y(i,D(e.$attrs,{onRegister:e.registerDrawer,showFooter:"",title:e.getTitle,width:"500px",onOk:e.handleSubmit}),{default:g((()=>[x(s,{onRegister:e.registerForm},{menu:g((({model:t,field:a})=>[x(n,{value:t[a],"onUpdate:value":e=>t[a]=e,treeData:e.treeData,replaceFields:{title:"menuName",key:"id"},checkable:"",toolbar:"",title:"菜单分配"},null,8,["value","onUpdate:value","treeData"])])),_:1},8,["onRegister"])])),_:1},16,["onRegister","title","onOk"])};var R=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:B});export{R,B as _,_ as c,F as s};
