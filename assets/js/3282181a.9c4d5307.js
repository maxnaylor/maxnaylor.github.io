(self.webpackChunkgramref=self.webpackChunkgramref||[]).push([[7936],{3905:(e,t,r)=>{"use strict";r.d(t,{Zo:()=>d,kt:()=>h});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},d=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},m="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),m=c(r),u=a,h=m["".concat(s,".").concat(u)]||m[u]||p[u]||i;return r?n.createElement(h,o(o({ref:t},d),{},{components:r})):n.createElement(h,o({ref:t},d))}));function h(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[m]="string"==typeof e?e:a,o[1]=l;for(var c=2;c<i;c++)o[c]=r[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},1333:(e,t,r)=>{"use strict";r.d(t,{R:()=>o});var n=r(7294),a=r(4052),i=r.n(a);class o extends n.Component{constructor(e){super(e),this.state={termWidth:""}}componentDidMount(){const e=document.getElementById("term-"+this.props.term).clientWidth,t=document.getElementById("tooltip-"+this.props.term).clientWidth;this.setState({termWidth:e,tooltipWidth:t})}offset(){return 0-this.state.tooltipWidth/2+this.state.termWidth/2+"px"}displayTerm(){let e;return e=this.props.display?this.props.display:this.props.term,e}getIcelandicTerm(){let e;return e=i().terms.filter((e=>e.term.includes(this.props.term.toLowerCase()))),e[0].icelandic}render(){return n.createElement(n.Fragment,null,n.createElement("span",{className:"term",id:"term-"+this.props.term},this.displayTerm(),n.createElement("span",{id:"tooltip-"+this.props.term,className:"tooltip",style:{left:this.offset()}},"\ud83c\uddee\ud83c\uddf8 ",this.getIcelandicTerm())))}}},4052:e=>{e.exports={terms:[,{term:"verb",icelandic:"s\xf6gn"},{term:"pronoun",icelandic:"fornafn"},{term:"mood",icelandic:"h\xe1ttur"},{term:"accusative",icelandic:"\xfeolfall"},{term:"active voice",icelandic:"germynd"},{term:"adjective",icelandic:"l\xfdsingaror\xf0"},{term:"adverb",icelandic:"atviksor\xf0"},{term:"aspiration",icelandic:"fr\xe1bl\xe1stur"},{term:"case",icelandic:"fall"},{term:"comparative",icelandic:"mi\xf0stig"},{term:"consonant",icelandic:"samhlj\xf3\xf0"},{term:"dative",icelandic:"\xfe\xe1gufall"},{term:"definite article",icelandic:"\xe1kve\xf0inn greinir"},{term:"demonstrative pronoun",icelandic:"\xe1bendingarfornafn"},{term:"devoicing",icelandic:"afr\xf6ddun"},{term:"diphthong",icelandic:"tv\xedhlj\xf3\xf0"},{term:"direct object",icelandic:"beint andlag"},{term:"ending",icelandic:"ending"},{term:"feminine",icelandic:"kvenkyn"},{term:"first person",icelandic:"fyrsta pers\xf3na"},{term:"gender",icelandic:"kyn"},{term:"genitive",icelandic:"eignarfall"},{term:"indefinite pronoun",icelandic:"\xf3\xe1kve\xf0i\xf0 fornafn"},{term:"indicative",icelandic:"frams\xf6guh\xe1ttur"},{term:"indirect object",icelandic:"\xf3beint andlag"},{term:"imperative",icelandic:"bo\xf0h\xe1ttur"},{term:"infinitive",icelandic:"nafnh\xe1ttur"},{term:"masculine",icelandic:"karlkyn"},{term:"middle voice",icelandic:"mi\xf0mynd"},{term:"modal verb",icelandic:"hj\xe1lpars\xf6gn"},{term:"monophthong",icelandic:"einhlj\xf3\xf0"},{term:"neuter",icelandic:"hvorugkyn"},{term:"nominative",icelandic:"nefnifall"},{term:"passive voice",icelandic:"\xfeolmynd"},{term:"past participle",icelandic:"l\xfdsingarh\xe1ttur \xfe\xe1t\xed\xf0ar"},{term:"past tense",icelandic:"\xfe\xe1t\xed\xf0"},{term:"personal pronoun",icelandic:"pers\xf3nufornafn"},{term:"plural",icelandic:"fleirtala"},{term:"positive",icelandic:"frumstig"},{term:"preaspiration",icelandic:"a\xf0bl\xe1stur"},{term:"preposition",icelandic:"forsetning"},{term:"principal parts",icelandic:"kennimyndir"},{term:"reflexive pronoun",icelandic:"afturbeygt fornafn"},{term:"possessive pronoun",icelandic:"eignarfornafn"},{term:"present participle",icelandic:"l\xfdsingarh\xe1ttur n\xfat\xed\xf0ar"},{term:"present tense",icelandic:"n\xfat\xed\xf0"},{term:"second person",icelandic:"\xf6nnur pers\xf3na"},{term:"singular",icelandic:"eintala"},{term:"stem",icelandic:"stofn"},{term:"strong",icelandic:"sterk beyging"},{term:"strong verb",icelandic:"sterk s\xf6gn"},{term:"subjunctive",icelandic:"vi\xf0tengingarh\xe1ttur"},{term:"superlative",icelandic:"efsta stig"},{term:"supine",icelandic:"sagnb\xf3t"},{term:"third person",icelandic:"\xferi\xf0ja pers\xf3na"},{term:"transitive",icelandic:"\xe1hrifss\xf6gn"},{term:"weak",icelandic:"veik beyging"},{term:"weak verb",icelandic:"veik s\xf6gn"}]}},3427:(e,t,r)=>{"use strict";r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>d});var n=r(7462),a=(r(7294),r(3905)),i=r(1333);const o={id:"adverb-intro",title:"Introduction to adverbs",description:"An explanation of Icelandic adverbs, including adverbs of place, time and manner."},l=void 0,s={unversionedId:"adverbs/adverb-intro",id:"adverbs/adverb-intro",title:"Introduction to adverbs",description:"An explanation of Icelandic adverbs, including adverbs of place, time and manner.",source:"@site/docs/adverbs/intro.md",sourceDirName:"adverbs",slug:"/adverbs/adverb-intro",permalink:"/docs/adverbs/adverb-intro",draft:!1,tags:[],version:"current",frontMatter:{id:"adverb-intro",title:"Introduction to adverbs",description:"An explanation of Icelandic adverbs, including adverbs of place, time and manner."},sidebar:"someSidebar",previous:{title:"Governing the genitive",permalink:"/docs/prepositions/governing-genitive"},next:{title:"U-shift",permalink:"/docs/sound-changes/u-shift"}},c={},d=[{value:"Word order",id:"word-order",level:2},{value:"With verbs",id:"with-verbs",level:3},{value:"At the start of a sentence",id:"at-the-start-of-a-sentence",level:4},{value:"With adjectives and adverbs",id:"with-adjectives-and-adverbs",level:3}],m={toc:d},p="wrapper";function u(e){let{components:t,...r}=e;return(0,a.kt)(p,(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Traditionally, the term ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)(i.R,{term:"adverb",mdxType:"Term"}))," has been used as a bit of a catch-all category for words that don\u2019t quite fit into other classes like noun, verb or adjective. In Icelandic, adverbs can be used:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"with a ",(0,a.kt)("strong",{parentName:"li"},"verb"),", to give more information about when, where or how an action is performed,"),(0,a.kt)("li",{parentName:"ul"},"with an ",(0,a.kt)("strong",{parentName:"li"},"adjective"),", to strengthen, weaken or otherwise modify the meaning of the adjective,"),(0,a.kt)("li",{parentName:"ul"},"with another ",(0,a.kt)("strong",{parentName:"li"},"adverb"),", to modify its meaning.")),(0,a.kt)("p",null,"We can divide adverbs into roughly 3 groups based on their meaning:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\ud83d\udd52 adverbs of ",(0,a.kt)("strong",{parentName:"li"},"time and frequency"),", like ",(0,a.kt)("em",{parentName:"li"},"n\xfana"),", ",(0,a.kt)("em",{parentName:"li"},"\xed dag"),", ",(0,a.kt)("em",{parentName:"li"},"oft"),","),(0,a.kt)("li",{parentName:"ul"},"\ud83c\udfe0 adverbs of ",(0,a.kt)("strong",{parentName:"li"},"place and direction"),", like ",(0,a.kt)("em",{parentName:"li"},"h\xe9r"),", ",(0,a.kt)("em",{parentName:"li"},"\xfeanga\xf0"),", ",(0,a.kt)("em",{parentName:"li"},"nor\xf0ur"),","),(0,a.kt)("li",{parentName:"ul"},"\ud83c\udfa9 adverbs of ",(0,a.kt)("strong",{parentName:"li"},"manner"),", like ",(0,a.kt)("em",{parentName:"li"},"vel"),", ",(0,a.kt)("em",{parentName:"li"},"illa"),", ",(0,a.kt)("em",{parentName:"li"},"mj\xf6g"),", ",(0,a.kt)("em",{parentName:"li"},"r\xf3lega"),".")),(0,a.kt)("admonition",{title:"Tip",type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"Here we are using the term \u201cadverb\u201d to refer to both single words and phrases. Many adverbs, like ",(0,a.kt)("em",{parentName:"p"},"\xe1 morgun")," and ",(0,a.kt)("em",{parentName:"p"},"sem betur fer"),", are phrases that can be broken down into individual words, but they function as a single unit in the sentence.")),(0,a.kt)("h2",{id:"word-order"},"Word order"),(0,a.kt)("p",null,"It can be tricky to know where in a sentence to place an adverb. The exact word order depends on whether you\u2019re using it with a verb, adjective or another adverb. It can also depend how long or \u201cheavy\u201d the adverb is."),(0,a.kt)("h3",{id:"with-verbs"},"With verbs"),(0,a.kt)("p",null,"Short adverbs go right ",(0,a.kt)("strong",{parentName:"p"},"after the main verb")," in the sentence. An easy way to remember this is:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Put a short adverb in the same place as you would put ",(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("em",{parentName:"strong"},"ekki")),".")),(0,a.kt)("p",null,"If the sentence already has ",(0,a.kt)("em",{parentName:"p"},"ekki"),", put the other adverb right after that. Let\u2019s look at some examples:"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("em",{parentName:"p"},"Bartosz talar ",(0,a.kt)("strong",{parentName:"em"},"ekki")," \xedslensku.",(0,a.kt)("br",null),"Lilja syngur ",(0,a.kt)("strong",{parentName:"em"},"vel"),".",(0,a.kt)("br",null),"\xc9g fer ",(0,a.kt)("strong",{parentName:"em"},"oft")," \xed bankann."))),(0,a.kt)("p",null,"We can stack a few small adverbs together after the main verb:"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("em",{parentName:"p"},"Georg syngur ",(0,a.kt)("strong",{parentName:"em"},"ekki svo vel"),".",(0,a.kt)("br",null),"\xde\xfa prj\xf3nar ",(0,a.kt)("strong",{parentName:"em"},"ekki \xfea\xf0 oft"),"."))),(0,a.kt)("p",null,"Longer adverbs, particularly phrases, often get pushed to the ",(0,a.kt)("strong",{parentName:"p"},"end of the sentence"),":"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("em",{parentName:"p"},"Vi\xf0 \xe6tlum a\xf0 fara til Akureyrar ",(0,a.kt)("strong",{parentName:"em"},"\xe1 morgun"),".",(0,a.kt)("br",null),"\xdeau hafa b\xfai\xf0 \xfear ",(0,a.kt)("strong",{parentName:"em"},"\xed m\xf6rg \xe1r"),"."))),(0,a.kt)("p",null,"These longer adverbs are sometimes described as being too \u201cheavy\u201d to sit right after the verb, as they can push the object of the verb further down the sentence and make it harder to keep track of what\u2019s happening."),(0,a.kt)("h4",{id:"at-the-start-of-a-sentence"},"At the start of a sentence"),(0,a.kt)("p",null,"Often, adverbs are placed right at the start of a sentence to give them more emphasis:"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("em",{parentName:"p"},(0,a.kt)("strong",{parentName:"em"},"\xcd dag")," \xe6tla \xe9g bara a\xf0 hv\xedla heima.",(0,a.kt)("br",null),(0,a.kt)("strong",{parentName:"em"},"\xc1 \xcdslandi")," eru margar tegundir fugla."))),(0,a.kt)("p",null,"You have to be careful here, because this triggers a process known as ",(0,a.kt)("strong",{parentName:"p"},"inversion")," or the ",(0,a.kt)("strong",{parentName:"p"},"V2 rule"),"."),(0,a.kt)("admonition",{title:"Inversion in a nutshell \ud83c\udf30",type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"The verb always wants to be the ",(0,a.kt)("strong",{parentName:"p"},"second element")," in a sentence.")),(0,a.kt)("p",null,"To understand how this works in more detail, see ",(0,a.kt)("a",{parentName:"p",href:"../word-order/inversion"},"Inversion"),"."),(0,a.kt)("h3",{id:"with-adjectives-and-adverbs"},"With adjectives and adverbs"),(0,a.kt)("p",null,"Adverbs that modify adjectives and other adverbs come right ",(0,a.kt)("strong",{parentName:"p"},"before the adjective or adverb"),". An easy way to remember this is:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Put the adverb in the same place as you would put ",(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("em",{parentName:"strong"},"mj\xf6g")),".")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("em",{parentName:"p"},"Konan er ",(0,a.kt)("strong",{parentName:"em"},"mj\xf6g")," falleg.",(0,a.kt)("br",null),"\xdeetta var ",(0,a.kt)("strong",{parentName:"em"},"ofbo\xf0slega")," au\xf0velt.",(0,a.kt)("br",null),"M\xe9r finnst fjallg\xf6ngur ",(0,a.kt)("strong",{parentName:"em"},"svo sj\xfaklega")," lei\xf0inlegar."))),(0,a.kt)("p",null,"Here it doesn\u2019t matter how \u201cheavy\u201d the adverb is, it will always come before the adjective or adverb it modifies."))}u.isMDXComponent=!0}}]);