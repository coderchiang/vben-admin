import{B as t}from"./index.8e493ae0.js";import{e as o,aW as e,b6 as r,j as n,a$ as s,k as i,cs as a,aN as d,r as m,o as u,m as p,D as c,n as l}from"./index.a6116d7f.js";import"./index.5eed9320.js";import"./createAsyncComponent.cdc5205e.js";import"./RedoOutlined.88767754.js";import"./_baseIteratee.3f361c9f.js";import"./get.2496f28f.js";import"./FullscreenOutlined.988f7260.js";import"./index.2cb11389.js";import"./useWindowSizeFn.5638d682.js";import"./vendor.afa0338c.js";import"./usePageContext.730ef272.js";import"./index.d884b81e.js";import"./index.82700539.js";import"./UpOutlined.f8bb807d.js";import"./useSortable.05a5cb3a.js";var f=o({name:"ErrorAction",components:{Icon:e,Tooltip:r,Badge:t},setup(){const{t:t}=n(),{push:o}=s();return{t:t,getCount:i((()=>a.getErrorListCountState)),handleToErrorList:function(){o(d.ERROR_LOG_PAGE).then((()=>{a.commitErrorListCountState(0)}))}}}});f.render=function(t,o,e,r,n,s){const i=m("Icon"),a=m("Badge"),d=m("Tooltip");return u(),p(d,{title:t.t("layout.header.tooltipErrorLog"),placement:"bottom",mouseEnterDelay:.5,onClick:t.handleToErrorList},{default:c((()=>[l(a,{count:t.getCount,offset:[0,10],dot:"",overflowCount:99},{default:c((()=>[l(i,{icon:"ion:bug-outline"})])),_:1},8,["count"])])),_:1},8,["title","mouseEnterDelay","onClick"])};export default f;