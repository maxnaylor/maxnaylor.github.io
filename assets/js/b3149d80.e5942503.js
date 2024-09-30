(self.webpackChunkgramref=self.webpackChunkgramref||[]).push([[9326],{3905:(e,t,a)=>{"use strict";a.d(t,{Zo:()=>m,kt:()=>h});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},s=Object.keys(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var o=n.createContext({}),l=function(e){var t=n.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},m=function(e){var t=l(e.components);return n.createElement(o.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},k=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,s=e.originalType,o=e.parentName,m=p(e,["components","mdxType","originalType","parentName"]),c=l(a),k=r,h=c["".concat(o,".").concat(k)]||c[k]||d[k]||s;return a?n.createElement(h,i(i({ref:t},m),{},{components:a})):n.createElement(h,i({ref:t},m))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=a.length,i=new Array(s);i[0]=k;var p={};for(var o in t)hasOwnProperty.call(t,o)&&(p[o]=t[o]);p.originalType=e,p[c]="string"==typeof e?e:r,i[1]=p;for(var l=2;l<s;l++)i[l]=a[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}k.displayName="MDXCreateElement"},1333:(e,t,a)=>{"use strict";a.d(t,{R:()=>i});var n=a(7294),r=a(4052),s=a.n(r);class i extends n.Component{constructor(e){super(e),this.state={termWidth:""}}componentDidMount(){const e=document.getElementById("term-"+this.props.term).clientWidth,t=document.getElementById("tooltip-"+this.props.term).clientWidth;this.setState({termWidth:e,tooltipWidth:t})}offset(){return 0-this.state.tooltipWidth/2+this.state.termWidth/2+"px"}displayTerm(){let e;return e=this.props.display?this.props.display:this.props.term,e}getIcelandicTerm(){let e;return e=s().terms.filter((e=>e.term.includes(this.props.term.toLowerCase()))),e[0].icelandic}render(){return n.createElement(n.Fragment,null,n.createElement("span",{className:"term",id:"term-"+this.props.term},this.displayTerm(),n.createElement("span",{id:"tooltip-"+this.props.term,className:"tooltip",style:{left:this.offset()}},"\ud83c\uddee\ud83c\uddf8 ",this.getIcelandicTerm())))}}},4052:e=>{e.exports={terms:[,{term:"verb",icelandic:"s\xf6gn"},{term:"object",icelandic:"andlag"},{term:"phrase",icelandic:"li\xf0ur"},{term:"pronoun",icelandic:"fornafn"},{term:"mood",icelandic:"h\xe1ttur"},{term:"accusative",icelandic:"\xfeolfall"},{term:"active voice",icelandic:"germynd"},{term:"adjective",icelandic:"l\xfdsingaror\xf0"},{term:"adjective phrase",icelandic:"l\xfdsingaror\xf0sli\xf0ur"},{term:"adverb",icelandic:"atviksor\xf0"},{term:"verb phrase",icelandic:"sagnli\xf0ur"},{term:"adverb phrase",icelandic:"atviksli\xf0ur"},{term:"aspiration",icelandic:"fr\xe1bl\xe1stur"},{term:"case",icelandic:"fall"},{term:"comparative",icelandic:"mi\xf0stig"},{term:"complement",icelandic:"fyllili\xf0ur"},{term:"consonant",icelandic:"samhlj\xf3\xf0"},{term:"dative",icelandic:"\xfe\xe1gufall"},{term:"definite article",icelandic:"\xe1kve\xf0inn greinir"},{term:"demonstrative pronoun",icelandic:"\xe1bendingarfornafn"},{term:"determiner",icelandic:"\xe1kv\xe6\xf0isor\xf0"},{term:"devoicing",icelandic:"afr\xf6ddun"},{term:"diphthong",icelandic:"tv\xedhlj\xf3\xf0"},{term:"direct object",icelandic:"beint andlag"},{term:"ending",icelandic:"ending"},{term:"feminine",icelandic:"kvenkyn"},{term:"first person",icelandic:"fyrsta pers\xf3na"},{term:"gender",icelandic:"kyn"},{term:"genitive",icelandic:"eignarfall"},{term:"head",icelandic:"h\xf6fu\xf0"},{term:"indefinite pronoun",icelandic:"\xf3\xe1kve\xf0i\xf0 fornafn"},{term:"indicative",icelandic:"frams\xf6guh\xe1ttur"},{term:"indirect object",icelandic:"\xf3beint andlag"},{term:"imperative",icelandic:"bo\xf0h\xe1ttur"},{term:"infinitive",icelandic:"nafnh\xe1ttur"},{term:"masculine",icelandic:"karlkyn"},{term:"middle voice",icelandic:"mi\xf0mynd"},{term:"modal verb",icelandic:"hj\xe1lpars\xf6gn"},{term:"monophthong",icelandic:"einhlj\xf3\xf0"},{term:"neuter",icelandic:"hvorugkyn"},{term:"nominative",icelandic:"nefnifall"},{term:"noun phrase",icelandic:"nafnli\xf0ur"},{term:"passive voice",icelandic:"\xfeolmynd"},{term:"past participle",icelandic:"l\xfdsingarh\xe1ttur \xfe\xe1t\xed\xf0ar"},{term:"past tense",icelandic:"\xfe\xe1t\xed\xf0"},{term:"personal pronoun",icelandic:"pers\xf3nufornafn"},{term:"plural",icelandic:"fleirtala"},{term:"positive",icelandic:"frumstig"},{term:"preaspiration",icelandic:"a\xf0bl\xe1stur"},{term:"preposition",icelandic:"forsetning"},{term:"prepositional phrase",icelandic:"forsetningarli\xf0ur"},{term:"principal parts",icelandic:"kennimyndir"},{term:"reflexive pronoun",icelandic:"afturbeygt fornafn"},{term:"possessive pronoun",icelandic:"eignarfornafn"},{term:"present participle",icelandic:"l\xfdsingarh\xe1ttur n\xfat\xed\xf0ar"},{term:"present tense",icelandic:"n\xfat\xed\xf0"},{term:"second person",icelandic:"\xf6nnur pers\xf3na"},{term:"sentence",icelandic:"setning"},{term:"singular",icelandic:"eintala"},{term:"stem",icelandic:"stofn"},{term:"strong",icelandic:"sterk beyging"},{term:"strong verb",icelandic:"sterk s\xf6gn"},{term:"stylistic fronting",icelandic:"st\xedlf\xe6rsla"},{term:"subject",icelandic:"frumlag"},{term:"subjunctive",icelandic:"vi\xf0tengingarh\xe1ttur"},{term:"superlative",icelandic:"efsta stig"},{term:"supine",icelandic:"sagnb\xf3t"},{term:"third person",icelandic:"\xferi\xf0ja pers\xf3na"},{term:"transitive",icelandic:"\xe1hrifss\xf6gn"},{term:"transitive verb",icelandic:"\xe1hrifss\xf6gn"},{term:"intransitive verb",icelandic:"\xe1hrifslaus s\xf6gn"},{term:"weak",icelandic:"veik beyging"},{term:"weak verb",icelandic:"veik s\xf6gn"},{term:"word order",icelandic:"or\xf0ar\xf6\xf0"}]}},7359:(e,t,a)=>{"use strict";a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>p,default:()=>k,frontMatter:()=>i,metadata:()=>o,toc:()=>m});var n=a(7462),r=(a(7294),a(3905)),s=a(1333);const i={id:"syntax-intro",title:"Introduction to syntax",description:"An explanation of word order, or syntactic rules, in Icelandic."},p=void 0,o={unversionedId:"syntax/syntax-intro",id:"syntax/syntax-intro",title:"Introduction to syntax",description:"An explanation of word order, or syntactic rules, in Icelandic.",source:"@site/docs/syntax/intro.md",sourceDirName:"syntax",slug:"/syntax/syntax-intro",permalink:"/docs/syntax/syntax-intro",draft:!1,tags:[],version:"current",frontMatter:{id:"syntax-intro",title:"Introduction to syntax",description:"An explanation of word order, or syntactic rules, in Icelandic."},sidebar:"someSidebar",previous:{title:"Place and direction",permalink:"/docs/adverbs/place-direction"},next:{title:"U-shift",permalink:"/docs/sound-changes/u-shift"}},l={},m=[{value:"Sentence structure",id:"sentence-structure",level:2},{value:"The verb is king",id:"the-verb-is-king",level:3},{value:"Phrases",id:"phrases",level:2},{value:"Verb phrases",id:"verb-phrases",level:3},{value:"Noun phrases",id:"noun-phrases",level:3},{value:"Adjective phrases",id:"adjective-phrases",level:3},{value:"Adverb phrases",id:"adverb-phrases",level:3},{value:"Prepositional phrases",id:"prepositional-phrases",level:3}],c={toc:m},d="wrapper";function k(e){let{components:t,...a}=e;return(0,r.kt)(d,(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"In the most basic of terms, the syntax of Icelandic boils down to ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)(s.R,{term:"word order",mdxType:"Term"})),". Like many other languages, Icelandic has a default word order of ",(0,r.kt)("strong",{parentName:"p"},"subject\u2013verb\u2013object")," or ",(0,r.kt)("strong",{parentName:"p"},"SVO"),". Let\u2019s take a couple of simple sentences to see this in action:"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("em",{parentName:"p"},(0,r.kt)("span",{className:"highlighter"},"Hundurinn")," ",(0,r.kt)("span",{className:"highlighter orange"},"bor\xf0ar")," ",(0,r.kt)("span",{className:"highlighter turquoise"},"pitsuna"),"."),(0,r.kt)("br",null),(0,r.kt)("em",{parentName:"p"},(0,r.kt)("span",{className:"highlighter"},"\xc9g")," ",(0,r.kt)("span",{className:"highlighter orange"},"tala")," ",(0,r.kt)("span",{className:"highlighter turquoise"},"\xfe\xfdsku og sp\xe6nsku"),"."))),(0,r.kt)("div",{className:"wrapper"},(0,r.kt)("ul",{className:"legend"},(0,r.kt)("li",{className:"blue"},"Subject"),(0,r.kt)("li",{className:"orange"},"Verb"),(0,r.kt)("li",{className:"turquoise"},"Object"))),(0,r.kt)("p",null,"We need to be careful about how we define a \u201cword\u201d when talking about syntax. As you can see in the second example above, the object \u201c\xfe\xfdsku og sp\xe6nsku\u201d is made up of more than one word. We therefore normally refer to elements of the sentence as ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)(s.R,{term:"phrase",display:"phrases",mdxType:"Term"}))," rather than \u201cwords\u201d."),(0,r.kt)("p",null,"Icelandic has several different kinds of phrases, each corresponding to a different word class:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("a",{parentName:"strong",href:"#verb-phrases"},"verb phrases")),","),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("a",{parentName:"strong",href:"#noun-phrases"},"noun phrases"))," (personal pronouns are included here too),"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("a",{parentName:"strong",href:"#adjective-phrases"},"adjective phrases"))," (demonstrative pronouns are included here too),"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("a",{parentName:"strong",href:"#adverb-phrases"},"adverb phrases")),","),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("a",{parentName:"strong",href:"#prepositional-phrases"},"prepositional phrases")),".")),(0,r.kt)("p",null,"Each of these phrases has a ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)(s.R,{term:"head",mdxType:"Term"})),", which can be thought of as the main word in the phrase. Together, phrases are combined to form a ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)(s.R,{term:"sentence",mdxType:"Term"})),"."),(0,r.kt)("h2",{id:"sentence-structure"},"Sentence structure"),(0,r.kt)("p",null,"At its simplest, an Icelandic sentence can consist of a ",(0,r.kt)("strong",{parentName:"p"},"single verb phrase"),":"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("em",{parentName:"p"},(0,r.kt)("strong",{parentName:"em"},"Rignir"),"?"))),(0,r.kt)("p",null,"That said, this isn\u2019t the most common type of sentence. Most sentences contain at least a ",(0,r.kt)(s.R,{term:"subject",mdxType:"Term"})," and a ",(0,r.kt)(s.R,{term:"verb",mdxType:"Term"}),", and often an ",(0,r.kt)(s.R,{term:"object",mdxType:"Term"}),". As we learnt above, the basic word order is subject\u2013verb\u2013object (SVO)."),(0,r.kt)("p",null,"\ud83e\ude84 Icelandic has a magical gift though, in the form of its case system. The core function of cases is to mark the relationship between the verb, its subject and its object or objects. What this means is that ",(0,r.kt)("strong",{parentName:"p"},"Icelandic syntax is very flexible")," compared to, for example, English. If we take our examples from above, we can easily rearrange the order of the subject and object without losing any meaning:"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("em",{parentName:"p"},(0,r.kt)("span",{className:"highlighter turquoise"},"Pitsuna")," ",(0,r.kt)("span",{className:"highlighter orange"},"bor\xf0ar")," ",(0,r.kt)("span",{className:"highlighter"},"hundurinn"),"."),(0,r.kt)("br",null),(0,r.kt)("em",{parentName:"p"},(0,r.kt)("span",{className:"highlighter turquoise"},"\xde\xfdsku og sp\xe6nsku")," ",(0,r.kt)("span",{className:"highlighter orange"},"tala")," ",(0,r.kt)("span",{className:"highlighter"},"\xe9g"),"."))),(0,r.kt)("div",{className:"wrapper"},(0,r.kt)("ul",{className:"legend"},(0,r.kt)("li",{className:"blue"},"Subject"),(0,r.kt)("li",{className:"orange"},"Verb"),(0,r.kt)("li",{className:"turquoise"},"Object"))),(0,r.kt)("p",null,"Think about how the meaning of these sentences would change if you followed this word order in English."),(0,r.kt)("p",null,"Now admittedly, this is not the most natural way of saying these sentences in Icelandic, and that\u2019s because our ",(0,r.kt)("em",{parentName:"p"},"default")," word order is SVO, rather than OVS. What we\u2019ve done here is emphasise the objects of the verbs by moving them to the start of the sentence. This is known as ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)(s.R,{term:"stylistic fronting",mdxType:"Term"}))," and is frequently used in formal writing."),(0,r.kt)("p",null,"What ",(0,r.kt)("em",{parentName:"p"},"hasn\u2019t")," moved here though is the verb, which brings us neatly onto our first core rule of Icelandic syntax."),(0,r.kt)("h3",{id:"the-verb-is-king"},"The verb is king"),(0,r.kt)("p",null,"Because an Icelandic sentence can consist of a single verb phrase on its own, we can really say that \ud83d\udc51 ",(0,r.kt)("strong",{parentName:"p"},"the verb is king"),". Think of the verb as the sun at the centre of the solar system that everything else orbits around."),(0,r.kt)("admonition",{title:"Golden rule",type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"In Icelandic, the verb phrase is ",(0,r.kt)("strong",{parentName:"p"},"always in second position")," in the sentence. This is known as the V2 rule.")),(0,r.kt)("p",null,"For a detailed explanation of this, see ",(0,r.kt)("a",{parentName:"p",href:"v2-rule"},"V2 rule"),"."),(0,r.kt)("h2",{id:"phrases"},"Phrases"),(0,r.kt)("p",null,"In this section, we\u2019ll look each type of phrase in turn. Remember, the \ud83d\udc64 ",(0,r.kt)("strong",{parentName:"p"},"head")," of the phrase is the \u201cmain word\u201d within it. A phrase can be as simple as a head and nothing else."),(0,r.kt)("p",null,"There are two more concepts we should get to grips with when analysing phrases: ",(0,r.kt)(s.R,{term:"complement",display:"complements",mdxType:"Term"})," and ",(0,r.kt)(s.R,{term:"determiner",display:"determiners",mdxType:"Term"}),"."),(0,r.kt)("p",null,"Complements give us \u2795 ",(0,r.kt)("strong",{parentName:"p"},"more information about something")," (in other words, they ",(0,r.kt)("em",{parentName:"p"},"complement")," the information we already have):"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("em",{parentName:"p"},"Ma\xf0ur ",(0,r.kt)("strong",{parentName:"em"},"\xed hvitum jakka")),".",(0,r.kt)("br",null),(0,r.kt)("em",{parentName:"p"},"H\xfan er a\xf0 tala ",(0,r.kt)("strong",{parentName:"em"},"um \xfeig"),"."),(0,r.kt)("br",null),(0,r.kt)("em",{parentName:"p"},"\xc9g gaf ",(0,r.kt)("strong",{parentName:"em"},"\xfe\xe9r")," ",(0,r.kt)("strong",{parentName:"em"},"peningana"),"."),(0,r.kt)("br",null))),(0,r.kt)("p",null,"Determiners \u2198\ufe0f ",(0,r.kt)("strong",{parentName:"p"},"narrow down what we\u2019re talking about")," to something specific. They are often adjectives or demonstrative pronouns:"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("em",{parentName:"p"},"\xc1tt \xfe\xfa ",(0,r.kt)("strong",{parentName:"em"},"\xfeennan")," frakka?"),(0,r.kt)("br",null),(0,r.kt)("em",{parentName:"p"},"Vi\xf0 keyptum ",(0,r.kt)("strong",{parentName:"em"},"rau\xf0a")," bolla."))),(0,r.kt)("p",null,"Both complements and determiners are often optional: the sentence will normally still be grammatical without them. However, most sentences contain both complements and determiners in some form."),(0,r.kt)("h3",{id:"verb-phrases"},"Verb phrases"),(0,r.kt)("p",null,"The head of a ",(0,r.kt)(s.R,{term:"verb phrase",mdxType:"Term"})," (",(0,r.kt)("span",{className:"phrase-badge"},"VP"),") is, unsurprisingly, a ",(0,r.kt)("strong",{parentName:"p"},"verb")," (",(0,r.kt)("em",{parentName:"p"},"talar"),", ",(0,r.kt)("em",{parentName:"p"},"hleypur"),"):"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("em",{parentName:"p"},"L\xf3a "),(0,r.kt)("strong",{parentName:"p"},"[",(0,r.kt)("span",{className:"phrase-badge"},"VP"),(0,r.kt)("em",{parentName:"strong"}," syngur"),"]"),".",(0,r.kt)("br",null))),(0,r.kt)("p",null,"Along with the head, a verb phrase can contain a complement that is either an ",(0,r.kt)("strong",{parentName:"p"},"object"),", in the form of a noun phrase  (",(0,r.kt)("span",{className:"phrase-badge"},"NP"),"):"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("em",{parentName:"p"},"Vi\xf0 "),"[",(0,r.kt)("span",{className:"phrase-badge"},"VP"),(0,r.kt)("em",{parentName:"p"}," b\xf6kum "),(0,r.kt)("strong",{parentName:"p"},"[",(0,r.kt)("span",{className:"phrase-badge"},"NP"),(0,r.kt)("em",{parentName:"strong"}," brau\xf0 og k\xf6kur"),"]"),"]",(0,r.kt)("em",{parentName:"p"},"."),(0,r.kt)("br",null),(0,r.kt)("em",{parentName:"p"},"\xc9g "),"[",(0,r.kt)("span",{className:"phrase-badge"},"VP"),(0,r.kt)("em",{parentName:"p"}," keypti "),(0,r.kt)("strong",{parentName:"p"},"[",(0,r.kt)("span",{className:"phrase-badge"},"NP"),(0,r.kt)("em",{parentName:"strong"}," gl\xe6n\xfdja t\xf6lvu"),"]"),"]",(0,r.kt)("em",{parentName:"p"},"."))),(0,r.kt)("p",null,"or a ",(0,r.kt)("strong",{parentName:"p"},"prepositional phrase")," (",(0,r.kt)("span",{className:"phrase-badge"},"PP"),"):"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("em",{parentName:"p"},"Konan "),"[",(0,r.kt)("span",{className:"phrase-badge"},"VP"),(0,r.kt)("em",{parentName:"p"}," leitar "),(0,r.kt)("strong",{parentName:"p"},"[",(0,r.kt)("span",{className:"phrase-badge"},"PP"),(0,r.kt)("em",{parentName:"strong"}," eftir a\xf0st\xf6\xf0"),"]"),"]",(0,r.kt)("em",{parentName:"p"},"."))),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"Some verbs can take, or even require, an object. These are known as ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)(s.R,{term:"transitive verb",display:"transitive verbs",mdxType:"Term"})),". Verbs that don\u2019t require an object are known as ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)(s.R,{term:"intransitive verb",display:"intransitive verbs",mdxType:"Term"})),".")),(0,r.kt)("h3",{id:"noun-phrases"},"Noun phrases"),(0,r.kt)("p",null,"The head of a ",(0,r.kt)(s.R,{term:"noun phrase",mdxType:"Term"})," (",(0,r.kt)("span",{className:"phrase-badge"},"NP"),") is either a ",(0,r.kt)("strong",{parentName:"p"},"noun")," (",(0,r.kt)("em",{parentName:"p"},"hestur"),", ",(0,r.kt)("em",{parentName:"p"},"b\xedll"),", ",(0,r.kt)("em",{parentName:"p"},"Mar\xeda"),") or a ",(0,r.kt)("strong",{parentName:"p"},"personal pronoun")," (",(0,r.kt)("em",{parentName:"p"},"hann"),", ",(0,r.kt)("em",{parentName:"p"},"\xfeau"),"):"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},"[",(0,r.kt)("span",{className:"phrase-badge"},"NP"),(0,r.kt)("em",{parentName:"strong"}," Mamma"),"]"),(0,r.kt)("em",{parentName:"p"}," er a\xf0\xa0prj\xf3na."),(0,r.kt)("br",null),(0,r.kt)("strong",{parentName:"p"},"[",(0,r.kt)("span",{className:"phrase-badge"},"NP"),(0,r.kt)("em",{parentName:"strong"}," Bilstj\xf3rinn"),"]"),(0,r.kt)("em",{parentName:"p"}," keyrir "),(0,r.kt)("strong",{parentName:"p"},"[",(0,r.kt)("span",{className:"phrase-badge"},"NP"),(0,r.kt)("em",{parentName:"strong"}," r\xfatuna"),"]"),(0,r.kt)("em",{parentName:"p"},"."),(0,r.kt)("br",null),(0,r.kt)("strong",{parentName:"p"},"[",(0,r.kt)("span",{className:"phrase-badge"},"NP")," ",(0,r.kt)("em",{parentName:"strong"},"Vi\xf0"),"]"),(0,r.kt)("em",{parentName:"p"}," getum ekki breytt "),(0,r.kt)("strong",{parentName:"p"},"[",(0,r.kt)("span",{className:"phrase-badge"},"NP"),(0,r.kt)("em",{parentName:"strong"}," \xfev\xed"),"]"),(0,r.kt)("em",{parentName:"p"},"."))),(0,r.kt)("p",null,"Noun phrases can include determiners, such as adjectives or demonstrative pronouns, in an adjective phrase (",(0,r.kt)("span",{className:"phrase-badge"},"AP"),"):"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"[",(0,r.kt)("span",{className:"phrase-badge"},"NP")," ",(0,r.kt)("strong",{parentName:"p"},"[",(0,r.kt)("span",{className:"phrase-badge"},"AP")," ",(0,r.kt)("em",{parentName:"strong"},"Gamla"),"]"),(0,r.kt)("em",{parentName:"p"}," h\xfasi\xf0"),"]",(0,r.kt)("em",{parentName:"p"}," hefur veri\xf0 rifi\xf0."),(0,r.kt)("br",null),"[",(0,r.kt)("span",{className:"phrase-badge"},"NP")," ",(0,r.kt)("strong",{parentName:"p"},"[",(0,r.kt)("span",{className:"phrase-badge"},"AP"),(0,r.kt)("em",{parentName:"strong"}," \xdeessi"),"]")," ",(0,r.kt)("em",{parentName:"p"},"kj\xf3ll"),"]",(0,r.kt)("em",{parentName:"p"}," er afskaplega d\xfdr."),(0,r.kt)("br",null),"[",(0,r.kt)("span",{className:"phrase-badge"},"NP"),(0,r.kt)("em",{parentName:"p"}," Taskan "),(0,r.kt)("strong",{parentName:"p"},"[",(0,r.kt)("span",{className:"phrase-badge"},"AP"),(0,r.kt)("em",{parentName:"strong"}," hennar"),"]"),"]",(0,r.kt)("em",{parentName:"p"}," er undir bor\xf0inu."))),(0,r.kt)("p",null,"Noun phrases can also include complements after the noun. The complement could be a noun phrase in the genitive, a prepositional phrase (",(0,r.kt)("span",{className:"phrase-badge"},"PP"),"), or even a whole sentence (",(0,r.kt)("span",{className:"phrase-badge"},"S"),") introduced by ",(0,r.kt)("em",{parentName:"p"},"sem"),":"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"[",(0,r.kt)("span",{className:"phrase-badge"},"NP"),(0,r.kt)("em",{parentName:"p"}," Hundur "),(0,r.kt)("strong",{parentName:"p"},"[",(0,r.kt)("span",{className:"phrase-badge"},"NP"),(0,r.kt)("em",{parentName:"strong"}," Vigd\xedsar"),"]"),"]",(0,r.kt)("em",{parentName:"p"}," geltir endalaust."),(0,r.kt)("br",null),"[",(0,r.kt)("span",{className:"phrase-badge"},"NP"),(0,r.kt)("em",{parentName:"p"}," \xdej\xf3nninn "),(0,r.kt)("strong",{parentName:"p"},"[",(0,r.kt)("span",{className:"phrase-badge"},"PP"),(0,r.kt)("em",{parentName:"strong"}," me\xf0 hv\xedta bindi\xf0"),"]"),"]",(0,r.kt)("em",{parentName:"p"}," hlj\xf3p \xfat."),(0,r.kt)("br",null),"[",(0,r.kt)("span",{className:"phrase-badge"},"NP"),(0,r.kt)("em",{parentName:"p"}," Konan")," ",(0,r.kt)("strong",{parentName:"p"},"[",(0,r.kt)("span",{className:"phrase-badge"},"S"),(0,r.kt)("em",{parentName:"strong"}," sem \xfe\xfa tala\xf0ir vi\xf0 \xed g\xe6r"),"]"),(0,r.kt)("em",{parentName:"p"}," er m\xe6tt."))),(0,r.kt)("h3",{id:"adjective-phrases"},"Adjective phrases"),(0,r.kt)("p",null,"The head of an ",(0,r.kt)(s.R,{term:"adjective phrase",mdxType:"Term"})," is an ",(0,r.kt)("strong",{parentName:"p"},"adjective")," (",(0,r.kt)("em",{parentName:"p"},"fallegur"),", ",(0,r.kt)("em",{parentName:"p"},"gl\xf6\xf0"),", ",(0,r.kt)("em",{parentName:"p"},"spennandi"),") or ",(0,r.kt)("strong",{parentName:"p"},"demonstrative pronoun")," (",(0,r.kt)("em",{parentName:"p"},"\xfeessi"),", ",(0,r.kt)("em",{parentName:"p"},"s\xe1"),")."),(0,r.kt)("h3",{id:"adverb-phrases"},"Adverb phrases"),(0,r.kt)("p",null,"The head of an ",(0,r.kt)(s.R,{term:"adverb phrase",mdxType:"Term"})," phrase an ",(0,r.kt)("strong",{parentName:"p"},"adverb")," (",(0,r.kt)("em",{parentName:"p"},"vel"),", ",(0,r.kt)("em",{parentName:"p"},"ekki"),", ",(0,r.kt)("em",{parentName:"p"},"oft"),"). "),(0,r.kt)("h3",{id:"prepositional-phrases"},"Prepositional phrases"),(0,r.kt)("p",null,"The head of a ",(0,r.kt)(s.R,{term:"prepositional phrase",mdxType:"Term"})," phrase a ",(0,r.kt)("strong",{parentName:"p"},"preposition")," (",(0,r.kt)("em",{parentName:"p"},"\xe1"),", ",(0,r.kt)("em",{parentName:"p"},"\xed"),", ",(0,r.kt)("em",{parentName:"p"},"fyrir"),", ",(0,r.kt)("em",{parentName:"p"},"vegna"),")."))}k.isMDXComponent=!0}}]);