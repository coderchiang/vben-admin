var e=Object.defineProperty,r=Object.prototype.hasOwnProperty,t=Object.getOwnPropertySymbols,a=Object.prototype.propertyIsEnumerable,n=(r,t,a)=>t in r?e(r,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):r[t]=a;import{O as o,bd as l,w as i}from"./index.2e7996b3.js";function c(e,c){return{initSortable:function(){o((()=>{return o=this,u=null,s=function*(){e&&(yield l((()=>__import__("./sortable.esm.c87c7eb9.js")),void 0)).default.create(i(e),((e,o)=>{for(var l in o||(o={}))r.call(o,l)&&n(e,l,o[l]);if(t)for(var l of t(o))a.call(o,l)&&n(e,l,o[l]);return e})({animation:500,delay:400,delayOnTouchOnly:!0},c))},new Promise(((e,r)=>{var t=e=>{try{n(s.next(e))}catch(t){r(t)}},a=e=>{try{n(s.throw(e))}catch(t){r(t)}},n=r=>r.done?e(r.value):Promise.resolve(r.value).then(t,a);n((s=s.apply(o,u)).next())}));var o,u,s}))}}}export{c as u};
