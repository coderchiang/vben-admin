import{_ as e,u as o}from"./useTable.f0dba838.js";import{_ as t}from"./useForm.22fba0cc.js";import{e as r,dS as i,dT as n,r as s,o as a,m as d,n as l,D as c,E as m}from"./index.a6116d7f.js";import{u as p}from"./useDrawer.a446a4c3.js";import{_ as u,c as f,s as j}from"./RoleDrawer.dbe7205f.js";import"./get.2496f28f.js";import"./index.810c129c.js";import"./scrollTo.c1e0f75f.js";import"./onMountedOrActivated.f3828cfe.js";import"./useExpose.e20c8176.js";import"./index.fbddc9c9.js";import"./UpOutlined.f8bb807d.js";import"./index.b7cc666a.js";import"./useWindowSizeFn.5638d682.js";import"./useModal.1d11b24a.js";import"./FullscreenOutlined.988f7260.js";import"./index.80fea805.js";import"./useSortable.05a5cb3a.js";import"./RedoOutlined.88767754.js";import"./_baseIteratee.3f361c9f.js";import"./index.8ff9a7b3.js";import"./index.2466dd13.js";import"./responsiveObserve.c545f1cc.js";import"./vendor.afa0338c.js";import"./index.b1ea4fd1.js";import"./index.08e18061.js";import"./Tree.095500ae.js";import"./CountdownInput.9e4493da.js";import"./download.e4c72eb7.js";import"./index.edff6f32.js";import"./index.d884b81e.js";import"./ArrowLeftOutlined.f01a2ce6.js";import"./index.vue_vue&type=style&index=0&lang.1081e285.js";var b=r({name:"RoleManagement",components:{BasicTable:e,RoleDrawer:u,TableAction:t},setup(){const[e,{openDrawer:t}]=p(),[r,{reload:s}]=o({title:"角色列表",api:i,columns:f,formConfig:{labelWidth:120,schemas:j},useSearchForm:!0,showTableSetting:!0,bordered:!0,showIndexColumn:!1,actionColumn:{width:80,title:"操作",dataIndex:"action",slots:{customRender:"action"},fixed:void 0}});return{registerTable:r,registerDrawer:e,handleCreate:function(){t(!0,{isUpdate:!1})},handleEdit:function(e){t(!0,{record:e,isUpdate:!0})},handleDelete:function(e){return o=this,t=null,r=function*(){(yield n({id:e.id}))&&s()},new Promise(((e,i)=>{var n=e=>{try{a(r.next(e))}catch(o){i(o)}},s=e=>{try{a(r.throw(e))}catch(o){i(o)}},a=o=>o.done?e(o.value):Promise.resolve(o.value).then(n,s);a((r=r.apply(o,t)).next())}));var o,t,r},handleSuccess:function(){s()}}}});const x=m(" 新增角色 ");b.render=function(e,o,t,r,i,n){const m=s("a-button"),p=s("TableAction"),u=s("BasicTable"),f=s("RoleDrawer");return a(),d("div",null,[l(u,{onRegister:e.registerTable},{toolbar:c((()=>[l(m,{type:"primary",onClick:e.handleCreate},{default:c((()=>[x])),_:1},8,["onClick"])])),action:c((({record:o})=>[l(p,{actions:[{icon:"clarity:note-edit-line",onClick:e.handleEdit.bind(null,o)},{icon:"ant-design:delete-outlined",color:"error",popConfirm:{title:"是否确认删除",confirm:e.handleDelete.bind(null,o)}}]},null,8,["actions"])])),_:1},8,["onRegister"]),l(f,{onRegister:e.registerDrawer,onSuccess:e.handleSuccess},null,8,["onRegister","onSuccess"])])};export default b;