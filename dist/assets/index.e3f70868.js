import{T as e}from"./index.08e18061.js";import{e as i,c6 as t,r as s,o as r,m as n,D as o,n as l,p,E as a}from"./index.a6116d7f.js";import{_ as c}from"./PageWrapper.0c2bd2cf.js";import{_ as u,u as d}from"./useDescription.9d050ca7.js";import{G as g,D as m,S as v}from"./siteSetting.c485f07c.js";import"./vendor.afa0338c.js";import"./usePageContext.730ef272.js";import"./index.5650d9cb.js";import"./index.92e7c750.js";import"./onMountedOrActivated.f3828cfe.js";import"./ArrowLeftOutlined.f01a2ce6.js";import"./responsiveObserve.c545f1cc.js";import"./get.2496f28f.js";var f=i({name:"AboutPage",components:{Description:u,PageWrapper:c},setup(){const{pkg:i,lastBuildTime:s}={pkg:{dependencies:{"@iconify/iconify":"^2.0.0-rc.6","@vueuse/core":"^4.6.3","@zxcvbn-ts/core":"^0.3.0","ant-design-vue":"^2.1.2",axios:"^0.21.1",cropperjs:"^1.5.11","crypto-js":"^4.0.0",echarts:"^5.0.2","lodash-es":"^4.17.21",mockjs:"^1.1.0",nprogress:"^0.2.0","path-to-regexp":"^6.2.0",qrcode:"^1.4.4",sortablejs:"^1.13.0",vue:"3.0.10","vue-i18n":"^9.0.0","vue-router":"^4.0.5","vue-types":"^3.0.2",vuex:"^4.0.0","vuex-module-decorators":"^1.0.1"},devDependencies:{"@commitlint/cli":"^12.0.1","@commitlint/config-conventional":"^12.0.1","@iconify/json":"^1.1.323","@purge-icons/generated":"^0.7.0","@types/crypto-js":"^4.0.1","@types/fs-extra":"^9.0.9","@types/inquirer":"^7.3.1","@types/lodash-es":"^4.17.4","@types/mockjs":"^1.0.3","@types/nprogress":"^0.2.0","@types/qrcode":"^1.4.0","@types/qs":"^6.9.6","@types/rollup-plugin-visualizer":"^2.6.0","@types/sortablejs":"^1.10.6","@typescript-eslint/eslint-plugin":"^4.20.0","@typescript-eslint/parser":"^4.20.0","@vitejs/plugin-legacy":"^1.3.2","@vitejs/plugin-vue":"^1.2.1","@vitejs/plugin-vue-jsx":"^1.1.2","@vue/compiler-sfc":"3.0.10",autoprefixer:"^10.2.5","body-parser":"^1.19.0",commitizen:"^4.2.3","conventional-changelog-cli":"^2.1.1","cross-env":"^7.0.3",dotenv:"^8.2.0",eslint:"^7.23.0","eslint-config-prettier":"^8.1.0","eslint-define-config":"^1.0.6","eslint-plugin-prettier":"^3.3.1","eslint-plugin-vue":"^7.8.0",esno:"^0.5.0","fs-extra":"^9.1.0","http-server":"^0.12.3",husky:"^6.0.0",inquirer:"^8.0.0","is-ci":"^3.0.0",less:"^4.1.1","lint-staged":"^10.5.4",postcss:"^8.2.9",prettier:"^2.2.1","pretty-quick":"^3.1.0",rimraf:"^3.0.2","rollup-plugin-visualizer":"4.2.2",stylelint:"^13.12.0","stylelint-config-prettier":"^8.0.2","stylelint-config-standard":"^21.0.0","stylelint-order":"^4.1.0","ts-node":"^9.1.1",typescript:"4.2.3",vite:"2.1.5","vite-plugin-compression":"^0.2.3","vite-plugin-html":"^2.0.3","vite-plugin-imagemin":"^0.2.9","vite-plugin-mock":"^2.4.1","vite-plugin-purge-icons":"^0.7.0","vite-plugin-pwa":"^0.6.4","vite-plugin-style-import":"^0.9.1","vite-plugin-svg-icons":"^0.4.0","vite-plugin-theme":"^0.5.0","vite-plugin-windicss":"0.10.4","vue-eslint-parser":"^7.6.0"},name:"vben-admin",version:"2.1.1"},lastBuildTime:"2021-05-13 03:57:21"},{dependencies:r,devDependencies:n,name:o,version:l}=i,p=[],a=[],c=i=>s=>t(e,{color:i},(()=>s)),u=e=>i=>t("a",{href:i,target:"_blank"},e),f=[{label:"版本",field:"version",render:c("blue")},{label:"最后编译时间",field:"lastBuildTime",render:c("blue")},{label:"文档地址",field:"doc",render:u("文档地址")},{label:"预览地址",field:"preview",render:u("预览地址")},{label:"Github",field:"github",render:u("Github")}],y={version:l,lastBuildTime:s,doc:m,preview:v,github:g};Object.keys(r).forEach((e=>{p.push({field:e,label:e})})),Object.keys(n).forEach((e=>{a.push({field:e,label:e})}));const[j]=d({title:"生产环境依赖",data:r,schema:p,column:3}),[b]=d({title:"开发环境依赖",data:n,schema:a,column:3}),[h]=d({title:"项目信息",data:y,schema:f,column:2});return{register:j,registerDev:b,infoRegister:h,name:o,GITHUB_URL:g}}});const y={class:"flex justify-between items-center"},j={class:"flex-1"},b=a(" 是一个基于Vue3.0、Vite、 Ant-Design-Vue 、TypeScript 的后台解决方案，目标是为中大型项目开发,提供现成的开箱解决方案及丰富的示例,原则上不会限制任何代码用于商用。 ");f.render=function(e,i,t,a,c,u){const d=s("Description"),g=s("PageWrapper");return r(),n(g,{title:"关于"},{headerContent:o((()=>[l("div",y,[l("span",j,[l("a",{href:e.GITHUB_URL,target:"_blank"},p(e.name),9,["href"]),b])])])),default:o((()=>[l(d,{onRegister:e.infoRegister},null,8,["onRegister"]),l(d,{onRegister:e.register,class:"my-4"},null,8,["onRegister"]),l(d,{onRegister:e.registerDev},null,8,["onRegister"])])),_:1})};export default f;
