import{_ as e,u as a,a as o,L as s,b as t}from"./LoginFormTitle.2072cd0e.js";import{e as l,B as r,I as n,j as i,q as m,s as d,k as c,w as u,r as p,o as f,m as g,n as h,D as v,E as w,p as y,F as x,G as b}from"./index.2e7996b3.js";import{C as k}from"./index.f13bd8f2.js";import{F as D}from"./index.7e4c8de3.js";import"./index.b3d9092c.js";import{_ as F}from"./index.6e40d43d.js";import{_ as I}from"./CountdownInput.c2e7282d.js";import"./vendor.afa0338c.js";import"./_baseIteratee.5251d185.js";import"./get.f95e9d6a.js";import"./responsiveObserve.c545f1cc.js";var _=l({name:"RegisterPasswordForm",components:{Button:r,Form:D,FormItem:D.Item,Input:n,InputPassword:n.Password,Checkbox:k,StrengthMeter:F,CountdownInput:I,LoginFormTitle:e},setup(){const{t:e}=i(),{handleBackLogin:l,getLoginState:r}=a(),n=m(null),p=m(!1),f=d({account:"",password:"",confirmPassword:"",mobile:"",sms:"",policy:!1}),{getFormRules:g}=o(f),{validForm:h}=t(n);return{t:e,formRef:n,formData:f,getFormRules:g,handleRegister:function(){return e=this,a=null,o=function*(){yield h()},new Promise(((s,t)=>{var l=e=>{try{n(o.next(e))}catch(a){t(a)}},r=e=>{try{n(o.throw(e))}catch(a){t(a)}},n=e=>e.done?s(e.value):Promise.resolve(e.value).then(l,r);n((o=o.apply(e,a)).next())}));var e,a,o},loading:p,handleBackLogin:l,getShow:c((()=>u(r)===s.REGISTER))}}});_.render=function(e,a,o,s,t,l){const r=p("LoginFormTitle"),n=p("Input"),i=p("FormItem"),m=p("CountdownInput"),d=p("StrengthMeter"),c=p("InputPassword"),u=p("Checkbox"),k=p("Button"),D=p("Form");return e.getShow?(f(),g(x,{key:0},[h(r,{class:"enter-x"}),h(D,{class:"p-4 enter-x",model:e.formData,rules:e.getFormRules,ref:"formRef"},{default:v((()=>[h(i,{name:"account",class:"enter-x"},{default:v((()=>[h(n,{size:"large",value:e.formData.account,"onUpdate:value":a[1]||(a[1]=a=>e.formData.account=a),placeholder:e.t("sys.login.userName")},null,8,["value","placeholder"])])),_:1}),h(i,{name:"mobile",class:"enter-x"},{default:v((()=>[h(n,{size:"large",value:e.formData.mobile,"onUpdate:value":a[2]||(a[2]=a=>e.formData.mobile=a),placeholder:e.t("sys.login.mobile")},null,8,["value","placeholder"])])),_:1}),h(i,{name:"sms",class:"enter-x"},{default:v((()=>[h(m,{size:"large",value:e.formData.sms,"onUpdate:value":a[3]||(a[3]=a=>e.formData.sms=a),placeholder:e.t("sys.login.smsCode")},null,8,["value","placeholder"])])),_:1}),h(i,{name:"password",class:"enter-x"},{default:v((()=>[h(d,{size:"large",value:e.formData.password,"onUpdate:value":a[4]||(a[4]=a=>e.formData.password=a),placeholder:e.t("sys.login.password")},null,8,["value","placeholder"])])),_:1}),h(i,{name:"confirmPassword",class:"enter-x"},{default:v((()=>[h(c,{size:"large",visibilityToggle:"",value:e.formData.confirmPassword,"onUpdate:value":a[5]||(a[5]=a=>e.formData.confirmPassword=a),placeholder:e.t("sys.login.confirmPassword")},null,8,["value","placeholder"])])),_:1}),h(i,{class:"enter-x",name:"policy"},{default:v((()=>[h(u,{checked:e.formData.policy,"onUpdate:checked":a[6]||(a[6]=a=>e.formData.policy=a),size:"small"},{default:v((()=>[w(y(e.t("sys.login.policy")),1)])),_:1},8,["checked"])])),_:1}),h(k,{type:"primary",class:"enter-x",size:"large",block:"",onClick:e.handleRegister,loading:e.loading},{default:v((()=>[w(y(e.t("sys.login.registerButton")),1)])),_:1},8,["onClick","loading"]),h(k,{size:"large",block:"",class:"enter-x mt-4",onClick:e.handleBackLogin},{default:v((()=>[w(y(e.t("sys.login.backSignIn")),1)])),_:1},8,["onClick"])])),_:1},8,["model","rules"])],64)):b("",!0)};export default _;
