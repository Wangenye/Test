(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{127:function(e,t,r){"use strict";r.r(t);var n=r(0),a=r(22),c=r.n(a),s=r(10),o=r(51),i=r(81),l=r(80),u=r(2),j="FORUM_LIST_REQUEST",d="FORUM_LIST_SUCCESS",b="FORUM_LIST_FAIL",p="FORUM_DETAILS_REQUEST",O="FORUM_DETAILS_SUCCESS",h="FORUM_DETAILS_FAIL",f="FORUM_CREATE_REQUEST",x="FORUM_CREATE_SUCCESS",g="FORUM_CREATE_FAIL",m="FORUM_CREATE_RESET",v="FORUM_UPDATE_REQUEST",y="FORUM_UPDATE_SUCCESS",E="FORUM_UPDATE_FAIL",S="FORUM_UPDATE_RESET",C="FORUM_CREATE_REVIEW_REQUEST",R="FORUM_CREATE_REVIEW_SUCCESS",_="FORUM_CREATE_REVIEW_FAIL",I="FORUM_CREATE_REVIEW_RESET",L="USER_LOGIN_REQUEST",U="USER_LOGIN_SUCCESS",T="USER_LOGIN_FAIL",w="USER_LOGOUT",A="USER_REGISTER_REQUEST",F="USER_REGISTER_SUCCESS",k="USER_REGISTER_SUCCESS",D="USER_DETAILS_REQUEST",M="USER_DETAILS_SUCCESS",N="USER_DETAILS_FAIL",G="USER_DETAILS_RESET",P=Object(o.combineReducers)({forumCreate:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case f:return Object(u.a)(Object(u.a)({},e),{},{loading:!0});case x:return{success:!0,loading:!1,forum:t.payload};case g:return{loading:!1,error:t.payload};case m:return{};default:return e}},forumsList:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{forums:[]},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case j:return{loading:!0,forums:[]};case d:return{loading:!1,forums:t.payload};case b:return{loading:!1,error:t.payload};default:return e}},forumReviewCreate:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case C:return{loading:!0};case R:return{loading:!1,success:!0};case _:return{loading:!1,error:t.payload};case I:return{};default:return e}},forumUpdate:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{forum:{}},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case v:return{loading:!0};case y:return{loading:!1,success:!0,forum:t.payload};case E:return{loading:!1,error:t.payload};case S:return{forum:{}};default:return e}},forumDetails:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{forum:{reviews:[]}},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case p:return Object(u.a)(Object(u.a)({},e),{},{loading:!0});case O:return{loading:!1,forum:t.payload};case h:return{loading:!1,error:t.payload};default:return e}},userLogin:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case L:return{loading:!0};case U:return{loading:!1,userInfo:t.payload};case T:return{loading:!1,error:t.payload};case w:return{};default:return e}},userRegister:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case A:return{loading:!0};case F:return{loading:!1,userInfo:t.payload};case k:return{loading:!1,error:t.payload};case w:return{};default:return e}},userDetails:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{user:{}},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case D:return Object(u.a)(Object(u.a)({},e),{},{loading:!0});case M:return{loading:!1,user:t.payload};case N:return{loading:!1,error:t.payload};case G:return{user:{}};default:return e}}}),B={userLogin:{userInfo:localStorage.getItem("userInfo")?JSON.parse(localStorage.getItem("userInfo")):null}},Q=[i.a],J=Object(o.createStore)(P,B,Object(l.composeWithDevTools)(o.applyMiddleware.apply(void 0,Q))),V=(r(97),r(98),r(21)),W=r(7),z=(r(70),r(139)),H=r(133),q=r(141),K=r(138),X=r(38),Y=r(14),Z=r.n(Y),$=r(29),ee=r(30),te=r.n(ee),re=function(){return function(e){localStorage.removeItem("userInfo"),e({type:w}),e({type:G}),document.location.href="/"}},ne=r(1);var ae=function(){var e=Object(s.b)(),t=Object(s.c)((function(e){return e.userLogin})).userInfo;return Object(ne.jsx)("div",{children:Object(ne.jsx)(z.a,{bg:"light",expand:"lg",children:Object(ne.jsxs)(H.a,{children:[Object(ne.jsx)(z.a.Brand,{href:"/",children:"Music Forum"}),Object(ne.jsx)(z.a.Toggle,{"aria-controls":"basic-navbar-nav"}),Object(ne.jsx)(z.a.Collapse,{id:"basic-navbar-nav",children:Object(ne.jsx)(q.a,{className:"me-auto",children:t?Object(ne.jsx)(K.a,{title:t.name,id:"username",children:Object(ne.jsx)(K.a.Item,{onClick:function(){e(re())},children:"Logout"})}):Object(ne.jsx)(X.LinkContainer,{to:"/login",children:Object(ne.jsxs)(q.a.Link,{children:[Object(ne.jsx)("i",{className:"fas fa-user"})," Sign In"]})})})})]})})})},ce=r(135),se=r(85),oe=r(134),ie=r(84),le=r(142),ue=function(e){return function(){var t=Object($.a)(Z.a.mark((function t(r){var n,a;return Z.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,r({type:p}),t.next=4,te.a.get("/api/forums/".concat(e.id));case 4:n=t.sent,a=n.data,r({type:O,payload:a}),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(0),r({type:h,payload:t.t0.response&&t.t0.response.data.message?t.t0.response.data.message:t.t0.message});case 12:case"end":return t.stop()}}),t,null,[[0,9]])})));return function(e){return t.apply(this,arguments)}}()};var je=function(e){e.history;var t=Object(W.t)(),r=Object(s.b)(),a=Object(s.c)((function(e){return e.forumsList})),c=a.loading,o=a.error,i=a.forums,l=Object(s.c)((function(e){return e.userLogin})).userInfo,u=Object(s.c)((function(e){return e.forumCreate})),p=u.loading,O=u.error,h=u.success,v=u.forum;return Object(n.useEffect)((function(){r({type:m}),h?t("/forum/create/".concat(v._id)):r(function(){var e=Object($.a)(Z.a.mark((function e(t){var r,n;return Z.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t({type:j}),e.next=4,te.a.get("/api/forums/all");case 4:r=e.sent,n=r.data,t({type:d,payload:n}),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),t({type:b,payload:e.t0.response&&e.t0.response.data.message?e.t0.response.data.message:e.t0.message});case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(t){return e.apply(this,arguments)}}())}),[r,t,h,v,l]),Object(ne.jsxs)("div",{children:[p&&Object(ne.jsx)("h1",{children:"loading"}),O&&Object(ne.jsx)(oe.a,{variant:"danger",children:O}),l?Object(ne.jsxs)(ne.Fragment,{children:[Object(ne.jsx)(ie.a,{variant:"primary",onClick:function(){r(function(){var e=Object($.a)(Z.a.mark((function e(t,r){var n,a,c,s,o;return Z.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t({type:f}),n=r(),a=n.userLogin.userInfo,c={headers:{Authorization:"Bearer ".concat(a.token)}},e.next=6,te.a.post("/api/forums",{},c);case 6:s=e.sent,o=s.data,t({type:x,payload:o}),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0),t({type:g,payload:e.t0.response&&e.t0.response.data.message?e.t0.response.data.message:e.t0.message});case 14:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(t,r){return e.apply(this,arguments)}}())},children:"Create Forum"}),Object(ne.jsx)("br",{}),Object(ne.jsx)("br",{})]}):Object(ne.jsxs)("h5",{children:["please ",Object(ne.jsx)("a",{href:"/login",children:"Login"})," to create a forum !"]}),c?Object(ne.jsx)(oe.a,{variant:"info",children:"Loading ..."}):o?Object(ne.jsx)(oe.a,{variant:"info",children:o}):Object(ne.jsx)(ce.a,{xs:1,md:3,className:"g-4",children:i.map((function(e){return Object(ne.jsx)(se.a,{children:Object(ne.jsxs)(le.a,{style:{width:"18rem"},children:[Object(ne.jsx)(le.a.Img,{variant:"top",height:"200px",width:"200px",src:e.image}),Object(ne.jsxs)(le.a.Body,{children:[Object(ne.jsx)(le.a.Title,{children:e.title}),Object(ne.jsx)(le.a.Text,{children:e.description}),Object(ne.jsx)(X.LinkContainer,{to:"/forum/".concat(e._id),children:Object(ne.jsx)(ie.a,{variant:"primary",children:"View Forum"})},e._id)]})]},e._id)})}))})]})},de=r(6),be=r(86),pe=r(136),Oe=r(140);var he=function(e){e.match;var t=Object(W.x)().id,r=Object(n.useState)(""),a=Object(de.a)(r,2),c=a[0],o=a[1],i=Object(s.b)(),l=Object(s.c)((function(e){return e.forumDetails})),u=(l.loading,l.error,l.forum),j=(Object(s.c)((function(e){return e.userLogin})).userInfo,Object(s.c)((function(e){return e.forumReviewCreate}))),d=(j.loading,j.success);j.error,Object(n.useEffect)((function(){d&&(alert("Review Submitted !!"),o(""),i({type:I})),i(ue({id:t}))}),[i,d]);var b="http:localhost:3001/forum/".concat(t);return console.log(b),Object(ne.jsxs)("div",{id:"ab",children:["Forum Details",Object(ne.jsx)(H.a,{align:"center",children:Object(ne.jsxs)(ce.a,{children:[Object(ne.jsx)(se.a,{md:4,fluid:!0,children:Object(ne.jsxs)(le.a,{children:[Object(ne.jsxs)(le.a.Title,{children:["Title::",u.title]}),Object(ne.jsxs)(le.a.Subtitle,{className:"mb-1 text-muted ",align:"right",children:["Created On :",u.createdAt]}),Object(ne.jsxs)(le.a.Subtitle,{className:"mb-1 text-muted ",align:"right",children:["Created By :",u.user]}),Object(ne.jsx)(le.a.Body,{align:"left",children:u.description}),Object(ne.jsx)(se.a,{md:4,children:Object(ne.jsx)(pe.a,{style:{backgroundPosition:"center",backgroundSize:"cover",backgroundRepeat:"no-repeat"},src:u.image,alt:u.name,width:"350",height:"250"})})]})}),Object(ne.jsxs)(se.a,{md:6,children:[Object(ne.jsx)(be.CopyToClipboard,{text:b,children:Object(ne.jsx)(ie.a,{children:"Copy and Share link of the forum."})}),Object(ne.jsxs)("div",{children:[Object(ne.jsxs)(Oe.a,{children:[Object(ne.jsxs)(Oe.a.Group,{controlId:"comment",children:[Object(ne.jsx)(Oe.a.Label,{children:"Comment"}),Object(ne.jsx)(Oe.a.Control,{as:"textarea",row:"3",value:c,onChange:function(e){return o(e.target.value)}})]}),Object(ne.jsx)("br",{}),Object(ne.jsx)(ie.a,{m:4,variant:"primary",onClick:function(e){i(function(e,t){return function(){var r=Object($.a)(Z.a.mark((function r(n,a){var c,s,o;return Z.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,n({type:C}),c=a(),s=c.userLogin.userInfo,o={headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(s.token)}},r.next=6,te.a.post("/api/forums/".concat(e.id,"/comments"),t,o);case 6:n({type:R}),r.next=12;break;case 9:r.prev=9,r.t0=r.catch(0),n({type:_,payload:r.t0.response&&r.t0.response.data.message?r.t0.response.data.message:r.t0.message});case 12:case"end":return r.stop()}}),r,null,[[0,9]])})));return function(e,t){return r.apply(this,arguments)}}()}({id:t},{comment:c}))},children:"Submit"}),Object(ne.jsx)("br",{})]}),Object(ne.jsx)("br",{}),u.reviews.map((function(e){return Object(ne.jsxs)(le.a,{children:[Object(ne.jsx)(le.a.Title,{align:"right",children:e.name}),Object(ne.jsxs)(le.a.Subtitle,{className:"mb-1 text-muted ",align:"right",children:["Posted on :",e.createdAt.substring(0,10)]}),Object(ne.jsx)(le.a.Body,{align:"right",children:e.comment})]},e.id)}))]})]})]})})]})};var fe=function(){return Object(ne.jsxs)("div",{children:[Object(ne.jsx)("h1",{children:"Home"}),Object(ne.jsx)("main",{children:Object(ne.jsx)(H.a,{children:Object(ne.jsx)(ce.a,{children:Object(ne.jsxs)(se.a,{xs:12,children:["  ",Object(ne.jsx)(je,{})]})})})})]})},xe=function(e){var t=e.variant,r=e.children;return Object(ne.jsx)(oe.a,{variant:t,children:r})};xe.defaultProps={variant:"info"};var ge=xe,me=r(137),ve=function(){return Object(ne.jsx)(me.a,{animation:"border",role:"status",style:{width:"100px",height:"100px",margin:"auto",display:"block"},children:Object(ne.jsx)("span",{className:"sr-only",children:"Loading..."})})},ye=function(e){var t=e.children;return Object(ne.jsx)(H.a,{children:Object(ne.jsx)(ce.a,{className:"justify-content-md-center",children:Object(ne.jsx)(se.a,{xs:12,md:6,children:t})})})},Ee=function(){var e=Object(W.t)(),t=Object(n.useState)(""),r=Object(de.a)(t,2),a=r[0],c=r[1],o=Object(n.useState)(""),i=Object(de.a)(o,2),l=i[0],u=i[1],j=Object(s.b)(),d=Object(s.c)((function(e){return e.userLogin})),b=d.loading,p=d.error,O=d.userInfo;Object(n.useEffect)((function(){O&&e("/")}),[e,O]);return Object(ne.jsxs)(ye,{children:[Object(ne.jsx)("h1",{children:"Sign In"}),p&&Object(ne.jsx)(ge,{variant:"danger",children:p}),b&&Object(ne.jsx)("h1",{children:"loading"}),Object(ne.jsxs)(Oe.a,{onSubmit:function(e){e.preventDefault(),j(function(e,t){return function(){var r=Object($.a)(Z.a.mark((function r(n){var a,c,s;return Z.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,n({type:L}),a={headers:{"Content-Type":"application/json"}},r.next=5,te.a.post("/api/users/login",{email:e,password:t},a);case 5:c=r.sent,s=c.data,n({type:U,payload:s}),localStorage.setItem("userInfo",JSON.stringify(s)),r.next=14;break;case 11:r.prev=11,r.t0=r.catch(0),n({type:T,payload:r.t0.response&&r.t0.response.data.message?r.t0.response.data.message:r.t0.message});case 14:case"end":return r.stop()}}),r,null,[[0,11]])})));return function(e){return r.apply(this,arguments)}}()}(a,l))},children:[Object(ne.jsxs)(Oe.a.Group,{controlId:"email",children:[Object(ne.jsx)(Oe.a.Label,{children:"Email Address"}),Object(ne.jsx)(Oe.a.Control,{type:"email",placeholder:"Enter email",value:a,onChange:function(e){return c(e.target.value)}})]}),Object(ne.jsxs)(Oe.a.Group,{controlId:"password",children:[Object(ne.jsx)(Oe.a.Label,{children:"Password"}),Object(ne.jsx)(Oe.a.Control,{type:"password",placeholder:"Enter password",value:l,onChange:function(e){return u(e.target.value)}})]}),Object(ne.jsx)(ie.a,{type:"submit",variant:"primary",children:"Sign In"})]}),Object(ne.jsx)(ce.a,{className:"py-3",children:Object(ne.jsxs)(se.a,{children:["New Customer?"," ",Object(ne.jsx)(V.Link,{to:"/register",children:"Register"})]})})]})},Se=function(e){e.location;var t=Object(W.t)(),r=Object(n.useState)(""),a=Object(de.a)(r,2),c=a[0],o=a[1],i=Object(n.useState)(""),l=Object(de.a)(i,2),u=l[0],j=l[1],d=Object(n.useState)(""),b=Object(de.a)(d,2),p=b[0],O=b[1],h=Object(n.useState)(""),f=Object(de.a)(h,2),x=f[0],g=f[1],m=Object(n.useState)(null),v=Object(de.a)(m,2),y=v[0],E=v[1],S=Object(s.b)(),C=Object(s.c)((function(e){return e.userRegister})),R=C.loading,_=C.error,I=C.userInfo;Object(n.useEffect)((function(){I&&t("/")}),[t,I]);return Object(ne.jsxs)(ye,{children:[Object(ne.jsx)("h1",{children:"Sign Up"}),y&&Object(ne.jsx)(ge,{variant:"danger",children:y}),_&&Object(ne.jsx)(ge,{variant:"danger",children:_}),R&&Object(ne.jsx)(ve,{}),Object(ne.jsxs)(Oe.a,{onSubmit:function(e){e.preventDefault(),p!==x?E("Passwords do not match"):S(function(e,t,r){return function(){var n=Object($.a)(Z.a.mark((function n(a){var c,s,o;return Z.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,a({type:A}),c={headers:{"Content-Type":"application/json"}},n.next=5,te.a.post("/api/users",{name:e,email:t,password:r},c);case 5:s=n.sent,o=s.data,a({type:F,payload:o}),a({type:U,payload:o}),localStorage.setItem("userInfo",JSON.stringify(o)),n.next=15;break;case 12:n.prev=12,n.t0=n.catch(0),a({type:k,payload:n.t0.response&&n.t0.response.data.message?n.t0.response.data.message:n.t0.message});case 15:case"end":return n.stop()}}),n,null,[[0,12]])})));return function(e){return n.apply(this,arguments)}}()}(c,u,p))},children:[Object(ne.jsxs)(Oe.a.Group,{controlId:"name",children:[Object(ne.jsx)(Oe.a.Label,{children:"Name"}),Object(ne.jsx)(Oe.a.Control,{type:"name",placeholder:"Enter name",value:c,onChange:function(e){return o(e.target.value)}})]}),Object(ne.jsxs)(Oe.a.Group,{controlId:"email",children:[Object(ne.jsx)(Oe.a.Label,{children:"Email Address"}),Object(ne.jsx)(Oe.a.Control,{type:"email",placeholder:"Enter email",value:u,onChange:function(e){return j(e.target.value)}})]}),Object(ne.jsxs)(Oe.a.Group,{controlId:"password",children:[Object(ne.jsx)(Oe.a.Label,{children:"Password"}),Object(ne.jsx)(Oe.a.Control,{type:"password",placeholder:"Enter password",value:p,onChange:function(e){return O(e.target.value)}})]}),Object(ne.jsxs)(Oe.a.Group,{controlId:"confirmPassword",children:[Object(ne.jsx)(Oe.a.Label,{children:"Confirm Password"}),Object(ne.jsx)(Oe.a.Control,{type:"password",placeholder:"Confirm password",value:x,onChange:function(e){return g(e.target.value)}})]}),Object(ne.jsx)(ie.a,{type:"submit",variant:"primary",children:"Register"})]}),Object(ne.jsx)(ce.a,{className:"py-3",children:Object(ne.jsxs)(se.a,{children:["Have an Account?"," ",Object(ne.jsx)("a",{href:"/login",children:"Login"})]})})]})};var Ce=function(e){e.match,e.history;var t=Object(W.x)().id,r=Object(W.t)(),a=Object(n.useState)(""),c=Object(de.a)(a,2),o=c[0],i=c[1],l=Object(n.useState)(0),u=Object(de.a)(l,2),j=u[0],d=u[1],b=Object(n.useState)(""),p=Object(de.a)(b,2),O=p[0],h=p[1],f=Object(n.useState)(""),x=Object(de.a)(f,2),g=x[0],m=x[1],C=Object(s.b)(),R=Object(s.c)((function(e){return e.forumDetails})),_=(R.loading,R.error,R.forum),I=Object(s.c)((function(e){return e.forumUpdate})),L=(I.loading,I.error,I.success);return Object(n.useEffect)((function(){L?(C({type:S}),r("/")):_._id!=={id:t}?C(ue({id:t})):(i(_.title),h(_.image),m(_.category),d(_.description))}),[C,r,L]),Object(ne.jsx)("div",{children:Object(ne.jsx)(H.a,{children:Object(ne.jsx)(ce.a,{xs:1,md:2,className:"g-4",children:Object(ne.jsxs)(se.a,{children:[Object(ne.jsxs)(Oe.a,{p:"10",onSubmit:function(e){e.preventDefault(),C(function(e){return function(){var t=Object($.a)(Z.a.mark((function t(r,n){var a,c,s,o,i;return Z.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,r({type:v}),a=n(),c=a.userLogin.userInfo,s={headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(c.token)}},console.log("sajdbjhgsjfhf",e),t.next=7,te.a.put("/api/forums/edit/".concat(e._id.id),e,s);case 7:o=t.sent,i=o.data,r({type:y,payload:i}),t.next=15;break;case 12:t.prev=12,t.t0=t.catch(0),r({type:E,payload:t.t0.response&&t.t0.response.data.message?t.t0.response.data.message:t.t0.message});case 15:case"end":return t.stop()}}),t,null,[[0,12]])})));return function(e,r){return t.apply(this,arguments)}}()}({_id:{id:t},title:o,image:O,category:g,description:j}))},children:[Object(ne.jsxs)(Oe.a.Group,{controlId:"title",children:[Object(ne.jsx)(Oe.a.Label,{children:"Title"}),Object(ne.jsx)(Oe.a.Control,{type:"text",placeholder:"Enter Title",value:o,onChange:function(e){return i(e.target.value)}})]}),Object(ne.jsx)("br",{}),Object(ne.jsxs)(Oe.a.Group,{controlId:"category",children:[Object(ne.jsx)(Oe.a.Label,{children:"Category"}),Object(ne.jsx)(Oe.a.Control,{type:"text",placeholder:"Enter category",value:g,onChange:function(e){return m(e.target.value)}})]}),Object(ne.jsx)("br",{}),Object(ne.jsx)("br",{}),Object(ne.jsxs)(Oe.a.Group,{controlId:"image",children:[Object(ne.jsx)(Oe.a.Label,{children:"Image URL"}),Object(ne.jsx)(Oe.a.Control,{type:"text",placeholder:"Enter category",value:O,onChange:function(e){return h(e.target.value)}})]}),Object(ne.jsx)("br",{}),Object(ne.jsxs)(Oe.a.Group,{controlId:"description",children:[Object(ne.jsx)(Oe.a.Label,{children:"Description"}),Object(ne.jsx)(Oe.a.Control,{type:"text",placeholder:"Enter description",value:j,onChange:function(e){return d(e.target.value)}})]}),Object(ne.jsx)("br",{}),Object(ne.jsxs)(ie.a,{variant:"primary",type:"submit",children:["Create"," "]})," "]})," "]})})})})};var Re=function(){return Object(ne.jsx)("div",{className:"App",children:Object(ne.jsxs)(V.BrowserRouter,{children:[Object(ne.jsx)(ae,{}),Object(ne.jsxs)(W.f,{children:[Object(ne.jsx)(W.d,{path:"/",element:Object(ne.jsx)(fe,{})}),Object(ne.jsx)(W.d,{path:"/login",element:Object(ne.jsx)(Ee,{})}),Object(ne.jsx)(W.d,{path:"/register",element:Object(ne.jsx)(Se,{})}),Object(ne.jsx)(W.d,{path:"/forum/:id",element:Object(ne.jsx)(he,{})}),Object(ne.jsx)(W.d,{path:"/forum/create/:id",element:Object(ne.jsx)(Ce,{})})]})]})})},_e=function(e){e&&e instanceof Function&&r.e(3).then(r.bind(null,143)).then((function(t){var r=t.getCLS,n=t.getFID,a=t.getFCP,c=t.getLCP,s=t.getTTFB;r(e),n(e),a(e),c(e),s(e)}))};c.a.render(Object(ne.jsx)(s.a,{store:J,children:Object(ne.jsx)(Re,{})}),document.getElementById("root")),_e()},70:function(e,t,r){},97:function(e,t,r){}},[[127,1,2]]]);
//# sourceMappingURL=main.131a11f3.chunk.js.map