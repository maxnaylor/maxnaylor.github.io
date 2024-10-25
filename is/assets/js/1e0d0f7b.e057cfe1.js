(self.webpackChunkgramref=self.webpackChunkgramref||[]).push([[7043],{3905:(t,e,n)=>{"use strict";n.d(e,{Zo:()=>u,kt:()=>k});var r=n(7294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},l=Object.keys(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var s=r.createContext({}),c=function(t){var e=r.useContext(s),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},u=function(t){var e=c(t.components);return r.createElement(s.Provider,{value:e},t.children)},d="mdxType",p={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},m=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,l=t.originalType,s=t.parentName,u=o(t,["components","mdxType","originalType","parentName"]),d=c(n),m=a,k=d["".concat(s,".").concat(m)]||d[m]||p[m]||l;return n?r.createElement(k,i(i({ref:e},u),{},{components:n})):r.createElement(k,i({ref:e},u))}));function k(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var l=n.length,i=new Array(l);i[0]=m;var o={};for(var s in e)hasOwnProperty.call(e,s)&&(o[s]=e[s]);o.originalType=t,o[d]="string"==typeof t?t:a,i[1]=o;for(var c=2;c<l;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},1333:(t,e,n)=>{"use strict";n.d(e,{R:()=>i});var r=n(7294),a=n(4052),l=n.n(a);class i extends r.Component{constructor(t){super(t),this.state={termWidth:""}}componentDidMount(){const t=document.getElementById("term-"+this.props.term).clientWidth,e=document.getElementById("tooltip-"+this.props.term).clientWidth;this.setState({termWidth:t,tooltipWidth:e})}offset(){return 0-this.state.tooltipWidth/2+this.state.termWidth/2+"px"}displayTerm(){let t;return t=this.props.display?this.props.display:this.props.term,t}getIcelandicTerm(){let t;return t=l().terms.filter((t=>t.term.includes(this.props.term.toLowerCase()))),t[0].icelandic}render(){return r.createElement(r.Fragment,null,r.createElement("span",{className:"term",id:"term-"+this.props.term},this.displayTerm(),r.createElement("span",{id:"tooltip-"+this.props.term,className:"tooltip",style:{left:this.offset()}},"\ud83c\uddee\ud83c\uddf8 ",this.getIcelandicTerm())))}}},4052:t=>{t.exports={terms:[,{term:"verb",icelandic:"s\xf6gn"},{term:"object",icelandic:"andlag"},{term:"phrase",icelandic:"li\xf0ur"},{term:"pronoun",icelandic:"fornafn"},{term:"mood",icelandic:"h\xe1ttur"},{term:"accusative",icelandic:"\xfeolfall"},{term:"active voice",icelandic:"germynd"},{term:"adjective",icelandic:"l\xfdsingaror\xf0"},{term:"adjective phrase",icelandic:"l\xfdsingaror\xf0sli\xf0ur"},{term:"adverb",icelandic:"atviksor\xf0"},{term:"verb phrase",icelandic:"sagnli\xf0ur"},{term:"adverb phrase",icelandic:"atviksli\xf0ur"},{term:"aspiration",icelandic:"fr\xe1bl\xe1stur"},{term:"case",icelandic:"fall"},{term:"comparative",icelandic:"mi\xf0stig"},{term:"complement",icelandic:"fyllili\xf0ur"},{term:"consonant",icelandic:"samhlj\xf3\xf0"},{term:"dative",icelandic:"\xfe\xe1gufall"},{term:"definite article",icelandic:"\xe1kve\xf0inn greinir"},{term:"demonstrative pronoun",icelandic:"\xe1bendingarfornafn"},{term:"determiner",icelandic:"\xe1kv\xe6\xf0isor\xf0"},{term:"devoicing",icelandic:"afr\xf6ddun"},{term:"diphthong",icelandic:"tv\xedhlj\xf3\xf0"},{term:"direct object",icelandic:"beint andlag"},{term:"ending",icelandic:"ending"},{term:"feminine",icelandic:"kvenkyn"},{term:"first person",icelandic:"fyrsta pers\xf3na"},{term:"gender",icelandic:"kyn"},{term:"genitive",icelandic:"eignarfall"},{term:"head",icelandic:"h\xf6fu\xf0"},{term:"imperative mood",icelandic:"bo\xf0h\xe1ttur"},{term:"indefinite pronoun",icelandic:"\xf3\xe1kve\xf0i\xf0 fornafn"},{term:"indicative",icelandic:"frams\xf6guh\xe1ttur"},{term:"indirect object",icelandic:"\xf3beint andlag"},{term:"imperative",icelandic:"bo\xf0h\xe1ttur"},{term:"infinitive",icelandic:"nafnh\xe1ttur"},{term:"masculine",icelandic:"karlkyn"},{term:"middle voice",icelandic:"mi\xf0mynd"},{term:"modal verb",icelandic:"hj\xe1lpars\xf6gn"},{term:"monophthong",icelandic:"einhlj\xf3\xf0"},{term:"neuter",icelandic:"hvorugkyn"},{term:"nominative",icelandic:"nefnifall"},{term:"noun phrase",icelandic:"nafnli\xf0ur"},{term:"passive voice",icelandic:"\xfeolmynd"},{term:"past participle",icelandic:"l\xfdsingarh\xe1ttur \xfe\xe1t\xed\xf0ar"},{term:"past tense",icelandic:"\xfe\xe1t\xed\xf0"},{term:"personal pronoun",icelandic:"pers\xf3nufornafn"},{term:"plural",icelandic:"fleirtala"},{term:"positive",icelandic:"frumstig"},{term:"preaspiration",icelandic:"a\xf0bl\xe1stur"},{term:"preposition",icelandic:"forsetning"},{term:"prepositional phrase",icelandic:"forsetningarli\xf0ur"},{term:"principal parts",icelandic:"kennimyndir"},{term:"reflexive pronoun",icelandic:"afturbeygt fornafn"},{term:"possessive pronoun",icelandic:"eignarfornafn"},{term:"present participle",icelandic:"l\xfdsingarh\xe1ttur n\xfat\xed\xf0ar"},{term:"present tense",icelandic:"n\xfat\xed\xf0"},{term:"second person",icelandic:"\xf6nnur pers\xf3na"},{term:"sentence",icelandic:"setning"},{term:"singular",icelandic:"eintala"},{term:"stem",icelandic:"stofn"},{term:"strong",icelandic:"sterk beyging"},{term:"strong verb",icelandic:"sterk s\xf6gn"},{term:"stylistic fronting",icelandic:"st\xedlf\xe6rsla"},{term:"subject",icelandic:"frumlag"},{term:"subjunctive",icelandic:"vi\xf0tengingarh\xe1ttur"},{term:"superlative",icelandic:"efsta stig"},{term:"supine",icelandic:"sagnb\xf3t"},{term:"third person",icelandic:"\xferi\xf0ja pers\xf3na"},{term:"transitive",icelandic:"\xe1hrifss\xf6gn"},{term:"transitive verb",icelandic:"\xe1hrifss\xf6gn"},{term:"intransitive verb",icelandic:"\xe1hrifslaus s\xf6gn"},{term:"weak",icelandic:"veik beyging"},{term:"weak verb",icelandic:"veik s\xf6gn"},{term:"word order",icelandic:"or\xf0ar\xf6\xf0"}]}},1073:(t,e,n)=>{"use strict";n.r(e),n.d(e,{assets:()=>u,contentTitle:()=>s,default:()=>k,frontMatter:()=>o,metadata:()=>c,toc:()=>d});var r=n(7462),a=(n(7294),n(3905)),l=n(1333),i=n(4996);const o={id:"vowels",title:"Vowels",description:"Learn Icelandic pronunication. Explanation of the 8 basic vowels of the Icelandic language and 8 double vowels."},s=void 0,c={unversionedId:"basics/vowels",id:"basics/vowels",title:"Vowels",description:"Learn Icelandic pronunication. Explanation of the 8 basic vowels of the Icelandic language and 8 double vowels.",source:"@site/i18n/is/docusaurus-plugin-content-docs/current/basics/vowels.md",sourceDirName:"basics",slug:"/basics/vowels",permalink:"/is/docs/basics/vowels",draft:!1,tags:[],version:"current",frontMatter:{id:"vowels",title:"Vowels",description:"Learn Icelandic pronunication. Explanation of the 8 basic vowels of the Icelandic language and 8 double vowels."},sidebar:"someSidebar",previous:{title:"Alphabet",permalink:"/is/docs/basics/alphabet"},next:{title:"Consonants",permalink:"/is/docs/basics/consonants"}},u={},d=[{value:"Single vowels",id:"single-vowels",level:2},{value:"Double vowels",id:"double-vowels",level:2},{value:"Before <em>ng/nk</em>",id:"before-ngnk",level:2}],p={toc:d},m="wrapper";function k(t){let{components:e,...n}=t;return(0,a.kt)(m,(0,r.Z)({},p,n,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Here we\u2019ll learn the pronunciation of the ",(0,a.kt)("strong",{parentName:"p"},"8 basic vowels in Icelandic")," and the ",(0,a.kt)("strong",{parentName:"p"},"8 double vowels"),"."),(0,a.kt)("h2",{id:"single-vowels"},"Single vowels"),(0,a.kt)("p",null,"The technical name for a single vowel sound is a ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)(l.R,{term:"monophthong",mdxType:"Term"})),". Why? Because linguists like to use Greek words to make things seem more complicated. Let\u2019s start with how to pronounce these:"),(0,a.kt)("figure",null,(0,a.kt)("table",null,(0,a.kt)("tbody",null,(0,a.kt)("tr",null,(0,a.kt)("th",{width:"200px"},"Spelling"),(0,a.kt)("th",null,"Pronunciation"),(0,a.kt)("th",{width:"200px"},"IPA transcription")),(0,a.kt)("tr",null,(0,a.kt)("th",null,(0,a.kt)("span",{className:"letter"},"a")),(0,a.kt)("td",null,(0,a.kt)("audio",{controls:!0},(0,a.kt)("source",{src:(0,i.Z)("/audio/a.m4a"),type:"audio/mp4"}),"Your browser does not support audio.")),(0,a.kt)("td",{align:"center"},(0,a.kt)("span",{className:"letter"},"[a]"))),(0,a.kt)("tr",null,(0,a.kt)("th",null,(0,a.kt)("span",{className:"letter"},"e")),(0,a.kt)("td",null,(0,a.kt)("audio",{controls:!0},(0,a.kt)("source",{src:(0,i.Z)("/audio/e.m4a"),type:"audio/mp4"}),"Your browser does not support audio.")),(0,a.kt)("td",{align:"center"},(0,a.kt)("span",{className:"letter"},"[\u025b]"))),(0,a.kt)("tr",null,(0,a.kt)("th",null,(0,a.kt)("span",{className:"letter"},"i/y")),(0,a.kt)("td",null,(0,a.kt)("audio",{controls:!0},(0,a.kt)("source",{src:(0,i.Z)("/audio/i.m4a"),type:"audio/mp4"}),"Your browser does not support audio.")),(0,a.kt)("td",{align:"center"},(0,a.kt)("span",{className:"letter"},"[\u026a]"))),(0,a.kt)("tr",null,(0,a.kt)("th",null,(0,a.kt)("span",{className:"letter"},"\xed/\xfd")),(0,a.kt)("td",null,(0,a.kt)("audio",{controls:!0},(0,a.kt)("source",{src:(0,i.Z)("/audio/ii.m4a"),type:"audio/mp4"}),"Your browser does not support audio.")),(0,a.kt)("td",{align:"center"},(0,a.kt)("span",{className:"letter"},"[i]"))),(0,a.kt)("tr",null,(0,a.kt)("th",null,(0,a.kt)("span",{className:"letter"},"o")),(0,a.kt)("td",null,(0,a.kt)("audio",{controls:!0},(0,a.kt)("source",{src:(0,i.Z)("/audio/o.m4a"),type:"audio/mp4"}),"Your browser does not support audio.")),(0,a.kt)("td",{align:"center"},(0,a.kt)("span",{className:"letter"},"[\u0254]"))),(0,a.kt)("tr",null,(0,a.kt)("th",null,(0,a.kt)("span",{className:"letter"},"u")),(0,a.kt)("td",null,(0,a.kt)("audio",{controls:!0},(0,a.kt)("source",{src:(0,i.Z)("/audio/u.m4a"),type:"audio/mp4"}),"Your browser does not support audio.")),(0,a.kt)("td",{align:"center"},(0,a.kt)("span",{className:"letter"},"[\u028f]"))),(0,a.kt)("tr",null,(0,a.kt)("th",null,(0,a.kt)("span",{className:"letter"},"\xfa")),(0,a.kt)("td",null,(0,a.kt)("audio",{controls:!0},(0,a.kt)("source",{src:(0,i.Z)("/audio/uu.m4a"),type:"audio/mp4"}),"Your browser does not support audio.")),(0,a.kt)("td",{align:"center"},(0,a.kt)("span",{className:"letter"},"[u]"))),(0,a.kt)("tr",null,(0,a.kt)("th",null,(0,a.kt)("span",{className:"letter"},"\xf6")),(0,a.kt)("td",null,(0,a.kt)("audio",{controls:!0},(0,a.kt)("source",{src:(0,i.Z)("/audio/oe.m4a"),type:"audio/mp4"}),"Your browser does not support audio.")),(0,a.kt)("td",{align:"center"},(0,a.kt)("span",{className:"letter"},"[\u0153]")))))),(0,a.kt)("admonition",{title:"Isn\u2019t IPA a beer?",type:"note"},(0,a.kt)("p",{parentName:"admonition"},"The ",(0,a.kt)("strong",{parentName:"p"},"IPA transcription")," is something you can ignore if you\u2019re not familiar with it. IPA stands for \u201cInternational Phonetic Alphabet\u201d and it\u2019s a system linguists use to write sounds in different languages in a uniform way.")),(0,a.kt)("h2",{id:"double-vowels"},"Double vowels"),(0,a.kt)("p",null,"The name for a double vowel sound is a ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)(l.R,{term:"diphthong",mdxType:"Term"})),". These aren\u2019t always written as two vowel sounds in the spelling, they could be represented by an accented letter for example."),(0,a.kt)("p",null,"These are the main diphthongs in the Icelandic language:"),(0,a.kt)("figure",null,(0,a.kt)("table",null,(0,a.kt)("tbody",null,(0,a.kt)("tr",null,(0,a.kt)("th",{width:"200px"},"Spelling"),(0,a.kt)("th",null,"Pronunciation"),(0,a.kt)("th",{width:"200px"},"IPA transcription")),(0,a.kt)("tr",null,(0,a.kt)("th",null,(0,a.kt)("span",{className:"letter"},"\xe1")),(0,a.kt)("td",null,(0,a.kt)("audio",{controls:!0},(0,a.kt)("source",{src:(0,i.Z)("/audio/au.m4a"),type:"audio/mp4"}),"Your browser does not support audio.")),(0,a.kt)("td",{align:"center"},(0,a.kt)("span",{className:"letter"},"[au]"))),(0,a.kt)("tr",null,(0,a.kt)("th",null,(0,a.kt)("span",{className:"letter"},"\xe9")),(0,a.kt)("td",null,(0,a.kt)("audio",{controls:!0},(0,a.kt)("source",{src:(0,i.Z)("/audio/je.m4a"),type:"audio/mp4"}),"Your browser does not support audio.")),(0,a.kt)("td",{align:"center"},(0,a.kt)("span",{className:"letter"},"[j\u025b]"))),(0,a.kt)("tr",null,(0,a.kt)("th",null,(0,a.kt)("span",{className:"letter"},"\xf3")),(0,a.kt)("td",null,(0,a.kt)("audio",{controls:!0},(0,a.kt)("source",{src:(0,i.Z)("/audio/ou.m4a"),type:"audio/mp4"}),"Your browser does not support audio.")),(0,a.kt)("td",{align:"center"},(0,a.kt)("span",{className:"letter"},"[ou]"))),(0,a.kt)("tr",null,(0,a.kt)("th",null,(0,a.kt)("span",{className:"letter"},"\xe6")),(0,a.kt)("td",null,(0,a.kt)("audio",{controls:!0},(0,a.kt)("source",{src:(0,i.Z)("/audio/ae.m4a"),type:"audio/mp4"}),"Your browser does not support audio.")),(0,a.kt)("td",{align:"center"},(0,a.kt)("span",{className:"letter"},"[ai]"))),(0,a.kt)("tr",null,(0,a.kt)("th",null,(0,a.kt)("span",{className:"letter"},"ei/ey")),(0,a.kt)("td",null,(0,a.kt)("audio",{controls:!0},(0,a.kt)("source",{src:(0,i.Z)("/audio/ei.m4a"),type:"audio/mp4"}),"Your browser does not support audio.")),(0,a.kt)("td",{align:"center"},(0,a.kt)("span",{className:"letter"},"[ei]"))),(0,a.kt)("tr",null,(0,a.kt)("th",null,(0,a.kt)("span",{className:"letter"},"au")),(0,a.kt)("td",null,(0,a.kt)("audio",{controls:!0},(0,a.kt)("source",{src:(0,i.Z)("/audio/oei.m4a"),type:"audio/mp4"}),"Your browser does not support audio.")),(0,a.kt)("td",{align:"center"},(0,a.kt)("span",{className:"letter"},"[\u0153i]"))),(0,a.kt)("tr",null,(0,a.kt)("th",null,(0,a.kt)("span",{className:"letter"},"ogi")),(0,a.kt)("td",null,(0,a.kt)("audio",{controls:!0},(0,a.kt)("source",{src:(0,i.Z)("/audio/ogi.m4a"),type:"audio/mp4"}),"Your browser does not support audio.")),(0,a.kt)("td",{align:"center"},(0,a.kt)("span",{className:"letter"},"[oi]"))),(0,a.kt)("tr",null,(0,a.kt)("th",null,(0,a.kt)("span",{className:"letter"},"ugi")),(0,a.kt)("td",null,(0,a.kt)("audio",{controls:!0},(0,a.kt)("source",{src:(0,i.Z)("/audio/ugi.m4a"),type:"audio/mp4"}),"Your browser does not support audio.")),(0,a.kt)("td",{align:"center"},(0,a.kt)("span",{className:"letter"},"[\u028fi]")))))),(0,a.kt)("admonition",{title:"You\u2019ll never see the same vowel twice",type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"In Icelandic, seeing the same vowel twice in a row, e.g. ",(0,a.kt)("em",{parentName:"p"},"aa")," or ",(0,a.kt)("em",{parentName:"p"},"ii"),", isn\u2019t really a thing. In fact, it\u2019s pretty rare to see two vowels next to each other at all, other than those listed above, unless:"),(0,a.kt)("ul",{parentName:"admonition"},(0,a.kt)("li",{parentName:"ul"},"One of the vowels is accented, e.g. ",(0,a.kt)("em",{parentName:"li"},(0,a.kt)("strong",{parentName:"em"},"\xe1\xe6"),"tlun"),", ",(0,a.kt)("em",{parentName:"li"},"\xcdtal",(0,a.kt)("strong",{parentName:"em"},"\xeda")),";"),(0,a.kt)("li",{parentName:"ul"},"It\u2019s a funky loanword, e.g. ",(0,a.kt)("em",{parentName:"li"},"\xcdsr",(0,a.kt)("strong",{parentName:"em"},"ae"),"l"),", ",(0,a.kt)("em",{parentName:"li"},"fl",(0,a.kt)("strong",{parentName:"em"},"aue"),"l")," \u201cvelvet\u201d.")),(0,a.kt)("p",{parentName:"admonition"},"In compound words, it can sometimes happen that the same vowel is repeated, but in this case they are each pronounced separately. For example, ",(0,a.kt)("em",{parentName:"p"},"hjart",(0,a.kt)("strong",{parentName:"em"},"aa"),"\xf0ger\xf0")," \u201cheart operation\u201d is pronounced as if it\u2019s written ",(0,a.kt)("em",{parentName:"p"},"hjart",(0,a.kt)("strong",{parentName:"em"},"a"),"\u2011",(0,a.kt)("strong",{parentName:"em"},"a"),"\xf0ger\xf0")," (\ud83e\udd13 IPA for nerds: /\u02c8\xe7arta\u02cca\xf0c\u025cr\xf0/).")),(0,a.kt)("h2",{id:"before-ngnk"},"Before ",(0,a.kt)("em",{parentName:"h2"},"ng/nk")),(0,a.kt)("p",null,"Certain vowels change pronunciation before ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("em",{parentName:"strong"},"ng"))," or ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("em",{parentName:"strong"},"nk")),". This affects the following vowels:"),(0,a.kt)("figure",null,(0,a.kt)("table",{className:"full-width"},(0,a.kt)("tbody",null,(0,a.kt)("tr",null,(0,a.kt)("th",{width:"100px"},"Vowel"),(0,a.kt)("td",{rowSpan:"6"},"+\xa0",(0,a.kt)("em",null,(0,a.kt)("strong",null,"ng/nk")),"\xa0\u2192"),(0,a.kt)("th",{width:"100px"},"Becomes"),(0,a.kt)("th",{width:"100px"},"IPA"),(0,a.kt)("th",{colspan:"2"},"Examples")),(0,a.kt)("tr",null,(0,a.kt)("th",null,(0,a.kt)("em",null,"a")),(0,a.kt)("td",{align:"center"},(0,a.kt)("em",null,"\xe1")),(0,a.kt)("td",{align:"center"},"[au]"),(0,a.kt)("td",null,(0,a.kt)("em",null,"la",(0,a.kt)("strong",null,"ng"),"ur, bla",(0,a.kt)("strong",null,"nk"),"ur, ba",(0,a.kt)("strong",null,"nk"),"i")),(0,a.kt)("td",null,(0,a.kt)("audio",{controls:!0},(0,a.kt)("source",{src:(0,i.Z)("/audio/langur-blankur.m4a"),type:"audio/mp4"}),"Your browser does not support audio."))),(0,a.kt)("tr",null,(0,a.kt)("th",null,(0,a.kt)("em",null,"e")),(0,a.kt)("td",{align:"center"},(0,a.kt)("em",null,"ei")),(0,a.kt)("td",{align:"center"},"[ei]"),(0,a.kt)("td",null,(0,a.kt)("em",null,"e",(0,a.kt)("strong",null,"ng"),"inn, le",(0,a.kt)("strong",null,"ng"),"i")),(0,a.kt)("td",null,(0,a.kt)("audio",{controls:!0},(0,a.kt)("source",{src:(0,i.Z)("/audio/enginn-lengi.m4a"),type:"audio/mp4"}),"Your browser does not support audio."))),(0,a.kt)("tr",null,(0,a.kt)("th",null,(0,a.kt)("em",null,"i")),(0,a.kt)("td",{align:"center"},(0,a.kt)("em",null,"\xed")),(0,a.kt)("td",{align:"center"},"[i]"),(0,a.kt)("td",null,(0,a.kt)("em",null,"I",(0,a.kt)("strong",null,"ng"),"i, fli",(0,a.kt)("strong",null,"nk"),"ur")),(0,a.kt)("td",null,(0,a.kt)("audio",{controls:!0},(0,a.kt)("source",{src:(0,i.Z)("/audio/ingi-flinkur.m4a"),type:"audio/mp4"}),"Your browser does not support audio."))),(0,a.kt)("tr",null,(0,a.kt)("th",null,(0,a.kt)("em",null,"u")),(0,a.kt)("td",{align:"center"},(0,a.kt)("em",null,"\xfa")),(0,a.kt)("td",{align:"center"},"[u]"),(0,a.kt)("td",null,(0,a.kt)("em",null,"pu",(0,a.kt)("strong",null,"ng"),"ur, pu",(0,a.kt)("strong",null,"nk"),"tur")),(0,a.kt)("td",null,(0,a.kt)("audio",{controls:!0},(0,a.kt)("source",{src:(0,i.Z)("/audio/pungur-punktur.m4a"),type:"audio/mp4"}),"Your browser does not support audio."))),(0,a.kt)("tr",null,(0,a.kt)("th",null,(0,a.kt)("em",null,"\xf6")),(0,a.kt)("td",{align:"center"},(0,a.kt)("em",null,"au")),(0,a.kt)("td",{align:"center"},"[\u0153i]"),(0,a.kt)("td",null,(0,a.kt)("em",null,"s\xf6",(0,a.kt)("strong",null,"ng"),"ur, bl\xf6",(0,a.kt)("strong",null,"nk"))),(0,a.kt)("td",null,(0,a.kt)("audio",{controls:!0},(0,a.kt)("source",{src:(0,i.Z)("/audio/songur-blonk.m4a"),type:"audio/mp4"}),"Your browser does not support audio.")))))))}k.isMDXComponent=!0}}]);