import{e,cS as t,g as i,r as s,o as r,m as n,F as o,aw as a,n as p}from"./index.a6116d7f.js";import{b as c}from"./index.167ecaf0.js";import"./vendor.afa0338c.js";import"./useDrawer.a446a4c3.js";import"./index.d884b81e.js";import"./ArrowLeftOutlined.f01a2ce6.js";import"./index.80fea805.js";import"./createAsyncComponent.cdc5205e.js";import"./index.5eed9320.js";import"./RedoOutlined.88767754.js";import"./_baseIteratee.3f361c9f.js";import"./get.2496f28f.js";import"./FullscreenOutlined.988f7260.js";import"./index.2cb11389.js";import"./useWindowSizeFn.5638d682.js";import"./usePageContext.730ef272.js";import"./index.82700539.js";import"./UpOutlined.f8bb807d.js";import"./useSortable.05a5cb3a.js";var d=e({name:"ThemePicker",components:{CheckOutlined:t},props:{colorList:{type:Array,defualt:[]},event:{type:Number,default:()=>{}},def:{type:String}},setup(e){const{prefixCls:t}=i("setting-theme-picker");return{prefixCls:t,handleClick:function(t){e.event&&c(e.event,t)}}}});d.render=function(e,t,i,c,d,l){const m=s("CheckOutlined");return r(),n("div",{class:e.prefixCls},[(r(!0),n(o,null,a(e.colorList||[],(t=>(r(),n("span",{key:t,onClick:i=>e.handleClick(t),class:[`${e.prefixCls}__item`,{[`${e.prefixCls}__item--active`]:e.def===t}],style:{background:t}},[p(m)],14,["onClick"])))),128))],2)};export default d;
