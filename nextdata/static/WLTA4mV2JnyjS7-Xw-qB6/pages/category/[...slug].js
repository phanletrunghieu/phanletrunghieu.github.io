(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{"64rR":function(t,e,r){"use strict";r.r(e),r.d(e,"__N_SSG",(function(){return v})),r.d(e,"default",(function(){return b}));var n=r("1OyB"),c=r("vuIU"),o=r("Ji7U"),a=r("md7G"),u=r("foSv"),i=r("q1tI"),l=r.n(i),s=r("TDWf"),f=r("l2SE"),d=r("b0oO"),p=r("Bzcq"),g=r("2v50"),y=l.a.createElement;function m(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}var b=function(t){Object(o.a)(i,t);var e,r=(e=i,function(){var t,r=Object(u.a)(e);if(m()){var n=Object(u.a)(this).constructor;t=Reflect.construct(r,arguments,n)}else t=r.apply(this,arguments);return Object(a.a)(this,t)});function i(){return Object(n.a)(this,i),r.apply(this,arguments)}return Object(c.a)(i,[{key:"render",value:function(){var t=this.props,e=t.allBlogs,r=t.title,n=t.description,c=t.categories,o=t.slug,a=t.currentPage,u=t.totalPage,i=c.find((function(t){return Object(g.a)(t)==o}));return y("div",null,y(s.a,{title:"".concat(i," - ").concat(r),description:n}),y(d.a,{categories:c,currentSlug:o}),y("div",{style:{marginTop:80}},e.map((function(t){return y(f.a,{key:t.slug,image:t.frontmatter.image,title:t.frontmatter.title,date:t.frontmatter.date,markdownBody:t.markdownBody,slug:t.slug})}))),y(p.a,{count:u,current:a,href:"/category/[...slug]",baseUrl:"/category/"+Object(g.a)(i)}))}}]),i}(i.PureComponent),v=!0;b.defaultProps={allBlogs:[],categories:[]}},DdAJ:function(t,e,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/category/[...slug]",function(){return r("64rR")}])}},[["DdAJ",0,1,2,3,4]]]);