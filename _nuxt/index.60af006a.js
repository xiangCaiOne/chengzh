import{E as x}from"./el-input.bdf8d2d3.js";import{c as b,e as w}from"./el-row.fa74e810.js";import{_ as C}from"./index.d5dce062.js";import{d as y,g as k}from"./dataApi.c611b070.js";import{_ as I}from"./_plugin-vue_export-helper.c27b6911.js";import{y as M,B as E,c as t,b as o,w as i,o as a,a as s,F as p,J as m,p as B,e as L,t as _,m as S}from"./entry.f10db814.js";import"./event.8e91c63d.js";import"./use-form-item.0af0a536.js";import"./use-form-common-props.caab4a57.js";import"./error.78e43d3e.js";const R=c=>(B("data-v-f43b7360"),c=c(),L(),c),D={class:"container"},F=R(()=>s("div",{class:"view"},[s("h1",null,"霁月光风 不萦于怀"),s("p",null,"==============================")],-1)),N={class:"search"},U={class:"tags"},V={class:"title"},j={class:"webs"},z=["onClick"],A=["src"],H={class:"right"},J={class:"MC"},$={class:"intro"},q={__name:"index",setup(c){const r=M({loaded:!1,labels:{}}),u=()=>{y.get("/webs/get",{type:"set"}).then(e=>{e.status==="success"&&(r.labels=e.data)})};E(()=>{u()});const f=e=>{window.open(e.webUrl)};return(e,G)=>{const h=x,d=w,v=C,g=b;return a(),t("div",D,[F,o(g,{class:"main"},{default:i(()=>[o(d,{span:17,class:"timerLine",xs:24},{default:i(()=>[s("div",N,[o(h,{size:"large",placeholder:"输入内容"})]),s("div",U,[(a(!0),t(p,null,m(r.labels,l=>(a(),t("div",{class:"tag",key:l.labelMC},[s("div",V,_(l.labelMC),1),s("div",j,[(a(!0),t(p,null,m(l.urls,n=>(a(),t("div",{class:"content",onClick:K=>f(n)},[s("img",{src:S(k)(n.fileDM)||"//alifei04.cfp.cn/creative/vcg/veer/1600water/veer-405813663.jpg"},null,8,A),s("div",H,[s("p",J,_(n.webMC),1),s("p",$,_(n.introduce),1)])],8,z))),256))])]))),128))])]),_:1}),o(d,{span:6,class:"userCenter",xs:24},{default:i(()=>[o(v)]),_:1})]),_:1})])}}},ts=I(q,[["__scopeId","data-v-f43b7360"]]);export{ts as default};
