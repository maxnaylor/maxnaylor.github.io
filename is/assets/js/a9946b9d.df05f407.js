(self.webpackChunkgramref=self.webpackChunkgramref||[]).push([[8806],{3905:(e,t,n)=>{"use strict";n.d(t,{Zo:()=>u,kt:()=>d});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function m(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},o="mdxType",k={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},g=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,u=m(e,["components","mdxType","originalType","parentName"]),o=p(n),g=r,d=o["".concat(s,".").concat(g)]||o[g]||k[g]||i;return n?a.createElement(d,l(l({ref:t},u),{},{components:n})):a.createElement(d,l({ref:t},u))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=g;var m={};for(var s in t)hasOwnProperty.call(t,s)&&(m[s]=t[s]);m.originalType=e,m[o]="string"==typeof e?e:r,l[1]=m;for(var p=2;p<i;p++)l[p]=n[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}g.displayName="MDXCreateElement"},1333:(e,t,n)=>{"use strict";n.d(t,{R:()=>l});var a=n(7294),r=n(4052),i=n.n(r);class l extends a.Component{constructor(e){super(e),this.state={termWidth:""}}componentDidMount(){const e=document.getElementById("term-"+this.props.term).clientWidth,t=document.getElementById("tooltip-"+this.props.term).clientWidth;this.setState({termWidth:e,tooltipWidth:t})}offset(){return 0-this.state.tooltipWidth/2+this.state.termWidth/2+"px"}displayTerm(){let e;return e=this.props.display?this.props.display:this.props.term,e}getIcelandicTerm(){let e;return e=i().terms.filter((e=>e.term.includes(this.props.term.toLowerCase()))),e[0].icelandic}render(){return a.createElement(a.Fragment,null,a.createElement("span",{className:"term",id:"term-"+this.props.term},this.displayTerm(),a.createElement("span",{id:"tooltip-"+this.props.term,className:"tooltip",style:{left:this.offset()}},"\ud83c\uddee\ud83c\uddf8 ",this.getIcelandicTerm())))}}},4052:e=>{e.exports={terms:[,{term:"verb",icelandic:"s\xf6gn"},{term:"object",icelandic:"andlag"},{term:"phrase",icelandic:"li\xf0ur"},{term:"pronoun",icelandic:"fornafn"},{term:"mood",icelandic:"h\xe1ttur"},{term:"accusative",icelandic:"\xfeolfall"},{term:"active voice",icelandic:"germynd"},{term:"adjective",icelandic:"l\xfdsingaror\xf0"},{term:"adjective phrase",icelandic:"l\xfdsingaror\xf0sli\xf0ur"},{term:"adverb",icelandic:"atviksor\xf0"},{term:"verb phrase",icelandic:"sagnli\xf0ur"},{term:"adverb phrase",icelandic:"atviksli\xf0ur"},{term:"aspiration",icelandic:"fr\xe1bl\xe1stur"},{term:"case",icelandic:"fall"},{term:"comparative",icelandic:"mi\xf0stig"},{term:"complement",icelandic:"fyllili\xf0ur"},{term:"consonant",icelandic:"samhlj\xf3\xf0"},{term:"dative",icelandic:"\xfe\xe1gufall"},{term:"definite article",icelandic:"\xe1kve\xf0inn greinir"},{term:"demonstrative pronoun",icelandic:"\xe1bendingarfornafn"},{term:"determiner",icelandic:"\xe1kv\xe6\xf0isor\xf0"},{term:"devoicing",icelandic:"afr\xf6ddun"},{term:"diphthong",icelandic:"tv\xedhlj\xf3\xf0"},{term:"direct object",icelandic:"beint andlag"},{term:"ending",icelandic:"ending"},{term:"feminine",icelandic:"kvenkyn"},{term:"first person",icelandic:"fyrsta pers\xf3na"},{term:"gender",icelandic:"kyn"},{term:"genitive",icelandic:"eignarfall"},{term:"head",icelandic:"h\xf6fu\xf0"},{term:"imperative mood",icelandic:"bo\xf0h\xe1ttur"},{term:"indefinite pronoun",icelandic:"\xf3\xe1kve\xf0i\xf0 fornafn"},{term:"indicative",icelandic:"frams\xf6guh\xe1ttur"},{term:"indirect object",icelandic:"\xf3beint andlag"},{term:"imperative",icelandic:"bo\xf0h\xe1ttur"},{term:"infinitive",icelandic:"nafnh\xe1ttur"},{term:"masculine",icelandic:"karlkyn"},{term:"middle voice",icelandic:"mi\xf0mynd"},{term:"modal verb",icelandic:"hj\xe1lpars\xf6gn"},{term:"monophthong",icelandic:"einhlj\xf3\xf0"},{term:"neuter",icelandic:"hvorugkyn"},{term:"nominative",icelandic:"nefnifall"},{term:"noun phrase",icelandic:"nafnli\xf0ur"},{term:"passive voice",icelandic:"\xfeolmynd"},{term:"past participle",icelandic:"l\xfdsingarh\xe1ttur \xfe\xe1t\xed\xf0ar"},{term:"past tense",icelandic:"\xfe\xe1t\xed\xf0"},{term:"personal pronoun",icelandic:"pers\xf3nufornafn"},{term:"plural",icelandic:"fleirtala"},{term:"positive",icelandic:"frumstig"},{term:"preaspiration",icelandic:"a\xf0bl\xe1stur"},{term:"preposition",icelandic:"forsetning"},{term:"prepositional phrase",icelandic:"forsetningarli\xf0ur"},{term:"principal parts",icelandic:"kennimyndir"},{term:"reflexive pronoun",icelandic:"afturbeygt fornafn"},{term:"possessive pronoun",icelandic:"eignarfornafn"},{term:"present participle",icelandic:"l\xfdsingarh\xe1ttur n\xfat\xed\xf0ar"},{term:"present tense",icelandic:"n\xfat\xed\xf0"},{term:"second person",icelandic:"\xf6nnur pers\xf3na"},{term:"sentence",icelandic:"setning"},{term:"singular",icelandic:"eintala"},{term:"stem",icelandic:"stofn"},{term:"strong",icelandic:"sterk beyging"},{term:"strong verb",icelandic:"sterk s\xf6gn"},{term:"stylistic fronting",icelandic:"st\xedlf\xe6rsla"},{term:"subject",icelandic:"frumlag"},{term:"subjunctive",icelandic:"vi\xf0tengingarh\xe1ttur"},{term:"superlative",icelandic:"efsta stig"},{term:"supine",icelandic:"sagnb\xf3t"},{term:"third person",icelandic:"\xferi\xf0ja pers\xf3na"},{term:"transitive",icelandic:"\xe1hrifss\xf6gn"},{term:"transitive verb",icelandic:"\xe1hrifss\xf6gn"},{term:"intransitive verb",icelandic:"\xe1hrifslaus s\xf6gn"},{term:"weak",icelandic:"veik beyging"},{term:"weak verb",icelandic:"veik s\xf6gn"},{term:"word order",icelandic:"or\xf0ar\xf6\xf0"}]}},1647:(e,t,n)=>{"use strict";n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>k,frontMatter:()=>i,metadata:()=>m,toc:()=>p});var a=n(7462),r=(n(7294),n(3905));n(1333);const i={id:"verb-intro",title:"Inngangur a\xf0 s\xf6gnum",description:"An explanation of Icelandic verbs, including tense, person, number, mood and voice."},l=void 0,m={unversionedId:"verbs/verb-intro",id:"verbs/verb-intro",title:"Inngangur a\xf0 s\xf6gnum",description:"An explanation of Icelandic verbs, including tense, person, number, mood and voice.",source:"@site/i18n/is/docusaurus-plugin-content-docs/current/verbs/intro.md",sourceDirName:"verbs",slug:"/verbs/verb-intro",permalink:"/is/docs/verbs/verb-intro",draft:!1,tags:[],version:"current",frontMatter:{id:"verb-intro",title:"Inngangur a\xf0 s\xf6gnum",description:"An explanation of Icelandic verbs, including tense, person, number, mood and voice."},sidebar:"someSidebar",previous:{title:"Tricky consonants",permalink:"/is/docs/basics/tricky-consonants"},next:{title:"N\xfat\xed\xf0",permalink:"/is/docs/verbs/present"}},s={},p=[{value:"Beyging",id:"beyging",level:2},{value:"T\xed\xf0",id:"t\xed\xf0",level:3},{value:"Pers\xf3na og tala",id:"pers\xf3na-og-tala",level:3},{value:"H\xe1ttur",id:"h\xe1ttur",level:3},{value:"Frams\xf6guh\xe1ttur",id:"frams\xf6guh\xe1ttur",level:4},{value:"Vi\xf0tengingarh\xe1tturinn",id:"vi\xf0tengingarh\xe1tturinn",level:4},{value:"Mynd",id:"mynd",level:3},{value:"Mi\xf0mynd",id:"mi\xf0mynd",level:4}],u={toc:p},o="wrapper";function k(e){let{components:t,...n}=e;return(0,r.kt)(o,(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Sagnir eru kjarni setningarinnar \xed \xedslensku. Me\xf0 \xf6\xf0rum or\xf0um sn\xfdst \xedslensk setning n\xe6stum \xfev\xed alltaf um s\xf6gn:"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("em",{parentName:"p"},"Hva\xf0 ",(0,r.kt)("strong",{parentName:"em"},"heitir")," \xfe\xfa?",(0,r.kt)("br",null),"K\xf6tturinn ",(0,r.kt)("strong",{parentName:"em"},"skr\xed\xf0ur")," undir bor\xf0inu.",(0,r.kt)("br",null),"M\xe6lst ",(0,r.kt)("strong",{parentName:"em"},"er")," til \xfeess a\xf0 gestir yfirgefi laugina 10 m\xedn\xfatum eftir lokun."))),(0,r.kt)("p",null,"Setning getur einfaldlega veri\xf0 s\xf6gn sem stendur ein:"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("em",{parentName:"p"},(0,r.kt)("strong",{parentName:"em"},"Rignir"),"?"))),(0,r.kt)("h2",{id:"beyging"},"Beyging"),(0,r.kt)("p",null,"\xcd \xedslensku beygjast sagnir eftir:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#tid"},"T\xed\xf0")," (n\xfat\xed\xf0, \xfe\xe1t\xed\xf0)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#persona-og-tala"},"Pers\xf3nu og t\xf6lu")," (fyrsta, \xf6nnur og \xferi\xf0ja pers\xf3na; eintala, fleirtala)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#hattur"},"H\xe6tti")," (frams\xf6guh\xe1ttur, vi\xf0tengingarh\xe1ttur)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#mynd"},"Mynd")," (germynd, mi\xf0mynd, \xfeolmynd)")),(0,r.kt)("p",null,"\xc1samt \xfeessum beygingarmyndum eru fleiri myndir sagna:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Nafnh\xe1ttur")," \u2013 \xdeetta er sagnarmyndin sem finnst \xed or\xf0ab\xf3kinni. Nafnh\xe1ttur flestra sagna endar \xe1 ",(0,r.kt)("em",{parentName:"li"},"-a")," (",(0,r.kt)("em",{parentName:"li"},"tala"),", ",(0,r.kt)("em",{parentName:"li"},"sofa"),", ",(0,r.kt)("em",{parentName:"li"},"gala"),") en \xfea\xf0 er til l\xedtill h\xf3pur sagna \xfear sem nafnh\xe1tturinn endar \xe1 ",(0,r.kt)("em",{parentName:"li"},"-\xe1")," (",(0,r.kt)("em",{parentName:"li"},"f\xe1"),", ",(0,r.kt)("em",{parentName:"li"},"g\xe1"),", ",(0,r.kt)("em",{parentName:"li"},"sp\xe1"),"). \xdea\xf0 er ein s\xf6gn sem f\xe6r ",(0,r.kt)("em",{parentName:"li"},"-o")," \xed nafnh\xe6tti (",(0,r.kt)("em",{parentName:"li"},"\xfevo"),") og tv\xe6r sem f\xe1 ",(0,r.kt)("em",{parentName:"li"},"-u")," (",(0,r.kt)("em",{parentName:"li"},"munu"),", ",(0,r.kt)("em",{parentName:"li"},"skulu"),"). Nafnh\xe1ttarmerki\xf0 ",(0,r.kt)("em",{parentName:"li"},"a\xf0")," er oft nota\xf0ur me\xf0 s\xf6gn \xed nafnh\xe6tti en \xfeetta r\xe6\xf0st af samhenginu."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"L\xfdsingarh\xe1ttur n\xfat\xed\xf0ar")," \u2013 Endar alltaf \xe1 ",(0,r.kt)("em",{parentName:"li"},"-andi"),". L\xfdsingarh\xe1ttur n\xfat\xed\xf0ar er sjaldnast alv\xf6ru sagnarmynd (",(0,r.kt)("em",{parentName:"li"},"barni\xf0 er ",(0,r.kt)("strong",{parentName:"em"},"sofandi")," \xed v\xf6ggunni"),"). Hann er nota\xf0ur oftar sem l\xfdsingaror\xf0 e\xf0a atviksor\xf0 (til d\xe6mis, ",(0,r.kt)("em",{parentName:"li"},"\xe9g fer ",(0,r.kt)("strong",{parentName:"em"},"hj\xf3landi")," \xed vinnu"),")."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Sagnb\xf3t")," \u2013 Notu\xf0 \xe1 eftir ",(0,r.kt)("em",{parentName:"li"},"hafa")," e\xf0a ",(0,r.kt)("em",{parentName:"li"},"vera")," til a\xf0 mynda li\xf0na t\xed\xf0 (til d\xe6mis, ",(0,r.kt)("em",{parentName:"li"},"\xe9g hef ",(0,r.kt)("strong",{parentName:"em"},"fari\xf0")," til Grikklands"),") og \xe1 eftir \xe1kve\xf0num hj\xe1lpars\xf6gnum svo sem ",(0,r.kt)("em",{parentName:"li"},"geta"),". Allar sagnir nema ",(0,r.kt)("em",{parentName:"li"},"munu")," og ",(0,r.kt)("em",{parentName:"li"},"skulu")," hafa sagnb\xf3t. Sagnb\xf3t er n\xe1kv\xe6mlega eins og hvorugkynsmynd l\xfdsingarh\xe1ttar \xfe\xe1t\xed\xf0ar en \xf6rf\xe1ar sagnir hafa ekki l\xfdsingarh\xe1tt \xfe\xe1t\xed\xf0ar. Fyrir reglur um hvernig \xe1 a\xf0 mynda sagnb\xf3t, sj\xe1 ",(0,r.kt)("a",{parentName:"li",href:"past-participle"},"L\xfdsingarh\xe1tt \xfe\xe1t\xed\xf0ar"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Bo\xf0h\xe1ttur")," \u2013 Nota\xf0ur til a\xf0 gefa skipun e\xf0a lei\xf0beiningar. \xcd bo\xf0h\xe6ttinum eru \xferj\xe1r myndir: eintala (",(0,r.kt)("em",{parentName:"li"},"komdu"),"), fleirtala (",(0,r.kt)("em",{parentName:"li"},"komi\xf0"),") og st\xfdf\xf0ur bo\xf0h\xe1ttur (",(0,r.kt)("em",{parentName:"li"},"far"),", mj\xf6g sjaldan nota\xf0ur). Sj\xe1 ",(0,r.kt)("a",{parentName:"li",href:"imperative"},"Bo\xf0h\xe1tt")," fyrir reglur.")),(0,r.kt)("admonition",{title:"Sm\xe1r\xe1\xf0",type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"Ef \xfe\xfa \xfeekkir og skilur hugt\xf6k eins og ",(0,r.kt)("em",{parentName:"p"},"n\xfat\xed\xf0"),", ",(0,r.kt)("em",{parentName:"p"},"\xferi\xf0ja pers\xf3na")," og ",(0,r.kt)("em",{parentName:"p"},"vi\xf0tengingarh\xe1ttur")," \xfearftu ekki a\xf0 lesa meira \xe1 \xfeessari s\xed\xf0u.")),(0,r.kt)("h3",{id:"t\xed\xf0"},"T\xed\xf0"),(0,r.kt)("p",null,"\xcd \xedslensku eru einungis tv\xe6r sannkalla\xf0ar t\xed\xf0ir: ",(0,r.kt)("strong",{parentName:"p"},"n\xfat\xed\xf0")," og ",(0,r.kt)("strong",{parentName:"p"},"\xfe\xe1t\xed\xf0"),". \xdeetta eru einu t\xed\xf0irnar sem eru mynda\xf0ar me\xf0 beygingum. \xcd sumum m\xe1lfr\xe6\xf0ib\xf3kum er hef\xf0 fyrir a\xf0 nota or\xf0i\xf0 \u201et\xed\xf0\u201c um setningarger\xf0ir me\xf0 hj\xe1lpars\xf6gnum eins og ",(0,r.kt)("em",{parentName:"p"},"munu")," e\xf0a ",(0,r.kt)("em",{parentName:"p"},"hafa")," en stranglega s\xe9\xf0 er sl\xedk setningarger\xf0 ekki t\xed\xf0. \xdeess vegna er \xfea\xf0 or\xf0 ekki nota\xf0 um svona setningarger\xf0 h\xe9r. Sj\xe1 ",(0,r.kt)("a",{parentName:"p",href:"modal-verbs"},"Hj\xe1lparsagnir")," fyrir n\xe1nari umfj\xf6llun um \xfeetta."),(0,r.kt)("p",null,"T\xed\xf0armyndun er \xf3l\xedk eftir sagnarflokkum. Til d\xe6mis:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Nafnh\xe1ttur"),(0,r.kt)("th",{parentName:"tr",align:null},"N\xfat\xed\xf0"),(0,r.kt)("th",{parentName:"tr",align:null},"\xde\xe1t\xed\xf0"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("em",{parentName:"td"},"a\xf0 tala")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("em",{parentName:"td"},"\xe9g ",(0,r.kt)("strong",{parentName:"em"},"tala"))),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("em",{parentName:"td"},"\xe9g ",(0,r.kt)("strong",{parentName:"em"},"tala\xf0i")))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("em",{parentName:"td"},"a\xf0 keyra")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("em",{parentName:"td"},"\xe9g ",(0,r.kt)("strong",{parentName:"em"},"keyri"))),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("em",{parentName:"td"},"\xe9g ",(0,r.kt)("strong",{parentName:"em"},"keyr\xf0i")))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("em",{parentName:"td"},"a\xf0 velja")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("em",{parentName:"td"},"\xe9g ",(0,r.kt)("strong",{parentName:"em"},"vel"))),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("em",{parentName:"td"},"\xe9g ",(0,r.kt)("strong",{parentName:"em"},"valdi")))))),(0,r.kt)("p",null,"Allar sagnir \xed t\xf6flunni fyrir ofan eru ",(0,r.kt)("em",{parentName:"p"},"veikar"),". \xdeetta s\xe9st \xe1 \xfev\xed a\xf0 \xfe\xe6r f\xe1 allar ",(0,r.kt)("em",{parentName:"p"},"tannhlj\xf3\xf0sendingu")," \xed \xfe\xe1t\xed\xf0. Me\xf0 \xf6\xf0rum or\xf0um inniheldur \xfe\xe1t\xed\xf0arendingin einhvers konar tannhlj\xf3\xf0, \xfe.e. ",(0,r.kt)("em",{parentName:"p"},"d"),", ",(0,r.kt)("em",{parentName:"p"},"\xf0")," e\xf0a ",(0,r.kt)("em",{parentName:"p"},"t"),"."),(0,r.kt)("p",null,"\xde\xe1t\xed\xf0 annarra sagna er myndu\xf0 me\xf0 hlj\xf3\xf0varpi. Sl\xedkar sagnir heita ",(0,r.kt)("em",{parentName:"p"},"sterkar")," sagnir."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Nafnh\xe1ttur"),(0,r.kt)("th",{parentName:"tr",align:null},"N\xfat\xed\xf0"),(0,r.kt)("th",{parentName:"tr",align:null},"\xde\xe1t\xed\xf0"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("em",{parentName:"td"},"a\xf0 b\xedta")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("em",{parentName:"td"},"\xe9g ",(0,r.kt)("strong",{parentName:"em"},"b\xedt"))),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("em",{parentName:"td"},"\xe9g ",(0,r.kt)("strong",{parentName:"em"},"beit")))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("em",{parentName:"td"},"a\xf0 bj\xf3\xf0a")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("em",{parentName:"td"},"\xe9g ",(0,r.kt)("strong",{parentName:"em"},"b\xfd\xf0"))),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("em",{parentName:"td"},"\xe9g ",(0,r.kt)("strong",{parentName:"em"},"bau\xf0")))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("em",{parentName:"td"},"a\xf0 detta")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("em",{parentName:"td"},"\xe9g ",(0,r.kt)("strong",{parentName:"em"},"dett"))),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("em",{parentName:"td"},"\xe9g ",(0,r.kt)("strong",{parentName:"em"},"datt")))))),(0,r.kt)("h3",{id:"pers\xf3na-og-tala"},"Pers\xf3na og tala"),(0,r.kt)("p",null,"\xcdslenskar sagnir hafa \xferj\xe1r pers\xf3nur en hver \xfeeirra er til \xed eint\xf6lu og fleirt\xf6lu:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Fyrsta")," \u2013 eintala: ",(0,r.kt)("em",{parentName:"li"},"\xe9g"),"-myndin; fleirtala: ",(0,r.kt)("em",{parentName:"li"},"vi\xf0"),"-myndin"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"\xd6nnur")," \u2013 eintala: ",(0,r.kt)("em",{parentName:"li"},"\xfe\xfa"),"-myndin; fleirtala: ",(0,r.kt)("em",{parentName:"li"},"\xfei\xf0"),"-myndin"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"\xderi\xf0ja")," \u2013 eintala: ",(0,r.kt)("em",{parentName:"li"},"hann/h\xfan/h\xe1n/\xfea\xf0"),"-myndin; fleirtala: ",(0,r.kt)("em",{parentName:"li"},"\xfeeir/\xfe\xe6r/\xfeau"),"-myndin")),(0,r.kt)("p",null,"Fyrir umfj\xf6llun um hvernig \xe1 a\xf0 nota \xfeessi forn\xf6fn, sj\xe1 ",(0,r.kt)("a",{parentName:"p",href:"../pronouns/personal"},"Pers\xf3nuforn\xf6fn"),"."),(0,r.kt)("p",null,"\xdea\xf0 eru sex m\xf6gulegar endingar sem t\xe1kna mismunandi samsetninga pers\xf3nu og t\xf6lu:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Pers\xf3na"),(0,r.kt)("th",{parentName:"tr",align:null},"Eintala"),(0,r.kt)("th",{parentName:"tr",align:null},"Fleirtala"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"1."),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("em",{parentName:"td"},"\xe9g prj\xf3n",(0,r.kt)("strong",{parentName:"em"},"a"))),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("em",{parentName:"td"},"vi\xf0 prj\xf3n",(0,r.kt)("strong",{parentName:"em"},"um")))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"2."),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("em",{parentName:"td"},"\xfe\xfa prj\xf3n",(0,r.kt)("strong",{parentName:"em"},"ar"))),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("em",{parentName:"td"},"\xfei\xf0 prj\xf3n",(0,r.kt)("strong",{parentName:"em"},"i\xf0")))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"3."),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("em",{parentName:"td"},"h\xfan prj\xf3n",(0,r.kt)("strong",{parentName:"em"},"ar"))),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("em",{parentName:"td"},"\xfe\xe6r prj\xf3n",(0,r.kt)("strong",{parentName:"em"},"a")))))),(0,r.kt)("p",null,"Endingarnar \xed t\xf6flunni fyrir ofan eru fyrir ",(0,r.kt)("a",{parentName:"p",href:"present#weak-verbs"},"1. flokks veikar sagnir"),". Saman mynda \xfeessar endingar ",(0,r.kt)("em",{parentName:"p"},"beygingard\xe6mi"),". Mismunandi beygingard\xe6mi eru \xed mismunandi flokkum sagna."),(0,r.kt)("p",null,"Innan hvers flokks eru mismunandi beygingard\xe6mi fyrir \xf3l\xedkar t\xed\xf0ar og myndir (\xfe.e. germynd e\xf0a mi\xf0mynd). Sj\xe1 s\xed\xf0urnar um veikar og sterkar sagnir fyrir umfj\xf6llun um \xfeetta."),(0,r.kt)("h3",{id:"h\xe1ttur"},"H\xe1ttur"),(0,r.kt)("p",null,"\xcdslenskar sagnir hafa tvo h\xe6tti: ",(0,r.kt)("strong",{parentName:"p"},"frams\xf6guh\xe1ttur")," og ",(0,r.kt)("strong",{parentName:"p"},"vi\xf0tengingarh\xe1ttur"),". \xcd hverjum h\xe6tti eru beygingard\xe6mi fyrir n\xfat\xed\xf0 og \xfe\xe1t\xed\xf0."),(0,r.kt)("h4",{id:"frams\xf6guh\xe1ttur"},"Frams\xf6guh\xe1ttur"),(0,r.kt)("p",null,"Frams\xf6guh\xe1tturinn er \u201evenjulegi\u201c h\xe1tturinn. Hann er nota\xf0ar til a\xf0 tala um sta\xf0reyndir: "),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("em",{parentName:"p"},"\xdea\xf0 ",(0,r.kt)("strong",{parentName:"em"},"eru")," margar kindur uppi \xed sveit.",(0,r.kt)("br",null),"Lilja ",(0,r.kt)("strong",{parentName:"em"},"\xe6tlar")," a\xf0 fara \xed sund \xe1 morgun.",(0,r.kt)("br",null),"Fer\xf0amenn ",(0,r.kt)("strong",{parentName:"em"},"hata")," h\xe1karl."))),(0,r.kt)("h4",{id:"vi\xf0tengingarh\xe1tturinn"},"Vi\xf0tengingarh\xe1tturinn"),(0,r.kt)("p",null,"Vi\xf0tengingarh\xe1tturinn er nota\xf0ur til a\xf0 tala um einhvers konar \xedmynda\xf0 \xe1stand, hugsun, tr\xfa, sko\xf0un, \xf3sk, l\xf6ngun, von e\xf0a skyldu:"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("em",{parentName:"p"},"\xdea\xf0 ",(0,r.kt)("strong",{parentName:"em"},"v\xe6ri")," betra ef \xfea\xf0 rigndi ekki.",(0,r.kt)("br",null),"Krakkarnir halda a\xf0 mamma ",(0,r.kt)("strong",{parentName:"em"},"komi")," heim \xed fyrram\xe1li\xf0.",(0,r.kt)("br",null),"\xc9g \xf3ska \xfeess a\xf0 hann ",(0,r.kt)("strong",{parentName:"em"},"v\xe6ri")," enn \xe1 l\xedfi.",(0,r.kt)("br",null),"Mikilv\xe6gt er a\xf0 gluggarnir ",(0,r.kt)("strong",{parentName:"em"},"s\xe9u")," loka\xf0ir."))),(0,r.kt)("p",null,"Fyrir n\xe1nari umfj\xf6llun um \xfeetta, sj\xe1 ",(0,r.kt)("a",{parentName:"p",href:"subjunctive"},"Vi\xf0tengingarh\xe1tt"),"."),(0,r.kt)("h3",{id:"mynd"},"Mynd"),(0,r.kt)("p",null,"\xcdslenskar sagnir hafa tv\xe6r myndir sem eru merktar me\xf0 beygingum: ",(0,r.kt)("strong",{parentName:"p"},"germynd")," og ",(0,r.kt)("strong",{parentName:"p"},"mi\xf0mynd"),". Mi\xf0myndin er s\xe9r\xedslenskt fyrirb\xe6ri."),(0,r.kt)("p",null,"Germyndin er venjulega myndin."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("em",{parentName:"p"},"Brynd\xeds ",(0,r.kt)("strong",{parentName:"em"},"kaupir")," n\xfdtt h\xfas"),".")),(0,r.kt)("p",null,"\xcd \xedslensku er l\xedka \xfeolmynd en h\xfan er myndu\xf0 me\xf0 s\xf6gninni ",(0,r.kt)("em",{parentName:"p"},"vera")," e\xf0a ",(0,r.kt)("em",{parentName:"p"},"ver\xf0a")," \xe1samt l\xfdsingarh\xe6tti \xfe\xe1t\xed\xf0ar en ekki me\xf0 beygingarendingum. Sj\xe1 ",(0,r.kt)("a",{parentName:"p",href:"passive-voice"},"\xdeolmynd")," fyrir \xfatsk\xfdringu \xe1 \xfeessu."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("em",{parentName:"p"},"N\xfdtt h\xfas ",(0,r.kt)("strong",{parentName:"em"},"var keypt"),"."))),(0,r.kt)("h4",{id:"mi\xf0mynd"},"Mi\xf0mynd"),(0,r.kt)("p",null,"Mi\xf0myndin hefur nokkur \xf3l\xedk hlutverk. H\xfan getur veri\xf0 notu\xf0 til a\xf0 tj\xe1 gagnkv\xe6mni e\xf0a afturbeygingu e\xf0a komi\xf0 \xed sta\xf0 ",(0,r.kt)("a",{parentName:"p",href:"passive-voice"},"\xfeolmyndar"),". Sumar sagnir f\xe1 breytta merkingu \xed mi\xf0mynd. A\xf0rar sagnir eru ",(0,r.kt)("em",{parentName:"p"},"eing\xf6ngu")," til \xed mi\xf0mynd."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("em",{parentName:"p"},"Vi\xf0 ",(0,r.kt)("strong",{parentName:"em"},"sj\xe1umst")," \xed n\xe6stu viku!",(0,r.kt)("br",null),"Herma\xf0urinn ",(0,r.kt)("strong",{parentName:"em"},"meiddist")," \xed str\xed\xf0inu.",(0,r.kt)("br",null),"Refurinn ",(0,r.kt)("strong",{parentName:"em"},"s\xe9st")," ekki \xed myrkrinu.",(0,r.kt)("br",null),"M\xe9r ",(0,r.kt)("strong",{parentName:"em"},"finnst")," b\xf3kin skemmtileg.",(0,r.kt)("br",null),"Bartosz og Pawe\u0142 ",(0,r.kt)("strong",{parentName:"em"},"fer\xf0u\xf0ust")," um allt landi\xf0."))),(0,r.kt)("p",null,"Mi\xf0mynd allra sagna endar \xe1 ",(0,r.kt)("em",{parentName:"p"},"-st")," og h\xfan er \xfev\xed au\xf0\xfeekkt."),(0,r.kt)("p",null,"Fyrir n\xe1nari umfj\xf6llun um beygingu og notkun mi\xf0myndar, sj\xe1 ",(0,r.kt)("a",{parentName:"p",href:"middle-voice"},"Mi\xf0mynd"),"."))}k.isMDXComponent=!0}}]);