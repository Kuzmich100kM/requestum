(this["webpackJsonpgithub-search"]=this["webpackJsonpgithub-search"]||[]).push([[0],{70:function(e,t,r){},71:function(e,t,r){"use strict";r.r(t);var c=r(0),n=r(12),s=r.n(n),a=r(7),i=r(2),j=r(18),o=r.n(j),u=r(30),l=r(35),b=r(6),h=r(31),d=r.n(h).a.create({baseURL:"https://api.github.com/search/repositories?q="}),O=function(e){return d.get("".concat(e))},x="SET_REPO",p="SET_HISTORY",v="CHANGE_HISTORY",f="IS_LOADING",m={repo:[],history:[],isLoading:!1};var g=function(e){return{type:v,term:e}},y=function(e){return{type:f,bool:e}},N=r(1);function E(){var e=Object(a.b)(),t=Object(c.useCallback)(function(e){var t,r=this;return function(){for(var c=arguments.length,n=new Array(c),s=0;s<c;s++)n[s]=arguments[s];var a=r;t&&clearTimeout(t),t=setTimeout((function(){t=null,e.apply(a,n)}),1e3)}}((function(t){var r;e((r=t,function(){var e=Object(u.a)(o.a.mark((function e(t){var c,n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t(g(r)),t(y(!0)),e.next=5,O(r);case 5:c=e.sent,n=c.data.items.map((function(e){return{id:e.id,name:e.name,language:e.language,description:e.description,html_url:e.html_url}})),t({type:x,data:n}),t(y(!1)),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0),console.error("Failed with API response",e.t0);case 14:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(t){return e.apply(this,arguments)}}())),document.getElementById("sch").value=""})),[]);return Object(N.jsx)("input",{id:"sch",placeholder:"search",onChange:function(e){return t(e.target.value)}})}var S=r(73);function _(){var e=Object(a.c)((function(e){return e.search.history})),t=Object(a.b)();Object(c.useEffect)((function(){var e=JSON.parse(localStorage.getItem("history"));e&&t({type:p,arr:e})}),[t]),Object(c.useEffect)((function(){return localStorage.setItem("history",JSON.stringify(e))}),[e]);var r=e.map((function(e){return Object(N.jsx)("div",{children:e},Object(S.a)())}));return Object(N.jsx)(N.Fragment,{children:e.length>0&&Object(N.jsxs)("div",{className:"history",children:[Object(N.jsx)("div",{className:"title",children:"SearchHistory:"}),Object(N.jsx)("div",{className:"list",children:r})]})})}function w(){return Object(N.jsxs)("div",{className:"search-block",children:[Object(N.jsx)(E,{}),Object(N.jsx)(_,{})]})}function I(e){var t=e.data,r=t.name,c=t.language,n=t.description,s=t.html_url;return Object(N.jsx)("a",{href:s,children:Object(N.jsxs)("div",{className:"results-one",children:[Object(N.jsx)("div",{className:"name",children:r}),Object(N.jsxs)("div",{children:["Language: ",Object(N.jsx)("b",{children:c})]}),Object(N.jsxs)("div",{children:["Description: ",Object(N.jsx)("b",{children:n})]})]})})}var T=r.p+"static/media/loader.0d810226.svg",L=function(){return Object(N.jsx)("div",{className:"preloaderWrap",children:Object(N.jsx)("img",{src:T,alt:"preloader"})})};function k(){var e=Object(a.c)((function(e){return e.search.repo})),t=Object(a.c)((function(e){return e.search.isLoading})),r=Object(a.c)((function(e){return e.search.history})),c=e.map((function(e){return Object(N.jsx)(I,{data:e},e.id)})),n=e.length>0?Object(N.jsx)("div",{className:"list",children:c}):t?Object(N.jsx)(L,{}):!r.length>0?Object(N.jsxs)("div",{className:"empty",children:[Object(N.jsx)("b",{children:"\ud83e\udc14"})," \xa0\xa0Start search here"]}):Object(N.jsxs)("div",{className:"empty",children:[Object(N.jsx)("b",{children:"\ud83e\udc14"})," \xa0\xa0Let's search!"]});return Object(N.jsxs)("div",{className:"results-block",children:[" ",n]})}function A(){return Object(N.jsxs)("div",{className:"home",children:[Object(N.jsx)(w,{}),Object(N.jsx)(k,{})]})}function D(){return Object(N.jsxs)("div",{className:"page404",children:[Object(N.jsx)("div",{children:"404"}),Object(N.jsx)("div",{children:"PAGE NOT FOUND"})]})}function H(){return Object(N.jsxs)(i.c,{children:[Object(N.jsx)(i.a,{exact:!0,path:"/",render:function(){return Object(N.jsx)(A,{})}}),Object(N.jsx)(i.a,{path:"*",render:function(){return Object(N.jsx)(D,{})}})]})}var R=r(13),C=r.p+"static/media/logo.5c719af3.png";function G(){return Object(N.jsx)("div",{className:"logo",children:Object(N.jsx)(R.a,{to:"/",children:Object(N.jsx)("img",{src:C,alt:"requestum logo"})})})}function J(){return Object(N.jsx)("div",{className:"navbar",children:"Github user search app"})}function P(){return Object(N.jsxs)("header",{children:[Object(N.jsx)(G,{}),Object(N.jsx)(J,{})]})}var F=r(33),U=Object(F.a)();function q(){return Object(N.jsxs)(i.b,{history:U,children:[Object(N.jsx)(P,{}),Object(N.jsx)(H,{})]})}var B=r(9),X=r(34),Y=Object(B.b)({search:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:m,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case x:return console.log("repo :>> ",t.data),Object(b.a)(Object(b.a)({},e),{},{repo:t.data});case p:return Object(b.a)(Object(b.a)({},e),{},{history:t.arr});case v:var r=Object(l.a)(e.history);return r.length>=5&&r.shift(),r.push(t.term),console.log("term :>> ",t.term),console.log("newHistory :>> ",r),Object(b.a)(Object(b.a)({},e),{},{history:r});case f:return Object(b.a)(Object(b.a)({},e),{},{isLoading:t.bool});default:return e}}}),M=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||B.c,V=Object(B.d)(Y,M(Object(B.a)(X.a)));window.store=V;var W=V;r(70);s.a.render(Object(N.jsx)(a.a,{store:W,children:Object(N.jsx)(q,{})}),document.getElementById("root"))}},[[71,1,2]]]);
//# sourceMappingURL=main.9c733a0b.chunk.js.map