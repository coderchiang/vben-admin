import{_ as e}from"./index.vue_vue&type=style&index=0&lang.7d54bd30.js";import{e as t,v as a,w as r,dG as n,r as s,o,m as i,n as l}from"./index.9463653b.js";import"./Tree.22d2d432.js";import"./useExpose.af964e7c.js";import"./index.0edfd8a6.js";import"./get.b1a14716.js";import"./vendor.afa0338c.js";var c=t({name:"DeptTree",components:{BasicTree:e},emits:["select"],setup(e,{emit:t}){const s=a([]);function o(){return e=this,t=null,a=function*(){s.value=yield n()},new Promise(((r,n)=>{var s=e=>{try{i(a.next(e))}catch(t){n(t)}},o=e=>{try{i(a.throw(e))}catch(t){n(t)}},i=e=>e.done?r(e.value):Promise.resolve(e.value).then(s,o);i((a=a.apply(e,t)).next())}));var e,t,a}return r((()=>{o()})),{treeData:s,handleSelect:function(e,a){t("select",e[0])}}}});const d={class:"m-4 mr-0 overflow-hidden bg-white"};c.render=function(e,t,a,r,n,c){const m=s("BasicTree");return o(),i("div",d,[l(m,{title:"部门列表",toolbar:"",search:"",clickRowToExpand:!1,treeData:e.treeData,replaceFields:{key:"id",title:"deptName"},onSelect:e.handleSelect},null,8,["treeData","onSelect"])])};export default c;
