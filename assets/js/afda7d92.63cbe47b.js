(self.webpackChunkgramref=self.webpackChunkgramref||[]).push([[2558],{3905:(e,t,n)=>{"use strict";n.d(t,{Zo:()=>u,kt:()=>d});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=a.createContext({}),m=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=m(e.components);return a.createElement(o.Provider,{value:t},e.children)},k="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),k=m(n),c=r,d=k["".concat(o,".").concat(c)]||k[c]||p[c]||l;return n?a.createElement(d,i(i({ref:t},u),{},{components:n})):a.createElement(d,i({ref:t},u))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=c;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s[k]="string"==typeof e?e:r,i[1]=s;for(var m=2;m<l;m++)i[m]=n[m];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},9797:(e,t,n)=>{"use strict";n.d(t,{o:()=>r});var a=n(7294);class r extends a.Component{constructor(e){super(e),this.state={class:"highlighter"}}addHighlight(e){var t=document.getElementsByName(e);let n;for(n=0;n<t.length;n++)t[n].classList.add("highlighted")}removeHighlight(e){var t=document.getElementsByName(e);let n;for(n=0;n<t.length;n++)t[n].classList.remove("highlighted")}render(){return a.createElement(a.Fragment,null,a.createElement("span",{onMouseEnter:this.addHighlight.bind(this,this.props.name),onMouseLeave:this.removeHighlight.bind(this,this.props.name),className:this.state.class,name:this.props.name},this.props.text))}}},1333:(e,t,n)=>{"use strict";n.d(t,{R:()=>i});var a=n(7294),r=n(4052),l=n.n(r);class i extends a.Component{constructor(e){super(e),this.state={termWidth:""}}componentDidMount(){const e=document.getElementById("term-"+this.props.term).clientWidth,t=document.getElementById("tooltip-"+this.props.term).clientWidth;this.setState({termWidth:e,tooltipWidth:t})}offset(){return 0-this.state.tooltipWidth/2+this.state.termWidth/2+"px"}displayTerm(){let e;return e=this.props.display?this.props.display:this.props.term,e}getIcelandicTerm(){let e;return e=l().terms.filter((e=>e.term.includes(this.props.term.toLowerCase()))),e[0].icelandic}render(){return a.createElement(a.Fragment,null,a.createElement("span",{className:"term",id:"term-"+this.props.term},this.displayTerm(),a.createElement("span",{id:"tooltip-"+this.props.term,className:"tooltip",style:{left:this.offset()}},"\ud83c\uddee\ud83c\uddf8 ",this.getIcelandicTerm())))}}},4052:e=>{e.exports={terms:[,{term:"verb",icelandic:"s\xf6gn"},{term:"pronoun",icelandic:"fornafn"},{term:"mood",icelandic:"h\xe1ttur"},{term:"accusative",icelandic:"\xfeolfall"},{term:"active voice",icelandic:"germynd"},{term:"adjective",icelandic:"l\xfdsingaror\xf0"},{term:"adverb",icelandic:"atviksor\xf0"},{term:"aspiration",icelandic:"fr\xe1bl\xe1stur"},{term:"case",icelandic:"fall"},{term:"comparative",icelandic:"mi\xf0stig"},{term:"consonant",icelandic:"samhlj\xf3\xf0"},{term:"dative",icelandic:"\xfe\xe1gufall"},{term:"definite article",icelandic:"\xe1kve\xf0inn greinir"},{term:"demonstrative pronoun",icelandic:"\xe1bendingarfornafn"},{term:"devoicing",icelandic:"afr\xf6ddun"},{term:"diphthong",icelandic:"tv\xedhlj\xf3\xf0"},{term:"direct object",icelandic:"beint andlag"},{term:"ending",icelandic:"ending"},{term:"feminine",icelandic:"kvenkyn"},{term:"first person",icelandic:"fyrsta pers\xf3na"},{term:"gender",icelandic:"kyn"},{term:"genitive",icelandic:"eignarfall"},{term:"indefinite pronoun",icelandic:"\xf3\xe1kve\xf0i\xf0 fornafn"},{term:"indicative",icelandic:"frams\xf6guh\xe1ttur"},{term:"indirect object",icelandic:"\xf3beint andlag"},{term:"imperative",icelandic:"bo\xf0h\xe1ttur"},{term:"infinitive",icelandic:"nafnh\xe1ttur"},{term:"masculine",icelandic:"karlkyn"},{term:"middle voice",icelandic:"mi\xf0mynd"},{term:"modal verb",icelandic:"hj\xe1lpars\xf6gn"},{term:"monophthong",icelandic:"einhlj\xf3\xf0"},{term:"neuter",icelandic:"hvorugkyn"},{term:"nominative",icelandic:"nefnifall"},{term:"passive voice",icelandic:"\xfeolmynd"},{term:"past participle",icelandic:"l\xfdsingarh\xe1ttur \xfe\xe1t\xed\xf0ar"},{term:"past tense",icelandic:"\xfe\xe1t\xed\xf0"},{term:"personal pronoun",icelandic:"pers\xf3nufornafn"},{term:"plural",icelandic:"fleirtala"},{term:"positive",icelandic:"frumstig"},{term:"preaspiration",icelandic:"a\xf0bl\xe1stur"},{term:"preposition",icelandic:"forsetning"},{term:"principal parts",icelandic:"kennimyndir"},{term:"reflexive pronoun",icelandic:"afturbeygt fornafn"},{term:"possessive pronoun",icelandic:"eignarfornafn"},{term:"present participle",icelandic:"l\xfdsingarh\xe1ttur n\xfat\xed\xf0ar"},{term:"present tense",icelandic:"n\xfat\xed\xf0"},{term:"second person",icelandic:"\xf6nnur pers\xf3na"},{term:"singular",icelandic:"eintala"},{term:"stem",icelandic:"stofn"},{term:"strong",icelandic:"sterk beyging"},{term:"strong verb",icelandic:"sterk s\xf6gn"},{term:"subjunctive",icelandic:"vi\xf0tengingarh\xe1ttur"},{term:"superlative",icelandic:"efsta stig"},{term:"supine",icelandic:"sagnb\xf3t"},{term:"third person",icelandic:"\xferi\xf0ja pers\xf3na"},{term:"transitive",icelandic:"\xe1hrifss\xf6gn"},{term:"weak",icelandic:"veik beyging"},{term:"weak verb",icelandic:"veik s\xf6gn"}]}},6748:(e,t,n)=>{"use strict";n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>o,default:()=>d,frontMatter:()=>s,metadata:()=>m,toc:()=>k});var a=n(7462),r=(n(7294),n(3905)),l=n(1333),i=n(9797);const s={id:"demonstrative",title:"Demonstrative pronouns",sidebar_label:"Demonstrative"},o=void 0,m={unversionedId:"pronouns/demonstrative",id:"pronouns/demonstrative",title:"Demonstrative pronouns",description:"A  in Icelandic is used to:",source:"@site/docs/pronouns/demonstrative.md",sourceDirName:"pronouns",slug:"/pronouns/demonstrative",permalink:"/docs/pronouns/demonstrative",draft:!1,tags:[],version:"current",frontMatter:{id:"demonstrative",title:"Demonstrative pronouns",sidebar_label:"Demonstrative"},sidebar:"someSidebar",previous:{title:"Indefinite",permalink:"/docs/pronouns/indefinite"},next:{title:"Introduction to prepositions",permalink:"/docs/prepositions/preposition-intro"}},u={},k=[{value:"<em>\xfeessi</em>",id:"\xfeessi",level:2},{value:"Usage",id:"usage",level:3},{value:"Inflection",id:"inflection",level:3},{value:"<em>s\xe1</em>",id:"s\xe1",level:2},{value:"Usage",id:"usage-1",level:3},{value:"Inflection",id:"inflection-1",level:3},{value:"<em>hinn</em>",id:"hinn",level:2},{value:"Usage",id:"usage-2",level:3},{value:"Inflection",id:"hinn-inflection",level:3}],p={toc:k},c="wrapper";function d(e){let{components:t,...n}=e;return(0,r.kt)(c,(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"A ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)(l.R,{term:"demonstrative pronoun",mdxType:"Term"}))," in Icelandic is used to:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\ud83d\udc49 point to a specific thing or person, usually nearby or in visual range,"),(0,r.kt)("li",{parentName:"ul"},"\ud83d\uddc4 distinguish an item in a set from other things in that set.")),(0,r.kt)("p",null,"Icelandic has three demonstratives: ",(0,r.kt)("em",{parentName:"p"},(0,r.kt)("a",{parentName:"em",href:"#%C3%BEessi"},"\xfeessi")),", ",(0,r.kt)("em",{parentName:"p"},(0,r.kt)("a",{parentName:"em",href:"#s%C3%A1"},"s\xe1"))," and ",(0,r.kt)("em",{parentName:"p"},(0,r.kt)("a",{parentName:"em",href:"#hinn"},"hinn")),". Let\u2019s look at some examples:"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("em",{parentName:"p"},"\xc9g hef aldrei s\xe9\xf0 ",(0,r.kt)("strong",{parentName:"em"},"\xfeessa")," konu \xe1 \xe6vi minni.",(0,r.kt)("br",null),"Nennir\xf0u a\xf0 r\xe9tta m\xe9r ",(0,r.kt)("strong",{parentName:"em"},"\xfeessum")," bolla \xfearna?",(0,r.kt)("br",null),"Hann er ",(0,r.kt)("strong",{parentName:"em"},"s\xe1")," sem keypti h\xfasi\xf0.",(0,r.kt)("br",null),"Enginn skilur ",(0,r.kt)("strong",{parentName:"em"},"\xfea\xf0")," sem hann segir.",(0,r.kt)("br",null),"Settu ",(0,r.kt)("strong",{parentName:"em"},"\xfeennan")," kassa \xed b\xedlinn og \xe9g s\xe6ki alla ",(0,r.kt)("strong",{parentName:"em"},"hina")," kassana."))),(0,r.kt)("h2",{id:"\xfeessi"},(0,r.kt)("em",{parentName:"h2"},"\xfeessi")),(0,r.kt)("h3",{id:"usage"},"Usage"),(0,r.kt)("p",null,"The first demonstrative, ",(0,r.kt)("em",{parentName:"p"},"\xfeessi"),", is used to point to a specific thing or person \u2013 usually something within the visual range of the speaker. It can either stand on its own or be used before an indefinite noun:"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("em",{parentName:"p"},"Ertu b\xfain a\xf0 sj\xe1 ",(0,r.kt)("strong",{parentName:"em"},"\xfeetta"),"?",(0,r.kt)("br",null),(0,r.kt)("strong",{parentName:"em"},"\xdeessi")," gaffall h\xe9rna er sk\xedtugur."))),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"\xdeessi")," covers both \u201cthis\u201d and \u201cthat\u201d \u2013 Icelandic doesn\u2019t care as much about how far away something is from you, although if you want to emphasise the distance of something, you can use ",(0,r.kt)("em",{parentName:"p"},"\xfeessi h\xe9r(na)")," and ",(0,r.kt)("em",{parentName:"p"},"\xfeessi \xfear(na)"),":"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("em",{parentName:"p"},(0,r.kt)("strong",{parentName:"em"},"\xdeessi")," kj\xf3ll ",(0,r.kt)("strong",{parentName:"em"},"h\xe9rna")," er ansi flottur, en ",(0,r.kt)("strong",{parentName:"em"},"\xfeessi \xfearna")," er enn\xfe\xe1 flottari."))),(0,r.kt)("h3",{id:"inflection"},"Inflection"),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"\xdeessi")," has a somewhat irregular inflection, although in many forms the endings are the same as the strong declension of adjectives:"),(0,r.kt)("figure",null,(0,r.kt)("table",{class:"full-width"},(0,r.kt)("thead",null,(0,r.kt)("tr",null,(0,r.kt)("th",{rowspan:"2"}),(0,r.kt)("th",{colspan:"3"},"Singular"),(0,r.kt)("th",{colspan:"3"},"Plural")),(0,r.kt)("tr",null,(0,r.kt)("th",null,"Masculine"),(0,r.kt)("th",null,"Feminine"),(0,r.kt)("th",null,"Neuter"),(0,r.kt)("th",null,"Masculine"),(0,r.kt)("th",null,"Feminine"),(0,r.kt)("th",null,"Neuter"))),(0,r.kt)("tbody",null,(0,r.kt)("tr",null,(0,r.kt)("th",null,"Nom."),(0,r.kt)("td",null,(0,r.kt)("em",null,"\xfeessi")),(0,r.kt)("td",null,(0,r.kt)("em",null,(0,r.kt)("strong",null,"\xfeessi"))),(0,r.kt)("td",{rowspan:"2"},(0,r.kt)("em",null,"\xfee",(0,r.kt)("strong",null,"tt"),"a")),(0,r.kt)("td",null,(0,r.kt)("em",null,"\xfeessir")),(0,r.kt)("td",{rowspan:"2"},(0,r.kt)("em",null,"\xfeessar")),(0,r.kt)("td",{rowspan:"2"},(0,r.kt)("em",null,"\xfeessi"))),(0,r.kt)("tr",null,(0,r.kt)("th",null,"Acc."),(0,r.kt)("td",null,(0,r.kt)("em",null,"\xfee",(0,r.kt)("strong",null,"nn"),"an")),(0,r.kt)("td",null,(0,r.kt)("em",null,"\xfeessa")),(0,r.kt)("td",null,(0,r.kt)("em",null,"\xfeessa"))),(0,r.kt)("tr",null,(0,r.kt)("th",null,"Dat."),(0,r.kt)("td",null,(0,r.kt)("em",null,"\xfeessum")),(0,r.kt)("td",null,(0,r.kt)("em",null,"\xfeess",(0,r.kt)("strong",null,"a"),"ri")),(0,r.kt)("td",null,(0,r.kt)("em",null,"\xfeessu")),(0,r.kt)("td",{colspan:"3",align:"center"},(0,r.kt)("em",null,"\xfeessum"))),(0,r.kt)("tr",null,(0,r.kt)("th",null,"Gen."),(0,r.kt)("td",null,(0,r.kt)("em",null,"\xfeess",(0,r.kt)("strong",null,"a"))),(0,r.kt)("td",null,(0,r.kt)("em",null,"\xfeess",(0,r.kt)("strong",null,"a"),"rar")),(0,r.kt)("td",null,(0,r.kt)("em",null,"\xfeess",(0,r.kt)("strong",null,"a"))),(0,r.kt)("td",{colspan:"3",align:"center"},(0,r.kt)("em",null,"\xfeessara")))))),(0,r.kt)("p",null,"Just like an adjective, ",(0,r.kt)("em",{parentName:"p"},"\xfeessi")," agrees in gender, number and case with the noun it modifies. If used to refer to something unknown, then the neuter singular ",(0,r.kt)("em",{parentName:"p"},"\xfeetta")," is used:"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("em",{parentName:"p"},(0,r.kt)("strong",{parentName:"em"},"\xdeessar")," myndir eru virkilega fallegar.",(0,r.kt)("br",null),"Hva\xf0 \xe1 \xe9g a\xf0 gera vi\xf0 ",(0,r.kt)("strong",{parentName:"em"},"\xfeetta"),"?"))),(0,r.kt)("p",null,"This agreement carries on between sentences. This is efficient, as it saves you having to repeat nouns or whole phrases, however it can sometimes be tricky to keep track of in a long conversation:"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("em",{parentName:"p"},"Vantar \xfeig n\xfdja ",(0,r.kt)(i.o,{name:"r1",text:"sokka",mdxType:"Highlighter"}),"? \xde\xfa m\xe1tt bara eiga ",(0,r.kt)("strong",{parentName:"em"},(0,r.kt)(i.o,{name:"r1",text:"\xfeessa",mdxType:"Highlighter"})),".",(0,r.kt)("br",null),"Hvernig l\xedst \xfe\xe9r \xe1 ",(0,r.kt)(i.o,{name:"r2",text:"bl\xe1a b\xedlinn",mdxType:"Highlighter"}),"? En ",(0,r.kt)("strong",{parentName:"em"},(0,r.kt)(i.o,{name:"r2",text:"\xfeennan",mdxType:"Highlighter"})),"?"))),(0,r.kt)("p",null,"If ",(0,r.kt)("em",{parentName:"p"},"\xfeessi")," is used by itself in the masculine, then like ",(0,r.kt)("a",{parentName:"p",href:"indefinite"},"indefinite pronouns"),", it refers to a person or people:"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("em",{parentName:"p"},"Hva\xf0 heitir ",(0,r.kt)("strong",{parentName:"em"},"\xfeessi"),"?",(0,r.kt)("br",null),"Ekki tala vi\xf0 ",(0,r.kt)("strong",{parentName:"em"},"\xfeessa"),", \xfeeir eru h\xe6ttulegir."))),(0,r.kt)("h2",{id:"s\xe1"},(0,r.kt)("em",{parentName:"h2"},"s\xe1")),(0,r.kt)("h3",{id:"usage-1"},"Usage"),(0,r.kt)("p",null,"The second demonstrative, ",(0,r.kt)("em",{parentName:"p"},"s\xe1")," has a couple of uses, but it most often means \u201cthe one\u201d:"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("em",{parentName:"p"},"\xc9g vil ekki vera ",(0,r.kt)("strong",{parentName:"em"},"s\xe1")," sem kvartar.",(0,r.kt)("br",null),"Taktu ",(0,r.kt)("strong",{parentName:"em"},"\xfeann")," sem liggur upp \xed hillunni.",(0,r.kt)("br",null),"\xdea\xf0 er ekki ",(0,r.kt)("strong",{parentName:"em"},"\xfea\xf0")," sem hann er a\xf0 segja."))),(0,r.kt)("p",null,"In this meaning, it often comes right before the conjunction ",(0,r.kt)("em",{parentName:"p"},"sem"),"."),(0,r.kt)("p",null,"When used in the masculine singular on its own, ",(0,r.kt)("em",{parentName:"p"},"s\xe1")," refers to a person, like in the first example above: ",(0,r.kt)("em",{parentName:"p"},"s\xe1 sem kvartar")," \u201cthe one ","[i.e. the person]"," who complains\u201d. If the speaker is female, she may use ",(0,r.kt)("em",{parentName:"p"},"s\xfa")," instead."),(0,r.kt)("p",null,"It can also be used ",(0,r.kt)("strong",{parentName:"p"},"with an adjective"),":"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("em",{parentName:"p"},"Hva\xf0a k\xf6ku viltu? ",(0,r.kt)("strong",{parentName:"em"},"\xde\xe1")," st\xe6rstu!",(0,r.kt)("br",null),"Hvern \xfeessara b\xedla \xe1 hann? ",(0,r.kt)("strong",{parentName:"em"},"\xdeann")," rau\xf0a."))),(0,r.kt)("p",null,"So ",(0,r.kt)("em",{parentName:"p"},"\xfe\xe1 st\xe6rstu")," means \u201cthe biggest one\u201d. And like other demonstrative pronouns, ",(0,r.kt)("em",{parentName:"p"},"s\xe1")," requires the ",(0,r.kt)("a",{parentName:"p",href:"../adjectives/positive#weak-inflection"},"weak form of the adjective")," after it."),(0,r.kt)("p",null,"When used ",(0,r.kt)("strong",{parentName:"p"},"with a noun"),", the meaning is \u201cthat\u201d:"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("em",{parentName:"p"},"Hann \xe6tlar ekki a\xf0 svara ",(0,r.kt)("strong",{parentName:"em"},"\xfeeirri")," spurningu."))),(0,r.kt)("p",null,"This usage has a formal air to it. In more everyday speech, ",(0,r.kt)("em",{parentName:"p"},"\xfeessi")," can be used in this context instead."),(0,r.kt)("h3",{id:"inflection-1"},"Inflection"),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"S\xe1")," has a highly irregular inflection. Having said that, you should recognise the plural forms from elsewhere:"),(0,r.kt)("figure",null,(0,r.kt)("table",{class:"full-width"},(0,r.kt)("thead",null,(0,r.kt)("tr",null,(0,r.kt)("th",{rowspan:"2"}),(0,r.kt)("th",{colspan:"3"},"Singular"),(0,r.kt)("th",{colspan:"3"},"Plural")),(0,r.kt)("tr",null,(0,r.kt)("th",null,"Masculine"),(0,r.kt)("th",null,"Feminine"),(0,r.kt)("th",null,"Neuter"),(0,r.kt)("th",null,"Masculine"),(0,r.kt)("th",null,"Feminine"),(0,r.kt)("th",null,"Neuter"))),(0,r.kt)("tbody",null,(0,r.kt)("tr",null,(0,r.kt)("th",null,"Nom."),(0,r.kt)("td",null,(0,r.kt)("em",null,"s\xe1")),(0,r.kt)("td",null,(0,r.kt)("em",null,"s\xfa")),(0,r.kt)("td",{rowspan:"2"},(0,r.kt)("em",null,"\xfea\xf0")),(0,r.kt)("td",null,(0,r.kt)("em",null,"\xfeeir")),(0,r.kt)("td",{rowspan:"2"},(0,r.kt)("em",null,"\xfe\xe6r")),(0,r.kt)("td",{rowspan:"2"},(0,r.kt)("em",null,"\xfeau"))),(0,r.kt)("tr",null,(0,r.kt)("th",null,"Acc."),(0,r.kt)("td",null,(0,r.kt)("em",null,"\xfeann")),(0,r.kt)("td",null,(0,r.kt)("em",null,"\xfe\xe1")),(0,r.kt)("td",null,(0,r.kt)("em",null,"\xfe\xe1"))),(0,r.kt)("tr",null,(0,r.kt)("th",null,"Dat."),(0,r.kt)("td",null,(0,r.kt)("em",null,"\xfeeim")),(0,r.kt)("td",null,(0,r.kt)("em",null,"\xfeeirri")),(0,r.kt)("td",null,(0,r.kt)("em",null,"\xfev\xed")),(0,r.kt)("td",{colspan:"3",align:"center"},(0,r.kt)("em",null,"\xfeeim"))),(0,r.kt)("tr",null,(0,r.kt)("th",null,"Gen."),(0,r.kt)("td",null,(0,r.kt)("em",null,"\xfeess")),(0,r.kt)("td",null,(0,r.kt)("em",null,"\xfeeirrar")),(0,r.kt)("td",null,(0,r.kt)("em",null,"\xfeess")),(0,r.kt)("td",{colspan:"3",align:"center"},(0,r.kt)("em",null,"\xfeeirra")))))),(0,r.kt)("p",null,"That\u2019s right, the plural inflection is exactly the same as the personal pronoun ",(0,r.kt)("em",{parentName:"p"},(0,r.kt)("a",{parentName:"em",href:"personal#third-person-plural"},"\xfeeir")),". Also, the neuter singular is exactly the same as the personal pronoun ",(0,r.kt)("em",{parentName:"p"},(0,r.kt)("a",{parentName:"em",href:"personal#%C3%BEa%C3%B0"},"\xfea\xf0")),"."),(0,r.kt)("h2",{id:"hinn"},(0,r.kt)("em",{parentName:"h2"},"hinn")),(0,r.kt)("h3",{id:"usage-2"},"Usage"),(0,r.kt)("p",null,"The final demonstrative, ",(0,r.kt)("em",{parentName:"p"},"hinn"),", means \u201cthe other (one)\u201d and is often used contrastively with ",(0,r.kt)("em",{parentName:"p"},"\xfeessi"),":"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("em",{parentName:"p"},"\xdeessi b\xedll er flottur, en ",(0,r.kt)("strong",{parentName:"em"},"hinn")," b\xedllinn er flottari.",(0,r.kt)("br",null),"\xc9g tek \xfeetta s\xe6ti, \xfe\xfa tekur ",(0,r.kt)("strong",{parentName:"em"},"hitt")," s\xe6ti\xf0."))),(0,r.kt)("p",null,"However, it doesn\u2019t have to be used with ",(0,r.kt)("em",{parentName:"p"},"\xfeessi"),":"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("em",{parentName:"p"},"Vi\xf0 b\xed\xf0um \xed ",(0,r.kt)("strong",{parentName:"em"},"hinu")," herberginu.",(0,r.kt)("br",null),"Viltu f\xe1 \xfeessa sk\xf3 e\xf0a ",(0,r.kt)("strong",{parentName:"em"},"hina"),"?",(0,r.kt)("br",null),"Hvar eru ",(0,r.kt)("strong",{parentName:"em"},"hinir"),"?",(0,r.kt)("br",null),"Hann b\xfdr ",(0,r.kt)("strong",{parentName:"em"},"hinum")," megin vi\xf0 g\xf6tuna."))),(0,r.kt)("p",null,"Just like indefinite pronouns, ",(0,r.kt)("em",{parentName:"p"},"hinn")," can be used in the masculine plural to refer to a group of people, i.e. ",(0,r.kt)("em",{parentName:"p"},"hinir")," \u201cthe others\u201d."),(0,r.kt)("admonition",{title:"Definite article",type:"info"},(0,r.kt)("p",{parentName:"admonition"},"As you may have noticed from the above examples, ",(0,r.kt)("em",{parentName:"p"},"hinn")," requires the noun that follows it to have the definite article ending.")),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("mdxAdmonitionTitle",{parentName:"admonition"},(0,r.kt)("em",{parentName:"mdxAdmonitionTitle"},"Annar")," or ",(0,r.kt)("em",{parentName:"mdxAdmonitionTitle"},"hinn"),"?"),(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("em",{parentName:"p"},(0,r.kt)("a",{parentName:"em",href:"indefinite#annar"},"Annar"))," always means \u201canother\u201d or \u201cother\u201d and never \u201c",(0,r.kt)("strong",{parentName:"p"},"the")," other\u201d (even if you put the definite article on the noun). If what you mean is \u201cthe other\u201d, you have to use ",(0,r.kt)("em",{parentName:"p"},"hinn"),".")),(0,r.kt)("h3",{id:"hinn-inflection"},"Inflection"),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Hinn")," inflects similarly to the number ",(0,r.kt)("em",{parentName:"p"},"einn"),":"),(0,r.kt)("figure",null,(0,r.kt)("table",{class:"full-width"},(0,r.kt)("thead",null,(0,r.kt)("tr",null,(0,r.kt)("th",{rowspan:"2"},"\xa0"),(0,r.kt)("th",{colspan:"3"},"Singular"),(0,r.kt)("th",{colspan:"3"},"Plural")),(0,r.kt)("tr",null,(0,r.kt)("th",{width:"15%"},"Masculine"),(0,r.kt)("th",{width:"15%"},"Feminine"),(0,r.kt)("th",{width:"15%"},"Neuter"),(0,r.kt)("th",{width:"15%"},"Masculine"),(0,r.kt)("th",{width:"15%"},"Feminine"),(0,r.kt)("th",{width:"15%"},"Neuter"))),(0,r.kt)("tbody",null,(0,r.kt)("tr",null,(0,r.kt)("th",null,"Nom."),(0,r.kt)("td",{rowspan:"2"},(0,r.kt)("em",null,"hinn")),(0,r.kt)("td",null,(0,r.kt)("em",null,"hin")),(0,r.kt)("td",{rowspan:"2"},(0,r.kt)("em",null,"hi",(0,r.kt)("strong",null,"tt"))),(0,r.kt)("td",null,(0,r.kt)("em",null,"hin",(0,r.kt)("strong",null,"ir"))),(0,r.kt)("td",{rowspan:"2"},(0,r.kt)("em",null,"hin",(0,r.kt)("strong",null,"ar"))),(0,r.kt)("td",{rowspan:"2"},(0,r.kt)("em",null,"hin"))),(0,r.kt)("tr",null,(0,r.kt)("th",null,"Acc."),(0,r.kt)("td",null,(0,r.kt)("em",null,"hin",(0,r.kt)("strong",null,"a"))),(0,r.kt)("td",null,(0,r.kt)("em",null,"hin",(0,r.kt)("strong",null,"a")))),(0,r.kt)("tr",null,(0,r.kt)("th",null,"Dat."),(0,r.kt)("td",null,(0,r.kt)("em",null,"hin",(0,r.kt)("strong",null,"um"))),(0,r.kt)("td",null,(0,r.kt)("em",null,"hin",(0,r.kt)("strong",null,"ni"))),(0,r.kt)("td",null,(0,r.kt)("em",null,"hin",(0,r.kt)("strong",null,"u"))),(0,r.kt)("td",{colspan:"3",align:"center"},(0,r.kt)("em",null,"hin",(0,r.kt)("strong",null,"um")))),(0,r.kt)("tr",null,(0,r.kt)("th",null,"Gen."),(0,r.kt)("td",null,(0,r.kt)("em",null,"hin",(0,r.kt)("strong",null,"s"))),(0,r.kt)("td",null,(0,r.kt)("em",null,"hin",(0,r.kt)("strong",null,"nar"))),(0,r.kt)("td",null,(0,r.kt)("em",null,"hin",(0,r.kt)("strong",null,"s"))),(0,r.kt)("td",{colspan:"3",align:"center"},(0,r.kt)("em",null,"hin",(0,r.kt)("strong",null,"na"))))))),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("mdxAdmonitionTitle",{parentName:"admonition"},(0,r.kt)("em",{parentName:"mdxAdmonitionTitle"},"Hitt")," or ",(0,r.kt)("em",{parentName:"mdxAdmonitionTitle"},"hi\xf0"),"?"),(0,r.kt)("p",{parentName:"admonition"},"The inflection of the pronoun ",(0,r.kt)("em",{parentName:"p"},"hinn")," \u201cthe other\u201d is almost identical to the rarely used ",(0,r.kt)("a",{parentName:"p",href:"../nouns/definite-article#freestanding-article"},"freestanding definite article"),", ",(0,r.kt)("em",{parentName:"p"},"hinn"),". In fact, all the forms are the same except the neuter singular nominative/accusative, which is ",(0,r.kt)("em",{parentName:"p"},"hitt")," for the pronoun and ",(0,r.kt)("em",{parentName:"p"},"hi\xf0")," for the article."),(0,r.kt)("p",{parentName:"admonition"},"How can you tell them apart? The pronoun ",(0,r.kt)("em",{parentName:"p"},"hinn")," always requires the suffixed definite article on the noun that follows it, e.g. ",(0,r.kt)("em",{parentName:"p"},"hitt hv\xedta h\xfas",(0,r.kt)("strong",{parentName:"em"},"i\xf0")),". The freestanding article ",(0,r.kt)("em",{parentName:"p"},"hinn")," doesn\u2019t require this, as it ",(0,r.kt)("em",{parentName:"p"},"is")," the definite article, e.g. ",(0,r.kt)("em",{parentName:"p"},(0,r.kt)("strong",{parentName:"em"},"hi\xf0")," hv\xedta h\xfas"),".")))}d.isMDXComponent=!0}}]);