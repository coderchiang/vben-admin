import{bd as t,e,aW as a,r as o,o as l,m as s,F as n,aw as i,D as r,n as c,E as d,p}from"./index.a6116d7f.js";import{c as m}from"./createAsyncComponent.cdc5205e.js";import{C as u}from"./index.5e0fdf38.js";import{T as f}from"./index.08e18061.js";import"./index.82700539.js";import"./index.2466dd13.js";import"./vendor.afa0338c.js";import"./index.b1ea4fd1.js";import"./UpOutlined.f8bb807d.js";import"./responsiveObserve.c545f1cc.js";const x=m((()=>t((()=>__import__("./index.4e88e52c.js")),["/dist/assets/index.4e88e52c.js","/dist/assets/index.a6116d7f.js","/dist/assets/index.c1c017a3.css","/dist/assets/vendor.afa0338c.js","/dist/assets/vendor.4a5fa02d.css"]))),v=[{title:"访问数",icon:"visit-count|svg",value:2e3,total:12e4,color:"green",action:"月"},{title:"成交额",icon:"total-sales|svg",value:2e4,total:5e5,color:"blue",action:"月"},{title:"下载数",icon:"download-count|svg",value:8e3,total:12e4,color:"orange",action:"周"},{title:"成交数",icon:"transaction|svg",value:5e3,total:5e4,color:"purple",action:"年"}];var g=e({components:{CountTo:x,Tag:f,Card:u,Icon:a},setup:()=>({growCardList:v})});const j={class:"md:flex"},b={class:"py-4 px-4 flex justify-between"},w={class:"p-2 px-4 flex justify-between"};g.render=function(t,e,a,m,u,f){const x=o("Tag"),v=o("CountTo"),g=o("Icon"),C=o("Card");return l(),s("div",j,[(l(!0),s(n,null,i(t.growCardList,((e,a)=>(l(),s(C,{key:e.title,size:"small",loading:t.$attrs.loading,title:e.title,class:["md:w-1/4 w-full md:mt-0 !mt-4",[a+1<4&&"!md:mr-4"]],canExpan:!1},{extra:r((()=>[c(x,{color:e.color},{default:r((()=>[d(p(e.action),1)])),_:2},1032,["color"])])),default:r((()=>[c("div",b,[c(v,{prefix:"$",startVal:1,endVal:e.value,class:"text-2xl"},null,8,["endVal"]),c(g,{icon:e.icon,size:40},null,8,["icon"])]),c("div",w,[c("span",null,"总"+p(e.title),1),c(v,{prefix:"$",startVal:1,endVal:e.total},null,8,["endVal"])])])),_:2},1032,["loading","title","class"])))),128))])};export default g;
