(self.webpackChunkgramref=self.webpackChunkgramref||[]).push([[9599],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return c},kt:function(){return p}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var o=r.createContext({}),s=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(o.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,c=u(e,["components","mdxType","originalType","parentName"]),d=s(n),p=a,v=d["".concat(o,".").concat(p)]||d[p]||m[p]||i;return n?r.createElement(v,l(l({ref:t},c),{},{components:n})):r.createElement(v,l({ref:t},c))}));function p(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=d;var u={};for(var o in t)hasOwnProperty.call(t,o)&&(u[o]=t[o]);u.originalType=e,u.mdxType="string"==typeof e?e:a,l[1]=u;for(var s=2;s<i;s++)l[s]=n[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8215:function(e,t,n){"use strict";n.d(t,{Z:function(){return a}});var r=n(7294);function a(e){var t=e.children,n=e.hidden,a=e.className;return r.createElement("div",{role:"tabpanel",hidden:n,className:a},t)}},9877:function(e,t,n){"use strict";n.d(t,{Z:function(){return c}});var r=n(7462),a=n(7294),i=n(2389),l=n(3725),u=n(6010),o="tabItem_LplD";function s(e){var t,n,i,s=e.lazy,c=e.block,m=e.defaultValue,d=e.values,p=e.groupId,v=e.className,f=a.Children.map(e.children,(function(e){if((0,a.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),k=null!=d?d:f.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),h=(0,l.lx)(k,(function(e,t){return e.value===t.value}));if(h.length>0)throw new Error('Docusaurus error: Duplicate values "'+h.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var g=null===m?m:null!=(t=null!=m?m:null==(n=f.find((function(e){return e.props.default})))?void 0:n.props.value)?t:null==(i=f[0])?void 0:i.props.value;if(null!==g&&!k.some((function(e){return e.value===g})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+g+'" but none of its children has the corresponding value. Available values are: '+k.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var b=(0,l.UB)(),y=b.tabGroupChoices,N=b.setTabGroupChoices,j=(0,a.useState)(g),w=j[0],O=j[1],E=[],T=(0,l.o5)().blockElementScrollPositionUntilNextRender;if(null!=p){var x=y[p];null!=x&&x!==w&&k.some((function(e){return e.value===x}))&&O(x)}var I=function(e){var t=e.currentTarget,n=E.indexOf(t),r=k[n].value;r!==w&&(T(t),O(r),null!=p&&N(p,r))},C=function(e){var t,n=null;switch(e.key){case"ArrowRight":var r=E.indexOf(e.currentTarget)+1;n=E[r]||E[0];break;case"ArrowLeft":var a=E.indexOf(e.currentTarget)-1;n=E[a]||E[E.length-1]}null==(t=n)||t.focus()};return a.createElement("div",{className:"tabs-container"},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,u.Z)("tabs",{"tabs--block":c},v)},k.map((function(e){var t=e.value,n=e.label,i=e.attributes;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:w===t?0:-1,"aria-selected":w===t,key:t,ref:function(e){return E.push(e)},onKeyDown:C,onFocus:I,onClick:I},i,{className:(0,u.Z)("tabs__item",o,null==i?void 0:i.className,{"tabs__item--active":w===t})}),null!=n?n:t)}))),s?(0,a.cloneElement)(f.filter((function(e){return e.props.value===w}))[0],{className:"margin-vert--md"}):a.createElement("div",{className:"margin-vert--md"},f.map((function(e,t){return(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==w})}))))}function c(e){var t=(0,i.Z)();return a.createElement(s,(0,r.Z)({key:String(t)},e))}},1333:function(e,t,n){"use strict";n.d(t,{R:function(){return u}});var r=n(4578),a=n(7294),i=n(4052),l=n.n(i),u=function(e){function t(t){var n;return(n=e.call(this,t)||this).state={termWidth:""},n}(0,r.Z)(t,e);var n=t.prototype;return n.componentDidMount=function(){var e=document.getElementById("term-"+this.props.term).clientWidth,t=document.getElementById("tooltip-"+this.props.term).clientWidth;this.setState({termWidth:e,tooltipWidth:t})},n.offset=function(){var e=0-this.state.tooltipWidth/2+this.state.termWidth/2+"px";return e},n.displayTerm=function(){return this.props.display?this.props.display:this.props.term},n.getIcelandicTerm=function(){var e=this;return l().terms.filter((function(t){return t.term.includes(e.props.term.toLowerCase())}))[0].icelandic},n.render=function(){return a.createElement(a.Fragment,null,a.createElement("span",{className:"term",id:"term-"+this.props.term},this.displayTerm(),a.createElement("span",{id:"tooltip-"+this.props.term,className:"tooltip",style:{left:this.offset()}},"\ud83c\uddee\ud83c\uddf8 ",this.getIcelandicTerm())))},t}(a.Component)},4052:function(e){e.exports={terms:[,{term:"verb",icelandic:"s\xf6gn"},{term:"pronoun",icelandic:"fornafn"},{term:"mood",icelandic:"h\xe1ttur"},{term:"accusative",icelandic:"\xfeolfall"},{term:"active voice",icelandic:"germynd"},{term:"adjective",icelandic:"l\xfdsingaror\xf0"},{term:"aspiration",icelandic:"fr\xe1bl\xe1stur"},{term:"case",icelandic:"fall"},{term:"comparative",icelandic:"mi\xf0stig"},{term:"consonant",icelandic:"samhlj\xf3\xf0"},{term:"dative",icelandic:"\xfe\xe1gufall"},{term:"definite article",icelandic:"\xe1kve\xf0inn greinir"},{term:"demonstrative pronoun",icelandic:"\xe1bendingarfornafn"},{term:"devoicing",icelandic:"afr\xf6ddun"},{term:"diphthong",icelandic:"tv\xedhlj\xf3\xf0"},{term:"direct object",icelandic:"beint andlag"},{term:"ending",icelandic:"ending"},{term:"feminine",icelandic:"kvenkyn"},{term:"first person",icelandic:"fyrsta pers\xf3na"},{term:"gender",icelandic:"kyn"},{term:"genitive",icelandic:"eignarfall"},{term:"indefinite pronoun",icelandic:"\xf3\xe1kve\xf0i\xf0 fornafn"},{term:"indicative",icelandic:"frams\xf6guh\xe1ttur"},{term:"indirect object",icelandic:"\xf3beint andlag"},{term:"imperative",icelandic:"bo\xf0h\xe1ttur"},{term:"infinitive",icelandic:"nafnh\xe1ttur"},{term:"masculine",icelandic:"karlkyn"},{term:"middle voice",icelandic:"mi\xf0mynd"},{term:"modal verb",icelandic:"hj\xe1lpars\xf6gn"},{term:"monophthong",icelandic:"einhlj\xf3\xf0"},{term:"neuter",icelandic:"hvorugkyn"},{term:"nominative",icelandic:"nefnifall"},{term:"passive voice",icelandic:"\xfeolmynd"},{term:"past participle",icelandic:"l\xfdsingarh\xe1ttur \xfe\xe1t\xed\xf0ar"},{term:"past tense",icelandic:"\xfe\xe1t\xed\xf0"},{term:"personal pronoun",icelandic:"pers\xf3nufornafn"},{term:"plural",icelandic:"fleirtala"},{term:"positive",icelandic:"frumstig"},{term:"preaspiration",icelandic:"a\xf0bl\xe1stur"},{term:"preposition",icelandic:"forsetning"},{term:"principal parts",icelandic:"kennimyndir"},{term:"reflexive pronoun",icelandic:"afturbeygt fornafn"},{term:"possessive pronoun",icelandic:"eignarfornafn"},{term:"present participle",icelandic:"l\xfdsingarh\xe1ttur n\xfat\xed\xf0ar"},{term:"present tense",icelandic:"n\xfat\xed\xf0"},{term:"second person",icelandic:"\xf6nnur pers\xf3na"},{term:"singular",icelandic:"eintala"},{term:"stem",icelandic:"stofn"},{term:"strong",icelandic:"sterk beyging"},{term:"strong verb",icelandic:"sterk s\xf6gn"},{term:"subjunctive",icelandic:"vi\xf0tengingarh\xe1ttur"},{term:"superlative",icelandic:"efsta stig"},{term:"supine",icelandic:"sagnb\xf3t"},{term:"third person",icelandic:"\xferi\xf0ja pers\xf3na"},{term:"transitive",icelandic:"\xe1hrifss\xf6gn"},{term:"weak",icelandic:"veik beyging"},{term:"weak verb",icelandic:"veik s\xf6gn"}]}},4148:function(e,t,n){"use strict";n.r(t),n.d(t,{assets:function(){return m},contentTitle:function(){return s},default:function(){return v},frontMatter:function(){return o},metadata:function(){return c},toc:function(){return d}});var r=n(7462),a=n(3366),i=(n(7294),n(3905)),l=(n(9877),n(8215),n(1333)),u=["components"],o={id:"superlative",title:"Superlative"},s=void 0,c={unversionedId:"adjectives/superlative",id:"adjectives/superlative",title:"Superlative",description:"Usage",source:"@site/docs/adjectives/superlative.md",sourceDirName:"adjectives",slug:"/adjectives/superlative",permalink:"/docs/adjectives/superlative",tags:[],version:"current",frontMatter:{id:"superlative",title:"Superlative"},sidebar:"someSidebar",previous:{title:"Comparative",permalink:"/docs/adjectives/comparative"},next:{title:"Irregular comparatives and superlatives",permalink:"/docs/adjectives/irregular-comparatives-and-superlatives"}},m={},d=[{value:"Usage",id:"usage",level:2},{value:"Formation",id:"formation",level:2}],p={toc:d};function v(e){var t=e.components,n=(0,a.Z)(e,u);return(0,i.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"usage"},"Usage"),(0,i.kt)("p",null,"The ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)(l.R,{term:"superlative",mdxType:"Term"}))," form of an adjective in Icelandic is used to express the highest degree of a quality. It\u2019s most commonly used in the weak inflection:"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("em",{parentName:"p"},(0,i.kt)("strong",{parentName:"em"},"Sterkasti")," \xcdslendingurinn er Fjalli\xf0.",(0,i.kt)("br",null),(0,i.kt)("strong",{parentName:"em"},"Besti")," b\xe6rinn \xe1 \xcdslandi er Akureyri.",(0,i.kt)("br",null),"Hringadr\xf3ttinsaga er ",(0,i.kt)("strong",{parentName:"em"},"lengsta")," b\xf3k \xed heimi."))),(0,i.kt)("p",null,"Unlike the comparative however, the superlative also has a strong inflection:"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("em",{parentName:"p"},"Atli var ",(0,i.kt)("strong",{parentName:"em"},"fyrstur")," til a\xf0 n\xe1 tindinum.",(0,i.kt)("br",null),"Lilja er ",(0,i.kt)("strong",{parentName:"em"},"h\xe1v\xf6xnust")," \xferiggja systkina."))),(0,i.kt)("p",null,"The strong inflection of the superlative is only used as subject complement (basically, after ",(0,i.kt)("em",{parentName:"p"},"vera")," and not before it). It can be followed by a qualifying phrase in the genitive case, like in the second example above (\u201cof three siblings, Lilja is tallest\u201d)."),(0,i.kt)("p",null,"Like in the comparative, indeclinable adjectives are used with an the adverb instead of an ending. In this case, it\u2019s ",(0,i.kt)("em",{parentName:"p"},"mest"),":"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("em",{parentName:"p"},"\xcdsland er ",(0,i.kt)("strong",{parentName:"em"},"mest spennandi")," land \xed heimi!"))),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},(0,i.kt)("em",{parentName:"p"},"Mest")," is only used with adjectives that are not inflected at all, such as ",(0,i.kt)("em",{parentName:"p"},"hissa"),", ",(0,i.kt)("em",{parentName:"p"},"samm\xe1la"),", ",(0,i.kt)("em",{parentName:"p"},"hugsi")," and all adjectives that end in ",(0,i.kt)("em",{parentName:"p"},"-andi"),", such as ",(0,i.kt)("em",{parentName:"p"},"spennandi")," and ",(0,i.kt)("em",{parentName:"p"},"\xfereytandi"),". For all other adjectives, the superlative inflection is used, regardless of how long the adjective is."))),(0,i.kt)("h2",{id:"formation"},"Formation"),(0,i.kt)("p",null,"The superlative is much more regular than the ",(0,i.kt)("a",{parentName:"p",href:"comparative#formation"},"comparative"),". Unless the adjective gets a ",(0,i.kt)("a",{parentName:"p",href:"irregular-comparatives-and-superlatives"},"vowel change or is irregular")," in the comparative, the comparative ending will be ",(0,i.kt)("em",{parentName:"p"},"-astur"),":"),(0,i.kt)("figure",null,(0,i.kt)("table",null,(0,i.kt)("thead",null,(0,i.kt)("tr",null,(0,i.kt)("th",{colspan:"2"}),(0,i.kt)("th",{width:"35%"},"Comparative"),(0,i.kt)("th",{width:"35%"},"Superlative"))),(0,i.kt)("tbody",null,(0,i.kt)("tr",null,(0,i.kt)("td",null,(0,i.kt)("em",null,"sterkur",(0,i.kt)("br",null),"au\xf0veldur")),(0,i.kt)("td",{rowspan:"6",align:"center",width:"5%"},"\u2192"),(0,i.kt)("td",null,(0,i.kt)("em",null,"sterkari",(0,i.kt)("br",null),"au\xf0veldari")),(0,i.kt)("td",null,(0,i.kt)("em",null,"sterk",(0,i.kt)("strong",null,"astur"),(0,i.kt)("br",null),"au\xf0veld",(0,i.kt)("strong",null,"astur")))),(0,i.kt)("tr",null,(0,i.kt)("td",null,(0,i.kt)("em",null,"d\xfdr",(0,i.kt)("br",null),"laus")),(0,i.kt)("td",null,(0,i.kt)("em",null,"d\xfdrari",(0,i.kt)("br",null),"lausari")),(0,i.kt)("td",null,(0,i.kt)("em",null,"d\xfdr",(0,i.kt)("strong",null,"astur"),(0,i.kt)("br",null),"laus",(0,i.kt)("strong",null,"astur")))),(0,i.kt)("tr",null,(0,i.kt)("td",null,(0,i.kt)("em",null,"h\xe1vaxinn")),(0,i.kt)("td",null,(0,i.kt)("em",null,"h\xe1vaxnari")),(0,i.kt)("td",null,(0,i.kt)("em",null,"h\xe1vaxn",(0,i.kt)("strong",null,"astur")))),(0,i.kt)("tr",null,(0,i.kt)("td",null,(0,i.kt)("em",null,"skemmtilegur",(0,i.kt)("br",null),"au\xf0ugur")),(0,i.kt)("td",null,(0,i.kt)("em",null,"skemmtilegri",(0,i.kt)("br",null),"au\xf0ugri")),(0,i.kt)("td",null,(0,i.kt)("em",null,"skemmtileg",(0,i.kt)("strong",null,"astur"),(0,i.kt)("br",null),"au\xf0ug",(0,i.kt)("strong",null,"astur")))),(0,i.kt)("tr",null,(0,i.kt)("td",null,(0,i.kt)("em",null,"vins\xe6ll",(0,i.kt)("br",null),"br\xfann")),(0,i.kt)("td",null,(0,i.kt)("em",null,"vins\xe6lli",(0,i.kt)("br",null),"br\xfanni")),(0,i.kt)("td",null,(0,i.kt)("em",null,"vins\xe6l",(0,i.kt)("strong",null,"astur"),(0,i.kt)("br",null),"br\xfan",(0,i.kt)("strong",null,"astur")))),(0,i.kt)("tr",null,(0,i.kt)("td",null,(0,i.kt)("em",null,"gr\xe1r")),(0,i.kt)("td",null,(0,i.kt)("em",null,"gr\xe1rri")),(0,i.kt)("td",null,(0,i.kt)("em",null,"gr\xe1",(0,i.kt)("strong",null,"astur"))))))),(0,i.kt)("p",null,"Once you\u2019ve found the superlative form, you then inflect it like any adjective ending in ",(0,i.kt)("em",{parentName:"p"},"-ur"),":"))}v.isMDXComponent=!0}}]);