(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{110:function(e,t,a){"use strict";a.d(t,"a",(function(){return o})),a.d(t,"b",(function(){return u}));var n=a(0),r=a.n(n);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function b(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?b(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):b(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function m(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=r.a.createContext({}),p=function(e){var t=r.a.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):c(c({},t),e)),a},o=function(e){var t=p(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,b=e.parentName,l=m(e,["components","mdxType","originalType","parentName"]),o=p(a),d=n,u=o["".concat(b,".").concat(d)]||o[d]||s[d]||i;return a?r.a.createElement(u,c(c({ref:t},l),{},{components:a})):r.a.createElement(u,c({ref:t},l))}));function u(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,b=new Array(i);b[0]=d;var c={};for(var m in t)hasOwnProperty.call(t,m)&&(c[m]=t[m]);c.originalType=e,c.mdxType="string"==typeof e?e:n,b[1]=c;for(var l=2;l<i;l++)b[l]=a[l];return r.a.createElement.apply(null,b)}return r.a.createElement.apply(null,a)}d.displayName="MDXCreateElement"},111:function(e,t,a){"use strict";a.d(t,"a",(function(){return m}));var n=a(4),r=a(0),i=a.n(r),b=a(112),c=a.n(b),m=function(e){function t(t){var a;return(a=e.call(this,t)||this).state={termWidth:""},a}Object(n.a)(t,e);var a=t.prototype;return a.componentDidMount=function(){var e=document.getElementById("term-"+this.props.term).clientWidth,t=document.getElementById("tooltip-"+this.props.term).clientWidth;this.setState({termWidth:e,tooltipWidth:t})},a.offset=function(){var e=0-this.state.tooltipWidth/2+this.state.termWidth/2+"px";return e},a.displayTerm=function(){return this.props.display?this.props.display:this.props.term},a.getIcelandicTerm=function(){var e=this;return c.a.terms.filter((function(t){return t.term.includes(e.props.term.toLowerCase())}))[0].icelandic},a.render=function(){return i.a.createElement(i.a.Fragment,null,i.a.createElement("span",{className:"term",id:"term-"+this.props.term},this.displayTerm(),i.a.createElement("span",{id:"tooltip-"+this.props.term,className:"tooltip",style:{left:this.offset()}},"\ud83c\uddee\ud83c\uddf8 ",this.getIcelandicTerm())))},t}(i.a.Component)},112:function(e,t){e.exports={terms:[,{term:"verb",icelandic:"s\xf6gn"},{term:"accusative",icelandic:"\xfeolfall"},{term:"active voice",icelandic:"germynd"},{term:"adjective",icelandic:"l\xfdsingaror\xf0"},{term:"comparative",icelandic:"mi\xf0stig"},{term:"dative",icelandic:"\xfe\xe1gufall"},{term:"definite article",icelandic:"\xe1kve\xf0inn greinir"},{term:"demonstrative pronoun",icelandic:"\xe1bendingarfornafn"},{term:"ending",icelandic:"ending"},{term:"feminine",icelandic:"kvenkyn"},{term:"first person",icelandic:"fyrsta pers\xf3na"},{term:"genitive",icelandic:"eignarfall"},{term:"indefinite pronoun",icelandic:"\xf3\xe1kve\xf0i\xf0 fornafn"},{term:"indicative",icelandic:"frams\xf6guh\xe1ttur"},{term:"imperative",icelandic:"bo\xf0h\xe1ttur"},{term:"infinitive",icelandic:"nafnh\xe1ttur"},{term:"masculine",icelandic:"karlkyn"},{term:"middle voice",icelandic:"mi\xf0mynd"},{term:"neuter",icelandic:"hvorugkyn"},{term:"nominative",icelandic:"nefnifall"},{term:"passive voice",icelandic:"\xfeolmynd"},{term:"past participle",icelandic:"l\xfdsingarh\xe1ttur \xfe\xe1t\xed\xf0ar"},{term:"past tense",icelandic:"\xfe\xe1t\xed\xf0"},{term:"personal pronoun",icelandic:"pers\xf3nufornafn"},{term:"plural",icelandic:"fleirtala"},{term:"positive",icelandic:"frumstig"},{term:"reflexive pronoun",icelandic:"afturbeygt fornafn"},{term:"possessive pronoun",icelandic:"eignarfornafn"},{term:"present participle",icelandic:"l\xfdsingarh\xe1ttur n\xfat\xed\xf0ar"},{term:"present tense",icelandic:"n\xfat\xed\xf0"},{term:"second person",icelandic:"\xf6nnur pers\xf3na"},{term:"singular",icelandic:"eintala"},{term:"stem",icelandic:"stofn"},{term:"strong",icelandic:"sterk beyging"},{term:"strong verb",icelandic:"sterk s\xf6gn"},{term:"subjunctive",icelandic:"vi\xf0tengingarh\xe1ttur"},{term:"superlative",icelandic:"efsta stig"},{term:"supine",icelandic:"sagnb\xf3t"},{term:"third person",icelandic:"\xferi\xf0ja pers\xf3na"},{term:"transitive",icelandic:"\xe1hrifss\xf6gn"},{term:"weak",icelandic:"veik beyging"}]}},90:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return m})),a.d(t,"metadata",(function(){return l})),a.d(t,"toc",(function(){return p})),a.d(t,"default",(function(){return s}));var n=a(3),r=a(7),i=(a(0),a(110)),b=a(111),c=["components"],m={id:"verb-intro",title:"Introduction to verbs",description:"An explanation of Icelandic verbs, including tense, person, number, mood and voice."},l={unversionedId:"verbs/verb-intro",id:"verbs/verb-intro",isDocsHomePage:!1,title:"Introduction to verbs",description:"An explanation of Icelandic verbs, including tense, person, number, mood and voice.",source:"@site/docs/verbs/intro.md",slug:"/verbs/verb-intro",permalink:"/docs/verbs/verb-intro",version:"current",sidebar:"someSidebar",previous:{title:"How to use this reference",permalink:"/docs/"},next:{title:"Present tense",permalink:"/docs/verbs/present"}},p=[{value:"Inflection",id:"inflection",children:[{value:"Tense",id:"tense",children:[]},{value:"Person and number",id:"person-and-number",children:[]},{value:"Mood",id:"mood",children:[]},{value:"Voice",id:"voice",children:[]}]}],o={toc:p};function s(e){var t=e.components,a=Object(r.a)(e,c);return Object(i.b)("wrapper",Object(n.a)({},o,a,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Verbs are the core of a sentence in Icelandic. In other words, Icelandic sentences almost always are built around a ",Object(i.b)(b.a,{term:"verb",mdxType:"Term"}),":"),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},Object(i.b)("em",{parentName:"p"},"Hva\xf0 ",Object(i.b)("strong",{parentName:"em"},"heitir")," \xfe\xfa?",Object(i.b)("br",null),"K\xf6tturinn ",Object(i.b)("strong",{parentName:"em"},"skr\xed\xf0ur")," undir bor\xf0inu.",Object(i.b)("br",null),"M\xe6lst ",Object(i.b)("strong",{parentName:"em"},"er")," til \xfeess a\xf0 gestir yfirgefi laugina 10 m\xedn\xfatum eftir lokun."))),Object(i.b)("p",null,"A sentence can even consist of a lone verb:"),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},Object(i.b)("em",{parentName:"p"},Object(i.b)("strong",{parentName:"em"},"Rignir"),"?"))),Object(i.b)("h2",{id:"inflection"},"Inflection"),Object(i.b)("p",null,"Icelandic verbs inflect (change their endings) for:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"#tense"},"Tense")," (",Object(i.b)(b.a,{term:"present tense",display:"present",mdxType:"Term"}),", ",Object(i.b)(b.a,{term:"past tense",display:"past",mdxType:"Term"}),")"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"#person-and-number"},"Person and number")," (",Object(i.b)(b.a,{term:"first person",display:"first",mdxType:"Term"}),", ",Object(i.b)(b.a,{term:"second person",display:"second",mdxType:"Term"}),", ",Object(i.b)(b.a,{term:"third person",display:"third",mdxType:"Term"}),"; ",Object(i.b)(b.a,{term:"singular",mdxType:"Term"}),", ",Object(i.b)(b.a,{term:"plural",mdxType:"Term"}),")"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"#mood"},"Mood")," (",Object(i.b)(b.a,{term:"indicative",mdxType:"Term"}),", ",Object(i.b)(b.a,{term:"subjunctive",mdxType:"Term"}),")"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"#voice"},"Voice")," (",Object(i.b)(b.a,{term:"active voice",display:"active",mdxType:"Term"}),", ",Object(i.b)(b.a,{term:"middle voice",display:"middle/mediopassive",mdxType:"Term"}),")")),Object(i.b)("p",null,"In addition to these various forms, verbs also have:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},Object(i.b)(b.a,{term:"Infinitive",mdxType:"Term"}))," \u2013 The form you\u2019ll find in the dictionary. Most end in ",Object(i.b)("em",{parentName:"li"},"-a")," (",Object(i.b)("em",{parentName:"li"},"tala"),", ",Object(i.b)("em",{parentName:"li"},"sofa"),", ",Object(i.b)("em",{parentName:"li"},"gala"),"), but there is also a small group ending in ",Object(i.b)("em",{parentName:"li"},"-\xe1")," (",Object(i.b)("em",{parentName:"li"},"f\xe1"),", ",Object(i.b)("em",{parentName:"li"},"g\xe1"),", ",Object(i.b)("em",{parentName:"li"},"sp\xe1"),"). One ends in ",Object(i.b)("em",{parentName:"li"},"-o")," (",Object(i.b)("em",{parentName:"li"},"\xfevo"),") and two end in ",Object(i.b)("em",{parentName:"li"},"-u")," (",Object(i.b)("em",{parentName:"li"},"munu"),", ",Object(i.b)("em",{parentName:"li"},"skulu"),"). The particle ",Object(i.b)("em",{parentName:"li"},"a\xf0")," is often used before the infinitive \u2013 this depends on the context."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},Object(i.b)(b.a,{term:"Present participle",mdxType:"Term"}))," \u2013 Always ends in ",Object(i.b)("em",{parentName:"li"},"-andi"),". The present participle is rarely used as a true verb (",Object(i.b)("em",{parentName:"li"},"barni\xf0 er ",Object(i.b)("strong",{parentName:"em"},"sofandi")," \xed v\xf6ggunni"),") \u2013 it appears more frequently as an adjective or adverb (for example, ",Object(i.b)("em",{parentName:"li"},"\xe9g fer ",Object(i.b)("strong",{parentName:"em"},"hj\xf3landi")," \xed vinnu"),")."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},Object(i.b)(b.a,{term:"Supine",mdxType:"Term"}))," \u2013 Used after ",Object(i.b)("em",{parentName:"li"},"hafa")," or ",Object(i.b)("em",{parentName:"li"},"vera")," to form the perfect (for example, ",Object(i.b)("em",{parentName:"li"},"\xe9g hef ",Object(i.b)("strong",{parentName:"em"},"fari\xf0")," til Grikklands"),"). All verbs except ",Object(i.b)("em",{parentName:"li"},"munu")," and ",Object(i.b)("em",{parentName:"li"},"skulu")," have a supine form. The supine is identical to the neuter form of the past participle, but not all verbs have a past participle. For rules on forming the supine, see ",Object(i.b)("a",{parentName:"li",href:"past-participle"},"Past participle"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},Object(i.b)(b.a,{term:"Imperative",mdxType:"Term"}))," \u2013 Used to give a command or instruction. The imperative has three forms: singular (",Object(i.b)("em",{parentName:"li"},"komdu"),"), plural (",Object(i.b)("em",{parentName:"li"},"komi\xf0"),") and bare (",Object(i.b)("em",{parentName:"li"},"far"),", used very rarely). See ",Object(i.b)("a",{parentName:"li",href:"imperative"},"Imperative")," for rules.")),Object(i.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(i.b)("div",{parentName:"div",className:"admonition-heading"},Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",{parentName:"h5",className:"admonition-icon"},Object(i.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},Object(i.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),Object(i.b)("div",{parentName:"div",className:"admonition-content"},Object(i.b)("p",{parentName:"div"},"If you\u2019re familiar with grammatical terms such as ",Object(i.b)("em",{parentName:"p"},"present tense"),", ",Object(i.b)("em",{parentName:"p"},"third person")," and ",Object(i.b)("em",{parentName:"p"},"subjunctive"),", you can skip the rest of this page."))),Object(i.b)("h3",{id:"tense"},"Tense"),Object(i.b)("p",null,"Icelandic verbs have two true tenses: ",Object(i.b)("strong",{parentName:"p"},Object(i.b)(b.a,{term:"present tense",display:"present",mdxType:"Term"}))," and ",Object(i.b)("strong",{parentName:"p"},Object(i.b)(b.a,{term:"past tense",display:"past",mdxType:"Term"})),". These are the only tenses that are indicated with endings. Some grammar guides include \u201ctenses\u201d constructed with modal verbs like ",Object(i.b)("em",{parentName:"p"},"munu")," or ",Object(i.b)("em",{parentName:"p"},"hafa"),", but strictly speaking these are not tenses and are therefore not included here. See ",Object(i.b)("a",{parentName:"p",href:"modal-verbs"},"Modal verbs")," for a discussion of these."),Object(i.b)("p",null,"Different verb groups form tenses in different ways. For example:"),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",{parentName:"tr",align:null},"Infinitive"),Object(i.b)("th",{parentName:"tr",align:null},"Present"),Object(i.b)("th",{parentName:"tr",align:null},"Past"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},Object(i.b)("em",{parentName:"td"},"a\xf0 tala")),Object(i.b)("td",{parentName:"tr",align:null},Object(i.b)("em",{parentName:"td"},"\xe9g ",Object(i.b)("strong",{parentName:"em"},"tala"))),Object(i.b)("td",{parentName:"tr",align:null},Object(i.b)("em",{parentName:"td"},"\xe9g ",Object(i.b)("strong",{parentName:"em"},"tala\xf0i")))),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},Object(i.b)("em",{parentName:"td"},"a\xf0 keyra")),Object(i.b)("td",{parentName:"tr",align:null},Object(i.b)("em",{parentName:"td"},"\xe9g ",Object(i.b)("strong",{parentName:"em"},"keyri"))),Object(i.b)("td",{parentName:"tr",align:null},Object(i.b)("em",{parentName:"td"},"\xe9g ",Object(i.b)("strong",{parentName:"em"},"keyr\xf0i")))),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},Object(i.b)("em",{parentName:"td"},"a\xf0 velja")),Object(i.b)("td",{parentName:"tr",align:null},Object(i.b)("em",{parentName:"td"},"\xe9g ",Object(i.b)("strong",{parentName:"em"},"vel"))),Object(i.b)("td",{parentName:"tr",align:null},Object(i.b)("em",{parentName:"td"},"\xe9g ",Object(i.b)("strong",{parentName:"em"},"valdi")))))),Object(i.b)("p",null,"The verbs in this table are all ",Object(i.b)("em",{parentName:"p"},"weak"),". We can tell this because they form their past tense with a ",Object(i.b)("em",{parentName:"p"},"dental suffix"),". All this means is that they add an ending containing a dental consonant, one of ",Object(i.b)("em",{parentName:"p"},"d"),", ",Object(i.b)("em",{parentName:"p"},"\xf0")," or ",Object(i.b)("em",{parentName:"p"},"t"),", in the past tense."),Object(i.b)("p",null,"Other verbs form their past tense using a vowel change known as ",Object(i.b)("em",{parentName:"p"},"umlaut"),". These are called ",Object(i.b)("em",{parentName:"p"},"strong")," verbs."),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",{parentName:"tr",align:null},"Infinitive"),Object(i.b)("th",{parentName:"tr",align:null},"Present"),Object(i.b)("th",{parentName:"tr",align:null},"Past"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},Object(i.b)("em",{parentName:"td"},"a\xf0 b\xedta")),Object(i.b)("td",{parentName:"tr",align:null},Object(i.b)("em",{parentName:"td"},"\xe9g ",Object(i.b)("strong",{parentName:"em"},"b\xedt"))),Object(i.b)("td",{parentName:"tr",align:null},Object(i.b)("em",{parentName:"td"},"\xe9g ",Object(i.b)("strong",{parentName:"em"},"beit")))),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},Object(i.b)("em",{parentName:"td"},"a\xf0 bj\xf3\xf0a")),Object(i.b)("td",{parentName:"tr",align:null},Object(i.b)("em",{parentName:"td"},"\xe9g ",Object(i.b)("strong",{parentName:"em"},"b\xfd\xf0"))),Object(i.b)("td",{parentName:"tr",align:null},Object(i.b)("em",{parentName:"td"},"\xe9g ",Object(i.b)("strong",{parentName:"em"},"bau\xf0")))),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},Object(i.b)("em",{parentName:"td"},"a\xf0 detta")),Object(i.b)("td",{parentName:"tr",align:null},Object(i.b)("em",{parentName:"td"},"\xe9g ",Object(i.b)("strong",{parentName:"em"},"dett"))),Object(i.b)("td",{parentName:"tr",align:null},Object(i.b)("em",{parentName:"td"},"\xe9g ",Object(i.b)("strong",{parentName:"em"},"datt")))))),Object(i.b)("h3",{id:"person-and-number"},"Person and number"),Object(i.b)("p",null,"Icelandic verbs have three persons, each of which has various singular and plural forms:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"First")," \u2013 singular: the ",Object(i.b)("em",{parentName:"li"},"\xe9g")," form; plural: the ",Object(i.b)("em",{parentName:"li"},"vi\xf0")," form"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"Second")," \u2013 singular: the ",Object(i.b)("em",{parentName:"li"},"\xfe\xfa")," form; plural: the ",Object(i.b)("em",{parentName:"li"},"\xfei\xf0")," form"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"Third")," \u2013 singular: the ",Object(i.b)("em",{parentName:"li"},"hann/h\xfan/h\xe1n/\xfea\xf0")," form; plural: the ",Object(i.b)("em",{parentName:"li"},"\xfeeir/\xfe\xe6r/\xfeau")," form")),Object(i.b)("p",null,"For a discussion on how to use these various pronouns, see ",Object(i.b)("a",{parentName:"p",href:"pronouns/personal"},"Personal pronouns"),"."),Object(i.b)("p",null,"This means there are six possible endings to reflect the various combinations of person and number:"),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",{parentName:"tr",align:null},"Person"),Object(i.b)("th",{parentName:"tr",align:null},"Singular"),Object(i.b)("th",{parentName:"tr",align:null},"Plural"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"1st"),Object(i.b)("td",{parentName:"tr",align:null},Object(i.b)("em",{parentName:"td"},"\xe9g prj\xf3n",Object(i.b)("strong",{parentName:"em"},"a"))),Object(i.b)("td",{parentName:"tr",align:null},Object(i.b)("em",{parentName:"td"},"vi\xf0 prj\xf3n",Object(i.b)("strong",{parentName:"em"},"um")))),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"2nd"),Object(i.b)("td",{parentName:"tr",align:null},Object(i.b)("em",{parentName:"td"},"\xfe\xfa prj\xf3n",Object(i.b)("strong",{parentName:"em"},"ar"))),Object(i.b)("td",{parentName:"tr",align:null},Object(i.b)("em",{parentName:"td"},"\xfei\xf0 prj\xf3n",Object(i.b)("strong",{parentName:"em"},"i\xf0")))),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"3rd"),Object(i.b)("td",{parentName:"tr",align:null},Object(i.b)("em",{parentName:"td"},"h\xfan prj\xf3n",Object(i.b)("strong",{parentName:"em"},"ar"))),Object(i.b)("td",{parentName:"tr",align:null},Object(i.b)("em",{parentName:"td"},"\xfe\xe6r prj\xf3n",Object(i.b)("strong",{parentName:"em"},"a")))))),Object(i.b)("p",null,"The endings above are for ",Object(i.b)("a",{parentName:"p",href:"present#weak-verbs"},"group 1 weak verbs"),". Taken together these form a ",Object(i.b)("em",{parentName:"p"},"paradigm"),". Other verb groups have different paradigms."),Object(i.b)("p",null,"Within each group, there are different paradigms for the different tenses and voices. See the pages on weak and strong verbs for an explanation of these."),Object(i.b)("h3",{id:"mood"},"Mood"),Object(i.b)("p",null,"Icelandic verbs have two moods: ",Object(i.b)("strong",{parentName:"p"},Object(i.b)(b.a,{term:"indicative",mdxType:"Term"}))," and ",Object(i.b)("strong",{parentName:"p"},Object(i.b)(b.a,{term:"subjunctive",mdxType:"Term"})),". \u201cMood\u201d is a grammatical term and has nothing to do with the emotions of the speaker."),Object(i.b)("p",null,"Within each mood, there are present and past tense paradigms."),Object(i.b)("h4",{id:"indicative"},"Indicative"),Object(i.b)("p",null,"The indicative is the default mood and the one you learn first. It\u2019s used for factual statements:"),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},Object(i.b)("em",{parentName:"p"},"\xdea\xf0 ",Object(i.b)("strong",{parentName:"em"},"eru")," margar kindur uppi \xed sveit.",Object(i.b)("br",null),"Lilja ",Object(i.b)("strong",{parentName:"em"},"\xe6tlar")," a\xf0 fara \xed sund \xe1 morgun.",Object(i.b)("br",null),"Fer\xf0amenn ",Object(i.b)("strong",{parentName:"em"},"hata")," h\xe1karl."))),Object(i.b)("h4",{id:"subjunctive"},"Subjunctive"),Object(i.b)("p",null,"The subjunctive is used to indicate some kind of hypothetical situation, thought, belief, wish, desire, hope or obligation:"),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},Object(i.b)("em",{parentName:"p"},"\xdea\xf0 ",Object(i.b)("strong",{parentName:"em"},"v\xe6ri")," betra ef \xfea\xf0 rigndi ekki.",Object(i.b)("br",null),"Krakkarnir halda a\xf0 mamma ",Object(i.b)("strong",{parentName:"em"},"komi")," heim \xed fyrram\xe1li\xf0.",Object(i.b)("br",null),"\xc9g \xf3ska \xfeess a\xf0 hann ",Object(i.b)("strong",{parentName:"em"},"v\xe6ri")," enn \xe1 l\xedfi.",Object(i.b)("br",null),"Mikilv\xe6gt er a\xf0 gluggarnir ",Object(i.b)("strong",{parentName:"em"},"s\xe9u")," loka\xf0ir."))),Object(i.b)("p",null,"For a full discussion, see ",Object(i.b)("a",{parentName:"p",href:"subjunctive"},"Subjunctive"),"."),Object(i.b)("h3",{id:"voice"},"Voice"),Object(i.b)("p",null,"Icelandic verbs have two voices that are marked with inflection: ",Object(i.b)("strong",{parentName:"p"},Object(i.b)(b.a,{term:"active voice",display:"active",mdxType:"Term"}))," and ",Object(i.b)("strong",{parentName:"p"},Object(i.b)(b.a,{term:"middle voice",display:"middle",mdxType:"Term"}))," (also known as ",Object(i.b)("em",{parentName:"p"},"mediopassive"),"). The middle voice is a unique feature of the language."),Object(i.b)("p",null,"The active voice is the default voice."),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},Object(i.b)("em",{parentName:"p"},"Brynd\xeds ",Object(i.b)("strong",{parentName:"em"},"kaupir")," n\xfdtt h\xfas"),".")),Object(i.b)("p",null,"Icelandic also has a passive voice, but this is formed using ",Object(i.b)("em",{parentName:"p"},"vera")," and a past participle, rather than a simple ending. See ",Object(i.b)("a",{parentName:"p",href:"#verbs/passive"},"Passive voice")," for an explanation."),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},Object(i.b)("em",{parentName:"p"},"N\xfdtt h\xfas ",Object(i.b)("strong",{parentName:"em"},"var keypt"),"."))),Object(i.b)("h4",{id:"middle"},"Middle"),Object(i.b)("p",null,"The middle voice has a number of functions. It can mark reciprocity (mutual action), reflexivity (something performing an action on itself) or be used instead of the ",Object(i.b)("a",{parentName:"p",href:"passive-voice"},"passive voice"),". Some verbs have a different meaning altogether in the middle voice. Others exist ",Object(i.b)("em",{parentName:"p"},"only")," in the middle voice."),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},Object(i.b)("em",{parentName:"p"},"Vi\xf0 ",Object(i.b)("strong",{parentName:"em"},"sj\xe1umst")," \xed n\xe6stu viku!",Object(i.b)("br",null),"Herma\xf0urinn ",Object(i.b)("strong",{parentName:"em"},"meiddist")," \xed str\xed\xf0inu.",Object(i.b)("br",null),"Refurinn ",Object(i.b)("strong",{parentName:"em"},"s\xe9st")," ekki \xed myrkrinu.",Object(i.b)("br",null),"M\xe9r ",Object(i.b)("strong",{parentName:"em"},"finnst")," b\xf3kin skemmtileg.",Object(i.b)("br",null),"Bartosz og Pawe\u0142 ",Object(i.b)("strong",{parentName:"em"},"fer\xf0u\xf0ust")," um allt landi\xf0."))),Object(i.b)("p",null,"All middle voice forms end in ",Object(i.b)("em",{parentName:"p"},"-st"),", which makes them easily identifiable."),Object(i.b)("p",null,"For more on forming the middle voice and using it, see ",Object(i.b)("a",{parentName:"p",href:"middle-voice"},"Middle voice"),"."))}s.isMDXComponent=!0}}]);