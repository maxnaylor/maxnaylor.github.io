(self.webpackChunkgramref=self.webpackChunkgramref||[]).push([[1521],{3905:(e,t,n)=>{"use strict";n.d(t,{Zo:()=>m,kt:()=>d});var r=n(7294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var u=r.createContext({}),s=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},m=function(e){var t=s(e.components);return r.createElement(u.Provider,{value:t},e.children)},k="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,l=e.mdxType,i=e.originalType,u=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),k=s(n),c=l,d=k["".concat(u,".").concat(c)]||k[c]||p[c]||i;return n?r.createElement(d,a(a({ref:t},m),{},{components:n})):r.createElement(d,a({ref:t},m))}));function d(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var i=n.length,a=new Array(i);a[0]=c;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o[k]="string"==typeof e?e:l,a[1]=o;for(var s=2;s<i;s++)a[s]=n[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},1333:(e,t,n)=>{"use strict";n.d(t,{R:()=>a});var r=n(7294),l=n(4052),i=n.n(l);class a extends r.Component{constructor(e){super(e),this.state={termWidth:""}}componentDidMount(){const e=document.getElementById("term-"+this.props.term).clientWidth,t=document.getElementById("tooltip-"+this.props.term).clientWidth;this.setState({termWidth:e,tooltipWidth:t})}offset(){return 0-this.state.tooltipWidth/2+this.state.termWidth/2+"px"}displayTerm(){let e;return e=this.props.display?this.props.display:this.props.term,e}getIcelandicTerm(){let e;return e=i().terms.filter((e=>e.term.includes(this.props.term.toLowerCase()))),e[0].icelandic}render(){return r.createElement(r.Fragment,null,r.createElement("span",{className:"term",id:"term-"+this.props.term},this.displayTerm(),r.createElement("span",{id:"tooltip-"+this.props.term,className:"tooltip",style:{left:this.offset()}},"\ud83c\uddee\ud83c\uddf8 ",this.getIcelandicTerm())))}}},4052:e=>{e.exports={terms:[,{term:"verb",icelandic:"s\xf6gn"},{term:"object",icelandic:"andlag"},{term:"phrase",icelandic:"li\xf0ur"},{term:"pronoun",icelandic:"fornafn"},{term:"mood",icelandic:"h\xe1ttur"},{term:"accusative",icelandic:"\xfeolfall"},{term:"active voice",icelandic:"germynd"},{term:"adjective",icelandic:"l\xfdsingaror\xf0"},{term:"adjective phrase",icelandic:"l\xfdsingaror\xf0sli\xf0ur"},{term:"adverb",icelandic:"atviksor\xf0"},{term:"verb phrase",icelandic:"sagnli\xf0ur"},{term:"adverb phrase",icelandic:"atviksli\xf0ur"},{term:"aspiration",icelandic:"fr\xe1bl\xe1stur"},{term:"case",icelandic:"fall"},{term:"comparative",icelandic:"mi\xf0stig"},{term:"complement",icelandic:"fyllili\xf0ur"},{term:"consonant",icelandic:"samhlj\xf3\xf0"},{term:"dative",icelandic:"\xfe\xe1gufall"},{term:"definite article",icelandic:"\xe1kve\xf0inn greinir"},{term:"demonstrative pronoun",icelandic:"\xe1bendingarfornafn"},{term:"determiner",icelandic:"\xe1kv\xe6\xf0isor\xf0"},{term:"devoicing",icelandic:"afr\xf6ddun"},{term:"diphthong",icelandic:"tv\xedhlj\xf3\xf0"},{term:"direct object",icelandic:"beint andlag"},{term:"ending",icelandic:"ending"},{term:"feminine",icelandic:"kvenkyn"},{term:"first person",icelandic:"fyrsta pers\xf3na"},{term:"gender",icelandic:"kyn"},{term:"genitive",icelandic:"eignarfall"},{term:"head",icelandic:"h\xf6fu\xf0"},{term:"imperative mood",icelandic:"bo\xf0h\xe1ttur"},{term:"indefinite pronoun",icelandic:"\xf3\xe1kve\xf0i\xf0 fornafn"},{term:"indicative",icelandic:"frams\xf6guh\xe1ttur"},{term:"indirect object",icelandic:"\xf3beint andlag"},{term:"imperative",icelandic:"bo\xf0h\xe1ttur"},{term:"infinitive",icelandic:"nafnh\xe1ttur"},{term:"masculine",icelandic:"karlkyn"},{term:"middle voice",icelandic:"mi\xf0mynd"},{term:"modal verb",icelandic:"hj\xe1lpars\xf6gn"},{term:"monophthong",icelandic:"einhlj\xf3\xf0"},{term:"neuter",icelandic:"hvorugkyn"},{term:"nominative",icelandic:"nefnifall"},{term:"noun phrase",icelandic:"nafnli\xf0ur"},{term:"passive voice",icelandic:"\xfeolmynd"},{term:"past participle",icelandic:"l\xfdsingarh\xe1ttur \xfe\xe1t\xed\xf0ar"},{term:"past tense",icelandic:"\xfe\xe1t\xed\xf0"},{term:"personal pronoun",icelandic:"pers\xf3nufornafn"},{term:"plural",icelandic:"fleirtala"},{term:"positive",icelandic:"frumstig"},{term:"preaspiration",icelandic:"a\xf0bl\xe1stur"},{term:"preposition",icelandic:"forsetning"},{term:"prepositional phrase",icelandic:"forsetningarli\xf0ur"},{term:"principal parts",icelandic:"kennimyndir"},{term:"reflexive pronoun",icelandic:"afturbeygt fornafn"},{term:"possessive pronoun",icelandic:"eignarfornafn"},{term:"present participle",icelandic:"l\xfdsingarh\xe1ttur n\xfat\xed\xf0ar"},{term:"present tense",icelandic:"n\xfat\xed\xf0"},{term:"second person",icelandic:"\xf6nnur pers\xf3na"},{term:"sentence",icelandic:"setning"},{term:"singular",icelandic:"eintala"},{term:"stem",icelandic:"stofn"},{term:"strong",icelandic:"sterk beyging"},{term:"strong verb",icelandic:"sterk s\xf6gn"},{term:"stylistic fronting",icelandic:"st\xedlf\xe6rsla"},{term:"subject",icelandic:"frumlag"},{term:"subjunctive",icelandic:"vi\xf0tengingarh\xe1ttur"},{term:"superlative",icelandic:"efsta stig"},{term:"supine",icelandic:"sagnb\xf3t"},{term:"third person",icelandic:"\xferi\xf0ja pers\xf3na"},{term:"transitive",icelandic:"\xe1hrifss\xf6gn"},{term:"transitive verb",icelandic:"\xe1hrifss\xf6gn"},{term:"intransitive verb",icelandic:"\xe1hrifslaus s\xf6gn"},{term:"weak",icelandic:"veik beyging"},{term:"weak verb",icelandic:"veik s\xf6gn"},{term:"word order",icelandic:"or\xf0ar\xf6\xf0"}]}},2083:(e,t,n)=>{"use strict";n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>c,frontMatter:()=>a,metadata:()=>u,toc:()=>m});var r=n(7462),l=(n(7294),n(3905)),i=n(1333);const a={id:"imperative",title:"Imperative",description:"An explanation of the imperative, or command form, of verbs in the Icelandic language."},o=void 0,u={unversionedId:"verbs/imperative",id:"verbs/imperative",title:"Imperative",description:"An explanation of the imperative, or command form, of verbs in the Icelandic language.",source:"@site/docs/verbs/imperative.md",sourceDirName:"verbs",slug:"/verbs/imperative",permalink:"/docs/verbs/imperative",draft:!1,tags:[],version:"current",frontMatter:{id:"imperative",title:"Imperative",description:"An explanation of the imperative, or command form, of verbs in the Icelandic language."},sidebar:"someSidebar",previous:{title:"Middle voice",permalink:"/docs/verbs/middle-voice"},next:{title:"Subjunctive",permalink:"/docs/verbs/subjunctive"}},s={},m=[{value:"Formation",id:"formation",level:2},{value:"Irregular imperative",id:"irregular-imperative",level:3},{value:"Usage",id:"usage",level:2},{value:"Bare infinitive",id:"bare-infinitive",level:3},{value:"Positive instructions",id:"positive-instructions",level:3},{value:"Negative instructions",id:"negative-instructions",level:3},{value:"Idiomatic expressions",id:"idiomatic-expressions",level:3},{value:"Recipes",id:"recipes",level:4},{value:"<em>gj\xf6ra</em>",id:"gj\xf6ra",level:4}],k={toc:m},p="wrapper";function c(e){let{components:t,...n}=e;return(0,l.kt)(p,(0,r.Z)({},k,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"The ",(0,l.kt)("strong",{parentName:"p"},(0,l.kt)(i.R,{term:"imperative mood",mdxType:"Term"}))," in Icelandic is used to give \ud83e\udef5 instructions or orders:"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},(0,l.kt)("em",{parentName:"p"},(0,l.kt)("strong",{parentName:"em"},"R\xe9ttu")," m\xe9r salti\xf0!",(0,l.kt)("br",null),(0,l.kt)("strong",{parentName:"em"},"H\xe6tti\xf0")," \xfeessu strax krakkar!",(0,l.kt)("br",null),(0,l.kt)("strong",{parentName:"em"},"Kom")," inn!"))),(0,l.kt)("h2",{id:"formation"},"Formation"),(0,l.kt)("p",null,"As Icelandic verb conjugations go, the imperative is pretty much the simplest there is. It has 3 forms:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\ud83d\udc3b ",(0,l.kt)("strong",{parentName:"li"},"bare infinitive"),", ",(0,l.kt)("em",{parentName:"li"},"barely")," (pardon the pun) used at all in modern Icelandic,"),(0,l.kt)("li",{parentName:"ul"},"\ud83d\udc64 ",(0,l.kt)("strong",{parentName:"li"},"singular"),", used when talking to one person,"),(0,l.kt)("li",{parentName:"ul"},"\ud83d\udc65 ",(0,l.kt)("strong",{parentName:"li"},"plural"),", used when talking to more than one person.")),(0,l.kt)("p",null,"The bare infinitive is formed by chopping the infinitive ",(0,l.kt)("em",{parentName:"p"},"-a")," ending off the verb. Simple as that (almost, there are a tiny handful of exceptions, ",(0,l.kt)("a",{parentName:"p",href:"#irregular-imperative"},"see below"),")."),(0,l.kt)("admonition",{type:"tip"},(0,l.kt)("p",{parentName:"admonition"},"In group 1 ",(0,l.kt)("a",{parentName:"p",href:"present#weak-verbs"},"weak verbs"),", the ",(0,l.kt)("em",{parentName:"p"},"-a")," is part of the stem, so we keep it in the imperative too.")),(0,l.kt)("p",null,"To form the singular imperative, add ",(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("em",{parentName:"strong"},"-\xf0u"))," to the bare infinitive. In all verb groups apart from group 1 weak, the ",(0,l.kt)("em",{parentName:"p"},"\xf0")," in the ending might change to ",(0,l.kt)("em",{parentName:"p"},"d"),", ",(0,l.kt)("em",{parentName:"p"},"dd")," or ",(0,l.kt)("em",{parentName:"p"},"t")," depending on the consonant that comes before it. The rules for this are the same as for the past tense of group 2 and 3 weak verbs. See ",(0,l.kt)("a",{parentName:"p",href:"past#dental-suffixes"},"dental suffixes")," for all the rules."),(0,l.kt)("p",null,"To form the plural imperative, add ",(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("em",{parentName:"strong"},"-i\xf0"))," to the bare infinitive. This is nice and regular."),(0,l.kt)("p",null,"Let\u2019s look at some examples:"),(0,l.kt)("figure",null,(0,l.kt)("table",null,(0,l.kt)("thead",null,(0,l.kt)("tr",null,(0,l.kt)("th",null,"Verb group"),(0,l.kt)("th",{width:"20%"},"Infinitive"),(0,l.kt)("th",{width:"20%"},"Bare imperative"),(0,l.kt)("th",{width:"20%"},"Singular"),(0,l.kt)("th",{width:"20%"},"Plural"))),(0,l.kt)("tbody",null,(0,l.kt)("tr",null,(0,l.kt)("th",{valign:"top"},"Weak group 1"),(0,l.kt)("td",null,(0,l.kt)("em",null,"a\xf0 tala",(0,l.kt)("br",null),"a\xf0 hj\xe1lpa",(0,l.kt)("br",null),"a\xf0 elda")),(0,l.kt)("td",null,(0,l.kt)("em",null,"tala",(0,l.kt)("br",null),"hj\xe1lpa",(0,l.kt)("br",null),"elda")),(0,l.kt)("td",null,(0,l.kt)("em",null,"tala",(0,l.kt)("strong",null,"\xf0u"),(0,l.kt)("br",null),"hj\xe1lpa",(0,l.kt)("strong",null,"\xf0u"),(0,l.kt)("br",null),"elda",(0,l.kt)("strong",null,"\xf0u"))),(0,l.kt)("td",null,(0,l.kt)("em",null,"tal",(0,l.kt)("strong",null,"i\xf0"),(0,l.kt)("br",null),"hj\xe1lp",(0,l.kt)("strong",null,"i\xf0"),(0,l.kt)("br",null),"eld",(0,l.kt)("strong",null,"i\xf0")))),(0,l.kt)("tr",null,(0,l.kt)("th",{valign:"top"},"Weak group 2"),(0,l.kt)("td",null,(0,l.kt)("em",null,"a\xf0 gera",(0,l.kt)("br",null),"a\xf0 heyra",(0,l.kt)("br",null),"a\xf0 renna",(0,l.kt)("br",null),"a\xf0 senda",(0,l.kt)("br",null),"a\xf0 steikja")),(0,l.kt)("td",null,(0,l.kt)("em",null,"ger",(0,l.kt)("br",null),"heyr",(0,l.kt)("br",null),"renn",(0,l.kt)("br",null),"send",(0,l.kt)("br",null),"steik")),(0,l.kt)("td",null,(0,l.kt)("em",null,"ger",(0,l.kt)("strong",null,"\xf0u"),(0,l.kt)("br",null),"heyr",(0,l.kt)("strong",null,"\xf0u"),(0,l.kt)("br",null),"renn",(0,l.kt)("strong",null,"du"),(0,l.kt)("br",null),"sen",(0,l.kt)("strong",null,"du"),(0,l.kt)("br",null),"steik",(0,l.kt)("strong",null,"tu"))),(0,l.kt)("td",null,(0,l.kt)("em",null,"ger",(0,l.kt)("strong",null,"i\xf0"),(0,l.kt)("br",null),"heyr",(0,l.kt)("strong",null,"i\xf0"),(0,l.kt)("br",null),"renn",(0,l.kt)("strong",null,"i\xf0"),(0,l.kt)("br",null),"send",(0,l.kt)("strong",null,"i\xf0"),(0,l.kt)("br",null),"steik",(0,l.kt)("strong",null,"i\xf0")))),(0,l.kt)("tr",null,(0,l.kt)("th",{valign:"top"},"Weak group 3/",(0,l.kt)("br",null),"strong verbs"),(0,l.kt)("td",null,(0,l.kt)("em",null,"a\xf0 velja",(0,l.kt)("br",null),"a\xf0 flytja",(0,l.kt)("br",null),"a\xf0 fara",(0,l.kt)("br",null),"a\xf0 koma",(0,l.kt)("br",null),"a\xf0 bj\xf3\xf0a",(0,l.kt)("br",null),"a\xf0 \xfevo")),(0,l.kt)("td",null,(0,l.kt)("em",null,"vel",(0,l.kt)("br",null),"flyt",(0,l.kt)("br",null),"far",(0,l.kt)("br",null),"kom",(0,l.kt)("br",null),"bj\xf3\xf0",(0,l.kt)("br",null),"\xfevo")),(0,l.kt)("td",null,(0,l.kt)("em",null,"vel",(0,l.kt)("strong",null,"du"),(0,l.kt)("br",null),"fly",(0,l.kt)("strong",null,"ttu"),(0,l.kt)("br",null),"far",(0,l.kt)("strong",null,"\xf0u"),(0,l.kt)("br",null),"kom",(0,l.kt)("strong",null,"du"),(0,l.kt)("br",null),"bj\xf3",(0,l.kt)("strong",null,"ddu"),(0,l.kt)("br",null),"\xfevo",(0,l.kt)("strong",null,"\xf0u"))),(0,l.kt)("td",null,(0,l.kt)("em",null,"velj",(0,l.kt)("strong",null,"i\xf0"),(0,l.kt)("br",null),"flytj",(0,l.kt)("strong",null,"i\xf0"),(0,l.kt)("br",null),"far",(0,l.kt)("strong",null,"i\xf0"),(0,l.kt)("br",null),"kom",(0,l.kt)("strong",null,"i\xf0"),(0,l.kt)("br",null),"bj\xf3\xf0",(0,l.kt)("strong",null,"i\xf0"),(0,l.kt)("br",null),"\xfevo",(0,l.kt)("strong",null,"i\xf0"))))))),(0,l.kt)("p",null,"The imperative can also be combined with the middle voice:"),(0,l.kt)("figure",null,(0,l.kt)("table",null,(0,l.kt)("thead",null,(0,l.kt)("tr",null,(0,l.kt)("th",{width:"33%"},"Middle voice infinitive"),(0,l.kt)("th",{width:"33%"},"Singular"),(0,l.kt)("th",{width:"33%"},"Plural"))),(0,l.kt)("tbody",null,(0,l.kt)("tr",null,(0,l.kt)("td",null,(0,l.kt)("em",null,"a\xf0 gefast",(0,l.kt)("br",null),"a\xf0 setjast")),(0,l.kt)("td",null,(0,l.kt)("em",null,"gefs",(0,l.kt)("strong",null,"tu"),(0,l.kt)("br",null),"ses",(0,l.kt)("strong",null,"tu"))),(0,l.kt)("td",null,(0,l.kt)("em",null,"gef",(0,l.kt)("strong",null,"ist"),(0,l.kt)("br",null),"setj",(0,l.kt)("strong",null,"ist"))))))),(0,l.kt)("p",null,"Middle voice imperatives do not have bare forms."),(0,l.kt)("h3",{id:"irregular-imperative"},"Irregular imperative"),(0,l.kt)("p",null,"There are a couple of verbs in Icelandic that have an irregular imperative stem, which tends to show up only in the bare and singular forms:"),(0,l.kt)("figure",null,(0,l.kt)("table",null,(0,l.kt)("thead",null,(0,l.kt)("tr",null,(0,l.kt)("th",{width:"25%"},"Infinitive"),(0,l.kt)("th",{width:"25%"},"Bare imperative"),(0,l.kt)("th",{width:"25%"},"Singular"),(0,l.kt)("th",{width:"25%"},"Plural"))),(0,l.kt)("tbody",null,(0,l.kt)("tr",null,(0,l.kt)("td",null,(0,l.kt)("em",null,"a\xf0 binda")),(0,l.kt)("td",null,(0,l.kt)("em",null,"bind")),(0,l.kt)("td",null,(0,l.kt)("em",null,"bi",(0,l.kt)("strong",null,"ttu"))),(0,l.kt)("td",null,(0,l.kt)("em",null,"bind",(0,l.kt)("strong",null,"i\xf0")))),(0,l.kt)("tr",null,(0,l.kt)("td",null,(0,l.kt)("em",null,"a\xf0 ganga")),(0,l.kt)("td",null,(0,l.kt)("em",null,"gakk")),(0,l.kt)("td",null,(0,l.kt)("em",null,"gakk",(0,l.kt)("strong",null,"tu"))),(0,l.kt)("td",null,(0,l.kt)("em",null,"gang",(0,l.kt)("strong",null,"i\xf0")))),(0,l.kt)("tr",null,(0,l.kt)("td",null,(0,l.kt)("em",null,"a\xf0 standa")),(0,l.kt)("td",null,(0,l.kt)("em",null,"statt")),(0,l.kt)("td",null,(0,l.kt)("em",null,"sta",(0,l.kt)("strong",null,"ttu"))),(0,l.kt)("td",null,(0,l.kt)("em",null,"stand",(0,l.kt)("strong",null,"i\xf0")))),(0,l.kt)("tr",null,(0,l.kt)("td",null,(0,l.kt)("em",null,"a\xf0 vera")),(0,l.kt)("td",null,(0,l.kt)("em",null,"ver/vert")),(0,l.kt)("td",null,(0,l.kt)("em",null,"ver",(0,l.kt)("strong",null,"tu"))),(0,l.kt)("td",null,(0,l.kt)("em",null,"ver",(0,l.kt)("strong",null,"i\xf0")))),(0,l.kt)("tr",null,(0,l.kt)("td",null,(0,l.kt)("em",null,"a\xf0 \xfeegja")),(0,l.kt)("td",null,(0,l.kt)("em",null,"\xfeegi/\xfeeg")),(0,l.kt)("td",null,(0,l.kt)("em",null,"\xfeegi",(0,l.kt)("strong",null,"\xf0u"))),(0,l.kt)("td",null,(0,l.kt)("em",null,"\xfeeg",(0,l.kt)("strong",null,"i\xf0"))))))),(0,l.kt)("p",null,"You may also hear the forms ",(0,l.kt)("em",{parentName:"p"},"k",(0,l.kt)("strong",{parentName:"em"},"ey"),"ptu")," and ",(0,l.kt)("em",{parentName:"p"},"sp",(0,l.kt)("strong",{parentName:"em"},"u"),"r\xf0u"),", as opposed to the expected ",(0,l.kt)("em",{parentName:"p"},"kauptu")," and ",(0,l.kt)("em",{parentName:"p"},"spyr\xf0u"),", for ",(0,l.kt)("em",{parentName:"p"},"a\xf0 kaupa")," and ",(0,l.kt)("em",{parentName:"p"},"a\xf0 spyrja")," respectively. These aren\u2019t officially acknowledged as correct forms, but are nonetheless super common."),(0,l.kt)("h2",{id:"usage"},"Usage"),(0,l.kt)("h3",{id:"bare-infinitive"},"Bare infinitive"),(0,l.kt)("p",null,"Although common in Old Norse, the bare infinitive is very rarely used in modern, idiomatic Icelandic. One of the few exceptions is:"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},(0,l.kt)("em",{parentName:"p"},(0,l.kt)("strong",{parentName:"em"},"Kom")," inn!"))),(0,l.kt)("p",null,"This is used when we don\u2019t know how many people are on the other side of a closed door. In other contexts, the bare infintive carries a formal or archaic connotation."),(0,l.kt)("h3",{id:"positive-instructions"},"Positive instructions"),(0,l.kt)("p",null,"The singular and plural forms of the imperative are used to give direct instructions to take a particular action:"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},(0,l.kt)("em",{parentName:"p"},(0,l.kt)("strong",{parentName:"em"},"Sendu")," m\xe9r heimilisfangi\xf0.",(0,l.kt)("br",null),(0,l.kt)("strong",{parentName:"em"},"Hringdu")," \xed hann n\xfana.",(0,l.kt)("br",null),(0,l.kt)("strong",{parentName:"em"},"Keyr\xf0u")," \xed b\xfa\xf0ina og ",(0,l.kt)("strong",{parentName:"em"},"kauptu")," mj\xf3lkurfernu."))),(0,l.kt)("p",null,"Although not as brusque as in some other languages, the imperative, particularly in its singular form, is a ",(0,l.kt)("em",{parentName:"p"},"direct")," way of telling somebody to do something. If you want to be more polite, you can use a question with ",(0,l.kt)("em",{parentName:"p"},"vilja")," or ",(0,l.kt)("em",{parentName:"p"},"geta")," (and show even more politeness with the ",(0,l.kt)("a",{parentName:"p",href:"subjunctive#politeness"},"subjunctive"),"):"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},(0,l.kt)("em",{parentName:"p"},(0,l.kt)("strong",{parentName:"em"},"Viltu")," loka glugganum?",(0,l.kt)("br",null),(0,l.kt)("strong",{parentName:"em"},"Getur\xf0u")," millif\xe6rt \xe1 mig peningana?",(0,l.kt)("br",null),(0,l.kt)("strong",{parentName:"em"},"G\xe6tir\xf0u")," reima\xf0 sk\xf3na m\xedna?"))),(0,l.kt)("h3",{id:"negative-instructions"},"Negative instructions"),(0,l.kt)("p",null,"When we want to give a negative command in Icelandic, a common way is to use ",(0,l.kt)("em",{parentName:"p"},"ekki")," followed by the infinitive:"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},(0,l.kt)("em",{parentName:"p"},(0,l.kt)("strong",{parentName:"em"},"Ekki sulla")," drykknum \xe1 bor\xf0i\xf0 elskan!",(0,l.kt)("br",null),(0,l.kt)("strong",{parentName:"em"},"Ekki kasta")," steinum a\xf0 fuglum!",(0,l.kt)("br",null),(0,l.kt)("strong",{parentName:"em"},"Ekki snerta")," k\xf6kuna!"))),(0,l.kt)("p",null,"We can also use the imperative followed by ",(0,l.kt)("em",{parentName:"p"},"ekki"),", which is a bit stronger:"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},(0,l.kt)("em",{parentName:"p"},(0,l.kt)("strong",{parentName:"em"},"L\xe1ttu ekki")," svona!"))),(0,l.kt)("h3",{id:"idiomatic-expressions"},"Idiomatic expressions"),(0,l.kt)("p",null,"The imperative is found in quite a few idiomatic expressions where the usage might not follow the rules above."),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"Heyr\xf0u")," is commonly used as a conversational interjection, meaning something like \u201cright\u201d or \u201clook\u201d. It doesn\u2019t have an annoyed undertone like the English \u201clisten!\u201d."),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"Afsaki\xf0")," meaning \u201cexcuse me\u201d is a plural imperative, used even when talking to exactly one person. This usage stems from the days of ",(0,l.kt)("em",{parentName:"p"},"\xfe\xe9run"),", when the polite 2nd person pronoun ",(0,l.kt)("em",{parentName:"p"},(0,l.kt)("a",{parentName:"em",href:"../pronouns/personal#obsolete-pronouns"},"\xfe\xe9r"))," was still in common use. This verb form used the plural endings, and so it followed that ",(0,l.kt)("em",{parentName:"p"},"afsaki\xf0")," would be plural too. Although ",(0,l.kt)("em",{parentName:"p"},"\xfe\xe9run")," is long dead, ",(0,l.kt)("em",{parentName:"p"},"afsaki\xf0")," continues to be used as a polite hangover."),(0,l.kt)("h4",{id:"recipes"},"Recipes"),(0,l.kt)("p",null,"\ud83c\udf73 Recipes are often written in the plural imperative:"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},(0,l.kt)("em",{parentName:"p"},(0,l.kt)("strong",{parentName:"em"},"B\xe6ti\xf0")," mj\xf3lkinni \xfat \xed og ",(0,l.kt)("strong",{parentName:"em"},"hr\xe6ri\xf0")," vel."))),(0,l.kt)("p",null,"This is another relic from the days of ",(0,l.kt)("em",{parentName:"p"},"\xfe\xe9run")," but lives on as a convention in contemporary Icelandic."),(0,l.kt)("h4",{id:"gj\xf6ra"},(0,l.kt)("em",{parentName:"h4"},"gj\xf6ra")),(0,l.kt)("p",null,"The commonly used phrase ",(0,l.kt)("em",{parentName:"p"},"gj\xf6r\xf0u svo vel")," and others derived from it show an older from of the verb ",(0,l.kt)("em",{parentName:"p"},"gera"),", instead of the expected ",(0,l.kt)("em",{parentName:"p"},"ger\xf0u"),":"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},(0,l.kt)("em",{parentName:"p"},(0,l.kt)("strong",{parentName:"em"},"Gj\xf6r\xf0u svo vel")," a\xf0 kveikja \xe1 lj\xf3sinu!"))),(0,l.kt)("p",null,"This phrase is akin to \u201cfeel free\u201d, \u201cgo ahead\u201d or \u201cplease\u201d in English."))}c.isMDXComponent=!0}}]);