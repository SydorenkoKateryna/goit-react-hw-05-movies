"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[29],{148:function(t,r,n){n.d(r,{Df:function(){return i},M1:function(){return p},TP:function(){return f},tx:function(){return h}});var e=n(861),a=n(757),c=n.n(a),u=n(243),s="https://api.themoviedb.org/3/",o=new URLSearchParams({api_key:"ee704e183d11b50a0d8be9a20340402f",page:1}),i=function(){var t=(0,e.Z)(c().mark((function t(){var r;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.Z.get("".concat(s,"trending/movie/day?").concat(o.toString()));case 2:if(200===(r=t.sent).status){t.next=5;break}throw new Error(r.status);case 5:return t.abrupt("return",r);case 6:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),f=function(){var t=(0,e.Z)(c().mark((function t(r){var n;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.Z.get("".concat(s,"/movie/").concat(r,"?").concat(o.toString()));case 2:if(200===(n=t.sent).status){t.next=5;break}throw new Error(n.status);case 5:return t.abrupt("return",n);case 6:case"end":return t.stop()}}),t)})));return function(r){return t.apply(this,arguments)}}(),p=function(){var t=(0,e.Z)(c().mark((function t(r){var n;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.Z.get("".concat(s,"/movie/").concat(r,"/credits?").concat(o.toString()));case 2:if(200===(n=t.sent).status){t.next=5;break}throw new Error(n.status);case 5:return t.abrupt("return",n);case 6:case"end":return t.stop()}}),t)})));return function(r){return t.apply(this,arguments)}}(),h=function(){var t=(0,e.Z)(c().mark((function t(r){var n;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.Z.get("".concat(s,"/movie/").concat(r,"/reviews?").concat(o.toString()));case 2:if(200===(n=t.sent).status){t.next=5;break}throw new Error(n.status);case 5:return t.abrupt("return",n);case 6:case"end":return t.stop()}}),t)})));return function(r){return t.apply(this,arguments)}}()},29:function(t,r,n){n.r(r),n.d(r,{default:function(){return v}});var e=n(861),a=n(439),c=n(757),u=n.n(c),s=n(791),o=n(148),i=n(689),f=n(87),p=n(184),h=function(t){var r=t.movies,n=(0,i.TH)();return(0,p.jsx)("ul",{children:r.map((function(t){return(0,p.jsx)("li",{children:(0,p.jsx)(f.rU,{to:"movies/".concat(t.id),state:{from:n},children:(0,p.jsx)("h3",{children:t.title})})},t.id)}))})},v=function(){var t=(0,s.useState)(null),r=(0,a.Z)(t,2),n=r[0],c=r[1];return(0,s.useEffect)((function(){if(!n){var t=function(){var t=(0,e.Z)(u().mark((function t(){var r,n;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,(0,o.Df)();case 2:r=t.sent,n=r.data.results,c(n);case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();t()}}),[n]),(0,p.jsxs)("main",{children:[(0,p.jsx)("h1",{children:"Trending today"}),n&&(0,p.jsx)(h,{movies:n})]})}}}]);
//# sourceMappingURL=29.46fad802.chunk.js.map