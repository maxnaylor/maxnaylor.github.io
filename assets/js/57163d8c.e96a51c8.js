(self.webpackChunkgramref=self.webpackChunkgramref||[]).push([[5774],{3905:function(t,n,e){"use strict";e.d(n,{Zo:function(){return k},kt:function(){return d}});var a=e(7294);function l(t,n,e){return n in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t}function r(t,n){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable}))),e.push.apply(e,a)}return e}function o(t){for(var n=1;n<arguments.length;n++){var e=null!=arguments[n]?arguments[n]:{};n%2?r(Object(e),!0).forEach((function(n){l(t,n,e[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):r(Object(e)).forEach((function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(e,n))}))}return t}function s(t,n){if(null==t)return{};var e,a,l=function(t,n){if(null==t)return{};var e,a,l={},r=Object.keys(t);for(a=0;a<r.length;a++)e=r[a],n.indexOf(e)>=0||(l[e]=t[e]);return l}(t,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(a=0;a<r.length;a++)e=r[a],n.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(t,e)&&(l[e]=t[e])}return l}var i=a.createContext({}),u=function(t){var n=a.useContext(i),e=n;return t&&(e="function"==typeof t?t(n):o(o({},n),t)),e},k=function(t){var n=u(t.components);return a.createElement(i.Provider,{value:n},t.children)},p={inlineCode:"code",wrapper:function(t){var n=t.children;return a.createElement(a.Fragment,{},n)}},c=a.forwardRef((function(t,n){var e=t.components,l=t.mdxType,r=t.originalType,i=t.parentName,k=s(t,["components","mdxType","originalType","parentName"]),c=u(e),d=l,m=c["".concat(i,".").concat(d)]||c[d]||p[d]||r;return e?a.createElement(m,o(o({ref:n},k),{},{components:e})):a.createElement(m,o({ref:n},k))}));function d(t,n){var e=arguments,l=n&&n.mdxType;if("string"==typeof t||l){var r=e.length,o=new Array(r);o[0]=c;var s={};for(var i in n)hasOwnProperty.call(n,i)&&(s[i]=n[i]);s.originalType=t,s.mdxType="string"==typeof t?t:l,o[1]=s;for(var u=2;u<r;u++)o[u]=e[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,e)}c.displayName="MDXCreateElement"},1333:function(t,n,e){"use strict";e.d(n,{R:function(){return s}});var a=e(4578),l=e(7294),r=e(4052),o=e.n(r),s=function(t){function n(n){var e;return(e=t.call(this,n)||this).state={termWidth:""},e}(0,a.Z)(n,t);var e=n.prototype;return e.componentDidMount=function(){var t=document.getElementById("term-"+this.props.term).clientWidth,n=document.getElementById("tooltip-"+this.props.term).clientWidth;this.setState({termWidth:t,tooltipWidth:n})},e.offset=function(){var t=0-this.state.tooltipWidth/2+this.state.termWidth/2+"px";return t},e.displayTerm=function(){return this.props.display?this.props.display:this.props.term},e.getIcelandicTerm=function(){var t=this;return o().terms.filter((function(n){return n.term.includes(t.props.term.toLowerCase())}))[0].icelandic},e.render=function(){return l.createElement(l.Fragment,null,l.createElement("span",{className:"term",id:"term-"+this.props.term},this.displayTerm(),l.createElement("span",{id:"tooltip-"+this.props.term,className:"tooltip",style:{left:this.offset()}},"\ud83c\uddee\ud83c\uddf8 ",this.getIcelandicTerm())))},n}(l.Component)},4052:function(t){t.exports={terms:[,{term:"verb",icelandic:"s\xf6gn"},{term:"pronoun",icelandic:"fornafn"},{term:"mood",icelandic:"h\xe1ttur"},{term:"accusative",icelandic:"\xfeolfall"},{term:"active voice",icelandic:"germynd"},{term:"adjective",icelandic:"l\xfdsingaror\xf0"},{term:"aspiration",icelandic:"fr\xe1bl\xe1stur"},{term:"case",icelandic:"fall"},{term:"comparative",icelandic:"mi\xf0stig"},{term:"consonant",icelandic:"samhlj\xf3\xf0"},{term:"dative",icelandic:"\xfe\xe1gufall"},{term:"definite article",icelandic:"\xe1kve\xf0inn greinir"},{term:"demonstrative pronoun",icelandic:"\xe1bendingarfornafn"},{term:"devoicing",icelandic:"afr\xf6ddun"},{term:"diphthong",icelandic:"tv\xedhlj\xf3\xf0"},{term:"ending",icelandic:"ending"},{term:"feminine",icelandic:"kvenkyn"},{term:"first person",icelandic:"fyrsta pers\xf3na"},{term:"gender",icelandic:"kyn"},{term:"genitive",icelandic:"eignarfall"},{term:"indefinite pronoun",icelandic:"\xf3\xe1kve\xf0i\xf0 fornafn"},{term:"indicative",icelandic:"frams\xf6guh\xe1ttur"},{term:"imperative",icelandic:"bo\xf0h\xe1ttur"},{term:"infinitive",icelandic:"nafnh\xe1ttur"},{term:"masculine",icelandic:"karlkyn"},{term:"middle voice",icelandic:"mi\xf0mynd"},{term:"monophthong",icelandic:"einhlj\xf3\xf0"},{term:"neuter",icelandic:"hvorugkyn"},{term:"nominative",icelandic:"nefnifall"},{term:"passive voice",icelandic:"\xfeolmynd"},{term:"past participle",icelandic:"l\xfdsingarh\xe1ttur \xfe\xe1t\xed\xf0ar"},{term:"past tense",icelandic:"\xfe\xe1t\xed\xf0"},{term:"personal pronoun",icelandic:"pers\xf3nufornafn"},{term:"plural",icelandic:"fleirtala"},{term:"positive",icelandic:"frumstig"},{term:"preaspiration",icelandic:"a\xf0bl\xe1stur"},{term:"preposition",icelandic:"forsetning"},{term:"principal parts",icelandic:"kennimyndir"},{term:"reflexive pronoun",icelandic:"afturbeygt fornafn"},{term:"possessive pronoun",icelandic:"eignarfornafn"},{term:"present participle",icelandic:"l\xfdsingarh\xe1ttur n\xfat\xed\xf0ar"},{term:"present tense",icelandic:"n\xfat\xed\xf0"},{term:"second person",icelandic:"\xf6nnur pers\xf3na"},{term:"singular",icelandic:"eintala"},{term:"stem",icelandic:"stofn"},{term:"strong",icelandic:"sterk beyging"},{term:"strong verb",icelandic:"sterk s\xf6gn"},{term:"subjunctive",icelandic:"vi\xf0tengingarh\xe1ttur"},{term:"superlative",icelandic:"efsta stig"},{term:"supine",icelandic:"sagnb\xf3t"},{term:"third person",icelandic:"\xferi\xf0ja pers\xf3na"},{term:"transitive",icelandic:"\xe1hrifss\xf6gn"},{term:"weak",icelandic:"veik beyging"},{term:"weak verb",icelandic:"veik s\xf6gn"}]}},583:function(t,n,e){"use strict";e.r(n),e.d(n,{assets:function(){return c},contentTitle:function(){return k},default:function(){return h},frontMatter:function(){return u},metadata:function(){return p},toc:function(){return d}});var a=e(7462),l=e(3366),r=(e(7294),e(3905)),o=e(1333),s=e(4996),i=["components"],u={id:"consonants",title:"Consonants",description:"Learn Icelandic pronunication. Explanation of how to pronounce Icelandic consonants, including preaspiration."},k=void 0,p={unversionedId:"basics/consonants",id:"basics/consonants",title:"Consonants",description:"Learn Icelandic pronunication. Explanation of how to pronounce Icelandic consonants, including preaspiration.",source:"@site/docs/basics/consonants.md",sourceDirName:"basics",slug:"/basics/consonants",permalink:"/docs/basics/consonants",tags:[],version:"current",frontMatter:{id:"consonants",title:"Consonants",description:"Learn Icelandic pronunication. Explanation of how to pronounce Icelandic consonants, including preaspiration."},sidebar:"someSidebar",previous:{title:"Vowels",permalink:"/docs/basics/vowels"},next:{title:"Tricky consonants",permalink:"/docs/basics/tricky-consonants"}},c={},d=[{value:"Aspiration",id:"aspiration",level:2},{value:"Preaspiration",id:"preaspiration",level:2},{value:"Devoicing",id:"devoicing",level:2},{value:"<em>t</em>-insertion",id:"t-insertion",level:2}],m={toc:d};function h(t){var n=t.components,e=(0,l.Z)(t,i);return(0,r.kt)("wrapper",(0,a.Z)({},m,e,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"The Icelandic language has a lot of ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)(o.R,{term:"consonant",display:"consonants",mdxType:"Term"})),". In fact, there are more consonant sounds than there are consonant letters in the alphabet. This doesn\u2019t mean that the spelling is irregular, but we just need to learn a few rules about consonant pronunciation."),(0,r.kt)("p",null,"It doesn\u2019t necessarily make sense to go through them in alphabetical order. On this page, we\u2019ve grouped the most important rules that you need to to know about Icelandic consonant pronunciation."),(0,r.kt)("p",null,"For an explanation of individual consonants that have more than one pronunciation, like ",(0,r.kt)("em",{parentName:"p"},"f")," and ",(0,r.kt)("em",{parentName:"p"},"g"),", see ",(0,r.kt)("a",{parentName:"p",href:"tricky-consonants"},"Tricky consonants"),"."),(0,r.kt)("h2",{id:"aspiration"},"Aspiration"),(0,r.kt)("p",null,"A fancy way of saying \u201cbreathing\u201d is \ud83c\udf2c ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)(o.R,{term:"aspiration",mdxType:"Term"})),". When we talk about a consonant as being aspirated, that means we release a little puff of air right after the consonant sound."),(0,r.kt)("p",null,"You can think of the following consonants as pairs, with aspirated and unaspirated versions:"),(0,r.kt)("figure",null,(0,r.kt)("table",null,(0,r.kt)("tbody",null,(0,r.kt)("tr",null,(0,r.kt)("th",null,(0,r.kt)("table",{className:"clear-padded"},(0,r.kt)("tbody",null,(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("span",{className:"letter"},"p")),(0,r.kt)("td",null,(0,r.kt)("audio",{controls:!0},(0,r.kt)("source",{src:(0,s.Z)("/audio/ph.m4a"),type:"audio/mp4"}),"Your browser does not support audio."))),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("span",{className:"letter"},"t")),(0,r.kt)("td",null,(0,r.kt)("audio",{controls:!0},(0,r.kt)("source",{src:(0,s.Z)("/audio/th.m4a"),type:"audio/mp4"}),"Your browser does not support audio."))),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("span",{className:"letter"},"k")),(0,r.kt)("td",null,(0,r.kt)("audio",{controls:!0},(0,r.kt)("source",{src:(0,s.Z)("/audio/kh.m4a"),type:"audio/mp4"}),"Your browser does not support audio.")))))),(0,r.kt)("td",null,"\u2192 aspirated [p\u02b0, t\u02b0, k\u02b0]",(0,r.kt)("br",null),(0,r.kt)("br",null),(0,r.kt)("em",null,(0,r.kt)("table",{className:"clear-padded"},(0,r.kt)("tbody",null,(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("span",{className:"highlighter"},(0,r.kt)("strong",null,"p")),"abbi"),(0,r.kt)("td",null,(0,r.kt)("audio",{controls:!0},(0,r.kt)("source",{src:(0,s.Z)("/audio/pabbi.m4a"),type:"audio/mp4"}),"Your browser does not support audio."))),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("span",{className:"highlighter"},(0,r.kt)("strong",null,"t")),"aka"),(0,r.kt)("td",null,(0,r.kt)("audio",{controls:!0},(0,r.kt)("source",{src:(0,s.Z)("/audio/taka.m4a"),type:"audio/mp4"}),"Your browser does not support audio."))),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("span",{className:"highlighter"},(0,r.kt)("strong",null,"k")),"assi"),(0,r.kt)("td",null,(0,r.kt)("audio",{controls:!0},(0,r.kt)("source",{src:(0,s.Z)("/audio/kassi.m4a"),type:"audio/mp4"}),"Your browser does not support audio.")))))))),(0,r.kt)("tr",null,(0,r.kt)("th",null,(0,r.kt)("table",{className:"clear-padded"},(0,r.kt)("tbody",null,(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("span",{className:"letter orange"},"b")),(0,r.kt)("td",null,(0,r.kt)("audio",{controls:!0},(0,r.kt)("source",{src:(0,s.Z)("/audio/p.m4a"),type:"audio/mp4"}),"Your browser does not support audio."))),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("span",{className:"letter orange"},"d")),(0,r.kt)("td",null,(0,r.kt)("audio",{controls:!0},(0,r.kt)("source",{src:(0,s.Z)("/audio/t.m4a"),type:"audio/mp4"}),"Your browser does not support audio."))),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("span",{className:"letter orange"},"g")),(0,r.kt)("td",null,(0,r.kt)("audio",{controls:!0},(0,r.kt)("source",{src:(0,s.Z)("/audio/k.m4a"),type:"audio/mp4"}),"Your browser does not support audio.")))))),(0,r.kt)("td",null,"\u2192 unaspirated [p, t, k]",(0,r.kt)("br",null),(0,r.kt)("br",null),(0,r.kt)("em",null,(0,r.kt)("table",{className:"clear-padded"},(0,r.kt)("tbody",null,(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("span",{className:"ushift"},(0,r.kt)("strong",null,"b")),"\xe1tur"),(0,r.kt)("td",null,(0,r.kt)("audio",{controls:!0},(0,r.kt)("source",{src:(0,s.Z)("/audio/batur.m4a"),type:"audio/mp4"}),"Your browser does not support audio."))),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("span",{className:"ushift"},(0,r.kt)("strong",null,"d")),"alur"),(0,r.kt)("td",null,(0,r.kt)("audio",{controls:!0},(0,r.kt)("source",{src:(0,s.Z)("/audio/dalur.m4a"),type:"audio/mp4"}),"Your browser does not support audio."))),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("span",{className:"ushift"},(0,r.kt)("strong",null,"g")),"aman"),(0,r.kt)("td",null,(0,r.kt)("audio",{controls:!0},(0,r.kt)("source",{src:(0,s.Z)("/audio/gaman.m4a"),type:"audio/mp4"}),"Your browser does not support audio."))))))))))),(0,r.kt)("p",null,"The rule is essentially this:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"At the start of a word, ",(0,r.kt)("em",{parentName:"li"},"p"),", ",(0,r.kt)("em",{parentName:"li"},"t")," and ",(0,r.kt)("em",{parentName:"li"},"k")," are aspirated, whereas ",(0,r.kt)("em",{parentName:"li"},"b"),", ",(0,r.kt)("em",{parentName:"li"},"d")," and ",(0,r.kt)("em",{parentName:"li"},"g")," are not.")),(0,r.kt)("p",null,"Another rule that we need to add here is:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"<","sp, st, sk",">"," are not aspirated: ",(0,r.kt)("em",null,(0,r.kt)("table",{className:"clear-padded"},(0,r.kt)("tbody",null,(0,r.kt)("tr",null,(0,r.kt)("td",null,"s",(0,r.kt)("span",{className:"ushift"},(0,r.kt)("strong",null,"p")),"a\xf0i"),(0,r.kt)("td",null,(0,r.kt)("audio",{controls:!0},(0,r.kt)("source",{src:(0,s.Z)("/audio/spadi.m4a"),type:"audio/mp4"}),"Your browser does not support audio."))),(0,r.kt)("tr",null,(0,r.kt)("td",null,"s",(0,r.kt)("span",{className:"ushift"},(0,r.kt)("strong",null,"t")),"ama"),(0,r.kt)("td",null,(0,r.kt)("audio",{controls:!0},(0,r.kt)("source",{src:(0,s.Z)("/audio/stama.m4a"),type:"audio/mp4"}),"Your browser does not support audio."))),(0,r.kt)("tr",null,(0,r.kt)("td",null,"s",(0,r.kt)("span",{className:"ushift"},(0,r.kt)("strong",null,"k")),"ata"),(0,r.kt)("td",null,(0,r.kt)("audio",{controls:!0},(0,r.kt)("source",{src:(0,s.Z)("/audio/skata.m4a"),type:"audio/mp4"}),"Your browser does not support audio.")))))))),(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Icelandic doesn\u2019t have true /b/, /d/ and /g/ sounds like English (these are the ",(0,r.kt)("strong",{parentName:"p"},"voiced")," versions of /p/, /t/ and /k/). In the spelling, we use ","<","b",">",", ","<","d",">"," and ","<","g",">"," to indicate that the sounds are not aspirated, but other than that they are pronounced identically to ","<","p",">",", ","<","t",">"," and ","<","k",">","."))),(0,r.kt)("h2",{id:"preaspiration"},"Preaspiration"),(0,r.kt)("p",null,"As well as aspiration, which involves releasing a puff of air ",(0,r.kt)("em",{parentName:"p"},"after")," a consonant, Icelandic has \ud83c\udf2c ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)(o.R,{term:"preaspiration",mdxType:"Term"})),". As you might have guessed, this is where a puff of air is released ",(0,r.kt)("em",{parentName:"p"},"before")," a consonant."),(0,r.kt)("p",null,"This is one of the most distinctive features of Icelandic pronunciation, and one of the main reasons that many people describe the Icelandic language as sounding \u201cbreathy\u201d. "),(0,r.kt)("p",null,"It affects the same three consonants as before. In the spelling, the aspiration is indicated by doubling the letter:"),(0,r.kt)("figure",null,(0,r.kt)("table",null,(0,r.kt)("tbody",null,(0,r.kt)("tr",null,(0,r.kt)("th",{width:"150px"},(0,r.kt)("span",{className:"letter"},"pp")),(0,r.kt)("td",null,(0,r.kt)("em",null,"kre",(0,r.kt)("span",{className:"highlighter"},(0,r.kt)("strong",null,"pp")),"a, sle",(0,r.kt)("span",{className:"highlighter"},(0,r.kt)("strong",null,"pp")),"a, u",(0,r.kt)("span",{className:"highlighter"},(0,r.kt)("strong",null,"pp"))),(0,r.kt)("br",null),(0,r.kt)("br",null),(0,r.kt)("audio",{controls:!0},(0,r.kt)("source",{src:(0,s.Z)("/audio/kreppa-sleppa-upp.m4a"),type:"audio/mp4"}),"Your browser does not support audio."))),(0,r.kt)("tr",null,(0,r.kt)("th",{width:"150px"},(0,r.kt)("span",{className:"letter"},"tt")),(0,r.kt)("td",null,(0,r.kt)("em",null,"de",(0,r.kt)("span",{className:"highlighter"},(0,r.kt)("strong",null,"tt")),"a, po",(0,r.kt)("span",{className:"highlighter"},(0,r.kt)("strong",null,"tt")),"ur, sl\xe9",(0,r.kt)("span",{className:"highlighter"},(0,r.kt)("strong",null,"tt")),"ur"),(0,r.kt)("br",null),(0,r.kt)("br",null),(0,r.kt)("audio",{controls:!0},(0,r.kt)("source",{src:(0,s.Z)("/audio/detta-pottur-slettur.m4a"),type:"audio/mp4"}),"Your browser does not support audio."))),(0,r.kt)("tr",null,(0,r.kt)("th",{width:"150px"},(0,r.kt)("span",{className:"letter"},"kk")),(0,r.kt)("td",null,(0,r.kt)("em",null,"be",(0,r.kt)("span",{className:"highlighter"},(0,r.kt)("strong",null,"kk")),"ur, e",(0,r.kt)("span",{className:"highlighter"},(0,r.kt)("strong",null,"kk")),"i, \xfee",(0,r.kt)("span",{className:"highlighter"},(0,r.kt)("strong",null,"kk")),"ja"),(0,r.kt)("br",null),(0,r.kt)("br",null),(0,r.kt)("audio",{controls:!0},(0,r.kt)("source",{src:(0,s.Z)("/audio/bekkur-ekki-thekkja.m4a"),type:"audio/mp4"}),"Your browser does not support audio.")))))),(0,r.kt)("p",null,"Preaspiration also happens when ",(0,r.kt)("em",{parentName:"p"},"p(p)"),", ",(0,r.kt)("em",{parentName:"p"},"t(t)")," or ",(0,r.kt)("em",{parentName:"p"},"k(k)")," come before ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"l"))," or ",(0,r.kt)("em",{parentName:"p"},(0,r.kt)("strong",{parentName:"em"},"n")),":"),(0,r.kt)("div",{className:"row"},(0,r.kt)("div",{className:"col"},(0,r.kt)("figure",null,(0,r.kt)("table",{class:"full-width"},(0,r.kt)("tbody",null,(0,r.kt)("tr",null,(0,r.kt)("th",{width:"150px"},(0,r.kt)("span",{className:"letter"},"pl")),(0,r.kt)("td",null,(0,r.kt)("em",null,"de",(0,r.kt)("span",{className:"highlighter"},(0,r.kt)("strong",null,"pl")),"a, hnu",(0,r.kt)("span",{className:"highlighter"},(0,r.kt)("strong",null,"pl"))),(0,r.kt)("br",null),(0,r.kt)("br",null),(0,r.kt)("audio",{controls:!0},(0,r.kt)("source",{src:(0,s.Z)("/audio/depla-hnupl.m4a"),type:"audio/mp4"}),"Your browser does not support audio."))),(0,r.kt)("tr",null,(0,r.kt)("th",{width:"150px"},(0,r.kt)("span",{className:"letter"},"tl")),(0,r.kt)("td",null,(0,r.kt)("em",null,"\xe6",(0,r.kt)("span",{className:"highlighter"},(0,r.kt)("strong",null,"tl")),"a, Ka",(0,r.kt)("span",{className:"highlighter"},(0,r.kt)("strong",null,"tl")),"a, be",(0,r.kt)("span",{className:"highlighter"},(0,r.kt)("strong",null,"tl"))),(0,r.kt)("br",null),(0,r.kt)("br",null),(0,r.kt)("audio",{controls:!0},(0,r.kt)("source",{src:(0,s.Z)("/audio/aetla-katla-betl.m4a"),type:"audio/mp4"}),"Your browser does not support audio."))),(0,r.kt)("tr",null,(0,r.kt)("th",{width:"150px"},(0,r.kt)("span",{className:"letter"},"kl")),(0,r.kt)("td",null,(0,r.kt)("em",null,"he",(0,r.kt)("span",{className:"highlighter"},(0,r.kt)("strong",null,"kl")),"a, j\xf6",(0,r.kt)("span",{className:"highlighter"},(0,r.kt)("strong",null,"kl")),"a"),(0,r.kt)("br",null),(0,r.kt)("br",null),(0,r.kt)("audio",{controls:!0},(0,r.kt)("source",{src:(0,s.Z)("/audio/hekla-jokla.m4a"),type:"audio/mp4"}),"Your browser does not support audio."))))))),(0,r.kt)("div",{className:"col"},(0,r.kt)("figure",null,(0,r.kt)("table",{className:"full-width"},(0,r.kt)("tbody",null,(0,r.kt)("tr",null,(0,r.kt)("th",{width:"150px"},(0,r.kt)("span",{className:"letter"},"pn")),(0,r.kt)("td",null,(0,r.kt)("em",null,"vo",(0,r.kt)("span",{className:"highlighter"},(0,r.kt)("strong",null,"pn")),", ke",(0,r.kt)("span",{className:"highlighter"},(0,r.kt)("strong",null,"ppn")),"i"),(0,r.kt)("br",null),(0,r.kt)("br",null),(0,r.kt)("audio",{controls:!0},(0,r.kt)("source",{src:(0,s.Z)("/audio/vopn-keppni.m4a"),type:"audio/mp4"}),"Your browser does not support audio."))),(0,r.kt)("tr",null,(0,r.kt)("th",{width:"150px"},(0,r.kt)("span",{className:"letter"},"tn")),(0,r.kt)("td",null,(0,r.kt)("em",null,"va",(0,r.kt)("span",{className:"highlighter"},(0,r.kt)("strong",null,"tn")),", ba",(0,r.kt)("span",{className:"highlighter"},(0,r.kt)("strong",null,"tn")),"a"),(0,r.kt)("br",null),(0,r.kt)("br",null),(0,r.kt)("audio",{controls:!0},(0,r.kt)("source",{src:(0,s.Z)("/audio/vatn-batna.m4a"),type:"audio/mp4"}),"Your browser does not support audio."))),(0,r.kt)("tr",null,(0,r.kt)("th",{width:"150px"},(0,r.kt)("span",{className:"letter"},"kn")),(0,r.kt)("td",null,(0,r.kt)("em",null,"t\xe1",(0,r.kt)("span",{className:"highlighter"},(0,r.kt)("strong",null,"kn")),", bli",(0,r.kt)("span",{className:"highlighter"},(0,r.kt)("strong",null,"kn")),"a"),(0,r.kt)("br",null),(0,r.kt)("br",null),(0,r.kt)("audio",{controls:!0},(0,r.kt)("source",{src:(0,s.Z)("/audio/takn-blikna.m4a"),type:"audio/mp4"}),"Your browser does not support audio.")))))))),(0,r.kt)("h2",{id:"devoicing"},"Devoicing"),(0,r.kt)("p",null,"Some consonants in Icelandic can undergo a process known as ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)(o.R,{term:"devoicing",mdxType:"Term"})),". "),(0,r.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"What are devoiced and voiced sounds?")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"When you pronounce a devoiced sound, this means that your vocal cords are not vibrating. With voiced sounds however, your vocal cords are vibrating. You can check whether a sound is voiced by placing two fingers on your voice box and feeling for a vibration when you pronounce the sound."),(0,r.kt)("p",{parentName:"div"},"By definition, all ",(0,r.kt)("a",{parentName:"p",href:"vowels"},"vowels")," are voiced."))),(0,r.kt)("p",null,"The consonants ",(0,r.kt)("em",{parentName:"p"},"l"),", ",(0,r.kt)("em",{parentName:"p"},"m"),", ",(0,r.kt)("em",{parentName:"p"},"n")," and ",(0,r.kt)("em",{parentName:"p"},"r")," are all voiced, unless they appear in the following environment:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"After ","<","h",">",";"),(0,r.kt)("li",{parentName:"ul"},"Before ",(0,r.kt)("em",{parentName:"li"},"p"),", ",(0,r.kt)("em",{parentName:"li"},"t"),", ",(0,r.kt)("em",{parentName:"li"},"k"),".")),(0,r.kt)("p",null,"Let\u2019s listen to some examples to hear the difference:"),(0,r.kt)("figure",null,(0,r.kt)("table",null,(0,r.kt)("tbody",null,(0,r.kt)("tr",null,(0,r.kt)("th",{width:"150px"},"\xa0"),(0,r.kt)("th",{width:"35%"},"Voiced"),(0,r.kt)("th",{width:"35%"},"Devoiced")),(0,r.kt)("tr",null,(0,r.kt)("th",null,(0,r.kt)("span",{className:"letter"},"l")),(0,r.kt)("td",null,(0,r.kt)("em",null,(0,r.kt)("strong",null,"l"),"\xe1tur, ",(0,r.kt)("strong",null,"l"),"isti, t\xf3",(0,r.kt)("strong",null,"l"),"g"),(0,r.kt)("br",null),(0,r.kt)("br",null),(0,r.kt)("audio",{controls:!0},(0,r.kt)("source",{src:(0,s.Z)("/audio/latur-listi-tolg.m4a"),type:"audio/mp4"}),"Your browser does not support audio.")),(0,r.kt)("td",null,(0,r.kt)("em",null,(0,r.kt)("span",{className:"highlighter"},(0,r.kt)("strong",null,"hl")),"\xe1tur, ",(0,r.kt)("span",{className:"highlighter"},(0,r.kt)("strong",null,"hl")),"usta, f\xf3",(0,r.kt)("span",{className:"highlighter"},(0,r.kt)("strong",null,"l")),"k"),(0,r.kt)("br",null),(0,r.kt)("br",null),(0,r.kt)("audio",{controls:!0},(0,r.kt)("source",{src:(0,s.Z)("/audio/hlatur-hlusta-folk.m4a"),type:"audio/mp4"}),"Your browser does not support audio."))),(0,r.kt)("tr",null,(0,r.kt)("th",null,(0,r.kt)("span",{className:"letter"},"m")),(0,r.kt)("td",null,(0,r.kt)("em",null,"la",(0,r.kt)("strong",null,"m"),"bi, ske",(0,r.kt)("strong",null,"mm"),"dir"),(0,r.kt)("br",null),(0,r.kt)("br",null),(0,r.kt)("audio",{controls:!0},(0,r.kt)("source",{src:(0,s.Z)("/audio/lambi-skemmdir.m4a"),type:"audio/mp4"}),"Your browser does not support audio.")),(0,r.kt)("td",null,(0,r.kt)("em",null,"la",(0,r.kt)("span",{className:"highlighter"},(0,r.kt)("strong",null,"m")),"pi, ske",(0,r.kt)("span",{className:"highlighter"},(0,r.kt)("strong",null,"mm")),"ta"),(0,r.kt)("br",null),(0,r.kt)("br",null),(0,r.kt)("audio",{controls:!0},(0,r.kt)("source",{src:(0,s.Z)("/audio/lampi-skemmta.m4a"),type:"audio/mp4"}),"Your browser does not support audio."))),(0,r.kt)("tr",null,(0,r.kt)("th",null,(0,r.kt)("span",{className:"letter"},"n")),(0,r.kt)("td",null,(0,r.kt)("em",null,(0,r.kt)("strong",null,"n"),"\xe9, ",(0,r.kt)("strong",null,"n"),"efa, va",(0,r.kt)("strong",null,"n"),"da"),(0,r.kt)("br",null),(0,r.kt)("br",null),(0,r.kt)("audio",{controls:!0},(0,r.kt)("source",{src:(0,s.Z)("/audio/ne-nefa-vanda.m4a"),type:"audio/mp4"}),"Your browser does not support audio.")),(0,r.kt)("td",null,(0,r.kt)("em",null,(0,r.kt)("span",{className:"highlighter"},(0,r.kt)("strong",null,"hn")),"\xe9, ",(0,r.kt)("span",{className:"highlighter"},(0,r.kt)("strong",null,"hn")),"efa, va",(0,r.kt)("span",{className:"highlighter"},(0,r.kt)("strong",null,"n")),"ta"),(0,r.kt)("br",null),(0,r.kt)("br",null),(0,r.kt)("audio",{controls:!0},(0,r.kt)("source",{src:(0,s.Z)("/audio/hne-hnefa-vanta.m4a"),type:"audio/mp4"}),"Your browser does not support audio."))),(0,r.kt)("tr",null,(0,r.kt)("th",null,(0,r.kt)("span",{className:"letter"},"r")),(0,r.kt)("td",null,(0,r.kt)("em",null,(0,r.kt)("strong",null,"r"),"aun, ",(0,r.kt)("strong",null,"r"),"ifinn, bj\xf6",(0,r.kt)("strong",null,"r"),"g"),(0,r.kt)("br",null),(0,r.kt)("br",null),(0,r.kt)("audio",{controls:!0},(0,r.kt)("source",{src:(0,s.Z)("/audio/raun-rifinn-bjorg.m4a"),type:"audio/mp4"}),"Your browser does not support audio.")),(0,r.kt)("td",null,(0,r.kt)("em",null,(0,r.kt)("span",{className:"highlighter"},(0,r.kt)("strong",null,"hr")),"aun, ",(0,r.kt)("span",{className:"highlighter"},(0,r.kt)("strong",null,"hr")),"ifinn, bj\xf6",(0,r.kt)("span",{className:"highlighter"},(0,r.kt)("strong",null,"r")),"k"),(0,r.kt)("br",null),(0,r.kt)("br",null),(0,r.kt)("audio",{controls:!0},(0,r.kt)("source",{src:(0,s.Z)("/audio/hraun-hrifinn-bjork.m4a"),type:"audio/mp4"}),"Your browser does not support audio.")))))),(0,r.kt)("p",null,"Some notes on the above:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"In ",(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("em",{parentName:"strong"},"hl"),", ",(0,r.kt)("em",{parentName:"strong"},"hn")," and ",(0,r.kt)("em",{parentName:"strong"},"hr")),", no /h/ sound is pronounced, ","<","h",">"," is there simply to indicate that the next sound is devoiced;"),(0,r.kt)("li",{parentName:"ul"},"For ",(0,r.kt)("strong",{parentName:"li"},"devoiced ",(0,r.kt)("em",{parentName:"strong"},"m")," and ",(0,r.kt)("em",{parentName:"strong"},"n")),", close your mouth completely. The air should be leaving through your nostrils. Check you\u2019re doing this right by placing a finger under your nostrils and feeling for the puff of air \ud83d\udc49\ud83d\udc43")),(0,r.kt)("h2",{id:"t-insertion"},(0,r.kt)("em",{parentName:"h2"},"t"),"-insertion"),(0,r.kt)("p",null,"The double consonants ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"ll"))," and ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"nn"))," have two different pronunciations depending on the context."),(0,r.kt)("figure",null,(0,r.kt)("table",null,(0,r.kt)("tbody",null,(0,r.kt)("tr",null,(0,r.kt)("th",{width:"150px",rowSpan:"2"},(0,r.kt)("span",{className:"letter"},"ll")),(0,r.kt)("td",null,"[",(0,r.kt)("span",{className:"highlighter"},"tl"),"] in native Icelandic words:",(0,r.kt)("br",null),"\xa0\xa0\xa0\xa0",(0,r.kt)("em",null,"st\xf3",(0,r.kt)("span",{className:"highlighter"},(0,r.kt)("strong",null,"ll")),", bo",(0,r.kt)("span",{className:"highlighter"},(0,r.kt)("strong",null,"ll")),"i, mi",(0,r.kt)("span",{className:"highlighter"},(0,r.kt)("strong",null,"ll")),"i, tr\xf6",(0,r.kt)("span",{className:"highlighter"},(0,r.kt)("strong",null,"ll")),", P\xe1",(0,r.kt)("span",{className:"highlighter"},(0,r.kt)("strong",null,"ll"))),(0,r.kt)("br",null),(0,r.kt)("br",null),(0,r.kt)("audio",{controls:!0},(0,r.kt)("source",{src:(0,s.Z)("/audio/stoll-bolli.m4a"),type:"audio/mp4"}),"Your browser does not support audio."))),(0,r.kt)("tr",null,(0,r.kt)("td",null,"[",(0,r.kt)("span",{className:"ushift"},"l\u02d0"),"] (long \u201cl\u201d sound) in loanwords and nicknames (",(0,r.kt)("em",null,"g\xe6lun\xf6fn"),"):",(0,r.kt)("br",null),"\xa0\xa0\xa0\xa0",(0,r.kt)("em",null,"bo",(0,r.kt)("span",{className:"ushift"},(0,r.kt)("strong",null,"ll")),"a, my",(0,r.kt)("span",{className:"ushift"},(0,r.kt)("strong",null,"ll")),"a, gri",(0,r.kt)("span",{className:"ushift"},(0,r.kt)("strong",null,"ll")),", Pa",(0,r.kt)("span",{className:"ushift"},(0,r.kt)("strong",null,"ll")),"i"),(0,r.kt)("br",null),(0,r.kt)("br",null),(0,r.kt)("audio",{controls:!0},(0,r.kt)("source",{src:(0,s.Z)("/audio/bolla-mylla.m4a"),type:"audio/mp4"}),"Your browser does not support audio."))),(0,r.kt)("tr",null,(0,r.kt)("th",{width:"150px",rowSpan:"2"},(0,r.kt)("span",{className:"letter"},"nn")),(0,r.kt)("td",null,"[",(0,r.kt)("span",{className:"highlighter"},"tn"),"] after accented vowels, ",(0,r.kt)("em",null,"\xe6"),", ",(0,r.kt)("em",null,"ei/ey")," and ",(0,r.kt)("em",null,"au"),":",(0,r.kt)("br",null),"\xa0\xa0\xa0\xa0",(0,r.kt)("em",null,"f\xed",(0,r.kt)("span",{className:"highlighter"},(0,r.kt)("strong",null,"nn")),", br\xfa",(0,r.kt)("span",{className:"highlighter"},(0,r.kt)("strong",null,"nn")),", ei",(0,r.kt)("span",{className:"highlighter"},(0,r.kt)("strong",null,"nn"))),(0,r.kt)("br",null),(0,r.kt)("br",null),(0,r.kt)("audio",{controls:!0},(0,r.kt)("source",{src:(0,s.Z)("/audio/finn-brunn.m4a"),type:"audio/mp4"}),"Your browser does not support audio."))),(0,r.kt)("tr",null,(0,r.kt)("td",null,"[",(0,r.kt)("span",{className:"ushift"},"n\u02d0"),"] (long \u201cn\u201d sound) after all other vowels:",(0,r.kt)("br",null),"\xa0\xa0\xa0\xa0",(0,r.kt)("em",null,"fi",(0,r.kt)("span",{className:"ushift"},(0,r.kt)("strong",null,"nn")),"a, bru",(0,r.kt)("span",{className:"ushift"},(0,r.kt)("strong",null,"nn")),"ur, e",(0,r.kt)("span",{className:"ushift"},(0,r.kt)("strong",null,"nn")),", t\xf6",(0,r.kt)("span",{className:"ushift"},(0,r.kt)("strong",null,"nn"))),(0,r.kt)("br",null),(0,r.kt)("br",null),(0,r.kt)("audio",{controls:!0},(0,r.kt)("source",{src:(0,s.Z)("/audio/finna-brunnur.m4a"),type:"audio/mp4"}),"Your browser does not support audio.")))))),(0,r.kt)("p",null,"What\u2019s happening here is that a /t/ sound is inserted before the /l/ or /n/. An additional thing to be aware of is ",(0,r.kt)("strong",{parentName:"p"},"if /l/ or /n/ follows /t/ at the end of a word, it gets devoiced"),". Play the examples above and listen for how the /l/ or /n/ is pronounced at the end of a word."),(0,r.kt)("p",null,"Another situation where we get ",(0,r.kt)("em",{parentName:"p"},"t"),"-insertion is in the consonant clusters ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"rl"))," and ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"rn")),":"),(0,r.kt)("figure",null,(0,r.kt)("table",null,(0,r.kt)("tbody",null,(0,r.kt)("tr",null,(0,r.kt)("th",{width:"150px"},(0,r.kt)("span",{className:"letter"},"rl")),(0,r.kt)("td",null,"[rtl]",(0,r.kt)("br",null),"\xa0\xa0\xa0\xa0",(0,r.kt)("em",null,"ka",(0,r.kt)("span",{className:"highlighter"},(0,r.kt)("strong",null,"rl")),", fe",(0,r.kt)("span",{className:"highlighter"},(0,r.kt)("strong",null,"rl")),"i, E",(0,r.kt)("span",{className:"highlighter"},(0,r.kt)("strong",null,"rl")),"a"),(0,r.kt)("br",null),(0,r.kt)("br",null),(0,r.kt)("audio",{controls:!0},(0,r.kt)("source",{src:(0,s.Z)("/audio/karl-ferli.m4a"),type:"audio/mp4"}),"Your browser does not support audio."))),(0,r.kt)("tr",null,(0,r.kt)("th",null,(0,r.kt)("span",{className:"letter"},"rn")),(0,r.kt)("td",null,"[rtn]",(0,r.kt)("br",null),"\xa0\xa0\xa0\xa0",(0,r.kt)("em",null,"ba",(0,r.kt)("span",{className:"highlighter"},(0,r.kt)("strong",null,"rn")),"a, tj\xf6",(0,r.kt)("span",{className:"highlighter"},(0,r.kt)("strong",null,"rn")),", \xd6",(0,r.kt)("span",{className:"highlighter"},(0,r.kt)("strong",null,"rn"))),(0,r.kt)("br",null),(0,r.kt)("br",null),(0,r.kt)("audio",{controls:!0},(0,r.kt)("source",{src:(0,s.Z)("/audio/barna-tjorn.m4a"),type:"audio/mp4"}),"Your browser does not support audio.")))))))}h.isMDXComponent=!0}}]);