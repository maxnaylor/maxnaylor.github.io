(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{110:function(e,t,n){"use strict";n.d(t,"a",(function(){return m})),n.d(t,"b",(function(){return j}));var b=n(0),r=n.n(b);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var b=Object.getOwnPropertySymbols(e);t&&(b=b.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,b)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,b,r=function(e,t){if(null==e)return{};var n,b,r={},a=Object.keys(e);for(b=0;b<a.length;b++)n=a[b],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(b=0;b<a.length;b++)n=a[b],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=r.a.createContext({}),o=function(e){var t=r.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},m=function(e){var t=o(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},p=r.a.forwardRef((function(e,t){var n=e.components,b=e.mdxType,a=e.originalType,l=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),m=o(n),p=b,j=m["".concat(l,".").concat(p)]||m[p]||u[p]||a;return n?r.a.createElement(j,c(c({ref:t},s),{},{components:n})):r.a.createElement(j,c({ref:t},s))}));function j(e,t){var n=arguments,b=t&&t.mdxType;if("string"==typeof e||b){var a=n.length,l=new Array(a);l[0]=p;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:b,l[1]=c;for(var s=2;s<a;s++)l[s]=n[s];return r.a.createElement.apply(null,l)}return r.a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},111:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var b=n(4),r=n(0),a=n.n(r),l=n(112),c=n.n(l),i=function(e){function t(t){var n;return(n=e.call(this,t)||this).state={termWidth:""},n}Object(b.a)(t,e);var n=t.prototype;return n.componentDidMount=function(){var e=document.getElementById("term-"+this.props.term).clientWidth,t=document.getElementById("tooltip-"+this.props.term).clientWidth;this.setState({termWidth:e,tooltipWidth:t})},n.offset=function(){var e=0-this.state.tooltipWidth/2+this.state.termWidth/2+"px";return e},n.displayTerm=function(){return this.props.display?this.props.display:this.props.term},n.getIcelandicTerm=function(){var e=this;return c.a.terms.filter((function(t){return t.term.includes(e.props.term.toLowerCase())}))[0].icelandic},n.render=function(){return a.a.createElement(a.a.Fragment,null,a.a.createElement("span",{className:"term",id:"term-"+this.props.term},this.displayTerm(),a.a.createElement("span",{id:"tooltip-"+this.props.term,className:"tooltip",style:{left:this.offset()}},"\ud83c\uddee\ud83c\uddf8 ",this.getIcelandicTerm())))},t}(a.a.Component)},112:function(e,t){e.exports={terms:[,{term:"verb",icelandic:"s\xf6gn"},{term:"accusative",icelandic:"\xfeolfall"},{term:"active voice",icelandic:"germynd"},{term:"adjective",icelandic:"l\xfdsingaror\xf0"},{term:"comparative",icelandic:"mi\xf0stig"},{term:"dative",icelandic:"\xfe\xe1gufall"},{term:"definite article",icelandic:"\xe1kve\xf0inn greinir"},{term:"demonstrative pronoun",icelandic:"\xe1bendingarfornafn"},{term:"ending",icelandic:"ending"},{term:"feminine",icelandic:"kvenkyn"},{term:"first person",icelandic:"fyrsta pers\xf3na"},{term:"genitive",icelandic:"eignarfall"},{term:"indefinite pronoun",icelandic:"\xf3\xe1kve\xf0i\xf0 fornafn"},{term:"indicative",icelandic:"frams\xf6guh\xe1ttur"},{term:"imperative",icelandic:"bo\xf0h\xe1ttur"},{term:"infinitive",icelandic:"nafnh\xe1ttur"},{term:"masculine",icelandic:"karlkyn"},{term:"middle voice",icelandic:"mi\xf0mynd"},{term:"neuter",icelandic:"hvorugkyn"},{term:"nominative",icelandic:"nefnifall"},{term:"passive voice",icelandic:"\xfeolmynd"},{term:"past participle",icelandic:"l\xfdsingarh\xe1ttur \xfe\xe1t\xed\xf0ar"},{term:"past tense",icelandic:"\xfe\xe1t\xed\xf0"},{term:"personal pronoun",icelandic:"pers\xf3nufornafn"},{term:"plural",icelandic:"fleirtala"},{term:"positive",icelandic:"frumstig"},{term:"reflexive pronoun",icelandic:"afturbeygt fornafn"},{term:"possessive pronoun",icelandic:"eignarfornafn"},{term:"present participle",icelandic:"l\xfdsingarh\xe1ttur n\xfat\xed\xf0ar"},{term:"present tense",icelandic:"n\xfat\xed\xf0"},{term:"second person",icelandic:"\xf6nnur pers\xf3na"},{term:"singular",icelandic:"eintala"},{term:"stem",icelandic:"stofn"},{term:"strong",icelandic:"sterk beyging"},{term:"strong verb",icelandic:"sterk s\xf6gn"},{term:"subjunctive",icelandic:"vi\xf0tengingarh\xe1ttur"},{term:"superlative",icelandic:"efsta stig"},{term:"supine",icelandic:"sagnb\xf3t"},{term:"third person",icelandic:"\xferi\xf0ja pers\xf3na"},{term:"transitive",icelandic:"\xe1hrifss\xf6gn"},{term:"weak",icelandic:"veik beyging"}]}},80:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return o})),n.d(t,"default",(function(){return u}));var b=n(3),r=n(7),a=(n(0),n(110)),l=n(111),c=["components"],i={id:"present",title:"Present tense"},s={unversionedId:"verbs/present",id:"verbs/present",isDocsHomePage:!1,title:"Present tense",description:"Usage",source:"@site/docs/verbs/present.md",slug:"/verbs/present",permalink:"/docs/verbs/present",version:"current",sidebar:"someSidebar",previous:{title:"Introduction to verbs",permalink:"/docs/verbs/verb-intro"},next:{title:"Past tense",permalink:"/docs/verbs/past"}},o=[{value:"Usage",id:"usage",children:[{value:"Something happening now",id:"something-happening-now",children:[]},{value:"State or condition",id:"state-or-condition",children:[]},{value:"Repeated events and habits",id:"repeated-events-and-habits",children:[]},{value:"Future events",id:"future-events",children:[]}]},{value:"Formation",id:"formation",children:[{value:"Weak verbs",id:"weak-verbs",children:[]},{value:"Strong verbs",id:"strong-verbs",children:[]}]}],m={toc:o};function u(e){var t=e.components,n=Object(r.a)(e,c);return Object(a.b)("wrapper",Object(b.a)({},m,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"usage"},"Usage"),Object(a.b)("p",null,"The ",Object(a.b)(l.a,{term:"present tense",mdxType:"Term"}),", or more precisely the ",Object(a.b)("strong",{parentName:"p"},"simple present"),", is used to talk about something:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"\u2b07\ufe0f that is happening now (although the ",Object(a.b)("a",{parentName:"li",href:"continuous#present"},"present continuous")," is often used for this \u2013 start there if you\u2019re a beginner);"),Object(a.b)("li",{parentName:"ul"},"\u2b55\ufe0f that describes a state or condition;"),Object(a.b)("li",{parentName:"ul"},"\u267b\ufe0f that happens repeatedly, such as a habit or recurring event; or"),Object(a.b)("li",{parentName:"ul"},"\u23f3 that will happen in the future.")),Object(a.b)("p",null,"For example:"),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},Object(a.b)("em",{parentName:"p"},"\xc9g ",Object(a.b)("strong",{parentName:"em"},"skil"),"!",Object(a.b)("br",null),"H\xfasi\xf0 ",Object(a.b)("strong",{parentName:"em"},"stendur")," \xe1 gatnam\xf3tum Hverfisg\xf6tu og Frakkast\xedgs.",Object(a.b)("br",null),"Pabbi ",Object(a.b)("strong",{parentName:"em"},"fer")," alltaf \xed sund \xe1 laugard\xf6gum.",Object(a.b)("br",null),"N\xfdi iPhone-s\xedminn ",Object(a.b)("strong",{parentName:"em"},"kemur")," \xfat \xed n\xe6stu viku."))),Object(a.b)("h3",{id:"something-happening-now"},"Something happening now"),Object(a.b)("p",null,"You\u2019ve most probably come across the present continuous in Icelandic. This is where you use ",Object(a.b)("em",{parentName:"p"},"vera")," + ",Object(a.b)("em",{parentName:"p"},"a\xf0")," + infinitive to talk about something that\u2019s happening right now:"),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},Object(a.b)("em",{parentName:"p"},"\xde\xf3r ",Object(a.b)("strong",{parentName:"em"},"er a\xf0\xa0prj\xf3na")," trefil."),Object(a.b)("br",null),Object(a.b)("em",{parentName:"p"},"Hva\xf0 ",Object(a.b)("strong",{parentName:"em"},"ertu a\xf0 gera"),"?"))),Object(a.b)("p",null,"However, you can also use the simple present for this:"),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},Object(a.b)("em",{parentName:"p"},"\xde\xf3r ",Object(a.b)("strong",{parentName:"em"},"prj\xf3nar")," trefil."),Object(a.b)("br",null),Object(a.b)("em",{parentName:"p"},"Hva\xf0 ",Object(a.b)("strong",{parentName:"em"},"gerir\xf0u"),"?"))),Object(a.b)("p",null,"The distinction here is that the present continuous places more emphasis on the fact that the event is taking place ",Object(a.b)("em",{parentName:"p"},"right now"),". The second sentence from each example above illustrates this well:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("em",{parentName:"li"},"Hva\xf0 ertu a\xf0 gera?")," \u201cWhat are you doing (right now)?\u201d"),Object(a.b)("li",{parentName:"ul"},Object(a.b)("em",{parentName:"li"},"Hva\xf0 gerir\xf0u?")," \u201cWhat do you do (for work?)\u201d")),Object(a.b)("h3",{id:"state-or-condition"},"State or condition"),Object(a.b)("p",null,"Verbs that describe a state or condition \u2013 as opposed to an ",Object(a.b)("em",{parentName:"p"},"action")," \u2013 often cannot be used with the present continuous. Sentences such as these are incorrect or not generally accepted:"),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},"\ud83d\udeab ",Object(a.b)("em",{parentName:"p"},"K\xf6tturinn ",Object(a.b)("strong",{parentName:"em"},"er a\xf0 liggja")," \xed s\xf3fanum."),Object(a.b)("br",null),"\ud83d\udeab ",Object(a.b)("em",{parentName:"p"},"Gummi litli ",Object(a.b)("strong",{parentName:"em"},"er a\xf0 sofa")," \xed v\xf6ggunni."),Object(a.b)("br",null),"\u2753 ",Object(a.b)("em",{parentName:"p"},"\xc9g ",Object(a.b)("strong",{parentName:"em"},"er ekki a\xf0 b\xfaa")," \xed Reykjav\xedk."))),Object(a.b)("p",null,"Instead, we must use the simple present:"),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},Object(a.b)("em",{parentName:"p"},"K\xf6tturinn ",Object(a.b)("strong",{parentName:"em"},"liggur")," \xed s\xf3fanum."),Object(a.b)("br",null),Object(a.b)("em",{parentName:"p"},"Gummi litli ",Object(a.b)("strong",{parentName:"em"},"sefur")," \xed v\xf6ggunni."),Object(a.b)("br",null),Object(a.b)("em",{parentName:"p"},"\xc9g ",Object(a.b)("strong",{parentName:"em"},"b\xfd")," ekki \xed Reykjav\xedk."))),Object(a.b)("p",null,"For verbs like ",Object(a.b)("em",{parentName:"p"},"liggja"),", ",Object(a.b)("em",{parentName:"p"},"sitja"),", ",Object(a.b)("em",{parentName:"p"},"sofa")," and ",Object(a.b)("em",{parentName:"p"},"standa"),", we have the option of using a ",Object(a.b)("a",{parentName:"p",href:"present-participle"},"present participle"),":"),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},Object(a.b)("em",{parentName:"p"},"Sj\xfaklingurinn \xe1 ekki a\xf0 vera \xed sk\xf3m, hvort sem hann er ",Object(a.b)("strong",{parentName:"em"},"sitjandi")," e\xf0a ",Object(a.b)("strong",{parentName:"em"},"standandi"),"."))),Object(a.b)("h3",{id:"repeated-events-and-habits"},"Repeated events and habits"),Object(a.b)("p",null,"When an event happens repeatedly, for example a festival that takes place every year or a routine you stick to every day, the simple present is required:"),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},Object(a.b)("em",{parentName:"p"},"\xder\xfa\xf0ur ",Object(a.b)("strong",{parentName:"em"},"fer")," alltaf \xed B\xf3nus \xe1 f\xf6stud\xf6gum.",Object(a.b)("br",null),"Klukkan ",Object(a.b)("strong",{parentName:"em"},"sl\xe6r")," t\xf3lf tvisvar \xe1 dag."))),Object(a.b)("h3",{id:"future-events"},"Future events"),Object(a.b)("p",null,"Icelandic has no future tense \u2013 just present and past. To talk about the future, you can use a number of different constructions. One of them is the simple present along with a time phrase (see ",Object(a.b)("a",{parentName:"p",href:"future"},"Future")," for other constructions):"),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},Object(a.b)("em",{parentName:"p"},"Vi\xf0 ",Object(a.b)("strong",{parentName:"em"},"f\xf6rum")," til Sp\xe1nar \xed n\xe6stu viku.",Object(a.b)("br",null),"Sindri ",Object(a.b)("strong",{parentName:"em"},"f\xe6r")," lyklana afhenta \xe1 morgun.",Object(a.b)("br",null),"Katla ",Object(a.b)("strong",{parentName:"em"},"g\xfds")," ekki \xe1 n\xe6stunni."))),Object(a.b)("h2",{id:"formation"},"Formation"),Object(a.b)("h3",{id:"weak-verbs"},"Weak verbs"),Object(a.b)("p",null,"There are three groups of weak verbs, each forming their present tense in different ways. Note that only the singular endings differ between groups, the plural endings are the same across each group:"),Object(a.b)("table",null,Object(a.b)("tr",null,Object(a.b)("th",null),Object(a.b)("th",{colspan:"2"},"Person"),Object(a.b)("th",{colspan:"2"},"Group 1",Object(a.b)("br",null),Object(a.b)("em",null,"a\xf0 m\xe1la")),Object(a.b)("th",null,"Group 2",Object(a.b)("br",null),Object(a.b)("em",null,"a\xf0 keyra")),Object(a.b)("th",null,"Group 3",Object(a.b)("br",null),Object(a.b)("em",null,"a\xf0 velja"))),Object(a.b)("tr",null,Object(a.b)("th",{rowspan:"3"},"Singular"),Object(a.b)("th",null,"1st"),Object(a.b)("td",null,Object(a.b)("em",null,"\xe9g")),Object(a.b)("td",null,Object(a.b)("em",null,"m\xe1l",Object(a.b)("strong",null,"a"))),Object(a.b)("td",null,Object(a.b)("em",null,"tal",Object(a.b)("strong",null,"a"))),Object(a.b)("td",null,Object(a.b)("em",null,"keyr",Object(a.b)("strong",null,"i"))),Object(a.b)("td",null,Object(a.b)("em",null,"vel"))),Object(a.b)("tr",null,Object(a.b)("th",null,"2nd"),Object(a.b)("td",null,Object(a.b)("em",null,"\xfe\xfa")),Object(a.b)("td",null,Object(a.b)("em",null,"m\xe1l",Object(a.b)("strong",null,"ar"))),Object(a.b)("td",null,Object(a.b)("em",null,"tal",Object(a.b)("strong",null,"ar"))),Object(a.b)("td",null,Object(a.b)("em",null,"keyr",Object(a.b)("strong",null,"ir"))),Object(a.b)("td",null,Object(a.b)("em",null,"vel",Object(a.b)("strong",null,"ur")))),Object(a.b)("tr",null,Object(a.b)("th",null,"3rd"),Object(a.b)("td",null,Object(a.b)("em",null,"hann",Object(a.b)("br",null),"h\xfan",Object(a.b)("br",null),"h\xe1n",Object(a.b)("br",null),"\xfea\xf0")),Object(a.b)("td",null,Object(a.b)("em",null,"m\xe1l",Object(a.b)("strong",null,"ar"))),Object(a.b)("td",null,Object(a.b)("em",null,"tal",Object(a.b)("strong",null,"ar"))),Object(a.b)("td",null,Object(a.b)("em",null,"keyr",Object(a.b)("strong",null,"ir"))),Object(a.b)("td",null,Object(a.b)("em",null,"vel",Object(a.b)("strong",null,"ur")))),Object(a.b)("tr",null,Object(a.b)("th",{rowspan:"3"},"Plural"),Object(a.b)("th",null,"1st"),Object(a.b)("td",null,Object(a.b)("em",null,"vi\xf0")),Object(a.b)("td",null,Object(a.b)("em",null,"m\xe1l",Object(a.b)("strong",null,"um"))),Object(a.b)("td",null,Object(a.b)("em",null,"t",Object(a.b)("span",{class:"ushift"},"\xf6"),"l",Object(a.b)("strong",null,"um"))),Object(a.b)("td",null,Object(a.b)("em",null,"keyr",Object(a.b)("strong",null,"um"))),Object(a.b)("td",null,Object(a.b)("em",null,"velj",Object(a.b)("strong",null,"um")))),Object(a.b)("tr",null,Object(a.b)("th",null,"2nd"),Object(a.b)("td",null,Object(a.b)("em",null,"\xfei\xf0")),Object(a.b)("td",null,Object(a.b)("em",null,"m\xe1l",Object(a.b)("strong",null,"i\xf0"))),Object(a.b)("td",null,Object(a.b)("em",null,"tal",Object(a.b)("strong",null,"i\xf0"))),Object(a.b)("td",null,Object(a.b)("em",null,"keyr",Object(a.b)("strong",null,"i\xf0"))),Object(a.b)("td",null,Object(a.b)("em",null,"velj",Object(a.b)("strong",null,"i\xf0")))),Object(a.b)("tr",null,Object(a.b)("th",null,"3rd"),Object(a.b)("td",null,Object(a.b)("em",null,"\xfeeir",Object(a.b)("br",null),"\xfe\xe6r",Object(a.b)("br",null),"\xfeau")),Object(a.b)("td",null,Object(a.b)("em",null,"m\xe1l",Object(a.b)("strong",null,"a"))),Object(a.b)("td",null,Object(a.b)("em",null,"tal",Object(a.b)("strong",null,"a"))),Object(a.b)("td",null,Object(a.b)("em",null,"keyr",Object(a.b)("strong",null,"a"))),Object(a.b)("td",null,Object(a.b)("em",null,"velj",Object(a.b)("strong",null,"a"))))),Object(a.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(a.b)("div",{parentName:"div",className:"admonition-heading"},Object(a.b)("h5",{parentName:"div"},Object(a.b)("span",{parentName:"h5",className:"admonition-icon"},Object(a.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(a.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),Object(a.b)("div",{parentName:"div",className:"admonition-content"},Object(a.b)("p",{parentName:"div"},"Many verbs in group 3 end in ",Object(a.b)("em",{parentName:"p"},"\u2011","ja")," in the infinitive (",Object(a.b)("em",{parentName:"p"},"flytja"),", ",Object(a.b)("em",{parentName:"p"},"telja"),", ",Object(a.b)("em",{parentName:"p"},"velja"),"). In the singular forms, this ",Object(a.b)("em",{parentName:"p"},"j")," is dropped (",Object(a.b)("em",{parentName:"p"},"\xe9g vel"),", ",Object(a.b)("em",{parentName:"p"},"\xfe\xfa velur")," \u2026) but is kept in the plural (",Object(a.b)("em",{parentName:"p"},"vi\xf0 veljum"),", ",Object(a.b)("em",{parentName:"p"},"\xfei\xf0 velji\xf0")," and so on)."),Object(a.b)("p",{parentName:"div"},"Verbs in other groups that end in ",Object(a.b)("em",{parentName:"p"},"\u2011","ja")," in the infinitive keep the ",Object(a.b)("em",{parentName:"p"},"j")," in all forms, for example ",Object(a.b)("em",{parentName:"p"},"byrja")," (",Object(a.b)("em",{parentName:"p"},"\xe9g byrja"),", ",Object(a.b)("em",{parentName:"p"},"\xfe\xfa byrjar")," and so on)."))),Object(a.b)("div",{className:"admonition admonition-info alert alert--info"},Object(a.b)("div",{parentName:"div",className:"admonition-heading"},Object(a.b)("h5",{parentName:"div"},Object(a.b)("span",{parentName:"h5",className:"admonition-icon"},Object(a.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(a.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"U-shift")),Object(a.b)("div",{parentName:"div",className:"admonition-content"},Object(a.b)("p",{parentName:"div"},"In the first person plural (",Object(a.b)("em",{parentName:"p"},"vi\xf0 t\xf6lum"),", ",Object(a.b)("em",{parentName:"p"},"vi\xf0 st\xf6rum"),"), there is the possibility of a U-shift caused by the ending ",Object(a.b)("em",{parentName:"p"},"\u2011","um"),". See ",Object(a.b)("a",{parentName:"p",href:"../sound-changes/u-shift"},"U-shift")," for rules."))),Object(a.b)("h3",{id:"strong-verbs"},"Strong verbs"),Object(a.b)("p",null,"There are seven groups of strong verbs in Icelandic \u2013 however knowing which group a verb belongs to isn\u2019t necessary for forming the present tense \u2013 the same rule applies to all groups:"),Object(a.b)("h4",{id:"singular"},"Singular"),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},"Find the stem of the verb by removing ",Object(a.b)("em",{parentName:"li"},"-a")," from the infinitive. For example, ",Object(a.b)("em",{parentName:"li"},"draga")," \u2192 ",Object(a.b)("em",{parentName:"li"},Object(a.b)("strong",{parentName:"em"},"drag"))),Object(a.b)("li",{parentName:"ol"},"Apply ",Object(a.b)("a",{parentName:"li",href:"../sound-changes/i-shift"},"I-shift")," to the vowel in the stem. For example, ",Object(a.b)("em",{parentName:"li"},"drag")," \u2192 ",Object(a.b)("em",{parentName:"li"},"dr",Object(a.b)("strong",{parentName:"em"},"e"),"g")),Object(a.b)("li",{parentName:"ol"},"For the first person, that\u2019s it! \ud83d\ude04",Object(a.b)("br",null),"For the second and third person, there are four possible sets of endings:",Object(a.b)("table",null,Object(a.b)("tr",null,Object(a.b)("th",{rowspan:"2"}),Object(a.b)("th",{colspan:"8"},"If the stem ends in a\u2026")),Object(a.b)("tr",null,Object(a.b)("th",{colspan:"2"},"vowel"),Object(a.b)("th",{colspan:"2"},Object(a.b)("em",null,"-r")),Object(a.b)("th",{colspan:"2"},Object(a.b)("em",null,"-s")),Object(a.b)("th",{colspan:"2"},"other consonant")),Object(a.b)("tr",null,Object(a.b)("th",null,"1st person"),Object(a.b)("td",null,Object(a.b)("em",null,"f\xe6")),Object(a.b)("td",null,Object(a.b)("em",null,"dey")),Object(a.b)("td",null,Object(a.b)("em",null,"fer")),Object(a.b)("td",null,Object(a.b)("em",null,"sver")),Object(a.b)("td",null,Object(a.b)("em",null,"k\xfds")),Object(a.b)("td",null,Object(a.b)("em",null,"fr\xfds")),Object(a.b)("td",null,Object(a.b)("em",null,"dreg")),Object(a.b)("td",null,Object(a.b)("em",null,"s\xfd\xf0"))),Object(a.b)("tr",null,Object(a.b)("th",null,"2nd person"),Object(a.b)("td",null,Object(a.b)("em",null,"f\xe6",Object(a.b)("strong",null,"r"))),Object(a.b)("td",null,Object(a.b)("em",null,"dey",Object(a.b)("strong",null,"r"))),Object(a.b)("td",null,Object(a.b)("em",null,"fer",Object(a.b)("strong",null,"\xf0"))),Object(a.b)("td",null,Object(a.b)("em",null,"sver",Object(a.b)("strong",null,"\xf0"))),Object(a.b)("td",null,Object(a.b)("em",null,"k\xfds",Object(a.b)("strong",null,"t"))),Object(a.b)("td",null,Object(a.b)("em",null,"fr\xfds",Object(a.b)("strong",null,"t"))),Object(a.b)("td",null,Object(a.b)("em",null,"dreg",Object(a.b)("strong",null,"ur"))),Object(a.b)("td",null,Object(a.b)("em",null,"s\xfd\xf0",Object(a.b)("strong",null,"ur")))),Object(a.b)("tr",null,Object(a.b)("th",null,"3rd person"),Object(a.b)("td",null,Object(a.b)("em",null,"f\xe6",Object(a.b)("strong",null,"r"))),Object(a.b)("td",null,Object(a.b)("em",null,"dey",Object(a.b)("strong",null,"r"))),Object(a.b)("td",null,Object(a.b)("em",null,"fer")),Object(a.b)("td",null,Object(a.b)("em",null,"sver")),Object(a.b)("td",null,Object(a.b)("em",null,"k\xfds")),Object(a.b)("td",null,Object(a.b)("em",null,"fr\xfds")),Object(a.b)("td",null,Object(a.b)("em",null,"dreg",Object(a.b)("strong",null,"ur"))),Object(a.b)("td",null,Object(a.b)("em",null,"s\xfd\xf0",Object(a.b)("strong",null,"ur"))))))),Object(a.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(a.b)("div",{parentName:"div",className:"admonition-heading"},Object(a.b)("h5",{parentName:"div"},Object(a.b)("span",{parentName:"h5",className:"admonition-icon"},Object(a.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(a.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),Object(a.b)("div",{parentName:"div",className:"admonition-content"},Object(a.b)("p",{parentName:"div"},"If the infinitive ends in ",Object(a.b)("em",{parentName:"p"},"-ja"),", remove the ",Object(a.b)("em",{parentName:"p"},"j")," as well (",Object(a.b)("em",{parentName:"p"},"deyja")," \u2192 ",Object(a.b)("em",{parentName:"p"},"dey"),"). If the infinitive doesn\u2019t end in ",Object(a.b)("em",{parentName:"p"},"-a"),", for example ",Object(a.b)("em",{parentName:"p"},"f\xe1"),", then there\u2019s nothing to remove!"))),Object(a.b)("h4",{id:"plural"},"Plural"),Object(a.b)("p",null,"Use the same set of endings as for weak verbs. There\u2019s no I-shift, but there is the possibility of a \u26a0\ufe0f U-shift (for example, ",Object(a.b)("em",{parentName:"p"},"draga")," \u2192 ",Object(a.b)("em",{parentName:"p"},"vi\xf0 dr",Object(a.b)("span",{class:"ushift"},"\xf6"),"gum"),")."),Object(a.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(a.b)("div",{parentName:"div",className:"admonition-heading"},Object(a.b)("h5",{parentName:"div"},Object(a.b)("span",{parentName:"h5",className:"admonition-icon"},Object(a.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(a.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),Object(a.b)("div",{parentName:"div",className:"admonition-content"},Object(a.b)("p",{parentName:"div"},"There\u2019s a handful of strong verbs ending in -",Object(a.b)("em",{parentName:"p"},"va")," in the infinitive (",Object(a.b)("em",{parentName:"p"},"s\xf6kkva"),", ",Object(a.b)("em",{parentName:"p"},"h\xf6ggva"),"). In the singular forms, this ",Object(a.b)("em",{parentName:"p"},"v")," is dropped (",Object(a.b)("em",{parentName:"p"},"\xe9g sekk"),", ",Object(a.b)("em",{parentName:"p"},"\xfe\xfa sekkur")," \u2026) but is kept in the plural (",Object(a.b)("em",{parentName:"p"},"vi\xf0 s\xf6kkvum"),", ",Object(a.b)("em",{parentName:"p"},"\xfei\xf0 s\xf6kkvi\xf0")," and so on)."))))}u.isMDXComponent=!0}}]);