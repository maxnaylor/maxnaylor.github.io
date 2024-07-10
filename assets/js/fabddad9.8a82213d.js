(self.webpackChunkgramref=self.webpackChunkgramref||[]).push([[3622],{3905:(e,t,n)=>{"use strict";n.d(t,{Zo:()=>m,kt:()=>h});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var o=r.createContext({}),c=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},m=function(e){var t=c(e.components);return r.createElement(o.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,o=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),p=c(n),u=i,h=p["".concat(o,".").concat(u)]||p[u]||d[u]||a;return n?r.createElement(h,s(s({ref:t},m),{},{components:n})):r.createElement(h,s({ref:t},m))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,s=new Array(a);s[0]=u;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l[p]="string"==typeof e?e:i,s[1]=l;for(var c=2;c<a;c++)s[c]=n[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},9797:(e,t,n)=>{"use strict";n.d(t,{o:()=>i});var r=n(7294);class i extends r.Component{constructor(e){super(e),this.state={class:"highlighter"}}addHighlight(e){var t=document.getElementsByName(e);let n;for(n=0;n<t.length;n++)t[n].classList.add("highlighted")}removeHighlight(e){var t=document.getElementsByName(e);let n;for(n=0;n<t.length;n++)t[n].classList.remove("highlighted")}render(){return r.createElement(r.Fragment,null,r.createElement("span",{onMouseEnter:this.addHighlight.bind(this,this.props.name),onMouseLeave:this.removeHighlight.bind(this,this.props.name),className:this.state.class,name:this.props.name},this.props.text))}}},1333:(e,t,n)=>{"use strict";n.d(t,{R:()=>s});var r=n(7294),i=n(4052),a=n.n(i);class s extends r.Component{constructor(e){super(e),this.state={termWidth:""}}componentDidMount(){const e=document.getElementById("term-"+this.props.term).clientWidth,t=document.getElementById("tooltip-"+this.props.term).clientWidth;this.setState({termWidth:e,tooltipWidth:t})}offset(){return 0-this.state.tooltipWidth/2+this.state.termWidth/2+"px"}displayTerm(){let e;return e=this.props.display?this.props.display:this.props.term,e}getIcelandicTerm(){let e;return e=a().terms.filter((e=>e.term.includes(this.props.term.toLowerCase()))),e[0].icelandic}render(){return r.createElement(r.Fragment,null,r.createElement("span",{className:"term",id:"term-"+this.props.term},this.displayTerm(),r.createElement("span",{id:"tooltip-"+this.props.term,className:"tooltip",style:{left:this.offset()}},"\ud83c\uddee\ud83c\uddf8 ",this.getIcelandicTerm())))}}},4052:e=>{e.exports={terms:[,{term:"verb",icelandic:"s\xf6gn"},{term:"object",icelandic:"andlag"},{term:"phrase",icelandic:"li\xf0ur"},{term:"pronoun",icelandic:"fornafn"},{term:"mood",icelandic:"h\xe1ttur"},{term:"accusative",icelandic:"\xfeolfall"},{term:"active voice",icelandic:"germynd"},{term:"adjective",icelandic:"l\xfdsingaror\xf0"},{term:"adjective phrase",icelandic:"l\xfdsingaror\xf0sli\xf0ur"},{term:"adverb",icelandic:"atviksor\xf0"},{term:"verb phrase",icelandic:"sagnli\xf0ur"},{term:"adverb phrase",icelandic:"atviksli\xf0ur"},{term:"aspiration",icelandic:"fr\xe1bl\xe1stur"},{term:"case",icelandic:"fall"},{term:"comparative",icelandic:"mi\xf0stig"},{term:"complement",icelandic:"fyllili\xf0ur"},{term:"consonant",icelandic:"samhlj\xf3\xf0"},{term:"dative",icelandic:"\xfe\xe1gufall"},{term:"definite article",icelandic:"\xe1kve\xf0inn greinir"},{term:"demonstrative pronoun",icelandic:"\xe1bendingarfornafn"},{term:"determiner",icelandic:"\xe1kv\xe6\xf0isor\xf0"},{term:"devoicing",icelandic:"afr\xf6ddun"},{term:"diphthong",icelandic:"tv\xedhlj\xf3\xf0"},{term:"direct object",icelandic:"beint andlag"},{term:"ending",icelandic:"ending"},{term:"feminine",icelandic:"kvenkyn"},{term:"first person",icelandic:"fyrsta pers\xf3na"},{term:"gender",icelandic:"kyn"},{term:"genitive",icelandic:"eignarfall"},{term:"head",icelandic:"h\xf6fu\xf0"},{term:"indefinite pronoun",icelandic:"\xf3\xe1kve\xf0i\xf0 fornafn"},{term:"indicative",icelandic:"frams\xf6guh\xe1ttur"},{term:"indirect object",icelandic:"\xf3beint andlag"},{term:"imperative",icelandic:"bo\xf0h\xe1ttur"},{term:"infinitive",icelandic:"nafnh\xe1ttur"},{term:"masculine",icelandic:"karlkyn"},{term:"middle voice",icelandic:"mi\xf0mynd"},{term:"modal verb",icelandic:"hj\xe1lpars\xf6gn"},{term:"monophthong",icelandic:"einhlj\xf3\xf0"},{term:"neuter",icelandic:"hvorugkyn"},{term:"nominative",icelandic:"nefnifall"},{term:"noun phrase",icelandic:"nafnli\xf0ur"},{term:"passive voice",icelandic:"\xfeolmynd"},{term:"past participle",icelandic:"l\xfdsingarh\xe1ttur \xfe\xe1t\xed\xf0ar"},{term:"past tense",icelandic:"\xfe\xe1t\xed\xf0"},{term:"personal pronoun",icelandic:"pers\xf3nufornafn"},{term:"plural",icelandic:"fleirtala"},{term:"positive",icelandic:"frumstig"},{term:"preaspiration",icelandic:"a\xf0bl\xe1stur"},{term:"preposition",icelandic:"forsetning"},{term:"prepositional phrase",icelandic:"forsetningarli\xf0ur"},{term:"principal parts",icelandic:"kennimyndir"},{term:"reflexive pronoun",icelandic:"afturbeygt fornafn"},{term:"possessive pronoun",icelandic:"eignarfornafn"},{term:"present participle",icelandic:"l\xfdsingarh\xe1ttur n\xfat\xed\xf0ar"},{term:"present tense",icelandic:"n\xfat\xed\xf0"},{term:"second person",icelandic:"\xf6nnur pers\xf3na"},{term:"sentence",icelandic:"setning"},{term:"singular",icelandic:"eintala"},{term:"stem",icelandic:"stofn"},{term:"strong",icelandic:"sterk beyging"},{term:"strong verb",icelandic:"sterk s\xf6gn"},{term:"stylistic fronting",icelandic:"st\xedlf\xe6rsla"},{term:"subject",icelandic:"frumlag"},{term:"subjunctive",icelandic:"vi\xf0tengingarh\xe1ttur"},{term:"superlative",icelandic:"efsta stig"},{term:"supine",icelandic:"sagnb\xf3t"},{term:"third person",icelandic:"\xferi\xf0ja pers\xf3na"},{term:"transitive",icelandic:"\xe1hrifss\xf6gn"},{term:"transitive verb",icelandic:"\xe1hrifss\xf6gn"},{term:"intransitive verb",icelandic:"\xe1hrifslaus s\xf6gn"},{term:"weak",icelandic:"veik beyging"},{term:"weak verb",icelandic:"veik s\xf6gn"},{term:"word order",icelandic:"or\xf0ar\xf6\xf0"}]}},7285:(e,t,n)=>{"use strict";n.r(t),n.d(t,{assets:()=>m,contentTitle:()=>o,default:()=>h,frontMatter:()=>l,metadata:()=>c,toc:()=>p});var r=n(7462),i=(n(7294),n(3905)),a=n(1333),s=n(9797);const l={id:"reflexive",title:"Reflexive pronouns",sidebar_label:"Reflexive"},o=void 0,c={unversionedId:"pronouns/reflexive",id:"pronouns/reflexive",title:"Reflexive pronouns",description:"A  is used in Icelandic when the object of the verb is the same as its subject, i.e. when one does something to oneself:",source:"@site/docs/pronouns/reflexive.md",sourceDirName:"pronouns",slug:"/pronouns/reflexive",permalink:"/docs/pronouns/reflexive",draft:!1,tags:[],version:"current",frontMatter:{id:"reflexive",title:"Reflexive pronouns",sidebar_label:"Reflexive"},sidebar:"someSidebar",previous:{title:"Possessive",permalink:"/docs/pronouns/possessive"},next:{title:"Indefinite",permalink:"/docs/pronouns/indefinite"}},m={},p=[{value:"Formation",id:"formation",level:2},{value:"First and second person",id:"first-and-second-person",level:3},{value:"<em>sig</em>",id:"sig",level:3},{value:"Usage",id:"usage",level:2},{value:"Long-distance reflexivity",id:"long-distance-reflexivity",level:3}],d={toc:p},u="wrapper";function h(e){let{components:t,...n}=e;return(0,i.kt)(u,(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"A ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)(a.R,{term:"reflexive pronoun",mdxType:"Term"}))," is used in Icelandic when the object of the verb is the same as its subject, i.e. when one does something to ",(0,i.kt)("em",{parentName:"p"},"oneself"),":"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("em",{parentName:"p"},"\xc9g meiddi ",(0,i.kt)("strong",{parentName:"em"},"mig")," \xed slysinu.",(0,i.kt)("br",null),"\xde\xfa grei\xf0ir ",(0,i.kt)("strong",{parentName:"em"},"\xfe\xe9r")," \xe1\xf0ur en \xfe\xfa fer\xf0 \xfat.",(0,i.kt)("br",null),"Anna \xfev\xe6r ",(0,i.kt)("strong",{parentName:"em"},"s\xe9r")," me\xf0 s\xe1pu.",(0,i.kt)("br",null),"Krakkarnir skemmta ",(0,i.kt)("strong",{parentName:"em"},"s\xe9r")," \xed lauginni.",(0,i.kt)("br",null),"\xdei\xf0 eigi\xf0 a\xf0 skammast ",(0,i.kt)("strong",{parentName:"em"},"ykkar"),"!"))),(0,i.kt)("p",null,"The reflexive pronoun always refers back to the agent (the subject of the sentence)."),(0,i.kt)("h2",{id:"formation"},"Formation"),(0,i.kt)("h3",{id:"first-and-second-person"},"First and second person"),(0,i.kt)("p",null,"For first- and second-person pronouns, the reflexive form is the same as the regular form of the pronoun. It\u2019s used in whatever case is required by the verb."),(0,i.kt)("h3",{id:"sig"},(0,i.kt)("em",{parentName:"h3"},"sig")),(0,i.kt)("p",null,"In the third person, we have a special pronoun, ",(0,i.kt)("em",{parentName:"p"},"sig"),", which refers back to the subject. The logic of this is similar to the possessive pronoun ",(0,i.kt)("em",{parentName:"p"},(0,i.kt)("a",{parentName:"em",href:"possessive#sinn"},"sinn"))," \u2013 the same pronoun is used for all genders and numbers in the third person. Its declension similar to ",(0,i.kt)("em",{parentName:"p"},"\xe9g")," or ",(0,i.kt)("em",{parentName:"p"},"\xfe\xfa")," and is as follows:"),(0,i.kt)("table",{className:"auto-width"},(0,i.kt)("tbody",null,(0,i.kt)("tr",null,(0,i.kt)("th",null,"Nominative"),(0,i.kt)("td",null,(0,i.kt)("em",null,"\u2014"))),(0,i.kt)("tr",null,(0,i.kt)("th",null,"Accusative"),(0,i.kt)("td",null,(0,i.kt)("em",null,"sig"))),(0,i.kt)("tr",null,(0,i.kt)("th",null,"Dative"),(0,i.kt)("td",null,(0,i.kt)("em",null,"s\xe9r"))),(0,i.kt)("tr",null,(0,i.kt)("th",null,"Genitive"),(0,i.kt)("td",null,(0,i.kt)("em",null,"s\xedn"))))),(0,i.kt)("p",null,"Note that ",(0,i.kt)("em",{parentName:"p"},"sig")," doesn\u2019t have a nominative form because like ",(0,i.kt)("em",{parentName:"p"},"sinn"),", it can never occur in the subject of the sentence."),(0,i.kt)("h2",{id:"usage"},"Usage"),(0,i.kt)("p",null,"Many verbs have a particular meaning when they are used reflexively. When used as such, the possessive pronoun cannot be dropped:"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("em",{parentName:"p"},"\xc9g ",(0,i.kt)("strong",{parentName:"em"},"\xfev\xe6 m\xe9r"),".",(0,i.kt)("br",null),"Hann ",(0,i.kt)("strong",{parentName:"em"},"skammast s\xedn")," fyrir heg\xf0un s\xedna.",(0,i.kt)("br",null),"Vi\xf0 \xfeurfum a\xf0 ",(0,i.kt)("strong",{parentName:"em"},"fl\xfdta okkur"),"."))),(0,i.kt)("p",null,"Unlike in English, ",(0,i.kt)("em",{parentName:"p"},"*\xe9g \xfev\xe6")," is an ungrammatical sentence. The verb ",(0,i.kt)("em",{parentName:"p"},"\xfevo")," is ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)(a.R,{term:"transitive",mdxType:"Term"}))," \u2013 meaning it always requires an object, so we must use a reflexive pronoun in this case and say ",(0,i.kt)("em",{parentName:"p"},"\xe9g \xfev\xe6 ",(0,i.kt)("strong",{parentName:"em"},"m\xe9r")),". \ud83d\udec1"),(0,i.kt)("p",null,"Many reflexive verbs can also be used in a non-reflexive way. For example:"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("em",{parentName:"p"},"\xc9g \xfev\xe6 ",(0,i.kt)("strong",{parentName:"em"},"barninu m\xednu"),".",(0,i.kt)("br",null),"\xde\xfa meiddir ",(0,i.kt)("strong",{parentName:"em"},"mig"),"!"))),(0,i.kt)("p",null,"Others cannot be used in this way, at least not about other ",(0,i.kt)("em",{parentName:"p"},"people"),". For example, ",(0,i.kt)("em",{parentName:"p"},"fl\xfdta s\xe9r")," means \u201cto hurry\u201d. However, you can\u2019t say ",(0,i.kt)("em",{parentName:"p"},"*\xe9g fl\xfdti ",(0,i.kt)("strong",{parentName:"em"},"\xfe\xe9r")),". You can use it non-reflexively about abstract things though, such as a project: ",(0,i.kt)("em",{parentName:"p"},"fyrirt\xe6ki\xf0 fl\xfdtti ",(0,i.kt)("strong",{parentName:"em"},"verkefninu")),". These restrictions are particular to each verb and need to be learnt by heart."),(0,i.kt)("h3",{id:"long-distance-reflexivity"},"Long-distance reflexivity"),(0,i.kt)("p",null,"Many languages have reflexive verbs in some form, but there are normally limits on how far away the verb can be from the subject before the reflexive \u201clink\u201d is broken. In Icelandic, this link persists into subordinate clauses. The words in blue below refer to the same person (try hovering over them):"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("em",{parentName:"p"},(0,i.kt)(s.o,{name:"r1",text:"Sindri",mdxType:"Highlighter"})," ba\xf0 mig um a\xf0 tala vi\xf0 ",(0,i.kt)("strong",{parentName:"em"},(0,i.kt)(s.o,{name:"r1",text:"sig",mdxType:"Highlighter"})),".",(0,i.kt)("br",null),(0,i.kt)(s.o,{name:"r2",text:"\xdeeir",mdxType:"Highlighter"})," spur\xf0u mig hvort \xe9g kanna\xf0ist vi\xf0 ",(0,i.kt)("strong",{parentName:"em"},(0,i.kt)(s.o,{name:"r2",text:"sig",mdxType:"Highlighter"})),".",(0,i.kt)("br",null),(0,i.kt)(s.o,{name:"r3",text:"Lilja",mdxType:"Highlighter"})," sag\xf0i m\xe9r a\xf0 ",(0,i.kt)("strong",{parentName:"em"},(0,i.kt)(s.o,{name:"r3",text:"s\xe9r",mdxType:"Highlighter"}))," fyndist kj\xf3llinn lj\xf3tur."))))}h.isMDXComponent=!0}}]);