(self.webpackChunkgramref=self.webpackChunkgramref||[]).push([[192],{3905:function(t,l,n){"use strict";n.d(l,{Zo:function(){return o},kt:function(){return c}});var e=n(7294);function u(t,l,n){return l in t?Object.defineProperty(t,l,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[l]=n,t}function r(t,l){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var e=Object.getOwnPropertySymbols(t);l&&(e=e.filter((function(l){return Object.getOwnPropertyDescriptor(t,l).enumerable}))),n.push.apply(n,e)}return n}function k(t){for(var l=1;l<arguments.length;l++){var n=null!=arguments[l]?arguments[l]:{};l%2?r(Object(n),!0).forEach((function(l){u(t,l,n[l])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(l){Object.defineProperty(t,l,Object.getOwnPropertyDescriptor(n,l))}))}return t}function i(t,l){if(null==t)return{};var n,e,u=function(t,l){if(null==t)return{};var n,e,u={},r=Object.keys(t);for(e=0;e<r.length;e++)n=r[e],l.indexOf(n)>=0||(u[n]=t[n]);return u}(t,l);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(e=0;e<r.length;e++)n=r[e],l.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(u[n]=t[n])}return u}var a=e.createContext({}),d=function(t){var l=e.useContext(a),n=l;return t&&(n="function"==typeof t?t(l):k(k({},l),t)),n},o=function(t){var l=d(t.components);return e.createElement(a.Provider,{value:l},t.children)},s={inlineCode:"code",wrapper:function(t){var l=t.children;return e.createElement(e.Fragment,{},l)}},m=e.forwardRef((function(t,l){var n=t.components,u=t.mdxType,r=t.originalType,a=t.parentName,o=i(t,["components","mdxType","originalType","parentName"]),m=d(n),c=u,p=m["".concat(a,".").concat(c)]||m[c]||s[c]||r;return n?e.createElement(p,k(k({ref:l},o),{},{components:n})):e.createElement(p,k({ref:l},o))}));function c(t,l){var n=arguments,u=l&&l.mdxType;if("string"==typeof t||u){var r=n.length,k=new Array(r);k[0]=m;var i={};for(var a in l)hasOwnProperty.call(l,a)&&(i[a]=l[a]);i.originalType=t,i.mdxType="string"==typeof t?t:u,k[1]=i;for(var d=2;d<r;d++)k[d]=n[d];return e.createElement.apply(null,k)}return e.createElement.apply(null,n)}m.displayName="MDXCreateElement"},1333:function(t,l,n){"use strict";n.d(l,{R:function(){return i}});var e=n(4578),u=n(7294),r=n(4052),k=n.n(r),i=function(t){function l(l){var n;return(n=t.call(this,l)||this).state={termWidth:""},n}(0,e.Z)(l,t);var n=l.prototype;return n.componentDidMount=function(){var t=document.getElementById("term-"+this.props.term).clientWidth,l=document.getElementById("tooltip-"+this.props.term).clientWidth;this.setState({termWidth:t,tooltipWidth:l})},n.offset=function(){var t=0-this.state.tooltipWidth/2+this.state.termWidth/2+"px";return t},n.displayTerm=function(){return this.props.display?this.props.display:this.props.term},n.getIcelandicTerm=function(){var t=this;return k().terms.filter((function(l){return l.term.includes(t.props.term.toLowerCase())}))[0].icelandic},n.render=function(){return u.createElement(u.Fragment,null,u.createElement("span",{className:"term",id:"term-"+this.props.term},this.displayTerm(),u.createElement("span",{id:"tooltip-"+this.props.term,className:"tooltip",style:{left:this.offset()}},"\ud83c\uddee\ud83c\uddf8 ",this.getIcelandicTerm())))},l}(u.Component)},4052:function(t){t.exports={terms:[,{term:"verb",icelandic:"s\xf6gn"},{term:"accusative",icelandic:"\xfeolfall"},{term:"active voice",icelandic:"germynd"},{term:"adjective",icelandic:"l\xfdsingaror\xf0"},{term:"case",icelandic:"fall"},{term:"comparative",icelandic:"mi\xf0stig"},{term:"dative",icelandic:"\xfe\xe1gufall"},{term:"definite article",icelandic:"\xe1kve\xf0inn greinir"},{term:"demonstrative pronoun",icelandic:"\xe1bendingarfornafn"},{term:"ending",icelandic:"ending"},{term:"feminine",icelandic:"kvenkyn"},{term:"first person",icelandic:"fyrsta pers\xf3na"},{term:"gender",icelandic:"kyn"},{term:"genitive",icelandic:"eignarfall"},{term:"indefinite pronoun",icelandic:"\xf3\xe1kve\xf0i\xf0 fornafn"},{term:"indicative",icelandic:"frams\xf6guh\xe1ttur"},{term:"imperative",icelandic:"bo\xf0h\xe1ttur"},{term:"infinitive",icelandic:"nafnh\xe1ttur"},{term:"masculine",icelandic:"karlkyn"},{term:"middle voice",icelandic:"mi\xf0mynd"},{term:"neuter",icelandic:"hvorugkyn"},{term:"nominative",icelandic:"nefnifall"},{term:"passive voice",icelandic:"\xfeolmynd"},{term:"past participle",icelandic:"l\xfdsingarh\xe1ttur \xfe\xe1t\xed\xf0ar"},{term:"past tense",icelandic:"\xfe\xe1t\xed\xf0"},{term:"personal pronoun",icelandic:"pers\xf3nufornafn"},{term:"plural",icelandic:"fleirtala"},{term:"positive",icelandic:"frumstig"},{term:"reflexive pronoun",icelandic:"afturbeygt fornafn"},{term:"possessive pronoun",icelandic:"eignarfornafn"},{term:"present participle",icelandic:"l\xfdsingarh\xe1ttur n\xfat\xed\xf0ar"},{term:"present tense",icelandic:"n\xfat\xed\xf0"},{term:"second person",icelandic:"\xf6nnur pers\xf3na"},{term:"singular",icelandic:"eintala"},{term:"stem",icelandic:"stofn"},{term:"strong",icelandic:"sterk beyging"},{term:"strong verb",icelandic:"sterk s\xf6gn"},{term:"subjunctive",icelandic:"vi\xf0tengingarh\xe1ttur"},{term:"superlative",icelandic:"efsta stig"},{term:"supine",icelandic:"sagnb\xf3t"},{term:"third person",icelandic:"\xferi\xf0ja pers\xf3na"},{term:"transitive",icelandic:"\xe1hrifss\xf6gn"},{term:"weak",icelandic:"veik beyging"}]}},783:function(t,l,n){"use strict";n.r(l),n.d(l,{assets:function(){return s},contentTitle:function(){return d},default:function(){return p},frontMatter:function(){return a},metadata:function(){return o},toc:function(){return m}});var e=n(7462),u=n(3366),r=(n(7294),n(3905)),k=n(1333),i=["components"],a={id:"middle-voice",title:"List of middle voice verbs"},d=void 0,o={unversionedId:"reference/middle-voice",id:"reference/middle-voice",title:"List of middle voice verbs",description:"This is a list of  verbs in Icelandic. The list is organised by function.",source:"@site/docs/reference/middle-voice.md",sourceDirName:"reference",slug:"/reference/middle-voice",permalink:"/docs/reference/middle-voice",tags:[],version:"current",frontMatter:{id:"middle-voice",title:"List of middle voice verbs"},sidebar:"someSidebar",previous:{title:"List of irregular verbs",permalink:"/docs/reference/irregular-verbs"},next:{title:"List of places by preposition",permalink:"/docs/reference/places-by-preposition"}},s={},m=[{value:"Reciprocal meaning",id:"reciprocal-meaning",level:2},{value:"Reflexive meaning",id:"reflexive-meaning",level:2},{value:"Verbs that change meaning",id:"verbs-that-change-meaning",level:2},{value:"Verbs that exist only in the middle voice",id:"verbs-that-exist-only-in-the-middle-voice",level:2}],c={toc:m};function p(t){var l=t.components,n=(0,u.Z)(t,i);return(0,r.kt)("wrapper",(0,e.Z)({},c,n,{components:l,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"This is a list of ",(0,r.kt)(k.R,{term:"middle voice",mdxType:"Term"})," verbs in Icelandic. The list is organised by function."),(0,r.kt)("h2",{id:"reciprocal-meaning"},"Reciprocal meaning"),(0,r.kt)("table",null,(0,r.kt)("thead",null,(0,r.kt)("tr",null,(0,r.kt)("th",{width:"35%"},"Icelandic"),(0,r.kt)("th",null,"English"))),(0,r.kt)("tbody",null,(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("em",null,"berjast")),(0,r.kt)("td",null,"to fight")),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("em",null,"eigast vi\xf0")),(0,r.kt)("td",null,"to fight/brawl")),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("em",null,"elskast")),(0,r.kt)("td",null,"to love/make love")),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("em",null,"fa\xf0mast")),(0,r.kt)("td",null,"to hug")),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("em",null,"flj\xfagast \xe1")),(0,r.kt)("td",null,"to fight")),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("em",null,"fri\xf0m\xe6last")),(0,r.kt)("td",null,"to make up")),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("em",null,"giftast")),(0,r.kt)("td",null,"to marry")),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("em",null,"haldast \xed hendur")),(0,r.kt)("td",null,"to hold hands")),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("em",null,"heilsast")),(0,r.kt)("td",null,"to greet/say hello")),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("em",null,"heyrast")),(0,r.kt)("td",null,"to hear from")),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("em",null,"hittast")),(0,r.kt)("td",null,"to meet")),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("em",null,"hj\xe1lpast a\xf0")),(0,r.kt)("td",null,"to help out")),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("em",null,"hv\xedslast \xe1")),(0,r.kt)("td",null,"to whisper")),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("em",null,"kve\xf0jast")),(0,r.kt)("td",null,"to say goodbye")),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("em",null,"kynnast")),(0,r.kt)("td",null,"to get to know, meet for the first time")),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("em",null,"kyssast")),(0,r.kt)("td",null,"to kiss")),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("em",null,"lei\xf0ast")),(0,r.kt)("td",null,"to hold hands")),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("em",null,"metast")),(0,r.kt)("td",null,"to quarrel/argue")),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("em",null,"munnh\xf6ggvast")),(0,r.kt)("td",null,"to feud")),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("em",null,"m\xe6tast")),(0,r.kt)("td",null,"to meet")),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("em",null,"rekast \xe1")),(0,r.kt)("td",null,"to run into, bump into")),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("em",null,"r\xedfast")),(0,r.kt)("td",null,"to argue")),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("em",null,"sameinast")),(0,r.kt)("td",null,"to merge")),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("em",null,"skarast")),(0,r.kt)("td",null,"to overlap")),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("em",null,"skiptast \xe1")),(0,r.kt)("td",null,"to exchange/swap")),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("em",null,"skrifast \xe1")),(0,r.kt)("td",null,"to write to")),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("em",null,"skylmast")),(0,r.kt)("td",null,"to battle (with swords)")),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("em",null,"sl\xe1st")),(0,r.kt)("td",null,"to fight")),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("em",null,"snertast")),(0,r.kt)("td",null,"to touch")),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("em",null,"stangast \xe1")),(0,r.kt)("td",null,"to clash")),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("em",null,"stimpast")),(0,r.kt)("td",null,"to brawl")),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("em",null,"s\xe6ttast")),(0,r.kt)("td",null,"to make up")),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("em",null,"takast \xe1")),(0,r.kt)("td",null,"to compete")),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("em",null,"takast \xed hendur")),(0,r.kt)("td",null,"to shake hands")),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("em",null,"talast vi\xf0")),(0,r.kt)("td",null,"to talk (be on talking terms)")),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("em",null,"tr\xfalofast")),(0,r.kt)("td",null,"to get engaged")),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("em",null,"tuskast")),(0,r.kt)("td",null,"to fight")),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("em",null,"\xfeekkjast")),(0,r.kt)("td",null,"to know")))),(0,r.kt)("h2",{id:"reflexive-meaning"},"Reflexive meaning"),(0,r.kt)("table",null,(0,r.kt)("thead",null,(0,r.kt)("tr",null,(0,r.kt)("th",{width:"35%"},"Icelandic"),(0,r.kt)("th",null,"English"))),(0,r.kt)("tbody",null,(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("em",null,"afvopnast")),(0,r.kt)("td",null,"to disarm oneself")),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("em",null,"bj\xf3\xf0ast til")),(0,r.kt)("td",null,"to offer one\u2019s help")),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("em",null,"b\xfaast til")),(0,r.kt)("td",null,"to prepare oneself for")),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("em",null,"dulb\xfaast")),(0,r.kt)("td",null,"to disguise oneself")),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("em",null,"flytjast")),(0,r.kt)("td",null,"to move house")),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("em",null,"f\xe6rast undan")),(0,r.kt)("td",null,"to get oneself out of, shirk")),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("em",null,"gefast upp")),(0,r.kt)("td",null,"to give up")),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("em",null,"innritast")),(0,r.kt)("td",null,"to register (for school)")),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("em",null,"kl\xe6\xf0ast")),(0,r.kt)("td",null,"to wear")),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("em",null,"komast")),(0,r.kt)("td",null,"to make it, get somewhere")),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("em",null,"krefjast")),(0,r.kt)("td",null,"to demand")),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("em",null,"laumast")),(0,r.kt)("td",null,"to sneak")),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("em",null,"leggjast")),(0,r.kt)("td",null,"to lie down")),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("em",null,"matast")),(0,r.kt)("td",null,"to dine")),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("em",null,"mei\xf0ist")),(0,r.kt)("td",null,"to get hurt")),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("em",null,"segjast")),(0,r.kt)("td",null,"to claim, purport")),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("em",null,"setjast")),(0,r.kt)("td",null,"to sit down")),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("em",null,"slasast")),(0,r.kt)("td",null,"to get injured")),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("em",null,"venjast")),(0,r.kt)("td",null,"to get used to")),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("em",null,"verjast")),(0,r.kt)("td",null,"to protect oneself")))),(0,r.kt)("h2",{id:"verbs-that-change-meaning"},"Verbs that change meaning"),(0,r.kt)("table",null,(0,r.kt)("thead",null,(0,r.kt)("tr",null,(0,r.kt)("th",{colSpan:"2"},"Active"),(0,r.kt)("th",{colSpan:"2"},"Middle")),(0,r.kt)("tr",null,(0,r.kt)("th",{width:"25%"},"Icelandic"),(0,r.kt)("th",{width:"25%"},"English"),(0,r.kt)("th",{width:"25%"},"Icelandic"),(0,r.kt)("th",{width:"25%"},"English"))),(0,r.kt)("tbody",null,(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("em",null,"b\xfaa vi\xf0")),(0,r.kt)("td",null,"to live with, have"),(0,r.kt)("td",null,(0,r.kt)("em",null,"b\xfaast vi\xf0")),(0,r.kt)("td",null,"to expect")),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("em",null,"fara")),(0,r.kt)("td",null,"to go"),(0,r.kt)("td",null,(0,r.kt)("em",null,"farast")),(0,r.kt)("td",null,"to pass away (die)")),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("em",null,"finna")),(0,r.kt)("td",null,"to find"),(0,r.kt)("td",null,(0,r.kt)("em",null,"finnast")),(0,r.kt)("td",null,"to find (as in ",(0,r.kt)("em",null,"m\xe9r finnst gaman a\xf0"),"\u2026)")),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("em",null,"fl\xe6kja")),(0,r.kt)("td",null,"to complicate"),(0,r.kt)("td",null,(0,r.kt)("em",null,"fl\xe6kjast")),(0,r.kt)("td",null,"to get caught in/wander about")),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("em",null,"gera")),(0,r.kt)("td",null,"to do"),(0,r.kt)("td",null,(0,r.kt)("em",null,"gerast")),(0,r.kt)("td",null,"to happen")),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("em",null,"koma a\xf0")),(0,r.kt)("td",null,"to participate in/walk in on"),(0,r.kt)("td",null,(0,r.kt)("em",null,"komast a\xf0")),(0,r.kt)("td",null,"to find out")),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("em",null,"l\xe1ta")),(0,r.kt)("td",null,"to let"),(0,r.kt)("td",null,(0,r.kt)("em",null,"l\xe1tast")),(0,r.kt)("td",null,"to pass away (die)")),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("em",null,"minna \xe1")),(0,r.kt)("td",null,"to remind of"),(0,r.kt)("td",null,(0,r.kt)("em",null,"minnast \xe1")),(0,r.kt)("td",null,"to mention")),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("em",null,"skj\xf3ta")),(0,r.kt)("td",null,"to shoot"),(0,r.kt)("td",null,(0,r.kt)("em",null,"skj\xf3tast")),(0,r.kt)("td",null,"to pop (somewhere), walk quickly")),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("em",null,"standa")),(0,r.kt)("td",null,"to stand"),(0,r.kt)("td",null,(0,r.kt)("em",null,"standast")),(0,r.kt)("td",null,"to withstand, stand up to")),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("em",null,"s\xfdna")),(0,r.kt)("td",null,"to show"),(0,r.kt)("td",null,(0,r.kt)("em",null,"s\xfdnast")),(0,r.kt)("td",null,"to seem")),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("em",null,"taka")),(0,r.kt)("td",null,"to take"),(0,r.kt)("td",null,(0,r.kt)("em",null,"takast")),(0,r.kt)("td",null,"to succeed")),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("em",null,"\xfeykja")),(0,r.kt)("td",null,"to seem/think"),(0,r.kt)("td",null,(0,r.kt)("em",null,"\xfeykjast")),(0,r.kt)("td",null,"to pretend")),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("em",null,"\xfer\xedfa")),(0,r.kt)("td",null,"to clean"),(0,r.kt)("td",null,(0,r.kt)("em",null,"\xfer\xedfast")),(0,r.kt)("td",null,"to thrive")),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("em",null,"\xfev\xe6la")),(0,r.kt)("td",null,"to talk nonsense"),(0,r.kt)("td",null,(0,r.kt)("em",null,"\xfev\xe6last")),(0,r.kt)("td",null,"to wander about")))),(0,r.kt)("h2",{id:"verbs-that-exist-only-in-the-middle-voice"},"Verbs that exist only in the middle voice"),(0,r.kt)("table",null,(0,r.kt)("thead",null,(0,r.kt)("tr",null,(0,r.kt)("th",{width:"35%"},"Icelandic"),(0,r.kt)("th",null,"English"))),(0,r.kt)("tbody",null,(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("em",null,"asnast")),(0,r.kt)("td",null,"to do something stupid")),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("em",null,"atvikast")),(0,r.kt)("td",null,"to happen (by chance)")),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("em",null,"\xe1byrgjast")),(0,r.kt)("td",null,"to take on, become responsible for")),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("em",null,"eignast")),(0,r.kt)("td",null,"to acquire, have (a child), make (a friend)")),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("em",null,"fer\xf0ast")),(0,r.kt)("td",null,"to travel")),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("em",null,"gr\xednast")),(0,r.kt)("td",null,"to joke")),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("em",null,"hagnast")),(0,r.kt)("td",null,"to profit")),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("em",null,"n\xe1lgast")),(0,r.kt)("td",null,"to approach")),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("em",null,"ofmetnast")),(0,r.kt)("td",null,"to get cocky, become arrogant")),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("em",null,"\xf3ttast")),(0,r.kt)("td",null,"to fear")),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("em",null,"rembast")),(0,r.kt)("td",null,"to struggle")),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("em",null,"slysast")),(0,r.kt)("td",null,"to chance, do something by accident")),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("em",null,"t\xe1rast")),(0,r.kt)("td",null,"to tear up, well up")),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("em",null,"ve\xf0rast")),(0,r.kt)("td",null,"to become weathered")),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("em",null,"\xferj\xf3skast")),(0,r.kt)("td",null,"to be stubborn")),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("em",null,"\xfeyrpast")),(0,r.kt)("td",null,"to crowd, throng, cram")),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("em",null,"\xf6\xf0last")),(0,r.kt)("td",null,"to gain, obtain")))))}p.isMDXComponent=!0}}]);