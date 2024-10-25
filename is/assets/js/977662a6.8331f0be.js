(self.webpackChunkgramref=self.webpackChunkgramref||[]).push([[6630],{3905:(e,t,n)=>{"use strict";n.d(t,{Zo:()=>d,kt:()=>k});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=a.createContext({}),c=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=c(e.components);return a.createElement(o.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),m=c(n),p=r,k=m["".concat(o,".").concat(p)]||m[p]||u[p]||i;return n?a.createElement(k,l(l({ref:t},d),{},{components:n})):a.createElement(k,l({ref:t},d))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=p;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s[m]="string"==typeof e?e:r,l[1]=s;for(var c=2;c<i;c++)l[c]=n[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},1333:(e,t,n)=>{"use strict";n.d(t,{R:()=>l});var a=n(7294),r=n(4052),i=n.n(r);class l extends a.Component{constructor(e){super(e),this.state={termWidth:""}}componentDidMount(){const e=document.getElementById("term-"+this.props.term).clientWidth,t=document.getElementById("tooltip-"+this.props.term).clientWidth;this.setState({termWidth:e,tooltipWidth:t})}offset(){return 0-this.state.tooltipWidth/2+this.state.termWidth/2+"px"}displayTerm(){let e;return e=this.props.display?this.props.display:this.props.term,e}getIcelandicTerm(){let e;return e=i().terms.filter((e=>e.term.includes(this.props.term.toLowerCase()))),e[0].icelandic}render(){return a.createElement(a.Fragment,null,a.createElement("span",{className:"term",id:"term-"+this.props.term},this.displayTerm(),a.createElement("span",{id:"tooltip-"+this.props.term,className:"tooltip",style:{left:this.offset()}},"\ud83c\uddee\ud83c\uddf8 ",this.getIcelandicTerm())))}}},4052:e=>{e.exports={terms:[,{term:"verb",icelandic:"s\xf6gn"},{term:"object",icelandic:"andlag"},{term:"phrase",icelandic:"li\xf0ur"},{term:"pronoun",icelandic:"fornafn"},{term:"mood",icelandic:"h\xe1ttur"},{term:"accusative",icelandic:"\xfeolfall"},{term:"active voice",icelandic:"germynd"},{term:"adjective",icelandic:"l\xfdsingaror\xf0"},{term:"adjective phrase",icelandic:"l\xfdsingaror\xf0sli\xf0ur"},{term:"adverb",icelandic:"atviksor\xf0"},{term:"verb phrase",icelandic:"sagnli\xf0ur"},{term:"adverb phrase",icelandic:"atviksli\xf0ur"},{term:"aspiration",icelandic:"fr\xe1bl\xe1stur"},{term:"case",icelandic:"fall"},{term:"comparative",icelandic:"mi\xf0stig"},{term:"complement",icelandic:"fyllili\xf0ur"},{term:"consonant",icelandic:"samhlj\xf3\xf0"},{term:"dative",icelandic:"\xfe\xe1gufall"},{term:"definite article",icelandic:"\xe1kve\xf0inn greinir"},{term:"demonstrative pronoun",icelandic:"\xe1bendingarfornafn"},{term:"determiner",icelandic:"\xe1kv\xe6\xf0isor\xf0"},{term:"devoicing",icelandic:"afr\xf6ddun"},{term:"diphthong",icelandic:"tv\xedhlj\xf3\xf0"},{term:"direct object",icelandic:"beint andlag"},{term:"ending",icelandic:"ending"},{term:"feminine",icelandic:"kvenkyn"},{term:"first person",icelandic:"fyrsta pers\xf3na"},{term:"gender",icelandic:"kyn"},{term:"genitive",icelandic:"eignarfall"},{term:"head",icelandic:"h\xf6fu\xf0"},{term:"imperative mood",icelandic:"bo\xf0h\xe1ttur"},{term:"indefinite pronoun",icelandic:"\xf3\xe1kve\xf0i\xf0 fornafn"},{term:"indicative",icelandic:"frams\xf6guh\xe1ttur"},{term:"indirect object",icelandic:"\xf3beint andlag"},{term:"imperative",icelandic:"bo\xf0h\xe1ttur"},{term:"infinitive",icelandic:"nafnh\xe1ttur"},{term:"masculine",icelandic:"karlkyn"},{term:"middle voice",icelandic:"mi\xf0mynd"},{term:"modal verb",icelandic:"hj\xe1lpars\xf6gn"},{term:"monophthong",icelandic:"einhlj\xf3\xf0"},{term:"neuter",icelandic:"hvorugkyn"},{term:"nominative",icelandic:"nefnifall"},{term:"noun phrase",icelandic:"nafnli\xf0ur"},{term:"passive voice",icelandic:"\xfeolmynd"},{term:"past participle",icelandic:"l\xfdsingarh\xe1ttur \xfe\xe1t\xed\xf0ar"},{term:"past tense",icelandic:"\xfe\xe1t\xed\xf0"},{term:"personal pronoun",icelandic:"pers\xf3nufornafn"},{term:"plural",icelandic:"fleirtala"},{term:"positive",icelandic:"frumstig"},{term:"preaspiration",icelandic:"a\xf0bl\xe1stur"},{term:"preposition",icelandic:"forsetning"},{term:"prepositional phrase",icelandic:"forsetningarli\xf0ur"},{term:"principal parts",icelandic:"kennimyndir"},{term:"reflexive pronoun",icelandic:"afturbeygt fornafn"},{term:"possessive pronoun",icelandic:"eignarfornafn"},{term:"present participle",icelandic:"l\xfdsingarh\xe1ttur n\xfat\xed\xf0ar"},{term:"present tense",icelandic:"n\xfat\xed\xf0"},{term:"second person",icelandic:"\xf6nnur pers\xf3na"},{term:"sentence",icelandic:"setning"},{term:"singular",icelandic:"eintala"},{term:"stem",icelandic:"stofn"},{term:"strong",icelandic:"sterk beyging"},{term:"strong verb",icelandic:"sterk s\xf6gn"},{term:"stylistic fronting",icelandic:"st\xedlf\xe6rsla"},{term:"subject",icelandic:"frumlag"},{term:"subjunctive",icelandic:"vi\xf0tengingarh\xe1ttur"},{term:"superlative",icelandic:"efsta stig"},{term:"supine",icelandic:"sagnb\xf3t"},{term:"third person",icelandic:"\xferi\xf0ja pers\xf3na"},{term:"transitive",icelandic:"\xe1hrifss\xf6gn"},{term:"transitive verb",icelandic:"\xe1hrifss\xf6gn"},{term:"intransitive verb",icelandic:"\xe1hrifslaus s\xf6gn"},{term:"weak",icelandic:"veik beyging"},{term:"weak verb",icelandic:"veik s\xf6gn"},{term:"word order",icelandic:"or\xf0ar\xf6\xf0"}]}},9501:(e,t,n)=>{"use strict";n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>p,frontMatter:()=>l,metadata:()=>o,toc:()=>d});var a=n(7462),r=(n(7294),n(3905)),i=n(1333);const l={id:"case-governance",title:"Case governance",description:"An explanation of what case Icelandic verbs govern, including Icelandic language verbs that govern dative and genitive."},s=void 0,o={unversionedId:"verbs/case-governance",id:"verbs/case-governance",title:"Case governance",description:"An explanation of what case Icelandic verbs govern, including Icelandic language verbs that govern dative and genitive.",source:"@site/i18n/is/docusaurus-plugin-content-docs/current/verbs/case-governance.md",sourceDirName:"verbs",slug:"/verbs/case-governance",permalink:"/is/docs/verbs/case-governance",draft:!1,tags:[],version:"current",frontMatter:{id:"case-governance",title:"Case governance",description:"An explanation of what case Icelandic verbs govern, including Icelandic language verbs that govern dative and genitive."},sidebar:"someSidebar",previous:{title:"Modal verbs",permalink:"/is/docs/verbs/modal"},next:{title:"Introduction to nouns",permalink:"/is/docs/nouns/noun-intro"}},c={},d=[{value:"Direct and indirect objects",id:"direct-and-indirect-objects",level:2},{value:"Verbs that govern the dative",id:"dative",level:2},{value:"Verbs that govern the genitive",id:"genitive",level:2}],m={toc:d},u="wrapper";function p(e){let{components:t,...n}=e;return(0,r.kt)(u,(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Icelandic verbs can govern any of the three cases: ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)(i.R,{term:"accusative",mdxType:"Term"})),", ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)(i.R,{term:"dative",mdxType:"Term"}))," or ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)(i.R,{term:"genitive",mdxType:"Term"})),". "),(0,r.kt)("p",null,"What this means in reality is that their object(s) (the things ",(0,r.kt)("em",{parentName:"p"},"affected")," by the verb) will be in one of these cases. For a general overview of this concept, see ",(0,r.kt)("a",{parentName:"p",href:"../nouns/case"},"Introduction to case"),"."),(0,r.kt)("h2",{id:"direct-and-indirect-objects"},"Direct and indirect objects"),(0,r.kt)("p",null,"Some verbs take just one object, known as the ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)(i.R,{term:"direct object",mdxType:"Term"})),":"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("em",{parentName:"p"},"Krakkinn bor\xf0ar ",(0,r.kt)("strong",{parentName:"em"},(0,r.kt)("span",{class:"ushift"},"pitsuna")),".",(0,r.kt)("br",null),"F\xf3tb\xf3ltama\xf0urinn kasta\xf0i ",(0,r.kt)("strong",{parentName:"em"},(0,r.kt)("span",{class:"ushift"},"boltanum")),".",(0,r.kt)("br",null),"Nj\xf3ttu ",(0,r.kt)("strong",{parentName:"em"},(0,r.kt)("span",{class:"ushift"},"dagsins")),"!"))),(0,r.kt)("p",null,"Other verbs can take two objects:"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("em",{parentName:"p"},"Mamma gaf ",(0,r.kt)("strong",{parentName:"em"},(0,r.kt)("span",{class:"highlighter"},"m\xe9r"))," ",(0,r.kt)("strong",{parentName:"em"},(0,r.kt)("span",{class:"ushift"},"b\xf3k"))," \xed j\xf3lagj\xf6f.",(0,r.kt)("br",null),"Kennarinn sag\xf0i ",(0,r.kt)("strong",{parentName:"em"},(0,r.kt)("span",{class:"highlighter"},"b\xf6rnunum"))," ",(0,r.kt)("strong",{parentName:"em"},(0,r.kt)("span",{class:"ushift"},"s\xf6gu")),"."))),(0,r.kt)("p",null,"Here, the verb has both a ",(0,r.kt)("span",{class:"ushift"},"direct object")," and an ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("span",{class:"highlighter"},(0,r.kt)(i.R,{term:"indirect object",mdxType:"Term"}))),". The indirect object is often the person or thing that is \u201creceiving\u201d the direct object. "),(0,r.kt)("p",null,"In the first example above, the direct object is ",(0,r.kt)("em",{parentName:"p"},"b\xf3k")," (the thing being given) and the indirect object is ",(0,r.kt)("em",{parentName:"p"},"m\xe9r")," (the person the book is being given to.)"),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"The majority of verbs take a ",(0,r.kt)("strong",{parentName:"p"},"direct object in the accusative")," and an ",(0,r.kt)("strong",{parentName:"p"},"indirect object in the dative")," (if they take an indirect object at all). This is the norm. What we\u2019ll deal with now is the verbs that don\u2019t fit this pattern.")),(0,r.kt)("h2",{id:"dative"},"Verbs that govern the dative"),(0,r.kt)("p",null,"Sometimes what case a verb governs is arbitrary. For proof of this, check out these pairs of verbs that have similar meanings but govern different cases:"),(0,r.kt)("figure",null,(0,r.kt)("table",null,(0,r.kt)("thead",null,(0,r.kt)("tr",null,(0,r.kt)("th",{width:"50%"},"+ Accusative"),(0,r.kt)("th",{width:"50%"},"+ Dative"))),(0,r.kt)("tbody",null,(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("em",null,"a\xf0sto\xf0a")," \u201cto assist\u201d"),(0,r.kt)("td",null,(0,r.kt)("em",null,"hj\xe1lpa")," \u201cto help\u201d")),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("em",null,"keyra")," \u201cto drive\u201d"),(0,r.kt)("td",null,(0,r.kt)("em",null,"aka")," \u201cto drive\u201d")),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("em",null,"kl\xe1ra")," \u201cto finish\u201d"),(0,r.kt)("td",null,(0,r.kt)("em",null,"lj\xfaka")," \u201cto finish, end\u201d"))))),(0,r.kt)("p",null,"There doesn\u2019t seem to be any rhyme or reason here. However, there are certain common themes that you might notice running through many verbs that govern the dative:"),(0,r.kt)("figure",null,(0,r.kt)("table",null,(0,r.kt)("tbody",null,(0,r.kt)("tr",null,(0,r.kt)("th",{align:"left",valign:"top"},"Control of people/vehicles"),(0,r.kt)("td",{valign:"top"},(0,r.kt)("em",null,"aka, flj\xfaga, lei\xf0beina, sigla, r\xe1\xf0a, stj\xf3rna, st\xfdra"))),(0,r.kt)("tr",null,(0,r.kt)("th",{align:"left",valign:"top"},"Loss/destruction"),(0,r.kt)("td",{valign:"top"},(0,r.kt)("em",null,"drekkja, ey\xf0a, glata, gleyma, kl\xfa\xf0ra, spilla, s\xf3a, tapa, t\xfdna, \xfatr\xfdma"))),(0,r.kt)("tr",null,(0,r.kt)("th",{align:"left",valign:"top"},"Sudden movement"),(0,r.kt)("td",{valign:"top"},(0,r.kt)("em",null,"fleygja, fl\xfdta, henda, kasta, lyfta, renna, skella, sleppa, smella, sparka, \xfdta"))),(0,r.kt)("tr",null,(0,r.kt)("th",{align:"left",valign:"top"},"Movement of liquids or gases"),(0,r.kt)("td",{valign:"top"},(0,r.kt)("em",null,"anda, hella, skola, skvetta, sprauta, sp\xfdja, sulla, sturta, \xe6la"))),(0,r.kt)("tr",null,(0,r.kt)("th",{align:"left",valign:"top"},"Rejection/refusal"),(0,r.kt)("td",{valign:"top"},(0,r.kt)("em",null,"andm\xe6la, hafna, m\xf3tm\xe6la, neita"))),(0,r.kt)("tr",null,(0,r.kt)("th",{align:"left",valign:"top"},"Violation/threats"),(0,r.kt)("td",{valign:"top"},(0,r.kt)("em",null,"nau\xf0ga, \xf3gna, str\xed\xf0a")))))),(0,r.kt)("p",null,"Some of these verbs take different cases depending on the meaning. For example, when ",(0,r.kt)("em",{parentName:"p"},"r\xe1\xf0a")," means \u201cto decide\u201d, it takes the dative. But when it means \u201cto hire\u201d, it takes the accusative:"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("em",{parentName:"p"},"\xde\xfa r\xe6\xf0ur ",(0,r.kt)("strong",{parentName:"em"},"dagskr\xe1nni"),".",(0,r.kt)("br",null),"Fyrirt\xe6ki\xf0 r\xe6\xf0ur tvo ",(0,r.kt)("strong",{parentName:"em"},"n\xfdja starfsmenn"),"."))),(0,r.kt)("p",null,"All in all, just under a third of Icelandic verbs govern the dative."),(0,r.kt)("h2",{id:"genitive"},"Verbs that govern the genitive"),(0,r.kt)("p",null,"Very few verbs govern the genitive in modern Icelandic. In fact, it\u2019s possible to list almost all of them here:"),(0,r.kt)("figure",null,(0,r.kt)("table",{className:"full-width"},(0,r.kt)("thead",null,(0,r.kt)("tr",null,(0,r.kt)("th",null,"Icelandic"),(0,r.kt)("th",null,"English"),(0,r.kt)("th",null,"Notes"))),(0,r.kt)("tbody",null,(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("em",null,"afla")),(0,r.kt)("td",null,"to gain, seek, acquire"),(0,r.kt)("td",null,"\xa0")),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("em",null,"b\xed\xf0a")),(0,r.kt)("td",null,"to wait"),(0,r.kt)("td",null,"Normally avoided by using ",(0,r.kt)("em",null,"b\xed\xf0a eftir")," +dat.")),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("em",null,"freista")),(0,r.kt)("td",null,"to tempt"),(0,r.kt)("td",null,"\xa0")),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("em",null,"geta")),(0,r.kt)("td",null,"to remark, note, state"),(0,r.kt)("td",null,"\xa0")),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("em",null,"g\xe6ta")),(0,r.kt)("td",null,"to look after, ensure"),(0,r.kt)("td",null,"Quite formal, ",(0,r.kt)("em",null,"passa")," and ",(0,r.kt)("em",null,"tryggja")," are used more often.")),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("em",null,"leita")),(0,r.kt)("td",null,"to look for"),(0,r.kt)("td",null,"Normally avoided by using ",(0,r.kt)("em",null,"leita a\xf0/eftir")," +dat.")),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("em",null,"nj\xf3ta")),(0,r.kt)("td",null,"to enjoy"),(0,r.kt)("td",null,"\xa0")),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("em",null,"sakna")),(0,r.kt)("td",null,"to miss (a person)"),(0,r.kt)("td",null,"\xa0")),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("em",null,"spyrja")),(0,r.kt)("td",null,"to ask (a question)"),(0,r.kt)("td",null,"As in ",(0,r.kt)("em",null,"spyrja spurninga"),". Some speakers use accusative instead.")),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("em",null,"v\xe6nta")),(0,r.kt)("td",null,"to expect"),(0,r.kt)("td",null,"Normally avoided by using ",(0,r.kt)("em",null,"b\xfaast vi\xf0")," +dat."))))),(0,r.kt)("p",null,"There are others, but these are by far the most common. "),(0,r.kt)("p",null,"A fossilised genitive can also appear in certain expressions. For example ",(0,r.kt)("em",{parentName:"p"},"\xfeurfa")," \u201cto need\u201d normally takes the accusative in modern Icelandic, except when used with a ",(0,r.kt)("a",{parentName:"p",href:"../pronouns/personal#%C3%BEa%C3%B0"},"dummy ",(0,r.kt)("em",{parentName:"a"},"\xfea\xf0")),":"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("em",{parentName:"p"},"Vi\xf0 \xfeurfum ",(0,r.kt)("strong",{parentName:"em"},"n\xfdtt h\xfas"),".",(0,r.kt)("br",null),"Mig langar ekki a\xf0 fara \xed vinnuna. \xc9g \xfearf ",(0,r.kt)("strong",{parentName:"em"},"\xfeess")," ekki."))))}p.isMDXComponent=!0}}]);