(self.webpackChunkgramref=self.webpackChunkgramref||[]).push([[7631],{3905:(e,t,n)=>{"use strict";n.d(t,{Zo:()=>m,kt:()=>d});var r=n(7294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var o=r.createContext({}),u=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=u(e.components);return r.createElement(o.Provider,{value:t},e.children)},k="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,l=e.mdxType,a=e.originalType,o=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),k=u(n),p=l,d=k["".concat(o,".").concat(p)]||k[p]||c[p]||a;return n?r.createElement(d,i(i({ref:t},m),{},{components:n})):r.createElement(d,i({ref:t},m))}));function d(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var a=n.length,i=new Array(a);i[0]=p;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s[k]="string"==typeof e?e:l,i[1]=s;for(var u=2;u<a;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},5162:(e,t,n)=>{"use strict";n.d(t,{Z:()=>i});var r=n(7294),l=n(6010);const a={tabItem:"tabItem_Ymn6"};function i(e){let{children:t,hidden:n,className:i}=e;return r.createElement("div",{role:"tabpanel",className:(0,l.Z)(a.tabItem,i),hidden:n},t)}},4866:(e,t,n)=>{"use strict";n.d(t,{Z:()=>y});var r=n(7462),l=n(7294),a=n(6010),i=n(2466),s=n(6550),o=n(1980),u=n(7392),m=n(12);function k(e){return function(e){return l.Children.map(e,(e=>{if(!e||(0,l.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:n,attributes:r,default:l}}=e;return{value:t,label:n,attributes:r,default:l}}))}function c(e){const{values:t,children:n}=e;return(0,l.useMemo)((()=>{const e=t??k(n);return function(e){const t=(0,u.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function p(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function d(e){let{queryString:t=!1,groupId:n}=e;const r=(0,s.k6)(),a=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,o._X)(a),(0,l.useCallback)((e=>{if(!a)return;const t=new URLSearchParams(r.location.search);t.set(a,e),r.replace({...r.location,search:t.toString()})}),[a,r])]}function h(e){const{defaultValue:t,queryString:n=!1,groupId:r}=e,a=c(e),[i,s]=(0,l.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=n.find((e=>e.default))??n[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:a}))),[o,u]=d({queryString:n,groupId:r}),[k,h]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[r,a]=(0,m.Nk)(n);return[r,(0,l.useCallback)((e=>{n&&a.set(e)}),[n,a])]}({groupId:r}),g=(()=>{const e=o??k;return p({value:e,tabValues:a})?e:null})();(0,l.useLayoutEffect)((()=>{g&&s(g)}),[g]);return{selectedValue:i,selectValue:(0,l.useCallback)((e=>{if(!p({value:e,tabValues:a}))throw new Error(`Can't select invalid tab value=${e}`);s(e),u(e),h(e)}),[u,h,a]),tabValues:a}}var g=n(2389);const f={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function b(e){let{className:t,block:n,selectedValue:s,selectValue:o,tabValues:u}=e;const m=[],{blockElementScrollPositionUntilNextRender:k}=(0,i.o5)(),c=e=>{const t=e.currentTarget,n=m.indexOf(t),r=u[n].value;r!==s&&(k(t),o(r))},p=e=>{let t=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const n=m.indexOf(e.currentTarget)+1;t=m[n]??m[0];break}case"ArrowLeft":{const n=m.indexOf(e.currentTarget)-1;t=m[n]??m[m.length-1];break}}t?.focus()};return l.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.Z)("tabs",{"tabs--block":n},t)},u.map((e=>{let{value:t,label:n,attributes:i}=e;return l.createElement("li",(0,r.Z)({role:"tab",tabIndex:s===t?0:-1,"aria-selected":s===t,key:t,ref:e=>m.push(e),onKeyDown:p,onClick:c},i,{className:(0,a.Z)("tabs__item",f.tabItem,i?.className,{"tabs__item--active":s===t})}),n??t)})))}function v(e){let{lazy:t,children:n,selectedValue:r}=e;const a=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=a.find((e=>e.props.value===r));return e?(0,l.cloneElement)(e,{className:"margin-top--md"}):null}return l.createElement("div",{className:"margin-top--md"},a.map(((e,t)=>(0,l.cloneElement)(e,{key:t,hidden:e.props.value!==r}))))}function N(e){const t=h(e);return l.createElement("div",{className:(0,a.Z)("tabs-container",f.tabList)},l.createElement(b,(0,r.Z)({},e,t)),l.createElement(v,(0,r.Z)({},e,t)))}function y(e){const t=(0,g.Z)();return l.createElement(N,(0,r.Z)({key:String(t)},e))}},1333:(e,t,n)=>{"use strict";n.d(t,{R:()=>i});var r=n(7294),l=n(4052),a=n.n(l);class i extends r.Component{constructor(e){super(e),this.state={termWidth:""}}componentDidMount(){const e=document.getElementById("term-"+this.props.term).clientWidth,t=document.getElementById("tooltip-"+this.props.term).clientWidth;this.setState({termWidth:e,tooltipWidth:t})}offset(){return 0-this.state.tooltipWidth/2+this.state.termWidth/2+"px"}displayTerm(){let e;return e=this.props.display?this.props.display:this.props.term,e}getIcelandicTerm(){let e;return e=a().terms.filter((e=>e.term.includes(this.props.term.toLowerCase()))),e[0].icelandic}render(){return r.createElement(r.Fragment,null,r.createElement("span",{className:"term",id:"term-"+this.props.term},this.displayTerm(),r.createElement("span",{id:"tooltip-"+this.props.term,className:"tooltip",style:{left:this.offset()}},"\ud83c\uddee\ud83c\uddf8 ",this.getIcelandicTerm())))}}},4052:e=>{e.exports={terms:[,{term:"verb",icelandic:"s\xf6gn"},{term:"object",icelandic:"andlag"},{term:"phrase",icelandic:"li\xf0ur"},{term:"pronoun",icelandic:"fornafn"},{term:"mood",icelandic:"h\xe1ttur"},{term:"accusative",icelandic:"\xfeolfall"},{term:"active voice",icelandic:"germynd"},{term:"adjective",icelandic:"l\xfdsingaror\xf0"},{term:"adjective phrase",icelandic:"l\xfdsingaror\xf0sli\xf0ur"},{term:"adverb",icelandic:"atviksor\xf0"},{term:"verb phrase",icelandic:"sagnli\xf0ur"},{term:"adverb phrase",icelandic:"atviksli\xf0ur"},{term:"aspiration",icelandic:"fr\xe1bl\xe1stur"},{term:"case",icelandic:"fall"},{term:"comparative",icelandic:"mi\xf0stig"},{term:"complement",icelandic:"fyllili\xf0ur"},{term:"consonant",icelandic:"samhlj\xf3\xf0"},{term:"dative",icelandic:"\xfe\xe1gufall"},{term:"definite article",icelandic:"\xe1kve\xf0inn greinir"},{term:"demonstrative pronoun",icelandic:"\xe1bendingarfornafn"},{term:"determiner",icelandic:"\xe1kv\xe6\xf0isor\xf0"},{term:"devoicing",icelandic:"afr\xf6ddun"},{term:"diphthong",icelandic:"tv\xedhlj\xf3\xf0"},{term:"direct object",icelandic:"beint andlag"},{term:"ending",icelandic:"ending"},{term:"feminine",icelandic:"kvenkyn"},{term:"first person",icelandic:"fyrsta pers\xf3na"},{term:"gender",icelandic:"kyn"},{term:"genitive",icelandic:"eignarfall"},{term:"head",icelandic:"h\xf6fu\xf0"},{term:"imperative mood",icelandic:"bo\xf0h\xe1ttur"},{term:"indefinite pronoun",icelandic:"\xf3\xe1kve\xf0i\xf0 fornafn"},{term:"indicative",icelandic:"frams\xf6guh\xe1ttur"},{term:"indirect object",icelandic:"\xf3beint andlag"},{term:"imperative",icelandic:"bo\xf0h\xe1ttur"},{term:"infinitive",icelandic:"nafnh\xe1ttur"},{term:"masculine",icelandic:"karlkyn"},{term:"middle voice",icelandic:"mi\xf0mynd"},{term:"modal verb",icelandic:"hj\xe1lpars\xf6gn"},{term:"monophthong",icelandic:"einhlj\xf3\xf0"},{term:"neuter",icelandic:"hvorugkyn"},{term:"nominative",icelandic:"nefnifall"},{term:"noun phrase",icelandic:"nafnli\xf0ur"},{term:"passive voice",icelandic:"\xfeolmynd"},{term:"past participle",icelandic:"l\xfdsingarh\xe1ttur \xfe\xe1t\xed\xf0ar"},{term:"past tense",icelandic:"\xfe\xe1t\xed\xf0"},{term:"personal pronoun",icelandic:"pers\xf3nufornafn"},{term:"plural",icelandic:"fleirtala"},{term:"positive",icelandic:"frumstig"},{term:"preaspiration",icelandic:"a\xf0bl\xe1stur"},{term:"preposition",icelandic:"forsetning"},{term:"prepositional phrase",icelandic:"forsetningarli\xf0ur"},{term:"principal parts",icelandic:"kennimyndir"},{term:"reflexive pronoun",icelandic:"afturbeygt fornafn"},{term:"possessive pronoun",icelandic:"eignarfornafn"},{term:"present participle",icelandic:"l\xfdsingarh\xe1ttur n\xfat\xed\xf0ar"},{term:"present tense",icelandic:"n\xfat\xed\xf0"},{term:"second person",icelandic:"\xf6nnur pers\xf3na"},{term:"sentence",icelandic:"setning"},{term:"singular",icelandic:"eintala"},{term:"stem",icelandic:"stofn"},{term:"strong",icelandic:"sterk beyging"},{term:"strong verb",icelandic:"sterk s\xf6gn"},{term:"stylistic fronting",icelandic:"st\xedlf\xe6rsla"},{term:"subject",icelandic:"frumlag"},{term:"subjunctive",icelandic:"vi\xf0tengingarh\xe1ttur"},{term:"superlative",icelandic:"efsta stig"},{term:"supine",icelandic:"sagnb\xf3t"},{term:"third person",icelandic:"\xferi\xf0ja pers\xf3na"},{term:"transitive",icelandic:"\xe1hrifss\xf6gn"},{term:"transitive verb",icelandic:"\xe1hrifss\xf6gn"},{term:"intransitive verb",icelandic:"\xe1hrifslaus s\xf6gn"},{term:"weak",icelandic:"veik beyging"},{term:"weak verb",icelandic:"veik s\xf6gn"},{term:"word order",icelandic:"or\xf0ar\xf6\xf0"}]}},1953:(e,t,n)=>{"use strict";n.r(t),n.d(t,{assets:()=>k,contentTitle:()=>u,default:()=>h,frontMatter:()=>o,metadata:()=>m,toc:()=>c});var r=n(7462),l=(n(7294),n(3905)),a=n(4866),i=n(5162),s=n(1333);const o={id:"possessive",title:"Possessive pronouns",sidebar_label:"Possessive",description:"An overview of possessive pronouns in Icelandic. How to decline and use minn, sinn, \xfeinn and more."},u=void 0,m={unversionedId:"pronouns/possessive",id:"pronouns/possessive",title:"Possessive pronouns",description:"An overview of possessive pronouns in Icelandic. How to decline and use minn, sinn, \xfeinn and more.",source:"@site/i18n/is/docusaurus-plugin-content-docs/current/pronouns/possessive.md",sourceDirName:"pronouns",slug:"/pronouns/possessive",permalink:"/is/docs/pronouns/possessive",draft:!1,tags:[],version:"current",frontMatter:{id:"possessive",title:"Possessive pronouns",sidebar_label:"Possessive",description:"An overview of possessive pronouns in Icelandic. How to decline and use minn, sinn, \xfeinn and more."},sidebar:"someSidebar",previous:{title:"Personal",permalink:"/is/docs/pronouns/personal"},next:{title:"Reflexive",permalink:"/is/docs/pronouns/reflexive"}},k={},c=[{value:"Introduction",id:"introduction",level:2},{value:"Definite article",id:"definite-article",level:3},{value:"<em>minn, \xfeinn, sinn</em>",id:"minn-\xfeinn-sinn",level:2},{value:"Declension",id:"declension",level:3},{value:"<em>sinn</em>",id:"sinn",level:3},{value:"Other possessives",id:"other-possessives",level:2},{value:"Obsolete possessives",id:"obsolete-possessives",level:3},{value:"<em>vor</em>",id:"vor",level:4},{value:"<em>y\xf0ar</em>",id:"y\xf0ar",level:4}],p={toc:c},d="wrapper";function h(e){let{components:t,...n}=e;return(0,l.kt)(d,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"A ",(0,l.kt)("strong",{parentName:"p"},(0,l.kt)(s.R,{term:"possessive pronoun",mdxType:"Term"}))," in Icelandic is used to indicate who or what something belongs to:"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},(0,l.kt)("em",{parentName:"p"},"\xdeetta er peysan ",(0,l.kt)("strong",{parentName:"em"},"m\xedn"),".",(0,l.kt)("br",null),"Er \xfeetta b\xedllinn ",(0,l.kt)("strong",{parentName:"em"},"\xfeinn"),"?",(0,l.kt)("br",null),"\xc9g er ekki b\xfain a\xf0 sj\xe1 k\xf6ttinn ",(0,l.kt)("strong",{parentName:"em"},"hennar"),"."))),(0,l.kt)("p",null,"General rules that apply to all possessives are set it out in the introduction below. To find out more about a specific pronoun, click on it in the table below."),(0,l.kt)("figure",null,(0,l.kt)("table",null,(0,l.kt)("thead",null,(0,l.kt)("tr",null,(0,l.kt)("th",null),(0,l.kt)("th",{width:"35%"},"Singular"),(0,l.kt)("th",{width:"35%"},"Plural"))),(0,l.kt)("tbody",null,(0,l.kt)("tr",null,(0,l.kt)("th",null,"1st person"),(0,l.kt)("td",null,(0,l.kt)("em",null,(0,l.kt)("a",{href:"#minn-\xfeinn-sinn"},"minn"))),(0,l.kt)("td",null,(0,l.kt)("em",null,(0,l.kt)("a",{href:"#other-possessives"},"okkar")))),(0,l.kt)("tr",null,(0,l.kt)("th",null,"2nd person"),(0,l.kt)("td",null,(0,l.kt)("em",null,(0,l.kt)("a",{href:"#minn-\xfeinn-sinn"},"\xfeinn"))),(0,l.kt)("td",null,(0,l.kt)("em",null,(0,l.kt)("a",{href:"#other-possessives"},"ykkar")))),(0,l.kt)("tr",null,(0,l.kt)("th",{rowspan:"2"},"3rd person"),(0,l.kt)("td",{colspan:"2"},(0,l.kt)("strong",null,"Reflexive"),(0,l.kt)("br",null),(0,l.kt)("em",null,(0,l.kt)("a",{href:"#sinn"},"sinn")))),(0,l.kt)("tr",null,(0,l.kt)("td",null,(0,l.kt)("strong",null,"Non-reflexive"),(0,l.kt)("br",null),(0,l.kt)("em",null,(0,l.kt)("a",{href:"#other-possessives"},"hans"),(0,l.kt)("br",null),(0,l.kt)("a",{href:"#other-possessives"},"hennar"),(0,l.kt)("br",null),(0,l.kt)("a",{href:"#other-possessives"},"h\xe1ns"),(0,l.kt)("br",null),(0,l.kt)("a",{href:"#other-possessives"},"\xfeess"))),(0,l.kt)("td",null,(0,l.kt)("em",null,(0,l.kt)("a",{href:"#other-possessives"},"\xfeeirra"))))))),(0,l.kt)("h2",{id:"introduction"},"Introduction"),(0,l.kt)("p",null,"Possessive pronouns normally come ",(0,l.kt)("em",{parentName:"p"},"after")," the noun they modify. That noun is also normally definite:"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},(0,l.kt)("em",{parentName:"p"},"\xdeetta er jakki",(0,l.kt)("strong",{parentName:"em"},"nn minn"),".",(0,l.kt)("br",null),"Er \xfeetta h\xfas",(0,l.kt)("strong",{parentName:"em"},"i\xf0 \xfeitt"),"?",(0,l.kt)("br",null),"\xc9g gleymdi veski",(0,l.kt)("strong",{parentName:"em"},"nu m\xednu")," heima.",(0,l.kt)("br",null),"Hann skildi peninga",(0,l.kt)("strong",{parentName:"em"},"na s\xedna")," eftir \xe1 bor\xf0inu."))),(0,l.kt)("p",null,"They can also occur ",(0,l.kt)("em",{parentName:"p"},"before")," a noun to emphasise who or what something belongs to, and then the noun is indefinite:"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},(0,l.kt)("em",{parentName:"p"},"\xdeetta er ",(0,l.kt)("strong",{parentName:"em"},"\xfeinn jakki"),"!",(0,l.kt)("br",null),"Ekki drekka ",(0,l.kt)("strong",{parentName:"em"},"mitt kaffi"),"!"))),(0,l.kt)("h3",{id:"definite-article"},"Definite article"),(0,l.kt)("p",null,"The following types of nouns don\u2019t get a definite article with possessives."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Close personal relationships"),(0,l.kt)("br",null),"(except ",(0,l.kt)("em",{parentName:"p"},"barn/ma\xf0ur/kona/k\xe6rasti/k\xe6rasta"),"):"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},(0,l.kt)("em",{parentName:"p"},(0,l.kt)("strong",{parentName:"em"},"Sonur minn")," b\xfdr \xed Noregi.",(0,l.kt)("br",null),(0,l.kt)("strong",{parentName:"em"},"Mamma m\xedn")," \xe1 \xfeessa peysu.",(0,l.kt)("br",null),"Koma ",(0,l.kt)("strong",{parentName:"em"},"vinir \xfe\xednir")," me\xf0?"))),(0,l.kt)("p",null,"But:"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},(0,l.kt)("em",{parentName:"p"},(0,l.kt)("strong",{parentName:"em"},"B\xf6rnin \xfe\xedn")," eru svo myndarleg!",(0,l.kt)("br",null),(0,l.kt)("strong",{parentName:"em"},"K\xe6rastan m\xedn")," heitir \xc1sd\xeds.",(0,l.kt)("br",null),(0,l.kt)("strong",{parentName:"em"},"Ma\xf0urinn minn")," elskar s\xfakkula\xf0i."))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Most abstract nouns"),":"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},(0,l.kt)("em",{parentName:"p"},(0,l.kt)("strong",{parentName:"em"},"L\xedf mitt")," er svo skemmtilegt!",(0,l.kt)("br",null),"\xdeetta er ",(0,l.kt)("strong",{parentName:"em"},"hugmynd \xfe\xedn"),".",(0,l.kt)("br",null),(0,l.kt)("strong",{parentName:"em"},"Stu\xf0ningur ykkar")," skiptir \xf6llu m\xe1li!"))),(0,l.kt)("p",null,"Some abstract nouns, such as ",(0,l.kt)("em",{parentName:"p"},"hugmynd"),", sometimes get the definite article in informal speech. Others, such as ",(0,l.kt)("em",{parentName:"p"},"l\xedf"),", almost never occur with the definite article."),(0,l.kt)("h2",{id:"minn-\xfeinn-sinn"},(0,l.kt)("em",{parentName:"h2"},"minn, \xfeinn, sinn")),(0,l.kt)("p",null,"The following possessive pronouns decline for gender, case and number:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},(0,l.kt)("em",{parentName:"strong"},"minn"))," \u201cmy\u201d"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},(0,l.kt)("em",{parentName:"strong"},"\xfeinn"))," \u201cyour\u201d (singular)"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},(0,l.kt)("em",{parentName:"strong"},"sinn"))," \u201chis, her, its, their\u201d")),(0,l.kt)("p",null,"They work similarly to adjectives or numerals in that they derive their grammatical properties from the noun they modify:"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},(0,l.kt)("em",{parentName:"p"},"\xdeetta eru gleraugun ",(0,l.kt)("strong",{parentName:"em"},"\xfe\xedn"),".",(0,l.kt)("br",null),"B\xedllinn ",(0,l.kt)("strong",{parentName:"em"},"minn")," er \xe1 verkst\xe6\xf0inu.",(0,l.kt)("br",null),"Hann talar vi\xf0 m\xf6mmu ",(0,l.kt)("strong",{parentName:"em"},"s\xedna"),"."))),(0,l.kt)("p",null,"In other words, they agree in gender, number and case with the ",(0,l.kt)("em",{parentName:"p"},"possession")," and not the owner."),(0,l.kt)("h3",{id:"declension"},"Declension"),(0,l.kt)("p",null,"The declension pattern for these three pronouns is the same, just change the first letter as applicable."),(0,l.kt)("p",null,"The pattern itself is similar to the numeral ",(0,l.kt)("em",{parentName:"p"},"einn"),", although there is the additional quirk of the ",(0,l.kt)("em",{parentName:"p"},"i")," changing to ",(0,l.kt)("em",{parentName:"p"},"\xed")," in forms with a single ",(0,l.kt)("em",{parentName:"p"},"n"),", e.g. ",(0,l.kt)("em",{parentName:"p"},"m",(0,l.kt)("strong",{parentName:"em"},"i"),"nn")," vs. ",(0,l.kt)("em",{parentName:"p"},"m",(0,l.kt)("strong",{parentName:"em"},"\xed"),"n"),"."),(0,l.kt)(a.Z,{className:"italic",defaultValue:"minn",values:[{label:"minn",value:"minn"},{label:"\xfeinn",value:"thinn"},{label:"sinn",value:"sinn"}],mdxType:"Tabs"},(0,l.kt)(i.Z,{value:"minn",mdxType:"TabItem"},(0,l.kt)("figure",null,(0,l.kt)("table",{class:"full-width"},(0,l.kt)("thead",null,(0,l.kt)("tr",null,(0,l.kt)("th",{rowspan:"2"}),(0,l.kt)("th",{colspan:"3"},"Singular"),(0,l.kt)("th",{colspan:"3"},"Plural")),(0,l.kt)("tr",null,(0,l.kt)("th",null,"Masculine"),(0,l.kt)("th",null,"Feminine"),(0,l.kt)("th",null,"Neuter"),(0,l.kt)("th",null,"Masculine"),(0,l.kt)("th",null,"Feminine"),(0,l.kt)("th",null,"Neuter"))),(0,l.kt)("tbody",null,(0,l.kt)("tr",null,(0,l.kt)("th",null,"Nom."),(0,l.kt)("td",{rowspan:"2"},(0,l.kt)("em",null,"minn")),(0,l.kt)("td",null,(0,l.kt)("em",null,"m\xedn")),(0,l.kt)("td",{rowspan:"2"},(0,l.kt)("em",null,"mitt")),(0,l.kt)("td",null,(0,l.kt)("em",null,"m\xednir")),(0,l.kt)("td",{rowspan:"2"},(0,l.kt)("em",null,"m\xednar")),(0,l.kt)("td",{rowspan:"2"},(0,l.kt)("em",null,"m\xedn"))),(0,l.kt)("tr",null,(0,l.kt)("th",null,"Acc."),(0,l.kt)("td",null,(0,l.kt)("em",null,"m\xedna")),(0,l.kt)("td",null,(0,l.kt)("em",null,"m\xedna"))),(0,l.kt)("tr",null,(0,l.kt)("th",null,"Dat."),(0,l.kt)("td",null,(0,l.kt)("em",null,"m\xednum")),(0,l.kt)("td",null,(0,l.kt)("em",null,"minni")),(0,l.kt)("td",null,(0,l.kt)("em",null,"m\xednu")),(0,l.kt)("td",{colspan:"3",align:"center"},(0,l.kt)("em",null,"m\xednum"))),(0,l.kt)("tr",null,(0,l.kt)("th",null,"Gen."),(0,l.kt)("td",null,(0,l.kt)("em",null,"m\xedns")),(0,l.kt)("td",null,(0,l.kt)("em",null,"minnar")),(0,l.kt)("td",null,(0,l.kt)("em",null,"m\xedns")),(0,l.kt)("td",{colspan:"3",align:"center"},(0,l.kt)("em",null,"minna"))))))),(0,l.kt)(i.Z,{value:"thinn",mdxType:"TabItem"},(0,l.kt)("figure",null,(0,l.kt)("table",{class:"full-width"},(0,l.kt)("thead",null,(0,l.kt)("tr",null,(0,l.kt)("th",{rowspan:"2"}),(0,l.kt)("th",{colspan:"3"},"Singular"),(0,l.kt)("th",{colspan:"3"},"Plural")),(0,l.kt)("tr",null,(0,l.kt)("th",null,"Masculine"),(0,l.kt)("th",null,"Feminine"),(0,l.kt)("th",null,"Neuter"),(0,l.kt)("th",null,"Masculine"),(0,l.kt)("th",null,"Feminine"),(0,l.kt)("th",null,"Neuter"))),(0,l.kt)("tbody",null,(0,l.kt)("tr",null,(0,l.kt)("th",null,"Nom."),(0,l.kt)("td",{rowspan:"2"},(0,l.kt)("em",null,"\xfeinn")),(0,l.kt)("td",null,(0,l.kt)("em",null,"\xfe\xedn")),(0,l.kt)("td",{rowspan:"2"},(0,l.kt)("em",null,"\xfeitt")),(0,l.kt)("td",null,(0,l.kt)("em",null,"\xfe\xednir")),(0,l.kt)("td",{rowspan:"2"},(0,l.kt)("em",null,"\xfe\xednar")),(0,l.kt)("td",{rowspan:"2"},(0,l.kt)("em",null,"\xfe\xedn"))),(0,l.kt)("tr",null,(0,l.kt)("th",null,"Acc."),(0,l.kt)("td",null,(0,l.kt)("em",null,"\xfe\xedna")),(0,l.kt)("td",null,(0,l.kt)("em",null,"\xfe\xedna"))),(0,l.kt)("tr",null,(0,l.kt)("th",null,"Dat."),(0,l.kt)("td",null,(0,l.kt)("em",null,"\xfe\xednum")),(0,l.kt)("td",null,(0,l.kt)("em",null,"\xfeinni")),(0,l.kt)("td",null,(0,l.kt)("em",null,"\xfe\xednu")),(0,l.kt)("td",{colspan:"3",align:"center"},(0,l.kt)("em",null,"\xfe\xednum"))),(0,l.kt)("tr",null,(0,l.kt)("th",null,"Gen."),(0,l.kt)("td",null,(0,l.kt)("em",null,"\xfe\xedns")),(0,l.kt)("td",null,(0,l.kt)("em",null,"\xfeinnar")),(0,l.kt)("td",null,(0,l.kt)("em",null,"\xfe\xedns")),(0,l.kt)("td",{colspan:"3",align:"center"},(0,l.kt)("em",null,"\xfeinna"))))))),(0,l.kt)(i.Z,{value:"sinn",mdxType:"TabItem"},(0,l.kt)("figure",null,(0,l.kt)("table",{class:"full-width"},(0,l.kt)("thead",null,(0,l.kt)("tr",null,(0,l.kt)("th",{rowspan:"2"}),(0,l.kt)("th",{colspan:"3"},"Singular"),(0,l.kt)("th",{colspan:"3"},"Plural")),(0,l.kt)("tr",null,(0,l.kt)("th",null,"Masculine"),(0,l.kt)("th",null,"Feminine"),(0,l.kt)("th",null,"Neuter"),(0,l.kt)("th",null,"Masculine"),(0,l.kt)("th",null,"Feminine"),(0,l.kt)("th",null,"Neuter"))),(0,l.kt)("tbody",null,(0,l.kt)("tr",null,(0,l.kt)("th",null,"Nom."),(0,l.kt)("td",{rowspan:"2"},(0,l.kt)("em",null,"sinn")),(0,l.kt)("td",null,(0,l.kt)("em",null,"s\xedn")),(0,l.kt)("td",{rowspan:"2"},(0,l.kt)("em",null,"sitt")),(0,l.kt)("td",null,(0,l.kt)("em",null,"s\xednir")),(0,l.kt)("td",{rowspan:"2"},(0,l.kt)("em",null,"s\xednar")),(0,l.kt)("td",{rowspan:"2"},(0,l.kt)("em",null,"s\xedn"))),(0,l.kt)("tr",null,(0,l.kt)("th",null,"Acc."),(0,l.kt)("td",null,(0,l.kt)("em",null,"s\xedna")),(0,l.kt)("td",null,(0,l.kt)("em",null,"s\xedna"))),(0,l.kt)("tr",null,(0,l.kt)("th",null,"Dat."),(0,l.kt)("td",null,(0,l.kt)("em",null,"s\xednum")),(0,l.kt)("td",null,(0,l.kt)("em",null,"sinni")),(0,l.kt)("td",null,(0,l.kt)("em",null,"s\xednu")),(0,l.kt)("td",{colspan:"3",align:"center"},(0,l.kt)("em",null,"s\xednum"))),(0,l.kt)("tr",null,(0,l.kt)("th",null,"Gen."),(0,l.kt)("td",null,(0,l.kt)("em",null,"s\xedns")),(0,l.kt)("td",null,(0,l.kt)("em",null,"sinnar")),(0,l.kt)("td",null,(0,l.kt)("em",null,"s\xedns")),(0,l.kt)("td",{colspan:"3",align:"center"},(0,l.kt)("em",null,"sinna")))))))),(0,l.kt)("h3",{id:"sinn"},(0,l.kt)("em",{parentName:"h3"},"sinn")),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"Sinn")," is a possessive pronoun used in the third person. It can be translated as ",(0,l.kt)("em",{parentName:"p"},"his"),", ",(0,l.kt)("em",{parentName:"p"},"her"),", ",(0,l.kt)("em",{parentName:"p"},"its")," or ",(0,l.kt)("em",{parentName:"p"},"their")," depending on the context:"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},(0,l.kt)("em",{parentName:"p"},"Bj\xf6rn m\xe1lar h\xfasi\xf0 ",(0,l.kt)("strong",{parentName:"em"},"sitt"),".",(0,l.kt)("br",null),"Anna lagar peysuna ",(0,l.kt)("strong",{parentName:"em"},"s\xedna"),".",(0,l.kt)("br",null),"Barni\xf0 bor\xf0ar matinn ",(0,l.kt)("strong",{parentName:"em"},"sinn"),".",(0,l.kt)("br",null),"\xdeeir taka t\xf6skurnar ",(0,l.kt)("strong",{parentName:"em"},"s\xednar"),".",(0,l.kt)("br",null),"\xde\xe6r \xfer\xedfa diskana ",(0,l.kt)("strong",{parentName:"em"},"s\xedna"),"."))),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"Sinn")," is reflexive, meaning it always refers back to the subject of the sentence:"),(0,l.kt)("p",null,"Because ",(0,l.kt)("em",{parentName:"p"},"sinn")," always refers back to a possessor in the subject of the sentence, ",(0,l.kt)("em",{parentName:"p"},"sinn")," can never form part of a subject itself:"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"(Bj\xf6rn) ",(0,l.kt)("em",{parentName:"p"},"*H\xfasi\xf0 ",(0,l.kt)("strong",{parentName:"em"},"sitt")," er rautt."),(0,l.kt)("br",null),"(Anna) ",(0,l.kt)("em",{parentName:"p"},"*Peysan ",(0,l.kt)("strong",{parentName:"em"},"s\xedn")," er slitin."))),(0,l.kt)("p",null,"Here the non-reflexive pronouns must be used instead:"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"(Bj\xf6rn) ",(0,l.kt)("em",{parentName:"p"},"H\xfasi\xf0 ",(0,l.kt)("strong",{parentName:"em"},"hans")," er rautt."),(0,l.kt)("br",null),"(Anna) ",(0,l.kt)("em",{parentName:"p"},"Peysan ",(0,l.kt)("strong",{parentName:"em"},"hennar")," er slitin."))),(0,l.kt)("p",null,"Contrast the meanings of the following pairs of sentences:"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},(0,l.kt)("em",{parentName:"p"},"Magn\xfas drekkur kaffi\xf0 ",(0,l.kt)("strong",{parentName:"em"},"sitt"),".",(0,l.kt)("br",null),"Magn\xfas drekkur kaffi\xf0 ",(0,l.kt)("strong",{parentName:"em"},"hans"),"."))),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},(0,l.kt)("em",{parentName:"p"},"Krakkarnir bor\xf0a samlokurnar ",(0,l.kt)("strong",{parentName:"em"},"s\xednar"),".",(0,l.kt)("br",null),"Krakkarnir bor\xf0a samlokurnar ",(0,l.kt)("strong",{parentName:"em"},"\xfeeirra"),"."))),(0,l.kt)("h2",{id:"other-possessives"},"Other possessives"),(0,l.kt)("p",null,"The following possessive pronouns do not decline (their form is always the same regardless of the gender, number and case of the noun they modify):"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},(0,l.kt)("em",{parentName:"strong"},"okkar"))," \u201cour\u201d"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},(0,l.kt)("em",{parentName:"strong"},"ykkar"))," \u201cyour\u201d (plural)"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},(0,l.kt)("em",{parentName:"strong"},"hans"))," \u201chis\u201d, ",(0,l.kt)("strong",{parentName:"li"},(0,l.kt)("em",{parentName:"strong"},"hennar"))," \u201cher\u201d, ",(0,l.kt)("strong",{parentName:"li"},(0,l.kt)("em",{parentName:"strong"},"h\xe1ns"))," \u201ctheir\u201d (non-binary), ",(0,l.kt)("strong",{parentName:"li"},(0,l.kt)("em",{parentName:"strong"},"\xfeess"))," \u201cits\u201d, ",(0,l.kt)("strong",{parentName:"li"},(0,l.kt)("em",{parentName:"strong"},"manns"))," \u201cone\u2019s\u201d, ",(0,l.kt)("strong",{parentName:"li"},(0,l.kt)("em",{parentName:"strong"},"\xfeeirra"))," \u201ctheir\u201d (all genders)")),(0,l.kt)("p",null,"Where they are gendered, they agree with the natural gender of the owner and not the grammatical gender of the noun. For example:"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},(0,l.kt)("em",{parentName:"p"},"Ertu b\xfain a\xf0\xa0sj\xe1 n\xfdja eldh\xfasi\xf0 ",(0,l.kt)("strong",{parentName:"em"},"okkar"),"?",(0,l.kt)("br",null),"\xc9g elska s\xf3fana ",(0,l.kt)("strong",{parentName:"em"},"ykkar"),"!",(0,l.kt)("br",null),"B\xf3kin ",(0,l.kt)("strong",{parentName:"em"},"hans")," er mj\xf6g skemmtileg.",(0,l.kt)("br",null),"Kakan ",(0,l.kt)("strong",{parentName:"em"},"hennar")," er svo lj\xfaf!",(0,l.kt)("br",null),"Sk\xf3rinn ",(0,l.kt)("strong",{parentName:"em"},"h\xe1ns")," er rennblautur.",(0,l.kt)("br",null),"Bangsinn ",(0,l.kt)("strong",{parentName:"em"},"\xfeess")," er t\xfdndur.",(0,l.kt)("br",null),"H\xfasin ",(0,l.kt)("strong",{parentName:"em"},"\xfeeirra")," eru til s\xf6lu."))),(0,l.kt)("h3",{id:"obsolete-possessives"},"Obsolete possessives"),(0,l.kt)("p",null,"The obsolete personal pronouns ",(0,l.kt)("em",{parentName:"p"},"v\xe9r")," and ",(0,l.kt)("em",{parentName:"p"},"\xfe\xe9r")," (",(0,l.kt)("a",{parentName:"p",href:"personal/#obsolete-pronouns"},"see here")," for usage) also had corresponding possessives. "),(0,l.kt)("h4",{id:"vor"},(0,l.kt)("em",{parentName:"h4"},"vor")),(0,l.kt)("p",null,"The first, ",(0,l.kt)("em",{parentName:"p"},"vor")," \u201cour\u201d, is fully declined like an adjective:"),(0,l.kt)("figure",null,(0,l.kt)("table",{class:"full-width"},(0,l.kt)("thead",null,(0,l.kt)("tr",null,(0,l.kt)("th",{rowspan:"2"}),(0,l.kt)("th",{colspan:"3"},"Singular"),(0,l.kt)("th",{colspan:"3"},"Plural")),(0,l.kt)("tr",null,(0,l.kt)("th",null,"Masculine"),(0,l.kt)("th",null,"Feminine"),(0,l.kt)("th",null,"Neuter"),(0,l.kt)("th",null,"Masculine"),(0,l.kt)("th",null,"Feminine"),(0,l.kt)("th",null,"Neuter"))),(0,l.kt)("tbody",null,(0,l.kt)("tr",null,(0,l.kt)("th",null,"Nom."),(0,l.kt)("td",null,(0,l.kt)("em",null,"vor")),(0,l.kt)("td",null,(0,l.kt)("em",null,"vor")),(0,l.kt)("td",{rowspan:"2"},(0,l.kt)("em",null,"vort")),(0,l.kt)("td",null,(0,l.kt)("em",null,"vorir")),(0,l.kt)("td",{rowspan:"2"},(0,l.kt)("em",null,"vorar")),(0,l.kt)("td",{rowspan:"2"},(0,l.kt)("em",null,"vor"))),(0,l.kt)("tr",null,(0,l.kt)("th",null,"Acc."),(0,l.kt)("td",null,(0,l.kt)("em",null,"vorn")),(0,l.kt)("td",null,(0,l.kt)("em",null,"vora")),(0,l.kt)("td",null,(0,l.kt)("em",null,"vora"))),(0,l.kt)("tr",null,(0,l.kt)("th",null,"Dat."),(0,l.kt)("td",null,(0,l.kt)("em",null,"vorum")),(0,l.kt)("td",null,(0,l.kt)("em",null,"vorri")),(0,l.kt)("td",null,(0,l.kt)("em",null,"voru")),(0,l.kt)("td",{colspan:"3",align:"center"},(0,l.kt)("em",null,"vorum"))),(0,l.kt)("tr",null,(0,l.kt)("th",null,"Gen."),(0,l.kt)("td",null,(0,l.kt)("em",null,"vors")),(0,l.kt)("td",null,(0,l.kt)("em",null,"vorrar")),(0,l.kt)("td",null,(0,l.kt)("em",null,"vors")),(0,l.kt)("td",{colspan:"3",align:"center"},(0,l.kt)("em",null,"vorra")))))),(0,l.kt)("h4",{id:"y\xf0ar"},(0,l.kt)("em",{parentName:"h4"},"y\xf0ar")),(0,l.kt)("p",null,"The second, ",(0,l.kt)("em",{parentName:"p"},"y\xf0ar")," \u201cyour\u201d (formal), is indeclinable and is used like ",(0,l.kt)("em",{parentName:"p"},"ykkar"),"."))}h.isMDXComponent=!0}}]);