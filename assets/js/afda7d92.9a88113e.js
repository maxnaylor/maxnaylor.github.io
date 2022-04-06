(self.webpackChunkgramref=self.webpackChunkgramref||[]).push([[2558],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return u},kt:function(){return d}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var o=r.createContext({}),m=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=m(e.components);return r.createElement(o.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,o=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=m(n),d=i,k=p["".concat(o,".").concat(d)]||p[d]||c[d]||a;return n?r.createElement(k,s(s({ref:t},u),{},{components:n})):r.createElement(k,s({ref:t},u))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,s=new Array(a);s[0]=p;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l.mdxType="string"==typeof e?e:i,s[1]=l;for(var m=2;m<a;m++)s[m]=n[m];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},9797:function(e,t,n){"use strict";n.d(t,{o:function(){return a}});var r=n(4578),i=n(7294),a=function(e){function t(t){var n;return(n=e.call(this,t)||this).state={class:"highlighter"},n}(0,r.Z)(t,e);var n=t.prototype;return n.addHighlight=function(e){var t,n=document.getElementsByName(e);for(t=0;t<n.length;t++)n[t].classList.add("highlighted")},n.removeHighlight=function(e){var t,n=document.getElementsByName(e);for(t=0;t<n.length;t++)n[t].classList.remove("highlighted")},n.render=function(){return i.createElement(i.Fragment,null,i.createElement("span",{onMouseEnter:this.addHighlight.bind(this,this.props.name),onMouseLeave:this.removeHighlight.bind(this,this.props.name),className:this.state.class,name:this.props.name},this.props.text))},t}(i.Component)},1333:function(e,t,n){"use strict";n.d(t,{R:function(){return l}});var r=n(4578),i=n(7294),a=n(4052),s=n.n(a),l=function(e){function t(t){var n;return(n=e.call(this,t)||this).state={termWidth:""},n}(0,r.Z)(t,e);var n=t.prototype;return n.componentDidMount=function(){var e=document.getElementById("term-"+this.props.term).clientWidth,t=document.getElementById("tooltip-"+this.props.term).clientWidth;this.setState({termWidth:e,tooltipWidth:t})},n.offset=function(){var e=0-this.state.tooltipWidth/2+this.state.termWidth/2+"px";return e},n.displayTerm=function(){return this.props.display?this.props.display:this.props.term},n.getIcelandicTerm=function(){var e=this;return s().terms.filter((function(t){return t.term.includes(e.props.term.toLowerCase())}))[0].icelandic},n.render=function(){return i.createElement(i.Fragment,null,i.createElement("span",{className:"term",id:"term-"+this.props.term},this.displayTerm(),i.createElement("span",{id:"tooltip-"+this.props.term,className:"tooltip",style:{left:this.offset()}},"\ud83c\uddee\ud83c\uddf8 ",this.getIcelandicTerm())))},t}(i.Component)},4052:function(e){e.exports={terms:[,{term:"verb",icelandic:"s\xf6gn"},{term:"accusative",icelandic:"\xfeolfall"},{term:"active voice",icelandic:"germynd"},{term:"adjective",icelandic:"l\xfdsingaror\xf0"},{term:"case",icelandic:"fall"},{term:"comparative",icelandic:"mi\xf0stig"},{term:"dative",icelandic:"\xfe\xe1gufall"},{term:"definite article",icelandic:"\xe1kve\xf0inn greinir"},{term:"demonstrative pronoun",icelandic:"\xe1bendingarfornafn"},{term:"ending",icelandic:"ending"},{term:"feminine",icelandic:"kvenkyn"},{term:"first person",icelandic:"fyrsta pers\xf3na"},{term:"gender",icelandic:"kyn"},{term:"genitive",icelandic:"eignarfall"},{term:"indefinite pronoun",icelandic:"\xf3\xe1kve\xf0i\xf0 fornafn"},{term:"indicative",icelandic:"frams\xf6guh\xe1ttur"},{term:"imperative",icelandic:"bo\xf0h\xe1ttur"},{term:"infinitive",icelandic:"nafnh\xe1ttur"},{term:"masculine",icelandic:"karlkyn"},{term:"middle voice",icelandic:"mi\xf0mynd"},{term:"neuter",icelandic:"hvorugkyn"},{term:"nominative",icelandic:"nefnifall"},{term:"passive voice",icelandic:"\xfeolmynd"},{term:"past participle",icelandic:"l\xfdsingarh\xe1ttur \xfe\xe1t\xed\xf0ar"},{term:"past tense",icelandic:"\xfe\xe1t\xed\xf0"},{term:"personal pronoun",icelandic:"pers\xf3nufornafn"},{term:"plural",icelandic:"fleirtala"},{term:"positive",icelandic:"frumstig"},{term:"reflexive pronoun",icelandic:"afturbeygt fornafn"},{term:"possessive pronoun",icelandic:"eignarfornafn"},{term:"present participle",icelandic:"l\xfdsingarh\xe1ttur n\xfat\xed\xf0ar"},{term:"present tense",icelandic:"n\xfat\xed\xf0"},{term:"pronoun",icelandic:"fornafn"},{term:"second person",icelandic:"\xf6nnur pers\xf3na"},{term:"singular",icelandic:"eintala"},{term:"stem",icelandic:"stofn"},{term:"strong",icelandic:"sterk beyging"},{term:"strong verb",icelandic:"sterk s\xf6gn"},{term:"subjunctive",icelandic:"vi\xf0tengingarh\xe1ttur"},{term:"superlative",icelandic:"efsta stig"},{term:"supine",icelandic:"sagnb\xf3t"},{term:"third person",icelandic:"\xferi\xf0ja pers\xf3na"},{term:"transitive",icelandic:"\xe1hrifss\xf6gn"},{term:"weak",icelandic:"veik beyging"}]}},6748:function(e,t,n){"use strict";n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return u},default:function(){return h},frontMatter:function(){return m},metadata:function(){return c},toc:function(){return d}});var r=n(7462),i=n(3366),a=(n(7294),n(3905)),s=n(1333),l=n(9797),o=["components"],m={id:"demonstrative",title:"Demonstrative pronouns",sidebar_label:"Demonstrative"},u=void 0,c={unversionedId:"pronouns/demonstrative",id:"pronouns/demonstrative",title:"Demonstrative pronouns",description:"A  in Icelandic is used to:",source:"@site/docs/pronouns/demonstrative.md",sourceDirName:"pronouns",slug:"/pronouns/demonstrative",permalink:"/docs/pronouns/demonstrative",tags:[],version:"current",frontMatter:{id:"demonstrative",title:"Demonstrative pronouns",sidebar_label:"Demonstrative"},sidebar:"someSidebar",previous:{title:"Indefinite",permalink:"/docs/pronouns/indefinite"},next:{title:"Introduction to prepositions",permalink:"/docs/prepositions/preposition-intro"}},p={},d=[{value:"<em>\xfeessi</em>",id:"\xfeessi",level:2},{value:"Usage",id:"usage",level:3},{value:"Formation",id:"formation",level:3},{value:"<em>s\xe1</em>",id:"s\xe1",level:2}],k={toc:d};function h(e){var t=e.components,n=(0,i.Z)(e,o);return(0,a.kt)("wrapper",(0,r.Z)({},k,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"A ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)(s.R,{term:"demonstrative pronoun",mdxType:"Term"}))," in Icelandic is used to:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\ud83d\udc49 point to a specific thing or person, usually nearby or in visual range,"),(0,a.kt)("li",{parentName:"ul"},"\ud83d\uddc4 distinguish an item in a set from other things in that set.")),(0,a.kt)("p",null,"Icelandic has three demonstratives: ",(0,a.kt)("em",{parentName:"p"},(0,a.kt)("a",{parentName:"em",href:"#%C3%BEessi"},"\xfeessi")),", ",(0,a.kt)("em",{parentName:"p"},(0,a.kt)("a",{parentName:"em",href:"#s%C3%A1"},"s\xe1"))," and ",(0,a.kt)("em",{parentName:"p"},(0,a.kt)("a",{parentName:"em",href:"#hinn"},"hinn")),". Let\u2019s look at some examples:"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("em",{parentName:"p"},"\xc9g hef aldrei s\xe9\xf0 ",(0,a.kt)("strong",{parentName:"em"},"\xfeessa")," konu \xe1 \xe6vi minni.",(0,a.kt)("br",null),"Nennir\xf0u a\xf0 r\xe9tta m\xe9r ",(0,a.kt)("strong",{parentName:"em"},"\xfeessum")," bolla \xfearna?",(0,a.kt)("br",null),"Hann er ",(0,a.kt)("strong",{parentName:"em"},"s\xe1")," sem keypti h\xfasi\xf0.",(0,a.kt)("br",null),"Enginn skilur ",(0,a.kt)("strong",{parentName:"em"},"\xfea\xf0")," sem hann segir.",(0,a.kt)("br",null),"Settu ",(0,a.kt)("strong",{parentName:"em"},"\xfeennan")," kassa \xed b\xedlinn og \xe9g s\xe6ki alla ",(0,a.kt)("strong",{parentName:"em"},"hina")," kassana."))),(0,a.kt)("h2",{id:"\xfeessi"},(0,a.kt)("em",{parentName:"h2"},"\xfeessi")),(0,a.kt)("h3",{id:"usage"},"Usage"),(0,a.kt)("p",null,"The first demonstrative, ",(0,a.kt)("em",{parentName:"p"},"\xfeessi"),", is used to point to a specific thing or person \u2013 usually something within the visual range of the speaker. It can either stand on its own or be used before an indefinite noun:"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("em",{parentName:"p"},"Ertu b\xfain a\xf0 sj\xe1 ",(0,a.kt)("strong",{parentName:"em"},"\xfeetta"),"?",(0,a.kt)("br",null),(0,a.kt)("strong",{parentName:"em"},"\xdeessi")," gaffall h\xe9rna er sk\xedtugur."))),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"\xdeessi")," covers both \u201cthis\u201d and \u201cthat\u201d \u2013 Icelandic doesn\u2019t care as much about how far away something is from you, although if you want to emphasise the distance of something, you can use ",(0,a.kt)("em",{parentName:"p"},"\xfeessi h\xe9r(na)")," and ",(0,a.kt)("em",{parentName:"p"},"\xfeessi \xfear(na)"),":"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("em",{parentName:"p"},(0,a.kt)("strong",{parentName:"em"},"\xdeessi")," kj\xf3ll ",(0,a.kt)("strong",{parentName:"em"},"h\xe9rna")," er ansi flottur, en ",(0,a.kt)("strong",{parentName:"em"},"\xfeessi \xfearna")," er enn\xfe\xe1 flottari."))),(0,a.kt)("h3",{id:"formation"},"Formation"),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"\xdeessi")," has a somewhat irregular declension, although in many forms the endings are the same as the strong declension of adjectives:"),(0,a.kt)("table",{class:"full-width"},(0,a.kt)("thead",null,(0,a.kt)("tr",null,(0,a.kt)("th",{rowspan:"2"}),(0,a.kt)("th",{colspan:"3"},"Singular"),(0,a.kt)("th",{colspan:"3"},"Plural")),(0,a.kt)("tr",null,(0,a.kt)("th",null,"Masculine"),(0,a.kt)("th",null,"Feminine"),(0,a.kt)("th",null,"Neuter"),(0,a.kt)("th",null,"Masculine"),(0,a.kt)("th",null,"Feminine"),(0,a.kt)("th",null,"Neuter"))),(0,a.kt)("tbody",null,(0,a.kt)("tr",null,(0,a.kt)("th",null,"Nom."),(0,a.kt)("td",null,(0,a.kt)("em",null,"\xfeessi")),(0,a.kt)("td",null,(0,a.kt)("em",null,(0,a.kt)("strong",null,"\xfeessi"))),(0,a.kt)("td",{rowspan:"2"},(0,a.kt)("em",null,"\xfee",(0,a.kt)("strong",null,"tt"),"a")),(0,a.kt)("td",null,(0,a.kt)("em",null,"\xfeessir")),(0,a.kt)("td",{rowspan:"2"},(0,a.kt)("em",null,"\xfeessar")),(0,a.kt)("td",{rowspan:"2"},(0,a.kt)("em",null,"\xfeessi"))),(0,a.kt)("tr",null,(0,a.kt)("th",null,"Acc."),(0,a.kt)("td",null,(0,a.kt)("em",null,"\xfee",(0,a.kt)("strong",null,"nn"),"an")),(0,a.kt)("td",null,(0,a.kt)("em",null,"\xfeessa")),(0,a.kt)("td",null,(0,a.kt)("em",null,"\xfeessa"))),(0,a.kt)("tr",null,(0,a.kt)("th",null,"Dat."),(0,a.kt)("td",null,(0,a.kt)("em",null,"\xfeessum")),(0,a.kt)("td",null,(0,a.kt)("em",null,"\xfeess",(0,a.kt)("strong",null,"a"),"ri")),(0,a.kt)("td",null,(0,a.kt)("em",null,"\xfeessu")),(0,a.kt)("td",{colspan:"3",align:"center"},(0,a.kt)("em",null,"\xfeessum"))),(0,a.kt)("tr",null,(0,a.kt)("th",null,"Gen."),(0,a.kt)("td",null,(0,a.kt)("em",null,"\xfeess",(0,a.kt)("strong",null,"a"))),(0,a.kt)("td",null,(0,a.kt)("em",null,"\xfeess",(0,a.kt)("strong",null,"a"),"rar")),(0,a.kt)("td",null,(0,a.kt)("em",null,"\xfeess",(0,a.kt)("strong",null,"a"))),(0,a.kt)("td",{colspan:"3",align:"center"},(0,a.kt)("em",null,"\xfeessara"))))),(0,a.kt)("p",null,"Just like an adjective, ",(0,a.kt)("em",{parentName:"p"},"\xfeessi")," agrees in gender, number and case with the noun it modifies. If used to refer to something unknown, then the neuter singular ",(0,a.kt)("em",{parentName:"p"},"\xfeetta")," is used:"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("em",{parentName:"p"},(0,a.kt)("strong",{parentName:"em"},"\xdeessar")," myndir eru virkilega fallegar.",(0,a.kt)("br",null),"Hva\xf0 \xe1 \xe9g a\xf0 gera vi\xf0 ",(0,a.kt)("strong",{parentName:"em"},"\xfeetta"),"?"))),(0,a.kt)("p",null,"This agreement carries on between sentences. This is efficient, as it saves you having to repeat nouns or whole phrases, however it can sometimes be tricky to keep track of in a long conversation:"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("em",{parentName:"p"},"Vantar \xfeig n\xfdja ",(0,a.kt)(l.o,{name:"r1",text:"sokka",mdxType:"Highlighter"}),"? \xde\xfa m\xe1tt bara eiga ",(0,a.kt)("strong",{parentName:"em"},(0,a.kt)(l.o,{name:"r1",text:"\xfeessa",mdxType:"Highlighter"})),".",(0,a.kt)("br",null),"Hvernig l\xedst \xfe\xe9r \xe1 ",(0,a.kt)(l.o,{name:"r2",text:"bl\xe1a b\xedlinn",mdxType:"Highlighter"}),"? En ",(0,a.kt)("strong",{parentName:"em"},(0,a.kt)(l.o,{name:"r2",text:"\xfeennan",mdxType:"Highlighter"})),"?"))),(0,a.kt)("p",null,"If ",(0,a.kt)("em",{parentName:"p"},"\xfeessi")," is used by itself in the masculine, then like ",(0,a.kt)("a",{parentName:"p",href:"indefinite"},"indefinite pronouns"),", it refers to a person or people:"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("em",{parentName:"p"},"Hva\xf0 heitir ",(0,a.kt)("strong",{parentName:"em"},"\xfeessi"),"?",(0,a.kt)("br",null),"Ekki tala vi\xf0 ",(0,a.kt)("strong",{parentName:"em"},"\xfeessa"),", \xfeeir eru h\xe6ttulegir."))),(0,a.kt)("h2",{id:"s\xe1"},(0,a.kt)("em",{parentName:"h2"},"s\xe1")))}h.isMDXComponent=!0}}]);