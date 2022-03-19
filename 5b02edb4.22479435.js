(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{110:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return u}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=a.a.createContext({}),m=function(e){var t=a.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},b=function(e){var t=m(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),b=m(n),d=r,u=b["".concat(c,".").concat(d)]||b[d]||p[d]||i;return n?a.a.createElement(u,l(l({ref:t},s),{},{components:n})):a.a.createElement(u,l({ref:t},s))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,c=new Array(i);c[0]=d;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l.mdxType="string"==typeof e?e:r,c[1]=l;for(var s=2;s<i;s++)c[s]=n[s];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},111:function(e,t,n){"use strict";n.d(t,"a",(function(){return l}));var r=n(0),a=n.n(r),i=n(112),c=n.n(i);class l extends a.a.Component{constructor(e){super(e),this.state={termWidth:""}}componentDidMount(){const e=document.getElementById("term-"+this.props.term).clientWidth,t=document.getElementById("tooltip-"+this.props.term).clientWidth;this.setState({termWidth:e,tooltipWidth:t})}offset(){return 0-this.state.tooltipWidth/2+this.state.termWidth/2+"px"}displayTerm(){let e;return e=this.props.display?this.props.display:this.props.term,e}getIcelandicTerm(){let e;return e=c.a.terms.filter((e=>e.term.includes(this.props.term.toLowerCase()))),e[0].icelandic}render(){return a.a.createElement(a.a.Fragment,null,a.a.createElement("span",{className:"term",id:"term-"+this.props.term},this.displayTerm(),a.a.createElement("span",{id:"tooltip-"+this.props.term,className:"tooltip",style:{left:this.offset()}},"\ud83c\uddee\ud83c\uddf8 ",this.getIcelandicTerm())))}}},112:function(e,t){e.exports={terms:[,{term:"verb",icelandic:"s\xf6gn"},{term:"accusative",icelandic:"\xfeolfall"},{term:"active voice",icelandic:"germynd"},{term:"adjective",icelandic:"l\xfdsingaror\xf0"},{term:"comparative",icelandic:"mi\xf0stig"},{term:"dative",icelandic:"\xfe\xe1gufall"},{term:"definite article",icelandic:"\xe1kve\xf0inn greinir"},{term:"demonstrative pronoun",icelandic:"\xe1bendingarfornafn"},{term:"ending",icelandic:"ending"},{term:"feminine",icelandic:"kvenkyn"},{term:"first person",icelandic:"fyrsta pers\xf3na"},{term:"genitive",icelandic:"eignarfall"},{term:"indefinite pronoun",icelandic:"\xf3\xe1kve\xf0i\xf0 fornafn"},{term:"indicative",icelandic:"frams\xf6guh\xe1ttur"},{term:"imperative",icelandic:"bo\xf0h\xe1ttur"},{term:"infinitive",icelandic:"nafnh\xe1ttur"},{term:"masculine",icelandic:"karlkyn"},{term:"middle voice",icelandic:"mi\xf0mynd"},{term:"neuter",icelandic:"hvorugkyn"},{term:"nominative",icelandic:"nefnifall"},{term:"passive voice",icelandic:"\xfeolmynd"},{term:"past participle",icelandic:"l\xfdsingarh\xe1ttur \xfe\xe1t\xed\xf0ar"},{term:"past tense",icelandic:"\xfe\xe1t\xed\xf0"},{term:"personal pronoun",icelandic:"pers\xf3nufornafn"},{term:"plural",icelandic:"fleirtala"},{term:"positive",icelandic:"frumstig"},{term:"reflexive pronoun",icelandic:"afturbeygt fornafn"},{term:"possessive pronoun",icelandic:"eignarfornafn"},{term:"present participle",icelandic:"l\xfdsingarh\xe1ttur n\xfat\xed\xf0ar"},{term:"present tense",icelandic:"n\xfat\xed\xf0"},{term:"second person",icelandic:"\xf6nnur pers\xf3na"},{term:"singular",icelandic:"eintala"},{term:"stem",icelandic:"stofn"},{term:"strong",icelandic:"sterk beyging"},{term:"strong verb",icelandic:"sterk s\xf6gn"},{term:"subjunctive",icelandic:"vi\xf0tengingarh\xe1ttur"},{term:"superlative",icelandic:"efsta stig"},{term:"supine",icelandic:"sagnb\xf3t"},{term:"third person",icelandic:"\xferi\xf0ja pers\xf3na"},{term:"transitive",icelandic:"\xe1hrifss\xf6gn"},{term:"weak",icelandic:"veik beyging"}]}},83:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return o})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return b}));var r=n(3),a=n(7),i=(n(0),n(110)),c=n(111),l={id:"noun-intro",title:"Introduction to nouns",description:"An explanation of Icelandic nouns, including gender, number, case and definiteness."},o={unversionedId:"nouns/noun-intro",id:"nouns/noun-intro",isDocsHomePage:!1,title:"Introduction to nouns",description:"An explanation of Icelandic nouns, including gender, number, case and definiteness.",source:"@site/docs/nouns/intro.md",slug:"/nouns/noun-intro",permalink:"/docs/nouns/noun-intro",version:"current",sidebar:"someSidebar",previous:{title:"Case governance",permalink:"/docs/verbs/case-governance"},next:{title:"Introduction to adjectives",permalink:"/docs/adjectives/adjective-intro"}},s=[{value:"Gender",id:"gender",children:[{value:"Identifying the gender of a noun",id:"identifying-the-gender-of-a-noun",children:[]}]},{value:"Number",id:"number",children:[]},{value:"Case",id:"case",children:[]},{value:"Definiteness",id:"definiteness",children:[]}],m={toc:s};function b(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},m,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Nouns in Icelandic are used to identify a person, place, thing or idea:"),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},Object(i.b)("em",{parentName:"p"},Object(i.b)("strong",{parentName:"em"},"Ma\xf0urinn")," syndir.",Object(i.b)("br",null),"\xc9g b\xfd \xed ",Object(i.b)("strong",{parentName:"em"},"Reykjav\xedk"),".",Object(i.b)("br",null),"Hann bor\xf0ar alla ",Object(i.b)("strong",{parentName:"em"},"k\xf6kuna"),".",Object(i.b)("br",null),"Hefur\xf0u ",Object(i.b)("strong",{parentName:"em"},"t\xedma")," til a\xf0 hj\xe1lpa m\xe9r?"))),Object(i.b)("p",null,"Nouns can be divided into two broad categories:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"Common nouns")," \u2013 that refer to generic concepts, like ",Object(i.b)("em",{parentName:"li"},"kona"),", ",Object(i.b)("em",{parentName:"li"},"b\xe6r"),", ",Object(i.b)("em",{parentName:"li"},"b\xf3k"),";"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"Proper nouns")," \u2013 that refer to specific things, like ",Object(i.b)("em",{parentName:"li"},"\xc1sd\xeds"),", ",Object(i.b)("em",{parentName:"li"},"Akureyri"),", ",Object(i.b)("em",{parentName:"li"},"Hringadrottinssaga"),".")),Object(i.b)("p",null,"Proper nouns are usually easy to spot as they\u2019re often written with a capital letter (although not always, for example months are written in lower case: ",Object(i.b)("em",{parentName:"p"},"jan\xfaar"),")."),Object(i.b)("h2",{id:"gender"},"Gender"),Object(i.b)("p",null,"All nouns in Icelandic belong to one of three ",Object(i.b)("strong",{parentName:"p"},"genders"),":"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"karlkyn")," (",Object(i.b)("em",{parentName:"li"},"kk."),") \u2013 masculine"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"kvenkyn")," (",Object(i.b)("em",{parentName:"li"},"kvk."),") \u2013 feminine"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"hvorugkyn")," (",Object(i.b)("em",{parentName:"li"},"hk."),") \u2013 neuter")),Object(i.b)("p",null,"Before we go any further, it\u2019s good to clear up exactly what we mean by \u201cgender\u201d. In strict terms, gender is simply a way of grouping together nouns that have certain grammatical properties, such as a particular ending. "),Object(i.b)("p",null,"So with this in mind, there\u2019s one golden rule to always remember:"),Object(i.b)("div",{className:"admonition admonition-caution alert alert--warning"},Object(i.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(r.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(r.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"}),Object(i.b)("path",Object(r.a)({parentName:"svg"},{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"})))),"Golden rule")),Object(i.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},"Grammatical gender does not necessarily correspond with natural gender."))),Object(i.b)("p",null,"Let\u2019s look at some examples:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("em",{parentName:"li"},"sk\xe1ld")," (hk.)"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("em",{parentName:"li"},"gr\xe6nmetis\xe6ta")," (kvk.)"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("em",{parentName:"li"},"forseti")," (kk.)")),Object(i.b)("p",null,"All of these nouns are different grammatical genders, and they can all refer to people of any gender. ",Object(i.b)("strong",{parentName:"p"},"Grammatical gender is often completely arbitrary.")," "),Object(i.b)("p",null,"However, there are a lot of gender-specific labels for people that ",Object(i.b)("em",{parentName:"p"},"do")," have some correspondence to natural gender:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Grammatically masculine words for males: ",Object(i.b)("em",{parentName:"li"},"ma\xf0ur"),", ",Object(i.b)("em",{parentName:"li"},"karl"),", ",Object(i.b)("em",{parentName:"li"},"str\xe1kur"),", ",Object(i.b)("em",{parentName:"li"},"drengur"),", ",Object(i.b)("em",{parentName:"li"},"gaur")),Object(i.b)("li",{parentName:"ul"},"Grammatically feminine words for females: ",Object(i.b)("em",{parentName:"li"},"kona"),", ",Object(i.b)("em",{parentName:"li"},"kerling"),", ",Object(i.b)("em",{parentName:"li"},"st\xfalka"),", ",Object(i.b)("em",{parentName:"li"},"stelpa"),", ",Object(i.b)("em",{parentName:"li"},"skv\xedsa"))),Object(i.b)("p",null,"Really, gender isn\u2019t the best term for labelling what are essentially just different ",Object(i.b)("em",{parentName:"p"},"classes")," of nouns. But as it\u2019s the established term, we\u2019re going to use it here."),Object(i.b)("h3",{id:"identifying-the-gender-of-a-noun"},"Identifying the gender of a noun"),Object(i.b)("p",null,"Gender is an inherit property of every noun in Icelandic. In other words, ",Object(i.b)("strong",{parentName:"p"},"every single noun falls into one of the three genders"),". So how do you know which gender a given noun belongs to?"),Object(i.b)("p",null,"In Icelandic, you often get a lot of help from the noun\u2019s ending to figure out the gender. For an explanation of these rules, see ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"gender"}),"Gender"),"."),Object(i.b)("h2",{id:"number"},"Number"),Object(i.b)("p",null,"As in English, nouns in Icelandic can be either ",Object(i.b)("strong",{parentName:"p"},Object(i.b)(c.a,{term:"singular",display:"singular",mdxType:"Term"}))," or ",Object(i.b)("strong",{parentName:"p"},Object(i.b)(c.a,{term:"plural",display:"plural",mdxType:"Term"})),"."),Object(i.b)("h2",{id:"case"},"Case"),Object(i.b)("p",null,"Icelandic nouns inflect for case."),Object(i.b)("h2",{id:"definiteness"},"Definiteness"),Object(i.b)("p",null,"In Icelandic, nouns can get the ",Object(i.b)("strong",{parentName:"p"},Object(i.b)(c.a,{term:"definite article",display:"definite article",mdxType:"Term"})),". The definite article in English is \u201cthe\u201d, and it comes ",Object(i.b)("em",{parentName:"p"},"before")," the noun. In Icelandic, it\u2019s an ending that we add to the noun."))}b.isMDXComponent=!0}}]);