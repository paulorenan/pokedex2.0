(this["webpackJsonppokedex2.0"]=this["webpackJsonppokedex2.0"]||[]).push([[0],{27:function(e,t,c){},29:function(e,t,c){},31:function(e,t,c){},37:function(e,t,c){},38:function(e,t,c){},39:function(e,t,c){},40:function(e,t,c){},41:function(e,t,c){},42:function(e,t,c){"use strict";c.r(t);var n=c(1),s=c.n(n),a=c(20),r=c.n(a),i=(c(27),c(10)),j=c(4),o=c(18),l=c(2),u=c.n(l),b=c(5),d=c(3),p=function(){var e=Object(b.a)(u.a.mark((function e(t){var c,n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(t);case 2:return c=e.sent,e.next=5,c.json();case 5:return n=e.sent,e.abrupt("return",n);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),m=function(){var e=Object(b.a)(u.a.mark((function e(){var t,c;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://pokeapi.co/api/v2/pokemon?limit=898");case 2:return t=e.sent,e.next=5,t.json();case 5:return c=e.sent,e.abrupt("return",c.results.map((function(e){return e.name})));case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),O=function(){var e=Object(b.a)(u.a.mark((function e(t){var c,n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://pokeapi.co/api/v2/pokemon/".concat(t));case 2:return c=e.sent,e.next=5,c.json();case 5:return n=e.sent,e.abrupt("return",n);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),h=c.p+"static/media/pokebola.544d44c8.gif",x=(c(29),c(0));var f=function(){return Object(x.jsx)("div",{className:"loadImg",children:Object(x.jsx)("img",{src:h,alt:"loading"})})};c(31);var v=function(e){var t=Object(n.useState)({}),c=Object(d.a)(t,2),s=c[0],a=c[1],r=Object(n.useState)(!0),j=Object(d.a)(r,2),o=j[0],l=j[1],m=e.poke;function O(e){return e.map((function(e){return e.charAt(0).toUpperCase()+e.slice(1)})).join(" ")}return Object(n.useEffect)((function(){function e(){return(e=Object(b.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p(m.url);case 2:t=e.sent,a(t),l(!1);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}l(!0),function(){e.apply(this,arguments)}()}),[m]),Object(x.jsx)("div",{children:o?Object(x.jsx)(f,{}):Object(x.jsxs)(i.b,{to:"/pokemon/".concat(s.id),className:"cardContainer",children:[Object(x.jsx)("div",{className:"imageCard",children:Object(x.jsx)("img",{src:s.sprites.front_default,alt:"pokemon"})}),Object(x.jsxs)("div",{className:"infoCard",children:[Object(x.jsx)("p",{children:O(s.name.split("-"))}),Object(x.jsx)("p",{children:"n\xba ".concat(s.id)})]}),Object(x.jsx)("div",{className:"typeCard",children:s.types.map((function(e){return Object(x.jsx)("div",{className:"".concat(e.type.name," tipo"),children:Object(x.jsx)("p",{children:O(e.type.name.split("-"))})},e.type.name)}))})]})})};c(37);var N=function(){return Object(x.jsxs)("header",{id:"header",children:[Object(x.jsx)("h1",{id:"title",children:"Pokedex 2.0"}),Object(x.jsx)("p",{id:"subtitle",children:"Criado por: Paulo Renan Almeida"}),Object(x.jsx)("div",{id:"ball"})]})};c(38);var k=function(e){var t=Object(n.useState)([]),c=Object(d.a)(t,2),s=c[0],a=c[1],r=Object(n.useState)([]),j=Object(d.a)(r,2),l=j[0],O=j[1],h=Object(n.useState)(""),k=Object(d.a)(h,2),y=k[0],g=k[1],w=Object(n.useState)(!0),S=Object(d.a)(w,2),C=S[0],_=S[1],P=Object(n.useState)(""),A=Object(d.a)(P,2),F=A[0],D=A[1];Object(n.useEffect)((function(){function e(){return(e=Object(b.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m();case 2:t=e.sent,a(t);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]),Object(n.useEffect)((function(){function e(){return(e=Object(b.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return _(!0),e.next=3,p("https://pokeapi.co/api/v2/pokemon?limit=50&offset=0");case 3:t=e.sent,O(t.results),g(t.next),_(!1);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]);var B=function(){var e=Object(b.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p(y);case 2:t=e.sent,O([].concat(Object(o.a)(l),Object(o.a)(t.results))),g(t.next);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),E=function(){var t=Object(b.a)(u.a.mark((function t(c){return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:c.preventDefault(),e.history.push("/pokemon/".concat(F));case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();return Object(x.jsxs)("div",{className:"home",children:[Object(x.jsx)(N,{}),Object(x.jsxs)("form",{className:"pokeBusca",onSubmit:E,children:[Object(x.jsx)("input",{type:"text",placeholder:"Digite o nome do pokemon",list:"pokeName",onChange:function(e){return D(e.target.value)}}),Object(x.jsx)(i.b,{to:"/pokemon/".concat(F),children:Object(x.jsx)("button",{className:"searchButton",disabled:""===F,children:"Pesquisar"})}),Object(x.jsx)("datalist",{id:"pokeName",children:s.map((function(e){return Object(x.jsx)("option",{value:e},e)}))})]}),Object(x.jsx)("div",{className:"pokeCard",children:C?Object(x.jsx)(f,{}):l.map((function(e){return Object(x.jsx)(v,{poke:e},e.name)}))}),Object(x.jsx)("div",{className:"proxButton",children:Object(x.jsx)("button",{onClick:B,children:"Carregar mais"})})]})};var y=function(e){var t,c,s=e.ability.ability,a=Object(n.useState)({}),r=Object(d.a)(a,2),i=r[0],j=r[1],o=Object(n.useState)(!0),l=Object(d.a)(o,2),m=l[0],O=l[1];return Object(n.useEffect)((function(){function e(){return(e=Object(b.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p(s.url);case 2:t=e.sent,j(t),O(!1);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}O(!0),function(){e.apply(this,arguments)}()}),[s.url]),Object(x.jsx)("div",{children:m?Object(x.jsx)("img",{src:h,alt:"loading"}):Object(x.jsxs)("details",{children:[Object(x.jsx)("summary",{children:(c=s.name.split("-"),c.map((function(e){return e.charAt(0).toUpperCase()+e.slice(1)})).join(" "))}),Object(x.jsx)("p",{children:(t=i,t.effect_entries.filter((function(e){return"en"===e.language.name}))[0].short_effect)})]})})};var g=function(e){var t=e.moves,c=Object(n.useState)({}),s=Object(d.a)(c,2),a=s[0],r=s[1],i=Object(n.useState)(!0),j=Object(d.a)(i,2),o=j[0],l=j[1],m=Object(n.useState)(!1),O=Object(d.a)(m,2),f=O[0],v=O[1];function N(e){return e.map((function(e){return e.charAt(0).toUpperCase()+e.slice(1)})).join(" ")}return Object(n.useEffect)((function(){function e(){return(e=Object(b.a)(u.a.mark((function e(){var c;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p(t.move.url);case 2:c=e.sent,r(c),l(!1);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}l(!0),function(){e.apply(this,arguments)}()}),[t.move.url]),Object(x.jsx)("div",{children:o?Object(x.jsx)("img",{src:h,alt:"loading"}):Object(x.jsxs)("details",{className:"cont4",children:[Object(x.jsx)("summary",{onClick:function(){return v(!f)},className:f?"caso1":"caso2",children:N(t.move.name.split("-"))}),Object(x.jsxs)("div",{className:"cont5",children:[Object(x.jsx)("p",{children:a.effect_entries[0].short_effect}),Object(x.jsx)("span",{className:"".concat(a.type.name," tipo"),children:N(a.type.name.split("-"))}),Object(x.jsx)("p",{children:"Tipo: ".concat(N(a.damage_class.name.split("-")))}),Object(x.jsx)("p",{children:"Power: ".concat(null===a.power?"--":a.power)}),Object(x.jsx)("p",{children:"Accuracy: ".concat(null===a.accuracy?"--":a.accuracy)})]})]})})};c(39);var w=function(e){var t=Object(n.useState)({}),c=Object(d.a)(t,2),s=c[0],a=c[1],r=Object(n.useState)(!0),j=Object(d.a)(r,2),o=j[0],l=j[1],p=Object(n.useState)([]),h=Object(d.a)(p,2),v=h[0],k=h[1],w=Object(n.useState)(""),S=Object(d.a)(w,2),C=S[0],_=S[1],P=Object(n.useState)(!0),A=Object(d.a)(P,2),F=A[0],D=A[1],B=e.match.params.id,E=e.history;function q(e){return e.map((function(e){return e.charAt(0).toUpperCase()+e.slice(1)})).join(" ")}Object(n.useEffect)((function(){function e(){return(e=Object(b.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return l(!0),e.prev=1,e.next=4,O(B);case 4:t=e.sent,a(t),l(!1),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),E.push("/notfound");case 12:case"end":return e.stop()}}),e,null,[[1,9]])})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[B,E]),Object(n.useEffect)((function(){function e(){return(e=Object(b.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m();case 2:t=e.sent,k(t);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]);var I=function(){var t=Object(b.a)(u.a.mark((function t(c){return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:c.preventDefault(),e.history.push("/pokemon/".concat(C)),_("");case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();return Object(x.jsxs)("div",{children:[Object(x.jsx)(N,{}),o?Object(x.jsx)(f,{}):Object(x.jsxs)("div",{children:[Object(x.jsxs)("form",{className:"pokeBusca",onSubmit:I,children:[1!==s.id&&Object(x.jsxs)(i.b,{to:"/pokemon/".concat(s.id-1),children:[" ",Object(x.jsx)("button",{className:"but1",children:Object(x.jsx)("span",{children:"Anterior"})})]}),Object(x.jsx)("input",{type:"text",placeholder:"Digite o nome do pokemon",list:"pokeName",onChange:function(e){return _(e.target.value)}}),Object(x.jsx)("button",{className:"searchButton",type:"submit",disabled:""===C,children:"Pesquisar"}),898!==s.id&&Object(x.jsx)(i.b,{to:"/pokemon/".concat(s.id+1),children:Object(x.jsx)("button",{className:"but2",children:Object(x.jsx)("span",{children:"Pr\xf3ximo"})})}),Object(x.jsx)("datalist",{id:"pokeName",children:v.map((function(e){return Object(x.jsx)("option",{value:e},e)}))})]}),Object(x.jsxs)("div",{className:"pokemon-info",children:[Object(x.jsxs)("div",{className:"pokeName",children:[Object(x.jsx)("h1",{children:"Pokemon n\xba: ".concat(s.id)}),Object(x.jsx)("h2",{children:q(s.name.split("-"))})]}),Object(x.jsx)("div",{children:Object(x.jsx)("img",{src:s.sprites.front_default,alt:s.name,className:"pokImg"})}),Object(x.jsx)("div",{children:s.types.map((function(e){return Object(x.jsx)("span",{className:"".concat(e.type.name," tipo"),children:q(e.type.name.split("-"))},e.type.name)}))}),Object(x.jsxs)("div",{className:"statsAbility",children:[Object(x.jsxs)("div",{className:"ability",children:[Object(x.jsx)("h3",{children:"Habilidades"}),s.abilities.map((function(e){return Object(x.jsx)(y,{ability:e},e.ability.name)}))]}),Object(x.jsxs)("div",{className:"stats",children:[Object(x.jsx)("h3",{children:"Stats"}),Object(x.jsxs)("div",{className:"statsDiv",children:[Object(x.jsxs)("div",{className:"points",children:[Object(x.jsx)("label",{children:"HP"}),Object(x.jsx)("meter",{min:"0",max:"255",value:s.stats[0].base_stat})]}),Object(x.jsxs)("div",{className:"points",children:[Object(x.jsx)("label",{children:"Attack"}),Object(x.jsx)("meter",{min:"0",max:"190",value:s.stats[1].base_stat})]}),Object(x.jsxs)("div",{className:"points",children:[Object(x.jsx)("label",{children:"Defense"}),Object(x.jsx)("meter",{min:"0",max:"230",value:s.stats[2].base_stat})]}),Object(x.jsxs)("div",{className:"points",children:[Object(x.jsx)("label",{children:"Special Attack"}),Object(x.jsx)("meter",{min:"0",max:"194",value:s.stats[3].base_stat})]}),Object(x.jsxs)("div",{className:"points",children:[Object(x.jsx)("label",{children:"Special Defense"}),Object(x.jsx)("meter",{min:"0",max:"230",value:s.stats[4].base_stat})]}),Object(x.jsxs)("div",{className:"points",children:[Object(x.jsx)("label",{children:"Speed"}),Object(x.jsx)("meter",{min:"0",max:"180",value:s.stats[5].base_stat})]})]})]})]}),Object(x.jsxs)("details",{className:"moveCont",children:[Object(x.jsx)("summary",{className:"cont1",onClick:function(){return D(!F)},children:Object(x.jsx)("h3",{children:F?"\u25ba Ataques":"\u25bc Ataques"})}),Object(x.jsx)("div",{className:"cont2",children:s.moves.map((function(e){return Object(x.jsx)(g,{moves:e},e.move.name)}))})]}),Object(x.jsxs)("div",{className:"imgCont",children:[Object(x.jsx)("h3",{children:"Sprites"}),Object(x.jsxs)("div",{className:"img1",children:[Object(x.jsxs)("div",{className:"img2",children:[Object(x.jsx)("div",{className:"nomePok",children:Object(x.jsx)("p",{className:"lado",children:"Frente"})}),Object(x.jsx)("div",{children:Object(x.jsx)("img",{src:s.sprites.front_default,alt:s.name})})]}),Object(x.jsxs)("div",{className:"img2",children:[Object(x.jsx)("div",{className:"nomePok",children:Object(x.jsx)("p",{className:"lado",children:"Costas"})}),Object(x.jsx)("div",{children:Object(x.jsx)("img",{src:s.sprites.back_default,alt:s.name})})]})]}),null!=s.sprites.back_female&&Object(x.jsxs)("div",{className:"img1",children:[Object(x.jsxs)("div",{className:"img2",children:[Object(x.jsx)("div",{className:"nomePok",children:Object(x.jsx)("p",{className:"lado",children:"Frente (F\xeamea)"})}),Object(x.jsx)("div",{children:Object(x.jsx)("img",{src:s.sprites.front_female,alt:s.name})})]}),Object(x.jsxs)("div",{className:"img2",children:[Object(x.jsx)("div",{className:"nomePok",children:Object(x.jsx)("p",{className:"lado",children:"Costas (F\xeamea)"})}),Object(x.jsx)("div",{children:Object(x.jsx)("img",{src:s.sprites.back_female,alt:s.name})})]})]}),Object(x.jsxs)("div",{className:"img1",children:[Object(x.jsxs)("div",{className:"img2",children:[Object(x.jsx)("div",{className:"nomePok",children:Object(x.jsx)("p",{className:"lado",children:"Frente (Shiny)"})}),Object(x.jsx)("div",{children:Object(x.jsx)("img",{src:s.sprites.front_shiny,alt:s.name})})]}),Object(x.jsxs)("div",{className:"img2",children:[Object(x.jsx)("div",{className:"nomePok",children:Object(x.jsx)("p",{className:"lado",children:"Costas (Shiny)"})}),Object(x.jsx)("div",{children:Object(x.jsx)("img",{src:s.sprites.back_shiny,alt:s.name})})]})]}),null!=s.sprites.back_shiny_female&&Object(x.jsxs)("div",{className:"img1",children:[Object(x.jsxs)("div",{className:"img2",children:[Object(x.jsx)("div",{className:"nomePok",children:Object(x.jsx)("p",{className:"lado",children:"Frente (F\xeamea Shiny)"})}),Object(x.jsx)("div",{children:Object(x.jsx)("img",{src:s.sprites.front_shiny_female,alt:s.name})})]}),Object(x.jsxs)("div",{className:"img2",children:[Object(x.jsx)("div",{className:"nomePok",children:Object(x.jsx)("p",{className:"lado",children:"Costas (F\xeamea Shiny)"})}),Object(x.jsx)("div",{children:Object(x.jsx)("img",{src:s.sprites.back_shiny_female,alt:s.name})})]})]})]})]})]}),Object(x.jsx)("div",{className:"buttonCont",children:Object(x.jsx)(i.b,{to:"/",className:"proxButton",children:Object(x.jsx)("button",{children:"Voltar ao inicio"})})})]})},S=c.p+"static/media/pikachu.a8b7afca.jpg";c(40);var C=function(){return Object(x.jsxs)("div",{children:[Object(x.jsx)(N,{}),Object(x.jsxs)("div",{className:"notDiv",children:[Object(x.jsx)("h1",{children:"404"}),Object(x.jsx)("p",{children:"Pagina N\xe3o Encontrada"})]}),Object(x.jsx)("div",{className:"pikaDiv",children:Object(x.jsx)("img",{src:S,alt:"pikachu",className:"pikachu"})}),Object(x.jsx)("div",{className:"buttonCont",children:Object(x.jsx)(i.b,{to:"/",className:"proxButton",children:Object(x.jsx)("button",{children:"Voltar"})})})]})};c(41);var _=function(){return Object(x.jsx)(i.a,{basename:"/pokedex2.0",children:Object(x.jsxs)(j.c,{children:[Object(x.jsx)(j.a,{exact:!0,path:"/",component:k}),Object(x.jsx)(j.a,{path:"/pokemon/:id",component:w}),Object(x.jsx)(j.a,{component:C})]})})},P=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,43)).then((function(t){var c=t.getCLS,n=t.getFID,s=t.getFCP,a=t.getLCP,r=t.getTTFB;c(e),n(e),s(e),a(e),r(e)}))};r.a.render(Object(x.jsx)(s.a.StrictMode,{children:Object(x.jsx)(_,{})}),document.getElementById("root")),P()}},[[42,1,2]]]);
//# sourceMappingURL=main.1f64adf2.chunk.js.map