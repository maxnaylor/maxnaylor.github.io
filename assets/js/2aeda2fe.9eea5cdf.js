(self.webpackChunkgramref=self.webpackChunkgramref||[]).push([[3944],{3905:function(t,e,n){"use strict";n.d(e,{Zo:function(){return s},kt:function(){return d}});var l=n(7294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function r(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);e&&(l=l.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,l)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?r(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function m(t,e){if(null==t)return{};var n,l,a=function(t,e){if(null==t)return{};var n,l,a={},r=Object.keys(t);for(l=0;l<r.length;l++)n=r[l],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(l=0;l<r.length;l++)n=r[l],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var k=l.createContext({}),u=function(t){var e=l.useContext(k),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},s=function(t){var e=u(t.components);return l.createElement(k.Provider,{value:e},t.children)},o={inlineCode:"code",wrapper:function(t){var e=t.children;return l.createElement(l.Fragment,{},e)}},p=l.forwardRef((function(t,e){var n=t.components,a=t.mdxType,r=t.originalType,k=t.parentName,s=m(t,["components","mdxType","originalType","parentName"]),p=u(n),d=a,c=p["".concat(k,".").concat(d)]||p[d]||o[d]||r;return n?l.createElement(c,i(i({ref:e},s),{},{components:n})):l.createElement(c,i({ref:e},s))}));function d(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var r=n.length,i=new Array(r);i[0]=p;var m={};for(var k in e)hasOwnProperty.call(e,k)&&(m[k]=e[k]);m.originalType=t,m.mdxType="string"==typeof t?t:a,i[1]=m;for(var u=2;u<r;u++)i[u]=n[u];return l.createElement.apply(null,i)}return l.createElement.apply(null,n)}p.displayName="MDXCreateElement"},1333:function(t,e,n){"use strict";n.d(e,{R:function(){return m}});var l=n(4578),a=n(7294),r=n(4052),i=n.n(r),m=function(t){function e(e){var n;return(n=t.call(this,e)||this).state={termWidth:""},n}(0,l.Z)(e,t);var n=e.prototype;return n.componentDidMount=function(){var t=document.getElementById("term-"+this.props.term).clientWidth,e=document.getElementById("tooltip-"+this.props.term).clientWidth;this.setState({termWidth:t,tooltipWidth:e})},n.offset=function(){var t=0-this.state.tooltipWidth/2+this.state.termWidth/2+"px";return t},n.displayTerm=function(){return this.props.display?this.props.display:this.props.term},n.getIcelandicTerm=function(){var t=this;return i().terms.filter((function(e){return e.term.includes(t.props.term.toLowerCase())}))[0].icelandic},n.render=function(){return a.createElement(a.Fragment,null,a.createElement("span",{className:"term",id:"term-"+this.props.term},this.displayTerm(),a.createElement("span",{id:"tooltip-"+this.props.term,className:"tooltip",style:{left:this.offset()}},"\ud83c\uddee\ud83c\uddf8 ",this.getIcelandicTerm())))},e}(a.Component)},4052:function(t){t.exports={terms:[,{term:"verb",icelandic:"s\xf6gn"},{term:"pronoun",icelandic:"fornafn"},{term:"mood",icelandic:"h\xe1ttur"},{term:"accusative",icelandic:"\xfeolfall"},{term:"active voice",icelandic:"germynd"},{term:"adjective",icelandic:"l\xfdsingaror\xf0"},{term:"case",icelandic:"fall"},{term:"comparative",icelandic:"mi\xf0stig"},{term:"dative",icelandic:"\xfe\xe1gufall"},{term:"definite article",icelandic:"\xe1kve\xf0inn greinir"},{term:"demonstrative pronoun",icelandic:"\xe1bendingarfornafn"},{term:"ending",icelandic:"ending"},{term:"feminine",icelandic:"kvenkyn"},{term:"first person",icelandic:"fyrsta pers\xf3na"},{term:"gender",icelandic:"kyn"},{term:"genitive",icelandic:"eignarfall"},{term:"indefinite pronoun",icelandic:"\xf3\xe1kve\xf0i\xf0 fornafn"},{term:"indicative",icelandic:"frams\xf6guh\xe1ttur"},{term:"imperative",icelandic:"bo\xf0h\xe1ttur"},{term:"infinitive",icelandic:"nafnh\xe1ttur"},{term:"masculine",icelandic:"karlkyn"},{term:"middle voice",icelandic:"mi\xf0mynd"},{term:"neuter",icelandic:"hvorugkyn"},{term:"nominative",icelandic:"nefnifall"},{term:"passive voice",icelandic:"\xfeolmynd"},{term:"past participle",icelandic:"l\xfdsingarh\xe1ttur \xfe\xe1t\xed\xf0ar"},{term:"past tense",icelandic:"\xfe\xe1t\xed\xf0"},{term:"personal pronoun",icelandic:"pers\xf3nufornafn"},{term:"plural",icelandic:"fleirtala"},{term:"positive",icelandic:"frumstig"},{term:"principal parts",icelandic:"kennimyndir"},{term:"reflexive pronoun",icelandic:"afturbeygt fornafn"},{term:"possessive pronoun",icelandic:"eignarfornafn"},{term:"present participle",icelandic:"l\xfdsingarh\xe1ttur n\xfat\xed\xf0ar"},{term:"present tense",icelandic:"n\xfat\xed\xf0"},{term:"second person",icelandic:"\xf6nnur pers\xf3na"},{term:"singular",icelandic:"eintala"},{term:"stem",icelandic:"stofn"},{term:"strong",icelandic:"sterk beyging"},{term:"strong verb",icelandic:"sterk s\xf6gn"},{term:"subjunctive",icelandic:"vi\xf0tengingarh\xe1ttur"},{term:"superlative",icelandic:"efsta stig"},{term:"supine",icelandic:"sagnb\xf3t"},{term:"third person",icelandic:"\xferi\xf0ja pers\xf3na"},{term:"transitive",icelandic:"\xe1hrifss\xf6gn"},{term:"weak",icelandic:"veik beyging"}]}},267:function(t,e,n){"use strict";n.r(e),n.d(e,{assets:function(){return o},contentTitle:function(){return u},default:function(){return c},frontMatter:function(){return k},metadata:function(){return s},toc:function(){return p}});var l=n(7462),a=n(3366),r=(n(7294),n(3905)),i=n(1333),m=["components"],k={id:"dative",title:"Dative",description:"An explanation of the dative case in Icelandic. Find out how to use it and how to form it."},u=void 0,s={unversionedId:"nouns/dative",id:"nouns/dative",title:"Dative",description:"An explanation of the dative case in Icelandic. Find out how to use it and how to form it.",source:"@site/docs/nouns/dative.md",sourceDirName:"nouns",slug:"/nouns/dative",permalink:"/docs/nouns/dative",tags:[],version:"current",frontMatter:{id:"dative",title:"Dative",description:"An explanation of the dative case in Icelandic. Find out how to use it and how to form it."},sidebar:"someSidebar",previous:{title:"Accusative",permalink:"/docs/nouns/accusative"},next:{title:"Genitive",permalink:"/docs/nouns/genitive"}},o={},p=[{value:"Function",id:"function",level:2},{value:"Typical function",id:"typical-function",level:3},{value:"Other uses",id:"other-uses",level:3},{value:"Prepositions",id:"prepositions",level:4},{value:"Impersonal verbs",id:"impersonal-verbs",level:4},{value:"Verbs that have a dative direct object",id:"verbs-that-have-a-dative-direct-object",level:4},{value:"Formation",id:"formation",level:2},{value:"Singular",id:"singular",level:3},{value:"Masculine",id:"masculine",level:4},{value:"When to add <em>-i</em>",id:"when-to-add--i",level:4},{value:"Sound changes (I-shift and vowel breaking)",id:"sound-changes-i-shift-and-vowel-breaking",level:4},{value:"Feminine",id:"feminine",level:4},{value:"Neuter",id:"neuter",level:4},{value:"Plural",id:"plural",level:3},{value:"Exceptions",id:"exceptions",level:4}],d={toc:p};function c(t){var e=t.components,n=(0,a.Z)(t,m);return(0,r.kt)("wrapper",(0,l.Z)({},d,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"function"},"Function"),(0,r.kt)("h3",{id:"typical-function"},"Typical function"),(0,r.kt)("p",null,"The ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)(i.R,{term:"dative",display:"dative case",mdxType:"Term"}))," is typically used to indicate the \u201crecipient\u201d of an action. The recipient can be the person or thing receiving an object or action. Another term for this is the indirect object. Let\u2019s look at some examples:"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("em",{parentName:"p"},"\xc9g \xe6tla a\xf0 gefa ",(0,r.kt)("strong",{parentName:"em"},"honum")," b\xf3k \xed j\xf3lagj\xf6f.",(0,r.kt)("br",null),"Kennarinn segir ",(0,r.kt)("strong",{parentName:"em"},"kr\xf6kkunum")," s\xf6gu."))),(0,r.kt)("p",null,"All the words in bold are in the dative. "),(0,r.kt)("p",null,"In the first example, ",(0,r.kt)("em",{parentName:"p"},"honum")," \u201chim\u201d is in the dative, because ",(0,r.kt)("em",{parentName:"p"},"he")," is the one receiving the ",(0,r.kt)("em",{parentName:"p"},"b\xf3k")," (accusative) as a gift. "),(0,r.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"Pro explanation")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"The dative normally indicates the ",(0,r.kt)("strong",{parentName:"p"},"indirect object")," of a verb."))),(0,r.kt)("h3",{id:"other-uses"},"Other uses"),(0,r.kt)("h4",{id:"prepositions"},"Prepositions"),(0,r.kt)("p",null,"Prepositions can take the dative case:"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("em",{parentName:"p"},"\xc9g er \xe1 ",(0,r.kt)("strong",{parentName:"em"},"kaffih\xfasi"),".",(0,r.kt)("br",null),"Vi\xf0 t\xf6lu\xf0um saman \xed ",(0,r.kt)("strong",{parentName:"em"},"vinnunni"),".",(0,r.kt)("br",null),"El\xedn f\xf3r me\xf0 ",(0,r.kt)("strong",{parentName:"em"},"vinum s\xednum")," \xe1 bar."))),(0,r.kt)("p",null,"The prepositions ",(0,r.kt)("em",{parentName:"p"},"\xe1")," \u201con\u201d, ",(0,r.kt)("em",{parentName:"p"},"\xed")," \u201cin\u201d, ",(0,r.kt)("em",{parentName:"p"},"undir")," \u201cunder\u201d and ",(0,r.kt)("em",{parentName:"p"},"yfir")," \u201cover\u201d can take either the accusative or the dative depending on whether there is motion or lack of motion in a sentence. For an explanation of this, see ",(0,r.kt)("em",{parentName:"p"},(0,r.kt)("a",{parentName:"em",href:"../prepositions/a-i-undir-yfir"},"\xe1, \xed, undir, yfir")),"."),(0,r.kt)("p",null,"Whilst the prepositions ",(0,r.kt)("em",{parentName:"p"},"fyrir")," \u201cfor, before, in front of\u201d, ",(0,r.kt)("em",{parentName:"p"},"me\xf0")," \u201cwith\u201d and ",(0,r.kt)("em",{parentName:"p"},"vi\xf0")," \u201cat, next to\u201d can take either accusative or dative too, the rules for them aren\u2019t to do with motion or lack of motion. See ",(0,r.kt)("em",{parentName:"p"},(0,r.kt)("a",{parentName:"em",href:"../prepositions/fyrir"},"fyrir")),", ",(0,r.kt)("em",{parentName:"p"},(0,r.kt)("a",{parentName:"em",href:"../prepositions/me%C3%B0"},"me\xf0"))," and ",(0,r.kt)("em",{parentName:"p"},(0,r.kt)("a",{parentName:"em",href:"../prepositions/vi%C3%B0"},"vi\xf0"))," respectively for explanations."),(0,r.kt)("p",null,"Finally, there are prepositions like ",(0,r.kt)("em",{parentName:"p"},"af"),", ",(0,r.kt)("em",{parentName:"p"},"fr\xe1")," and ",(0,r.kt)("em",{parentName:"p"},"\xfar")," that always take the accusative. See a ",(0,r.kt)("a",{parentName:"p",href:"/docs/prepositions/governing-dative"},"list of prepositions that govern the dative"),"."),(0,r.kt)("h4",{id:"impersonal-verbs"},"Impersonal verbs"),(0,r.kt)("p",null,"Normally the subject of a sentence is in the nominative. But certain verbs require their subject to be in a different case, and most often that\u2019s the dative (although it can sometimes be the accusative):"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("em",{parentName:"p"},(0,r.kt)("strong",{parentName:"em"},"M\xe9r")," finnst gaman a\xf0 hj\xf3la.",(0,r.kt)("br",null),"Hvernig l\xed\xf0ur ",(0,r.kt)("strong",{parentName:"em"},"\xfe\xe9r"),"?",(0,r.kt)("br",null),(0,r.kt)("strong",{parentName:"em"},"Honum")," k\xf3lna\xf0i miki\xf0 \xfati \xed snj\xf3num."))),(0,r.kt)("p",null,"See a ",(0,r.kt)("a",{parentName:"p",href:"../reference/impersonal#dative"},"list of verbs with a dative subject"),"."),(0,r.kt)("h4",{id:"verbs-that-have-a-dative-direct-object"},"Verbs that have a dative direct object"),(0,r.kt)("p",null,"Although the dative normally indicates the indirect object of a verb, a lot of verbs take a direct object in the dative:"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("em",{parentName:"p"},"Mar\xeda hj\xe1lpar ",(0,r.kt)("strong",{parentName:"em"},"m\xe9r")," oft me\xf0 heimavinnuna.",(0,r.kt)("br",null),"Vi\xf0 eyddum ",(0,r.kt)("strong",{parentName:"em"},"tveimur vikum")," \xe1 Sp\xe1ni.",(0,r.kt)("br",null),"Hann henti ",(0,r.kt)("strong",{parentName:"em"},"boltanum")," \xfat um gluggann."))),(0,r.kt)("p",null,"When you learn a verb, it makes sense to learn the case it governs as well as the group it belongs to."),(0,r.kt)("h2",{id:"formation"},"Formation"),(0,r.kt)("h3",{id:"singular"},"Singular"),(0,r.kt)("h4",{id:"masculine"},"Masculine"),(0,r.kt)("p",null,"To form the dative singular of masculine nouns, follow the rules below."),(0,r.kt)("table",null,(0,r.kt)("tbody",null,(0,r.kt)("tr",null,(0,r.kt)("th",{valign:"top"},"\ud83d\udcaa Strong"),(0,r.kt)("td",null,"Remove the ending and add ",(0,r.kt)("em",null,(0,r.kt)("strong",null,"-i")),(0,r.kt)("table",{class:"clear"},(0,r.kt)("tbody",null,(0,r.kt)("tr",null,(0,r.kt)("td",{width:"150px"},(0,r.kt)("em",null,"hest"),"|",(0,r.kt)("strong",null,(0,r.kt)("em",null,"ur"))),(0,r.kt)("td",null,"\u2192\xa0",(0,r.kt)("em",null,"hest",(0,r.kt)("strong",null,"i")))),(0,r.kt)("tr",null,(0,r.kt)("td",{width:"150px"},(0,r.kt)("em",null,"stein"),"|",(0,r.kt)("strong",null,(0,r.kt)("em",null,"n"))),(0,r.kt)("td",null,"\u2192\xa0",(0,r.kt)("em",null,"stein",(0,r.kt)("strong",null,"i")))),(0,r.kt)("tr",null,(0,r.kt)("td",{width:"150px"},(0,r.kt)("em",null,"spegil"),"|",(0,r.kt)("strong",null,(0,r.kt)("em",null,"l"))),(0,r.kt)("td",null,"\u2192\xa0",(0,r.kt)("em",null,"spegl",(0,r.kt)("strong",null,"i")))),(0,r.kt)("tr",null,(0,r.kt)("td",{colspan:"2"},(0,r.kt)("br",null),"Remove the ending")),(0,r.kt)("tr",null,(0,r.kt)("td",{width:"150px"},(0,r.kt)("em",null,"sta\xf0"),"|",(0,r.kt)("strong",null,(0,r.kt)("em",null,"ur"))),(0,r.kt)("td",null,"\u2192\xa0",(0,r.kt)("em",null,"sta\xf0"))),(0,r.kt)("tr",null,(0,r.kt)("td",{width:"150px"},(0,r.kt)("em",null,"l\xe6kni"),"|",(0,r.kt)("strong",null,(0,r.kt)("em",null,"r"))),(0,r.kt)("td",null,"\u2192\xa0",(0,r.kt)("em",null,"l\xe6kni"))),(0,r.kt)("tr",null,(0,r.kt)("td",{width:"150px"},(0,r.kt)("em",null,"b\xedl"),"|",(0,r.kt)("strong",null,(0,r.kt)("em",null,"l"))),(0,r.kt)("td",null,"\u2192\xa0",(0,r.kt)("em",null,"b\xedll"))))))),(0,r.kt)("tr",null,(0,r.kt)("th",{valign:"top"},"\ud83e\udd40 Weak"),(0,r.kt)("td",null,"Change ",(0,r.kt)("em",null,"-i")," \u2192 ",(0,r.kt)("strong",null,(0,r.kt)("em",null,"-a")),(0,r.kt)("table",{class:"clear"},(0,r.kt)("tbody",null,(0,r.kt)("tr",null,(0,r.kt)("td",{width:"150px"},(0,r.kt)("em",null,"krakki")),(0,r.kt)("td",null,"\u2192\xa0",(0,r.kt)("em",null,"krakk",(0,r.kt)("strong",null,"a")))),(0,r.kt)("tr",null,(0,r.kt)("td",{width:"150px"},(0,r.kt)("em",null,"lampi")),(0,r.kt)("td",null,"\u2192\xa0",(0,r.kt)("em",null,"lamp",(0,r.kt)("strong",null,"a")))),(0,r.kt)("tr",null,(0,r.kt)("td",{width:"150px"},(0,r.kt)("em",null,"penni")),(0,r.kt)("td",null,"\u2192\xa0",(0,r.kt)("em",null,"penn",(0,r.kt)("strong",null,"a")))))))))),(0,r.kt)("h4",{id:"when-to-add--i"},"When to add ",(0,r.kt)("em",{parentName:"h4"},"-i")),(0,r.kt)("p",null,"Strong masculine nouns can be a bit of a pain. The rules for when to add ",(0,r.kt)("em",{parentName:"p"},"-i")," are complex, so get ready \ud83d\ude33"),(0,r.kt)("p",null,"Most masculine nouns do get ",(0,r.kt)("em",{parentName:"p"},"-i")," in the dative, including:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Most nouns that end in ",(0,r.kt)("em",{parentName:"strong"},"-ur")," and form their nominative plural with ",(0,r.kt)("em",{parentName:"strong"},"-ar"),":"),(0,r.kt)("br",null),(0,r.kt)("em",{parentName:"li"},"fiskur")," \u2192 ",(0,r.kt)("em",{parentName:"li"},"fisk",(0,r.kt)("strong",{parentName:"em"},"i")),", ",(0,r.kt)("em",{parentName:"li"},"hestur")," \u2192 ",(0,r.kt)("em",{parentName:"li"},"hest",(0,r.kt)("strong",{parentName:"em"},"i")),", ",(0,r.kt)("em",{parentName:"li"},"hundur")," \u2192 ",(0,r.kt)("em",{parentName:"li"},"hund",(0,r.kt)("strong",{parentName:"em"},"i")),(0,r.kt)("br",null),"(But: ",(0,r.kt)("em",{parentName:"li"},"sk\xe1pur")," \u2192 ",(0,r.kt)("em",{parentName:"li"},"sk\xe1p"),", ",(0,r.kt)("em",{parentName:"li"},"str\xe1kur")," \u2192 ",(0,r.kt)("em",{parentName:"li"},"str\xe1k/str\xe1k",(0,r.kt)("strong",{parentName:"em"},"i")),")"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Nouns that end in ",(0,r.kt)("em",{parentName:"strong"},"-nn"),":"),(0,r.kt)("br",null),(0,r.kt)("em",{parentName:"li"},"steinn")," \u2192 ",(0,r.kt)("em",{parentName:"li"},"stein",(0,r.kt)("strong",{parentName:"em"},"i")),", ",(0,r.kt)("em",{parentName:"li"},"Sp\xe1nn")," \u2192 ",(0,r.kt)("em",{parentName:"li"},"Sp\xe1n",(0,r.kt)("strong",{parentName:"em"},"i")),", ",(0,r.kt)("em",{parentName:"li"},"\xfej\xf3nn")," \u2192 ",(0,r.kt)("em",{parentName:"li"},"\xfej\xf3n",(0,r.kt)("strong",{parentName:"em"},"i")),(0,r.kt)("br",null),"\nNouns ending in ",(0,r.kt)("em",{parentName:"li"},"-inn")," or ",(0,r.kt)("em",{parentName:"li"},"-unn")," get syncope: ",(0,r.kt)("em",{parentName:"li"},"arinn")," \u2192 ",(0,r.kt)("em",{parentName:"li"},"arn",(0,r.kt)("strong",{parentName:"em"},"i")),", ",(0,r.kt)("em",{parentName:"li"},"himinn")," \u2192 ",(0,r.kt)("em",{parentName:"li"},"himn",(0,r.kt)("strong",{parentName:"em"},"i")),", ",(0,r.kt)("em",{parentName:"li"},"morgunn")," \u2192 ",(0,r.kt)("em",{parentName:"li"},"morgn",(0,r.kt)("strong",{parentName:"em"},"i"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Multi-syllable nouns that end in ",(0,r.kt)("em",{parentName:"strong"},"-all"),", ",(0,r.kt)("em",{parentName:"strong"},"-ill")," or ",(0,r.kt)("em",{parentName:"strong"},"-ull"),":"),(0,r.kt)("br",null),(0,r.kt)("em",{parentName:"li"},"gaffall")," \u2192 ",(0,r.kt)("em",{parentName:"li"},"gaffl",(0,r.kt)("strong",{parentName:"em"},"i")),", ",(0,r.kt)("em",{parentName:"li"},"kapall")," \u2192 ",(0,r.kt)("em",{parentName:"li"},"kapl",(0,r.kt)("strong",{parentName:"em"},"i")),", ",(0,r.kt)("em",{parentName:"li"},"spegill")," \u2192 ",(0,r.kt)("em",{parentName:"li"},"spegl",(0,r.kt)("strong",{parentName:"em"},"i")),", ",(0,r.kt)("em",{parentName:"li"},"j\xf6kull")," \u2192 ",(0,r.kt)("em",{parentName:"li"},"j\xf6kl",(0,r.kt)("strong",{parentName:"em"},"i"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Native nouns that end in ",(0,r.kt)("em",{parentName:"strong"},"-ar"),":"),(0,r.kt)("br",null),(0,r.kt)("em",{parentName:"li"},"hamar")," \u2192 ",(0,r.kt)("em",{parentName:"li"},"hamr",(0,r.kt)("strong",{parentName:"em"},"i")),", ",(0,r.kt)("em",{parentName:"li"},"humar")," \u2192 ",(0,r.kt)("em",{parentName:"li"},"humr",(0,r.kt)("strong",{parentName:"em"},"i")),", ",(0,r.kt)("em",{parentName:"li"},"ja\xf0ar")," \u2192 ",(0,r.kt)("em",{parentName:"li"},"ja\xf0r",(0,r.kt)("strong",{parentName:"em"},"i"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Native nouns with no removable ending:"),(0,r.kt)("br",null),(0,r.kt)("em",{parentName:"li"},"fugl")," \u2192 ",(0,r.kt)("em",{parentName:"li"},"fugl",(0,r.kt)("strong",{parentName:"em"},"i")),", ",(0,r.kt)("em",{parentName:"li"},"foss")," \u2192 ",(0,r.kt)("em",{parentName:"li"},"foss",(0,r.kt)("strong",{parentName:"em"},"i")),", ",(0,r.kt)("em",{parentName:"li"},"lax")," \u2192 ",(0,r.kt)("em",{parentName:"li"},"lax",(0,r.kt)("strong",{parentName:"em"},"i")))),(0,r.kt)("p",null,"A large number of strong masculine nouns do not get ",(0,r.kt)("em",{parentName:"p"},"-i")," in the dative. These include:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Many nouns that end in ",(0,r.kt)("em",{parentName:"strong"},"-ur")," and form their nominative plural with ",(0,r.kt)("em",{parentName:"strong"},"-ir"),":"),(0,r.kt)("br",null),(0,r.kt)("em",{parentName:"li"},"dalur")," \u2192 ",(0,r.kt)("em",{parentName:"li"},"dal"),", ",(0,r.kt)("em",{parentName:"li"},"drengur")," \u2192 ",(0,r.kt)("em",{parentName:"li"},"dreng"),", ",(0,r.kt)("em",{parentName:"li"},"hvalur")," \u2192 ",(0,r.kt)("em",{parentName:"li"},"hval"),", ",(0,r.kt)("em",{parentName:"li"},"sta\xf0ur")," \u2192 ",(0,r.kt)("em",{parentName:"li"},"sta\xf0"),(0,r.kt)("br",null),"(But: ",(0,r.kt)("em",{parentName:"li"},"vinur")," \u2192 ",(0,r.kt)("em",{parentName:"li"},"vin",(0,r.kt)("strong",{parentName:"em"},"i")),")"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Single-syllable nouns that end in ",(0,r.kt)("em",{parentName:"strong"},"-ll"),":"),(0,r.kt)("br",null),(0,r.kt)("em",{parentName:"li"},"b\xedll")," \u2192 ",(0,r.kt)("em",{parentName:"li"},"b\xedl"),", ",(0,r.kt)("em",{parentName:"li"},"st\xedll")," \u2192 ",(0,r.kt)("em",{parentName:"li"},"st\xedl")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Nouns that end in ",(0,r.kt)("em",{parentName:"strong"},"-ir"),":"),(0,r.kt)("br",null),(0,r.kt)("em",{parentName:"li"},"l\xe6knir")," \u2192 ",(0,r.kt)("em",{parentName:"li"},"l\xe6kni"),", ",(0,r.kt)("em",{parentName:"li"},"reiknir")," \u2192 ",(0,r.kt)("em",{parentName:"li"},"reikni")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Loanwords with no removable ending:"),(0,r.kt)("br",null),(0,r.kt)("em",{parentName:"li"},"ananas")," \u2192 ",(0,r.kt)("em",{parentName:"li"},"ananas"),", ",(0,r.kt)("em",{parentName:"li"},"bambus")," \u2192 ",(0,r.kt)("em",{parentName:"li"},"bambus"),", ",(0,r.kt)("em",{parentName:"li"},"bar")," \u2192 ",(0,r.kt)("em",{parentName:"li"},"bar"),", ",(0,r.kt)("em",{parentName:"li"},"pipar")," \u2192 ",(0,r.kt)("em",{parentName:"li"},"pipar"),", ",(0,r.kt)("em",{parentName:"li"},"p\xf3ker")," \u2192 ",(0,r.kt)("em",{parentName:"li"},"p\xf3ker"),", ",(0,r.kt)("em",{parentName:"li"},"pr\xf3fessor")," \u2192 ",(0,r.kt)("em",{parentName:"li"},"pr\xf3fessor")," ")),(0,r.kt)("p",null,"There are exceptions to all of these broad rules. For example, ",(0,r.kt)("em",{parentName:"p"},"h\xe6ll")," \u201cheel\u201d can be ",(0,r.kt)("em",{parentName:"p"},"h\xe6l")," or ",(0,r.kt)("em",{parentName:"p"},"h\xe6l",(0,r.kt)("strong",{parentName:"em"},"i"))," in the dative."),(0,r.kt)("h4",{id:"sound-changes-i-shift-and-vowel-breaking"},"Sound changes (I-shift and vowel breaking)"),(0,r.kt)("p",null,"Some strong masculine nouns undergo a set of sound changes in the dative singular (the same vowel change occurs in the nominative and accusative plural too). "),(0,r.kt)("p",null,"Historically these sound changes have different origins, but for modern purposes we can learn them as a set:"),(0,r.kt)("table",null,(0,r.kt)("tbody",null,(0,r.kt)("tr",null,(0,r.kt)("th",{width:"30%"},"Vowel change"),(0,r.kt)("th",{width:"35%"},"Nominative"),(0,r.kt)("th",{width:"35%"},"Dative")),(0,r.kt)("tr",null,(0,r.kt)("th",{align:"left",valign:"top"},(0,r.kt)("em",null,"a")," \u2192 ",(0,r.kt)("em",null,"e")),(0,r.kt)("td",null,(0,r.kt)("em",null,"dagur",(0,r.kt)("br",null))),(0,r.kt)("td",null,(0,r.kt)("em",null,"d",(0,r.kt)("span",{class:"ushift"},"e"),"gi"))),(0,r.kt)("tr",null,(0,r.kt)("th",{align:"left",valign:"top"},(0,r.kt)("em",null,"\xe1")," \u2192 ",(0,r.kt)("em",null,"\xe6")),(0,r.kt)("td",null,(0,r.kt)("em",null,"h\xe1ttur",(0,r.kt)("br",null),"\xfer\xe1\xf0ur",(0,r.kt)("br",null),"\xfe\xe1ttur"),(0,r.kt)("br",null),(0,r.kt)("br",null),"With stem ",(0,r.kt)("em",null,"r"),":",(0,r.kt)("br",null),(0,r.kt)("em",null,"bl\xe1stur")),(0,r.kt)("td",null,(0,r.kt)("em",null,"h",(0,r.kt)("span",{class:"ushift"},"\xe6"),"tti",(0,r.kt)("br",null),"\xfer",(0,r.kt)("span",{class:"ushift"},"\xe6"),"\xf0i",(0,r.kt)("br",null),"\xfe",(0,r.kt)("span",{class:"ushift"},"\xe6"),"tti",(0,r.kt)("br",null),(0,r.kt)("br",null),(0,r.kt)("br",null),"bl",(0,r.kt)("span",{class:"ushift"},"\xe6"),"stri"))),(0,r.kt)("tr",null,(0,r.kt)("th",{align:"left",valign:"top"},(0,r.kt)("em",null,"e")," \u2192 ",(0,r.kt)("em",null,"a")),(0,r.kt)("td",null,(0,r.kt)("em",null,"ketill",(0,r.kt)("br",null),"Egill")),(0,r.kt)("td",null,(0,r.kt)("em",null,"k",(0,r.kt)("span",{class:"ushift"},"a"),"tli",(0,r.kt)("br",null),(0,r.kt)("span",{class:"ushift"},"A"),"gli"))),(0,r.kt)("tr",null,(0,r.kt)("th",{align:"left",valign:"top"},(0,r.kt)("em",null,"j\xf6")," \u2192 ",(0,r.kt)("em",null,"i")),(0,r.kt)("td",null,(0,r.kt)("em",null,"bj\xf6rn",(0,r.kt)("br",null),"fj\xf6r\xf0ur")),(0,r.kt)("td",null,(0,r.kt)("em",null,"b",(0,r.kt)("span",{class:"ushift"},"i"),"rni",(0,r.kt)("br",null),"f",(0,r.kt)("span",{class:"ushift"},"i"),"r\xf0i"))),(0,r.kt)("tr",null,(0,r.kt)("th",{align:"left",valign:"top"},(0,r.kt)("em",null,"\xf6")," \u2192 ",(0,r.kt)("em",null,"e")),(0,r.kt)("td",null,(0,r.kt)("em",null,"\xe1v\xf6xtur",(0,r.kt)("br",null),"k\xf6ttur",(0,r.kt)("br",null),"v\xf6llur",(0,r.kt)("br",null),"v\xf6r\xf0ur")),(0,r.kt)("td",null,(0,r.kt)("em",null,"\xe1v",(0,r.kt)("span",{class:"ushift"},"e"),"xti",(0,r.kt)("br",null),"k",(0,r.kt)("span",{class:"ushift"},"e"),"tti",(0,r.kt)("br",null),"v",(0,r.kt)("span",{class:"ushift"},"e"),"lli",(0,r.kt)("br",null),"v",(0,r.kt)("span",{class:"ushift"},"e"),"r\xf0i"))))),(0,r.kt)("h4",{id:"feminine"},"Feminine"),(0,r.kt)("p",null,"To form the dative singular of feminine nouns, follow the rules below."),(0,r.kt)("table",null,(0,r.kt)("tbody",null,(0,r.kt)("tr",null,(0,r.kt)("th",{valign:"top"},"\ud83d\udcaa Strong"),(0,r.kt)("td",null,"No change",(0,r.kt)("table",{class:"clear"},(0,r.kt)("tbody",null,(0,r.kt)("tr",null,(0,r.kt)("td",{width:"150px"},(0,r.kt)("em",null,"r\xf3s")),(0,r.kt)("td",null,"\u2192\xa0",(0,r.kt)("em",null,"r\xf3s"))),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("em",null,"mj\xf3lk")),(0,r.kt)("td",null,"\u2192\xa0",(0,r.kt)("em",null,"mj\xf3lk"))),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("em",null,"verslun")),(0,r.kt)("td",null,"\u2192\xa0",(0,r.kt)("em",null,"verslun"))),(0,r.kt)("tr",null,(0,r.kt)("td",{colspan:"2"},"But:")),(0,r.kt)("tr",null,(0,r.kt)("td",{width:"150px"},(0,r.kt)("em",null,"\xe6fing")),(0,r.kt)("td",null,"\u2192\xa0",(0,r.kt)("em",null,"\xe6fing",(0,r.kt)("strong",null,"u")))))))),(0,r.kt)("tr",null,(0,r.kt)("th",{valign:"top"},"\ud83e\udd40 Weak"),(0,r.kt)("td",null,"Change ",(0,r.kt)("em",null,"-a")," \u2192 ",(0,r.kt)("strong",null,(0,r.kt)("em",null,"-u")),"\xa0\xa0",(0,r.kt)("small",null,"(+U-shift)"),(0,r.kt)("table",{class:"clear"},(0,r.kt)("tbody",null,(0,r.kt)("tr",null,(0,r.kt)("td",{width:"150px"},(0,r.kt)("em",null,"kona")),(0,r.kt)("td",null,"\u2192\xa0",(0,r.kt)("em",null,"kon",(0,r.kt)("strong",null,"u")))),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("em",null,"kaka")),(0,r.kt)("td",null,"\u2192\xa0\u26a0\ufe0f\xa0",(0,r.kt)("em",null,"k\xf6k",(0,r.kt)("strong",null,"u")))))))))),(0,r.kt)("p",null,"Strong feminine nouns are dead easy in the dative, because they\u2019re exactly the same as the nominative and accusative! The only exceptions are:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Nouns that end in ",(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("em",{parentName:"strong"},"-ing")),", which get a final ",(0,r.kt)("em",{parentName:"li"},"-u")," in the dative (and accusative)."),(0,r.kt)("li",{parentName:"ul"},"Certain female names, such as ",(0,r.kt)("em",{parentName:"li"},"Dagn\xfd")," og ",(0,r.kt)("em",{parentName:"li"},"Sigr\xed\xf0ur"),", which become ",(0,r.kt)("em",{parentName:"li"},"Dagn\xfdj",(0,r.kt)("strong",{parentName:"em"},"u"))," and ",(0,r.kt)("em",{parentName:"li"},"Sigr\xed\xf0",(0,r.kt)("strong",{parentName:"em"},"i"))," in the dative (and accusative). For more examples, see ",(0,r.kt)("a",{parentName:"li",href:"personal-names"},"Personal names"),".")),(0,r.kt)("p",null,"For weak feminine nouns, change the final ",(0,r.kt)("em",{parentName:"p"},"-a")," to ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"-u")),". "),(0,r.kt)("p",null,"A really important point: this final ",(0,r.kt)("em",{parentName:"p"},"-u")," causes U-shift where applicable, meaning that an ",(0,r.kt)("em",{parentName:"p"},"a")," in the stem changes to ",(0,r.kt)("em",{parentName:"p"},"\xf6")," or ",(0,r.kt)("em",{parentName:"p"},"u"),". For an explanation of this process, see ",(0,r.kt)("a",{parentName:"p",href:"../sound-changes/u-shift"},"U-shift"),"."),(0,r.kt)("h4",{id:"neuter"},"Neuter"),(0,r.kt)("p",null,"To form the dative of singular neuter nouns, follow the rules below."),(0,r.kt)("table",null,(0,r.kt)("tbody",null,(0,r.kt)("tr",null,(0,r.kt)("th",{valign:"top"},"\ud83d\udcaa Strong"),(0,r.kt)("td",null,"Add ",(0,r.kt)("em",null,(0,r.kt)("strong",null,"-i")),(0,r.kt)("table",{class:"clear"},(0,r.kt)("tbody",null,(0,r.kt)("tr",null,(0,r.kt)("td",{width:"150px"},(0,r.kt)("em",null,"land")),(0,r.kt)("td",null,"\u2192\xa0",(0,r.kt)("em",null,"land",(0,r.kt)("strong",null,"i")))),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("em",null,"skip")),(0,r.kt)("td",null,"\u2192\xa0",(0,r.kt)("em",null,"skip",(0,r.kt)("strong",null,"i")))),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("em",null,"veski")),(0,r.kt)("td",null,"\u2192\xa0",(0,r.kt)("em",null,"veski"))),(0,r.kt)("tr",null,(0,r.kt)("td",null,"But:")),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("em",null,"tr\xe9")),(0,r.kt)("td",null,"\u2192\xa0",(0,r.kt)("em",null,"tr\xe9"))))))),(0,r.kt)("tr",null,(0,r.kt)("th",{valign:"top"},"\ud83e\udd40 Weak"),(0,r.kt)("td",null,"No change",(0,r.kt)("table",{class:"clear"},(0,r.kt)("tbody",null,(0,r.kt)("tr",null,(0,r.kt)("td",{width:"150px"},(0,r.kt)("em",null,"auga")),(0,r.kt)("td",null,"\u2192\xa0",(0,r.kt)("em",null,"auga"))),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("em",null,"eyra")),(0,r.kt)("td",null,"\u2192\xa0",(0,r.kt)("em",null,"eyra"))))))))),(0,r.kt)("p",null,"The vast majority of strong neuter nouns get ",(0,r.kt)("em",{parentName:"p"},"-i")," in the dative singular. Of course, if the noun already ends in ",(0,r.kt)("em",{parentName:"p"},"-i"),", then we don\u2019t add another one (Icelandic doesn\u2019t really do double vowels)."),(0,r.kt)("p",null,"A handful of nouns that end in ",(0,r.kt)("em",{parentName:"p"},"-\xe9")," don\u2019t get the dative ",(0,r.kt)("em",{parentName:"p"},"-i"),". These are:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},"f\xe9")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},"hn\xe9")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},"tr\xe9"))),(0,r.kt)("p",null,"Others, such as ",(0,r.kt)("em",{parentName:"p"},"hl\xe9")," and ",(0,r.kt)("em",{parentName:"p"},"v\xe9"),", do get the dative ending, e.g. ",(0,r.kt)("em",{parentName:"p"},"hl\xe9",(0,r.kt)("strong",{parentName:"em"},"i")),", ",(0,r.kt)("em",{parentName:"p"},"v\xe9",(0,r.kt)("strong",{parentName:"em"},"i")),"."),(0,r.kt)("p",null,"As in the accusative, weak nouns don\u2019t change. So weak neuter nouns are the same in the nominative, accusative, dative and (sneak peek!) genitive."),(0,r.kt)("h3",{id:"plural"},"Plural"),(0,r.kt)("p",null,"The dative plural ending, ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"-um")),", is one of the most recognisable in Icelandic, as it\u2019s the same for weak and strong nouns in all genders."),(0,r.kt)("table",null,(0,r.kt)("tbody",null,(0,r.kt)("tr",null,(0,r.kt)("th",{width:"10%"},"\xa0"),(0,r.kt)("th",{width:"30"},"Masculine"),(0,r.kt)("th",{width:"30%"},"Feminine"),(0,r.kt)("th",{width:"30%"},"Neuter")),(0,r.kt)("tr",null,(0,r.kt)("th",{valign:"top"},"Strong"),(0,r.kt)("td",{valign:"top"},(0,r.kt)("em",null,"hest",(0,r.kt)("strong",null,"um"),(0,r.kt)("br",null),"st",(0,r.kt)("span",{class:"ushift"},"\xf6"),"\xf0",(0,r.kt)("strong",null,"um"),(0,r.kt)("br",null),"stein",(0,r.kt)("strong",null,"um"),(0,r.kt)("br",null),"b\xedl",(0,r.kt)("strong",null,"um"),(0,r.kt)("br",null),"spegl",(0,r.kt)("strong",null,"um"),(0,r.kt)("br",null),"l\xe6kn",(0,r.kt)("strong",null,"um"))),(0,r.kt)("td",{valign:"top"},(0,r.kt)("em",null,"r\xf3s",(0,r.kt)("strong",null,"um"),(0,r.kt)("br",null),"b\xf3k",(0,r.kt)("strong",null,"um"),(0,r.kt)("br",null),"verslun",(0,r.kt)("strong",null,"um"),(0,r.kt)("br",null),"\xe6fing",(0,r.kt)("strong",null,"um"),(0,r.kt)("br",null),"skel",(0,r.kt)("strong",null,"jum"),(0,r.kt)("br",null),"st\xf6\xf0",(0,r.kt)("strong",null,"vum"))),(0,r.kt)("td",{valign:"top"},(0,r.kt)("em",null,"l",(0,r.kt)("span",{class:"ushift"},"\xf6"),"nd",(0,r.kt)("strong",null,"um"),(0,r.kt)("br",null),"skip",(0,r.kt)("strong",null,"um"),(0,r.kt)("br",null),"vesk",(0,r.kt)("strong",null,"jum")))),(0,r.kt)("tr",null,(0,r.kt)("th",{valign:"top"},"Weak"),(0,r.kt)("td",{valign:"top"},(0,r.kt)("em",null,"kr",(0,r.kt)("span",{class:"ushift"},"\xf6"),"kk",(0,r.kt)("strong",null,"um"),(0,r.kt)("br",null),"l",(0,r.kt)("span",{class:"ushift"},"\xf6"),"mp",(0,r.kt)("strong",null,"um"),(0,r.kt)("br",null),"penn",(0,r.kt)("strong",null,"um"))),(0,r.kt)("td",{valign:"top"},(0,r.kt)("em",null,"kon",(0,r.kt)("strong",null,"um"),(0,r.kt)("br",null),"k",(0,r.kt)("span",{class:"ushift"},"\xf6"),"k",(0,r.kt)("strong",null,"um"))),(0,r.kt)("td",{valign:"top"},(0,r.kt)("em",null,"aug",(0,r.kt)("strong",null,"um"),(0,r.kt)("br",null),"hj",(0,r.kt)("span",{class:"ushift"},"\xf6"),"rt",(0,r.kt)("strong",null,"um")))))),(0,r.kt)("p",null,"As you can see, ",(0,r.kt)("em",{parentName:"p"},"-um")," causes U-shift where possible, e.g. ",(0,r.kt)("em",{parentName:"p"},"sta\xf0ir")," \u2192 ",(0,r.kt)("em",{parentName:"p"},"st",(0,r.kt)("span",{class:"ushift"},"\xf6"),"\xf0um"),"."),(0,r.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),(0,r.kt)("em",{parentName:"h5"},"j"),"-insertion")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"In neuter nouns ending in ",(0,r.kt)("em",{parentName:"p"},"-i")," in the nominative, a ",(0,r.kt)("em",{parentName:"p"},"j")," is inserted before the ",(0,r.kt)("em",{parentName:"p"},"-um")," ending, e.g ",(0,r.kt)("em",{parentName:"p"},"veski")," \u2192 ",(0,r.kt)("em",{parentName:"p"},"vesk",(0,r.kt)("strong",{parentName:"em"},"j"),"um"),", ",(0,r.kt)("em",{parentName:"p"},"t\xe6ki")," \u2192 ",(0,r.kt)("em",{parentName:"p"},"t\xe6k",(0,r.kt)("strong",{parentName:"em"},"j"),"um"),". This is to preserve the palatised pronunciation of ","<","k",">"," (transcribed as /c/)."),(0,r.kt)("p",{parentName:"div"},"A ",(0,r.kt)("em",{parentName:"p"},"j")," is also inserted before the ",(0,r.kt)("em",{parentName:"p"},"-um")," ending in strong feminine nouns ending in ",(0,r.kt)("em",{parentName:"p"},"-l"),", e.g. ",(0,r.kt)("em",{parentName:"p"},"skel")," \u2192 ",(0,r.kt)("em",{parentName:"p"},"skel",(0,r.kt)("strong",{parentName:"em"},"jum")),"."))),(0,r.kt)("h4",{id:"exceptions"},"Exceptions"),(0,r.kt)("p",null,"The dative plural is one of the most regular noun forms. That said, it is Icelandic we\u2019re dealing with here. So there are some exceptions."),(0,r.kt)("table",null,(0,r.kt)("tbody",null,(0,r.kt)("tr",null,(0,r.kt)("th",{width:"33.3%",colspan:"2"},"Masculine"),(0,r.kt)("th",{width:"33.3%",colspan:"2"},"Feminine"),(0,r.kt)("th",{width:"33.3%",colspan:"2"},"Neuter")),(0,r.kt)("tr",null,(0,r.kt)("th",null,"Nom."),(0,r.kt)("th",null,"Dat."),(0,r.kt)("th",null,"Nom."),(0,r.kt)("th",null,"Dat."),(0,r.kt)("th",null,"Nom."),(0,r.kt)("th",null,"Dat.")),(0,r.kt)("tr",null,(0,r.kt)("td",{valign:"top",rowspan:"3"},(0,r.kt)("em",null,"sk\xf3r")),(0,r.kt)("td",{valign:"top",rowspan:"3"},(0,r.kt)("em",null,"sk\xf3",(0,r.kt)("strong",null,"m"))),(0,r.kt)("td",{valign:"top"},(0,r.kt)("em",null,"\xe1r",(0,r.kt)("br",null),"gj\xe1r",(0,r.kt)("br",null),"sp\xe1r")),(0,r.kt)("td",{valign:"top"},(0,r.kt)("em",null,"\xe1",(0,r.kt)("strong",null,"m"),(0,r.kt)("br",null),"gj\xe1",(0,r.kt)("strong",null,"m"),(0,r.kt)("br",null),"sp\xe1",(0,r.kt)("strong",null,"m"))),(0,r.kt)("td",{valign:"top",rowspan:"3"},(0,r.kt)("em",null,"tr\xe9",(0,r.kt)("br",null),"hn\xe9")),(0,r.kt)("td",{valign:"top",rowspan:"3"},(0,r.kt)("em",null,"trj",(0,r.kt)("strong",null,"\xe1m"),(0,r.kt)("br",null),"hnj",(0,r.kt)("strong",null,"\xe1m")))),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("em",null,"k\xf6ngul\xf3")),(0,r.kt)("td",null,(0,r.kt)("em",null,"k\xf6ngul\xf3",(0,r.kt)("strong",null,"m")))),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("em",null,"br\xfdr",(0,r.kt)("br",null),"k\xfdr")),(0,r.kt)("td",null,(0,r.kt)("em",null,"br\xfa",(0,r.kt)("strong",null,"m"),(0,r.kt)("br",null),"k\xfa",(0,r.kt)("strong",null,"m")))))),(0,r.kt)("p",null,"The largest group here is feminine nouns ending in ",(0,r.kt)("em",{parentName:"p"},"\xe1"),", ",(0,r.kt)("em",{parentName:"p"},"\xf3")," or ",(0,r.kt)("em",{parentName:"p"},"\xfa"),". "),(0,r.kt)("p",null,"The masculine and neuter exceptions don\u2019t fit into any group and just need to be learnt by heart \ud83e\udd37\ud83c\udffb\u200d\u2642\ufe0f"))}c.isMDXComponent=!0}}]);