(this["webpackJsonpreact-01"]=this["webpackJsonpreact-01"]||[]).push([[4],{289:function(e,t,n){"use strict";n.d(t,"a",(function(){return f}));var r=n(35),a=n(36),o=n(39),u=n(38),l=n(0),s=n.n(l),i=n(14),c=n(10),g=function(e){return{isAuth:e.auth.isAuth}},f=function(e){var t=function(t){Object(o.a)(l,t);var n=Object(u.a)(l);function l(){return Object(r.a)(this,l),n.apply(this,arguments)}return Object(a.a)(l,[{key:"render",value:function(){return this.props.isAuth?s.a.createElement(e,this.props):s.a.createElement(c.a,{to:"/login"})}}]),l}(s.a.Component);return Object(i.b)(g)(t)}},293:function(e,t,n){e.exports={page:"Paginator_page__W1zAS",selectedPage:"Paginator_selectedPage__2Iy9z"}},301:function(e,t,n){"use strict";n.r(t);var r=n(35),a=n(36),o=n(39),u=n(38),l=n(0),s=n.n(l),i=n(14),c=n(127),g=n(51),f=n(293),p=n.n(f),h=function(e){for(var t=e.totalItemCount,n=e.pageSize,r=e.currentPage,a=e.onPageChange,o=e.portionSize,u=void 0===o?5:o,i=Math.ceil(t/n),c=[],f=1;f<=i;f+=1)c.push(f);var h=Math.ceil(i/u),m=Object(l.useState)(1),P=Object(g.a)(m,2),d=P[0],w=P[1],b=(d-1)*u+1,v=d*u;return s.a.createElement("div",null,d>1&&s.a.createElement("button",{onClick:function(){return w(d-1)}},"Prev"),c.filter((function(e){return e>=b&&e<=v})).map((function(e,t){return s.a.createElement("a",{key:t,className:"".concat(p.a.page," ").concat(r===e&&p.a.selectedPage),onClick:function(){return a(e)}},e)})),h>d&&s.a.createElement("button",{onClick:function(){return w(d+1)}},"Next"))},m=n(18),P=n(102),d=n.n(P),w=function(e){var t=e.user,n=e.followingInProgress,r=e.unfollow,a=e.follow;return s.a.createElement("div",null,s.a.createElement("div",null,s.a.createElement(m.b,{to:"/profile/".concat(t.id)},s.a.createElement("img",{src:null!==t.photos.small?t.photos.small:d.a,width:"64px"})),t.followed?s.a.createElement("button",{disabled:n.some((function(e){return e===t.id})),onClick:function(){return r(t.id)}},"Unfollow"):s.a.createElement("button",{disabled:n.some((function(e){return e===t.id})),onClick:function(){return a(t.id)}},"Follow")),s.a.createElement("div",null,s.a.createElement("h2",null,t.name),s.a.createElement("p",null,t.status)))},b=function(e){var t=e.totalUserCount,n=e.pageSize,r=e.currentPage,a=e.onPageChange,o=e.users,u=e.followingInProgress,l=e.unfollow,i=e.follow;return s.a.createElement("main",null,s.a.createElement(h,{totalItemCount:t,pageSize:n,currentPage:r,onPageChange:a}),o.map((function(e){return s.a.createElement(w,{key:e.id,user:e,followingInProgress:u,unfollow:l,follow:i})})))},v=n(47),E=n(9),C=n(289),j=function(e){return e.usersPage.users},O=function(e){return e.usersPage.pageSize},k=function(e){return e.usersPage.totalUserCount},z=function(e){return e.usersPage.currentPage},S=function(e){return e.usersPage.isFetching},I=function(e){return e.usersPage.followingInProgress},y=function(e){Object(o.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(r.a)(this,n);for(var a=arguments.length,o=new Array(a),u=0;u<a;u++)o[u]=arguments[u];return(e=t.call.apply(t,[this].concat(o))).onPageChange=function(t){var n=e.props;(0,n.getUsers)(t,n.pageSize)},e}return Object(a.a)(n,[{key:"componentDidMount",value:function(){var e=this.props;(0,e.getUsers)(e.currentPage,e.pageSize)}},{key:"render",value:function(){return s.a.createElement(s.a.Fragment,null,this.props.isFetching?s.a.createElement(v.default,null):null,s.a.createElement(b,{totalUserCount:this.props.totalUserCount,pageSize:this.props.pageSize,currentPage:this.props.currentPage,onPageChange:this.onPageChange,users:this.props.users,follow:this.props.follow,unfollow:this.props.unfollow,followingInProgress:this.props.followingInProgress}))}}]),n}(s.a.Component);t.default=Object(E.compose)(Object(i.b)((function(e){return{users:j(e),pageSize:O(e),totalUserCount:k(e),currentPage:z(e),isFetching:S(e),followingInProgress:I(e)}}),{follow:c.b,unfollow:c.d,getUsers:c.c}),C.a)(y)}}]);
//# sourceMappingURL=4.aef38045.chunk.js.map