(this.webpackJsonpsearch_autocomplete=this.webpackJsonpsearch_autocomplete||[]).push([[0],{10:function(n,a,e){n.exports=e(15)},15:function(n,a,e){"use strict";e.r(a);var t=e(0),i=e.n(t),r=e(9),o=e.n(r),u=e(2),s=e(3),l=e(5),c=e(4),g=e(6),d=e(1),m="\nAfghanistan\nAlbania\nAlgeria\nAndorra\nAngola\nAntigua & Deps\nArgentina\nArmenia\nAustralia\nAustria\nAzerbaijan\nBahamas\nBahrain\nBangladesh\nBarbados\nBelarus\nBelgium\nBelize\nBenin\nBhutan\nBolivia\nBosnia Herzegovina\nBotswana\nBrazil\nBrunei\nBulgaria\nBurkina\nBurundi\nCambodia\nCameroon\nCanada\nCape Verde\nCentral African Rep\nChad\nChile\nChina\nColombia\nComoros\nCongo\nCongo {Democratic Rep}\nCosta Rica\nCroatia\nCuba\nCyprus\nCzech Republic\nDenmark\nDjibouti\nDominica\nDominican Republic\nEast Timor\nEcuador\nEgypt\nEl Salvador\nEquatorial Guinea\nEritrea\nEstonia\nEthiopia\nFiji\nFinland\nFrance\nGabon\nGambia\nGeorgia\nGermany\nGhana\nGreece\nGrenada\nGuatemala\nGuinea\nGuinea-Bissau\nGuyana\nHaiti\nHonduras\nHungary\nIceland\nIndia\nIndonesia\nIran\nIraq\nIreland {Republic}\nIsrael\nItaly\nIvory Coast\nJamaica\nJapan\nJordan\nKazakhstan\nKenya\nKiribati\nKorea North\nKorea South\nKosovo\nKuwait\nKyrgyzstan\nLaos\nLatvia\nLebanon\nLesotho\nLiberia\nLibya\nLiechtenstein\nLithuania\nLuxembourg\nMacedonia\nMadagascar\nMalawi\nMalaysia\nMaldives\nMali\nMalta\nMarshall Islands\nMauritania\nMauritius\nMexico\nMicronesia\nMoldova\nMonaco\nMongolia\nMontenegro\nMorocco\nMozambique\nMyanmar, {Burma}\nNamibia\nNauru\nNepal\nNetherlands\nNew Zealand\nNicaragua\nNiger\nNigeria\nNorway\nOman\nPakistan\nPalau\nPanama\nPapua New Guinea\nParaguay\nPeru\nPhilippines\nPoland\nPortugal\nQatar\nRomania\nRussian Federation\nRwanda\nSt Kitts & Nevis\nSt Lucia\nSaint Vincent & the Grenadines\nSamoa\nSan Marino\nSao Tome & Principe\nSaudi Arabia\nSenegal\nSerbia\nSeychelles\nSierra Leone\nSingapore\nSlovakia\nSlovenia\nSolomon Islands\nSomalia\nSouth Africa\nSouth Sudan\nSpain\nSri Lanka\nSudan\nSuriname\nSwaziland\nSweden\nSwitzerland\nSyria\nTaiwan\nTajikistan\nTanzania\nThailand\nTogo\nTonga\nTrinidad & Tobago\nTunisia\nTurkey\nTurkmenistan\nTuvalu\nUganda\nUkraine\nUnited Arab Emirates\nUnited Kingdom\nUnited States\nUruguay\nUzbekistan\nVanuatu\nVatican City\nVenezuela\nVietnam\nYemen\nZambia\nZimbabwe".split("\n"),h=(e(8),function(n){function a(n){var e;return Object(u.a)(this,a),(e=Object(l.a)(this,Object(c.a)(a).call(this,n))).getSuggestionsArray=function(n){var a=[];if(n.length>0){var e=new RegExp("^".concat(n),"i");a=m.sort().filter((function(n){return e.test(n)}))}return a},e.onTextChange=function(n){var a=n.target.value,t=e.getSuggestionsArray(a);e.setState((function(){return{suggestions:t,text:a}}))},e.onBlur=function(n){n.currentTarget.contains(n.relatedTarget)||e.setState((function(){return{suggestions:[]}}))},e.onFocus=function(n){var a=n.target.value,t=e.getSuggestionsArray(a);e.setState((function(){return{suggestions:t,text:a}}))},e.renderSuggestions=function(){var n=e.state.suggestions;return 0===n.length?null:i.a.createElement("div",{className:"suggestionsBox"},i.a.createElement("ul",null,n.map((function(n,a){return i.a.createElement("li",{key:a,onClick:function(){return e.selectedText(n)}},n,i.a.createElement("span",null),i.a.createElement("span",null),i.a.createElement("span",null),i.a.createElement("span",null))}))))},e.state={suggestions:[],text:""},e.onTextChange=e.onTextChange.bind(Object(d.a)(e)),e.onBlur=e.onBlur.bind(Object(d.a)(e)),e.onFocus=e.onFocus.bind(Object(d.a)(e)),e.selectedText=e.selectedText.bind(Object(d.a)(e)),e}return Object(g.a)(a,n),Object(s.a)(a,[{key:"selectedText",value:function(n){this.setState((function(){return{text:n,suggestions:[]}}))}},{key:"render",value:function(){var n=this.state.text;return i.a.createElement("div",{id:"searchbox-wrapper"},i.a.createElement("div",{id:"searchbox"},i.a.createElement("h2",null,"Which country would you like to visit?"),i.a.createElement("div",{className:"input-wrapper"},i.a.createElement("input",{id:"query",type:"text",onFocus:this.onFocus,onBlur:this.onBlur,onChange:this.onTextChange,value:n,placeholder:"Start writing a country...",autoComplete:"off"}),i.a.createElement("span",{className:"focus-border"},i.a.createElement("i",null))),this.renderSuggestions()))}}]),a}(i.a.Component)),b=function(n){function a(){return Object(u.a)(this,a),Object(l.a)(this,Object(c.a)(a).apply(this,arguments))}return Object(g.a)(a,n),Object(s.a)(a,[{key:"render",value:function(){return i.a.createElement("div",{className:"app"},i.a.createElement(h,null))}}]),a}(t.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(i.a.createElement(b,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(n){n.unregister()}))},8:function(n,a,e){}},[[10,1,2]]]);
//# sourceMappingURL=main.22547a56.chunk.js.map