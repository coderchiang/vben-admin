import{e,L as t,bQ as n,n as r,ak as o,O as i,cj as s}from"./index.2e7996b3.js";function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function u(){return(u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var f={border:0,background:"transparent",padding:0,lineHeight:"inherit",display:"inline-block"},p=e({name:"TransButton",inheritAttrs:!1,props:{noStyle:t.looseBool,onClick:t.func},methods:{onKeyDown:function(e){e.keyCode===n.ENTER&&e.preventDefault()},onKeyUp:function(e){e.keyCode===n.ENTER&&this.$emit("click",e)},setRef:function(e){this.$refs.div=e},focus:function(){this.$refs.div&&this.$refs.div.focus()},blur:function(){this.$refs.div&&this.$refs.div.blur()}},render:function(){var e,t,n=this.$props,o=n.noStyle,i=n.onClick;return r("div",a(a({role:"button",tabindex:0,ref:"div"},this.$attrs),{},{onClick:i,onKeydown:this.onKeyDown,onKeyup:this.onKeyUp,style:u({},o?null:f)}),[null===(t=(e=this.$slots).default)||void 0===t?void 0:t.call(e)])}});function b(e){let t;o((()=>{e(),i((()=>{t=!0}))})),s((()=>{t&&e()}))}export{p as T,b as o};
