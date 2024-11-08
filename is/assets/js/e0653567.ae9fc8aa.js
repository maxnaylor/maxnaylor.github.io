(self.webpackChunkgramref=self.webpackChunkgramref||[]).push([[4808],{3905:(e,t,n)=>{"use strict";n.d(t,{Zo:()=>u,kt:()=>k});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function m(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var o=r.createContext({}),s=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(o.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,u=m(e,["components","mdxType","originalType","parentName"]),d=s(n),c=a,k=d["".concat(o,".").concat(c)]||d[c]||p[c]||i;return n?r.createElement(k,l(l({ref:t},u),{},{components:n})):r.createElement(k,l({ref:t},u))}));function k(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=c;var m={};for(var o in t)hasOwnProperty.call(t,o)&&(m[o]=t[o]);m.originalType=e,m[d]="string"==typeof e?e:a,l[1]=m;for(var s=2;s<i;s++)l[s]=n[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},1333:(e,t,n)=>{"use strict";n.d(t,{R:()=>l});var r=n(7294),a=n(4052),i=n.n(a);class l extends r.Component{constructor(e){super(e),this.state={termWidth:""}}componentDidMount(){const e=document.getElementById("term-"+this.props.term).clientWidth,t=document.getElementById("tooltip-"+this.props.term).clientWidth;this.setState({termWidth:e,tooltipWidth:t})}offset(){return 0-this.state.tooltipWidth/2+this.state.termWidth/2+"px"}displayTerm(){let e;return e=this.props.display?this.props.display:this.props.term,e}getIcelandicTerm(){let e;return e=i().terms.filter((e=>e.term.includes(this.props.term.toLowerCase()))),e[0].icelandic}render(){return r.createElement(r.Fragment,null,r.createElement("span",{className:"term",id:"term-"+this.props.term},this.displayTerm(),r.createElement("span",{id:"tooltip-"+this.props.term,className:"tooltip",style:{left:this.offset()}},"\ud83c\uddee\ud83c\uddf8 ",this.getIcelandicTerm())))}}},4052:e=>{e.exports={terms:[,{term:"verb",icelandic:"s\xf6gn"},{term:"object",icelandic:"andlag"},{term:"phrase",icelandic:"li\xf0ur"},{term:"pronoun",icelandic:"fornafn"},{term:"mood",icelandic:"h\xe1ttur"},{term:"accusative",icelandic:"\xfeolfall"},{term:"active voice",icelandic:"germynd"},{term:"adjective",icelandic:"l\xfdsingaror\xf0"},{term:"adjective phrase",icelandic:"l\xfdsingaror\xf0sli\xf0ur"},{term:"adverb",icelandic:"atviksor\xf0"},{term:"verb phrase",icelandic:"sagnli\xf0ur"},{term:"adverb phrase",icelandic:"atviksli\xf0ur"},{term:"aspiration",icelandic:"fr\xe1bl\xe1stur"},{term:"case",icelandic:"fall"},{term:"comparative",icelandic:"mi\xf0stig"},{term:"complement",icelandic:"fyllili\xf0ur"},{term:"consonant",icelandic:"samhlj\xf3\xf0"},{term:"dative",icelandic:"\xfe\xe1gufall"},{term:"definite article",icelandic:"\xe1kve\xf0inn greinir"},{term:"demonstrative pronoun",icelandic:"\xe1bendingarfornafn"},{term:"determiner",icelandic:"\xe1kv\xe6\xf0isor\xf0"},{term:"devoicing",icelandic:"afr\xf6ddun"},{term:"diphthong",icelandic:"tv\xedhlj\xf3\xf0"},{term:"direct object",icelandic:"beint andlag"},{term:"ending",icelandic:"ending"},{term:"feminine",icelandic:"kvenkyn"},{term:"first person",icelandic:"fyrsta pers\xf3na"},{term:"gender",icelandic:"kyn"},{term:"genitive",icelandic:"eignarfall"},{term:"head",icelandic:"h\xf6fu\xf0"},{term:"imperative mood",icelandic:"bo\xf0h\xe1ttur"},{term:"indefinite pronoun",icelandic:"\xf3\xe1kve\xf0i\xf0 fornafn"},{term:"indicative",icelandic:"frams\xf6guh\xe1ttur"},{term:"indirect object",icelandic:"\xf3beint andlag"},{term:"imperative",icelandic:"bo\xf0h\xe1ttur"},{term:"infinitive",icelandic:"nafnh\xe1ttur"},{term:"masculine",icelandic:"karlkyn"},{term:"middle voice",icelandic:"mi\xf0mynd"},{term:"modal verb",icelandic:"hj\xe1lpars\xf6gn"},{term:"monophthong",icelandic:"einhlj\xf3\xf0"},{term:"neuter",icelandic:"hvorugkyn"},{term:"nominative",icelandic:"nefnifall"},{term:"noun phrase",icelandic:"nafnli\xf0ur"},{term:"passive voice",icelandic:"\xfeolmynd"},{term:"past participle",icelandic:"l\xfdsingarh\xe1ttur \xfe\xe1t\xed\xf0ar"},{term:"past tense",icelandic:"\xfe\xe1t\xed\xf0"},{term:"personal pronoun",icelandic:"pers\xf3nufornafn"},{term:"plural",icelandic:"fleirtala"},{term:"positive",icelandic:"frumstig"},{term:"preaspiration",icelandic:"a\xf0bl\xe1stur"},{term:"preposition",icelandic:"forsetning"},{term:"prepositional phrase",icelandic:"forsetningarli\xf0ur"},{term:"principal parts",icelandic:"kennimyndir"},{term:"reflexive pronoun",icelandic:"afturbeygt fornafn"},{term:"possessive pronoun",icelandic:"eignarfornafn"},{term:"present participle",icelandic:"l\xfdsingarh\xe1ttur n\xfat\xed\xf0ar"},{term:"present tense",icelandic:"n\xfat\xed\xf0"},{term:"second person",icelandic:"\xf6nnur pers\xf3na"},{term:"sentence",icelandic:"setning"},{term:"singular",icelandic:"eintala"},{term:"stem",icelandic:"stofn"},{term:"strong",icelandic:"sterk beyging"},{term:"strong verb",icelandic:"sterk s\xf6gn"},{term:"stylistic fronting",icelandic:"st\xedlf\xe6rsla"},{term:"subject",icelandic:"frumlag"},{term:"subjunctive",icelandic:"vi\xf0tengingarh\xe1ttur"},{term:"superlative",icelandic:"efsta stig"},{term:"supine",icelandic:"sagnb\xf3t"},{term:"third person",icelandic:"\xferi\xf0ja pers\xf3na"},{term:"transitive",icelandic:"\xe1hrifss\xf6gn"},{term:"transitive verb",icelandic:"\xe1hrifss\xf6gn"},{term:"intransitive verb",icelandic:"\xe1hrifslaus s\xf6gn"},{term:"weak",icelandic:"veik beyging"},{term:"weak verb",icelandic:"veik s\xf6gn"},{term:"word order",icelandic:"or\xf0ar\xf6\xf0"}]}},5602:(e,t,n)=>{"use strict";n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>m,default:()=>c,frontMatter:()=>l,metadata:()=>o,toc:()=>u});var r=n(7462),a=(n(7294),n(3905)),i=n(1333);const l={id:"gender",title:"Gender",description:"An introduction to the concept of noun gender in Icelandic, and how to identify masculine, feminine and neuter."},m=void 0,o={unversionedId:"nouns/gender",id:"nouns/gender",title:"Gender",description:"An introduction to the concept of noun gender in Icelandic, and how to identify masculine, feminine and neuter.",source:"@site/docs/nouns/gender.md",sourceDirName:"nouns",slug:"/nouns/gender",permalink:"/is/docs/nouns/gender",draft:!1,tags:[],version:"current",frontMatter:{id:"gender",title:"Gender",description:"An introduction to the concept of noun gender in Icelandic, and how to identify masculine, feminine and neuter."},sidebar:"someSidebar",previous:{title:"Introduction to nouns",permalink:"/is/docs/nouns/noun-intro"},next:{title:"Definite article",permalink:"/is/docs/nouns/definite-article"}},s={},u=[{value:"Masculine",id:"masculine",level:2},{value:"Strong",id:"strong",level:3},{value:"Weak",id:"weak",level:3},{value:"Feminine",id:"feminine",level:2},{value:"Strong",id:"strong-1",level:3},{value:"Weak",id:"weak-1",level:3},{value:"Neuter",id:"neuter",level:2},{value:"Strong",id:"strong-2",level:3},{value:"Weak",id:"weak-2",level:3},{value:"Some tricky endings",id:"some-tricky-endings",level:2},{value:"-<em>i</em>",id:"-i",level:3},{value:"<em>-ni</em>",id:"-ni",level:4},{value:"<em>-fr\xe6\xf0i</em>",id:"-fr\xe6\xf0i",level:4},{value:"Stem-based <em>-ur</em>",id:"stem-based--ur",level:3}],d={toc:u},p="wrapper";function c(e){let{components:t,...n}=e;return(0,a.kt)(p,(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"All Icelandic nouns fall into one of three ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)(i.R,{term:"gender",display:"genders",mdxType:"Term"})),":"),(0,a.kt)("figure",null,(0,a.kt)("table",null,(0,a.kt)("tbody",null,(0,a.kt)("tr",null,(0,a.kt)("th",null,"Masculine"),(0,a.kt)("th",null,(0,a.kt)("div",{class:"gender masc"},"kk.")),(0,a.kt)("td",null,(0,a.kt)("em",null,"karlkyn"))),(0,a.kt)("tr",null,(0,a.kt)("th",null,"Feminine"),(0,a.kt)("th",null,(0,a.kt)("div",{class:"gender fem"},"kvk.")),(0,a.kt)("td",null,(0,a.kt)("em",null,"kvenkyn"))),(0,a.kt)("tr",null,(0,a.kt)("th",null,"Neuter"),(0,a.kt)("th",null,(0,a.kt)("div",{class:"gender neu"},"hk.")),(0,a.kt)("td",null,(0,a.kt)("em",null,"hvorugkyn")))))),(0,a.kt)("p",null,"Each gender can be divided into two classes:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\ud83d\udcaa ",(0,a.kt)("strong",{parentName:"li"},"Strong")," \u2013 End in a consonant or accented vowel in their dictionary form: ",(0,a.kt)("em",{parentName:"li"},"hestu",(0,a.kt)("strong",{parentName:"em"},"r")),", ",(0,a.kt)("em",{parentName:"li"},"r\xf3",(0,a.kt)("strong",{parentName:"em"},"s")),", ",(0,a.kt)("em",{parentName:"li"},"br",(0,a.kt)("strong",{parentName:"em"},"\xfa")),", ",(0,a.kt)("em",{parentName:"li"},"lan",(0,a.kt)("strong",{parentName:"em"},"d"))),(0,a.kt)("li",{parentName:"ul"},"\ud83e\udd40 ",(0,a.kt)("strong",{parentName:"li"},"Weak")," \u2013 End in the vowel ",(0,a.kt)("em",{parentName:"li"},"-a")," or ",(0,a.kt)("em",{parentName:"li"},"-i")," in their dictionary form: ",(0,a.kt)("em",{parentName:"li"},"penn",(0,a.kt)("strong",{parentName:"em"},"i")),", ",(0,a.kt)("em",{parentName:"li"},"kak",(0,a.kt)("strong",{parentName:"em"},"a")),", ",(0,a.kt)("em",{parentName:"li"},"hjart",(0,a.kt)("strong",{parentName:"em"},"a")))),(0,a.kt)("p",null,"There are exceptions to this rule!"),(0,a.kt)("h2",{id:"masculine"},"Masculine"),(0,a.kt)("h3",{id:"strong"},"Strong"),(0,a.kt)("p",null,"Strong masculine nouns show the greatest variety in endings."),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"The symbol ",(0,a.kt)("strong",null,"\xd8")," is used to indicate no ending (also known as zero ending).")),(0,a.kt)("table",null,(0,a.kt)("tbody",null,(0,a.kt)("tr",null,(0,a.kt)("th",{width:"25%"},(0,a.kt)("div",{class:"ending masc",style:{width:"100px"}},"-ur")),(0,a.kt)("td",null,(0,a.kt)("em",null,"hestur, gestur, dalur, sta\xf0ur, ma\xf0ur, Dagur"))),(0,a.kt)("tr",null,(0,a.kt)("th",{width:"25%"},(0,a.kt)("div",{class:"ending masc",style:{width:"100px"}},"-ir")),(0,a.kt)("td",null,(0,a.kt)("em",null,"l\xe6knir, v\xedsir, Reynir"))),(0,a.kt)("tr",null,(0,a.kt)("th",{width:"25%"},(0,a.kt)("div",{class:"ending masc",style:{width:"100px"}},"-ll/nn")),(0,a.kt)("td",null,(0,a.kt)("em",null,"b\xedll, gaffall, spegill, Egill, steinn, sveinn, Kolbeinn"))),(0,a.kt)("tr",null,(0,a.kt)("th",{width:"25%"},(0,a.kt)("div",{class:"ending masc",style:{width:"100px",fontStyle:"normal"}},"-\xd8")),(0,a.kt)("td",null,(0,a.kt)("em",null,"lax, foss, fugl, hamar, traktor, bambus"))))),(0,a.kt)("h3",{id:"weak"},"Weak"),(0,a.kt)("table",null,(0,a.kt)("tbody",null,(0,a.kt)("tr",null,(0,a.kt)("th",{width:"25%"},(0,a.kt)("div",{class:"ending masc",style:{width:"100px"}},"-i")),(0,a.kt)("td",null,(0,a.kt)("em",null,"penni, lampi, krakki, Benni"))),(0,a.kt)("tr",null,(0,a.kt)("th",{width:"25%"},(0,a.kt)("div",{class:"ending masc"},"-a")),(0,a.kt)("td",null,(0,a.kt)("em",null,"herra, r\xe1\xf0herra"))))),(0,a.kt)("h2",{id:"feminine"},"Feminine"),(0,a.kt)("h3",{id:"strong-1"},"Strong"),(0,a.kt)("admonition",{title:"Question",type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"What do the words in the first row have in common, apart from the lack of ending?")),(0,a.kt)("table",null,(0,a.kt)("tbody",null,(0,a.kt)("tr",null,(0,a.kt)("th",{width:"25%"},(0,a.kt)("div",{class:"ending fem",style:{width:"100px",fontStyle:"normal"}},"-\xd8")),(0,a.kt)("td",null,(0,a.kt)("em",null,"r\xf3s, mj\xf3lk, gj\xf6f, \xf6nd, m\xfas, b\xfa\xf0, Gu\xf0r\xfan, l\xf3, t\xe1, br\xfa"))),(0,a.kt)("tr",null,(0,a.kt)("th",{width:"25%"},(0,a.kt)("div",{class:"ending fem",style:{width:"100px"}},"-ing")),(0,a.kt)("td",null,(0,a.kt)("em",null,"\xe6fing, spurning, drottning"))),(0,a.kt)("tr",null,(0,a.kt)("th",{width:"25%"},(0,a.kt)("div",{class:"ending fem",style:{width:"100px"}},"-un")),(0,a.kt)("td",null,(0,a.kt)("em",null,"verslun, menntun, \xe6tlun"))))),(0,a.kt)("p",null,"As you may have noticed, the words in the first row of the table all have accented vowels (one of ",(0,a.kt)("em",{parentName:"p"},"\xe1"),", ",(0,a.kt)("em",{parentName:"p"},"\xf3"),", ",(0,a.kt)("em",{parentName:"p"},"\xfa")," or ",(0,a.kt)("em",{parentName:"p"},"\xf6"),"). Most of these words also end in consonants, but they may end in the accented vowel. "),(0,a.kt)("p",null,"The vast majority of nouns with this sound structure are feminine, although there are notable exceptions."),(0,a.kt)("admonition",{title:"Golden rule",type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"All nouns with more than one syllable that end in ",(0,a.kt)("em",{parentName:"p"},"-ing")," or ",(0,a.kt)("em",{parentName:"p"},"-un")," are feminine.")),(0,a.kt)("p",null,"Nouns that end in ",(0,a.kt)("em",{parentName:"p"},"-ing")," or ",(0,a.kt)("em",{parentName:"p"},"-un")," are very often derived from verbs:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("em",{parentName:"li"},(0,a.kt)("strong",{parentName:"em"},"-ing"))," nouns come most of the time from group 2 or 3 weak verbs:",(0,a.kt)("br",null),"e.g. ",(0,a.kt)("em",{parentName:"li"},"\xe6fa")," \u2192 ",(0,a.kt)("em",{parentName:"li"},"\xe6fing"),", ",(0,a.kt)("em",{parentName:"li"},"spyrja")," \u2192 ",(0,a.kt)("em",{parentName:"li"},"spurning")," (with vowel change)"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("em",{parentName:"li"},(0,a.kt)("strong",{parentName:"em"},"-un"))," nouns come most of the time from group 1 verbs:",(0,a.kt)("br",null),"e.g. ",(0,a.kt)("em",{parentName:"li"},"versla")," \u2192 ",(0,a.kt)("em",{parentName:"li"},"verslun"),", ",(0,a.kt)("em",{parentName:"li"},"\xe6tla")," \u2192 ",(0,a.kt)("em",{parentName:"li"},"\xe6tlun"))),(0,a.kt)("h3",{id:"weak-1"},"Weak"),(0,a.kt)("table",null,(0,a.kt)("tbody",null,(0,a.kt)("tr",null,(0,a.kt)("th",{width:"25%"},(0,a.kt)("div",{class:"ending fem",style:{width:"100px"}},"-a")),(0,a.kt)("td",null,(0,a.kt)("em",null,"kaka, tala, kona, Anna"))))),(0,a.kt)("p",null,"99.9%* of nouns that end in ",(0,a.kt)("em",{parentName:"p"},"-a")," are feminine."),(0,a.kt)("p",null,"*Not an actual statistic \ud83d\ude07"),(0,a.kt)("h2",{id:"neuter"},"Neuter"),(0,a.kt)("h3",{id:"strong-2"},"Strong"),(0,a.kt)("admonition",{title:"Question",type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"Except the last two, what do the words in the first row have in common, apart from the lack of ending?")),(0,a.kt)("table",null,(0,a.kt)("tbody",null,(0,a.kt)("tr",null,(0,a.kt)("th",{width:"25%"},(0,a.kt)("div",{class:"ending neu",style:{width:"100px",fontStyle:"normal"}},"-\xd8")),(0,a.kt)("td",null,(0,a.kt)("em",null,"land, skip, box, fjall, lauf, bla\xf0, h\xfas, r\xfam"))),(0,a.kt)("tr",null,(0,a.kt)("th",{width:"25%"},(0,a.kt)("div",{class:"ending neu",style:{width:"100px",fontStyle:"normal"}},"-V\u0301/",(0,a.kt)("em",null,"\xe6"))),(0,a.kt)("td",null,(0,a.kt)("em",null,"hn\xe9, tr\xe9, f\xe9, bakar\xed, fyller\xed, kak\xf3, b\xfa, m\xfd, fr\xe6, hr\xe6"))),(0,a.kt)("tr",null,(0,a.kt)("th",{width:"25%"},(0,a.kt)("div",{class:"ending neu",style:{width:"100px"}},"-i")),(0,a.kt)("td",null,(0,a.kt)("em",null,"belti, veski, t\xe6ki, merki, enni"))))),(0,a.kt)("p",null,"If we ignore the last two words in the first row, we see that all the rest have unaccented vowels. This is an easy way to distinguish strong feminine nouns from strong neuter nouns."),(0,a.kt)("p",null,"But remember before about those pesky exceptions? Here we\u2019ve got two, ",(0,a.kt)("em",{parentName:"p"},"h\xfas")," and ",(0,a.kt)("em",{parentName:"p"},"r\xfam"),", that do have an accented vowel despite being neuter. And they\u2019re not the only ones unfortunately. In this case, we just have to learn them as exceptions \ud83e\udd2f"),(0,a.kt)("p",null,"In the second row, we have nouns that end in an accented vowel or ",(0,a.kt)("em",{parentName:"p"},"\xe6"),". Words that end in an accented vowel can sometimes be feminine, but only if that vowel is ",(0,a.kt)("em",{parentName:"p"},"\xe1"),", ",(0,a.kt)("em",{parentName:"p"},"\xed")," or ",(0,a.kt)("em",{parentName:"p"},"\xfa")," (and there aren\u2019t that many at all that end in ",(0,a.kt)("em",{parentName:"p"},"\xed"),"). "),(0,a.kt)("p",null,"If a noun ends in ",(0,a.kt)("em",{parentName:"p"},"\xe9")," or ",(0,a.kt)("em",{parentName:"p"},"\xfd"),", then it\u2019s definitely neuter. The only exception to this are women\u2019s names that end in ",(0,a.kt)("em",{parentName:"p"},"\xfd"),", such as ",(0,a.kt)("em",{parentName:"p"},"Dagn\xfd"),"."),(0,a.kt)("p",null,"Finally, there are neuter nouns that end in ",(0,a.kt)("em",{parentName:"p"},"-i"),". You\u2019re probably thinking, why are they here? Aren\u2019t nouns that end in ",(0,a.kt)("em",{parentName:"p"},"-i")," supposed to be weak? Well, not if they\u2019re neuter. The reason for this is that the ending behaves differently when declined. How do you know if a noun ending in ",(0,a.kt)("em",{parentName:"p"},"-i")," is neuter or masculine?"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"If it refers to a person, it\u2019s probably masculine, e.g. ",(0,a.kt)("em",{parentName:"li"},"kennari"),", ",(0,a.kt)("em",{parentName:"li"},"krakki"),".")),(0,a.kt)("p",null,"Apart from this, there aren\u2019t really any other rules to help you out."),(0,a.kt)("h3",{id:"weak-2"},"Weak"),(0,a.kt)("table",null,(0,a.kt)("tbody",null,(0,a.kt)("tr",null,(0,a.kt)("th",{width:"25%"},(0,a.kt)("div",{class:"ending neu",style:{width:"100px"}},"-a")),(0,a.kt)("td",null,(0,a.kt)("em",null,"auga, eyra, hjarta, lunga, bj\xfaga, pasta"))))),(0,a.kt)("p",null,"There aren\u2019t many weak neuter nouns in Icelandic. Most of them refer to body parts, and others are loans from Greek. See a ",(0,a.kt)("a",{parentName:"p",href:"../reference/weak-neuter-nouns"},"comprehensive list of weak neuter nouns"),"."),(0,a.kt)("h2",{id:"some-tricky-endings"},"Some tricky endings"),(0,a.kt)("h3",{id:"-i"},"-",(0,a.kt)("em",{parentName:"h3"},"i")),(0,a.kt)("p",null,"As we saw above, nouns that end in ",(0,a.kt)("em",{parentName:"p"},"-i")," are often masculine or neuter."),(0,a.kt)("p",null,"There\u2019s also a fairly sizeable group of feminine nouns that end in ",(0,a.kt)("em",{parentName:"p"},"-i"),", for example ",(0,a.kt)("em",{parentName:"p"},"hei\xf0i")," \u201cmoorland, mountain pass\u201c and ",(0,a.kt)("em",{parentName:"p"},"gersemi")," \u201ctreasure\u201d. Many of them refer to abstract concepts, such as ",(0,a.kt)("em",{parentName:"p"},"athygli")," \u201cattention\u201d, ",(0,a.kt)("em",{parentName:"p"},"bjarts\xfdni")," \u201coptimism\u201d, ",(0,a.kt)("em",{parentName:"p"},"heimspeki")," \u201cphilosophy\u201d and ",(0,a.kt)("em",{parentName:"p"},"skynsemi")," \u201ccommon sense\u201d."),(0,a.kt)("h4",{id:"-ni"},(0,a.kt)("em",{parentName:"h4"},"-ni")),(0,a.kt)("p",null,"Most nouns that end in ",(0,a.kt)("em",{parentName:"p"},"-ni")," are feminine. These too often refer to abstract concepts, for example ",(0,a.kt)("em",{parentName:"p"},"bei\xf0ni")," \u201crequest\u201d, ",(0,a.kt)("em",{parentName:"p"},"eigingirni")," \u201cselfishness\u201d, ",(0,a.kt)("em",{parentName:"p"},"framlei\xf0ni")," \u201cproductivity\u201d, ",(0,a.kt)("em",{parentName:"p"},"gagnr\xfdni")," \u201ccriticism\u201d and ",(0,a.kt)("em",{parentName:"p"},"samkeppni")," \u201ccompetition\u201d."),(0,a.kt)("p",null,"There are a handful that are actually neuter, including ",(0,a.kt)("em",{parentName:"p"},"kolvetni")," \u201ccarbohydrate\u201d, ",(0,a.kt)("em",{parentName:"p"},"skyggni")," \u201cvisibility\u201d and ",(0,a.kt)("em",{parentName:"p"},"vetni")," \u201chydrogen\u201d."),(0,a.kt)("h4",{id:"-fr\xe6\xf0i"},(0,a.kt)("em",{parentName:"h4"},"-fr\xe6\xf0i")),(0,a.kt)("p",null,"The word ",(0,a.kt)("em",{parentName:"p"},"fr\xe6\xf0i")," can either be feminine singular or neuter plural. It\u2019s used to form the name of many sciences and academic disciplines. "),(0,a.kt)("p",null,"When found in a compound word, it\u2019s almost always feminine, for example ",(0,a.kt)("em",{parentName:"p"},"l\xedffr\xe6\xf0i")," \u201cbiology\u201d, ",(0,a.kt)("em",{parentName:"p"},"m\xe1lfr\xe6\xf0i")," \u201cgrammar\u201d and ",(0,a.kt)("em",{parentName:"p"},"st\xe6r\xf0fr\xe6\xf0i")," \u201cmaths\u201d. As a standalone noun, it\u2019s neuter plural, as in ",(0,a.kt)("em",{parentName:"p"},"norr\xe6n fr\xe6\xf0i")," \u201cNordic studies\u201d."),(0,a.kt)("h3",{id:"stem-based--ur"},"Stem-based ",(0,a.kt)("em",{parentName:"h3"},"-ur")),(0,a.kt)("p",null,"Sometimes, ",(0,a.kt)("em",{parentName:"p"},"-ur")," is not quite what it seems. \ud83e\uddd0 Most of the time, it\u2019s a ending that\u2019s characteristic of strong masculine nouns, as in ",(0,a.kt)("em",{parentName:"p"},"hestur")," and ",(0,a.kt)("em",{parentName:"p"},"vinur"),". But other times, ",(0,a.kt)("em",{parentName:"p"},"-ur")," is actually not an ending at all: in fact it\u2019s part of the stem. This means that when the noun is declined for number or case, the ",(0,a.kt)("em",{parentName:"p"},"-ur")," is not removed."),(0,a.kt)("p",null,"Confusingly, nouns with stem ",(0,a.kt)("em",{parentName:"p"},"-ur")," can be masculine, feminine or neuter. Here are some of the most common ones you should know about:"),(0,a.kt)("figure",null,(0,a.kt)("table",{width:"75%"},(0,a.kt)("tbody",null,(0,a.kt)("tr",null,(0,a.kt)("th",{colspan:"2"},"Masculine"),(0,a.kt)("th",{width:"20%"},"Feminine"),(0,a.kt)("th",{colspan:"2"},"Neuter")),(0,a.kt)("tr",null,(0,a.kt)("td",{width:"20%",valign:"top"},(0,a.kt)("em",null,"aldur",(0,a.kt)("br",null),"\xe1rangur",(0,a.kt)("br",null),"bakstur",(0,a.kt)("br",null),"bl\xe1stur",(0,a.kt)("br",null),"faraldur",(0,a.kt)("br",null),"farangur",(0,a.kt)("br",null),"gr\xf3\xf0ur",(0,a.kt)("br",null),"hl\xe1tur",(0,a.kt)("br",null),"lei\xf0angur",(0,a.kt)("br",null),"mokstur",(0,a.kt)("br",null),"pl\xe1stur")),(0,a.kt)("td",{width:"20%",valign:"top"},(0,a.kt)("em",null,"sigur",(0,a.kt)("br",null),"sykur")),(0,a.kt)("td",{valign:"top"},(0,a.kt)("em",null,"br\xfa\xf0ur",(0,a.kt)("br",null),"fj\xf6\xf0ur",(0,a.kt)("br",null),"lifur",(0,a.kt)("br",null),"\xe6\xf0ur")),(0,a.kt)("td",{width:"20%",valign:"top"},(0,a.kt)("em",null,"eitur",(0,a.kt)("br",null),"f\xf3\xf0ur",(0,a.kt)("br",null),"f\xf3stur",(0,a.kt)("br",null),"glj\xfafur",(0,a.kt)("br",null),"hatur",(0,a.kt)("br",null),"hulstur",(0,a.kt)("br",null),"hrei\xf0ur",(0,a.kt)("br",null),"kl\xfa\xf0ur",(0,a.kt)("br",null),"le\xf0ur",(0,a.kt)("br",null),"letur",(0,a.kt)("br",null),"mynstur")),(0,a.kt)("td",{width:"20%",valign:"top"},(0,a.kt)("em",null,"myrkur",(0,a.kt)("br",null),"p\xfa\xf0ur",(0,a.kt)("br",null),"setur",(0,a.kt)("br",null),"silfur",(0,a.kt)("br",null),"slangur",(0,a.kt)("br",null),"sl\xe1tur",(0,a.kt)("br",null),"sl\xfa\xf0ur",(0,a.kt)("br",null),"timbur ",(0,a.kt)("br",null),"ve\xf0ur",(0,a.kt)("br",null),"\xf6skur")))))),(0,a.kt)("p",null,"Most nouns with stem ",(0,a.kt)("em",{parentName:"p"},"-ur")," are in fact neuter."),(0,a.kt)("admonition",{title:"Tip",type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"A lot of words with stem ",(0,a.kt)("em",{parentName:"p"},"-ur")," have a relative in English that ends in ",(0,a.kt)("em",{parentName:"p"},"-er"),", for example in the masculine ",(0,a.kt)("em",{parentName:"p"},"hl\xe1tur")," \u201claughter\u201d, ",(0,a.kt)("em",{parentName:"p"},"pl\xe1stur")," \u201cplaster\u201d; in the feminine ",(0,a.kt)("em",{parentName:"p"},"fj\xf6\xf0ur")," \u201cfeather\u201d, ",(0,a.kt)("em",{parentName:"p"},"lifur")," \u201cliver\u201d; and in the neuter ",(0,a.kt)("em",{parentName:"p"},"f\xf3\xf0ur")," \u201cfodder\u201d, ",(0,a.kt)("em",{parentName:"p"},"f\xf3stur")," \u201cfoster\u201d, ",(0,a.kt)("em",{parentName:"p"},"le\xf0ur")," \u201cleather\u201d, ",(0,a.kt)("em",{parentName:"p"},"letur")," \u201cletter\u201d, ",(0,a.kt)("em",{parentName:"p"},"p\xfa\xf0ur")," \u201cpowder\u201d, ",(0,a.kt)("em",{parentName:"p"},"silfur")," \u201csilver\u201d, ",(0,a.kt)("em",{parentName:"p"},"sl\xe1tur")," \u201cslaughter\u201d, ",(0,a.kt)("em",{parentName:"p"},"timbur")," \u201ctimber\u201d, ",(0,a.kt)("em",{parentName:"p"},"ve\xf0ur")," \u201cweather\u201d.")))}c.isMDXComponent=!0}}]);