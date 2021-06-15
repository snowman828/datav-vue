var a=Object.defineProperty,e=Object.defineProperties,t=Object.getOwnPropertyDescriptors,s=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,i=Object.prototype.propertyIsEnumerable,o=(e,t,s)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[t]=s;import{H as c,aW as d,K as n,P as r,Q as u,T as p,W as f,ab as v,X as m,_ as g,$ as b,ac as y,af as h,az as S,J as C,aX as w,L as D,aY as _,aZ as k,a_ as x,a$ as T,R as j,aD as O,a0 as V,aa as N,b0 as P,Y as U,b1 as A}from"./index.0a866c7e.js";import{l as E}from"./index.c453466d.js";import"./editor.worker.3eb73e22.js";import"./dom.1228cadc.js";var I=c({name:"DisplayApiStatus",props:{status:{type:String,default:d.incomplete},loadingText:{type:String,default:"匹配中"},successText:{type:String,default:"匹配成功"},failedText:{type:String,default:"未找到字段"},completedText:{type:String,default:"配置完成"},incompleteText:{type:String,default:"配置未完成"},optional:{type:Boolean,default:!1}},setup(a){const e=n((()=>a.status===d.loading?a.loadingText:a.status===d.success?a.successText:a.status===d.completed?a.completedText:a.optional?"可选":a.status===d.failed?a.failedText:a.status===d.incomplete?a.incompleteText:a.status));return{apiStatus:d,statusText:e}}});const M=b();r("data-v-1785705c");const R=m("i",{class:"status-icon validating"},null,-1),z=m("i",{class:"status-icon validating"},null,-1),F=m("i",{class:"status-icon validating"},null,-1),$={key:2,class:"status-icon --success"},B={class:"status-text"};u();const G=M(((a,e,t,s,l,i)=>(p(),f("div",null,[a.status===a.apiStatus.loading?(p(),f(v,{key:0},[R,z,F],64)):a.status===a.apiStatus.success||a.status===a.apiStatus.completed?(p(),f("i",{key:1,class:["status-icon",`--${a.status}`]},null,2)):a.optional?(p(),f("i",$)):(p(),f("i",{key:3,class:["status-icon",`--${a.status}`]},null,2)),m("span",B,g(a.statusText),1)]))));I.render=G,I.__scopeId="data-v-1785705c";var L=c({name:"FieldGrid",props:{fields:{type:Object}}});const H=b();r("data-v-c0253736");const W={key:0,class:"field-wp"},X=m("div",{class:"field-info"},"数据相应结果应为列表，列表元素包含如下字段",-1),Y={class:"field-grid"},q=m("div",{class:"field-item field-title"},"字段",-1),J=m("div",{class:"field-item field-title"},"映射",-1),K=m("div",{class:"field-item field-title"},"说明",-1),Q={class:"field-item"},Z={class:"field-item"},aa={class:"field-item"};u();const ea=H(((a,e,t,s,l,i)=>a.fields?(p(),f("div",W,[X,m("div",Y,[q,J,K,(p(!0),f(v,null,y(a.fields,((a,e)=>(p(),f(v,{key:e},[m("div",Q,g(e),1),m("div",Z,g(a.map||"-"),1),m("div",aa,g(a.description||"-"),1)],64)))),128))])])):h("",!0)));L.render=ea,L.__scopeId="data-v-c0253736";var ta=c({name:"SourceDrawer",components:{FieldGrid:L,DsStaticEditor:E((()=>S((()=>import("./ds-static-editor.23beaefd.js")),["/assets/ds-static-editor.23beaefd.js","/assets/index.0a866c7e.js","/assets/index.e40dc61f.css","/assets/editor.worker.3eb73e22.js"]))),DsApiEditor:E((()=>S((()=>import("./ds-api-editor.9fb78777.js")),["/assets/ds-api-editor.9fb78777.js","/assets/ds-api-editor.e4cdc83e.css","/assets/index.0a866c7e.js","/assets/index.e40dc61f.css","/assets/editor.worker.3eb73e22.js"])))},setup(){const a=C(!1),c=C(!1),d=k,r=w(),u=D("com"),p=D("apiConfig"),f=D("apiDataConfig"),v=D("apiName"),m=n((()=>_.dataStatusMap[u.value.id]||{})),g=n((()=>{const a=_.originMap[u.value.id];return a?a[v]:""})),b=n((()=>{const a=_.dataMap[u.value.id];return a?a[v]:""}));return{visible:a,visiblePreview:c,apiType:d,datasources:r,com:u,apiConfig:p,apiDataConfig:f,dataStatus:m,dataOrign:g,resData:b,open:()=>{a.value=!0},changeSource:a=>{switch(a){case k.api:void 0===f.value.config.api&&(f.value.config=(c=((a,e)=>{for(var t in e||(e={}))l.call(e,t)&&o(a,t,e[t]);if(s)for(var t of s(e))i.call(e,t)&&o(a,t,e[t]);return a})({},f.value.config),d={api:"",apiMethod:x.GET,apiHeaders:"{}",apiBody:"{}"},e(c,t(d))))}var c,d},refreshData:()=>{T(u.value.id,v,p.value,f.value)}}}});const sa=m("p",{class:"source-drawer-title"},"设置数据源",-1),la={class:"datasource-selector"},ia=m("label",{class:"datasource-selector-title"},"数据源类型",-1),oa={class:"datasource-select"},ca={class:"datav-new-select-wp"},da={class:"ds-preview-content"},na=m("div",{class:"ds-response-btn"},[m("i",{class:"v-icon-search"}),V(" 预览数据源返回结果 ")],-1),ra=m("span",{class:"use-filter-text"},"数据过滤器",-1),ua=m("span",{class:"tutorial-popup"},"教程",-1),pa=m("span",null,"数据响应结果",-1),fa={class:"data-response"};ta.render=function(a,e,t,s,l,i){const o=j("el-option"),c=j("el-select"),d=j("ds-static-editor"),n=j("ds-api-editor"),r=j("g-monaco-editor"),u=j("el-popover"),g=j("el-checkbox"),b=j("field-grid"),S=j("el-drawer");return p(),f(S,{modelValue:a.visible,"onUpdate:modelValue":e[5]||(e[5]=e=>a.visible=e),"custom-class":"source-drawer",size:"500px"},{title:O((()=>[sa])),default:O((()=>[a.visible?(p(),f(v,{key:0},[m("div",{class:["step-title",{"--error":a.dataStatus.errSource}]}," 数据源 ",2),m("div",la,[ia,m("div",oa,[m("div",ca,[m(c,{modelValue:a.apiDataConfig.type,"onUpdate:modelValue":e[1]||(e[1]=e=>a.apiDataConfig.type=e),size:"mini",class:"datav-new-select","popper-class":"datav-new-select-option",onChange:a.changeSource},{default:O((()=>[(p(!0),f(v,null,y(a.datasources,((a,e)=>(p(),f(o,{key:e,label:a,value:e},null,8,["label","value"])))),128))])),_:1},8,["modelValue","onChange"])])])]),a.apiDataConfig.type===a.apiType.static?(p(),f(d,{key:0})):a.apiDataConfig.type===a.apiType.api?(p(),f(n,{key:1})):h("",!0),m(u,{visible:a.visiblePreview,"onUpdate:visible":e[2]||(e[2]=e=>a.visiblePreview=e),placement:"left",width:400,"popper-class":"editor-popover"},{reference:O((()=>[na])),default:O((()=>[m("div",da,[m(r,{language:"json","read-only":!0,"auto-format":!0,height:180,code:a.dataOrign},null,8,["code"])])])),_:1},8,["visible"]),m("div",{class:["step-title",{"--error":a.dataStatus.errFilter}]},[m(g,{modelValue:a.apiConfig.useAutoUpdate,"onUpdate:modelValue":e[3]||(e[3]=e=>a.apiConfig.useAutoUpdate=e),class:"use-filter-btn"},null,8,["modelValue"]),ra,ua],2),m(b,{fields:a.apiConfig.fields},null,8,["fields"]),m("div",{class:["step-title",{"--error":a.dataStatus.errSource||a.dataStatus.errFilter}]},[pa,m("i",{class:"el-icon-refresh refresh-btn",onClick:e[4]||(e[4]=(...e)=>a.refreshData&&a.refreshData(...e))})],2),m("div",fa,[m(r,{language:"json","read-only":!0,"auto-format":!0,code:a.resData},null,8,["code"])])],64)):h("",!0)])),_:1},8,["modelValue"])};var va=c({name:"SourcePanel",components:{DisplayApiStatus:I,SourceDrawer:ta},props:{apiName:{type:String,required:!0},activeName:String,collapse:Boolean},setup(a){const e=n((()=>a.apiName===a.activeName)),t=C(null),s=w(),l=D("com"),i=n((()=>l.value.apis[a.apiName])),o=n((()=>l.value.apiData[a.apiName]));N("apiConfig",i),N("apiDataConfig",o),N("apiName",a.apiName);const c=n((()=>{const e=_.dataMap[l.value.id];return e?e[a.apiName]:""})),r=n((()=>{const e=_.fieldStatusMap[l.value.id];return e?e[a.apiName]:{}})),u=n((()=>{const a=Object.values(r.value);return a.includes(P.loading)?d.loading:a.includes(P.failed)?d.incomplete:d.completed})),p=D("changePanel");return{visible:e,sourceDrawerRef:t,datasources:s,com:l,apiConfig:i,apiDataConfig:o,fieldsStatus:r,totalStatus:u,datav_data:c,toggle:()=>{a.collapse&&p(a.apiName)},openSourceDrawer:()=>{var a;null==(a=t.value)||a.open()},refreshData:()=>{T(l.value.id,a.apiName,i.value,o.value)}}}});const ma=b();r("data-v-4bf4f9a4");const ga={class:"api-editor-title"},ba={key:0,class:"el-icon-arrow-right api-fold-icon"},ya={class:"api-status success"},ha={class:"attr-source-wp"},Sa={class:"data-attr-table-container"},Ca={class:"data-attr-table"},wa=m("thead",{class:"table-head"},[m("tr",{class:"table-head-row"},[m("th",{class:"th-item column-item attr-name"}," 字段 "),m("th",{class:"th-item column-item attr-value"}," 映射 "),m("th",{class:"th-item column-item attr-status"}," 状态 ")])],-1),Da={class:"table-body"},_a={class:"column-item attr-name"},ka={class:"ellipsis2"},xa={class:"column-item attr-value"},Ta={class:"column-item attr-status"},ja={key:1,class:"table-body-row"},Oa=m("td",{class:"column-item attr-name"},[m("span",null,"任意")],-1),Va=m("td",{class:"column-item attr-value"},null,-1),Na={class:"column-item attr-status"},Pa={class:"data-source"},Ua=m("div",{class:"data-result-title"}," 数据响应结果 ",-1),Aa={class:"auto-update-config"},Ea=V(" 自动更新选项 "),Ia=V(" 秒一次 "),Ma={class:"data-flow-wp"},Ra={class:"ds-line"},za={class:"ds-title"},Fa=m("span",{class:"ds-title-text"},"数据源",-1),$a={class:"ds-type-text"},Ba=V(" 配置数据源 "),Ga={class:"ds-line mt5"},La=m("span",null,"数据响应结果 ( 只读 ) ",-1),Ha={class:"ds-dots"},Wa=m("span",{class:"ds-dot"},null,-1),Xa=m("span",{class:"ds-dot"},null,-1),Ya={class:"data-response"};u();const qa=ma(((a,e,t,s,l,i)=>{const o=j("display-api-status"),c=j("el-tooltip"),d=j("g-input"),n=j("el-checkbox"),r=j("el-button"),u=j("g-monaco-editor"),b=j("source-drawer");return p(),f("div",{class:["api-editor",{"--disable-fold":!a.collapse,"--fold":a.collapse&&a.visible}]},[m("div",ga,[m("div",{class:"api-desc ellipsis2",onClick:e[1]||(e[1]=(...e)=>a.toggle&&a.toggle(...e))},[a.collapse?(p(),f("i",ba)):h("",!0),V(" "+g(a.apiConfig.description||"数据接口"),1)]),m("div",ya,[m(o,{status:a.totalStatus,"success-text":"配置完成"},null,8,["status"])])]),U(m("div",ha,[m("div",Sa,[m("table",Ca,[wa,m("tbody",Da,[Object.keys(a.apiConfig.fields).length>0?(p(!0),f(v,{key:0},y(a.apiConfig.fields,((e,t)=>(p(),f("tr",{key:t,class:"table-body-row"},[m("td",_a,[m(c,{content:e.description,placement:"left",effect:"blue"},{default:ma((()=>[m("span",ka,g(t),1)])),_:2},1032,["content"])]),m("td",xa,[m(d,{"model-value":e.map,placeholder:"可自定义",class:"attr-input",onChange:a=>e.map=a},null,8,["model-value","onChange"])]),m("td",Ta,[m(o,{status:a.fieldsStatus[t],optional:e.optional},null,8,["status","optional"])])])))),128)):(p(),f("tr",ja,[Oa,Va,m("td",Na,[m(o,{status:"completed"})])]))])])]),m("div",Pa,[Ua,m("div",Aa,[m(n,{modelValue:a.apiConfig.useAutoUpdate,"onUpdate:modelValue":e[2]||(e[2]=e=>a.apiConfig.useAutoUpdate=e),class:"auto-update-checkbox"},{default:ma((()=>[Ea])),_:1},8,["modelValue"]),m(d,{"model-value":a.apiConfig.autoUpdate,type:"number",disabled:!a.apiConfig.useAutoUpdate,class:"update-interval-input",onChange:e[3]||(e[3]=e=>a.apiConfig.autoUpdate=e)},null,8,["model-value","disabled"]),Ia]),m("div",Ma,[m("div",Ra,[m("div",za,[Fa,m("span",$a,g(a.datasources[a.apiDataConfig.type]),1)]),m(r,{size:"mini",class:"ds-action-btn",onClick:a.openSourceDrawer},{default:ma((()=>[Ba])),_:1},8,["onClick"])]),m("div",Ga,[La,m(c,{content:"刷新数据",placement:"left",effect:"blue"},{default:ma((()=>[m("i",{class:"el-icon-refresh refresh-btn",onClick:e[4]||(e[4]=(...e)=>a.refreshData&&a.refreshData(...e))})])),_:1})]),m("div",Ha,[m("span",{class:["ds-dot",["completed"===a.totalStatus?"active":"error"]]},null,2),Wa,Xa])]),m("div",Ya,[m(u,{language:"json","read-only":!0,"auto-format":!0,code:a.datav_data,height:250,"full-screen-title":"数据响应结果"},null,8,["code"])])])],512),[[A,a.visible]]),m(b,{ref:"sourceDrawerRef"},null,512)],2)}));va.render=qa,va.__scopeId="data-v-4bf4f9a4";export default va;