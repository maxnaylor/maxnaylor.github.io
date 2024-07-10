(self.webpackChunkgramref=self.webpackChunkgramref||[]).push([[9660],{3905:(t,e,n)=>{"use strict";n.d(e,{Zo:()=>o,kt:()=>c});var l=n(7294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function r(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);e&&(l=l.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,l)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?r(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function u(t,e){if(null==t)return{};var n,l,a=function(t,e){if(null==t)return{};var n,l,a={},r=Object.keys(t);for(l=0;l<r.length;l++)n=r[l],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(l=0;l<r.length;l++)n=r[l],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var k=l.createContext({}),m=function(t){var e=l.useContext(k),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},o=function(t){var e=m(t.components);return l.createElement(k.Provider,{value:e},t.children)},s="mdxType",p={inlineCode:"code",wrapper:function(t){var e=t.children;return l.createElement(l.Fragment,{},e)}},d=l.forwardRef((function(t,e){var n=t.components,a=t.mdxType,r=t.originalType,k=t.parentName,o=u(t,["components","mdxType","originalType","parentName"]),s=m(n),d=a,c=s["".concat(k,".").concat(d)]||s[d]||p[d]||r;return n?l.createElement(c,i(i({ref:e},o),{},{components:n})):l.createElement(c,i({ref:e},o))}));function c(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var r=n.length,i=new Array(r);i[0]=d;var u={};for(var k in e)hasOwnProperty.call(e,k)&&(u[k]=e[k]);u.originalType=t,u[s]="string"==typeof t?t:a,i[1]=u;for(var m=2;m<r;m++)i[m]=n[m];return l.createElement.apply(null,i)}return l.createElement.apply(null,n)}d.displayName="MDXCreateElement"},1333:(t,e,n)=>{"use strict";n.d(e,{R:()=>i});var l=n(7294),a=n(4052),r=n.n(a);class i extends l.Component{constructor(t){super(t),this.state={termWidth:""}}componentDidMount(){const t=document.getElementById("term-"+this.props.term).clientWidth,e=document.getElementById("tooltip-"+this.props.term).clientWidth;this.setState({termWidth:t,tooltipWidth:e})}offset(){return 0-this.state.tooltipWidth/2+this.state.termWidth/2+"px"}displayTerm(){let t;return t=this.props.display?this.props.display:this.props.term,t}getIcelandicTerm(){let t;return t=r().terms.filter((t=>t.term.includes(this.props.term.toLowerCase()))),t[0].icelandic}render(){return l.createElement(l.Fragment,null,l.createElement("span",{className:"term",id:"term-"+this.props.term},this.displayTerm(),l.createElement("span",{id:"tooltip-"+this.props.term,className:"tooltip",style:{left:this.offset()}},"\ud83c\uddee\ud83c\uddf8 ",this.getIcelandicTerm())))}}},4052:t=>{t.exports={terms:[,{term:"verb",icelandic:"s\xf6gn"},{term:"object",icelandic:"andlag"},{term:"pronoun",icelandic:"fornafn"},{term:"mood",icelandic:"h\xe1ttur"},{term:"accusative",icelandic:"\xfeolfall"},{term:"active voice",icelandic:"germynd"},{term:"adjective",icelandic:"l\xfdsingaror\xf0"},{term:"adjective phrase",icelandic:"l\xfdsingaror\xf0sli\xf0ur"},{term:"adverb",icelandic:"atviksor\xf0"},{term:"adverb phrase",icelandic:"atviksli\xf0ur"},{term:"aspiration",icelandic:"fr\xe1bl\xe1stur"},{term:"case",icelandic:"fall"},{term:"comparative",icelandic:"mi\xf0stig"},{term:"complement",icelandic:"fyllili\xf0ur"},{term:"consonant",icelandic:"samhlj\xf3\xf0"},{term:"dative",icelandic:"\xfe\xe1gufall"},{term:"definite article",icelandic:"\xe1kve\xf0inn greinir"},{term:"demonstrative pronoun",icelandic:"\xe1bendingarfornafn"},{term:"determiner",icelandic:"\xe1kv\xe6\xf0isor\xf0"},{term:"devoicing",icelandic:"afr\xf6ddun"},{term:"diphthong",icelandic:"tv\xedhlj\xf3\xf0"},{term:"direct object",icelandic:"beint andlag"},{term:"ending",icelandic:"ending"},{term:"feminine",icelandic:"kvenkyn"},{term:"first person",icelandic:"fyrsta pers\xf3na"},{term:"gender",icelandic:"kyn"},{term:"genitive",icelandic:"eignarfall"},{term:"head",icelandic:"h\xf6fu\xf0"},{term:"indefinite pronoun",icelandic:"\xf3\xe1kve\xf0i\xf0 fornafn"},{term:"indicative",icelandic:"frams\xf6guh\xe1ttur"},{term:"indirect object",icelandic:"\xf3beint andlag"},{term:"imperative",icelandic:"bo\xf0h\xe1ttur"},{term:"infinitive",icelandic:"nafnh\xe1ttur"},{term:"masculine",icelandic:"karlkyn"},{term:"middle voice",icelandic:"mi\xf0mynd"},{term:"modal verb",icelandic:"hj\xe1lpars\xf6gn"},{term:"monophthong",icelandic:"einhlj\xf3\xf0"},{term:"neuter",icelandic:"hvorugkyn"},{term:"nominative",icelandic:"nefnifall"},{term:"noun phrase",icelandic:"nafnli\xf0ur"},{term:"passive voice",icelandic:"\xfeolmynd"},{term:"past participle",icelandic:"l\xfdsingarh\xe1ttur \xfe\xe1t\xed\xf0ar"},{term:"past tense",icelandic:"\xfe\xe1t\xed\xf0"},{term:"personal pronoun",icelandic:"pers\xf3nufornafn"},{term:"phrase",icelandic:"li\xf0ur"},{term:"plural",icelandic:"fleirtala"},{term:"positive",icelandic:"frumstig"},{term:"preaspiration",icelandic:"a\xf0bl\xe1stur"},{term:"preposition",icelandic:"forsetning"},{term:"prepositional phrase",icelandic:"forsetningarli\xf0ur"},{term:"principal parts",icelandic:"kennimyndir"},{term:"reflexive pronoun",icelandic:"afturbeygt fornafn"},{term:"possessive pronoun",icelandic:"eignarfornafn"},{term:"present participle",icelandic:"l\xfdsingarh\xe1ttur n\xfat\xed\xf0ar"},{term:"present tense",icelandic:"n\xfat\xed\xf0"},{term:"second person",icelandic:"\xf6nnur pers\xf3na"},{term:"sentence",icelandic:"setning"},{term:"singular",icelandic:"eintala"},{term:"stem",icelandic:"stofn"},{term:"strong",icelandic:"sterk beyging"},{term:"strong verb",icelandic:"sterk s\xf6gn"},{term:"stylistic fronting",icelandic:"st\xedlf\xe6rsla"},{term:"subject",icelandic:"frumlag"},{term:"subjunctive",icelandic:"vi\xf0tengingarh\xe1ttur"},{term:"superlative",icelandic:"efsta stig"},{term:"supine",icelandic:"sagnb\xf3t"},{term:"third person",icelandic:"\xferi\xf0ja pers\xf3na"},{term:"transitive",icelandic:"\xe1hrifss\xf6gn"},{term:"transitive verb",icelandic:"\xe1hrifss\xf6gn"},{term:"intransitive verb",icelandic:"\xe1hrifslaus s\xf6gn"},{term:"verb phrase",icelandic:"sagnli\xf0ur"},{term:"weak",icelandic:"veik beyging"},{term:"weak verb",icelandic:"veik s\xf6gn"},{term:"word order",icelandic:"or\xf0ar\xf6\xf0"}]}},5371:(t,e,n)=>{"use strict";n.r(e),n.d(e,{assets:()=>m,contentTitle:()=>u,default:()=>d,frontMatter:()=>i,metadata:()=>k,toc:()=>o});var l=n(7462),a=(n(7294),n(3905)),r=n(1333);const i={id:"modal",title:"Modal verbs",description:"An explanation of what modal verbs in the Icelandic language, including mega, eiga, vilja and \xfeurfa."},u=void 0,k={unversionedId:"verbs/modal",id:"verbs/modal",title:"Modal verbs",description:"An explanation of what modal verbs in the Icelandic language, including mega, eiga, vilja and \xfeurfa.",source:"@site/docs/verbs/modal.md",sourceDirName:"verbs",slug:"/verbs/modal",permalink:"/docs/verbs/modal",draft:!1,tags:[],version:"current",frontMatter:{id:"modal",title:"Modal verbs",description:"An explanation of what modal verbs in the Icelandic language, including mega, eiga, vilja and \xfeurfa."},sidebar:"someSidebar",previous:{title:"Subjunctive",permalink:"/docs/verbs/subjunctive"},next:{title:"Case governance",permalink:"/docs/verbs/case-governance"}},m={},o=[{value:"<em>mega</em>",id:"mega",level:2},{value:"<em>eiga</em>",id:"eiga",level:2},{value:"<em>vilja</em>",id:"vilja",level:2},{value:"<em>\xfeurfa</em>",id:"\xfeurfa",level:2},{value:"<em>ver\xf0a</em>",id:"ver\xf0a",level:2},{value:"<em>skulu</em>",id:"skulu",level:2},{value:"<em>kunna</em>",id:"kunna",level:2},{value:"<em>geta</em>",id:"geta",level:2}],s={toc:o},p="wrapper";function d(t){let{components:e,...n}=t;return(0,a.kt)(p,(0,l.Z)({},s,n,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"In Icelandic, a ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)(r.R,{term:"modal verb",mdxType:"Term"}))," is one that indicates some kind of possibility, permission or obligation. They are normally found just before another verb:"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("em",{parentName:"p"},"Vi\xf0 ",(0,a.kt)("strong",{parentName:"em"},"\xfeurfum")," a\xf0\xa0kaupa meira kaffi.",(0,a.kt)("br",null),"\xde\xfa ",(0,a.kt)("strong",{parentName:"em"},"ver\xf0ur")," a\xf0\xa0segja eitthva\xf0!",(0,a.kt)("br",null),(0,a.kt)("strong",{parentName:"em"},"M\xe1")," \xe9g koma inn?"))),(0,a.kt)("p",null,"Some modal verbs have more than one function. For example, ",(0,a.kt)("em",{parentName:"p"},"ver\xf0a")," also means \u201cwill be, become\u201d. But when it\u2019s followed by another verb, it means \u201chave to\u201d."),(0,a.kt)("p",null,"Another thing about lots of modal verbs is that they are either strong or irregular. Let\u2019s run through the most common ones."),(0,a.kt)("h2",{id:"mega"},(0,a.kt)("em",{parentName:"h2"},"mega")),(0,a.kt)("p",null,"The verb ",(0,a.kt)("strong",null,(0,a.kt)("span",{className:"ushift"},(0,a.kt)("em",null,"mega")," + infinitive"))," is used to ask for or give \ud83d\udc4d ",(0,a.kt)("strong",{parentName:"p"},"permission"),":"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("em",{parentName:"p"},(0,a.kt)("strong",{parentName:"em"},"M\xe1")," \xe9g f\xe1 vatnsglas?",(0,a.kt)("br",null),(0,a.kt)("strong",{parentName:"em"},"M\xe1")," segja \xfeetta?!",(0,a.kt)("br",null),(0,a.kt)("strong",{parentName:"em"},"Megum")," vi\xf0 koma inn?",(0,a.kt)("br",null),"Fer\xf0amenn ",(0,a.kt)("strong",{parentName:"em"},"m\xe1ttu")," ekki koma til landsins."))),(0,a.kt)("p",null,"The conjugation of ",(0,a.kt)("em",{parentName:"p"},"mega")," is quite unusual:"),(0,a.kt)("figure",null,(0,a.kt)("table",null,(0,a.kt)("thead",null,(0,a.kt)("tr",null,(0,a.kt)("th",null,"\xa0"),(0,a.kt)("th",{width:"120px"},"Present"),(0,a.kt)("th",{width:"120px"},"Past"))),(0,a.kt)("tbody",null,(0,a.kt)("tr",null,(0,a.kt)("th",null,"\xe9g"),(0,a.kt)("td",null,(0,a.kt)("em",null,"m\xe1")),(0,a.kt)("td",null,(0,a.kt)("em",null,"m\xe1tti"))),(0,a.kt)("tr",null,(0,a.kt)("th",null,"\xfe\xfa"),(0,a.kt)("td",null,(0,a.kt)("em",null,"m\xe1tt")),(0,a.kt)("td",null,(0,a.kt)("em",null,"m\xe1ttir"))),(0,a.kt)("tr",null,(0,a.kt)("th",null,"hann/h\xfan/h\xe1n/\xfea\xf0"),(0,a.kt)("td",null,(0,a.kt)("em",null,"m\xe1")),(0,a.kt)("td",null,(0,a.kt)("em",null,"m\xe1tti"))),(0,a.kt)("tr",null,(0,a.kt)("th",null,"vi\xf0"),(0,a.kt)("td",null,(0,a.kt)("em",null,"megum")),(0,a.kt)("td",null,(0,a.kt)("em",null,"m\xe1ttum"))),(0,a.kt)("tr",null,(0,a.kt)("th",null,"\xfei\xf0"),(0,a.kt)("td",null,(0,a.kt)("em",null,"megi\xf0")),(0,a.kt)("td",null,(0,a.kt)("em",null,"m\xe1ttu\xf0"))),(0,a.kt)("tr",null,(0,a.kt)("th",null,"\xfeeir/\xfe\xe6r/\xfeau"),(0,a.kt)("td",null,(0,a.kt)("em",null,"mega")),(0,a.kt)("td",null,(0,a.kt)("em",null,"m\xe1ttu")))))),(0,a.kt)("p",null,"The present tense looks more like the past tense of a strong verb. It belongs to a group called ",(0,a.kt)("a",{parentName:"p",href:"../reference/irregular-verbs#preteritepresent-verbs"},"preterite\u2013present verbs"),"."),(0,a.kt)("h2",{id:"eiga"},(0,a.kt)("em",{parentName:"h2"},"eiga")),(0,a.kt)("p",null,"The verb ",(0,a.kt)("strong",null,(0,a.kt)("span",{className:"ushift"},(0,a.kt)("em",null,"eiga")," + ",(0,a.kt)("em",null,"a\xf0")," + infinitive"))," is used to make a \ud83e\udd32 ",(0,a.kt)("strong",{parentName:"p"},"suggestion")," or indicate a \ud83d\udc49 ",(0,a.kt)("strong",{parentName:"p"},"mild obligation"),":"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("em",{parentName:"p"},(0,a.kt)("strong",{parentName:"em"},"\xc1")," \xe9g a\xf0\xa0kaupa \xfeennan kj\xf3l?",(0,a.kt)("br",null),(0,a.kt)("strong",{parentName:"em"},"Eigum")," vi\xf0 ekki a\xf0 fara \xed sund \xe1 eftir?",(0,a.kt)("br",null),"Gestir ",(0,a.kt)("strong",{parentName:"em"},"eiga")," a\xf0 m\xe6ta kl. 19.",(0,a.kt)("br",null),"Hvernig ",(0,a.kt)("strong",{parentName:"em"},"\xe1")," a\xf0 steikja steik?",(0,a.kt)("br",null),"\xc9g ",(0,a.kt)("strong",{parentName:"em"},"\xe1tti")," a\xf0 ryksuga \xed morgun en ger\xf0i \xfea\xf0 ekki.",(0,a.kt)("br",null),"\xde\xfa ",(0,a.kt)("strong",{parentName:"em"},"\xe1ttir")," a\xf0 taka til \xed herberginu \xfe\xednu!"))),(0,a.kt)("p",null,"It often has the meaning \u201cshould\u201d, but can also mean \u201cbe meant to, supposed to\u201d."),(0,a.kt)("p",null,"The conjugation of ",(0,a.kt)("em",{parentName:"p"},"eiga")," is more or less identical to ",(0,a.kt)("em",{parentName:"p"},"mega"),":"),(0,a.kt)("figure",null,(0,a.kt)("table",null,(0,a.kt)("thead",null,(0,a.kt)("tr",null,(0,a.kt)("th",null,"\xa0"),(0,a.kt)("th",{width:"120px"},"Present"),(0,a.kt)("th",{width:"120px"},"Past"))),(0,a.kt)("tbody",null,(0,a.kt)("tr",null,(0,a.kt)("th",null,"\xe9g"),(0,a.kt)("td",null,(0,a.kt)("em",null,"\xe1")),(0,a.kt)("td",null,(0,a.kt)("em",null,"\xe1tti"))),(0,a.kt)("tr",null,(0,a.kt)("th",null,"\xfe\xfa"),(0,a.kt)("td",null,(0,a.kt)("em",null,"\xe1tt")),(0,a.kt)("td",null,(0,a.kt)("em",null,"\xe1ttir"))),(0,a.kt)("tr",null,(0,a.kt)("th",null,"hann/h\xfan/h\xe1n/\xfea\xf0"),(0,a.kt)("td",null,(0,a.kt)("em",null,"\xe1")),(0,a.kt)("td",null,(0,a.kt)("em",null,"\xe1tti"))),(0,a.kt)("tr",null,(0,a.kt)("th",null,"vi\xf0"),(0,a.kt)("td",null,(0,a.kt)("em",null,"eigum")),(0,a.kt)("td",null,(0,a.kt)("em",null,"\xe1ttum"))),(0,a.kt)("tr",null,(0,a.kt)("th",null,"\xfei\xf0"),(0,a.kt)("td",null,(0,a.kt)("em",null,"eigi\xf0")),(0,a.kt)("td",null,(0,a.kt)("em",null,"\xe1ttu\xf0"))),(0,a.kt)("tr",null,(0,a.kt)("th",null,"\xfeeir/\xfe\xe6r/\xfeau"),(0,a.kt)("td",null,(0,a.kt)("em",null,"eiga")),(0,a.kt)("td",null,(0,a.kt)("em",null,"\xe1ttu")))))),(0,a.kt)("h2",{id:"vilja"},(0,a.kt)("em",{parentName:"h2"},"vilja")),(0,a.kt)("p",null,"The verb ",(0,a.kt)("span",{className:"ushift"},(0,a.kt)("strong",null,(0,a.kt)("em",null,"vilja")," + infinitive"))," is used to indicate a \ud83d\ude4f ",(0,a.kt)("strong",{parentName:"p"},"want")," or \ud83d\udc49 ",(0,a.kt)("strong",{parentName:"p"},"give an instruction")," in a friendly way:"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("em",{parentName:"p"},"Hundurinn ",(0,a.kt)("strong",{parentName:"em"},"vill")," fara \xfat.",(0,a.kt)("br",null),"Nemendurnir ",(0,a.kt)("strong",{parentName:"em"},"vilja")," l\xe6ra a\xf0 tala g\xf3\xf0a \xedslensku.",(0,a.kt)("br",null),(0,a.kt)("strong",{parentName:"em"},"Vilji\xf0i\xf0")," koma me\xf0 okkur \xed b\xed\xf3?",(0,a.kt)("br",null),(0,a.kt)("strong",{parentName:"em"},"Viltu")," ekki opna gluggann?"))),(0,a.kt)("p",null,"In last example, we can see how ",(0,a.kt)("em",{parentName:"p"},"vilja")," is used to give an instruction. Here the person asking the question isn\u2019t wondering whether you actually ",(0,a.kt)("em",{parentName:"p"},"want")," to open the window, but they\u2019re trying to ask you to do it without being rude! \ud83d\ude07"),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("mdxAdmonitionTitle",{parentName:"admonition"},"Watch out for ",(0,a.kt)("em",{parentName:"mdxAdmonitionTitle"},"a\xf0"),"!"),(0,a.kt)("p",{parentName:"admonition"},"The verb ",(0,a.kt)("em",{parentName:"p"},"vilja")," does not take ",(0,a.kt)("em",{parentName:"p"},"a\xf0")," after it, you just use the bare infinitive form of the verb, e.g. ",(0,a.kt)("em",{parentName:"p"},"\xe9g vil fara"),". Many English speakers say ",(0,a.kt)("em",{parentName:"p"},"*","\xe9g vil ",(0,a.kt)("strong",{parentName:"em"},"a\xf0")," fara")," at first, because we say ",(0,a.kt)("em",{parentName:"p"},"I want ",(0,a.kt)("strong",{parentName:"em"},"to")," go")," in English. But Icelandic doesn\u2019t require the ",(0,a.kt)("em",{parentName:"p"},"a\xf0")," here.")),(0,a.kt)("p",null,"It\u2019s also possible to use ",(0,a.kt)("span",{className:"ushift"},(0,a.kt)("strong",null,(0,a.kt)("em",null,"vilja")," + noun (acc.)")),":"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("em",{parentName:"p"},(0,a.kt)("strong",{parentName:"em"},"Viltu")," meira kaffi?",(0,a.kt)("br",null),"Nei, en \xe9g ",(0,a.kt)("strong",{parentName:"em"},"vil")," meiri k\xf6ku.",(0,a.kt)("br",null),"\xc9g ",(0,a.kt)("strong",{parentName:"em"},"vildi")," ekki v\xednglas."))),(0,a.kt)("p",null,"The conjugation of ",(0,a.kt)("em",{parentName:"p"},"vilja")," is one of the most irregular in Icelandic, because in the present tense singular, all 3 forms are distinct:"),(0,a.kt)("figure",null,(0,a.kt)("table",null,(0,a.kt)("thead",null,(0,a.kt)("tr",null,(0,a.kt)("th",null,"\xa0"),(0,a.kt)("th",{width:"120px"},"Present"),(0,a.kt)("th",{width:"120px"},"Past"))),(0,a.kt)("tbody",null,(0,a.kt)("tr",null,(0,a.kt)("th",null,"\xe9g"),(0,a.kt)("td",null,(0,a.kt)("em",null,"vil")),(0,a.kt)("td",null,(0,a.kt)("em",null,"vildi"))),(0,a.kt)("tr",null,(0,a.kt)("th",null,"\xfe\xfa"),(0,a.kt)("td",null,(0,a.kt)("em",null,"vilt")),(0,a.kt)("td",null,(0,a.kt)("em",null,"vildir"))),(0,a.kt)("tr",null,(0,a.kt)("th",null,"hann/h\xfan/h\xe1n/\xfea\xf0"),(0,a.kt)("td",null,(0,a.kt)("em",null,"vill")),(0,a.kt)("td",null,(0,a.kt)("em",null,"vildi"))),(0,a.kt)("tr",null,(0,a.kt)("th",null,"vi\xf0"),(0,a.kt)("td",null,(0,a.kt)("em",null,"viljum")),(0,a.kt)("td",null,(0,a.kt)("em",null,"vildum"))),(0,a.kt)("tr",null,(0,a.kt)("th",null,"\xfei\xf0"),(0,a.kt)("td",null,(0,a.kt)("em",null,"vilji\xf0")),(0,a.kt)("td",null,(0,a.kt)("em",null,"vildu\xf0"))),(0,a.kt)("tr",null,(0,a.kt)("th",null,"\xfeeir/\xfe\xe6r/\xfeau"),(0,a.kt)("td",null,(0,a.kt)("em",null,"vilja")),(0,a.kt)("td",null,(0,a.kt)("em",null,"vildu")))))),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("mdxAdmonitionTitle",{parentName:"admonition"},(0,a.kt)("em",{parentName:"mdxAdmonitionTitle"},"Vil")," or ",(0,a.kt)("em",{parentName:"mdxAdmonitionTitle"},"vill"),"?"),(0,a.kt)("p",{parentName:"admonition"},"It\u2019s unusual for any Icelandic verb to have 3 different forms in the present tense, normally at least 2 of the forms are the same (e.g. ",(0,a.kt)("em",{parentName:"p"},"\xe9g tala"),", ",(0,a.kt)("em",{parentName:"p"},"\xfe\xfa ",(0,a.kt)("strong",{parentName:"em"},"talar")),", ",(0,a.kt)("em",{parentName:"p"},"h\xfan ",(0,a.kt)("strong",{parentName:"em"},"talar")),")."),(0,a.kt)("p",{parentName:"admonition"},"And ",(0,a.kt)("em",{parentName:"p"},"vilja")," is the only one that follows this exact pattern. This is tricky even for some native Icelandic speakers, so you might well hear someone say ",(0,a.kt)("em",{parentName:"p"},"\xe9g ",(0,a.kt)("strong",{parentName:"em"},"vill"))," instead of ",(0,a.kt)("em",{parentName:"p"},"\xe9g vil"),".")),(0,a.kt)("h2",{id:"\xfeurfa"},(0,a.kt)("em",{parentName:"h2"},"\xfeurfa")),(0,a.kt)("p",null,"The verb ",(0,a.kt)("span",{className:"ushift"},(0,a.kt)("strong",null,(0,a.kt)("em",null,"\xfeurfa")," + ",(0,a.kt)("em",null,"a\xf0")," + infinitive"))," is used to indicate an \ud83d\ude2b ",(0,a.kt)("strong",{parentName:"p"},"inner need"),":"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("em",{parentName:"p"},(0,a.kt)("strong",{parentName:"em"},"\xdearftu")," ekki a\xf0 fara n\xfana?",(0,a.kt)("br",null),"\xdei\xf0 ",(0,a.kt)("strong",{parentName:"em"},"\xfeurfi\xf0")," a\xf0 gera ykkar besta.",(0,a.kt)("br",null),"Anna ",(0,a.kt)("strong",{parentName:"em"},"\xfeurfti")," a\xf0 fara upp \xfar lauginni \xfev\xed henni var of heitt."))),(0,a.kt)("p",null,"What we mean by \u201cinner need\u201d is this: ",(0,a.kt)("em",{parentName:"p"},"\xfeurfa")," isn\u2019t really used when someone is ordering or commanding you to do something. Instead, you\u2019d probably use ",(0,a.kt)("em",{parentName:"p"},(0,a.kt)("a",{parentName:"em",href:"#ver%C3%B0a"},"ver\xf0a"))," or ",(0,a.kt)("em",{parentName:"p"},(0,a.kt)("a",{parentName:"em",href:"#skulu"},"skulu"))," for that. "),(0,a.kt)("p",null,"The kind of need that ",(0,a.kt)("em",{parentName:"p"},"\xfeurfa")," expresses is normally one that comes from within yourself or the circumstances you\u2019re in."),(0,a.kt)("p",null,"Like with ",(0,a.kt)("em",{parentName:"p"},"vilja"),", you can also do ",(0,a.kt)("span",{className:"ushift"},(0,a.kt)("strong",null,(0,a.kt)("em",null,"\xfeurfa")," + noun (acc.)")),":"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("em",{parentName:"p"},"Vi\xf0 ",(0,a.kt)("strong",{parentName:"em"},"\xfeurfum")," n\xfdjar kennslub\xe6kur.",(0,a.kt)("br",null),"\xc9g ",(0,a.kt)("strong",{parentName:"em"},"\xfearf")," peninga til a\xf0 kaupa m\xe9r b\xedl."))),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"\xdeurfa")," has a weird quirk in that it sometimes ",(0,a.kt)("a",{parentName:"p",href:"case-governance#genitive"},"takes the genitive"),", pretty much only when used with ",(0,a.kt)("em",{parentName:"p"},"\xfea\xf0"),":"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("em",{parentName:"p"},"\xc9g \xfearf ",(0,a.kt)("strong",{parentName:"em"},"\xfeess")," ekki."))),(0,a.kt)("p",null,"The conjugation of ",(0,a.kt)("em",{parentName:"p"},"\xfeurfa")," is as follows:"),(0,a.kt)("figure",null,(0,a.kt)("table",null,(0,a.kt)("thead",null,(0,a.kt)("tr",null,(0,a.kt)("th",null,"\xa0"),(0,a.kt)("th",{width:"120px"},"Present"),(0,a.kt)("th",{width:"120px"},"Past"))),(0,a.kt)("tbody",null,(0,a.kt)("tr",null,(0,a.kt)("th",null,"\xe9g"),(0,a.kt)("td",null,(0,a.kt)("em",null,"\xfearf")),(0,a.kt)("td",null,(0,a.kt)("em",null,"\xfeurfti"))),(0,a.kt)("tr",null,(0,a.kt)("th",null,"\xfe\xfa"),(0,a.kt)("td",null,(0,a.kt)("em",null,"\xfearft")),(0,a.kt)("td",null,(0,a.kt)("em",null,"\xfeurftir"))),(0,a.kt)("tr",null,(0,a.kt)("th",null,"hann/h\xfan/h\xe1n/\xfea\xf0"),(0,a.kt)("td",null,(0,a.kt)("em",null,"\xfearf")),(0,a.kt)("td",null,(0,a.kt)("em",null,"\xfeurfti"))),(0,a.kt)("tr",null,(0,a.kt)("th",null,"vi\xf0"),(0,a.kt)("td",null,(0,a.kt)("em",null,"\xfeurfum")),(0,a.kt)("td",null,(0,a.kt)("em",null,"\xfeurftum"))),(0,a.kt)("tr",null,(0,a.kt)("th",null,"\xfei\xf0"),(0,a.kt)("td",null,(0,a.kt)("em",null,"\xfeurfi\xf0")),(0,a.kt)("td",null,(0,a.kt)("em",null,"\xfeurftu\xf0"))),(0,a.kt)("tr",null,(0,a.kt)("th",null,"\xfeeir/\xfe\xe6r/\xfeau"),(0,a.kt)("td",null,(0,a.kt)("em",null,"\xfeurfa")),(0,a.kt)("td",null,(0,a.kt)("em",null,"\xfeurftu")))))),(0,a.kt)("p",null,"Again, the present tense looks more like the past tense of a strong verb, so ",(0,a.kt)("em",{parentName:"p"},"\xfeurfa")," is also a ",(0,a.kt)("a",{parentName:"p",href:"../reference/irregular-verbs#preteritepresent-verbs"},"preterite\u2013present verb")," like ",(0,a.kt)("em",{parentName:"p"},"mega")," or ",(0,a.kt)("em",{parentName:"p"},"eiga"),"."),(0,a.kt)("h2",{id:"ver\xf0a"},(0,a.kt)("em",{parentName:"h2"},"ver\xf0a")),(0,a.kt)("p",null,"The verb ",(0,a.kt)("span",{className:"ushift"},(0,a.kt)("strong",null,(0,a.kt)("em",null,"ver\xf0a")," + ",(0,a.kt)("em",null,"a\xf0")," + infinitive"))," is used to indicate a \u26d4\ufe0f ",(0,a.kt)("strong",{parentName:"p"},"strong obligation")," or \u203c\ufe0f ",(0,a.kt)("strong",{parentName:"p"},"necessity"),":"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("em",{parentName:"p"},"\xde\xfa ",(0,a.kt)("strong",{parentName:"em"},"ver\xf0ur")," a\xf0 segja m\xe9r alla s\xf6guna!",(0,a.kt)("br",null),"Vi\xf0 ",(0,a.kt)("strong",{parentName:"em"},"ver\xf0um")," a\xf0 fara af sta\xf0 sem fyrst.",(0,a.kt)("br",null),"R\xedkisstj\xf3rnin ",(0,a.kt)("strong",{parentName:"em"},"var\xf0")," a\xf0 loka landam\xe6runum.",(0,a.kt)("br",null),"Kennararnir ",(0,a.kt)("strong",{parentName:"em"},"ur\xf0u")," a\xf0 fresta pr\xf3finu."))),(0,a.kt)("p",null,"You can often think of ",(0,a.kt)("em",{parentName:"p"},"ver\xf0a")," as meaning \u201chave to, must\u201d."),(0,a.kt)("admonition",{title:"\u201cBecome\u201d or \u201chave to\u201d?",type:"info"},(0,a.kt)("p",{parentName:"admonition"},(0,a.kt)("em",{parentName:"p"},"Ver\xf0a")," leads a double life as a pretty standard verb that means \u201cbecome, will be\u201d or a modal verb that means \u201chave to\u201d. Whenever ",(0,a.kt)("em",{parentName:"p"},"ver\xf0a")," is followed by ",(0,a.kt)("em",{parentName:"p"},"a\xf0")," + infinitive, it means \u201chave to\u201d."),(0,a.kt)("p",{parentName:"admonition"},"It\u2019s never used to form the future tense when used with a verb. For example, ",(0,a.kt)("em",{parentName:"p"},"\xe9g ",(0,a.kt)("strong",{parentName:"em"},"ver\xf0 a\xf0 fara")," \xed vinnu \xe1 morgun")," means \u201cI have to go to work tomorrow\u201d and not \u201cI will go to work tomorrow\u201d. See ",(0,a.kt)("a",{parentName:"p",href:"future"},"Future"))),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"Ver\xf0a")," is a ",(0,a.kt)("a",{parentName:"p",href:"past#group-3-strong"},"group 3 strong verb")," and conjugates like so:"),(0,a.kt)("figure",null,(0,a.kt)("table",null,(0,a.kt)("thead",null,(0,a.kt)("tr",null,(0,a.kt)("th",null,"\xa0"),(0,a.kt)("th",{width:"120px"},"Present"),(0,a.kt)("th",{width:"120px"},"Past"))),(0,a.kt)("tbody",null,(0,a.kt)("tr",null,(0,a.kt)("th",null,"\xe9g"),(0,a.kt)("td",null,(0,a.kt)("em",null,"ver\xf0")),(0,a.kt)("td",null,(0,a.kt)("em",null,"var\xf0"))),(0,a.kt)("tr",null,(0,a.kt)("th",null,"\xfe\xfa"),(0,a.kt)("td",null,(0,a.kt)("em",null,"ver\xf0ur")),(0,a.kt)("td",null,(0,a.kt)("em",null,"var\xf0st"))),(0,a.kt)("tr",null,(0,a.kt)("th",null,"hann/h\xfan/h\xe1n/\xfea\xf0"),(0,a.kt)("td",null,(0,a.kt)("em",null,"ver\xf0ur")),(0,a.kt)("td",null,(0,a.kt)("em",null,"var\xf0"))),(0,a.kt)("tr",null,(0,a.kt)("th",null,"vi\xf0"),(0,a.kt)("td",null,(0,a.kt)("em",null,"ver\xf0um")),(0,a.kt)("td",null,(0,a.kt)("em",null,"ur\xf0um"))),(0,a.kt)("tr",null,(0,a.kt)("th",null,"\xfei\xf0"),(0,a.kt)("td",null,(0,a.kt)("em",null,"ver\xf0i\xf0")),(0,a.kt)("td",null,(0,a.kt)("em",null,"ur\xf0u\xf0"))),(0,a.kt)("tr",null,(0,a.kt)("th",null,"\xfeeir/\xfe\xe6r/\xfeau"),(0,a.kt)("td",null,(0,a.kt)("em",null,"ver\xf0a")),(0,a.kt)("td",null,(0,a.kt)("em",null,"ur\xf0u")))))),(0,a.kt)("p",null,"Watch out for the ",(0,a.kt)("strong",{parentName:"p"},"disappearing ",(0,a.kt)("em",{parentName:"strong"},"v"))," in the past tense plural! \ud83e\ude84\ud83c\udfa9"),(0,a.kt)("h2",{id:"skulu"},(0,a.kt)("em",{parentName:"h2"},"skulu")),(0,a.kt)("p",null,"The verb ",(0,a.kt)("span",{className:"ushift"},(0,a.kt)("strong",null,(0,a.kt)("em",null,"skulu")," + infinitive"))," is used to issue a \u203c\ufe0f ",(0,a.kt)("strong",{parentName:"p"},"command"),", express an \u2705 ",(0,a.kt)("strong",{parentName:"p"},"intention")," or show \ud83d\udcaa ",(0,a.kt)("strong",{parentName:"p"},"determination"),":"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("em",{parentName:"p"},"\xde\xfa ",(0,a.kt)("strong",{parentName:"em"},"skalt")," ekki breyta neinu!",(0,a.kt)("br",null),"Vi\xf0 ",(0,a.kt)("strong",{parentName:"em"},"skulum")," ganga hra\xf0ar.",(0,a.kt)("br",null),(0,a.kt)("strong",{parentName:"em"},"Skulum")," vi\xf0 f\xe1 okkur annan bj\xf3r?",(0,a.kt)("br",null),"\xc9g ",(0,a.kt)("strong",{parentName:"em"},"skal")," kl\xe1ra verkefni\xf0!"))),(0,a.kt)("p",null,"As you might have noticed, ",(0,a.kt)("em",{parentName:"p"},"skulu")," is a bit weird in that its infintive ends in ",(0,a.kt)("em",{parentName:"p"},"-u"),". It\u2019s special in another way too, in that it has no past tense (except in the ",(0,a.kt)("a",{parentName:"p",href:"subjunctive"},"subjunctive"),"):"),(0,a.kt)("figure",null,(0,a.kt)("table",null,(0,a.kt)("thead",null,(0,a.kt)("tr",null,(0,a.kt)("th",null,"\xa0"),(0,a.kt)("th",{width:"120px"},"Present"),(0,a.kt)("th",{width:"120px"},"Past"),(0,a.kt)("th",{width:"120px"},"Past subjunctive"))),(0,a.kt)("tbody",null,(0,a.kt)("tr",null,(0,a.kt)("th",null,"\xe9g"),(0,a.kt)("td",null,(0,a.kt)("em",null,"skal")),(0,a.kt)("td",null,"\u2014"),(0,a.kt)("td",null,(0,a.kt)("em",null,"skyldi"))),(0,a.kt)("tr",null,(0,a.kt)("th",null,"\xfe\xfa"),(0,a.kt)("td",null,(0,a.kt)("em",null,"skalt")),(0,a.kt)("td",null,"\u2014"),(0,a.kt)("td",null,(0,a.kt)("em",null,"skyldir"))),(0,a.kt)("tr",null,(0,a.kt)("th",null,"hann/h\xfan/h\xe1n/\xfea\xf0"),(0,a.kt)("td",null,(0,a.kt)("em",null,"skal")),(0,a.kt)("td",null,"\u2014"),(0,a.kt)("td",null,(0,a.kt)("em",null,"skyldi"))),(0,a.kt)("tr",null,(0,a.kt)("th",null,"vi\xf0"),(0,a.kt)("td",null,(0,a.kt)("em",null,"skulum")),(0,a.kt)("td",null,"\u2014"),(0,a.kt)("td",null,(0,a.kt)("em",null,"skyldum"))),(0,a.kt)("tr",null,(0,a.kt)("th",null,"\xfei\xf0"),(0,a.kt)("td",null,(0,a.kt)("em",null,"skulu\xf0")),(0,a.kt)("td",null,"\u2014"),(0,a.kt)("td",null,(0,a.kt)("em",null,"skyldu\xf0"))),(0,a.kt)("tr",null,(0,a.kt)("th",null,"\xfeeir/\xfe\xe6r/\xfeau"),(0,a.kt)("td",null,(0,a.kt)("em",null,"skulu")),(0,a.kt)("td",null,"\u2014"),(0,a.kt)("td",null,(0,a.kt)("em",null,"skyldu")))))),(0,a.kt)("h2",{id:"kunna"},(0,a.kt)("em",{parentName:"h2"},"kunna")),(0,a.kt)("p",null,"The verb ",(0,a.kt)("span",{className:"ushift"},(0,a.kt)("strong",null,(0,a.kt)("em",null,"kunna")," + ",(0,a.kt)("em",null,"a\xf0")," + infinitive"))," is used to express that someone \ud83e\udde0 ",(0,a.kt)("strong",{parentName:"p"},"knows how to do something"),":"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("em",{parentName:"p"},"H\xfan ",(0,a.kt)("strong",{parentName:"em"},"kann")," a\xf0 syngja!",(0,a.kt)("br",null),(0,a.kt)("strong",{parentName:"em"},"Kanntu")," a\xf0 spila \xe1 p\xedan\xf3?",(0,a.kt)("br",null),"\xc9g ",(0,a.kt)("strong",{parentName:"em"},"kann")," a\xf0 elda \xedtalskar kj\xf6tbollur."))),(0,a.kt)("admonition",{title:"Catfish alert \ud83d\udc1f",type:"info"},(0,a.kt)("p",{parentName:"admonition"},(0,a.kt)("em",{parentName:"p"},"Kunna")," isn\u2019t quite what it seems at first. Most of the time, it has a narrow and specific meaning: \u201cknow how to do something\u201d. If you\u2019re a beginner, this is the only meaning you really need to know about. "),(0,a.kt)("p",{parentName:"admonition"},"Although it often looks like the English \u201ccan\u201d, ",(0,a.kt)("em",{parentName:"p"},"kunna")," doesn\u2019t mean \u201ccan\u201d in a general sense. Use ",(0,a.kt)("em",{parentName:"p"},(0,a.kt)("a",{parentName:"em",href:"#geta"},"geta"))," if you\u2019re talking about ability or possibility, or ",(0,a.kt)("em",{parentName:"p"},(0,a.kt)("a",{parentName:"em",href:"#mega"},"mega"))," if you\u2019re talking about permission.")),(0,a.kt)("p",null,"You can also use ",(0,a.kt)("span",{className:"ushift"},(0,a.kt)("strong",null,(0,a.kt)("em",null,"kunna")," + noun (acc.)"))," when you\u2019re talking about a \ud83d\udde3 ",(0,a.kt)("strong",{parentName:"p"},"language")," or something you learn by heart:"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("em",{parentName:"p"},"Lilja ",(0,a.kt)("strong",{parentName:"em"},"kann")," enga ensku.",(0,a.kt)("br",null),(0,a.kt)("strong",{parentName:"em"},"Kanntu")," \xedslensku?",(0,a.kt)("br",null),"\xc9g ",(0,a.kt)("strong",{parentName:"em"},"kann")," ekki \xfeetta lag."))),(0,a.kt)("p",null,"So the second example above means \u201cdo you know how to speak Icelandic?\u201d. Nice and compact!"),(0,a.kt)("p",null,"Another cool thing you can do is ",(0,a.kt)("span",{className:"ushift"},(0,a.kt)("strong",null,(0,a.kt)("em",null,"kunna")," + ",(0,a.kt)("em",null,"\xe1")," + noun (acc.)"))," to talk about knowing \ud83e\udde0 ",(0,a.kt)("strong",{parentName:"p"},"how to use something"),":"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("em",{parentName:"p"},"\xc9g ",(0,a.kt)("strong",{parentName:"em"},"kann")," ekki ",(0,a.kt)("strong",{parentName:"em"},"\xe1")," \xfeessa kaffiv\xe9l.",(0,a.kt)("br",null),"Er einhver h\xe9rna sem ",(0,a.kt)("strong",{parentName:"em"},"kann \xe1")," t\xf6lvur?"))),(0,a.kt)("p",null,"The first example means \u201cI don\u2019t know how to use this coffee machine\u201d. Again, nice and compact!"),(0,a.kt)("p",null,"The conjugation for ",(0,a.kt)("em",{parentName:"p"},"kunna")," is as follows:"),(0,a.kt)("figure",null,(0,a.kt)("table",null,(0,a.kt)("thead",null,(0,a.kt)("tr",null,(0,a.kt)("th",null,"\xa0"),(0,a.kt)("th",{width:"120px"},"Present"),(0,a.kt)("th",{width:"120px"},"Past"))),(0,a.kt)("tbody",null,(0,a.kt)("tr",null,(0,a.kt)("th",null,"\xe9g"),(0,a.kt)("td",null,(0,a.kt)("em",null,"kann")),(0,a.kt)("td",null,(0,a.kt)("em",null,"kunni"))),(0,a.kt)("tr",null,(0,a.kt)("th",null,"\xfe\xfa"),(0,a.kt)("td",null,(0,a.kt)("em",null,"kannt")),(0,a.kt)("td",null,(0,a.kt)("em",null,"kunnir"))),(0,a.kt)("tr",null,(0,a.kt)("th",null,"hann/h\xfan/h\xe1n/\xfea\xf0"),(0,a.kt)("td",null,(0,a.kt)("em",null,"kann")),(0,a.kt)("td",null,(0,a.kt)("em",null,"kunni"))),(0,a.kt)("tr",null,(0,a.kt)("th",null,"vi\xf0"),(0,a.kt)("td",null,(0,a.kt)("em",null,"kunnum")),(0,a.kt)("td",null,(0,a.kt)("em",null,"kunnum"))),(0,a.kt)("tr",null,(0,a.kt)("th",null,"\xfei\xf0"),(0,a.kt)("td",null,(0,a.kt)("em",null,"kunni\xf0")),(0,a.kt)("td",null,(0,a.kt)("em",null,"kunnu\xf0"))),(0,a.kt)("tr",null,(0,a.kt)("th",null,"\xfeeir/\xfe\xe6r/\xfeau"),(0,a.kt)("td",null,(0,a.kt)("em",null,"kunna")),(0,a.kt)("td",null,(0,a.kt)("em",null,"kunnu")))))),(0,a.kt)("h2",{id:"geta"},(0,a.kt)("em",{parentName:"h2"},"geta")),(0,a.kt)("p",null,"So we\u2019ve saved the best till last. The verb ",(0,a.kt)("span",{className:"ushift"},(0,a.kt)("strong",null,(0,a.kt)("em",null,"geta")," + past participle"))," is used to express \ud83d\udc69\u200d\ud83c\udfa8 ",(0,a.kt)("strong",{parentName:"p"},"ability")," or \ud83d\udd2e ",(0,a.kt)("strong",{parentName:"p"},"possibility"),":"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("em",{parentName:"p"},"\xc9g ",(0,a.kt)("strong",{parentName:"em"},"get")," ekki opna\xf0 \xfeessa d\xf3s.",(0,a.kt)("br",null),"Vi\xf0 ",(0,a.kt)("strong",{parentName:"em"},"getum")," komi\xf0 fyrir h\xe1degi.",(0,a.kt)("br",null),"\xdea\xf0 ",(0,a.kt)("strong",{parentName:"em"},"getur")," veri\xf0 vandam\xe1l ef \xfea\xf0 gerist.",(0,a.kt)("br",null),"\xde\xfa ",(0,a.kt)("strong",{parentName:"em"},"gast")," ekki gert neitt?",(0,a.kt)("br",null),"Vi\xf0 ",(0,a.kt)("strong",{parentName:"em"},"g\xe1tum")," flogi\xf0 \xfeanga\xf0 en ekki keyrt."))),(0,a.kt)("p",null,"It can also be used to make \ud83d\ude4f ",(0,a.kt)("strong",{parentName:"p"},"requests"),":"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("em",{parentName:"p"},(0,a.kt)("strong",{parentName:"em"},"Getur\xf0u")," sent m\xe9r myndirnar?",(0,a.kt)("br",null),(0,a.kt)("strong",{parentName:"em"},"Geti\xf0i\xf0")," komi\xf0 me\xf0 meira brau\xf0?"))),(0,a.kt)("p",null,"The odd thing about ",(0,a.kt)("em",{parentName:"p"},"geta")," is that it requires the ",(0,a.kt)("a",{parentName:"p",href:"past-participle"},"past participle"),", rather than an infinitive like most other modal verbs. This is something that\u2019s worth getting to grips with though, as ",(0,a.kt)("em",{parentName:"p"},"geta")," is used all the time."),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"Geta")," is a ",(0,a.kt)("a",{parentName:"p",href:"past#group-5-strong"},"group 5 strong verb")," and conjugates like this:"),(0,a.kt)("figure",null,(0,a.kt)("table",null,(0,a.kt)("thead",null,(0,a.kt)("tr",null,(0,a.kt)("th",null,"\xa0"),(0,a.kt)("th",{width:"120px"},"Present"),(0,a.kt)("th",{width:"120px"},"Past"))),(0,a.kt)("tbody",null,(0,a.kt)("tr",null,(0,a.kt)("th",null,"\xe9g"),(0,a.kt)("td",null,(0,a.kt)("em",null,"get")),(0,a.kt)("td",null,(0,a.kt)("em",null,"gat"))),(0,a.kt)("tr",null,(0,a.kt)("th",null,"\xfe\xfa"),(0,a.kt)("td",null,(0,a.kt)("em",null,"getur")),(0,a.kt)("td",null,(0,a.kt)("em",null,"gast"))),(0,a.kt)("tr",null,(0,a.kt)("th",null,"hann/h\xfan/h\xe1n/\xfea\xf0"),(0,a.kt)("td",null,(0,a.kt)("em",null,"getur")),(0,a.kt)("td",null,(0,a.kt)("em",null,"gat"))),(0,a.kt)("tr",null,(0,a.kt)("th",null,"vi\xf0"),(0,a.kt)("td",null,(0,a.kt)("em",null,"getum")),(0,a.kt)("td",null,(0,a.kt)("em",null,"g\xe1tum"))),(0,a.kt)("tr",null,(0,a.kt)("th",null,"\xfei\xf0"),(0,a.kt)("td",null,(0,a.kt)("em",null,"geti\xf0")),(0,a.kt)("td",null,(0,a.kt)("em",null,"g\xe1tu\xf0"))),(0,a.kt)("tr",null,(0,a.kt)("th",null,"\xfeeir/\xfe\xe6r/\xfeau"),(0,a.kt)("td",null,(0,a.kt)("em",null,"geta")),(0,a.kt)("td",null,(0,a.kt)("em",null,"g\xe1tu")))))))}d.isMDXComponent=!0}}]);