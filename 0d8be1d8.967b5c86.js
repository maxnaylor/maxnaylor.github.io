(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{110:function(t,e,l){"use strict";l.d(e,"a",(function(){return O})),l.d(e,"b",(function(){return s}));var b=l(0),n=l.n(b);function c(t,e,l){return e in t?Object.defineProperty(t,e,{value:l,enumerable:!0,configurable:!0,writable:!0}):t[e]=l,t}function u(t,e){var l=Object.keys(t);if(Object.getOwnPropertySymbols){var b=Object.getOwnPropertySymbols(t);e&&(b=b.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),l.push.apply(l,b)}return l}function r(t){for(var e=1;e<arguments.length;e++){var l=null!=arguments[e]?arguments[e]:{};e%2?u(Object(l),!0).forEach((function(e){c(t,e,l[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(l)):u(Object(l)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(l,e))}))}return t}function j(t,e){if(null==t)return{};var l,b,n=function(t,e){if(null==t)return{};var l,b,n={},c=Object.keys(t);for(b=0;b<c.length;b++)l=c[b],e.indexOf(l)>=0||(n[l]=t[l]);return n}(t,e);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(t);for(b=0;b<c.length;b++)l=c[b],e.indexOf(l)>=0||Object.prototype.propertyIsEnumerable.call(t,l)&&(n[l]=t[l])}return n}var a=n.a.createContext({}),i=function(t){var e=n.a.useContext(a),l=e;return t&&(l="function"==typeof t?t(e):r(r({},e),t)),l},O=function(t){var e=i(t.components);return n.a.createElement(a.Provider,{value:e},t.children)},d={inlineCode:"code",wrapper:function(t){var e=t.children;return n.a.createElement(n.a.Fragment,{},e)}},o=n.a.forwardRef((function(t,e){var l=t.components,b=t.mdxType,c=t.originalType,u=t.parentName,a=j(t,["components","mdxType","originalType","parentName"]),O=i(l),o=b,s=O["".concat(u,".").concat(o)]||O[o]||d[o]||c;return l?n.a.createElement(s,r(r({ref:e},a),{},{components:l})):n.a.createElement(s,r({ref:e},a))}));function s(t,e){var l=arguments,b=e&&e.mdxType;if("string"==typeof t||b){var c=l.length,u=new Array(c);u[0]=o;var r={};for(var j in e)hasOwnProperty.call(e,j)&&(r[j]=e[j]);r.originalType=t,r.mdxType="string"==typeof t?t:b,u[1]=r;for(var a=2;a<c;a++)u[a]=l[a];return n.a.createElement.apply(null,u)}return n.a.createElement.apply(null,l)}o.displayName="MDXCreateElement"},111:function(t,e,l){"use strict";l.d(e,"a",(function(){return r}));var b=l(0),n=l.n(b),c=l(112),u=l.n(c);class r extends n.a.Component{constructor(t){super(t),this.state={termWidth:""}}componentDidMount(){const t=document.getElementById("term-"+this.props.term).clientWidth,e=document.getElementById("tooltip-"+this.props.term).clientWidth;this.setState({termWidth:t,tooltipWidth:e})}offset(){return 0-this.state.tooltipWidth/2+this.state.termWidth/2+"px"}displayTerm(){let t;return t=this.props.display?this.props.display:this.props.term,t}getIcelandicTerm(){let t;return t=u.a.terms.filter((t=>t.term.includes(this.props.term.toLowerCase()))),t[0].icelandic}render(){return n.a.createElement(n.a.Fragment,null,n.a.createElement("span",{className:"term",id:"term-"+this.props.term},this.displayTerm(),n.a.createElement("span",{id:"tooltip-"+this.props.term,className:"tooltip",style:{left:this.offset()}},"\ud83c\uddee\ud83c\uddf8 ",this.getIcelandicTerm())))}}},112:function(t,e){t.exports={terms:[,{term:"verb",icelandic:"s\xf6gn"},{term:"accusative",icelandic:"\xfeolfall"},{term:"active voice",icelandic:"germynd"},{term:"adjective",icelandic:"l\xfdsingaror\xf0"},{term:"comparative",icelandic:"mi\xf0stig"},{term:"dative",icelandic:"\xfe\xe1gufall"},{term:"definite article",icelandic:"\xe1kve\xf0inn greinir"},{term:"demonstrative pronoun",icelandic:"\xe1bendingarfornafn"},{term:"ending",icelandic:"ending"},{term:"feminine",icelandic:"kvenkyn"},{term:"first person",icelandic:"fyrsta pers\xf3na"},{term:"genitive",icelandic:"eignarfall"},{term:"indefinite pronoun",icelandic:"\xf3\xe1kve\xf0i\xf0 fornafn"},{term:"indicative",icelandic:"frams\xf6guh\xe1ttur"},{term:"imperative",icelandic:"bo\xf0h\xe1ttur"},{term:"infinitive",icelandic:"nafnh\xe1ttur"},{term:"masculine",icelandic:"karlkyn"},{term:"middle voice",icelandic:"mi\xf0mynd"},{term:"neuter",icelandic:"hvorugkyn"},{term:"nominative",icelandic:"nefnifall"},{term:"passive voice",icelandic:"\xfeolmynd"},{term:"past participle",icelandic:"l\xfdsingarh\xe1ttur \xfe\xe1t\xed\xf0ar"},{term:"past tense",icelandic:"\xfe\xe1t\xed\xf0"},{term:"personal pronoun",icelandic:"pers\xf3nufornafn"},{term:"plural",icelandic:"fleirtala"},{term:"positive",icelandic:"frumstig"},{term:"reflexive pronoun",icelandic:"afturbeygt fornafn"},{term:"possessive pronoun",icelandic:"eignarfornafn"},{term:"present participle",icelandic:"l\xfdsingarh\xe1ttur n\xfat\xed\xf0ar"},{term:"present tense",icelandic:"n\xfat\xed\xf0"},{term:"second person",icelandic:"\xf6nnur pers\xf3na"},{term:"singular",icelandic:"eintala"},{term:"stem",icelandic:"stofn"},{term:"strong",icelandic:"sterk beyging"},{term:"strong verb",icelandic:"sterk s\xf6gn"},{term:"subjunctive",icelandic:"vi\xf0tengingarh\xe1ttur"},{term:"superlative",icelandic:"efsta stig"},{term:"supine",icelandic:"sagnb\xf3t"},{term:"third person",icelandic:"\xferi\xf0ja pers\xf3na"},{term:"transitive",icelandic:"\xe1hrifss\xf6gn"},{term:"weak",icelandic:"veik beyging"}]}},64:function(t,e,l){"use strict";l.r(e),l.d(e,"frontMatter",(function(){return r})),l.d(e,"metadata",(function(){return j})),l.d(e,"toc",(function(){return a})),l.d(e,"default",(function(){return O}));var b=l(3),n=l(7),c=(l(0),l(110)),u=l(111),r={id:"middle-voice",title:"List of middle voice verbs"},j={unversionedId:"reference/middle-voice",id:"reference/middle-voice",isDocsHomePage:!1,title:"List of middle voice verbs",description:"This is a list of  verbs in Icelandic. The list is organised by function.",source:"@site/docs/reference/middle-voice.md",slug:"/reference/middle-voice",permalink:"/docs/reference/middle-voice",version:"current",sidebar:"someSidebar",previous:{title:"List of irregular verbs",permalink:"/docs/reference/irregular-verbs"},next:{title:"List of places by preposition",permalink:"/docs/reference/places-by-preposition"}},a=[{value:"Reciprocal meaning",id:"reciprocal-meaning",children:[]},{value:"Reflexive meaning",id:"reflexive-meaning",children:[]},{value:"Verbs that change meaning",id:"verbs-that-change-meaning",children:[]},{value:"Verbs that exist only in the middle voice",id:"verbs-that-exist-only-in-the-middle-voice",children:[]}],i={toc:a};function O(t){var e=t.components,l=Object(n.a)(t,["components"]);return Object(c.b)("wrapper",Object(b.a)({},i,l,{components:e,mdxType:"MDXLayout"}),Object(c.b)("p",null,"This is a list of ",Object(c.b)(u.a,{term:"middle voice",mdxType:"Term"})," verbs in Icelandic. The list is organised by function."),Object(c.b)("h2",{id:"reciprocal-meaning"},"Reciprocal meaning"),Object(c.b)("table",null,Object(c.b)("thead",null,Object(c.b)("tr",null,Object(c.b)("th",{width:"35%"},"Icelandic"),Object(c.b)("th",null,"English"))),Object(c.b)("tbody",null,Object(c.b)("tr",null,Object(c.b)("td",null,Object(c.b)("em",null,"berjast")),Object(c.b)("td",null,"to fight")),Object(c.b)("tr",null,Object(c.b)("td",null,Object(c.b)("em",null,"eigast vi\xf0")),Object(c.b)("td",null,"to fight/brawl")),Object(c.b)("tr",null,Object(c.b)("td",null,Object(c.b)("em",null,"elskast")),Object(c.b)("td",null,"to love/make love")),Object(c.b)("tr",null,Object(c.b)("td",null,Object(c.b)("em",null,"fa\xf0mast")),Object(c.b)("td",null,"to hug")),Object(c.b)("tr",null,Object(c.b)("td",null,Object(c.b)("em",null,"flj\xfagast \xe1")),Object(c.b)("td",null,"to fight")),Object(c.b)("tr",null,Object(c.b)("td",null,Object(c.b)("em",null,"fri\xf0m\xe6last")),Object(c.b)("td",null,"to make up")),Object(c.b)("tr",null,Object(c.b)("td",null,Object(c.b)("em",null,"giftast")),Object(c.b)("td",null,"to marry")),Object(c.b)("tr",null,Object(c.b)("td",null,Object(c.b)("em",null,"haldast \xed hendur")),Object(c.b)("td",null,"to hold hands")),Object(c.b)("tr",null,Object(c.b)("td",null,Object(c.b)("em",null,"heilsast")),Object(c.b)("td",null,"to greet/say hello")),Object(c.b)("tr",null,Object(c.b)("td",null,Object(c.b)("em",null,"heyrast")),Object(c.b)("td",null,"to hear from")),Object(c.b)("tr",null,Object(c.b)("td",null,Object(c.b)("em",null,"hittast")),Object(c.b)("td",null,"to meet")),Object(c.b)("tr",null,Object(c.b)("td",null,Object(c.b)("em",null,"hj\xe1lpast a\xf0")),Object(c.b)("td",null,"to help out")),Object(c.b)("tr",null,Object(c.b)("td",null,Object(c.b)("em",null,"hv\xedslast \xe1")),Object(c.b)("td",null,"to whisper")),Object(c.b)("tr",null,Object(c.b)("td",null,Object(c.b)("em",null,"kve\xf0jast")),Object(c.b)("td",null,"to say goodbye")),Object(c.b)("tr",null,Object(c.b)("td",null,Object(c.b)("em",null,"kynnast")),Object(c.b)("td",null,"to get to know, meet for the first time")),Object(c.b)("tr",null,Object(c.b)("td",null,Object(c.b)("em",null,"kyssast")),Object(c.b)("td",null,"to kiss")),Object(c.b)("tr",null,Object(c.b)("td",null,Object(c.b)("em",null,"lei\xf0ast")),Object(c.b)("td",null,"to hold hands")),Object(c.b)("tr",null,Object(c.b)("td",null,Object(c.b)("em",null,"metast")),Object(c.b)("td",null,"to quarrel/argue")),Object(c.b)("tr",null,Object(c.b)("td",null,Object(c.b)("em",null,"munnh\xf6ggvast")),Object(c.b)("td",null,"to feud")),Object(c.b)("tr",null,Object(c.b)("td",null,Object(c.b)("em",null,"m\xe6tast")),Object(c.b)("td",null,"to meet")),Object(c.b)("tr",null,Object(c.b)("td",null,Object(c.b)("em",null,"rekast \xe1")),Object(c.b)("td",null,"to run into, bump into")),Object(c.b)("tr",null,Object(c.b)("td",null,Object(c.b)("em",null,"r\xedfast")),Object(c.b)("td",null,"to argue")),Object(c.b)("tr",null,Object(c.b)("td",null,Object(c.b)("em",null,"sameinast")),Object(c.b)("td",null,"to merge")),Object(c.b)("tr",null,Object(c.b)("td",null,Object(c.b)("em",null,"skarast")),Object(c.b)("td",null,"to overlap")),Object(c.b)("tr",null,Object(c.b)("td",null,Object(c.b)("em",null,"skiptast \xe1")),Object(c.b)("td",null,"to exchange/swap")),Object(c.b)("tr",null,Object(c.b)("td",null,Object(c.b)("em",null,"skrifast \xe1")),Object(c.b)("td",null,"to write to")),Object(c.b)("tr",null,Object(c.b)("td",null,Object(c.b)("em",null,"skylmast")),Object(c.b)("td",null,"to battle (with swords)")),Object(c.b)("tr",null,Object(c.b)("td",null,Object(c.b)("em",null,"sl\xe1st")),Object(c.b)("td",null,"to fight")),Object(c.b)("tr",null,Object(c.b)("td",null,Object(c.b)("em",null,"snertast")),Object(c.b)("td",null,"to touch")),Object(c.b)("tr",null,Object(c.b)("td",null,Object(c.b)("em",null,"stangast \xe1")),Object(c.b)("td",null,"to clash")),Object(c.b)("tr",null,Object(c.b)("td",null,Object(c.b)("em",null,"stimpast")),Object(c.b)("td",null,"to brawl")),Object(c.b)("tr",null,Object(c.b)("td",null,Object(c.b)("em",null,"s\xe6ttast")),Object(c.b)("td",null,"to make up")),Object(c.b)("tr",null,Object(c.b)("td",null,Object(c.b)("em",null,"takast \xe1")),Object(c.b)("td",null,"to compete")),Object(c.b)("tr",null,Object(c.b)("td",null,Object(c.b)("em",null,"takast \xed hendur")),Object(c.b)("td",null,"to shake hands")),Object(c.b)("tr",null,Object(c.b)("td",null,Object(c.b)("em",null,"talast vi\xf0")),Object(c.b)("td",null,"to talk (be on talking terms)")),Object(c.b)("tr",null,Object(c.b)("td",null,Object(c.b)("em",null,"tr\xfalofast")),Object(c.b)("td",null,"to get engaged")),Object(c.b)("tr",null,Object(c.b)("td",null,Object(c.b)("em",null,"tuskast")),Object(c.b)("td",null,"to fight")),Object(c.b)("tr",null,Object(c.b)("td",null,Object(c.b)("em",null,"\xfeekkjast")),Object(c.b)("td",null,"to know")))),Object(c.b)("h2",{id:"reflexive-meaning"},"Reflexive meaning"),Object(c.b)("table",null,Object(c.b)("thead",null,Object(c.b)("tr",null,Object(c.b)("th",{width:"35%"},"Icelandic"),Object(c.b)("th",null,"English"))),Object(c.b)("tbody",null,Object(c.b)("tr",null,Object(c.b)("td",null,Object(c.b)("em",null,"afvopnast")),Object(c.b)("td",null,"to disarm oneself")),Object(c.b)("tr",null,Object(c.b)("td",null,Object(c.b)("em",null,"bj\xf3\xf0ast til")),Object(c.b)("td",null,"to offer one\u2019s help")),Object(c.b)("tr",null,Object(c.b)("td",null,Object(c.b)("em",null,"b\xfaast til")),Object(c.b)("td",null,"to prepare oneself for")),Object(c.b)("tr",null,Object(c.b)("td",null,Object(c.b)("em",null,"dulb\xfaast")),Object(c.b)("td",null,"to disguise oneself")),Object(c.b)("tr",null,Object(c.b)("td",null,Object(c.b)("em",null,"flytjast")),Object(c.b)("td",null,"to move house")),Object(c.b)("tr",null,Object(c.b)("td",null,Object(c.b)("em",null,"f\xe6rast undan")),Object(c.b)("td",null,"to get oneself out of, shirk")),Object(c.b)("tr",null,Object(c.b)("td",null,Object(c.b)("em",null,"gefast upp")),Object(c.b)("td",null,"to give up")),Object(c.b)("tr",null,Object(c.b)("td",null,Object(c.b)("em",null,"innritast")),Object(c.b)("td",null,"to register (for school)")),Object(c.b)("tr",null,Object(c.b)("td",null,Object(c.b)("em",null,"kl\xe6\xf0ast")),Object(c.b)("td",null,"to wear")),Object(c.b)("tr",null,Object(c.b)("td",null,Object(c.b)("em",null,"komast")),Object(c.b)("td",null,"to make it, get somewhere")),Object(c.b)("tr",null,Object(c.b)("td",null,Object(c.b)("em",null,"krefjast")),Object(c.b)("td",null,"to demand")),Object(c.b)("tr",null,Object(c.b)("td",null,Object(c.b)("em",null,"laumast")),Object(c.b)("td",null,"to sneak")),Object(c.b)("tr",null,Object(c.b)("td",null,Object(c.b)("em",null,"leggjast")),Object(c.b)("td",null,"to lie down")),Object(c.b)("tr",null,Object(c.b)("td",null,Object(c.b)("em",null,"matast")),Object(c.b)("td",null,"to dine")),Object(c.b)("tr",null,Object(c.b)("td",null,Object(c.b)("em",null,"mei\xf0ist")),Object(c.b)("td",null,"to get hurt")),Object(c.b)("tr",null,Object(c.b)("td",null,Object(c.b)("em",null,"segjast")),Object(c.b)("td",null,"to claim, purport")),Object(c.b)("tr",null,Object(c.b)("td",null,Object(c.b)("em",null,"setjast")),Object(c.b)("td",null,"to sit down")),Object(c.b)("tr",null,Object(c.b)("td",null,Object(c.b)("em",null,"slasast")),Object(c.b)("td",null,"to get injured")),Object(c.b)("tr",null,Object(c.b)("td",null,Object(c.b)("em",null,"venjast")),Object(c.b)("td",null,"to get used to")),Object(c.b)("tr",null,Object(c.b)("td",null,Object(c.b)("em",null,"verjast")),Object(c.b)("td",null,"to protect oneself")))),Object(c.b)("h2",{id:"verbs-that-change-meaning"},"Verbs that change meaning"),Object(c.b)("table",null,Object(c.b)("thead",null,Object(c.b)("tr",null,Object(c.b)("th",{colSpan:"2"},"Active"),Object(c.b)("th",{colSpan:"2"},"Middle")),Object(c.b)("tr",null,Object(c.b)("th",{width:"25%"},"Icelandic"),Object(c.b)("th",{width:"25%"},"English"),Object(c.b)("th",{width:"25%"},"Icelandic"),Object(c.b)("th",{width:"25%"},"English"))),Object(c.b)("tbody",null,Object(c.b)("tr",null,Object(c.b)("td",null,Object(c.b)("em",null,"b\xfaa vi\xf0")),Object(c.b)("td",null,"to live with, have"),Object(c.b)("td",null,Object(c.b)("em",null,"b\xfaast vi\xf0")),Object(c.b)("td",null,"to expect")),Object(c.b)("tr",null,Object(c.b)("td",null,Object(c.b)("em",null,"fara")),Object(c.b)("td",null,"to go"),Object(c.b)("td",null,Object(c.b)("em",null,"farast")),Object(c.b)("td",null,"to pass away (die)")),Object(c.b)("tr",null,Object(c.b)("td",null,Object(c.b)("em",null,"finna")),Object(c.b)("td",null,"to find"),Object(c.b)("td",null,Object(c.b)("em",null,"finnast")),Object(c.b)("td",null,"to find (as in ",Object(c.b)("em",null,"m\xe9r finnst gaman a\xf0"),"\u2026)")),Object(c.b)("tr",null,Object(c.b)("td",null,Object(c.b)("em",null,"fl\xe6kja")),Object(c.b)("td",null,"to complicate"),Object(c.b)("td",null,Object(c.b)("em",null,"fl\xe6kjast")),Object(c.b)("td",null,"to get caught in/wander about")),Object(c.b)("tr",null,Object(c.b)("td",null,Object(c.b)("em",null,"gera")),Object(c.b)("td",null,"to do"),Object(c.b)("td",null,Object(c.b)("em",null,"gerast")),Object(c.b)("td",null,"to happen")),Object(c.b)("tr",null,Object(c.b)("td",null,Object(c.b)("em",null,"koma a\xf0")),Object(c.b)("td",null,"to participate in/walk in on"),Object(c.b)("td",null,Object(c.b)("em",null,"komast a\xf0")),Object(c.b)("td",null,"to find out")),Object(c.b)("tr",null,Object(c.b)("td",null,Object(c.b)("em",null,"l\xe1ta")),Object(c.b)("td",null,"to let"),Object(c.b)("td",null,Object(c.b)("em",null,"l\xe1tast")),Object(c.b)("td",null,"to pass away (die)")),Object(c.b)("tr",null,Object(c.b)("td",null,Object(c.b)("em",null,"minna \xe1")),Object(c.b)("td",null,"to remind of"),Object(c.b)("td",null,Object(c.b)("em",null,"minnast \xe1")),Object(c.b)("td",null,"to mention")),Object(c.b)("tr",null,Object(c.b)("td",null,Object(c.b)("em",null,"skj\xf3ta")),Object(c.b)("td",null,"to shoot"),Object(c.b)("td",null,Object(c.b)("em",null,"skj\xf3tast")),Object(c.b)("td",null,"to pop (somewhere), walk quickly")),Object(c.b)("tr",null,Object(c.b)("td",null,Object(c.b)("em",null,"standa")),Object(c.b)("td",null,"to stand"),Object(c.b)("td",null,Object(c.b)("em",null,"standast")),Object(c.b)("td",null,"to withstand, stand up to")),Object(c.b)("tr",null,Object(c.b)("td",null,Object(c.b)("em",null,"s\xfdna")),Object(c.b)("td",null,"to show"),Object(c.b)("td",null,Object(c.b)("em",null,"s\xfdnast")),Object(c.b)("td",null,"to seem")),Object(c.b)("tr",null,Object(c.b)("td",null,Object(c.b)("em",null,"taka")),Object(c.b)("td",null,"to take"),Object(c.b)("td",null,Object(c.b)("em",null,"takast")),Object(c.b)("td",null,"to succeed")),Object(c.b)("tr",null,Object(c.b)("td",null,Object(c.b)("em",null,"\xfeykja")),Object(c.b)("td",null,"to seem/think"),Object(c.b)("td",null,Object(c.b)("em",null,"\xfeykjast")),Object(c.b)("td",null,"to pretend")),Object(c.b)("tr",null,Object(c.b)("td",null,Object(c.b)("em",null,"\xfer\xedfa")),Object(c.b)("td",null,"to clean"),Object(c.b)("td",null,Object(c.b)("em",null,"\xfer\xedfast")),Object(c.b)("td",null,"to thrive")),Object(c.b)("tr",null,Object(c.b)("td",null,Object(c.b)("em",null,"\xfev\xe6la")),Object(c.b)("td",null,"to talk nonsense"),Object(c.b)("td",null,Object(c.b)("em",null,"\xfev\xe6last")),Object(c.b)("td",null,"to wander about")))),Object(c.b)("h2",{id:"verbs-that-exist-only-in-the-middle-voice"},"Verbs that exist only in the middle voice"),Object(c.b)("table",null,Object(c.b)("thead",null,Object(c.b)("tr",null,Object(c.b)("th",{width:"35%"},"Icelandic"),Object(c.b)("th",null,"English"))),Object(c.b)("tbody",null,Object(c.b)("tr",null,Object(c.b)("td",null,Object(c.b)("em",null,"asnast")),Object(c.b)("td",null,"to do something stupid")),Object(c.b)("tr",null,Object(c.b)("td",null,Object(c.b)("em",null,"atvikast")),Object(c.b)("td",null,"to happen (by chance)")),Object(c.b)("tr",null,Object(c.b)("td",null,Object(c.b)("em",null,"\xe1byrgjast")),Object(c.b)("td",null,"to take on, become responsible for")),Object(c.b)("tr",null,Object(c.b)("td",null,Object(c.b)("em",null,"eignast")),Object(c.b)("td",null,"to acquire, have (a child), make (a friend)")),Object(c.b)("tr",null,Object(c.b)("td",null,Object(c.b)("em",null,"fer\xf0ast")),Object(c.b)("td",null,"to travel")),Object(c.b)("tr",null,Object(c.b)("td",null,Object(c.b)("em",null,"gr\xednast")),Object(c.b)("td",null,"to joke")),Object(c.b)("tr",null,Object(c.b)("td",null,Object(c.b)("em",null,"hagnast")),Object(c.b)("td",null,"to profit")),Object(c.b)("tr",null,Object(c.b)("td",null,Object(c.b)("em",null,"n\xe1lgast")),Object(c.b)("td",null,"to approach")),Object(c.b)("tr",null,Object(c.b)("td",null,Object(c.b)("em",null,"ofmetnast")),Object(c.b)("td",null,"to get cocky, become arrogant")),Object(c.b)("tr",null,Object(c.b)("td",null,Object(c.b)("em",null,"\xf3ttast")),Object(c.b)("td",null,"to fear")),Object(c.b)("tr",null,Object(c.b)("td",null,Object(c.b)("em",null,"rembast")),Object(c.b)("td",null,"to struggle")),Object(c.b)("tr",null,Object(c.b)("td",null,Object(c.b)("em",null,"slysast")),Object(c.b)("td",null,"to chance, do something by accident")),Object(c.b)("tr",null,Object(c.b)("td",null,Object(c.b)("em",null,"t\xe1rast")),Object(c.b)("td",null,"to tear up, well up")),Object(c.b)("tr",null,Object(c.b)("td",null,Object(c.b)("em",null,"ve\xf0rast")),Object(c.b)("td",null,"to become weathered")),Object(c.b)("tr",null,Object(c.b)("td",null,Object(c.b)("em",null,"\xferj\xf3skast")),Object(c.b)("td",null,"to be stubborn")),Object(c.b)("tr",null,Object(c.b)("td",null,Object(c.b)("em",null,"\xfeyrpast")),Object(c.b)("td",null,"to crowd, throng, cram")),Object(c.b)("tr",null,Object(c.b)("td",null,Object(c.b)("em",null,"\xf6\xf0last")),Object(c.b)("td",null,"to gain, obtain")))))}O.isMDXComponent=!0}}]);