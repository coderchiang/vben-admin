import{L as e}from"./index.935f94ff.js";import{e as o,j as t,a$ as s,g as a,k as i,A as r,aB as n,bp as d,dE as l,dF as p,r as c,o as u,m,n as f,p as j,L as b,aA as F}from"./index.c68bc564.js";import{D as _,G as C,S as x}from"./siteSetting.c485f07c.js";import{G as L}from"./GithubFilled.23d753d4.js";import"./createAsyncComponent.0ca310fb.js";import"./RedoOutlined.d9910eb1.js";import"./_baseIteratee.d3c102c9.js";import"./get.402f11ff.js";import"./FullscreenOutlined.16be4464.js";import"./index.84894461.js";import"./useWindowSizeFn.10e7e01b.js";import"./vendor.afa0338c.js";import"./usePageContext.9fd1490a.js";import"./index.a2049091.js";import"./index.77993fbd.js";import"./UpOutlined.b9c4ece0.js";import"./useSortable.653585e7.js";var g=o({name:"LayoutFooter",components:{Footer:e.Footer,GithubFilled:L},setup(){const{t:e}=t(),{getShowFooter:o}=d(),{currentRoute:l}=s(),{prefixCls:p}=a("layout-footer");return{getShowLayoutFooter:i((()=>{var e;return r(o)&&!(null==(e=r(l).meta)?void 0:e.hiddenFooter)})),prefixCls:p,t:e,DOC_URL:_,GITHUB_URL:C,SITE_URL:x,openWindow:n}}});const h=F();l("data-v-183dcd01");const v=f("div",null,"Copyright ©2020 Vben Admin",-1);p();const w=h(((e,o,t,s,a,i)=>{const r=c("GithubFilled"),n=c("Footer");return e.getShowLayoutFooter?(u(),m(n,{key:0,class:e.prefixCls},{default:h((()=>[f("div",{class:`${e.prefixCls}__links`},[f("a",{onClick:o[1]||(o[1]=o=>e.openWindow(e.SITE_URL))},j(e.t("layout.footer.onlinePreview")),1),f(r,{onClick:o[2]||(o[2]=o=>e.openWindow(e.GITHUB_URL)),class:`${e.prefixCls}__github`},null,8,["class"]),f("a",{onClick:o[3]||(o[3]=o=>e.openWindow(e.DOC_URL))},j(e.t("layout.footer.onlineDocument")),1)],2),v])),_:1},8,["class"])):b("",!0)}));g.render=w,g.__scopeId="data-v-183dcd01";export default g;