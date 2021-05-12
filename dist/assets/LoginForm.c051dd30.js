import{e,B as s,I as t,j as a,g as l,q as o,s as i,v as n,k as r,w as d,K as m,x as c,y as u,z as g,r as f,o as p,m as x,A as y,C as F,n as h,D as v,E as S,p as _,F as C}from"./index.a6116d7f.js";import{C as b}from"./index.810c129c.js";import{C as w,R as L}from"./index.b1ea4fd1.js";import{D as k}from"./index.80fea805.js";import{F as j}from"./index.8ff9a7b3.js";import"./index.2466dd13.js";import{_ as I,u as E,a as D,L as R,b as T}from"./LoginFormTitle.c930d425.js";import{G}from"./GithubFilled.9020a488.js";import{W as A,A as P,G as z,T as B}from"./WechatFilled.6bed2ec1.js";import"./vendor.afa0338c.js";import"./_baseIteratee.3f361c9f.js";import"./get.2496f28f.js";import"./responsiveObserve.c545f1cc.js";var M=e({name:"LoginForm",components:{[w.name]:w,[L.name]:L,Checkbox:b,Button:s,Form:j,FormItem:j.Item,Input:t,Divider:k,LoginFormTitle:I,InputPassword:t.Password,GithubFilled:G,WechatFilled:A,AlipayCircleFilled:P,GoogleCircleFilled:z,TwitterCircleFilled:B},setup(){const{t:e}=a(),{notification:s}=g(),{prefixCls:t}=l("login"),{setLoginState:f,getLoginState:p}=E(),{getFormRules:x}=D(),y=o(null),F=o(!1),h=o(!1),v=i({account:"guest",password:"123456"}),{validForm:S}=T(y);n(["enter"],(e=>{e.keyCode===m.ENTER&&C()}));const _=r((()=>d(p)===R.LOGIN));function C(){return t=this,a=null,l=function*(){const t=yield S();if(t)try{F.value=!0;const a=yield c.login(u({password:t.password,username:t.account}));a&&s.success({message:e("sys.login.loginSuccessTitle"),description:`${e("sys.login.loginSuccessDesc")}: ${a.username}`,duration:3})}finally{F.value=!1}},new Promise(((e,s)=>{var o=e=>{try{n(l.next(e))}catch(t){s(t)}},i=e=>{try{n(l.throw(e))}catch(t){s(t)}},n=s=>s.done?e(s.value):Promise.resolve(s.value).then(o,i);n((l=l.apply(t,a)).next())}));var t,a,l}return{t:e,prefixCls:t,formRef:y,formData:v,getFormRules:x,rememberMe:h,handleLogin:C,loading:F,setLoginState:f,LoginStateEnum:R,getShow:_}}});M.render=function(e,s,t,a,l,o){const i=f("LoginFormTitle"),n=f("Input"),r=f("FormItem"),d=f("InputPassword"),m=f("Checkbox"),c=f("ACol"),u=f("Button"),g=f("ARow"),b=f("Divider"),w=f("GithubFilled"),L=f("WechatFilled"),k=f("AlipayCircleFilled"),j=f("GoogleCircleFilled"),I=f("TwitterCircleFilled"),E=f("Form");return p(),x(C,null,[y(h(i,{class:"enter-x"},null,512),[[F,e.getShow]]),y(h(E,{class:"p-4 enter-x",model:e.formData,rules:e.getFormRules,ref:"formRef"},{default:v((()=>[h(r,{name:"account",class:"enter-x"},{default:v((()=>[h(n,{size:"large",value:e.formData.account,"onUpdate:value":s[1]||(s[1]=s=>e.formData.account=s),placeholder:e.t("sys.login.userName")},null,8,["value","placeholder"])])),_:1}),h(r,{name:"password",class:"enter-x"},{default:v((()=>[h(d,{size:"large",visibilityToggle:"",value:e.formData.password,"onUpdate:value":s[2]||(s[2]=s=>e.formData.password=s),placeholder:e.t("sys.login.password")},null,8,["value","placeholder"])])),_:1}),h(g,{class:"enter-x"},{default:v((()=>[h(c,{span:12},{default:v((()=>[h(r,null,{default:v((()=>[h(m,{checked:e.rememberMe,"onUpdate:checked":s[3]||(s[3]=s=>e.rememberMe=s),size:"small"},{default:v((()=>[S(_(e.t("sys.login.rememberMe")),1)])),_:1},8,["checked"])])),_:1})])),_:1}),h(c,{span:12},{default:v((()=>[h(r,{style:{"text-align":"right"}},{default:v((()=>[h(u,{type:"link",size:"small",onClick:s[4]||(s[4]=s=>e.setLoginState(e.LoginStateEnum.RESET_PASSWORD))},{default:v((()=>[S(_(e.t("sys.login.forgetPassword")),1)])),_:1})])),_:1})])),_:1})])),_:1}),h(r,{class:"enter-x"},{default:v((()=>[h(u,{type:"primary",size:"large",block:"",onClick:e.handleLogin,loading:e.loading},{default:v((()=>[S(_(e.t("sys.login.loginButton")),1)])),_:1},8,["onClick","loading"])])),_:1}),h(g,{class:"enter-x"},{default:v((()=>[h(c,{xs:24,md:8},{default:v((()=>[h(u,{block:"",onClick:s[5]||(s[5]=s=>e.setLoginState(e.LoginStateEnum.MOBILE))},{default:v((()=>[S(_(e.t("sys.login.mobileSignInFormTitle")),1)])),_:1})])),_:1}),h(c,{md:8,xs:24,class:"xs:my-2 md:my-0 xs:mx-0 md:mx-2"},{default:v((()=>[h(u,{block:"",onClick:s[6]||(s[6]=s=>e.setLoginState(e.LoginStateEnum.QR_CODE))},{default:v((()=>[S(_(e.t("sys.login.qrSignInFormTitle")),1)])),_:1})])),_:1}),h(c,{md:7,xs:24},{default:v((()=>[h(u,{block:"",onClick:s[7]||(s[7]=s=>e.setLoginState(e.LoginStateEnum.REGISTER))},{default:v((()=>[S(_(e.t("sys.login.registerButton")),1)])),_:1})])),_:1})])),_:1}),h(b,{class:"enter-x"},{default:v((()=>[S(_(e.t("sys.login.otherSignIn")),1)])),_:1}),h("div",{class:["flex justify-evenly enter-x",`${e.prefixCls}-sign-in-way`]},[h(w),h(L),h(k),h(j),h(I)],2)])),_:1},8,["model","rules"]),[[F,e.getShow]])],64)};export default M;