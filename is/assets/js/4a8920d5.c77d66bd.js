(self.webpackChunkgramref=self.webpackChunkgramref||[]).push([[6728],{3905:(e,t,r)=>{"use strict";r.d(t,{Zo:()=>o,kt:()=>f});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=n.createContext({}),c=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},o=function(e){var t=c(e.components);return n.createElement(u.Provider,{value:t},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,u=e.parentName,o=s(e,["components","mdxType","originalType","parentName"]),m=c(r),p=a,f=m["".concat(u,".").concat(p)]||m[p]||d[p]||i;return r?n.createElement(f,l(l({ref:t},o),{},{components:r})):n.createElement(f,l({ref:t},o))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,l=new Array(i);l[0]=p;var s={};for(var u in t)hasOwnProperty.call(t,u)&&(s[u]=t[u]);s.originalType=e,s[m]="string"==typeof e?e:a,l[1]=s;for(var c=2;c<i;c++)l[c]=r[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},5162:(e,t,r)=>{"use strict";r.d(t,{Z:()=>l});var n=r(7294),a=r(6010);const i={tabItem:"tabItem_Ymn6"};function l(e){let{children:t,hidden:r,className:l}=e;return n.createElement("div",{role:"tabpanel",className:(0,a.Z)(i.tabItem,l),hidden:r},t)}},4866:(e,t,r)=>{"use strict";r.d(t,{Z:()=>j});var n=r(7462),a=r(7294),i=r(6010),l=r(2466),s=r(6550),u=r(1980),c=r(7392),o=r(12);function m(e){return function(e){return a.Children.map(e,(e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:r,attributes:n,default:a}}=e;return{value:t,label:r,attributes:n,default:a}}))}function d(e){const{values:t,children:r}=e;return(0,a.useMemo)((()=>{const e=t??m(r);return function(e){const t=(0,c.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,r])}function p(e){let{value:t,tabValues:r}=e;return r.some((e=>e.value===t))}function f(e){let{queryString:t=!1,groupId:r}=e;const n=(0,s.k6)(),i=function(e){let{queryString:t=!1,groupId:r}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:t,groupId:r});return[(0,u._X)(i),(0,a.useCallback)((e=>{if(!i)return;const t=new URLSearchParams(n.location.search);t.set(i,e),n.replace({...n.location,search:t.toString()})}),[i,n])]}function k(e){const{defaultValue:t,queryString:r=!1,groupId:n}=e,i=d(e),[l,s]=(0,a.useState)((()=>function(e){let{defaultValue:t,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=r.find((e=>e.default))??r[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:i}))),[u,c]=f({queryString:r,groupId:n}),[m,k]=function(e){let{groupId:t}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,i]=(0,o.Nk)(r);return[n,(0,a.useCallback)((e=>{r&&i.set(e)}),[r,i])]}({groupId:n}),v=(()=>{const e=u??m;return p({value:e,tabValues:i})?e:null})();(0,a.useLayoutEffect)((()=>{v&&s(v)}),[v]);return{selectedValue:l,selectValue:(0,a.useCallback)((e=>{if(!p({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);s(e),c(e),k(e)}),[c,k,i]),tabValues:i}}var v=r(2389);const g={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function h(e){let{className:t,block:r,selectedValue:s,selectValue:u,tabValues:c}=e;const o=[],{blockElementScrollPositionUntilNextRender:m}=(0,l.o5)(),d=e=>{const t=e.currentTarget,r=o.indexOf(t),n=c[r].value;n!==s&&(m(t),u(n))},p=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const r=o.indexOf(e.currentTarget)+1;t=o[r]??o[0];break}case"ArrowLeft":{const r=o.indexOf(e.currentTarget)-1;t=o[r]??o[o.length-1];break}}t?.focus()};return a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":r},t)},c.map((e=>{let{value:t,label:r,attributes:l}=e;return a.createElement("li",(0,n.Z)({role:"tab",tabIndex:s===t?0:-1,"aria-selected":s===t,key:t,ref:e=>o.push(e),onKeyDown:p,onClick:d},l,{className:(0,i.Z)("tabs__item",g.tabItem,l?.className,{"tabs__item--active":s===t})}),r??t)})))}function b(e){let{lazy:t,children:r,selectedValue:n}=e;const i=(Array.isArray(r)?r:[r]).filter(Boolean);if(t){const e=i.find((e=>e.props.value===n));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return a.createElement("div",{className:"margin-top--md"},i.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==n}))))}function y(e){const t=k(e);return a.createElement("div",{className:(0,i.Z)("tabs-container",g.tabList)},a.createElement(h,(0,n.Z)({},e,t)),a.createElement(b,(0,n.Z)({},e,t)))}function j(e){const t=(0,v.Z)();return a.createElement(y,(0,n.Z)({key:String(t)},e))}},1333:(e,t,r)=>{"use strict";r.d(t,{R:()=>l});var n=r(7294),a=r(4052),i=r.n(a);class l extends n.Component{constructor(e){super(e),this.state={termWidth:""}}componentDidMount(){const e=document.getElementById("term-"+this.props.term).clientWidth,t=document.getElementById("tooltip-"+this.props.term).clientWidth;this.setState({termWidth:e,tooltipWidth:t})}offset(){return 0-this.state.tooltipWidth/2+this.state.termWidth/2+"px"}displayTerm(){let e;return e=this.props.display?this.props.display:this.props.term,e}getIcelandicTerm(){let e;return e=i().terms.filter((e=>e.term.includes(this.props.term.toLowerCase()))),e[0].icelandic}render(){return n.createElement(n.Fragment,null,n.createElement("span",{className:"term",id:"term-"+this.props.term},this.displayTerm(),n.createElement("span",{id:"tooltip-"+this.props.term,className:"tooltip",style:{left:this.offset()}},"\ud83c\uddee\ud83c\uddf8 ",this.getIcelandicTerm())))}}},4052:e=>{e.exports={terms:[,{term:"verb",icelandic:"s\xf6gn"},{term:"object",icelandic:"andlag"},{term:"phrase",icelandic:"li\xf0ur"},{term:"pronoun",icelandic:"fornafn"},{term:"mood",icelandic:"h\xe1ttur"},{term:"accusative",icelandic:"\xfeolfall"},{term:"active voice",icelandic:"germynd"},{term:"adjective",icelandic:"l\xfdsingaror\xf0"},{term:"adjective phrase",icelandic:"l\xfdsingaror\xf0sli\xf0ur"},{term:"adverb",icelandic:"atviksor\xf0"},{term:"verb phrase",icelandic:"sagnli\xf0ur"},{term:"adverb phrase",icelandic:"atviksli\xf0ur"},{term:"aspiration",icelandic:"fr\xe1bl\xe1stur"},{term:"case",icelandic:"fall"},{term:"comparative",icelandic:"mi\xf0stig"},{term:"complement",icelandic:"fyllili\xf0ur"},{term:"consonant",icelandic:"samhlj\xf3\xf0"},{term:"dative",icelandic:"\xfe\xe1gufall"},{term:"definite article",icelandic:"\xe1kve\xf0inn greinir"},{term:"demonstrative pronoun",icelandic:"\xe1bendingarfornafn"},{term:"determiner",icelandic:"\xe1kv\xe6\xf0isor\xf0"},{term:"devoicing",icelandic:"afr\xf6ddun"},{term:"diphthong",icelandic:"tv\xedhlj\xf3\xf0"},{term:"direct object",icelandic:"beint andlag"},{term:"ending",icelandic:"ending"},{term:"feminine",icelandic:"kvenkyn"},{term:"first person",icelandic:"fyrsta pers\xf3na"},{term:"gender",icelandic:"kyn"},{term:"genitive",icelandic:"eignarfall"},{term:"head",icelandic:"h\xf6fu\xf0"},{term:"imperative mood",icelandic:"bo\xf0h\xe1ttur"},{term:"indefinite pronoun",icelandic:"\xf3\xe1kve\xf0i\xf0 fornafn"},{term:"indicative",icelandic:"frams\xf6guh\xe1ttur"},{term:"indirect object",icelandic:"\xf3beint andlag"},{term:"imperative",icelandic:"bo\xf0h\xe1ttur"},{term:"infinitive",icelandic:"nafnh\xe1ttur"},{term:"masculine",icelandic:"karlkyn"},{term:"middle voice",icelandic:"mi\xf0mynd"},{term:"modal verb",icelandic:"hj\xe1lpars\xf6gn"},{term:"monophthong",icelandic:"einhlj\xf3\xf0"},{term:"neuter",icelandic:"hvorugkyn"},{term:"nominative",icelandic:"nefnifall"},{term:"noun phrase",icelandic:"nafnli\xf0ur"},{term:"passive voice",icelandic:"\xfeolmynd"},{term:"past participle",icelandic:"l\xfdsingarh\xe1ttur \xfe\xe1t\xed\xf0ar"},{term:"past tense",icelandic:"\xfe\xe1t\xed\xf0"},{term:"personal pronoun",icelandic:"pers\xf3nufornafn"},{term:"plural",icelandic:"fleirtala"},{term:"positive",icelandic:"frumstig"},{term:"preaspiration",icelandic:"a\xf0bl\xe1stur"},{term:"preposition",icelandic:"forsetning"},{term:"prepositional phrase",icelandic:"forsetningarli\xf0ur"},{term:"principal parts",icelandic:"kennimyndir"},{term:"reflexive pronoun",icelandic:"afturbeygt fornafn"},{term:"possessive pronoun",icelandic:"eignarfornafn"},{term:"present participle",icelandic:"l\xfdsingarh\xe1ttur n\xfat\xed\xf0ar"},{term:"present tense",icelandic:"n\xfat\xed\xf0"},{term:"second person",icelandic:"\xf6nnur pers\xf3na"},{term:"sentence",icelandic:"setning"},{term:"singular",icelandic:"eintala"},{term:"stem",icelandic:"stofn"},{term:"strong",icelandic:"sterk beyging"},{term:"strong verb",icelandic:"sterk s\xf6gn"},{term:"stylistic fronting",icelandic:"st\xedlf\xe6rsla"},{term:"subject",icelandic:"frumlag"},{term:"subjunctive",icelandic:"vi\xf0tengingarh\xe1ttur"},{term:"superlative",icelandic:"efsta stig"},{term:"supine",icelandic:"sagnb\xf3t"},{term:"third person",icelandic:"\xferi\xf0ja pers\xf3na"},{term:"transitive",icelandic:"\xe1hrifss\xf6gn"},{term:"transitive verb",icelandic:"\xe1hrifss\xf6gn"},{term:"intransitive verb",icelandic:"\xe1hrifslaus s\xf6gn"},{term:"weak",icelandic:"veik beyging"},{term:"weak verb",icelandic:"veik s\xf6gn"},{term:"word order",icelandic:"or\xf0ar\xf6\xf0"}]}},176:(e,t,r)=>{"use strict";r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>p,frontMatter:()=>l,metadata:()=>u,toc:()=>o});var n=r(7462),a=(r(7294),r(3905)),i=(r(4866),r(5162),r(1333));const l={id:"superlative",title:"Superlative"},s=void 0,u={unversionedId:"adjectives/superlative",id:"adjectives/superlative",title:"Superlative",description:"Usage",source:"@site/i18n/is/docusaurus-plugin-content-docs/current/adjectives/superlative.md",sourceDirName:"adjectives",slug:"/adjectives/superlative",permalink:"/is/docs/adjectives/superlative",draft:!1,tags:[],version:"current",frontMatter:{id:"superlative",title:"Superlative"},sidebar:"someSidebar",previous:{title:"Comparative",permalink:"/is/docs/adjectives/comparative"},next:{title:"Irregular comparatives and superlatives",permalink:"/is/docs/adjectives/irregular-comparatives-and-superlatives"}},c={},o=[{value:"Usage",id:"usage",level:2},{value:"Formation",id:"formation",level:2}],m={toc:o},d="wrapper";function p(e){let{components:t,...r}=e;return(0,a.kt)(d,(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"usage"},"Usage"),(0,a.kt)("p",null,"The ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)(i.R,{term:"superlative",mdxType:"Term"}))," form of an adjective in Icelandic is used to express the highest degree of a quality. It\u2019s most commonly used in the weak inflection:"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("em",{parentName:"p"},(0,a.kt)("strong",{parentName:"em"},"Sterkasti")," \xcdslendingurinn er Fjalli\xf0.",(0,a.kt)("br",null),(0,a.kt)("strong",{parentName:"em"},"Besti")," b\xe6rinn \xe1 \xcdslandi er Akureyri.",(0,a.kt)("br",null),"Hringadr\xf3ttinsaga er ",(0,a.kt)("strong",{parentName:"em"},"lengsta")," b\xf3k \xed heimi."))),(0,a.kt)("p",null,"Unlike the comparative however, the superlative also has a strong inflection:"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("em",{parentName:"p"},"Atli var ",(0,a.kt)("strong",{parentName:"em"},"fyrstur")," til a\xf0 n\xe1 tindinum.",(0,a.kt)("br",null),"Lilja er ",(0,a.kt)("strong",{parentName:"em"},"h\xe1v\xf6xnust")," \xferiggja systkina."))),(0,a.kt)("p",null,"The strong inflection of the superlative is only used as subject complement (basically, after ",(0,a.kt)("em",{parentName:"p"},"vera")," and not before it). It can be followed by a qualifying phrase in the genitive case, like in the second example above (\u201cof three siblings, Lilja is tallest\u201d)."),(0,a.kt)("p",null,"Like in the comparative, indeclinable adjectives are used with an the adverb instead of an ending. In this case, it\u2019s ",(0,a.kt)("em",{parentName:"p"},"mest"),":"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("em",{parentName:"p"},"\xcdsland er ",(0,a.kt)("strong",{parentName:"em"},"mest spennandi")," land \xed heimi!"))),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},(0,a.kt)("em",{parentName:"p"},"Mest")," is only used with adjectives that are not inflected at all, such as ",(0,a.kt)("em",{parentName:"p"},"hissa"),", ",(0,a.kt)("em",{parentName:"p"},"samm\xe1la"),", ",(0,a.kt)("em",{parentName:"p"},"hugsi")," and all adjectives that end in ",(0,a.kt)("em",{parentName:"p"},"-andi"),", such as ",(0,a.kt)("em",{parentName:"p"},"spennandi")," and ",(0,a.kt)("em",{parentName:"p"},"\xfereytandi"),". For all other adjectives, the superlative inflection is used, regardless of how long the adjective is.")),(0,a.kt)("h2",{id:"formation"},"Formation"),(0,a.kt)("p",null,"The superlative is much more regular than the ",(0,a.kt)("a",{parentName:"p",href:"comparative#formation"},"comparative"),". Unless the adjective gets a ",(0,a.kt)("a",{parentName:"p",href:"irregular-comparatives-and-superlatives"},"vowel change or is irregular")," in the comparative, the comparative ending will be ",(0,a.kt)("em",{parentName:"p"},"-astur"),":"),(0,a.kt)("figure",null,(0,a.kt)("table",null,(0,a.kt)("thead",null,(0,a.kt)("tr",null,(0,a.kt)("th",{colspan:"2"}),(0,a.kt)("th",{width:"35%"},"Comparative"),(0,a.kt)("th",{width:"35%"},"Superlative"))),(0,a.kt)("tbody",null,(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("em",null,"sterkur",(0,a.kt)("br",null),"au\xf0veldur")),(0,a.kt)("td",{rowspan:"6",align:"center",width:"5%"},"\u2192"),(0,a.kt)("td",null,(0,a.kt)("em",null,"sterkari",(0,a.kt)("br",null),"au\xf0veldari")),(0,a.kt)("td",null,(0,a.kt)("em",null,"sterk",(0,a.kt)("strong",null,"astur"),(0,a.kt)("br",null),"au\xf0veld",(0,a.kt)("strong",null,"astur")))),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("em",null,"d\xfdr",(0,a.kt)("br",null),"laus")),(0,a.kt)("td",null,(0,a.kt)("em",null,"d\xfdrari",(0,a.kt)("br",null),"lausari")),(0,a.kt)("td",null,(0,a.kt)("em",null,"d\xfdr",(0,a.kt)("strong",null,"astur"),(0,a.kt)("br",null),"laus",(0,a.kt)("strong",null,"astur")))),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("em",null,"h\xe1vaxinn")),(0,a.kt)("td",null,(0,a.kt)("em",null,"h\xe1vaxnari")),(0,a.kt)("td",null,(0,a.kt)("em",null,"h\xe1vaxn",(0,a.kt)("strong",null,"astur")))),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("em",null,"skemmtilegur",(0,a.kt)("br",null),"au\xf0ugur")),(0,a.kt)("td",null,(0,a.kt)("em",null,"skemmtilegri",(0,a.kt)("br",null),"au\xf0ugri")),(0,a.kt)("td",null,(0,a.kt)("em",null,"skemmtileg",(0,a.kt)("strong",null,"astur"),(0,a.kt)("br",null),"au\xf0ug",(0,a.kt)("strong",null,"astur")))),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("em",null,"vins\xe6ll",(0,a.kt)("br",null),"br\xfann")),(0,a.kt)("td",null,(0,a.kt)("em",null,"vins\xe6lli",(0,a.kt)("br",null),"br\xfanni")),(0,a.kt)("td",null,(0,a.kt)("em",null,"vins\xe6l",(0,a.kt)("strong",null,"astur"),(0,a.kt)("br",null),"br\xfan",(0,a.kt)("strong",null,"astur")))),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("em",null,"gr\xe1r")),(0,a.kt)("td",null,(0,a.kt)("em",null,"gr\xe1rri")),(0,a.kt)("td",null,(0,a.kt)("em",null,"gr\xe1",(0,a.kt)("strong",null,"astur"))))))),(0,a.kt)("p",null,"Once you\u2019ve found the superlative form, you then inflect it like any adjective ending in ",(0,a.kt)("em",{parentName:"p"},"-ur"),":"))}p.isMDXComponent=!0}}]);