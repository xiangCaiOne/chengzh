import{E as g}from"./el-input.961f24da.js";import{c as w,e as y}from"./el-row.d2e20210.js";import{_ as I}from"./index.9aab30a2.js";import{d as E}from"./dataApi.61aa4dc7.js";import{_ as L}from"./_plugin-vue_export-helper.c27b6911.js";import{x as S,A as M,c as t,b as e,w as i,o,a as s,F as r,I as d,p as k,e as B,t as p}from"./entry.8b3a031d.js";import"./event.8e91c63d.js";import"./use-form-item.4570b6ff.js";import"./use-form-common-props.501b4330.js";import"./error.78e43d3e.js";const C=n=>(k("data-v-6254c883"),n=n(),B(),n),b={class:"container"},A=C(()=>s("div",{class:"view"},[s("h1",null,"霁月光风 不萦于怀"),s("p",null,"==============================")],-1)),D={class:"search"},F={class:"web"},H={class:"header"},N={class:"icons"},R=["innerHTML"],T={class:"title"},V={__name:"index",setup(n){const _=S({loaded:!1,icons:{}}),m=()=>{E.get("/icons/get",{type:"set"}).then(a=>{a.status==="success"&&(_.icons=a.data)})};return M(()=>{m()}),(a,z)=>{const u=g,l=y,h=I,v=w;return o(),t("div",b,[A,e(v,{class:"main"},{default:i(()=>[e(l,{span:17,class:"timerLine",xs:24},{default:i(()=>[s("div",D,[e(u,{size:"large",placeholder:"输入内容"})]),(o(!0),t(r,null,d(_.icons,(f,x)=>(o(),t("div",F,[s("div",H,p(x),1),s("div",N,[(o(!0),t(r,null,d(f.icons,c=>(o(),t("div",{class:"icon",key:c.iconDM},[s("i",{innerHTML:c.iconSvg,class:"svg"},null,8,R),s("div",T,p(c.title),1)]))),128))])]))),256))]),_:1}),e(l,{span:6,class:"userCenter",xs:24},{default:i(()=>[e(h)]),_:1})]),_:1})])}}},X=L(V,[["__scopeId","data-v-6254c883"]]);export{X as default};
