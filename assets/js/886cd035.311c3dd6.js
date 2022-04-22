(self.webpackChunkgramref=self.webpackChunkgramref||[]).push([[1138],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return m},kt:function(){return d}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},m=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),c=p(n),d=i,k=c["".concat(s,".").concat(d)]||c[d]||u[d]||a;return n?r.createElement(k,o(o({ref:t},m),{},{components:n})):r.createElement(k,o({ref:t},m))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var p=2;p<a;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},9797:function(e,t,n){"use strict";n.d(t,{o:function(){return a}});var r=n(4578),i=n(7294),a=function(e){function t(t){var n;return(n=e.call(this,t)||this).state={class:"highlighter"},n}(0,r.Z)(t,e);var n=t.prototype;return n.addHighlight=function(e){var t,n=document.getElementsByName(e);for(t=0;t<n.length;t++)n[t].classList.add("highlighted")},n.removeHighlight=function(e){var t,n=document.getElementsByName(e);for(t=0;t<n.length;t++)n[t].classList.remove("highlighted")},n.render=function(){return i.createElement(i.Fragment,null,i.createElement("span",{onMouseEnter:this.addHighlight.bind(this,this.props.name),onMouseLeave:this.removeHighlight.bind(this,this.props.name),className:this.state.class,name:this.props.name},this.props.text))},t}(i.Component)},1333:function(e,t,n){"use strict";n.d(t,{R:function(){return l}});var r=n(4578),i=n(7294),a=n(4052),o=n.n(a),l=function(e){function t(t){var n;return(n=e.call(this,t)||this).state={termWidth:""},n}(0,r.Z)(t,e);var n=t.prototype;return n.componentDidMount=function(){var e=document.getElementById("term-"+this.props.term).clientWidth,t=document.getElementById("tooltip-"+this.props.term).clientWidth;this.setState({termWidth:e,tooltipWidth:t})},n.offset=function(){var e=0-this.state.tooltipWidth/2+this.state.termWidth/2+"px";return e},n.displayTerm=function(){return this.props.display?this.props.display:this.props.term},n.getIcelandicTerm=function(){var e=this;return o().terms.filter((function(t){return t.term.includes(e.props.term.toLowerCase())}))[0].icelandic},n.render=function(){return i.createElement(i.Fragment,null,i.createElement("span",{className:"term",id:"term-"+this.props.term},this.displayTerm(),i.createElement("span",{id:"tooltip-"+this.props.term,className:"tooltip",style:{left:this.offset()}},"\ud83c\uddee\ud83c\uddf8 ",this.getIcelandicTerm())))},t}(i.Component)},4052:function(e){e.exports={terms:[,{term:"verb",icelandic:"s\xf6gn"},{term:"pronoun",icelandic:"fornafn"},{term:"mood",icelandic:"h\xe1ttur"},{term:"accusative",icelandic:"\xfeolfall"},{term:"active voice",icelandic:"germynd"},{term:"adjective",icelandic:"l\xfdsingaror\xf0"},{term:"aspiration",icelandic:"fr\xe1bl\xe1stur"},{term:"case",icelandic:"fall"},{term:"comparative",icelandic:"mi\xf0stig"},{term:"consonant",icelandic:"samhlj\xf3\xf0"},{term:"dative",icelandic:"\xfe\xe1gufall"},{term:"definite article",icelandic:"\xe1kve\xf0inn greinir"},{term:"demonstrative pronoun",icelandic:"\xe1bendingarfornafn"},{term:"devoicing",icelandic:"afr\xf6ddun"},{term:"diphthong",icelandic:"tv\xedhlj\xf3\xf0"},{term:"direct object",icelandic:"beint andlag"},{term:"ending",icelandic:"ending"},{term:"feminine",icelandic:"kvenkyn"},{term:"first person",icelandic:"fyrsta pers\xf3na"},{term:"gender",icelandic:"kyn"},{term:"genitive",icelandic:"eignarfall"},{term:"indefinite pronoun",icelandic:"\xf3\xe1kve\xf0i\xf0 fornafn"},{term:"indicative",icelandic:"frams\xf6guh\xe1ttur"},{term:"indirect object",icelandic:"\xf3beint andlag"},{term:"imperative",icelandic:"bo\xf0h\xe1ttur"},{term:"infinitive",icelandic:"nafnh\xe1ttur"},{term:"masculine",icelandic:"karlkyn"},{term:"middle voice",icelandic:"mi\xf0mynd"},{term:"monophthong",icelandic:"einhlj\xf3\xf0"},{term:"neuter",icelandic:"hvorugkyn"},{term:"nominative",icelandic:"nefnifall"},{term:"passive voice",icelandic:"\xfeolmynd"},{term:"past participle",icelandic:"l\xfdsingarh\xe1ttur \xfe\xe1t\xed\xf0ar"},{term:"past tense",icelandic:"\xfe\xe1t\xed\xf0"},{term:"personal pronoun",icelandic:"pers\xf3nufornafn"},{term:"plural",icelandic:"fleirtala"},{term:"positive",icelandic:"frumstig"},{term:"preaspiration",icelandic:"a\xf0bl\xe1stur"},{term:"preposition",icelandic:"forsetning"},{term:"principal parts",icelandic:"kennimyndir"},{term:"reflexive pronoun",icelandic:"afturbeygt fornafn"},{term:"possessive pronoun",icelandic:"eignarfornafn"},{term:"present participle",icelandic:"l\xfdsingarh\xe1ttur n\xfat\xed\xf0ar"},{term:"present tense",icelandic:"n\xfat\xed\xf0"},{term:"second person",icelandic:"\xf6nnur pers\xf3na"},{term:"singular",icelandic:"eintala"},{term:"stem",icelandic:"stofn"},{term:"strong",icelandic:"sterk beyging"},{term:"strong verb",icelandic:"sterk s\xf6gn"},{term:"subjunctive",icelandic:"vi\xf0tengingarh\xe1ttur"},{term:"superlative",icelandic:"efsta stig"},{term:"supine",icelandic:"sagnb\xf3t"},{term:"third person",icelandic:"\xferi\xf0ja pers\xf3na"},{term:"transitive",icelandic:"\xe1hrifss\xf6gn"},{term:"weak",icelandic:"veik beyging"},{term:"weak verb",icelandic:"veik s\xf6gn"}]}},2583:function(e,t,n){"use strict";n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return m},default:function(){return g},frontMatter:function(){return p},metadata:function(){return u},toc:function(){return d}});var r=n(7462),i=n(3366),a=(n(7294),n(3905)),o=n(1333),l=n(9797),s=["components"],p={id:"pronoun-intro",title:"Introduction to pronouns",description:"An explanation of Icelandic pronouns, including personal, possessive, indefinite, reflexive and demonstrative pronouns."},m=void 0,u={unversionedId:"pronouns/pronoun-intro",id:"pronouns/pronoun-intro",title:"Introduction to pronouns",description:"An explanation of Icelandic pronouns, including personal, possessive, indefinite, reflexive and demonstrative pronouns.",source:"@site/docs/pronouns/intro.md",sourceDirName:"pronouns",slug:"/pronouns/pronoun-intro",permalink:"/docs/pronouns/pronoun-intro",tags:[],version:"current",frontMatter:{id:"pronoun-intro",title:"Introduction to pronouns",description:"An explanation of Icelandic pronouns, including personal, possessive, indefinite, reflexive and demonstrative pronouns."},sidebar:"someSidebar",previous:{title:"Usage notes",permalink:"/docs/adjectives/usage"},next:{title:"Personal",permalink:"/docs/pronouns/personal"}},c={},d=[{value:"Personal",id:"personal",level:2},{value:"Possessive",id:"possessive",level:2},{value:"Reflexive",id:"reflexive",level:2},{value:"Indefinite",id:"indefinite",level:2},{value:"Demonstrative",id:"demonstrative",level:2}],k={toc:d};function g(e){var t=e.components,n=(0,i.Z)(e,s);return(0,a.kt)("wrapper",(0,r.Z)({},k,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Pronouns in Icelandic can be divided into different groups:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\ud83d\udc64 ",(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("a",{parentName:"strong",href:"personal"},"Personal pronouns")),", which stand in place of names or nouns;"),(0,a.kt)("li",{parentName:"ul"},"\ud83d\ude4b\ud83c\udffb\u200d\u2640\ufe0f ",(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("a",{parentName:"strong",href:"possessive"},"Possessive pronouns")),", which indicate who or what something belongs to;"),(0,a.kt)("li",{parentName:"ul"},"\ud83d\udd01 ",(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("a",{parentName:"strong",href:"reflexive"},"Reflexive pronouns")),", which indicate that someone is doing something to ",(0,a.kt)("em",{parentName:"li"},"themself"),";"),(0,a.kt)("li",{parentName:"ul"},"\ud83d\udd22 ",(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("a",{parentName:"strong",href:"indefinite"},"Indefinite pronouns")),", which give information about the number or quantity of something;"),(0,a.kt)("li",{parentName:"ul"},"\ud83d\udc49 ",(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("a",{parentName:"strong",href:"demonstrative"},"Demonstrative pronouns")),", which point to a ",(0,a.kt)("em",{parentName:"li"},"specific")," thing.")),(0,a.kt)("p",null,"A ",(0,a.kt)(o.R,{term:"pronoun",display:"pronoun",mdxType:"Term"})," can stand on its own or stand with a noun or adjective, depending on its meaning. "),(0,a.kt)("p",null,"\ud83e\udde0 This might all sound a bit fuzzy, so let\u2019s look at some examples from each category."),(0,a.kt)("h2",{id:"personal"},"Personal"),(0,a.kt)("p",null,"When many people think of the word \u201cpronoun\u201d, they think of a ",(0,a.kt)(o.R,{term:"personal pronoun",display:"personal pronoun",mdxType:"Term"}),", like ",(0,a.kt)("em",{parentName:"p"},"\xe9g"),", ",(0,a.kt)("em",{parentName:"p"},"hann")," or ",(0,a.kt)("em",{parentName:"p"},"vi\xf0"),":"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("em",{parentName:"p"},(0,a.kt)("strong",{parentName:"em"},"\xc9g")," f\xf3r \xed bakar\xedi\xf0 og keypti brau\xf0.",(0,a.kt)("br",null),"\xde\xf3r vinnur \xe1 veitingasta\xf0. ",(0,a.kt)("strong",{parentName:"em"},"Hann")," er kokkur.",(0,a.kt)("br",null),(0,a.kt)("strong",{parentName:"em"},"Vi\xf0")," \xe6tlum a\xf0 fara \xed b\xed\xf3 \xed kv\xf6ld."))),(0,a.kt)("p",null,"Personal pronouns in Icelandic inflect for:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Person")," \u2013 first, second, third;"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Gender")," \u2013 masculine, feminine, neuter;"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Number")," \u2013 singular, plural;"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Case")," \u2013 nominative, accusative, dative, genitive.")),(0,a.kt)("p",null,"Despite their name, personal pronouns are not only used about people. They can also be used to refer to nouns, which can be masculine, feminine or neuter (blue indicates that the words are referring to the same thing):"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("em",{parentName:"p"},"\xdeetta er ",(0,a.kt)(l.o,{name:"pp1",text:"b\xedll",mdxType:"Highlighter"}),". ",(0,a.kt)("strong",{parentName:"em"},(0,a.kt)(l.o,{name:"pp1",text:"Hann",mdxType:"Highlighter"}))," er bl\xe1r.",(0,a.kt)("br",null),"\xdeetta er ",(0,a.kt)(l.o,{name:"pp2",text:"kaka",mdxType:"Highlighter"}),". Viltu bor\xf0a ",(0,a.kt)("strong",{parentName:"em"},(0,a.kt)(l.o,{name:"pp2",text:"hana",mdxType:"Highlighter"})),"?",(0,a.kt)("br",null),"\xdeetta er ",(0,a.kt)(l.o,{name:"pp3",text:"tr\xe9",mdxType:"Highlighter"}),". \xdea\xf0 er k\xf6ttur \xed ",(0,a.kt)("strong",{parentName:"em"},(0,a.kt)(l.o,{name:"pp3",text:"\xfev\xed",mdxType:"Highlighter"})),"."))),(0,a.kt)("p",null,"Here, the personal pronouns are being used instead of repeating the noun. We could say for example:"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("em",{parentName:"p"},"\xdeetta er b\xedll. ",(0,a.kt)("strong",{parentName:"em"},"B\xedllinn")," er bl\xe1r."))),(0,a.kt)("p",null,"But instead, we can just say ",(0,a.kt)("em",{parentName:"p"},"hann")," and avoid repeating ",(0,a.kt)("em",{parentName:"p"},"b\xedll"),". Otherwise we tend to sound a bit like a 3 year-old \ud83d\udc76"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"personal"},"Read more about Icelandic personal pronouns \u2192"))),(0,a.kt)("h2",{id:"possessive"},"Possessive"),(0,a.kt)("p",null,"As the name suggests, a ",(0,a.kt)(o.R,{term:"possessive pronoun",display:"possessive pronoun",mdxType:"Term"})," tells us information about who or what something belongs to:"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("em",{parentName:"p"},"\xdeetta er jakkinn ",(0,a.kt)("strong",{parentName:"em"},"minn"),".",(0,a.kt)("br",null),"Er \xfeetta taskan ",(0,a.kt)("strong",{parentName:"em"},"\xfe\xedn"),"?",(0,a.kt)("br",null),"Hvar er h\xfasi\xf0 ",(0,a.kt)("strong",{parentName:"em"},"\xfeeirra"),"?"))),(0,a.kt)("p",null,"Possessive pronouns in Icelandic inflect for:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Person")," \u2013 first, second, third;"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Gender")," \u2013 masculine, feminine, neuter;"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Number")," \u2013 singular, plural;"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Case")," \u2013 nominative, accusative, dative, genitive.")),(0,a.kt)("p",null,"In Icelandic, a possessive pronoun normally comes after the thing being described."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"possessive"},"Read more about Icelandic possessive pronouns \u2192"))),(0,a.kt)("h2",{id:"reflexive"},"Reflexive"),(0,a.kt)("p",null,"A ",(0,a.kt)(o.R,{term:"reflexive pronoun",display:"reflexive pronoun",mdxType:"Term"})," is used to show that someone or something is acting on or affecting itself:"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("em",{parentName:"p"},(0,a.kt)(l.o,{name:"r1",text:"J\xf3natan",mdxType:"Highlighter"})," meiddi ",(0,a.kt)("strong",{parentName:"em"},(0,a.kt)(l.o,{name:"r1",text:"sig",mdxType:"Highlighter"})),".",(0,a.kt)("br",null),(0,a.kt)(l.o,{name:"r2",text:"Mamma",mdxType:"Highlighter"})," keypti ",(0,a.kt)("strong",{parentName:"em"},(0,a.kt)(l.o,{name:"r2",text:"s\xe9r",mdxType:"Highlighter"}))," flottan kj\xf3l."))),(0,a.kt)("p",null,"Reflexive pronouns can never be the subject of a sentence. As such, they don\u2019t exist in the nominative. Icelandic reflexive pronouns inflect for:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Person")," \u2013 first, second, third;"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Number")," \u2013 singular, plural;"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Case")," \u2013 accusative, dative, genitive.")),(0,a.kt)("p",null,"They don\u2019t inflect for gender."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"reflexive"},"Read more about Icelandic reflexive pronouns \u2192"))),(0,a.kt)("h2",{id:"indefinite"},"Indefinite"),(0,a.kt)("p",null,"An ",(0,a.kt)(o.R,{term:"indefinite pronoun",display:"indefinite pronoun",mdxType:"Term"})," tells us something about the quantity or number of something, generally in vague terms rather than specific terms:"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("em",{parentName:"p"},"\xdea\xf0 er ",(0,a.kt)("strong",{parentName:"em"},"einhver")," ma\xf0ur \xed h\xfasinu.",(0,a.kt)("br",null),"Amma baka\xf0i ",(0,a.kt)("strong",{parentName:"em"},"nokkrar")," k\xf6kur.",(0,a.kt)("br",null),(0,a.kt)("strong",{parentName:"em"},"Allir")," sem m\xe6ttu voru \xe1n\xe6g\xf0ir.")," ")),(0,a.kt)("p",null,"All indefinite pronouns in Icelandic inflect for:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Gender")," \u2013 masculine, feminine, neuter;"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Number")," \u2013 singular, plural;"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Case")," \u2013 nominative, accusative, dative, genitive.")),(0,a.kt)("p",null,"Indefinite pronouns can stand on their own or stand with a noun or adjective:"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("em",{parentName:"p"},"Mig langar \xed ",(0,a.kt)("strong",{parentName:"em"},"eitthva\xf0 girnilegt")," a\xf0 bor\xf0a."))),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"indefinite"},"Read more about Icelandic indefinite pronouns \u2192"))),(0,a.kt)("h2",{id:"demonstrative"},"Demonstrative"),(0,a.kt)("p",null,"A ",(0,a.kt)(o.R,{term:"demonstrative pronoun",display:"demonstrative pronoun",mdxType:"Term"})," is used to point to a specific thing (normally amongst a group of other, similar things):"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("em",{parentName:"p"},(0,a.kt)("strong",{parentName:"em"},"\xdeessi")," hamborgari er \xf3tr\xfalega g\xf3\xf0ur!",(0,a.kt)("br",null),"\xc9g \xe6tla ekki a\xf0 selja ",(0,a.kt)("strong",{parentName:"em"},"\xfeessa")," peysu, \xe9g \xe6tla a\xf0 selja ",(0,a.kt)("strong",{parentName:"em"},"hina"),"."))),(0,a.kt)("p",null,"There are only three demonstrative pronouns in Icelandic:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("em",{parentName:"li"},(0,a.kt)("strong",{parentName:"em"},"\xfeessi"))," \u201cthis (one), that (one)\u201d;"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("em",{parentName:"li"},(0,a.kt)("strong",{parentName:"em"},"s\xe1"))," \u201cthat (one)\u201d;"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("em",{parentName:"li"},(0,a.kt)("strong",{parentName:"em"},"hinn"))," \u201cthe other (one)\u201d.")),(0,a.kt)("p",null,"All of them inflect for:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Gender")," \u2013 masculine, feminine, neuter;"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Number")," \u2013 singular, plural;"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Case")," \u2013 nominative, accusative, dative, genitive.")),(0,a.kt)("p",null,"Demonstrative pronouns are often used contrastively. This means you can often find them in pairs like ",(0,a.kt)("em",{parentName:"p"},"\xfeessi ... hinn"),". "),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"demonstrative"},"Read more about Icelandic demonstrative pronouns \u2192"))))}g.isMDXComponent=!0}}]);