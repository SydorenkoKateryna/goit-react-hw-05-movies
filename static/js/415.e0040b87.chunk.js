"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[415],{6148:function(t,r,n){n.d(r,{Df:function(){return i},M1:function(){return p},TP:function(){return f},V0:function(){return v},tx:function(){return h}});var e=n(5861),a=n(7757),c=n.n(a),u=n(1243),s="https://api.themoviedb.org/3/",o=new URLSearchParams({api_key:"ee704e183d11b50a0d8be9a20340402f",page:1}),i=function(){var t=(0,e.Z)(c().mark((function t(){var r;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.Z.get("".concat(s,"trending/movie/day?").concat(o.toString()));case 2:if(200===(r=t.sent).status){t.next=5;break}throw new Error(r.status);case 5:return t.abrupt("return",r);case 6:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),f=function(){var t=(0,e.Z)(c().mark((function t(r){var n;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.Z.get("".concat(s,"/movie/").concat(r,"?").concat(o.toString()));case 2:if(200===(n=t.sent).status){t.next=5;break}throw new Error(n.status);case 5:return t.abrupt("return",n);case 6:case"end":return t.stop()}}),t)})));return function(r){return t.apply(this,arguments)}}(),p=function(){var t=(0,e.Z)(c().mark((function t(r){var n;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.Z.get("".concat(s,"/movie/").concat(r,"/credits?").concat(o.toString()));case 2:if(200===(n=t.sent).status){t.next=5;break}throw new Error(n.status);case 5:return t.abrupt("return",n);case 6:case"end":return t.stop()}}),t)})));return function(r){return t.apply(this,arguments)}}(),h=function(){var t=(0,e.Z)(c().mark((function t(r){var n;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.Z.get("".concat(s,"/movie/").concat(r,"/reviews?").concat(o.toString()));case 2:if(200===(n=t.sent).status){t.next=5;break}throw new Error(n.status);case 5:return t.abrupt("return",n);case 6:case"end":return t.stop()}}),t)})));return function(r){return t.apply(this,arguments)}}(),v=function(){var t=(0,e.Z)(c().mark((function t(r){var n;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.Z.get("".concat(s,"/search/movie?").concat(o.toString(),"&query=").concat(r));case 2:if(200===(n=t.sent).status){t.next=5;break}throw new Error(n.status);case 5:return t.abrupt("return",n);case 6:case"end":return t.stop()}}),t)})));return function(r){return t.apply(this,arguments)}}()},9937:function(t,r,n){n.d(r,{Z:function(){return u}});var e=n(7689),a=n(1087),c=n(184),u=function(t){var r=t.movies,n=(0,e.TH)();return(0,c.jsx)("ul",{children:r.map((function(t){var r=t.id,e=t.poster_path,u=t.title;return(0,c.jsx)("li",{children:(0,c.jsxs)(a.rU,{to:"/"===n.pathname?"movies/".concat(r):"".concat(r),state:{from:n},children:[(0,c.jsx)("div",{children:(0,c.jsx)("img",{src:e?"".concat("https://image.tmdb.org/t/p/w500").concat(e):"https://static.vecteezy.com/system/resources/previews/005/337/799/original/icon-image-not-found-free-vector.jpg",alt:u,width:"500"})}),(0,c.jsx)("h2",{children:u})]})},r)}))})}},5415:function(t,r,n){n.r(r);var e=n(5861),a=n(9439),c=n(7757),u=n.n(c),s=n(2791),o=n(6148),i=n(9937),f=n(184);r.default=function(){var t=(0,s.useState)(null),r=(0,a.Z)(t,2),n=r[0],c=r[1];return(0,s.useEffect)((function(){if(!n){var t=function(){var t=(0,e.Z)(u().mark((function t(){var r,n;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,(0,o.Df)();case 2:r=t.sent,n=r.data.results,c(n);case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();t()}}),[n]),(0,f.jsxs)("main",{children:[(0,f.jsx)("h1",{children:"Trending today"}),n&&(0,f.jsx)(i.Z,{movies:n})]})}}}]);
//# sourceMappingURL=415.e0040b87.chunk.js.map