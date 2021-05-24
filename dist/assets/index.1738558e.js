import{_ as e,u as t}from"./useTable.d4faf47d.js";import{_ as o}from"./useForm.6c7201a5.js";import{e as n,e0 as r,e1 as i,r as s,o as a,m as d,G as c,n as l,H as p}from"./index.c68bc564.js";import{_ as m}from"./PageWrapper.eee1a02a.js";import u from"./DeptTree.c9aa9c34.js";import{u as f}from"./useModal.4bd2816f.js";import{_ as j,c as b,s as x}from"./UserModal.b227e3d3.js";import"./get.402f11ff.js";import"./index.dd7322b1.js";import"./scrollTo.c1e0f75f.js";import"./onMountedOrActivated.1b5c6f87.js";import"./useExpose.6be3b34e.js";import"./index.53dfa4c0.js";import"./UpOutlined.b9c4ece0.js";import"./index.2dba30f1.js";import"./useWindowSizeFn.10e7e01b.js";import"./index.d0c7b499.js";import"./useSortable.653585e7.js";import"./RedoOutlined.d9910eb1.js";import"./_baseIteratee.d3c102c9.js";import"./FullscreenOutlined.16be4464.js";import"./index.a859909a.js";import"./index.b8a50e18.js";import"./responsiveObserve.c545f1cc.js";import"./vendor.afa0338c.js";import"./index.65ee3376.js";import"./index.39f227bd.js";import"./Tree.885e3dd6.js";import"./CountdownInput.2f2513e7.js";import"./download.1bc3c751.js";import"./index.548c3b67.js";import"./usePageContext.9fd1490a.js";import"./index.d57a0f37.js";import"./index.f8ec02a1.js";import"./ArrowLeftOutlined.0fae5924.js";import"./index.vue_vue&type=style&index=0&lang.a64cc4ee.js";var h=n({name:"AccountManagement",components:{BasicTable:e,PageWrapper:m,DeptTree:u,AccountModal:j,TableAction:o},setup(){const[e,{openModal:o}]=f(),[n,{reload:s}]=t({title:"账号列表",api:r,columns:b,formConfig:{labelWidth:120,schemas:x},useSearchForm:!0,showTableSetting:!0,bordered:!0,actionColumn:{width:80,title:"操作",dataIndex:"action",slots:{customRender:"action"}}});return{registerTable:n,registerModal:e,handleCreate:function(){o(!0,{isUpdate:!1})},handleEdit:function(e){o(!0,{record:e,isUpdate:!0})},handleDelete:function(e){return t=this,o=null,n=function*(){(yield i({id:e.id}))&&s()},new Promise(((e,r)=>{var i=e=>{try{a(n.next(e))}catch(t){r(t)}},s=e=>{try{a(n.throw(e))}catch(t){r(t)}},a=t=>t.done?e(t.value):Promise.resolve(t.value).then(i,s);a((n=n.apply(t,o)).next())}));var t,o,n},handleSuccess:function(){s()},handleSelect:function(e=""){s({searchInfo:{deptId:e}})}}}});const g=p("新增账号");h.render=function(e,t,o,n,r,i){const p=s("DeptTree"),m=s("a-button"),u=s("TableAction"),f=s("BasicTable"),j=s("AccountModal"),b=s("PageWrapper");return a(),d(b,{dense:"",contentFullHeight:"",fixedHeight:"",contentClass:"flex"},{default:c((()=>[l(p,{class:"w-1/4 xl:w-1/5",onSelect:e.handleSelect},null,8,["onSelect"]),l(f,{onRegister:e.registerTable,class:"w-3/4 xl:w-4/5"},{toolbar:c((()=>[l(m,{type:"primary",onClick:e.handleCreate},{default:c((()=>[g])),_:1},8,["onClick"])])),action:c((({record:t})=>[l(u,{actions:[{icon:"clarity:note-edit-line",onClick:e.handleEdit.bind(null,t)},{icon:"ant-design:delete-outlined",color:"error",popConfirm:{title:"是否确认删除",confirm:e.handleDelete.bind(null,t)}}]},null,8,["actions"])])),_:1},8,["onRegister"]),l(j,{onRegister:e.registerModal,onSuccess:e.handleSuccess},null,8,["onRegister","onSuccess"])])),_:1})};export default h;