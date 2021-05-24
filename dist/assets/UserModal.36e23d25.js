var e=Object.defineProperty,t=Object.prototype.hasOwnProperty,o=Object.getOwnPropertySymbols,a=Object.prototype.propertyIsEnumerable,l=(t,o,a)=>o in t?e(t,o,{enumerable:!0,configurable:!0,writable:!0,value:a}):t[o]=a,n=(e,t,o)=>new Promise(((a,l)=>{var n=e=>{try{i(o.next(e))}catch(t){l(t)}},r=e=>{try{i(o.throw(e))}catch(t){l(t)}},i=e=>e.done?a(e.value):Promise.resolve(e.value).then(n,r);i((o=o.apply(e,t)).next())}));import{_ as r,b as i}from"./useModal.e570b943.js";import{h as s,i as d}from"./useForm.6f14fd11.js";import{dS as p,e as c,v as m,A as u,dG as f,k as b,e2 as h,e3 as y,r as g,o as w,m as v,G as I,n as P,q as x}from"./index.9463653b.js";const F=[{title:"用户名",dataIndex:"username",width:120},{title:"手机号",dataIndex:"phone",width:120},{title:"邮箱",dataIndex:"email",width:120},{title:"创建时间",dataIndex:"createTime",width:180},{title:"角色",dataIndex:"roleName",width:200},{title:"备注",dataIndex:"remark"}],O=[{field:"username",label:"用户名",component:"Input",colProps:{span:8}},{field:"phone",label:"手机号",component:"Input",colProps:{span:8}}],M=[{field:"id",label:"id",component:"Input",show:!1},{field:"username",label:"用户名",component:"Input",required:!0},{field:"pwd",label:"密码",component:"InputPassword",required:!0,show:!1},{field:"role_id",label:"role_id",component:"Input",show:!1},{label:"角色",field:"roleName",component:"ApiSelect",componentProps:{api:p,labelField:"roleName",valueField:"id"},required:!0},{field:"deptName",label:"所属部门",component:"TreeSelect",componentProps:{replaceFields:{title:"deptName",key:"id",value:"id"},getPopupContainer:()=>document.body},required:!0},{field:"phone",label:"手机号",component:"Input",required:!0},{label:"邮箱",field:"email",component:"Input",required:!0},{label:"备注",field:"remark",component:"InputTextArea"}];var S=c({name:"AccountModal",components:{BasicModal:r,BasicForm:s},emits:["success","register"],setup(e,{emit:r}){const s=m(!0),[p,{setFieldsValue:c,updateSchema:g,resetFields:w,validate:v}]=d({labelWidth:100,schemas:M,showActionButtonGroup:!1,actionColOptions:{span:23}}),[I,{setModalProps:P,closeModal:x}]=i((e=>n(this,null,(function*(){w(),P({confirmLoading:!1}),s.value=!!(null==e?void 0:e.isUpdate),u(s)&&c(((e,n)=>{for(var r in n||(n={}))t.call(n,r)&&l(e,r,n[r]);if(o)for(var r of o(n))a.call(n,r)&&l(e,r,n[r]);return e})({},e.record));const n=yield f();g([{field:"pwd",show:!u(s)},{field:"deptName",componentProps:{treeData:n}}])}))));return{registerModal:I,registerForm:p,getTitle:b((()=>u(s)?"编辑账号":"新增账号")),handleSubmit:function(){return n(this,null,(function*(){try{const t=yield v();if(P({confirmLoading:!0}),0!=t.id&&null!=typeof t.id&&t.id)e=yield y(t);else var e=yield h(t);e&&(x(),r("success"))}finally{P({confirmLoading:!1})}}))}}}});S.render=function(e,t,o,a,l,n){const r=g("BasicForm"),i=g("BasicModal");return w(),v(i,x(e.$attrs,{onRegister:e.registerModal,title:e.getTitle,onOk:e.handleSubmit}),{default:I((()=>[P(r,{onRegister:e.registerForm},null,8,["onRegister"])])),_:1},16,["onRegister","title","onOk"])};var _=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:S});export{_ as U,S as _,F as c,O as s};
