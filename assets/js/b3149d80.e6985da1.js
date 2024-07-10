(self.webpackChunkgramref=self.webpackChunkgramref||[]).push([[9326],{3905:(e,t,n)=>{"use strict";n.d(t,{Zo:()=>p,kt:()=>u});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),m=c(n),h=a,u=m["".concat(l,".").concat(h)]||m[h]||d[h]||i;return n?r.createElement(u,s(s({ref:t},p),{},{components:n})):r.createElement(u,s({ref:t},p))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,s=new Array(i);s[0]=h;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o[m]="string"==typeof e?e:a,s[1]=o;for(var c=2;c<i;c++)s[c]=n[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},1333:(e,t,n)=>{"use strict";n.d(t,{R:()=>s});var r=n(7294),a=n(4052),i=n.n(a);class s extends r.Component{constructor(e){super(e),this.state={termWidth:""}}componentDidMount(){const e=document.getElementById("term-"+this.props.term).clientWidth,t=document.getElementById("tooltip-"+this.props.term).clientWidth;this.setState({termWidth:e,tooltipWidth:t})}offset(){return 0-this.state.tooltipWidth/2+this.state.termWidth/2+"px"}displayTerm(){let e;return e=this.props.display?this.props.display:this.props.term,e}getIcelandicTerm(){let e;return e=i().terms.filter((e=>e.term.includes(this.props.term.toLowerCase()))),e[0].icelandic}render(){return r.createElement(r.Fragment,null,r.createElement("span",{className:"term",id:"term-"+this.props.term},this.displayTerm(),r.createElement("span",{id:"tooltip-"+this.props.term,className:"tooltip",style:{left:this.offset()}},"\ud83c\uddee\ud83c\uddf8 ",this.getIcelandicTerm())))}}},4052:e=>{e.exports={terms:[,{term:"verb",icelandic:"s\xf6gn"},{term:"object",icelandic:"andlag"},{term:"pronoun",icelandic:"fornafn"},{term:"mood",icelandic:"h\xe1ttur"},{term:"accusative",icelandic:"\xfeolfall"},{term:"active voice",icelandic:"germynd"},{term:"adjective",icelandic:"l\xfdsingaror\xf0"},{term:"adjective phrase",icelandic:"l\xfdsingaror\xf0sli\xf0ur"},{term:"adverb",icelandic:"atviksor\xf0"},{term:"adverb phrase",icelandic:"atviksli\xf0ur"},{term:"aspiration",icelandic:"fr\xe1bl\xe1stur"},{term:"case",icelandic:"fall"},{term:"comparative",icelandic:"mi\xf0stig"},{term:"complement",icelandic:"fyllili\xf0ur"},{term:"consonant",icelandic:"samhlj\xf3\xf0"},{term:"dative",icelandic:"\xfe\xe1gufall"},{term:"definite article",icelandic:"\xe1kve\xf0inn greinir"},{term:"demonstrative pronoun",icelandic:"\xe1bendingarfornafn"},{term:"determiner",icelandic:"\xe1kv\xe6\xf0isor\xf0"},{term:"devoicing",icelandic:"afr\xf6ddun"},{term:"diphthong",icelandic:"tv\xedhlj\xf3\xf0"},{term:"direct object",icelandic:"beint andlag"},{term:"ending",icelandic:"ending"},{term:"feminine",icelandic:"kvenkyn"},{term:"first person",icelandic:"fyrsta pers\xf3na"},{term:"gender",icelandic:"kyn"},{term:"genitive",icelandic:"eignarfall"},{term:"head",icelandic:"h\xf6fu\xf0"},{term:"indefinite pronoun",icelandic:"\xf3\xe1kve\xf0i\xf0 fornafn"},{term:"indicative",icelandic:"frams\xf6guh\xe1ttur"},{term:"indirect object",icelandic:"\xf3beint andlag"},{term:"imperative",icelandic:"bo\xf0h\xe1ttur"},{term:"infinitive",icelandic:"nafnh\xe1ttur"},{term:"masculine",icelandic:"karlkyn"},{term:"middle voice",icelandic:"mi\xf0mynd"},{term:"modal verb",icelandic:"hj\xe1lpars\xf6gn"},{term:"monophthong",icelandic:"einhlj\xf3\xf0"},{term:"neuter",icelandic:"hvorugkyn"},{term:"nominative",icelandic:"nefnifall"},{term:"noun phrase",icelandic:"nafnli\xf0ur"},{term:"passive voice",icelandic:"\xfeolmynd"},{term:"past participle",icelandic:"l\xfdsingarh\xe1ttur \xfe\xe1t\xed\xf0ar"},{term:"past tense",icelandic:"\xfe\xe1t\xed\xf0"},{term:"personal pronoun",icelandic:"pers\xf3nufornafn"},{term:"phrase",icelandic:"li\xf0ur"},{term:"plural",icelandic:"fleirtala"},{term:"positive",icelandic:"frumstig"},{term:"preaspiration",icelandic:"a\xf0bl\xe1stur"},{term:"preposition",icelandic:"forsetning"},{term:"prepositional phrase",icelandic:"forsetningarli\xf0ur"},{term:"principal parts",icelandic:"kennimyndir"},{term:"reflexive pronoun",icelandic:"afturbeygt fornafn"},{term:"possessive pronoun",icelandic:"eignarfornafn"},{term:"present participle",icelandic:"l\xfdsingarh\xe1ttur n\xfat\xed\xf0ar"},{term:"present tense",icelandic:"n\xfat\xed\xf0"},{term:"second person",icelandic:"\xf6nnur pers\xf3na"},{term:"sentence",icelandic:"setning"},{term:"singular",icelandic:"eintala"},{term:"stem",icelandic:"stofn"},{term:"strong",icelandic:"sterk beyging"},{term:"strong verb",icelandic:"sterk s\xf6gn"},{term:"stylistic fronting",icelandic:"st\xedlf\xe6rsla"},{term:"subject",icelandic:"frumlag"},{term:"subjunctive",icelandic:"vi\xf0tengingarh\xe1ttur"},{term:"superlative",icelandic:"efsta stig"},{term:"supine",icelandic:"sagnb\xf3t"},{term:"third person",icelandic:"\xferi\xf0ja pers\xf3na"},{term:"transitive",icelandic:"\xe1hrifss\xf6gn"},{term:"verb phrase",icelandic:"sagnli\xf0ur"},{term:"weak",icelandic:"veik beyging"},{term:"weak verb",icelandic:"veik s\xf6gn"},{term:"word order",icelandic:"or\xf0ar\xf6\xf0"}]}},7359:(e,t,n)=>{"use strict";n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>h,frontMatter:()=>s,metadata:()=>l,toc:()=>p});var r=n(7462),a=(n(7294),n(3905)),i=n(1333);const s={id:"syntax-intro",title:"Introduction to syntax",description:"An explanation of word order, or syntactic rules, in Icelandic."},o=void 0,l={unversionedId:"syntax/syntax-intro",id:"syntax/syntax-intro",title:"Introduction to syntax",description:"An explanation of word order, or syntactic rules, in Icelandic.",source:"@site/docs/syntax/intro.md",sourceDirName:"syntax",slug:"/syntax/syntax-intro",permalink:"/docs/syntax/syntax-intro",draft:!1,tags:[],version:"current",frontMatter:{id:"syntax-intro",title:"Introduction to syntax",description:"An explanation of word order, or syntactic rules, in Icelandic."},sidebar:"someSidebar",previous:{title:"Place and direction",permalink:"/docs/adverbs/place-direction"},next:{title:"U-shift",permalink:"/docs/sound-changes/u-shift"}},c={},p=[{value:"Sentence structure",id:"sentence-structure",level:2},{value:"The verb is king",id:"the-verb-is-king",level:3},{value:"Phrases",id:"phrases",level:2},{value:"Verb phrases",id:"verb-phrases",level:3},{value:"Noun phrases",id:"noun-phrases",level:3},{value:"Adjective phrases",id:"adjective-phrases",level:3},{value:"Adverb phrases",id:"adverb-phrases",level:3},{value:"Prepositional phrases",id:"prepositional-phrases",level:3}],m={toc:p},d="wrapper";function h(e){let{components:t,...n}=e;return(0,a.kt)(d,(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"In its simplest terms, the syntax of Icelandic boils down to ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)(i.R,{term:"word order",mdxType:"Term"})),". Like many other languages, Icelandic has a default word order of ",(0,a.kt)("strong",{parentName:"p"},"subject\u2013verb\u2013object")," or (",(0,a.kt)("strong",{parentName:"p"},"SVO"),"). Let\u2019s take a couple of simple sentences to see this in action:"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("em",{parentName:"p"},(0,a.kt)("span",{className:"highlighter"},"Hundurinn")," ",(0,a.kt)("span",{className:"highlighter orange"},"bor\xf0ar")," ",(0,a.kt)("span",{className:"highlighter turquoise"},"pitsuna"),"."),(0,a.kt)("br",null),(0,a.kt)("em",{parentName:"p"},(0,a.kt)("span",{className:"highlighter"},"\xc9g")," ",(0,a.kt)("span",{className:"highlighter orange"},"tala")," ",(0,a.kt)("span",{className:"highlighter turquoise"},"\xfe\xfdsku og sp\xe6nsku"),"."))),(0,a.kt)("div",{className:"wrapper"},(0,a.kt)("ul",{className:"legend"},(0,a.kt)("li",{className:"blue"},"Subject"),(0,a.kt)("li",{className:"orange"},"Verb"),(0,a.kt)("li",{className:"turquoise"},"Object"))),(0,a.kt)("p",null,"We need to be careful about how we define a \u201cword\u201d when talking about syntax. As you can see in the second example above, the object \u201c\xfe\xfdsku og sp\xe6nsku\u201d is made up of more than one word. We therefore normally refer to elements of the sentence as ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)(i.R,{term:"phrase",display:"phrases",mdxType:"Term"}))," rather than \u201cwords\u201d."),(0,a.kt)("p",null,"Icelandic has several different kinds of phrases, each corresponding to a different word class:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)(i.R,{term:"verb phrase",mdxType:"Term"})),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)(i.R,{term:"noun phrase",mdxType:"Term"})),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)(i.R,{term:"adjective phrase",mdxType:"Term"})),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)(i.R,{term:"adverb phrase",mdxType:"Term"})),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)(i.R,{term:"prepositional phrase",mdxType:"Term"}))),(0,a.kt)("p",null,"Each of these phrases has a ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)(i.R,{term:"head",mdxType:"Term"})),", which can be thought of as the main word in the phrase. Together, phrases are combined to form a ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)(i.R,{term:"sentence",mdxType:"Term"})),"."),(0,a.kt)("h2",{id:"sentence-structure"},"Sentence structure"),(0,a.kt)("p",null,"At its simplest, an Icelandic sentence can consist of a ",(0,a.kt)("strong",{parentName:"p"},"single verb phrase"),":"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("em",{parentName:"p"},(0,a.kt)("strong",{parentName:"em"},"Rignir"),"?"))),(0,a.kt)("p",null,"That said, this isn\u2019t the most common type of sentence. Most sentences contain at least a ",(0,a.kt)(i.R,{term:"subject",mdxType:"Term"})," and a ",(0,a.kt)(i.R,{term:"verb",mdxType:"Term"}),", and often an ",(0,a.kt)(i.R,{term:"object",mdxType:"Term"}),". As we learnt above, the basic word order is subject\u2013verb\u2013object (SVO)."),(0,a.kt)("p",null,"\ud83e\ude84 Icelandic has a magical gift though, in the form of its case system. The core function of cases is to mark the relationship between the verb, its subject and its object or objects. What this means is that ",(0,a.kt)("strong",{parentName:"p"},"Icelandic syntax is very flexible")," compared to, for example, English. If we take our examples from above, we can easily rearrange the order of the subject and object without losing any meaning:"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("em",{parentName:"p"},(0,a.kt)("span",{className:"highlighter turquoise"},"Pitsuna")," ",(0,a.kt)("span",{className:"highlighter orange"},"bor\xf0ar")," ",(0,a.kt)("span",{className:"highlighter"},"hundurinn"),"."),(0,a.kt)("br",null),(0,a.kt)("em",{parentName:"p"},(0,a.kt)("span",{className:"highlighter turquoise"},"\xde\xfdsku og sp\xe6nsku")," ",(0,a.kt)("span",{className:"highlighter orange"},"tala")," ",(0,a.kt)("span",{className:"highlighter"},"\xe9g"),"."))),(0,a.kt)("div",{className:"wrapper"},(0,a.kt)("ul",{className:"legend"},(0,a.kt)("li",{className:"blue"},"Subject"),(0,a.kt)("li",{className:"orange"},"Verb"),(0,a.kt)("li",{className:"turquoise"},"Object"))),(0,a.kt)("p",null,"Think about how the meaning of these sentences would change in English if you followed this word order."),(0,a.kt)("p",null,"Now admittedly, this is not the most natural way of saying these sentences in Icelandic, and that\u2019s because our default word order is SVO, rather than OVS. What we\u2019ve done here is emphasise the objects of the verbs by moving them to the start of the sentence. This is known as ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)(i.R,{term:"stylistic fronting",mdxType:"Term"}))," and is frequently used in formal writing."),(0,a.kt)("p",null,"What ",(0,a.kt)("em",{parentName:"p"},"hasn\u2019t")," moved here though is the verb, which brings us neatly onto our first core rule of Icelandic syntax."),(0,a.kt)("h3",{id:"the-verb-is-king"},"The verb is king"),(0,a.kt)("p",null,"Because an Icelandic sentence can consist of a single verb phrase on its own, we can really say that \ud83d\udc51 ",(0,a.kt)("strong",{parentName:"p"},"the verb is king"),". Think of the verb as the sun at the centre of the solar system that everything else orbits around."),(0,a.kt)("admonition",{title:"Golden rule",type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"In Icelandic, the verb phrase is ",(0,a.kt)("strong",{parentName:"p"},"always in second position")," in the sentence. This is known as the V2 rule.")),(0,a.kt)("p",null,"For a detailed explanation of this, see ",(0,a.kt)("a",{parentName:"p",href:"v2-rule"},"V2 rule"),"."),(0,a.kt)("h2",{id:"phrases"},"Phrases"),(0,a.kt)("p",null,"In this section, we\u2019ll look each type of phrase in turn. Remember, the \ud83d\udc64 ",(0,a.kt)("strong",{parentName:"p"},"head")," of the phrase is the \u201cmain word\u201d within it. A phrase can be as simple as a head and nothing else."),(0,a.kt)("p",null,"There are two more concepts we should get to grips with when analysing phrases: ",(0,a.kt)(i.R,{term:"complement",display:"complements",mdxType:"Term"})," and ",(0,a.kt)(i.R,{term:"determiner",display:"determiners",mdxType:"Term"}),"."),(0,a.kt)("p",null,"Complements give us \u2795 ",(0,a.kt)("strong",{parentName:"p"},"more information about something")," (in other words, they ",(0,a.kt)("em",{parentName:"p"},"complement")," the information we already have):"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("em",{parentName:"p"},"Ma\xf0ur ",(0,a.kt)("strong",{parentName:"em"},"\xed hvitum jakka")),".",(0,a.kt)("br",null),(0,a.kt)("em",{parentName:"p"},"H\xfan er a\xf0 tala ",(0,a.kt)("strong",{parentName:"em"},"um \xfeig"),"."),(0,a.kt)("br",null),(0,a.kt)("em",{parentName:"p"},"\xc9g gaf ",(0,a.kt)("strong",{parentName:"em"},"\xfe\xe9r")," ",(0,a.kt)("strong",{parentName:"em"},"peningana"),"."),(0,a.kt)("br",null))),(0,a.kt)("p",null,"Determiners \u2198\ufe0f ",(0,a.kt)("strong",{parentName:"p"},"narrow down what we\u2019re talking about")," to something specific. They are often adjectives or demonstrative pronouns:"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("em",{parentName:"p"},"\xc1tt \xfe\xfa ",(0,a.kt)("strong",{parentName:"em"},"\xfeennan")," frakka?"),(0,a.kt)("br",null),(0,a.kt)("em",{parentName:"p"},"Vi\xf0 keyptum ",(0,a.kt)("strong",{parentName:"em"},"rau\xf0a")," bolla."))),(0,a.kt)("p",null,"Both complements and determiners are often optional: the sentence will normally still be grammatical without them. However, most sentences contain both complements and determiners in some form."),(0,a.kt)("h3",{id:"verb-phrases"},"Verb phrases"),(0,a.kt)("p",null,"The head of a verb phrase is, unsurprisingly, a ",(0,a.kt)("strong",{parentName:"p"},"verb")," (",(0,a.kt)("em",{parentName:"p"},"talar"),", ",(0,a.kt)("em",{parentName:"p"},"hleypur"),")."),(0,a.kt)("h3",{id:"noun-phrases"},"Noun phrases"),(0,a.kt)("p",null,"The head of a noun phrase is either a ",(0,a.kt)("strong",{parentName:"p"},"noun")," (",(0,a.kt)("em",{parentName:"p"},"hestur"),", ",(0,a.kt)("em",{parentName:"p"},"b\xedll"),", ",(0,a.kt)("em",{parentName:"p"},"Mar\xeda"),") or a ",(0,a.kt)("strong",{parentName:"p"},"pronoun")," (",(0,a.kt)("em",{parentName:"p"},"hann"),", ",(0,a.kt)("em",{parentName:"p"},"\xfeau"),"). "),(0,a.kt)("h3",{id:"adjective-phrases"},"Adjective phrases"),(0,a.kt)("p",null,"The head of an adjective phrase is an ",(0,a.kt)("strong",{parentName:"p"},"adjective")," (",(0,a.kt)("em",{parentName:"p"},"fallegur"),", ",(0,a.kt)("em",{parentName:"p"},"gl\xf6\xf0"),", ",(0,a.kt)("em",{parentName:"p"},"spennandi"),"). "),(0,a.kt)("h3",{id:"adverb-phrases"},"Adverb phrases"),(0,a.kt)("p",null,"The head of an adverb phrase an ",(0,a.kt)("strong",{parentName:"p"},"adverb")," (",(0,a.kt)("em",{parentName:"p"},"vel"),", ",(0,a.kt)("em",{parentName:"p"},"ekki"),", ",(0,a.kt)("em",{parentName:"p"},"oft"),"). "),(0,a.kt)("h3",{id:"prepositional-phrases"},"Prepositional phrases"),(0,a.kt)("p",null,"The head of a noun phrase a ",(0,a.kt)("strong",{parentName:"p"},"preposition")," (",(0,a.kt)("em",{parentName:"p"},"\xe1"),", ",(0,a.kt)("em",{parentName:"p"},"\xed"),", ",(0,a.kt)("em",{parentName:"p"},"fyrir"),", ",(0,a.kt)("em",{parentName:"p"},"vegna"),")."))}h.isMDXComponent=!0}}]);