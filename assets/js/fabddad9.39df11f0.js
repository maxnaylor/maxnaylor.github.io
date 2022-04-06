(self.webpackChunkgramref=self.webpackChunkgramref||[]).push([[3622],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return m},kt:function(){return d}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},m=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),p=c(n),d=i,f=p["".concat(l,".").concat(d)]||p[d]||u[d]||a;return n?r.createElement(f,o(o({ref:t},m),{},{components:n})):r.createElement(f,o({ref:t},m))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var c=2;c<a;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},9797:function(e,t,n){"use strict";n.d(t,{o:function(){return a}});var r=n(4578),i=n(7294),a=function(e){function t(t){var n;return(n=e.call(this,t)||this).state={class:"highlighter"},n}(0,r.Z)(t,e);var n=t.prototype;return n.addHighlight=function(e){var t,n=document.getElementsByName(e);for(t=0;t<n.length;t++)n[t].classList.add("highlighted")},n.removeHighlight=function(e){var t,n=document.getElementsByName(e);for(t=0;t<n.length;t++)n[t].classList.remove("highlighted")},n.render=function(){return i.createElement(i.Fragment,null,i.createElement("span",{onMouseEnter:this.addHighlight.bind(this,this.props.name),onMouseLeave:this.removeHighlight.bind(this,this.props.name),className:this.state.class,name:this.props.name},this.props.text))},t}(i.Component)},1333:function(e,t,n){"use strict";n.d(t,{R:function(){return s}});var r=n(4578),i=n(7294),a=n(4052),o=n.n(a),s=function(e){function t(t){var n;return(n=e.call(this,t)||this).state={termWidth:""},n}(0,r.Z)(t,e);var n=t.prototype;return n.componentDidMount=function(){var e=document.getElementById("term-"+this.props.term).clientWidth,t=document.getElementById("tooltip-"+this.props.term).clientWidth;this.setState({termWidth:e,tooltipWidth:t})},n.offset=function(){var e=0-this.state.tooltipWidth/2+this.state.termWidth/2+"px";return e},n.displayTerm=function(){return this.props.display?this.props.display:this.props.term},n.getIcelandicTerm=function(){var e=this;return o().terms.filter((function(t){return t.term.includes(e.props.term.toLowerCase())}))[0].icelandic},n.render=function(){return i.createElement(i.Fragment,null,i.createElement("span",{className:"term",id:"term-"+this.props.term},this.displayTerm(),i.createElement("span",{id:"tooltip-"+this.props.term,className:"tooltip",style:{left:this.offset()}},"\ud83c\uddee\ud83c\uddf8 ",this.getIcelandicTerm())))},t}(i.Component)},4052:function(e){e.exports={terms:[,{term:"verb",icelandic:"s\xf6gn"},{term:"accusative",icelandic:"\xfeolfall"},{term:"active voice",icelandic:"germynd"},{term:"adjective",icelandic:"l\xfdsingaror\xf0"},{term:"case",icelandic:"fall"},{term:"comparative",icelandic:"mi\xf0stig"},{term:"dative",icelandic:"\xfe\xe1gufall"},{term:"definite article",icelandic:"\xe1kve\xf0inn greinir"},{term:"demonstrative pronoun",icelandic:"\xe1bendingarfornafn"},{term:"ending",icelandic:"ending"},{term:"feminine",icelandic:"kvenkyn"},{term:"first person",icelandic:"fyrsta pers\xf3na"},{term:"gender",icelandic:"kyn"},{term:"genitive",icelandic:"eignarfall"},{term:"indefinite pronoun",icelandic:"\xf3\xe1kve\xf0i\xf0 fornafn"},{term:"indicative",icelandic:"frams\xf6guh\xe1ttur"},{term:"imperative",icelandic:"bo\xf0h\xe1ttur"},{term:"infinitive",icelandic:"nafnh\xe1ttur"},{term:"masculine",icelandic:"karlkyn"},{term:"middle voice",icelandic:"mi\xf0mynd"},{term:"neuter",icelandic:"hvorugkyn"},{term:"nominative",icelandic:"nefnifall"},{term:"passive voice",icelandic:"\xfeolmynd"},{term:"past participle",icelandic:"l\xfdsingarh\xe1ttur \xfe\xe1t\xed\xf0ar"},{term:"past tense",icelandic:"\xfe\xe1t\xed\xf0"},{term:"personal pronoun",icelandic:"pers\xf3nufornafn"},{term:"plural",icelandic:"fleirtala"},{term:"positive",icelandic:"frumstig"},{term:"principal parts",icelandic:"kennimyndir"},{term:"reflexive pronoun",icelandic:"afturbeygt fornafn"},{term:"possessive pronoun",icelandic:"eignarfornafn"},{term:"present participle",icelandic:"l\xfdsingarh\xe1ttur n\xfat\xed\xf0ar"},{term:"present tense",icelandic:"n\xfat\xed\xf0"},{term:"pronoun",icelandic:"fornafn"},{term:"second person",icelandic:"\xf6nnur pers\xf3na"},{term:"singular",icelandic:"eintala"},{term:"stem",icelandic:"stofn"},{term:"strong",icelandic:"sterk beyging"},{term:"strong verb",icelandic:"sterk s\xf6gn"},{term:"subjunctive",icelandic:"vi\xf0tengingarh\xe1ttur"},{term:"superlative",icelandic:"efsta stig"},{term:"supine",icelandic:"sagnb\xf3t"},{term:"third person",icelandic:"\xferi\xf0ja pers\xf3na"},{term:"transitive",icelandic:"\xe1hrifss\xf6gn"},{term:"weak",icelandic:"veik beyging"}]}},7285:function(e,t,n){"use strict";n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return m},default:function(){return h},frontMatter:function(){return c},metadata:function(){return u},toc:function(){return d}});var r=n(7462),i=n(3366),a=(n(7294),n(3905)),o=n(1333),s=n(9797),l=["components"],c={id:"reflexive",title:"Reflexive pronouns",sidebar_label:"Reflexive"},m=void 0,u={unversionedId:"pronouns/reflexive",id:"pronouns/reflexive",title:"Reflexive pronouns",description:"A  is used in Icelandic when the object of the verb is the same as its subject, i.e. when one does something to oneself:",source:"@site/docs/pronouns/reflexive.md",sourceDirName:"pronouns",slug:"/pronouns/reflexive",permalink:"/docs/pronouns/reflexive",tags:[],version:"current",frontMatter:{id:"reflexive",title:"Reflexive pronouns",sidebar_label:"Reflexive"},sidebar:"someSidebar",previous:{title:"Possessive",permalink:"/docs/pronouns/possessive"},next:{title:"Indefinite",permalink:"/docs/pronouns/indefinite"}},p={},d=[{value:"Formation",id:"formation",level:2},{value:"First and second person",id:"first-and-second-person",level:3},{value:"<em>sig</em>",id:"sig",level:3},{value:"Usage",id:"usage",level:2},{value:"Long-distance reflexivity",id:"long-distance-reflexivity",level:3}],f={toc:d};function h(e){var t=e.components,n=(0,i.Z)(e,l);return(0,a.kt)("wrapper",(0,r.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"A ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)(o.R,{term:"reflexive pronoun",mdxType:"Term"}))," is used in Icelandic when the object of the verb is the same as its subject, i.e. when one does something to ",(0,a.kt)("em",{parentName:"p"},"oneself"),":"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("em",{parentName:"p"},"\xc9g meiddi ",(0,a.kt)("strong",{parentName:"em"},"mig")," \xed slysinu.",(0,a.kt)("br",null),"\xde\xfa grei\xf0ir ",(0,a.kt)("strong",{parentName:"em"},"\xfe\xe9r")," \xe1\xf0ur en \xfe\xfa fer\xf0 \xfat.",(0,a.kt)("br",null),"Anna \xfev\xe6r ",(0,a.kt)("strong",{parentName:"em"},"s\xe9r")," me\xf0 s\xe1pu.",(0,a.kt)("br",null),"Krakkarnir skemmta ",(0,a.kt)("strong",{parentName:"em"},"s\xe9r")," \xed lauginni.",(0,a.kt)("br",null),"\xdei\xf0 eigi\xf0 a\xf0 skammast ",(0,a.kt)("strong",{parentName:"em"},"ykkar"),"!"))),(0,a.kt)("p",null,"The reflexive pronoun always refers back to the agent (the subject of the sentence)."),(0,a.kt)("h2",{id:"formation"},"Formation"),(0,a.kt)("h3",{id:"first-and-second-person"},"First and second person"),(0,a.kt)("p",null,"For first- and second-person pronouns, the reflexive form is the same as the regular form of the pronoun. It\u2019s used in whatever case is required by the verb."),(0,a.kt)("h3",{id:"sig"},(0,a.kt)("em",{parentName:"h3"},"sig")),(0,a.kt)("p",null,"In the third person, we have a special pronoun, ",(0,a.kt)("em",{parentName:"p"},"sig"),", which refers back to the subject. The logic of this is similar to the possessive pronoun ",(0,a.kt)("em",{parentName:"p"},(0,a.kt)("a",{parentName:"em",href:"possessive#sinn"},"sinn"))," \u2013 the same pronoun is used for all genders and numbers in the third person. Its declension similar to ",(0,a.kt)("em",{parentName:"p"},"\xe9g")," or ",(0,a.kt)("em",{parentName:"p"},"\xfe\xfa")," and is as follows:"),(0,a.kt)("table",{className:"auto-width"},(0,a.kt)("tbody",null,(0,a.kt)("tr",null,(0,a.kt)("th",null,"Nominative"),(0,a.kt)("td",null,(0,a.kt)("em",null,"\u2014"))),(0,a.kt)("tr",null,(0,a.kt)("th",null,"Accusative"),(0,a.kt)("td",null,(0,a.kt)("em",null,"sig"))),(0,a.kt)("tr",null,(0,a.kt)("th",null,"Dative"),(0,a.kt)("td",null,(0,a.kt)("em",null,"s\xe9r"))),(0,a.kt)("tr",null,(0,a.kt)("th",null,"Genitive"),(0,a.kt)("td",null,(0,a.kt)("em",null,"s\xedn"))))),(0,a.kt)("p",null,"Note that ",(0,a.kt)("em",{parentName:"p"},"sig")," doesn\u2019t have a nominative form because like ",(0,a.kt)("em",{parentName:"p"},"sinn"),", it can never occur in the subject of the sentence."),(0,a.kt)("h2",{id:"usage"},"Usage"),(0,a.kt)("p",null,"Many verbs have a particular meaning when they are used reflexively. When used as such, the possessive pronoun cannot be dropped:"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("em",{parentName:"p"},"\xc9g ",(0,a.kt)("strong",{parentName:"em"},"\xfev\xe6 m\xe9r"),".",(0,a.kt)("br",null),"Hann ",(0,a.kt)("strong",{parentName:"em"},"skammast s\xedn")," fyrir heg\xf0un s\xedna.",(0,a.kt)("br",null),"Vi\xf0 \xfeurfum a\xf0 ",(0,a.kt)("strong",{parentName:"em"},"fl\xfdta okkur"),"."))),(0,a.kt)("p",null,"Unlike in English, ",(0,a.kt)("em",{parentName:"p"},"*\xe9g \xfev\xe6")," is an ungrammatical sentence. The verb ",(0,a.kt)("em",{parentName:"p"},"\xfevo")," is ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)(o.R,{term:"transitive",mdxType:"Term"}))," \u2013 meaning it always requires an object, so we must use a reflexive pronoun in this case and say ",(0,a.kt)("em",{parentName:"p"},"\xe9g \xfev\xe6 ",(0,a.kt)("strong",{parentName:"em"},"m\xe9r")),". \ud83d\udec1"),(0,a.kt)("p",null,"Many reflexive verbs can also be used in a non-reflexive way. For example:"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("em",{parentName:"p"},"\xc9g \xfev\xe6 ",(0,a.kt)("strong",{parentName:"em"},"barninu m\xednu"),".",(0,a.kt)("br",null),"\xde\xfa meiddir ",(0,a.kt)("strong",{parentName:"em"},"mig"),"!"))),(0,a.kt)("p",null,"Others cannot be used in this way, at least not about other ",(0,a.kt)("em",{parentName:"p"},"people"),". For example, ",(0,a.kt)("em",{parentName:"p"},"fl\xfdta s\xe9r")," means \u201cto hurry\u201d. However, you can\u2019t say ",(0,a.kt)("em",{parentName:"p"},"*\xe9g fl\xfdti ",(0,a.kt)("strong",{parentName:"em"},"\xfe\xe9r")),". You can use it non-reflexively about abstract things though, such as a project: ",(0,a.kt)("em",{parentName:"p"},"fyrirt\xe6ki\xf0 fl\xfdtti ",(0,a.kt)("strong",{parentName:"em"},"verkefninu")),". These restrictions are particular to each verb and need to be learnt by heart."),(0,a.kt)("h3",{id:"long-distance-reflexivity"},"Long-distance reflexivity"),(0,a.kt)("p",null,"Many languages have reflexive verbs in some form, but there are normally limits on how far away the verb can be from the subject before the reflexive \u201clink\u201d is broken. In Icelandic, this link persists into subordinate clauses. The words in blue below refer to the same person (try hovering over them):"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("em",{parentName:"p"},(0,a.kt)(s.o,{name:"r1",text:"Sindri",mdxType:"Highlighter"})," ba\xf0 mig um a\xf0 tala vi\xf0 ",(0,a.kt)("strong",{parentName:"em"},(0,a.kt)(s.o,{name:"r1",text:"sig",mdxType:"Highlighter"})),".",(0,a.kt)("br",null),(0,a.kt)(s.o,{name:"r2",text:"\xdeeir",mdxType:"Highlighter"})," spur\xf0u mig hvort \xe9g kanna\xf0ist vi\xf0 ",(0,a.kt)("strong",{parentName:"em"},(0,a.kt)(s.o,{name:"r2",text:"sig",mdxType:"Highlighter"})),".",(0,a.kt)("br",null),(0,a.kt)(s.o,{name:"r3",text:"Lilja",mdxType:"Highlighter"})," sag\xf0i m\xe9r a\xf0 ",(0,a.kt)("strong",{parentName:"em"},(0,a.kt)(s.o,{name:"r3",text:"s\xe9r",mdxType:"Highlighter"}))," fyndist kj\xf3llinn lj\xf3tur."))))}h.isMDXComponent=!0}}]);