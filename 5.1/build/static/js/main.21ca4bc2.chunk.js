(this["webpackJsonpdynamic-settings-antd510"]=this["webpackJsonpdynamic-settings-antd510"]||[]).push([[0],{129:function(e,t,c){},140:function(e,t,c){"use strict";c.r(t);for(var a=c(0),n=c(113),j=c(3),o=c(4),s=(c(129),c(104)),l=c(122),b=c(150),i=c(151),r=c(98),O=c(149),d=c(8),u=[{title:"Name",dataIndex:"name"},{title:"Age",dataIndex:"age",sorter:function(e,t){return e.age-t.age}},{title:"Address",dataIndex:"address",filters:[{text:"London",value:"London"},{text:"New York",value:"New York"}],onFilter:function(e,t){return 0===t.address.indexOf(e)}},{title:"Action",key:"action",sorter:!0,render:function(){return Object(d.jsxs)(l.b,{size:"middle",children:[Object(d.jsx)("a",{children:"Delete"}),Object(d.jsx)("a",{children:Object(d.jsxs)(l.b,{children:["More actions",Object(d.jsx)(s.a,{})]})})]})}}],x=[],h=1;h<=10;h++)x.push({key:h,name:"John Brown",age:Number("".concat(h,"2")),address:"New York No. ".concat(h," Lake Park"),description:"My name is John Brown, I am ".concat(h,"2 years old, living in New York No. ").concat(h," Lake Park.")});var m={expandedRowRender:function(e){return Object(d.jsx)("p",{children:e.description})}},g=function(){return"Here is title"},v=function(){return"Here is footer"},f=function(){var e=Object(a.useState)(!1),t=Object(o.a)(e,2),c=t[0],n=t[1],s=Object(a.useState)(!1),l=Object(o.a)(s,2),h=l[0],f=l[1],p=Object(a.useState)("large"),B=Object(o.a)(p,2),k=B[0],C=B[1],S=Object(a.useState)(m),I=Object(o.a)(S,2),w=I[0],y=I[1],L=Object(a.useState)(!1),N=Object(o.a)(L,2),R=N[0],T=N[1],F=Object(a.useState)(!0),H=Object(o.a)(F,2),G=H[0],J=H[1],P=Object(a.useState)(!0),Y=Object(o.a)(P,2),z=Y[0],A=Y[1],E=Object(a.useState)({}),M=Object(o.a)(E,2),D=M[0],U=M[1],q=Object(a.useState)(!0),K=Object(o.a)(q,2),Q=K[0],V=K[1],W=Object(a.useState)(void 0),X=Object(o.a)(W,2),Z=X[0],$=X[1],_=Object(a.useState)("none"),ee=Object(o.a)(_,2),te=ee[0],ce=ee[1],ae=Object(a.useState)("bottomRight"),ne=Object(o.a)(ae,2),je=ne[0],oe=ne[1],se=Object(a.useState)(!1),le=Object(o.a)(se,2),be=le[0],ie=le[1],re=Object(a.useState)(!1),Oe=Object(o.a)(re,2),de=Oe[0],ue=Oe[1],xe=Object(a.useState)(void 0),he=Object(o.a)(xe,2),me=he[0],ge=he[1],ve={};de&&(ve.y=240),me&&(ve.x="100vw");var fe=u.map((function(e){return Object(j.a)(Object(j.a)({},e),{},{ellipsis:be})}));"fixed"===me&&(fe[0].fixed=!0,fe[fe.length-1].fixed="right");var pe={bordered:c,loading:h,size:k,expandable:w,title:R?g:void 0,showHeader:G,footer:z?v:void 0,rowSelection:D,scroll:ve,tableLayout:Z};return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsxs)(b.a,{layout:"inline",className:"components-table-demo-control-bar",style:{marginBottom:16},children:[Object(d.jsx)(b.a.Item,{label:"Bordered",children:Object(d.jsx)(i.a,{checked:c,onChange:function(e){n(e)}})}),Object(d.jsx)(b.a.Item,{label:"loading",children:Object(d.jsx)(i.a,{checked:h,onChange:function(e){f(e)}})}),Object(d.jsx)(b.a.Item,{label:"Title",children:Object(d.jsx)(i.a,{checked:R,onChange:function(e){T(e)}})}),Object(d.jsx)(b.a.Item,{label:"Column Header",children:Object(d.jsx)(i.a,{checked:G,onChange:function(e){J(e)}})}),Object(d.jsx)(b.a.Item,{label:"Footer",children:Object(d.jsx)(i.a,{checked:z,onChange:function(e){A(e)}})}),Object(d.jsx)(b.a.Item,{label:"Expandable",children:Object(d.jsx)(i.a,{checked:!!w,onChange:function(e){y(e?m:void 0)}})}),Object(d.jsx)(b.a.Item,{label:"Checkbox",children:Object(d.jsx)(i.a,{checked:!!D,onChange:function(e){U(e?{}:void 0)}})}),Object(d.jsx)(b.a.Item,{label:"Fixed Header",children:Object(d.jsx)(i.a,{checked:!!de,onChange:function(e){ue(e)}})}),Object(d.jsx)(b.a.Item,{label:"Has Data",children:Object(d.jsx)(i.a,{checked:!!Q,onChange:function(e){V(e)}})}),Object(d.jsx)(b.a.Item,{label:"Ellipsis",children:Object(d.jsx)(i.a,{checked:!!be,onChange:function(e){ie(e)}})}),Object(d.jsx)(b.a.Item,{label:"Size",children:Object(d.jsxs)(r.a.Group,{value:k,onChange:function(e){C(e.target.value)},children:[Object(d.jsx)(r.a.Button,{value:"large",children:"Large"}),Object(d.jsx)(r.a.Button,{value:"middle",children:"Middle"}),Object(d.jsx)(r.a.Button,{value:"small",children:"Small"})]})}),Object(d.jsx)(b.a.Item,{label:"Table Scroll",children:Object(d.jsxs)(r.a.Group,{value:me,onChange:function(e){ge(e.target.value)},children:[Object(d.jsx)(r.a.Button,{value:void 0,children:"Unset"}),Object(d.jsx)(r.a.Button,{value:"scroll",children:"Scroll"}),Object(d.jsx)(r.a.Button,{value:"fixed",children:"Fixed Columns"})]})}),Object(d.jsx)(b.a.Item,{label:"Table Layout",children:Object(d.jsxs)(r.a.Group,{value:Z,onChange:function(e){$(e.target.value)},children:[Object(d.jsx)(r.a.Button,{value:void 0,children:"Unset"}),Object(d.jsx)(r.a.Button,{value:"fixed",children:"Fixed"})]})}),Object(d.jsx)(b.a.Item,{label:"Pagination Top",children:Object(d.jsxs)(r.a.Group,{value:te,onChange:function(e){ce(e.target.value)},children:[Object(d.jsx)(r.a.Button,{value:"topLeft",children:"TopLeft"}),Object(d.jsx)(r.a.Button,{value:"topCenter",children:"TopCenter"}),Object(d.jsx)(r.a.Button,{value:"topRight",children:"TopRight"}),Object(d.jsx)(r.a.Button,{value:"none",children:"None"})]})}),Object(d.jsx)(b.a.Item,{label:"Pagination Bottom",children:Object(d.jsxs)(r.a.Group,{value:je,onChange:function(e){oe(e.target.value)},children:[Object(d.jsx)(r.a.Button,{value:"bottomLeft",children:"BottomLeft"}),Object(d.jsx)(r.a.Button,{value:"bottomCenter",children:"BottomCenter"}),Object(d.jsx)(r.a.Button,{value:"bottomRight",children:"BottomRight"}),Object(d.jsx)(r.a.Button,{value:"none",children:"None"})]})})]}),Object(d.jsx)(O.a,Object(j.a)(Object(j.a)({},pe),{},{pagination:{position:[te,je]},columns:fe,dataSource:Q?x:[],scroll:ve}))]})};Object(n.createRoot)(document.getElementById("container")).render(Object(d.jsxs)("div",{children:[Object(d.jsx)(f,{}),Object(d.jsx)(f,{}),Object(d.jsx)(f,{}),Object(d.jsx)(f,{}),Object(d.jsx)(f,{}),Object(d.jsx)(f,{}),Object(d.jsx)(f,{}),Object(d.jsx)(f,{}),Object(d.jsx)(f,{}),Object(d.jsx)(f,{}),Object(d.jsx)(f,{}),Object(d.jsx)(f,{}),Object(d.jsx)(f,{}),Object(d.jsx)(f,{}),Object(d.jsx)(f,{}),Object(d.jsx)(f,{}),Object(d.jsx)(f,{}),Object(d.jsx)(f,{}),Object(d.jsx)(f,{}),Object(d.jsx)(f,{}),Object(d.jsx)(f,{}),Object(d.jsx)(f,{}),Object(d.jsx)(f,{}),Object(d.jsx)(f,{}),Object(d.jsx)(f,{}),Object(d.jsx)(f,{}),Object(d.jsx)(f,{}),Object(d.jsx)(f,{}),Object(d.jsx)(f,{}),Object(d.jsx)(f,{})]}))}},[[140,1,2]]]);
//# sourceMappingURL=main.21ca4bc2.chunk.js.map