import{_ as e}from"./index.vue_vue&type=style&index=0&lang.a64cc4ee.js";import{e as t,v as a,w as r,dG as n,r as s,o,m as c,n as i}from"./index.c68bc564.js";import"./Tree.885e3dd6.js";import"./useExpose.6be3b34e.js";import"./index.d0c7b499.js";import"./get.402f11ff.js";import"./vendor.afa0338c.js";var l=t({name:"DeptTree",components:{BasicTree:e},emits:["select"],setup(e,{emit:t}){const s=a([]);function o(){return e=this,t=null,a=function*(){s.value=yield n()},new Promise(((r,n)=>{var s=e=>{try{c(a.next(e))}catch(t){n(t)}},o=e=>{try{c(a.throw(e))}catch(t){n(t)}},c=e=>e.done?r(e.value):Promise.resolve(e.value).then(s,o);c((a=a.apply(e,t)).next())}));var e,t,a}return r((()=>{o()})),{treeData:s,handleSelect:function(e,a){t("select",e[0])}}}});const d={class:"m-4 mr-0 overflow-hidden bg-white"};l.render=function(e,t,a,r,n,l){const m=s("BasicTree");return o(),c("div",d,[i(m,{title:"部门列表",toolbar:"",search:"",clickRowToExpand:!1,treeData:e.treeData,replaceFields:{key:"id",title:"deptName"},onSelect:e.handleSelect},null,8,["treeData","onSelect"])])};export default l;