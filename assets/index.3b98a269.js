import{d as a,aK as e,az as s,i as t,h as n,e as c,p as o,C as l,D as m,f as i,o as p,c as r,a as d,F as u,g as v,E as y}from"./index.3038f72e.js";import{_ as f}from"./config-title.524ac611.js";import{_}from"./empty-panel.f7286cbe.js";var g=a({name:"DataCenterPanel",components:{ConfigTitle:f,EmptyPanel:_,SourcePanel:e((()=>s((()=>import("./source-panel.512a50e8.js")),["/assets/source-panel.512a50e8.js","/assets/source-panel.4e0abe4e.css","/assets/index.3038f72e.js","/assets/index.a59a93be.css","/assets/filter-collapse-panel.abc10dbc.js"])))},setup(){const a=t("com"),e=n((()=>Object.keys(a.value.apis))),s=c(e.value[0]);return o("changePanel",(a=>{s.value=s.value===a?"":a})),{activeName:s,com:a,dataKeys:e}}});const j=y();l("data-v-44ac5b88");const K={class:"data-center-panel"},P={class:"scroll-container"};m();const b=j(((a,e,s,t,n,c)=>{const o=i("config-title"),l=i("source-panel"),m=i("empty-panel");return p(),r("div",K,[d(o,{"com-name":a.com.name,"com-alias":a.com.alias},null,8,["com-name","com-alias"]),d("div",P,[a.dataKeys.length>0?(p(!0),r(u,{key:0},v(a.dataKeys,(e=>(p(),r(l,{key:e,"api-name":e,"active-name":a.activeName,collapse:a.dataKeys.length>1},null,8,["api-name","active-name","collapse"])))),128)):(p(),r(m,{key:1,content:"该组件不需要配置数据"}))])])}));g.render=b,g.__scopeId="data-v-44ac5b88";export default g;
