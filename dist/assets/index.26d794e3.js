import{_ as e}from"./PageWrapper.eee1a02a.js";import{h as s,i as r}from"./useForm.6c7201a5.js";import{e as t,y as o,dR as i,bw as a,aN as n,r as d,o as p,m as l,G as c,n as m,H as u}from"./index.c68bc564.js";import"./usePageContext.9fd1490a.js";import"./index.d57a0f37.js";import"./index.f8ec02a1.js";import"./onMountedOrActivated.1b5c6f87.js";import"./ArrowLeftOutlined.0fae5924.js";import"./index.a859909a.js";import"./index.b8a50e18.js";import"./responsiveObserve.c545f1cc.js";import"./vendor.afa0338c.js";import"./_baseIteratee.d3c102c9.js";import"./get.402f11ff.js";import"./index.65ee3376.js";import"./RedoOutlined.d9910eb1.js";import"./index.dd7322b1.js";import"./index.39f227bd.js";import"./index.53dfa4c0.js";import"./UpOutlined.b9c4ece0.js";import"./index.2dba30f1.js";import"./Tree.885e3dd6.js";import"./CountdownInput.2f2513e7.js";import"./useModal.4bd2816f.js";import"./useWindowSizeFn.10e7e01b.js";import"./FullscreenOutlined.16be4464.js";import"./index.d0c7b499.js";import"./download.1bc3c751.js";import"./index.548c3b67.js";const f=[{field:"passwordOld",label:"当前密码",component:"InputPassword",required:!0},{field:"passwordNew",label:"新密码",component:"StrengthMeter",componentProps:{placeholder:"新密码"},rules:[{required:!0,message:"请输入新密码"}]},{field:"confirmPassword",label:"确认密码",component:"InputPassword",dynamicRules:({values:e})=>[{required:!0,validator:(s,r)=>r?r!==e.passwordNew?Promise.reject("两次输入的密码不一致!"):Promise.resolve():Promise.reject("不能为空")}]}];var j=t({name:"ChangePassword",components:{BasicForm:s,PageWrapper:e},setup(){const[e,{validate:s,resetFields:t}]=r({size:"large",labelWidth:100,showActionButtonGroup:!1,schemas:f});return{register:e,resetFields:t,handleSubmit:function(){return e=this,r=null,t=function*(){try{const e=yield s(),{username:r}=o.getUserInfoState||{},{passwordOld:t,passwordNew:d}=e,p={username:r,pwd:t,new_pwd:d};(yield i(p))&&a.push(n.BASE_LOGIN)}catch(e){}},new Promise(((s,o)=>{var i=e=>{try{n(t.next(e))}catch(s){o(s)}},a=e=>{try{n(t.throw(e))}catch(s){o(s)}},n=e=>e.done?s(e.value):Promise.resolve(e.value).then(i,a);n((t=t.apply(e,r)).next())}));var e,r,t}}}});const b={class:"py-8 bg-white flex flex-col justify-center items-center"},w={class:"flex justify-center"},x=u(" 重置 "),h=u(" 确认 ");j.render=function(e,s,r,t,o,i){const a=d("BasicForm"),n=d("a-button"),u=d("PageWrapper");return p(),l(u,{title:"修改当前用户密码",content:"修改成功后会自动退出当前登录！"},{default:c((()=>[m("div",b,[m(a,{onRegister:e.register},null,8,["onRegister"]),m("div",w,[m(n,{onClick:e.resetFields},{default:c((()=>[x])),_:1},8,["onClick"]),m(n,{class:"ml-4",type:"primary",onClick:e.handleSubmit},{default:c((()=>[h])),_:1},8,["onClick"])])])])),_:1})};export default j;
