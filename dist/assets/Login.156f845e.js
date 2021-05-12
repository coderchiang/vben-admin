import{e,_ as o,f as t,u as s,g as r,j as l,k as i,l as a,r as m,o as n,m as d,n as p,p as x}from"./index.2e7996b3.js";import c from"./LoginForm.4664c24a.js";import f from"./ForgetPasswordForm.f37262f2.js";import g from"./RegisterForm.339cda2f.js";import u from"./MobileForm.f73a073b.js";import w from"./QrCodeForm.83b5ad99.js";import{_ as j}from"./login-box-bg.c2dcc900.js";import"./vendor.afa0338c.js";import"./index.f13bd8f2.js";import"./index.e30f5a01.js";import"./index.b3d9092c.js";import"./responsiveObserve.c545f1cc.js";import"./index.7eded0d0.js";import"./index.7e4c8de3.js";import"./_baseIteratee.5251d185.js";import"./get.f95e9d6a.js";import"./LoginFormTitle.2072cd0e.js";import"./GithubFilled.710ed4f3.js";import"./WechatFilled.96abb322.js";import"./CountdownInput.c2e7282d.js";import"./index.6e40d43d.js";import"./index.6a255ac7.js";import"./download.cfd516ab.js";var h=e({name:"Login",components:{AppLogo:o,LoginForm:c,ForgetPasswordForm:f,RegisterForm:g,MobileForm:u,QrCodeForm:w,AppLocalePicker:t},setup(){const e=s(),{prefixCls:o}=r("login"),{t:t}=l();return{t:t,prefixCls:o,title:i((()=>{var o;return null!=(o=null==e?void 0:e.title)?o:""})),showLocale:a.getShowPicker}}});const F={class:"-enter-x xl:hidden"},b={class:"container relative h-full py-2 mx-auto sm:px-10"},v={class:"flex h-full"},y={class:"hidden xl:flex xl:flex-col xl:w-6/12 min-h-full mr-4 pl-4"},L={class:"my-auto"},C={class:"mt-10 font-medium text-white -enter-x"},k={class:"mt-4 text-3xl inline-block"},P={class:"mt-5 text-md text-white font-normal dark:text-gray-500 -enter-x"},A={class:"h-full xl:h-auto flex py-5 xl:py-0 xl:my-0 w-full xl:w-6/12"},I={class:"my-auto mx-auto xl:ml-20 bg-white xl:bg-transparent px-5 py-8 sm:px-8 xl:p-0 rounded-md shadow-md xl:shadow-none w-full sm:w-3/4 lg:w-2/4 xl:w-auto enter-x relative"};h.render=function(e,o,t,s,r,l){const i=m("AppLocalePicker"),a=m("AppLogo"),c=m("LoginForm"),f=m("ForgetPasswordForm"),g=m("RegisterForm"),u=m("MobileForm"),w=m("QrCodeForm");return n(),d("div",{class:[e.prefixCls,"relative w-full h-full px-4"]},[p(i,{class:"absolute top-4 right-4 enter-x text-white xl:text-gray-600",showText:!1}),p("span",F,[p(a,{alwaysShowTitle:!0})]),p("div",b,[p("div",v,[p("div",y,[p(a,{class:"-enter-x"}),p("div",L,[p("img",{alt:e.title,src:j,class:"w-1/2 -mt-16 -enter-x"},null,8,["alt"]),p("div",C,[p("span",k,x(e.t("sys.login.signInTitle")),1)]),p("div",P,x(e.t("sys.login.signInDesc")),1)])]),p("div",A,[p("div",I,[p(c),p(f),p(g),p(u),p(w)])])])])],2)};export default h;
