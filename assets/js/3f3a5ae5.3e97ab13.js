(self.webpackChunkgramref=self.webpackChunkgramref||[]).push([[1192],{3905:(e,t,n)=>{"use strict";n.d(t,{Zo:()=>d,kt:()=>f});var i=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=i.createContext({}),s=function(e){var t=i.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=s(e.components);return i.createElement(o.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},p=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,o=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),u=s(n),p=r,f=u["".concat(o,".").concat(p)]||u[p]||m[p]||a;return n?i.createElement(f,l(l({ref:t},d),{},{components:n})):i.createElement(f,l({ref:t},d))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,l=new Array(a);l[0]=p;var c={};for(var o in t)hasOwnProperty.call(t,o)&&(c[o]=t[o]);c.originalType=e,c[u]="string"==typeof e?e:r,l[1]=c;for(var s=2;s<a;s++)l[s]=n[s];return i.createElement.apply(null,l)}return i.createElement.apply(null,n)}p.displayName="MDXCreateElement"},1333:(e,t,n)=>{"use strict";n.d(t,{R:()=>l});var i=n(7294),r=n(4052),a=n.n(r);class l extends i.Component{constructor(e){super(e),this.state={termWidth:""}}componentDidMount(){const e=document.getElementById("term-"+this.props.term).clientWidth,t=document.getElementById("tooltip-"+this.props.term).clientWidth;this.setState({termWidth:e,tooltipWidth:t})}offset(){return 0-this.state.tooltipWidth/2+this.state.termWidth/2+"px"}displayTerm(){let e;return e=this.props.display?this.props.display:this.props.term,e}getIcelandicTerm(){let e;return e=a().terms.filter((e=>e.term.includes(this.props.term.toLowerCase()))),e[0].icelandic}render(){return i.createElement(i.Fragment,null,i.createElement("span",{className:"term",id:"term-"+this.props.term},this.displayTerm(),i.createElement("span",{id:"tooltip-"+this.props.term,className:"tooltip",style:{left:this.offset()}},"\ud83c\uddee\ud83c\uddf8 ",this.getIcelandicTerm())))}}},4052:e=>{e.exports={terms:[,{term:"verb",icelandic:"s\xf6gn"},{term:"pronoun",icelandic:"fornafn"},{term:"mood",icelandic:"h\xe1ttur"},{term:"accusative",icelandic:"\xfeolfall"},{term:"active voice",icelandic:"germynd"},{term:"adjective",icelandic:"l\xfdsingaror\xf0"},{term:"adverb",icelandic:"atviksor\xf0"},{term:"aspiration",icelandic:"fr\xe1bl\xe1stur"},{term:"case",icelandic:"fall"},{term:"comparative",icelandic:"mi\xf0stig"},{term:"consonant",icelandic:"samhlj\xf3\xf0"},{term:"dative",icelandic:"\xfe\xe1gufall"},{term:"definite article",icelandic:"\xe1kve\xf0inn greinir"},{term:"demonstrative pronoun",icelandic:"\xe1bendingarfornafn"},{term:"devoicing",icelandic:"afr\xf6ddun"},{term:"diphthong",icelandic:"tv\xedhlj\xf3\xf0"},{term:"direct object",icelandic:"beint andlag"},{term:"ending",icelandic:"ending"},{term:"feminine",icelandic:"kvenkyn"},{term:"first person",icelandic:"fyrsta pers\xf3na"},{term:"gender",icelandic:"kyn"},{term:"genitive",icelandic:"eignarfall"},{term:"indefinite pronoun",icelandic:"\xf3\xe1kve\xf0i\xf0 fornafn"},{term:"indicative",icelandic:"frams\xf6guh\xe1ttur"},{term:"indirect object",icelandic:"\xf3beint andlag"},{term:"imperative",icelandic:"bo\xf0h\xe1ttur"},{term:"infinitive",icelandic:"nafnh\xe1ttur"},{term:"masculine",icelandic:"karlkyn"},{term:"middle voice",icelandic:"mi\xf0mynd"},{term:"modal verb",icelandic:"hj\xe1lpars\xf6gn"},{term:"monophthong",icelandic:"einhlj\xf3\xf0"},{term:"neuter",icelandic:"hvorugkyn"},{term:"nominative",icelandic:"nefnifall"},{term:"passive voice",icelandic:"\xfeolmynd"},{term:"past participle",icelandic:"l\xfdsingarh\xe1ttur \xfe\xe1t\xed\xf0ar"},{term:"past tense",icelandic:"\xfe\xe1t\xed\xf0"},{term:"personal pronoun",icelandic:"pers\xf3nufornafn"},{term:"plural",icelandic:"fleirtala"},{term:"positive",icelandic:"frumstig"},{term:"preaspiration",icelandic:"a\xf0bl\xe1stur"},{term:"preposition",icelandic:"forsetning"},{term:"principal parts",icelandic:"kennimyndir"},{term:"reflexive pronoun",icelandic:"afturbeygt fornafn"},{term:"possessive pronoun",icelandic:"eignarfornafn"},{term:"present participle",icelandic:"l\xfdsingarh\xe1ttur n\xfat\xed\xf0ar"},{term:"present tense",icelandic:"n\xfat\xed\xf0"},{term:"second person",icelandic:"\xf6nnur pers\xf3na"},{term:"singular",icelandic:"eintala"},{term:"stem",icelandic:"stofn"},{term:"strong",icelandic:"sterk beyging"},{term:"strong verb",icelandic:"sterk s\xf6gn"},{term:"subjunctive",icelandic:"vi\xf0tengingarh\xe1ttur"},{term:"superlative",icelandic:"efsta stig"},{term:"supine",icelandic:"sagnb\xf3t"},{term:"third person",icelandic:"\xferi\xf0ja pers\xf3na"},{term:"transitive",icelandic:"\xe1hrifss\xf6gn"},{term:"weak",icelandic:"veik beyging"},{term:"weak verb",icelandic:"veik s\xf6gn"}]}},7655:(e,t,n)=>{"use strict";n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>c,default:()=>p,frontMatter:()=>l,metadata:()=>o,toc:()=>d});var i=n(7462),r=(n(7294),n(3905)),a=n(1333);const l={id:"case",title:"Introduction to case",description:"An explanation of noun case in Icelandic. Find out how to form the nominative, accusative, dative and genitive."},c=void 0,o={unversionedId:"nouns/case",id:"nouns/case",title:"Introduction to case",description:"An explanation of noun case in Icelandic. Find out how to form the nominative, accusative, dative and genitive.",source:"@site/docs/nouns/case.md",sourceDirName:"nouns",slug:"/nouns/case",permalink:"/docs/nouns/case",draft:!1,tags:[],version:"current",frontMatter:{id:"case",title:"Introduction to case",description:"An explanation of noun case in Icelandic. Find out how to form the nominative, accusative, dative and genitive."},sidebar:"someSidebar",previous:{title:"Number",permalink:"/docs/nouns/number"},next:{title:"Accusative",permalink:"/docs/nouns/accusative"}},s={},d=[{value:"What is case?",id:"what-is-case",level:2},{value:"What causes words to change case?",id:"what-causes-words-to-change-case",level:2}],u={toc:d},m="wrapper";function p(e){let{components:t,...n}=e;return(0,r.kt)(m,(0,i.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"what-is-case"},"What is case?"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)(a.R,{term:"case",display:"Case",mdxType:"Term"}))," is a way of marking relationships between elements in a sentence. Case can indicate things such as the doer (\u201cagent\u201d), undergoer (\u201cpatient\u201d) or recipient of an action."),(0,r.kt)("p",null,"The following word classes can be marked for case or \u201cdeclined\u201d:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"../pronouns/pronoun-intro"},"Pronouns"),"\t\t"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"../nouns/noun-intro"},"Nouns"),"\t\t"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"../adjectives/adjective-intro"},"Adjectives"),"\t\t"),(0,r.kt)("li",{parentName:"ul"},"Numbers 1\u20134")),(0,r.kt)("p",null,"For now, we\u2019ll focus on nouns. Icelandic has four cases, each with a typical function:"),(0,r.kt)("table",null,(0,r.kt)("tbody",null,(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("span",{style:{color:"var(--ifm-color-secondary)"}},(0,r.kt)("strong",null,"nefnifall"))," (nf.)"),(0,r.kt)("td",null,(0,r.kt)("em",null,"nominative")),(0,r.kt)("td",null,"agent")),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("span",{style:{color:"#fe4801"}},(0,r.kt)("strong",null,"\xfeolfall"))," (\xfef.)"),(0,r.kt)("td",null,(0,r.kt)("em",null,(0,r.kt)("a",{href:"accusative"},"accusative"))),(0,r.kt)("td",null,"patient")),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("span",{style:{color:"#1ca2b3"}},(0,r.kt)("strong",null,"\xfe\xe1gufall"))," (\xfegf.)"),(0,r.kt)("td",null,(0,r.kt)("em",null,(0,r.kt)("a",{href:"dative"},"dative"))),(0,r.kt)("td",null,"recipient")),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("span",{style:{color:"#c5008f"}},(0,r.kt)("strong",null,"eignarfall"))," (ef.)"),(0,r.kt)("td",null,(0,r.kt)("em",null,(0,r.kt)("a",{href:"genitive"},"genitive"))),(0,r.kt)("td",null,"possessor")))),(0,r.kt)("p",null,"Don\u2019t worry if you don\u2019t understand the meaning of the functions at this stage. Read on and we\u2019ll go into detail on the use of each case individually."),(0,r.kt)("p",null,"As well as a core typical function, each case has a number of extra uses that will be explained on the following pages."),(0,r.kt)("h2",{id:"what-causes-words-to-change-case"},"What causes words to change case?"),(0,r.kt)("p",null,"A word might appear in a case other than the nominative because it:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\ud83d\udd90 Follows a ",(0,r.kt)("strong",{parentName:"li"},"verb")," that requires the accusative, dative or genitive;"),(0,r.kt)("li",{parentName:"ul"},"\ud83d\udc49 Follows a ",(0,r.kt)("strong",{parentName:"li"},"preposition")," that requires the accusative, dative or genitive;"),(0,r.kt)("li",{parentName:"ul"},"\ud83d\ude4b\u200d\u2642\ufe0f Is indicating ",(0,r.kt)("strong",{parentName:"li"},"possession")," (genitive case);"),(0,r.kt)("li",{parentName:"ul"},"\u23f0 Is part of a ",(0,r.kt)("strong",{parentName:"li"},"time expression")," (normally accusative or dative);"),(0,r.kt)("li",{parentName:"ul"},"\ud83d\udc7b Appears in an ",(0,r.kt)("strong",{parentName:"li"},"impersonal construction")," with a verb or adjective.")),(0,r.kt)("p",null,"Verbs and prepositions are said to take or \u201cgovern\u201d a case."))}p.isMDXComponent=!0}}]);