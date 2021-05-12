import{as as a,e as t,s as l,ak as n,k as r,au as e,w as i,cT as s,bm as o,o as u,m as c,p}from"./index.2e7996b3.js";import"./vendor.afa0338c.js";var m=t({name:"CountTo",props:{startVal:a.number.def(0),endVal:a.number.def(2020),duration:a.number.def(1300),autoplay:a.bool.def(!0),decimals:{type:Number,required:!1,default:0,validator:a=>a>=0},decimal:a.string.def("."),separator:a.string.def(","),prefix:a.string.def(""),suffix:a.string.def(""),useEasing:a.bool.def(!0),easingFn:{type:Function,default:(a,t,l,n)=>l*(1-Math.pow(2,-10*a/n))*1024/1023+t}},emits:["mounted","callback"],setup(a,{emit:t}){const u=l({localStartVal:a.startVal,displayValue:V(a.startVal),printVal:null,paused:!1,localDuration:a.duration,startTime:null,timestamp:null,remaining:null,rAF:null});n((()=>{a.autoplay&&p(),t("mounted")}));const c=r((()=>a.startVal>a.endVal));function p(){const{startVal:t,duration:l}=a;u.localStartVal=t,u.startTime=null,u.localDuration=l,u.paused=!1,u.rAF=requestAnimationFrame(d)}function m(){u.startTime=null,u.localDuration=+u.remaining,u.localStartVal=+u.printVal,requestAnimationFrame(d)}function d(l){const{useEasing:n,easingFn:r,endVal:e}=a;u.startTime||(u.startTime=l),u.timestamp=l;const s=l-u.startTime;u.remaining=u.localDuration-s,n?i(c)?u.printVal=u.localStartVal-r(s,0,u.localStartVal-e,u.localDuration):u.printVal=r(s,u.localStartVal,e-u.localStartVal,u.localDuration):i(c)?u.printVal=u.localStartVal-(u.localStartVal-e)*(s/u.localDuration):u.printVal=u.localStartVal+(e-u.localStartVal)*(s/u.localDuration),i(c)?u.printVal=u.printVal<e?e:u.printVal:u.printVal=u.printVal>e?e:u.printVal,u.displayValue=V(u.printVal),s<u.localDuration?u.rAF=requestAnimationFrame(d):t("callback")}function V(t){const{decimals:l,decimal:n,separator:r,suffix:e,prefix:i}=a;t=Number(t).toFixed(l);const o=(t+="").split(".");let u=o[0];const c=o.length>1?n+o[1]:"",p=/(\d+)(\d{3})/;if(r&&!s(r))for(;p.test(u);)u=u.replace(p,"$1"+r+"$2");return i+u+c+e}return e([()=>a.startVal,()=>a.endVal],(()=>{a.autoplay&&p()})),{count:d,reset:function(){u.startTime=null,cancelAnimationFrame(u.rAF),u.displayValue=V(a.startVal)},resume:m,start:p,pauseResume:function(){u.paused?(m(),u.paused=!1):(cancelAnimationFrame(u.rAF),u.paused=!0)},displayValue:o(u,"displayValue")}}});m.render=function(a,t,l,n,r,e){return u(),c("span",null,p(a.displayValue),1)};export default m;
