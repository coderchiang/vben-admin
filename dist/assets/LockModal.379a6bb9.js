import{e,j as s,g as r,k as o,y as t,dD as a,r as i,o as n,m as d,G as l,n as c,p as m,H as p,q as u}from"./index.c68bc564.js";import{_ as f,b as j}from"./useModal.4bd2816f.js";import{h,i as x}from"./useForm.6c7201a5.js";import{h as b}from"./header.d801b988.js";import"./vendor.afa0338c.js";import"./useWindowSizeFn.10e7e01b.js";import"./FullscreenOutlined.16be4464.js";import"./index.a859909a.js";import"./index.b8a50e18.js";import"./responsiveObserve.c545f1cc.js";import"./_baseIteratee.d3c102c9.js";import"./get.402f11ff.js";import"./index.65ee3376.js";import"./RedoOutlined.d9910eb1.js";import"./index.dd7322b1.js";import"./index.39f227bd.js";import"./index.53dfa4c0.js";import"./UpOutlined.b9c4ece0.js";import"./index.2dba30f1.js";import"./Tree.885e3dd6.js";import"./CountdownInput.2f2513e7.js";import"./index.d0c7b499.js";import"./download.1bc3c751.js";import"./index.548c3b67.js";var g=e({name:"LockModal",components:{BasicModal:f,BasicForm:h},setup(){const{t:e}=s(),{prefixCls:i}=r("header-lock-modal"),n=o((()=>{var e;return null==(e=t.getUserInfoState)?void 0:e.realName})),[d,{closeModal:l}]=j(),[c,{validateFields:m,resetFields:p}]=x({showActionButtonGroup:!1,schemas:[{field:"password",label:e("layout.header.lockScreenPassword"),component:"InputPassword",required:!0}]});return{t:e,prefixCls:i,getRealName:n,register:d,registerForm:c,handleLock:function(){return e=this,s=null,r=function*(){const e=(yield m()).password;l(),a.commitLockInfoState({isLock:!0,pwd:e}),yield p()},new Promise(((o,t)=>{var a=e=>{try{n(r.next(e))}catch(s){t(s)}},i=e=>{try{n(r.throw(e))}catch(s){t(s)}},n=e=>e.done?o(e.value):Promise.resolve(e.value).then(a,i);n((r=r.apply(e,s)).next())}));var e,s,r},headerImg:b}}});g.render=function(e,s,r,o,t,a){const f=i("BasicForm"),j=i("a-button"),h=i("BasicModal");return n(),d(h,u({footer:null,title:e.t("layout.header.lockScreen")},e.$attrs,{class:e.prefixCls,onRegister:e.register}),{default:l((()=>[c("div",{class:`${e.prefixCls}__entry`},[c("div",{class:`${e.prefixCls}__header`},[c("img",{src:e.headerImg,class:`${e.prefixCls}__header-img`},null,10,["src"]),c("p",{class:`${e.prefixCls}__header-name`},m(e.getRealName),3)],2),c(f,{onRegister:e.registerForm},null,8,["onRegister"]),c("div",{class:`${e.prefixCls}__footer`},[c(j,{type:"primary",block:"",class:"mt-2",onClick:e.handleLock},{default:l((()=>[p(m(e.t("layout.header.lockScreenBtn")),1)])),_:1},8,["onClick"])],2)],2)])),_:1},16,["title","class","onRegister"])};export default g;
