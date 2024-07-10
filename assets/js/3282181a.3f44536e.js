(self.webpackChunkgramref=self.webpackChunkgramref||[]).push([[7936],{3905:(e,t,n)=>{"use strict";n.d(t,{Zo:()=>d,kt:()=>k});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),m=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=m(e.components);return r.createElement(s.Provider,{value:t},e.children)},c="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),c=m(n),u=a,k=c["".concat(s,".").concat(u)]||c[u]||p[u]||i;return n?r.createElement(k,l(l({ref:t},d),{},{components:n})):r.createElement(k,l({ref:t},d))}));function k(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=u;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[c]="string"==typeof e?e:a,l[1]=o;for(var m=2;m<i;m++)l[m]=n[m];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},1333:(e,t,n)=>{"use strict";n.d(t,{R:()=>l});var r=n(7294),a=n(4052),i=n.n(a);class l extends r.Component{constructor(e){super(e),this.state={termWidth:""}}componentDidMount(){const e=document.getElementById("term-"+this.props.term).clientWidth,t=document.getElementById("tooltip-"+this.props.term).clientWidth;this.setState({termWidth:e,tooltipWidth:t})}offset(){return 0-this.state.tooltipWidth/2+this.state.termWidth/2+"px"}displayTerm(){let e;return e=this.props.display?this.props.display:this.props.term,e}getIcelandicTerm(){let e;return e=i().terms.filter((e=>e.term.includes(this.props.term.toLowerCase()))),e[0].icelandic}render(){return r.createElement(r.Fragment,null,r.createElement("span",{className:"term",id:"term-"+this.props.term},this.displayTerm(),r.createElement("span",{id:"tooltip-"+this.props.term,className:"tooltip",style:{left:this.offset()}},"\ud83c\uddee\ud83c\uddf8 ",this.getIcelandicTerm())))}}},4052:e=>{e.exports={terms:[,{term:"verb",icelandic:"s\xf6gn"},{term:"object",icelandic:"andlag"},{term:"pronoun",icelandic:"fornafn"},{term:"mood",icelandic:"h\xe1ttur"},{term:"accusative",icelandic:"\xfeolfall"},{term:"active voice",icelandic:"germynd"},{term:"adjective",icelandic:"l\xfdsingaror\xf0"},{term:"adjective phrase",icelandic:"l\xfdsingaror\xf0sli\xf0ur"},{term:"adverb",icelandic:"atviksor\xf0"},{term:"adverb phrase",icelandic:"atviksli\xf0ur"},{term:"aspiration",icelandic:"fr\xe1bl\xe1stur"},{term:"case",icelandic:"fall"},{term:"comparative",icelandic:"mi\xf0stig"},{term:"complement",icelandic:"fyllili\xf0ur"},{term:"consonant",icelandic:"samhlj\xf3\xf0"},{term:"dative",icelandic:"\xfe\xe1gufall"},{term:"definite article",icelandic:"\xe1kve\xf0inn greinir"},{term:"demonstrative pronoun",icelandic:"\xe1bendingarfornafn"},{term:"determiner",icelandic:"\xe1kv\xe6\xf0isor\xf0"},{term:"devoicing",icelandic:"afr\xf6ddun"},{term:"diphthong",icelandic:"tv\xedhlj\xf3\xf0"},{term:"direct object",icelandic:"beint andlag"},{term:"ending",icelandic:"ending"},{term:"feminine",icelandic:"kvenkyn"},{term:"first person",icelandic:"fyrsta pers\xf3na"},{term:"gender",icelandic:"kyn"},{term:"genitive",icelandic:"eignarfall"},{term:"head",icelandic:"h\xf6fu\xf0"},{term:"indefinite pronoun",icelandic:"\xf3\xe1kve\xf0i\xf0 fornafn"},{term:"indicative",icelandic:"frams\xf6guh\xe1ttur"},{term:"indirect object",icelandic:"\xf3beint andlag"},{term:"imperative",icelandic:"bo\xf0h\xe1ttur"},{term:"infinitive",icelandic:"nafnh\xe1ttur"},{term:"masculine",icelandic:"karlkyn"},{term:"middle voice",icelandic:"mi\xf0mynd"},{term:"modal verb",icelandic:"hj\xe1lpars\xf6gn"},{term:"monophthong",icelandic:"einhlj\xf3\xf0"},{term:"neuter",icelandic:"hvorugkyn"},{term:"nominative",icelandic:"nefnifall"},{term:"noun phrase",icelandic:"nafnli\xf0ur"},{term:"passive voice",icelandic:"\xfeolmynd"},{term:"past participle",icelandic:"l\xfdsingarh\xe1ttur \xfe\xe1t\xed\xf0ar"},{term:"past tense",icelandic:"\xfe\xe1t\xed\xf0"},{term:"personal pronoun",icelandic:"pers\xf3nufornafn"},{term:"phrase",icelandic:"li\xf0ur"},{term:"plural",icelandic:"fleirtala"},{term:"positive",icelandic:"frumstig"},{term:"preaspiration",icelandic:"a\xf0bl\xe1stur"},{term:"preposition",icelandic:"forsetning"},{term:"prepositional phrase",icelandic:"forsetningarli\xf0ur"},{term:"principal parts",icelandic:"kennimyndir"},{term:"reflexive pronoun",icelandic:"afturbeygt fornafn"},{term:"possessive pronoun",icelandic:"eignarfornafn"},{term:"present participle",icelandic:"l\xfdsingarh\xe1ttur n\xfat\xed\xf0ar"},{term:"present tense",icelandic:"n\xfat\xed\xf0"},{term:"second person",icelandic:"\xf6nnur pers\xf3na"},{term:"sentence",icelandic:"setning"},{term:"singular",icelandic:"eintala"},{term:"stem",icelandic:"stofn"},{term:"strong",icelandic:"sterk beyging"},{term:"strong verb",icelandic:"sterk s\xf6gn"},{term:"stylistic fronting",icelandic:"st\xedlf\xe6rsla"},{term:"subject",icelandic:"frumlag"},{term:"subjunctive",icelandic:"vi\xf0tengingarh\xe1ttur"},{term:"superlative",icelandic:"efsta stig"},{term:"supine",icelandic:"sagnb\xf3t"},{term:"third person",icelandic:"\xferi\xf0ja pers\xf3na"},{term:"transitive",icelandic:"\xe1hrifss\xf6gn"},{term:"transitive verb",icelandic:"\xe1hrifss\xf6gn"},{term:"intransitive verb",icelandic:"\xe1hrifslaus s\xf6gn"},{term:"verb phrase",icelandic:"sagnli\xf0ur"},{term:"weak",icelandic:"veik beyging"},{term:"weak verb",icelandic:"veik s\xf6gn"},{term:"word order",icelandic:"or\xf0ar\xf6\xf0"}]}},3427:(e,t,n)=>{"use strict";n.r(t),n.d(t,{assets:()=>m,contentTitle:()=>o,default:()=>u,frontMatter:()=>l,metadata:()=>s,toc:()=>d});var r=n(7462),a=(n(7294),n(3905)),i=n(1333);const l={id:"adverb-intro",title:"Introduction to adverbs",description:"An explanation of Icelandic adverbs, including adverbs of place, time and manner."},o=void 0,s={unversionedId:"adverbs/adverb-intro",id:"adverbs/adverb-intro",title:"Introduction to adverbs",description:"An explanation of Icelandic adverbs, including adverbs of place, time and manner.",source:"@site/docs/adverbs/intro.md",sourceDirName:"adverbs",slug:"/adverbs/adverb-intro",permalink:"/docs/adverbs/adverb-intro",draft:!1,tags:[],version:"current",frontMatter:{id:"adverb-intro",title:"Introduction to adverbs",description:"An explanation of Icelandic adverbs, including adverbs of place, time and manner."},sidebar:"someSidebar",previous:{title:"Governing the genitive",permalink:"/docs/prepositions/governing-genitive"},next:{title:"Time and frequency",permalink:"/docs/adverbs/time-frequency"}},m={},d=[{value:"Formation",id:"formation",level:2},{value:"Inflection",id:"inflection",level:2},{value:"Irregular adverbs",id:"irregular-adverbs",level:3},{value:"Word order",id:"word-order",level:2},{value:"With verbs",id:"with-verbs",level:3},{value:"At the start of a sentence",id:"at-the-start-of-a-sentence",level:4},{value:"With adjectives and adverbs",id:"with-adjectives-and-adverbs",level:3}],c={toc:d},p="wrapper";function u(e){let{components:t,...n}=e;return(0,a.kt)(p,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Traditionally, the term ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)(i.R,{term:"adverb",mdxType:"Term"}))," has been used as a bit of a catch-all category for words that don\u2019t quite fit into other classes like noun, verb or adjective. In Icelandic, adverbs can be used:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"with a ",(0,a.kt)("strong",{parentName:"li"},"verb"),", to give more information about when, where or how an action is performed,"),(0,a.kt)("li",{parentName:"ul"},"with an ",(0,a.kt)("strong",{parentName:"li"},"adjective"),", to strengthen, weaken or otherwise modify the meaning of the adjective,"),(0,a.kt)("li",{parentName:"ul"},"with another ",(0,a.kt)("strong",{parentName:"li"},"adverb"),", to modify its meaning.")),(0,a.kt)("p",null,"We can divide adverbs into roughly 3 groups based on their meaning:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\ud83d\udd52 adverbs of ",(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("a",{parentName:"strong",href:"time-frequency"},"time and frequency")),", like ",(0,a.kt)("em",{parentName:"li"},"n\xfana"),", ",(0,a.kt)("em",{parentName:"li"},"\xed dag"),", ",(0,a.kt)("em",{parentName:"li"},"oft"),","),(0,a.kt)("li",{parentName:"ul"},"\ud83c\udfe0 adverbs of ",(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("a",{parentName:"strong",href:"place-direction"},"place and direction")),", like ",(0,a.kt)("em",{parentName:"li"},"h\xe9r"),", ",(0,a.kt)("em",{parentName:"li"},"\xfeanga\xf0"),", ",(0,a.kt)("em",{parentName:"li"},"nor\xf0ur"),","),(0,a.kt)("li",{parentName:"ul"},"\ud83c\udfa9 adverbs of ",(0,a.kt)("strong",{parentName:"li"},"manner"),", like ",(0,a.kt)("em",{parentName:"li"},"vel"),", ",(0,a.kt)("em",{parentName:"li"},"illa"),", ",(0,a.kt)("em",{parentName:"li"},"mj\xf6g"),", ",(0,a.kt)("em",{parentName:"li"},"r\xf3lega"),".")),(0,a.kt)("admonition",{title:"Tip",type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"Here we are using the term \u201cadverb\u201d to refer to both single words and phrases. Many adverbs, like ",(0,a.kt)("em",{parentName:"p"},"\xe1 morgun")," and ",(0,a.kt)("em",{parentName:"p"},"sem betur fer"),", are phrases that can be broken down into individual words, but they function as a single unit in the sentence.")),(0,a.kt)("h2",{id:"formation"},"Formation"),(0,a.kt)("p",null,"Many of the most commonly used adverbs in Icelandic don\u2019t have any common ending, for example ",(0,a.kt)("em",{parentName:"p"},"vel"),", ",(0,a.kt)("em",{parentName:"p"},"oft"),", ",(0,a.kt)("em",{parentName:"p"},"n\xfa"),", ",(0,a.kt)("em",{parentName:"p"},"ekki"),", ",(0,a.kt)("em",{parentName:"p"},"strax"),"."),(0,a.kt)("p",null,"That said, adverbs that are formed from adjectives very often end in ",(0,a.kt)("em",{parentName:"p"},(0,a.kt)("strong",{parentName:"em"},"-a")),". Specifically, adjectives that end in ",(0,a.kt)("em",{parentName:"p"},"-legur")," get the ending ",(0,a.kt)("em",{parentName:"p"},(0,a.kt)("strong",{parentName:"em"},"-lega"))," when they are turned into adverbs:"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("em",{parentName:"p"},"r\xf3legur")," \u2192 ",(0,a.kt)("em",{parentName:"p"},"r\xf3",(0,a.kt)("strong",{parentName:"em"},"lega")),(0,a.kt)("br",null),(0,a.kt)("em",{parentName:"p"},"vi\xf0bj\xf3\xf0slegur")," \u2192 ",(0,a.kt)("em",{parentName:"p"},"vi\xf0bj\xf3\xf0s",(0,a.kt)("strong",{parentName:"em"},"lega")))),(0,a.kt)("p",null,"This ending is like the ",(0,a.kt)("em",{parentName:"p"},"-ly")," ending for adverbs in English."),(0,a.kt)("p",null,"Other adjectives can be turned into adverbs by just using the neuter form, which ends in ",(0,a.kt)("em",{parentName:"p"},(0,a.kt)("strong",{parentName:"em"},"-t")),":"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("em",{parentName:"p"},"hra\xf0ur")," \u2192 ",(0,a.kt)("em",{parentName:"p"},"hrat",(0,a.kt)("strong",{parentName:"em"},"t")),(0,a.kt)("br",null),(0,a.kt)("em",{parentName:"p"},"ge\xf0veikur")," \u2192 ",(0,a.kt)("em",{parentName:"p"},"ge\xf0veik",(0,a.kt)("strong",{parentName:"em"},"t")),(0,a.kt)("br",null),(0,a.kt)("em",{parentName:"p"},"gr\xf3fur")," \u2192 ",(0,a.kt)("em",{parentName:"p"},"gr\xf3f",(0,a.kt)("strong",{parentName:"em"},"t")))),(0,a.kt)("p",null,"Even then though, there is a tendency to add the ending ",(0,a.kt)("em",{parentName:"p"},"-lega")," to some of these adjectives, giving for example ",(0,a.kt)("em",{parentName:"p"},"gr\xf3f",(0,a.kt)("strong",{parentName:"em"},"lega"))," instead of ",(0,a.kt)("em",{parentName:"p"},"gr\xf3ft"),"."),(0,a.kt)("h2",{id:"inflection"},"Inflection"),(0,a.kt)("p",null,"Adverbs aren\u2019t inflected for case, number or tense. But they can be inflected for ",(0,a.kt)("strong",{parentName:"p"},"degree"),":"),(0,a.kt)("figure",null,(0,a.kt)("table",null,(0,a.kt)("tbody",null,(0,a.kt)("tr",null,(0,a.kt)("td",{width:"33.3%"},(0,a.kt)("em",null,"oft")),(0,a.kt)("td",{width:"33.3%"},(0,a.kt)("em",null,"oft",(0,a.kt)("strong",null,"ar"))),(0,a.kt)("td",{width:"33.3%"},(0,a.kt)("em",null,"oft",(0,a.kt)("strong",null,"ast")))),(0,a.kt)("tr",null,(0,a.kt)("td",{width:"33.3%"},(0,a.kt)("em",null,"sjaldan")),(0,a.kt)("td",{width:"33.3%"},(0,a.kt)("em",null,"sjaldn",(0,a.kt)("strong",null,"ar"))),(0,a.kt)("td",{width:"33.3%"},(0,a.kt)("em",null,"sjaldn",(0,a.kt)("strong",null,"ast")))),(0,a.kt)("tr",null,(0,a.kt)("td",{width:"33.3%"},(0,a.kt)("em",null,"hratt")),(0,a.kt)("td",{width:"33.3%"},(0,a.kt)("em",null,"hra\xf0",(0,a.kt)("strong",null,"ar"))),(0,a.kt)("td",{width:"33.3%"},(0,a.kt)("em",null,"hra\xf0",(0,a.kt)("strong",null,"ast")))),(0,a.kt)("tr",null,(0,a.kt)("td",{width:"33.3%"},(0,a.kt)("em",null,"flj\xf3tlega")),(0,a.kt)("td",{width:"33.3%"},(0,a.kt)("em",null,"flj\xf3tlega",(0,a.kt)("strong",null,"r"))),(0,a.kt)("td",{width:"33.3%"},(0,a.kt)("em",null,"flj\xf3tlega",(0,a.kt)("strong",null,"st"))))))),(0,a.kt)("h3",{id:"irregular-adverbs"},"Irregular adverbs"),(0,a.kt)("p",null,"Like with adjectives, some adverbs have an irregular inflection of degree:"),(0,a.kt)("figure",null,(0,a.kt)("table",null,(0,a.kt)("tbody",null,(0,a.kt)("tr",null,(0,a.kt)("td",{width:"33.3%"},(0,a.kt)("em",null,"vel")),(0,a.kt)("td",{width:"33.3%"},(0,a.kt)("em",null,"betur")),(0,a.kt)("td",{width:"33.3%"},(0,a.kt)("em",null,"best"))),(0,a.kt)("tr",null,(0,a.kt)("td",{width:"33.3%"},(0,a.kt)("em",null,"illa")),(0,a.kt)("td",{width:"33.3%"},(0,a.kt)("em",null,"verr")),(0,a.kt)("td",{width:"33.3%"},(0,a.kt)("em",null,"verst"))),(0,a.kt)("tr",null,(0,a.kt)("td",{width:"33.3%"},(0,a.kt)("em",null,"l\xedti\xf0")),(0,a.kt)("td",{width:"33.3%"},(0,a.kt)("em",null,"minna")),(0,a.kt)("td",{width:"33.3%"},(0,a.kt)("em",null,"minnst"))),(0,a.kt)("tr",null,(0,a.kt)("td",{width:"33.3%"},(0,a.kt)("em",null,"mj\xf6g")),(0,a.kt)("td",{width:"33.3%"},(0,a.kt)("em",null,"meir(a)")),(0,a.kt)("td",{width:"33.3%"},(0,a.kt)("em",null,"mest"))),(0,a.kt)("tr",null,(0,a.kt)("td",{width:"33.3%"},(0,a.kt)("em",null,"varla")),(0,a.kt)("td",{width:"33.3%"},(0,a.kt)("em",null,"s\xed\xf0ur")),(0,a.kt)("td",{width:"33.3%"},(0,a.kt)("em",null,"s\xedst"))),(0,a.kt)("tr",null,(0,a.kt)("td",{width:"33.3%"},(0,a.kt)("em",null,"snemma")),(0,a.kt)("td",{width:"33.3%"},(0,a.kt)("em",null,"fyrr")),(0,a.kt)("td",{width:"33.3%"},(0,a.kt)("em",null,"fyrst")))))),(0,a.kt)("h2",{id:"word-order"},"Word order"),(0,a.kt)("p",null,"It can be tricky to know where in a sentence to place an adverb. The exact word order depends on whether you\u2019re using it with a verb, adjective or another adverb. It can also depend how long or \u201cheavy\u201d the adverb is."),(0,a.kt)("h3",{id:"with-verbs"},"With verbs"),(0,a.kt)("p",null,"Short adverbs go right ",(0,a.kt)("strong",{parentName:"p"},"after the main verb")," in the sentence. An easy way to remember this is:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Put a short adverb in the same place as you would put ",(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("em",{parentName:"strong"},"ekki")),".")),(0,a.kt)("p",null,"If the sentence already has ",(0,a.kt)("em",{parentName:"p"},"ekki"),", put the other adverb right after that. Let\u2019s look at some examples:"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("em",{parentName:"p"},"Bartosz talar ",(0,a.kt)("strong",{parentName:"em"},"ekki")," \xedslensku.",(0,a.kt)("br",null),"Lilja syngur ",(0,a.kt)("strong",{parentName:"em"},"vel"),".",(0,a.kt)("br",null),"\xc9g fer ",(0,a.kt)("strong",{parentName:"em"},"oft")," \xed bankann."))),(0,a.kt)("p",null,"We can stack a few small adverbs together after the main verb:"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("em",{parentName:"p"},"Georg syngur ",(0,a.kt)("strong",{parentName:"em"},"ekki svo vel"),".",(0,a.kt)("br",null),"\xde\xfa prj\xf3nar ",(0,a.kt)("strong",{parentName:"em"},"ekki \xfea\xf0 oft"),"."))),(0,a.kt)("p",null,"Longer adverbs, particularly phrases, often get pushed to the ",(0,a.kt)("strong",{parentName:"p"},"end of the sentence"),":"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("em",{parentName:"p"},"Vi\xf0 \xe6tlum a\xf0 fara til Akureyrar ",(0,a.kt)("strong",{parentName:"em"},"\xe1 morgun"),".",(0,a.kt)("br",null),"\xdeau hafa b\xfai\xf0 \xfear ",(0,a.kt)("strong",{parentName:"em"},"\xed m\xf6rg \xe1r"),"."))),(0,a.kt)("p",null,"These longer adverbs are sometimes described as being too \u201cheavy\u201d to sit right after the verb, as they can push the object of the verb further down the sentence and make it harder to keep track of what\u2019s happening."),(0,a.kt)("h4",{id:"at-the-start-of-a-sentence"},"At the start of a sentence"),(0,a.kt)("p",null,"Often, adverbs are placed right at the start of a sentence to give them more emphasis:"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("em",{parentName:"p"},(0,a.kt)("strong",{parentName:"em"},"\xcd dag")," \xe6tla \xe9g bara a\xf0 hv\xedla heima.",(0,a.kt)("br",null),(0,a.kt)("strong",{parentName:"em"},"\xc1 \xcdslandi")," eru margar tegundir fugla."))),(0,a.kt)("p",null,"You have to be careful here, because this triggers a process known as ",(0,a.kt)("strong",{parentName:"p"},"inversion")," or the ",(0,a.kt)("strong",{parentName:"p"},"V2 rule"),"."),(0,a.kt)("admonition",{title:"Inversion in a nutshell \ud83c\udf30",type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"The verb always wants to be the ",(0,a.kt)("strong",{parentName:"p"},"second element")," in a sentence.")),(0,a.kt)("h3",{id:"with-adjectives-and-adverbs"},"With adjectives and adverbs"),(0,a.kt)("p",null,"Adverbs that modify adjectives and other adverbs come right ",(0,a.kt)("strong",{parentName:"p"},"before the adjective or adverb"),". An easy way to remember this is:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Put the adverb in the same place as you would put ",(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("em",{parentName:"strong"},"mj\xf6g")),".")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("em",{parentName:"p"},"Konan er ",(0,a.kt)("strong",{parentName:"em"},"mj\xf6g")," falleg.",(0,a.kt)("br",null),"\xdeetta var ",(0,a.kt)("strong",{parentName:"em"},"ofbo\xf0slega")," au\xf0velt.",(0,a.kt)("br",null),"M\xe9r finnst fjallg\xf6ngur ",(0,a.kt)("strong",{parentName:"em"},"svo sj\xfaklega")," lei\xf0inlegar."))),(0,a.kt)("p",null,"Here it doesn\u2019t matter how \u201cheavy\u201d the adverb is, it will always come before the adjective or adverb it modifies."))}u.isMDXComponent=!0}}]);