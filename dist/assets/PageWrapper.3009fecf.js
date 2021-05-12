var e=Object.defineProperty,t=Object.prototype.hasOwnProperty,o=Object.getOwnPropertySymbols,n=Object.prototype.propertyIsEnumerable,a=(t,o,n)=>o in t?e(t,o,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[o]=n,r=(e,r)=>{for(var s in r||(r={}))t.call(r,s)&&a(e,s,r[s]);if(o)for(var s of o(r))n.call(r,s)&&a(e,s,r[s]);return e};import{X as s,L as l,e as i,S as c,T as u,Q as d,a6 as f,V as g,n as p,a9 as h,ca as b,g as v,a_ as m,o as C,m as x,ax as y,ay as H,as as $,q as k,k as j,cb as P,w as F,au as O,O as S,r as w,am as _,av as A,aw as B,D as N,F as V,E as I,p as T,G as R}from"./index.79216f76.js";import{u as W}from"./usePageContext.c3126629.js";import{B as q}from"./index.ef28a8ac.js";import{A as E}from"./index.8d2bfa48.js";import{T as L,o as D}from"./onMountedOrActivated.8c5387a9.js";import{A as G}from"./ArrowLeftOutlined.1efbf6a0.js";var M={backIcon:l.VNodeChild,prefixCls:l.string,title:l.VNodeChild,subTitle:l.VNodeChild,breadcrumb:l.object,tags:l.any,footer:l.VNodeChild,extra:l.VNodeChild,avatar:l.object,ghost:l.looseBool,onBack:l.func},Q=function(e,t){var o=t.avatar,n=f(t,"title"),a=f(t,"subTitle"),r=f(t,"tags"),s=f(t,"extra"),l=void 0!==f(t,"backIcon")?f(t,"backIcon"):p(G,null,null),i=t.onBack,c="".concat(e,"-heading");if(n||a||r||s){var u=function(e,t,o,n){return o&&n?p(b,{componentName:"PageHeader",children:function(n){var a,r=n.back;return p("div",{class:"".concat(t,"-back")},[p(L,{onClick:function(t){e.$emit("back",t)},class:"".concat(t,"-back-button"),"aria-label":r},(a=o,"function"==typeof a||"[object Object]"===Object.prototype.toString.call(a)&&!h(a)?o:{default:function(){return[o]}}))])}},null):null}(t,e,l,i);return p("div",{class:c},[u,o&&p(E,o,null),n&&p("span",{class:"".concat(c,"-title")},[n]),a&&p("span",{class:"".concat(c,"-sub-title")},[a]),r&&p("span",{class:"".concat(c,"-tags")},[r]),s&&p("span",{class:"".concat(c,"-extra")},[s])])}return null},X=function(e,t){return t?p("div",{class:"".concat(e,"-footer")},[t]):null},z=function(e,t){return p("div",{class:"".concat(e,"-content")},[t])},J=s(i({name:"APageHeader",props:M,setup:function(){return{configProvider:c("configProvider",u)}},render:function(){var e=this.configProvider,t=e.getPrefixCls,o=e.pageHeader,n=d(this),a=n.prefixCls,r=n.breadcrumb,s=f(this,"footer"),l=g(this),i=!0;"ghost"in n?i=n.ghost:o&&"ghost"in o&&(i=o.ghost);var c,u,h,b=t("page-header",a),v=r&&r.routes?function(e){return p(q,e,null)}(r):null,m=[b,(c={"has-breadcrumb":v,"has-footer":s},u="".concat(b,"-ghost"),h=i,u in c?Object.defineProperty(c,u,{value:h,enumerable:!0,configurable:!0,writable:!0}):c[u]=h,c)];return p("div",{class:m},[v,Q(b,this),l.length?z(b,l):null,X(b,s)])}})),K=i({name:"PageFooter",inheritAttrs:!1,setup(){const{prefixCls:e}=v("page-footer"),{getCalcContentWidth:t}=m();return{prefixCls:e,getCalcContentWidth:t}}});const U=H()(((e,t,o,n,a,r)=>(C(),x("div",{class:e.prefixCls,style:{width:e.getCalcContentWidth}},[p("div",{class:`${e.prefixCls}__left`},[y(e.$slots,"left",{},void 0,!0)],2),y(e.$slots,"default",{},void 0,!0),p("div",{class:`${e.prefixCls}__right`},[y(e.$slots,"right",{},void 0,!0)],2)],6))));K.render=U,K.__scopeId="data-v-3dfdd004";var Y=i({name:"PageWrapper",components:{PageFooter:K,PageHeader:J},inheritAttrs:!1,props:{title:$.string,dense:$.bool,ghost:$.bool,content:$.string,contentStyle:{type:Object},contentBackground:$.bool,contentFullHeight:$.bool,contentClass:$.string,fixedHeight:$.bool},setup(e,{slots:t}){const o=k(null),n=k(null),a=k(0),{prefixCls:s,prefixVar:l}=v("page-wrapper"),{contentHeight:i,setPageHeight:c,pageHeight:u}=W(),d=j((()=>[s,{[`${s}--dense`]:e.dense}])),f=j((()=>(null==t?void 0:t.leftFooter)||(null==t?void 0:t.rightFooter))),g=j((()=>Object.keys(P(t,"default","leftFooter","rightFooter","headerContent")))),p=j((()=>{const{contentBackground:t,contentFullHeight:o,contentStyle:n,fixedHeight:s}=e,l=t?{backgroundColor:"#fff"}:{};if(!o)return r(r({},l),n);const i=`${F(u)}px`;return r(r(r(r(r({},l),n),{minHeight:i}),s?{height:i}:{}),{paddingBottom:`${F(a)}px`})}));function h(){var t,r;if(!e.contentFullHeight)return;const s=F(n),u=F(o);a.value=0;const d=null==s?void 0:s.$el;d&&(a.value+=null!=(t=null==d?void 0:d.offsetHeight)?t:0);let f=0;const g=null==u?void 0:u.$el;g&&(f+=null!=(r=null==g?void 0:g.offsetHeight)?r:0);let p=0,h="0px",b="0px";const v=document.querySelectorAll(`.${l}-page-wrapper-content`);if(v&&v.length>0){const e=v[0],t=getComputedStyle(e);h=null==t?void 0:t.marginBottom,b=null==t?void 0:t.marginTop}if(h){p+=Number(h.replace(/[^\d]/g,""))}if(b){p+=Number(b.replace(/[^\d]/g,""))}null==c||c(F(i)-F(a)-f-p)}return O((()=>[null==i?void 0:i.value,f.value]),(()=>{h()}),{flush:"post",immediate:!0}),D((()=>{S((()=>{h()}))})),{getContentStyle:p,footerRef:n,headerRef:o,getClass:d,getHeaderSlots:g,prefixCls:s,getShowFooter:f,pageHeight:u,omit:P}}});Y.render=function(e,t,o,n,a,r){const s=w("PageHeader"),l=w("PageFooter");return C(),x("div",{class:e.getClass},[e.content||e.$slots.headerContent||e.title||e.getHeaderSlots.length?(C(),x(s,_({key:0,ghost:e.ghost,title:e.title},e.$attrs,{ref:"headerRef"}),A({default:N((()=>[e.content?(C(),x(V,{key:0},[I(T(e.content),1)],64)):y(e.$slots,"headerContent",{key:1})])),_:2},[B(e.getHeaderSlots,(t=>({name:t,fn:N((o=>[y(e.$slots,t,o)]))})))]),1040,["ghost","title"])):R("",!0),p("div",{class:["overflow-hidden",[`${e.prefixCls}-content`,e.contentClass]],style:e.getContentStyle},[y(e.$slots,"default")],6),e.getShowFooter?(C(),x(l,{key:1,ref:"footerRef"},{left:N((()=>[y(e.$slots,"leftFooter")])),right:N((()=>[y(e.$slots,"rightFooter")])),_:1},512)):R("",!0)],2)};export{Y as _};