import{n as t,q as e,I as n,S as r,bQ as a,a0 as i,af as o,e as s,Q as c,x as l,N as f,a1 as u,ai as p,bV as d,Y as b,ac as h,bW as v,bX as y,bY as g,aj as m,aS as O,bZ as P,aR as x,T,Z as w,ad as B,W as j,b_ as C,bT as S}from"./index.9463653b.js";import{U as k}from"./UpOutlined.89a9da87.js";var $={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"defs",attrs:{},children:[{tag:"style",attrs:{}}]},{tag:"path",attrs:{d:"M482 152h60q8 0 8 8v704q0 8-8 8h-60q-8 0-8-8V160q0-8 8-8z"}},{tag:"path",attrs:{d:"M176 474h672q8 0 8 8v60q0 8-8 8H176q-8 0-8-8v-60q0-8 8-8z"}}]},name:"plus",theme:"outlined"};function R(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var K=function(r,a){var i=function(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?Object(arguments[e]):{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable})))),r.forEach((function(e){R(t,e,n[e])}))}return t}({},r,a.attrs);return t(n,e(i,{icon:$}),null)};K.displayName="PlusOutlined",K.inheritAttrs=!1;var E=37,A=38,N=39,W=40,D={width:0,height:0,overflow:"hidden",position:"absolute"},_={name:"Sentinel",props:{setRef:r.func,prevElement:r.any,nextElement:r.any},methods:{onKeyDown:function(t){var e=t.target,n=t.which,r=t.shiftKey,i=this.$props,o=i.nextElement,s=i.prevElement;n===a.TAB&&document.activeElement===e&&(!r&&o&&o.focus(),r&&s&&s.focus())}},render:function(){var e=this.$props.setRef;return t("div",{tabindex:0,ref:e,style:D,onKeydown:this.onKeyDown,role:"presentation"},[i(this)])}};function I(t,e){for(var n=function(t){var e=[];return t.forEach((function(t){o(t)&&e.push(t)})),e}(t),r=0;r<n.length;r++)if(n[r].key===e)return r;return-1}function z(t,e){t.transform=e,t.webkitTransform=e,t.mozTransform=e}function H(t){return("transform"in t||"webkitTransform"in t||"MozTransform"in t)&&window.atob}function q(t){return"left"===t||"right"===t}function F(t,e){var n,r,a,i=q(e)?"marginTop":"marginLeft";return n={},r=i,a="".concat(100*-t,"%"),r in n?Object.defineProperty(n,r,{value:a,enumerable:!0,configurable:!0,writable:!0}):n[r]=a,n}function M(t,e){return+window.getComputedStyle(t).getPropertyValue(e).replace("px","")}function G(t){return Object.keys(t).reduce((function(e,n){return"aria-"!==n.substr(0,5)&&"data-"!==n.substr(0,5)&&"role"!==n||(e[n]=t[n]),e}),{})}function L(t,e){return+t.getPropertyValue(e).replace("px","")}function U(t,e,n,r,a){var i=M(a,"padding-".concat(t));if(!r||!r.parentNode)return i;var o=r.parentNode.childNodes;return Array.prototype.some.call(o,(function(a){if(!a.tagName)return!1;var o=window.getComputedStyle(a);return a!==r?(i+=L(o,"margin-".concat(t)),i+=a[e],i+=L(o,"margin-".concat(n)),"content-box"===o.boxSizing&&(i+=L(o,"border-".concat(t,"-width"))+L(o,"border-".concat(n,"-width"))),!1):(i+=L(o,"margin-".concat(t)),!0)})),i}function V(){return(V=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}).apply(this,arguments)}function Z(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function Y(t){var e;return t.children.forEach((function(t){!t||d(e)||t.disabled||(e=t.key)})),e}var Q=s({name:"Tabs",mixins:[c],inheritAttrs:!1,props:{destroyInactiveTabPane:r.looseBool,renderTabBar:r.func.isRequired,renderTabContent:r.func.isRequired,navWrapper:r.func.def((function(t){return t})),children:r.any.def([]),prefixCls:r.string.def("ant-tabs"),tabBarPosition:r.string.def("top"),activeKey:r.oneOfType([r.string,r.number]),defaultActiveKey:r.oneOfType([r.string,r.number]),direction:r.string.def("ltr"),tabBarGutter:r.number},setup:function(t){var e;e=void 0!==t.activeKey?t.activeKey:void 0!==t.defaultActiveKey?t.defaultActiveKey:Y(t);var n=l({_activeKey:e});return f((function(){void 0!==t.activeKey?n._activeKey=t.activeKey:function(t,e){return t.children.map((function(t){return t&&t.key})).indexOf(e)>=0}(t,n._activeKey)||(n._activeKey=Y(t))}),{flush:"sync"}),{state:n}},created:function(){this.panelSentinelStart=void 0,this.panelSentinelEnd=void 0,this.sentinelStart=void 0,this.sentinelEnd=void 0,u("sentinelContext",this)},beforeUnmount:function(){this.destroy=!0,cancelAnimationFrame(this.sentinelId)},methods:{onTabClick:function(t,e){this.tabBar.props&&this.tabBar.props.onTabClick&&this.tabBar.props.onTabClick(t,e),this.setActiveKey(t)},onNavKeyDown:function(t){var e=t.keyCode;if(e===N||e===W){t.preventDefault();var n=this.getNextActiveKey(!0);this.onTabClick(n)}else if(e===E||e===A){t.preventDefault();var r=this.getNextActiveKey(!1);this.onTabClick(r)}},onScroll:function(t){var e=t.target;e===t.currentTarget&&e.scrollLeft>0&&(e.scrollLeft=0)},setSentinelStart:function(t){this.sentinelStart=t},setSentinelEnd:function(t){this.sentinelEnd=t},setPanelSentinelStart:function(t){t!==this.panelSentinelStart&&this.updateSentinelContext(),this.panelSentinelStart=t},setPanelSentinelEnd:function(t){t!==this.panelSentinelEnd&&this.updateSentinelContext(),this.panelSentinelEnd=t},setActiveKey:function(t){this.state._activeKey!==t&&(void 0===this.$props.activeKey&&(this.state._activeKey=t),this.__emit("update:activeKey",t),this.__emit("change",t))},getNextActiveKey:function(t){var e=this.state._activeKey,n=[];this.$props.children.forEach((function(e){var r,a;e&&!(null===(r=e.props)||void 0===r?void 0:r.disabled)&&""!==(null===(a=e.props)||void 0===a?void 0:a.disabled)&&(t?n.push(e):n.unshift(e))}));var r=n.length,a=r&&n[0].key;return n.forEach((function(t,i){t.key===e&&(a=i===r-1?n[0].key:n[i+1].key)})),a},updateSentinelContext:function(){var t=this;this.destroy||(cancelAnimationFrame(this.sentinelId),this.sentinelId=requestAnimationFrame((function(){t.destroy||t.$forceUpdate()})))}},render:function(){var e,n=this.$props,r=n.prefixCls,a=n.navWrapper,i=n.tabBarPosition,o=n.renderTabContent,s=n.renderTabBar,c=n.destroyInactiveTabPane,l=n.direction,f=n.tabBarGutter,u=this.$attrs,d=u.class;u.onChange;var b=u.style,h=function(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(t);a<r.length;a++)e.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(t,r[a])&&(n[r[a]]=t[r[a]])}return n}(u,["class","onChange","style"]),v=(Z(e={},d,d),Z(e,r,1),Z(e,"".concat(r,"-").concat(i),1),Z(e,"".concat(r,"-rtl"),"rtl"===l),e);this.tabBar=s();var y=p(this.tabBar,{prefixCls:r,navWrapper:a,tabBarPosition:i,panels:n.children,activeKey:this.state._activeKey,direction:l,tabBarGutter:f,onKeydown:this.onNavKeyDown,onTabClick:this.onTabClick,key:"tabBar"}),g=p(o(),{prefixCls:r,tabBarPosition:i,activeKey:this.state._activeKey,destroyInactiveTabPane:c,direction:l,onChange:this.setActiveKey,children:n.children,key:"tabContent"}),m=t(_,{key:"sentinelStart",setRef:this.setSentinelStart,nextElement:this.panelSentinelStart},null),O=t(_,{key:"sentinelEnd",setRef:this.setSentinelEnd,prevElement:this.panelSentinelEnd},null),P=[];"bottom"===i?P.push(m,g,O,y):P.push(y,m,g,O);var x=V(V({},G(h)),{style:b,onScroll:this.onScroll,class:v});return t("div",x,[P])}});function X(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var J=s({name:"TabPane",props:{active:r.looseBool,destroyInactiveTabPane:r.looseBool,forceRender:r.looseBool,placeholder:r.any,rootPrefixCls:r.string,tab:r.any,closable:r.looseBool,disabled:r.looseBool},setup:function(){return{isActived:void 0,sentinelContext:b("sentinelContext",{})}},render:function(){var e,n=this.$props,r=n.destroyInactiveTabPane,a=n.active,o=n.forceRender,s=n.rootPrefixCls,c=i(this),l=h(this,"placeholder");this.isActived=this.isActived||a;var f,u,p="".concat(s,"-tabpane"),d=(X(e={},p,1),X(e,"".concat(p,"-inactive"),!a),X(e,"".concat(p,"-active"),a),e),b=(r?a:this.isActived)||o,v=this.sentinelContext,y=v.sentinelStart,g=v.sentinelEnd,m=v.setPanelSentinelStart,O=v.setPanelSentinelEnd;return a&&b&&(f=t(_,{setRef:m,prevElement:y},null),u=t(_,{setRef:O,nextElement:g},null)),t("div",{class:d,role:"tabpanel","aria-hidden":a?"false":"true"},[f,b?c:l,u])}});function tt(){return(tt=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}).apply(this,arguments)}function et(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var nt=s({name:"TabContent",inheritAttrs:!1,props:{animated:r.looseBool.def(!0),animatedWithMargin:r.looseBool.def(!0),prefixCls:r.string.def("ant-tabs"),activeKey:r.oneOfType([r.string,r.number]),tabBarPosition:r.string,direction:r.string,destroyInactiveTabPane:r.looseBool,children:r.any},computed:{classes:function(){var t,e=this.animated,n=this.prefixCls,r=this.$attrs.class;return et(t={},r,!!r),et(t,"".concat(n,"-content"),!0),et(t,"".concat(n,e?"-content-animated":"-content-no-animated"),!0),t}},methods:{getTabPanes:function(t){var e=this.$props,n=e.activeKey,r=[];return t.forEach((function(t){if(t){var a=t.key,i=n===a;r.push(p(t,{active:i,destroyInactiveTabPane:e.destroyInactiveTabPane,rootPrefixCls:e.prefixCls}))}})),r}},render:function(){var e,n=this.activeKey,r=this.tabBarPosition,a=this.animated,i=this.animatedWithMargin,o=this.direction,s=this.classes,c=this.children,l={};if(a&&c){var f=I(c,n);if(-1!==f){var u=i?F(f,r):{transform:e=function(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"ltr",r=q(e)?"translateY":"translateX";return q(e)||"rtl"!==n?"".concat(r,"(").concat(100*-t,"%) translateZ(0)"):"".concat(r,"(").concat(100*t,"%) translateZ(0)")}(f,r,o),WebkitTransform:e,MozTransform:e};l=tt(tt({},this.$attrs.style),u)}else l=tt(tt({},this.$attrs.style),{display:"none"})}return t("div",{class:s,style:l},[this.getTabPanes(c||[])])}}),rt=function(t){if("undefined"!=typeof window&&window.document&&window.document.documentElement){var e=Array.isArray(t)?t:[t],n=window.document.documentElement;return e.some((function(t){return t in n.style}))}return!1}(["flex","webkitFlex","Flex","msFlex"]);function at(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function it(t,e){var n=t.$props,r=n.styles,a=void 0===r?{}:r,i=n.panels,o=n.activeKey,s=n.direction,c=t.getRef("root"),l=t.getRef("nav")||c,f=t.getRef("inkBar"),u=t.getRef("activeTab"),p=f.style,d=t.$props.tabBarPosition,b=I(i,o);if(e&&(p.display="none"),u){var h=u,v=H(p);if(z(p,""),p.width="",p.height="",p.left="",p.top="",p.bottom="",p.right="","top"===d||"bottom"===d){var y=function(t,e){return U("left","offsetWidth","right",t,e)}(h,l),g=h.offsetWidth;g===c.offsetWidth?g=0:a.inkBar&&void 0!==a.inkBar.width&&(g=parseFloat(a.inkBar.width,10))&&(y+=(h.offsetWidth-g)/2),"rtl"===s&&(y=M(h,"margin-left")-y),v?z(p,"translate3d(".concat(y,"px,0,0)")):p.left="".concat(y,"px"),p.width="".concat(g,"px")}else{var m=function(t,e){return U("top","offsetHeight","bottom",t,e)}(h,l),O=h.offsetHeight;a.inkBar&&void 0!==a.inkBar.height&&(O=parseFloat(a.inkBar.height,10))&&(m+=(h.offsetHeight-O)/2),v?(z(p,"translate3d(0,".concat(m,"px,0)")),p.top="0"):p.top="".concat(m,"px"),p.height="".concat(O,"px")}}p.display=-1!==b?"block":"none"}var ot={name:"InkTabBarNode",mixins:[c],inheritAttrs:!1,props:{inkBarAnimated:{type:Boolean,default:!0},direction:r.string,prefixCls:String,styles:Object,tabBarPosition:String,saveRef:r.func.def((function(){})),getRef:r.func.def((function(){})),panels:r.array,activeKey:r.oneOfType([r.string,r.number])},updated:function(){var t=this;this.$nextTick((function(){it(t)}))},mounted:function(){var t=this;this.$nextTick((function(){it(t,!0)}))},render:function(){var e,n=this.prefixCls,r=this.styles,a=void 0===r?{}:r,i=this.inkBarAnimated,o="".concat(n,"-ink-bar"),s=(at(e={},o,!0),at(e,"".concat(o,i?"-animated":"-no-animated"),!0),e);return t("div",{style:a.inkBar,class:s,key:"inkBar",ref:this.saveRef("inkBar")},null)}};function st(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function ct(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?st(Object(n),!0).forEach((function(e){lt(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):st(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function lt(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function ft(){}var ut={name:"TabBarTabsNode",mixins:[c],inheritAttrs:!1,props:{activeKey:r.oneOfType([r.string,r.number]),panels:r.any.def([]),prefixCls:r.string.def(""),tabBarGutter:r.any.def(null),onTabClick:r.func,saveRef:r.func.def(ft),getRef:r.func.def(ft),renderTabBarNode:r.func,tabBarPosition:r.string,direction:r.string},render:function(){var e=this,n=this.$props,r=n.panels,a=n.activeKey,i=n.prefixCls,o=n.tabBarGutter,s=n.saveRef,c=n.tabBarPosition,l=n.direction,f=[],u=this.renderTabBarNode||this.$slots.renderTabBarNode;return r.forEach((function(n,p){if(n){var d=v(n),b=n.key,y=a===b?"".concat(i,"-tab-active"):"";y+=" ".concat(i,"-tab");var g={},m=d.disabled;m?y+=" ".concat(i,"-tab-disabled"):g.onClick=function(){e.__emit("tabClick",b)};var O=h(n,"tab"),P=o&&p===r.length-1?0:o;P="number"==typeof P?"".concat(P,"px"):P;var x="rtl"===l?"marginLeft":"marginRight",T=lt({},q(c)?"marginBottom":x,P),w=t("div",ct(ct({role:"tab","aria-disabled":m?"true":"false","aria-selected":a===b?"true":"false"},g),{},{class:y.trim(),key:b,style:T,ref:a===b?s("activeTab"):ft}),[O]);u&&(w=u(w)),f.push(w)}})),t("div",{ref:this.saveRef("navTabsContainer")},[f])}};function pt(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function dt(){return(dt=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}).apply(this,arguments)}function bt(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function ht(){}var vt={name:"TabBarRootNode",mixins:[c],inheritAttrs:!1,props:{saveRef:r.func.def(ht),getRef:r.func.def(ht),prefixCls:r.string.def(""),tabBarPosition:r.string.def("top"),extraContent:r.any},methods:{onKeyDown:function(t){this.__emit("keydown",t)}},render:function(){var e,n=this.prefixCls,r=this.onKeyDown,a=this.tabBarPosition,o=this.extraContent,s=this.$attrs,c=s.class,l=s.style;s.onKeydown;var f=function(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(t);a<r.length;a++)e.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(t,r[a])&&(n[r[a]]=t[r[a]])}return n}(s,["class","style","onKeydown"]),u=(bt(e={},"".concat(n,"-bar"),!0),bt(e,c,!!c),e),d="top"===a||"bottom"===a,b=d?{float:"right"}:{},h=i(this),v=h;return o&&(v=[p(o,{key:"extra",style:dt({},b)}),p(h,{key:"content"})],v=d?v:v.reverse()),t("div",function(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?pt(Object(n),!0).forEach((function(e){bt(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):pt(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}({role:"tablist",class:u,tabindex:"0",onKeydown:r,style:l,ref:this.saveRef("root")},G(f)),[v])}};function yt(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function gt(){return(gt=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}).apply(this,arguments)}var mt={name:"ScrollableTabBarNode",mixins:[c],inheritAttrs:!1,props:{activeKey:r.any,getRef:r.func.def((function(){})),saveRef:r.func.def((function(){})),tabBarPosition:r.oneOf(["left","right","top","bottom"]).def("left"),prefixCls:r.string.def(""),scrollAnimated:r.looseBool.def(!0),navWrapper:r.func.def((function(t){return t})),prevIcon:r.any,nextIcon:r.any,direction:r.string},data:function(){return this.offset=0,this.prevProps=gt({},this.$props),{next:!1,prev:!1}},watch:{tabBarPosition:function(){var t=this;this.tabBarPositionChange=!0,this.$nextTick((function(){t.setOffset(0)}))}},mounted:function(){var t=this;this.$nextTick((function(){t.updatedCal(),t.debouncedResize=y((function(){t.setNextPrev(),t.scrollToActiveTab()}),200),t.resizeObserver=new g(t.debouncedResize),t.resizeObserver.observe(t.$props.getRef("container"))}))},updated:function(){var t=this;this.$nextTick((function(){t.updatedCal(t.prevProps),t.prevProps=gt({},t.$props)}))},beforeUnmount:function(){this.resizeObserver&&this.resizeObserver.disconnect(),this.debouncedResize&&this.debouncedResize.cancel&&this.debouncedResize.cancel()},methods:{updatedCal:function(t){var e=this,n=this.$props;t&&t.tabBarPosition!==n.tabBarPosition?this.setOffset(0):this.isNextPrevShown(this.$data)!==this.isNextPrevShown(this.setNextPrev())?(this.$forceUpdate(),this.$nextTick((function(){e.scrollToActiveTab()}))):t&&n.activeKey===t.activeKey||this.scrollToActiveTab()},setNextPrev:function(){var t=this.$props.getRef("nav"),e=this.$props.getRef("navTabsContainer"),n=this.getScrollWH(e||t),r=this.getOffsetWH(this.$props.getRef("container"))+1,a=this.getOffsetWH(this.$props.getRef("navWrap")),i=this.offset,o=r-n,s=this.next,c=this.prev;if(o>=0)s=!1,this.setOffset(0,!1),i=0;else if(o<i)s=!0;else{s=!1;var l=a-n;this.setOffset(l,!1),i=l}return c=i<0,this.setNext(s),this.setPrev(c),{next:s,prev:c}},getOffsetWH:function(t){var e=this.$props.tabBarPosition,n="offsetWidth";return"left"!==e&&"right"!==e||(n="offsetHeight"),t[n]},getScrollWH:function(t){var e=this.tabBarPosition,n="scrollWidth";return"left"!==e&&"right"!==e||(n="scrollHeight"),t[n]},getOffsetLT:function(t){var e=this.$props.tabBarPosition,n="left";return"left"!==e&&"right"!==e||(n="top"),t.getBoundingClientRect()[n]},setOffset:function(t){var e=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],n=Math.min(0,t);if(this.offset!==n){this.offset=n;var r={},a=this.$props.tabBarPosition,i=this.$props.getRef("nav").style,o=H(i);"left"===a||"right"===a?r=o?{value:"translate3d(0,".concat(n,"px,0)")}:{name:"top",value:"".concat(n,"px")}:o?("rtl"===this.$props.direction&&(n=-n),r={value:"translate3d(".concat(n,"px,0,0)")}):r={name:"left",value:"".concat(n,"px")},o?z(i,r.value):i[r.name]=r.value,e&&this.setNextPrev()}},setPrev:function(t){this.prev!==t&&(this.prev=t)},setNext:function(t){this.next!==t&&(this.next=t)},isNextPrevShown:function(t){return t?t.next||t.prev:this.next||this.prev},prevTransitionEnd:function(t){if("opacity"===t.propertyName){var e=this.$props.getRef("container");this.scrollToActiveTab({target:e,currentTarget:e})}},scrollToActiveTab:function(t){var e=this.$props.getRef("activeTab"),n=this.$props.getRef("navWrap");if((!t||t.target===t.currentTarget)&&e){var r=this.isNextPrevShown()&&this.lastNextPrevShown;if(this.lastNextPrevShown=this.isNextPrevShown(),r){var a=this.getScrollWH(e),i=this.getOffsetWH(n),o=this.offset,s=this.getOffsetLT(n),c=this.getOffsetLT(e);s>c?(o+=s-c,this.setOffset(o)):s+i<c+a&&(o-=c+a-(s+i),this.setOffset(o))}}},prevClick:function(t){this.__emit("prevClick",t);var e=this.$props.getRef("navWrap"),n=this.getOffsetWH(e),r=this.offset;this.setOffset(r+n)},nextClick:function(t){this.__emit("nextClick",t);var e=this.$props.getRef("navWrap"),n=this.getOffsetWH(e),r=this.offset;this.setOffset(r-n)}},render:function(){var e,n,r,a,o=this.next,s=this.prev,c=this.$props,l=c.prefixCls,f=c.scrollAnimated,u=c.navWrapper,p=h(this,"prevIcon"),d=h(this,"nextIcon"),b=s||o,v=t("span",{onClick:s&&this.prevClick,unselectable:"unselectable",class:(e={},yt(e,"".concat(l,"-tab-prev"),1),yt(e,"".concat(l,"-tab-btn-disabled"),!s),yt(e,"".concat(l,"-tab-arrow-show"),b),e),onTransitionend:this.prevTransitionEnd},[p||t("span",{class:"".concat(l,"-tab-prev-icon")},null)]),y=t("span",{onClick:o&&this.nextClick,unselectable:"unselectable",class:(n={},yt(n,"".concat(l,"-tab-next"),1),yt(n,"".concat(l,"-tab-btn-disabled"),!o),yt(n,"".concat(l,"-tab-arrow-show"),b),n)},[d||t("span",{class:"".concat(l,"-tab-next-icon")},null)]),g="".concat(l,"-nav"),m=(yt(r={},g,!0),yt(r,"".concat(g,f?"-animated":"-no-animated"),!0),r);return t("div",{class:(a={},yt(a,"".concat(l,"-nav-container"),1),yt(a,"".concat(l,"-nav-container-scrolling"),b),a),key:"container",ref:this.saveRef("container")},[v,y,t("div",{class:"".concat(l,"-nav-wrap"),ref:this.saveRef("navWrap")},[t("div",{class:"".concat(l,"-nav-scroll")},[t("div",{class:m,ref:this.saveRef("nav")},[u(i(this))])])])])}},Ot={props:{children:r.func.def((function(){return null}))},methods:{getRef:function(t){return this[t]},saveRef:function(t){var e=this;return function(n){n&&(e[t]=n)}}},render:function(){var t=this;return this.children((function(e){return t.saveRef(e)}),(function(e){return t.getRef(e)}))}};function Pt(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function xt(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?Pt(Object(n),!0).forEach((function(e){Tt(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):Pt(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function Tt(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function wt(){return(wt=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}).apply(this,arguments)}var Bt=s({name:"ScrollableInkTabBar",inheritAttrs:!1,render:function(){var e=this,n=this.$attrs.children;return t(Ot,{children:function(r,a){return t(vt,xt({saveRef:r},e.$attrs),{default:function(){return[t(mt,xt({saveRef:r,getRef:a},e.$attrs),{default:function(){return[t(ut,xt({saveRef:r},wt(wt({},e.$attrs),{renderTabBarNode:n})),null),t(ot,xt({saveRef:r,getRef:a},e.$attrs),null)]}})]}})}},null)}});function jt(){return(jt=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}).apply(this,arguments)}function Ct(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function St(t){return(St="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}var kt=s({name:"TabBar",inheritAttrs:!1,props:{prefixCls:r.string,centered:r.looseBool.def(!1),tabBarStyle:r.style,tabBarExtraContent:r.VNodeChild,type:r.oneOf(m("line","card","editable-card")),tabPosition:r.oneOf(m("top","right","bottom","left")).def("top"),tabBarPosition:r.oneOf(m("top","right","bottom","left")),size:r.oneOf(m("default","small","large")),animated:{type:[Boolean,Object],default:void 0},renderTabBar:r.func,panels:r.array.def([]),activeKey:r.oneOfType([r.string,r.number]),tabBarGutter:r.number},render:function(){var e,n=this.$props,r=n.centered,a=n.tabBarStyle,i=n.animated,o=void 0===i||i,s=n.renderTabBar,c=n.tabBarExtraContent,l=n.tabPosition,f=n.prefixCls,u=n.type,p=void 0===u?"line":u,d=n.size,b="object"===St(o)?o.inkBar:o,h="left"===l||"right"===l,v=t("span",{class:"".concat(f,"-tab-prev-icon")},[t(h?k:O,{class:"".concat(f,"-tab-prev-icon-target")},null)]),y=t("span",{class:"".concat(f,"-tab-next-icon")},[t(h?P:x,{class:"".concat(f,"-tab-next-icon-target")},null)]),g=(Ct(e={},this.$attrs.class,this.$attrs.class),Ct(e,"".concat(f,"-centered-bar"),r),Ct(e,"".concat(f,"-").concat(l,"-bar"),!0),Ct(e,"".concat(f,"-").concat(d,"-bar"),!!d),Ct(e,"".concat(f,"-card-bar"),p&&p.indexOf("card")>=0),e),m=jt(jt(jt({},this.$props),this.$attrs),{children:null,inkBarAnimated:b,extraContent:c,prevIcon:v,nextIcon:y,style:a,class:g});return s?s(jt(jt({},m),{DefaultTabBar:Bt})):t(Bt,m,null)}});function $t(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function Rt(){return(Rt=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}).apply(this,arguments)}function Kt(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function Et(t){return(Et="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}var At=s({TabPane:J,name:"ATabs",inheritAttrs:!1,props:{prefixCls:r.string,activeKey:r.oneOfType([r.string,r.number]),defaultActiveKey:r.oneOfType([r.string,r.number]),hideAdd:r.looseBool.def(!1),centered:r.looseBool.def(!1),tabBarStyle:r.object,tabBarExtraContent:r.any,destroyInactiveTabPane:r.looseBool.def(!1),type:r.oneOf(m("line","card","editable-card")),tabPosition:r.oneOf(["top","right","bottom","left"]).def("top"),size:r.oneOf(["default","small","large"]),animated:T(r.oneOfType([r.looseBool,r.object])),tabBarGutter:r.number,renderTabBar:r.func,onChange:{type:Function},onTabClick:r.func,onPrevClick:{type:Function},onNextClick:{type:Function},onEdit:{type:Function}},emits:["update:activeKey","edit","change"],setup:function(){return{configProvider:b("configProvider",w)}},mounted:function(){var t=" no-flex",e=B(this);e&&!rt&&-1===e.className.indexOf(t)&&(e.className+=t)},methods:{removeTab:function(t,e){e.stopPropagation(),d(t)&&this.$emit("edit",t,"remove")},handleChange:function(t){this.$emit("update:activeKey",t),this.$emit("change",t)},createNewTab:function(t){this.$emit("edit",t,"add")}},render:function(){var e,n,r=this,a=j(this),o=a.prefixCls,s=a.size,c=a.type,l=void 0===c?"line":c,f=a.tabPosition,u=a.animated,d=void 0===u||u,b=a.hideAdd,y=a.renderTabBar,g=this.$attrs,m=g.class,O=function(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(t);a<r.length;a++)e.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(t,r[a])&&(n[r[a]]=t[r[a]])}return n}(g,["class"]),P=(0,this.configProvider.getPrefixCls)("tabs",o),x=C(i(this)),T=h(this,"tabBarExtraContent"),w="object"===Et(d)?d.tabPane:d;"line"!==l&&(w="animated"in a&&w);var B=(Kt(e={},m,m),Kt(e,"".concat(P,"-vertical"),"left"===f||"right"===f),Kt(e,"".concat(P,"-").concat(s),!!s),Kt(e,"".concat(P,"-card"),l.indexOf("card")>=0),Kt(e,"".concat(P,"-").concat(l),!0),Kt(e,"".concat(P,"-no-animation"),!w),e),k=[];"editable-card"===l&&(k=[],x.forEach((function(e,n){var a=v(e).closable,i=(a=void 0===a||a)?t(S,{class:"".concat(P,"-close-x"),onClick:function(t){return r.removeTab(e.key,t)}},null):null;k.push(p(e,{tab:t("div",{class:a?void 0:"".concat(P,"-tab-unclosable")},[h(e,"tab"),i]),key:e.key||n}))})),b||(T=t("span",null,[t(K,{class:"".concat(P,"-new-tab"),onClick:this.createNewTab},null),T]))),T=T?t("div",{class:"".concat(P,"-extra-content")},[T]):null;var $=y||this.$slots.renderTabBar,R=Rt(Rt(Rt(Rt({},a),{prefixCls:P,tabBarExtraContent:T,renderTabBar:$}),O),{children:x}),E=(Kt(n={},"".concat(P,"-").concat(f,"-content"),!0),Kt(n,"".concat(P,"-card-content"),l.indexOf("card")>=0),n),A=Rt(Rt(Rt(Rt({},a),{prefixCls:P,tabBarPosition:f,renderTabBar:function(){return t(kt,function(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?$t(Object(n),!0).forEach((function(e){Kt(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):$t(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}({key:"tabBar"},R),null)},renderTabContent:function(){return t(nt,{class:E,animated:w,animatedWithMargin:!0},null)},children:k.length>0?k:x}),O),{onChange:this.handleChange,class:B});return t(Q,A,null)}});function Nt(){return(Nt=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}).apply(this,arguments)}At.TabPane=Nt(Nt({},J),{name:"ATabPane",__ANT_TAB_PANE:!0}),At.TabContent=Nt(Nt({},nt),{name:"ATabContent"}),At.install=function(t){return t.component(At.name,At),t.component(At.TabPane.name,At.TabPane),t.component(At.TabContent.name,At.TabContent),t};export{At as T};
