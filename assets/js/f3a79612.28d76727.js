(self.webpackChunkgramref=self.webpackChunkgramref||[]).push([[7074],{3905:(e,t,n)=>{"use strict";n.d(t,{Zo:()=>c,kt:()=>k});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var m=a.createContext({}),s=function(e){var t=a.useContext(m),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=s(e.components);return a.createElement(m.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,m=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),u=s(n),p=r,k=u["".concat(m,".").concat(p)]||u[p]||d[p]||i;return n?a.createElement(k,l(l({ref:t},c),{},{components:n})):a.createElement(k,l({ref:t},c))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=p;var o={};for(var m in t)hasOwnProperty.call(t,m)&&(o[m]=t[m]);o.originalType=e,o[u]="string"==typeof e?e:r,l[1]=o;for(var s=2;s<i;s++)l[s]=n[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},1333:(e,t,n)=>{"use strict";n.d(t,{R:()=>l});var a=n(7294),r=n(4052),i=n.n(r);class l extends a.Component{constructor(e){super(e),this.state={termWidth:""}}componentDidMount(){const e=document.getElementById("term-"+this.props.term).clientWidth,t=document.getElementById("tooltip-"+this.props.term).clientWidth;this.setState({termWidth:e,tooltipWidth:t})}offset(){return 0-this.state.tooltipWidth/2+this.state.termWidth/2+"px"}displayTerm(){let e;return e=this.props.display?this.props.display:this.props.term,e}getIcelandicTerm(){let e;return e=i().terms.filter((e=>e.term.includes(this.props.term.toLowerCase()))),e[0].icelandic}render(){return a.createElement(a.Fragment,null,a.createElement("span",{className:"term",id:"term-"+this.props.term},this.displayTerm(),a.createElement("span",{id:"tooltip-"+this.props.term,className:"tooltip",style:{left:this.offset()}},"\ud83c\uddee\ud83c\uddf8 ",this.getIcelandicTerm())))}}},4052:e=>{e.exports={terms:[,{term:"verb",icelandic:"s\xf6gn"},{term:"object",icelandic:"andlag"},{term:"phrase",icelandic:"li\xf0ur"},{term:"pronoun",icelandic:"fornafn"},{term:"mood",icelandic:"h\xe1ttur"},{term:"accusative",icelandic:"\xfeolfall"},{term:"active voice",icelandic:"germynd"},{term:"adjective",icelandic:"l\xfdsingaror\xf0"},{term:"adjective phrase",icelandic:"l\xfdsingaror\xf0sli\xf0ur"},{term:"adverb",icelandic:"atviksor\xf0"},{term:"verb phrase",icelandic:"sagnli\xf0ur"},{term:"adverb phrase",icelandic:"atviksli\xf0ur"},{term:"aspiration",icelandic:"fr\xe1bl\xe1stur"},{term:"case",icelandic:"fall"},{term:"comparative",icelandic:"mi\xf0stig"},{term:"complement",icelandic:"fyllili\xf0ur"},{term:"consonant",icelandic:"samhlj\xf3\xf0"},{term:"dative",icelandic:"\xfe\xe1gufall"},{term:"definite article",icelandic:"\xe1kve\xf0inn greinir"},{term:"demonstrative pronoun",icelandic:"\xe1bendingarfornafn"},{term:"determiner",icelandic:"\xe1kv\xe6\xf0isor\xf0"},{term:"devoicing",icelandic:"afr\xf6ddun"},{term:"diphthong",icelandic:"tv\xedhlj\xf3\xf0"},{term:"direct object",icelandic:"beint andlag"},{term:"ending",icelandic:"ending"},{term:"feminine",icelandic:"kvenkyn"},{term:"first person",icelandic:"fyrsta pers\xf3na"},{term:"gender",icelandic:"kyn"},{term:"genitive",icelandic:"eignarfall"},{term:"head",icelandic:"h\xf6fu\xf0"},{term:"imperative mood",icelandic:"bo\xf0h\xe1ttur"},{term:"indefinite pronoun",icelandic:"\xf3\xe1kve\xf0i\xf0 fornafn"},{term:"indicative",icelandic:"frams\xf6guh\xe1ttur"},{term:"indirect object",icelandic:"\xf3beint andlag"},{term:"imperative",icelandic:"bo\xf0h\xe1ttur"},{term:"infinitive",icelandic:"nafnh\xe1ttur"},{term:"masculine",icelandic:"karlkyn"},{term:"middle voice",icelandic:"mi\xf0mynd"},{term:"modal verb",icelandic:"hj\xe1lpars\xf6gn"},{term:"monophthong",icelandic:"einhlj\xf3\xf0"},{term:"neuter",icelandic:"hvorugkyn"},{term:"nominative",icelandic:"nefnifall"},{term:"noun phrase",icelandic:"nafnli\xf0ur"},{term:"passive voice",icelandic:"\xfeolmynd"},{term:"past participle",icelandic:"l\xfdsingarh\xe1ttur \xfe\xe1t\xed\xf0ar"},{term:"past tense",icelandic:"\xfe\xe1t\xed\xf0"},{term:"personal pronoun",icelandic:"pers\xf3nufornafn"},{term:"plural",icelandic:"fleirtala"},{term:"positive",icelandic:"frumstig"},{term:"preaspiration",icelandic:"a\xf0bl\xe1stur"},{term:"preposition",icelandic:"forsetning"},{term:"prepositional phrase",icelandic:"forsetningarli\xf0ur"},{term:"principal parts",icelandic:"kennimyndir"},{term:"reflexive pronoun",icelandic:"afturbeygt fornafn"},{term:"possessive pronoun",icelandic:"eignarfornafn"},{term:"present participle",icelandic:"l\xfdsingarh\xe1ttur n\xfat\xed\xf0ar"},{term:"present tense",icelandic:"n\xfat\xed\xf0"},{term:"second person",icelandic:"\xf6nnur pers\xf3na"},{term:"sentence",icelandic:"setning"},{term:"singular",icelandic:"eintala"},{term:"stem",icelandic:"stofn"},{term:"strong",icelandic:"sterk beyging"},{term:"strong verb",icelandic:"sterk s\xf6gn"},{term:"stylistic fronting",icelandic:"st\xedlf\xe6rsla"},{term:"subject",icelandic:"frumlag"},{term:"subjunctive",icelandic:"vi\xf0tengingarh\xe1ttur"},{term:"superlative",icelandic:"efsta stig"},{term:"supine",icelandic:"sagnb\xf3t"},{term:"syncope",icelandic:"brottfall"},{term:"third person",icelandic:"\xferi\xf0ja pers\xf3na"},{term:"transitive",icelandic:"\xe1hrifss\xf6gn"},{term:"transitive verb",icelandic:"\xe1hrifss\xf6gn"},{term:"intransitive verb",icelandic:"\xe1hrifslaus s\xf6gn"},{term:"weak",icelandic:"veik beyging"},{term:"weak verb",icelandic:"veik s\xf6gn"},{term:"word order",icelandic:"or\xf0ar\xf6\xf0"}]}},5055:(e,t,n)=>{"use strict";n.r(t),n.d(t,{assets:()=>m,contentTitle:()=>l,default:()=>d,frontMatter:()=>i,metadata:()=>o,toc:()=>s});var a=n(7462),r=(n(7294),n(3905));n(1333);const i={id:"place-direction",title:"Place and direction",description:"An explanation of how to use Icelandic adverbs of place and direction, such as h\xe9r, \xfeanga\xf0 and nor\xf0ur."},l=void 0,o={unversionedId:"adverbs/place-direction",id:"adverbs/place-direction",title:"Place and direction",description:"An explanation of how to use Icelandic adverbs of place and direction, such as h\xe9r, \xfeanga\xf0 and nor\xf0ur.",source:"@site/docs/adverbs/place-direction.md",sourceDirName:"adverbs",slug:"/adverbs/place-direction",permalink:"/docs/adverbs/place-direction",draft:!1,tags:[],version:"current",frontMatter:{id:"place-direction",title:"Place and direction",description:"An explanation of how to use Icelandic adverbs of place and direction, such as h\xe9r, \xfeanga\xf0 and nor\xf0ur."},sidebar:"someSidebar",previous:{title:"Time and frequency",permalink:"/docs/adverbs/time-frequency"},next:{title:"Introduction to syntax",permalink:"/docs/syntax/syntax-intro"}},m={},s=[{value:"Basics",id:"basics",level:2},{value:"Motion towards",id:"motion-towards",level:3},{value:"Motion away",id:"motion-away",level:3},{value:"Home",id:"home",level:3},{value:"Relative position",id:"relative-position",level:2},{value:"Cardinal directions",id:"cardinal-directions",level:2},{value:"Idiomatic usage",id:"idiomatic-usage",level:3}],c={toc:s},u="wrapper";function d(e){let{components:t,...n}=e;return(0,r.kt)(u,(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Icelandic has a full range of adverbs for expressing where something is, as well as movement to or from a location. "),(0,r.kt)("h2",{id:"basics"},"Basics"),(0,r.kt)("p",null,"The basic set of place and direction adverbs is as follows:"),(0,r.kt)("figure",null,(0,r.kt)("table",null,(0,r.kt)("tbody",null,(0,r.kt)("tr",null,(0,r.kt)("td",{width:"25%"},"\u2190\u2022"),(0,r.kt)("td",{width:"25%"},(0,r.kt)("strong",null,"\u2193")),(0,r.kt)("td",{width:"25%"},"\u2192\u2022")),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("em",null,"h\xe9\xf0an")),(0,r.kt)("td",null,(0,r.kt)("strong",null,(0,r.kt)("em",null,"h\xe9r(na)"))),(0,r.kt)("td",null,(0,r.kt)("em",null,"hinga\xf0"))),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("em",null,"\xfea\xf0an")),(0,r.kt)("td",null,(0,r.kt)("strong",null,(0,r.kt)("em",null,"\xfear(na)"))),(0,r.kt)("td",null,(0,r.kt)("em",null,"\xfeanga\xf0"))),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("em",null,"hva\xf0an?")),(0,r.kt)("td",null,(0,r.kt)("strong",null,(0,r.kt)("em",null,"hvar?"))),(0,r.kt)("td",null,(0,r.kt)("em",null,"hvert?")))))),(0,r.kt)("p",null,"The adverbs in the middle column all refer to a \u2b07\ufe0f ",(0,r.kt)("strong",{parentName:"p"},"static location"),": there\u2019s no movement involved. For example:"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("em",{parentName:"p"},"Hann hefur b\xfai\xf0 ",(0,r.kt)("strong",{parentName:"em"},"h\xe9r")," alla \xe6vi s\xedna."),(0,r.kt)("br",null),(0,r.kt)("em",{parentName:"p"},"B\xfa\xf0in stendur ",(0,r.kt)("strong",{parentName:"em"},"\xfear")," \xe1 horninu."),(0,r.kt)("br",null),(0,r.kt)("em",{parentName:"p"},(0,r.kt)("strong",{parentName:"em"},"Hvar")," \xe1ttu heima?"))),(0,r.kt)("p",null,"You\u2019ll notice that ",(0,r.kt)("em",{parentName:"p"},"h\xe9r")," and ",(0,r.kt)("em",{parentName:"p"},"\xfear")," also have the alternative forms ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"h\xe9rna"))," and ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"\xfearna")),". These are used for emphasis, and mean something like \u201cright here\u201d and \u201cright there\u201d:"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("em",{parentName:"p"},"Glasi\xf0 \xfeitt er ",(0,r.kt)("strong",{parentName:"em"},"h\xe9rna"),"."),(0,r.kt)("br",null),(0,r.kt)("em",{parentName:"p"},"H\xfan stendur ",(0,r.kt)("strong",{parentName:"em"},"\xfearna")," vi\xf0 gluggann."))),(0,r.kt)("h3",{id:"motion-towards"},"Motion towards"),(0,r.kt)("p",null,"The 3 adverbs ",(0,r.kt)("em",{parentName:"p"},"hinga\xf0"),", ",(0,r.kt)("em",{parentName:"p"},"\xfeanga\xf0")," and ",(0,r.kt)("em",{parentName:"p"},"hvert")," all refer to \u27a1\ufe0f ",(0,r.kt)("strong",{parentName:"p"},"motion towards")," the place in question:"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("em",{parentName:"p"},"Vi\xf0 fluttum ",(0,r.kt)("strong",{parentName:"em"},"hinga\xf0")," eftir a\xf0 gosin byrju\xf0u."),(0,r.kt)("br",null),(0,r.kt)("em",{parentName:"p"},"Hefur\xf0u einhvern t\xedmann fari\xf0 ",(0,r.kt)("strong",{parentName:"em"},"\xfeanga\xf0"),"?"),(0,r.kt)("br",null),(0,r.kt)("em",{parentName:"p"},(0,r.kt)("strong",{parentName:"em"},"Hvert")," \xe6tlum vi\xf0 \xfat a\xf0 bor\xf0a?"))),(0,r.kt)("h3",{id:"motion-away"},"Motion away"),(0,r.kt)("p",null,"The 3 adverbs ",(0,r.kt)("em",{parentName:"p"},"h\xe9\xf0an"),", ",(0,r.kt)("em",{parentName:"p"},"\xfea\xf0an")," and ",(0,r.kt)("em",{parentName:"p"},"hva\xf0an")," all refer to \u2b05\ufe0f ",(0,r.kt)("strong",{parentName:"p"},"motion away from")," the place in question:"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("em",{parentName:"p"},"Brynja f\xe6r\xf0i st\xf3linn ",(0,r.kt)("strong",{parentName:"em"},"h\xe9\xf0an")," \xfat \xe1 svalirnar."),(0,r.kt)("br",null),(0,r.kt)("em",{parentName:"p"},"Hann labba\xf0i ",(0,r.kt)("strong",{parentName:"em"},"\xfea\xf0an")," og svo \xed vinnuna."),(0,r.kt)("br",null),(0,r.kt)("em",{parentName:"p"},(0,r.kt)("strong",{parentName:"em"},"Hva\xf0an")," er h\xfan?"))),(0,r.kt)("h3",{id:"home"},"Home"),(0,r.kt)("p",null,"To the basic set above, we can add the following 3 adverbs that describe \ud83c\udfe1 ",(0,r.kt)("strong",{parentName:"p"},"home"),":"),(0,r.kt)("figure",null,(0,r.kt)("table",null,(0,r.kt)("tbody",null,(0,r.kt)("tr",null,(0,r.kt)("td",{width:"25%"},"\u2190\u2022"),(0,r.kt)("td",{width:"25%"},(0,r.kt)("strong",null,"\u2193")),(0,r.kt)("td",{width:"25%"},"\u2192\u2022")),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("em",null,"a\xf0 heiman")),(0,r.kt)("td",null,(0,r.kt)("strong",null,(0,r.kt)("em",null,"heima"))),(0,r.kt)("td",null,(0,r.kt)("em",null,"heim")))))),(0,r.kt)("p",null,"The principle is the same as above: ",(0,r.kt)("em",{parentName:"p"},"heima")," refers to a static location, ",(0,r.kt)("em",{parentName:"p"},"heim")," refers to motion towards home, and ",(0,r.kt)("em",{parentName:"p"},"a\xf0 heiman")," refers to motion from home:"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("em",{parentName:"p"},"Er hann ekki ",(0,r.kt)("strong",{parentName:"em"},"heima"),"?",(0,r.kt)("br",null),"Mig langar ",(0,r.kt)("strong",{parentName:"em"},"heim")," n\xfana.",(0,r.kt)("br",null),"\xc1sd\xeds flutti ",(0,r.kt)("strong",{parentName:"em"},"a\xf0 heiman")," \xe1 ungum aldri."))),(0,r.kt)("h2",{id:"relative-position"},"Relative position"),(0,r.kt)("p",null,"As well as the basic set above, Icelandic has another group of 4 adverbs that indicate ",(0,r.kt)("strong",{parentName:"p"},"relative position"),". These adverbs all distinguish between a static position and motion:"),(0,r.kt)("figure",null,(0,r.kt)("table",null,(0,r.kt)("tbody",null,(0,r.kt)("tr",null,(0,r.kt)("th",{width:"50%"},"Movement"),(0,r.kt)("th",{width:"50%"},"Lack of movement")),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("em",null,"inn")),(0,r.kt)("td",null,(0,r.kt)("em",null,"inni"))),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("em",null,"\xfat")),(0,r.kt)("td",null,(0,r.kt)("em",null,"\xfati"))),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("em",null,"upp")),(0,r.kt)("td",null,(0,r.kt)("em",null,"uppi"))),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("em",null,"ni\xf0ur")),(0,r.kt)("td",null,(0,r.kt)("em",null,"ni\xf0ri")))))),(0,r.kt)("p",null,"These adverbs can be combined with hundreds of different verbs of motion or position, to give more detail about how a movement takes place or where something is located:"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("em",{parentName:"p"},"\xdeau gengu ",(0,r.kt)("strong",{parentName:"em"},"inn")," \xed h\xfasi\xf0."),(0,r.kt)("br",null),(0,r.kt)("em",{parentName:"p"},"Sj\xf3nvarpi\xf0 er ",(0,r.kt)("strong",{parentName:"em"},"inni")," \xed stofunni."),(0,r.kt)("br",null),(0,r.kt)("em",{parentName:"p"},"Hann hellti rj\xf3ma ",(0,r.kt)("strong",{parentName:"em"},"\xfat")," \xed kaffi\xf0."),(0,r.kt)("br",null),(0,r.kt)("em",{parentName:"p"},"Grilli\xf0 stendur ",(0,r.kt)("strong",{parentName:"em"},"\xfati")," \xe1 pallinum."),(0,r.kt)("br",null),(0,r.kt)("em",{parentName:"p"},"Gamla konan labba\xf0i ",(0,r.kt)("strong",{parentName:"em"},"upp")," g\xf6tuna."),(0,r.kt)("br",null),(0,r.kt)("em",{parentName:"p"},"Fr\xe6ndi minn b\xfdr ",(0,r.kt)("strong",{parentName:"em"},"uppi"),"."),(0,r.kt)("br",null),(0,r.kt)("em",{parentName:"p"},"Vi\xf0 hj\xf3lu\xf0um ",(0,r.kt)("strong",{parentName:"em"},"ni\xf0ur")," \xed b\xe6inn til a\xf0 kaupa \xeds."),(0,r.kt)("br",null),(0,r.kt)("em",{parentName:"p"},"Frystirinn er ",(0,r.kt)("strong",{parentName:"em"},"ni\xf0ri")," \xed kjallaranum."))),(0,r.kt)("p",null,"It\u2019s important not to confuse this set of adverbs with prepositions, as at first glance it can seem like there is some overlap. But remember: ",(0,r.kt)("strong",{parentName:"p"},"adverbs never govern case")," in Icelandic. In all of these sentences, the case is determined by the verb indicating movement, or a preposition like ",(0,r.kt)("em",{parentName:"p"},"\xed")," or ",(0,r.kt)("em",{parentName:"p"},"\xe1"),"."),(0,r.kt)("h2",{id:"cardinal-directions"},"Cardinal directions"),(0,r.kt)("p",null,"Cardinal directions, or \ud83e\udded ",(0,r.kt)("strong",{parentName:"p"},"points of the compass"),", are another set of the adverbs that indicate place or direction. Like the basic set of place and direction adverbs, they make a 3-way distinction between a static location, movement towards and movement away:"),(0,r.kt)("figure",null,(0,r.kt)("table",null,(0,r.kt)("tbody",null,(0,r.kt)("tr",null,(0,r.kt)("td",{width:"25%"},"\u2190\u2022"),(0,r.kt)("td",{width:"25%"},(0,r.kt)("strong",null,"\u2193")),(0,r.kt)("td",{width:"25%"},"\u2192\u2022")),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("em",null,"a\xf0 nor\xf0an")),(0,r.kt)("td",null,(0,r.kt)("strong",null,(0,r.kt)("em",null,"fyrir nor\xf0an"))),(0,r.kt)("td",null,(0,r.kt)("em",null,"nor\xf0ur"))),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("em",null,"a\xf0 austan")),(0,r.kt)("td",null,(0,r.kt)("strong",null,(0,r.kt)("em",null,"fyrir austan"))),(0,r.kt)("td",null,(0,r.kt)("em",null,"austur"))),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("em",null,"a\xf0 sunnan")),(0,r.kt)("td",null,(0,r.kt)("strong",null,(0,r.kt)("em",null,"fyrir sunnan"))),(0,r.kt)("td",null,(0,r.kt)("em",null,"su\xf0ur"))),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("em",null,"a\xf0 vestan")),(0,r.kt)("td",null,(0,r.kt)("strong",null,(0,r.kt)("em",null,"fyrir vestan"))),(0,r.kt)("td",null,(0,r.kt)("em",null,"vestur")))))),(0,r.kt)("p",null,"Let\u2019s look at some examples:"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("em",{parentName:"p"},"\xc1 morgun keyrum vi\xf0 ",(0,r.kt)("strong",{parentName:"em"},"nor\xf0ur"),"."),(0,r.kt)("br",null),(0,r.kt)("em",{parentName:"p"},"\xdeau b\xfaa ",(0,r.kt)("strong",{parentName:"em"},"fyrir sunnan")," n\xfana."),(0,r.kt)("br",null),(0,r.kt)("em",{parentName:"p"},"Vindurinn kom ",(0,r.kt)("strong",{parentName:"em"},"a\xf0 vestan"),"."))),(0,r.kt)("h3",{id:"idiomatic-usage"},"Idiomatic usage"),(0,r.kt)("p",null,"Within Iceland, the cardinal adverbs have taken on specific meanings that don\u2019t always map logically onto the compass points:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},"a\xf0 nor\xf0an"),", ",(0,r.kt)("em",{parentName:"li"},"fyrir nor\xf0an"),", ",(0,r.kt)("em",{parentName:"li"},"nor\xf0ur")," refer to North Iceland,"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},"a\xf0 austan"),", ",(0,r.kt)("em",{parentName:"li"},"fyrir austan"),", ",(0,r.kt)("em",{parentName:"li"},"austur")," refer to East Iceland (roughly the area east of Skaftafell on the south coast),"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},"a\xf0 sunnan"),", ",(0,r.kt)("em",{parentName:"li"},"fyrir sunnan"),", ",(0,r.kt)("em",{parentName:"li"},"su\xf0ur")," generally refer to the Reykjav\xedk area, but can also refer to South Iceland,"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},"a\xf0 vestan"),", ",(0,r.kt)("em",{parentName:"li"},"fyrir vestan"),", ",(0,r.kt)("em",{parentName:"li"},"ve\xf0ur")," generally refer to the Westfjords, rather than West Iceland.")))}d.isMDXComponent=!0}}]);