(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{105:function(e,t,n){e.exports=n(166)},166:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(11),o=n.n(c),i=n(28),l=n(16),u=n(41),s=n(29),p=n(45),m=n(42),d=n(46),b=n(33),h=n(205),f=n(195),E=n(194),g=n(196),y=n(197),v=n(198),j=n(66),O=n(193),w=n(206),k=n(94),x=n.n(k),C=n(209),T=n(208),S=function(e){var t=e.onClick,n=e.toggleList,a=e.pathname;return r.a.createElement("div",{role:"presentation",onClick:n(!1),onKeyDown:n(!1)},r.a.createElement(C.a,null,r.a.createElement(T.a,{button:!0,component:l.b,onClick:function(){return t("home")},to:"/home",selected:"/"===a},"Home"),r.a.createElement(T.a,{component:l.b,onClick:function(){return t("world")},to:"/world",selected:"/world"===a},"World"),r.a.createElement(T.a,{component:l.b,onClick:function(){return t("technology")},to:"/technology",selected:"/technology"===a},"Technology"),r.a.createElement(T.a,{component:l.b,onClick:function(){return t("health")},to:"/health",selected:"/health"===a},"Health"),r.a.createElement(T.a,{component:l.b,onClick:function(){return t("sports")},to:"/sports",selected:"/sports"===a},"Sports"),r.a.createElement(T.a,{component:l.b,onClick:function(){return t("travel")},to:"/travel",selected:"/travel"===a},"Travel"),r.a.createElement(T.a,{component:l.b,onClick:function(){return t("science")},to:"/science",selected:"/science"===a},"Science"),r.a.createElement(T.a,{component:l.b,onClick:function(){return t("food")},to:"/food",selected:"/food"===a},"Food")))};var _=Object(b.f)(function(e){var t=e.changeTag,n=e.location,c=Object(a.useState)({isOpen:!1}),o=Object(j.a)(c,2),i=o[0],l=o[1],u=function(e){return function(t){(!t||"keydown"!==t.type||"Tab"!==t.key&&"Shift"!==t.key)&&l({isOpen:e})}},s=n.pathname;return r.a.createElement(a.Fragment,null,r.a.createElement(O.a,{"aria-label":"Open menu",color:"inherit",onClick:u(!0)},r.a.createElement(x.a,null)),r.a.createElement("div",null,r.a.createElement(w.a,{open:i.isOpen,onClose:u(!1),onOpen:u(!0)},r.a.createElement(S,{onClick:function(e){return t(e)},toggleList:u,pathname:s}))))}),N="CHANGE_TAG",R="FETCH_NEWS_START",W="FETCH_NEWS_WITH_QUERY_START",H="FETCH_NEWS_SUCCESS",F="FETCH_NEWS_ERROR",A=function(e){return{type:N,payload:{tag:e}}},I=function(e){return{type:W,payload:{query:e}}},L=function(e){return{type:H,payload:{news:e}}},D=function(e){return{type:F,payload:{error:e}}},Q={changeTag:A},U=Object(i.b)(null,Q)(_),q=n(168),B=n(65),G=n.n(B),M=Object(q.a)({root:{flexGrow:1,marginBottom:90},container:{backgroundColor:G.a[900]}}),P=n(32),J=n(207),Y=n(95),z=n.n(Y),K=n(35),Z=Object(q.a)(function(e){return{menuButton:{marginRight:e.spacing(2)},title:Object(P.a)({display:"none"},e.breakpoints.up("sm"),{display:"block"}),search:Object(P.a)({position:"relative",borderRadius:e.shape.borderRadius,backgroundColor:Object(K.b)(e.palette.common.white,.15),"&:hover":{backgroundColor:Object(K.b)(e.palette.common.white,.25)},marginRight:e.spacing(2),marginLeft:0,width:"100%"},e.breakpoints.up("sm"),{marginLeft:e.spacing(3),width:"auto"}),searchIcon:{width:e.spacing(7),height:"100%",position:"absolute",pointerEvents:"none",display:"flex",alignItems:"center",justifyContent:"center"},inputRoot:{color:"inherit"},inputInput:Object(P.a)({padding:e.spacing(1,1,1,7),transition:e.transitions.create("width"),width:"100%"},e.breakpoints.up("md"),{width:200}),sectionDesktop:Object(P.a)({display:"none"},e.breakpoints.up("md"),{display:"flex"}),sectionMobile:Object(P.a)({display:"flex"},e.breakpoints.up("md"),{display:"none"})}});var V=Object(b.f)(function(e){var t,n=e.history,c=e.onSubmit,o=Z(),i=Object(a.useState)({article:""}),l=Object(j.a)(i,2),u=l[0],s=l[1];return r.a.createElement("form",{className:o.search,onSubmit:function(e){e.preventDefault(),c(u.article),n.replace({pathname:"/search",search:"query=".concat(u.article)}),s({article:""})}},r.a.createElement("div",{className:o.searchIcon},r.a.createElement(z.a,null)),r.a.createElement(J.a,{name:"article",onChange:(t="article",function(e){s(Object(P.a)({},t,e.target.value))}),value:u.article,margin:"none",placeholder:"Search\u2026",classes:{root:o.inputRoot,input:o.inputInput},inputProps:{"aria-label":"Search"}}))}),X={onSubmit:function(e){return I(e)}},$=Object(i.b)(null,X)(V),ee=function(e){var t=e.children,n=Object(f.a)();return r.a.createElement(E.a,{direction:"down",in:!n},t)};ee.defaultProps={children:null};var te=Object(b.f)(function(e){var t=M();return r.a.createElement("div",{className:t.root},r.a.createElement(ee,e,r.a.createElement(g.a,{className:t.container},r.a.createElement(y.a,{maxWidth:"lg"},r.a.createElement(v.a,{disableGutters:!0},r.a.createElement(U,null),r.a.createElement($,null))))))}),ne={changeTag:A},ae=Object(i.b)(null,ne)(te),re=n(204),ce=n(96),oe=n.n(ce),ie=n(199),le=n(200),ue=n(201),se=n(202),pe={height:0,paddingTop:"40%"},me=Object(q.a)({mainText:{marginBottom:15},textContainer:{display:"flex",justifyContent:"space-between"},cardContainer:{textDecoration:"none"}}),de=function(e){var t=e.title,n=e.abstract,a=e.url,c=e.by,o=e.published,i=e.multimedia,l=me(),u=i.length>0?i[4].url:null,s=u&&u.includes("https"),p=u&&!s?"https://static01.nyt.com/".concat(u):u;return r.a.createElement("a",{className:l.cardContainer,target:"_blank",rel:"noopener noreferrer",href:a},r.a.createElement(ie.a,null,p&&r.a.createElement(le.a,{style:pe,image:p}),r.a.createElement(ue.a,null,r.a.createElement(se.a,{gutterBottom:!0,variant:"h5"},t),r.a.createElement(se.a,{component:"p",className:l.mainText},n),r.a.createElement("div",{className:l.textContainer},r.a.createElement(se.a,{display:"inline",className:l.date,color:"textSecondary"},o),r.a.createElement(se.a,{display:"inline",color:"textSecondary",align:"right"},c)))))};de.defaultProps={by:""};var be=de,he=n(203),fe=Object(q.a)({container:{display:"flex",alignItems:"center",justifyContent:"center",width:"100%",position:"absolute",top:"50%"},circle:{color:G.a[900]}}),Ee=function(){var e=fe();return r.a.createElement("div",{className:e.container},r.a.createElement(he.a,{className:e.circle,disableShrink:!0,color:"inherit",size:50}))},ge=function(e){function t(){var e,n;Object(u.a)(this,t);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(n=Object(p.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={},n}return Object(d.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this.props,t=e.fetchNewsWithQuery,n=e.fetchNews,a=e.history,r=function(e){return oe.a.parse(e.location.search)}(a),c=0===Object.entries(r).length,o=function(e){return e.location.pathname.replace(/^\/+/g,"")}(a);c?n(o):t(r.query)}},{key:"componentDidUpdate",value:function(e){var t=this.props,n=t.tag,a=t.fetchNews;e.tag!==n&&a(n)}},{key:"render",value:function(){var e=this.props,t=e.items;return e.isLoading?r.a.createElement(Ee,null):r.a.createElement(y.a,{maxWidth:"lg"},r.a.createElement(re.a,{container:!0,spacing:4},t.map(function(e){return r.a.createElement(re.a,{item:!0,xs:12,sm:6,key:e.id},r.a.createElement(be,e))})))}}]),t}(a.Component),ye=Object(b.f)(ge),ve=function(e){return e.news.newsTag},je=function(e){return e.news.items},Oe=function(e){return e.news.isLoading},we={fetchNews:function(e){return function(e){return{type:R,payload:{tag:e}}}(e)},fetchNewsWithQuery:function(e){return I(e)}},ke=Object(i.b)(function(e){return{tag:ve(e),items:je(e),isLoading:Oe(e)}},we)(ye),xe=function(e){function t(){var e,n;Object(u.a)(this,t);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(n=Object(p.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={},n}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement(a.Fragment,null,r.a.createElement(ae,null),r.a.createElement(ke,null))}}]),t}(a.Component),Ce=(n(131),function(e){function t(){var e,n;Object(u.a)(this,t);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(n=Object(p.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={},n}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement(a.Fragment,null,r.a.createElement(h.a,null),r.a.createElement(b.d,null,r.a.createElement(b.b,{path:"/home",exact:!0,component:xe}),r.a.createElement(b.b,{path:"/world",exact:!0,component:xe}),r.a.createElement(b.b,{path:"/technology",exact:!0,component:xe}),r.a.createElement(b.b,{path:"/health",exact:!0,component:xe}),r.a.createElement(b.b,{path:"/sports",exact:!0,component:xe}),r.a.createElement(b.b,{path:"/travel",exact:!0,component:xe}),r.a.createElement(b.b,{path:"/science",exact:!0,component:xe}),r.a.createElement(b.b,{path:"/food",exact:!0,component:xe}),r.a.createElement(b.b,{path:"/search",exact:!0,component:xe}),r.a.createElement(b.a,{to:"/home"})))}}]),t}(a.Component)),Te=n(23),Se=n(97),_e=n(98),Ne=n.n(_e),Re=n(100),We=Object(Te.combineReducers)({newsTag:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1?arguments[1]:void 0,n=t.type,a=t.payload;switch(n){case N:return a.tag;default:return e}},items:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0,n=t.type,a=t.payload;switch(n){case H:return a.news;default:return e}},isLoading:function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];switch((arguments.length>1?arguments[1]:void 0).type){case R:case W:return!0;case H:return!1;default:return e}}}),He=n(27),Fe=n.n(He),Ae=n(75),Ie=n(76),Le=n(99),De=n.n(Le),Qe=n(77),Ue=n(21),qe=n(78),Be=n.n(qe),Ge="4cwN9UWcW1HvTrFlSU3iEhwQTQpjEvWZ",Me=function(e){return Be.a.get("https://api.nytimes.com/svc/topstories/v2/".concat(e,".json?api-key=").concat(Ge)).then(function(e){return e.data.results})},Pe=function(e){return Be.a.get("https://api.nytimes.com/svc/search/v2/articlesearch.json?q=".concat(e,"&api-key=").concat(Ge)).then(function(e){return e.data.response.docs})},Je=Fe.a.mark($e),Ye=Fe.a.mark(et),ze=Fe.a.mark(tt),Ke=Fe.a.mark(nt),Ze=Fe.a.mark(at),Ve=function(e){return e.map(function(e){var t=e.byline,n=e.published_date,a=Object(Ie.a)(e,["byline","published_date"]);return Object(Ae.a)({},a,{id:De.a.generate(),published:Object(Qe.format)(n),by:t})})},Xe=function(e){return e.map(function(e){var t=e.byline.original,n=e.headline.main,a=e.pub_date,r=e.web_url,c=e._id,o=Object(Ie.a)(e,["byline","headline","pub_date","web_url","_id"]);return Object(Ae.a)({by:t,title:n,id:c,published:Object(Qe.format)(a),url:r},o)})};function $e(e){var t,n;return Fe.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return t=e.payload.tag,a.next=3,Object(Ue.c)(500);case 3:return a.prev=3,a.next=6,Object(Ue.b)(Me,t);case 6:return n=a.sent,a.next=9,Object(Ue.d)(L(Ve(n)));case 9:a.next=15;break;case 11:return a.prev=11,a.t0=a.catch(3),a.next=15,Object(Ue.d)(D(a.t0));case 15:case"end":return a.stop()}},Je,null,[[3,11]])}function et(e){var t,n;return Fe.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return t=e.payload.query,a.next=3,Object(Ue.c)(500);case 3:return a.prev=3,a.next=6,Object(Ue.b)(Pe,t);case 6:return n=a.sent,a.next=9,Object(Ue.d)(L(Xe(n)));case 9:a.next=15;break;case 11:return a.prev=11,a.t0=a.catch(3),a.next=15,Object(Ue.d)(D(a.t0));case 15:case"end":return a.stop()}},Ye,null,[[3,11]])}function tt(){return Fe.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(Ue.e)("FETCH_NEWS_START",$e);case 2:case"end":return e.stop()}},ze)}function nt(){return Fe.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(Ue.e)("FETCH_NEWS_WITH_QUERY_START",et);case 2:case"end":return e.stop()}},Ke)}function at(){return Fe.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(Ue.a)([tt(),nt()]);case 2:case"end":return e.stop()}},Ze)}var rt=Object(Te.combineReducers)({news:We}),ct=Object(Re.a)(),ot=Object(Te.applyMiddleware)(ct,Ne.a),it=Object(Te.createStore)(rt,Object(Se.composeWithDevTools)(ot));ct.run(at);var lt=it;n(163).config(),o.a.render(r.a.createElement(i.a,{store:lt},r.a.createElement(l.a,{basename:"/"},r.a.createElement(Ce,null))),document.getElementById("root"))}},[[105,1,2]]]);
//# sourceMappingURL=main.941a2425.chunk.js.map