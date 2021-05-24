import{e,ci as o,aX as t,bd as n,au as s,g as a,j as r,k as i,y as l,bu as c,aB as d,r as u,o as m,m as p,n as f,G as k,L as g,p as h,J as x}from"./index.c68bc564.js";import{D as _}from"./siteSetting.c485f07c.js";import{u as C}from"./useModal.4bd2816f.js";import{h as D}from"./header.d801b988.js";import{c as b}from"./createAsyncComponent.0ca310fb.js";import"./vendor.afa0338c.js";import"./useWindowSizeFn.10e7e01b.js";import"./FullscreenOutlined.16be4464.js";var w=e({name:"UserDropdown",components:{Dropdown:o,Menu:t,MenuItem:b((()=>n((()=>__import__("./DropMenuItem.10d56cc2.js")),["/dist/assets/DropMenuItem.10d56cc2.js","/dist/assets/index.c68bc564.js","/dist/assets/index.c1c017a3.css","/dist/assets/vendor.afa0338c.js","/dist/assets/vendor.4a5fa02d.css"]))),MenuDivider:t.Divider,LockAction:b((()=>n((()=>__import__("./LockModal.379a6bb9.js")),["/dist/assets/LockModal.379a6bb9.js","/dist/assets/LockModal.c2a09df5.css","/dist/assets/index.c68bc564.js","/dist/assets/index.c1c017a3.css","/dist/assets/vendor.afa0338c.js","/dist/assets/vendor.4a5fa02d.css","/dist/assets/useModal.4bd2816f.js","/dist/assets/useModal.b1a1b797.css","/dist/assets/useWindowSizeFn.10e7e01b.js","/dist/assets/FullscreenOutlined.16be4464.js","/dist/assets/useForm.6c7201a5.js","/dist/assets/useForm.bd5dea06.css","/dist/assets/index.a859909a.js","/dist/assets/index.81ecbe86.css","/dist/assets/index.b8a50e18.js","/dist/assets/index.0edc9df2.css","/dist/assets/responsiveObserve.c545f1cc.js","/dist/assets/_baseIteratee.d3c102c9.js","/dist/assets/get.402f11ff.js","/dist/assets/index.65ee3376.js","/dist/assets/RedoOutlined.d9910eb1.js","/dist/assets/index.dd7322b1.js","/dist/assets/index.2d2e7aa6.css","/dist/assets/index.39f227bd.js","/dist/assets/index.06c7b3c0.css","/dist/assets/index.53dfa4c0.js","/dist/assets/index.0b3eba88.css","/dist/assets/UpOutlined.b9c4ece0.js","/dist/assets/index.2dba30f1.js","/dist/assets/index.4a4a1593.css","/dist/assets/Tree.885e3dd6.js","/dist/assets/CountdownInput.2f2513e7.js","/dist/assets/CountdownInput.05ee5bdd.css","/dist/assets/index.d0c7b499.js","/dist/assets/index.2b38113f.css","/dist/assets/download.1bc3c751.js","/dist/assets/index.548c3b67.js","/dist/assets/index.9cf06c39.css","/dist/assets/header.d801b988.js"])))},props:{theme:s.oneOf(["dark","light"])},setup(){const{prefixCls:e}=a("header-user-dropdown"),{t:o}=r(),{getShowDoc:t}=c(),n=i((()=>{const{username:e="",nickname:o}=l.getUserInfoState||{};return{username:e,nickname:o}})),[s,{openModal:u}]=C();return{prefixCls:e,t:o,getUserInfo:n,handleMenuClick:function(e){switch(e.key){case"logout":l.confirmLoginOut();break;case"doc":d(_);break;case"lock":u(!0)}},getShowDoc:t,headerImg:D,register:s}}});w.render=function(e,o,t,n,s,a){const r=u("MenuItem"),i=u("MenuDivider"),l=u("Menu"),c=u("Dropdown"),d=u("LockAction");return m(),p(x,null,[f(c,{placement:"bottomLeft",overlayClassName:`${e.prefixCls}-dropdown-overlay`},{overlay:k((()=>[f(l,{onClick:e.handleMenuClick},{default:k((()=>[e.getShowDoc?(m(),p(r,{key:"doc",text:e.t("layout.header.dropdownItemDoc"),icon:"ion:document-text-outline"},null,8,["text"])):g("",!0),e.getShowDoc?(m(),p(i,{key:1})):g("",!0),f(r,{key:"lock",text:e.t("layout.header.tooltipLock"),icon:"ion:lock-closed-outline"},null,8,["text"]),f(r,{key:"logout",text:e.t("layout.header.dropdownItemLoginOut"),icon:"ion:power-outline"},null,8,["text"])])),_:1},8,["onClick"])])),default:k((()=>[f("span",{class:[[e.prefixCls,`${e.prefixCls}--${e.theme}`],"flex"]},[f("img",{class:`${e.prefixCls}__header`,src:e.headerImg},null,10,["src"]),f("span",{class:`${e.prefixCls}__info hidden md:block`},[f("span",{class:[`${e.prefixCls}__name  `,"truncate"]},h(e.getUserInfo.realName),3)],2)],2)])),_:1},8,["overlayClassName"]),f(d,{onRegister:e.register},null,8,["onRegister"])],64)};export default w;
