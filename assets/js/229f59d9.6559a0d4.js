(self.webpackChunkgramref=self.webpackChunkgramref||[]).push([[472],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return m},kt:function(){return c}});var l=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,l)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,l,r=function(e,t){if(null==e)return{};var n,l,r={},a=Object.keys(e);for(l=0;l<a.length;l++)n=a[l],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(l=0;l<a.length;l++)n=a[l],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=l.createContext({}),u=function(e){var t=l.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=u(e.components);return l.createElement(o.Provider,{value:t},e.children)},k={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},p=l.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,o=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),p=u(n),c=r,d=p["".concat(o,".").concat(c)]||p[c]||k[c]||a;return n?l.createElement(d,i(i({ref:t},m),{},{components:n})):l.createElement(d,i({ref:t},m))}));function c(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=p;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var u=2;u<a;u++)i[u]=n[u];return l.createElement.apply(null,i)}return l.createElement.apply(null,n)}p.displayName="MDXCreateElement"},8215:function(e,t,n){"use strict";n.d(t,{Z:function(){return r}});var l=n(7294);function r(e){var t=e.children,n=e.hidden,r=e.className;return l.createElement("div",{role:"tabpanel",hidden:n,className:r},t)}},9877:function(e,t,n){"use strict";n.d(t,{Z:function(){return m}});var l=n(7462),r=n(7294),a=n(2389),i=n(3725),s=n(6010),o="tabItem_LplD";function u(e){var t,n,a,u=e.lazy,m=e.block,k=e.defaultValue,p=e.values,c=e.groupId,d=e.className,h=r.Children.map(e.children,(function(e){if((0,r.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),f=null!=p?p:h.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),v=(0,i.lx)(f,(function(e,t){return e.value===t.value}));if(v.length>0)throw new Error('Docusaurus error: Duplicate values "'+v.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var g=null===k?k:null!=(t=null!=k?k:null==(n=h.find((function(e){return e.props.default})))?void 0:n.props.value)?t:null==(a=h[0])?void 0:a.props.value;if(null!==g&&!f.some((function(e){return e.value===g})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+g+'" but none of its children has the corresponding value. Available values are: '+f.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var b=(0,i.UB)(),N=b.tabGroupChoices,y=b.setTabGroupChoices,w=(0,r.useState)(g),T=w[0],j=w[1],O=[],x=(0,i.o5)().blockElementScrollPositionUntilNextRender;if(null!=c){var E=N[c];null!=E&&E!==T&&f.some((function(e){return e.value===E}))&&j(E)}var q=function(e){var t=e.currentTarget,n=O.indexOf(t),l=f[n].value;l!==T&&(x(t),j(l),null!=c&&y(c,l))},P=function(e){var t,n=null;switch(e.key){case"ArrowRight":var l=O.indexOf(e.currentTarget)+1;n=O[l]||O[0];break;case"ArrowLeft":var r=O.indexOf(e.currentTarget)-1;n=O[r]||O[O.length-1]}null==(t=n)||t.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":m},d)},f.map((function(e){var t=e.value,n=e.label,a=e.attributes;return r.createElement("li",(0,l.Z)({role:"tab",tabIndex:T===t?0:-1,"aria-selected":T===t,key:t,ref:function(e){return O.push(e)},onKeyDown:P,onFocus:q,onClick:q},a,{className:(0,s.Z)("tabs__item",o,null==a?void 0:a.className,{"tabs__item--active":T===t})}),null!=n?n:t)}))),u?(0,r.cloneElement)(h.filter((function(e){return e.props.value===T}))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},h.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==T})}))))}function m(e){var t=(0,a.Z)();return r.createElement(u,(0,l.Z)({key:String(t)},e))}},1333:function(e,t,n){"use strict";n.d(t,{R:function(){return s}});var l=n(4578),r=n(7294),a=n(4052),i=n.n(a),s=function(e){function t(t){var n;return(n=e.call(this,t)||this).state={termWidth:""},n}(0,l.Z)(t,e);var n=t.prototype;return n.componentDidMount=function(){var e=document.getElementById("term-"+this.props.term).clientWidth,t=document.getElementById("tooltip-"+this.props.term).clientWidth;this.setState({termWidth:e,tooltipWidth:t})},n.offset=function(){var e=0-this.state.tooltipWidth/2+this.state.termWidth/2+"px";return e},n.displayTerm=function(){return this.props.display?this.props.display:this.props.term},n.getIcelandicTerm=function(){var e=this;return i().terms.filter((function(t){return t.term.includes(e.props.term.toLowerCase())}))[0].icelandic},n.render=function(){return r.createElement(r.Fragment,null,r.createElement("span",{className:"term",id:"term-"+this.props.term},this.displayTerm(),r.createElement("span",{id:"tooltip-"+this.props.term,className:"tooltip",style:{left:this.offset()}},"\ud83c\uddee\ud83c\uddf8 ",this.getIcelandicTerm())))},t}(r.Component)},4052:function(e){e.exports={terms:[,{term:"verb",icelandic:"s\xf6gn"},{term:"accusative",icelandic:"\xfeolfall"},{term:"active voice",icelandic:"germynd"},{term:"adjective",icelandic:"l\xfdsingaror\xf0"},{term:"case",icelandic:"fall"},{term:"comparative",icelandic:"mi\xf0stig"},{term:"dative",icelandic:"\xfe\xe1gufall"},{term:"definite article",icelandic:"\xe1kve\xf0inn greinir"},{term:"demonstrative pronoun",icelandic:"\xe1bendingarfornafn"},{term:"ending",icelandic:"ending"},{term:"feminine",icelandic:"kvenkyn"},{term:"first person",icelandic:"fyrsta pers\xf3na"},{term:"gender",icelandic:"kyn"},{term:"genitive",icelandic:"eignarfall"},{term:"indefinite pronoun",icelandic:"\xf3\xe1kve\xf0i\xf0 fornafn"},{term:"indicative",icelandic:"frams\xf6guh\xe1ttur"},{term:"imperative",icelandic:"bo\xf0h\xe1ttur"},{term:"infinitive",icelandic:"nafnh\xe1ttur"},{term:"masculine",icelandic:"karlkyn"},{term:"middle voice",icelandic:"mi\xf0mynd"},{term:"neuter",icelandic:"hvorugkyn"},{term:"nominative",icelandic:"nefnifall"},{term:"passive voice",icelandic:"\xfeolmynd"},{term:"past participle",icelandic:"l\xfdsingarh\xe1ttur \xfe\xe1t\xed\xf0ar"},{term:"past tense",icelandic:"\xfe\xe1t\xed\xf0"},{term:"personal pronoun",icelandic:"pers\xf3nufornafn"},{term:"plural",icelandic:"fleirtala"},{term:"positive",icelandic:"frumstig"},{term:"reflexive pronoun",icelandic:"afturbeygt fornafn"},{term:"possessive pronoun",icelandic:"eignarfornafn"},{term:"present participle",icelandic:"l\xfdsingarh\xe1ttur n\xfat\xed\xf0ar"},{term:"present tense",icelandic:"n\xfat\xed\xf0"},{term:"second person",icelandic:"\xf6nnur pers\xf3na"},{term:"singular",icelandic:"eintala"},{term:"stem",icelandic:"stofn"},{term:"strong",icelandic:"sterk beyging"},{term:"strong verb",icelandic:"sterk s\xf6gn"},{term:"subjunctive",icelandic:"vi\xf0tengingarh\xe1ttur"},{term:"superlative",icelandic:"efsta stig"},{term:"supine",icelandic:"sagnb\xf3t"},{term:"third person",icelandic:"\xferi\xf0ja pers\xf3na"},{term:"transitive",icelandic:"\xe1hrifss\xf6gn"},{term:"weak",icelandic:"veik beyging"}]}},2578:function(e,t,n){"use strict";n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return k},default:function(){return f},frontMatter:function(){return m},metadata:function(){return p},toc:function(){return d}});var l=n(7462),r=n(3366),a=(n(7294),n(3905)),i=n(9877),s=n(8215),o=n(1333),u=["components"],m={id:"possessive",title:"Possessive pronouns",sidebar_label:"Possessive"},k=void 0,p={unversionedId:"pronouns/possessive",id:"pronouns/possessive",title:"Possessive pronouns",description:"A  in Icelandic is used to indicate who or what something belongs to:",source:"@site/docs/pronouns/possessive.md",sourceDirName:"pronouns",slug:"/pronouns/possessive",permalink:"/docs/pronouns/possessive",tags:[],version:"current",frontMatter:{id:"possessive",title:"Possessive pronouns",sidebar_label:"Possessive"},sidebar:"someSidebar",previous:{title:"Reflexive",permalink:"/docs/pronouns/reflexive"},next:{title:"Demonstrative",permalink:"/docs/pronouns/demonstrative"}},c={},d=[{value:"Introduction",id:"introduction",level:2},{value:"Definite article",id:"definite-article",level:3},{value:"<em>minn, \xfeinn, sinn</em>",id:"minn-\xfeinn-sinn",level:2},{value:"Declension",id:"declension",level:3},{value:"<em>sinn</em>",id:"sinn",level:3},{value:"Other possessives",id:"other-possessives",level:2},{value:"Obsolete possessives",id:"obsolete-possessives",level:3},{value:"<em>vor</em>",id:"vor",level:4},{value:"<em>y\xf0ar</em>",id:"y\xf0ar",level:4}],h={toc:d};function f(e){var t=e.components,n=(0,r.Z)(e,u);return(0,a.kt)("wrapper",(0,l.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"A ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)(o.R,{term:"possessive pronoun",mdxType:"Term"}))," in Icelandic is used to indicate who or what something belongs to:"),(0,a.kt)("p",null,"General rules that apply to all possessives are set it out in the introduction below. To find out more about a specific pronoun, click on it in the table below."),(0,a.kt)("table",null,(0,a.kt)("thead",null,(0,a.kt)("tr",null,(0,a.kt)("th",null),(0,a.kt)("th",{width:"35%"},"Singular"),(0,a.kt)("th",{width:"35%"},"Plural"))),(0,a.kt)("tbody",null,(0,a.kt)("tr",null,(0,a.kt)("th",null,"1st person"),(0,a.kt)("td",null,(0,a.kt)("em",null,(0,a.kt)("a",{href:"#minn-\xfeinn-sinn"},"minn"))),(0,a.kt)("td",null,(0,a.kt)("em",null,(0,a.kt)("a",{href:"#other-possessives"},"okkar")))),(0,a.kt)("tr",null,(0,a.kt)("th",null,"2nd person"),(0,a.kt)("td",null,(0,a.kt)("em",null,(0,a.kt)("a",{href:"#minn-\xfeinn-sinn"},"\xfeinn"))),(0,a.kt)("td",null,(0,a.kt)("em",null,(0,a.kt)("a",{href:"#other-possessives"},"ykkar")))),(0,a.kt)("tr",null,(0,a.kt)("th",{rowspan:"2"},"3rd person"),(0,a.kt)("td",{colspan:"2"},(0,a.kt)("strong",null,"Reflexive"),(0,a.kt)("br",null),(0,a.kt)("em",null,(0,a.kt)("a",{href:"#sinn"},"sinn")))),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("strong",null,"Non-reflexive"),(0,a.kt)("br",null),(0,a.kt)("em",null,(0,a.kt)("a",{href:"#other-possessives"},"hans"),(0,a.kt)("br",null),(0,a.kt)("a",{href:"#other-possessives"},"hennar"),(0,a.kt)("br",null),(0,a.kt)("a",{href:"#other-possessives"},"h\xe1ns"),(0,a.kt)("br",null),(0,a.kt)("a",{href:"#other-possessives"},"\xfeess"))),(0,a.kt)("td",null,(0,a.kt)("em",null,(0,a.kt)("a",{href:"#other-possessives"},"\xfeeirra")))))),(0,a.kt)("h2",{id:"introduction"},"Introduction"),(0,a.kt)("p",null,"Possessive pronouns normally come ",(0,a.kt)("em",{parentName:"p"},"after")," the noun they modify. That noun is also normally definite:"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("em",{parentName:"p"},"\xdeetta er jakki",(0,a.kt)("strong",{parentName:"em"},"nn minn"),".",(0,a.kt)("br",null),"Er \xfeetta h\xfas",(0,a.kt)("strong",{parentName:"em"},"i\xf0 \xfeitt"),"?",(0,a.kt)("br",null),"\xc9g gleymdi veski",(0,a.kt)("strong",{parentName:"em"},"nu m\xednu")," heima.",(0,a.kt)("br",null),"Hann skildi peninga",(0,a.kt)("strong",{parentName:"em"},"na s\xedna")," eftir \xe1 bor\xf0inu."))),(0,a.kt)("p",null,"They can also occur ",(0,a.kt)("em",{parentName:"p"},"before")," a noun to emphasise who or what something belongs to, and then the noun is indefinite:"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("em",{parentName:"p"},"\xdeetta er ",(0,a.kt)("strong",{parentName:"em"},"\xfeinn jakki"),"!",(0,a.kt)("br",null),"Ekki drekka ",(0,a.kt)("strong",{parentName:"em"},"mitt kaffi"),"!"))),(0,a.kt)("h3",{id:"definite-article"},"Definite article"),(0,a.kt)("p",null,"The following types of nouns don\u2019t get a definite article with possessives."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Close personal relationships"),(0,a.kt)("br",null),"(except ",(0,a.kt)("em",{parentName:"p"},"barn/ma\xf0ur/kona/k\xe6rasti/k\xe6rasta"),"):"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("em",{parentName:"p"},(0,a.kt)("strong",{parentName:"em"},"Sonur minn")," b\xfdr \xed Noregi.",(0,a.kt)("br",null),(0,a.kt)("strong",{parentName:"em"},"Mamma m\xedn")," \xe1 \xfeessa peysu.",(0,a.kt)("br",null),"Koma ",(0,a.kt)("strong",{parentName:"em"},"vinir \xfe\xednir")," me\xf0?"))),(0,a.kt)("p",null,"But:"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("em",{parentName:"p"},(0,a.kt)("strong",{parentName:"em"},"B\xf6rnin \xfe\xedn")," eru svo myndarleg!",(0,a.kt)("br",null),(0,a.kt)("strong",{parentName:"em"},"K\xe6rastan m\xedn")," heitir \xc1sd\xeds.",(0,a.kt)("br",null),(0,a.kt)("strong",{parentName:"em"},"Ma\xf0urinn minn")," elskar s\xfakkula\xf0i."))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Most abstract nouns"),":"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("em",{parentName:"p"},(0,a.kt)("strong",{parentName:"em"},"L\xedf mitt")," er svo skemmtilegt!",(0,a.kt)("br",null),"\xdeetta er ",(0,a.kt)("strong",{parentName:"em"},"hugmynd \xfe\xedn"),".",(0,a.kt)("br",null),(0,a.kt)("strong",{parentName:"em"},"Stu\xf0ningur ykkar")," skiptir \xf6llu m\xe1li!"))),(0,a.kt)("p",null,"Some abstract nouns, such as ",(0,a.kt)("em",{parentName:"p"},"hugmynd"),", sometimes get the definite article in informal speech. Others, such as ",(0,a.kt)("em",{parentName:"p"},"l\xedf"),", almost never occur with the definite article."),(0,a.kt)("h2",{id:"minn-\xfeinn-sinn"},(0,a.kt)("em",{parentName:"h2"},"minn, \xfeinn, sinn")),(0,a.kt)("p",null,"The following possessive pronouns decline for gender, case and number:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("em",{parentName:"strong"},"minn"))," \u201cmy\u201d"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("em",{parentName:"strong"},"\xfeinn"))," \u201cyour\u201d (singular)"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("em",{parentName:"strong"},"sinn"))," \u201chis, her, its, their\u201d")),(0,a.kt)("p",null,"They work similarly to adjectives or numerals in that they derive their grammatical properties from the noun they modify:"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("em",{parentName:"p"},"\xdeetta eru gleraugun ",(0,a.kt)("strong",{parentName:"em"},"\xfe\xedn"),".",(0,a.kt)("br",null),"B\xedllinn ",(0,a.kt)("strong",{parentName:"em"},"minn")," er \xe1 verkst\xe6\xf0inu.",(0,a.kt)("br",null),"Hann talar vi\xf0 m\xf6mmu ",(0,a.kt)("strong",{parentName:"em"},"s\xedna"),"."))),(0,a.kt)("p",null,"In other words, they agree in gender, number and case with the ",(0,a.kt)("em",{parentName:"p"},"possession")," and not the owner."),(0,a.kt)("h3",{id:"declension"},"Declension"),(0,a.kt)("p",null,"The declension pattern for these three pronouns is the same, just change the first letter as applicable."),(0,a.kt)("p",null,"The pattern itself is similar to the numeral ",(0,a.kt)("em",{parentName:"p"},"einn"),", although there is the additional quirk of the ",(0,a.kt)("em",{parentName:"p"},"i")," changing to ",(0,a.kt)("em",{parentName:"p"},"\xed")," in forms with a single ",(0,a.kt)("em",{parentName:"p"},"n"),", e.g. ",(0,a.kt)("em",{parentName:"p"},"m",(0,a.kt)("strong",{parentName:"em"},"i"),"nn")," vs. ",(0,a.kt)("em",{parentName:"p"},"m",(0,a.kt)("strong",{parentName:"em"},"\xed"),"n"),"."),(0,a.kt)(i.Z,{defaultValue:"minn",values:[{label:"minn",value:"minn"},{label:"\xfeinn",value:"thinn"},{label:"sinn",value:"sinn"}],mdxType:"Tabs"},(0,a.kt)(s.Z,{value:"minn",mdxType:"TabItem"},(0,a.kt)("table",{class:"full-width"},(0,a.kt)("thead",null,(0,a.kt)("tr",null,(0,a.kt)("th",{rowspan:"2"}),(0,a.kt)("th",{colspan:"3"},"Singular"),(0,a.kt)("th",{colspan:"3"},"Plural")),(0,a.kt)("tr",null,(0,a.kt)("th",null,"Masculine"),(0,a.kt)("th",null,"Feminine"),(0,a.kt)("th",null,"Neuter"),(0,a.kt)("th",null,"Masculine"),(0,a.kt)("th",null,"Feminine"),(0,a.kt)("th",null,"Neuter"))),(0,a.kt)("tbody",null,(0,a.kt)("tr",null,(0,a.kt)("th",null,"Nom."),(0,a.kt)("td",{rowspan:"2"},(0,a.kt)("em",null,"minn")),(0,a.kt)("td",null,(0,a.kt)("em",null,"m\xedn")),(0,a.kt)("td",{rowspan:"2"},(0,a.kt)("em",null,"mitt")),(0,a.kt)("td",null,(0,a.kt)("em",null,"m\xednir")),(0,a.kt)("td",{rowspan:"2"},(0,a.kt)("em",null,"m\xednar")),(0,a.kt)("td",{rowspan:"2"},(0,a.kt)("em",null,"m\xedn"))),(0,a.kt)("tr",null,(0,a.kt)("th",null,"Acc."),(0,a.kt)("td",null,(0,a.kt)("em",null,"m\xedna")),(0,a.kt)("td",null,(0,a.kt)("em",null,"m\xedna"))),(0,a.kt)("tr",null,(0,a.kt)("th",null,"Dat."),(0,a.kt)("td",null,(0,a.kt)("em",null,"m\xednum")),(0,a.kt)("td",null,(0,a.kt)("em",null,"minni")),(0,a.kt)("td",null,(0,a.kt)("em",null,"m\xednu")),(0,a.kt)("td",{colspan:"3",align:"center"},(0,a.kt)("em",null,"m\xednum"))),(0,a.kt)("tr",null,(0,a.kt)("th",null,"Gen."),(0,a.kt)("td",null,(0,a.kt)("em",null,"m\xedns")),(0,a.kt)("td",null,(0,a.kt)("em",null,"minnar")),(0,a.kt)("td",null,(0,a.kt)("em",null,"m\xedns")),(0,a.kt)("td",{colspan:"3",align:"center"},(0,a.kt)("em",null,"minna")))))),(0,a.kt)(s.Z,{value:"thinn",mdxType:"TabItem"},(0,a.kt)("table",{class:"full-width"},(0,a.kt)("thead",null,(0,a.kt)("tr",null,(0,a.kt)("th",{rowspan:"2"}),(0,a.kt)("th",{colspan:"3"},"Singular"),(0,a.kt)("th",{colspan:"3"},"Plural")),(0,a.kt)("tr",null,(0,a.kt)("th",null,"Masculine"),(0,a.kt)("th",null,"Feminine"),(0,a.kt)("th",null,"Neuter"),(0,a.kt)("th",null,"Masculine"),(0,a.kt)("th",null,"Feminine"),(0,a.kt)("th",null,"Neuter"))),(0,a.kt)("tbody",null,(0,a.kt)("tr",null,(0,a.kt)("th",null,"Nom."),(0,a.kt)("td",{rowspan:"2"},(0,a.kt)("em",null,"\xfeinn")),(0,a.kt)("td",null,(0,a.kt)("em",null,"\xfe\xedn")),(0,a.kt)("td",{rowspan:"2"},(0,a.kt)("em",null,"\xfeitt")),(0,a.kt)("td",null,(0,a.kt)("em",null,"\xfe\xednir")),(0,a.kt)("td",{rowspan:"2"},(0,a.kt)("em",null,"\xfe\xednar")),(0,a.kt)("td",{rowspan:"2"},(0,a.kt)("em",null,"\xfe\xedn"))),(0,a.kt)("tr",null,(0,a.kt)("th",null,"Acc."),(0,a.kt)("td",null,(0,a.kt)("em",null,"\xfe\xedna")),(0,a.kt)("td",null,(0,a.kt)("em",null,"\xfe\xedna"))),(0,a.kt)("tr",null,(0,a.kt)("th",null,"Dat."),(0,a.kt)("td",null,(0,a.kt)("em",null,"\xfe\xednum")),(0,a.kt)("td",null,(0,a.kt)("em",null,"\xfeinni")),(0,a.kt)("td",null,(0,a.kt)("em",null,"\xfe\xednu")),(0,a.kt)("td",{colspan:"3",align:"center"},(0,a.kt)("em",null,"\xfe\xednum"))),(0,a.kt)("tr",null,(0,a.kt)("th",null,"Gen."),(0,a.kt)("td",null,(0,a.kt)("em",null,"\xfe\xedns")),(0,a.kt)("td",null,(0,a.kt)("em",null,"\xfeinnar")),(0,a.kt)("td",null,(0,a.kt)("em",null,"\xfe\xedns")),(0,a.kt)("td",{colspan:"3",align:"center"},(0,a.kt)("em",null,"\xfeinna")))))),(0,a.kt)(s.Z,{value:"sinn",mdxType:"TabItem"},(0,a.kt)("table",{class:"full-width"},(0,a.kt)("thead",null,(0,a.kt)("tr",null,(0,a.kt)("th",{rowspan:"2"}),(0,a.kt)("th",{colspan:"3"},"Singular"),(0,a.kt)("th",{colspan:"3"},"Plural")),(0,a.kt)("tr",null,(0,a.kt)("th",null,"Masculine"),(0,a.kt)("th",null,"Feminine"),(0,a.kt)("th",null,"Neuter"),(0,a.kt)("th",null,"Masculine"),(0,a.kt)("th",null,"Feminine"),(0,a.kt)("th",null,"Neuter"))),(0,a.kt)("tbody",null,(0,a.kt)("tr",null,(0,a.kt)("th",null,"Nom."),(0,a.kt)("td",{rowspan:"2"},(0,a.kt)("em",null,"sinn")),(0,a.kt)("td",null,(0,a.kt)("em",null,"s\xedn")),(0,a.kt)("td",{rowspan:"2"},(0,a.kt)("em",null,"sitt")),(0,a.kt)("td",null,(0,a.kt)("em",null,"s\xednir")),(0,a.kt)("td",{rowspan:"2"},(0,a.kt)("em",null,"s\xednar")),(0,a.kt)("td",{rowspan:"2"},(0,a.kt)("em",null,"s\xedn"))),(0,a.kt)("tr",null,(0,a.kt)("th",null,"Acc."),(0,a.kt)("td",null,(0,a.kt)("em",null,"s\xedna")),(0,a.kt)("td",null,(0,a.kt)("em",null,"s\xedna"))),(0,a.kt)("tr",null,(0,a.kt)("th",null,"Dat."),(0,a.kt)("td",null,(0,a.kt)("em",null,"s\xednum")),(0,a.kt)("td",null,(0,a.kt)("em",null,"sinni")),(0,a.kt)("td",null,(0,a.kt)("em",null,"s\xednu")),(0,a.kt)("td",{colspan:"3",align:"center"},(0,a.kt)("em",null,"s\xednum"))),(0,a.kt)("tr",null,(0,a.kt)("th",null,"Gen."),(0,a.kt)("td",null,(0,a.kt)("em",null,"s\xedns")),(0,a.kt)("td",null,(0,a.kt)("em",null,"sinnar")),(0,a.kt)("td",null,(0,a.kt)("em",null,"s\xedns")),(0,a.kt)("td",{colspan:"3",align:"center"},(0,a.kt)("em",null,"sinna"))))))),(0,a.kt)("h3",{id:"sinn"},(0,a.kt)("em",{parentName:"h3"},"sinn")),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"Sinn")," is a possessive pronoun used in the third person. It can be translated as ",(0,a.kt)("em",{parentName:"p"},"his"),", ",(0,a.kt)("em",{parentName:"p"},"her"),", ",(0,a.kt)("em",{parentName:"p"},"its")," or ",(0,a.kt)("em",{parentName:"p"},"their")," depending on the context:"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("em",{parentName:"p"},"Bj\xf6rn m\xe1lar h\xfasi\xf0 ",(0,a.kt)("strong",{parentName:"em"},"sitt"),".",(0,a.kt)("br",null),"Anna lagar peysuna ",(0,a.kt)("strong",{parentName:"em"},"s\xedna"),".",(0,a.kt)("br",null),"Barni\xf0 bor\xf0ar matinn ",(0,a.kt)("strong",{parentName:"em"},"sinn"),".",(0,a.kt)("br",null),"\xdeeir taka t\xf6skurnar ",(0,a.kt)("strong",{parentName:"em"},"s\xednar"),".",(0,a.kt)("br",null),"\xde\xe6r \xfer\xedfa diskana ",(0,a.kt)("strong",{parentName:"em"},"s\xedna"),"."))),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"Sinn")," is reflexive, meaning it always refers back to the subject of the sentence:"),(0,a.kt)("p",null,"Because ",(0,a.kt)("em",{parentName:"p"},"sinn")," always refers back to a possessor in the subject of the sentence, ",(0,a.kt)("em",{parentName:"p"},"sinn")," can never form part of a subject itself:"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"(Bj\xf6rn) ",(0,a.kt)("em",{parentName:"p"},"*H\xfasi\xf0 ",(0,a.kt)("strong",{parentName:"em"},"sitt")," er rautt."),(0,a.kt)("br",null),"(Anna) ",(0,a.kt)("em",{parentName:"p"},"*Peysan ",(0,a.kt)("strong",{parentName:"em"},"s\xedn")," er slitin."))),(0,a.kt)("p",null,"Here the non-reflexive pronouns must be used instead:"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"(Bj\xf6rn) ",(0,a.kt)("em",{parentName:"p"},"H\xfasi\xf0 ",(0,a.kt)("strong",{parentName:"em"},"hans")," er rautt."),(0,a.kt)("br",null),"(Anna) ",(0,a.kt)("em",{parentName:"p"},"Peysan ",(0,a.kt)("strong",{parentName:"em"},"hennar")," er slitin."))),(0,a.kt)("p",null,"Contrast the meanings of the following pairs of sentences:"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("em",{parentName:"p"},"Magn\xfas drekkur kaffi\xf0 ",(0,a.kt)("strong",{parentName:"em"},"sitt"),".",(0,a.kt)("br",null),"Magn\xfas drekkur kaffi\xf0 ",(0,a.kt)("strong",{parentName:"em"},"hans"),"."))),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("em",{parentName:"p"},"Krakkarnir bor\xf0a samlokurnar ",(0,a.kt)("strong",{parentName:"em"},"s\xednar"),".",(0,a.kt)("br",null),"Krakkarnir bor\xf0a samlokurnar ",(0,a.kt)("strong",{parentName:"em"},"\xfeeirra"),"."))),(0,a.kt)("h2",{id:"other-possessives"},"Other possessives"),(0,a.kt)("p",null,"The following possessive pronouns do not decline (their form is always the same regardless of the gender, number and case of the noun they modify):"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("em",{parentName:"strong"},"okkar"))," \u201cour\u201d"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("em",{parentName:"strong"},"ykkar"))," \u201cyour\u201d (plural)"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("em",{parentName:"strong"},"hans"))," \u201chis\u201d, ",(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("em",{parentName:"strong"},"hennar"))," \u201cher\u201d, ",(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("em",{parentName:"strong"},"h\xe1ns"))," \u201ctheir\u201d (non-binary), ",(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("em",{parentName:"strong"},"\xfeess"))," \u201cits\u201d, ",(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("em",{parentName:"strong"},"manns"))," \u201cone\u2019s\u201d, ",(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("em",{parentName:"strong"},"\xfeeirra"))," \u201ctheir\u201d (all genders)")),(0,a.kt)("p",null,"Where they are gendered, they agree with the natural gender of the owner and not the grammatical gender of the noun. For example:"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("em",{parentName:"p"},"Ertu b\xfain a\xf0\xa0sj\xe1 n\xfdja eldh\xfasi\xf0 ",(0,a.kt)("strong",{parentName:"em"},"okkar"),"?",(0,a.kt)("br",null),"\xc9g elska s\xf3fana ",(0,a.kt)("strong",{parentName:"em"},"ykkar"),"!",(0,a.kt)("br",null),"B\xf3kin ",(0,a.kt)("strong",{parentName:"em"},"hans")," er mj\xf6g skemmtileg.",(0,a.kt)("br",null),"Kakan ",(0,a.kt)("strong",{parentName:"em"},"hennar")," er svo lj\xfaf!",(0,a.kt)("br",null),"Sk\xf3rinn ",(0,a.kt)("strong",{parentName:"em"},"h\xe1ns")," er rennblautur.",(0,a.kt)("br",null),"Bangsinn ",(0,a.kt)("strong",{parentName:"em"},"\xfeess")," er t\xfdndur.",(0,a.kt)("br",null),"H\xfasin ",(0,a.kt)("strong",{parentName:"em"},"\xfeeirra")," eru til s\xf6lu."))),(0,a.kt)("h3",{id:"obsolete-possessives"},"Obsolete possessives"),(0,a.kt)("p",null,"The obsolete personal pronouns ",(0,a.kt)("em",{parentName:"p"},"v\xe9r")," and ",(0,a.kt)("em",{parentName:"p"},"\xfe\xe9r")," (",(0,a.kt)("a",{parentName:"p",href:"personal/#obsolete-pronouns"},"see here")," for usage) also had corresponding possessives. "),(0,a.kt)("h4",{id:"vor"},(0,a.kt)("em",{parentName:"h4"},"vor")),(0,a.kt)("p",null,"The first, ",(0,a.kt)("em",{parentName:"p"},"vor")," \u201cour\u201d, is fully declined like an adjective:"),(0,a.kt)("table",{class:"full-width"},(0,a.kt)("thead",null,(0,a.kt)("tr",null,(0,a.kt)("th",{rowspan:"2"}),(0,a.kt)("th",{colspan:"3"},"Singular"),(0,a.kt)("th",{colspan:"3"},"Plural")),(0,a.kt)("tr",null,(0,a.kt)("th",null,"Masculine"),(0,a.kt)("th",null,"Feminine"),(0,a.kt)("th",null,"Neuter"),(0,a.kt)("th",null,"Masculine"),(0,a.kt)("th",null,"Feminine"),(0,a.kt)("th",null,"Neuter"))),(0,a.kt)("tbody",null,(0,a.kt)("tr",null,(0,a.kt)("th",null,"Nom."),(0,a.kt)("td",null,(0,a.kt)("em",null,"vor")),(0,a.kt)("td",null,(0,a.kt)("em",null,"vor")),(0,a.kt)("td",{rowspan:"2"},(0,a.kt)("em",null,"vort")),(0,a.kt)("td",null,(0,a.kt)("em",null,"vorir")),(0,a.kt)("td",{rowspan:"2"},(0,a.kt)("em",null,"vorar")),(0,a.kt)("td",{rowspan:"2"},(0,a.kt)("em",null,"vor"))),(0,a.kt)("tr",null,(0,a.kt)("th",null,"Acc."),(0,a.kt)("td",null,(0,a.kt)("em",null,"vorn")),(0,a.kt)("td",null,(0,a.kt)("em",null,"vora")),(0,a.kt)("td",null,(0,a.kt)("em",null,"vora"))),(0,a.kt)("tr",null,(0,a.kt)("th",null,"Dat."),(0,a.kt)("td",null,(0,a.kt)("em",null,"vorum")),(0,a.kt)("td",null,(0,a.kt)("em",null,"vorri")),(0,a.kt)("td",null,(0,a.kt)("em",null,"voru")),(0,a.kt)("td",{colspan:"3",align:"center"},(0,a.kt)("em",null,"vorum"))),(0,a.kt)("tr",null,(0,a.kt)("th",null,"Gen."),(0,a.kt)("td",null,(0,a.kt)("em",null,"vors")),(0,a.kt)("td",null,(0,a.kt)("em",null,"vorrar")),(0,a.kt)("td",null,(0,a.kt)("em",null,"vors")),(0,a.kt)("td",{colspan:"3",align:"center"},(0,a.kt)("em",null,"vorra"))))),(0,a.kt)("h4",{id:"y\xf0ar"},(0,a.kt)("em",{parentName:"h4"},"y\xf0ar")),(0,a.kt)("p",null,"The second, ",(0,a.kt)("em",{parentName:"p"},"y\xf0ar")," \u201cyour\u201d (formal), is indeclinable and is used like ",(0,a.kt)("em",{parentName:"p"},"ykkar"),"."))}f.isMDXComponent=!0}}]);