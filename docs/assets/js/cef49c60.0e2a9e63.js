"use strict";(self.webpackChunkkotestdocs=self.webpackChunkkotestdocs||[]).push([[7574],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return f}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,l=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=u(n),f=o,h=d["".concat(s,".").concat(f)]||d[f]||c[f]||l;return n?r.createElement(h,a(a({ref:t},p),{},{components:n})):r.createElement(h,a({ref:t},p))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var l=n.length,a=new Array(l);a[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:o,a[1]=i;for(var u=2;u<l;u++)a[u]=n[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},3593:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return s},default:function(){return f},frontMatter:function(){return i},metadata:function(){return u},toc:function(){return c}});var r=n(87462),o=n(63366),l=(n(67294),n(3905)),a=["components"],i={id:"allure",title:"Allure",sidebar_label:"Allure",slug:"allure.html"},s=void 0,u={unversionedId:"extensions/allure",id:"version-5.3/extensions/allure",title:"Allure",description:"Allure is an open-source framework designed for detailed and interactive test reports.",source:"@site/versioned_docs/version-5.3/extensions/allure.md",sourceDirName:"extensions",slug:"/extensions/allure.html",permalink:"/docs/5.3/extensions/allure.html",draft:!1,editUrl:"https://github.com/kotest/kotest/blob/master/documentation/versioned_docs/version-5.3/extensions/allure.md",tags:[],version:"5.3",frontMatter:{id:"allure",title:"Allure",sidebar_label:"Allure",slug:"allure.html"},sidebar:"extensions",previous:{title:"HTML Reporter",permalink:"/docs/5.3/extensions/html_reporter.html"},next:{title:"Current Instant Listeners",permalink:"/docs/5.3/extensions/instant.html"}},p={},c=[{value:"Collect Data",id:"collect-data",level:3},{value:"Gradle Plugin",id:"gradle-plugin",level:3},{value:"Setting Build Dir",id:"setting-build-dir",level:3},{value:"Final Report",id:"final-report",level:3}],d={toc:c};function f(e){var t=e.components,i=(0,o.Z)(e,a);return(0,l.kt)("wrapper",(0,r.Z)({},d,i,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"http://allure.qatools.ru"},"Allure")," is an open-source framework designed for detailed and interactive test reports.\nIt works by generating report files which are then used to create the final HTML report.\nYou can think of it as like the traditional junit report but more advanced and detailed."),(0,l.kt)("admonition",{type:"tip"},(0,l.kt)("p",{parentName:"admonition"},"If you prefer to see an example rather than read docs, then there is a sample project ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/kotest/kotest-examples-allure"},"here"))),(0,l.kt)("p",null,"There are two steps to allure. The first is to generate the raw data when executing tests, the second is to\ncompile that data into the interactive HTML report."),(0,l.kt)("p",null,"This module provides integration for using allure with kotest.\nTo start, add the below dependency to your Gradle build file."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-groovy"},"io.kotest.extensions:kotest-extensions-allure:${kotest.version}\n")),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://search.maven.org/artifact/io.kotest.extensions/kotest-extensions-allure"},(0,l.kt)("img",{src:"https://img.shields.io/maven-central/v/io.kotest.extensions/kotest-extensions-allure.svg?label=latest%20release"})),"\n",(0,l.kt)("a",{parentName:"p",href:"https://oss.sonatype.org/content/repositories/snapshots/io/kotest/extensions/kotest-extensions-allure/"},(0,l.kt)("img",{src:"https://img.shields.io/nexus/s/https/oss.sonatype.org/io.kotest.extensions/kotest-extensions-allure.svg?label=latest%20snapshot"}))),(0,l.kt)("p",null,"Note: The group id is different (io.kotest.extensions) from the main kotest dependencies (io.kotest)."),(0,l.kt)("h3",{id:"collect-data"},"Collect Data"),(0,l.kt)("p",null,"Allure has data collectors for most test frameworks and this module provides the integration for Kotest.\nOnce the module has been added to your buld, wire in the ",(0,l.kt)("inlineCode",{parentName:"p"},"AllureTestReporter")," class globally\nusing ",(0,l.kt)("a",{parentName:"p",href:"/docs/5.3/framework/project-config.html"},"project config"),"."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-kotlin"},"class MyConfig : AbstractProjectConfig {\n    override fun listeners() = listOf(AllureTestReporter())\n}\n")),(0,l.kt)("p",null,"Now, whenever tests are executed, Kotest will write out test data in the allure json format."),(0,l.kt)("h3",{id:"gradle-plugin"},"Gradle Plugin"),(0,l.kt)("p",null,"Now that the tests have completed, we can compile them into\nthe ",(0,l.kt)("a",{parentName:"p",href:"https://docs.qameta.io/allure/#_report_generation"},"final report"),"."),(0,l.kt)("p",null,"This can be done manually using the allure binary, or we can use\nthe ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/allure-framework/allure-gradle"},"allure gradle plugin"),". To use the gradle plugin, first add the\nplugin to your build's plugins block."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-kotlin"},'plugins {\n  ...\n  id("io.qameta.allure") version "2.8.1"\n}\n')),(0,l.kt)("p",null,"Next, add an allure configuration section to set the version and disable autoconfigure (because allure can only auto\nconfigure junit and kotest takes care of this for you anyway)."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-kotlin"},'allure {\n  autoconfigure = false\n  version = "2.13.1"\n}\n')),(0,l.kt)("p",null,"Finally, execute the gradle task ",(0,l.kt)("inlineCode",{parentName:"p"},"allureReport")," and the report will be generated in ",(0,l.kt)("inlineCode",{parentName:"p"},"./build/reports/allure-report")," and\ninside you should find the index.html entry point for the report."),(0,l.kt)("h3",{id:"setting-build-dir"},"Setting Build Dir"),(0,l.kt)("p",null,"If you are not using the gradle plugin then you will need to inform Allure where the build dir is by setting\nthe ",(0,l.kt)("inlineCode",{parentName:"p"},"allure.results.directory")," system property on your tests configuration. If you are using the gradle plugin, then\nthis can be skipped as the gradle plugin does this for you."),(0,l.kt)("p",null,"For example:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'tasks.named<Test>("test") { // or "jvmTest" etc\n   useJUnitPlatform()\n   systemProperty("allure.results.directory", project.buildDir.toString() + "/allure-results")\n}\n')),(0,l.kt)("h3",{id:"final-report"},"Final Report"),(0,l.kt)("p",null,"If all was successful, after test execution and report generation, you will see something like this:"),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"allure screenshot",src:n(8033).Z,width:"1932",height:"996"})))}f.isMDXComponent=!0},8033:function(e,t,n){t.Z=n.p+"assets/images/allure-a95d026b3e0d686c7eb9f32e3f0eb2b8.png"}}]);