(this["webpackJsonppokedex2.0"]=this["webpackJsonppokedex2.0"]||[]).push([[0],{27:function(e,t,c){},29:function(e,t,c){},31:function(e,t,c){},37:function(e,t,c){},38:function(e,t,c){},39:function(e,t,c){},40:function(e,t,c){},41:function(e,t,c){},42:function(e,t,c){},43:function(e,t,c){"use strict";c.r(t);var n=c(1),s=c.n(n),a=c(20),r=c.n(a),i=(c(27),c(7)),o=c(5),j=c(18),l=c(2),u=c.n(l),b=c(4),p=c(3),d=function(){var e=Object(b.a)(u.a.mark((function e(t){var c,n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(t);case 2:return c=e.sent,e.next=5,c.json();case 5:return n=e.sent,e.abrupt("return",n);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),m=function(){var e=Object(b.a)(u.a.mark((function e(){var t,c;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://pokeapi.co/api/v2/pokemon?limit=898");case 2:return t=e.sent,e.next=5,t.json();case 5:return c=e.sent,e.abrupt("return",c.results.map((function(e){return e.name})));case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),O=function(){var e=Object(b.a)(u.a.mark((function e(t){var c,n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://pokeapi.co/api/v2/pokemon/".concat(t));case 2:return c=e.sent,e.next=5,c.json();case 5:return n=e.sent,e.abrupt("return",n);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),h=c.p+"static/media/pokebola.544d44c8.gif",x=(c(29),c(0));var f=function(){return Object(x.jsx)("div",{className:"loadImg",children:Object(x.jsx)("img",{src:h,alt:"loading"})})};c(31);var v=function(e){var t=Object(n.useState)({}),c=Object(p.a)(t,2),s=c[0],a=c[1],r=Object(n.useState)(!0),o=Object(p.a)(r,2),j=o[0],l=o[1],m=e.poke;function O(e){return e.charAt(0).toUpperCase()+e.slice(1)}return Object(n.useEffect)((function(){function e(){return(e=Object(b.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d(m.url);case 2:t=e.sent,a(t),l(!1);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}l(!0),function(){e.apply(this,arguments)}()}),[m]),Object(x.jsx)("div",{children:j?Object(x.jsx)(f,{}):Object(x.jsxs)(i.b,{to:"/pokemon/".concat(s.id),className:"cardContainer",children:[Object(x.jsx)("div",{className:"imageCard",children:Object(x.jsx)("img",{src:null!==s.sprites.other["official-artwork"].front_default?s.sprites.other["official-artwork"].front_default:s.sprites.front_default,alt:"pokemon"})}),Object(x.jsxs)("div",{className:"infoCard",children:[Object(x.jsx)("p",{children:O(s.name)}),Object(x.jsx)("p",{children:"n\xba ".concat(s.id)})]}),Object(x.jsx)("div",{className:"typeCard",children:s.types.map((function(e){return Object(x.jsx)("div",{className:"".concat(e.type.name," tipo"),children:Object(x.jsx)("p",{children:O(e.type.name)})},e.type.name)}))})]})})};c(37);var k=function(){return Object(x.jsxs)("header",{id:"header",children:[Object(x.jsx)("h1",{id:"title",children:"Pokedex 2.0"}),Object(x.jsx)("p",{id:"subtitle",children:"Criado por: Paulo Renan Almeida"}),Object(x.jsx)("div",{id:"ball"})]})};c(38);var N=function(e){var t=Object(n.useState)([]),c=Object(p.a)(t,2),s=c[0],a=c[1],r=Object(n.useState)([]),o=Object(p.a)(r,2),l=o[0],O=o[1],h=Object(n.useState)(""),N=Object(p.a)(h,2),y=N[0],g=N[1],w=Object(n.useState)(!0),_=Object(p.a)(w,2),S=_[0],C=_[1],P=Object(n.useState)(""),F=Object(p.a)(P,2),A=F[0],E=F[1];Object(n.useEffect)((function(){function e(){return(e=Object(b.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m();case 2:t=e.sent,a(t);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]),Object(n.useEffect)((function(){function e(){return(e=Object(b.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return C(!0),e.next=3,d("https://pokeapi.co/api/v2/pokemon?limit=50&offset=0");case 3:t=e.sent,O(t.results),g(t.next),C(!1);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]);var D=function(){var e=Object(b.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d(y);case 2:t=e.sent,O([].concat(Object(j.a)(l),Object(j.a)(t.results))),g(t.next);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),B=function(){var t=Object(b.a)(u.a.mark((function t(c){return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:c.preventDefault(),e.history.push("/pokemon/".concat(A));case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();return Object(x.jsxs)("div",{className:"home",children:[Object(x.jsx)(k,{}),Object(x.jsxs)("form",{className:"pokeBusca",onSubmit:B,children:[Object(x.jsx)("input",{type:"text",placeholder:"Digite o nome do pokemon",list:"pokeName",onChange:function(e){return E(e.target.value)}}),Object(x.jsx)(i.b,{to:"/pokemon/".concat(A),children:Object(x.jsx)("button",{className:"searchButton",disabled:""===A,children:"Pesquisar"})}),Object(x.jsx)("datalist",{id:"pokeName",children:s.map((function(e){return Object(x.jsx)("option",{value:e},e)}))})]}),Object(x.jsx)("div",{className:"pokeCard",children:S?Object(x.jsx)(f,{}):l.map((function(e){return Object(x.jsx)(v,{poke:e},e.name)}))}),Object(x.jsx)("div",{className:"proxButton",children:Object(x.jsx)("button",{onClick:D,children:"Carregar mais"})})]})};var y=function(e){var t,c,s=e.ability.ability,a=Object(n.useState)({}),r=Object(p.a)(a,2),i=r[0],o=r[1],j=Object(n.useState)(!0),l=Object(p.a)(j,2),m=l[0],O=l[1];return Object(n.useEffect)((function(){function e(){return(e=Object(b.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d(s.url);case 2:t=e.sent,o(t),O(!1);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}O(!0),function(){e.apply(this,arguments)}()}),[s.url]),Object(x.jsx)("div",{children:m?Object(x.jsx)("img",{src:h,alt:"loading"}):Object(x.jsxs)("details",{children:[Object(x.jsx)("summary",{children:(c=s.name.split("-"),c.map((function(e){return e.charAt(0).toUpperCase()+e.slice(1)})).join(" "))}),Object(x.jsx)("p",{children:(t=i,t.effect_entries.filter((function(e){return"en"===e.language.name}))[0].short_effect)})]})})};var g=function(e){var t=e.moves,c=Object(n.useState)({}),s=Object(p.a)(c,2),a=s[0],r=s[1],i=Object(n.useState)(!0),o=Object(p.a)(i,2),j=o[0],l=o[1],m=Object(n.useState)(!1),O=Object(p.a)(m,2),f=O[0],v=O[1];function k(e){return e.map((function(e){return e.charAt(0).toUpperCase()+e.slice(1)})).join(" ")}return Object(n.useEffect)((function(){function e(){return(e=Object(b.a)(u.a.mark((function e(){var c;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d(t.move.url);case 2:c=e.sent,r(c),l(!1);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}l(!0),function(){e.apply(this,arguments)}()}),[t.move.url]),Object(x.jsx)("div",{children:j?Object(x.jsx)("img",{src:h,alt:"loading"}):Object(x.jsxs)("details",{className:"cont4",children:[Object(x.jsx)("summary",{onClick:function(){return v(!f)},className:f?"caso1":"caso2",children:k(t.move.name.split("-"))}),Object(x.jsxs)("div",{className:"cont5",children:[Object(x.jsx)("p",{children:a.effect_entries[0].short_effect}),Object(x.jsx)("span",{className:"".concat(a.type.name," tipo"),children:k(a.type.name.split("-"))}),Object(x.jsx)("p",{children:"Tipo: ".concat(k(a.damage_class.name.split("-")))}),Object(x.jsx)("p",{children:"Power: ".concat(null===a.power?"--":a.power)}),Object(x.jsx)("p",{children:"Accuracy: ".concat(null===a.accuracy?"--":a.accuracy)})]})]})})};var w=function(e){var t=e.pokemon,c=Object(n.useState)({}),s=Object(p.a)(c,2),a=s[0],r=s[1],o=Object(n.useState)(!0),j=Object(p.a)(o,2),l=j[0],d=j[1];function m(e){return e.charAt(0).toUpperCase()+e.slice(1)}return Object(n.useEffect)((function(){function e(){return(e=Object(b.a)(u.a.mark((function e(){var c,n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return d(!0),e.next=3,fetch("https://pokeapi.co/api/v2/pokemon/".concat(t));case 3:return c=e.sent,e.next=6,c.json();case 6:n=e.sent,r(n),d(!1);case 9:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[t]),Object(x.jsx)(x.Fragment,{children:l?Object(x.jsx)("img",{src:h,alt:"loading"}):Object(x.jsxs)(i.b,{to:"/pokemon/".concat(a.id),className:"ev2",children:[Object(x.jsx)("h1",{children:m(a.name)}),Object(x.jsx)("img",{src:null!==a.sprites.other["official-artwork"].front_default?a.sprites.other["official-artwork"].front_default:a.sprites.front_default,alt:"pokemon"}),Object(x.jsx)("div",{className:"pokClass",children:a.types.map((function(e){return Object(x.jsx)("span",{className:"".concat(e.type.name," tipo"),children:m(e.type.name)},e.type.name)}))})]})})};c(39);var _=function(e){var t=e.pokeSpecie,c=Object(n.useState)({}),s=Object(p.a)(c,2),a=s[0],r=s[1],i=Object(n.useState)(!0),o=Object(p.a)(i,2),j=o[0],l=o[1];return Object(n.useEffect)((function(){function e(){return(e=Object(b.a)(u.a.mark((function e(){var c;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return l(!0),e.next=3,d(t.evolution_chain.url);case 3:c=e.sent,r(c.chain),l(!1);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[t]),Object(x.jsx)(x.Fragment,{children:j?Object(x.jsx)("img",{src:h,alt:"loading"}):Object(x.jsx)(x.Fragment,{children:a.evolves_to.length>0&&Object(x.jsxs)("div",{className:"evCont",children:[Object(x.jsx)("h3",{children:"Evolution"}),Object(x.jsxs)("div",{className:"ev1",children:[Object(x.jsx)(w,{pokemon:a.species.name}),a.evolves_to.map((function(e){return Object(x.jsxs)("div",{className:"ev3",children:[Object(x.jsx)(w,{pokemon:e.species.name}),e.evolves_to.length>0&&Object(x.jsx)(x.Fragment,{children:e.evolves_to.map((function(e){return Object(x.jsx)(w,{pokemon:e.species.name},e.species.name)}))})]},e.species.name)}))]})]})})})};var S=function(e){var t=e.pokemon;return Object(x.jsxs)("div",{className:"imgCont",children:[Object(x.jsx)("h3",{children:"Sprites"}),Object(x.jsxs)("div",{className:"img1",children:[Object(x.jsxs)("div",{className:"img2",children:[Object(x.jsx)("div",{className:"nomePok",children:Object(x.jsx)("p",{className:"lado",children:"Frente"})}),Object(x.jsx)("div",{children:Object(x.jsx)("img",{src:t.sprites.front_default,alt:t.name})})]}),null!==t.sprites.back_default&&Object(x.jsxs)("div",{className:"img2",children:[Object(x.jsx)("div",{className:"nomePok",children:Object(x.jsx)("p",{className:"lado",children:"Costas"})}),Object(x.jsx)("div",{children:Object(x.jsx)("img",{src:t.sprites.back_default,alt:t.name})})]})]}),null!=t.sprites.back_female&&Object(x.jsxs)("div",{className:"img1",children:[Object(x.jsxs)("div",{className:"img2",children:[Object(x.jsx)("div",{className:"nomePok",children:Object(x.jsx)("p",{className:"lado",children:"Frente (F\xeamea)"})}),Object(x.jsx)("div",{children:Object(x.jsx)("img",{src:t.sprites.front_female,alt:t.name})})]}),Object(x.jsxs)("div",{className:"img2",children:[Object(x.jsx)("div",{className:"nomePok",children:Object(x.jsx)("p",{className:"lado",children:"Costas (F\xeamea)"})}),Object(x.jsx)("div",{children:Object(x.jsx)("img",{src:t.sprites.back_female,alt:t.name})})]})]}),Object(x.jsxs)("div",{className:"img1",children:[Object(x.jsxs)("div",{className:"img2",children:[Object(x.jsx)("div",{className:"nomePok",children:Object(x.jsx)("p",{className:"lado",children:"Frente (Shiny)"})}),Object(x.jsx)("div",{children:Object(x.jsx)("img",{src:t.sprites.front_shiny,alt:t.name})})]}),null!==t.sprites.back_shiny&&Object(x.jsxs)("div",{className:"img2",children:[Object(x.jsx)("div",{className:"nomePok",children:Object(x.jsx)("p",{className:"lado",children:"Costas (Shiny)"})}),Object(x.jsx)("div",{children:Object(x.jsx)("img",{src:t.sprites.back_shiny,alt:t.name})})]})]}),null!=t.sprites.back_shiny_female&&Object(x.jsxs)("div",{className:"img1",children:[Object(x.jsxs)("div",{className:"img2",children:[Object(x.jsx)("div",{className:"nomePok",children:Object(x.jsx)("p",{className:"lado",children:"Frente (F\xeamea Shiny)"})}),Object(x.jsx)("div",{children:Object(x.jsx)("img",{src:t.sprites.front_shiny_female,alt:t.name})})]}),Object(x.jsxs)("div",{className:"img2",children:[Object(x.jsx)("div",{className:"nomePok",children:Object(x.jsx)("p",{className:"lado",children:"Costas (F\xeamea Shiny)"})}),Object(x.jsx)("div",{children:Object(x.jsx)("img",{src:t.sprites.back_shiny_female,alt:t.name})})]})]})]})};var C=function(e){var t=e.pokemon;return Object(x.jsxs)("div",{className:"stats",children:[Object(x.jsx)("h3",{children:"Stats"}),Object(x.jsxs)("div",{className:"statsDiv",children:[Object(x.jsxs)("div",{className:"points",children:[Object(x.jsx)("label",{children:"HP"}),Object(x.jsx)("meter",{min:"0",max:"255",value:t.stats[0].base_stat})]}),Object(x.jsxs)("div",{className:"points",children:[Object(x.jsx)("label",{children:"Attack"}),Object(x.jsx)("meter",{min:"0",max:"190",value:t.stats[1].base_stat})]}),Object(x.jsxs)("div",{className:"points",children:[Object(x.jsx)("label",{children:"Defense"}),Object(x.jsx)("meter",{min:"0",max:"230",value:t.stats[2].base_stat})]}),Object(x.jsxs)("div",{className:"points",children:[Object(x.jsx)("label",{children:"Special Attack"}),Object(x.jsx)("meter",{min:"0",max:"194",value:t.stats[3].base_stat})]}),Object(x.jsxs)("div",{className:"points",children:[Object(x.jsx)("label",{children:"Special Defense"}),Object(x.jsx)("meter",{min:"0",max:"230",value:t.stats[4].base_stat})]}),Object(x.jsxs)("div",{className:"points",children:[Object(x.jsx)("label",{children:"Speed"}),Object(x.jsx)("meter",{min:"0",max:"180",value:t.stats[5].base_stat})]})]})]})};c(40);var P=function(e){var t=Object(n.useState)({}),c=Object(p.a)(t,2),s=c[0],a=c[1],r=Object(n.useState)(!0),o=Object(p.a)(r,2),j=o[0],l=o[1],v=Object(n.useState)(!0),N=Object(p.a)(v,2),w=N[0],P=N[1],F=Object(n.useState)([]),A=Object(p.a)(F,2),E=A[0],D=A[1],B=Object(n.useState)({}),U=Object(p.a)(B,2),q=U[0],I=U[1],T=Object(n.useState)(""),H=Object(p.a)(T,2),J=H[0],L=H[1],V=Object(n.useState)(!0),M=Object(p.a)(V,2),R=M[0],z=M[1],G=e.match.params.id,K=e.history;function Q(e){return e.charAt(0).toUpperCase()+e.slice(1)}Object(n.useEffect)((function(){function e(){return(e=Object(b.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return l(!0),e.prev=1,e.next=4,O(G);case 4:t=e.sent,a(t),l(!1),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),K.push("/notfound");case 12:case"end":return e.stop()}}),e,null,[[1,9]])})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[G,K]),Object(n.useEffect)((function(){function e(){return(e=Object(b.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m();case 2:t=e.sent,D(t);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]),Object(n.useEffect)((function(){function e(){return(e=Object(b.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return P(!0),e.next=3,d(s.species.url);case 3:t=e.sent,I(t),P(!1);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!1===j&&function(){e.apply(this,arguments)}()}),[s,j]);var W=function(){var t=Object(b.a)(u.a.mark((function t(c){return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:c.preventDefault(),e.history.push("/pokemon/".concat(J)),L("");case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();return Object(x.jsxs)("div",{children:[Object(x.jsx)(k,{}),j?Object(x.jsx)(f,{}):Object(x.jsxs)("div",{children:[Object(x.jsxs)("form",{className:"pokeBusca",onSubmit:W,children:[1!==s.id&&Object(x.jsxs)(i.b,{to:"/pokemon/".concat(s.id-1),children:[" ",Object(x.jsx)("button",{className:"but1",children:Object(x.jsx)("span",{children:"Anterior"})})]}),Object(x.jsx)("input",{type:"text",placeholder:"Digite o nome do pokemon",list:"pokeName",onChange:function(e){return L(e.target.value)}}),Object(x.jsx)("button",{className:"searchButton",type:"submit",disabled:""===J,children:"Pesquisar"}),898!==s.id&&Object(x.jsx)(i.b,{to:"/pokemon/".concat(s.id+1),children:Object(x.jsx)("button",{className:"but2",children:Object(x.jsx)("span",{children:"Pr\xf3ximo"})})}),Object(x.jsx)("datalist",{id:"pokeName",children:E.map((function(e){return Object(x.jsx)("option",{value:e},e)}))})]}),Object(x.jsxs)("div",{className:"pokemon-info",children:[Object(x.jsxs)("div",{className:"pokeName",children:[Object(x.jsx)("h1",{children:"Pokemon n\xba: ".concat(s.id)}),Object(x.jsx)("h2",{children:Q(s.name)})]}),Object(x.jsx)("div",{children:Object(x.jsx)("img",{src:null!==s.sprites.other["official-artwork"].front_default?s.sprites.other["official-artwork"].front_default:s.sprites.front_default,alt:"pokemon",className:"pokImg"})}),Object(x.jsx)("div",{children:s.types.map((function(e){return Object(x.jsx)("span",{className:"".concat(e.type.name," tipo"),children:Q(e.type.name)},e.type.name)}))}),Object(x.jsxs)("div",{className:"statsAbility",children:[Object(x.jsxs)("div",{className:"ability",children:[Object(x.jsx)("h3",{children:"Habilidades"}),s.id<=10180&&s.abilities.map((function(e){return Object(x.jsx)(y,{ability:e},e.ability.name)}))]}),Object(x.jsx)(C,{pokemon:s})]}),Object(x.jsxs)("details",{className:"moveCont",children:[Object(x.jsx)("summary",{className:"cont1",onClick:function(){return z(!R)},children:Object(x.jsx)("h3",{children:R?"\u25ba Ataques":"\u25bc Ataques"})}),Object(x.jsx)("div",{className:"cont2",children:s.moves.map((function(e){return Object(x.jsx)(g,{moves:e},e.move.name)}))})]}),Object(x.jsx)(x.Fragment,{children:w?Object(x.jsx)("img",{src:h,alt:"loading"}):Object(x.jsx)(_,{pokeSpecie:q})}),Object(x.jsx)(S,{pokemon:s})]})]}),Object(x.jsx)("div",{className:"buttonCont",children:Object(x.jsx)(i.b,{to:"/",className:"proxButton",children:Object(x.jsx)("button",{children:"Voltar ao inicio"})})})]})},F=c.p+"static/media/pikachu.a8b7afca.jpg";c(41);var A=function(){return Object(x.jsxs)("div",{children:[Object(x.jsx)(k,{}),Object(x.jsxs)("div",{className:"notDiv",children:[Object(x.jsx)("h1",{children:"404"}),Object(x.jsx)("p",{children:"Pagina N\xe3o Encontrada"})]}),Object(x.jsx)("div",{className:"pikaDiv",children:Object(x.jsx)("img",{src:F,alt:"pikachu",className:"pikachu"})}),Object(x.jsx)("div",{className:"buttonCont",children:Object(x.jsx)(i.b,{to:"/",className:"proxButton",children:Object(x.jsx)("button",{children:"Voltar"})})})]})};c(42);var E=function(){return Object(x.jsx)(i.a,{basename:"/pokedex2.0",children:Object(x.jsxs)(o.c,{children:[Object(x.jsx)(o.a,{exact:!0,path:"/",component:N}),Object(x.jsx)(o.a,{path:"/pokemon/:id",component:P}),Object(x.jsx)(o.a,{component:A})]})})},D=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,44)).then((function(t){var c=t.getCLS,n=t.getFID,s=t.getFCP,a=t.getLCP,r=t.getTTFB;c(e),n(e),s(e),a(e),r(e)}))};r.a.render(Object(x.jsx)(s.a.StrictMode,{children:Object(x.jsx)(E,{})}),document.getElementById("root")),D()}},[[43,1,2]]]);
//# sourceMappingURL=main.9e1f8ee6.chunk.js.map