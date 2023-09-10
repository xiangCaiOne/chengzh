import{f as p,N as ze,r as N,E as X,C as q,Y as te,j as ke,af as Ke,g as je,h as xe,D as F,B as Ue,z as We,H as Ye,I as Xe,o as m,c as S,s as y,F as ae,n as b,m as t,l as U,a as V,k as I,w as A,q as W,v as oe,b as qe,L as Ze,V as Ge,t as Y,R as Je,U as we}from"./entry.f10db814.js";import{o as Pe,v as Qe,a as et,i as Se,w as tt,V as at}from"./dataApi.c611b070.js";import{j as ot,k as Ce,b as nt,d as ne,r as st,E as M,p as lt,_ as rt,z as it,A as ut,w as ct}from"./el-row.fa74e810.js";import{U as se}from"./event.8e91c63d.js";import{u as dt,a as pt}from"./use-form-item.0af0a536.js";import{u as ft,a as vt}from"./use-form-common-props.caab4a57.js";import{d as Ie}from"./error.78e43d3e.js";const mt=()=>Pe&&/firefox/i.test(window.navigator.userAgent);function yt(o){return o==null}const ht=o=>/([\uAC00-\uD7AF\u3130-\u318F])+/gi.test(o),bt=["class","style"],gt=/^on[A-Z]/,xt=(o={})=>{const{excludeListeners:f=!1,excludeKeys:i}=o,a=p(()=>((i==null?void 0:i.value)||[]).concat(bt)),r=ze();return r?p(()=>{var l;return ot(Object.entries((l=r.proxy)==null?void 0:l.$attrs).filter(([u])=>!a.value.includes(u)&&!(f&&gt.test(u))))}):p(()=>({}))};function wt(o){const f=N();function i(){if(o.value==null)return;const{selectionStart:r,selectionEnd:l,value:u}=o.value;if(r==null||l==null)return;const x=u.slice(0,Math.max(0,r)),c=u.slice(Math.max(0,l));f.value={selectionStart:r,selectionEnd:l,value:u,beforeTxt:x,afterTxt:c}}function a(){if(o.value==null||f.value==null)return;const{value:r}=o.value,{beforeTxt:l,afterTxt:u,selectionStart:x}=f.value;if(l==null||u==null||x==null)return;let c=r.length;if(r.endsWith(u))c=r.length-u.length;else if(r.startsWith(l))c=l.length;else{const g=l[x-1],v=r.indexOf(g,x-1);v!==-1&&(c=v+1)}o.value.setSelectionRange(c,c)}return[i,a]}function St(o,{afterFocus:f,afterBlur:i}={}){const a=ze(),{emit:r}=a,l=X(),u=N(!1),x=v=>{u.value||(u.value=!0,r("focus",v),f==null||f())},c=v=>{var d;v.relatedTarget&&((d=l.value)!=null&&d.contains(v.relatedTarget))||(u.value=!1,r("blur",v),i==null||i())},g=()=>{var v;(v=o.value)==null||v.focus()};return q(l,v=>{v&&v.setAttribute("tabindex","-1")}),Qe(l,"click",g),{wrapperRef:l,isFocused:u,handleFocus:x,handleBlur:c}}let w;const Ct=`
  height:0 !important;
  visibility:hidden !important;
  ${mt()?"":"overflow:hidden !important;"}
  position:absolute !important;
  z-index:-1000 !important;
  top:0 !important;
  right:0 !important;
`,It=["letter-spacing","line-height","padding-top","padding-bottom","font-family","font-weight","font-size","text-rendering","text-transform","width","text-indent","padding-left","padding-right","border-width","box-sizing"];function Et(o){const f=window.getComputedStyle(o),i=f.getPropertyValue("box-sizing"),a=Number.parseFloat(f.getPropertyValue("padding-bottom"))+Number.parseFloat(f.getPropertyValue("padding-top")),r=Number.parseFloat(f.getPropertyValue("border-bottom-width"))+Number.parseFloat(f.getPropertyValue("border-top-width"));return{contextStyle:It.map(u=>`${u}:${f.getPropertyValue(u)}`).join(";"),paddingSize:a,borderSize:r,boxSizing:i}}function Ee(o,f=1,i){var a;w||(w=document.createElement("textarea"),document.body.appendChild(w));const{paddingSize:r,borderSize:l,boxSizing:u,contextStyle:x}=Et(o);w.setAttribute("style",`${x};${Ct}`),w.value=o.value||o.placeholder||"";let c=w.scrollHeight;const g={};u==="border-box"?c=c+l:u==="content-box"&&(c=c-r),w.value="";const v=w.scrollHeight-r;if(Ce(f)){let d=v*f;u==="border-box"&&(d=d+r+l),c=Math.max(d,c),g.minHeight=`${d}px`}if(Ce(i)){let d=v*i;u==="border-box"&&(d=d+r+l),c=Math.min(d,c)}return g.height=`${c}px`,(a=w.parentNode)==null||a.removeChild(w),w=void 0,g}const zt=nt({id:{type:String,default:void 0},size:et,disabled:Boolean,modelValue:{type:ne([String,Number,Object]),default:""},type:{type:String,default:"text"},resize:{type:String,values:["none","both","horizontal","vertical"]},autosize:{type:ne([Boolean,Object]),default:!1},autocomplete:{type:String,default:"off"},formatter:{type:Function},parser:{type:Function},placeholder:{type:String},form:{type:String},readonly:{type:Boolean,default:!1},clearable:{type:Boolean,default:!1},showPassword:{type:Boolean,default:!1},showWordLimit:{type:Boolean,default:!1},suffixIcon:{type:Se},prefixIcon:{type:Se},containerRole:{type:String,default:void 0},label:{type:String,default:void 0},tabindex:{type:[String,Number],default:0},validateEvent:{type:Boolean,default:!0},inputStyle:{type:ne([Object,Array,String]),default:()=>st({})}}),kt={[se]:o=>te(o),input:o=>te(o),change:o=>te(o),focus:o=>o instanceof FocusEvent,blur:o=>o instanceof FocusEvent,clear:()=>!0,mouseleave:o=>o instanceof MouseEvent,mouseenter:o=>o instanceof MouseEvent,keydown:o=>o instanceof Event,compositionstart:o=>o instanceof CompositionEvent,compositionupdate:o=>o instanceof CompositionEvent,compositionend:o=>o instanceof CompositionEvent},Pt=["role"],Ft=["id","type","disabled","formatter","parser","readonly","autocomplete","tabindex","aria-label","placeholder","form"],Vt=["id","tabindex","disabled","readonly","autocomplete","aria-label","placeholder","form"],Nt=ke({name:"ElInput",inheritAttrs:!1}),Tt=ke({...Nt,props:zt,emits:kt,setup(o,{expose:f,emit:i}){const a=o,r=Ke(),l=je(),u=p(()=>{const e={};return a.containerRole==="combobox"&&(e["aria-haspopup"]=r["aria-haspopup"],e["aria-owns"]=r["aria-owns"],e["aria-expanded"]=r["aria-expanded"]),e}),x=p(()=>[a.type==="textarea"?re.b():s.b(),s.m(Fe.value),s.is("disabled",z.value),s.is("exceed",Re.value),{[s.b("group")]:l.prepend||l.append,[s.bm("group","append")]:l.append,[s.bm("group","prepend")]:l.prepend,[s.m("prefix")]:l.prefix||a.prefixIcon,[s.m("suffix")]:l.suffix||a.suffixIcon||a.clearable||a.showPassword,[s.bm("suffix","password-clear")]:K.value&&J.value},r.class]),c=p(()=>[s.e("wrapper"),s.is("focus",G.value)]),g=xt({excludeKeys:p(()=>Object.keys(u.value))}),{form:v,formItem:d}=dt(),{inputId:le}=pt(a,{formItemContext:d}),Fe=ft(),z=vt(),s=xe("input"),re=xe("textarea"),L=X(),C=X(),Z=N(!1),T=N(!1),H=N(!1),ie=N(),O=X(a.inputStyle),k=p(()=>L.value||C.value),{wrapperRef:Ve,isFocused:G,handleFocus:D,handleBlur:_}=St(k,{afterBlur(){var e;a.validateEvent&&((e=d==null?void 0:d.validate)==null||e.call(d,"blur").catch(n=>Ie()))}}),ue=p(()=>{var e;return(e=v==null?void 0:v.statusIcon)!=null?e:!1}),R=p(()=>(d==null?void 0:d.validateState)||""),ce=p(()=>R.value&&at[R.value]),Ne=p(()=>H.value?it:ut),Te=p(()=>[r.style,a.inputStyle]),de=p(()=>[a.inputStyle,O.value,{resize:a.resize}]),E=p(()=>yt(a.modelValue)?"":String(a.modelValue)),K=p(()=>a.clearable&&!z.value&&!a.readonly&&!!E.value&&(G.value||Z.value)),J=p(()=>a.showPassword&&!z.value&&!a.readonly&&!!E.value&&(!!E.value||G.value)),P=p(()=>a.showWordLimit&&!!g.value.maxlength&&(a.type==="text"||a.type==="textarea")&&!z.value&&!a.readonly&&!a.showPassword),Q=p(()=>E.value.length),Re=p(()=>!!P.value&&Q.value>Number(g.value.maxlength)),Be=p(()=>!!l.suffix||!!a.suffixIcon||K.value||a.showPassword||P.value||!!R.value&&ue.value),[$e,Ae]=wt(L);tt(C,e=>{if(Me(),!P.value||a.resize!=="both")return;const n=e[0],{width:h}=n.contentRect;ie.value={right:`calc(100% - ${h+15+6}px)`}});const B=()=>{const{type:e,autosize:n}=a;if(!(!Pe||e!=="textarea"||!C.value))if(n){const h=we(n)?n.minRows:void 0,j=we(n)?n.maxRows:void 0,ge=Ee(C.value,h,j);O.value={overflowY:"hidden",...ge},F(()=>{C.value.offsetHeight,O.value=ge})}else O.value={minHeight:Ee(C.value).minHeight}},Me=(e=>{let n=!1;return()=>{var h;if(n||!a.autosize)return;((h=C.value)==null?void 0:h.offsetParent)===null||(e(),n=!0)}})(B),$=()=>{const e=k.value,n=a.formatter?a.formatter(E.value):E.value;!e||e.value===n||(e.value=n)},ee=async e=>{$e();let{value:n}=e.target;if(a.formatter&&(n=a.parser?a.parser(n):n),!T.value){if(n===E.value){$();return}i(se,n),i("input",n),await F(),$(),Ae()}},pe=e=>{i("change",e.target.value)},fe=e=>{i("compositionstart",e),T.value=!0},ve=e=>{var n;i("compositionupdate",e);const h=(n=e.target)==null?void 0:n.value,j=h[h.length-1]||"";T.value=!ht(j)},me=e=>{i("compositionend",e),T.value&&(T.value=!1,ee(e))},Le=()=>{H.value=!H.value,ye()},ye=async()=>{var e;await F(),(e=k.value)==null||e.focus()},He=()=>{var e;return(e=k.value)==null?void 0:e.blur()},Oe=e=>{Z.value=!1,i("mouseleave",e)},De=e=>{Z.value=!0,i("mouseenter",e)},he=e=>{i("keydown",e)},_e=()=>{var e;(e=k.value)==null||e.select()},be=()=>{i(se,""),i("change",""),i("clear"),i("input","")};return q(()=>a.modelValue,()=>{var e;F(()=>B()),a.validateEvent&&((e=d==null?void 0:d.validate)==null||e.call(d,"change").catch(n=>Ie()))}),q(E,()=>$()),q(()=>a.type,async()=>{await F(),$(),B()}),Ue(()=>{!a.formatter&&a.parser,$(),F(B)}),f({input:L,textarea:C,ref:k,textareaStyle:de,autosize:We(a,"autosize"),focus:ye,blur:He,select:_e,clear:be,resizeTextarea:B}),(e,n)=>Ye((m(),S("div",oe(t(u),{class:t(x),style:t(Te),role:e.containerRole,onMouseenter:De,onMouseleave:Oe}),[y(" input "),e.type!=="textarea"?(m(),S(ae,{key:0},[y(" prepend slot "),e.$slots.prepend?(m(),S("div",{key:0,class:b(t(s).be("group","prepend"))},[U(e.$slots,"prepend")],2)):y("v-if",!0),V("div",{ref_key:"wrapperRef",ref:Ve,class:b(t(c))},[y(" prefix slot "),e.$slots.prefix||e.prefixIcon?(m(),S("span",{key:0,class:b(t(s).e("prefix"))},[V("span",{class:b(t(s).e("prefix-inner"))},[U(e.$slots,"prefix"),e.prefixIcon?(m(),I(t(M),{key:0,class:b(t(s).e("icon"))},{default:A(()=>[(m(),I(W(e.prefixIcon)))]),_:1},8,["class"])):y("v-if",!0)],2)],2)):y("v-if",!0),V("input",oe({id:t(le),ref_key:"input",ref:L,class:t(s).e("inner")},t(g),{type:e.showPassword?H.value?"text":"password":e.type,disabled:t(z),formatter:e.formatter,parser:e.parser,readonly:e.readonly,autocomplete:e.autocomplete,tabindex:e.tabindex,"aria-label":e.label,placeholder:e.placeholder,style:e.inputStyle,form:a.form,onCompositionstart:fe,onCompositionupdate:ve,onCompositionend:me,onInput:ee,onFocus:n[0]||(n[0]=(...h)=>t(D)&&t(D)(...h)),onBlur:n[1]||(n[1]=(...h)=>t(_)&&t(_)(...h)),onChange:pe,onKeydown:he}),null,16,Ft),y(" suffix slot "),t(Be)?(m(),S("span",{key:1,class:b(t(s).e("suffix"))},[V("span",{class:b(t(s).e("suffix-inner"))},[!t(K)||!t(J)||!t(P)?(m(),S(ae,{key:0},[U(e.$slots,"suffix"),e.suffixIcon?(m(),I(t(M),{key:0,class:b(t(s).e("icon"))},{default:A(()=>[(m(),I(W(e.suffixIcon)))]),_:1},8,["class"])):y("v-if",!0)],64)):y("v-if",!0),t(K)?(m(),I(t(M),{key:1,class:b([t(s).e("icon"),t(s).e("clear")]),onMousedown:Ze(t(Ge),["prevent"]),onClick:be},{default:A(()=>[qe(t(lt))]),_:1},8,["class","onMousedown"])):y("v-if",!0),t(J)?(m(),I(t(M),{key:2,class:b([t(s).e("icon"),t(s).e("password")]),onClick:Le},{default:A(()=>[(m(),I(W(t(Ne))))]),_:1},8,["class"])):y("v-if",!0),t(P)?(m(),S("span",{key:3,class:b(t(s).e("count"))},[V("span",{class:b(t(s).e("count-inner"))},Y(t(Q))+" / "+Y(t(g).maxlength),3)],2)):y("v-if",!0),t(R)&&t(ce)&&t(ue)?(m(),I(t(M),{key:4,class:b([t(s).e("icon"),t(s).e("validateIcon"),t(s).is("loading",t(R)==="validating")])},{default:A(()=>[(m(),I(W(t(ce))))]),_:1},8,["class"])):y("v-if",!0)],2)],2)):y("v-if",!0)],2),y(" append slot "),e.$slots.append?(m(),S("div",{key:1,class:b(t(s).be("group","append"))},[U(e.$slots,"append")],2)):y("v-if",!0)],64)):(m(),S(ae,{key:1},[y(" textarea "),V("textarea",oe({id:t(le),ref_key:"textarea",ref:C,class:t(re).e("inner")},t(g),{tabindex:e.tabindex,disabled:t(z),readonly:e.readonly,autocomplete:e.autocomplete,style:t(de),"aria-label":e.label,placeholder:e.placeholder,form:a.form,onCompositionstart:fe,onCompositionupdate:ve,onCompositionend:me,onInput:ee,onFocus:n[2]||(n[2]=(...h)=>t(D)&&t(D)(...h)),onBlur:n[3]||(n[3]=(...h)=>t(_)&&t(_)(...h)),onChange:pe,onKeydown:he}),null,16,Vt),t(P)?(m(),S("span",{key:0,style:Je(ie.value),class:b(t(s).e("count"))},Y(t(Q))+" / "+Y(t(g).maxlength),7)):y("v-if",!0)],64))],16,Pt)),[[Xe,e.type!=="hidden"]])}});var Rt=rt(Tt,[["__file","/home/runner/work/element-plus/element-plus/packages/components/input/src/input.vue"]]);const _t=ct(Rt);export{_t as E,ht as a,yt as i};
