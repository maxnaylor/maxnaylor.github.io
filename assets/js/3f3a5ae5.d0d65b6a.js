(self.webpackChunkgramref=self.webpackChunkgramref||[]).push([[1192],{3905:(e,t,n)=>{"use strict";n.d(t,{Zo:()=>d,kt:()=>f});var i=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=i.createContext({}),s=function(e){var t=i.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},d=function(e){var t=s(e.components);return i.createElement(o.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},p=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,o=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),m=s(n),p=r,f=m["".concat(o,".").concat(p)]||m[p]||u[p]||a;return n?i.createElement(f,c(c({ref:t},d),{},{components:n})):i.createElement(f,c({ref:t},d))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,c=new Array(a);c[0]=p;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l[m]="string"==typeof e?e:r,c[1]=l;for(var s=2;s<a;s++)c[s]=n[s];return i.createElement.apply(null,c)}return i.createElement.apply(null,n)}p.displayName="MDXCreateElement"},6195:(e,t,n)=>{"use strict";n.d(t,{$:()=>r});var i=n(7294);function r(){return i.createElement("div",{className:"promo-banner"},i.createElement("a",{className:"image",href:"https://learn-icelandic.com?utm_source=gramref&utm_medium=banner&utm_campaign=gramref"},i.createElement("img",{src:"/img/puffins-on-cliff.jpg"})),i.createElement("div",{className:"promo-banner-content"},i.createElement("div",{className:"prose"},i.createElement("h3",null,"Learn Icelandic"),i.createElement("p",null,"A new way to study Icelandic online.")),i.createElement("a",{className:"button button--secondary",href:"https://learn-icelandic.com?utm_source=gramref&utm_medium=banner&utm_campaign=inline_cta",target:"_new"},"Check it out",i.createElement("svg",{width:"10",height:"15",viewBox:"0 0 10 15",fill:"none",xmlns:"http://www.w3.org/2000/svg"},i.createElement("path",{d:"M2 14.5C1.71875 14.5 1.46875 14.4062 1.28125 14.2188C0.875 13.8438 0.875 13.1875 1.28125 12.8125L6.5625 7.5L1.28125 2.21875C0.875 1.84375 0.875 1.1875 1.28125 0.8125C1.65625 0.40625 2.3125 0.40625 2.6875 0.8125L8.6875 6.8125C9.09375 7.1875 9.09375 7.84375 8.6875 8.21875L2.6875 14.2188C2.5 14.4062 2.25 14.5 2 14.5Z",fill:"white"})))))}},1333:(e,t,n)=>{"use strict";n.d(t,{R:()=>c});var i=n(7294),r=n(4052),a=n.n(r);class c extends i.Component{constructor(e){super(e),this.state={termWidth:""}}componentDidMount(){const e=document.getElementById("term-"+this.props.term).clientWidth,t=document.getElementById("tooltip-"+this.props.term).clientWidth;this.setState({termWidth:e,tooltipWidth:t})}offset(){return 0-this.state.tooltipWidth/2+this.state.termWidth/2+"px"}displayTerm(){let e;return e=this.props.display?this.props.display:this.props.term,e}getIcelandicTerm(){let e;return e=a().terms.filter((e=>e.term.includes(this.props.term.toLowerCase()))),e[0].icelandic}render(){return i.createElement(i.Fragment,null,i.createElement("span",{className:"term",id:"term-"+this.props.term},this.displayTerm(),i.createElement("span",{id:"tooltip-"+this.props.term,className:"tooltip",style:{left:this.offset()}},"\ud83c\uddee\ud83c\uddf8 ",this.getIcelandicTerm())))}}},4052:e=>{e.exports={terms:[,{term:"verb",icelandic:"s\xf6gn"},{term:"object",icelandic:"andlag"},{term:"phrase",icelandic:"li\xf0ur"},{term:"pronoun",icelandic:"fornafn"},{term:"mood",icelandic:"h\xe1ttur"},{term:"accusative",icelandic:"\xfeolfall"},{term:"active voice",icelandic:"germynd"},{term:"adjective",icelandic:"l\xfdsingaror\xf0"},{term:"adjective phrase",icelandic:"l\xfdsingaror\xf0sli\xf0ur"},{term:"adverb",icelandic:"atviksor\xf0"},{term:"verb phrase",icelandic:"sagnli\xf0ur"},{term:"adverb phrase",icelandic:"atviksli\xf0ur"},{term:"aspiration",icelandic:"fr\xe1bl\xe1stur"},{term:"case",icelandic:"fall"},{term:"comparative",icelandic:"mi\xf0stig"},{term:"complement",icelandic:"fyllili\xf0ur"},{term:"consonant",icelandic:"samhlj\xf3\xf0"},{term:"dative",icelandic:"\xfe\xe1gufall"},{term:"definite article",icelandic:"\xe1kve\xf0inn greinir"},{term:"demonstrative pronoun",icelandic:"\xe1bendingarfornafn"},{term:"determiner",icelandic:"\xe1kv\xe6\xf0isor\xf0"},{term:"devoicing",icelandic:"afr\xf6ddun"},{term:"diphthong",icelandic:"tv\xedhlj\xf3\xf0"},{term:"direct object",icelandic:"beint andlag"},{term:"ending",icelandic:"ending"},{term:"feminine",icelandic:"kvenkyn"},{term:"first person",icelandic:"fyrsta pers\xf3na"},{term:"gender",icelandic:"kyn"},{term:"genitive",icelandic:"eignarfall"},{term:"head",icelandic:"h\xf6fu\xf0"},{term:"imperative mood",icelandic:"bo\xf0h\xe1ttur"},{term:"indefinite pronoun",icelandic:"\xf3\xe1kve\xf0i\xf0 fornafn"},{term:"indicative",icelandic:"frams\xf6guh\xe1ttur"},{term:"indirect object",icelandic:"\xf3beint andlag"},{term:"imperative",icelandic:"bo\xf0h\xe1ttur"},{term:"infinitive",icelandic:"nafnh\xe1ttur"},{term:"masculine",icelandic:"karlkyn"},{term:"middle voice",icelandic:"mi\xf0mynd"},{term:"modal verb",icelandic:"hj\xe1lpars\xf6gn"},{term:"monophthong",icelandic:"einhlj\xf3\xf0"},{term:"neuter",icelandic:"hvorugkyn"},{term:"nominative",icelandic:"nefnifall"},{term:"noun phrase",icelandic:"nafnli\xf0ur"},{term:"passive voice",icelandic:"\xfeolmynd"},{term:"past participle",icelandic:"l\xfdsingarh\xe1ttur \xfe\xe1t\xed\xf0ar"},{term:"past tense",icelandic:"\xfe\xe1t\xed\xf0"},{term:"personal pronoun",icelandic:"pers\xf3nufornafn"},{term:"plural",icelandic:"fleirtala"},{term:"positive",icelandic:"frumstig"},{term:"preaspiration",icelandic:"a\xf0bl\xe1stur"},{term:"preposition",icelandic:"forsetning"},{term:"prepositional phrase",icelandic:"forsetningarli\xf0ur"},{term:"principal parts",icelandic:"kennimyndir"},{term:"reflexive pronoun",icelandic:"afturbeygt fornafn"},{term:"possessive pronoun",icelandic:"eignarfornafn"},{term:"present participle",icelandic:"l\xfdsingarh\xe1ttur n\xfat\xed\xf0ar"},{term:"present tense",icelandic:"n\xfat\xed\xf0"},{term:"second person",icelandic:"\xf6nnur pers\xf3na"},{term:"sentence",icelandic:"setning"},{term:"singular",icelandic:"eintala"},{term:"stem",icelandic:"stofn"},{term:"strong",icelandic:"sterk beyging"},{term:"strong verb",icelandic:"sterk s\xf6gn"},{term:"stylistic fronting",icelandic:"st\xedlf\xe6rsla"},{term:"subject",icelandic:"frumlag"},{term:"subjunctive",icelandic:"vi\xf0tengingarh\xe1ttur"},{term:"superlative",icelandic:"efsta stig"},{term:"supine",icelandic:"sagnb\xf3t"},{term:"syncope",icelandic:"brottfall"},{term:"third person",icelandic:"\xferi\xf0ja pers\xf3na"},{term:"transitive",icelandic:"\xe1hrifss\xf6gn"},{term:"transitive verb",icelandic:"\xe1hrifss\xf6gn"},{term:"intransitive verb",icelandic:"\xe1hrifslaus s\xf6gn"},{term:"weak",icelandic:"veik beyging"},{term:"weak verb",icelandic:"veik s\xf6gn"},{term:"word order",icelandic:"or\xf0ar\xf6\xf0"}]}},7655:(e,t,n)=>{"use strict";n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>o,default:()=>f,frontMatter:()=>l,metadata:()=>s,toc:()=>m});var i=n(7462),r=(n(7294),n(3905)),a=n(1333),c=n(6195);const l={id:"case",title:"Introduction to case",description:"An explanation of noun case in Icelandic. Find out how to form the nominative, accusative, dative and genitive."},o=void 0,s={unversionedId:"nouns/case",id:"nouns/case",title:"Introduction to case",description:"An explanation of noun case in Icelandic. Find out how to form the nominative, accusative, dative and genitive.",source:"@site/docs/nouns/case.md",sourceDirName:"nouns",slug:"/nouns/case",permalink:"/docs/nouns/case",draft:!1,tags:[],version:"current",frontMatter:{id:"case",title:"Introduction to case",description:"An explanation of noun case in Icelandic. Find out how to form the nominative, accusative, dative and genitive."},sidebar:"someSidebar",previous:{title:"Number",permalink:"/docs/nouns/number"},next:{title:"Accusative",permalink:"/docs/nouns/accusative"}},d={},m=[{value:"What is case?",id:"what-is-case",level:2},{value:"What causes words to change case?",id:"what-causes-words-to-change-case",level:2}],u={toc:m},p="wrapper";function f(e){let{components:t,...n}=e;return(0,r.kt)(p,(0,i.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"what-is-case"},"What is case?"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)(a.R,{term:"case",display:"Case",mdxType:"Term"}))," is a way of marking relationships between elements in a sentence. Case can indicate things such as the doer (\u201cagent\u201d), undergoer (\u201cpatient\u201d) or recipient of an action."),(0,r.kt)("p",null,"The following word classes can be marked for case or \u201cdeclined\u201d:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"../pronouns/pronoun-intro"},"Pronouns"),"\t\t"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"../nouns/noun-intro"},"Nouns"),"\t\t"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"../adjectives/adjective-intro"},"Adjectives"),"\t\t"),(0,r.kt)("li",{parentName:"ul"},"Numbers 1\u20134")),(0,r.kt)("p",null,"For now, we\u2019ll focus on nouns. Icelandic has four cases, each with a typical function:"),(0,r.kt)("table",null,(0,r.kt)("tbody",null,(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("span",{style:{color:"var(--ifm-color-secondary)"}},(0,r.kt)("strong",null,"nefnifall"))," (nf.)"),(0,r.kt)("td",null,(0,r.kt)("em",null,"nominative")),(0,r.kt)("td",null,"agent")),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("span",{style:{color:"#fe4801"}},(0,r.kt)("strong",null,"\xfeolfall"))," (\xfef.)"),(0,r.kt)("td",null,(0,r.kt)("em",null,(0,r.kt)("a",{href:"accusative"},"accusative"))),(0,r.kt)("td",null,"patient")),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("span",{style:{color:"#1ca2b3"}},(0,r.kt)("strong",null,"\xfe\xe1gufall"))," (\xfegf.)"),(0,r.kt)("td",null,(0,r.kt)("em",null,(0,r.kt)("a",{href:"dative"},"dative"))),(0,r.kt)("td",null,"recipient")),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("span",{style:{color:"#c5008f"}},(0,r.kt)("strong",null,"eignarfall"))," (ef.)"),(0,r.kt)("td",null,(0,r.kt)("em",null,(0,r.kt)("a",{href:"genitive"},"genitive"))),(0,r.kt)("td",null,"possessor")))),(0,r.kt)("p",null,"Don\u2019t worry if you don\u2019t understand the meaning of the functions at this stage. Read on and we\u2019ll go into detail on the use of each case individually."),(0,r.kt)("p",null,"As well as a core typical function, each case has a number of extra uses that will be explained on the following pages."),(0,r.kt)("h2",{id:"what-causes-words-to-change-case"},"What causes words to change case?"),(0,r.kt)("p",null,"A word might appear in a case other than the nominative because it:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\ud83d\udd90 Follows a ",(0,r.kt)("strong",{parentName:"li"},"verb")," that requires the accusative, dative or genitive;"),(0,r.kt)("li",{parentName:"ul"},"\ud83d\udc49 Follows a ",(0,r.kt)("strong",{parentName:"li"},"preposition")," that requires the accusative, dative or genitive;"),(0,r.kt)("li",{parentName:"ul"},"\ud83d\ude4b\u200d\u2642\ufe0f Is indicating ",(0,r.kt)("strong",{parentName:"li"},"possession")," (genitive case);"),(0,r.kt)("li",{parentName:"ul"},"\u23f0 Is part of a ",(0,r.kt)("strong",{parentName:"li"},"time expression")," (normally accusative or dative);"),(0,r.kt)("li",{parentName:"ul"},"\ud83d\udc7b Appears in an ",(0,r.kt)("strong",{parentName:"li"},"impersonal construction")," with a verb or adjective.")),(0,r.kt)("p",null,"Verbs and prepositions are said to take or \u201cgovern\u201d a case."),(0,r.kt)(c.$,{mdxType:"PromoBanner"}))}f.isMDXComponent=!0}}]);