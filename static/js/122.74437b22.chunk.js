"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[122],{148:function(t,r,n){n.d(r,{Df:function(){return i},M1:function(){return p},TP:function(){return f},tx:function(){return h}});var e=n(861),a=n(757),c=n.n(a),u=n(243),s="https://api.themoviedb.org/3/",o=new URLSearchParams({api_key:"ee704e183d11b50a0d8be9a20340402f",page:1}),i=function(){var t=(0,e.Z)(c().mark((function t(){var r;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.Z.get("".concat(s,"trending/movie/day?").concat(o.toString()));case 2:if(200===(r=t.sent).status){t.next=5;break}throw new Error(r.status);case 5:return t.abrupt("return",r);case 6:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),f=function(){var t=(0,e.Z)(c().mark((function t(r){var n;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.Z.get("".concat(s,"/movie/").concat(r,"?").concat(o.toString()));case 2:if(200===(n=t.sent).status){t.next=5;break}throw new Error(n.status);case 5:return t.abrupt("return",n);case 6:case"end":return t.stop()}}),t)})));return function(r){return t.apply(this,arguments)}}(),p=function(){var t=(0,e.Z)(c().mark((function t(r){var n;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.Z.get("".concat(s,"/movie/").concat(r,"/credits?").concat(o.toString()));case 2:if(200===(n=t.sent).status){t.next=5;break}throw new Error(n.status);case 5:return t.abrupt("return",n);case 6:case"end":return t.stop()}}),t)})));return function(r){return t.apply(this,arguments)}}(),h=function(){var t=(0,e.Z)(c().mark((function t(r){var n;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.Z.get("".concat(s,"/movie/").concat(r,"/reviews?").concat(o.toString()));case 2:if(200===(n=t.sent).status){t.next=5;break}throw new Error(n.status);case 5:return t.abrupt("return",n);case 6:case"end":return t.stop()}}),t)})));return function(r){return t.apply(this,arguments)}}()},122:function(t,r,n){n.r(r),n.d(r,{default:function(){return p}});var e=n(861),a=n(439),c=n(757),u=n.n(c),s=n(791),o=n(689),i=n(148),f=n(184),p=function(){var t=(0,o.UO)().id,r=(0,s.useState)([]),n=(0,a.Z)(r,2),c=n[0],p=n[1];return(0,s.useEffect)((function(){var r=function(){var r=(0,e.Z)(u().mark((function r(){var n,e;return u().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,(0,i.tx)(t);case 2:n=r.sent,e=n.data.results,p(e);case 5:case"end":return r.stop()}}),r)})));return function(){return r.apply(this,arguments)}}();r()}),[t]),(0,f.jsx)(f.Fragment,{children:c.length?(0,f.jsx)("ul",{children:c.map((function(t){return(0,f.jsxs)("li",{children:[(0,f.jsxs)("h3",{children:["Author: ",t.author]}),(0,f.jsx)("p",{children:t.content})]},t.id)}))}):(0,f.jsx)("p",{children:"We don't have any reviews for this movie."})})}}}]);
//# sourceMappingURL=122.74437b22.chunk.js.map