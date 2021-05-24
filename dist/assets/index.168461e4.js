import{_ as e,u as t}from"./useTable.d4faf47d.js";import{_ as o}from"./useForm.6c7201a5.js";import{e as i,dG as n,dJ as s,r,o as a,m as d,n as l,G as c,H as p}from"./index.c68bc564.js";import{u as m}from"./useModal.4bd2816f.js";import{_ as u,c as b,s as f}from"./DeptModal.0ae98645.js";import"./get.402f11ff.js";import"./index.dd7322b1.js";import"./scrollTo.c1e0f75f.js";import"./onMountedOrActivated.1b5c6f87.js";import"./useExpose.6be3b34e.js";import"./index.53dfa4c0.js";import"./UpOutlined.b9c4ece0.js";import"./index.2dba30f1.js";import"./useWindowSizeFn.10e7e01b.js";import"./index.d0c7b499.js";import"./useSortable.653585e7.js";import"./RedoOutlined.d9910eb1.js";import"./_baseIteratee.d3c102c9.js";import"./FullscreenOutlined.16be4464.js";import"./index.a859909a.js";import"./index.b8a50e18.js";import"./responsiveObserve.c545f1cc.js";import"./vendor.afa0338c.js";import"./index.65ee3376.js";import"./index.39f227bd.js";import"./Tree.885e3dd6.js";import"./CountdownInput.2f2513e7.js";import"./download.1bc3c751.js";import"./index.548c3b67.js";var j=i({name:"DeptManagement",components:{BasicTable:e,DeptModal:u,TableAction:o},setup(){const[e,{openModal:o}]=m(),[i,{reload:r,expandAll:a}]=t({title:"部门列表",api:n,columns:b,formConfig:{labelWidth:120,schemas:f},pagination:!1,striped:!1,isTreeTable:!0,useSearchForm:!0,showTableSetting:!0,bordered:!0,showIndexColumn:!1,canResize:!1,actionColumn:{width:80,title:"操作",dataIndex:"action",slots:{customRender:"action"},fixed:void 0}});return{registerTable:i,registerModal:e,handleCreate:function(){o(!0,{isUpdate:!1})},handleEdit:function(e){o(!0,{record:e,isUpdate:!0})},expandAll:a,handleDelete:function(e){return t=this,o=null,i=function*(){(yield s({id:e.id}))&&(r(),setTimeout((()=>{a()}),500))},new Promise(((e,n)=>{var s=e=>{try{a(i.next(e))}catch(t){n(t)}},r=e=>{try{a(i.throw(e))}catch(t){n(t)}},a=t=>t.done?e(t.value):Promise.resolve(t.value).then(s,r);a((i=i.apply(t,o)).next())}));var t,o,i},handleSuccess:function(){r(),setTimeout((()=>{a()}),500)}}}});const x=p(" 新增部门 "),h=p("展开全部");j.render=function(e,t,o,i,n,s){const p=r("a-button"),m=r("TableAction"),u=r("BasicTable"),b=r("DeptModal");return a(),d("div",null,[l(u,{onRegister:e.registerTable},{toolbar:c((()=>[l(p,{type:"primary",onClick:e.handleCreate},{default:c((()=>[x])),_:1},8,["onClick"]),l(p,{type:"primary",onClick:e.expandAll},{default:c((()=>[h])),_:1},8,["onClick"])])),action:c((({record:t})=>[l(m,{actions:[{icon:"clarity:note-edit-line",onClick:e.handleEdit.bind(null,t)},{icon:"ant-design:delete-outlined",color:"error",popConfirm:{title:"是否确认删除",confirm:e.handleDelete.bind(null,t)}}]},null,8,["actions"])])),_:1},8,["onRegister"]),l(b,{onRegister:e.registerModal,onSuccess:e.handleSuccess},null,8,["onRegister","onSuccess"])])};export default j;