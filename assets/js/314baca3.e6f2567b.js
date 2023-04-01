(self.webpackChunkgramref=self.webpackChunkgramref||[]).push([[9977],{3905:(e,t,n)=>{"use strict";n.d(t,{Zo:()=>m,kt:()=>c});var r=n(7294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var o=r.createContext({}),u=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=u(e.components);return r.createElement(o.Provider,{value:t},e.children)},p="mdxType",k={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,l=e.mdxType,a=e.originalType,o=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),p=u(n),d=l,c=p["".concat(o,".").concat(d)]||p[d]||k[d]||a;return n?r.createElement(c,i(i({ref:t},m),{},{components:n})):r.createElement(c,i({ref:t},m))}));function c(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var a=n.length,i=new Array(a);i[0]=d;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s[p]="string"==typeof e?e:l,i[1]=s;for(var u=2;u<a;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},1333:(e,t,n)=>{"use strict";n.d(t,{R:()=>i});var r=n(7294),l=n(4052),a=n.n(l);class i extends r.Component{constructor(e){super(e),this.state={termWidth:""}}componentDidMount(){const e=document.getElementById("term-"+this.props.term).clientWidth,t=document.getElementById("tooltip-"+this.props.term).clientWidth;this.setState({termWidth:e,tooltipWidth:t})}offset(){return 0-this.state.tooltipWidth/2+this.state.termWidth/2+"px"}displayTerm(){let e;return e=this.props.display?this.props.display:this.props.term,e}getIcelandicTerm(){let e;return e=a().terms.filter((e=>e.term.includes(this.props.term.toLowerCase()))),e[0].icelandic}render(){return r.createElement(r.Fragment,null,r.createElement("span",{className:"term",id:"term-"+this.props.term},this.displayTerm(),r.createElement("span",{id:"tooltip-"+this.props.term,className:"tooltip",style:{left:this.offset()}},"\ud83c\uddee\ud83c\uddf8 ",this.getIcelandicTerm())))}}},4052:e=>{e.exports={terms:[,{term:"verb",icelandic:"s\xf6gn"},{term:"pronoun",icelandic:"fornafn"},{term:"mood",icelandic:"h\xe1ttur"},{term:"accusative",icelandic:"\xfeolfall"},{term:"active voice",icelandic:"germynd"},{term:"adjective",icelandic:"l\xfdsingaror\xf0"},{term:"aspiration",icelandic:"fr\xe1bl\xe1stur"},{term:"case",icelandic:"fall"},{term:"comparative",icelandic:"mi\xf0stig"},{term:"consonant",icelandic:"samhlj\xf3\xf0"},{term:"dative",icelandic:"\xfe\xe1gufall"},{term:"definite article",icelandic:"\xe1kve\xf0inn greinir"},{term:"demonstrative pronoun",icelandic:"\xe1bendingarfornafn"},{term:"devoicing",icelandic:"afr\xf6ddun"},{term:"diphthong",icelandic:"tv\xedhlj\xf3\xf0"},{term:"direct object",icelandic:"beint andlag"},{term:"ending",icelandic:"ending"},{term:"feminine",icelandic:"kvenkyn"},{term:"first person",icelandic:"fyrsta pers\xf3na"},{term:"gender",icelandic:"kyn"},{term:"genitive",icelandic:"eignarfall"},{term:"indefinite pronoun",icelandic:"\xf3\xe1kve\xf0i\xf0 fornafn"},{term:"indicative",icelandic:"frams\xf6guh\xe1ttur"},{term:"indirect object",icelandic:"\xf3beint andlag"},{term:"imperative",icelandic:"bo\xf0h\xe1ttur"},{term:"infinitive",icelandic:"nafnh\xe1ttur"},{term:"masculine",icelandic:"karlkyn"},{term:"middle voice",icelandic:"mi\xf0mynd"},{term:"modal verb",icelandic:"hj\xe1lpars\xf6gn"},{term:"monophthong",icelandic:"einhlj\xf3\xf0"},{term:"neuter",icelandic:"hvorugkyn"},{term:"nominative",icelandic:"nefnifall"},{term:"passive voice",icelandic:"\xfeolmynd"},{term:"past participle",icelandic:"l\xfdsingarh\xe1ttur \xfe\xe1t\xed\xf0ar"},{term:"past tense",icelandic:"\xfe\xe1t\xed\xf0"},{term:"personal pronoun",icelandic:"pers\xf3nufornafn"},{term:"plural",icelandic:"fleirtala"},{term:"positive",icelandic:"frumstig"},{term:"preaspiration",icelandic:"a\xf0bl\xe1stur"},{term:"preposition",icelandic:"forsetning"},{term:"principal parts",icelandic:"kennimyndir"},{term:"reflexive pronoun",icelandic:"afturbeygt fornafn"},{term:"possessive pronoun",icelandic:"eignarfornafn"},{term:"present participle",icelandic:"l\xfdsingarh\xe1ttur n\xfat\xed\xf0ar"},{term:"present tense",icelandic:"n\xfat\xed\xf0"},{term:"second person",icelandic:"\xf6nnur pers\xf3na"},{term:"singular",icelandic:"eintala"},{term:"stem",icelandic:"stofn"},{term:"strong",icelandic:"sterk beyging"},{term:"strong verb",icelandic:"sterk s\xf6gn"},{term:"subjunctive",icelandic:"vi\xf0tengingarh\xe1ttur"},{term:"superlative",icelandic:"efsta stig"},{term:"supine",icelandic:"sagnb\xf3t"},{term:"third person",icelandic:"\xferi\xf0ja pers\xf3na"},{term:"transitive",icelandic:"\xe1hrifss\xf6gn"},{term:"weak",icelandic:"veik beyging"},{term:"weak verb",icelandic:"veik s\xf6gn"}]}},6284:(e,t,n)=>{"use strict";n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>d,frontMatter:()=>i,metadata:()=>o,toc:()=>m});var r=n(7462),l=(n(7294),n(3905)),a=n(1333);const i={id:"present",title:"Present tense",description:"An explanation of how to form and use the present tense of verbs in Icelandic."},s=void 0,o={unversionedId:"verbs/present",id:"verbs/present",title:"Present tense",description:"An explanation of how to form and use the present tense of verbs in Icelandic.",source:"@site/docs/verbs/present.md",sourceDirName:"verbs",slug:"/verbs/present",permalink:"/docs/verbs/present",draft:!1,tags:[],version:"current",frontMatter:{id:"present",title:"Present tense",description:"An explanation of how to form and use the present tense of verbs in Icelandic."},sidebar:"someSidebar",previous:{title:"Introduction to verbs",permalink:"/docs/verbs/verb-intro"},next:{title:"Past tense",permalink:"/docs/verbs/past"}},u={},m=[{value:"Usage",id:"usage",level:2},{value:"Something happening now",id:"something-happening-now",level:3},{value:"State or condition",id:"state-or-condition",level:3},{value:"Repeated events and habits",id:"repeated-events-and-habits",level:3},{value:"Future events",id:"future-events",level:3},{value:"Formation",id:"formation",level:2},{value:"Weak verbs",id:"weak-verbs",level:3},{value:"Strong verbs",id:"strong-verbs",level:3},{value:"Singular",id:"singular",level:4},{value:"Plural",id:"plural",level:4}],p={toc:m},k="wrapper";function d(e){let{components:t,...n}=e;return(0,l.kt)(k,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"usage"},"Usage"),(0,l.kt)("p",null,"The ",(0,l.kt)(a.R,{term:"present tense",mdxType:"Term"}),", or more precisely the ",(0,l.kt)("strong",{parentName:"p"},"simple present"),", is used to talk about something:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u2b07\ufe0f that is happening now (although the ",(0,l.kt)("a",{parentName:"li",href:"continuous#present"},"present continuous")," is often used for this \u2013 start there if you\u2019re a beginner);"),(0,l.kt)("li",{parentName:"ul"},"\u2b55\ufe0f that describes a state or condition;"),(0,l.kt)("li",{parentName:"ul"},"\u267b\ufe0f that happens repeatedly, such as a habit or recurring event; or"),(0,l.kt)("li",{parentName:"ul"},"\u23f3 that will happen in the future.")),(0,l.kt)("p",null,"For example:"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},(0,l.kt)("em",{parentName:"p"},"\xc9g ",(0,l.kt)("strong",{parentName:"em"},"skil"),"!",(0,l.kt)("br",null),"H\xfasi\xf0 ",(0,l.kt)("strong",{parentName:"em"},"stendur")," \xe1 gatnam\xf3tum Hverfisg\xf6tu og Frakkast\xedgs.",(0,l.kt)("br",null),"Pabbi ",(0,l.kt)("strong",{parentName:"em"},"fer")," alltaf \xed sund \xe1 laugard\xf6gum.",(0,l.kt)("br",null),"N\xfdi iPhone-s\xedminn ",(0,l.kt)("strong",{parentName:"em"},"kemur")," \xfat \xed n\xe6stu viku."))),(0,l.kt)("h3",{id:"something-happening-now"},"Something happening now"),(0,l.kt)("p",null,"You\u2019ve most probably come across the present continuous in Icelandic. This is where you use ",(0,l.kt)("em",{parentName:"p"},"vera")," + ",(0,l.kt)("em",{parentName:"p"},"a\xf0")," + infinitive to talk about something that\u2019s happening right now:"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},(0,l.kt)("em",{parentName:"p"},"\xde\xf3r ",(0,l.kt)("strong",{parentName:"em"},"er a\xf0\xa0prj\xf3na")," trefil."),(0,l.kt)("br",null),(0,l.kt)("em",{parentName:"p"},"Hva\xf0 ",(0,l.kt)("strong",{parentName:"em"},"ertu a\xf0 gera"),"?"))),(0,l.kt)("p",null,"However, you can also use the simple present for this:"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},(0,l.kt)("em",{parentName:"p"},"\xde\xf3r ",(0,l.kt)("strong",{parentName:"em"},"prj\xf3nar")," trefil."),(0,l.kt)("br",null),(0,l.kt)("em",{parentName:"p"},"Hva\xf0 ",(0,l.kt)("strong",{parentName:"em"},"gerir\xf0u"),"?"))),(0,l.kt)("p",null,"The distinction here is that the present continuous places more emphasis on the fact that the event is taking place ",(0,l.kt)("em",{parentName:"p"},"right now"),". The second sentence from each example above illustrates this well:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("em",{parentName:"li"},"Hva\xf0 ertu a\xf0 gera?")," \u201cWhat are you doing (right now)?\u201d"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("em",{parentName:"li"},"Hva\xf0 gerir\xf0u?")," \u201cWhat do you do (for work?)\u201d")),(0,l.kt)("h3",{id:"state-or-condition"},"State or condition"),(0,l.kt)("p",null,"Verbs that describe a state or condition \u2013 as opposed to an ",(0,l.kt)("em",{parentName:"p"},"action")," \u2013 often cannot be used with the present continuous. Sentences such as these are incorrect or not generally accepted:"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"\ud83d\udeab ",(0,l.kt)("em",{parentName:"p"},"K\xf6tturinn ",(0,l.kt)("strong",{parentName:"em"},"er a\xf0 liggja")," \xed s\xf3fanum."),(0,l.kt)("br",null),"\ud83d\udeab ",(0,l.kt)("em",{parentName:"p"},"Gummi litli ",(0,l.kt)("strong",{parentName:"em"},"er a\xf0 sofa")," \xed v\xf6ggunni."),(0,l.kt)("br",null),"\u2753 ",(0,l.kt)("em",{parentName:"p"},"\xc9g ",(0,l.kt)("strong",{parentName:"em"},"er ekki a\xf0 b\xfaa")," \xed Reykjav\xedk."))),(0,l.kt)("p",null,"Instead, we must use the simple present:"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},(0,l.kt)("em",{parentName:"p"},"K\xf6tturinn ",(0,l.kt)("strong",{parentName:"em"},"liggur")," \xed s\xf3fanum."),(0,l.kt)("br",null),(0,l.kt)("em",{parentName:"p"},"Gummi litli ",(0,l.kt)("strong",{parentName:"em"},"sefur")," \xed v\xf6ggunni."),(0,l.kt)("br",null),(0,l.kt)("em",{parentName:"p"},"\xc9g ",(0,l.kt)("strong",{parentName:"em"},"b\xfd")," ekki \xed Reykjav\xedk."))),(0,l.kt)("p",null,"For verbs like ",(0,l.kt)("em",{parentName:"p"},"liggja"),", ",(0,l.kt)("em",{parentName:"p"},"sitja"),", ",(0,l.kt)("em",{parentName:"p"},"sofa")," and ",(0,l.kt)("em",{parentName:"p"},"standa"),", we have the option of using a ",(0,l.kt)("a",{parentName:"p",href:"present-participle"},"present participle"),":"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},(0,l.kt)("em",{parentName:"p"},"Sj\xfaklingurinn \xe1 ekki a\xf0 vera \xed sk\xf3m, hvort sem hann er ",(0,l.kt)("strong",{parentName:"em"},"sitjandi")," e\xf0a ",(0,l.kt)("strong",{parentName:"em"},"standandi"),"."))),(0,l.kt)("h3",{id:"repeated-events-and-habits"},"Repeated events and habits"),(0,l.kt)("p",null,"When an event happens repeatedly, for example a festival that takes place every year or a routine you stick to every day, the simple present is required:"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},(0,l.kt)("em",{parentName:"p"},"\xder\xfa\xf0ur ",(0,l.kt)("strong",{parentName:"em"},"fer")," alltaf \xed B\xf3nus \xe1 f\xf6stud\xf6gum.",(0,l.kt)("br",null),"Klukkan ",(0,l.kt)("strong",{parentName:"em"},"sl\xe6r")," t\xf3lf tvisvar \xe1 dag."))),(0,l.kt)("h3",{id:"future-events"},"Future events"),(0,l.kt)("p",null,"Icelandic has no future tense \u2013 just present and past. To talk about the future, you can use a number of different constructions. One of them is the simple present along with a time phrase (see ",(0,l.kt)("a",{parentName:"p",href:"future"},"Future")," for other constructions):"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},(0,l.kt)("em",{parentName:"p"},"Vi\xf0 ",(0,l.kt)("strong",{parentName:"em"},"f\xf6rum")," til Sp\xe1nar \xed n\xe6stu viku.",(0,l.kt)("br",null),"Sindri ",(0,l.kt)("strong",{parentName:"em"},"f\xe6r")," lyklana afhenta \xe1 morgun.",(0,l.kt)("br",null),"Katla ",(0,l.kt)("strong",{parentName:"em"},"g\xfds")," ekki \xe1 n\xe6stunni."))),(0,l.kt)("h2",{id:"formation"},"Formation"),(0,l.kt)("h3",{id:"weak-verbs"},"Weak verbs"),(0,l.kt)("p",null,"There are three groups of weak verbs, each forming their present tense in different ways. Note that only the singular endings differ between groups, the plural endings are the same across each group:"),(0,l.kt)("figure",null,(0,l.kt)("table",null,(0,l.kt)("tr",null,(0,l.kt)("th",null),(0,l.kt)("th",{colspan:"2"},"Person"),(0,l.kt)("th",{colspan:"2"},"Group 1",(0,l.kt)("br",null),(0,l.kt)("em",null,"a\xf0 m\xe1la")),(0,l.kt)("th",null,"Group 2",(0,l.kt)("br",null),(0,l.kt)("em",null,"a\xf0 keyra")),(0,l.kt)("th",null,"Group 3",(0,l.kt)("br",null),(0,l.kt)("em",null,"a\xf0 velja"))),(0,l.kt)("tr",null,(0,l.kt)("th",{rowspan:"3"},"Singular"),(0,l.kt)("th",null,"1st"),(0,l.kt)("td",null,(0,l.kt)("em",null,"\xe9g")),(0,l.kt)("td",null,(0,l.kt)("em",null,"m\xe1l",(0,l.kt)("strong",null,"a"))),(0,l.kt)("td",null,(0,l.kt)("em",null,"tal",(0,l.kt)("strong",null,"a"))),(0,l.kt)("td",null,(0,l.kt)("em",null,"keyr",(0,l.kt)("strong",null,"i"))),(0,l.kt)("td",null,(0,l.kt)("em",null,"vel"))),(0,l.kt)("tr",null,(0,l.kt)("th",null,"2nd"),(0,l.kt)("td",null,(0,l.kt)("em",null,"\xfe\xfa")),(0,l.kt)("td",null,(0,l.kt)("em",null,"m\xe1l",(0,l.kt)("strong",null,"ar"))),(0,l.kt)("td",null,(0,l.kt)("em",null,"tal",(0,l.kt)("strong",null,"ar"))),(0,l.kt)("td",null,(0,l.kt)("em",null,"keyr",(0,l.kt)("strong",null,"ir"))),(0,l.kt)("td",null,(0,l.kt)("em",null,"vel",(0,l.kt)("strong",null,"ur")))),(0,l.kt)("tr",null,(0,l.kt)("th",null,"3rd"),(0,l.kt)("td",null,(0,l.kt)("em",null,"hann",(0,l.kt)("br",null),"h\xfan",(0,l.kt)("br",null),"h\xe1n",(0,l.kt)("br",null),"\xfea\xf0")),(0,l.kt)("td",null,(0,l.kt)("em",null,"m\xe1l",(0,l.kt)("strong",null,"ar"))),(0,l.kt)("td",null,(0,l.kt)("em",null,"tal",(0,l.kt)("strong",null,"ar"))),(0,l.kt)("td",null,(0,l.kt)("em",null,"keyr",(0,l.kt)("strong",null,"ir"))),(0,l.kt)("td",null,(0,l.kt)("em",null,"vel",(0,l.kt)("strong",null,"ur")))),(0,l.kt)("tr",null,(0,l.kt)("th",{rowspan:"3"},"Plural"),(0,l.kt)("th",null,"1st"),(0,l.kt)("td",null,(0,l.kt)("em",null,"vi\xf0")),(0,l.kt)("td",null,(0,l.kt)("em",null,"m\xe1l",(0,l.kt)("strong",null,"um"))),(0,l.kt)("td",null,(0,l.kt)("em",null,"t",(0,l.kt)("span",{class:"ushift"},"\xf6"),"l",(0,l.kt)("strong",null,"um"))),(0,l.kt)("td",null,(0,l.kt)("em",null,"keyr",(0,l.kt)("strong",null,"um"))),(0,l.kt)("td",null,(0,l.kt)("em",null,"velj",(0,l.kt)("strong",null,"um")))),(0,l.kt)("tr",null,(0,l.kt)("th",null,"2nd"),(0,l.kt)("td",null,(0,l.kt)("em",null,"\xfei\xf0")),(0,l.kt)("td",null,(0,l.kt)("em",null,"m\xe1l",(0,l.kt)("strong",null,"i\xf0"))),(0,l.kt)("td",null,(0,l.kt)("em",null,"tal",(0,l.kt)("strong",null,"i\xf0"))),(0,l.kt)("td",null,(0,l.kt)("em",null,"keyr",(0,l.kt)("strong",null,"i\xf0"))),(0,l.kt)("td",null,(0,l.kt)("em",null,"velj",(0,l.kt)("strong",null,"i\xf0")))),(0,l.kt)("tr",null,(0,l.kt)("th",null,"3rd"),(0,l.kt)("td",null,(0,l.kt)("em",null,"\xfeeir",(0,l.kt)("br",null),"\xfe\xe6r",(0,l.kt)("br",null),"\xfeau")),(0,l.kt)("td",null,(0,l.kt)("em",null,"m\xe1l",(0,l.kt)("strong",null,"a"))),(0,l.kt)("td",null,(0,l.kt)("em",null,"tal",(0,l.kt)("strong",null,"a"))),(0,l.kt)("td",null,(0,l.kt)("em",null,"keyr",(0,l.kt)("strong",null,"a"))),(0,l.kt)("td",null,(0,l.kt)("em",null,"velj",(0,l.kt)("strong",null,"a")))))),(0,l.kt)("admonition",{type:"note"},(0,l.kt)("p",{parentName:"admonition"},"Many verbs in group 3 end in ",(0,l.kt)("em",{parentName:"p"},"\u2011","ja")," in the infinitive (",(0,l.kt)("em",{parentName:"p"},"flytja"),", ",(0,l.kt)("em",{parentName:"p"},"telja"),", ",(0,l.kt)("em",{parentName:"p"},"velja"),"). In the singular forms, this ",(0,l.kt)("em",{parentName:"p"},"j")," is dropped (",(0,l.kt)("em",{parentName:"p"},"\xe9g vel"),", ",(0,l.kt)("em",{parentName:"p"},"\xfe\xfa velur")," \u2026) but is kept in the plural (",(0,l.kt)("em",{parentName:"p"},"vi\xf0 veljum"),", ",(0,l.kt)("em",{parentName:"p"},"\xfei\xf0 velji\xf0")," and so on)."),(0,l.kt)("p",{parentName:"admonition"},"Verbs in other groups that end in ",(0,l.kt)("em",{parentName:"p"},"\u2011","ja")," in the infinitive keep the ",(0,l.kt)("em",{parentName:"p"},"j")," in all forms, for example ",(0,l.kt)("em",{parentName:"p"},"byrja")," (",(0,l.kt)("em",{parentName:"p"},"\xe9g byrja"),", ",(0,l.kt)("em",{parentName:"p"},"\xfe\xfa byrjar")," and so on).")),(0,l.kt)("admonition",{title:"U-shift",type:"info"},(0,l.kt)("p",{parentName:"admonition"},"In the first person plural (",(0,l.kt)("em",{parentName:"p"},"vi\xf0 t\xf6lum"),", ",(0,l.kt)("em",{parentName:"p"},"vi\xf0 st\xf6rum"),"), there is the possibility of a U-shift caused by the ending ",(0,l.kt)("em",{parentName:"p"},"\u2011","um"),". See ",(0,l.kt)("a",{parentName:"p",href:"../sound-changes/u-shift"},"U-shift")," for rules.")),(0,l.kt)("h3",{id:"strong-verbs"},"Strong verbs"),(0,l.kt)("p",null,"There are seven groups of strong verbs in Icelandic \u2013 however knowing which group a verb belongs to isn\u2019t necessary for forming the present tense \u2013 the same rule applies to all groups:"),(0,l.kt)("h4",{id:"singular"},"Singular"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"Find the stem of the verb by removing ",(0,l.kt)("em",{parentName:"li"},"-a")," from the infinitive. For example, ",(0,l.kt)("em",{parentName:"li"},"draga")," \u2192 ",(0,l.kt)("em",{parentName:"li"},(0,l.kt)("strong",{parentName:"em"},"drag"))),(0,l.kt)("li",{parentName:"ol"},"Apply ",(0,l.kt)("a",{parentName:"li",href:"../sound-changes/i-shift"},"I-shift")," to the vowel in the stem. For example, ",(0,l.kt)("em",{parentName:"li"},"drag")," \u2192 ",(0,l.kt)("em",{parentName:"li"},"dr",(0,l.kt)("strong",{parentName:"em"},"e"),"g")),(0,l.kt)("li",{parentName:"ol"},"For the first person, that\u2019s it! \ud83d\ude04",(0,l.kt)("br",null),"For the second and third person, there are four possible sets of endings:",(0,l.kt)("figure",null,(0,l.kt)("table",null,(0,l.kt)("tr",null,(0,l.kt)("th",{rowspan:"2"}),(0,l.kt)("th",{colspan:"8"},"If the stem ends in a\u2026")),(0,l.kt)("tr",null,(0,l.kt)("th",{colspan:"2"},"vowel"),(0,l.kt)("th",{colspan:"2"},(0,l.kt)("em",null,"-r")),(0,l.kt)("th",{colspan:"2"},(0,l.kt)("em",null,"-s")),(0,l.kt)("th",{colspan:"2"},"other consonant")),(0,l.kt)("tr",null,(0,l.kt)("th",null,"1st person"),(0,l.kt)("td",null,(0,l.kt)("em",null,"f\xe6")),(0,l.kt)("td",null,(0,l.kt)("em",null,"dey")),(0,l.kt)("td",null,(0,l.kt)("em",null,"fer")),(0,l.kt)("td",null,(0,l.kt)("em",null,"sver")),(0,l.kt)("td",null,(0,l.kt)("em",null,"k\xfds")),(0,l.kt)("td",null,(0,l.kt)("em",null,"fr\xfds")),(0,l.kt)("td",null,(0,l.kt)("em",null,"dreg")),(0,l.kt)("td",null,(0,l.kt)("em",null,"s\xfd\xf0"))),(0,l.kt)("tr",null,(0,l.kt)("th",null,"2nd person"),(0,l.kt)("td",null,(0,l.kt)("em",null,"f\xe6",(0,l.kt)("strong",null,"r"))),(0,l.kt)("td",null,(0,l.kt)("em",null,"dey",(0,l.kt)("strong",null,"r"))),(0,l.kt)("td",null,(0,l.kt)("em",null,"fer",(0,l.kt)("strong",null,"\xf0"))),(0,l.kt)("td",null,(0,l.kt)("em",null,"sver",(0,l.kt)("strong",null,"\xf0"))),(0,l.kt)("td",null,(0,l.kt)("em",null,"k\xfds",(0,l.kt)("strong",null,"t"))),(0,l.kt)("td",null,(0,l.kt)("em",null,"fr\xfds",(0,l.kt)("strong",null,"t"))),(0,l.kt)("td",null,(0,l.kt)("em",null,"dreg",(0,l.kt)("strong",null,"ur"))),(0,l.kt)("td",null,(0,l.kt)("em",null,"s\xfd\xf0",(0,l.kt)("strong",null,"ur")))),(0,l.kt)("tr",null,(0,l.kt)("th",null,"3rd person"),(0,l.kt)("td",null,(0,l.kt)("em",null,"f\xe6",(0,l.kt)("strong",null,"r"))),(0,l.kt)("td",null,(0,l.kt)("em",null,"dey",(0,l.kt)("strong",null,"r"))),(0,l.kt)("td",null,(0,l.kt)("em",null,"fer")),(0,l.kt)("td",null,(0,l.kt)("em",null,"sver")),(0,l.kt)("td",null,(0,l.kt)("em",null,"k\xfds")),(0,l.kt)("td",null,(0,l.kt)("em",null,"fr\xfds")),(0,l.kt)("td",null,(0,l.kt)("em",null,"dreg",(0,l.kt)("strong",null,"ur"))),(0,l.kt)("td",null,(0,l.kt)("em",null,"s\xfd\xf0",(0,l.kt)("strong",null,"ur")))))))),(0,l.kt)("admonition",{type:"note"},(0,l.kt)("p",{parentName:"admonition"},"If the infinitive ends in ",(0,l.kt)("em",{parentName:"p"},"-ja"),", remove the ",(0,l.kt)("em",{parentName:"p"},"j")," as well (",(0,l.kt)("em",{parentName:"p"},"deyja")," \u2192 ",(0,l.kt)("em",{parentName:"p"},"dey"),"). If the infinitive doesn\u2019t end in ",(0,l.kt)("em",{parentName:"p"},"-a"),", for example ",(0,l.kt)("em",{parentName:"p"},"f\xe1"),", then there\u2019s nothing to remove!")),(0,l.kt)("h4",{id:"plural"},"Plural"),(0,l.kt)("p",null,"Use the same set of endings as for weak verbs. There\u2019s no I-shift, but there is the possibility of a \u26a0\ufe0f U-shift (for example, ",(0,l.kt)("em",{parentName:"p"},"draga")," \u2192 ",(0,l.kt)("em",{parentName:"p"},"vi\xf0 dr",(0,l.kt)("span",{class:"ushift"},"\xf6"),"gum"),")."),(0,l.kt)("admonition",{type:"note"},(0,l.kt)("p",{parentName:"admonition"},"There\u2019s a handful of strong verbs ending in -",(0,l.kt)("em",{parentName:"p"},"va")," in the infinitive (",(0,l.kt)("em",{parentName:"p"},"s\xf6kkva"),", ",(0,l.kt)("em",{parentName:"p"},"h\xf6ggva"),"). In the singular forms, this ",(0,l.kt)("em",{parentName:"p"},"v")," is dropped (",(0,l.kt)("em",{parentName:"p"},"\xe9g sekk"),", ",(0,l.kt)("em",{parentName:"p"},"\xfe\xfa sekkur")," \u2026) but is kept in the plural (",(0,l.kt)("em",{parentName:"p"},"vi\xf0 s\xf6kkvum"),", ",(0,l.kt)("em",{parentName:"p"},"\xfei\xf0 s\xf6kkvi\xf0")," and so on).")))}d.isMDXComponent=!0}}]);