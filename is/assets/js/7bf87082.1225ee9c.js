(self.webpackChunkgramref=self.webpackChunkgramref||[]).push([[1533],{3905:(t,e,l)=>{"use strict";l.d(e,{Zo:()=>s,kt:()=>p});var n=l(7294);function r(t,e,l){return e in t?Object.defineProperty(t,e,{value:l,enumerable:!0,configurable:!0,writable:!0}):t[e]=l,t}function i(t,e){var l=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),l.push.apply(l,n)}return l}function a(t){for(var e=1;e<arguments.length;e++){var l=null!=arguments[e]?arguments[e]:{};e%2?i(Object(l),!0).forEach((function(e){r(t,e,l[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(l)):i(Object(l)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(l,e))}))}return t}function c(t,e){if(null==t)return{};var l,n,r=function(t,e){if(null==t)return{};var l,n,r={},i=Object.keys(t);for(n=0;n<i.length;n++)l=i[n],e.indexOf(l)>=0||(r[l]=t[l]);return r}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(n=0;n<i.length;n++)l=i[n],e.indexOf(l)>=0||Object.prototype.propertyIsEnumerable.call(t,l)&&(r[l]=t[l])}return r}var u=n.createContext({}),d=function(t){var e=n.useContext(u),l=e;return t&&(l="function"==typeof t?t(e):a(a({},e),t)),l},s=function(t){var e=d(t.components);return n.createElement(u.Provider,{value:e},t.children)},o="mdxType",m={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},k=n.forwardRef((function(t,e){var l=t.components,r=t.mdxType,i=t.originalType,u=t.parentName,s=c(t,["components","mdxType","originalType","parentName"]),o=d(l),k=r,p=o["".concat(u,".").concat(k)]||o[k]||m[k]||i;return l?n.createElement(p,a(a({ref:e},s),{},{components:l})):n.createElement(p,a({ref:e},s))}));function p(t,e){var l=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var i=l.length,a=new Array(i);a[0]=k;var c={};for(var u in e)hasOwnProperty.call(e,u)&&(c[u]=e[u]);c.originalType=t,c[o]="string"==typeof t?t:r,a[1]=c;for(var d=2;d<i;d++)a[d]=l[d];return n.createElement.apply(null,a)}return n.createElement.apply(null,l)}k.displayName="MDXCreateElement"},1333:(t,e,l)=>{"use strict";l.d(e,{R:()=>a});var n=l(7294),r=l(4052),i=l.n(r);class a extends n.Component{constructor(t){super(t),this.state={termWidth:""}}componentDidMount(){const t=document.getElementById("term-"+this.props.term).clientWidth,e=document.getElementById("tooltip-"+this.props.term).clientWidth;this.setState({termWidth:t,tooltipWidth:e})}offset(){return 0-this.state.tooltipWidth/2+this.state.termWidth/2+"px"}displayTerm(){let t;return t=this.props.display?this.props.display:this.props.term,t}getIcelandicTerm(){let t;return t=i().terms.filter((t=>t.term.includes(this.props.term.toLowerCase()))),t[0].icelandic}render(){return n.createElement(n.Fragment,null,n.createElement("span",{className:"term",id:"term-"+this.props.term},this.displayTerm(),n.createElement("span",{id:"tooltip-"+this.props.term,className:"tooltip",style:{left:this.offset()}},"\ud83c\uddee\ud83c\uddf8 ",this.getIcelandicTerm())))}}},4052:t=>{t.exports={terms:[,{term:"verb",icelandic:"s\xf6gn"},{term:"object",icelandic:"andlag"},{term:"phrase",icelandic:"li\xf0ur"},{term:"pronoun",icelandic:"fornafn"},{term:"mood",icelandic:"h\xe1ttur"},{term:"accusative",icelandic:"\xfeolfall"},{term:"active voice",icelandic:"germynd"},{term:"adjective",icelandic:"l\xfdsingaror\xf0"},{term:"adjective phrase",icelandic:"l\xfdsingaror\xf0sli\xf0ur"},{term:"adverb",icelandic:"atviksor\xf0"},{term:"verb phrase",icelandic:"sagnli\xf0ur"},{term:"adverb phrase",icelandic:"atviksli\xf0ur"},{term:"aspiration",icelandic:"fr\xe1bl\xe1stur"},{term:"case",icelandic:"fall"},{term:"comparative",icelandic:"mi\xf0stig"},{term:"complement",icelandic:"fyllili\xf0ur"},{term:"consonant",icelandic:"samhlj\xf3\xf0"},{term:"dative",icelandic:"\xfe\xe1gufall"},{term:"definite article",icelandic:"\xe1kve\xf0inn greinir"},{term:"demonstrative pronoun",icelandic:"\xe1bendingarfornafn"},{term:"determiner",icelandic:"\xe1kv\xe6\xf0isor\xf0"},{term:"devoicing",icelandic:"afr\xf6ddun"},{term:"diphthong",icelandic:"tv\xedhlj\xf3\xf0"},{term:"direct object",icelandic:"beint andlag"},{term:"ending",icelandic:"ending"},{term:"feminine",icelandic:"kvenkyn"},{term:"first person",icelandic:"fyrsta pers\xf3na"},{term:"gender",icelandic:"kyn"},{term:"genitive",icelandic:"eignarfall"},{term:"head",icelandic:"h\xf6fu\xf0"},{term:"imperative mood",icelandic:"bo\xf0h\xe1ttur"},{term:"indefinite pronoun",icelandic:"\xf3\xe1kve\xf0i\xf0 fornafn"},{term:"indicative",icelandic:"frams\xf6guh\xe1ttur"},{term:"indirect object",icelandic:"\xf3beint andlag"},{term:"imperative",icelandic:"bo\xf0h\xe1ttur"},{term:"infinitive",icelandic:"nafnh\xe1ttur"},{term:"masculine",icelandic:"karlkyn"},{term:"middle voice",icelandic:"mi\xf0mynd"},{term:"modal verb",icelandic:"hj\xe1lpars\xf6gn"},{term:"monophthong",icelandic:"einhlj\xf3\xf0"},{term:"neuter",icelandic:"hvorugkyn"},{term:"nominative",icelandic:"nefnifall"},{term:"noun phrase",icelandic:"nafnli\xf0ur"},{term:"passive voice",icelandic:"\xfeolmynd"},{term:"past participle",icelandic:"l\xfdsingarh\xe1ttur \xfe\xe1t\xed\xf0ar"},{term:"past tense",icelandic:"\xfe\xe1t\xed\xf0"},{term:"personal pronoun",icelandic:"pers\xf3nufornafn"},{term:"plural",icelandic:"fleirtala"},{term:"positive",icelandic:"frumstig"},{term:"preaspiration",icelandic:"a\xf0bl\xe1stur"},{term:"preposition",icelandic:"forsetning"},{term:"prepositional phrase",icelandic:"forsetningarli\xf0ur"},{term:"principal parts",icelandic:"kennimyndir"},{term:"reflexive pronoun",icelandic:"afturbeygt fornafn"},{term:"possessive pronoun",icelandic:"eignarfornafn"},{term:"present participle",icelandic:"l\xfdsingarh\xe1ttur n\xfat\xed\xf0ar"},{term:"present tense",icelandic:"n\xfat\xed\xf0"},{term:"second person",icelandic:"\xf6nnur pers\xf3na"},{term:"sentence",icelandic:"setning"},{term:"singular",icelandic:"eintala"},{term:"stem",icelandic:"stofn"},{term:"strong",icelandic:"sterk beyging"},{term:"strong verb",icelandic:"sterk s\xf6gn"},{term:"stylistic fronting",icelandic:"st\xedlf\xe6rsla"},{term:"subject",icelandic:"frumlag"},{term:"subjunctive",icelandic:"vi\xf0tengingarh\xe1ttur"},{term:"superlative",icelandic:"efsta stig"},{term:"supine",icelandic:"sagnb\xf3t"},{term:"syncope",icelandic:"brottfall"},{term:"third person",icelandic:"\xferi\xf0ja pers\xf3na"},{term:"transitive",icelandic:"\xe1hrifss\xf6gn"},{term:"transitive verb",icelandic:"\xe1hrifss\xf6gn"},{term:"intransitive verb",icelandic:"\xe1hrifslaus s\xf6gn"},{term:"weak",icelandic:"veik beyging"},{term:"weak verb",icelandic:"veik s\xf6gn"},{term:"word order",icelandic:"or\xf0ar\xf6\xf0"}]}},2163:(t,e,l)=>{"use strict";l.r(e),l.d(e,{assets:()=>u,contentTitle:()=>a,default:()=>m,frontMatter:()=>i,metadata:()=>c,toc:()=>d});var n=l(7462),r=(l(7294),l(3905));l(1333);const i={id:"impersonal",title:"List of impersonal verbs",description:"A list of impersonal verbs in Icelandic, i.e. ones that have an accusative or dative subject."},a=void 0,c={unversionedId:"reference/impersonal",id:"reference/impersonal",title:"List of impersonal verbs",description:"A list of impersonal verbs in Icelandic, i.e. ones that have an accusative or dative subject.",source:"@site/docs/reference/impersonal.md",sourceDirName:"reference",slug:"/reference/impersonal",permalink:"/is/docs/reference/impersonal",draft:!1,tags:[],version:"current",frontMatter:{id:"impersonal",title:"List of impersonal verbs",description:"A list of impersonal verbs in Icelandic, i.e. ones that have an accusative or dative subject."},sidebar:"someSidebar",previous:{title:"List of irregular verbs",permalink:"/is/docs/reference/irregular-verbs"},next:{title:"List of middle voice verbs",permalink:"/is/docs/reference/middle-voice"}},u={},d=[{value:"Accusative",id:"accusative",level:2},{value:"Dative",id:"dative",level:2}],s={toc:d},o="wrapper";function m(t){let{components:e,...l}=t;return(0,r.kt)(o,(0,n.Z)({},s,l,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"This is a list of impersonal verbs in Icelandic. Most impersonal verbs take a dative subject, but some take an accusative subject."),(0,r.kt)("h2",{id:"accusative"},"Accusative"),(0,r.kt)("figure",null,(0,r.kt)("table",null,(0,r.kt)("thead",null,(0,r.kt)("tr",null,(0,r.kt)("th",{width:"35%"},"Icelandic"),(0,r.kt)("th",null,"English"))),(0,r.kt)("tbody",null,(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("em",null,"dreyma")),(0,r.kt)("td",null,"to dream")),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("em",null,"fur\xf0a")),(0,r.kt)("td",null,"to be surprised")),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("em",null,"gruna")),(0,r.kt)("td",null,"to suspect")),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("em",null,"hrylla vi\xf0")," (+dat.)"),(0,r.kt)("td",null,"to convulse at, feel sick at")),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("em",null,"hungra")),(0,r.kt)("td",null,"to be hungry")),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("em",null,"kitla")),(0,r.kt)("td",null,"to feel ticklish")),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("em",null,"kl\xe6ja")),(0,r.kt)("td",null,"to itch")),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("em",null,"langa")),(0,r.kt)("td",null,"to want, desire, long for")),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("em",null,"minna")),(0,r.kt)("td",null,"to recall")),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("em",null,"skorta")),(0,r.kt)("td",null,"to be short on")),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("em",null,"svima")),(0,r.kt)("td",null,"to feel dizzy")),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("em",null,"vanta")),(0,r.kt)("td",null,"to need, lack")),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("em",null,"\xfeyrsta")),(0,r.kt)("td",null,"to be thirsty"))))),(0,r.kt)("h2",{id:"dative"},"Dative"),(0,r.kt)("figure",null,(0,r.kt)("table",null,(0,r.kt)("thead",null,(0,r.kt)("tr",null,(0,r.kt)("th",{width:"35%"},"Icelandic"),(0,r.kt)("th",null,"English"))),(0,r.kt)("tbody",null,(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("em",null,"batna")),(0,r.kt)("td",null,"to get better, recover")),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("em",null,"bera")," (modal verb)"),(0,r.kt)("td",null,"ought to, should")),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("em",null,"bl\xe6\xf0a")),(0,r.kt)("td",null,"to bleed")),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("em",null,"breg\xf0a")),(0,r.kt)("td",null,"to be startled, jump")),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("em",null,"duga")),(0,r.kt)("td",null,"to be enough, do, suffice")),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("em",null,"finnast")),(0,r.kt)("td",null,"to find, think")),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("em",null,"ganga (vel/illa)")),(0,r.kt)("td",null,"to do (well/badly)")),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("em",null,"gagnast")),(0,r.kt)("td",null,"to be of use to")),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("em",null,"henta")),(0,r.kt)("td",null,"to suit")),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("em",null,"heppnast")),(0,r.kt)("td",null,"to succeed")),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("em",null,"hl\xfdna")),(0,r.kt)("td",null,"to get warm")),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("em",null,"k\xf3lna")),(0,r.kt)("td",null,"to get cold")),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("em",null,"lei\xf0ast")),(0,r.kt)("td",null,"to be/get bored")),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("em",null,"l\xed\xf0a")),(0,r.kt)("td",null,"to feel (physically)")),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("em",null,"l\xedka")," (",(0,r.kt)("em",null,"vi\xf0")," +acc.)"),(0,r.kt)("td",null,"to get on with, like")),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("em",null,"l\xedtast \xe1")," (+acc.)"),(0,r.kt)("td",null,"to think of, make of")),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("em",null,"lj\xfaka")),(0,r.kt)("td",null,"to finish, end")),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("em",null,"misheppnast")),(0,r.kt)("td",null,"to fail")),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("em",null,"misheyrast")),(0,r.kt)("td",null,"to mishear")),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("em",null,"mistakast")),(0,r.kt)("td",null,"to fail")),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("em",null,"n\xfdtast")),(0,r.kt)("td",null,"to be of use to")),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("em",null,"n\xe6gja")),(0,r.kt)("td",null,"to be enough, suffice")),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("em",null,"s\xe1rna")),(0,r.kt)("td",null,"to hurt, be sore")),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("em",null,"seinka")),(0,r.kt)("td",null,"to be late, get delayed")),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("em",null,"sk\xe1na")),(0,r.kt)("td",null,"to get slightly better")),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("em",null,"skiljast")),(0,r.kt)("td",null,"to be of the understanding")),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("em",null,"takast")),(0,r.kt)("td",null,"to succeed, manage")),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("em",null,"versna")),(0,r.kt)("td",null,"to get worse")),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("em",null,"\xfeykja")),(0,r.kt)("td",null,"to seem, consider"))))))}m.isMDXComponent=!0}}]);