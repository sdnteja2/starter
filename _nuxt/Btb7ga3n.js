import{d as m,ag as f,I as _,$ as p,S as y,i as o,w as C,c as i,e as d,n as t,U as n,V as h,a6 as k,a0 as x}from"./VrtZl-kz.js";const $={slots:{root:"rounded-[calc(var(--ui-radius)*2)]",header:"p-4 sm:px-6",body:"p-4 sm:p-6",footer:"p-4 sm:px-6"},variants:{variant:{solid:{root:"bg-(--ui-bg-inverted) text-(--ui-bg)"},outline:{root:"bg-(--ui-bg) ring ring-(--ui-border) divide-y divide-(--ui-border)"},soft:{root:"bg-(--ui-bg-elevated)/50 divide-y divide-(--ui-border)"},subtle:{root:"bg-(--ui-bg-elevated)/50 ring ring-(--ui-border) divide-y divide-(--ui-border)"}}},defaultVariants:{variant:"outline"}},B=x;var b;const S=p({extend:p($),...((b=B.ui)==null?void 0:b.card)||{}}),V=m({__name:"Card",props:{as:{},variant:{},class:{},ui:{}},setup(g){const e=g,r=f(),a=_(()=>S({variant:e.variant}));return(s,w)=>{var u;return o(),y(h(k),{as:s.as,class:t(a.value.root({class:[e.class,(u=e.ui)==null?void 0:u.root]}))},{default:C(()=>{var l,c,v;return[r.header?(o(),i("div",{key:0,class:t(a.value.header({class:(l=e.ui)==null?void 0:l.header}))},[n(s.$slots,"header")],2)):d("",!0),r.default?(o(),i("div",{key:1,class:t(a.value.body({class:(c=e.ui)==null?void 0:c.body}))},[n(s.$slots,"default")],2)):d("",!0),r.footer?(o(),i("div",{key:2,class:t(a.value.footer({class:(v=e.ui)==null?void 0:v.footer}))},[n(s.$slots,"footer")],2)):d("",!0)]}),_:3},8,["as","class"])}}}),j=Object.assign(V,{__name:"UCard"});export{j as _};
