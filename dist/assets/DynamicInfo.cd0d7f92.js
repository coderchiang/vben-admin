import{C as t}from"./index.5e0fdf38.js";import{L as e}from"./index.d19ec1a4.js";import{e as a,aW as s,r as i,o as r,m as n,D as o,n as d,E as m,p as l,am as p}from"./index.a6116d7f.js";import"./index.82700539.js";import"./index.2466dd13.js";import{d as c}from"./data.8ddc77c3.js";import{h as f}from"./header.d801b988.js";import"./index.b1ea4fd1.js";import"./vendor.afa0338c.js";import"./UpOutlined.f8bb807d.js";import"./responsiveObserve.c545f1cc.js";var u=a({components:{Card:t,List:e,ListItem:e.Item,ListItemMeta:e.Item.Meta,Icon:s},setup:()=>({items:c,headerImg:f})});const j=m("更多");u.render=function(t,e,a,s,c,f){const u=i("a-button"),I=i("Icon"),L=i("ListItemMeta"),x=i("ListItem"),b=i("List"),v=i("Card");return r(),n(v,p({title:"最新动态"},t.$attrs),{extra:o((()=>[d(u,{type:"link",size:"small"},{default:o((()=>[j])),_:1})])),default:o((()=>[d(b,{"item-layout":"horizontal","data-source":t.items},{renderItem:o((({item:t})=>[d(x,null,{default:o((()=>[d(L,null,{description:o((()=>[m(l(t.date),1)])),title:o((()=>[m(l(t.name)+" ",1),d("span",{innerHTML:t.desc},null,8,["innerHTML"])])),avatar:o((()=>[d(I,{icon:t.avatar,size:30},null,8,["icon"])])),_:2},1024)])),_:2},1024)])),_:1},8,["data-source"])])),_:1},16)};export default u;
