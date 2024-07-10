(self.webpackChunkgramref=self.webpackChunkgramref||[]).push([[4192],{3905:(t,l,e)=>{"use strict";e.d(l,{Zo:()=>o,kt:()=>p});var n=e(7294);function r(t,l,e){return l in t?Object.defineProperty(t,l,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[l]=e,t}function u(t,l){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);l&&(n=n.filter((function(l){return Object.getOwnPropertyDescriptor(t,l).enumerable}))),e.push.apply(e,n)}return e}function i(t){for(var l=1;l<arguments.length;l++){var e=null!=arguments[l]?arguments[l]:{};l%2?u(Object(e),!0).forEach((function(l){r(t,l,e[l])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):u(Object(e)).forEach((function(l){Object.defineProperty(t,l,Object.getOwnPropertyDescriptor(e,l))}))}return t}function a(t,l){if(null==t)return{};var e,n,r=function(t,l){if(null==t)return{};var e,n,r={},u=Object.keys(t);for(n=0;n<u.length;n++)e=u[n],l.indexOf(e)>=0||(r[e]=t[e]);return r}(t,l);if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(t);for(n=0;n<u.length;n++)e=u[n],l.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(t,e)&&(r[e]=t[e])}return r}var k=n.createContext({}),d=function(t){var l=n.useContext(k),e=l;return t&&(e="function"==typeof t?t(l):i(i({},l),t)),e},o=function(t){var l=d(t.components);return n.createElement(k.Provider,{value:l},t.children)},s="mdxType",c={inlineCode:"code",wrapper:function(t){var l=t.children;return n.createElement(n.Fragment,{},l)}},m=n.forwardRef((function(t,l){var e=t.components,r=t.mdxType,u=t.originalType,k=t.parentName,o=a(t,["components","mdxType","originalType","parentName"]),s=d(e),m=r,p=s["".concat(k,".").concat(m)]||s[m]||c[m]||u;return e?n.createElement(p,i(i({ref:l},o),{},{components:e})):n.createElement(p,i({ref:l},o))}));function p(t,l){var e=arguments,r=l&&l.mdxType;if("string"==typeof t||r){var u=e.length,i=new Array(u);i[0]=m;var a={};for(var k in l)hasOwnProperty.call(l,k)&&(a[k]=l[k]);a.originalType=t,a[s]="string"==typeof t?t:r,i[1]=a;for(var d=2;d<u;d++)i[d]=e[d];return n.createElement.apply(null,i)}return n.createElement.apply(null,e)}m.displayName="MDXCreateElement"},1333:(t,l,e)=>{"use strict";e.d(l,{R:()=>i});var n=e(7294),r=e(4052),u=e.n(r);class i extends n.Component{constructor(t){super(t),this.state={termWidth:""}}componentDidMount(){const t=document.getElementById("term-"+this.props.term).clientWidth,l=document.getElementById("tooltip-"+this.props.term).clientWidth;this.setState({termWidth:t,tooltipWidth:l})}offset(){return 0-this.state.tooltipWidth/2+this.state.termWidth/2+"px"}displayTerm(){let t;return t=this.props.display?this.props.display:this.props.term,t}getIcelandicTerm(){let t;return t=u().terms.filter((t=>t.term.includes(this.props.term.toLowerCase()))),t[0].icelandic}render(){return n.createElement(n.Fragment,null,n.createElement("span",{className:"term",id:"term-"+this.props.term},this.displayTerm(),n.createElement("span",{id:"tooltip-"+this.props.term,className:"tooltip",style:{left:this.offset()}},"\ud83c\uddee\ud83c\uddf8 ",this.getIcelandicTerm())))}}},4052:t=>{t.exports={terms:[,{term:"verb",icelandic:"s\xf6gn"},{term:"object",icelandic:"andlag"},{term:"pronoun",icelandic:"fornafn"},{term:"mood",icelandic:"h\xe1ttur"},{term:"accusative",icelandic:"\xfeolfall"},{term:"active voice",icelandic:"germynd"},{term:"adjective",icelandic:"l\xfdsingaror\xf0"},{term:"adjective phrase",icelandic:"l\xfdsingaror\xf0sli\xf0ur"},{term:"adverb",icelandic:"atviksor\xf0"},{term:"adverb phrase",icelandic:"atviksli\xf0ur"},{term:"aspiration",icelandic:"fr\xe1bl\xe1stur"},{term:"case",icelandic:"fall"},{term:"comparative",icelandic:"mi\xf0stig"},{term:"complement",icelandic:"fyllili\xf0ur"},{term:"consonant",icelandic:"samhlj\xf3\xf0"},{term:"dative",icelandic:"\xfe\xe1gufall"},{term:"definite article",icelandic:"\xe1kve\xf0inn greinir"},{term:"demonstrative pronoun",icelandic:"\xe1bendingarfornafn"},{term:"determiner",icelandic:"\xe1kv\xe6\xf0isor\xf0"},{term:"devoicing",icelandic:"afr\xf6ddun"},{term:"diphthong",icelandic:"tv\xedhlj\xf3\xf0"},{term:"direct object",icelandic:"beint andlag"},{term:"ending",icelandic:"ending"},{term:"feminine",icelandic:"kvenkyn"},{term:"first person",icelandic:"fyrsta pers\xf3na"},{term:"gender",icelandic:"kyn"},{term:"genitive",icelandic:"eignarfall"},{term:"head",icelandic:"h\xf6fu\xf0"},{term:"indefinite pronoun",icelandic:"\xf3\xe1kve\xf0i\xf0 fornafn"},{term:"indicative",icelandic:"frams\xf6guh\xe1ttur"},{term:"indirect object",icelandic:"\xf3beint andlag"},{term:"imperative",icelandic:"bo\xf0h\xe1ttur"},{term:"infinitive",icelandic:"nafnh\xe1ttur"},{term:"masculine",icelandic:"karlkyn"},{term:"middle voice",icelandic:"mi\xf0mynd"},{term:"modal verb",icelandic:"hj\xe1lpars\xf6gn"},{term:"monophthong",icelandic:"einhlj\xf3\xf0"},{term:"neuter",icelandic:"hvorugkyn"},{term:"nominative",icelandic:"nefnifall"},{term:"noun phrase",icelandic:"nafnli\xf0ur"},{term:"passive voice",icelandic:"\xfeolmynd"},{term:"past participle",icelandic:"l\xfdsingarh\xe1ttur \xfe\xe1t\xed\xf0ar"},{term:"past tense",icelandic:"\xfe\xe1t\xed\xf0"},{term:"personal pronoun",icelandic:"pers\xf3nufornafn"},{term:"phrase",icelandic:"li\xf0ur"},{term:"plural",icelandic:"fleirtala"},{term:"positive",icelandic:"frumstig"},{term:"preaspiration",icelandic:"a\xf0bl\xe1stur"},{term:"preposition",icelandic:"forsetning"},{term:"prepositional phrase",icelandic:"forsetningarli\xf0ur"},{term:"principal parts",icelandic:"kennimyndir"},{term:"reflexive pronoun",icelandic:"afturbeygt fornafn"},{term:"possessive pronoun",icelandic:"eignarfornafn"},{term:"present participle",icelandic:"l\xfdsingarh\xe1ttur n\xfat\xed\xf0ar"},{term:"present tense",icelandic:"n\xfat\xed\xf0"},{term:"second person",icelandic:"\xf6nnur pers\xf3na"},{term:"sentence",icelandic:"setning"},{term:"singular",icelandic:"eintala"},{term:"stem",icelandic:"stofn"},{term:"strong",icelandic:"sterk beyging"},{term:"strong verb",icelandic:"sterk s\xf6gn"},{term:"stylistic fronting",icelandic:"st\xedlf\xe6rsla"},{term:"subject",icelandic:"frumlag"},{term:"subjunctive",icelandic:"vi\xf0tengingarh\xe1ttur"},{term:"superlative",icelandic:"efsta stig"},{term:"supine",icelandic:"sagnb\xf3t"},{term:"third person",icelandic:"\xferi\xf0ja pers\xf3na"},{term:"transitive",icelandic:"\xe1hrifss\xf6gn"},{term:"verb phrase",icelandic:"sagnli\xf0ur"},{term:"weak",icelandic:"veik beyging"},{term:"weak verb",icelandic:"veik s\xf6gn"},{term:"word order",icelandic:"or\xf0ar\xf6\xf0"}]}},783:(t,l,e)=>{"use strict";e.r(l),e.d(l,{assets:()=>d,contentTitle:()=>a,default:()=>m,frontMatter:()=>i,metadata:()=>k,toc:()=>o});var n=e(7462),r=(e(7294),e(3905)),u=e(1333);const i={id:"middle-voice",title:"List of middle voice verbs"},a=void 0,k={unversionedId:"reference/middle-voice",id:"reference/middle-voice",title:"List of middle voice verbs",description:"This is a list of  verbs in Icelandic. The list is organised by function.",source:"@site/docs/reference/middle-voice.md",sourceDirName:"reference",slug:"/reference/middle-voice",permalink:"/docs/reference/middle-voice",draft:!1,tags:[],version:"current",frontMatter:{id:"middle-voice",title:"List of middle voice verbs"},sidebar:"someSidebar",previous:{title:"List of impersonal verbs",permalink:"/docs/reference/impersonal"},next:{title:"List of places by preposition",permalink:"/docs/reference/places-by-preposition"}},d={},o=[{value:"Reciprocal meaning",id:"reciprocal-meaning",level:2},{value:"Reflexive meaning",id:"reflexive-meaning",level:2},{value:"Verbs that change meaning",id:"verbs-that-change-meaning",level:2},{value:"Verbs that exist only in the middle voice",id:"verbs-that-exist-only-in-the-middle-voice",level:2}],s={toc:o},c="wrapper";function m(t){let{components:l,...e}=t;return(0,r.kt)(c,(0,n.Z)({},s,e,{components:l,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"This is a list of ",(0,r.kt)(u.R,{term:"middle voice",mdxType:"Term"})," verbs in Icelandic. The list is organised by function."),(0,r.kt)("h2",{id:"reciprocal-meaning"},"Reciprocal meaning"),(0,r.kt)("figure",null,(0,r.kt)("table",null,(0,r.kt)("thead",null,(0,r.kt)("tr",null,(0,r.kt)("th",{width:"35%"},"Icelandic"),(0,r.kt)("th",null,"English"))),(0,r.kt)("tbody",null,(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("em",null,"berjast")),(0,r.kt)("td",null,"to fight")),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("em",null,"eigast vi\xf0")),(0,r.kt)("td",null,"to fight/brawl")),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("em",null,"elskast")),(0,r.kt)("td",null,"to love/make love")),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("em",null,"fa\xf0mast")),(0,r.kt)("td",null,"to hug")),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("em",null,"flj\xfagast \xe1")),(0,r.kt)("td",null,"to fight")),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("em",null,"fri\xf0m\xe6last")),(0,r.kt)("td",null,"to make up")),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("em",null,"giftast")),(0,r.kt)("td",null,"to marry")),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("em",null,"haldast \xed hendur")),(0,r.kt)("td",null,"to hold hands")),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("em",null,"heilsast")),(0,r.kt)("td",null,"to greet/say hello")),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("em",null,"heyrast")),(0,r.kt)("td",null,"to hear from")),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("em",null,"hittast")),(0,r.kt)("td",null,"to meet")),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("em",null,"hj\xe1lpast a\xf0")),(0,r.kt)("td",null,"to help out")),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("em",null,"hv\xedslast \xe1")),(0,r.kt)("td",null,"to whisper")),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("em",null,"kve\xf0jast")),(0,r.kt)("td",null,"to say goodbye")),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("em",null,"kynnast")),(0,r.kt)("td",null,"to get to know, meet for the first time")),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("em",null,"kyssast")),(0,r.kt)("td",null,"to kiss")),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("em",null,"lei\xf0ast")),(0,r.kt)("td",null,"to hold hands")),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("em",null,"metast")),(0,r.kt)("td",null,"to quarrel/argue")),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("em",null,"munnh\xf6ggvast")),(0,r.kt)("td",null,"to feud")),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("em",null,"m\xe6tast")),(0,r.kt)("td",null,"to meet")),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("em",null,"rekast \xe1")),(0,r.kt)("td",null,"to run into, bump into")),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("em",null,"r\xedfast")),(0,r.kt)("td",null,"to argue")),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("em",null,"sameinast")),(0,r.kt)("td",null,"to merge")),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("em",null,"skarast")),(0,r.kt)("td",null,"to overlap")),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("em",null,"skiptast \xe1")),(0,r.kt)("td",null,"to exchange/swap")),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("em",null,"skrifast \xe1")),(0,r.kt)("td",null,"to write to")),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("em",null,"skylmast")),(0,r.kt)("td",null,"to battle (with swords)")),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("em",null,"sl\xe1st")),(0,r.kt)("td",null,"to fight")),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("em",null,"snertast")),(0,r.kt)("td",null,"to touch")),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("em",null,"stangast \xe1")),(0,r.kt)("td",null,"to clash")),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("em",null,"stimpast")),(0,r.kt)("td",null,"to brawl")),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("em",null,"s\xe6ttast")),(0,r.kt)("td",null,"to make up")),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("em",null,"takast \xe1")),(0,r.kt)("td",null,"to compete")),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("em",null,"takast \xed hendur")),(0,r.kt)("td",null,"to shake hands")),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("em",null,"talast vi\xf0")),(0,r.kt)("td",null,"to talk (be on talking terms)")),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("em",null,"tr\xfalofast")),(0,r.kt)("td",null,"to get engaged")),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("em",null,"tuskast")),(0,r.kt)("td",null,"to fight")),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("em",null,"\xfeekkjast")),(0,r.kt)("td",null,"to know"))))),(0,r.kt)("h2",{id:"reflexive-meaning"},"Reflexive meaning"),(0,r.kt)("figure",null,(0,r.kt)("table",null,(0,r.kt)("thead",null,(0,r.kt)("tr",null,(0,r.kt)("th",{width:"35%"},"Icelandic"),(0,r.kt)("th",null,"English"))),(0,r.kt)("tbody",null,(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("em",null,"afvopnast")),(0,r.kt)("td",null,"to disarm oneself")),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("em",null,"bj\xf3\xf0ast til")),(0,r.kt)("td",null,"to offer one\u2019s help")),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("em",null,"b\xfaast til")),(0,r.kt)("td",null,"to prepare oneself for")),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("em",null,"dulb\xfaast")),(0,r.kt)("td",null,"to disguise oneself")),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("em",null,"flytjast")),(0,r.kt)("td",null,"to move house")),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("em",null,"f\xe6rast undan")),(0,r.kt)("td",null,"to get oneself out of, shirk")),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("em",null,"gefast upp")),(0,r.kt)("td",null,"to give up")),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("em",null,"innritast")),(0,r.kt)("td",null,"to register (for school)")),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("em",null,"kl\xe6\xf0ast")),(0,r.kt)("td",null,"to wear")),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("em",null,"komast")),(0,r.kt)("td",null,"to make it, get somewhere")),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("em",null,"krefjast")),(0,r.kt)("td",null,"to demand")),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("em",null,"laumast")),(0,r.kt)("td",null,"to sneak")),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("em",null,"leggjast")),(0,r.kt)("td",null,"to lie down")),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("em",null,"matast")),(0,r.kt)("td",null,"to dine")),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("em",null,"mei\xf0ist")),(0,r.kt)("td",null,"to get hurt")),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("em",null,"segjast")),(0,r.kt)("td",null,"to claim, purport")),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("em",null,"setjast")),(0,r.kt)("td",null,"to sit down")),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("em",null,"slasast")),(0,r.kt)("td",null,"to get injured")),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("em",null,"venjast")),(0,r.kt)("td",null,"to get used to")),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("em",null,"verjast")),(0,r.kt)("td",null,"to protect oneself"))))),(0,r.kt)("h2",{id:"verbs-that-change-meaning"},"Verbs that change meaning"),(0,r.kt)("figure",null,(0,r.kt)("table",null,(0,r.kt)("thead",null,(0,r.kt)("tr",null,(0,r.kt)("th",{colSpan:"2"},"Active"),(0,r.kt)("th",{colSpan:"2"},"Middle")),(0,r.kt)("tr",null,(0,r.kt)("th",{width:"25%"},"Icelandic"),(0,r.kt)("th",{width:"25%"},"English"),(0,r.kt)("th",{width:"25%"},"Icelandic"),(0,r.kt)("th",{width:"25%"},"English"))),(0,r.kt)("tbody",null,(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("em",null,"b\xfaa vi\xf0")),(0,r.kt)("td",null,"to live with, have"),(0,r.kt)("td",null,(0,r.kt)("em",null,"b\xfaast vi\xf0")),(0,r.kt)("td",null,"to expect")),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("em",null,"fara")),(0,r.kt)("td",null,"to go"),(0,r.kt)("td",null,(0,r.kt)("em",null,"farast")),(0,r.kt)("td",null,"to pass away (die)")),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("em",null,"finna")),(0,r.kt)("td",null,"to find"),(0,r.kt)("td",null,(0,r.kt)("em",null,"finnast")),(0,r.kt)("td",null,"to find (as in ",(0,r.kt)("em",null,"m\xe9r finnst gaman a\xf0"),"\u2026)")),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("em",null,"fl\xe6kja")),(0,r.kt)("td",null,"to complicate"),(0,r.kt)("td",null,(0,r.kt)("em",null,"fl\xe6kjast")),(0,r.kt)("td",null,"to get caught in/wander about")),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("em",null,"gera")),(0,r.kt)("td",null,"to do"),(0,r.kt)("td",null,(0,r.kt)("em",null,"gerast")),(0,r.kt)("td",null,"to happen")),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("em",null,"koma a\xf0")),(0,r.kt)("td",null,"to participate in/walk in on"),(0,r.kt)("td",null,(0,r.kt)("em",null,"komast a\xf0")),(0,r.kt)("td",null,"to find out")),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("em",null,"l\xe1ta")),(0,r.kt)("td",null,"to let"),(0,r.kt)("td",null,(0,r.kt)("em",null,"l\xe1tast")),(0,r.kt)("td",null,"to pass away (die)")),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("em",null,"minna \xe1")),(0,r.kt)("td",null,"to remind of"),(0,r.kt)("td",null,(0,r.kt)("em",null,"minnast \xe1")),(0,r.kt)("td",null,"to mention")),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("em",null,"skj\xf3ta")),(0,r.kt)("td",null,"to shoot"),(0,r.kt)("td",null,(0,r.kt)("em",null,"skj\xf3tast")),(0,r.kt)("td",null,"to pop (somewhere), walk quickly")),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("em",null,"standa")),(0,r.kt)("td",null,"to stand"),(0,r.kt)("td",null,(0,r.kt)("em",null,"standast")),(0,r.kt)("td",null,"to withstand, stand up to")),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("em",null,"s\xfdna")),(0,r.kt)("td",null,"to show"),(0,r.kt)("td",null,(0,r.kt)("em",null,"s\xfdnast")),(0,r.kt)("td",null,"to seem")),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("em",null,"taka")),(0,r.kt)("td",null,"to take"),(0,r.kt)("td",null,(0,r.kt)("em",null,"takast")),(0,r.kt)("td",null,"to succeed")),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("em",null,"\xfeykja")),(0,r.kt)("td",null,"to seem/think"),(0,r.kt)("td",null,(0,r.kt)("em",null,"\xfeykjast")),(0,r.kt)("td",null,"to pretend")),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("em",null,"\xfer\xedfa")),(0,r.kt)("td",null,"to clean"),(0,r.kt)("td",null,(0,r.kt)("em",null,"\xfer\xedfast")),(0,r.kt)("td",null,"to thrive")),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("em",null,"\xfev\xe6la")),(0,r.kt)("td",null,"to talk nonsense"),(0,r.kt)("td",null,(0,r.kt)("em",null,"\xfev\xe6last")),(0,r.kt)("td",null,"to wander about"))))),(0,r.kt)("h2",{id:"verbs-that-exist-only-in-the-middle-voice"},"Verbs that exist only in the middle voice"),(0,r.kt)("p",null,"This list can never be exhaustive, as it\u2019s possible to form new middle voice-only verbs from nouns or adjectives. These are some of the most common."),(0,r.kt)("figure",null,(0,r.kt)("table",null,(0,r.kt)("thead",null,(0,r.kt)("tr",null,(0,r.kt)("th",{width:"35%"},"Icelandic"),(0,r.kt)("th",null,"English"))),(0,r.kt)("tbody",null,(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("em",null,"asnast")),(0,r.kt)("td",null,"to do something stupid")),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("em",null,"atvikast")),(0,r.kt)("td",null,"to happen (by chance)")),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("em",null,"\xe1byrgjast")),(0,r.kt)("td",null,"to take on, become responsible for")),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("em",null,"eignast")),(0,r.kt)("td",null,"to acquire, have (a child), make (a friend)")),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("em",null,"fer\xf0ast")),(0,r.kt)("td",null,"to travel")),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("em",null,"gr\xednast")),(0,r.kt)("td",null,"to joke")),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("em",null,"hagnast")),(0,r.kt)("td",null,"to profit")),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("em",null,"n\xe1lgast")),(0,r.kt)("td",null,"to approach")),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("em",null,"ofmetnast")),(0,r.kt)("td",null,"to get cocky, become arrogant")),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("em",null,"\xf3ttast")),(0,r.kt)("td",null,"to fear")),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("em",null,"rembast")),(0,r.kt)("td",null,"to struggle")),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("em",null,"slysast")),(0,r.kt)("td",null,"to chance, do something by accident")),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("em",null,"t\xe1rast")),(0,r.kt)("td",null,"to tear up, well up")),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("em",null,"ve\xf0rast")),(0,r.kt)("td",null,"to become weathered")),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("em",null,"\xferj\xf3skast")),(0,r.kt)("td",null,"to be stubborn")),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("em",null,"\xfeyrpast")),(0,r.kt)("td",null,"to crowd, throng, cram")),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("em",null,"\xf6\xf0last")),(0,r.kt)("td",null,"to gain, obtain"))))))}m.isMDXComponent=!0}}]);