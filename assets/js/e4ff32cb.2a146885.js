(self.webpackChunkgramref=self.webpackChunkgramref||[]).push([[4877],{3905:(e,t,n)=>{"use strict";n.d(t,{Zo:()=>p,kt:()=>g});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=c(n),u=i,g=m["".concat(l,".").concat(u)]||m[u]||d[u]||a;return n?r.createElement(g,o(o({ref:t},p),{},{components:n})):r.createElement(g,o({ref:t},p))}));function g(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[m]="string"==typeof e?e:i,o[1]=s;for(var c=2;c<a;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},1333:(e,t,n)=>{"use strict";n.d(t,{R:()=>o});var r=n(7294),i=n(4052),a=n.n(i);class o extends r.Component{constructor(e){super(e),this.state={termWidth:""}}componentDidMount(){const e=document.getElementById("term-"+this.props.term).clientWidth,t=document.getElementById("tooltip-"+this.props.term).clientWidth;this.setState({termWidth:e,tooltipWidth:t})}offset(){return 0-this.state.tooltipWidth/2+this.state.termWidth/2+"px"}displayTerm(){let e;return e=this.props.display?this.props.display:this.props.term,e}getIcelandicTerm(){let e;return e=a().terms.filter((e=>e.term.includes(this.props.term.toLowerCase()))),e[0].icelandic}render(){return r.createElement(r.Fragment,null,r.createElement("span",{className:"term",id:"term-"+this.props.term},this.displayTerm(),r.createElement("span",{id:"tooltip-"+this.props.term,className:"tooltip",style:{left:this.offset()}},"\ud83c\uddee\ud83c\uddf8 ",this.getIcelandicTerm())))}}},4052:e=>{e.exports={terms:[,{term:"verb",icelandic:"s\xf6gn"},{term:"object",icelandic:"andlag"},{term:"phrase",icelandic:"li\xf0ur"},{term:"pronoun",icelandic:"fornafn"},{term:"mood",icelandic:"h\xe1ttur"},{term:"accusative",icelandic:"\xfeolfall"},{term:"active voice",icelandic:"germynd"},{term:"adjective",icelandic:"l\xfdsingaror\xf0"},{term:"adjective phrase",icelandic:"l\xfdsingaror\xf0sli\xf0ur"},{term:"adverb",icelandic:"atviksor\xf0"},{term:"verb phrase",icelandic:"sagnli\xf0ur"},{term:"adverb phrase",icelandic:"atviksli\xf0ur"},{term:"aspiration",icelandic:"fr\xe1bl\xe1stur"},{term:"case",icelandic:"fall"},{term:"comparative",icelandic:"mi\xf0stig"},{term:"complement",icelandic:"fyllili\xf0ur"},{term:"consonant",icelandic:"samhlj\xf3\xf0"},{term:"dative",icelandic:"\xfe\xe1gufall"},{term:"definite article",icelandic:"\xe1kve\xf0inn greinir"},{term:"demonstrative pronoun",icelandic:"\xe1bendingarfornafn"},{term:"determiner",icelandic:"\xe1kv\xe6\xf0isor\xf0"},{term:"devoicing",icelandic:"afr\xf6ddun"},{term:"diphthong",icelandic:"tv\xedhlj\xf3\xf0"},{term:"direct object",icelandic:"beint andlag"},{term:"ending",icelandic:"ending"},{term:"feminine",icelandic:"kvenkyn"},{term:"first person",icelandic:"fyrsta pers\xf3na"},{term:"gender",icelandic:"kyn"},{term:"genitive",icelandic:"eignarfall"},{term:"head",icelandic:"h\xf6fu\xf0"},{term:"imperative mood",icelandic:"bo\xf0h\xe1ttur"},{term:"indefinite pronoun",icelandic:"\xf3\xe1kve\xf0i\xf0 fornafn"},{term:"indicative",icelandic:"frams\xf6guh\xe1ttur"},{term:"indirect object",icelandic:"\xf3beint andlag"},{term:"imperative",icelandic:"bo\xf0h\xe1ttur"},{term:"infinitive",icelandic:"nafnh\xe1ttur"},{term:"masculine",icelandic:"karlkyn"},{term:"middle voice",icelandic:"mi\xf0mynd"},{term:"modal verb",icelandic:"hj\xe1lpars\xf6gn"},{term:"monophthong",icelandic:"einhlj\xf3\xf0"},{term:"neuter",icelandic:"hvorugkyn"},{term:"nominative",icelandic:"nefnifall"},{term:"noun phrase",icelandic:"nafnli\xf0ur"},{term:"passive voice",icelandic:"\xfeolmynd"},{term:"past participle",icelandic:"l\xfdsingarh\xe1ttur \xfe\xe1t\xed\xf0ar"},{term:"past tense",icelandic:"\xfe\xe1t\xed\xf0"},{term:"personal pronoun",icelandic:"pers\xf3nufornafn"},{term:"plural",icelandic:"fleirtala"},{term:"positive",icelandic:"frumstig"},{term:"preaspiration",icelandic:"a\xf0bl\xe1stur"},{term:"preposition",icelandic:"forsetning"},{term:"prepositional phrase",icelandic:"forsetningarli\xf0ur"},{term:"principal parts",icelandic:"kennimyndir"},{term:"reflexive pronoun",icelandic:"afturbeygt fornafn"},{term:"possessive pronoun",icelandic:"eignarfornafn"},{term:"present participle",icelandic:"l\xfdsingarh\xe1ttur n\xfat\xed\xf0ar"},{term:"present tense",icelandic:"n\xfat\xed\xf0"},{term:"second person",icelandic:"\xf6nnur pers\xf3na"},{term:"sentence",icelandic:"setning"},{term:"singular",icelandic:"eintala"},{term:"stem",icelandic:"stofn"},{term:"strong",icelandic:"sterk beyging"},{term:"strong verb",icelandic:"sterk s\xf6gn"},{term:"stylistic fronting",icelandic:"st\xedlf\xe6rsla"},{term:"subject",icelandic:"frumlag"},{term:"subjunctive",icelandic:"vi\xf0tengingarh\xe1ttur"},{term:"superlative",icelandic:"efsta stig"},{term:"supine",icelandic:"sagnb\xf3t"},{term:"third person",icelandic:"\xferi\xf0ja pers\xf3na"},{term:"transitive",icelandic:"\xe1hrifss\xf6gn"},{term:"transitive verb",icelandic:"\xe1hrifss\xf6gn"},{term:"intransitive verb",icelandic:"\xe1hrifslaus s\xf6gn"},{term:"weak",icelandic:"veik beyging"},{term:"weak verb",icelandic:"veik s\xf6gn"},{term:"word order",icelandic:"or\xf0ar\xf6\xf0"}]}},9245:(e,t,n)=>{"use strict";n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var r=n(7462),i=(n(7294),n(3905)),a=n(1333);const o={id:"preposition-intro",title:"Introduction to prepositions",description:"An explanation of Icelandic prepositions, including what they mean and what case they govern."},s=void 0,l={unversionedId:"prepositions/preposition-intro",id:"prepositions/preposition-intro",title:"Introduction to prepositions",description:"An explanation of Icelandic prepositions, including what they mean and what case they govern.",source:"@site/docs/prepositions/intro.md",sourceDirName:"prepositions",slug:"/prepositions/preposition-intro",permalink:"/docs/prepositions/preposition-intro",draft:!1,tags:[],version:"current",frontMatter:{id:"preposition-intro",title:"Introduction to prepositions",description:"An explanation of Icelandic prepositions, including what they mean and what case they govern."},sidebar:"someSidebar",previous:{title:"Demonstrative",permalink:"/docs/pronouns/demonstrative"},next:{title:"\xe1, \xed, undir, yfir",permalink:"/docs/prepositions/a-i-undir-yfir"}},c={},p=[{value:"Case",id:"case",level:2},{value:"Phrasal verbs and adjectives",id:"phrasal-verbs-and-adjectives",level:2}],m={toc:p},d="wrapper";function u(e){let{components:t,...n}=e;return(0,i.kt)(d,(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"In Icelandic, a ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)(a.R,{term:"preposition",mdxType:"Term"}))," is used to give information about the location of something in \ud83e\ude90 ",(0,i.kt)("strong",{parentName:"p"},"physical space"),":"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("em",{parentName:"p"},"Diskurinn liggur ",(0,i.kt)("strong",{parentName:"em"},"\xe1")," bor\xf0inu.",(0,i.kt)("br",null),"Bollinn er ",(0,i.kt)("strong",{parentName:"em"},"\xed")," sk\xe1pnum.",(0,i.kt)("br",null),"Vi\xf0 \xe6tlum a\xf0 fara ",(0,i.kt)("strong",{parentName:"em"},"\xe1")," veitingasta\xf0.",(0,i.kt)("br",null),"K\xf6tturinn situr ",(0,i.kt)("strong",{parentName:"em"},"vi\xf0")," gluggann."))),(0,i.kt)("p",null,"Prepositions can also be used to express the location of something in \u23f0 ",(0,i.kt)("strong",{parentName:"p"},"time"),":"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("em",{parentName:"p"},"B\xfa\xf0in opnar aftur ",(0,i.kt)("strong",{parentName:"em"},"\xe1")," m\xe1nudaginn.",(0,i.kt)("br",null),(0,i.kt)("strong",{parentName:"em"},"Fyrir")," t\xedu \xe1rum flutti \xc1sberg til Danmerkur.",(0,i.kt)("br",null),"\xc9g bei\xf0 ",(0,i.kt)("strong",{parentName:"em"},"\xed")," tvo t\xedma eftir str\xe6t\xf3!"))),(0,i.kt)("p",null,"Finally, prepositions can also be used in a more abstract sense to express information about the \u26d3 ",(0,i.kt)("strong",{parentName:"p"},"relationships")," between things and people:"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("em",{parentName:"p"},"\xde\xfa \xfearft a\xf0 tengja s\xedmann ",(0,i.kt)("strong",{parentName:"em"},"vi\xf0")," t\xf6lvuna.",(0,i.kt)("br",null),"\xc9g f\xf3r \xfat a\xf0 bor\xf0a ",(0,i.kt)("strong",{parentName:"em"},"me\xf0")," m\xf6mmu og pabba \xed g\xe6r."))),(0,i.kt)("h2",{id:"case"},"Case"),(0,i.kt)("p",null,"All prepositions in Icelandic govern one of three cases: the ",(0,i.kt)(a.R,{term:"accusative",mdxType:"Term"}),", ",(0,i.kt)(a.R,{term:"dative",mdxType:"Term"})," or ",(0,i.kt)(a.R,{term:"genitive",mdxType:"Term"}),". Some prepositions can govern both the accusative and dative, depending on the meaning and the context:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("a",{parentName:"strong",href:"a-i-undir-yfir"},(0,i.kt)("em",{parentName:"a"},"\xe1, \xed, undir")," and ",(0,i.kt)("em",{parentName:"a"},"yfir")))," all govern accusative or dative depending on whether there is motion or a lack of motion;"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("em",{parentName:"strong"},(0,i.kt)("a",{parentName:"em",href:"fyrir"},"fyrir"),", ",(0,i.kt)("a",{parentName:"em",href:"me%C3%B0"},"me\xf0"))," and ",(0,i.kt)("em",{parentName:"strong"},(0,i.kt)("a",{parentName:"em",href:"vi%C3%B0"},"vi\xf0")))," govern the accusative or dative based on their own quirky rules.")),(0,i.kt)("p",null,"If you\u2019re not familiar with the concept of case, read ",(0,i.kt)("a",{parentName:"p",href:"../nouns/case"},"Introduction to case")," first. If you\u2019re ready to get stuck in, start with the prepositions above and then work through these lists:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"governing-accusative"},"List of prepositions that govern accusative")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"governing-dative"},"List of prepositions that govern dative")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"governing-genitive"},"List of prepositions that govern genitive"))),(0,i.kt)("h2",{id:"phrasal-verbs-and-adjectives"},"Phrasal verbs and adjectives"),(0,i.kt)("p",null,"Prepositions can be used as part of a ",(0,i.kt)("strong",{parentName:"p"},"phrasal verb")," in Icelandic. What case the preposition governs as part of a phrasal verb is often arbitrary:"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("em",{parentName:"p"},"\xc9g tala\xf0i ",(0,i.kt)("strong",{parentName:"em"},"vi\xf0")," yfirmanninn \xed morgun.",(0,i.kt)("br",null),"Viltu senda netfangi\xf0 ",(0,i.kt)("strong",{parentName:"em"},"\xe1")," mig?",(0,i.kt)("br",null),"\xdea\xf0 \xfearf a\xf0 \xfeurrka ",(0,i.kt)("strong",{parentName:"em"},"af")," bor\xf0inu.",(0,i.kt)("br",null),"Vi\xf0skiptavinurinn kvarta\xf0i ",(0,i.kt)("strong",{parentName:"em"},"yfir")," l\xe9legu \xfej\xf3nustunni.",(0,i.kt)("br",null),"R\xe1\xf0herrann ger\xf0i grein ",(0,i.kt)("strong",{parentName:"em"},"fyrir")," \xe1kv\xf6r\xf0uninni."))),(0,i.kt)("p",null,"Prepositions can also be used as part of an ",(0,i.kt)("strong",{parentName:"p"},"adjective phrase"),":"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("em",{parentName:"p"},"K\xf6tturinn er hr\xe6ddur ",(0,i.kt)("strong",{parentName:"em"},"vi\xf0")," \xfeig.",(0,i.kt)("br",null),"\xc9g er svo \xe1n\xe6g\xf0 ",(0,i.kt)("strong",{parentName:"em"},"me\xf0")," n\xfdju \xedb\xfa\xf0ina!",(0,i.kt)("br",null),"Af hverju ertu svona pirra\xf0ur ",(0,i.kt)("strong",{parentName:"em"},"\xfat \xed")," mig?"))),(0,i.kt)("p",null,"Again, what case the preposition governs here is often arbitrary, but you might notice certain patterns over time."))}u.isMDXComponent=!0}}]);