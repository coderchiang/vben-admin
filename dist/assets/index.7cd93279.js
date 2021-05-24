import{S as t,a2 as e,e as n,Q as r,Y as o,Z as i,V as s,cH as a,X as c,n as l,ae as u,af as f,ag as g,bd as d,g as p,k as v,A as h,bt as m,bp as b,bu as T,r as k,o as y,m as S,L as w,J as x}from"./index.9463653b.js";import{s as C,g as O}from"./scrollTo.c1e0f75f.js";import{c as j}from"./createAsyncComponent.3f8acaa1.js";import"./vendor.afa0338c.js";function E(){return(E=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}).apply(this,arguments)}function P(){return window}var _=n({name:"ABackTop",mixins:[r],inheritAttrs:!1,props:E(E({},{visibilityHeight:t.number,target:t.func,prefixCls:t.string,onClick:t.func}),{visibilityHeight:t.number.def(400)}),emits:["click"],setup:function(){return{configProvider:o("configProvider",i)}},data:function(){return{visible:!1,scrollEvent:null}},mounted:function(){var t=this;s((function(){var e=t.target||P;t.scrollEvent=a(e(),"scroll",t.handleScroll),t.handleScroll()}))},activated:function(){var t=this;s((function(){t.handleScroll()}))},beforeUnmount:function(){this.scrollEvent&&this.scrollEvent.remove()},methods:{getCurrentScrollTop:function(){var t=(this.target||P)();return t===window?window.pageYOffset||document.body.scrollTop||document.documentElement.scrollTop:t.scrollTop},scrollToTop:function(t){var e=this.target;C(0,{getContainer:void 0===e?P:e}),this.$emit("click",t)},handleScroll:function(){var t=this.visibilityHeight,e=this.target,n=O((void 0===e?P:e)(),!0);this.setState({visible:n>t})}},render:function(){var t,e,n=this.prefixCls,r=this.$slots,o=(0,this.configProvider.getPrefixCls)("back-top",n),i=c(o,this.$attrs.class),s=l("div",{class:"".concat(o,"-content")},[l("div",{class:"".concat(o,"-icon")},null)]),a=E(E({},this.$attrs),{onClick:this.scrollToTop,class:i}),d=this.visible?l("div",a,[(null===(t=r.default)||void 0===t?void 0:t.call(r))||s]):null,p=u("fade");return l(g,p,"function"==typeof(e=d)||"[object Object]"===Object.prototype.toString.call(e)&&!f(e)?d:{default:function(){return[d]}})}}),B=n({name:"LayoutFeatures",components:{BackTop:e(_),LayoutLockPage:j((()=>d((()=>__import__("./index.4d076e6e.js")),["/dist/assets/index.4d076e6e.js","/dist/assets/LockPage.1ec355ca.js","/dist/assets/LockPage.4e79694f.css","/dist/assets/index.9463653b.js","/dist/assets/index.c1c017a3.css","/dist/assets/vendor.afa0338c.js","/dist/assets/vendor.4a5fa02d.css","/dist/assets/header.d801b988.js"]))),SettingDrawer:j((()=>d((()=>__import__("./index.86130ac9.js").then((function(t){return t.i}))),["/dist/assets/index.86130ac9.js","/dist/assets/useDrawer.ddbd519c.js","/dist/assets/useDrawer.25440082.css","/dist/assets/index.841d096d.js","/dist/assets/index.864ac48e.css","/dist/assets/index.9463653b.js","/dist/assets/index.c1c017a3.css","/dist/assets/vendor.afa0338c.js","/dist/assets/vendor.4a5fa02d.css","/dist/assets/ArrowLeftOutlined.89b30c33.js","/dist/assets/index.0edfd8a6.js","/dist/assets/index.2b38113f.css","/dist/assets/createAsyncComponent.3f8acaa1.js","/dist/assets/index.02f4fa04.js","/dist/assets/index.b8fcb6d0.css","/dist/assets/RedoOutlined.479a3965.js","/dist/assets/_baseIteratee.e2b5031d.js","/dist/assets/get.b1a14716.js","/dist/assets/FullscreenOutlined.0841af49.js","/dist/assets/index.7ac2e920.js","/dist/assets/index.a9fdc7b4.css","/dist/assets/useWindowSizeFn.613dea1b.js","/dist/assets/usePageContext.8ba37b8e.js","/dist/assets/index.47d8f334.js","/dist/assets/index.aad873ea.css","/dist/assets/UpOutlined.89a9da87.js","/dist/assets/useSortable.22b0f002.js"])))},setup(){const{getUseOpenBackTop:t,getShowSettingButton:e,getSettingButtonPosition:n,getFullContent:r}=b(),{prefixCls:o}=p("setting-drawer-fearure"),{getShowHeader:i}=T();return{getTarget:()=>document.body,getUseOpenBackTop:t,getIsFixedSettingDrawer:v((()=>{if(!h(e))return!1;const t=h(n);return t===m.AUTO?!h(i)||h(r):t===m.FIXED})),prefixCls:o}}});B.render=function(t,e,n,r,o,i){const s=k("LayoutLockPage"),a=k("BackTop"),c=k("SettingDrawer");return y(),S(x,null,[l(s),t.getUseOpenBackTop?(y(),S(a,{key:0,target:t.getTarget},null,8,["target"])):w("",!0),t.getIsFixedSettingDrawer?(y(),S(c,{key:1,class:t.prefixCls},null,8,["class"])):w("",!0)],64)};export default B;
