"use strict";(self.webpackChunkkotestdocs=self.webpackChunkkotestdocs||[]).push([[3811],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return d}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),m=u(n),d=a,f=m["".concat(s,".").concat(d)]||m[d]||p[d]||i;return n?r.createElement(f,l(l({ref:t},c),{},{components:n})):r.createElement(f,l({ref:t},c))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var u=2;u<i;u++)l[u]=n[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},38219:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return s},default:function(){return d},frontMatter:function(){return o},metadata:function(){return u},toc:function(){return p}});var r=n(87462),a=n(63366),i=(n(67294),n(3905)),l=["components"],o={title:"Why Kotest",sidebar_label:"Why Kotest",slug:"why-kotest.html"},s=void 0,u={unversionedId:"why",id:"version-5.4/why",title:"Why Kotest",description:"If you are moving from Java to Kotlin then this page outlines some of the advantages of using Kotest over the common Java test libraries.",source:"@site/versioned_docs/version-5.4/why.md",sourceDirName:".",slug:"/why-kotest.html",permalink:"/docs/why-kotest.html",draft:!1,editUrl:"https://github.com/kotest/kotest/blob/master/documentation/versioned_docs/version-5.4/why.md",tags:[],version:"5.4",frontMatter:{title:"Why Kotest",sidebar_label:"Why Kotest",slug:"why-kotest.html"}},c={},p=[{value:"vs Junit",id:"vs-junit",level:2},{value:"vs AssertJ",id:"vs-assertj",level:2}],m={toc:p};function d(e){var t=e.components,n=(0,a.Z)(e,l);return(0,i.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"If you are moving from Java to Kotlin then this page outlines some of the advantages of using Kotest over the common Java test libraries."),(0,i.kt)("h2",{id:"vs-junit"},"vs Junit"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Tight coroutine integration: Every test is a coroutine, therefore, you can invoke suspension methods without requiring ",(0,i.kt)("inlineCode",{parentName:"p"},"runBlocking")," or other boilerplate"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"One line configuration to enable coroutine debugging for a test or for all tests"),(0,i.kt)("li",{parentName:"ul"},"Callbacks allow modifying the coroutine context for child coroutines"),(0,i.kt)("li",{parentName:"ul"},"Customize the coroutine dispatcher used"),(0,i.kt)("li",{parentName:"ul"},"Launch multiple tests in parallel that do not block each other if they suspend"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Multiplatform support"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"JVM, Native and Javascript support"),(0,i.kt)("li",{parentName:"ul"},"Same test structure across all targets"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Flexible test layout styles"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Simple DSL avoids needing to wrap test names in backticks"),(0,i.kt)("li",{parentName:"ul"},"Layout tests in unrestricted hierarchies."),(0,i.kt)("li",{parentName:"ul"},"Use styles like Javascript frameworks - ",(0,i.kt)("inlineCode",{parentName:"li"},"describe"),"/",(0,i.kt)("inlineCode",{parentName:"li"},"it")),(0,i.kt)("li",{parentName:"ul"},"Or like Scalatest with ",(0,i.kt)("inlineCode",{parentName:"li"},'"my test" should "do foo"')),(0,i.kt)("li",{parentName:"ul"},"Or in a BDD style with ",(0,i.kt)("inlineCode",{parentName:"li"},"given")," / ",(0,i.kt)("inlineCode",{parentName:"li"},"when")," / ",(0,i.kt)("inlineCode",{parentName:"li"},"then"),"."))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Data Driven Testing"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Create repeated tests simply and cleanly using regular Kotlin functions."),(0,i.kt)("li",{parentName:"ul"},'Use data classes as your data driven testing "row" object.'))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Powerful concurrency utilities"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Test that code completes within a given period using ",(0,i.kt)("inlineCode",{parentName:"li"},"eventually")," without blocking threads."),(0,i.kt)("li",{parentName:"ul"},"Test that code passes continually for a given period of time using ",(0,i.kt)("inlineCode",{parentName:"li"},"continually"),", also without blocking a thread."))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Callbacks"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Functional callbacks that allow lifecycle events to be treated as functions."),(0,i.kt)("li",{parentName:"ul"},"Test interceptors allow around-advice style callbacks.")))),(0,i.kt)("h2",{id:"vs-assertj"},"vs AssertJ"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Assertions available as extension functions for IDE discoverability."),(0,i.kt)("li",{parentName:"ul"},"Provides assertions for Kotlin specific types, such as ",(0,i.kt)("inlineCode",{parentName:"li"},"Sequence"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"Pair")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"Regex"),"."),(0,i.kt)("li",{parentName:"ul"},"Most assertions are multiplatform enabled."),(0,i.kt)("li",{parentName:"ul"},"Wrap multiple assertions to collect all errors before exiting the test.")))}d.isMDXComponent=!0}}]);