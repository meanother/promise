(this["webpackJsonpdo-list"]=this["webpackJsonpdo-list"]||[]).push([[0],{102:function(e,t,a){},103:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(10),c=a.n(o),i=a(41),l=a(42),s=a(55),u=a(43),d=a(58),p=a(31),m=a(163),f=a(148),h=a(149),E=a(150),v=a(151),b=a(145),w=a(4),g=a(7),y=a.n(g),O=a(152),N=a(105),C=a(158),x=a(75),j=a.n(x),R=a(81),A=Object(b.a)((function(e){return{root:{maxWidth:"34em",width:"100%","& > *":{margin:e.spacing(2),color:y.a[300]}},color:{color:y.a[400]},closeButton:{position:"absolute",right:e.spacing(1),top:e.spacing(1),color:e.palette.grey[500]}}})),T=Object(w.a)({root:{"& input:valid + fieldset,":{borderColor:y.a[500],borderWidth:1},"& input:invalid + fieldset":{borderColor:y.a[200],borderWidth:2},"& input:valid:focus + fieldset":{bordertWidth:4,borderColor:y.a[200],padding:"4px !important"},"& coreel.Mui-focused":{color:y.a[700]},"& textarea + fieldset,":{borderColor:y.a[500],borderWidth:1},"& textarea + fieldset":{borderColor:y.a[200],borderWidth:1},"& textarea:valid:focus + fieldset":{bordertWidth:4,borderColor:y.a[200],padding:"4px !important"}}})(C.a),k=function(e){var t=e.isOpenNewCard,a=e.closeNewCard,o=e.newPointList,c=A(),i=Object(n.createRef)(),l=Object(n.createRef)();return r.a.createElement(m.a,{id:"customized-dialog-title",fullWidth:!0,maxWidth:"sm","aria-coreelledby":"customized-dialog-title",anchor:"top",open:t,onClose:function(){a()}},r.a.createElement(f.a,{id:"customized-dialog-title"},r.a.createElement(R.a,{variant:"h6",gutterBottom:!0,className:c.color},"\u041d\u043e\u0432\u0430\u044f \u0437\u0430\u0434\u0430\u0447\u0430"),r.a.createElement(N.a,{"aria-coreel":"close",className:c.closeButton,onClick:function(){return a()}},r.a.createElement(j.a,null))),r.a.createElement(h.a,null,r.a.createElement(E.a,null,"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043d\u0430\u0437\u0432\u0430\u043d\u0438\u0435 \u0438 \u043e\u043f\u0438\u0441\u0430\u043d\u0438\u0435 \u043a\u0430\u0440\u0442\u043e\u0447\u043a\u0438"),r.a.createElement(T,{coreel:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435",variant:"outlined",className:c.root,inputRef:l}),r.a.createElement(T,{className:c.root,coreel:"\u041e\u043f\u0438\u0441\u0430\u043d\u0438\u0435",variant:"outlined",inputRef:i,multiline:!0,rows:"5"})),r.a.createElement(v.a,{className:c.buttonPosition},r.a.createElement(O.a,{id:"standard-multiline-flexible",variant:"contained",style:{background:y.a[400],color:y.a[50],minWidth:280},onClick:function(){o(l.current.value,i.current.value),a()}},"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c")))},_=a(159),I=a(162),S=a(153),W=a(154),P=a(155),M=Object(b.a)({root:{paddingLeft:15,borderBottom:"1px solid rgba(0, 0, 0, .125)"},color:{color:y.a[400],paddingTop:10,paddingBottom:10},minWidth:{minWidth:300}}),L=function(e){var t=e.list,a=M();return t.map((function(e){return r.a.createElement(_.a,{key:e.id,m:2,width:"80%"},r.a.createElement(I.a,null,r.a.createElement(S.a,{className:a.root},r.a.createElement(R.a,{variant:"h5",className:a.color},e.name)),r.a.createElement(W.a,null,r.a.createElement(P.a,{container:!0,direction:"row",justify:"space-between",alignItems:"flex-start"},r.a.createElement(_.a,{width:"50%",className:a.minWidth},r.a.createElement(R.a,{variant:"h6",className:a.color},"\u041f\u043e\u0434\u0440\u043e\u0431\u043d\u043e\u0441\u0442\u0438:"),r.a.createElement(R.a,{component:"p",variant:"body1"},e.description)),r.a.createElement(_.a,{width:"50%",className:a.minWidth},r.a.createElement(R.a,{variant:"h6",className:a.color},"\u041e\u043f\u0438\u0441\u0430\u043d\u0438\u0435:"),r.a.createElement(R.a,{component:"p",variant:"body1",className:a.color},"\u0421\u0442\u0430\u0442\u0443\u0441:"),r.a.createElement(R.a,{component:"p",variant:"body1",className:a.color},"\u0412\u0430\u0436\u043d\u043e\u0441\u0442\u044c:"),r.a.createElement(R.a,{component:"p",variant:"body1",className:a.color},"\u041a\u0430\u0442\u0435\u0433\u043e\u0440\u0438\u044f:"),r.a.createElement(R.a,{component:"p",variant:"body1",className:a.color},"\u0414\u0435\u0434\u043b\u0430\u0439\u043d:"))))))}))},z="OPEN_NEW_CARD",D="CLOSE_TOP_CARD";var F=a(8),U=a.n(F),B=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.props,t=e.list,a=e.openNewCard,n=e.isOpenNewCard,o=e.closeNewCard,c=e.newPointList;return console.log(a),r.a.createElement("section",null,r.a.createElement(k,{isOpenNewCard:n,closeNewCard:o,newPointList:c}),r.a.createElement(_.a,{pl:10,py:5},r.a.createElement(O.a,{variant:"contained",style:{background:y.a[400],color:y.a[50],minWidth:280},onClick:function(){a()}},"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u043d\u043e\u0432\u0443\u044e \u0437\u0430\u043f\u0438\u0441\u044c")),r.a.createElement(P.a,{container:!0,direction:"column",justify:"center",alignItems:"center"},r.a.createElement(L,{list:t})))}}]),t}(n.Component),G=Object(p.b)((function(e){return{isOpenNewCard:e.newCardReducer.isOpenNewCard,list:e.listReducer.list}}),(function(e){return{openNewCard:function(){return e({type:z,payload:!0})},closeNewCard:function(){return e({type:D,payload:!1})},newPointList:function(t,a){return e(function(e,t){return function(a){var n,r,o;return U.a.async((function(c){for(;;)switch(c.prev=c.next){case 0:return c.next=2,U.a.awrap(a({type:"PUT_NEW_POINT_LIST",payload:{id:Date.now(),name:e,description:t}}));case 2:return(n=new FormData).append("name",e),n.append("description",t),r={body:n,headers:{Authorization:localStorage.getItem("Authorization")},method:"POST"},c.next=8,U.a.awrap(fetch("http://77.244.65.15:3527/api/v1/data/promise/new/",r));case 8:o=c.sent,console.log(o.json());case 10:case"end":return c.stop()}}))}}(t,a))}}}))(B),K=a(156),H=a(157),J=a(76),Q=a.n(J),X=a(164),q=a(79),V=Object(b.a)((function(e){return{root:{flexGrow:1},title:{flexGrow:1}}})),Y=function(e){var t=e.isAutorisation,a=e.entrance,o=e.openAuterisation,c=e.openRegistration,i=e.openAccauntMenu,l=e.closeAccauntMenu,s=e.accauntMenu,u=e.exitAccaunt,d=V();return r.a.createElement(K.a,{position:"static",style:{background:y.a[500]}},r.a.createElement(H.a,{variant:"dense"},r.a.createElement(R.a,{variant:"h4",color:"inherit",className:d.title},"Promise"),t?r.a.createElement(n.Fragment,null,r.a.createElement(N.a,{onClick:function(){return i()}},r.a.createElement(Q.a,{style:{color:y.a[50]}})),r.a.createElement(q.a,{getContentAnchorEl:null,anchorOrigin:{vertical:"top",horizontal:"right"},transformOrigin:{vertical:"bottom",horizontal:"left"},open:s,onClick:function(){return l()}},r.a.createElement(X.a,null,"\u041f\u0440\u043e\u0444\u0438\u043b\u044c"),r.a.createElement(X.a,{onClick:function(){u()}},"\u0412\u044b\u0439\u0442\u0438"))):r.a.createElement(n.Fragment,null,a?r.a.createElement(O.a,{color:"inherit",onClick:function(){return c()}},"\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f"):r.a.createElement(O.a,{color:"inherit",onClick:function(){return o()}},"\u0412\u0445\u043e\u0434"))))},Z=Object(b.a)((function(e){return{root:{width:"25em","& > *":{margin:e.spacing(2),color:y.a[300]}},color:{color:y.a[300]}}})),$=Object(w.a)({root:{"& input:valid + fieldset":{borderColor:y.a[600],borderWidth:1},"& input:invalid + fieldset":{borderColor:y.a[200],borderWidth:2},"& input:valid:focus + fieldset":{bordertWidth:4,borderColor:y.a[200],padding:"4px !important"},"& coreel.Mui-focused":{color:y.a[700]}}})(C.a),ee=function(e){var t=e.registration,a=Object(n.createRef)(),o=Object(n.createRef)(),c=Object(n.createRef)(),i=Z();return r.a.createElement("div",{className:"autor"},r.a.createElement(P.a,{container:!0,direction:"column",alignItems:"center",justify:"flex-start"},r.a.createElement(R.a,{variant:"h2",gutterBottom:!0,className:i.color},"\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f"),r.a.createElement($,{id:"outlined",coreel:"\u041b\u043e\u0433\u0438\u043d",variant:"outlined",inputRef:o,className:i.root}),r.a.createElement($,{id:"outlined",coreel:"\u041f\u043e\u0447\u0442\u0430",variant:"outlined",type:"email",inputRef:a,className:i.root}),r.a.createElement($,{id:"outlined",coreel:"\u041f\u0430\u0440\u043e\u043b\u044c",variant:"outlined",type:"password",inputRef:c,className:i.root}),r.a.createElement(O.a,{size:"large",className:i.root,onClick:function(){return t(a.current.value,o.current.value,c.current.value)}},"\u0421\u043e\u0437\u0434\u0430\u0442\u044c")))},te=Object(b.a)((function(e){return{root:{width:"25em","& > *":{margin:e.spacing(2),color:y.a[300]}},color:{color:y.a[300]}}})),ae=Object(w.a)({root:{"& input:valid + fieldset":{borderColor:y.a[600],borderWidth:1},"& input:invalid + fieldset":{borderColor:y.a[200],borderWidth:2},"& input:valid:focus + fieldset":{bordertWidth:4,borderColor:y.a[200],padding:"4px !important"},"& coreel.Mui-focused":{color:y.a[700]}}})(C.a),ne=function(e){var t=e.autorisation,a=e.newList,o=Object(n.createRef)(),c=Object(n.createRef)(),i=te();return r.a.createElement("div",{className:i.root},r.a.createElement(P.a,{container:!0,direction:"column",alignItems:"center",justify:"flex-start"},r.a.createElement(R.a,{variant:"h2",gutterBottom:!0,className:i.color},"\u0410\u0432\u0442\u043e\u0440\u0438\u0437\u0430\u0446\u0438\u044f"),r.a.createElement(ae,{className:i.root,id:"outlined",coreel:"\u041b\u043e\u0433\u0438\u043d",variant:"outlined",inputRef:o}),r.a.createElement(ae,{className:i.root,id:"outlined-password-input",coreel:"Password",type:"password",autoComplete:"current-password",variant:"outlined",inputRef:c}),r.a.createElement(O.a,{size:"large",className:i.root,onClick:function(){return U.a.async((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,U.a.awrap(t(o.current.value,c.current.value));case 2:return e.next=4,U.a.awrap(a());case 4:case"end":return e.stop()}}))}},"\u0410\u0432\u0442\u043e\u0440\u0438\u0437\u043e\u0432\u0430\u0442\u044c\u0441\u044f")))},re="EXIT_ACCAUNT";var oe="OPEN_AUTORISATION",ce="OPEN_REGISTRATION",ie="OPEN_ACCAUNT_MENU",le="CLOSE_ACCAUNT_MENU";var se=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=this.props,t=e.isAutorisation,a=e.newTokenFromRefresh,n=e.newList;t&&n();var r="true"===localStorage.getItem("remember"),o=localStorage.getItem("tokenData");r&&Date.now()>=5e3*o&&a()}},{key:"render",value:function(){var e=this.props,t=e.isAutorisation,a=e.autorisation,o=e.registration,c=e.newList,i=(e.completedList,e.isOpenTopDraw,e.entrance),l=e.openAuterisation,s=e.openRegistration,u=e.openAccauntMenu,d=e.closeAccauntMenu,p=e.accauntMenu,m=e.exitAccaunt;return r.a.createElement("div",{style:{height:"100vh"}},r.a.createElement(Y,{isAutorisation:t,openAuterisation:l,entrance:i,openRegistration:s,openAccauntMenu:u,closeAccauntMenu:d,accauntMenu:p,exitAccaunt:m}),t?r.a.createElement(n.Fragment,null,r.a.createElement(G,null)):r.a.createElement(P.a,{container:!0,direction:"row",justify:"space-evenly",alignItems:"center",style:{height:"90vh"}},i?r.a.createElement(ne,{autorisation:a,newList:c}):r.a.createElement(ee,{registration:o})))}}]),t}(n.Component),ue=Object(p.b)((function(e){return{isAutorisation:e.tokenReducer.isAutorisation,token:e.tokenReducer.token,list:e.listReducer.list,completedList:e.completedListReducer.completedList,entrance:e.changeEntranceReduser.entrance,accauntMenu:e.changeEntranceReduser.accauntMenu}}),(function(e){return{autorisation:function(t,a){return e(function(e,t){return function(a){var n,r,o,c;return U.a.async((function(i){for(;;)switch(i.prev=i.next){case 0:return(n=new FormData).append("username",e),n.append("password",t),r={method:"POST",body:n},i.next=6,U.a.awrap(fetch("http://77.244.65.15:3527/api/v1/data/auth/jwt/create/",r));case 6:return o=i.sent,i.next=9,U.a.awrap(o.json());case 9:if(c=i.sent,!o.ok){i.next=21;break}return i.next=13,U.a.awrap(localStorage.setItem("Authorization","Bearer ".concat(c.access)));case 13:return i.next=15,U.a.awrap(localStorage.setItem("remember","true"));case 15:return i.next=17,U.a.awrap(localStorage.setItem("tokenData",Date.now()));case 17:return i.next=19,U.a.awrap(localStorage.setItem("refresh",c.refresh));case 19:return i.next=21,U.a.awrap(a({type:"PUT_NEW_TOKEN",payload:"Bearer ".concat(c.access)}));case 21:case"end":return i.stop()}}))}}(t,a))},registration:function(t,a,n){return e(function(e,t,a){return function(n){var r,o,c,i;return U.a.async((function(l){for(;;)switch(l.prev=l.next){case 0:return(r=new FormData).append("username",t),r.append("password",a),r.append("email",e),o={method:"POST",body:r},l.next=7,U.a.awrap(fetch("http://77.244.65.15:3527/api/v1/data/auth/users/",o));case 7:return c=l.sent,l.next=10,U.a.awrap(c.json());case 10:return i=l.sent,console.log(i),l.next=14,U.a.awrap(n({type:"REGISTRATION"}));case 14:case"end":return l.stop()}}))}}(t,a,n))},newList:function(){return e((function(e){var t,a,n;return U.a.async((function(r){for(;;)switch(r.prev=r.next){case 0:return t={method:"GET",headers:{Authorization:localStorage.getItem("Authorization")}},r.next=3,U.a.awrap(fetch("http://77.244.65.15:3527/api/v1/data/promise/",t));case 3:return a=r.sent,r.next=6,U.a.awrap(a.json());case 6:return n=r.sent,r.next=9,U.a.awrap(e({type:"GET_LIST",payload:n.results}));case 9:case"end":return r.stop()}}))}))},newTokenFromRefresh:function(){return e((function(e){var t,a,n,r,o;return U.a.async((function(c){for(;;)switch(c.prev=c.next){case 0:return t=localStorage.getItem("refresh"),(a=new FormData).append("refresh",t),n={body:a,method:"POST"},c.next=6,U.a.awrap(fetch("http://77.244.65.15:3527/api/v1/data/auth/jwt/refresh/",n));case 6:if(401!==(r=c.sent).status){c.next=10;break}return c.next=10,U.a.awrap(e({type:"ERROR_REQUEST"}));case 10:return c.next=12,U.a.awrap(r.json());case 12:return o=c.sent,c.next=15,U.a.awrap(localStorage.setItem("Authorization","Bearer ".concat(o.access)));case 15:return c.next=17,U.a.awrap(e({type:"PUT_NEW_TOKEN_FROM_REFRESH",payload:"Bearer ".concat(o.access)}));case 17:case"end":return c.stop()}}))}))},openAuterisation:function(){return e({type:oe,payload:!0})},openRegistration:function(){return e({type:ce,payload:!1})},openAccauntMenu:function(){return e({type:ie,payload:!0})},closeAccauntMenu:function(){return e({type:le,payload:!1})},exitAccaunt:function(){return e((localStorage.clear(),{type:re,payload:!0}))}}}))(se),de=(a(102),a(27)),pe=a(77),me=a.n(pe),fe=a(78),he=a(15),Ee=localStorage.getItem("Authorization"),ve={token:Ee,isAutorisation:null!==Ee},be=a(80),we={list:[]},ge={completedList:[]},ye={isOpenNewCard:!1},Oe={entrance:!0,accauntMenu:!1},Ne=Object(de.c)({tokenReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ve,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"PUT_NEW_TOKEN":case"PUT_NEW_TOKEN_FROM_REFRESH":return Object(he.a)({},e,{token:t.payload,isAutorisation:!0});case re:return Object(he.a)({},e,{isAutorisation:!1});default:return e}},listReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:we,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_LIST":return Object(he.a)({},e,{list:t.payload});case"PUT_NEW_POINT_LIST":return Object(he.a)({},e,{list:[t.payload].concat(Object(be.a)(e.list))});default:return e}},completedListReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ge;arguments.length>1&&arguments[1];return e},newCardReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ye,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case z:case D:return Object(he.a)({},e,{isOpenNewCard:t.payload});default:return e}},changeEntranceReduser:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Oe,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case oe:case ce:return Object(he.a)({},e,{entrance:t.payload});case ie:case le:return Object(he.a)({},e,{accauntMenu:t.payload});default:return e}}}),Ce=Object(de.d)(Ne,Object(de.a)(me.a,fe.a));c.a.render(r.a.createElement(p.a,{store:Ce},r.a.createElement(ue,null)),document.getElementById("root"))},91:function(e,t,a){e.exports=a(103)}},[[91,1,2]]]);
//# sourceMappingURL=main.ee6d9811.chunk.js.map