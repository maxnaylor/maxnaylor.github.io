(self.webpackChunkgramref=self.webpackChunkgramref||[]).push([[9005],{3905:function(t,e,n){"use strict";n.d(e,{Zo:function(){return m},kt:function(){return d}});var l=n(7294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);e&&(l=l.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,l)}return n}function r(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,l,a=function(t,e){if(null==t)return{};var n,l,a={},i=Object.keys(t);for(l=0;l<i.length;l++)n=i[l],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(l=0;l<i.length;l++)n=i[l],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var s=l.createContext({}),u=function(t){var e=l.useContext(s),n=e;return t&&(n="function"==typeof t?t(e):r(r({},e),t)),n},m=function(t){var e=u(t.components);return l.createElement(s.Provider,{value:e},t.children)},k={inlineCode:"code",wrapper:function(t){var e=t.children;return l.createElement(l.Fragment,{},e)}},p=l.forwardRef((function(t,e){var n=t.components,a=t.mdxType,i=t.originalType,s=t.parentName,m=o(t,["components","mdxType","originalType","parentName"]),p=u(n),d=a,c=p["".concat(s,".").concat(d)]||p[d]||k[d]||i;return n?l.createElement(c,r(r({ref:e},m),{},{components:n})):l.createElement(c,r({ref:e},m))}));function d(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var i=n.length,r=new Array(i);r[0]=p;var o={};for(var s in e)hasOwnProperty.call(e,s)&&(o[s]=e[s]);o.originalType=t,o.mdxType="string"==typeof t?t:a,r[1]=o;for(var u=2;u<i;u++)r[u]=n[u];return l.createElement.apply(null,r)}return l.createElement.apply(null,n)}p.displayName="MDXCreateElement"},1333:function(t,e,n){"use strict";n.d(e,{R:function(){return o}});var l=n(4578),a=n(7294),i=n(4052),r=n.n(i),o=function(t){function e(e){var n;return(n=t.call(this,e)||this).state={termWidth:""},n}(0,l.Z)(e,t);var n=e.prototype;return n.componentDidMount=function(){var t=document.getElementById("term-"+this.props.term).clientWidth,e=document.getElementById("tooltip-"+this.props.term).clientWidth;this.setState({termWidth:t,tooltipWidth:e})},n.offset=function(){var t=0-this.state.tooltipWidth/2+this.state.termWidth/2+"px";return t},n.displayTerm=function(){return this.props.display?this.props.display:this.props.term},n.getIcelandicTerm=function(){var t=this;return r().terms.filter((function(e){return e.term.includes(t.props.term.toLowerCase())}))[0].icelandic},n.render=function(){return a.createElement(a.Fragment,null,a.createElement("span",{className:"term",id:"term-"+this.props.term},this.displayTerm(),a.createElement("span",{id:"tooltip-"+this.props.term,className:"tooltip",style:{left:this.offset()}},"\ud83c\uddee\ud83c\uddf8 ",this.getIcelandicTerm())))},e}(a.Component)},4052:function(t){t.exports={terms:[,{term:"verb",icelandic:"s\xf6gn"},{term:"pronoun",icelandic:"fornafn"},{term:"mood",icelandic:"h\xe1ttur"},{term:"accusative",icelandic:"\xfeolfall"},{term:"active voice",icelandic:"germynd"},{term:"adjective",icelandic:"l\xfdsingaror\xf0"},{term:"aspiration",icelandic:"fr\xe1bl\xe1stur"},{term:"case",icelandic:"fall"},{term:"comparative",icelandic:"mi\xf0stig"},{term:"consonant",icelandic:"samhlj\xf3\xf0"},{term:"dative",icelandic:"\xfe\xe1gufall"},{term:"definite article",icelandic:"\xe1kve\xf0inn greinir"},{term:"demonstrative pronoun",icelandic:"\xe1bendingarfornafn"},{term:"devoicing",icelandic:"afr\xf6ddun"},{term:"diphthong",icelandic:"tv\xedhlj\xf3\xf0"},{term:"direct object",icelandic:"beint andlag"},{term:"ending",icelandic:"ending"},{term:"feminine",icelandic:"kvenkyn"},{term:"first person",icelandic:"fyrsta pers\xf3na"},{term:"gender",icelandic:"kyn"},{term:"genitive",icelandic:"eignarfall"},{term:"indefinite pronoun",icelandic:"\xf3\xe1kve\xf0i\xf0 fornafn"},{term:"indicative",icelandic:"frams\xf6guh\xe1ttur"},{term:"indirect object",icelandic:"\xf3beint andlag"},{term:"imperative",icelandic:"bo\xf0h\xe1ttur"},{term:"infinitive",icelandic:"nafnh\xe1ttur"},{term:"masculine",icelandic:"karlkyn"},{term:"middle voice",icelandic:"mi\xf0mynd"},{term:"monophthong",icelandic:"einhlj\xf3\xf0"},{term:"neuter",icelandic:"hvorugkyn"},{term:"nominative",icelandic:"nefnifall"},{term:"passive voice",icelandic:"\xfeolmynd"},{term:"past participle",icelandic:"l\xfdsingarh\xe1ttur \xfe\xe1t\xed\xf0ar"},{term:"past tense",icelandic:"\xfe\xe1t\xed\xf0"},{term:"personal pronoun",icelandic:"pers\xf3nufornafn"},{term:"plural",icelandic:"fleirtala"},{term:"positive",icelandic:"frumstig"},{term:"preaspiration",icelandic:"a\xf0bl\xe1stur"},{term:"preposition",icelandic:"forsetning"},{term:"principal parts",icelandic:"kennimyndir"},{term:"reflexive pronoun",icelandic:"afturbeygt fornafn"},{term:"possessive pronoun",icelandic:"eignarfornafn"},{term:"present participle",icelandic:"l\xfdsingarh\xe1ttur n\xfat\xed\xf0ar"},{term:"present tense",icelandic:"n\xfat\xed\xf0"},{term:"second person",icelandic:"\xf6nnur pers\xf3na"},{term:"singular",icelandic:"eintala"},{term:"stem",icelandic:"stofn"},{term:"strong",icelandic:"sterk beyging"},{term:"strong verb",icelandic:"sterk s\xf6gn"},{term:"subjunctive",icelandic:"vi\xf0tengingarh\xe1ttur"},{term:"superlative",icelandic:"efsta stig"},{term:"supine",icelandic:"sagnb\xf3t"},{term:"third person",icelandic:"\xferi\xf0ja pers\xf3na"},{term:"transitive",icelandic:"\xe1hrifss\xf6gn"},{term:"weak",icelandic:"veik beyging"},{term:"weak verb",icelandic:"veik s\xf6gn"}]}},7998:function(t,e,n){"use strict";n.r(e),n.d(e,{assets:function(){return k},contentTitle:function(){return u},default:function(){return c},frontMatter:function(){return s},metadata:function(){return m},toc:function(){return p}});var l=n(7462),a=n(3366),i=(n(7294),n(3905)),r=n(1333),o=["components"],s={id:"genitive",title:"Genitive",description:"An explanation of the genitive case in Icelandic. Find out how to use it and how to form it."},u=void 0,m={unversionedId:"nouns/genitive",id:"nouns/genitive",title:"Genitive",description:"An explanation of the genitive case in Icelandic. Find out how to use it and how to form it.",source:"@site/docs/nouns/genitive.md",sourceDirName:"nouns",slug:"/nouns/genitive",permalink:"/docs/nouns/genitive",tags:[],version:"current",frontMatter:{id:"genitive",title:"Genitive",description:"An explanation of the genitive case in Icelandic. Find out how to use it and how to form it."},sidebar:"someSidebar",previous:{title:"Dative",permalink:"/docs/nouns/dative"},next:{title:"Introduction to adjectives",permalink:"/docs/adjectives/adjective-intro"}},k={},p=[{value:"Function",id:"function",level:2},{value:"Typical function",id:"typical-function",level:3},{value:"Other uses",id:"other-uses",level:3},{value:"Prepositions",id:"prepositions",level:4},{value:"As an adjective complement",id:"as-an-adjective-complement",level:4},{value:"Verbs that have a genitive direct object",id:"verbs-that-have-a-genitive-direct-object",level:4},{value:"Genitive avoidance",id:"genitive-avoidance",level:3},{value:"Formation",id:"formation",level:2},{value:"Singular",id:"singular",level:3},{value:"Masculine",id:"masculine",level:4},{value:"Feminine",id:"feminine",level:4},{value:"Neuter",id:"neuter",level:4},{value:"Plural",id:"plural",level:3},{value:"Genitive plural with <em>-na</em>",id:"genitive-plural-with--na",level:4}],d={toc:p};function c(t){var e=t.components,n=(0,a.Z)(t,o);return(0,i.kt)("wrapper",(0,l.Z)({},d,n,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"function"},"Function"),(0,i.kt)("h3",{id:"typical-function"},"Typical function"),(0,i.kt)("p",null,"The ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)(r.R,{term:"genitive",display:"genitive case",mdxType:"Term"}))," is typically used to indicate the possessor of an object: "),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("em",{parentName:"p"},"\xdeetta er t\xf6lva ",(0,i.kt)("strong",{parentName:"em"},"J\xf3ns J\xf3nssonar"),".",(0,i.kt)("br",null),"H\xfasi\xf0 er \xed eigu ",(0,i.kt)("strong",{parentName:"em"},"\xedslenska r\xedkisins"),".",(0,i.kt)("br",null),"Handriti\xf0 er \xed h\xfasi ",(0,i.kt)("strong",{parentName:"em"},"Stofnunar \xc1rna Magn\xfassonar"),"."))),(0,i.kt)("p",null,"All the words in bold are in the genitive."),(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"Pro explanation")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"The genitive has a similar function to the ",(0,i.kt)("strong",{parentName:"p"},"possessive \u2019s")," in English. However, how it\u2019s formed is a bit different."))),(0,i.kt)("h3",{id:"other-uses"},"Other uses"),(0,i.kt)("h4",{id:"prepositions"},"Prepositions"),(0,i.kt)("p",null,"Some prepositions, such as ",(0,i.kt)("em",{parentName:"p"},"\xe1n"),", ",(0,i.kt)("em",{parentName:"p"},"til")," and ",(0,i.kt)("em",{parentName:"p"},"vegna"),", take the genitive case:"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("em",{parentName:"p"},"\xc9g drekk ekki kaffi \xe1n ",(0,i.kt)("strong",{parentName:"em"},"sykurs"),".",(0,i.kt)("br",null),"Eigum vi\xf0 a\xf0 fara til ",(0,i.kt)("strong",{parentName:"em"},"Siggu")," og ",(0,i.kt)("strong",{parentName:"em"},"Sigga")," \xe1 eftir?",(0,i.kt)("br",null),"Vegurinn er \xf3f\xe6r vegna ",(0,i.kt)("strong",{parentName:"em"},"ve\xf0urs"),"."))),(0,i.kt)("p",null,"The most common ones are those listed above. There are quite a few more that are only used in writing or formal speech, such as ",(0,i.kt)("em",{parentName:"p"},"s\xf6kum")," and ",(0,i.kt)("em",{parentName:"p"},"utan"),". See a ",(0,i.kt)("a",{parentName:"p",href:"/docs/prepositions/governing-genitive"},"list of prepositions that govern the genitive"),"."),(0,i.kt)("h4",{id:"as-an-adjective-complement"},"As an adjective complement"),(0,i.kt)("p",null,"Genitive constructions are often found alongside adjectives where there is some kind of unit of measurement involved:"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("em",{parentName:"p"},"Eva er ",(0,i.kt)("strong",{parentName:"em"},"\xferj\xe1t\xedu og tveggja \xe1ra")," g\xf6mul.",(0,i.kt)("br",null),"\xdea\xf0 er ",(0,i.kt)("strong",{parentName:"em"},"\xferiggja t\xedma")," flug til Kaupmannahafnar.",(0,i.kt)("br",null),"Vi\xf0 b\xfaum \xed ",(0,i.kt)("strong",{parentName:"em"},"\xe1tta h\xe6\xf0a")," blokk."))),(0,i.kt)("p",null,"The unit of measurement can be a \ud83d\udccf ",(0,i.kt)("strong",{parentName:"p"},"spatial")," one, such as a metre, mile, storey of a building and so on, or one of \u23f0 ",(0,i.kt)("strong",{parentName:"p"},"time"),", such as a day, month, year and so on."),(0,i.kt)("p",null,"You might have seen genitive constructions when talking about your age. Here, the number of years old you are is counted as a measurement."),(0,i.kt)("h4",{id:"verbs-that-have-a-genitive-direct-object"},"Verbs that have a genitive direct object"),(0,i.kt)("p",null,"A few verbs in Icelandic take the genitive, although only a handful are common in everyday speech:"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("em",{parentName:"p"},"Nj\xf3ttu ",(0,i.kt)("strong",{parentName:"em"},"fr\xedsins"),"!",(0,i.kt)("br",null),"Hundurinn g\xe6tir ",(0,i.kt)("strong",{parentName:"em"},"hvolpanna sinna"),".",(0,i.kt)("br",null),"Fyrirt\xe6ki\xf0 leitar ",(0,i.kt)("strong",{parentName:"em"},"fj\xe1rhagslegrar a\xf0sto\xf0ar"),"."))),(0,i.kt)("p",null,"Sometimes there is a way to avoid using a genitive by using a preposition instead. For example, it\u2019s more common to say ",(0,i.kt)("em",{parentName:"p"},"leita a\xf0/eftir")," \u201cto look for\u201d rather than ",(0,i.kt)("em",{parentName:"p"},"leita")," with a genitive. The version with the genitive has a formal ring to it."),(0,i.kt)("h3",{id:"genitive-avoidance"},"Genitive avoidance"),(0,i.kt)("p",null,"There\u2019s a tendency amongst many native speakers of modern Icelandic to avoid genitive constructions in speech. This can be done by:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Using a different preposition that doesn\u2019t govern the genitive, e.g. ",(0,i.kt)("em",{parentName:"li"},"senda \xe1")," (+acc). instead of ",(0,i.kt)("em",{parentName:"li"},"senda til"),";"),(0,i.kt)("li",{parentName:"ul"},"Rephrasing possessive constructions using the verb ",(0,i.kt)("em",{parentName:"li"},"eiga"),";"),(0,i.kt)("li",{parentName:"ul"},"Substituting a verb that governs the genitive for one that doesn\u2019t, e.g. ",(0,i.kt)("em",{parentName:"li"},"b\xfaast vi\xf0")," (+dat.) instead of ",(0,i.kt)("em",{parentName:"li"},"v\xe6nta"),".")),(0,i.kt)("p",null,"As such, using the genitive frequently in speech can lend a formal air to the way you speak. It\u2019s not at all incorrect to use the genitive when talking, but it can make you sound a bit more educated (or old-fashioned)!"),(0,i.kt)("p",null,"It\u2019s relatively easy to avoid the genitive as so few prepositions and verbs govern it. But in writing and formal speech, the genitive is still very much going strong."),(0,i.kt)("h2",{id:"formation"},"Formation"),(0,i.kt)("h3",{id:"singular"},"Singular"),(0,i.kt)("h4",{id:"masculine"},"Masculine"),(0,i.kt)("p",null,"To form the genitive singular of masculine nouns, follow the rules below."),(0,i.kt)("figure",null,(0,i.kt)("table",null,(0,i.kt)("tbody",null,(0,i.kt)("tr",null,(0,i.kt)("th",{valign:"top"},"\ud83d\udcaa\xa0Strong"),(0,i.kt)("td",null,"Remove the ending and add ",(0,i.kt)("em",null,(0,i.kt)("strong",null,"\u2011s")),(0,i.kt)("table",{class:"clear full-width"},(0,i.kt)("tbody",null,(0,i.kt)("tr",null,(0,i.kt)("td",{width:"150px"},(0,i.kt)("em",null,"stein"),"|",(0,i.kt)("strong",null,(0,i.kt)("em",null,"n"))),(0,i.kt)("td",null,"\u2192\xa0",(0,i.kt)("em",null,"stein",(0,i.kt)("strong",null,"s")))),(0,i.kt)("tr",null,(0,i.kt)("td",{width:"150px"},(0,i.kt)("em",null,"l\xe6kni"),"|",(0,i.kt)("strong",null,(0,i.kt)("em",null,"r"))),(0,i.kt)("td",null,"\u2192\xa0",(0,i.kt)("em",null,"l\xe6kni",(0,i.kt)("strong",null,"s")))),(0,i.kt)("tr",null,(0,i.kt)("td",{width:"150px"},(0,i.kt)("em",null,"b\xedl"),"|",(0,i.kt)("strong",null,(0,i.kt)("em",null,"l"))),(0,i.kt)("td",null,"\u2192\xa0",(0,i.kt)("em",null,"b\xedl",(0,i.kt)("strong",null,"s")))),(0,i.kt)("tr",null,(0,i.kt)("td",{width:"150px"},(0,i.kt)("em",null,"fugl"),"|"),(0,i.kt)("td",null,"\u2192\xa0",(0,i.kt)("em",null,"fugl",(0,i.kt)("strong",null,"s")))),(0,i.kt)("tr",null,(0,i.kt)("td",{colspan:"2"},(0,i.kt)("br",null),"Remove the ending and add ",(0,i.kt)("em",null,(0,i.kt)("strong",null,"\u2011s")),"\xa0or\xa0",(0,i.kt)("em",null,(0,i.kt)("strong",null,"\u2011ar")))),(0,i.kt)("tr",null,(0,i.kt)("td",{width:"150px"},(0,i.kt)("em",null,"hest"),"|",(0,i.kt)("strong",null,(0,i.kt)("em",null,"ur"))),(0,i.kt)("td",null,"\u2192\xa0",(0,i.kt)("em",null,"hest",(0,i.kt)("strong",null,"s")))),(0,i.kt)("tr",null,(0,i.kt)("td",{width:"150px"},(0,i.kt)("em",null,"sta\xf0"),"|",(0,i.kt)("strong",null,(0,i.kt)("em",null,"ur"))),(0,i.kt)("td",null,"\u2192\xa0",(0,i.kt)("em",null,"sta\xf0",(0,i.kt)("strong",null,"ar")))))))),(0,i.kt)("tr",null,(0,i.kt)("th",{valign:"top"},"\ud83e\udd40\xa0Weak"),(0,i.kt)("td",null,"Change ",(0,i.kt)("em",null,"\u2011i")," \u2192 ",(0,i.kt)("strong",null,(0,i.kt)("em",null,"\u2011a")),(0,i.kt)("table",{class:"clear full-width"},(0,i.kt)("tbody",null,(0,i.kt)("tr",null,(0,i.kt)("td",{width:"150px"},(0,i.kt)("em",null,"krakki")),(0,i.kt)("td",null,"\u2192\xa0",(0,i.kt)("em",null,"krakk",(0,i.kt)("strong",null,"a")))),(0,i.kt)("tr",null,(0,i.kt)("td",{width:"150px"},(0,i.kt)("em",null,"lampi")),(0,i.kt)("td",null,"\u2192\xa0",(0,i.kt)("em",null,"lamp",(0,i.kt)("strong",null,"a")))),(0,i.kt)("tr",null,(0,i.kt)("td",{width:"150px"},(0,i.kt)("em",null,"penni")),(0,i.kt)("td",null,"\u2192\xa0",(0,i.kt)("em",null,"penn",(0,i.kt)("strong",null,"a"))))))))))),(0,i.kt)("p",null,"All masculine strong nouns get ",(0,i.kt)("em",{parentName:"p"},(0,i.kt)("strong",{parentName:"em"},"-s"))," in the genitive, except certain ones that end in ",(0,i.kt)("em",{parentName:"p"},"-ur"),", which get ",(0,i.kt)("em",{parentName:"p"},(0,i.kt)("strong",{parentName:"em"},"-ar")),". Many of the ones that get ",(0,i.kt)("em",{parentName:"p"},"-ar")," are the same ones that have an ",(0,i.kt)("em",{parentName:"p"},"-ir")," plural or no ",(0,i.kt)("em",{parentName:"p"},"-i")," in the dative singular. But there are plenty of exceptions."),(0,i.kt)("p",null,"Weak masculine nouns are the same as the accusative and dative."),(0,i.kt)("h4",{id:"feminine"},"Feminine"),(0,i.kt)("p",null,"To form the genitive singular of feminine nouns, follow the rules below."),(0,i.kt)("figure",null,(0,i.kt)("table",null,(0,i.kt)("tbody",null,(0,i.kt)("tr",null,(0,i.kt)("th",{valign:"top"},"\ud83d\udcaa\xa0Strong"),(0,i.kt)("td",null,"Add ",(0,i.kt)("strong",null,(0,i.kt)("em",null,"\u2011ar")),(0,i.kt)("table",{class:"clear"},(0,i.kt)("tbody",null,(0,i.kt)("tr",null,(0,i.kt)("td",{width:"150px"},(0,i.kt)("em",null,"r\xf3s")),(0,i.kt)("td",null,"\u2192\xa0",(0,i.kt)("em",null,"r\xf3s",(0,i.kt)("strong",null,"ar")))),(0,i.kt)("tr",null,(0,i.kt)("td",null,(0,i.kt)("em",null,"verslun")),(0,i.kt)("td",null,"\u2192\xa0",(0,i.kt)("em",null,"verslun",(0,i.kt)("strong",null,"ar")))),(0,i.kt)("tr",null,(0,i.kt)("td",null,(0,i.kt)("em",null,"\xe6fing")),(0,i.kt)("td",null,"\u2192\xa0",(0,i.kt)("em",null,"\xe6fing",(0,i.kt)("strong",null,"ar")))),(0,i.kt)("tr",null,(0,i.kt)("td",{colspan:"2"},"Add ",(0,i.kt)("strong",null,(0,i.kt)("em",null,"\u2011ur")))),(0,i.kt)("tr",null,(0,i.kt)("td",{width:"150px"},(0,i.kt)("em",null,"mj\xf3lk")),(0,i.kt)("td",null,"\u2192\xa0",(0,i.kt)("em",null,"mj\xf3lk",(0,i.kt)("strong",null,"ur")))),(0,i.kt)("tr",null,(0,i.kt)("td",{width:"150px"},(0,i.kt)("em",null,"v\xedk")),(0,i.kt)("td",null,"\u2192\xa0",(0,i.kt)("em",null,"v\xedk",(0,i.kt)("strong",null,"ur")))))))),(0,i.kt)("tr",null,(0,i.kt)("th",{valign:"top"},"\ud83e\udd40\xa0Weak"),(0,i.kt)("td",null,"Change ",(0,i.kt)("em",null,"\u2011a")," \u2192 ",(0,i.kt)("strong",null,(0,i.kt)("em",null,"\u2011u")),"\xa0\xa0",(0,i.kt)("small",null,"(+U\u2011shift)"),(0,i.kt)("table",{class:"clear"},(0,i.kt)("tbody",null,(0,i.kt)("tr",null,(0,i.kt)("td",{width:"150px"},(0,i.kt)("em",null,"kona")),(0,i.kt)("td",null,"\u2192\xa0",(0,i.kt)("em",null,"kon",(0,i.kt)("strong",null,"u")))),(0,i.kt)("tr",null,(0,i.kt)("td",null,(0,i.kt)("em",null,"kaka")),(0,i.kt)("td",null,"\u2192\xa0\u26a0\ufe0f\xa0",(0,i.kt)("em",null,"k\xf6k",(0,i.kt)("strong",null,"u"))))))))))),(0,i.kt)("p",null,"Some notes about the feminine singular genitive:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"The ",(0,i.kt)("strong",{parentName:"li"},"majority of nouns get ",(0,i.kt)("em",{parentName:"strong"},"-ar")),", which can cause reverse ",(0,i.kt)("a",{parentName:"li",href:"../sound-changes/u-shift"},"U-shift")," in words that have an ",(0,i.kt)("em",{parentName:"li"},"\xf6")," in the stem, e.g. ",(0,i.kt)("em",{parentName:"li"},"r\xf6\xf0")," \u2192 ",(0,i.kt)("em",{parentName:"li"},"r",(0,i.kt)("span",{className:"ushift"},"a"),"\xf0ar"),", ",(0,i.kt)("em",{parentName:"li"},"v\xf6r")," \u2192 ",(0,i.kt)("em",{parentName:"li"},"v",(0,i.kt)("span",{className:"ushift"},"a"),"rar"),". If the noun ends in ",(0,i.kt)("em",{parentName:"li"},"-un")," however, this does not apply, e.g. ",(0,i.kt)("em",{parentName:"li"},"verslun")," \u2192 ",(0,i.kt)("em",{parentName:"li"},"verslunar"),", ",(0,i.kt)("em",{parentName:"li"},"Steinunn")," \u2192 ",(0,i.kt)("em",{parentName:"li"},"Steinunnar"),"."),(0,i.kt)("li",{parentName:"ul"},"Some ",(0,i.kt)("strong",{parentName:"li"},"nouns ending in ",(0,i.kt)("em",{parentName:"strong"},"-k")," get ",(0,i.kt)("em",{parentName:"strong"},"-ur")),", e.g. ",(0,i.kt)("em",{parentName:"li"},"v\xedk")," \u2192 ",(0,i.kt)("em",{parentName:"li"},"v\xedk",(0,i.kt)("strong",{parentName:"em"},"ur")),". Most of them end in ",(0,i.kt)("em",{parentName:"li"},"-\xedk"),", except for ",(0,i.kt)("em",{parentName:"li"},"mj\xf3lk"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Nouns ending in ",(0,i.kt)("em",{parentName:"strong"},"-l"))," get ",(0,i.kt)("em",{parentName:"li"},"j")," before the ",(0,i.kt)("em",{parentName:"li"},"-ar")," ending, e.g. ",(0,i.kt)("em",{parentName:"li"},"skel")," \u2192 ",(0,i.kt)("em",{parentName:"li"},"skel",(0,i.kt)("strong",{parentName:"em"},"jar")),"."),(0,i.kt)("li",{parentName:"ul"},"The ",(0,i.kt)("strong",{parentName:"li"},"weak feminine genitive")," is the same as the accusative and dative.")),(0,i.kt)("h4",{id:"neuter"},"Neuter"),(0,i.kt)("p",null,"To form the genitive of singular neuter nouns, follow the rules below."),(0,i.kt)("figure",null,(0,i.kt)("table",null,(0,i.kt)("tbody",null,(0,i.kt)("tr",null,(0,i.kt)("th",{valign:"top"},"\ud83d\udcaa\xa0Strong"),(0,i.kt)("td",null,"Add ",(0,i.kt)("em",null,(0,i.kt)("strong",null,"\u2011s")),(0,i.kt)("table",{class:"clear"},(0,i.kt)("tbody",null,(0,i.kt)("tr",null,(0,i.kt)("td",{width:"150px"},(0,i.kt)("em",null,"land")),(0,i.kt)("td",null,"\u2192\xa0",(0,i.kt)("em",null,"land",(0,i.kt)("strong",null,"s")))),(0,i.kt)("tr",null,(0,i.kt)("td",null,(0,i.kt)("em",null,"skip")),(0,i.kt)("td",null,"\u2192\xa0",(0,i.kt)("em",null,"skip",(0,i.kt)("strong",null,"s")))),(0,i.kt)("tr",null,(0,i.kt)("td",null,(0,i.kt)("em",null,"barn")),(0,i.kt)("td",null,"\u2192\xa0",(0,i.kt)("em",null,"barn",(0,i.kt)("strong",null,"s")))),(0,i.kt)("tr",null,(0,i.kt)("td",null,(0,i.kt)("em",null,"veski")),(0,i.kt)("td",null,"\u2192\xa0",(0,i.kt)("em",null,"veski",(0,i.kt)("strong",null,"s")))),(0,i.kt)("tr",null,(0,i.kt)("td",null,"Irregular:")),(0,i.kt)("tr",null,(0,i.kt)("td",null,(0,i.kt)("em",null,"f\xe9")),(0,i.kt)("td",null,"\u2192\xa0",(0,i.kt)("em",null,"fj",(0,i.kt)("strong",null,"\xe1r")))))))),(0,i.kt)("tr",null,(0,i.kt)("th",{valign:"top"},"\ud83e\udd40\xa0Weak"),(0,i.kt)("td",null,"No change",(0,i.kt)("table",{class:"clear"},(0,i.kt)("tbody",null,(0,i.kt)("tr",null,(0,i.kt)("td",{width:"150px"},(0,i.kt)("em",null,"auga")),(0,i.kt)("td",null,"\u2192\xa0",(0,i.kt)("em",null,"auga"))),(0,i.kt)("tr",null,(0,i.kt)("td",null,(0,i.kt)("em",null,"eyra")),(0,i.kt)("td",null,"\u2192\xa0",(0,i.kt)("em",null,"eyra")))))))))),(0,i.kt)("p",null,"Every single strong neuter noun gets ",(0,i.kt)("em",{parentName:"p"},"-s")," in the genitive, apart from ",(0,i.kt)("em",{parentName:"p"},"f\xe9"),", which is irregular."),(0,i.kt)("p",null,"Weak neuter nouns are the same in the genitive as all the other cases."),(0,i.kt)("h3",{id:"plural"},"Plural"),(0,i.kt)("p",null,"The genitive plural ending, ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("em",{parentName:"strong"},"-a")),", is one of the more predictable case endings in Icelandic. The majority of nouns of all genders will get ",(0,i.kt)("em",{parentName:"p"},"-a")," in the gentive plural."),(0,i.kt)("figure",null,(0,i.kt)("table",null,(0,i.kt)("tbody",null,(0,i.kt)("tr",null,(0,i.kt)("th",{width:"10%"},"\xa0"),(0,i.kt)("th",{width:"30"},"Masculine"),(0,i.kt)("th",{width:"30%"},"Feminine"),(0,i.kt)("th",{width:"30%"},"Neuter")),(0,i.kt)("tr",null,(0,i.kt)("th",{valign:"top"},"Strong"),(0,i.kt)("td",{valign:"top"},(0,i.kt)("em",null,"hest",(0,i.kt)("strong",null,"a"),(0,i.kt)("br",null),"sta\xf0",(0,i.kt)("strong",null,"a"),(0,i.kt)("br",null),"stein",(0,i.kt)("strong",null,"a"),(0,i.kt)("br",null),"b\xedl",(0,i.kt)("strong",null,"a"),(0,i.kt)("br",null),"spegl",(0,i.kt)("strong",null,"a"),(0,i.kt)("br",null),"l\xe6kn",(0,i.kt)("strong",null,"a"))),(0,i.kt)("td",{valign:"top"},(0,i.kt)("em",null,"r\xf3s",(0,i.kt)("strong",null,"a"),(0,i.kt)("br",null),"b\xf3k",(0,i.kt)("strong",null,"a"),(0,i.kt)("br",null),"versl",(0,i.kt)("span",{class:"ushift"},"a"),"n",(0,i.kt)("strong",null,"a"),(0,i.kt)("br",null),"\xe6fing",(0,i.kt)("strong",null,"a"),(0,i.kt)("br",null),"skel",(0,i.kt)("strong",null,"ja"),(0,i.kt)("br",null),"st\xf6\xf0",(0,i.kt)("strong",null,"va"))),(0,i.kt)("td",{valign:"top"},(0,i.kt)("em",null,"land",(0,i.kt)("strong",null,"a"),(0,i.kt)("br",null),"skip",(0,i.kt)("strong",null,"a"),(0,i.kt)("br",null),"vesk",(0,i.kt)("strong",null,"ja")))),(0,i.kt)("tr",null,(0,i.kt)("th",{valign:"top"},"Weak"),(0,i.kt)("td",{valign:"top"},(0,i.kt)("em",null,"krakk",(0,i.kt)("strong",null,"a"),(0,i.kt)("br",null),"lamp",(0,i.kt)("strong",null,"a"),(0,i.kt)("br",null),"penn",(0,i.kt)("strong",null,"a"))),(0,i.kt)("td",{valign:"top"},(0,i.kt)("em",null,"kak",(0,i.kt)("strong",null,"na"),(0,i.kt)("br",null),"gat",(0,i.kt)("strong",null,"na")),(0,i.kt)("br",null),(0,i.kt)("br",null),"But:",(0,i.kt)("br",null),(0,i.kt)("em",null,"k",(0,i.kt)("strong",null,"venna"))),(0,i.kt)("td",{valign:"top"},(0,i.kt)("em",null,"aug",(0,i.kt)("strong",null,"na"),(0,i.kt)("br",null),"hjart",(0,i.kt)("strong",null,"na"))))))),(0,i.kt)("p",null,"Unlike in the genitive singular, the ",(0,i.kt)("em",{parentName:"p"},"-a")," ending causes reverse U-shift in feminine nouns ending in ",(0,i.kt)("em",{parentName:"p"},"-un"),", e.g. ",(0,i.kt)("em",{parentName:"p"},"verslun")," \u2192 ",(0,i.kt)("em",{parentName:"p"},"versl",(0,i.kt)("span",{class:"ushift"},"a"),"n",(0,i.kt)("strong",{parentName:"em"},"a")),"."),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),(0,i.kt)("em",{parentName:"h5"},"j"),"-insertion")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"In neuter nouns ending in ",(0,i.kt)("em",{parentName:"p"},"-i")," in the nominative, a ",(0,i.kt)("em",{parentName:"p"},"j")," is inserted before the ",(0,i.kt)("em",{parentName:"p"},"-a")," ending, e.g ",(0,i.kt)("em",{parentName:"p"},"veski")," \u2192 ",(0,i.kt)("em",{parentName:"p"},"vesk",(0,i.kt)("strong",{parentName:"em"},"j"),"a"),", ",(0,i.kt)("em",{parentName:"p"},"t\xe6ki")," \u2192 ",(0,i.kt)("em",{parentName:"p"},"t\xe6k",(0,i.kt)("strong",{parentName:"em"},"j"),"a"),". This is to preserve the palatised pronunciation of ","<","k",">"," (transcribed as /c/)."),(0,i.kt)("p",{parentName:"div"},"A ",(0,i.kt)("em",{parentName:"p"},"j")," is also inserted before the ",(0,i.kt)("em",{parentName:"p"},"-a")," ending in strong feminine nouns ending in ",(0,i.kt)("em",{parentName:"p"},"-l"),", e.g. ",(0,i.kt)("em",{parentName:"p"},"skel")," \u2192 ",(0,i.kt)("em",{parentName:"p"},"skel",(0,i.kt)("strong",{parentName:"em"},"ja")),"."))),(0,i.kt)("h4",{id:"genitive-plural-with--na"},"Genitive plural with ",(0,i.kt)("em",{parentName:"h4"},"-na")),(0,i.kt)("p",null,"As you may have noticed in the table above, some nouns get ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("em",{parentName:"strong"},"-na"))," in the genitive plural, rather than just ",(0,i.kt)("em",{parentName:"p"},"-a"),". This mostly happens in feminine and neuter weak nouns. The general rule is:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"All weak neuter nouns")," get ",(0,i.kt)("em",{parentName:"li"},"-na")," in the genitive plural;"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Weak feminine nouns")," tend to get ",(0,i.kt)("em",{parentName:"li"},"-na")," unless the stem ends in ",(0,i.kt)("em",{parentName:"li"},"j"),", ",(0,i.kt)("em",{parentName:"li"},"n"),", ",(0,i.kt)("em",{parentName:"li"},"r")," or ",(0,i.kt)("em",{parentName:"li"},"v"),". There are quite a few exceptions to this rule though, and sometimes both forms exist, e.g. nom. sing. ",(0,i.kt)("em",{parentName:"li"},"kaka")," \u2192 gen. plu. ",(0,i.kt)("em",{parentName:"li"},"kak",(0,i.kt)("strong",{parentName:"em"},"na"))," or ",(0,i.kt)("em",{parentName:"li"},"kak",(0,i.kt)("strong",{parentName:"em"},"a")),".")),(0,i.kt)("p",null,"Some weak feminine nouns whose stem ends in ",(0,i.kt)("em",{parentName:"p"},"j")," do get ",(0,i.kt)("em",{parentName:"p"},"-na")," in the genitive plural, in which case the ",(0,i.kt)("em",{parentName:"p"},"j")," is removed:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("em",{parentName:"li"},"\xe1hyggja")," \u2192 ",(0,i.kt)("em",{parentName:"li"},"\xe1hygg",(0,i.kt)("strong",{parentName:"em"},"na"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("em",{parentName:"li"},"ekkja")," \u2192 ",(0,i.kt)("em",{parentName:"li"},"ekk",(0,i.kt)("strong",{parentName:"em"},"na"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("em",{parentName:"li"},"kirkja")," \u2192 ",(0,i.kt)("em",{parentName:"li"},"kirk",(0,i.kt)("strong",{parentName:"em"},"na"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("em",{parentName:"li"},"sprengja")," \u2192 ",(0,i.kt)("em",{parentName:"li"},"spreng",(0,i.kt)("strong",{parentName:"em"},"na")))))}c.isMDXComponent=!0}}]);