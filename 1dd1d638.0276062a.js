(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{109:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return p}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var b=a.a.createContext({}),o=function(e){var t=a.a.useContext(b),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=o(e.components);return a.a.createElement(b.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,b=s(e,["components","mdxType","originalType","parentName"]),u=o(n),d=r,p=u["".concat(l,".").concat(d)]||u[d]||m[d]||i;return n?a.a.createElement(p,c(c({ref:t},b),{},{components:n})):a.a.createElement(p,c({ref:t},b))}));function p(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,l[1]=c;for(var b=2;b<i;b++)l[b]=n[b];return a.a.createElement.apply(null,l)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},110:function(e,t,n){"use strict";function r(e){var t,n,a="";if("string"==typeof e||"number"==typeof e)a+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=r(e[t]))&&(a&&(a+=" "),a+=n);else for(t in e)e[t]&&(a&&(a+=" "),a+=t);return a}t.a=function(){for(var e,t,n=0,a="";n<arguments.length;)(e=arguments[n++])&&(t=r(e))&&(a&&(a+=" "),a+=t);return a}},111:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var r=n(0),a=n.n(r),i=n(112),l=n.n(i);class c extends a.a.Component{constructor(e){super(e),this.state={termWidth:""}}componentDidMount(){const e=document.getElementById("term-"+this.props.term).clientWidth,t=document.getElementById("tooltip-"+this.props.term).clientWidth;this.setState({termWidth:e,tooltipWidth:t})}offset(){return 0-this.state.tooltipWidth/2+this.state.termWidth/2+"px"}displayTerm(){let e;return e=this.props.display?this.props.display:this.props.term,e}getIcelandicTerm(){let e;return e=l.a.terms.filter((e=>e.term.includes(this.props.term.toLowerCase()))),e[0].icelandic}render(){return a.a.createElement(a.a.Fragment,null,a.a.createElement("span",{className:"term",id:"term-"+this.props.term},this.displayTerm(),a.a.createElement("span",{id:"tooltip-"+this.props.term,className:"tooltip",style:{left:this.offset()}},"\ud83c\uddee\ud83c\uddf8 ",this.getIcelandicTerm())))}}},112:function(e,t){e.exports={terms:[,{term:"verb",icelandic:"s\xf6gn"},{term:"accusative",icelandic:"\xfeolfall"},{term:"active voice",icelandic:"germynd"},{term:"adjective",icelandic:"l\xfdsingaror\xf0"},{term:"comparative",icelandic:"mi\xf0stig"},{term:"dative",icelandic:"\xfe\xe1gufall"},{term:"demonstrative pronoun",icelandic:"\xe1bendingarfornafn"},{term:"ending",icelandic:"ending"},{term:"feminine",icelandic:"kvenkyn"},{term:"first person",icelandic:"fyrsta pers\xf3na"},{term:"genitive",icelandic:"eignarfall"},{term:"indefinite pronoun",icelandic:"\xf3\xe1kve\xf0i\xf0 fornafn"},{term:"indicative",icelandic:"frams\xf6guh\xe1ttur"},{term:"imperative",icelandic:"bo\xf0h\xe1ttur"},{term:"infinitive",icelandic:"nafnh\xe1ttur"},{term:"masculine",icelandic:"karlkyn"},{term:"middle voice",icelandic:"mi\xf0mynd"},{term:"neuter",icelandic:"hvorugkyn"},{term:"nominative",icelandic:"nefnifall"},{term:"passive voice",icelandic:"\xfeolmynd"},{term:"past participle",icelandic:"l\xfdsingarh\xe1ttur \xfe\xe1t\xed\xf0ar"},{term:"past tense",icelandic:"\xfe\xe1t\xed\xf0"},{term:"personal pronoun",icelandic:"pers\xf3nufornafn"},{term:"plural",icelandic:"fleirtala"},{term:"positive",icelandic:"frumstig"},{term:"reflexive pronoun",icelandic:"afturbeygt fornafn"},{term:"possessive pronoun",icelandic:"eignarfornafn"},{term:"present participle",icelandic:"l\xfdsingarh\xe1ttur n\xfat\xed\xf0ar"},{term:"present tense",icelandic:"n\xfat\xed\xf0"},{term:"second person",icelandic:"\xf6nnur pers\xf3na"},{term:"singular",icelandic:"eintala"},{term:"stem",icelandic:"stofn"},{term:"strong",icelandic:"sterk beyging"},{term:"strong verb",icelandic:"sterk s\xf6gn"},{term:"subjunctive",icelandic:"vi\xf0tengingarh\xe1ttur"},{term:"superlative",icelandic:"efsta stig"},{term:"supine",icelandic:"sagnb\xf3t"},{term:"third person",icelandic:"\xferi\xf0ja pers\xf3na"},{term:"transitive",icelandic:"\xe1hrifss\xf6gn"},{term:"weak",icelandic:"veik beyging"}]}},114:function(e,t,n){"use strict";var r=n(0),a=n(115);t.a=function(){const e=Object(r.useContext)(a.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},115:function(e,t,n){"use strict";var r=n(0);const a=Object(r.createContext)(void 0);t.a=a},116:function(e,t,n){"use strict";var r=n(0),a=n.n(r),i=n(114),l=n(110),c=n(55),s=n.n(c);const b=37,o=39;t.a=function(e){const{lazy:t,block:n,defaultValue:c,values:u,groupId:m,className:d}=e,{tabGroupChoices:p,setTabGroupChoices:j}=Object(i.a)(),[O,v]=Object(r.useState)(c),f=r.Children.toArray(e.children);if(null!=m){const e=p[m];null!=e&&e!==O&&u.some((t=>t.value===e))&&v(e)}const g=e=>{v(e),null!=m&&j(m,e)},h=[];return a.a.createElement("div",null,a.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(l.a)("tabs",{"tabs--block":n},d)},u.map((({value:e,label:t})=>a.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":O===e,className:Object(l.a)("tabs__item",s.a.tabItem,{"tabs__item--active":O===e}),key:e,ref:e=>h.push(e),onKeyDown:e=>{((e,t,n)=>{switch(n.keyCode){case o:((e,t)=>{const n=e.indexOf(t)+1;e[n]?e[n].focus():e[0].focus()})(e,t);break;case b:((e,t)=>{const n=e.indexOf(t)-1;e[n]?e[n].focus():e[e.length-1].focus()})(e,t)}})(h,e.target,e)},onFocus:()=>g(e),onClick:()=>{g(e)}},t)))),t?Object(r.cloneElement)(f.filter((e=>e.props.value===O))[0],{className:"margin-vert--md"}):a.a.createElement("div",{className:"margin-vert--md"},f.map(((e,t)=>Object(r.cloneElement)(e,{key:t,hidden:e.props.value!==O})))))}},117:function(e,t,n){"use strict";var r=n(3),a=n(0),i=n.n(a);t.a=function({children:e,hidden:t,className:n}){return i.a.createElement("div",Object(r.a)({role:"tabpanel"},{hidden:t,className:n}),e)}},76:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return b})),n.d(t,"default",(function(){return u}));var r=n(3),a=n(7),i=(n(0),n(109)),l=(n(116),n(117),n(111)),c={id:"superlative",title:"Superlative"},s={unversionedId:"adjectives/superlative",id:"adjectives/superlative",isDocsHomePage:!1,title:"Superlative",description:"Usage",source:"@site/docs/adjectives/superlative.md",slug:"/adjectives/superlative",permalink:"/docs/adjectives/superlative",version:"current",sidebar:"someSidebar",previous:{title:"Comparative",permalink:"/docs/adjectives/comparative"},next:{title:"Irregular comparatives and superlatives",permalink:"/docs/adjectives/irregular-comparatives-and-superlatives"}},b=[{value:"Usage",id:"usage",children:[]},{value:"Formation",id:"formation",children:[]}],o={toc:b};function u(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},o,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"usage"},"Usage"),Object(i.b)("p",null,"The ",Object(i.b)("strong",{parentName:"p"},Object(i.b)(l.a,{term:"superlative",mdxType:"Term"}))," form of an adjective in Icelandic is used to express the highest degree of a quality. It\u2019s most commonly used in the weak inflection:"),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},Object(i.b)("em",{parentName:"p"},Object(i.b)("strong",{parentName:"em"},"Sterkasti")," \xcdslendingurinn er Fjalli\xf0.",Object(i.b)("br",null),Object(i.b)("strong",{parentName:"em"},"Besti")," b\xe6rinn \xe1 \xcdslandi er Akureyri.",Object(i.b)("br",null),"Hringadr\xf3ttinsaga er ",Object(i.b)("strong",{parentName:"em"},"lengsta")," b\xf3k \xed heimi."))),Object(i.b)("p",null,"Unlike the comparative however, the superlative also has a strong inflection:"),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},Object(i.b)("em",{parentName:"p"},"Atli var ",Object(i.b)("strong",{parentName:"em"},"fyrstur")," til a\xf0 n\xe1 tindinum.",Object(i.b)("br",null),"Lilja er ",Object(i.b)("strong",{parentName:"em"},"h\xe1v\xf6xnust")," \xferiggja systkina."))),Object(i.b)("p",null,"The strong inflection of the superlative is only used as subject complement (basically, after ",Object(i.b)("em",{parentName:"p"},"vera")," and not before it). It can be followed by a qualifying phrase in the genitive case, like in the second example above (\u201cof three siblings, Lilja is tallest\u201d)."),Object(i.b)("p",null,"Like in the comparative, indeclinable adjectives are used with an the adverb instead of an ending. In this case, it\u2019s ",Object(i.b)("em",{parentName:"p"},"mest"),":"),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},Object(i.b)("em",{parentName:"p"},"\xcdsland er ",Object(i.b)("strong",{parentName:"em"},"mest spennandi")," land \xed heimi!"))),Object(i.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(i.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(r.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(r.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(i.b)("path",Object(r.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(i.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},Object(i.b)("em",{parentName:"p"},"Mest")," is only used with adjectives that are not inflected at all, such as ",Object(i.b)("em",{parentName:"p"},"hissa"),", ",Object(i.b)("em",{parentName:"p"},"samm\xe1la"),", ",Object(i.b)("em",{parentName:"p"},"hugsi")," and all adjectives that end in ",Object(i.b)("em",{parentName:"p"},"-andi"),", such as ",Object(i.b)("em",{parentName:"p"},"spennandi")," and ",Object(i.b)("em",{parentName:"p"},"\xfereytandi"),". For all other adjectives, the superlative inflection is used, regardless of how long the adjective is."))),Object(i.b)("h2",{id:"formation"},"Formation"),Object(i.b)("p",null,"The superlative is much more regular than the ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"comparative#formation"}),"comparative"),". Unless the adjective gets a ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"irregular-comparatives-and-superlatives"}),"vowel change or is irregular")," in the comparative, the comparative ending will be ",Object(i.b)("em",{parentName:"p"},"-astur"),":"),Object(i.b)("table",null,Object(i.b)("thead",null,Object(i.b)("tr",null,Object(i.b)("th",{colspan:"2"}),Object(i.b)("th",{width:"35%"},"Comparative"),Object(i.b)("th",{width:"35%"},"Superlative"))),Object(i.b)("tbody",null,Object(i.b)("tr",null,Object(i.b)("td",null,Object(i.b)("em",null,"sterkur",Object(i.b)("br",null),"au\xf0veldur")),Object(i.b)("td",{rowspan:"6",align:"center",width:"5%"},"\u2192"),Object(i.b)("td",null,Object(i.b)("em",null,"sterkari",Object(i.b)("br",null),"au\xf0veldari")),Object(i.b)("td",null,Object(i.b)("em",null,"sterk",Object(i.b)("strong",null,"astur"),Object(i.b)("br",null),"au\xf0veld",Object(i.b)("strong",null,"astur")))),Object(i.b)("tr",null,Object(i.b)("td",null,Object(i.b)("em",null,"d\xfdr",Object(i.b)("br",null),"laus")),Object(i.b)("td",null,Object(i.b)("em",null,"d\xfdrari",Object(i.b)("br",null),"lausari")),Object(i.b)("td",null,Object(i.b)("em",null,"d\xfdr",Object(i.b)("strong",null,"astur"),Object(i.b)("br",null),"laus",Object(i.b)("strong",null,"astur")))),Object(i.b)("tr",null,Object(i.b)("td",null,Object(i.b)("em",null,"h\xe1vaxinn")),Object(i.b)("td",null,Object(i.b)("em",null,"h\xe1vaxnari")),Object(i.b)("td",null,Object(i.b)("em",null,"h\xe1vaxn",Object(i.b)("strong",null,"astur")))),Object(i.b)("tr",null,Object(i.b)("td",null,Object(i.b)("em",null,"skemmtilegur",Object(i.b)("br",null),"au\xf0ugur")),Object(i.b)("td",null,Object(i.b)("em",null,"skemmtilegri",Object(i.b)("br",null),"au\xf0ugri")),Object(i.b)("td",null,Object(i.b)("em",null,"skemmtileg",Object(i.b)("strong",null,"astur"),Object(i.b)("br",null),"au\xf0ug",Object(i.b)("strong",null,"astur")))),Object(i.b)("tr",null,Object(i.b)("td",null,Object(i.b)("em",null,"vins\xe6ll",Object(i.b)("br",null),"br\xfann")),Object(i.b)("td",null,Object(i.b)("em",null,"vins\xe6lli",Object(i.b)("br",null),"br\xfanni")),Object(i.b)("td",null,Object(i.b)("em",null,"vins\xe6l",Object(i.b)("strong",null,"astur"),Object(i.b)("br",null),"br\xfan",Object(i.b)("strong",null,"astur")))),Object(i.b)("tr",null,Object(i.b)("td",null,Object(i.b)("em",null,"gr\xe1r")),Object(i.b)("td",null,Object(i.b)("em",null,"gr\xe1rri")),Object(i.b)("td",null,Object(i.b)("em",null,"gr\xe1",Object(i.b)("strong",null,"astur")))))),Object(i.b)("p",null,"Once you\u2019ve found the superlative form, you then inflect it like any adjective ending in ",Object(i.b)("em",{parentName:"p"},"-ur"),":"))}u.isMDXComponent=!0}}]);