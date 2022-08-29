"use strict";(self.webpackChunkkotestdocs=self.webpackChunkkotestdocs||[]).push([[476],{3905:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return m}});var o=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function s(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?s(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function a(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},s=Object.keys(e);for(o=0;o<s.length;o++)t=s[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(o=0;o<s.length;o++)t=s[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=o.createContext({}),c=function(e){var n=o.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},u=function(e){var n=c(e.components);return o.createElement(l.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},d=o.forwardRef((function(e,n){var t=e.components,r=e.mdxType,s=e.originalType,l=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),d=c(t),m=r,f=d["".concat(l,".").concat(m)]||d[m]||p[m]||s;return t?o.createElement(f,i(i({ref:n},u),{},{components:t})):o.createElement(f,i({ref:n},u))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var s=t.length,i=new Array(s);i[0]=d;var a={};for(var l in n)hasOwnProperty.call(n,l)&&(a[l]=n[l]);a.originalType=e,a.mdxType="string"==typeof e?e:r,i[1]=a;for(var c=2;c<s;c++)i[c]=t[c];return o.createElement.apply(null,i)}return o.createElement.apply(null,t)}d.displayName="MDXCreateElement"},17136:function(e,n,t){t.r(n),t.d(n,{assets:function(){return u},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return a},metadata:function(){return c},toc:function(){return p}});var o=t(87462),r=t(63366),s=(t(67294),t(3905)),i=["components"],a={id:"koin",title:"Koin",sidebar_label:"Koin",slug:"koin.html"},l=void 0,c={unversionedId:"extensions/koin",id:"version-5.2/extensions/koin",title:"Koin",description:"Koin",source:"@site/versioned_docs/version-5.2/extensions/koin.md",sourceDirName:"extensions",slug:"/extensions/koin.html",permalink:"/docs/5.2/extensions/koin.html",draft:!1,editUrl:"https://github.com/kotest/kotest/blob/master/documentation/versioned_docs/version-5.2/extensions/koin.md",tags:[],version:"5.2",frontMatter:{id:"koin",title:"Koin",sidebar_label:"Koin",slug:"koin.html"},sidebar:"extensions",previous:{title:"Current Instant Listeners",permalink:"/docs/5.2/extensions/instant.html"},next:{title:"WireMock",permalink:"/docs/5.2/extensions/wiremock.html"}},u={},p=[{value:"Koin",id:"koin",level:2}],d={toc:p};function m(e){var n=e.components,t=(0,r.Z)(e,i);return(0,s.kt)("wrapper",(0,o.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,s.kt)("h2",{id:"koin"},"Koin"),(0,s.kt)("p",null,"The ",(0,s.kt)("a",{parentName:"p",href:"https://insert-koin.io/"},"Koin DI Framework")," can be used with Kotest through the ",(0,s.kt)("inlineCode",{parentName:"p"},"KoinExtension")," extension."),(0,s.kt)("p",null,"To use the extension in your project, add the dependency to your project:"),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"https://search.maven.org/artifact/io.kotest.extensions/kotest-extensions-koin"},(0,s.kt)("img",{src:"https://img.shields.io/maven-central/v/io.kotest.extensions/kotest-extensions-koin.svg?label=latest%20release"})),"\n",(0,s.kt)("a",{parentName:"p",href:"https://oss.sonatype.org/content/repositories/snapshots/io/kotest/extensions/kotest-extensions-koin/"},(0,s.kt)("img",{src:"https://img.shields.io/nexus/s/https/oss.sonatype.org/io.kotest.extensions/kotest-extensions-koin.svg?label=latest%20snapshot"}))),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-kotlin"},"io.kotest.extensions:kotest-extensions-koin:${version}\n")),(0,s.kt)("p",null,"With the dependency added, we can easily use Koin in our tests!"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-kotlin"},'class KotestAndKoin : FunSpec(), KoinTest {\n\n    override fun extensions() = listOf(KoinExtension(myKoinModule))\n\n    val userService by inject<UserService>()\n\n    init {\n        test("use userService") {\n            userService.getUser().username shouldBe "LeoColman"\n        }\n    }\n}\n')),(0,s.kt)("p",null,"By default, the extension will start/stop the Koin context between leaf tests.\nIf you are using a nested spec style (like DescribeSpec) and instead want the Koin context\nto persist over all leafs of a root tests (for example to share mocked declarations between tests),\nyou can specify the lifecycle mode as ",(0,s.kt)("inlineCode",{parentName:"p"},"KoinLifecycleMode.Root")," in the KoinExtension constructor."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-kotlin"},'class KotestAndKoin : DescribeSpec(), KoinTest {\n\n    override fun extensions() = listOf(KoinExtension(module = myKoinModule, mode = KoinLifecycleMode.Root))\n\n    val userService by inject<UserService>()\n\n    init {\n        describe("use userService") {\n            it("inside a leaf test") {\n                userService.getUser().username shouldBe "LeoColman"\n            }\n            it("this shares the same context") {\n                userService.getUser().username shouldBe "LeoColman"\n            }\n        }\n    }\n}\n')))}m.isMDXComponent=!0}}]);