import{aC as n,aD as r,i as t,a5 as u,c as a,t as e,aE as i,a as o,aF as f,aG as c,aH as l,aI as s,aJ as v}from"./index.9463653b.js";import{g as b}from"./get.b1a14716.js";function g(n){return n==n&&!t(n)}function d(n,r){return function(t){return null!=t&&(t[n]===r&&(void 0!==r||n in Object(t)))}}function j(t){var a=function(n){for(var r=u(n),t=r.length;t--;){var a=r[t],e=n[a];r[t]=[a,e,g(e)]}return r}(t);return 1==a.length&&a[0][2]?d(a[0][0],a[0][1]):function(u){return u===t||function(t,u,a,e){var i=a.length,o=i,f=!e;if(null==t)return!o;for(t=Object(t);i--;){var c=a[i];if(f&&c[2]?c[1]!==t[c[0]]:!(c[0]in t))return!1}for(;++i<o;){var l=(c=a[i])[0],s=t[l],v=c[1];if(f&&c[2]){if(void 0===s&&!(l in t))return!1}else{var b=new n;if(e)var g=e(s,v,l,t,u,b);if(!(void 0===g?r(v,s,3,e,b):g))return!1}}return!0}(u,t,a)}}function h(n,r){return null!=n&&r in Object(n)}function p(n,r){return null!=n&&function(n,r,t){for(var u=-1,l=(r=a(r,n)).length,s=!1;++u<l;){var v=e(r[u]);if(!(s=null!=n&&t(n,v)))break;n=n[v]}return s||++u!=l?s:!!(l=null==n?0:n.length)&&i(l)&&o(v,l)&&(f(n)||c(n))}(n,r,h)}function m(n){return l(n)?(r=e(n),function(n){return null==n?void 0:n[r]}):function(n){return function(r){return s(r,n)}}(n);var r}function O(n){return"function"==typeof n?n:null==n?v:"object"==typeof n?f(n)?(t=n[0],u=n[1],l(t)&&g(u)?d(e(t),u):function(n){var a=b(n,t);return void 0===a&&a===u?p(n,t):r(u,a,3)}):j(n):m(n);var t,u}export{O as b};
