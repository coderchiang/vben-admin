import{C as a}from"./index.5e0fdf38.js";import{e as t,q as s,r as i,o as e,m as r,D as n,n as o,G as b,am as p}from"./index.a6116d7f.js";import"./index.82700539.js";import"./index.2466dd13.js";import f from"./VisitAnalysis.8e70360f.js";import m from"./VisitAnalysisBar.ffe02f49.js";import"./index.b1ea4fd1.js";import"./vendor.afa0338c.js";import"./UpOutlined.f8bb807d.js";import"./responsiveObserve.c545f1cc.js";import"./useECharts.563c51e6.js";import"./props.f48aca0b.js";var c=t({components:{Card:a,VisitAnalysis:f,VisitAnalysisBar:m},setup(){const a=s("tab1");return{tabListTitle:[{key:"tab1",tab:"流量趋势"},{key:"tab2",tab:"访问量"}],activeKey:a,onTabChange:function(t){a.value=t}}}});const d={key:0},y={key:1};c.render=function(a,t,s,f,m,c){const l=i("VisitAnalysis"),j=i("VisitAnalysisBar"),v=i("Card");return e(),r(v,p({"tab-list":a.tabListTitle},a.$attrs,{"active-tab-key":a.activeKey,onTabChange:a.onTabChange}),{default:n((()=>["tab1"===a.activeKey?(e(),r("p",d,[o(l)])):b("",!0),"tab2"===a.activeKey?(e(),r("p",y,[o(j)])):b("",!0)])),_:1},16,["tab-list","active-tab-key","onTabChange"])};export default c;