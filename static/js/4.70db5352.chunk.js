(this["webpackJsonpreact-01"]=this["webpackJsonpreact-01"]||[]).push([[4],{288:function(e,t,n){"use strict";n.d(t,"a",(function(){return f}));var r=n(32),o=n(33),a=n(36),u=n(35),l=n(0),s=n.n(l),i=n(13),c=n(9),g=function(e){return{isAuth:e.auth.isAuth}},f=function(e){var t=function(t){Object(a.a)(l,t);var n=Object(u.a)(l);function l(){return Object(r.a)(this,l),n.apply(this,arguments)}return Object(o.a)(l,[{key:"render",value:function(){return this.props.isAuth?s.a.createElement(e,this.props):s.a.createElement(c.a,{to:"/login"})}}]),l}(s.a.Component);return Object(i.b)(g)(t)}},292:function(e,t,n){e.exports={page:"Paginator_page__W1zAS",selectedPage:"Paginator_selectedPage__2Iy9z"}},300:function(e,t,n){"use strict";n.r(t);var r=n(32),o=n(33),a=n(36),u=n(35),l=n(0),s=n.n(l),i=n(13),c=n(127),g=n(85),f=n(292),p=n.n(f),h=function(){for(var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.totalItemCount,n=e.pageSize,r=e.currentPage,o=e.onPageChange,a=e.portionSize,u=void 0===a?5:a,i=Math.ceil(t/n),c=[],f=1;f<=i;f+=1)c.push(f);var h=Math.ceil(i/u),m=Object(l.useState)(1),P=Object(g.a)(m,2),d=P[0],w=P[1],b=(d-1)*u+1,v=d*u;return s.a.createElement("div",null,d>1&&s.a.createElement("button",{onClick:function(){return w(d-1)}},"Prev"),c.filter((function(e){return e>=b&&e<=v})).map((function(e){return s.a.createElement("a",{className:"".concat(p.a.page," ").concat(r===e&&p.a.selectedPage),onClick:function(){return o(e)}},e)})),h>d&&s.a.createElement("button",{onClick:function(){return w(d+1)}},"Next"))},m=n(17),P=n(102),d=n.n(P),w=function(e){var t=e.user,n=e.followingInProgress,r=e.unfollow,o=e.follow;return s.a.createElement("div",null,s.a.createElement("div",null,s.a.createElement(m.b,{to:"/profile/".concat(t.id)},s.a.createElement("img",{src:null!==t.photos.small?t.photos.small:d.a,width:"64px"})),t.followed?s.a.createElement("button",{disabled:n.some((function(e){return e===t.id})),onClick:function(){return r(t.id)}},"Unfollow"):s.a.createElement("button",{disabled:n.some((function(e){return e===t.id})),onClick:function(){return o(t.id)}},"Follow")),s.a.createElement("div",null,s.a.createElement("h2",null,t.name),s.a.createElement("p",null,t.status)))},b=function(e){var t=e.totalUserCount,n=e.pageSize,r=e.currentPage,o=e.onPageChange,a=e.users,u=e.followingInProgress,l=e.unfollow,i=e.follow;return s.a.createElement("main",null,s.a.createElement(h,{totalItemCount:t,pageSize:n,currentPage:r,onPageChange:o}),a.map((function(e){return s.a.createElement(w,{key:e.id,user:e,followingInProgress:u,unfollow:l,follow:i})})))},v=n(47),E=n(8),C=n(288),j=function(e){return e.usersPage.users},O=function(e){return e.usersPage.pageSize},z=function(e){return e.usersPage.totalUserCount},S=function(e){return e.usersPage.currentPage},k=function(e){return e.usersPage.isFetching},I=function(e){return e.usersPage.followingInProgress},U=function(e){Object(a.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(r.a)(this,n);for(var o=arguments.length,a=new Array(o),u=0;u<o;u++)a[u]=arguments[u];return(e=t.call.apply(t,[this].concat(a))).onPageChange=function(t){var n=e.props;(0,n.getUsers)(t,n.pageSize)},e}return Object(o.a)(n,[{key:"componentDidMount",value:function(){var e=this.props;(0,e.getUsers)(e.currentPage,e.pageSize)}},{key:"render",value:function(){return s.a.createElement(s.a.Fragment,null,this.props.isFetching?s.a.createElement(v.default,null):null,s.a.createElement(b,{totalUserCount:this.props.totalUserCount,pageSize:this.props.pageSize,currentPage:this.props.currentPage,onPageChange:this.onPageChange,users:this.props.users,follow:this.props.follow,unfollow:this.props.unfollow,followingInProgress:this.props.followingInProgress}))}}]),n}(s.a.Component);t.default=Object(E.compose)(Object(i.b)((function(e){return{users:j(e),pageSize:O(e),totalUserCount:z(e),currentPage:S(e),isFetching:k(e),followingInProgress:I(e)}}),{follow:c.b,unfollow:c.d,getUsers:c.c}),C.a)(U)}}]);
//# sourceMappingURL=4.70db5352.chunk.js.map