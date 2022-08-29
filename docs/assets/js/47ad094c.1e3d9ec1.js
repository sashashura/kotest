"use strict";(self.webpackChunkkotestdocs=self.webpackChunkkotestdocs||[]).push([[4337],{3905:function(t,e,n){n.d(e,{Zo:function(){return u},kt:function(){return m}});var r=n(67294);function i(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function a(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?a(Object(n),!0).forEach((function(e){i(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function s(t,e){if(null==t)return{};var n,r,i=function(t,e){if(null==t)return{};var n,r,i={},a=Object.keys(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||(i[n]=t[n]);return i}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(i[n]=t[n])}return i}var l=r.createContext({}),c=function(t){var e=r.useContext(l),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},u=function(t){var e=c(t.components);return r.createElement(l.Provider,{value:e},t.children)},d={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},p=r.forwardRef((function(t,e){var n=t.components,i=t.mdxType,a=t.originalType,l=t.parentName,u=s(t,["components","mdxType","originalType","parentName"]),p=c(n),m=i,f=p["".concat(l,".").concat(m)]||p[m]||d[m]||a;return n?r.createElement(f,o(o({ref:e},u),{},{components:n})):r.createElement(f,o({ref:e},u))}));function m(t,e){var n=arguments,i=e&&e.mdxType;if("string"==typeof t||i){var a=n.length,o=new Array(a);o[0]=p;var s={};for(var l in e)hasOwnProperty.call(e,l)&&(s[l]=e[l]);s.originalType=t,s.mdxType="string"==typeof t?t:i,o[1]=s;for(var c=2;c<a;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},98629:function(t,e,n){n.r(e),n.d(e,{assets:function(){return u},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return d}});var r=n(87462),i=n(63366),a=(n(67294),n(3905)),o=["components"],s={id:"nondeterministic",title:"Non-deterministic Testing",slug:"non-deterministic-testing.html"},l=void 0,c={unversionedId:"assertions/nondeterministic",id:"version-5.3/assertions/nondeterministic",title:"Non-deterministic Testing",description:"Sometimes you have to work with code that is non-deterministic in nature. This is not the preferred scenario for writing",source:"@site/versioned_docs/version-5.3/assertions/nondeterministic_testing.md",sourceDirName:"assertions",slug:"/assertions/non-deterministic-testing.html",permalink:"/docs/5.3/assertions/non-deterministic-testing.html",draft:!1,editUrl:"https://github.com/kotest/kotest/blob/master/documentation/versioned_docs/version-5.3/assertions/nondeterministic_testing.md",tags:[],version:"5.3",frontMatter:{id:"nondeterministic",title:"Non-deterministic Testing",slug:"non-deterministic-testing.html"}},u={},d=[],p={toc:d};function m(t){var e=t.components,n=(0,i.Z)(t,o);return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Sometimes you have to work with code that is non-deterministic in nature. This is not the preferred scenario for writing\ntests, but if you have no choice then Kotest provides several functions that help writing tests where the happy path can take a variable amount of time to\npass successfully."),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Function"),(0,a.kt)("th",{parentName:"tr",align:null},"Role"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"/docs/5.3/assertions/eventually.html"},"Eventually")),(0,a.kt)("td",{parentName:"tr",align:null},"Used to ensure that a test will ",(0,a.kt)("em",{parentName:"td"},"eventually")," pass within a specified time duration. The test is repeatedly executed until the test passes or the duration expires.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"/docs/5.3/assertions/continually.html"},"Continually")),(0,a.kt)("td",{parentName:"tr",align:null},"Used to ensure that a test ",(0,a.kt)("em",{parentName:"td"},"continually")," passes for a period of time. Will repeatedly execute a test until the duration has expired or the test fails.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"/docs/5.3/assertions/until.html"},"Until")),(0,a.kt)("td",{parentName:"tr",align:null},"Used to ensure that a predicate will eventually hold true within a specified time duration. The predicate is repeatedly executed until true or the duration expires.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"/docs/5.3/assertions/retry.html"},"Retry")),(0,a.kt)("td",{parentName:"tr",align:null},"Used to ensure that a test willi eventually pass within a given number of retries. The test is repeatedly executed until the test passes or the iteration count is reached.")))))}m.isMDXComponent=!0}}]);