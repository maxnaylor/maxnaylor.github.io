(self.webpackChunkgramref=self.webpackChunkgramref||[]).push([[3617],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return m},kt:function(){return p}});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},m=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},k={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,l=e.originalType,s=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),c=u(n),p=i,d=c["".concat(s,".").concat(p)]||c[p]||k[p]||l;return n?a.createElement(d,r(r({ref:t},m),{},{components:n})):a.createElement(d,r({ref:t},m))}));function p(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var l=n.length,r=new Array(l);r[0]=c;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:i,r[1]=o;for(var u=2;u<l;u++)r[u]=n[u];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},1333:function(e,t,n){"use strict";n.d(t,{R:function(){return o}});var a=n(4578),i=n(7294),l=n(4052),r=n.n(l),o=function(e){function t(t){var n;return(n=e.call(this,t)||this).state={termWidth:""},n}(0,a.Z)(t,e);var n=t.prototype;return n.componentDidMount=function(){var e=document.getElementById("term-"+this.props.term).clientWidth,t=document.getElementById("tooltip-"+this.props.term).clientWidth;this.setState({termWidth:e,tooltipWidth:t})},n.offset=function(){var e=0-this.state.tooltipWidth/2+this.state.termWidth/2+"px";return e},n.displayTerm=function(){return this.props.display?this.props.display:this.props.term},n.getIcelandicTerm=function(){var e=this;return r().terms.filter((function(t){return t.term.includes(e.props.term.toLowerCase())}))[0].icelandic},n.render=function(){return i.createElement(i.Fragment,null,i.createElement("span",{className:"term",id:"term-"+this.props.term},this.displayTerm(),i.createElement("span",{id:"tooltip-"+this.props.term,className:"tooltip",style:{left:this.offset()}},"\ud83c\uddee\ud83c\uddf8 ",this.getIcelandicTerm())))},t}(i.Component)},4052:function(e){e.exports={terms:[,{term:"verb",icelandic:"s\xf6gn"},{term:"pronoun",icelandic:"fornafn"},{term:"mood",icelandic:"h\xe1ttur"},{term:"accusative",icelandic:"\xfeolfall"},{term:"active voice",icelandic:"germynd"},{term:"adjective",icelandic:"l\xfdsingaror\xf0"},{term:"aspiration",icelandic:"fr\xe1bl\xe1stur"},{term:"case",icelandic:"fall"},{term:"comparative",icelandic:"mi\xf0stig"},{term:"consonant",icelandic:"samhlj\xf3\xf0"},{term:"dative",icelandic:"\xfe\xe1gufall"},{term:"definite article",icelandic:"\xe1kve\xf0inn greinir"},{term:"demonstrative pronoun",icelandic:"\xe1bendingarfornafn"},{term:"devoicing",icelandic:"afr\xf6ddun"},{term:"diphthong",icelandic:"tv\xedhlj\xf3\xf0"},{term:"ending",icelandic:"ending"},{term:"feminine",icelandic:"kvenkyn"},{term:"first person",icelandic:"fyrsta pers\xf3na"},{term:"gender",icelandic:"kyn"},{term:"genitive",icelandic:"eignarfall"},{term:"indefinite pronoun",icelandic:"\xf3\xe1kve\xf0i\xf0 fornafn"},{term:"indicative",icelandic:"frams\xf6guh\xe1ttur"},{term:"imperative",icelandic:"bo\xf0h\xe1ttur"},{term:"infinitive",icelandic:"nafnh\xe1ttur"},{term:"masculine",icelandic:"karlkyn"},{term:"middle voice",icelandic:"mi\xf0mynd"},{term:"monophthong",icelandic:"einhlj\xf3\xf0"},{term:"neuter",icelandic:"hvorugkyn"},{term:"nominative",icelandic:"nefnifall"},{term:"passive voice",icelandic:"\xfeolmynd"},{term:"past participle",icelandic:"l\xfdsingarh\xe1ttur \xfe\xe1t\xed\xf0ar"},{term:"past tense",icelandic:"\xfe\xe1t\xed\xf0"},{term:"personal pronoun",icelandic:"pers\xf3nufornafn"},{term:"plural",icelandic:"fleirtala"},{term:"positive",icelandic:"frumstig"},{term:"preaspiration",icelandic:"a\xf0bl\xe1stur"},{term:"preposition",icelandic:"forsetning"},{term:"principal parts",icelandic:"kennimyndir"},{term:"reflexive pronoun",icelandic:"afturbeygt fornafn"},{term:"possessive pronoun",icelandic:"eignarfornafn"},{term:"present participle",icelandic:"l\xfdsingarh\xe1ttur n\xfat\xed\xf0ar"},{term:"present tense",icelandic:"n\xfat\xed\xf0"},{term:"second person",icelandic:"\xf6nnur pers\xf3na"},{term:"singular",icelandic:"eintala"},{term:"stem",icelandic:"stofn"},{term:"strong",icelandic:"sterk beyging"},{term:"strong verb",icelandic:"sterk s\xf6gn"},{term:"subjunctive",icelandic:"vi\xf0tengingarh\xe1ttur"},{term:"superlative",icelandic:"efsta stig"},{term:"supine",icelandic:"sagnb\xf3t"},{term:"third person",icelandic:"\xferi\xf0ja pers\xf3na"},{term:"transitive",icelandic:"\xe1hrifss\xf6gn"},{term:"weak",icelandic:"veik beyging"},{term:"weak verb",icelandic:"veik s\xf6gn"}]}},5285:function(e,t,n){"use strict";n.r(t),n.d(t,{assets:function(){return k},contentTitle:function(){return u},default:function(){return d},frontMatter:function(){return s},metadata:function(){return m},toc:function(){return c}});var a=n(7462),i=n(3366),l=(n(7294),n(3905)),r=n(1333),o=["components"],s={id:"accusative",title:"Accusative",description:"An explanation of the accusative case in Icelandic. Find out how to use it and how to form it."},u=void 0,m={unversionedId:"nouns/accusative",id:"nouns/accusative",title:"Accusative",description:"An explanation of the accusative case in Icelandic. Find out how to use it and how to form it.",source:"@site/docs/nouns/accusative.md",sourceDirName:"nouns",slug:"/nouns/accusative",permalink:"/docs/nouns/accusative",tags:[],version:"current",frontMatter:{id:"accusative",title:"Accusative",description:"An explanation of the accusative case in Icelandic. Find out how to use it and how to form it."},sidebar:"someSidebar",previous:{title:"Introduction to case",permalink:"/docs/nouns/case"},next:{title:"Dative",permalink:"/docs/nouns/dative"}},k={},c=[{value:"Function",id:"function",level:2},{value:"Typical function",id:"typical-function",level:3},{value:"Other uses",id:"other-uses",level:3},{value:"Prepositions",id:"prepositions",level:4},{value:"Impersonal verbs",id:"impersonal-verbs",level:4},{value:"Time expressions with durations",id:"time-expressions-with-durations",level:4},{value:"Formation",id:"formation",level:2},{value:"Singular",id:"singular",level:3},{value:"Masculine",id:"masculine",level:4},{value:"Feminine",id:"feminine",level:4},{value:"Neuter",id:"neuter",level:4},{value:"Plural",id:"plural",level:3},{value:"Masculine",id:"masculine-1",level:4},{value:"Feminine and neuter",id:"feminine-and-neuter",level:4}],p={toc:c};function d(e){var t=e.components,n=(0,i.Z)(e,o);return(0,l.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"function"},"Function"),(0,l.kt)("h3",{id:"typical-function"},"Typical function"),(0,l.kt)("p",null,"The ",(0,l.kt)("strong",{parentName:"p"},(0,l.kt)(r.R,{term:"accusative",display:"accusative case",mdxType:"Term"}))," is typically used to indicate the \u201cpatient\u201d of an action. The patient is basically the object, person or idea that undergoes the action being performed in the sentence. Let\u2019s look at some examples:"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},(0,l.kt)("em",{parentName:"p"},"Krakkinn bor\xf0ar ",(0,l.kt)("strong",{parentName:"em"},"sm\xe1k\xf6kuna"),".",(0,l.kt)("br",null),"J\xf3n keyrir ",(0,l.kt)("strong",{parentName:"em"},"b\xedlinn"),".",(0,l.kt)("br",null),"Mamma kaupir ",(0,l.kt)("strong",{parentName:"em"},"fisk")," og ",(0,l.kt)("strong",{parentName:"em"},"kart\xf6flur"),"."))),(0,l.kt)("p",null,"All the words in bold are in the accusative. "),(0,l.kt)("p",null,"In the first example, ",(0,l.kt)("em",{parentName:"p"},"sm\xe1k\xf6kuna")," \u201cthe cookie\u201d is undergoing the action of being eaten. We show that the cookie is the thing being eaten, and not ",(0,l.kt)("em",{parentName:"p"},"krakkinn")," \u201cthe kid\u201d, by putting the word ",(0,l.kt)("em",{parentName:"p"},"sm\xe1kakan")," in the accusative."),(0,l.kt)("p",null,"It\u2019s the same idea in the second example. ",(0,l.kt)("em",{parentName:"p"},"B\xedlinn")," \u201cthe car\u201d is the thing being driven, so it goes into the accusative. In the last example, ",(0,l.kt)("em",{parentName:"p"},"fisk")," \u201cfish\u201d and ",(0,l.kt)("em",{parentName:"p"},"kart\xf6flur")," \u201cpotatoes\u201d are being bought, so they are also in the accusative."),(0,l.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"Word order")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"Languages without cases, like English, typically indicate what is being done to who with word order. For example, \u201cthe kid eats the cookie\u201d doesn\u2019t mean the same thing as \u201cthe cookie eats the kid\u201d."),(0,l.kt)("p",{parentName:"div"},"Because Icelandic has cases, we can be a lot more flexible with the word order. So ",(0,l.kt)("em",{parentName:"p"},"krakkinn bor\xf0ar sm\xe1k\xf6kuna")," means the same thing as ",(0,l.kt)("em",{parentName:"p"},"sm\xe1k\xf6kuna bor\xf0ar krakkinn"),". This is because ",(0,l.kt)("em",{parentName:"p"},"sm\xe1k\xf6kuna")," is the accusative, and ",(0,l.kt)("em",{parentName:"p"},"krakkinn"),", the doer of the action, is in the nominative."),(0,l.kt)("p",{parentName:"div"},"The normal word order in Icelandic is the same as in English, but it can sometimes be changed around, especially in formal writing or poetry."))),(0,l.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"Pro explanation")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"The accusative normally indicates the ",(0,l.kt)("strong",{parentName:"p"},"direct object")," of a verb."))),(0,l.kt)("h3",{id:"other-uses"},"Other uses"),(0,l.kt)("h4",{id:"prepositions"},"Prepositions"),(0,l.kt)("p",null,"Prepositions can take the accusative case:"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},(0,l.kt)("em",{parentName:"p"},"\xc9g fer \xe1 ",(0,l.kt)("strong",{parentName:"em"},"kaffih\xfas"),".",(0,l.kt)("br",null),"Vi\xf0 t\xf6lu\xf0um saman um ",(0,l.kt)("strong",{parentName:"em"},"vinnuna"),".",(0,l.kt)("br",null),"El\xedn f\xf3r me\xf0 ",(0,l.kt)("strong",{parentName:"em"},"krakkana")," \xed sk\xf3lann."))),(0,l.kt)("p",null,"The prepositions ",(0,l.kt)("em",{parentName:"p"},"\xe1")," \u201con\u201d, ",(0,l.kt)("em",{parentName:"p"},"\xed")," \u201cin\u201d, ",(0,l.kt)("em",{parentName:"p"},"undir")," \u201cunder\u201d and ",(0,l.kt)("em",{parentName:"p"},"yfir")," \u201cover\u201d can take either the accusative or the dative depending on whether there is motion or lack of motion in a sentence. For an explanation of this, see ",(0,l.kt)("em",{parentName:"p"},(0,l.kt)("a",{parentName:"em",href:"../prepositions/a-i-undir-yfir"},"\xe1, \xed, undir, yfir")),"."),(0,l.kt)("p",null,"Whilst the prepositions ",(0,l.kt)("em",{parentName:"p"},"fyrir")," \u201cfor, before, in front of\u201d, ",(0,l.kt)("em",{parentName:"p"},"me\xf0")," \u201cwith\u201d and ",(0,l.kt)("em",{parentName:"p"},"vi\xf0")," \u201cat, next to\u201d can take either accusative or dative too, the rules for them aren\u2019t to do with motion or lack of motion. See ",(0,l.kt)("em",{parentName:"p"},(0,l.kt)("a",{parentName:"em",href:"../prepositions/fyrir"},"fyrir")),", ",(0,l.kt)("em",{parentName:"p"},(0,l.kt)("a",{parentName:"em",href:"../prepositions/me%C3%B0"},"me\xf0"))," and ",(0,l.kt)("em",{parentName:"p"},(0,l.kt)("a",{parentName:"em",href:"../prepositions/vi%C3%B0"},"vi\xf0"))," respectively for explanations."),(0,l.kt)("p",null,"Finally, there are prepositions like ",(0,l.kt)("em",{parentName:"p"},"um")," and ",(0,l.kt)("em",{parentName:"p"},"gegnum")," that always take the accusative. See a ",(0,l.kt)("a",{parentName:"p",href:"/docs/prepositions/governing-accusative"},"list of prepositions that govern the accusative"),"."),(0,l.kt)("h4",{id:"impersonal-verbs"},"Impersonal verbs"),(0,l.kt)("p",null,"Normally the subject of a sentence is in the nominative. But certain verbs require their subject to be in a different case, and sometimes that\u2019s the accusative:"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},(0,l.kt)("em",{parentName:"p"},(0,l.kt)("strong",{parentName:"em"},"Mig")," langar \xed \xeds.",(0,l.kt)("br",null),"Vantar ",(0,l.kt)("strong",{parentName:"em"},"\xfeig")," ekki n\xfdja sk\xf3?"))),(0,l.kt)("p",null,"See a ",(0,l.kt)("a",{parentName:"p",href:"../reference/impersonal#accusative"},"list of verbs with an accusative subject"),"."),(0,l.kt)("h4",{id:"time-expressions-with-durations"},"Time expressions with durations"),(0,l.kt)("p",null,"Expressions of time often involve a preposition, for example ",(0,l.kt)("em",{parentName:"p"},"\xed dag")," \u201ctoday\u201d or ",(0,l.kt)("em",{parentName:"p"},"\xe1 morgun")," \u201ctomorrow\u201d. That preposition can take either the accusative or dative case, and there\u2019s not really much logic as to when which case is used."),(0,l.kt)("p",null,"Some time expressions involving durations don\u2019t have any prepositions. In this situation, the time expression will be in the accusative:"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},(0,l.kt)("em",{parentName:"p"},"Stef\xe1n vinnur ",(0,l.kt)("strong",{parentName:"em"},"alla daga")," til kl. 18.",(0,l.kt)("br",null),"Vi\xf0 bjuggum ",(0,l.kt)("strong",{parentName:"em"},"m\xf6rg \xe1r")," \xe1 \xcdsafir\xf0i.",(0,l.kt)("br",null),"\xc9g var ",(0,l.kt)("strong",{parentName:"em"},"fj\xf3ra t\xedma")," a\xf0 \xfevo b\xedlinn \xed g\xe6r."))),(0,l.kt)("h2",{id:"formation"},"Formation"),(0,l.kt)("h3",{id:"singular"},"Singular"),(0,l.kt)("h4",{id:"masculine"},"Masculine"),(0,l.kt)("p",null,"To form the accusative singular of masculine nouns, follow the rules below."),(0,l.kt)("table",null,(0,l.kt)("tbody",null,(0,l.kt)("tr",null,(0,l.kt)("th",{valign:"top"},"\ud83d\udcaa\xa0Strong"),(0,l.kt)("td",null,"Remove the ending",(0,l.kt)("table",{class:"clear"},(0,l.kt)("tbody",null,(0,l.kt)("tr",null,(0,l.kt)("td",{width:"150px"},(0,l.kt)("em",null,"hest"),"|",(0,l.kt)("strong",null,(0,l.kt)("em",null,"ur"))),(0,l.kt)("td",null,"\u2192\xa0",(0,l.kt)("em",null,"hest"))),(0,l.kt)("tr",null,(0,l.kt)("td",null,(0,l.kt)("em",null,"l\xe6kni"),"|",(0,l.kt)("strong",null,(0,l.kt)("em",null,"r"))),(0,l.kt)("td",null,"\u2192\xa0",(0,l.kt)("em",null,"l\xe6kni"))),(0,l.kt)("tr",null,(0,l.kt)("td",null,(0,l.kt)("em",null,"b\xedl"),"|",(0,l.kt)("strong",null,(0,l.kt)("em",null,"l"))),(0,l.kt)("td",null,"\u2192\xa0",(0,l.kt)("em",null,"b\xedl"))),(0,l.kt)("tr",null,(0,l.kt)("td",null,(0,l.kt)("em",null,"stein"),"|",(0,l.kt)("strong",null,(0,l.kt)("em",null,"n"))),(0,l.kt)("td",null,"\u2192\xa0",(0,l.kt)("em",null,"stein"))))))),(0,l.kt)("tr",null,(0,l.kt)("th",{valign:"top"},"\ud83e\udd40\xa0Weak"),(0,l.kt)("td",null,"Change ",(0,l.kt)("em",null,"-i")," \u2192 ",(0,l.kt)("strong",null,(0,l.kt)("em",null,"-a")),(0,l.kt)("table",{class:"clear"},(0,l.kt)("tbody",null,(0,l.kt)("tr",null,(0,l.kt)("td",{width:"150px"},(0,l.kt)("em",null,"krakki")),(0,l.kt)("td",null,"\u2192\xa0",(0,l.kt)("em",null,"krakk",(0,l.kt)("strong",null,"a")))),(0,l.kt)("tr",null,(0,l.kt)("td",{width:"150px"},(0,l.kt)("em",null,"lampi")),(0,l.kt)("td",null,"\u2192\xa0",(0,l.kt)("em",null,"lamp",(0,l.kt)("strong",null,"a")))),(0,l.kt)("tr",null,(0,l.kt)("td",{width:"150px"},(0,l.kt)("em",null,"penni")),(0,l.kt)("td",null,"\u2192\xa0",(0,l.kt)("em",null,"penn",(0,l.kt)("strong",null,"a")))))))))),(0,l.kt)("p",null,"The rule for strong nouns is simply to remove the ending. Some notes about endings of strong masculine nouns:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"For ",(0,l.kt)("strong",{parentName:"li"},(0,l.kt)("em",{parentName:"strong"},"-ir")),", only the ",(0,l.kt)("em",{parentName:"li"},"-r")," is removable in the accusative, the ",(0,l.kt)("em",{parentName:"li"},"i")," remains."),(0,l.kt)("li",{parentName:"ul"},"For ",(0,l.kt)("strong",{parentName:"li"},(0,l.kt)("em",{parentName:"strong"},"-ll"))," and ",(0,l.kt)("strong",{parentName:"li"},(0,l.kt)("em",{parentName:"strong"},"-nn")),", only the second consonant is removable. The first consonant is part of the stem of the word.")),(0,l.kt)("p",null,"For weak nouns, change the final ",(0,l.kt)("em",{parentName:"p"},"-i")," to ",(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("em",{parentName:"strong"},"-a")),"."),(0,l.kt)("h4",{id:"feminine"},"Feminine"),(0,l.kt)("p",null,"To form the accusative singular of feminine nouns, follow the rules below."),(0,l.kt)("table",null,(0,l.kt)("tbody",null,(0,l.kt)("tr",null,(0,l.kt)("th",{valign:"top"},"\ud83d\udcaa\xa0Strong"),(0,l.kt)("td",null,"No change",(0,l.kt)("table",{class:"clear"},(0,l.kt)("tbody",null,(0,l.kt)("tr",null,(0,l.kt)("td",{width:"150px"},(0,l.kt)("em",null,"r\xf3s")),(0,l.kt)("td",null,"\u2192\xa0",(0,l.kt)("em",null,"r\xf3s"))),(0,l.kt)("tr",null,(0,l.kt)("td",null,(0,l.kt)("em",null,"mj\xf3lk")),(0,l.kt)("td",null,"\u2192\xa0",(0,l.kt)("em",null,"mj\xf3lk"))),(0,l.kt)("tr",null,(0,l.kt)("td",null,(0,l.kt)("em",null,"menntun")),(0,l.kt)("td",null,"\u2192\xa0",(0,l.kt)("em",null,"menntun"))),(0,l.kt)("tr",null,(0,l.kt)("td",{colspan:"2"},"But:")),(0,l.kt)("tr",null,(0,l.kt)("td",{width:"150px"},(0,l.kt)("em",null,"\xe6fing")),(0,l.kt)("td",null,"\u2192\xa0",(0,l.kt)("em",null,"\xe6fing",(0,l.kt)("strong",null,"u")))))))),(0,l.kt)("tr",null,(0,l.kt)("th",{valign:"top"},"\ud83e\udd40\xa0Weak"),(0,l.kt)("td",null,"Change ",(0,l.kt)("em",null,"-a")," \u2192 ",(0,l.kt)("strong",null,(0,l.kt)("em",null,"-u")),"\xa0\xa0",(0,l.kt)("small",null,"(+U-shift)"),(0,l.kt)("table",{class:"clear"},(0,l.kt)("tbody",null,(0,l.kt)("tr",null,(0,l.kt)("td",{width:"150px"},(0,l.kt)("em",null,"kona")),(0,l.kt)("td",null,"\u2192\xa0",(0,l.kt)("em",null,"kon",(0,l.kt)("strong",null,"u")))),(0,l.kt)("tr",null,(0,l.kt)("td",null,(0,l.kt)("em",null,"kaka")),(0,l.kt)("td",null,"\u2192\xa0\u26a0\ufe0f\xa0",(0,l.kt)("em",null,"k\xf6k",(0,l.kt)("strong",null,"u")))))))))),(0,l.kt)("p",null,"Strong feminine nouns are dead easy in the accusative, because they\u2019re exactly the same as the nominative! The only exceptions are:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Nouns that end in ",(0,l.kt)("strong",{parentName:"li"},(0,l.kt)("em",{parentName:"strong"},"-ing")),", which get a final ",(0,l.kt)("em",{parentName:"li"},"-u")," in the accusative."),(0,l.kt)("li",{parentName:"ul"},"Certain female names, such as ",(0,l.kt)("em",{parentName:"li"},"Dagn\xfd")," og ",(0,l.kt)("em",{parentName:"li"},"Sigr\xed\xf0ur"),", which become ",(0,l.kt)("em",{parentName:"li"},"Dagn\xfdj",(0,l.kt)("strong",{parentName:"em"},"u"))," and ",(0,l.kt)("em",{parentName:"li"},"Sigr\xed\xf0",(0,l.kt)("strong",{parentName:"em"},"i"))," in the accusative. For more examples, see ",(0,l.kt)("a",{parentName:"li",href:"personal-names"},"Personal names"),".")),(0,l.kt)("p",null,"For weak feminine nouns, change the final ",(0,l.kt)("em",{parentName:"p"},"-a")," to ",(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("em",{parentName:"strong"},"-u")),". "),(0,l.kt)("p",null,"A really important point: this final ",(0,l.kt)("em",{parentName:"p"},"-u")," causes U-shift where applicable, meaning that an ",(0,l.kt)("em",{parentName:"p"},"a")," in the stem changes to ",(0,l.kt)("em",{parentName:"p"},"\xf6")," or ",(0,l.kt)("em",{parentName:"p"},"u"),". For an explanation of this process, see ",(0,l.kt)("a",{parentName:"p",href:"../sound-changes/u-shift"},"U-shift"),"."),(0,l.kt)("h4",{id:"neuter"},"Neuter"),(0,l.kt)("p",null,"The accusative of all neuter nouns is the same as the nominative."),(0,l.kt)("table",null,(0,l.kt)("tbody",null,(0,l.kt)("tr",null,(0,l.kt)("th",{valign:"top"},"\ud83d\udcaa\xa0Strong"),(0,l.kt)("td",null,"No change",(0,l.kt)("table",{class:"clear"},(0,l.kt)("tbody",null,(0,l.kt)("tr",null,(0,l.kt)("td",{width:"150px"},(0,l.kt)("em",null,"land")),(0,l.kt)("td",null,"\u2192\xa0",(0,l.kt)("em",null,"land"))),(0,l.kt)("tr",null,(0,l.kt)("td",null,(0,l.kt)("em",null,"skip")),(0,l.kt)("td",null,"\u2192\xa0",(0,l.kt)("em",null,"skip"))),(0,l.kt)("tr",null,(0,l.kt)("td",null,(0,l.kt)("em",null,"tr\xe9")),(0,l.kt)("td",null,"\u2192\xa0",(0,l.kt)("em",null,"tr\xe9"))))))),(0,l.kt)("tr",null,(0,l.kt)("th",{valign:"top"},"\ud83e\udd40\xa0Weak"),(0,l.kt)("td",null,"No change",(0,l.kt)("table",{class:"clear"},(0,l.kt)("tbody",null,(0,l.kt)("tr",null,(0,l.kt)("td",{width:"150px"},(0,l.kt)("em",null,"auga")),(0,l.kt)("td",null,"\u2192\xa0",(0,l.kt)("em",null,"auga"))),(0,l.kt)("tr",null,(0,l.kt)("td",null,(0,l.kt)("em",null,"eyra")),(0,l.kt)("td",null,"\u2192\xa0",(0,l.kt)("em",null,"eyra"))))))))),(0,l.kt)("p",null,"That\u2019s right: neuter nouns are exactly the same in the nominative and the accusative. "),(0,l.kt)("p",null,"This is what distinguishes weak neuter nouns from weak feminine nouns (which both end in ",(0,l.kt)("em",{parentName:"p"},"\u2011","a")," in the nominative). Weak feminine nouns get ",(0,l.kt)("em",{parentName:"p"},"\u2011","u")," in the accusative, whereas weak neuter nouns keep their ",(0,l.kt)("em",{parentName:"p"},"\u2011","a"),"."),(0,l.kt)("h3",{id:"plural"},"Plural"),(0,l.kt)("h4",{id:"masculine-1"},"Masculine"),(0,l.kt)("p",null,"To form the accusative plural of a masculine noun, first find its ",(0,l.kt)("a",{parentName:"p",href:"number#masculine"},"plural form in the nominative"),". The rule is this:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"If the nominative plural ends in ",(0,l.kt)("em",{parentName:"li"},"\u2011","ar")," or ",(0,l.kt)("em",{parentName:"li"},"\u2011","ir"),", ",(0,l.kt)("strong",{parentName:"li"},"remove the final ",(0,l.kt)("em",{parentName:"strong"},"\u2011","r")),";"),(0,l.kt)("li",{parentName:"ul"},"If the nominative plural ends in ",(0,l.kt)("em",{parentName:"li"},"\u2011","ur"),", ",(0,l.kt)("strong",{parentName:"li"},"do nothing"),"! \ud83e\udd73")),(0,l.kt)("p",null,"Let\u2019s look at some examples:"),(0,l.kt)("figure",null,(0,l.kt)("table",null,(0,l.kt)("thead",null,(0,l.kt)("tr",null,(0,l.kt)("th",null,"\xa0"),(0,l.kt)("th",{colSpan:"2"},"Nominative"),(0,l.kt)("th",null,"Accusative"))),(0,l.kt)("tbody",null,(0,l.kt)("tr",null,(0,l.kt)("th",{valign:"top"},(0,l.kt)("em",null,"\u2011ar")),(0,l.kt)("td",{width:"40%"},(0,l.kt)("em",null,"hestar, l\xe6knar",(0,l.kt)("br",null),"b\xedlar, gafflar, speglar, steinar",(0,l.kt)("br",null),"fossar, fuglar, pr\xf3fessorar",(0,l.kt)("br",null),"pennar, krakkar")),(0,l.kt)("th",{rowSpan:"2"},"Remove\xa0",(0,l.kt)("em",null,"\u2011r"),(0,l.kt)("br",null),"\u2192"),(0,l.kt)("td",{width:"40%"},(0,l.kt)("em",null,"hest",(0,l.kt)("strong",null,"a"),", l\xe6kn",(0,l.kt)("strong",null,"a"),(0,l.kt)("br",null),"b\xedl",(0,l.kt)("strong",null,"a"),", gaffl",(0,l.kt)("strong",null,"a"),", spegl",(0,l.kt)("strong",null,"a"),", stein",(0,l.kt)("strong",null,"a"),(0,l.kt)("br",null),"foss",(0,l.kt)("strong",null,"a"),", fugl",(0,l.kt)("strong",null,"a"),", pr\xf3fessor",(0,l.kt)("strong",null,"a"),(0,l.kt)("br",null),"penn",(0,l.kt)("strong",null,"a"),", krakk",(0,l.kt)("strong",null,"a")))),(0,l.kt)("tr",null,(0,l.kt)("th",{valign:"top"},(0,l.kt)("em",null,"\u2011ir")),(0,l.kt)("td",null,(0,l.kt)("em",null,"sta\xf0ir, gestir, hvalir",(0,l.kt)("br",null),"Danir")),(0,l.kt)("td",null,(0,l.kt)("em",null,"sta\xf0",(0,l.kt)("strong",null,"i"),", gest",(0,l.kt)("strong",null,"i"),", hval",(0,l.kt)("strong",null,"i"),(0,l.kt)("br",null),"Dan",(0,l.kt)("strong",null,"i")))),(0,l.kt)("tr",null,(0,l.kt)("th",{valign:"top"},(0,l.kt)("em",null,"\u2011ur")),(0,l.kt)("td",null,(0,l.kt)("em",null,"nemendur, hlustendur",(0,l.kt)("br",null),"br\xe6\xf0ur, fe\xf0ur",(0,l.kt)("br",null),"b\xe6ndur, fr\xe6ndur")),(0,l.kt)("th",null,"Do\xa0nothing",(0,l.kt)("br",null),"\u2192"),(0,l.kt)("td",null,(0,l.kt)("em",null,"nemendur, hlustendur",(0,l.kt)("br",null),"br\xe6\xf0ur, fe\xf0ur",(0,l.kt)("br",null),"b\xe6ndur, fr\xe6ndur")))))),(0,l.kt)("p",null,"Not too complicated really! \ud83d\ude01"),(0,l.kt)("h4",{id:"feminine-and-neuter"},"Feminine and neuter"),(0,l.kt)("p",null,"Feminine and neuter nouns are both ",(0,l.kt)("strong",{parentName:"p"},"exactly the same in the nominative and accusative"),". One less rule to remember! "),(0,l.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"Find out how to form the plural of ",(0,l.kt)("a",{parentName:"p",href:"number#feminine"},"feminine nouns")," and ",(0,l.kt)("a",{parentName:"p",href:"number#neuter"},"neuter nouns"),"."))))}d.isMDXComponent=!0}}]);