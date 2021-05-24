var e=Object.defineProperty,t=Object.prototype.hasOwnProperty,n=Object.getOwnPropertySymbols,r=Object.prototype.propertyIsEnumerable,a=(t,n,r)=>n in t?e(t,n,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[n]=r,l=(e,l)=>{for(var o in l||(l={}))t.call(l,o)&&a(e,o,l[o]);if(n)for(var o of n(l))r.call(l,o)&&a(e,o,l[o]);return e};import{B as o}from"./index.56476475.js";import{e as u,aW as i,au as s,v as c,a$ as d,g as m,j as v,N as h,b1 as p,bk as f,aZ as b,d$ as g,bp as y,M as C,aO as k,r as x,o as I,m as O,n as j,G as w,L as B,p as P,H as M}from"./index.9463653b.js";import"./vendor.afa0338c.js";var $=u({name:"LayoutBreadcrumb",components:{Icon:i,[o.name]:o},props:{theme:s.oneOf(["dark","light"])},setup(){const e=c([]),{currentRoute:t}=d(),{prefixCls:n}=m("layout-breadcrumb"),{getShowBreadCrumbIcon:r}=y(),{t:a}=v();function o(e,t){const n=[];return e.forEach((e=>{var r,a;t.includes(e.path)&&n.push(l(l({},e),{name:(null==(r=e.meta)?void 0:r.title)||e.name})),(null==(a=e.children)?void 0:a.length)&&n.push(...o(e.children,t))})),n}return h((()=>{return n=this,r=null,a=function*(){var n,r,a;if(t.value.name===p)return;const u=yield f(),i=t.value.matched,s=null==i?void 0:i[i.length-1];let c=t.value.path;s&&(null==(n=null==s?void 0:s.meta)?void 0:n.currentActiveMenu)&&(c=s.meta.currentActiveMenu);const d=b(u,c),m=o(u.filter((e=>e.path===d[0])),d);if(!m||0===m.length)return;const v=g(m,(e=>{const{meta:t,name:n}=e;if(!t)return!!n;const{title:r,hideBreadcrumb:a,hideMenu:l}=t;return!(!r||a||l)})).filter((e=>{var t,n;return!(null==(t=e.meta)?void 0:t.hideBreadcrumb)||!(null==(n=e.meta)?void 0:n.hideMenu)}));(null==(r=t.value.meta)?void 0:r.currentActiveMenu)&&v.push(l(l({},t.value),{name:(null==(a=t.value.meta)?void 0:a.title)||t.value.name})),e.value=v},new Promise(((e,t)=>{var l=e=>{try{u(a.next(e))}catch(n){t(n)}},o=e=>{try{u(a.throw(e))}catch(n){t(n)}},u=t=>t.done?e(t.value):Promise.resolve(t.value).then(l,o);u((a=a.apply(n,r)).next())}));var n,r,a})),{routes:e,t:a,prefixCls:n,getIcon:function(e){var t;return e.icon||(null==(t=e.meta)?void 0:t.icon)},getShowBreadCrumbIcon:r,handleClick:function(e,t,n){null==n||n.preventDefault();const{children:r,redirect:a,meta:l}=e;if((null==r?void 0:r.length)&&!a)return void(null==n||n.stopPropagation());if(null==l?void 0:l.carryParam)return;const o=k();if(a&&C(a))o(a);else{let e="";if(1===t.length)e=t[0];else{e=`${t.slice(1).pop()||""}`}e=/^\//.test(e)?e:`/${e}`,o(e)}},hasRedirect:function(e,t){return e.indexOf(t)!==e.length-1}}}});const R={key:1};$.render=function(e,t,n,r,a,l){const o=x("Icon"),u=x("router-link"),i=x("a-breadcrumb");return I(),O("div",{class:[e.prefixCls,`${e.prefixCls}--${e.theme}`]},[j(i,{routes:e.routes},{itemRender:w((({route:t,routes:n,paths:r})=>[e.getShowBreadCrumbIcon&&e.getIcon(t)?(I(),O(o,{key:0,icon:e.getIcon(t)},null,8,["icon"])):B("",!0),e.hasRedirect(n,t)?(I(),O(u,{key:2,to:"",onClick:n=>e.handleClick(t,r,n)},{default:w((()=>[M(P(e.t(t.name||t.meta.title)),1)])),_:2},1032,["onClick"])):(I(),O("span",R,P(e.t(t.name||t.meta.title)),1))])),_:1},8,["routes"])],2)};export default $;
