var e=(e,t,o)=>new Promise(((n,i)=>{var a=e=>{try{l(o.next(e))}catch(t){i(t)}},r=e=>{try{l(o.throw(e))}catch(t){i(t)}},l=e=>e.done?n(e.value):Promise.resolve(e.value).then(a,r);l((o=o.apply(e,t)).next())}));import{_ as t,u as o}from"./useTable.d4faf47d.js";import{_ as n}from"./useForm.6c7201a5.js";import{c6 as i,e as a,dK as r,dL as l,dM as d,D as s,r as c,o as p,m,n as u,G as b,H as f}from"./index.c68bc564.js";import{T as h}from"./index.39f227bd.js";import"./get.402f11ff.js";import"./index.dd7322b1.js";import"./scrollTo.c1e0f75f.js";import"./onMountedOrActivated.1b5c6f87.js";import"./useExpose.6be3b34e.js";import"./index.53dfa4c0.js";import"./UpOutlined.b9c4ece0.js";import"./index.2dba30f1.js";import"./useWindowSizeFn.10e7e01b.js";import"./useModal.4bd2816f.js";import"./FullscreenOutlined.16be4464.js";import"./index.d0c7b499.js";import"./useSortable.653585e7.js";import"./RedoOutlined.d9910eb1.js";import"./_baseIteratee.d3c102c9.js";import"./index.a859909a.js";import"./index.b8a50e18.js";import"./responsiveObserve.c545f1cc.js";import"./vendor.afa0338c.js";import"./index.65ee3376.js";import"./Tree.885e3dd6.js";import"./CountdownInput.2f2513e7.js";import"./download.1bc3c751.js";import"./index.548c3b67.js";const x=[{title:"操作用户",dataIndex:"operName",width:100},{title:"操作方法",dataIndex:"method",width:100},{title:"访问Url",dataIndex:"operUrl",width:180},{title:"客户端ip",dataIndex:"operIp",width:180},{title:"访问位置",dataIndex:"operLocation",width:180},{title:"系统",dataIndex:"os",width:100},{title:"平台",dataIndex:"platform",width:100},{title:"浏览器",dataIndex:"browser",width:100},{title:"操作状态",dataIndex:"status",width:80,customRender:({record:e})=>{const t=1==~~e.status,o=t?"成功":"失败";return i(h,{color:t?"green":"red"},(()=>o))}},{title:"操作时间",dataIndex:"operTime",width:180},{title:"备注",dataIndex:"remark"}],j=[{field:"datetime",component:"RangePicker",label:"起止日期",colProps:{span:8}},{field:"type",label:"日志类型",component:"Select",componentProps:{options:[{label:"登录日志",value:"1"},{label:"操作日志",value:"2"}]},colProps:{span:8}},{field:"method",label:"请求方法",component:"Select",componentProps:{options:[{label:"GET",value:"GET"},{label:"POST",value:"POST"},{label:"PUT",value:"PUT"},{label:"DELETE",value:"DELETE"}]},colProps:{span:8}},{field:"operName",label:"操作用户",component:"Input",colProps:{span:8}},{field:"ipaddr",label:"IP地址",component:"Input",colProps:{span:8}}];var T=a({name:"LogManagement",components:{BasicTable:t,TableAction:n},setup(){const[t,{reload:n,getSelectRowKeys:i}]=o({title:"日志列表",api:r,columns:x,formConfig:{labelWidth:120,schemas:j,fieldMapToTime:[["datetime",["startTime","endTime"],"YYYY-MM-DD HH:mm:ss"]]},useSearchForm:!0,showTableSetting:!0,bordered:!0,rowKey:"id",rowSelection:{type:"checkbox"},showIndexColumn:!1,actionColumn:{width:80,title:"操作",dataIndex:"action",slots:{customRender:"action"},fixed:void 0}}),{createConfirm:a}=s();return{registerTable:t,handleConfirm:function(t){return e(this,null,(function*(){a({iconType:t,title:"注意",content:"您打算批量删除数据库日志吗？",onOk:()=>{d({ids:i()})&&setTimeout((()=>{n()}),200)}})}))},handleDelete:function(t){return e(this,null,(function*(){(yield l({id:t.id}))&&setTimeout((()=>{n()}),200)}))}}}});const w=f(" 批量删除 "),I=f(" 导出EXCEL ");T.render=function(e,t,o,n,i,a){const r=c("a-button"),l=c("TableAction"),d=c("BasicTable");return p(),m("div",null,[u(d,{onRegister:e.registerTable},{toolbar:b((()=>[u(r,{type:"warning",onClick:t[1]||(t[1]=t=>e.handleConfirm("warning"))},{default:b((()=>[w])),_:1}),u(r,{type:"success",onClick:e.handleDelete},{default:b((()=>[I])),_:1},8,["onClick"])])),action:b((({record:t})=>[u(l,{actions:[{icon:"ant-design:delete-outlined",color:"error",popConfirm:{title:"是否确认删除",confirm:e.handleDelete.bind(null,t)}}]},null,8,["actions"])])),_:1},8,["onRegister"])])};export default T;
