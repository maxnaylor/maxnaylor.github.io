(self.webpackChunkgramref=self.webpackChunkgramref||[]).push([[9714],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return u},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=c(n),m=a,k=p["".concat(s,".").concat(m)]||p[m]||d[m]||i;return n?r.createElement(k,o(o({ref:t},u),{},{components:n})):r.createElement(k,o({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var c=2;c<i;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},1333:function(e,t,n){"use strict";n.d(t,{R:function(){return l}});var r=n(4578),a=n(7294),i=n(4052),o=n.n(i),l=function(e){function t(t){var n;return(n=e.call(this,t)||this).state={termWidth:""},n}(0,r.Z)(t,e);var n=t.prototype;return n.componentDidMount=function(){var e=document.getElementById("term-"+this.props.term).clientWidth,t=document.getElementById("tooltip-"+this.props.term).clientWidth;this.setState({termWidth:e,tooltipWidth:t})},n.offset=function(){var e=0-this.state.tooltipWidth/2+this.state.termWidth/2+"px";return e},n.displayTerm=function(){return this.props.display?this.props.display:this.props.term},n.getIcelandicTerm=function(){var e=this;return o().terms.filter((function(t){return t.term.includes(e.props.term.toLowerCase())}))[0].icelandic},n.render=function(){return a.createElement(a.Fragment,null,a.createElement("span",{className:"term",id:"term-"+this.props.term},this.displayTerm(),a.createElement("span",{id:"tooltip-"+this.props.term,className:"tooltip",style:{left:this.offset()}},"\ud83c\uddee\ud83c\uddf8 ",this.getIcelandicTerm())))},t}(a.Component)},4052:function(e){e.exports={terms:[,{term:"verb",icelandic:"s\xf6gn"},{term:"pronoun",icelandic:"fornafn"},{term:"mood",icelandic:"h\xe1ttur"},{term:"accusative",icelandic:"\xfeolfall"},{term:"active voice",icelandic:"germynd"},{term:"adjective",icelandic:"l\xfdsingaror\xf0"},{term:"case",icelandic:"fall"},{term:"comparative",icelandic:"mi\xf0stig"},{term:"dative",icelandic:"\xfe\xe1gufall"},{term:"definite article",icelandic:"\xe1kve\xf0inn greinir"},{term:"demonstrative pronoun",icelandic:"\xe1bendingarfornafn"},{term:"diphthong",icelandic:"tv\xedhlj\xf3\xf0"},{term:"ending",icelandic:"ending"},{term:"feminine",icelandic:"kvenkyn"},{term:"first person",icelandic:"fyrsta pers\xf3na"},{term:"gender",icelandic:"kyn"},{term:"genitive",icelandic:"eignarfall"},{term:"indefinite pronoun",icelandic:"\xf3\xe1kve\xf0i\xf0 fornafn"},{term:"indicative",icelandic:"frams\xf6guh\xe1ttur"},{term:"imperative",icelandic:"bo\xf0h\xe1ttur"},{term:"infinitive",icelandic:"nafnh\xe1ttur"},{term:"masculine",icelandic:"karlkyn"},{term:"middle voice",icelandic:"mi\xf0mynd"},{term:"monophthong",icelandic:"einhlj\xf3\xf0"},{term:"neuter",icelandic:"hvorugkyn"},{term:"nominative",icelandic:"nefnifall"},{term:"passive voice",icelandic:"\xfeolmynd"},{term:"past participle",icelandic:"l\xfdsingarh\xe1ttur \xfe\xe1t\xed\xf0ar"},{term:"past tense",icelandic:"\xfe\xe1t\xed\xf0"},{term:"personal pronoun",icelandic:"pers\xf3nufornafn"},{term:"plural",icelandic:"fleirtala"},{term:"positive",icelandic:"frumstig"},{term:"preposition",icelandic:"forsetning"},{term:"principal parts",icelandic:"kennimyndir"},{term:"reflexive pronoun",icelandic:"afturbeygt fornafn"},{term:"possessive pronoun",icelandic:"eignarfornafn"},{term:"present participle",icelandic:"l\xfdsingarh\xe1ttur n\xfat\xed\xf0ar"},{term:"present tense",icelandic:"n\xfat\xed\xf0"},{term:"second person",icelandic:"\xf6nnur pers\xf3na"},{term:"singular",icelandic:"eintala"},{term:"stem",icelandic:"stofn"},{term:"strong",icelandic:"sterk beyging"},{term:"strong verb",icelandic:"sterk s\xf6gn"},{term:"subjunctive",icelandic:"vi\xf0tengingarh\xe1ttur"},{term:"superlative",icelandic:"efsta stig"},{term:"supine",icelandic:"sagnb\xf3t"},{term:"third person",icelandic:"\xferi\xf0ja pers\xf3na"},{term:"transitive",icelandic:"\xe1hrifss\xf6gn"},{term:"weak",icelandic:"veik beyging"},{term:"weak verb",icelandic:"veik s\xf6gn"}]}},5106:function(e,t,n){"use strict";n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return u},default:function(){return h},frontMatter:function(){return c},metadata:function(){return d},toc:function(){return m}});var r=n(7462),a=n(3366),i=(n(7294),n(3905)),o=n(1333),l=n(4996),s=["components"],c={id:"vowels",title:"Vowels",description:"Learn Icelandic pronunication. Explanation of the 8 basic vowels of the Icelandic language and 7 double vowels."},u=void 0,d={unversionedId:"basics/vowels",id:"basics/vowels",title:"Vowels",description:"Learn Icelandic pronunication. Explanation of the 8 basic vowels of the Icelandic language and 7 double vowels.",source:"@site/docs/basics/vowels.md",sourceDirName:"basics",slug:"/basics/vowels",permalink:"/docs/basics/vowels",tags:[],version:"current",frontMatter:{id:"vowels",title:"Vowels",description:"Learn Icelandic pronunication. Explanation of the 8 basic vowels of the Icelandic language and 7 double vowels."},sidebar:"someSidebar",previous:{title:"Alphabet",permalink:"/docs/basics/alphabet"},next:{title:"Introduction to verbs",permalink:"/docs/verbs/verb-intro"}},p={},m=[{value:"Single vowels",id:"single-vowels",level:2},{value:"Double vowels",id:"double-vowels",level:2}],k={toc:m};function h(e){var t=e.components,n=(0,a.Z)(e,s);return(0,i.kt)("wrapper",(0,r.Z)({},k,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Here we\u2019ll learn the pronunciation of the ",(0,i.kt)("strong",{parentName:"p"},"8 basic vowels in Icelandic")," and the ",(0,i.kt)("strong",{parentName:"p"},"7 double vowels"),"."),(0,i.kt)("h2",{id:"single-vowels"},"Single vowels"),(0,i.kt)("p",null,"The technical name for a single vowel sound is a ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)(o.R,{term:"monophthong",mdxType:"Term"})),". Why? Because linguists like to use Greek words to make things seem more complicated. Let\u2019s start with how to pronounce these:"),(0,i.kt)("figure",null,(0,i.kt)("table",null,(0,i.kt)("tbody",null,(0,i.kt)("tr",null,(0,i.kt)("th",{width:"200px"},"Spelling"),(0,i.kt)("th",null,"Pronunciation"),(0,i.kt)("th",{width:"200px"},"IPA transcription")),(0,i.kt)("tr",null,(0,i.kt)("th",null,(0,i.kt)("span",{className:"letter"},"a")),(0,i.kt)("td",null,(0,i.kt)("audio",{controls:!0},(0,i.kt)("source",{src:(0,l.Z)("/audio/a.m4a"),type:"audio/mp4"}),"Your browser does not support audio.")),(0,i.kt)("td",{align:"center"},(0,i.kt)("span",{className:"letter"},"[a]"))),(0,i.kt)("tr",null,(0,i.kt)("th",null,(0,i.kt)("span",{className:"letter"},"e")),(0,i.kt)("td",null,(0,i.kt)("audio",{controls:!0},(0,i.kt)("source",{src:(0,l.Z)("/audio/e.m4a"),type:"audio/mp4"}),"Your browser does not support audio.")),(0,i.kt)("td",{align:"center"},(0,i.kt)("span",{className:"letter"},"[\u025b]"))),(0,i.kt)("tr",null,(0,i.kt)("th",null,(0,i.kt)("span",{className:"letter"},"i/y")),(0,i.kt)("td",null,(0,i.kt)("audio",{controls:!0},(0,i.kt)("source",{src:(0,l.Z)("/audio/i.m4a"),type:"audio/mp4"}),"Your browser does not support audio.")),(0,i.kt)("td",{align:"center"},(0,i.kt)("span",{className:"letter"},"[\u026a]"))),(0,i.kt)("tr",null,(0,i.kt)("th",null,(0,i.kt)("span",{className:"letter"},"\xed/\xfd")),(0,i.kt)("td",null,(0,i.kt)("audio",{controls:!0},(0,i.kt)("source",{src:(0,l.Z)("/audio/ii.m4a"),type:"audio/mp4"}),"Your browser does not support audio.")),(0,i.kt)("td",{align:"center"},(0,i.kt)("span",{className:"letter"},"[i]"))),(0,i.kt)("tr",null,(0,i.kt)("th",null,(0,i.kt)("span",{className:"letter"},"o")),(0,i.kt)("td",null,(0,i.kt)("audio",{controls:!0},(0,i.kt)("source",{src:(0,l.Z)("/audio/o.m4a"),type:"audio/mp4"}),"Your browser does not support audio.")),(0,i.kt)("td",{align:"center"},(0,i.kt)("span",{className:"letter"},"[\u0254]"))),(0,i.kt)("tr",null,(0,i.kt)("th",null,(0,i.kt)("span",{className:"letter"},"u")),(0,i.kt)("td",null,(0,i.kt)("audio",{controls:!0},(0,i.kt)("source",{src:(0,l.Z)("/audio/u.m4a"),type:"audio/mp4"}),"Your browser does not support audio.")),(0,i.kt)("td",{align:"center"},(0,i.kt)("span",{className:"letter"},"[\u028f]"))),(0,i.kt)("tr",null,(0,i.kt)("th",null,(0,i.kt)("span",{className:"letter"},"\xfa")),(0,i.kt)("td",null,(0,i.kt)("audio",{controls:!0},(0,i.kt)("source",{src:(0,l.Z)("/audio/uu.m4a"),type:"audio/mp4"}),"Your browser does not support audio.")),(0,i.kt)("td",{align:"center"},(0,i.kt)("span",{className:"letter"},"[u]"))),(0,i.kt)("tr",null,(0,i.kt)("th",null,(0,i.kt)("span",{className:"letter"},"\xf6")),(0,i.kt)("td",null,(0,i.kt)("audio",{controls:!0},(0,i.kt)("source",{src:(0,l.Z)("/audio/oe.m4a"),type:"audio/mp4"}),"Your browser does not support audio.")),(0,i.kt)("td",{align:"center"},(0,i.kt)("span",{className:"letter"},"[\u0153]")))))),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"Isn\u2019t IPA a beer?")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"The ",(0,i.kt)("strong",{parentName:"p"},"IPA transcription")," is something you can ignore if you\u2019re not familiar with it. IPA stands for \u201cInternational Phonetic Alphabet\u201d and it\u2019s a system linguists use to write sounds in different languages in a uniform way."))),(0,i.kt)("h2",{id:"double-vowels"},"Double vowels"),(0,i.kt)("p",null,"The name for a double vowel sound is a ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)(o.R,{term:"diphthong",mdxType:"Term"})),". These aren\u2019t always written as two vowel sounds in the spelling, they could be represented by an accented letter for example."),(0,i.kt)("p",null,"These are the main diphthongs in the Icelandic:"),(0,i.kt)("figure",null,(0,i.kt)("table",null,(0,i.kt)("tbody",null,(0,i.kt)("tr",null,(0,i.kt)("th",{width:"200px"},"Spelling"),(0,i.kt)("th",null,"Pronunciation"),(0,i.kt)("th",{width:"200px"},"IPA transcription")),(0,i.kt)("tr",null,(0,i.kt)("th",null,(0,i.kt)("span",{className:"letter"},"\xe1")),(0,i.kt)("td",null,(0,i.kt)("audio",{controls:!0},(0,i.kt)("source",{src:(0,l.Z)("/audio/au.m4a"),type:"audio/mp4"}),"Your browser does not support audio.")),(0,i.kt)("td",{align:"center"},(0,i.kt)("span",{className:"letter"},"[au]"))),(0,i.kt)("tr",null,(0,i.kt)("th",null,(0,i.kt)("span",{className:"letter"},"\xf3")),(0,i.kt)("td",null,(0,i.kt)("audio",{controls:!0},(0,i.kt)("source",{src:(0,l.Z)("/audio/ou.m4a"),type:"audio/mp4"}),"Your browser does not support audio.")),(0,i.kt)("td",{align:"center"},(0,i.kt)("span",{className:"letter"},"[ou]"))),(0,i.kt)("tr",null,(0,i.kt)("th",null,(0,i.kt)("span",{className:"letter"},"\xe6")),(0,i.kt)("td",null,(0,i.kt)("audio",{controls:!0},(0,i.kt)("source",{src:(0,l.Z)("/audio/ae.m4a"),type:"audio/mp4"}),"Your browser does not support audio.")),(0,i.kt)("td",{align:"center"},(0,i.kt)("span",{className:"letter"},"[ai]"))),(0,i.kt)("tr",null,(0,i.kt)("th",null,(0,i.kt)("span",{className:"letter"},"ei/ey")),(0,i.kt)("td",null,(0,i.kt)("audio",{controls:!0},(0,i.kt)("source",{src:(0,l.Z)("/audio/ei.m4a"),type:"audio/mp4"}),"Your browser does not support audio.")),(0,i.kt)("td",{align:"center"},(0,i.kt)("span",{className:"letter"},"[ei]"))),(0,i.kt)("tr",null,(0,i.kt)("th",null,(0,i.kt)("span",{className:"letter"},"au")),(0,i.kt)("td",null,(0,i.kt)("audio",{controls:!0},(0,i.kt)("source",{src:(0,l.Z)("/audio/oei.m4a"),type:"audio/mp4"}),"Your browser does not support audio.")),(0,i.kt)("td",{align:"center"},(0,i.kt)("span",{className:"letter"},"[\u0153i]"))),(0,i.kt)("tr",null,(0,i.kt)("th",null,(0,i.kt)("span",{className:"letter"},"ogi")),(0,i.kt)("td",null,(0,i.kt)("audio",{controls:!0},(0,i.kt)("source",{src:(0,l.Z)("/audio/ogi.m4a"),type:"audio/mp4"}),"Your browser does not support audio.")),(0,i.kt)("td",{align:"center"},(0,i.kt)("span",{className:"letter"},"[oi]"))),(0,i.kt)("tr",null,(0,i.kt)("th",null,(0,i.kt)("span",{className:"letter"},"ugi")),(0,i.kt)("td",null,(0,i.kt)("audio",{controls:!0},(0,i.kt)("source",{src:(0,l.Z)("/audio/ugi.m4a"),type:"audio/mp4"}),"Your browser does not support audio.")),(0,i.kt)("td",{align:"center"},(0,i.kt)("span",{className:"letter"},"[\u028fi]")))))),(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"You\u2019ll never see the same vowel twice")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"In Icelandic, seeing the same vowel twice in a row, e.g. ",(0,i.kt)("em",{parentName:"p"},"aa")," or ",(0,i.kt)("em",{parentName:"p"},"ii"),", isn\u2019t really a thing. In fact, it\u2019s pretty rare to see two vowels next to each other at all, other than those listed above, unless:"),(0,i.kt)("ul",{parentName:"div"},(0,i.kt)("li",{parentName:"ul"},"One of the vowels is accented, e.g. ",(0,i.kt)("em",{parentName:"li"},(0,i.kt)("strong",{parentName:"em"},"\xe1\xe6"),"tlun"),", ",(0,i.kt)("em",{parentName:"li"},"\xcdtal",(0,i.kt)("strong",{parentName:"em"},"\xeda")),";"),(0,i.kt)("li",{parentName:"ul"},"It\u2019s a funky loanword, e.g. ",(0,i.kt)("em",{parentName:"li"},"\xcdsr",(0,i.kt)("strong",{parentName:"em"},"ae"),"l"),", ",(0,i.kt)("em",{parentName:"li"},"fl",(0,i.kt)("strong",{parentName:"em"},"aue"),"l")," \u201cvelvet\u201d.")),(0,i.kt)("p",{parentName:"div"},"In compound words, it can sometimes happen that the same vowel is repeated, but in this case they are each pronounced separately. For example, ",(0,i.kt)("em",{parentName:"p"},"hjart",(0,i.kt)("strong",{parentName:"em"},"aa"),"\xf0ger\xf0")," \u201cheart operation\u201d is pronounced as if it\u2019s written ",(0,i.kt)("em",{parentName:"p"},"hjart",(0,i.kt)("strong",{parentName:"em"},"a"),"\u2011",(0,i.kt)("strong",{parentName:"em"},"a"),"\xf0ger\xf0")," (\ud83e\udd13 IPA for nerds: /\u02c8\xe7arta\u02cca\xf0k\u025cr\xf0/)."))))}h.isMDXComponent=!0}}]);