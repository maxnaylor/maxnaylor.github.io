(self.webpackChunkgramref=self.webpackChunkgramref||[]).push([[5774],{3905:(t,e,n)=>{"use strict";n.d(e,{Zo:()=>c,kt:()=>m});var a=n(7294);function l(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function r(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?r(Object(n),!0).forEach((function(e){l(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function s(t,e){if(null==t)return{};var n,a,l=function(t,e){if(null==t)return{};var n,a,l={},r=Object.keys(t);for(a=0;a<r.length;a++)n=r[a],e.indexOf(n)>=0||(l[n]=t[n]);return l}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(a=0;a<r.length;a++)n=r[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(l[n]=t[n])}return l}var i=a.createContext({}),u=function(t){var e=a.useContext(i),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},c=function(t){var e=u(t.components);return a.createElement(i.Provider,{value:e},t.children)},k="mdxType",p={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},d=a.forwardRef((function(t,e){var n=t.components,l=t.mdxType,r=t.originalType,i=t.parentName,c=s(t,["components","mdxType","originalType","parentName"]),k=u(n),d=l,m=k["".concat(i,".").concat(d)]||k[d]||p[d]||r;return n?a.createElement(m,o(o({ref:e},c),{},{components:n})):a.createElement(m,o({ref:e},c))}));function m(t,e){var n=arguments,l=e&&e.mdxType;if("string"==typeof t||l){var r=n.length,o=new Array(r);o[0]=d;var s={};for(var i in e)hasOwnProperty.call(e,i)&&(s[i]=e[i]);s.originalType=t,s[k]="string"==typeof t?t:l,o[1]=s;for(var u=2;u<r;u++)o[u]=n[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},6195:(t,e,n)=>{"use strict";n.d(e,{$:()=>l});var a=n(7294);function l(){return a.createElement("div",{className:"promo-banner"},a.createElement("a",{className:"image",href:"https://learn-icelandic.com?utm_source=gramref&utm_medium=banner&utm_campaign=inline_cta"},a.createElement("img",{src:"/img/puffins-on-cliff.jpg"})),a.createElement("div",{className:"promo-banner-content"},a.createElement("div",{className:"prose"},a.createElement("h3",null,"Learn Icelandic ",a.createElement("span",{className:"badge"},"Now available")),a.createElement("p",null,"A new way to study Icelandic online.")),a.createElement("a",{className:"button button--secondary",href:"https://learn-icelandic.com?utm_source=gramref&utm_medium=banner&utm_campaign=inline_cta",target:"_new"},"Check it out",a.createElement("svg",{width:"10",height:"15",viewBox:"0 0 10 15",fill:"none",xmlns:"http://www.w3.org/2000/svg"},a.createElement("path",{d:"M2 14.5C1.71875 14.5 1.46875 14.4062 1.28125 14.2188C0.875 13.8438 0.875 13.1875 1.28125 12.8125L6.5625 7.5L1.28125 2.21875C0.875 1.84375 0.875 1.1875 1.28125 0.8125C1.65625 0.40625 2.3125 0.40625 2.6875 0.8125L8.6875 6.8125C9.09375 7.1875 9.09375 7.84375 8.6875 8.21875L2.6875 14.2188C2.5 14.4062 2.25 14.5 2 14.5Z",fill:"white"})))))}},1333:(t,e,n)=>{"use strict";n.d(e,{R:()=>o});var a=n(7294),l=n(4052),r=n.n(l);class o extends a.Component{constructor(t){super(t),this.state={termWidth:""}}componentDidMount(){const t=document.getElementById("term-"+this.props.term).clientWidth,e=document.getElementById("tooltip-"+this.props.term).clientWidth;this.setState({termWidth:t,tooltipWidth:e})}offset(){return 0-this.state.tooltipWidth/2+this.state.termWidth/2+"px"}displayTerm(){let t;return t=this.props.display?this.props.display:this.props.term,t}getIcelandicTerm(){let t;return t=r().terms.filter((t=>t.term.includes(this.props.term.toLowerCase()))),t[0].icelandic}render(){return a.createElement(a.Fragment,null,a.createElement("span",{className:"term",id:"term-"+this.props.term},this.displayTerm(),a.createElement("span",{id:"tooltip-"+this.props.term,className:"tooltip",style:{left:this.offset()}},"\ud83c\uddee\ud83c\uddf8 ",this.getIcelandicTerm())))}}},4052:t=>{t.exports={terms:[,{term:"verb",icelandic:"s\xf6gn"},{term:"object",icelandic:"andlag"},{term:"phrase",icelandic:"li\xf0ur"},{term:"pronoun",icelandic:"fornafn"},{term:"mood",icelandic:"h\xe1ttur"},{term:"accusative",icelandic:"\xfeolfall"},{term:"active voice",icelandic:"germynd"},{term:"adjective",icelandic:"l\xfdsingaror\xf0"},{term:"adjective phrase",icelandic:"l\xfdsingaror\xf0sli\xf0ur"},{term:"adverb",icelandic:"atviksor\xf0"},{term:"verb phrase",icelandic:"sagnli\xf0ur"},{term:"adverb phrase",icelandic:"atviksli\xf0ur"},{term:"aspiration",icelandic:"fr\xe1bl\xe1stur"},{term:"case",icelandic:"fall"},{term:"comparative",icelandic:"mi\xf0stig"},{term:"complement",icelandic:"fyllili\xf0ur"},{term:"consonant",icelandic:"samhlj\xf3\xf0"},{term:"dative",icelandic:"\xfe\xe1gufall"},{term:"definite article",icelandic:"\xe1kve\xf0inn greinir"},{term:"demonstrative pronoun",icelandic:"\xe1bendingarfornafn"},{term:"determiner",icelandic:"\xe1kv\xe6\xf0isor\xf0"},{term:"devoicing",icelandic:"afr\xf6ddun"},{term:"diphthong",icelandic:"tv\xedhlj\xf3\xf0"},{term:"direct object",icelandic:"beint andlag"},{term:"ending",icelandic:"ending"},{term:"feminine",icelandic:"kvenkyn"},{term:"first person",icelandic:"fyrsta pers\xf3na"},{term:"gender",icelandic:"kyn"},{term:"genitive",icelandic:"eignarfall"},{term:"head",icelandic:"h\xf6fu\xf0"},{term:"imperative mood",icelandic:"bo\xf0h\xe1ttur"},{term:"indefinite pronoun",icelandic:"\xf3\xe1kve\xf0i\xf0 fornafn"},{term:"indicative",icelandic:"frams\xf6guh\xe1ttur"},{term:"indirect object",icelandic:"\xf3beint andlag"},{term:"imperative",icelandic:"bo\xf0h\xe1ttur"},{term:"infinitive",icelandic:"nafnh\xe1ttur"},{term:"masculine",icelandic:"karlkyn"},{term:"middle voice",icelandic:"mi\xf0mynd"},{term:"modal verb",icelandic:"hj\xe1lpars\xf6gn"},{term:"monophthong",icelandic:"einhlj\xf3\xf0"},{term:"neuter",icelandic:"hvorugkyn"},{term:"nominative",icelandic:"nefnifall"},{term:"noun phrase",icelandic:"nafnli\xf0ur"},{term:"passive voice",icelandic:"\xfeolmynd"},{term:"past participle",icelandic:"l\xfdsingarh\xe1ttur \xfe\xe1t\xed\xf0ar"},{term:"past tense",icelandic:"\xfe\xe1t\xed\xf0"},{term:"personal pronoun",icelandic:"pers\xf3nufornafn"},{term:"plural",icelandic:"fleirtala"},{term:"positive",icelandic:"frumstig"},{term:"preaspiration",icelandic:"a\xf0bl\xe1stur"},{term:"preposition",icelandic:"forsetning"},{term:"prepositional phrase",icelandic:"forsetningarli\xf0ur"},{term:"principal parts",icelandic:"kennimyndir"},{term:"reflexive pronoun",icelandic:"afturbeygt fornafn"},{term:"possessive pronoun",icelandic:"eignarfornafn"},{term:"present participle",icelandic:"l\xfdsingarh\xe1ttur n\xfat\xed\xf0ar"},{term:"present tense",icelandic:"n\xfat\xed\xf0"},{term:"second person",icelandic:"\xf6nnur pers\xf3na"},{term:"sentence",icelandic:"setning"},{term:"singular",icelandic:"eintala"},{term:"stem",icelandic:"stofn"},{term:"strong",icelandic:"sterk beyging"},{term:"strong verb",icelandic:"sterk s\xf6gn"},{term:"stylistic fronting",icelandic:"st\xedlf\xe6rsla"},{term:"subject",icelandic:"frumlag"},{term:"subjunctive",icelandic:"vi\xf0tengingarh\xe1ttur"},{term:"superlative",icelandic:"efsta stig"},{term:"supine",icelandic:"sagnb\xf3t"},{term:"syncope",icelandic:"brottfall"},{term:"third person",icelandic:"\xferi\xf0ja pers\xf3na"},{term:"transitive",icelandic:"\xe1hrifss\xf6gn"},{term:"transitive verb",icelandic:"\xe1hrifss\xf6gn"},{term:"intransitive verb",icelandic:"\xe1hrifslaus s\xf6gn"},{term:"weak",icelandic:"veik beyging"},{term:"weak verb",icelandic:"veik s\xf6gn"},{term:"word order",icelandic:"or\xf0ar\xf6\xf0"}]}},583:(t,e,n)=>{"use strict";n.r(e),n.d(e,{assets:()=>k,contentTitle:()=>u,default:()=>h,frontMatter:()=>i,metadata:()=>c,toc:()=>p});var a=n(7462),l=(n(7294),n(3905)),r=n(1333),o=n(4996),s=n(6195);const i={id:"consonants",title:"Consonants",description:"Learn Icelandic pronunication. Explanation of how to pronounce Icelandic consonants, including preaspiration."},u=void 0,c={unversionedId:"basics/consonants",id:"basics/consonants",title:"Consonants",description:"Learn Icelandic pronunication. Explanation of how to pronounce Icelandic consonants, including preaspiration.",source:"@site/docs/basics/consonants.md",sourceDirName:"basics",slug:"/basics/consonants",permalink:"/docs/basics/consonants",draft:!1,tags:[],version:"current",frontMatter:{id:"consonants",title:"Consonants",description:"Learn Icelandic pronunication. Explanation of how to pronounce Icelandic consonants, including preaspiration."},sidebar:"someSidebar",previous:{title:"Vowels",permalink:"/docs/basics/vowels"},next:{title:"Tricky consonants",permalink:"/docs/basics/tricky-consonants"}},k={},p=[{value:"Aspiration",id:"aspiration",level:2},{value:"Preaspiration",id:"preaspiration",level:2},{value:"Devoicing",id:"devoicing",level:2},{value:"<em>t</em>-insertion",id:"t-insertion",level:2}],d={toc:p},m="wrapper";function h(t){let{components:e,...n}=t;return(0,l.kt)(m,(0,a.Z)({},d,n,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"The Icelandic language has a lot of ",(0,l.kt)("strong",{parentName:"p"},(0,l.kt)(r.R,{term:"consonant",display:"consonants",mdxType:"Term"})),". In fact, there are more consonant sounds than there are consonant letters in the alphabet. This doesn\u2019t mean that the spelling is irregular, but we just need to learn a few rules about consonant pronunciation."),(0,l.kt)("p",null,"It doesn\u2019t necessarily make sense to go through them in alphabetical order. On this page, we\u2019ve grouped the most important rules that you need to to know about Icelandic consonant pronunciation."),(0,l.kt)("p",null,"For an explanation of individual consonants that have more than one pronunciation, like ",(0,l.kt)("em",{parentName:"p"},"f")," and ",(0,l.kt)("em",{parentName:"p"},"g"),", see ",(0,l.kt)("a",{parentName:"p",href:"tricky-consonants"},"Tricky consonants"),"."),(0,l.kt)(s.$,{mdxType:"PromoBanner"}),(0,l.kt)("h2",{id:"aspiration"},"Aspiration"),(0,l.kt)("p",null,"A fancy way of saying \u201cbreathing\u201d is \ud83c\udf2c ",(0,l.kt)("strong",{parentName:"p"},(0,l.kt)(r.R,{term:"aspiration",mdxType:"Term"})),". When we talk about a consonant as being aspirated, that means we release a little puff of air right after the consonant sound."),(0,l.kt)("p",null,"You can think of the following consonants as pairs, with aspirated and unaspirated versions:"),(0,l.kt)("figure",null,(0,l.kt)("table",null,(0,l.kt)("tbody",null,(0,l.kt)("tr",null,(0,l.kt)("th",null,(0,l.kt)("table",{className:"clear-padded"},(0,l.kt)("tbody",null,(0,l.kt)("tr",null,(0,l.kt)("td",null,(0,l.kt)("span",{className:"letter"},"p")),(0,l.kt)("td",null,(0,l.kt)("audio",{controls:!0},(0,l.kt)("source",{src:(0,o.Z)("/audio/ph.m4a"),type:"audio/mp4"}),"Your browser does not support audio."))),(0,l.kt)("tr",null,(0,l.kt)("td",null,(0,l.kt)("span",{className:"letter"},"t")),(0,l.kt)("td",null,(0,l.kt)("audio",{controls:!0},(0,l.kt)("source",{src:(0,o.Z)("/audio/th.m4a"),type:"audio/mp4"}),"Your browser does not support audio."))),(0,l.kt)("tr",null,(0,l.kt)("td",null,(0,l.kt)("span",{className:"letter"},"k")),(0,l.kt)("td",null,(0,l.kt)("audio",{controls:!0},(0,l.kt)("source",{src:(0,o.Z)("/audio/kh.m4a"),type:"audio/mp4"}),"Your browser does not support audio.")))))),(0,l.kt)("td",null,"\u2192 aspirated [p\u02b0, t\u02b0, k\u02b0]",(0,l.kt)("br",null),(0,l.kt)("br",null),(0,l.kt)("em",null,(0,l.kt)("table",{className:"clear-padded"},(0,l.kt)("tbody",null,(0,l.kt)("tr",null,(0,l.kt)("td",null,(0,l.kt)("span",{className:"highlighter"},(0,l.kt)("strong",null,"p")),"abbi"),(0,l.kt)("td",null,(0,l.kt)("audio",{controls:!0},(0,l.kt)("source",{src:(0,o.Z)("/audio/pabbi.m4a"),type:"audio/mp4"}),"Your browser does not support audio."))),(0,l.kt)("tr",null,(0,l.kt)("td",null,(0,l.kt)("span",{className:"highlighter"},(0,l.kt)("strong",null,"t")),"aka"),(0,l.kt)("td",null,(0,l.kt)("audio",{controls:!0},(0,l.kt)("source",{src:(0,o.Z)("/audio/taka.m4a"),type:"audio/mp4"}),"Your browser does not support audio."))),(0,l.kt)("tr",null,(0,l.kt)("td",null,(0,l.kt)("span",{className:"highlighter"},(0,l.kt)("strong",null,"k")),"assi"),(0,l.kt)("td",null,(0,l.kt)("audio",{controls:!0},(0,l.kt)("source",{src:(0,o.Z)("/audio/kassi.m4a"),type:"audio/mp4"}),"Your browser does not support audio.")))))))),(0,l.kt)("tr",null,(0,l.kt)("th",null,(0,l.kt)("table",{className:"clear-padded"},(0,l.kt)("tbody",null,(0,l.kt)("tr",null,(0,l.kt)("td",null,(0,l.kt)("span",{className:"letter orange"},"b")),(0,l.kt)("td",null,(0,l.kt)("audio",{controls:!0},(0,l.kt)("source",{src:(0,o.Z)("/audio/p.m4a"),type:"audio/mp4"}),"Your browser does not support audio."))),(0,l.kt)("tr",null,(0,l.kt)("td",null,(0,l.kt)("span",{className:"letter orange"},"d")),(0,l.kt)("td",null,(0,l.kt)("audio",{controls:!0},(0,l.kt)("source",{src:(0,o.Z)("/audio/t.m4a"),type:"audio/mp4"}),"Your browser does not support audio."))),(0,l.kt)("tr",null,(0,l.kt)("td",null,(0,l.kt)("span",{className:"letter orange"},"g")),(0,l.kt)("td",null,(0,l.kt)("audio",{controls:!0},(0,l.kt)("source",{src:(0,o.Z)("/audio/k.m4a"),type:"audio/mp4"}),"Your browser does not support audio.")))))),(0,l.kt)("td",null,"\u2192 unaspirated [p, t, k]",(0,l.kt)("br",null),(0,l.kt)("br",null),(0,l.kt)("em",null,(0,l.kt)("table",{className:"clear-padded"},(0,l.kt)("tbody",null,(0,l.kt)("tr",null,(0,l.kt)("td",null,(0,l.kt)("span",{className:"ushift"},(0,l.kt)("strong",null,"b")),"\xe1tur"),(0,l.kt)("td",null,(0,l.kt)("audio",{controls:!0},(0,l.kt)("source",{src:(0,o.Z)("/audio/batur.m4a"),type:"audio/mp4"}),"Your browser does not support audio."))),(0,l.kt)("tr",null,(0,l.kt)("td",null,(0,l.kt)("span",{className:"ushift"},(0,l.kt)("strong",null,"d")),"alur"),(0,l.kt)("td",null,(0,l.kt)("audio",{controls:!0},(0,l.kt)("source",{src:(0,o.Z)("/audio/dalur.m4a"),type:"audio/mp4"}),"Your browser does not support audio."))),(0,l.kt)("tr",null,(0,l.kt)("td",null,(0,l.kt)("span",{className:"ushift"},(0,l.kt)("strong",null,"g")),"aman"),(0,l.kt)("td",null,(0,l.kt)("audio",{controls:!0},(0,l.kt)("source",{src:(0,o.Z)("/audio/gaman.m4a"),type:"audio/mp4"}),"Your browser does not support audio."))))))))))),(0,l.kt)("p",null,"The rule is essentially this:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"At the start of a word, ",(0,l.kt)("em",{parentName:"li"},"p"),", ",(0,l.kt)("em",{parentName:"li"},"t")," and ",(0,l.kt)("em",{parentName:"li"},"k")," are aspirated, whereas ",(0,l.kt)("em",{parentName:"li"},"b"),", ",(0,l.kt)("em",{parentName:"li"},"d")," and ",(0,l.kt)("em",{parentName:"li"},"g")," are not.")),(0,l.kt)("p",null,"Another rule that we need to add here is:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"<","sp, st, sk",">"," are not aspirated: ",(0,l.kt)("em",null,(0,l.kt)("table",{className:"clear-padded"},(0,l.kt)("tbody",null,(0,l.kt)("tr",null,(0,l.kt)("td",null,"s",(0,l.kt)("span",{className:"ushift"},(0,l.kt)("strong",null,"p")),"a\xf0i"),(0,l.kt)("td",null,(0,l.kt)("audio",{controls:!0},(0,l.kt)("source",{src:(0,o.Z)("/audio/spadi.m4a"),type:"audio/mp4"}),"Your browser does not support audio."))),(0,l.kt)("tr",null,(0,l.kt)("td",null,"s",(0,l.kt)("span",{className:"ushift"},(0,l.kt)("strong",null,"t")),"ama"),(0,l.kt)("td",null,(0,l.kt)("audio",{controls:!0},(0,l.kt)("source",{src:(0,o.Z)("/audio/stama.m4a"),type:"audio/mp4"}),"Your browser does not support audio."))),(0,l.kt)("tr",null,(0,l.kt)("td",null,"s",(0,l.kt)("span",{className:"ushift"},(0,l.kt)("strong",null,"k")),"ata"),(0,l.kt)("td",null,(0,l.kt)("audio",{controls:!0},(0,l.kt)("source",{src:(0,o.Z)("/audio/skata.m4a"),type:"audio/mp4"}),"Your browser does not support audio.")))))))),(0,l.kt)("admonition",{type:"note"},(0,l.kt)("p",{parentName:"admonition"},"Icelandic doesn\u2019t have true /b/, /d/ and /g/ sounds like English (these are the ",(0,l.kt)("strong",{parentName:"p"},"voiced")," versions of /p/, /t/ and /k/). In the spelling, we use ","<","b",">",", ","<","d",">"," and ","<","g",">"," to indicate that the sounds are not aspirated, but other than that they are pronounced identically to ","<","p",">",", ","<","t",">"," and ","<","k",">",".")),(0,l.kt)("h2",{id:"preaspiration"},"Preaspiration"),(0,l.kt)("p",null,"As well as aspiration, which involves releasing a puff of air ",(0,l.kt)("em",{parentName:"p"},"after")," a consonant, Icelandic has \ud83c\udf2c ",(0,l.kt)("strong",{parentName:"p"},(0,l.kt)(r.R,{term:"preaspiration",mdxType:"Term"})),". As you might have guessed, this is where a puff of air is released ",(0,l.kt)("em",{parentName:"p"},"before")," a consonant."),(0,l.kt)("p",null,"This is one of the most distinctive features of Icelandic pronunciation, and one of the main reasons that many people describe the Icelandic language as sounding \u201cbreathy\u201d. "),(0,l.kt)("p",null,"It affects the same three consonants as before. In the spelling, the aspiration is indicated by doubling the letter:"),(0,l.kt)("figure",null,(0,l.kt)("table",null,(0,l.kt)("tbody",null,(0,l.kt)("tr",null,(0,l.kt)("th",{width:"150px"},(0,l.kt)("span",{className:"letter"},"pp")),(0,l.kt)("td",null,(0,l.kt)("em",null,"kre",(0,l.kt)("span",{className:"highlighter"},(0,l.kt)("strong",null,"pp")),"a, sle",(0,l.kt)("span",{className:"highlighter"},(0,l.kt)("strong",null,"pp")),"a, u",(0,l.kt)("span",{className:"highlighter"},(0,l.kt)("strong",null,"pp"))),(0,l.kt)("br",null),(0,l.kt)("br",null),(0,l.kt)("audio",{controls:!0},(0,l.kt)("source",{src:(0,o.Z)("/audio/kreppa-sleppa-upp.m4a"),type:"audio/mp4"}),"Your browser does not support audio."))),(0,l.kt)("tr",null,(0,l.kt)("th",{width:"150px"},(0,l.kt)("span",{className:"letter"},"tt")),(0,l.kt)("td",null,(0,l.kt)("em",null,"de",(0,l.kt)("span",{className:"highlighter"},(0,l.kt)("strong",null,"tt")),"a, po",(0,l.kt)("span",{className:"highlighter"},(0,l.kt)("strong",null,"tt")),"ur, sl\xe9",(0,l.kt)("span",{className:"highlighter"},(0,l.kt)("strong",null,"tt")),"ur"),(0,l.kt)("br",null),(0,l.kt)("br",null),(0,l.kt)("audio",{controls:!0},(0,l.kt)("source",{src:(0,o.Z)("/audio/detta-pottur-slettur.m4a"),type:"audio/mp4"}),"Your browser does not support audio."))),(0,l.kt)("tr",null,(0,l.kt)("th",{width:"150px"},(0,l.kt)("span",{className:"letter"},"kk")),(0,l.kt)("td",null,(0,l.kt)("em",null,"be",(0,l.kt)("span",{className:"highlighter"},(0,l.kt)("strong",null,"kk")),"ur, e",(0,l.kt)("span",{className:"highlighter"},(0,l.kt)("strong",null,"kk")),"i, \xfee",(0,l.kt)("span",{className:"highlighter"},(0,l.kt)("strong",null,"kk")),"ja"),(0,l.kt)("br",null),(0,l.kt)("br",null),(0,l.kt)("audio",{controls:!0},(0,l.kt)("source",{src:(0,o.Z)("/audio/bekkur-ekki-thekkja.m4a"),type:"audio/mp4"}),"Your browser does not support audio.")))))),(0,l.kt)("p",null,"Preaspiration also happens when ",(0,l.kt)("em",{parentName:"p"},"p(p)"),", ",(0,l.kt)("em",{parentName:"p"},"t(t)")," or ",(0,l.kt)("em",{parentName:"p"},"k(k)")," come before ",(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("em",{parentName:"strong"},"l"))," or ",(0,l.kt)("em",{parentName:"p"},(0,l.kt)("strong",{parentName:"em"},"n")),":"),(0,l.kt)("div",{className:"row"},(0,l.kt)("div",{className:"col"},(0,l.kt)("figure",null,(0,l.kt)("table",{class:"full-width"},(0,l.kt)("tbody",null,(0,l.kt)("tr",null,(0,l.kt)("th",{width:"150px"},(0,l.kt)("span",{className:"letter"},"pl")),(0,l.kt)("td",null,(0,l.kt)("em",null,"de",(0,l.kt)("span",{className:"highlighter"},(0,l.kt)("strong",null,"pl")),"a, hnu",(0,l.kt)("span",{className:"highlighter"},(0,l.kt)("strong",null,"pl"))),(0,l.kt)("br",null),(0,l.kt)("br",null),(0,l.kt)("audio",{controls:!0},(0,l.kt)("source",{src:(0,o.Z)("/audio/depla-hnupl.m4a"),type:"audio/mp4"}),"Your browser does not support audio."))),(0,l.kt)("tr",null,(0,l.kt)("th",{width:"150px"},(0,l.kt)("span",{className:"letter"},"tl")),(0,l.kt)("td",null,(0,l.kt)("em",null,"\xe6",(0,l.kt)("span",{className:"highlighter"},(0,l.kt)("strong",null,"tl")),"a, Ka",(0,l.kt)("span",{className:"highlighter"},(0,l.kt)("strong",null,"tl")),"a, be",(0,l.kt)("span",{className:"highlighter"},(0,l.kt)("strong",null,"tl"))),(0,l.kt)("br",null),(0,l.kt)("br",null),(0,l.kt)("audio",{controls:!0},(0,l.kt)("source",{src:(0,o.Z)("/audio/aetla-katla-betl.m4a"),type:"audio/mp4"}),"Your browser does not support audio."))),(0,l.kt)("tr",null,(0,l.kt)("th",{width:"150px"},(0,l.kt)("span",{className:"letter"},"kl")),(0,l.kt)("td",null,(0,l.kt)("em",null,"he",(0,l.kt)("span",{className:"highlighter"},(0,l.kt)("strong",null,"kl")),"a, j\xf6",(0,l.kt)("span",{className:"highlighter"},(0,l.kt)("strong",null,"kl")),"a"),(0,l.kt)("br",null),(0,l.kt)("br",null),(0,l.kt)("audio",{controls:!0},(0,l.kt)("source",{src:(0,o.Z)("/audio/hekla-jokla.m4a"),type:"audio/mp4"}),"Your browser does not support audio."))))))),(0,l.kt)("div",{className:"col"},(0,l.kt)("figure",null,(0,l.kt)("table",{className:"full-width"},(0,l.kt)("tbody",null,(0,l.kt)("tr",null,(0,l.kt)("th",{width:"150px"},(0,l.kt)("span",{className:"letter"},"pn")),(0,l.kt)("td",null,(0,l.kt)("em",null,"vo",(0,l.kt)("span",{className:"highlighter"},(0,l.kt)("strong",null,"pn")),", ke",(0,l.kt)("span",{className:"highlighter"},(0,l.kt)("strong",null,"ppn")),"i"),(0,l.kt)("br",null),(0,l.kt)("br",null),(0,l.kt)("audio",{controls:!0},(0,l.kt)("source",{src:(0,o.Z)("/audio/vopn-keppni.m4a"),type:"audio/mp4"}),"Your browser does not support audio."))),(0,l.kt)("tr",null,(0,l.kt)("th",{width:"150px"},(0,l.kt)("span",{className:"letter"},"tn")),(0,l.kt)("td",null,(0,l.kt)("em",null,"va",(0,l.kt)("span",{className:"highlighter"},(0,l.kt)("strong",null,"tn")),", ba",(0,l.kt)("span",{className:"highlighter"},(0,l.kt)("strong",null,"tn")),"a"),(0,l.kt)("br",null),(0,l.kt)("br",null),(0,l.kt)("audio",{controls:!0},(0,l.kt)("source",{src:(0,o.Z)("/audio/vatn-batna.m4a"),type:"audio/mp4"}),"Your browser does not support audio."))),(0,l.kt)("tr",null,(0,l.kt)("th",{width:"150px"},(0,l.kt)("span",{className:"letter"},"kn")),(0,l.kt)("td",null,(0,l.kt)("em",null,"t\xe1",(0,l.kt)("span",{className:"highlighter"},(0,l.kt)("strong",null,"kn")),", bli",(0,l.kt)("span",{className:"highlighter"},(0,l.kt)("strong",null,"kn")),"a"),(0,l.kt)("br",null),(0,l.kt)("br",null),(0,l.kt)("audio",{controls:!0},(0,l.kt)("source",{src:(0,o.Z)("/audio/takn-blikna.m4a"),type:"audio/mp4"}),"Your browser does not support audio.")))))))),(0,l.kt)("h2",{id:"devoicing"},"Devoicing"),(0,l.kt)("p",null,"Some consonants in Icelandic can undergo a process known as ",(0,l.kt)("strong",{parentName:"p"},(0,l.kt)(r.R,{term:"devoicing",mdxType:"Term"})),". "),(0,l.kt)("admonition",{title:"What are devoiced and voiced sounds?",type:"tip"},(0,l.kt)("p",{parentName:"admonition"},"When you pronounce a devoiced sound, this means that your vocal cords are not vibrating. With voiced sounds however, your vocal cords are vibrating. You can check whether a sound is voiced by placing two fingers on your voice box and feeling for a vibration when you pronounce the sound."),(0,l.kt)("p",{parentName:"admonition"},"By definition, all ",(0,l.kt)("a",{parentName:"p",href:"vowels"},"vowels")," are voiced.")),(0,l.kt)("p",null,"The consonants ",(0,l.kt)("em",{parentName:"p"},"l"),", ",(0,l.kt)("em",{parentName:"p"},"m"),", ",(0,l.kt)("em",{parentName:"p"},"n")," and ",(0,l.kt)("em",{parentName:"p"},"r")," are all voiced, unless they appear in the following environment:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"After ","<","h",">",";"),(0,l.kt)("li",{parentName:"ul"},"Before ",(0,l.kt)("em",{parentName:"li"},"p"),", ",(0,l.kt)("em",{parentName:"li"},"t"),", ",(0,l.kt)("em",{parentName:"li"},"k"),".")),(0,l.kt)("p",null,"Let\u2019s listen to some examples to hear the difference:"),(0,l.kt)("figure",null,(0,l.kt)("table",null,(0,l.kt)("tbody",null,(0,l.kt)("tr",null,(0,l.kt)("th",{width:"150px"},"\xa0"),(0,l.kt)("th",{width:"35%"},"Voiced"),(0,l.kt)("th",{width:"35%"},"Devoiced")),(0,l.kt)("tr",null,(0,l.kt)("th",null,(0,l.kt)("span",{className:"letter"},"l")),(0,l.kt)("td",null,(0,l.kt)("em",null,(0,l.kt)("strong",null,"l"),"\xe1tur, ",(0,l.kt)("strong",null,"l"),"isti, t\xf3",(0,l.kt)("strong",null,"l"),"g"),(0,l.kt)("br",null),(0,l.kt)("br",null),(0,l.kt)("audio",{controls:!0},(0,l.kt)("source",{src:(0,o.Z)("/audio/latur-listi-tolg.m4a"),type:"audio/mp4"}),"Your browser does not support audio.")),(0,l.kt)("td",null,(0,l.kt)("em",null,(0,l.kt)("span",{className:"highlighter"},(0,l.kt)("strong",null,"hl")),"\xe1tur, ",(0,l.kt)("span",{className:"highlighter"},(0,l.kt)("strong",null,"hl")),"usta, f\xf3",(0,l.kt)("span",{className:"highlighter"},(0,l.kt)("strong",null,"l")),"k"),(0,l.kt)("br",null),(0,l.kt)("br",null),(0,l.kt)("audio",{controls:!0},(0,l.kt)("source",{src:(0,o.Z)("/audio/hlatur-hlusta-folk.m4a"),type:"audio/mp4"}),"Your browser does not support audio."))),(0,l.kt)("tr",null,(0,l.kt)("th",null,(0,l.kt)("span",{className:"letter"},"m")),(0,l.kt)("td",null,(0,l.kt)("em",null,"la",(0,l.kt)("strong",null,"m"),"bi, ske",(0,l.kt)("strong",null,"mm"),"dir"),(0,l.kt)("br",null),(0,l.kt)("br",null),(0,l.kt)("audio",{controls:!0},(0,l.kt)("source",{src:(0,o.Z)("/audio/lambi-skemmdir.m4a"),type:"audio/mp4"}),"Your browser does not support audio.")),(0,l.kt)("td",null,(0,l.kt)("em",null,"la",(0,l.kt)("span",{className:"highlighter"},(0,l.kt)("strong",null,"m")),"pi, ske",(0,l.kt)("span",{className:"highlighter"},(0,l.kt)("strong",null,"mm")),"ta"),(0,l.kt)("br",null),(0,l.kt)("br",null),(0,l.kt)("audio",{controls:!0},(0,l.kt)("source",{src:(0,o.Z)("/audio/lampi-skemmta.m4a"),type:"audio/mp4"}),"Your browser does not support audio."))),(0,l.kt)("tr",null,(0,l.kt)("th",null,(0,l.kt)("span",{className:"letter"},"n")),(0,l.kt)("td",null,(0,l.kt)("em",null,(0,l.kt)("strong",null,"n"),"\xe9, ",(0,l.kt)("strong",null,"n"),"efa, va",(0,l.kt)("strong",null,"n"),"da"),(0,l.kt)("br",null),(0,l.kt)("br",null),(0,l.kt)("audio",{controls:!0},(0,l.kt)("source",{src:(0,o.Z)("/audio/ne-nefa-vanda.m4a"),type:"audio/mp4"}),"Your browser does not support audio.")),(0,l.kt)("td",null,(0,l.kt)("em",null,(0,l.kt)("span",{className:"highlighter"},(0,l.kt)("strong",null,"hn")),"\xe9, ",(0,l.kt)("span",{className:"highlighter"},(0,l.kt)("strong",null,"hn")),"efa, va",(0,l.kt)("span",{className:"highlighter"},(0,l.kt)("strong",null,"n")),"ta"),(0,l.kt)("br",null),(0,l.kt)("br",null),(0,l.kt)("audio",{controls:!0},(0,l.kt)("source",{src:(0,o.Z)("/audio/hne-hnefa-vanta.m4a"),type:"audio/mp4"}),"Your browser does not support audio."))),(0,l.kt)("tr",null,(0,l.kt)("th",null,(0,l.kt)("span",{className:"letter"},"r")),(0,l.kt)("td",null,(0,l.kt)("em",null,(0,l.kt)("strong",null,"r"),"aun, ",(0,l.kt)("strong",null,"r"),"ifinn, bj\xf6",(0,l.kt)("strong",null,"r"),"g"),(0,l.kt)("br",null),(0,l.kt)("br",null),(0,l.kt)("audio",{controls:!0},(0,l.kt)("source",{src:(0,o.Z)("/audio/raun-rifinn-bjorg.m4a"),type:"audio/mp4"}),"Your browser does not support audio.")),(0,l.kt)("td",null,(0,l.kt)("em",null,(0,l.kt)("span",{className:"highlighter"},(0,l.kt)("strong",null,"hr")),"aun, ",(0,l.kt)("span",{className:"highlighter"},(0,l.kt)("strong",null,"hr")),"ifinn, bj\xf6",(0,l.kt)("span",{className:"highlighter"},(0,l.kt)("strong",null,"r")),"k"),(0,l.kt)("br",null),(0,l.kt)("br",null),(0,l.kt)("audio",{controls:!0},(0,l.kt)("source",{src:(0,o.Z)("/audio/hraun-hrifinn-bjork.m4a"),type:"audio/mp4"}),"Your browser does not support audio.")))))),(0,l.kt)("p",null,"Some notes on the above:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"In ",(0,l.kt)("strong",{parentName:"li"},(0,l.kt)("em",{parentName:"strong"},"hl"),", ",(0,l.kt)("em",{parentName:"strong"},"hn")," and ",(0,l.kt)("em",{parentName:"strong"},"hr")),", no /h/ sound is pronounced, ","<","h",">"," is there simply to indicate that the next sound is devoiced;"),(0,l.kt)("li",{parentName:"ul"},"For ",(0,l.kt)("strong",{parentName:"li"},"devoiced ",(0,l.kt)("em",{parentName:"strong"},"m")," and ",(0,l.kt)("em",{parentName:"strong"},"n")),", close your mouth completely. The air should be leaving through your nostrils. Check you\u2019re doing this right by placing a finger under your nostrils and feeling for the puff of air \ud83d\udc49\ud83d\udc43")),(0,l.kt)("h2",{id:"t-insertion"},(0,l.kt)("em",{parentName:"h2"},"t"),"-insertion"),(0,l.kt)("p",null,"The double consonants ",(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("em",{parentName:"strong"},"ll"))," and ",(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("em",{parentName:"strong"},"nn"))," have two different pronunciations depending on the context."),(0,l.kt)("figure",null,(0,l.kt)("table",null,(0,l.kt)("tbody",null,(0,l.kt)("tr",null,(0,l.kt)("th",{width:"150px",rowSpan:"2"},(0,l.kt)("span",{className:"letter"},"ll")),(0,l.kt)("td",null,"[",(0,l.kt)("span",{className:"highlighter"},"tl"),"] in native Icelandic words:",(0,l.kt)("br",null),"\xa0\xa0\xa0\xa0",(0,l.kt)("em",null,"st\xf3",(0,l.kt)("span",{className:"highlighter"},(0,l.kt)("strong",null,"ll")),", bo",(0,l.kt)("span",{className:"highlighter"},(0,l.kt)("strong",null,"ll")),"i, mi",(0,l.kt)("span",{className:"highlighter"},(0,l.kt)("strong",null,"ll")),"i, tr\xf6",(0,l.kt)("span",{className:"highlighter"},(0,l.kt)("strong",null,"ll")),", P\xe1",(0,l.kt)("span",{className:"highlighter"},(0,l.kt)("strong",null,"ll"))),(0,l.kt)("br",null),(0,l.kt)("br",null),(0,l.kt)("audio",{controls:!0},(0,l.kt)("source",{src:(0,o.Z)("/audio/stoll-bolli.m4a"),type:"audio/mp4"}),"Your browser does not support audio."))),(0,l.kt)("tr",null,(0,l.kt)("td",null,"[",(0,l.kt)("span",{className:"ushift"},"l\u02d0"),"] (long \u201cl\u201d sound) in loanwords and nicknames (",(0,l.kt)("em",null,"g\xe6lun\xf6fn"),"):",(0,l.kt)("br",null),"\xa0\xa0\xa0\xa0",(0,l.kt)("em",null,"bo",(0,l.kt)("span",{className:"ushift"},(0,l.kt)("strong",null,"ll")),"a, my",(0,l.kt)("span",{className:"ushift"},(0,l.kt)("strong",null,"ll")),"a, gri",(0,l.kt)("span",{className:"ushift"},(0,l.kt)("strong",null,"ll")),", Pa",(0,l.kt)("span",{className:"ushift"},(0,l.kt)("strong",null,"ll")),"i"),(0,l.kt)("br",null),(0,l.kt)("br",null),(0,l.kt)("audio",{controls:!0},(0,l.kt)("source",{src:(0,o.Z)("/audio/bolla-mylla.m4a"),type:"audio/mp4"}),"Your browser does not support audio."))),(0,l.kt)("tr",null,(0,l.kt)("th",{width:"150px",rowSpan:"2"},(0,l.kt)("span",{className:"letter"},"nn")),(0,l.kt)("td",null,"[",(0,l.kt)("span",{className:"highlighter"},"tn"),"] after accented vowels, ",(0,l.kt)("em",null,"\xe6"),", ",(0,l.kt)("em",null,"ei/ey")," and ",(0,l.kt)("em",null,"au"),":",(0,l.kt)("br",null),"\xa0\xa0\xa0\xa0",(0,l.kt)("em",null,"f\xed",(0,l.kt)("span",{className:"highlighter"},(0,l.kt)("strong",null,"nn")),", br\xfa",(0,l.kt)("span",{className:"highlighter"},(0,l.kt)("strong",null,"nn")),", ei",(0,l.kt)("span",{className:"highlighter"},(0,l.kt)("strong",null,"nn"))),(0,l.kt)("br",null),(0,l.kt)("br",null),(0,l.kt)("audio",{controls:!0},(0,l.kt)("source",{src:(0,o.Z)("/audio/finn-brunn.m4a"),type:"audio/mp4"}),"Your browser does not support audio."))),(0,l.kt)("tr",null,(0,l.kt)("td",null,"[",(0,l.kt)("span",{className:"ushift"},"n\u02d0"),"] (long \u201cn\u201d sound) after all other vowels:",(0,l.kt)("br",null),"\xa0\xa0\xa0\xa0",(0,l.kt)("em",null,"fi",(0,l.kt)("span",{className:"ushift"},(0,l.kt)("strong",null,"nn")),"a, bru",(0,l.kt)("span",{className:"ushift"},(0,l.kt)("strong",null,"nn")),"ur, e",(0,l.kt)("span",{className:"ushift"},(0,l.kt)("strong",null,"nn")),", t\xf6",(0,l.kt)("span",{className:"ushift"},(0,l.kt)("strong",null,"nn"))),(0,l.kt)("br",null),(0,l.kt)("br",null),(0,l.kt)("audio",{controls:!0},(0,l.kt)("source",{src:(0,o.Z)("/audio/finna-brunnur.m4a"),type:"audio/mp4"}),"Your browser does not support audio.")))))),(0,l.kt)("p",null,"What\u2019s happening here is that a /t/ sound is inserted before the /l/ or /n/. An additional thing to be aware of is ",(0,l.kt)("strong",{parentName:"p"},"if /l/ or /n/ follows /t/ at the end of a word, it gets devoiced"),". Play the examples above and listen for how the /l/ or /n/ is pronounced at the end of a word."),(0,l.kt)("p",null,"Another situation where we get ",(0,l.kt)("em",{parentName:"p"},"t"),"-insertion is in the consonant clusters ",(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("em",{parentName:"strong"},"rl"))," and ",(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("em",{parentName:"strong"},"rn")),":"),(0,l.kt)("figure",null,(0,l.kt)("table",null,(0,l.kt)("tbody",null,(0,l.kt)("tr",null,(0,l.kt)("th",{width:"150px"},(0,l.kt)("span",{className:"letter"},"rl")),(0,l.kt)("td",null,"[rtl]",(0,l.kt)("br",null),"\xa0\xa0\xa0\xa0",(0,l.kt)("em",null,"ka",(0,l.kt)("span",{className:"highlighter"},(0,l.kt)("strong",null,"rl")),", fe",(0,l.kt)("span",{className:"highlighter"},(0,l.kt)("strong",null,"rl")),"i, E",(0,l.kt)("span",{className:"highlighter"},(0,l.kt)("strong",null,"rl")),"a"),(0,l.kt)("br",null),(0,l.kt)("br",null),(0,l.kt)("audio",{controls:!0},(0,l.kt)("source",{src:(0,o.Z)("/audio/karl-ferli.m4a"),type:"audio/mp4"}),"Your browser does not support audio."))),(0,l.kt)("tr",null,(0,l.kt)("th",null,(0,l.kt)("span",{className:"letter"},"rn")),(0,l.kt)("td",null,"[rtn]",(0,l.kt)("br",null),"\xa0\xa0\xa0\xa0",(0,l.kt)("em",null,"ba",(0,l.kt)("span",{className:"highlighter"},(0,l.kt)("strong",null,"rn")),"a, tj\xf6",(0,l.kt)("span",{className:"highlighter"},(0,l.kt)("strong",null,"rn")),", \xd6",(0,l.kt)("span",{className:"highlighter"},(0,l.kt)("strong",null,"rn"))),(0,l.kt)("br",null),(0,l.kt)("br",null),(0,l.kt)("audio",{controls:!0},(0,l.kt)("source",{src:(0,o.Z)("/audio/barna-tjorn.m4a"),type:"audio/mp4"}),"Your browser does not support audio.")))))))}h.isMDXComponent=!0}}]);