(self.webpackChunkgramref=self.webpackChunkgramref||[]).push([[398],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return k},kt:function(){return c}});var l=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,l)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,l,r=function(e,t){if(null==e)return{};var n,l,r={},a=Object.keys(e);for(l=0;l<a.length;l++)n=a[l],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(l=0;l<a.length;l++)n=a[l],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=l.createContext({}),s=function(e){var t=l.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):u(u({},t),e)),n},k=function(e){var t=s(e.components);return l.createElement(o.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},p=l.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,o=e.parentName,k=i(e,["components","mdxType","originalType","parentName"]),p=s(n),c=r,d=p["".concat(o,".").concat(c)]||p[c]||m[c]||a;return n?l.createElement(d,u(u({ref:t},k),{},{components:n})):l.createElement(d,u({ref:t},k))}));function c(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,u=new Array(a);u[0]=p;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i.mdxType="string"==typeof e?e:r,u[1]=i;for(var s=2;s<a;s++)u[s]=n[s];return l.createElement.apply(null,u)}return l.createElement.apply(null,n)}p.displayName="MDXCreateElement"},8215:function(e,t,n){"use strict";n.d(t,{Z:function(){return r}});var l=n(7294);function r(e){var t=e.children,n=e.hidden,r=e.className;return l.createElement("div",{role:"tabpanel",hidden:n,className:r},t)}},9877:function(e,t,n){"use strict";n.d(t,{Z:function(){return k}});var l=n(7462),r=n(7294),a=n(2389),u=n(3725),i=n(6010),o="tabItem_LplD";function s(e){var t,n,a,s=e.lazy,k=e.block,m=e.defaultValue,p=e.values,c=e.groupId,d=e.className,h=r.Children.map(e.children,(function(e){if((0,r.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),f=null!=p?p:h.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),v=(0,u.lx)(f,(function(e,t){return e.value===t.value}));if(v.length>0)throw new Error('Docusaurus error: Duplicate values "'+v.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var g=null===m?m:null!=(t=null!=m?m:null==(n=h.find((function(e){return e.props.default})))?void 0:n.props.value)?t:null==(a=h[0])?void 0:a.props.value;if(null!==g&&!f.some((function(e){return e.value===g})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+g+'" but none of its children has the corresponding value. Available values are: '+f.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var b=(0,u.UB)(),N=b.tabGroupChoices,y=b.setTabGroupChoices,w=(0,r.useState)(g),T=w[0],j=w[1],q=[],I=(0,u.o5)().blockElementScrollPositionUntilNextRender;if(null!=c){var E=N[c];null!=E&&E!==T&&f.some((function(e){return e.value===E}))&&j(E)}var x=function(e){var t=e.currentTarget,n=q.indexOf(t),l=f[n].value;l!==T&&(I(t),j(l),null!=c&&y(c,l))},O=function(e){var t,n=null;switch(e.key){case"ArrowRight":var l=q.indexOf(e.currentTarget)+1;n=q[l]||q[0];break;case"ArrowLeft":var r=q.indexOf(e.currentTarget)-1;n=q[r]||q[q.length-1]}null==(t=n)||t.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":k},d)},f.map((function(e){var t=e.value,n=e.label,a=e.attributes;return r.createElement("li",(0,l.Z)({role:"tab",tabIndex:T===t?0:-1,"aria-selected":T===t,key:t,ref:function(e){return q.push(e)},onKeyDown:O,onFocus:x,onClick:x},a,{className:(0,i.Z)("tabs__item",o,null==a?void 0:a.className,{"tabs__item--active":T===t})}),null!=n?n:t)}))),s?(0,r.cloneElement)(h.filter((function(e){return e.props.value===T}))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},h.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==T})}))))}function k(e){var t=(0,a.Z)();return r.createElement(s,(0,l.Z)({key:String(t)},e))}},1333:function(e,t,n){"use strict";n.d(t,{R:function(){return i}});var l=n(4578),r=n(7294),a=n(4052),u=n.n(a),i=function(e){function t(t){var n;return(n=e.call(this,t)||this).state={termWidth:""},n}(0,l.Z)(t,e);var n=t.prototype;return n.componentDidMount=function(){var e=document.getElementById("term-"+this.props.term).clientWidth,t=document.getElementById("tooltip-"+this.props.term).clientWidth;this.setState({termWidth:e,tooltipWidth:t})},n.offset=function(){var e=0-this.state.tooltipWidth/2+this.state.termWidth/2+"px";return e},n.displayTerm=function(){return this.props.display?this.props.display:this.props.term},n.getIcelandicTerm=function(){var e=this;return u().terms.filter((function(t){return t.term.includes(e.props.term.toLowerCase())}))[0].icelandic},n.render=function(){return r.createElement(r.Fragment,null,r.createElement("span",{className:"term",id:"term-"+this.props.term},this.displayTerm(),r.createElement("span",{id:"tooltip-"+this.props.term,className:"tooltip",style:{left:this.offset()}},"\ud83c\uddee\ud83c\uddf8 ",this.getIcelandicTerm())))},t}(r.Component)},4052:function(e){e.exports={terms:[,{term:"verb",icelandic:"s\xf6gn"},{term:"pronoun",icelandic:"fornafn"},{term:"mood",icelandic:"h\xe1ttur"},{term:"accusative",icelandic:"\xfeolfall"},{term:"active voice",icelandic:"germynd"},{term:"adjective",icelandic:"l\xfdsingaror\xf0"},{term:"case",icelandic:"fall"},{term:"comparative",icelandic:"mi\xf0stig"},{term:"dative",icelandic:"\xfe\xe1gufall"},{term:"definite article",icelandic:"\xe1kve\xf0inn greinir"},{term:"demonstrative pronoun",icelandic:"\xe1bendingarfornafn"},{term:"ending",icelandic:"ending"},{term:"feminine",icelandic:"kvenkyn"},{term:"first person",icelandic:"fyrsta pers\xf3na"},{term:"gender",icelandic:"kyn"},{term:"genitive",icelandic:"eignarfall"},{term:"indefinite pronoun",icelandic:"\xf3\xe1kve\xf0i\xf0 fornafn"},{term:"indicative",icelandic:"frams\xf6guh\xe1ttur"},{term:"imperative",icelandic:"bo\xf0h\xe1ttur"},{term:"infinitive",icelandic:"nafnh\xe1ttur"},{term:"masculine",icelandic:"karlkyn"},{term:"middle voice",icelandic:"mi\xf0mynd"},{term:"neuter",icelandic:"hvorugkyn"},{term:"nominative",icelandic:"nefnifall"},{term:"passive voice",icelandic:"\xfeolmynd"},{term:"past participle",icelandic:"l\xfdsingarh\xe1ttur \xfe\xe1t\xed\xf0ar"},{term:"past tense",icelandic:"\xfe\xe1t\xed\xf0"},{term:"personal pronoun",icelandic:"pers\xf3nufornafn"},{term:"plural",icelandic:"fleirtala"},{term:"positive",icelandic:"frumstig"},{term:"preposition",icelandic:"forsetning"},{term:"principal parts",icelandic:"kennimyndir"},{term:"reflexive pronoun",icelandic:"afturbeygt fornafn"},{term:"possessive pronoun",icelandic:"eignarfornafn"},{term:"present participle",icelandic:"l\xfdsingarh\xe1ttur n\xfat\xed\xf0ar"},{term:"present tense",icelandic:"n\xfat\xed\xf0"},{term:"second person",icelandic:"\xf6nnur pers\xf3na"},{term:"singular",icelandic:"eintala"},{term:"stem",icelandic:"stofn"},{term:"strong",icelandic:"sterk beyging"},{term:"strong verb",icelandic:"sterk s\xf6gn"},{term:"subjunctive",icelandic:"vi\xf0tengingarh\xe1ttur"},{term:"superlative",icelandic:"efsta stig"},{term:"supine",icelandic:"sagnb\xf3t"},{term:"third person",icelandic:"\xferi\xf0ja pers\xf3na"},{term:"transitive",icelandic:"\xe1hrifss\xf6gn"},{term:"weak",icelandic:"veik beyging"},{term:"weak verb",icelandic:"veik s\xf6gn"}]}},1035:function(e,t,n){"use strict";n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return m},default:function(){return f},frontMatter:function(){return k},metadata:function(){return p},toc:function(){return d}});var l=n(7462),r=n(3366),a=(n(7294),n(3905)),u=n(9877),i=n(8215),o=n(1333),s=["components"],k={id:"personal",title:"Personal pronouns",sidebar_label:"Personal",description:"An overview of the Icelandic personal pronoun system. Explanation of first, second and third person in singular and plural, with declension."},m=void 0,p={unversionedId:"pronouns/personal",id:"pronouns/personal",title:"Personal pronouns",description:"An overview of the Icelandic personal pronoun system. Explanation of first, second and third person in singular and plural, with declension.",source:"@site/docs/pronouns/personal.md",sourceDirName:"pronouns",slug:"/pronouns/personal",permalink:"/docs/pronouns/personal",tags:[],version:"current",frontMatter:{id:"personal",title:"Personal pronouns",sidebar_label:"Personal",description:"An overview of the Icelandic personal pronoun system. Explanation of first, second and third person in singular and plural, with declension."},sidebar:"someSidebar",previous:{title:"Introduction to pronouns",permalink:"/docs/pronouns/pronoun-intro"},next:{title:"Possessive",permalink:"/docs/pronouns/possessive"}},c={},d=[{value:"First person",id:"first-person",level:2},{value:"Singular",id:"first-person-singular",level:3},{value:"Plural",id:"first-person-plural",level:3},{value:"Second person",id:"second-person",level:2},{value:"Singular",id:"second-person-singular",level:3},{value:"Plural",id:"second-person-plural",level:3},{value:"Third person",id:"third-person",level:2},{value:"Singular",id:"third-person-singular",level:3},{value:"<em>hann</em> and <em>h\xfan</em>",id:"hann-and-h\xfan",level:4},{value:"<em>h\xe1n</em>",id:"h\xe1n",level:4},{value:"<em>\xfea\xf0</em>",id:"\xfea\xf0",level:3},{value:"<em>ma\xf0ur</em>",id:"ma\xf0ur",level:3},{value:"Plural",id:"third-person-plural",level:3},{value:"Obsolete pronouns",id:"obsolete-pronouns",level:2},{value:"Agreement",id:"agreement",level:3}],h={toc:d};function f(e){var t=e.components,n=(0,r.Z)(e,s);return(0,a.kt)("wrapper",(0,l.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"A ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)(o.R,{term:"personal pronoun",mdxType:"Term"}))," is used in Icelandic to refer to one or more people or as a substitute for a noun:"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("em",{parentName:"p"},"Bollinn er ekki fullur, ",(0,a.kt)("strong",{parentName:"em"},"hann")," er t\xf3mur.",(0,a.kt)("br",null),(0,a.kt)("strong",{parentName:"em"},"H\xfan")," er mj\xf6g g\xe1fu\xf0 kona.",(0,a.kt)("br",null),(0,a.kt)("strong",{parentName:"em"},"\xdea\xf0")," er svo gaman a\xf0 fara \xfat \xe1 l\xedfi\xf0!"))),(0,a.kt)("p",null,"Icelandic has the following personal pronouns, all of which decline for case. "),(0,a.kt)("p",null,"On the ",(0,a.kt)("strong",{parentName:"p"},"Overview")," tab, click on each pronoun to find out more about it. If you\u2019re \ud83e\udd18hardcore and want to see all the case forms of all personal pronouns, click the ",(0,a.kt)("strong",{parentName:"p"},"Full declension")," tab."),(0,a.kt)(u.Z,{defaultValue:"overview",values:[{label:"\ud83d\udc40 Overview",value:"overview"},{label:"\ud83e\udd2f Full declension",value:"declension"}],mdxType:"Tabs"},(0,a.kt)(i.Z,{value:"overview",mdxType:"TabItem"},(0,a.kt)("figure",null,(0,a.kt)("table",null,(0,a.kt)("thead",null,(0,a.kt)("tr",null,(0,a.kt)("th",null),(0,a.kt)("th",{width:"35%"},"Singular"),(0,a.kt)("th",{width:"35%"},"Plural"))),(0,a.kt)("tbody",null,(0,a.kt)("tr",null,(0,a.kt)("th",null,"1st person"),(0,a.kt)("td",null,(0,a.kt)("em",null,(0,a.kt)("a",{href:"#first-person-singular"},"\xe9g"))),(0,a.kt)("td",null,(0,a.kt)("em",null,(0,a.kt)("a",{href:"#first-person-plural"},"vi\xf0")))),(0,a.kt)("tr",null,(0,a.kt)("th",null,"2nd person"),(0,a.kt)("td",null,(0,a.kt)("em",null,(0,a.kt)("a",{href:"#second-person-singular"},"\xfe\xfa"))),(0,a.kt)("td",null,(0,a.kt)("em",null,(0,a.kt)("a",{href:"#second-person-plural"},"\xfei\xf0")))),(0,a.kt)("tr",null,(0,a.kt)("th",null,"3rd person"),(0,a.kt)("td",null,(0,a.kt)("em",null,(0,a.kt)("a",{href:"#third-person-singular"},"hann"),(0,a.kt)("br",null),(0,a.kt)("a",{href:"#third-person-singular"},"h\xfan"),(0,a.kt)("br",null),(0,a.kt)("a",{href:"#h\xe1n"},"h\xe1n"),(0,a.kt)("br",null),(0,a.kt)("a",{href:"#\xfea\xf0"},"\xfea\xf0"),(0,a.kt)("br",null),(0,a.kt)("a",{href:"#ma\xf0ur"},"ma\xf0ur"))),(0,a.kt)("td",null,(0,a.kt)("em",null,(0,a.kt)("a",{href:"#third-person-plural"},"\xfeeir",(0,a.kt)("br",null),"\xfe\xe6r",(0,a.kt)("br",null),"\xfeau")))))))),(0,a.kt)(i.Z,{value:"declension",mdxType:"TabItem"},(0,a.kt)("figure",null,(0,a.kt)("table",{class:"full-width"},(0,a.kt)("thead",null,(0,a.kt)("tr",null,(0,a.kt)("th",{rowspan:"2"}),(0,a.kt)("th",{colspan:"7"},"Singular"),(0,a.kt)("th",{colspan:"5"},"Plural")),(0,a.kt)("tr",null,(0,a.kt)("th",null,"1st"),(0,a.kt)("th",null,"2nd"),(0,a.kt)("th",{colspan:"5"},"3rd"),(0,a.kt)("th",null,"1st"),(0,a.kt)("th",null,"2nd"),(0,a.kt)("th",{colspan:"3"},"3rd"))),(0,a.kt)("tbody",null,(0,a.kt)("tr",null,(0,a.kt)("th",null,"Nom."),(0,a.kt)("td",null,(0,a.kt)("em",null,"\xe9g")),(0,a.kt)("td",null,(0,a.kt)("em",null,"\xfe\xfa")),(0,a.kt)("td",{rowspan:"2"},(0,a.kt)("em",null,"hann")),(0,a.kt)("td",null,(0,a.kt)("em",null,"h\xfan")),(0,a.kt)("td",{rowspan:"2"},(0,a.kt)("em",null,"h\xe1n")),(0,a.kt)("td",{rowspan:"2"},(0,a.kt)("em",null,"\xfea\xf0")),(0,a.kt)("td",null,(0,a.kt)("em",null,"ma\xf0ur")),(0,a.kt)("td",null,(0,a.kt)("em",null,"vi\xf0")),(0,a.kt)("td",null,(0,a.kt)("em",null,"\xfei\xf0")),(0,a.kt)("td",null,(0,a.kt)("em",null,"\xfeeir")),(0,a.kt)("td",{rowspan:"2"},(0,a.kt)("em",null,"\xfe\xe6r")),(0,a.kt)("td",{rowspan:"2"},(0,a.kt)("em",null,"\xfeau"))),(0,a.kt)("tr",null,(0,a.kt)("th",null,"Acc."),(0,a.kt)("td",null,(0,a.kt)("em",null,"mig")),(0,a.kt)("td",null,(0,a.kt)("em",null,"\xfeig")),(0,a.kt)("td",null,(0,a.kt)("em",null,"hana")),(0,a.kt)("td",null,(0,a.kt)("em",null,"mann")),(0,a.kt)("td",{rowspan:"3"},(0,a.kt)("em",null,"okkur")),(0,a.kt)("td",{rowspan:"3"},(0,a.kt)("em",null,"ykkur")),(0,a.kt)("td",null,(0,a.kt)("em",null,"\xfe\xe1"))),(0,a.kt)("tr",null,(0,a.kt)("th",null,"Dat."),(0,a.kt)("td",null,(0,a.kt)("em",null,"m\xe9r")),(0,a.kt)("td",null,(0,a.kt)("em",null,"\xfe\xe9r")),(0,a.kt)("td",null,(0,a.kt)("em",null,"honum")),(0,a.kt)("td",null,(0,a.kt)("em",null,"henni")),(0,a.kt)("td",null,(0,a.kt)("em",null,"h\xe1ni")),(0,a.kt)("td",null,(0,a.kt)("em",null,"\xfev\xed")),(0,a.kt)("td",null,(0,a.kt)("em",null,"manni")),(0,a.kt)("td",{colspan:"3",align:"center"},(0,a.kt)("em",null,"\xfeeim"))),(0,a.kt)("tr",null,(0,a.kt)("th",null,"Gen."),(0,a.kt)("td",null,(0,a.kt)("em",null,"m\xedn")),(0,a.kt)("td",null,(0,a.kt)("em",null,"\xfe\xedn")),(0,a.kt)("td",null,(0,a.kt)("em",null,"hans")),(0,a.kt)("td",null,(0,a.kt)("em",null,"hennar")),(0,a.kt)("td",null,(0,a.kt)("em",null,"h\xe1ns")),(0,a.kt)("td",null,(0,a.kt)("em",null,"\xfeess")),(0,a.kt)("td",null,(0,a.kt)("em",null,"manns")),(0,a.kt)("td",{colspan:"3",align:"center"},(0,a.kt)("em",null,"\xfeeirra")))))))),(0,a.kt)("h2",{id:"first-person"},"First person"),(0,a.kt)("h3",{id:"first-person-singular"},"Singular"),(0,a.kt)("p",null,"The first-person singular pronoun is ",(0,a.kt)("em",{parentName:"p"},"\xe9g")," \u201cI\u201d. It declines as follows:"),(0,a.kt)("figure",null,(0,a.kt)("table",{className:"auto-width"},(0,a.kt)("tbody",null,(0,a.kt)("tr",null,(0,a.kt)("th",null,"Nominative"),(0,a.kt)("td",null,(0,a.kt)("em",null,"\xe9g"))),(0,a.kt)("tr",null,(0,a.kt)("th",null,"Accusative"),(0,a.kt)("td",null,(0,a.kt)("em",null,"mig"))),(0,a.kt)("tr",null,(0,a.kt)("th",null,"Dative"),(0,a.kt)("td",null,(0,a.kt)("em",null,"m\xe9r"))),(0,a.kt)("tr",null,(0,a.kt)("th",null,"Genitive"),(0,a.kt)("td",null,(0,a.kt)("em",null,"m\xedn")))))),(0,a.kt)("h3",{id:"first-person-plural"},"Plural"),(0,a.kt)("p",null,"The first-person plural pronoun is ",(0,a.kt)("em",{parentName:"p"},"vi\xf0")," \u201cwe\u201d. It declines as follows:"),(0,a.kt)("figure",null,(0,a.kt)("table",{class:"auto-width"},(0,a.kt)("tbody",null,(0,a.kt)("tr",null,(0,a.kt)("th",null,"Nominative"),(0,a.kt)("td",null,(0,a.kt)("em",null,"vi\xf0"))),(0,a.kt)("tr",null,(0,a.kt)("th",null,"Accusative"),(0,a.kt)("td",null,(0,a.kt)("em",null,"okkur"))),(0,a.kt)("tr",null,(0,a.kt)("th",null,"Dative"),(0,a.kt)("td",null,(0,a.kt)("em",null,"okkur"))),(0,a.kt)("tr",null,(0,a.kt)("th",null,"Genitive"),(0,a.kt)("td",null,(0,a.kt)("em",null,"okkar")))))),(0,a.kt)("p",null,"Like other plural personal pronouns, ",(0,a.kt)("em",{parentName:"p"},"vi\xf0")," can be used inclusively to talk about the subject and other people:"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("em",{parentName:"p"},(0,a.kt)("strong",{parentName:"em"},"Vi\xf0 Katr\xedn")," \xe6tlum a\xf0 m\xe1la h\xfasi\xf0 saman."))),(0,a.kt)("p",null,"This means the same thing as ",(0,a.kt)("em",{parentName:"p"},"\xe9g og Katr\xedn"),"."),(0,a.kt)("h2",{id:"second-person"},"Second person"),(0,a.kt)("h3",{id:"second-person-singular"},"Singular"),(0,a.kt)("p",null,"The second-person singular pronoun is ",(0,a.kt)("em",{parentName:"p"},"\xfe\xfa")," \u201cyou\u201d (one person only). It declines as follows:"),(0,a.kt)("figure",null,(0,a.kt)("table",{className:"auto-width"},(0,a.kt)("tbody",null,(0,a.kt)("tr",null,(0,a.kt)("th",null,"Nominative"),(0,a.kt)("td",null,(0,a.kt)("em",null,"\xfe\xfa"))),(0,a.kt)("tr",null,(0,a.kt)("th",null,"Accusative"),(0,a.kt)("td",null,(0,a.kt)("em",null,"\xfeig"))),(0,a.kt)("tr",null,(0,a.kt)("th",null,"Dative"),(0,a.kt)("td",null,(0,a.kt)("em",null,"\xfe\xe9r"))),(0,a.kt)("tr",null,(0,a.kt)("th",null,"Genitive"),(0,a.kt)("td",null,(0,a.kt)("em",null,"\xfe\xedn")))))),(0,a.kt)("h3",{id:"second-person-plural"},"Plural"),(0,a.kt)("p",null,"The second-person plural pronoun is ",(0,a.kt)("em",{parentName:"p"},"\xfei\xf0")," \u201cyou, yous, you lot, you guys\u201d. It declines as follows:"),(0,a.kt)("figure",null,(0,a.kt)("table",{class:"auto-width"},(0,a.kt)("tbody",null,(0,a.kt)("tr",null,(0,a.kt)("th",null,"Nominative"),(0,a.kt)("td",null,(0,a.kt)("em",null,"\xfei\xf0"))),(0,a.kt)("tr",null,(0,a.kt)("th",null,"Accusative"),(0,a.kt)("td",null,(0,a.kt)("em",null,"ykkur"))),(0,a.kt)("tr",null,(0,a.kt)("th",null,"Dative"),(0,a.kt)("td",null,(0,a.kt)("em",null,"ykkur"))),(0,a.kt)("tr",null,(0,a.kt)("th",null,"Genitive"),(0,a.kt)("td",null,(0,a.kt)("em",null,"ykkar")))))),(0,a.kt)("p",null,"Like other plural personal pronouns, ",(0,a.kt)("em",{parentName:"p"},"\xfei\xf0")," can be used inclusively to talk about the subject and other people:"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("em",{parentName:"p"},"\xc6tli\xf0 ",(0,a.kt)("strong",{parentName:"em"},"\xfei\xf0 J\xf3n")," a\xf0 kaupa n\xfdjan b\xedl?"))),(0,a.kt)("p",null,"This means the same thing as ",(0,a.kt)("em",{parentName:"p"},"\xfe\xfa og J\xf3n"),"."),(0,a.kt)("h2",{id:"third-person"},"Third person"),(0,a.kt)("h3",{id:"third-person-singular"},"Singular"),(0,a.kt)("p",null,"Icelandic has three third-person pronouns that can act as substitutes for nouns. They decline as follows:"),(0,a.kt)("figure",null,(0,a.kt)("table",{className:"auto-width"},(0,a.kt)("thead",null,(0,a.kt)("tr",null,(0,a.kt)("th",null),(0,a.kt)("th",null,"Masculine"),(0,a.kt)("th",null,"Feminine"),(0,a.kt)("th",null,"Neuter"))),(0,a.kt)("tbody",null,(0,a.kt)("tr",null,(0,a.kt)("th",null,"Nominative"),(0,a.kt)("td",null,(0,a.kt)("em",null,"hann")),(0,a.kt)("td",null,(0,a.kt)("em",null,"h\xfan")),(0,a.kt)("td",null,(0,a.kt)("em",null,"\xfea\xf0"))),(0,a.kt)("tr",null,(0,a.kt)("th",null,"Accusative"),(0,a.kt)("td",null,(0,a.kt)("em",null,"hann")),(0,a.kt)("td",null,(0,a.kt)("em",null,"hana")),(0,a.kt)("td",null,(0,a.kt)("em",null,"\xfea\xf0"))),(0,a.kt)("tr",null,(0,a.kt)("th",null,"Dative"),(0,a.kt)("td",null,(0,a.kt)("em",null,"honum")),(0,a.kt)("td",null,(0,a.kt)("em",null,"henni")),(0,a.kt)("td",null,(0,a.kt)("em",null,"\xfev\xed"))),(0,a.kt)("tr",null,(0,a.kt)("th",null,"Genitive"),(0,a.kt)("td",null,(0,a.kt)("em",null,"hans")),(0,a.kt)("td",null,(0,a.kt)("em",null,"hennar")),(0,a.kt)("td",null,(0,a.kt)("em",null,"\xfeess")))))),(0,a.kt)("p",null,"See how they refer back to various nouns in the examples below, where English would just use \u201cit\u201d:"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("em",{parentName:"p"},"B\xedllinn er gl\xe6n\xfdr. Viltu ekki kaupa ",(0,a.kt)("strong",{parentName:"em"},"hann"),"?",(0,a.kt)("br",null),"Bj\xf6rn baka\xf0i s\xfakkula\xf0ik\xf6ku \xed g\xe6rkv\xf6ldi \u2013 ",(0,a.kt)("strong",{parentName:"em"},"h\xfan")," var svo girnileg!",(0,a.kt)("br",null),"Lj\xf3si\xf0 er svo fallegt. ",(0,a.kt)("strong",{parentName:"em"},"\xdea\xf0")," lj\xf3mar \xed sv\xf6rtu myrkrinu. ")," ")),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"\xdea\xf0")," has some additional uses as a filler or \u201cdummy\u201d pronoun. See the ",(0,a.kt)("a",{parentName:"p",href:"#%C3%BEa%C3%B0"},"section below")," for an explanation."),(0,a.kt)("h4",{id:"hann-and-h\xfan"},(0,a.kt)("em",{parentName:"h4"},"hann")," and ",(0,a.kt)("em",{parentName:"h4"},"h\xfan")),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"Hann")," \u201che\u201d and ",(0,a.kt)("em",{parentName:"p"},"h\xfan")," \u201cshe\u201d can also be used to refer to humans and animals by their natural (i.e. non-grammatical) gender:"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("em",{parentName:"p"},"Sn\xe6fr\xed\xf0ur situr og starir \xfat \xed lofti\xf0. ",(0,a.kt)("strong",{parentName:"em"},"Henni")," lei\xf0ist.",(0,a.kt)("br",null),"Lo\xf0bert er k\xe1t kisa. ",(0,a.kt)("strong",{parentName:"em"},"Hann")," er alltaf a\xf0 mala."))),(0,a.kt)("p",null,"In the case of animals, the animal\u2019s biological sex takes precedence over the grammatical gender of the name for the species, as in the example about \ud83d\udc31Lo\xf0bert above."),(0,a.kt)("h4",{id:"h\xe1n"},(0,a.kt)("em",{parentName:"h4"},"h\xe1n")),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"H\xe1n")," is a pronoun used by some non-binary people in Icelandic. It can\u2019t act as a substitute for nouns like ",(0,a.kt)("em",{parentName:"p"},"hann"),", ",(0,a.kt)("em",{parentName:"p"},"h\xfan")," or ",(0,a.kt)("em",{parentName:"p"},"\xfea\xf0"),". It declines as follows:"),(0,a.kt)("figure",null,(0,a.kt)("table",{class:"auto-width"},(0,a.kt)("tbody",null,(0,a.kt)("tr",null,(0,a.kt)("th",null,"Nominative"),(0,a.kt)("td",null,(0,a.kt)("em",null,"h\xe1n"))),(0,a.kt)("tr",null,(0,a.kt)("th",null,"Accusative"),(0,a.kt)("td",null,(0,a.kt)("em",null,"h\xe1n"))),(0,a.kt)("tr",null,(0,a.kt)("th",null,"Dative"),(0,a.kt)("td",null,(0,a.kt)("em",null,"h\xe1ni"))),(0,a.kt)("tr",null,(0,a.kt)("th",null,"Genitive"),(0,a.kt)("td",null,(0,a.kt)("em",null,"h\xe1ns")))))),(0,a.kt)("p",null,"Some examples:"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("em",{parentName:"p"},"Reyn var a\xf0 senda m\xe9r SMS \u2013  ",(0,a.kt)("strong",{parentName:"em"},"h\xe1n")," er \xe1 lei\xf0inni.",(0,a.kt)("br",null),(0,a.kt)("strong",{parentName:"em"},"H\xe1ni")," finnst ofsa gaman a\xf0\xa0prj\xf3na."))),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"H\xe1n")," is often used with the neuter form the adjective:"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("em",{parentName:"p"},"H\xe1n er svo ",(0,a.kt)("strong",{parentName:"em"},"skemmtilegt"),"!"))),(0,a.kt)("p",null,"As in other languages, if you\u2019re not sure which combination of pronoun and adjective gender to use, ask the person which they prefer."),(0,a.kt)("p",null,"Unlike \u201cthey\u201d in English, ",(0,a.kt)("em",{parentName:"p"},"h\xe1n")," can\u2019t be used as a generic pronoun to talk about a person of unknown gender in sentences like \u201cWhoever is elected, they\u2019d better sort out this mess.\u201d"),(0,a.kt)("h3",{id:"\xfea\xf0"},(0,a.kt)("em",{parentName:"h3"},"\xfea\xf0")),(0,a.kt)("p",null,"In addition to its use as a substitute for singular neuter nouns, ",(0,a.kt)("em",{parentName:"p"},"\xfea\xf0")," also has a special role as a generic filler or \u201cdummy pronoun\u201d. What this means is that ",(0,a.kt)("em",{parentName:"p"},"\xfea\xf0")," is just filling a gap in the sentence and doesn\u2019t refer to anything in particular:"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("em",{parentName:"p"},(0,a.kt)("strong",{parentName:"em"},"\xdea\xf0")," er pirrandi hva\xf0 hann m\xe6tir alltaf seint.",(0,a.kt)("br",null),(0,a.kt)("strong",{parentName:"em"},"\xdea\xf0")," skiptir ekki m\xe1li hvort vi\xf0 l\xf6bbum e\xf0a keyrum."))),(0,a.kt)("p",null,"It\u2019s also used in \u201cthere is/are\u201d sentences, where it is always singular:"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("em",{parentName:"p"},(0,a.kt)("strong",{parentName:"em"},"\xdea\xf0")," er einhver hundur a\xf0 gelta endalaust \xed gar\xf0inum.",(0,a.kt)("br",null),(0,a.kt)("strong",{parentName:"em"},"\xdea\xf0")," eru bara tv\xe6r bj\xf3rd\xf3sir eftir \xed k\xe6linum."))),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"\xdea\xf0")," is also used in ",(0,a.kt)("a",{parentName:"p",href:"../verbs/passive-voice"},"passive constructions"),":"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("em",{parentName:"p"},(0,a.kt)("strong",{parentName:"em"},"\xdea\xf0")," var dansa\xf0 alla n\xf3ttina.",(0,a.kt)("br",null),(0,a.kt)("strong",{parentName:"em"},"\xdea\xf0")," er veri\xf0 a\xf0 byggja n\xfdtt \xedb\xfa\xf0ah\xfas \xfati \xe1 Granda."))),(0,a.kt)("p",null,"It can also appear after a verb or preposition before a dependent clause:"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("em",{parentName:"p"},"\xc9g \xf3ska ",(0,a.kt)("strong",{parentName:"em"},"\xfeess")," a\xf0 \xfea\xf0 h\xe6tti a\xf0 rigna.",(0,a.kt)("br",null),"Enginn meiddist \xed slysinu. \xc1st\xe6\xf0an fyrir ",(0,a.kt)("strong",{parentName:"em"},"\xfev\xed")," er a\xf0 b\xedlstj\xf3rinn bremsa\xf0i t\xedmanlega."))),(0,a.kt)("p",null,"The reason ",(0,a.kt)("em",{parentName:"p"},"\xfea\xf0")," is used after a verb or preposition in sentences like the above is that the verb or preposition requires some kind of \u201ctarget\u201d (\ud83e\udd13 technically an object for a verb, or a complement for a preposition) for the case it governs. "),(0,a.kt)("p",null,"For example, ",(0,a.kt)("em",{parentName:"p"},"\xf3ska")," governs the genitive case, but because ",(0,a.kt)("em",{parentName:"p"},"a\xf0")," is a conjunction and doesn\u2019t decline for case, ",(0,a.kt)("em",{parentName:"p"},"\xfeess")," (genitive of ",(0,a.kt)("em",{parentName:"p"},"\xfea\xf0"),") is inserted right after the verb to \u201creceive\u201d the genitive case governed by ",(0,a.kt)("em",{parentName:"p"},"\xf3ska"),"."),(0,a.kt)("p",null,"Finally, ",(0,a.kt)("em",{parentName:"p"},"\xfea\xf0")," is also used to make a verb or clause starting with ",(0,a.kt)("em",{parentName:"p"},"a\xf0")," into a noun (gerund):"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("em",{parentName:"p"},(0,a.kt)("strong",{parentName:"em"},"\xdea\xf0 a\xf0")," geta ekki tj\xe1\xf0 sig hefur sl\xe6m \xe1hrif \xe1 ge\xf0heilsuna.",(0,a.kt)("br",null),"Bara ",(0,a.kt)("strong",{parentName:"em"},"\xfea\xf0 a\xf0")," h\xfan m\xe6tti \xed kv\xf6ld er st\xf3rkostlegt."))),(0,a.kt)("h3",{id:"ma\xf0ur"},(0,a.kt)("em",{parentName:"h3"},"ma\xf0ur")),(0,a.kt)("p",null,"The pronoun ",(0,a.kt)("em",{parentName:"p"},"ma\xf0ur")," \u201cone\u201d is used to talk about a generic person. It\u2019s not as formal as its English equivalent and is therefore more commonly used:"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("em",{parentName:"p"},(0,a.kt)("strong",{parentName:"em"},"Ma\xf0ur")," m\xe1 ekki leggja b\xedlnum s\xednum h\xe9rna.",(0,a.kt)("br",null),"\xdea\xf0 er d\xf3nalegt a\xf0 senda ",(0,a.kt)("strong",{parentName:"em"},"manni")," \xf3umbe\xf0na typpamyndir! \ud83c\udf46"))),(0,a.kt)("p",null,"It declines like the noun ",(0,a.kt)("em",{parentName:"p"},"ma\xf0ur")," \u201cperson\u201d from which it is derived:"),(0,a.kt)("figure",null,(0,a.kt)("table",{class:"auto-width"},(0,a.kt)("tbody",null,(0,a.kt)("tr",null,(0,a.kt)("th",null,"Nominative"),(0,a.kt)("td",null,(0,a.kt)("em",null,"ma\xf0ur"))),(0,a.kt)("tr",null,(0,a.kt)("th",null,"Accusative"),(0,a.kt)("td",null,(0,a.kt)("em",null,"mann"))),(0,a.kt)("tr",null,(0,a.kt)("th",null,"Dative"),(0,a.kt)("td",null,(0,a.kt)("em",null,"manni"))),(0,a.kt)("tr",null,(0,a.kt)("th",null,"Genitive"),(0,a.kt)("td",null,(0,a.kt)("em",null,"manns")))))),(0,a.kt)("h3",{id:"third-person-plural"},"Plural"),(0,a.kt)("p",null,"Icelandic has three third-person plural pronouns. They decline as follows:"),(0,a.kt)("figure",null,(0,a.kt)("table",{className:"auto-width"},(0,a.kt)("thead",null,(0,a.kt)("tr",null,(0,a.kt)("th",null),(0,a.kt)("th",null,"Masculine"),(0,a.kt)("th",null,"Feminine"),(0,a.kt)("th",null,"Neuter"))),(0,a.kt)("tbody",null,(0,a.kt)("tr",null,(0,a.kt)("th",null,"Nominative"),(0,a.kt)("td",null,(0,a.kt)("em",null,"\xfeeir")),(0,a.kt)("td",null,(0,a.kt)("em",null,"\xfe\xe6r")),(0,a.kt)("td",null,(0,a.kt)("em",null,"\xfeau"))),(0,a.kt)("tr",null,(0,a.kt)("th",null,"Accusative"),(0,a.kt)("td",null,(0,a.kt)("em",null,"\xfe\xe1")),(0,a.kt)("td",null,(0,a.kt)("em",null,"\xfe\xe6r")),(0,a.kt)("td",null,(0,a.kt)("em",null,"\xfeau"))),(0,a.kt)("tr",null,(0,a.kt)("th",null,"Dative"),(0,a.kt)("td",null,(0,a.kt)("em",null,"\xfeeim")),(0,a.kt)("td",null,(0,a.kt)("em",null,"\xfeeim")),(0,a.kt)("td",null,(0,a.kt)("em",null,"\xfeeim"))),(0,a.kt)("tr",null,(0,a.kt)("th",null,"Genitive"),(0,a.kt)("td",null,(0,a.kt)("em",null,"\xfeeirra")),(0,a.kt)("td",null,(0,a.kt)("em",null,"\xfeeirra")),(0,a.kt)("td",null,(0,a.kt)("em",null,"\xfeeirra")))))),(0,a.kt)("p",null,"All three can be used about groups of people or as replacements for nouns:"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("em",{parentName:"p"},"\xdej\xf3farnir st\xe1lu demantinum og n\xfa sitja ",(0,a.kt)("strong",{parentName:"em"},"\xfeeir")," \xed fangelsi.",(0,a.kt)("br",null),"Viltu halda \xfeessum pokum e\xf0a \xe1 \xe9g a\xf0\xa0henda ",(0,a.kt)("strong",{parentName:"em"},"\xfeeim"),"?",(0,a.kt)("br",null),"Allar \xfeessar peysur eru svo fallegar \u2013 \xe9g get varla vali\xf0 \xe1 milli ",(0,a.kt)("strong",{parentName:"em"},"\xfeeirra"),"."))),(0,a.kt)("p",null,"When used about groups of people:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("em",{parentName:"li"},"\xfeeir")," is used about a group of \ud83d\udeb9 males or about a \ud83d\udebb mixed group;"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("em",{parentName:"li"},"\xfe\xe6r")," is used about a group of \ud83d\udeba females; and"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("em",{parentName:"li"},"\xfeau")," is used about a \ud83d\udebb mixed group or as the plural of ",(0,a.kt)("em",{parentName:"li"},"h\xe1n"),".")),(0,a.kt)("p",null,"The use of ",(0,a.kt)("em",{parentName:"p"},"\xfeeir")," to refer to a mixed group is considered increasingly out-of-date, although it still remains relatively common, particularly in contexts where it refers back to a masculine noun:"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("em",{parentName:"p"},"Nemendurnir eru svo latir. ",(0,a.kt)("strong",{parentName:"em"},"\xdeeir")," skila aldrei heimaverkefnum."))),(0,a.kt)("p",null,"This usage is generally accepted as it makes clear that ",(0,a.kt)("em",{parentName:"p"},"\xfeeir")," is referring to the masculine plural noun and not some other group."),(0,a.kt)("h2",{id:"obsolete-pronouns"},"Obsolete pronouns"),(0,a.kt)("p",null,"Now and again, you might come across two pronouns that have generally fallen into disuse in modern Icelandic. The first is ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("em",{parentName:"strong"},"v\xe9r")),", an old-fashioned synonym of ",(0,a.kt)("em",{parentName:"p"},"vi\xf0")," which is now considered highly formal. The other is ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("em",{parentName:"strong"},"\xfe\xe9r"))," (not to be confused with the dative case of ",(0,a.kt)("em",{parentName:"p"},(0,a.kt)("a",{parentName:"em",href:"#singular-1"},"\xfe\xfa")),"), which was the formal second-person pronoun (akin to German ",(0,a.kt)("em",{parentName:"p"},"Sie")," or French ",(0,a.kt)("em",{parentName:"p"},"vous"),"). "),(0,a.kt)("p",null,"Both of these pronouns are still occasionally used to give an old-fashioned or quaintly formal tone. They decline as follows:"),(0,a.kt)("figure",null,(0,a.kt)("table",{className:"auto-width"},(0,a.kt)("tbody",null,(0,a.kt)("tr",null,(0,a.kt)("th",null,"Nominative"),(0,a.kt)("td",null,(0,a.kt)("em",null,"v\xe9r")),(0,a.kt)("td",null,(0,a.kt)("em",null,"\xfe\xe9r"))),(0,a.kt)("tr",null,(0,a.kt)("th",null,"Accusative"),(0,a.kt)("td",null,(0,a.kt)("em",null,"oss")),(0,a.kt)("td",null,(0,a.kt)("em",null,"y\xf0ur"))),(0,a.kt)("tr",null,(0,a.kt)("th",null,"Dative"),(0,a.kt)("td",null,(0,a.kt)("em",null,"oss")),(0,a.kt)("td",null,(0,a.kt)("em",null,"y\xf0ur"))),(0,a.kt)("tr",null,(0,a.kt)("th",null,"Genitive"),(0,a.kt)("td",null,(0,a.kt)("em",null,"vor")),(0,a.kt)("td",null,(0,a.kt)("em",null,"y\xf0ar")))))),(0,a.kt)("h3",{id:"agreement"},"Agreement"),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"V\xe9r")," uses the first-person plural verb form, just like ",(0,a.kt)("em",{parentName:"p"},"vi\xf0"),". ",(0,a.kt)("em",{parentName:"p"},"\xde\xe9r")," uses the second-person plural verb form, like ",(0,a.kt)("em",{parentName:"p"},"\xfei\xf0"),":"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("em",{parentName:"p"},(0,a.kt)("strong",{parentName:"em"},"V\xe9r m\xf3tm\xe6lum")," allir!",(0,a.kt)("br",null),(0,a.kt)("strong",{parentName:"em"},"\xde\xe9r ver\xf0i\xf0")," a\xf0 koma seinna."))),(0,a.kt)("p",null,"With ",(0,a.kt)("em",{parentName:"p"},"\xfe\xe9r"),", either the singular or plural form of the adjective is used when addressing a single person:"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("em",{parentName:"p"},"\xde\xe9r eru\xf0 ",(0,a.kt)("strong",{parentName:"em"},"d\xf3nalegur"),"!",(0,a.kt)("br",null),"\xde\xe9r eru\xf0 ",(0,a.kt)("strong",{parentName:"em"},"d\xf3nalegir"),"!"))))}f.isMDXComponent=!0}}]);