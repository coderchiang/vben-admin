import{be as e,bU as t,at as n}from"./index.c68bc564.js";function i(i,s=150,r){let o=()=>{i()};const[a,d]=e(o,s,r);o=a;const c=()=>{r&&r.immediate&&o(),window.addEventListener("resize",o)},m=()=>{window.removeEventListener("resize",o),d()};return t((()=>{c()})),n((()=>{m()})),[c,m]}export{i as u};
