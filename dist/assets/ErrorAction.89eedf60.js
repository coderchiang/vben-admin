import{B as t}from"./index.35e29df1.js";import{e as o,aW as e,b6 as r,j as n,a$ as s,k as a,cs as i,aN as d,r as m,o as u,m as c,D as p,n as l}from"./index.79216f76.js";import"./index.22f604ed.js";import"./createAsyncComponent.5d37afba.js";import"./RedoOutlined.c287cfda.js";import"./_baseIteratee.f7d95dea.js";import"./get.091e0743.js";import"./FullscreenOutlined.8d4f5633.js";import"./index.7dbd5ce1.js";import"./useWindowSizeFn.5f51c913.js";import"./vendor.afa0338c.js";import"./usePageContext.c3126629.js";import"./index.70d63763.js";import"./index.8a427938.js";import"./UpOutlined.14867f8e.js";import"./useSortable.cc72618f.js";var f=o({name:"ErrorAction",components:{Icon:e,Tooltip:r,Badge:t},setup(){const{t:t}=n(),{push:o}=s();return{t:t,getCount:a((()=>i.getErrorListCountState)),handleToErrorList:function(){o(d.ERROR_LOG_PAGE).then((()=>{i.commitErrorListCountState(0)}))}}}});f.render=function(t,o,e,r,n,s){const a=m("Icon"),i=m("Badge"),d=m("Tooltip");return u(),c(d,{title:t.t("layout.header.tooltipErrorLog"),placement:"bottom",mouseEnterDelay:.5,onClick:t.handleToErrorList},{default:p((()=>[l(i,{count:t.getCount,offset:[0,10],dot:"",overflowCount:99},{default:p((()=>[l(a,{icon:"ion:bug-outline"})])),_:1},8,["count"])])),_:1},8,["title","mouseEnterDelay","onClick"])};export default f;