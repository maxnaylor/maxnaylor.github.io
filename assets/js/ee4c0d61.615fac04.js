(self.webpackChunkgramref=self.webpackChunkgramref||[]).push([[33],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return u},kt:function(){return p}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),l=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),m=l(n),p=i,f=m["".concat(s,".").concat(p)]||m[p]||d[p]||a;return n?r.createElement(f,c(c({ref:t},u),{},{components:n})):r.createElement(f,c({ref:t},u))}));function p(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,c=new Array(a);c[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:i,c[1]=o;for(var l=2;l<a;l++)c[l]=n[l];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},1333:function(e,t,n){"use strict";n.d(t,{R:function(){return o}});var r=n(4578),i=n(7294),a=n(4052),c=n.n(a),o=function(e){function t(t){var n;return(n=e.call(this,t)||this).state={termWidth:""},n}(0,r.Z)(t,e);var n=t.prototype;return n.componentDidMount=function(){var e=document.getElementById("term-"+this.props.term).clientWidth,t=document.getElementById("tooltip-"+this.props.term).clientWidth;this.setState({termWidth:e,tooltipWidth:t})},n.offset=function(){var e=0-this.state.tooltipWidth/2+this.state.termWidth/2+"px";return e},n.displayTerm=function(){return this.props.display?this.props.display:this.props.term},n.getIcelandicTerm=function(){var e=this;return c().terms.filter((function(t){return t.term.includes(e.props.term.toLowerCase())}))[0].icelandic},n.render=function(){return i.createElement(i.Fragment,null,i.createElement("span",{className:"term",id:"term-"+this.props.term},this.displayTerm(),i.createElement("span",{id:"tooltip-"+this.props.term,className:"tooltip",style:{left:this.offset()}},"\ud83c\uddee\ud83c\uddf8 ",this.getIcelandicTerm())))},t}(i.Component)},4052:function(e){e.exports={terms:[,{term:"verb",icelandic:"s\xf6gn"},{term:"accusative",icelandic:"\xfeolfall"},{term:"active voice",icelandic:"germynd"},{term:"adjective",icelandic:"l\xfdsingaror\xf0"},{term:"case",icelandic:"fall"},{term:"comparative",icelandic:"mi\xf0stig"},{term:"dative",icelandic:"\xfe\xe1gufall"},{term:"definite article",icelandic:"\xe1kve\xf0inn greinir"},{term:"demonstrative pronoun",icelandic:"\xe1bendingarfornafn"},{term:"ending",icelandic:"ending"},{term:"feminine",icelandic:"kvenkyn"},{term:"first person",icelandic:"fyrsta pers\xf3na"},{term:"gender",icelandic:"kyn"},{term:"genitive",icelandic:"eignarfall"},{term:"indefinite pronoun",icelandic:"\xf3\xe1kve\xf0i\xf0 fornafn"},{term:"indicative",icelandic:"frams\xf6guh\xe1ttur"},{term:"imperative",icelandic:"bo\xf0h\xe1ttur"},{term:"infinitive",icelandic:"nafnh\xe1ttur"},{term:"masculine",icelandic:"karlkyn"},{term:"middle voice",icelandic:"mi\xf0mynd"},{term:"neuter",icelandic:"hvorugkyn"},{term:"nominative",icelandic:"nefnifall"},{term:"passive voice",icelandic:"\xfeolmynd"},{term:"past participle",icelandic:"l\xfdsingarh\xe1ttur \xfe\xe1t\xed\xf0ar"},{term:"past tense",icelandic:"\xfe\xe1t\xed\xf0"},{term:"personal pronoun",icelandic:"pers\xf3nufornafn"},{term:"plural",icelandic:"fleirtala"},{term:"positive",icelandic:"frumstig"},{term:"reflexive pronoun",icelandic:"afturbeygt fornafn"},{term:"possessive pronoun",icelandic:"eignarfornafn"},{term:"present participle",icelandic:"l\xfdsingarh\xe1ttur n\xfat\xed\xf0ar"},{term:"present tense",icelandic:"n\xfat\xed\xf0"},{term:"second person",icelandic:"\xf6nnur pers\xf3na"},{term:"singular",icelandic:"eintala"},{term:"stem",icelandic:"stofn"},{term:"strong",icelandic:"sterk beyging"},{term:"strong verb",icelandic:"sterk s\xf6gn"},{term:"subjunctive",icelandic:"vi\xf0tengingarh\xe1ttur"},{term:"superlative",icelandic:"efsta stig"},{term:"supine",icelandic:"sagnb\xf3t"},{term:"third person",icelandic:"\xferi\xf0ja pers\xf3na"},{term:"transitive",icelandic:"\xe1hrifss\xf6gn"},{term:"weak",icelandic:"veik beyging"}]}},305:function(e,t,n){"use strict";n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return s},default:function(){return p},frontMatter:function(){return o},metadata:function(){return l},toc:function(){return d}});var r=n(7462),i=n(3366),a=(n(7294),n(3905)),c=(n(1333),["components"]),o={id:"usage",title:"Usage notes on adjectives",sidebar_label:"Usage notes"},s=void 0,l={unversionedId:"adjectives/usage",id:"adjectives/usage",title:"Usage notes on adjectives",description:"This page covers some miscellaneous rules on the usage of adjectives in Icelandic.",source:"@site/docs/adjectives/usage.md",sourceDirName:"adjectives",slug:"/adjectives/usage",permalink:"/docs/adjectives/usage",tags:[],version:"current",frontMatter:{id:"usage",title:"Usage notes on adjectives",sidebar_label:"Usage notes"},sidebar:"someSidebar",previous:{title:"Irregular comparatives and superlatives",permalink:"/docs/adjectives/irregular-comparatives-and-superlatives"},next:{title:"Personal",permalink:"/docs/pronouns/personal"}},u={},d=[{value:"Order",id:"order",level:2},{value:"Semantic restrictions",id:"semantic-restrictions",level:2},{value:"<em>tough</em> movement",id:"tough-movement",level:3}],m={toc:d};function p(e){var t=e.components,n=(0,i.Z)(e,c);return(0,a.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"This page covers some miscellaneous rules on the usage of adjectives in Icelandic."),(0,a.kt)("h2",{id:"order"},"Order"),(0,a.kt)("p",null,"When using a string of adjectives, they are placed in a predefined order as follows:"),(0,a.kt)("p",null,":Quality > Size > Shape > Colour > Origin "),(0,a.kt)("h2",{id:"semantic-restrictions"},"Semantic restrictions"),(0,a.kt)("h3",{id:"tough-movement"},(0,a.kt)("em",{parentName:"h3"},"tough")," movement"))}p.isMDXComponent=!0}}]);