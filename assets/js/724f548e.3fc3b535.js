(self.webpackChunkgramref=self.webpackChunkgramref||[]).push([[2181],{3905:(t,e,n)=>{"use strict";n.d(e,{Zo:()=>c,kt:()=>d});var l=n(7294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function a(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);e&&(l=l.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,l)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?a(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function u(t,e){if(null==t)return{};var n,l,r=function(t,e){if(null==t)return{};var n,l,r={},a=Object.keys(t);for(l=0;l<a.length;l++)n=a[l],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(l=0;l<a.length;l++)n=a[l],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var s=l.createContext({}),o=function(t){var e=l.useContext(s),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},c=function(t){var e=o(t.components);return l.createElement(s.Provider,{value:e},t.children)},m="mdxType",k={inlineCode:"code",wrapper:function(t){var e=t.children;return l.createElement(l.Fragment,{},e)}},p=l.forwardRef((function(t,e){var n=t.components,r=t.mdxType,a=t.originalType,s=t.parentName,c=u(t,["components","mdxType","originalType","parentName"]),m=o(n),p=r,d=m["".concat(s,".").concat(p)]||m[p]||k[p]||a;return n?l.createElement(d,i(i({ref:e},c),{},{components:n})):l.createElement(d,i({ref:e},c))}));function d(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var a=n.length,i=new Array(a);i[0]=p;var u={};for(var s in e)hasOwnProperty.call(e,s)&&(u[s]=e[s]);u.originalType=t,u[m]="string"==typeof t?t:r,i[1]=u;for(var o=2;o<a;o++)i[o]=n[o];return l.createElement.apply(null,i)}return l.createElement.apply(null,n)}p.displayName="MDXCreateElement"},5162:(t,e,n)=>{"use strict";n.d(e,{Z:()=>i});var l=n(7294),r=n(6010);const a={tabItem:"tabItem_Ymn6"};function i(t){let{children:e,hidden:n,className:i}=t;return l.createElement("div",{role:"tabpanel",className:(0,r.Z)(a.tabItem,i),hidden:n},e)}},4866:(t,e,n)=>{"use strict";n.d(e,{Z:()=>N});var l=n(7462),r=n(7294),a=n(6010),i=n(2466),u=n(6550),s=n(1980),o=n(7392),c=n(12);function m(t){return function(t){return r.Children.map(t,(t=>{if(!t||(0,r.isValidElement)(t)&&function(t){const{props:e}=t;return!!e&&"object"==typeof e&&"value"in e}(t))return t;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof t.type?t.type:t.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(t).map((t=>{let{props:{value:e,label:n,attributes:l,default:r}}=t;return{value:e,label:n,attributes:l,default:r}}))}function k(t){const{values:e,children:n}=t;return(0,r.useMemo)((()=>{const t=e??m(n);return function(t){const e=(0,o.l)(t,((t,e)=>t.value===e.value));if(e.length>0)throw new Error(`Docusaurus error: Duplicate values "${e.map((t=>t.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(t),t}),[e,n])}function p(t){let{value:e,tabValues:n}=t;return n.some((t=>t.value===e))}function d(t){let{queryString:e=!1,groupId:n}=t;const l=(0,u.k6)(),a=function(t){let{queryString:e=!1,groupId:n}=t;if("string"==typeof e)return e;if(!1===e)return null;if(!0===e&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:e,groupId:n});return[(0,s._X)(a),(0,r.useCallback)((t=>{if(!a)return;const e=new URLSearchParams(l.location.search);e.set(a,t),l.replace({...l.location,search:e.toString()})}),[a,l])]}function g(t){const{defaultValue:e,queryString:n=!1,groupId:l}=t,a=k(t),[i,u]=(0,r.useState)((()=>function(t){let{defaultValue:e,tabValues:n}=t;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(e){if(!p({value:e,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${e}" but none of its children has the corresponding value. Available values are: ${n.map((t=>t.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return e}const l=n.find((t=>t.default))??n[0];if(!l)throw new Error("Unexpected error: 0 tabValues");return l.value}({defaultValue:e,tabValues:a}))),[s,o]=d({queryString:n,groupId:l}),[m,g]=function(t){let{groupId:e}=t;const n=function(t){return t?`docusaurus.tab.${t}`:null}(e),[l,a]=(0,c.Nk)(n);return[l,(0,r.useCallback)((t=>{n&&a.set(t)}),[n,a])]}({groupId:l}),h=(()=>{const t=s??m;return p({value:t,tabValues:a})?t:null})();(0,r.useLayoutEffect)((()=>{h&&u(h)}),[h]);return{selectedValue:i,selectValue:(0,r.useCallback)((t=>{if(!p({value:t,tabValues:a}))throw new Error(`Can't select invalid tab value=${t}`);u(t),o(t),g(t)}),[o,g,a]),tabValues:a}}var h=n(2389);const f={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function b(t){let{className:e,block:n,selectedValue:u,selectValue:s,tabValues:o}=t;const c=[],{blockElementScrollPositionUntilNextRender:m}=(0,i.o5)(),k=t=>{const e=t.currentTarget,n=c.indexOf(e),l=o[n].value;l!==u&&(m(e),s(l))},p=t=>{let e=null;switch(t.key){case"Enter":k(t);break;case"ArrowRight":{const n=c.indexOf(t.currentTarget)+1;e=c[n]??c[0];break}case"ArrowLeft":{const n=c.indexOf(t.currentTarget)-1;e=c[n]??c[c.length-1];break}}e?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.Z)("tabs",{"tabs--block":n},e)},o.map((t=>{let{value:e,label:n,attributes:i}=t;return r.createElement("li",(0,l.Z)({role:"tab",tabIndex:u===e?0:-1,"aria-selected":u===e,key:e,ref:t=>c.push(t),onKeyDown:p,onClick:k},i,{className:(0,a.Z)("tabs__item",f.tabItem,i?.className,{"tabs__item--active":u===e})}),n??e)})))}function v(t){let{lazy:e,children:n,selectedValue:l}=t;const a=(Array.isArray(n)?n:[n]).filter(Boolean);if(e){const t=a.find((t=>t.props.value===l));return t?(0,r.cloneElement)(t,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},a.map(((t,e)=>(0,r.cloneElement)(t,{key:e,hidden:t.props.value!==l}))))}function y(t){const e=g(t);return r.createElement("div",{className:(0,a.Z)("tabs-container",f.tabList)},r.createElement(b,(0,l.Z)({},t,e)),r.createElement(v,(0,l.Z)({},t,e)))}function N(t){const e=(0,h.Z)();return r.createElement(y,(0,l.Z)({key:String(e)},t))}},1333:(t,e,n)=>{"use strict";n.d(e,{R:()=>i});var l=n(7294),r=n(4052),a=n.n(r);class i extends l.Component{constructor(t){super(t),this.state={termWidth:""}}componentDidMount(){const t=document.getElementById("term-"+this.props.term).clientWidth,e=document.getElementById("tooltip-"+this.props.term).clientWidth;this.setState({termWidth:t,tooltipWidth:e})}offset(){return 0-this.state.tooltipWidth/2+this.state.termWidth/2+"px"}displayTerm(){let t;return t=this.props.display?this.props.display:this.props.term,t}getIcelandicTerm(){let t;return t=a().terms.filter((t=>t.term.includes(this.props.term.toLowerCase()))),t[0].icelandic}render(){return l.createElement(l.Fragment,null,l.createElement("span",{className:"term",id:"term-"+this.props.term},this.displayTerm(),l.createElement("span",{id:"tooltip-"+this.props.term,className:"tooltip",style:{left:this.offset()}},"\ud83c\uddee\ud83c\uddf8 ",this.getIcelandicTerm())))}}},4052:t=>{t.exports={terms:[,{term:"verb",icelandic:"s\xf6gn"},{term:"object",icelandic:"andlag"},{term:"pronoun",icelandic:"fornafn"},{term:"mood",icelandic:"h\xe1ttur"},{term:"accusative",icelandic:"\xfeolfall"},{term:"active voice",icelandic:"germynd"},{term:"adjective",icelandic:"l\xfdsingaror\xf0"},{term:"adjective phrase",icelandic:"l\xfdsingaror\xf0sli\xf0ur"},{term:"adverb",icelandic:"atviksor\xf0"},{term:"adverb phrase",icelandic:"atviksli\xf0ur"},{term:"aspiration",icelandic:"fr\xe1bl\xe1stur"},{term:"case",icelandic:"fall"},{term:"comparative",icelandic:"mi\xf0stig"},{term:"complement",icelandic:"fyllili\xf0ur"},{term:"consonant",icelandic:"samhlj\xf3\xf0"},{term:"dative",icelandic:"\xfe\xe1gufall"},{term:"definite article",icelandic:"\xe1kve\xf0inn greinir"},{term:"demonstrative pronoun",icelandic:"\xe1bendingarfornafn"},{term:"determiner",icelandic:"\xe1kv\xe6\xf0isor\xf0"},{term:"devoicing",icelandic:"afr\xf6ddun"},{term:"diphthong",icelandic:"tv\xedhlj\xf3\xf0"},{term:"direct object",icelandic:"beint andlag"},{term:"ending",icelandic:"ending"},{term:"feminine",icelandic:"kvenkyn"},{term:"first person",icelandic:"fyrsta pers\xf3na"},{term:"gender",icelandic:"kyn"},{term:"genitive",icelandic:"eignarfall"},{term:"head",icelandic:"h\xf6fu\xf0"},{term:"indefinite pronoun",icelandic:"\xf3\xe1kve\xf0i\xf0 fornafn"},{term:"indicative",icelandic:"frams\xf6guh\xe1ttur"},{term:"indirect object",icelandic:"\xf3beint andlag"},{term:"imperative",icelandic:"bo\xf0h\xe1ttur"},{term:"infinitive",icelandic:"nafnh\xe1ttur"},{term:"masculine",icelandic:"karlkyn"},{term:"middle voice",icelandic:"mi\xf0mynd"},{term:"modal verb",icelandic:"hj\xe1lpars\xf6gn"},{term:"monophthong",icelandic:"einhlj\xf3\xf0"},{term:"neuter",icelandic:"hvorugkyn"},{term:"nominative",icelandic:"nefnifall"},{term:"noun phrase",icelandic:"nafnli\xf0ur"},{term:"passive voice",icelandic:"\xfeolmynd"},{term:"past participle",icelandic:"l\xfdsingarh\xe1ttur \xfe\xe1t\xed\xf0ar"},{term:"past tense",icelandic:"\xfe\xe1t\xed\xf0"},{term:"personal pronoun",icelandic:"pers\xf3nufornafn"},{term:"phrase",icelandic:"li\xf0ur"},{term:"plural",icelandic:"fleirtala"},{term:"positive",icelandic:"frumstig"},{term:"preaspiration",icelandic:"a\xf0bl\xe1stur"},{term:"preposition",icelandic:"forsetning"},{term:"prepositional phrase",icelandic:"forsetningarli\xf0ur"},{term:"principal parts",icelandic:"kennimyndir"},{term:"reflexive pronoun",icelandic:"afturbeygt fornafn"},{term:"possessive pronoun",icelandic:"eignarfornafn"},{term:"present participle",icelandic:"l\xfdsingarh\xe1ttur n\xfat\xed\xf0ar"},{term:"present tense",icelandic:"n\xfat\xed\xf0"},{term:"second person",icelandic:"\xf6nnur pers\xf3na"},{term:"sentence",icelandic:"setning"},{term:"singular",icelandic:"eintala"},{term:"stem",icelandic:"stofn"},{term:"strong",icelandic:"sterk beyging"},{term:"strong verb",icelandic:"sterk s\xf6gn"},{term:"stylistic fronting",icelandic:"st\xedlf\xe6rsla"},{term:"subject",icelandic:"frumlag"},{term:"subjunctive",icelandic:"vi\xf0tengingarh\xe1ttur"},{term:"superlative",icelandic:"efsta stig"},{term:"supine",icelandic:"sagnb\xf3t"},{term:"third person",icelandic:"\xferi\xf0ja pers\xf3na"},{term:"transitive",icelandic:"\xe1hrifss\xf6gn"},{term:"verb phrase",icelandic:"sagnli\xf0ur"},{term:"weak",icelandic:"veik beyging"},{term:"weak verb",icelandic:"veik s\xf6gn"},{term:"word order",icelandic:"or\xf0ar\xf6\xf0"}]}},7806:(t,e,n)=>{"use strict";n.r(e),n.d(e,{assets:()=>m,contentTitle:()=>o,default:()=>g,frontMatter:()=>s,metadata:()=>c,toc:()=>k});var l=n(7462),r=(n(7294),n(3905)),a=n(4866),i=n(5162),u=n(1333);const s={id:"comparative",title:"Comparative"},o=void 0,c={unversionedId:"adjectives/comparative",id:"adjectives/comparative",title:"Comparative",description:"Usage",source:"@site/docs/adjectives/comparative.md",sourceDirName:"adjectives",slug:"/adjectives/comparative",permalink:"/docs/adjectives/comparative",draft:!1,tags:[],version:"current",frontMatter:{id:"comparative",title:"Comparative"},sidebar:"someSidebar",previous:{title:"Positive",permalink:"/docs/adjectives/positive"},next:{title:"Superlative",permalink:"/docs/adjectives/superlative"}},m={},k=[{value:"Usage",id:"usage",level:2},{value:"Units and measurements in comparisons",id:"units-and-measurements-in-comparisons",level:3},{value:"<em>\xfev\xed</em> \u2026 <em>\xfev\xed</em>",id:"\xfev\xed--\xfev\xed",level:3},{value:"Formation",id:"formation",level:2},{value:"<em>-ari</em>",id:"-ari",level:3},{value:"<em>-ll/nn</em>",id:"-llnn",level:3},{value:"<em>-legur</em> and <em>-ugur</em>",id:"-legur-and--ugur",level:3},{value:"<em>-rr-</em>",id:"-rr-",level:3},{value:"Vowel changes and irregular comparatives",id:"vowel-changes-and-irregular-comparatives",level:3}],p={toc:k},d="wrapper";function g(t){let{components:e,...n}=t;return(0,r.kt)(d,(0,l.Z)({},p,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"usage"},"Usage"),(0,r.kt)("p",null,"The ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)(u.R,{term:"comparative",mdxType:"Term"}))," form of an adjective in Icelandic is, as the name suggests, used in comparisons along with the conjunction ",(0,r.kt)("em",{parentName:"p"},"en")," \u201cthan\u201d:"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("em",{parentName:"p"},"\xc9g er ",(0,r.kt)("strong",{parentName:"em"},"sterkari en")," \xfe\xfa.",(0,r.kt)("br",null),"Kvikmyndin er ",(0,r.kt)("strong",{parentName:"em"},"skemmtilegri en")," b\xf3kin.",(0,r.kt)("br",null),"Hn\xedfurinn er ",(0,r.kt)("strong",{parentName:"em"},"st\xe6rri en")," gaffallinn.",(0,r.kt)("br",null),"M\xedn peysa er ",(0,r.kt)("strong",{parentName:"em"},"gr\xe6nni en")," \xfe\xedn."))),(0,r.kt)("p",null,"The comparative only exists in the weak inflection. But in fact, the inflection of comparative adjectives is even simpler than the ",(0,r.kt)("a",{parentName:"p",href:"positive#weak-inflection"},"standard weak inflection"),"."),(0,r.kt)("p",null,"Indeclinable adjectives are used with the adverb ",(0,r.kt)("em",{parentName:"p"},"meira")," instead of an ending:"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("em",{parentName:"p"},"\xcdslenska er ",(0,r.kt)("strong",{parentName:"em"},"meira spennandi en")," enska!"))),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("em",{parentName:"p"},"Meira")," is only used with adjectives that are not inflected at all, such as ",(0,r.kt)("em",{parentName:"p"},"hissa"),", ",(0,r.kt)("em",{parentName:"p"},"samm\xe1la"),", ",(0,r.kt)("em",{parentName:"p"},"hugsi")," and all adjectives that end in ",(0,r.kt)("em",{parentName:"p"},"-andi"),", such as ",(0,r.kt)("em",{parentName:"p"},"spennandi")," and ",(0,r.kt)("em",{parentName:"p"},"\xfereytandi"),". For all other adjectives, the comparative inflection is used, regardless of how long the adjective is.")),(0,r.kt)("h3",{id:"units-and-measurements-in-comparisons"},"Units and measurements in comparisons"),(0,r.kt)("p",null,"In comparisons, it\u2019s often helpful to specify ",(0,r.kt)("em",{parentName:"p"},"by how much")," something is for example bigger, stronger or faster than something else. This is particularly obvious with units of measurement or time. This information is given in the ",(0,r.kt)("strong",{parentName:"p"},"dative")," case:"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("em",{parentName:"p"},"Pabbi er ",(0,r.kt)("strong",{parentName:"em"},"\xferemur sentimetrum")," h\xe6rri en mamma.",(0,r.kt)("br",null),(0,r.kt)("strong",{parentName:"em"},"Tveimur d\xf6gum")," seinna f\xf3rum vi\xf0 heim."))),(0,r.kt)("p",null,"Certain adverbs such as ",(0,r.kt)("em",{parentName:"p"},"miki\xf0")," can also be used in this way, and are therefore also in the dative:"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("em",{parentName:"p"},"\xdeessi n\xfdja b\xf3k er ",(0,r.kt)("strong",{parentName:"em"},"miklu")," skemmtilegri en s\xfa gamla."))),(0,r.kt)("h3",{id:"\xfev\xed--\xfev\xed"},(0,r.kt)("em",{parentName:"h3"},"\xfev\xed")," \u2026 ",(0,r.kt)("em",{parentName:"h3"},"\xfev\xed")),(0,r.kt)("p",null,"When linking together multiple phrases that contain comparatives, Icelandic uses ",(0,r.kt)("em",{parentName:"p"},"\xfev\xed")," (in the same way English uses \u201cthe\u201d). For example:"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("em",{parentName:"p"},(0,r.kt)("strong",{parentName:"em"},"\xdev\xed")," \xf3d\xfdrara, ",(0,r.kt)("strong",{parentName:"em"},"\xfev\xed")," betra.",(0,r.kt)("br",null),(0,r.kt)("strong",{parentName:"em"},"\xdev\xed")," meira sem hann bor\xf0a\xf0i, ",(0,r.kt)("strong",{parentName:"em"},"\xfev\xed")," feitari var\xf0 hann."))),(0,r.kt)("p",null,"Note that because ",(0,r.kt)("em",{parentName:"p"},"\xfev\xed")," is an adverb in this context, it causes inversion of the subject and the verb if present."),(0,r.kt)("h2",{id:"formation"},"Formation"),(0,r.kt)("p",null,"The endings in the comparative are greatly simplified compared to the ",(0,r.kt)("a",{parentName:"p",href:"positive"},"positive")," and ",(0,r.kt)("a",{parentName:"p",href:"superlative"},"superlative"),". \ud83d\ude05"),(0,r.kt)("p",null,"Regardless which set of rules the adjective follows below to form its comparative, the final vowel is always ",(0,r.kt)("em",{parentName:"p"},"-i")," in all cases for the masculine and feminine singular, and all genders in the plural. In the neuter singular, the final vowel is ",(0,r.kt)("em",{parentName:"p"},"-a")," in all cases:"),(0,r.kt)(a.Z,{className:"italic",defaultValue:"sterkari",values:[{label:"sterkari",value:"sterkari"},{label:"f\xednni",value:"finni"},{label:"bl\xe1rri",value:"blarri"},{label:"yngri",value:"yngri"}],mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"sterkari",mdxType:"TabItem"},(0,r.kt)("figure",null,(0,r.kt)("table",{class:"full-width"},(0,r.kt)("thead",null,(0,r.kt)("tr",null,(0,r.kt)("th",{rowspan:"2"}),(0,r.kt)("th",{colspan:"3"},"Singular"),(0,r.kt)("th",{colspan:"3"},"Plural")),(0,r.kt)("tr",null,(0,r.kt)("th",null,"Masculine"),(0,r.kt)("th",null,"Feminine"),(0,r.kt)("th",null,"Neuter"),(0,r.kt)("th",null,"Masculine"),(0,r.kt)("th",null,"Feminine"),(0,r.kt)("th",null,"Neuter"))),(0,r.kt)("tbody",null,(0,r.kt)("tr",null,(0,r.kt)("th",null,"Nom."),(0,r.kt)("td",{colspan:"2",rowspan:"4",align:"center"},(0,r.kt)("em",null,"sterkar",(0,r.kt)("strong",null,"i"))),(0,r.kt)("td",{rowspan:"4",align:"center"},(0,r.kt)("em",null,"sterkar",(0,r.kt)("strong",null,"a"))),(0,r.kt)("td",{colspan:"3",rowspan:"4",align:"center"},(0,r.kt)("em",null,"sterkar",(0,r.kt)("strong",null,"i")))),(0,r.kt)("tr",null,(0,r.kt)("th",null,"Acc.")),(0,r.kt)("tr",null,(0,r.kt)("th",null,"Dat.")),(0,r.kt)("tr",null,(0,r.kt)("th",null,"Gen.")))))),(0,r.kt)(i.Z,{value:"finni",mdxType:"TabItem"},(0,r.kt)("figure",null,(0,r.kt)("table",{class:"full-width"},(0,r.kt)("thead",null,(0,r.kt)("tr",null,(0,r.kt)("th",{rowspan:"2"}),(0,r.kt)("th",{colspan:"3"},"Singular"),(0,r.kt)("th",{colspan:"3"},"Plural")),(0,r.kt)("tr",null,(0,r.kt)("th",null,"Masculine"),(0,r.kt)("th",null,"Feminine"),(0,r.kt)("th",null,"Neuter"),(0,r.kt)("th",null,"Masculine"),(0,r.kt)("th",null,"Feminine"),(0,r.kt)("th",null,"Neuter"))),(0,r.kt)("tbody",null,(0,r.kt)("tr",null,(0,r.kt)("th",null,"Nom."),(0,r.kt)("td",{colspan:"2",rowspan:"4",align:"center"},(0,r.kt)("em",null,"f\xednn",(0,r.kt)("strong",null,"i"))),(0,r.kt)("td",{rowspan:"4",align:"center"},(0,r.kt)("em",null,"f\xednn",(0,r.kt)("strong",null,"a"))),(0,r.kt)("td",{colspan:"3",rowspan:"4",align:"center"},(0,r.kt)("em",null,"f\xednn",(0,r.kt)("strong",null,"i")))),(0,r.kt)("tr",null,(0,r.kt)("th",null,"Acc.")),(0,r.kt)("tr",null,(0,r.kt)("th",null,"Dat.")),(0,r.kt)("tr",null,(0,r.kt)("th",null,"Gen.")))))),(0,r.kt)(i.Z,{value:"blarri",mdxType:"TabItem"},(0,r.kt)("figure",null,(0,r.kt)("table",{class:"full-width"},(0,r.kt)("thead",null,(0,r.kt)("tr",null,(0,r.kt)("th",{rowspan:"2"}),(0,r.kt)("th",{colspan:"3"},"Singular"),(0,r.kt)("th",{colspan:"3"},"Plural")),(0,r.kt)("tr",null,(0,r.kt)("th",null,"Masculine"),(0,r.kt)("th",null,"Feminine"),(0,r.kt)("th",null,"Neuter"),(0,r.kt)("th",null,"Masculine"),(0,r.kt)("th",null,"Feminine"),(0,r.kt)("th",null,"Neuter"))),(0,r.kt)("tbody",null,(0,r.kt)("tr",null,(0,r.kt)("th",null,"Nom."),(0,r.kt)("td",{colspan:"2",rowspan:"4",align:"center"},(0,r.kt)("em",null,"bl\xe1rr",(0,r.kt)("strong",null,"i"))),(0,r.kt)("td",{rowspan:"4",align:"center"},(0,r.kt)("em",null,"bl\xe1rr",(0,r.kt)("strong",null,"a"))),(0,r.kt)("td",{colspan:"3",rowspan:"4",align:"center"},(0,r.kt)("em",null,"bl\xe1rr",(0,r.kt)("strong",null,"i")))),(0,r.kt)("tr",null,(0,r.kt)("th",null,"Acc.")),(0,r.kt)("tr",null,(0,r.kt)("th",null,"Dat.")),(0,r.kt)("tr",null,(0,r.kt)("th",null,"Gen.")))))),(0,r.kt)(i.Z,{value:"yngri",mdxType:"TabItem"},(0,r.kt)("figure",null,(0,r.kt)("table",{class:"full-width"},(0,r.kt)("thead",null,(0,r.kt)("tr",null,(0,r.kt)("th",{rowspan:"2"}),(0,r.kt)("th",{colspan:"3"},"Singular"),(0,r.kt)("th",{colspan:"3"},"Plural")),(0,r.kt)("tr",null,(0,r.kt)("th",null,"Masculine"),(0,r.kt)("th",null,"Feminine"),(0,r.kt)("th",null,"Neuter"),(0,r.kt)("th",null,"Masculine"),(0,r.kt)("th",null,"Feminine"),(0,r.kt)("th",null,"Neuter"))),(0,r.kt)("tbody",null,(0,r.kt)("tr",null,(0,r.kt)("th",null,"Nom."),(0,r.kt)("td",{colspan:"2",rowspan:"4",align:"center"},(0,r.kt)("em",null,"yngr",(0,r.kt)("strong",null,"i"))),(0,r.kt)("td",{rowspan:"4",align:"center"},(0,r.kt)("em",null,"yngr",(0,r.kt)("strong",null,"a"))),(0,r.kt)("td",{colspan:"3",rowspan:"4",align:"center"},(0,r.kt)("em",null,"yngr",(0,r.kt)("strong",null,"i")))),(0,r.kt)("tr",null,(0,r.kt)("th",null,"Acc.")),(0,r.kt)("tr",null,(0,r.kt)("th",null,"Dat.")),(0,r.kt)("tr",null,(0,r.kt)("th",null,"Gen."))))))),(0,r.kt)("h3",{id:"-ari"},(0,r.kt)("em",{parentName:"h3"},"-ari")),(0,r.kt)("p",null,"The majority of adjectives form their comparative with the suffix ",(0,r.kt)("em",{parentName:"p"},"-ari")," (",(0,r.kt)("em",{parentName:"p"},"-ara")," in the neuter singular), regardless of which pattern they follow in the positive."),(0,r.kt)("figure",null,(0,r.kt)("table",null,(0,r.kt)("thead",null,(0,r.kt)("tr",null,(0,r.kt)("th",{colspan:"2"}),(0,r.kt)("th",{width:"35%"},"Masc. and fem. singular",(0,r.kt)("br",null),"Plural (all genders)"),(0,r.kt)("th",{width:"35%"},"Neuter singular"))),(0,r.kt)("tbody",null,(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("em",null,"sterkur",(0,r.kt)("br",null),"\xfeykkur",(0,r.kt)("br",null),"au\xf0veldur")),(0,r.kt)("td",{rowspan:"3",align:"center",width:"5%"},"\u2192"),(0,r.kt)("td",null,(0,r.kt)("em",null,"sterk",(0,r.kt)("strong",null,"ari"),(0,r.kt)("br",null),"\xfeykk",(0,r.kt)("strong",null,"ari"),(0,r.kt)("br",null),"au\xf0veld",(0,r.kt)("strong",null,"ari"))),(0,r.kt)("td",null,(0,r.kt)("em",null,"sterk",(0,r.kt)("strong",null,"ara"),(0,r.kt)("br",null),"\xfeykk",(0,r.kt)("strong",null,"ara"),(0,r.kt)("br",null),"au\xf0veld",(0,r.kt)("strong",null,"ara")))),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("em",null,"d\xfdr",(0,r.kt)("br",null),"laus")),(0,r.kt)("td",null,(0,r.kt)("em",null,"d\xfdr",(0,r.kt)("strong",null,"ari"),(0,r.kt)("br",null),"laus",(0,r.kt)("strong",null,"ari"))),(0,r.kt)("td",null,(0,r.kt)("em",null,"d\xfdr",(0,r.kt)("strong",null,"ara"),(0,r.kt)("br",null),"laus",(0,r.kt)("strong",null,"ara")))),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("em",null,"opinn",(0,r.kt)("br",null),"h\xe1vaxinn",(0,r.kt)("br",null))),(0,r.kt)("td",null,(0,r.kt)("em",null,"opn",(0,r.kt)("strong",null,"ari"),(0,r.kt)("br",null),"h\xe1vaxn",(0,r.kt)("strong",null,"ari"))),(0,r.kt)("td",null,(0,r.kt)("em",null,"opn",(0,r.kt)("strong",null,"ara"),(0,r.kt)("br",null),"h\xe1vaxn",(0,r.kt)("strong",null,"ara"))))))),(0,r.kt)("h3",{id:"-llnn"},(0,r.kt)("em",{parentName:"h3"},"-ll/nn")),(0,r.kt)("p",null,"Adjectives ending in ",(0,r.kt)("em",{parentName:"p"},"-ll")," and ",(0,r.kt)("em",{parentName:"p"},"-nn")," both follow a similar pattern:"),(0,r.kt)("figure",null,(0,r.kt)("table",null,(0,r.kt)("thead",null,(0,r.kt)("tr",null,(0,r.kt)("th",{colspan:"2"}),(0,r.kt)("th",{width:"35%"},"Masc. and fem. singular",(0,r.kt)("br",null),"Plural (all genders)"),(0,r.kt)("th",{width:"35%"},"Neuter singular"))),(0,r.kt)("tbody",null,(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("em",null,"h\xe1ll",(0,r.kt)("br",null),"heill",(0,r.kt)("br",null),"vins\xe6ll")),(0,r.kt)("td",{rowspan:"3",align:"center",width:"5%"},"\u2192"),(0,r.kt)("td",null,(0,r.kt)("em",null,"h\xe1ll",(0,r.kt)("strong",null,"i"),(0,r.kt)("br",null),"heill",(0,r.kt)("strong",null,"i"),(0,r.kt)("br",null),"vins\xe6ll",(0,r.kt)("strong",null,"i"))),(0,r.kt)("td",null,(0,r.kt)("em",null,"h\xe1ll",(0,r.kt)("strong",null,"a"),(0,r.kt)("br",null),"heill",(0,r.kt)("strong",null,"a"),(0,r.kt)("br",null),"vins\xe6ll",(0,r.kt)("strong",null,"a")))),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("em",null,"br\xfann",(0,r.kt)("br",null),"f\xednn",(0,r.kt)("br",null),"gr\xe6nn")),(0,r.kt)("td",null,(0,r.kt)("em",null,"br\xfann",(0,r.kt)("strong",null,"i"),(0,r.kt)("br",null),"f\xednn",(0,r.kt)("strong",null,"i"),(0,r.kt)("br",null),"gr\xe6nn",(0,r.kt)("strong",null,"i"))),(0,r.kt)("td",null,(0,r.kt)("em",null,"br\xfann",(0,r.kt)("strong",null,"a"),(0,r.kt)("br",null),"f\xednn",(0,r.kt)("strong",null,"a"),(0,r.kt)("br",null),"gr\xe6nn",(0,r.kt)("strong",null,"a"))))))),(0,r.kt)("h3",{id:"-legur-and--ugur"},(0,r.kt)("em",{parentName:"h3"},"-legur")," and ",(0,r.kt)("em",{parentName:"h3"},"-ugur")),(0,r.kt)("p",null,"All adjectives ending in ",(0,r.kt)("em",{parentName:"p"},"-legur")," and ",(0,r.kt)("em",{parentName:"p"},"-ugur")," follow this pattern:"),(0,r.kt)("figure",null,(0,r.kt)("table",null,(0,r.kt)("thead",null,(0,r.kt)("tr",null,(0,r.kt)("th",{colspan:"2"}),(0,r.kt)("th",{width:"35%"},"Masc. and fem. singular",(0,r.kt)("br",null),"Plural (all genders)"),(0,r.kt)("th",{width:"35%"},"Neuter singular"))),(0,r.kt)("tbody",null,(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("em",null,"skemmtilegur",(0,r.kt)("br",null),"lei\xf0inlegur",(0,r.kt)("br",null),"asnalegur")),(0,r.kt)("td",{rowspan:"3",align:"center",width:"5%"},"\u2192"),(0,r.kt)("td",null,(0,r.kt)("em",null,"skemmtileg",(0,r.kt)("strong",null,"ri"),(0,r.kt)("br",null),"lei\xf0inleg",(0,r.kt)("strong",null,"ri"),(0,r.kt)("br",null),"asnaleg",(0,r.kt)("strong",null,"ri"))),(0,r.kt)("td",null,(0,r.kt)("em",null,"skemmtileg",(0,r.kt)("strong",null,"ra"),(0,r.kt)("br",null),"lei\xf0inleg",(0,r.kt)("strong",null,"ra"),(0,r.kt)("br",null),"asnaleg",(0,r.kt)("strong",null,"ra")))),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("em",null,"au\xf0ugur",(0,r.kt)("br",null),"\xf6flugur")),(0,r.kt)("td",null,(0,r.kt)("em",null,"au\xf0ug",(0,r.kt)("strong",null,"ri"),(0,r.kt)("br",null),"\xf6flug",(0,r.kt)("strong",null,"ri"))),(0,r.kt)("td",null,(0,r.kt)("em",null,"au\xf0ug",(0,r.kt)("strong",null,"ra"),(0,r.kt)("br",null),"\xf6flug",(0,r.kt)("strong",null,"ra"))))))),(0,r.kt)("h3",{id:"-rr-"},(0,r.kt)("em",{parentName:"h3"},"-rr-")),(0,r.kt)("p",null,"A small group of adjectives with these properties follow a slightly different pattern:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"1\ufe0f\u20e3 Single-syllable (or formed from single-syllable adjectives e.g. ",(0,r.kt)("em",{parentName:"li"},"gegn-s\xe6r"),"),"),(0,r.kt)("li",{parentName:"ul"},"\xae\ufe0f Ending in ",(0,r.kt)("em",{parentName:"li"},"-r"),","),(0,r.kt)("li",{parentName:"ul"},"\ud83d\udd3a With an accented vowel or ",(0,r.kt)("em",{parentName:"li"},"\xe6")," in their stem.")),(0,r.kt)("p",null,"All of the adjectives in this group are ones that lose their ",(0,r.kt)("em",{parentName:"p"},"-r")," ending in the feminine and neuter in the positive (e.g. ",(0,r.kt)("em",{parentName:"p"},"bl\xe1r \u2013 bl\xe1 \u2013 bl\xe1tt")," but not ",(0,r.kt)("em",{parentName:"p"},"d\xfdr \u2013 d\xfd",(0,r.kt)("strong",{parentName:"em"},"r")," \u2013 d\xfd",(0,r.kt)("strong",{parentName:"em"},"r"),"t"),")."),(0,r.kt)("figure",null,(0,r.kt)("table",null,(0,r.kt)("thead",null,(0,r.kt)("tr",null,(0,r.kt)("th",{colspan:"2"}),(0,r.kt)("th",{width:"35%"},"Masc. and fem. singular",(0,r.kt)("br",null),"Plural (all genders)"),(0,r.kt)("th",{width:"35%"},"Neuter singular"))),(0,r.kt)("tbody",null,(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("em",null,"bl\xe1r",(0,r.kt)("br",null),"gr\xe1r",(0,r.kt)("br",null),"mj\xf3r",(0,r.kt)("br",null),"tr\xfar",(0,r.kt)("br",null),"n\xfdr",(0,r.kt)("br",null),"hl\xfdr",(0,r.kt)("br",null),"gegns\xe6r")),(0,r.kt)("td",{rowspan:"3",align:"center",width:"5%"},"\u2192"),(0,r.kt)("td",null,(0,r.kt)("em",null,"bl\xe1",(0,r.kt)("strong",null,"rri"),(0,r.kt)("br",null),"gr\xe1",(0,r.kt)("strong",null,"rri"),(0,r.kt)("br",null),"mj\xf3",(0,r.kt)("strong",null,"rri"),(0,r.kt)("br",null),"tr\xfa",(0,r.kt)("strong",null,"rri"),(0,r.kt)("br",null),"n\xfd",(0,r.kt)("strong",null,"rri"),(0,r.kt)("br",null),"hl\xfd",(0,r.kt)("strong",null,"rri"),(0,r.kt)("br",null),"gegns\xe6",(0,r.kt)("strong",null,"rri"))),(0,r.kt)("td",null,(0,r.kt)("em",null,"bl\xe1",(0,r.kt)("strong",null,"rra"),(0,r.kt)("br",null),"gr\xe1",(0,r.kt)("strong",null,"rra"),(0,r.kt)("br",null),"mj\xf3",(0,r.kt)("strong",null,"rra"),(0,r.kt)("br",null),"tr\xfa",(0,r.kt)("strong",null,"rra"),(0,r.kt)("br",null),"n\xfd",(0,r.kt)("strong",null,"rra"),(0,r.kt)("br",null),"hl\xfd",(0,r.kt)("strong",null,"rra"),(0,r.kt)("br",null),"gegns\xe6",(0,r.kt)("strong",null,"rra"))))))),(0,r.kt)("h3",{id:"vowel-changes-and-irregular-comparatives"},"Vowel changes and irregular comparatives"),(0,r.kt)("p",null,"Some adjectives such as ",(0,r.kt)("em",{parentName:"p"},"langur")," and ",(0,r.kt)("em",{parentName:"p"},"ungur")," get the I-shift in their comparative forms, becoming ",(0,r.kt)("em",{parentName:"p"},"l",(0,r.kt)("strong",{parentName:"em"},"e"),"ngri")," and ",(0,r.kt)("em",{parentName:"p"},(0,r.kt)("strong",{parentName:"em"},"y"),"ngri")," respectively. Others are completely irregular, such as ",(0,r.kt)("em",{parentName:"p"},"g\xf3\xf0ur"),", whose comparative form is ",(0,r.kt)("em",{parentName:"p"},(0,r.kt)("strong",{parentName:"em"},"betri")),"."),(0,r.kt)("p",null,"As these variations also affect the superlative, they are dealt with together in ",(0,r.kt)("a",{parentName:"p",href:"irregular-comparatives-and-superlatives"},"Irregular comparatives and superlatives"),"."))}g.isMDXComponent=!0}}]);