"use strict";(self.webpackChunkmiddy=self.webpackChunkmiddy||[]).push([[4510],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return s}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),u=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,p=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),m=u(n),s=a,f=m["".concat(p,".").concat(s)]||m[s]||d[s]||l;return n?r.createElement(f,i(i({ref:t},c),{},{components:n})):r.createElement(f,i({ref:t},c))}));function s(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=m;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var u=2;u<l;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},4543:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return p},default:function(){return s},frontMatter:function(){return o},metadata:function(){return u},toc:function(){return d}});var r=n(7462),a=n(3366),l=(n(7294),n(3905)),i=["components"],o={title:"Release Cycle"},p=void 0,u={unversionedId:"intro/release-cycle",id:"intro/release-cycle",title:"Release Cycle",description:"Each major release has a two (2) month Alpha period, one (1) month Beta, before a full release and becomes Stable.",source:"@site/docs/intro/09-release-cycle.md",sourceDirName:"intro",slug:"/intro/release-cycle",permalink:"/docs/intro/release-cycle",draft:!1,editUrl:"https://github.com/middyjs/middy/tree/main/website/docs/intro/09-release-cycle.md",tags:[],version:"current",lastUpdatedAt:1670433969,formattedLastUpdatedAt:"12/7/2022",sidebarPosition:9,frontMatter:{title:"Release Cycle"},sidebar:"tutorialSidebar",previous:{title:"Utilities",permalink:"/docs/intro/utilities"},next:{title:"Contributing",permalink:"/docs/intro/contributing"}},c={},d=[],m={toc:d};function s(e){var t=e.components,n=(0,a.Z)(e,i);return(0,l.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"Each major release has a two (2) month ",(0,l.kt)("inlineCode",{parentName:"p"},"Alpha")," period, one (1) month ",(0,l.kt)("inlineCode",{parentName:"p"},"Beta"),", before a full release and becomes ",(0,l.kt)("inlineCode",{parentName:"p"},"Stable"),".\nEach release goes into ",(0,l.kt)("inlineCode",{parentName:"p"},"Maintenance")," after nine (9) months, as the next release enters ",(0,l.kt)("inlineCode",{parentName:"p"},"Alpha"),".\nThis time period is chosen for alignment with AWS Lambda ",(0,l.kt)("inlineCode",{parentName:"p"},"nodejs")," runtime releases.\nAll Node.js Long-Term Support (LTS) releases that have AWS Lambda runtimes are supported."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Version"),(0,l.kt)("th",{parentName:"tr",align:null},"Status"),(0,l.kt)("th",{parentName:"tr",align:null},"Alpha Release"),(0,l.kt)("th",{parentName:"tr",align:null},"Stable Release"),(0,l.kt)("th",{parentName:"tr",align:null},"End-of-Life"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"v5"),(0,l.kt)("td",{parentName:"tr",align:null},"Scoping"),(0,l.kt)("td",{parentName:"tr",align:null},"2023-06-01"),(0,l.kt)("td",{parentName:"tr",align:null},"2023-09-01"),(0,l.kt)("td",{parentName:"tr",align:null},"2025-04-30")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"v4"),(0,l.kt)("td",{parentName:"tr",align:null},"Stable"),(0,l.kt)("td",{parentName:"tr",align:null},"2022-10-17"),(0,l.kt)("td",{parentName:"tr",align:null},"2022-11-24"),(0,l.kt)("td",{parentName:"tr",align:null},"2023-09-11")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"v3"),(0,l.kt)("td",{parentName:"tr",align:null},"Deprecated"),(0,l.kt)("td",{parentName:"tr",align:null},"2022-01-04"),(0,l.kt)("td",{parentName:"tr",align:null},"2022-05-12"),(0,l.kt)("td",{parentName:"tr",align:null},"2022-12-31")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"v2"),(0,l.kt)("td",{parentName:"tr",align:null},"Deprecated"),(0,l.kt)("td",{parentName:"tr",align:null},"2021-01-24"),(0,l.kt)("td",{parentName:"tr",align:null},"2021-04-01"),(0,l.kt)("td",{parentName:"tr",align:null},"2022-05-12")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"v1"),(0,l.kt)("td",{parentName:"tr",align:null},"Deprecated"),(0,l.kt)("td",{parentName:"tr",align:null},"2018-05-20"),(0,l.kt)("td",{parentName:"tr",align:null},"2020-04-25"),(0,l.kt)("td",{parentName:"tr",align:null},"2021-04-01")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"v0"),(0,l.kt)("td",{parentName:"tr",align:null},"Deprecated"),(0,l.kt)("td",{parentName:"tr",align:null},"2017-08-03"),(0,l.kt)("td",{parentName:"tr",align:null},"2017-09-04"),(0,l.kt)("td",{parentName:"tr",align:null},"2020-04-25")))),(0,l.kt)("p",null,"Dates are subject to change."),(0,l.kt)("p",null,"If your organization requires a longer maintenance period of Middy, please reach out."))}s.isMDXComponent=!0}}]);