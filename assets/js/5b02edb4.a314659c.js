(self.webpackChunkgramref=self.webpackChunkgramref||[]).push([[4484],{3905:function(e,n,t){"use strict";t.d(n,{Zo:function(){return m},kt:function(){return d}});var r=t(7294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var s=r.createContext({}),c=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},m=function(e){var n=c(e.components);return r.createElement(s.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},u=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),u=c(t),d=i,f=u["".concat(s,".").concat(d)]||u[d]||p[d]||a;return t?r.createElement(f,o(o({ref:n},m),{},{components:t})):r.createElement(f,o({ref:n},m))}));function d(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var a=t.length,o=new Array(a);o[0]=u;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var c=2;c<a;c++)o[c]=t[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}u.displayName="MDXCreateElement"},1333:function(e,n,t){"use strict";t.d(n,{R:function(){return l}});var r=t(4578),i=t(7294),a=t(4052),o=t.n(a),l=function(e){function n(n){var t;return(t=e.call(this,n)||this).state={termWidth:""},t}(0,r.Z)(n,e);var t=n.prototype;return t.componentDidMount=function(){var e=document.getElementById("term-"+this.props.term).clientWidth,n=document.getElementById("tooltip-"+this.props.term).clientWidth;this.setState({termWidth:e,tooltipWidth:n})},t.offset=function(){var e=0-this.state.tooltipWidth/2+this.state.termWidth/2+"px";return e},t.displayTerm=function(){return this.props.display?this.props.display:this.props.term},t.getIcelandicTerm=function(){var e=this;return o().terms.filter((function(n){return n.term.includes(e.props.term.toLowerCase())}))[0].icelandic},t.render=function(){return i.createElement(i.Fragment,null,i.createElement("span",{className:"term",id:"term-"+this.props.term},this.displayTerm(),i.createElement("span",{id:"tooltip-"+this.props.term,className:"tooltip",style:{left:this.offset()}},"\ud83c\uddee\ud83c\uddf8 ",this.getIcelandicTerm())))},n}(i.Component)},4052:function(e){e.exports={terms:[,{term:"verb",icelandic:"s\xf6gn"},{term:"accusative",icelandic:"\xfeolfall"},{term:"active voice",icelandic:"germynd"},{term:"adjective",icelandic:"l\xfdsingaror\xf0"},{term:"case",icelandic:"fall"},{term:"comparative",icelandic:"mi\xf0stig"},{term:"dative",icelandic:"\xfe\xe1gufall"},{term:"definite article",icelandic:"\xe1kve\xf0inn greinir"},{term:"demonstrative pronoun",icelandic:"\xe1bendingarfornafn"},{term:"ending",icelandic:"ending"},{term:"feminine",icelandic:"kvenkyn"},{term:"first person",icelandic:"fyrsta pers\xf3na"},{term:"gender",icelandic:"kyn"},{term:"genitive",icelandic:"eignarfall"},{term:"indefinite pronoun",icelandic:"\xf3\xe1kve\xf0i\xf0 fornafn"},{term:"indicative",icelandic:"frams\xf6guh\xe1ttur"},{term:"imperative",icelandic:"bo\xf0h\xe1ttur"},{term:"infinitive",icelandic:"nafnh\xe1ttur"},{term:"masculine",icelandic:"karlkyn"},{term:"middle voice",icelandic:"mi\xf0mynd"},{term:"neuter",icelandic:"hvorugkyn"},{term:"nominative",icelandic:"nefnifall"},{term:"passive voice",icelandic:"\xfeolmynd"},{term:"past participle",icelandic:"l\xfdsingarh\xe1ttur \xfe\xe1t\xed\xf0ar"},{term:"past tense",icelandic:"\xfe\xe1t\xed\xf0"},{term:"personal pronoun",icelandic:"pers\xf3nufornafn"},{term:"plural",icelandic:"fleirtala"},{term:"positive",icelandic:"frumstig"},{term:"principal parts",icelandic:"kennimyndir"},{term:"reflexive pronoun",icelandic:"afturbeygt fornafn"},{term:"possessive pronoun",icelandic:"eignarfornafn"},{term:"present participle",icelandic:"l\xfdsingarh\xe1ttur n\xfat\xed\xf0ar"},{term:"present tense",icelandic:"n\xfat\xed\xf0"},{term:"pronoun",icelandic:"fornafn"},{term:"second person",icelandic:"\xf6nnur pers\xf3na"},{term:"singular",icelandic:"eintala"},{term:"stem",icelandic:"stofn"},{term:"strong",icelandic:"sterk beyging"},{term:"strong verb",icelandic:"sterk s\xf6gn"},{term:"subjunctive",icelandic:"vi\xf0tengingarh\xe1ttur"},{term:"superlative",icelandic:"efsta stig"},{term:"supine",icelandic:"sagnb\xf3t"},{term:"third person",icelandic:"\xferi\xf0ja pers\xf3na"},{term:"transitive",icelandic:"\xe1hrifss\xf6gn"},{term:"weak",icelandic:"veik beyging"}]}},2063:function(e,n,t){"use strict";t.r(n),t.d(n,{assets:function(){return p},contentTitle:function(){return c},default:function(){return f},frontMatter:function(){return s},metadata:function(){return m},toc:function(){return u}});var r=t(7462),i=t(3366),a=(t(7294),t(3905)),o=t(1333),l=["components"],s={id:"noun-intro",title:"Introduction to nouns",description:"An explanation of Icelandic nouns, including gender, number, case and definiteness."},c=void 0,m={unversionedId:"nouns/noun-intro",id:"nouns/noun-intro",title:"Introduction to nouns",description:"An explanation of Icelandic nouns, including gender, number, case and definiteness.",source:"@site/docs/nouns/intro.md",sourceDirName:"nouns",slug:"/nouns/noun-intro",permalink:"/docs/nouns/noun-intro",tags:[],version:"current",frontMatter:{id:"noun-intro",title:"Introduction to nouns",description:"An explanation of Icelandic nouns, including gender, number, case and definiteness."},sidebar:"someSidebar",previous:{title:"Case governance",permalink:"/docs/verbs/case-governance"},next:{title:"Gender",permalink:"/docs/nouns/gender"}},p={},u=[{value:"Gender",id:"gender",level:2},{value:"Identifying the gender of a noun",id:"identifying-the-gender-of-a-noun",level:3},{value:"Number",id:"number",level:2},{value:"Case",id:"case",level:2},{value:"Definiteness",id:"definiteness",level:2}],d={toc:u};function f(e){var n=e.components,t=(0,i.Z)(e,l);return(0,a.kt)("wrapper",(0,r.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Nouns in Icelandic are used to identify a person, place, thing or idea:"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("em",{parentName:"p"},(0,a.kt)("strong",{parentName:"em"},"Ma\xf0urinn")," syndir.",(0,a.kt)("br",null),"\xc9g b\xfd \xed ",(0,a.kt)("strong",{parentName:"em"},"Reykjav\xedk"),".",(0,a.kt)("br",null),"Hann bor\xf0ar alla ",(0,a.kt)("strong",{parentName:"em"},"k\xf6kuna"),".",(0,a.kt)("br",null),"Hefur\xf0u ",(0,a.kt)("strong",{parentName:"em"},"t\xedma")," til a\xf0 hj\xe1lpa m\xe9r?"))),(0,a.kt)("p",null,"Nouns can be divided into two broad categories:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Common nouns")," \u2013 that refer to generic concepts, like ",(0,a.kt)("em",{parentName:"li"},"kona"),", ",(0,a.kt)("em",{parentName:"li"},"b\xe6r"),", ",(0,a.kt)("em",{parentName:"li"},"b\xf3k"),";"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Proper nouns")," \u2013 that refer to specific things, like ",(0,a.kt)("em",{parentName:"li"},"\xc1sd\xeds"),", ",(0,a.kt)("em",{parentName:"li"},"Akureyri"),", ",(0,a.kt)("em",{parentName:"li"},"Hringadrottinssaga"),".")),(0,a.kt)("p",null,"Proper nouns are usually easy to spot as they\u2019re often written with a capital letter (although not always, for example months are written in lower case: ",(0,a.kt)("em",{parentName:"p"},"jan\xfaar"),")."),(0,a.kt)("h2",{id:"gender"},"Gender"),(0,a.kt)("p",null,"All nouns in Icelandic belong to one of three ",(0,a.kt)("strong",{parentName:"p"},"genders"),":"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"karlkyn")," (",(0,a.kt)("em",{parentName:"li"},"kk."),") \u2013 masculine"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"kvenkyn")," (",(0,a.kt)("em",{parentName:"li"},"kvk."),") \u2013 feminine"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"hvorugkyn")," (",(0,a.kt)("em",{parentName:"li"},"hk."),") \u2013 neuter")),(0,a.kt)("p",null,"Before we go any further, it\u2019s good to clear up exactly what we mean by \u201cgender\u201d. In strict terms, gender is simply a way of grouping together nouns that have certain grammatical properties, such as a particular ending. "),(0,a.kt)("p",null,"So with this in mind, there\u2019s one golden rule to always remember:"),(0,a.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"Golden rule")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"Grammatical gender does not necessarily correspond with natural gender."))),(0,a.kt)("p",null,"Let\u2019s look at some examples:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("em",{parentName:"li"},"sk\xe1ld")," (hk.) \u201cpoet\u201d"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("em",{parentName:"li"},"gr\xe6nmetis\xe6ta")," (kvk.) \u201cvegetarian\u201d"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("em",{parentName:"li"},"forseti")," (kk.) \u201cpresident\u201d")),(0,a.kt)("p",null,"All of these nouns are different grammatical genders, and they can all refer to people of any gender. ",(0,a.kt)("strong",{parentName:"p"},"Grammatical gender is often completely arbitrary.")," "),(0,a.kt)("p",null,"However, there are a lot of gender-specific labels for people that ",(0,a.kt)("em",{parentName:"p"},"do")," have some correspondence to natural gender:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Grammatically masculine words for males: ",(0,a.kt)("em",{parentName:"li"},"ma\xf0ur"),", ",(0,a.kt)("em",{parentName:"li"},"karl"),", ",(0,a.kt)("em",{parentName:"li"},"str\xe1kur"),", ",(0,a.kt)("em",{parentName:"li"},"drengur"),", ",(0,a.kt)("em",{parentName:"li"},"gaur")),(0,a.kt)("li",{parentName:"ul"},"Grammatically feminine words for females: ",(0,a.kt)("em",{parentName:"li"},"kona"),", ",(0,a.kt)("em",{parentName:"li"},"kerling"),", ",(0,a.kt)("em",{parentName:"li"},"st\xfalka"),", ",(0,a.kt)("em",{parentName:"li"},"stelpa"),", ",(0,a.kt)("em",{parentName:"li"},"skv\xedsa"))),(0,a.kt)("p",null,"Really, gender isn\u2019t the best term for labelling what are essentially just different ",(0,a.kt)("em",{parentName:"p"},"classes")," of nouns. But as it\u2019s the established term, we\u2019re going to use it here."),(0,a.kt)("h3",{id:"identifying-the-gender-of-a-noun"},"Identifying the gender of a noun"),(0,a.kt)("p",null,"Gender is an inherit property of every noun in Icelandic. In other words, ",(0,a.kt)("strong",{parentName:"p"},"every single noun falls into one of the three genders"),". So how do you know which gender a given noun belongs to?"),(0,a.kt)("p",null,"In Icelandic, you often get a lot of help from the noun\u2019s ending to figure out the gender. For an explanation of these rules, see ",(0,a.kt)("a",{parentName:"p",href:"gender"},"Gender"),"."),(0,a.kt)("h2",{id:"number"},"Number"),(0,a.kt)("p",null,"As in English, nouns in Icelandic can be either ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)(o.R,{term:"singular",display:"singular",mdxType:"Term"}))," or ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)(o.R,{term:"plural",display:"plural",mdxType:"Term"})),"."),(0,a.kt)("h2",{id:"case"},"Case"),(0,a.kt)("p",null,"Icelandic nouns inflect for case."),(0,a.kt)("h2",{id:"definiteness"},"Definiteness"),(0,a.kt)("p",null,"In Icelandic, nouns can get the ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)(o.R,{term:"definite article",display:"definite article",mdxType:"Term"})),". The definite article in English is \u201cthe\u201d, and it comes ",(0,a.kt)("em",{parentName:"p"},"before")," the noun. In Icelandic, it\u2019s an ending that we add to the noun."))}f.isMDXComponent=!0}}]);