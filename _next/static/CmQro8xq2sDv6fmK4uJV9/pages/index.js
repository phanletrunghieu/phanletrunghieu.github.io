(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{RNiq:function(t,e,n){"use strict";n.r(e),n.d(e,"__N_SSG",(function(){return y})),n.d(e,"default",(function(){return v}));var r=n("1OyB"),o=n("vuIU"),a=n("Ji7U"),c=n("md7G"),i=n("foSv"),u=n("q1tI"),l=n.n(u),s=n("TDWf"),f=n("l2SE"),p=n("b0oO"),d=n("Bzcq"),g=l.a.createElement;function m(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}var v=function(t){Object(a.a)(u,t);var e,n=(e=u,function(){var t,n=Object(i.a)(e);if(m()){var r=Object(i.a)(this).constructor;t=Reflect.construct(n,arguments,r)}else t=n.apply(this,arguments);return Object(c.a)(this,t)});function u(){return Object(r.a)(this,u),n.apply(this,arguments)}return Object(o.a)(u,[{key:"render",value:function(){var t=this.props,e=t.allBlogs,n=t.title,r=t.description,o=t.categories,a=t.currentPage,c=t.totalPage;return g("div",null,g(s.a,{title:"".concat(n),description:r}),g(p.a,{categories:o}),g("div",{style:{marginTop:80}},e.map((function(t){return g(f.a,{key:t.slug,image:t.frontmatter.image,title:t.frontmatter.title,date:t.frontmatter.date,markdownBody:t.markdownBody,slug:t.slug})}))),g(d.a,{count:c,current:a,href:"/page/[slug]",baseUrl:"/page"}))}}]),u}(u.PureComponent),y=!0;v.defaultProps={allBlogs:[],categories:[]}},vlRD:function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n("RNiq")}])}},[["vlRD",0,1,2,3,4]]]);