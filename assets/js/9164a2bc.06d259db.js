(self.webpackChunkgramref=self.webpackChunkgramref||[]).push([[9173],{3905:(e,t,n)=>{"use strict";n.d(t,{Zo:()=>s,kt:()=>u});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function m(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),o=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=o(e.components);return a.createElement(p.Provider,{value:t},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},k=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,s=m(e,["components","mdxType","originalType","parentName"]),d=o(n),k=r,u=d["".concat(p,".").concat(k)]||d[k]||c[k]||i;return n?a.createElement(u,l(l({ref:t},s),{},{components:n})):a.createElement(u,l({ref:t},s))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=k;var m={};for(var p in t)hasOwnProperty.call(t,p)&&(m[p]=t[p]);m.originalType=e,m[d]="string"==typeof e?e:r,l[1]=m;for(var o=2;o<i;o++)l[o]=n[o];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}k.displayName="MDXCreateElement"},1333:(e,t,n)=>{"use strict";n.d(t,{R:()=>l});var a=n(7294),r=n(4052),i=n.n(r);class l extends a.Component{constructor(e){super(e),this.state={termWidth:""}}componentDidMount(){const e=document.getElementById("term-"+this.props.term).clientWidth,t=document.getElementById("tooltip-"+this.props.term).clientWidth;this.setState({termWidth:e,tooltipWidth:t})}offset(){return 0-this.state.tooltipWidth/2+this.state.termWidth/2+"px"}displayTerm(){let e;return e=this.props.display?this.props.display:this.props.term,e}getIcelandicTerm(){let e;return e=i().terms.filter((e=>e.term.includes(this.props.term.toLowerCase()))),e[0].icelandic}render(){return a.createElement(a.Fragment,null,a.createElement("span",{className:"term",id:"term-"+this.props.term},this.displayTerm(),a.createElement("span",{id:"tooltip-"+this.props.term,className:"tooltip",style:{left:this.offset()}},"\ud83c\uddee\ud83c\uddf8 ",this.getIcelandicTerm())))}}},4052:e=>{e.exports={terms:[,{term:"verb",icelandic:"s\xf6gn"},{term:"pronoun",icelandic:"fornafn"},{term:"mood",icelandic:"h\xe1ttur"},{term:"accusative",icelandic:"\xfeolfall"},{term:"active voice",icelandic:"germynd"},{term:"adjective",icelandic:"l\xfdsingaror\xf0"},{term:"aspiration",icelandic:"fr\xe1bl\xe1stur"},{term:"case",icelandic:"fall"},{term:"comparative",icelandic:"mi\xf0stig"},{term:"consonant",icelandic:"samhlj\xf3\xf0"},{term:"dative",icelandic:"\xfe\xe1gufall"},{term:"definite article",icelandic:"\xe1kve\xf0inn greinir"},{term:"demonstrative pronoun",icelandic:"\xe1bendingarfornafn"},{term:"devoicing",icelandic:"afr\xf6ddun"},{term:"diphthong",icelandic:"tv\xedhlj\xf3\xf0"},{term:"direct object",icelandic:"beint andlag"},{term:"ending",icelandic:"ending"},{term:"feminine",icelandic:"kvenkyn"},{term:"first person",icelandic:"fyrsta pers\xf3na"},{term:"gender",icelandic:"kyn"},{term:"genitive",icelandic:"eignarfall"},{term:"indefinite pronoun",icelandic:"\xf3\xe1kve\xf0i\xf0 fornafn"},{term:"indicative",icelandic:"frams\xf6guh\xe1ttur"},{term:"indirect object",icelandic:"\xf3beint andlag"},{term:"imperative",icelandic:"bo\xf0h\xe1ttur"},{term:"infinitive",icelandic:"nafnh\xe1ttur"},{term:"masculine",icelandic:"karlkyn"},{term:"middle voice",icelandic:"mi\xf0mynd"},{term:"modal verb",icelandic:"hj\xe1lpars\xf6gn"},{term:"monophthong",icelandic:"einhlj\xf3\xf0"},{term:"neuter",icelandic:"hvorugkyn"},{term:"nominative",icelandic:"nefnifall"},{term:"passive voice",icelandic:"\xfeolmynd"},{term:"past participle",icelandic:"l\xfdsingarh\xe1ttur \xfe\xe1t\xed\xf0ar"},{term:"past tense",icelandic:"\xfe\xe1t\xed\xf0"},{term:"personal pronoun",icelandic:"pers\xf3nufornafn"},{term:"plural",icelandic:"fleirtala"},{term:"positive",icelandic:"frumstig"},{term:"preaspiration",icelandic:"a\xf0bl\xe1stur"},{term:"preposition",icelandic:"forsetning"},{term:"principal parts",icelandic:"kennimyndir"},{term:"reflexive pronoun",icelandic:"afturbeygt fornafn"},{term:"possessive pronoun",icelandic:"eignarfornafn"},{term:"present participle",icelandic:"l\xfdsingarh\xe1ttur n\xfat\xed\xf0ar"},{term:"present tense",icelandic:"n\xfat\xed\xf0"},{term:"second person",icelandic:"\xf6nnur pers\xf3na"},{term:"singular",icelandic:"eintala"},{term:"stem",icelandic:"stofn"},{term:"strong",icelandic:"sterk beyging"},{term:"strong verb",icelandic:"sterk s\xf6gn"},{term:"subjunctive",icelandic:"vi\xf0tengingarh\xe1ttur"},{term:"superlative",icelandic:"efsta stig"},{term:"supine",icelandic:"sagnb\xf3t"},{term:"third person",icelandic:"\xferi\xf0ja pers\xf3na"},{term:"transitive",icelandic:"\xe1hrifss\xf6gn"},{term:"weak",icelandic:"veik beyging"},{term:"weak verb",icelandic:"veik s\xf6gn"}]}},2580:(e,t,n)=>{"use strict";n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>m,default:()=>k,frontMatter:()=>l,metadata:()=>p,toc:()=>s});var a=n(7462),r=(n(7294),n(3905)),i=n(1333);const l={id:"verb-intro",title:"Introduction to verbs",description:"An explanation of Icelandic verbs, including tense, person, number, mood and voice."},m=void 0,p={unversionedId:"verbs/verb-intro",id:"verbs/verb-intro",title:"Introduction to verbs",description:"An explanation of Icelandic verbs, including tense, person, number, mood and voice.",source:"@site/docs/verbs/intro.md",sourceDirName:"verbs",slug:"/verbs/verb-intro",permalink:"/docs/verbs/verb-intro",draft:!1,tags:[],version:"current",frontMatter:{id:"verb-intro",title:"Introduction to verbs",description:"An explanation of Icelandic verbs, including tense, person, number, mood and voice."},sidebar:"someSidebar",previous:{title:"Tricky consonants",permalink:"/docs/basics/tricky-consonants"},next:{title:"Present tense",permalink:"/docs/verbs/present"}},o={},s=[{value:"Inflection",id:"inflection",level:2},{value:"Tense",id:"tense",level:3},{value:"Person and number",id:"person-and-number",level:3},{value:"Mood",id:"mood",level:3},{value:"Indicative",id:"indicative",level:4},{value:"Subjunctive",id:"subjunctive",level:4},{value:"Voice",id:"voice",level:3},{value:"Middle",id:"middle",level:4}],d={toc:s},c="wrapper";function k(e){let{components:t,...n}=e;return(0,r.kt)(c,(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Verbs are the core of a sentence in Icelandic. In other words, Icelandic sentences almost always are built around a ",(0,r.kt)(i.R,{term:"verb",mdxType:"Term"}),":"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("em",{parentName:"p"},"Hva\xf0 ",(0,r.kt)("strong",{parentName:"em"},"heitir")," \xfe\xfa?",(0,r.kt)("br",null),"K\xf6tturinn ",(0,r.kt)("strong",{parentName:"em"},"skr\xed\xf0ur")," undir bor\xf0inu.",(0,r.kt)("br",null),"M\xe6lst ",(0,r.kt)("strong",{parentName:"em"},"er")," til \xfeess a\xf0 gestir yfirgefi laugina 10 m\xedn\xfatum eftir lokun."))),(0,r.kt)("p",null,"A sentence can even consist of a lone verb:"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("em",{parentName:"p"},(0,r.kt)("strong",{parentName:"em"},"Rignir"),"?"))),(0,r.kt)("h2",{id:"inflection"},"Inflection"),(0,r.kt)("p",null,"Icelandic verbs inflect (change their endings) for:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#tense"},"Tense")," (",(0,r.kt)(i.R,{term:"present tense",display:"present",mdxType:"Term"}),", ",(0,r.kt)(i.R,{term:"past tense",display:"past",mdxType:"Term"}),")"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#person-and-number"},"Person and number")," (",(0,r.kt)(i.R,{term:"first person",display:"first",mdxType:"Term"}),", ",(0,r.kt)(i.R,{term:"second person",display:"second",mdxType:"Term"}),", ",(0,r.kt)(i.R,{term:"third person",display:"third",mdxType:"Term"}),"; ",(0,r.kt)(i.R,{term:"singular",mdxType:"Term"}),", ",(0,r.kt)(i.R,{term:"plural",mdxType:"Term"}),")"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#mood"},"Mood")," (",(0,r.kt)(i.R,{term:"indicative",mdxType:"Term"}),", ",(0,r.kt)(i.R,{term:"subjunctive",mdxType:"Term"}),")"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#voice"},"Voice")," (",(0,r.kt)(i.R,{term:"active voice",display:"active",mdxType:"Term"}),", ",(0,r.kt)(i.R,{term:"middle voice",display:"middle/mediopassive",mdxType:"Term"}),")")),(0,r.kt)("p",null,"In addition to these various forms, verbs also have:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)(i.R,{term:"Infinitive",mdxType:"Term"}))," \u2013 The form you\u2019ll find in the dictionary. Most end in ",(0,r.kt)("em",{parentName:"li"},"-a")," (",(0,r.kt)("em",{parentName:"li"},"tala"),", ",(0,r.kt)("em",{parentName:"li"},"sofa"),", ",(0,r.kt)("em",{parentName:"li"},"gala"),"), but there is also a small group ending in ",(0,r.kt)("em",{parentName:"li"},"-\xe1")," (",(0,r.kt)("em",{parentName:"li"},"f\xe1"),", ",(0,r.kt)("em",{parentName:"li"},"g\xe1"),", ",(0,r.kt)("em",{parentName:"li"},"sp\xe1"),"). One ends in ",(0,r.kt)("em",{parentName:"li"},"-o")," (",(0,r.kt)("em",{parentName:"li"},"\xfevo"),") and two end in ",(0,r.kt)("em",{parentName:"li"},"-u")," (",(0,r.kt)("em",{parentName:"li"},"munu"),", ",(0,r.kt)("em",{parentName:"li"},"skulu"),"). The particle ",(0,r.kt)("em",{parentName:"li"},"a\xf0")," is often used before the infinitive \u2013 this depends on the context."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)(i.R,{term:"Present participle",mdxType:"Term"}))," \u2013 Always ends in ",(0,r.kt)("em",{parentName:"li"},"-andi"),". The present participle is rarely used as a true verb (",(0,r.kt)("em",{parentName:"li"},"barni\xf0 er ",(0,r.kt)("strong",{parentName:"em"},"sofandi")," \xed v\xf6ggunni"),") \u2013 it appears more frequently as an adjective or adverb (for example, ",(0,r.kt)("em",{parentName:"li"},"\xe9g fer ",(0,r.kt)("strong",{parentName:"em"},"hj\xf3landi")," \xed vinnu"),")."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)(i.R,{term:"Supine",mdxType:"Term"}))," \u2013 Used after ",(0,r.kt)("em",{parentName:"li"},"hafa")," or ",(0,r.kt)("em",{parentName:"li"},"vera")," to form the perfect (for example, ",(0,r.kt)("em",{parentName:"li"},"\xe9g hef ",(0,r.kt)("strong",{parentName:"em"},"fari\xf0")," til Grikklands"),"), and after certain modal verbs like ",(0,r.kt)("em",{parentName:"li"},"geta"),". All verbs except ",(0,r.kt)("em",{parentName:"li"},"munu")," and ",(0,r.kt)("em",{parentName:"li"},"skulu")," have a supine form. The supine is identical to the neuter form of the past participle, but not all verbs have a past participle. For rules on forming the supine, see ",(0,r.kt)("a",{parentName:"li",href:"past-participle"},"Past participle"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)(i.R,{term:"Imperative",mdxType:"Term"}))," \u2013 Used to give a command or instruction. The imperative has three forms: singular (",(0,r.kt)("em",{parentName:"li"},"komdu"),"), plural (",(0,r.kt)("em",{parentName:"li"},"komi\xf0"),") and bare (",(0,r.kt)("em",{parentName:"li"},"far"),", used very rarely). See ",(0,r.kt)("a",{parentName:"li",href:"imperative"},"Imperative")," for rules.")),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"If you\u2019re familiar with grammatical terms such as ",(0,r.kt)("em",{parentName:"p"},"present tense"),", ",(0,r.kt)("em",{parentName:"p"},"third person")," and ",(0,r.kt)("em",{parentName:"p"},"subjunctive"),", you can skip the rest of this page.")),(0,r.kt)("h3",{id:"tense"},"Tense"),(0,r.kt)("p",null,"Icelandic verbs have two true tenses: ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)(i.R,{term:"present tense",display:"present",mdxType:"Term"}))," and ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)(i.R,{term:"past tense",display:"past",mdxType:"Term"})),". These are the only tenses that are indicated with endings. Some grammar guides include \u201ctenses\u201d constructed with modal verbs like ",(0,r.kt)("em",{parentName:"p"},"munu")," or ",(0,r.kt)("em",{parentName:"p"},"hafa"),", but strictly speaking these are not tenses and are therefore not included here. See ",(0,r.kt)("a",{parentName:"p",href:"modal-verbs"},"Modal verbs")," for a discussion of these."),(0,r.kt)("p",null,"Different verb groups form tenses in different ways. For example:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Infinitive"),(0,r.kt)("th",{parentName:"tr",align:null},"Present"),(0,r.kt)("th",{parentName:"tr",align:null},"Past"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("em",{parentName:"td"},"a\xf0 tala")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("em",{parentName:"td"},"\xe9g ",(0,r.kt)("strong",{parentName:"em"},"tala"))),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("em",{parentName:"td"},"\xe9g ",(0,r.kt)("strong",{parentName:"em"},"tala\xf0i")))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("em",{parentName:"td"},"a\xf0 keyra")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("em",{parentName:"td"},"\xe9g ",(0,r.kt)("strong",{parentName:"em"},"keyri"))),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("em",{parentName:"td"},"\xe9g ",(0,r.kt)("strong",{parentName:"em"},"keyr\xf0i")))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("em",{parentName:"td"},"a\xf0 velja")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("em",{parentName:"td"},"\xe9g ",(0,r.kt)("strong",{parentName:"em"},"vel"))),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("em",{parentName:"td"},"\xe9g ",(0,r.kt)("strong",{parentName:"em"},"valdi")))))),(0,r.kt)("p",null,"The verbs in this table are all ",(0,r.kt)("em",{parentName:"p"},"weak"),". We can tell this because they form their past tense with a ",(0,r.kt)("em",{parentName:"p"},"dental suffix"),". All this means is that they add an ending containing a dental consonant, one of ",(0,r.kt)("em",{parentName:"p"},"d"),", ",(0,r.kt)("em",{parentName:"p"},"\xf0")," or ",(0,r.kt)("em",{parentName:"p"},"t"),", in the past tense."),(0,r.kt)("p",null,"Other verbs form their past tense using a vowel change known as ",(0,r.kt)("em",{parentName:"p"},"umlaut"),". These are called ",(0,r.kt)("em",{parentName:"p"},"strong")," verbs."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Infinitive"),(0,r.kt)("th",{parentName:"tr",align:null},"Present"),(0,r.kt)("th",{parentName:"tr",align:null},"Past"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("em",{parentName:"td"},"a\xf0 b\xedta")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("em",{parentName:"td"},"\xe9g ",(0,r.kt)("strong",{parentName:"em"},"b\xedt"))),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("em",{parentName:"td"},"\xe9g ",(0,r.kt)("strong",{parentName:"em"},"beit")))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("em",{parentName:"td"},"a\xf0 bj\xf3\xf0a")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("em",{parentName:"td"},"\xe9g ",(0,r.kt)("strong",{parentName:"em"},"b\xfd\xf0"))),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("em",{parentName:"td"},"\xe9g ",(0,r.kt)("strong",{parentName:"em"},"bau\xf0")))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("em",{parentName:"td"},"a\xf0 detta")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("em",{parentName:"td"},"\xe9g ",(0,r.kt)("strong",{parentName:"em"},"dett"))),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("em",{parentName:"td"},"\xe9g ",(0,r.kt)("strong",{parentName:"em"},"datt")))))),(0,r.kt)("h3",{id:"person-and-number"},"Person and number"),(0,r.kt)("p",null,"Icelandic verbs have three persons, each of which has various singular and plural forms:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"First")," \u2013 singular: the ",(0,r.kt)("em",{parentName:"li"},"\xe9g")," form; plural: the ",(0,r.kt)("em",{parentName:"li"},"vi\xf0")," form"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Second")," \u2013 singular: the ",(0,r.kt)("em",{parentName:"li"},"\xfe\xfa")," form; plural: the ",(0,r.kt)("em",{parentName:"li"},"\xfei\xf0")," form"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Third")," \u2013 singular: the ",(0,r.kt)("em",{parentName:"li"},"hann/h\xfan/h\xe1n/\xfea\xf0")," form; plural: the ",(0,r.kt)("em",{parentName:"li"},"\xfeeir/\xfe\xe6r/\xfeau")," form")),(0,r.kt)("p",null,"For a discussion on how to use these various pronouns, see ",(0,r.kt)("a",{parentName:"p",href:"../pronouns/personal"},"Personal pronouns"),"."),(0,r.kt)("p",null,"This means there are six possible endings to reflect the various combinations of person and number:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Person"),(0,r.kt)("th",{parentName:"tr",align:null},"Singular"),(0,r.kt)("th",{parentName:"tr",align:null},"Plural"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"1st"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("em",{parentName:"td"},"\xe9g prj\xf3n",(0,r.kt)("strong",{parentName:"em"},"a"))),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("em",{parentName:"td"},"vi\xf0 prj\xf3n",(0,r.kt)("strong",{parentName:"em"},"um")))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"2nd"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("em",{parentName:"td"},"\xfe\xfa prj\xf3n",(0,r.kt)("strong",{parentName:"em"},"ar"))),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("em",{parentName:"td"},"\xfei\xf0 prj\xf3n",(0,r.kt)("strong",{parentName:"em"},"i\xf0")))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"3rd"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("em",{parentName:"td"},"h\xfan prj\xf3n",(0,r.kt)("strong",{parentName:"em"},"ar"))),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("em",{parentName:"td"},"\xfe\xe6r prj\xf3n",(0,r.kt)("strong",{parentName:"em"},"a")))))),(0,r.kt)("p",null,"The endings above are for ",(0,r.kt)("a",{parentName:"p",href:"present#weak-verbs"},"group 1 weak verbs"),". Taken together these form a ",(0,r.kt)("em",{parentName:"p"},"paradigm"),". Other verb groups have different paradigms."),(0,r.kt)("p",null,"Within each group, there are different paradigms for the different tenses and voices. See the pages on weak and strong verbs for an explanation of these."),(0,r.kt)("h3",{id:"mood"},"Mood"),(0,r.kt)("p",null,"Icelandic verbs have two moods: ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)(i.R,{term:"indicative",mdxType:"Term"}))," and ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)(i.R,{term:"subjunctive",mdxType:"Term"})),". \u201cMood\u201d is a grammatical term and has nothing to do with the emotions of the speaker."),(0,r.kt)("p",null,"Within each mood, there are present and past tense paradigms."),(0,r.kt)("h4",{id:"indicative"},"Indicative"),(0,r.kt)("p",null,"The indicative is the default mood and the one you learn first. It\u2019s used for factual statements:"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("em",{parentName:"p"},"\xdea\xf0 ",(0,r.kt)("strong",{parentName:"em"},"eru")," margar kindur uppi \xed sveit.",(0,r.kt)("br",null),"Lilja ",(0,r.kt)("strong",{parentName:"em"},"\xe6tlar")," a\xf0 fara \xed sund \xe1 morgun.",(0,r.kt)("br",null),"Fer\xf0amenn ",(0,r.kt)("strong",{parentName:"em"},"hata")," h\xe1karl."))),(0,r.kt)("h4",{id:"subjunctive"},"Subjunctive"),(0,r.kt)("p",null,"The subjunctive is used to indicate some kind of hypothetical situation, thought, belief, wish, desire, hope or obligation:"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("em",{parentName:"p"},"\xdea\xf0 ",(0,r.kt)("strong",{parentName:"em"},"v\xe6ri")," betra ef \xfea\xf0 rigndi ekki.",(0,r.kt)("br",null),"Krakkarnir halda a\xf0 mamma ",(0,r.kt)("strong",{parentName:"em"},"komi")," heim \xed fyrram\xe1li\xf0.",(0,r.kt)("br",null),"\xc9g \xf3ska \xfeess a\xf0 hann ",(0,r.kt)("strong",{parentName:"em"},"v\xe6ri")," enn \xe1 l\xedfi.",(0,r.kt)("br",null),"Mikilv\xe6gt er a\xf0 gluggarnir ",(0,r.kt)("strong",{parentName:"em"},"s\xe9u")," loka\xf0ir."))),(0,r.kt)("p",null,"For a full discussion, see ",(0,r.kt)("a",{parentName:"p",href:"subjunctive"},"Subjunctive"),"."),(0,r.kt)("h3",{id:"voice"},"Voice"),(0,r.kt)("p",null,"Icelandic verbs have two voices that are marked with inflection: ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)(i.R,{term:"active voice",display:"active",mdxType:"Term"}))," and ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)(i.R,{term:"middle voice",display:"middle",mdxType:"Term"}))," (also known as ",(0,r.kt)("em",{parentName:"p"},"mediopassive"),"). The middle voice is a unique feature of the language."),(0,r.kt)("p",null,"The active voice is the default voice."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("em",{parentName:"p"},"Brynd\xeds ",(0,r.kt)("strong",{parentName:"em"},"kaupir")," n\xfdtt h\xfas"),".")),(0,r.kt)("p",null,"Icelandic also has a passive voice, but this is formed using ",(0,r.kt)("em",{parentName:"p"},"vera")," and a past participle, rather than a simple ending. See ",(0,r.kt)("a",{parentName:"p",href:"#verbs/passive"},"Passive voice")," for an explanation."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("em",{parentName:"p"},"N\xfdtt h\xfas ",(0,r.kt)("strong",{parentName:"em"},"var keypt"),"."))),(0,r.kt)("h4",{id:"middle"},"Middle"),(0,r.kt)("p",null,"The middle voice has a number of functions. It can mark reciprocity (mutual action), reflexivity (something performing an action on itself) or be used instead of the ",(0,r.kt)("a",{parentName:"p",href:"passive-voice"},"passive voice"),". Some verbs have a different meaning altogether in the middle voice. Others exist ",(0,r.kt)("em",{parentName:"p"},"only")," in the middle voice."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("em",{parentName:"p"},"Vi\xf0 ",(0,r.kt)("strong",{parentName:"em"},"sj\xe1umst")," \xed n\xe6stu viku!",(0,r.kt)("br",null),"Herma\xf0urinn ",(0,r.kt)("strong",{parentName:"em"},"meiddist")," \xed str\xed\xf0inu.",(0,r.kt)("br",null),"Refurinn ",(0,r.kt)("strong",{parentName:"em"},"s\xe9st")," ekki \xed myrkrinu.",(0,r.kt)("br",null),"M\xe9r ",(0,r.kt)("strong",{parentName:"em"},"finnst")," b\xf3kin skemmtileg.",(0,r.kt)("br",null),"Bartosz og Pawe\u0142 ",(0,r.kt)("strong",{parentName:"em"},"fer\xf0u\xf0ust")," um allt landi\xf0."))),(0,r.kt)("p",null,"All middle voice forms end in ",(0,r.kt)("em",{parentName:"p"},"-st"),", which makes them easily identifiable."),(0,r.kt)("p",null,"For more on forming the middle voice and using it, see ",(0,r.kt)("a",{parentName:"p",href:"middle-voice"},"Middle voice"),"."))}k.isMDXComponent=!0}}]);