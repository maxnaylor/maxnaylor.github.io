(self.webpackChunkgramref=self.webpackChunkgramref||[]).push([[3617],{3905:(e,t,n)=>{"use strict";n.d(t,{Zo:()=>m,kt:()=>d});var a=n(7294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},c="mdxType",k={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,l=e.mdxType,r=e.originalType,s=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),c=u(n),p=l,d=c["".concat(s,".").concat(p)]||c[p]||k[p]||r;return n?a.createElement(d,i(i({ref:t},m),{},{components:n})):a.createElement(d,i({ref:t},m))}));function d(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=n.length,i=new Array(r);i[0]=p;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[c]="string"==typeof e?e:l,i[1]=o;for(var u=2;u<r;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},6195:(e,t,n)=>{"use strict";n.d(t,{$:()=>l});var a=n(7294);function l(){return a.createElement("div",{className:"promo-banner"},a.createElement("img",{src:"/img/puffins-on-cliff.jpg"}),a.createElement("div",{className:"promo-banner-content"},a.createElement("div",{className:"prose"},a.createElement("h3",null,"Learn Icelandic"),a.createElement("p",null,"A new way to study Icelandic online, coming soon")),a.createElement("a",{className:"button button--secondary",href:"https://learn-icelandic.com?utm_source=gramref&utm_medium=banner&utm_campaign=prelaunch",target:"_new"},"Find out more",a.createElement("svg",{width:"10",height:"15",viewBox:"0 0 10 15",fill:"none",xmlns:"http://www.w3.org/2000/svg"},a.createElement("path",{d:"M2 14.5C1.71875 14.5 1.46875 14.4062 1.28125 14.2188C0.875 13.8438 0.875 13.1875 1.28125 12.8125L6.5625 7.5L1.28125 2.21875C0.875 1.84375 0.875 1.1875 1.28125 0.8125C1.65625 0.40625 2.3125 0.40625 2.6875 0.8125L8.6875 6.8125C9.09375 7.1875 9.09375 7.84375 8.6875 8.21875L2.6875 14.2188C2.5 14.4062 2.25 14.5 2 14.5Z",fill:"white"})))))}},1333:(e,t,n)=>{"use strict";n.d(t,{R:()=>i});var a=n(7294),l=n(4052),r=n.n(l);class i extends a.Component{constructor(e){super(e),this.state={termWidth:""}}componentDidMount(){const e=document.getElementById("term-"+this.props.term).clientWidth,t=document.getElementById("tooltip-"+this.props.term).clientWidth;this.setState({termWidth:e,tooltipWidth:t})}offset(){return 0-this.state.tooltipWidth/2+this.state.termWidth/2+"px"}displayTerm(){let e;return e=this.props.display?this.props.display:this.props.term,e}getIcelandicTerm(){let e;return e=r().terms.filter((e=>e.term.includes(this.props.term.toLowerCase()))),e[0].icelandic}render(){return a.createElement(a.Fragment,null,a.createElement("span",{className:"term",id:"term-"+this.props.term},this.displayTerm(),a.createElement("span",{id:"tooltip-"+this.props.term,className:"tooltip",style:{left:this.offset()}},"\ud83c\uddee\ud83c\uddf8 ",this.getIcelandicTerm())))}}},4052:e=>{e.exports={terms:[,{term:"verb",icelandic:"s\xf6gn"},{term:"object",icelandic:"andlag"},{term:"phrase",icelandic:"li\xf0ur"},{term:"pronoun",icelandic:"fornafn"},{term:"mood",icelandic:"h\xe1ttur"},{term:"accusative",icelandic:"\xfeolfall"},{term:"active voice",icelandic:"germynd"},{term:"adjective",icelandic:"l\xfdsingaror\xf0"},{term:"adjective phrase",icelandic:"l\xfdsingaror\xf0sli\xf0ur"},{term:"adverb",icelandic:"atviksor\xf0"},{term:"verb phrase",icelandic:"sagnli\xf0ur"},{term:"adverb phrase",icelandic:"atviksli\xf0ur"},{term:"aspiration",icelandic:"fr\xe1bl\xe1stur"},{term:"case",icelandic:"fall"},{term:"comparative",icelandic:"mi\xf0stig"},{term:"complement",icelandic:"fyllili\xf0ur"},{term:"consonant",icelandic:"samhlj\xf3\xf0"},{term:"dative",icelandic:"\xfe\xe1gufall"},{term:"definite article",icelandic:"\xe1kve\xf0inn greinir"},{term:"demonstrative pronoun",icelandic:"\xe1bendingarfornafn"},{term:"determiner",icelandic:"\xe1kv\xe6\xf0isor\xf0"},{term:"devoicing",icelandic:"afr\xf6ddun"},{term:"diphthong",icelandic:"tv\xedhlj\xf3\xf0"},{term:"direct object",icelandic:"beint andlag"},{term:"ending",icelandic:"ending"},{term:"feminine",icelandic:"kvenkyn"},{term:"first person",icelandic:"fyrsta pers\xf3na"},{term:"gender",icelandic:"kyn"},{term:"genitive",icelandic:"eignarfall"},{term:"head",icelandic:"h\xf6fu\xf0"},{term:"imperative mood",icelandic:"bo\xf0h\xe1ttur"},{term:"indefinite pronoun",icelandic:"\xf3\xe1kve\xf0i\xf0 fornafn"},{term:"indicative",icelandic:"frams\xf6guh\xe1ttur"},{term:"indirect object",icelandic:"\xf3beint andlag"},{term:"imperative",icelandic:"bo\xf0h\xe1ttur"},{term:"infinitive",icelandic:"nafnh\xe1ttur"},{term:"masculine",icelandic:"karlkyn"},{term:"middle voice",icelandic:"mi\xf0mynd"},{term:"modal verb",icelandic:"hj\xe1lpars\xf6gn"},{term:"monophthong",icelandic:"einhlj\xf3\xf0"},{term:"neuter",icelandic:"hvorugkyn"},{term:"nominative",icelandic:"nefnifall"},{term:"noun phrase",icelandic:"nafnli\xf0ur"},{term:"passive voice",icelandic:"\xfeolmynd"},{term:"past participle",icelandic:"l\xfdsingarh\xe1ttur \xfe\xe1t\xed\xf0ar"},{term:"past tense",icelandic:"\xfe\xe1t\xed\xf0"},{term:"personal pronoun",icelandic:"pers\xf3nufornafn"},{term:"plural",icelandic:"fleirtala"},{term:"positive",icelandic:"frumstig"},{term:"preaspiration",icelandic:"a\xf0bl\xe1stur"},{term:"preposition",icelandic:"forsetning"},{term:"prepositional phrase",icelandic:"forsetningarli\xf0ur"},{term:"principal parts",icelandic:"kennimyndir"},{term:"reflexive pronoun",icelandic:"afturbeygt fornafn"},{term:"possessive pronoun",icelandic:"eignarfornafn"},{term:"present participle",icelandic:"l\xfdsingarh\xe1ttur n\xfat\xed\xf0ar"},{term:"present tense",icelandic:"n\xfat\xed\xf0"},{term:"second person",icelandic:"\xf6nnur pers\xf3na"},{term:"sentence",icelandic:"setning"},{term:"singular",icelandic:"eintala"},{term:"stem",icelandic:"stofn"},{term:"strong",icelandic:"sterk beyging"},{term:"strong verb",icelandic:"sterk s\xf6gn"},{term:"stylistic fronting",icelandic:"st\xedlf\xe6rsla"},{term:"subject",icelandic:"frumlag"},{term:"subjunctive",icelandic:"vi\xf0tengingarh\xe1ttur"},{term:"superlative",icelandic:"efsta stig"},{term:"supine",icelandic:"sagnb\xf3t"},{term:"syncope",icelandic:"brottfall"},{term:"third person",icelandic:"\xferi\xf0ja pers\xf3na"},{term:"transitive",icelandic:"\xe1hrifss\xf6gn"},{term:"transitive verb",icelandic:"\xe1hrifss\xf6gn"},{term:"intransitive verb",icelandic:"\xe1hrifslaus s\xf6gn"},{term:"weak",icelandic:"veik beyging"},{term:"weak verb",icelandic:"veik s\xf6gn"},{term:"word order",icelandic:"or\xf0ar\xf6\xf0"}]}},5285:(e,t,n)=>{"use strict";n.r(t),n.d(t,{assets:()=>m,contentTitle:()=>s,default:()=>d,frontMatter:()=>o,metadata:()=>u,toc:()=>c});var a=n(7462),l=(n(7294),n(3905)),r=n(1333),i=n(6195);const o={id:"accusative",title:"Accusative",description:"An explanation of the accusative case in Icelandic. Find out how to use it and how to form it."},s=void 0,u={unversionedId:"nouns/accusative",id:"nouns/accusative",title:"Accusative",description:"An explanation of the accusative case in Icelandic. Find out how to use it and how to form it.",source:"@site/docs/nouns/accusative.md",sourceDirName:"nouns",slug:"/nouns/accusative",permalink:"/is/docs/nouns/accusative",draft:!1,tags:[],version:"current",frontMatter:{id:"accusative",title:"Accusative",description:"An explanation of the accusative case in Icelandic. Find out how to use it and how to form it."},sidebar:"someSidebar",previous:{title:"Introduction to case",permalink:"/is/docs/nouns/case"},next:{title:"Dative",permalink:"/is/docs/nouns/dative"}},m={},c=[{value:"Function",id:"function",level:2},{value:"Typical function",id:"typical-function",level:3},{value:"Other uses",id:"other-uses",level:3},{value:"Prepositions",id:"prepositions",level:4},{value:"Impersonal verbs",id:"impersonal-verbs",level:4},{value:"Time expressions with durations",id:"time-expressions-with-durations",level:4},{value:"Formation",id:"formation",level:2},{value:"Singular",id:"singular",level:3},{value:"Masculine",id:"masculine",level:4},{value:"Feminine",id:"feminine",level:4},{value:"Neuter",id:"neuter",level:4},{value:"Plural",id:"plural",level:3},{value:"Masculine",id:"masculine-1",level:4},{value:"Feminine and neuter",id:"feminine-and-neuter",level:4}],k={toc:c},p="wrapper";function d(e){let{components:t,...n}=e;return(0,l.kt)(p,(0,a.Z)({},k,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"function"},"Function"),(0,l.kt)("h3",{id:"typical-function"},"Typical function"),(0,l.kt)("p",null,"The ",(0,l.kt)("strong",{parentName:"p"},(0,l.kt)(r.R,{term:"accusative",display:"accusative case",mdxType:"Term"}))," is typically used to indicate the \u201cpatient\u201d of an action. The patient is basically the object, person or idea that undergoes the action being performed in the sentence. Let\u2019s look at some examples:"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},(0,l.kt)("em",{parentName:"p"},"Krakkinn bor\xf0ar ",(0,l.kt)("strong",{parentName:"em"},"sm\xe1k\xf6kuna"),".",(0,l.kt)("br",null),"J\xf3n keyrir ",(0,l.kt)("strong",{parentName:"em"},"b\xedlinn"),".",(0,l.kt)("br",null),"Mamma kaupir ",(0,l.kt)("strong",{parentName:"em"},"fisk")," og ",(0,l.kt)("strong",{parentName:"em"},"kart\xf6flur"),"."))),(0,l.kt)("p",null,"All the words in bold are in the accusative. "),(0,l.kt)("p",null,"In the first example, ",(0,l.kt)("em",{parentName:"p"},"sm\xe1k\xf6kuna")," \u201cthe cookie\u201d is undergoing the action of being eaten. We show that the cookie is the thing being eaten, and not ",(0,l.kt)("em",{parentName:"p"},"krakkinn")," \u201cthe kid\u201d, by putting the word ",(0,l.kt)("em",{parentName:"p"},"sm\xe1kakan")," in the accusative."),(0,l.kt)("p",null,"It\u2019s the same idea in the second example. ",(0,l.kt)("em",{parentName:"p"},"B\xedlinn")," \u201cthe car\u201d is the thing being driven, so it goes into the accusative. In the last example, ",(0,l.kt)("em",{parentName:"p"},"fisk")," \u201cfish\u201d and ",(0,l.kt)("em",{parentName:"p"},"kart\xf6flur")," \u201cpotatoes\u201d are being bought, so they are also in the accusative."),(0,l.kt)("admonition",{title:"Word order",type:"info"},(0,l.kt)("p",{parentName:"admonition"},"Languages without cases, like English, typically indicate what is being done to who with word order. For example, \u201cthe kid eats the cookie\u201d doesn\u2019t mean the same thing as \u201cthe cookie eats the kid\u201d."),(0,l.kt)("p",{parentName:"admonition"},"Because Icelandic has cases, we can be a lot more flexible with the word order. So ",(0,l.kt)("em",{parentName:"p"},"krakkinn bor\xf0ar sm\xe1k\xf6kuna")," means the same thing as ",(0,l.kt)("em",{parentName:"p"},"sm\xe1k\xf6kuna bor\xf0ar krakkinn"),". This is because ",(0,l.kt)("em",{parentName:"p"},"sm\xe1k\xf6kuna")," is the accusative, and ",(0,l.kt)("em",{parentName:"p"},"krakkinn"),", the doer of the action, is in the nominative."),(0,l.kt)("p",{parentName:"admonition"},"The normal word order in Icelandic is the same as in English, but it can sometimes be changed around, especially in formal writing or poetry.")),(0,l.kt)("admonition",{title:"Pro explanation",type:"tip"},(0,l.kt)("p",{parentName:"admonition"},"The accusative normally indicates the ",(0,l.kt)("strong",{parentName:"p"},"direct object")," of a verb.")),(0,l.kt)("h3",{id:"other-uses"},"Other uses"),(0,l.kt)("h4",{id:"prepositions"},"Prepositions"),(0,l.kt)("p",null,"Prepositions can take the accusative case:"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},(0,l.kt)("em",{parentName:"p"},"\xc9g fer \xe1 ",(0,l.kt)("strong",{parentName:"em"},"kaffih\xfas"),".",(0,l.kt)("br",null),"Vi\xf0 t\xf6lu\xf0um saman um ",(0,l.kt)("strong",{parentName:"em"},"vinnuna"),".",(0,l.kt)("br",null),"El\xedn f\xf3r me\xf0 ",(0,l.kt)("strong",{parentName:"em"},"krakkana")," \xed sk\xf3lann."))),(0,l.kt)("p",null,"The prepositions ",(0,l.kt)("em",{parentName:"p"},"\xe1")," \u201con\u201d, ",(0,l.kt)("em",{parentName:"p"},"\xed")," \u201cin\u201d, ",(0,l.kt)("em",{parentName:"p"},"undir")," \u201cunder\u201d and ",(0,l.kt)("em",{parentName:"p"},"yfir")," \u201cover\u201d can take either the accusative or the dative depending on whether there is motion or lack of motion in a sentence. For an explanation of this, see ",(0,l.kt)("em",{parentName:"p"},(0,l.kt)("a",{parentName:"em",href:"../prepositions/a-i-undir-yfir"},"\xe1, \xed, undir, yfir")),"."),(0,l.kt)("p",null,"Whilst the prepositions ",(0,l.kt)("em",{parentName:"p"},"fyrir")," \u201cfor, before, in front of\u201d, ",(0,l.kt)("em",{parentName:"p"},"me\xf0")," \u201cwith\u201d and ",(0,l.kt)("em",{parentName:"p"},"vi\xf0")," \u201cat, next to\u201d can take either accusative or dative too, the rules for them aren\u2019t to do with motion or lack of motion. See ",(0,l.kt)("em",{parentName:"p"},(0,l.kt)("a",{parentName:"em",href:"../prepositions/fyrir"},"fyrir")),", ",(0,l.kt)("em",{parentName:"p"},(0,l.kt)("a",{parentName:"em",href:"../prepositions/me%C3%B0"},"me\xf0"))," and ",(0,l.kt)("em",{parentName:"p"},(0,l.kt)("a",{parentName:"em",href:"../prepositions/vi%C3%B0"},"vi\xf0"))," respectively for explanations."),(0,l.kt)("p",null,"Finally, there are prepositions like ",(0,l.kt)("em",{parentName:"p"},"um")," and ",(0,l.kt)("em",{parentName:"p"},"gegnum")," that always take the accusative. See a ",(0,l.kt)("a",{parentName:"p",href:"/is/docs/prepositions/governing-accusative"},"list of prepositions that govern the accusative"),"."),(0,l.kt)("h4",{id:"impersonal-verbs"},"Impersonal verbs"),(0,l.kt)("p",null,"Normally the subject of a sentence is in the nominative. But certain verbs require their subject to be in a different case, and sometimes that\u2019s the accusative:"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},(0,l.kt)("em",{parentName:"p"},(0,l.kt)("strong",{parentName:"em"},"Mig")," langar \xed \xeds.",(0,l.kt)("br",null),"Vantar ",(0,l.kt)("strong",{parentName:"em"},"\xfeig")," ekki n\xfdja sk\xf3?"))),(0,l.kt)("p",null,"See a ",(0,l.kt)("a",{parentName:"p",href:"../reference/impersonal#accusative"},"list of verbs with an accusative subject"),"."),(0,l.kt)("h4",{id:"time-expressions-with-durations"},"Time expressions with durations"),(0,l.kt)("p",null,"Expressions of time often involve a preposition, for example ",(0,l.kt)("em",{parentName:"p"},"\xed dag")," \u201ctoday\u201d or ",(0,l.kt)("em",{parentName:"p"},"\xe1 morgun")," \u201ctomorrow\u201d. That preposition can take either the accusative or dative case, and there\u2019s not really much logic as to when which case is used."),(0,l.kt)("p",null,"Some time expressions involving durations don\u2019t have any prepositions. In this situation, the time expression will be in the accusative:"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},(0,l.kt)("em",{parentName:"p"},"Stef\xe1n vinnur ",(0,l.kt)("strong",{parentName:"em"},"alla daga")," til kl. 18.",(0,l.kt)("br",null),"Vi\xf0 bjuggum ",(0,l.kt)("strong",{parentName:"em"},"m\xf6rg \xe1r")," \xe1 \xcdsafir\xf0i.",(0,l.kt)("br",null),"\xc9g var ",(0,l.kt)("strong",{parentName:"em"},"fj\xf3ra t\xedma")," a\xf0 \xfevo b\xedlinn \xed g\xe6r."))),(0,l.kt)(i.$,{mdxType:"PromoBanner"}),(0,l.kt)("h2",{id:"formation"},"Formation"),(0,l.kt)("h3",{id:"singular"},"Singular"),(0,l.kt)("h4",{id:"masculine"},"Masculine"),(0,l.kt)("p",null,"To form the accusative singular of masculine nouns, follow the rules below."),(0,l.kt)("table",null,(0,l.kt)("tbody",null,(0,l.kt)("tr",null,(0,l.kt)("th",{valign:"top"},"\ud83d\udcaa\xa0Strong"),(0,l.kt)("td",null,"Remove the ending",(0,l.kt)("table",{class:"clear"},(0,l.kt)("tbody",null,(0,l.kt)("tr",null,(0,l.kt)("td",{width:"150px"},(0,l.kt)("em",null,"hest"),"|",(0,l.kt)("strong",null,(0,l.kt)("em",null,"ur"))),(0,l.kt)("td",null,"\u2192\xa0",(0,l.kt)("em",null,"hest"))),(0,l.kt)("tr",null,(0,l.kt)("td",null,(0,l.kt)("em",null,"l\xe6kni"),"|",(0,l.kt)("strong",null,(0,l.kt)("em",null,"r"))),(0,l.kt)("td",null,"\u2192\xa0",(0,l.kt)("em",null,"l\xe6kni"))),(0,l.kt)("tr",null,(0,l.kt)("td",null,(0,l.kt)("em",null,"b\xedl"),"|",(0,l.kt)("strong",null,(0,l.kt)("em",null,"l"))),(0,l.kt)("td",null,"\u2192\xa0",(0,l.kt)("em",null,"b\xedl"))),(0,l.kt)("tr",null,(0,l.kt)("td",null,(0,l.kt)("em",null,"stein"),"|",(0,l.kt)("strong",null,(0,l.kt)("em",null,"n"))),(0,l.kt)("td",null,"\u2192\xa0",(0,l.kt)("em",null,"stein"))))))),(0,l.kt)("tr",null,(0,l.kt)("th",{valign:"top"},"\ud83e\udd40\xa0Weak"),(0,l.kt)("td",null,"Change ",(0,l.kt)("em",null,"-i")," \u2192 ",(0,l.kt)("strong",null,(0,l.kt)("em",null,"-a")),(0,l.kt)("table",{class:"clear"},(0,l.kt)("tbody",null,(0,l.kt)("tr",null,(0,l.kt)("td",{width:"150px"},(0,l.kt)("em",null,"krakki")),(0,l.kt)("td",null,"\u2192\xa0",(0,l.kt)("em",null,"krakk",(0,l.kt)("strong",null,"a")))),(0,l.kt)("tr",null,(0,l.kt)("td",{width:"150px"},(0,l.kt)("em",null,"lampi")),(0,l.kt)("td",null,"\u2192\xa0",(0,l.kt)("em",null,"lamp",(0,l.kt)("strong",null,"a")))),(0,l.kt)("tr",null,(0,l.kt)("td",{width:"150px"},(0,l.kt)("em",null,"penni")),(0,l.kt)("td",null,"\u2192\xa0",(0,l.kt)("em",null,"penn",(0,l.kt)("strong",null,"a")))))))))),(0,l.kt)("p",null,"The rule for strong nouns is simply to remove the ending. Some notes about endings of strong masculine nouns:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"For ",(0,l.kt)("strong",{parentName:"li"},(0,l.kt)("em",{parentName:"strong"},"-ir")),", only the ",(0,l.kt)("em",{parentName:"li"},"-r")," is removable in the accusative, the ",(0,l.kt)("em",{parentName:"li"},"i")," remains."),(0,l.kt)("li",{parentName:"ul"},"For ",(0,l.kt)("strong",{parentName:"li"},(0,l.kt)("em",{parentName:"strong"},"-ll"))," and ",(0,l.kt)("strong",{parentName:"li"},(0,l.kt)("em",{parentName:"strong"},"-nn")),", only the second consonant is removable. The first consonant is part of the stem of the word.")),(0,l.kt)("p",null,"For weak nouns, change the final ",(0,l.kt)("em",{parentName:"p"},"-i")," to ",(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("em",{parentName:"strong"},"-a")),"."),(0,l.kt)("h4",{id:"feminine"},"Feminine"),(0,l.kt)("p",null,"To form the accusative singular of feminine nouns, follow the rules below."),(0,l.kt)("table",null,(0,l.kt)("tbody",null,(0,l.kt)("tr",null,(0,l.kt)("th",{valign:"top"},"\ud83d\udcaa\xa0Strong"),(0,l.kt)("td",null,"No change",(0,l.kt)("table",{class:"clear"},(0,l.kt)("tbody",null,(0,l.kt)("tr",null,(0,l.kt)("td",{width:"150px"},(0,l.kt)("em",null,"r\xf3s")),(0,l.kt)("td",null,"\u2192\xa0",(0,l.kt)("em",null,"r\xf3s"))),(0,l.kt)("tr",null,(0,l.kt)("td",null,(0,l.kt)("em",null,"mj\xf3lk")),(0,l.kt)("td",null,"\u2192\xa0",(0,l.kt)("em",null,"mj\xf3lk"))),(0,l.kt)("tr",null,(0,l.kt)("td",null,(0,l.kt)("em",null,"menntun")),(0,l.kt)("td",null,"\u2192\xa0",(0,l.kt)("em",null,"menntun"))),(0,l.kt)("tr",null,(0,l.kt)("td",{colspan:"2"},"But:")),(0,l.kt)("tr",null,(0,l.kt)("td",{width:"150px"},(0,l.kt)("em",null,"\xe6fing")),(0,l.kt)("td",null,"\u2192\xa0",(0,l.kt)("em",null,"\xe6fing",(0,l.kt)("strong",null,"u")))))))),(0,l.kt)("tr",null,(0,l.kt)("th",{valign:"top"},"\ud83e\udd40\xa0Weak"),(0,l.kt)("td",null,"Change ",(0,l.kt)("em",null,"-a")," \u2192 ",(0,l.kt)("strong",null,(0,l.kt)("em",null,"-u")),"\xa0\xa0",(0,l.kt)("small",null,"(+U-shift)"),(0,l.kt)("table",{class:"clear"},(0,l.kt)("tbody",null,(0,l.kt)("tr",null,(0,l.kt)("td",{width:"150px"},(0,l.kt)("em",null,"kona")),(0,l.kt)("td",null,"\u2192\xa0",(0,l.kt)("em",null,"kon",(0,l.kt)("strong",null,"u")))),(0,l.kt)("tr",null,(0,l.kt)("td",null,(0,l.kt)("em",null,"kaka")),(0,l.kt)("td",null,"\u2192\xa0\u26a0\ufe0f\xa0",(0,l.kt)("em",null,"k\xf6k",(0,l.kt)("strong",null,"u")))))))))),(0,l.kt)("p",null,"Strong feminine nouns are dead easy in the accusative, because they\u2019re exactly the same as the nominative! The only exceptions are:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Nouns that end in ",(0,l.kt)("strong",{parentName:"li"},(0,l.kt)("em",{parentName:"strong"},"-ing")),", which get a final ",(0,l.kt)("em",{parentName:"li"},"-u")," in the accusative."),(0,l.kt)("li",{parentName:"ul"},"Certain female names, such as ",(0,l.kt)("em",{parentName:"li"},"Dagn\xfd")," og ",(0,l.kt)("em",{parentName:"li"},"Sigr\xed\xf0ur"),", which become ",(0,l.kt)("em",{parentName:"li"},"Dagn\xfdj",(0,l.kt)("strong",{parentName:"em"},"u"))," and ",(0,l.kt)("em",{parentName:"li"},"Sigr\xed\xf0",(0,l.kt)("strong",{parentName:"em"},"i"))," in the accusative. For more examples, see ",(0,l.kt)("a",{parentName:"li",href:"personal-names"},"Personal names"),".")),(0,l.kt)("p",null,"For weak feminine nouns, change the final ",(0,l.kt)("em",{parentName:"p"},"-a")," to ",(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("em",{parentName:"strong"},"-u")),". "),(0,l.kt)("p",null,"A really important point: this final ",(0,l.kt)("em",{parentName:"p"},"-u")," causes U-shift where applicable, meaning that an ",(0,l.kt)("em",{parentName:"p"},"a")," in the stem changes to ",(0,l.kt)("em",{parentName:"p"},"\xf6")," or ",(0,l.kt)("em",{parentName:"p"},"u"),". For an explanation of this process, see ",(0,l.kt)("a",{parentName:"p",href:"../sound-changes/u-shift"},"U-shift"),"."),(0,l.kt)("h4",{id:"neuter"},"Neuter"),(0,l.kt)("p",null,"The accusative of all neuter nouns is the same as the nominative."),(0,l.kt)("table",null,(0,l.kt)("tbody",null,(0,l.kt)("tr",null,(0,l.kt)("th",{valign:"top"},"\ud83d\udcaa\xa0Strong"),(0,l.kt)("td",null,"No change",(0,l.kt)("table",{class:"clear"},(0,l.kt)("tbody",null,(0,l.kt)("tr",null,(0,l.kt)("td",{width:"150px"},(0,l.kt)("em",null,"land")),(0,l.kt)("td",null,"\u2192\xa0",(0,l.kt)("em",null,"land"))),(0,l.kt)("tr",null,(0,l.kt)("td",null,(0,l.kt)("em",null,"skip")),(0,l.kt)("td",null,"\u2192\xa0",(0,l.kt)("em",null,"skip"))),(0,l.kt)("tr",null,(0,l.kt)("td",null,(0,l.kt)("em",null,"tr\xe9")),(0,l.kt)("td",null,"\u2192\xa0",(0,l.kt)("em",null,"tr\xe9"))))))),(0,l.kt)("tr",null,(0,l.kt)("th",{valign:"top"},"\ud83e\udd40\xa0Weak"),(0,l.kt)("td",null,"No change",(0,l.kt)("table",{class:"clear"},(0,l.kt)("tbody",null,(0,l.kt)("tr",null,(0,l.kt)("td",{width:"150px"},(0,l.kt)("em",null,"auga")),(0,l.kt)("td",null,"\u2192\xa0",(0,l.kt)("em",null,"auga"))),(0,l.kt)("tr",null,(0,l.kt)("td",null,(0,l.kt)("em",null,"eyra")),(0,l.kt)("td",null,"\u2192\xa0",(0,l.kt)("em",null,"eyra"))))))))),(0,l.kt)("p",null,"That\u2019s right: neuter nouns are exactly the same in the nominative and the accusative. "),(0,l.kt)("p",null,"This is what distinguishes weak neuter nouns from weak feminine nouns (which both end in ",(0,l.kt)("em",{parentName:"p"},"\u2011","a")," in the nominative). Weak feminine nouns get ",(0,l.kt)("em",{parentName:"p"},"\u2011","u")," in the accusative, whereas weak neuter nouns keep their ",(0,l.kt)("em",{parentName:"p"},"\u2011","a"),"."),(0,l.kt)("h3",{id:"plural"},"Plural"),(0,l.kt)("h4",{id:"masculine-1"},"Masculine"),(0,l.kt)("p",null,"To form the accusative plural of a masculine noun, first find its ",(0,l.kt)("a",{parentName:"p",href:"number#masculine"},"plural form in the nominative"),". The rule is this:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"If the nominative plural ends in ",(0,l.kt)("em",{parentName:"li"},"\u2011","ar")," or ",(0,l.kt)("em",{parentName:"li"},"\u2011","ir"),", ",(0,l.kt)("strong",{parentName:"li"},"remove the final ",(0,l.kt)("em",{parentName:"strong"},"\u2011","r")),";"),(0,l.kt)("li",{parentName:"ul"},"If the nominative plural ends in ",(0,l.kt)("em",{parentName:"li"},"\u2011","ur"),", ",(0,l.kt)("strong",{parentName:"li"},"do nothing"),"! \ud83e\udd73")),(0,l.kt)("p",null,"Let\u2019s look at some examples:"),(0,l.kt)("figure",null,(0,l.kt)("table",null,(0,l.kt)("thead",null,(0,l.kt)("tr",null,(0,l.kt)("th",null,"\xa0"),(0,l.kt)("th",{colSpan:"2"},"Nominative"),(0,l.kt)("th",null,"Accusative"))),(0,l.kt)("tbody",null,(0,l.kt)("tr",null,(0,l.kt)("th",{valign:"top"},(0,l.kt)("em",null,"\u2011ar")),(0,l.kt)("td",{width:"40%"},(0,l.kt)("em",null,"hestar, l\xe6knar",(0,l.kt)("br",null),"b\xedlar, gafflar, speglar, steinar",(0,l.kt)("br",null),"fossar, fuglar, pr\xf3fessorar",(0,l.kt)("br",null),"pennar, krakkar")),(0,l.kt)("th",{rowSpan:"2"},"Remove\xa0",(0,l.kt)("em",null,"\u2011r"),(0,l.kt)("br",null),"\u2192"),(0,l.kt)("td",{width:"40%"},(0,l.kt)("em",null,"hest",(0,l.kt)("strong",null,"a"),", l\xe6kn",(0,l.kt)("strong",null,"a"),(0,l.kt)("br",null),"b\xedl",(0,l.kt)("strong",null,"a"),", gaffl",(0,l.kt)("strong",null,"a"),", spegl",(0,l.kt)("strong",null,"a"),", stein",(0,l.kt)("strong",null,"a"),(0,l.kt)("br",null),"foss",(0,l.kt)("strong",null,"a"),", fugl",(0,l.kt)("strong",null,"a"),", pr\xf3fessor",(0,l.kt)("strong",null,"a"),(0,l.kt)("br",null),"penn",(0,l.kt)("strong",null,"a"),", krakk",(0,l.kt)("strong",null,"a")))),(0,l.kt)("tr",null,(0,l.kt)("th",{valign:"top"},(0,l.kt)("em",null,"\u2011ir")),(0,l.kt)("td",null,(0,l.kt)("em",null,"sta\xf0ir, gestir, hvalir",(0,l.kt)("br",null),"Danir")),(0,l.kt)("td",null,(0,l.kt)("em",null,"sta\xf0",(0,l.kt)("strong",null,"i"),", gest",(0,l.kt)("strong",null,"i"),", hval",(0,l.kt)("strong",null,"i"),(0,l.kt)("br",null),"Dan",(0,l.kt)("strong",null,"i")))),(0,l.kt)("tr",null,(0,l.kt)("th",{valign:"top"},(0,l.kt)("em",null,"\u2011ur")),(0,l.kt)("td",null,(0,l.kt)("em",null,"nemendur, hlustendur",(0,l.kt)("br",null),"br\xe6\xf0ur, fe\xf0ur",(0,l.kt)("br",null),"b\xe6ndur, fr\xe6ndur")),(0,l.kt)("th",null,"Do\xa0nothing",(0,l.kt)("br",null),"\u2192"),(0,l.kt)("td",null,(0,l.kt)("em",null,"nemendur, hlustendur",(0,l.kt)("br",null),"br\xe6\xf0ur, fe\xf0ur",(0,l.kt)("br",null),"b\xe6ndur, fr\xe6ndur")))))),(0,l.kt)("p",null,"Not too complicated really! \ud83d\ude01"),(0,l.kt)("h4",{id:"feminine-and-neuter"},"Feminine and neuter"),(0,l.kt)("p",null,"Feminine and neuter nouns are both ",(0,l.kt)("strong",{parentName:"p"},"exactly the same in the nominative and accusative"),". One less rule to remember! "),(0,l.kt)("admonition",{type:"tip"},(0,l.kt)("p",{parentName:"admonition"},"Find out how to form the plural of ",(0,l.kt)("a",{parentName:"p",href:"number#feminine"},"feminine nouns")," and ",(0,l.kt)("a",{parentName:"p",href:"number#neuter"},"neuter nouns"),".")))}d.isMDXComponent=!0}}]);