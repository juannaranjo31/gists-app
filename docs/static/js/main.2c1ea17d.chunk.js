(this["webpackJsonpgits-app"]=this["webpackJsonpgits-app"]||[]).push([[0],{21:function(e,t,s){},27:function(e,t,s){"use strict";s.r(t);var n=s(0),c=s.n(n),a=s(13),r=s.n(a),i=(s(21),s(7)),u=s(8),l=s(12),j=s.n(l),o=s(16),d=function(){var e=Object(o.a)(j.a.mark((function e(t){var s,n,c;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s="https://api.github.com/users/".concat(t,"/gists"),e.next=3,fetch(s);case 3:return n=e.sent,e.next=6,n.json();case 6:return c=e.sent,e.abrupt("return",c);case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),b=s(1),h=function(e){var t=e.description,s=void 0===t?"":t,n=e.file,c=void 0===n?"":n,a=e.url,r=void 0===a?"":a,i=e.language,u=void 0===i?"":i;return s||(s="Untitled gist"),u||(u="Plain Text"),Object(b.jsxs)("div",{className:"gist-card",children:[Object(b.jsxs)("div",{className:"description",children:[Object(b.jsx)("span",{children:s}),Object(b.jsxs)("div",{className:"forks",children:[Object(b.jsx)("button",{children:"Open Fork"}),Object(b.jsx)("a",{href:r,target:"__blank",children:Object(b.jsx)("i",{className:"fas fa-paperclip"})})]})]}),Object(b.jsx)("hr",{}),Object(b.jsxs)("div",{className:"files",children:[Object(b.jsx)("h4",{children:"Files"}),Object(b.jsxs)("i",{className:"fas fa-file",children:[" ",Object(b.jsxs)("span",{children:[" ",c," "]})," "]}),Object(b.jsxs)("span",{className:"language",style:{backgroundColor:"JavaScript"===u&&"#FF5050"},children:[" ",u," "]})]})]})},p=c.a.memo((function(e){var t=function(e){var t=Object(n.useState)({data:[],loading:!0}),s=Object(i.a)(t,2),c=s[0],a=s[1];return Object(n.useEffect)((function(){d(e).then((function(e){return a({data:e,loading:!1})}))}),[e]),c}(e.user),s=t.data,c=t.loading;return Object(b.jsx)("div",{className:"gists-grid",children:0===s.length?c?Object(b.jsx)("p",{children:"Loading..."}):Object(b.jsx)("p",{children:"No gists found. Try searching by a username."}):s.map((function(e){var t=e.html_url,s=e.files,n=e.description,c=e.id,a=Object.values(s)[0].filename,r=Object.values(s)[0].language;return Object(b.jsx)(h,{description:n,file:a,url:t,language:r},c)}))})})),f=function(){var e=Object(n.useState)(""),t=Object(i.a)(e,2),s=t[0],c=t[1];return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsxs)("div",{className:"app",children:[Object(b.jsx)(u.c,{initialValues:{username:""},onSubmit:function(e){var t=e.username;document.querySelector("form input").value="",c(t)},children:Object(b.jsxs)(u.b,{children:[Object(b.jsx)(u.a,{id:"username",name:"username",placeholder:"User name",autoComplete:"off"}),Object(b.jsx)("button",{type:"submit",className:"btn-submit",children:" Get Gists "}),Object(b.jsx)("button",{type:"button",className:"btn-reset",onClick:function(){document.querySelector("form input").value=""},children:" Reset "})]})}),Object(b.jsx)("i",{className:"fab fa-github",children:"GitHub Gists"})]}),Object(b.jsx)("hr",{}),""!==s?Object(b.jsx)("div",{children:Object(b.jsx)(p,{user:s})}):Object(b.jsx)("p",{children:"No gists found. Try searching by a username."})]})};r.a.render(Object(b.jsx)(f,{}),document.getElementById("root"))}},[[27,1,2]]]);
//# sourceMappingURL=main.2c1ea17d.chunk.js.map