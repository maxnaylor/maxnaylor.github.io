(self.webpackChunkgramref=self.webpackChunkgramref||[]).push([[7057],{3905:(e,t,n)=>{"use strict";n.d(t,{Zo:()=>o,kt:()=>p});var l=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,l)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,l,r=function(e,t){if(null==e)return{};var n,l,r={},a=Object.keys(e);for(l=0;l<a.length;l++)n=a[l],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(l=0;l<a.length;l++)n=a[l],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=l.createContext({}),m=function(e){var t=l.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},o=function(e){var t=m(e.components);return l.createElement(s.Provider,{value:t},e.children)},k="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},c=l.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,o=u(e,["components","mdxType","originalType","parentName"]),k=m(n),c=r,p=k["".concat(s,".").concat(c)]||k[c]||d[c]||a;return n?l.createElement(p,i(i({ref:t},o),{},{components:n})):l.createElement(p,i({ref:t},o))}));function p(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=c;var u={};for(var s in t)hasOwnProperty.call(t,s)&&(u[s]=t[s]);u.originalType=e,u[k]="string"==typeof e?e:r,i[1]=u;for(var m=2;m<a;m++)i[m]=n[m];return l.createElement.apply(null,i)}return l.createElement.apply(null,n)}c.displayName="MDXCreateElement"},1333:(e,t,n)=>{"use strict";n.d(t,{R:()=>i});var l=n(7294),r=n(4052),a=n.n(r);class i extends l.Component{constructor(e){super(e),this.state={termWidth:""}}componentDidMount(){const e=document.getElementById("term-"+this.props.term).clientWidth,t=document.getElementById("tooltip-"+this.props.term).clientWidth;this.setState({termWidth:e,tooltipWidth:t})}offset(){return 0-this.state.tooltipWidth/2+this.state.termWidth/2+"px"}displayTerm(){let e;return e=this.props.display?this.props.display:this.props.term,e}getIcelandicTerm(){let e;return e=a().terms.filter((e=>e.term.includes(this.props.term.toLowerCase()))),e[0].icelandic}render(){return l.createElement(l.Fragment,null,l.createElement("span",{className:"term",id:"term-"+this.props.term},this.displayTerm(),l.createElement("span",{id:"tooltip-"+this.props.term,className:"tooltip",style:{left:this.offset()}},"\ud83c\uddee\ud83c\uddf8 ",this.getIcelandicTerm())))}}},4052:e=>{e.exports={terms:[,{term:"verb",icelandic:"s\xf6gn"},{term:"object",icelandic:"andlag"},{term:"pronoun",icelandic:"fornafn"},{term:"mood",icelandic:"h\xe1ttur"},{term:"accusative",icelandic:"\xfeolfall"},{term:"active voice",icelandic:"germynd"},{term:"adjective",icelandic:"l\xfdsingaror\xf0"},{term:"adjective phrase",icelandic:"l\xfdsingaror\xf0sli\xf0ur"},{term:"adverb",icelandic:"atviksor\xf0"},{term:"adverb phrase",icelandic:"atviksli\xf0ur"},{term:"aspiration",icelandic:"fr\xe1bl\xe1stur"},{term:"case",icelandic:"fall"},{term:"comparative",icelandic:"mi\xf0stig"},{term:"complement",icelandic:"fyllili\xf0ur"},{term:"consonant",icelandic:"samhlj\xf3\xf0"},{term:"dative",icelandic:"\xfe\xe1gufall"},{term:"definite article",icelandic:"\xe1kve\xf0inn greinir"},{term:"demonstrative pronoun",icelandic:"\xe1bendingarfornafn"},{term:"determiner",icelandic:"\xe1kv\xe6\xf0isor\xf0"},{term:"devoicing",icelandic:"afr\xf6ddun"},{term:"diphthong",icelandic:"tv\xedhlj\xf3\xf0"},{term:"direct object",icelandic:"beint andlag"},{term:"ending",icelandic:"ending"},{term:"feminine",icelandic:"kvenkyn"},{term:"first person",icelandic:"fyrsta pers\xf3na"},{term:"gender",icelandic:"kyn"},{term:"genitive",icelandic:"eignarfall"},{term:"head",icelandic:"h\xf6fu\xf0"},{term:"indefinite pronoun",icelandic:"\xf3\xe1kve\xf0i\xf0 fornafn"},{term:"indicative",icelandic:"frams\xf6guh\xe1ttur"},{term:"indirect object",icelandic:"\xf3beint andlag"},{term:"imperative",icelandic:"bo\xf0h\xe1ttur"},{term:"infinitive",icelandic:"nafnh\xe1ttur"},{term:"masculine",icelandic:"karlkyn"},{term:"middle voice",icelandic:"mi\xf0mynd"},{term:"modal verb",icelandic:"hj\xe1lpars\xf6gn"},{term:"monophthong",icelandic:"einhlj\xf3\xf0"},{term:"neuter",icelandic:"hvorugkyn"},{term:"nominative",icelandic:"nefnifall"},{term:"noun phrase",icelandic:"nafnli\xf0ur"},{term:"passive voice",icelandic:"\xfeolmynd"},{term:"past participle",icelandic:"l\xfdsingarh\xe1ttur \xfe\xe1t\xed\xf0ar"},{term:"past tense",icelandic:"\xfe\xe1t\xed\xf0"},{term:"personal pronoun",icelandic:"pers\xf3nufornafn"},{term:"phrase",icelandic:"li\xf0ur"},{term:"plural",icelandic:"fleirtala"},{term:"positive",icelandic:"frumstig"},{term:"preaspiration",icelandic:"a\xf0bl\xe1stur"},{term:"preposition",icelandic:"forsetning"},{term:"prepositional phrase",icelandic:"forsetningarli\xf0ur"},{term:"principal parts",icelandic:"kennimyndir"},{term:"reflexive pronoun",icelandic:"afturbeygt fornafn"},{term:"possessive pronoun",icelandic:"eignarfornafn"},{term:"present participle",icelandic:"l\xfdsingarh\xe1ttur n\xfat\xed\xf0ar"},{term:"present tense",icelandic:"n\xfat\xed\xf0"},{term:"second person",icelandic:"\xf6nnur pers\xf3na"},{term:"sentence",icelandic:"setning"},{term:"singular",icelandic:"eintala"},{term:"stem",icelandic:"stofn"},{term:"strong",icelandic:"sterk beyging"},{term:"strong verb",icelandic:"sterk s\xf6gn"},{term:"stylistic fronting",icelandic:"st\xedlf\xe6rsla"},{term:"subject",icelandic:"frumlag"},{term:"subjunctive",icelandic:"vi\xf0tengingarh\xe1ttur"},{term:"superlative",icelandic:"efsta stig"},{term:"supine",icelandic:"sagnb\xf3t"},{term:"third person",icelandic:"\xferi\xf0ja pers\xf3na"},{term:"transitive",icelandic:"\xe1hrifss\xf6gn"},{term:"verb phrase",icelandic:"sagnli\xf0ur"},{term:"weak",icelandic:"veik beyging"},{term:"weak verb",icelandic:"veik s\xf6gn"},{term:"word order",icelandic:"or\xf0ar\xf6\xf0"}]}},6562:(e,t,n)=>{"use strict";n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>u,toc:()=>m});var l=n(7462),r=(n(7294),n(3905));n(1333);const a={id:"time-frequency",title:"Time and frequency",description:"An explanation of how to use Icelandic adverbs of time and frequency, such as n\xfana and oft."},i=void 0,u={unversionedId:"adverbs/time-frequency",id:"adverbs/time-frequency",title:"Time and frequency",description:"An explanation of how to use Icelandic adverbs of time and frequency, such as n\xfana and oft.",source:"@site/docs/adverbs/time-frequency.md",sourceDirName:"adverbs",slug:"/adverbs/time-frequency",permalink:"/docs/adverbs/time-frequency",draft:!1,tags:[],version:"current",frontMatter:{id:"time-frequency",title:"Time and frequency",description:"An explanation of how to use Icelandic adverbs of time and frequency, such as n\xfana and oft."},sidebar:"someSidebar",previous:{title:"Introduction to adverbs",permalink:"/docs/adverbs/adverb-intro"},next:{title:"Place and direction",permalink:"/docs/adverbs/place-direction"}},s={},m=[{value:"Time",id:"time",level:2},{value:"Basic phrases of time",id:"basic-phrases-of-time",level:3},{value:"Days of the week",id:"days-of-the-week",level:3},{value:"Months",id:"months",level:3},{value:"Dates and years",id:"dates-and-years",level:3},{value:"Prepositional time phrases",id:"prepositional-time-phrases",level:3},{value:"<em>\xed</em>",id:"\xed",level:4},{value:"<em>\xe1</em>",id:"\xe1",level:4},{value:"<em>fyrir</em>",id:"fyrir",level:4},{value:"Frequency",id:"frequency",level:2},{value:"Frequency phrases with numbers",id:"frequency-phrases-with-numbers",level:3},{value:"Days of the week",id:"days-of-week-frequency",level:3}],o={toc:m},k="wrapper";function d(e){let{components:t,...n}=e;return(0,r.kt)(k,(0,l.Z)({},o,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"time"},"Time"),(0,r.kt)("p",null,"Adverbs of time in Icelandic are often ",(0,r.kt)("strong",{parentName:"p"},"phrases"),", like ",(0,r.kt)("em",{parentName:"p"},"\xed dag")," or ",(0,r.kt)("em",{parentName:"p"},"\xe1 morgun"),". You might be tempted to break these phrases down into their individual components. Whilst this is sometimes helpful, there is often not much logic to which prepositions and which cases are used in adverbial time phrases."),(0,r.kt)("p",null,"That said, there are some rules set out below for how to use the ",(0,r.kt)("strong",{parentName:"p"},"prepositions ",(0,r.kt)("em",{parentName:"strong"},"\xed"),", ",(0,r.kt)("em",{parentName:"strong"},"\xe1")," and ",(0,r.kt)("em",{parentName:"strong"},"fyrir"))," in time expressions including numbers."),(0,r.kt)("h3",{id:"basic-phrases-of-time"},"Basic phrases of time"),(0,r.kt)("p",null,"These are best learnt as fixed phrases:"),(0,r.kt)("figure",null,(0,r.kt)("table",{class:"full-width"},(0,r.kt)("tbody",null,(0,r.kt)("tr",null,(0,r.kt)("td",null),(0,r.kt)("td",{width:"17%"},(0,r.kt)("em",null,"\u2190 \u2190")),(0,r.kt)("td",{width:"17%"},(0,r.kt)("em",null,"\u2190")),(0,r.kt)("td",{width:"17%"},(0,r.kt)("em",null,(0,r.kt)("strong",null,"\u2193"))),(0,r.kt)("td",{width:"17%"},(0,r.kt)("em",null,"\u2192")),(0,r.kt)("td",{width:"17%"},(0,r.kt)("em",null,"\u2192 \u2192"))),(0,r.kt)("tr",null,(0,r.kt)("th",{align:"left"},"Day"),(0,r.kt)("td",null,(0,r.kt)("em",null,"\xed fyrradag")),(0,r.kt)("td",null,(0,r.kt)("em",null,"\xed g\xe6r")),(0,r.kt)("td",null,(0,r.kt)("strong",null,(0,r.kt)("em",null,"\xed dag"))),(0,r.kt)("td",null,(0,r.kt)("em",null,"\xe1 morgun")),(0,r.kt)("td",null,(0,r.kt)("em",null,"ekki \xe1 morgun heldur hinn"))),(0,r.kt)("tr",null,(0,r.kt)("th",{align:"left"},"Week"),(0,r.kt)("td",null,(0,r.kt)("em",null,"\xed \xfears\xed\xf0ustu viku")),(0,r.kt)("td",null,(0,r.kt)("em",null,"\xed s\xed\xf0ustu viku")),(0,r.kt)("td",null,(0,r.kt)("strong",null,(0,r.kt)("em",null,"\xed \xfeessari viku"))),(0,r.kt)("td",null,(0,r.kt)("em",null,"\xed n\xe6stu viku")),(0,r.kt)("td",null,(0,r.kt)("em",null,"\xed \xfearn\xe6stu viku"))),(0,r.kt)("tr",null,(0,r.kt)("th",{align:"left"},"Month"),(0,r.kt)("td",null,(0,r.kt)("em",null,"\xed \xfears\xed\xf0asta m\xe1nu\xf0i")),(0,r.kt)("td",null,(0,r.kt)("em",null,"\xed s\xed\xf0asta m\xe1nu\xf0i")),(0,r.kt)("td",null,(0,r.kt)("strong",null,(0,r.kt)("em",null,"\xed \xfeessum m\xe1nu\xf0i"))),(0,r.kt)("td",null,(0,r.kt)("em",null,"\xed n\xe6sta m\xe1nu\xf0i")),(0,r.kt)("td",null,(0,r.kt)("em",null,"\xed \xfearn\xe6sta m\xe1nu\xf0i"))),(0,r.kt)("tr",null,(0,r.kt)("th",{align:"left"},"Year"),(0,r.kt)("td",null,(0,r.kt)("em",null,"\xed hitti\xf0fyrra")),(0,r.kt)("td",null,(0,r.kt)("em",null,"\xed fyrra")),(0,r.kt)("td",null,(0,r.kt)("strong",null,(0,r.kt)("em",null,"\xed \xe1r"))),(0,r.kt)("td",null,(0,r.kt)("em",null,"\xe1 n\xe6sta \xe1ri")),(0,r.kt)("td",null,(0,r.kt)("em",null,"\xe1 \xfearn\xe6sta \xe1ri")))))),(0,r.kt)("p",null,"As you can see, depending on the exact phrase and unit of time, we have a mixture of ",(0,r.kt)("em",{parentName:"p"},"\xe1")," and ",(0,r.kt)("em",{parentName:"p"},"\xed"),". There are also different cases, for example ",(0,r.kt)("em",{parentName:"p"},"\xed dag")," has the accusative, but ",(0,r.kt)("em",{parentName:"p"},"\xed \xfeessari viku")," has the dative. There\u2019s no rhyme or reason here! \ud83e\udee0 "),(0,r.kt)("p",null,"There\u2019s also a corresponding set of phrases to talk about time of day, which is even less predictable:"),(0,r.kt)("figure",null,(0,r.kt)("table",null,(0,r.kt)("tbody",null,(0,r.kt)("tr",null,(0,r.kt)("td",null),(0,r.kt)("td",{width:"25%"},(0,r.kt)("em",null,"\u2190")),(0,r.kt)("td",{width:"25%"},(0,r.kt)("em",null,(0,r.kt)("strong",null,"\u2193"))),(0,r.kt)("td",{width:"25%"},(0,r.kt)("em",null,"\u2192"))),(0,r.kt)("tr",null,(0,r.kt)("th",{align:"left"},"Morning"),(0,r.kt)("td",null,(0,r.kt)("em",null,"\xed g\xe6rmorgun")),(0,r.kt)("td",null,(0,r.kt)("strong",null,(0,r.kt)("em",null,"\xed morgun"))),(0,r.kt)("td",null,(0,r.kt)("em",null,"\xed fyrram\xe1li\xf0"))),(0,r.kt)("tr",null,(0,r.kt)("th",{align:"left"},"Evening"),(0,r.kt)("td",null,(0,r.kt)("em",null,"\xed g\xe6rkv\xf6ldi")),(0,r.kt)("td",null,(0,r.kt)("strong",null,(0,r.kt)("em",null,"\xed kv\xf6ld"))),(0,r.kt)("td",null,(0,r.kt)("em",null,"anna\xf0 kv\xf6ld")))))),(0,r.kt)("h3",{id:"days-of-the-week"},"Days of the week"),(0,r.kt)("p",null,"Icelandic has its own names for days of the week, which were christianised a few centuries ago by some priests who did not care for the old pagan names. Expressions containing days of the week are often formed with ",(0,r.kt)("em",{parentName:"p"},"\xe1"),":"),(0,r.kt)("figure",null,(0,r.kt)("table",null,(0,r.kt)("tbody",null,(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("em",null,"\xe1 ",(0,r.kt)("strong",null,"m\xe1nudaginn")))),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("em",null,"\xe1 ",(0,r.kt)("strong",null,"\xferi\xf0judaginn")))),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("em",null,"\xe1 ",(0,r.kt)("strong",null,"mi\xf0vikudaginn")))),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("em",null,"\xe1 ",(0,r.kt)("strong",null,"fimmtudaginn")))),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("em",null,"\xe1 ",(0,r.kt)("strong",null,"f\xf6studaginn")))),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("em",null,"\xe1 ",(0,r.kt)("strong",null,"laugardaginn")))),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("em",null,"\xe1 ",(0,r.kt)("strong",null,"sunnudaginn"))))))),(0,r.kt)("p",null,"All of these expressions can refer to the day just gone or the next one coming, depending on the context:"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("em",{parentName:"p"},"\xc9g f\xf3r til l\xe6knis ",(0,r.kt)("strong",{parentName:"em"},"\xe1 \xferi\xf0judaginn"),"."),(0,r.kt)("br",null),(0,r.kt)("em",{parentName:"p"},"N\xe6sta sendingin kemur ",(0,r.kt)("strong",{parentName:"em"},"\xe1 mi\xf0vikudaginn"),"."))),(0,r.kt)("p",null,"You may also come across these phrases without the definite article, e.g. ",(0,r.kt)("em",{parentName:"p"},"\xe1 fimmtudag"),", but this is does not change the meaning."),(0,r.kt)("p",null,"The Icelandic week starts on Monday, even though in the names of the days Tuesday is the \u201cthird\u201d day and Thursday is the \u201cfifth\u201d day."),(0,r.kt)("p",null,"See below for an explanation of how to use the ",(0,r.kt)("a",{parentName:"p",href:"#days-of-week-frequency"},"days of the week in frequency expressions"),"."),(0,r.kt)("h3",{id:"months"},"Months"),(0,r.kt)("p",null,"Icelandic uses the international names for months, which follow the preposition ",(0,r.kt)("em",{parentName:"p"},"\xed"),":"),(0,r.kt)("figure",null,(0,r.kt)("table",null,(0,r.kt)("tbody",null,(0,r.kt)("tr",null,(0,r.kt)("td",{width:"50%"},(0,r.kt)("em",null,"\xed ",(0,r.kt)("strong",null,"jan\xfaar"))),(0,r.kt)("td",{width:"50%"},(0,r.kt)("em",null,"\xed ",(0,r.kt)("strong",null,"j\xfal\xed")))),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("em",null,"\xed ",(0,r.kt)("strong",null,"febr\xfaar"))),(0,r.kt)("td",null,(0,r.kt)("em",null,"\xed ",(0,r.kt)("strong",null,"\xe1g\xfast")))),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("em",null,"\xed ",(0,r.kt)("strong",null,"mars"))),(0,r.kt)("td",null,(0,r.kt)("em",null,"\xed ",(0,r.kt)("strong",null,"september")))),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("em",null,"\xed ",(0,r.kt)("strong",null,"apr\xedl"))),(0,r.kt)("td",null,(0,r.kt)("em",null,"\xed ",(0,r.kt)("strong",null,"okt\xf3ber")))),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("em",null,"\xed ",(0,r.kt)("strong",null,"ma\xed"))),(0,r.kt)("td",null,(0,r.kt)("em",null,"\xed ",(0,r.kt)("strong",null,"n\xf3vember")))),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("em",null,"\xed ",(0,r.kt)("strong",null,"j\xfan\xed"))),(0,r.kt)("td",null,(0,r.kt)("em",null,"\xed ",(0,r.kt)("strong",null,"desember"))))))),(0,r.kt)("h3",{id:"dates-and-years"},"Dates and years"),(0,r.kt)("p",null,"When talking about dates and years in Icelandic, ",(0,r.kt)("strong",{parentName:"p"},"no preposition")," is used. For dates, it\u2019s enough to say the date in the accusative case (singular weak masculine form), with the optional pronoun ",(0,r.kt)("em",{parentName:"p"},"\xfeann"),", meaning \u201cthe\u201d:"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("em",{parentName:"p"},"\xc9g f\xe6ddist ",(0,r.kt)("strong",{parentName:"em"},"fimmta ma\xed n\xedtj\xe1n hundru\xf0 n\xedut\xedu og eitt"),"."),(0,r.kt)("br",null),(0,r.kt)("em",{parentName:"p"},(0,r.kt)("strong",{parentName:"em"},"\xdeann tuttugasta og annan mars")," ver\xf0ur haldi\xf0 upp \xe1 afm\xe6li forsetans."))),(0,r.kt)("p",null,"For years, you can either just say the plain number (in the neuter) or add ",(0,r.kt)("em",{parentName:"p"},"\xe1ri\xf0")," beforehand:"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("em",{parentName:"p"},"Vi\xf0 hittumst ",(0,r.kt)("strong",{parentName:"em"},"\xe1ri\xf0 2017"),"."))),(0,r.kt)("p",null,"The prepositions ",(0,r.kt)("em",{parentName:"p"},"\xe1")," and ",(0,r.kt)("em",{parentName:"p"},"\xed")," are ",(0,r.kt)("strong",{parentName:"p"},"never")," used with years."),(0,r.kt)("h3",{id:"prepositional-time-phrases"},"Prepositional time phrases"),(0,r.kt)("p",null,"There are 3 main prepositions that are used to form time phrases in Icelandic:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},"\xed"),", used to talk about \ud83d\udd52 ",(0,r.kt)("strong",{parentName:"li"},"durations")," (how long),"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},"\xe1"),", used to talk about a \ud83d\udc47 ",(0,r.kt)("strong",{parentName:"li"},"specific point in time"),","),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},"fyrir"),", used to talk about \ud83d\uddd3\ufe0f ",(0,r.kt)("strong",{parentName:"li"},"how long ago")," something happened.")),(0,r.kt)("h4",{id:"\xed"},(0,r.kt)("em",{parentName:"h4"},"\xed")),(0,r.kt)("p",null,"When used in time phrases of duration, ",(0,r.kt)("em",{parentName:"p"},"\xed")," takes the accusative:"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("em",{parentName:"p"},"H\xfan tala\xf0i ",(0,r.kt)("strong",{parentName:"em"},"\xed fimm m\xedn\xfatur")," um b\xf6rnin s\xedn."),(0,r.kt)("br",null),(0,r.kt)("em",{parentName:"p"},"\xc9g er b\xfainn a\xf0 b\xed\xf0a ",(0,r.kt)("strong",{parentName:"em"},"\xed klukkut\xedma")," eftir \xfe\xe9r!"),(0,r.kt)("br",null),(0,r.kt)("em",{parentName:"p"},"Vi\xf0 f\xf6rum til Sp\xe1nar ",(0,r.kt)("strong",{parentName:"em"},"\xed t\xedu daga"),"."),(0,r.kt)("br",null),(0,r.kt)("em",{parentName:"p"},"Reynir vann \xed bankanum ",(0,r.kt)("strong",{parentName:"em"},"\xed fimm \xe1r"),"."))),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("mdxAdmonitionTitle",{parentName:"admonition"},"Getting ",(0,r.kt)("em",{parentName:"mdxAdmonitionTitle"},"\xed")," and ",(0,r.kt)("em",{parentName:"mdxAdmonitionTitle"},"fyrir")," mixed up"),(0,r.kt)("p",{parentName:"admonition"},"If you know how prepositions of time work in English, it\u2019s easy to mix up ",(0,r.kt)("em",{parentName:"p"},"\xed")," and ",(0,r.kt)("em",{parentName:"p"},"fyrir")," in Icelandic. Remember, ",(0,r.kt)("em",{parentName:"p"},"\xed")," is equivalent to \u201cfor\u201d and is used to talk about durations. ",(0,r.kt)("em",{parentName:"p"},"Fyrir")," never means \u201cfor\u201d in time expressions, it always means \u201cago\u201d.")),(0,r.kt)("h4",{id:"\xe1"},(0,r.kt)("em",{parentName:"h4"},"\xe1")),(0,r.kt)("p",null,"When used to talk about something happening at a specific point in time, ",(0,r.kt)("em",{parentName:"p"},"\xe1")," takes the dative:"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("em",{parentName:"p"},"\xc9g hitti hann ",(0,r.kt)("strong",{parentName:"em"},"\xe1 fimmtudegi"),"."),(0,r.kt)("br",null),(0,r.kt)("em",{parentName:"p"},(0,r.kt)("strong",{parentName:"em"},"\xc1 \xfeeim t\xedma")," bjuggu flestir uppi \xed sveit."))),(0,r.kt)("p",null,"To be clear, ",(0,r.kt)("em",{parentName:"p"},"\xe1 fimmtudegi")," in the example above means \u201con ",(0,r.kt)("strong",{parentName:"p"},"a")," Thursday\u201d, as opposed to ",(0,r.kt)("em",{parentName:"p"},"\xe1 fimmtudaginn")," which means \u201con Thursday\u201d (i.e. \u201clast Thursday\u201d or \u201cnext Thursday\u201d)."),(0,r.kt)("p",null,"Note that in the fixed time phrases set out in the first section on this page, such as ",(0,r.kt)("em",{parentName:"p"},"\xe1 morgun"),", you may find the accusative case with ",(0,r.kt)("em",{parentName:"p"},"\xe1"),"."),(0,r.kt)("h4",{id:"fyrir"},(0,r.kt)("em",{parentName:"h4"},"fyrir")),(0,r.kt)("p",null,"When used to talk about how long ago something happened, ",(0,r.kt)("em",{parentName:"p"},"fyrir")," takes the dative:"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("em",{parentName:"p"},"Georg flutti su\xf0ur fyrir ",(0,r.kt)("strong",{parentName:"em"},"t\xedu \xe1rum"),".",(0,r.kt)("br",null),"\xc9g henti g\xf6mlu sk\xf3num m\xednum fyrir ",(0,r.kt)("strong",{parentName:"em"},"l\xf6ngu")," s\xed\xf0an."))),(0,r.kt)("p",null,"It\u2019s sometimes accompanied by ",(0,r.kt)("em",{parentName:"p"},"s\xed\xf0an")," after the noun in this meaning, although this is optional."),(0,r.kt)("h2",{id:"frequency"},"Frequency"),(0,r.kt)("p",null,"There are 5 basic adverbs of time and frequency in Icelandic, shown here in order from \u201calways\u201d to \u201cnever\u201d:"),(0,r.kt)("figure",null,(0,r.kt)("table",null,(0,r.kt)("tbody",null,(0,r.kt)("tr",null,(0,r.kt)("td",{rowspan:"5"},(0,r.kt)("img",{src:"/img/frequency-arrow.svg",width:"45px"})),(0,r.kt)("td",null,(0,r.kt)("em",null,"alltaf"))),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("em",null,"oft"))),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("em",null,"stundum"))),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("em",null,"sjaldan"))),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("em",null,"aldrei")))))),(0,r.kt)("p",null,"All of these short words are placed in the same place as ",(0,r.kt)("em",{parentName:"p"},"ekki")," in the sentence. These are just the basic frequency words, there are many more specific ones."),(0,r.kt)("h3",{id:"frequency-phrases-with-numbers"},"Frequency phrases with numbers"),(0,r.kt)("p",null,"Frequency phrases that contain numbers in Icelandic are formed with the neuter noun ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"sinn")," in the dative case"),". Like in English and some other languages, the words for \u201ctwice\u201d and \u201cthrice\u201d are irregular:"),(0,r.kt)("figure",null,(0,r.kt)("table",null,(0,r.kt)("tbody",null,(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("em",null,"einu sinni"))),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("em",null,(0,r.kt)("strong",null,"tvisvar")))),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("em",null,(0,r.kt)("strong",null,"\xferisvar")))),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("em",null,"fj\xf3rum sinnum"))),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("em",null,"fimm sinnum"),"\xa0\u2026"))))),(0,r.kt)("h3",{id:"days-of-week-frequency"},"Days of the week"),(0,r.kt)("p",null,"When you want to talk about doing something on the same day every week, use ",(0,r.kt)("em",{parentName:"p"},"\xe1")," followed by the dative plural:"),(0,r.kt)("figure",null,(0,r.kt)("table",null,(0,r.kt)("tbody",null,(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("em",null,"\xe1 ",(0,r.kt)("strong",null,"m\xe1nud\xf6gum")))),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("em",null,"\xe1 ",(0,r.kt)("strong",null,"\xferi\xf0jud\xf6gum")))),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("em",null,"\xe1 ",(0,r.kt)("strong",null,"mi\xf0vikud\xf6gum")))),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("em",null,"\xe1 ",(0,r.kt)("strong",null,"fimmtud\xf6gum")))),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("em",null,"\xe1 ",(0,r.kt)("strong",null,"f\xf6stud\xf6gum")))),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("em",null,"\xe1 ",(0,r.kt)("strong",null,"laugard\xf6gum")))),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("em",null,"\xe1 ",(0,r.kt)("strong",null,"sunnud\xf6gum"))))))),(0,r.kt)("p",null,"To talk about doing something on the weekends, use the fixed phrase ",(0,r.kt)("em",{parentName:"p"},(0,r.kt)("strong",{parentName:"em"},"um helgar")),"."))}d.isMDXComponent=!0}}]);