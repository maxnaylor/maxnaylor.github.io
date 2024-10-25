(self.webpackChunkgramref=self.webpackChunkgramref||[]).push([[1765],{3905:(t,e,n)=>{"use strict";n.d(e,{Zo:()=>s,kt:()=>c});var l=n(7294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function r(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);e&&(l=l.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,l)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?r(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function m(t,e){if(null==t)return{};var n,l,a=function(t,e){if(null==t)return{};var n,l,a={},r=Object.keys(t);for(l=0;l<r.length;l++)n=r[l],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(l=0;l<r.length;l++)n=r[l],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var k=l.createContext({}),u=function(t){var e=l.useContext(k),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},s=function(t){var e=u(t.components);return l.createElement(k.Provider,{value:e},t.children)},o="mdxType",p={inlineCode:"code",wrapper:function(t){var e=t.children;return l.createElement(l.Fragment,{},e)}},d=l.forwardRef((function(t,e){var n=t.components,a=t.mdxType,r=t.originalType,k=t.parentName,s=m(t,["components","mdxType","originalType","parentName"]),o=u(n),d=a,c=o["".concat(k,".").concat(d)]||o[d]||p[d]||r;return n?l.createElement(c,i(i({ref:e},s),{},{components:n})):l.createElement(c,i({ref:e},s))}));function c(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var r=n.length,i=new Array(r);i[0]=d;var m={};for(var k in e)hasOwnProperty.call(e,k)&&(m[k]=e[k]);m.originalType=t,m[o]="string"==typeof t?t:a,i[1]=m;for(var u=2;u<r;u++)i[u]=n[u];return l.createElement.apply(null,i)}return l.createElement.apply(null,n)}d.displayName="MDXCreateElement"},1333:(t,e,n)=>{"use strict";n.d(e,{R:()=>i});var l=n(7294),a=n(4052),r=n.n(a);class i extends l.Component{constructor(t){super(t),this.state={termWidth:""}}componentDidMount(){const t=document.getElementById("term-"+this.props.term).clientWidth,e=document.getElementById("tooltip-"+this.props.term).clientWidth;this.setState({termWidth:t,tooltipWidth:e})}offset(){return 0-this.state.tooltipWidth/2+this.state.termWidth/2+"px"}displayTerm(){let t;return t=this.props.display?this.props.display:this.props.term,t}getIcelandicTerm(){let t;return t=r().terms.filter((t=>t.term.includes(this.props.term.toLowerCase()))),t[0].icelandic}render(){return l.createElement(l.Fragment,null,l.createElement("span",{className:"term",id:"term-"+this.props.term},this.displayTerm(),l.createElement("span",{id:"tooltip-"+this.props.term,className:"tooltip",style:{left:this.offset()}},"\ud83c\uddee\ud83c\uddf8 ",this.getIcelandicTerm())))}}},4052:t=>{t.exports={terms:[,{term:"verb",icelandic:"s\xf6gn"},{term:"object",icelandic:"andlag"},{term:"phrase",icelandic:"li\xf0ur"},{term:"pronoun",icelandic:"fornafn"},{term:"mood",icelandic:"h\xe1ttur"},{term:"accusative",icelandic:"\xfeolfall"},{term:"active voice",icelandic:"germynd"},{term:"adjective",icelandic:"l\xfdsingaror\xf0"},{term:"adjective phrase",icelandic:"l\xfdsingaror\xf0sli\xf0ur"},{term:"adverb",icelandic:"atviksor\xf0"},{term:"verb phrase",icelandic:"sagnli\xf0ur"},{term:"adverb phrase",icelandic:"atviksli\xf0ur"},{term:"aspiration",icelandic:"fr\xe1bl\xe1stur"},{term:"case",icelandic:"fall"},{term:"comparative",icelandic:"mi\xf0stig"},{term:"complement",icelandic:"fyllili\xf0ur"},{term:"consonant",icelandic:"samhlj\xf3\xf0"},{term:"dative",icelandic:"\xfe\xe1gufall"},{term:"definite article",icelandic:"\xe1kve\xf0inn greinir"},{term:"demonstrative pronoun",icelandic:"\xe1bendingarfornafn"},{term:"determiner",icelandic:"\xe1kv\xe6\xf0isor\xf0"},{term:"devoicing",icelandic:"afr\xf6ddun"},{term:"diphthong",icelandic:"tv\xedhlj\xf3\xf0"},{term:"direct object",icelandic:"beint andlag"},{term:"ending",icelandic:"ending"},{term:"feminine",icelandic:"kvenkyn"},{term:"first person",icelandic:"fyrsta pers\xf3na"},{term:"gender",icelandic:"kyn"},{term:"genitive",icelandic:"eignarfall"},{term:"head",icelandic:"h\xf6fu\xf0"},{term:"imperative mood",icelandic:"bo\xf0h\xe1ttur"},{term:"indefinite pronoun",icelandic:"\xf3\xe1kve\xf0i\xf0 fornafn"},{term:"indicative",icelandic:"frams\xf6guh\xe1ttur"},{term:"indirect object",icelandic:"\xf3beint andlag"},{term:"imperative",icelandic:"bo\xf0h\xe1ttur"},{term:"infinitive",icelandic:"nafnh\xe1ttur"},{term:"masculine",icelandic:"karlkyn"},{term:"middle voice",icelandic:"mi\xf0mynd"},{term:"modal verb",icelandic:"hj\xe1lpars\xf6gn"},{term:"monophthong",icelandic:"einhlj\xf3\xf0"},{term:"neuter",icelandic:"hvorugkyn"},{term:"nominative",icelandic:"nefnifall"},{term:"noun phrase",icelandic:"nafnli\xf0ur"},{term:"passive voice",icelandic:"\xfeolmynd"},{term:"past participle",icelandic:"l\xfdsingarh\xe1ttur \xfe\xe1t\xed\xf0ar"},{term:"past tense",icelandic:"\xfe\xe1t\xed\xf0"},{term:"personal pronoun",icelandic:"pers\xf3nufornafn"},{term:"plural",icelandic:"fleirtala"},{term:"positive",icelandic:"frumstig"},{term:"preaspiration",icelandic:"a\xf0bl\xe1stur"},{term:"preposition",icelandic:"forsetning"},{term:"prepositional phrase",icelandic:"forsetningarli\xf0ur"},{term:"principal parts",icelandic:"kennimyndir"},{term:"reflexive pronoun",icelandic:"afturbeygt fornafn"},{term:"possessive pronoun",icelandic:"eignarfornafn"},{term:"present participle",icelandic:"l\xfdsingarh\xe1ttur n\xfat\xed\xf0ar"},{term:"present tense",icelandic:"n\xfat\xed\xf0"},{term:"second person",icelandic:"\xf6nnur pers\xf3na"},{term:"sentence",icelandic:"setning"},{term:"singular",icelandic:"eintala"},{term:"stem",icelandic:"stofn"},{term:"strong",icelandic:"sterk beyging"},{term:"strong verb",icelandic:"sterk s\xf6gn"},{term:"stylistic fronting",icelandic:"st\xedlf\xe6rsla"},{term:"subject",icelandic:"frumlag"},{term:"subjunctive",icelandic:"vi\xf0tengingarh\xe1ttur"},{term:"superlative",icelandic:"efsta stig"},{term:"supine",icelandic:"sagnb\xf3t"},{term:"third person",icelandic:"\xferi\xf0ja pers\xf3na"},{term:"transitive",icelandic:"\xe1hrifss\xf6gn"},{term:"transitive verb",icelandic:"\xe1hrifss\xf6gn"},{term:"intransitive verb",icelandic:"\xe1hrifslaus s\xf6gn"},{term:"weak",icelandic:"veik beyging"},{term:"weak verb",icelandic:"veik s\xf6gn"},{term:"word order",icelandic:"or\xf0ar\xf6\xf0"}]}},488:(t,e,n)=>{"use strict";n.r(e),n.d(e,{assets:()=>u,contentTitle:()=>m,default:()=>d,frontMatter:()=>i,metadata:()=>k,toc:()=>s});var l=n(7462),a=(n(7294),n(3905)),r=n(1333);const i={id:"dative",title:"Dative",description:"An explanation of the dative case in Icelandic. Find out how to use it and how to form it."},m=void 0,k={unversionedId:"nouns/dative",id:"nouns/dative",title:"Dative",description:"An explanation of the dative case in Icelandic. Find out how to use it and how to form it.",source:"@site/i18n/is/docusaurus-plugin-content-docs/current/nouns/dative.md",sourceDirName:"nouns",slug:"/nouns/dative",permalink:"/is/docs/nouns/dative",draft:!1,tags:[],version:"current",frontMatter:{id:"dative",title:"Dative",description:"An explanation of the dative case in Icelandic. Find out how to use it and how to form it."},sidebar:"someSidebar",previous:{title:"Accusative",permalink:"/is/docs/nouns/accusative"},next:{title:"Genitive",permalink:"/is/docs/nouns/genitive"}},u={},s=[{value:"Function",id:"function",level:2},{value:"Typical function",id:"typical-function",level:3},{value:"Other uses",id:"other-uses",level:3},{value:"Prepositions",id:"prepositions",level:4},{value:"Impersonal verbs",id:"impersonal-verbs",level:4},{value:"Verbs that have a dative direct object",id:"verbs-that-have-a-dative-direct-object",level:4},{value:"Formation",id:"formation",level:2},{value:"Singular",id:"singular",level:3},{value:"Masculine",id:"masculine",level:4},{value:"When to add <em>-i</em>",id:"when-to-add--i",level:4},{value:"Sound changes (I-shift and vowel breaking)",id:"sound-changes-i-shift-and-vowel-breaking",level:4},{value:"Feminine",id:"feminine",level:4},{value:"Neuter",id:"neuter",level:4},{value:"Plural",id:"plural",level:3},{value:"Exceptions",id:"exceptions",level:4}],o={toc:s},p="wrapper";function d(t){let{components:e,...n}=t;return(0,a.kt)(p,(0,l.Z)({},o,n,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"function"},"Function"),(0,a.kt)("h3",{id:"typical-function"},"Typical function"),(0,a.kt)("p",null,"The ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)(r.R,{term:"dative",display:"dative case",mdxType:"Term"}))," is typically used to indicate the \u201crecipient\u201d of an action. The recipient can be the person or thing receiving an object or action. Another term for this is the indirect object. Let\u2019s look at some examples:"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("em",{parentName:"p"},"\xc9g \xe6tla a\xf0 gefa ",(0,a.kt)("strong",{parentName:"em"},"honum")," b\xf3k \xed j\xf3lagj\xf6f.",(0,a.kt)("br",null),"Kennarinn segir ",(0,a.kt)("strong",{parentName:"em"},"kr\xf6kkunum")," s\xf6gu."))),(0,a.kt)("p",null,"All the words in bold are in the dative. "),(0,a.kt)("p",null,"In the first example, ",(0,a.kt)("em",{parentName:"p"},"honum")," \u201chim\u201d is in the dative, because ",(0,a.kt)("em",{parentName:"p"},"he")," is the one receiving the ",(0,a.kt)("em",{parentName:"p"},"b\xf3k")," (accusative) as a gift. "),(0,a.kt)("admonition",{title:"Pro explanation",type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"The dative normally indicates the ",(0,a.kt)("strong",{parentName:"p"},"indirect object")," of a verb.")),(0,a.kt)("h3",{id:"other-uses"},"Other uses"),(0,a.kt)("h4",{id:"prepositions"},"Prepositions"),(0,a.kt)("p",null,"Prepositions can take the dative case:"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("em",{parentName:"p"},"\xc9g er \xe1 ",(0,a.kt)("strong",{parentName:"em"},"kaffih\xfasi"),".",(0,a.kt)("br",null),"Vi\xf0 t\xf6lu\xf0um saman \xed ",(0,a.kt)("strong",{parentName:"em"},"vinnunni"),".",(0,a.kt)("br",null),"El\xedn f\xf3r me\xf0 ",(0,a.kt)("strong",{parentName:"em"},"vinum s\xednum")," \xe1 bar."))),(0,a.kt)("p",null,"The prepositions ",(0,a.kt)("em",{parentName:"p"},"\xe1")," \u201con\u201d, ",(0,a.kt)("em",{parentName:"p"},"\xed")," \u201cin\u201d, ",(0,a.kt)("em",{parentName:"p"},"undir")," \u201cunder\u201d and ",(0,a.kt)("em",{parentName:"p"},"yfir")," \u201cover\u201d can take either the accusative or the dative depending on whether there is motion or lack of motion in a sentence. For an explanation of this, see ",(0,a.kt)("em",{parentName:"p"},(0,a.kt)("a",{parentName:"em",href:"../prepositions/a-i-undir-yfir"},"\xe1, \xed, undir, yfir")),"."),(0,a.kt)("p",null,"Whilst the prepositions ",(0,a.kt)("em",{parentName:"p"},"fyrir")," \u201cfor, before, in front of\u201d, ",(0,a.kt)("em",{parentName:"p"},"me\xf0")," \u201cwith\u201d and ",(0,a.kt)("em",{parentName:"p"},"vi\xf0")," \u201cat, next to\u201d can take either accusative or dative too, the rules for them aren\u2019t to do with motion or lack of motion. See ",(0,a.kt)("em",{parentName:"p"},(0,a.kt)("a",{parentName:"em",href:"../prepositions/fyrir"},"fyrir")),", ",(0,a.kt)("em",{parentName:"p"},(0,a.kt)("a",{parentName:"em",href:"../prepositions/me%C3%B0"},"me\xf0"))," and ",(0,a.kt)("em",{parentName:"p"},(0,a.kt)("a",{parentName:"em",href:"../prepositions/vi%C3%B0"},"vi\xf0"))," respectively for explanations."),(0,a.kt)("p",null,"Finally, there are prepositions like ",(0,a.kt)("em",{parentName:"p"},"af"),", ",(0,a.kt)("em",{parentName:"p"},"fr\xe1")," and ",(0,a.kt)("em",{parentName:"p"},"\xfar")," that always take the dative. See a ",(0,a.kt)("a",{parentName:"p",href:"/is/docs/prepositions/governing-dative"},"list of prepositions that govern the dative"),"."),(0,a.kt)("h4",{id:"impersonal-verbs"},"Impersonal verbs"),(0,a.kt)("p",null,"Normally the subject of a sentence is in the nominative. But certain verbs require their subject to be in a different case, and most often that\u2019s the dative (although it can sometimes be the accusative):"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("em",{parentName:"p"},(0,a.kt)("strong",{parentName:"em"},"M\xe9r")," finnst gaman a\xf0 hj\xf3la.",(0,a.kt)("br",null),"Hvernig l\xed\xf0ur ",(0,a.kt)("strong",{parentName:"em"},"\xfe\xe9r"),"?",(0,a.kt)("br",null),(0,a.kt)("strong",{parentName:"em"},"Honum")," k\xf3lna\xf0i miki\xf0 \xfati \xed snj\xf3num."))),(0,a.kt)("p",null,"See a ",(0,a.kt)("a",{parentName:"p",href:"../reference/impersonal#dative"},"list of verbs with a dative subject"),"."),(0,a.kt)("h4",{id:"verbs-that-have-a-dative-direct-object"},"Verbs that have a dative direct object"),(0,a.kt)("p",null,"Although the dative normally indicates the indirect object of a verb, a lot of verbs take a direct object in the dative:"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("em",{parentName:"p"},"Mar\xeda hj\xe1lpar ",(0,a.kt)("strong",{parentName:"em"},"m\xe9r")," oft me\xf0 heimavinnuna.",(0,a.kt)("br",null),"Vi\xf0 eyddum ",(0,a.kt)("strong",{parentName:"em"},"tveimur vikum")," \xe1 Sp\xe1ni.",(0,a.kt)("br",null),"Hann henti ",(0,a.kt)("strong",{parentName:"em"},"boltanum")," \xfat um gluggann."))),(0,a.kt)("p",null,"When you learn a verb, it makes sense to learn the case it governs as well as the group it belongs to."),(0,a.kt)("h2",{id:"formation"},"Formation"),(0,a.kt)("h3",{id:"singular"},"Singular"),(0,a.kt)("h4",{id:"masculine"},"Masculine"),(0,a.kt)("p",null,"To form the dative singular of masculine nouns, follow the rules below."),(0,a.kt)("figure",null,(0,a.kt)("table",null,(0,a.kt)("tbody",null,(0,a.kt)("tr",null,(0,a.kt)("th",{valign:"top"},"\ud83d\udcaa\xa0Strong"),(0,a.kt)("td",null,"Remove the ending and add ",(0,a.kt)("em",null,(0,a.kt)("strong",null,"\u2011i")),(0,a.kt)("table",{class:"clear"},(0,a.kt)("tbody",null,(0,a.kt)("tr",null,(0,a.kt)("td",{width:"150px"},(0,a.kt)("em",null,"hest"),"|",(0,a.kt)("strong",null,(0,a.kt)("em",null,"ur"))),(0,a.kt)("td",null,"\u2192\xa0",(0,a.kt)("em",null,"hest",(0,a.kt)("strong",null,"i")))),(0,a.kt)("tr",null,(0,a.kt)("td",{width:"150px"},(0,a.kt)("em",null,"stein"),"|",(0,a.kt)("strong",null,(0,a.kt)("em",null,"n"))),(0,a.kt)("td",null,"\u2192\xa0",(0,a.kt)("em",null,"stein",(0,a.kt)("strong",null,"i")))),(0,a.kt)("tr",null,(0,a.kt)("td",{width:"150px"},(0,a.kt)("em",null,"spegil"),"|",(0,a.kt)("strong",null,(0,a.kt)("em",null,"l"))),(0,a.kt)("td",null,"\u2192\xa0",(0,a.kt)("em",null,"spegl",(0,a.kt)("strong",null,"i")))),(0,a.kt)("tr",null,(0,a.kt)("td",{colspan:"2"},(0,a.kt)("br",null),"Remove the ending")),(0,a.kt)("tr",null,(0,a.kt)("td",{width:"150px"},(0,a.kt)("em",null,"sta\xf0"),"|",(0,a.kt)("strong",null,(0,a.kt)("em",null,"ur"))),(0,a.kt)("td",null,"\u2192\xa0",(0,a.kt)("em",null,"sta\xf0"))),(0,a.kt)("tr",null,(0,a.kt)("td",{width:"150px"},(0,a.kt)("em",null,"l\xe6kni"),"|",(0,a.kt)("strong",null,(0,a.kt)("em",null,"r"))),(0,a.kt)("td",null,"\u2192\xa0",(0,a.kt)("em",null,"l\xe6kni"))),(0,a.kt)("tr",null,(0,a.kt)("td",{width:"150px"},(0,a.kt)("em",null,"b\xedl"),"|",(0,a.kt)("strong",null,(0,a.kt)("em",null,"l"))),(0,a.kt)("td",null,"\u2192\xa0",(0,a.kt)("em",null,"b\xedl"))))))),(0,a.kt)("tr",null,(0,a.kt)("th",{valign:"top"},"\ud83e\udd40\xa0Weak"),(0,a.kt)("td",null,"Change ",(0,a.kt)("em",null,"\u2011i")," \u2192 ",(0,a.kt)("strong",null,(0,a.kt)("em",null,"\u2011a")),(0,a.kt)("table",{class:"clear"},(0,a.kt)("tbody",null,(0,a.kt)("tr",null,(0,a.kt)("td",{width:"150px"},(0,a.kt)("em",null,"krakki")),(0,a.kt)("td",null,"\u2192\xa0",(0,a.kt)("em",null,"krakk",(0,a.kt)("strong",null,"a")))),(0,a.kt)("tr",null,(0,a.kt)("td",{width:"150px"},(0,a.kt)("em",null,"lampi")),(0,a.kt)("td",null,"\u2192\xa0",(0,a.kt)("em",null,"lamp",(0,a.kt)("strong",null,"a")))),(0,a.kt)("tr",null,(0,a.kt)("td",{width:"150px"},(0,a.kt)("em",null,"penni")),(0,a.kt)("td",null,"\u2192\xa0",(0,a.kt)("em",null,"penn",(0,a.kt)("strong",null,"a"))))))))))),(0,a.kt)("h4",{id:"when-to-add--i"},"When to add ",(0,a.kt)("em",{parentName:"h4"},"-i")),(0,a.kt)("p",null,"Strong masculine nouns can be a bit of a pain. The rules for when to add ",(0,a.kt)("em",{parentName:"p"},"-i")," are complex, so get ready \ud83d\ude33"),(0,a.kt)("p",null,"Most masculine nouns do get ",(0,a.kt)("em",{parentName:"p"},"-i")," in the dative, including:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Most nouns that end in ",(0,a.kt)("em",{parentName:"strong"},"-ur")," and form their nominative plural with ",(0,a.kt)("em",{parentName:"strong"},"-ar"),":"),(0,a.kt)("br",null),(0,a.kt)("em",{parentName:"li"},"fiskur")," \u2192 ",(0,a.kt)("em",{parentName:"li"},"fisk",(0,a.kt)("strong",{parentName:"em"},"i")),", ",(0,a.kt)("em",{parentName:"li"},"hestur")," \u2192 ",(0,a.kt)("em",{parentName:"li"},"hest",(0,a.kt)("strong",{parentName:"em"},"i")),", ",(0,a.kt)("em",{parentName:"li"},"hundur")," \u2192 ",(0,a.kt)("em",{parentName:"li"},"hund",(0,a.kt)("strong",{parentName:"em"},"i")),(0,a.kt)("br",null),"(But: ",(0,a.kt)("em",{parentName:"li"},"sk\xe1pur")," \u2192 ",(0,a.kt)("em",{parentName:"li"},"sk\xe1p"),", ",(0,a.kt)("em",{parentName:"li"},"str\xe1kur")," \u2192 ",(0,a.kt)("em",{parentName:"li"},"str\xe1k/str\xe1k",(0,a.kt)("strong",{parentName:"em"},"i")),")"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Nouns that end in ",(0,a.kt)("em",{parentName:"strong"},"-nn"),":"),(0,a.kt)("br",null),(0,a.kt)("em",{parentName:"li"},"steinn")," \u2192 ",(0,a.kt)("em",{parentName:"li"},"stein",(0,a.kt)("strong",{parentName:"em"},"i")),", ",(0,a.kt)("em",{parentName:"li"},"Sp\xe1nn")," \u2192 ",(0,a.kt)("em",{parentName:"li"},"Sp\xe1n",(0,a.kt)("strong",{parentName:"em"},"i")),", ",(0,a.kt)("em",{parentName:"li"},"\xfej\xf3nn")," \u2192 ",(0,a.kt)("em",{parentName:"li"},"\xfej\xf3n",(0,a.kt)("strong",{parentName:"em"},"i")),(0,a.kt)("br",null),"\nNouns ending in ",(0,a.kt)("em",{parentName:"li"},"-inn")," or ",(0,a.kt)("em",{parentName:"li"},"-unn")," get syncope: ",(0,a.kt)("em",{parentName:"li"},"arinn")," \u2192 ",(0,a.kt)("em",{parentName:"li"},"arn",(0,a.kt)("strong",{parentName:"em"},"i")),", ",(0,a.kt)("em",{parentName:"li"},"himinn")," \u2192 ",(0,a.kt)("em",{parentName:"li"},"himn",(0,a.kt)("strong",{parentName:"em"},"i")),", ",(0,a.kt)("em",{parentName:"li"},"morgunn")," \u2192 ",(0,a.kt)("em",{parentName:"li"},"morgn",(0,a.kt)("strong",{parentName:"em"},"i"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Multi-syllable nouns that end in ",(0,a.kt)("em",{parentName:"strong"},"-all"),", ",(0,a.kt)("em",{parentName:"strong"},"-ill")," or ",(0,a.kt)("em",{parentName:"strong"},"-ull"),":"),(0,a.kt)("br",null),(0,a.kt)("em",{parentName:"li"},"gaffall")," \u2192 ",(0,a.kt)("em",{parentName:"li"},"gaffl",(0,a.kt)("strong",{parentName:"em"},"i")),", ",(0,a.kt)("em",{parentName:"li"},"kapall")," \u2192 ",(0,a.kt)("em",{parentName:"li"},"kapl",(0,a.kt)("strong",{parentName:"em"},"i")),", ",(0,a.kt)("em",{parentName:"li"},"spegill")," \u2192 ",(0,a.kt)("em",{parentName:"li"},"spegl",(0,a.kt)("strong",{parentName:"em"},"i")),", ",(0,a.kt)("em",{parentName:"li"},"j\xf6kull")," \u2192 ",(0,a.kt)("em",{parentName:"li"},"j\xf6kl",(0,a.kt)("strong",{parentName:"em"},"i"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Native nouns that end in ",(0,a.kt)("em",{parentName:"strong"},"-ar"),":"),(0,a.kt)("br",null),(0,a.kt)("em",{parentName:"li"},"hamar")," \u2192 ",(0,a.kt)("em",{parentName:"li"},"hamr",(0,a.kt)("strong",{parentName:"em"},"i")),", ",(0,a.kt)("em",{parentName:"li"},"humar")," \u2192 ",(0,a.kt)("em",{parentName:"li"},"humr",(0,a.kt)("strong",{parentName:"em"},"i")),", ",(0,a.kt)("em",{parentName:"li"},"ja\xf0ar")," \u2192 ",(0,a.kt)("em",{parentName:"li"},"ja\xf0r",(0,a.kt)("strong",{parentName:"em"},"i"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Native nouns with no removable ending:"),(0,a.kt)("br",null),(0,a.kt)("em",{parentName:"li"},"fugl")," \u2192 ",(0,a.kt)("em",{parentName:"li"},"fugl",(0,a.kt)("strong",{parentName:"em"},"i")),", ",(0,a.kt)("em",{parentName:"li"},"foss")," \u2192 ",(0,a.kt)("em",{parentName:"li"},"foss",(0,a.kt)("strong",{parentName:"em"},"i")),", ",(0,a.kt)("em",{parentName:"li"},"lax")," \u2192 ",(0,a.kt)("em",{parentName:"li"},"lax",(0,a.kt)("strong",{parentName:"em"},"i")))),(0,a.kt)("p",null,"A large number of strong masculine nouns do not get ",(0,a.kt)("em",{parentName:"p"},"-i")," in the dative. These include:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Many nouns that end in ",(0,a.kt)("em",{parentName:"strong"},"-ur")," and form their nominative plural with ",(0,a.kt)("em",{parentName:"strong"},"-ir"),":"),(0,a.kt)("br",null),(0,a.kt)("em",{parentName:"li"},"dalur")," \u2192 ",(0,a.kt)("em",{parentName:"li"},"dal"),", ",(0,a.kt)("em",{parentName:"li"},"drengur")," \u2192 ",(0,a.kt)("em",{parentName:"li"},"dreng"),", ",(0,a.kt)("em",{parentName:"li"},"hvalur")," \u2192 ",(0,a.kt)("em",{parentName:"li"},"hval"),", ",(0,a.kt)("em",{parentName:"li"},"sta\xf0ur")," \u2192 ",(0,a.kt)("em",{parentName:"li"},"sta\xf0"),(0,a.kt)("br",null),"(But: ",(0,a.kt)("em",{parentName:"li"},"vinur")," \u2192 ",(0,a.kt)("em",{parentName:"li"},"vin",(0,a.kt)("strong",{parentName:"em"},"i")),")"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Single-syllable nouns that end in ",(0,a.kt)("em",{parentName:"strong"},"-ll"),":"),(0,a.kt)("br",null),(0,a.kt)("em",{parentName:"li"},"b\xedll")," \u2192 ",(0,a.kt)("em",{parentName:"li"},"b\xedl"),", ",(0,a.kt)("em",{parentName:"li"},"st\xedll")," \u2192 ",(0,a.kt)("em",{parentName:"li"},"st\xedl")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Nouns that end in ",(0,a.kt)("em",{parentName:"strong"},"-ir"),":"),(0,a.kt)("br",null),(0,a.kt)("em",{parentName:"li"},"l\xe6knir")," \u2192 ",(0,a.kt)("em",{parentName:"li"},"l\xe6kni"),", ",(0,a.kt)("em",{parentName:"li"},"reiknir")," \u2192 ",(0,a.kt)("em",{parentName:"li"},"reikni")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Loanwords with no removable ending:"),(0,a.kt)("br",null),(0,a.kt)("em",{parentName:"li"},"ananas")," \u2192 ",(0,a.kt)("em",{parentName:"li"},"ananas"),", ",(0,a.kt)("em",{parentName:"li"},"bambus")," \u2192 ",(0,a.kt)("em",{parentName:"li"},"bambus"),", ",(0,a.kt)("em",{parentName:"li"},"bar")," \u2192 ",(0,a.kt)("em",{parentName:"li"},"bar"),", ",(0,a.kt)("em",{parentName:"li"},"pipar")," \u2192 ",(0,a.kt)("em",{parentName:"li"},"pipar"),", ",(0,a.kt)("em",{parentName:"li"},"p\xf3ker")," \u2192 ",(0,a.kt)("em",{parentName:"li"},"p\xf3ker"),", ",(0,a.kt)("em",{parentName:"li"},"pr\xf3fessor")," \u2192 ",(0,a.kt)("em",{parentName:"li"},"pr\xf3fessor")," ")),(0,a.kt)("p",null,"There are exceptions to all of these broad rules. For example, ",(0,a.kt)("em",{parentName:"p"},"h\xe6ll")," \u201cheel\u201d can be ",(0,a.kt)("em",{parentName:"p"},"h\xe6l")," or ",(0,a.kt)("em",{parentName:"p"},"h\xe6l",(0,a.kt)("strong",{parentName:"em"},"i"))," in the dative."),(0,a.kt)("h4",{id:"sound-changes-i-shift-and-vowel-breaking"},"Sound changes (I-shift and vowel breaking)"),(0,a.kt)("p",null,"Some strong masculine nouns undergo a set of sound changes in the dative singular (the same vowel change occurs in the nominative and accusative plural too). "),(0,a.kt)("p",null,"Historically these sound changes have different origins, but for modern purposes we can learn them as a set:"),(0,a.kt)("figure",null,(0,a.kt)("table",null,(0,a.kt)("tbody",null,(0,a.kt)("tr",null,(0,a.kt)("th",{width:"30%"},"Vowel change"),(0,a.kt)("th",{width:"35%"},"Nominative"),(0,a.kt)("th",{width:"35%"},"Dative")),(0,a.kt)("tr",null,(0,a.kt)("th",{align:"left",valign:"top"},(0,a.kt)("em",null,"a")," \u2192 ",(0,a.kt)("em",null,"e")),(0,a.kt)("td",null,(0,a.kt)("em",null,"dagur",(0,a.kt)("br",null))),(0,a.kt)("td",null,(0,a.kt)("em",null,"d",(0,a.kt)("span",{class:"ushift"},"e"),"gi"))),(0,a.kt)("tr",null,(0,a.kt)("th",{align:"left",valign:"top"},(0,a.kt)("em",null,"\xe1")," \u2192 ",(0,a.kt)("em",null,"\xe6")),(0,a.kt)("td",null,(0,a.kt)("em",null,"h\xe1ttur",(0,a.kt)("br",null),"\xfer\xe1\xf0ur",(0,a.kt)("br",null),"\xfe\xe1ttur"),(0,a.kt)("br",null),(0,a.kt)("br",null),"With stem ",(0,a.kt)("em",null,"r"),":",(0,a.kt)("br",null),(0,a.kt)("em",null,"bl\xe1stur")),(0,a.kt)("td",null,(0,a.kt)("em",null,"h",(0,a.kt)("span",{class:"ushift"},"\xe6"),"tti",(0,a.kt)("br",null),"\xfer",(0,a.kt)("span",{class:"ushift"},"\xe6"),"\xf0i",(0,a.kt)("br",null),"\xfe",(0,a.kt)("span",{class:"ushift"},"\xe6"),"tti",(0,a.kt)("br",null),(0,a.kt)("br",null),(0,a.kt)("br",null),"bl",(0,a.kt)("span",{class:"ushift"},"\xe6"),"stri"))),(0,a.kt)("tr",null,(0,a.kt)("th",{align:"left",valign:"top"},(0,a.kt)("em",null,"e")," \u2192 ",(0,a.kt)("em",null,"a")),(0,a.kt)("td",null,(0,a.kt)("em",null,"ketill",(0,a.kt)("br",null),"Egill")),(0,a.kt)("td",null,(0,a.kt)("em",null,"k",(0,a.kt)("span",{class:"ushift"},"a"),"tli",(0,a.kt)("br",null),(0,a.kt)("span",{class:"ushift"},"A"),"gli"))),(0,a.kt)("tr",null,(0,a.kt)("th",{align:"left",valign:"top"},(0,a.kt)("em",null,"j\xf6")," \u2192 ",(0,a.kt)("em",null,"i")),(0,a.kt)("td",null,(0,a.kt)("em",null,"bj\xf6rn",(0,a.kt)("br",null),"fj\xf6r\xf0ur")),(0,a.kt)("td",null,(0,a.kt)("em",null,"b",(0,a.kt)("span",{class:"ushift"},"i"),"rni",(0,a.kt)("br",null),"f",(0,a.kt)("span",{class:"ushift"},"i"),"r\xf0i"))),(0,a.kt)("tr",null,(0,a.kt)("th",{align:"left",valign:"top"},(0,a.kt)("em",null,"\xf6")," \u2192 ",(0,a.kt)("em",null,"e")),(0,a.kt)("td",null,(0,a.kt)("em",null,"\xe1v\xf6xtur",(0,a.kt)("br",null),"k\xf6ttur",(0,a.kt)("br",null),"v\xf6llur",(0,a.kt)("br",null),"v\xf6r\xf0ur")),(0,a.kt)("td",null,(0,a.kt)("em",null,"\xe1v",(0,a.kt)("span",{class:"ushift"},"e"),"xti",(0,a.kt)("br",null),"k",(0,a.kt)("span",{class:"ushift"},"e"),"tti",(0,a.kt)("br",null),"v",(0,a.kt)("span",{class:"ushift"},"e"),"lli",(0,a.kt)("br",null),"v",(0,a.kt)("span",{class:"ushift"},"e"),"r\xf0i")))))),(0,a.kt)("p",null,"For more information, see ",(0,a.kt)("a",{parentName:"p",href:"../sound-changes/i-shift"},"I-shift"),"."),(0,a.kt)("h4",{id:"feminine"},"Feminine"),(0,a.kt)("p",null,"To form the dative singular of feminine nouns, follow the rules below."),(0,a.kt)("figure",null,(0,a.kt)("table",null,(0,a.kt)("tbody",null,(0,a.kt)("tr",null,(0,a.kt)("th",{valign:"top"},"\ud83d\udcaa\xa0Strong"),(0,a.kt)("td",null,"No change",(0,a.kt)("table",{class:"clear"},(0,a.kt)("tbody",null,(0,a.kt)("tr",null,(0,a.kt)("td",{width:"150px"},(0,a.kt)("em",null,"r\xf3s")),(0,a.kt)("td",null,"\u2192\xa0",(0,a.kt)("em",null,"r\xf3s"))),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("em",null,"mj\xf3lk")),(0,a.kt)("td",null,"\u2192\xa0",(0,a.kt)("em",null,"mj\xf3lk"))),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("em",null,"verslun")),(0,a.kt)("td",null,"\u2192\xa0",(0,a.kt)("em",null,"verslun"))),(0,a.kt)("tr",null,(0,a.kt)("td",{colspan:"2"},"But:")),(0,a.kt)("tr",null,(0,a.kt)("td",{width:"150px"},(0,a.kt)("em",null,"\xe6fing")),(0,a.kt)("td",null,"\u2192\xa0",(0,a.kt)("em",null,"\xe6fing",(0,a.kt)("strong",null,"u")))))))),(0,a.kt)("tr",null,(0,a.kt)("th",{valign:"top"},"\ud83e\udd40\xa0Weak"),(0,a.kt)("td",null,"Change ",(0,a.kt)("em",null,"\u2011a")," \u2192 ",(0,a.kt)("strong",null,(0,a.kt)("em",null,"\u2011u")),"\xa0\xa0",(0,a.kt)("small",null,"(+U\u2011shift)"),(0,a.kt)("table",{class:"clear"},(0,a.kt)("tbody",null,(0,a.kt)("tr",null,(0,a.kt)("td",{width:"150px"},(0,a.kt)("em",null,"kona")),(0,a.kt)("td",null,"\u2192\xa0",(0,a.kt)("em",null,"kon",(0,a.kt)("strong",null,"u")))),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("em",null,"kaka")),(0,a.kt)("td",null,"\u2192\xa0\u26a0\ufe0f\xa0",(0,a.kt)("em",null,"k\xf6k",(0,a.kt)("strong",null,"u"))))))))))),(0,a.kt)("p",null,"Strong feminine nouns are dead easy in the dative, because they\u2019re exactly the same as the nominative and accusative! The only exceptions are:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Nouns that end in ",(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("em",{parentName:"strong"},"-ing")),", which get a final ",(0,a.kt)("em",{parentName:"li"},"-u")," in the dative (and accusative)."),(0,a.kt)("li",{parentName:"ul"},"Certain female names, such as ",(0,a.kt)("em",{parentName:"li"},"Dagn\xfd")," og ",(0,a.kt)("em",{parentName:"li"},"Sigr\xed\xf0ur"),", which become ",(0,a.kt)("em",{parentName:"li"},"Dagn\xfdj",(0,a.kt)("strong",{parentName:"em"},"u"))," and ",(0,a.kt)("em",{parentName:"li"},"Sigr\xed\xf0",(0,a.kt)("strong",{parentName:"em"},"i"))," in the dative (and accusative). For more examples, see ",(0,a.kt)("a",{parentName:"li",href:"personal-names"},"Personal names"),".")),(0,a.kt)("p",null,"For weak feminine nouns, change the final ",(0,a.kt)("em",{parentName:"p"},"-a")," to ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("em",{parentName:"strong"},"-u")),". "),(0,a.kt)("p",null,"A really important point: this final ",(0,a.kt)("em",{parentName:"p"},"-u")," causes U-shift where applicable, meaning that an ",(0,a.kt)("em",{parentName:"p"},"a")," in the stem changes to ",(0,a.kt)("em",{parentName:"p"},"\xf6")," or ",(0,a.kt)("em",{parentName:"p"},"u"),". For an explanation of this process, see ",(0,a.kt)("a",{parentName:"p",href:"../sound-changes/u-shift"},"U-shift"),"."),(0,a.kt)("h4",{id:"neuter"},"Neuter"),(0,a.kt)("p",null,"To form the dative of singular neuter nouns, follow the rules below."),(0,a.kt)("figure",null,(0,a.kt)("table",null,(0,a.kt)("tbody",null,(0,a.kt)("tr",null,(0,a.kt)("th",{valign:"top"},"\ud83d\udcaa\xa0Strong"),(0,a.kt)("td",null,"Add ",(0,a.kt)("em",null,(0,a.kt)("strong",null,"\u2011i")),(0,a.kt)("table",{class:"clear"},(0,a.kt)("tbody",null,(0,a.kt)("tr",null,(0,a.kt)("td",{width:"150px"},(0,a.kt)("em",null,"land")),(0,a.kt)("td",null,"\u2192\xa0",(0,a.kt)("em",null,"land",(0,a.kt)("strong",null,"i")))),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("em",null,"skip")),(0,a.kt)("td",null,"\u2192\xa0",(0,a.kt)("em",null,"skip",(0,a.kt)("strong",null,"i")))),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("em",null,"veski")),(0,a.kt)("td",null,"\u2192\xa0",(0,a.kt)("em",null,"veski"))),(0,a.kt)("tr",null,(0,a.kt)("td",null,"But:")),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("em",null,"tr\xe9")),(0,a.kt)("td",null,"\u2192\xa0",(0,a.kt)("em",null,"tr\xe9"))))))),(0,a.kt)("tr",null,(0,a.kt)("th",{valign:"top"},"\ud83e\udd40\xa0Weak"),(0,a.kt)("td",null,"No change",(0,a.kt)("table",{class:"clear"},(0,a.kt)("tbody",null,(0,a.kt)("tr",null,(0,a.kt)("td",{width:"150px"},(0,a.kt)("em",null,"auga")),(0,a.kt)("td",null,"\u2192\xa0",(0,a.kt)("em",null,"auga"))),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("em",null,"eyra")),(0,a.kt)("td",null,"\u2192\xa0",(0,a.kt)("em",null,"eyra")))))))))),(0,a.kt)("p",null,"The vast majority of strong neuter nouns get ",(0,a.kt)("em",{parentName:"p"},"-i")," in the dative singular. Of course, if the noun already ends in ",(0,a.kt)("em",{parentName:"p"},"-i"),", then we don\u2019t add another one (Icelandic doesn\u2019t really do double vowels)."),(0,a.kt)("p",null,"A handful of nouns that end in ",(0,a.kt)("em",{parentName:"p"},"-\xe9")," don\u2019t get the dative ",(0,a.kt)("em",{parentName:"p"},"-i"),". These are:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("em",{parentName:"li"},"f\xe9")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("em",{parentName:"li"},"hn\xe9")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("em",{parentName:"li"},"tr\xe9"))),(0,a.kt)("p",null,"Others, such as ",(0,a.kt)("em",{parentName:"p"},"hl\xe9")," and ",(0,a.kt)("em",{parentName:"p"},"v\xe9"),", do get the dative ending, e.g. ",(0,a.kt)("em",{parentName:"p"},"hl\xe9",(0,a.kt)("strong",{parentName:"em"},"i")),", ",(0,a.kt)("em",{parentName:"p"},"v\xe9",(0,a.kt)("strong",{parentName:"em"},"i")),"."),(0,a.kt)("p",null,"As in the accusative, weak nouns don\u2019t change. So weak neuter nouns are the same in the nominative, accusative, dative and (sneak peek!) genitive."),(0,a.kt)("h3",{id:"plural"},"Plural"),(0,a.kt)("p",null,"The dative plural ending, ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("em",{parentName:"strong"},"-um")),", is one of the most recognisable in Icelandic, as it\u2019s the same for weak and strong nouns in all genders."),(0,a.kt)("figure",null,(0,a.kt)("table",null,(0,a.kt)("tbody",null,(0,a.kt)("tr",null,(0,a.kt)("th",{width:"10%"},"\xa0"),(0,a.kt)("th",{width:"30"},"Masculine"),(0,a.kt)("th",{width:"30%"},"Feminine"),(0,a.kt)("th",{width:"30%"},"Neuter")),(0,a.kt)("tr",null,(0,a.kt)("th",{valign:"top"},"Strong"),(0,a.kt)("td",{valign:"top"},(0,a.kt)("em",null,"hest",(0,a.kt)("strong",null,"um"),(0,a.kt)("br",null),"st",(0,a.kt)("span",{class:"ushift"},"\xf6"),"\xf0",(0,a.kt)("strong",null,"um"),(0,a.kt)("br",null),"stein",(0,a.kt)("strong",null,"um"),(0,a.kt)("br",null),"b\xedl",(0,a.kt)("strong",null,"um"),(0,a.kt)("br",null),"spegl",(0,a.kt)("strong",null,"um"),(0,a.kt)("br",null),"l\xe6kn",(0,a.kt)("strong",null,"um"))),(0,a.kt)("td",{valign:"top"},(0,a.kt)("em",null,"r\xf3s",(0,a.kt)("strong",null,"um"),(0,a.kt)("br",null),"b\xf3k",(0,a.kt)("strong",null,"um"),(0,a.kt)("br",null),"verslun",(0,a.kt)("strong",null,"um"),(0,a.kt)("br",null),"\xe6fing",(0,a.kt)("strong",null,"um"),(0,a.kt)("br",null),"skel",(0,a.kt)("strong",null,"jum"),(0,a.kt)("br",null),"st\xf6\xf0",(0,a.kt)("strong",null,"vum"))),(0,a.kt)("td",{valign:"top"},(0,a.kt)("em",null,"l",(0,a.kt)("span",{class:"ushift"},"\xf6"),"nd",(0,a.kt)("strong",null,"um"),(0,a.kt)("br",null),"skip",(0,a.kt)("strong",null,"um"),(0,a.kt)("br",null),"vesk",(0,a.kt)("strong",null,"jum")))),(0,a.kt)("tr",null,(0,a.kt)("th",{valign:"top"},"Weak"),(0,a.kt)("td",{valign:"top"},(0,a.kt)("em",null,"kr",(0,a.kt)("span",{class:"ushift"},"\xf6"),"kk",(0,a.kt)("strong",null,"um"),(0,a.kt)("br",null),"l",(0,a.kt)("span",{class:"ushift"},"\xf6"),"mp",(0,a.kt)("strong",null,"um"),(0,a.kt)("br",null),"penn",(0,a.kt)("strong",null,"um"))),(0,a.kt)("td",{valign:"top"},(0,a.kt)("em",null,"kon",(0,a.kt)("strong",null,"um"),(0,a.kt)("br",null),"k",(0,a.kt)("span",{class:"ushift"},"\xf6"),"k",(0,a.kt)("strong",null,"um"))),(0,a.kt)("td",{valign:"top"},(0,a.kt)("em",null,"aug",(0,a.kt)("strong",null,"um"),(0,a.kt)("br",null),"hj",(0,a.kt)("span",{class:"ushift"},"\xf6"),"rt",(0,a.kt)("strong",null,"um"))))))),(0,a.kt)("p",null,"As you can see, ",(0,a.kt)("em",{parentName:"p"},"-um")," causes U-shift where possible, e.g. ",(0,a.kt)("em",{parentName:"p"},"sta\xf0ir")," \u2192 ",(0,a.kt)("em",{parentName:"p"},"st",(0,a.kt)("span",{class:"ushift"},"\xf6"),"\xf0um"),"."),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("mdxAdmonitionTitle",{parentName:"admonition"},(0,a.kt)("em",{parentName:"mdxAdmonitionTitle"},"j"),"-insertion"),(0,a.kt)("p",{parentName:"admonition"},"In neuter nouns ending in ",(0,a.kt)("em",{parentName:"p"},"-i")," in the nominative, a ",(0,a.kt)("em",{parentName:"p"},"j")," is inserted before the ",(0,a.kt)("em",{parentName:"p"},"-um")," ending, e.g ",(0,a.kt)("em",{parentName:"p"},"veski")," \u2192 ",(0,a.kt)("em",{parentName:"p"},"vesk",(0,a.kt)("strong",{parentName:"em"},"j"),"um"),", ",(0,a.kt)("em",{parentName:"p"},"t\xe6ki")," \u2192 ",(0,a.kt)("em",{parentName:"p"},"t\xe6k",(0,a.kt)("strong",{parentName:"em"},"j"),"um"),". This is to preserve the palatised pronunciation of ","<","k",">"," (transcribed as /c/)."),(0,a.kt)("p",{parentName:"admonition"},"A ",(0,a.kt)("em",{parentName:"p"},"j")," is also inserted before the ",(0,a.kt)("em",{parentName:"p"},"-um")," ending in strong feminine nouns ending in ",(0,a.kt)("em",{parentName:"p"},"-l"),", e.g. ",(0,a.kt)("em",{parentName:"p"},"skel")," \u2192 ",(0,a.kt)("em",{parentName:"p"},"skel",(0,a.kt)("strong",{parentName:"em"},"jum")),".")),(0,a.kt)("h4",{id:"exceptions"},"Exceptions"),(0,a.kt)("p",null,"The dative plural is one of the most regular noun forms. That said, it is Icelandic we\u2019re dealing with here. So there are some exceptions."),(0,a.kt)("figure",null,(0,a.kt)("table",null,(0,a.kt)("tbody",null,(0,a.kt)("tr",null,(0,a.kt)("th",{width:"33.3%",colspan:"2"},"Masculine"),(0,a.kt)("th",{width:"33.3%",colspan:"2"},"Feminine"),(0,a.kt)("th",{width:"33.3%",colspan:"2"},"Neuter")),(0,a.kt)("tr",null,(0,a.kt)("th",null,"Nom."),(0,a.kt)("th",null,"Dat."),(0,a.kt)("th",null,"Nom."),(0,a.kt)("th",null,"Dat."),(0,a.kt)("th",null,"Nom."),(0,a.kt)("th",null,"Dat.")),(0,a.kt)("tr",null,(0,a.kt)("td",{valign:"top",rowspan:"3"},(0,a.kt)("em",null,"sk\xf3r")),(0,a.kt)("td",{valign:"top",rowspan:"3"},(0,a.kt)("em",null,"sk\xf3",(0,a.kt)("strong",null,"m"))),(0,a.kt)("td",{valign:"top"},(0,a.kt)("em",null,"\xe1r",(0,a.kt)("br",null),"gj\xe1r",(0,a.kt)("br",null),"sp\xe1r")),(0,a.kt)("td",{valign:"top"},(0,a.kt)("em",null,"\xe1",(0,a.kt)("strong",null,"m"),(0,a.kt)("br",null),"gj\xe1",(0,a.kt)("strong",null,"m"),(0,a.kt)("br",null),"sp\xe1",(0,a.kt)("strong",null,"m"))),(0,a.kt)("td",{valign:"top",rowspan:"3"},(0,a.kt)("em",null,"tr\xe9",(0,a.kt)("br",null),"hn\xe9")),(0,a.kt)("td",{valign:"top",rowspan:"3"},(0,a.kt)("em",null,"trj",(0,a.kt)("strong",null,"\xe1m"),(0,a.kt)("br",null),"hnj",(0,a.kt)("strong",null,"\xe1m")))),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("em",null,"k\xf6ngul\xf3")),(0,a.kt)("td",null,(0,a.kt)("em",null,"k\xf6ngul\xf3",(0,a.kt)("strong",null,"m")))),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("em",null,"br\xfdr",(0,a.kt)("br",null),"k\xfdr")),(0,a.kt)("td",null,(0,a.kt)("em",null,"br\xfa",(0,a.kt)("strong",null,"m"),(0,a.kt)("br",null),"k\xfa",(0,a.kt)("strong",null,"m"))))))),(0,a.kt)("p",null,"The largest group here is feminine nouns ending in ",(0,a.kt)("em",{parentName:"p"},"\xe1"),", ",(0,a.kt)("em",{parentName:"p"},"\xf3")," or ",(0,a.kt)("em",{parentName:"p"},"\xfa"),". "),(0,a.kt)("p",null,"The masculine and neuter exceptions don\u2019t fit into any group and just need to be learnt by heart \ud83e\udd37\ud83c\udffb\u200d\u2642\ufe0f"))}d.isMDXComponent=!0}}]);