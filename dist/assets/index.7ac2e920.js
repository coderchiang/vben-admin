import{e,bN as a,au as n,v as t,g as s,k as r,A as i,w as o,b$ as l,V as c,r as f,o as p,m,n as d,aA as u}from"./index.9463653b.js";import{u as g}from"./useWindowSizeFn.613dea1b.js";import"./vendor.afa0338c.js";var v=e({name:"IFrame",components:{Spin:a},props:{frameSrc:n.string.def("")},setup(){const e=t(!1),a=t(50),n=t(window.innerHeight),f=t(null),{prefixCls:p}=s("iframe-page");g(d,150,{immediate:!0});const m=r((()=>({height:`${i(n)}px`})));function d(){const e=i(f);if(!e)return;let{top:t}=l(e);t+=20,a.value=t,n.value=window.innerHeight-t;const s=document.documentElement.clientHeight-t;e.style.height=`${s}px`}function u(){e.value=!1,d()}return o((()=>{e.value=!0,c((()=>{const e=i(f);if(!e)return;const a=e;a.attachEvent?a.attachEvent("onload",(()=>{u()})):e.onload=()=>{u()}}))})),{getWrapStyle:m,loading:e,frameRef:f,prefixCls:p}}});const h=u(),x=h(((e,a,n,t,s,r)=>{const i=f("Spin");return p(),m("div",{class:e.prefixCls,style:e.getWrapStyle},[d(i,{spinning:e.loading,size:"large",style:e.getWrapStyle},{default:h((()=>[d("iframe",{src:e.frameSrc,class:`${e.prefixCls}__main`,ref:"frameRef"},null,10,["src"])])),_:1},8,["spinning","style"])],6)}));v.render=x,v.__scopeId="data-v-10f18273";export default v;
