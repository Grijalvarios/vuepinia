(function(e){function t(t){for(var o,a,r=t[0],b=t[1],i=t[2],l=0,j=[];l<r.length;l++)a=r[l],Object.prototype.hasOwnProperty.call(n,a)&&n[a]&&j.push(n[a][0]),n[a]=0;for(o in b)Object.prototype.hasOwnProperty.call(b,o)&&(e[o]=b[o]);u&&u(t);while(j.length)j.shift()();return s.push.apply(s,i||[]),c()}function c(){for(var e,t=0;t<s.length;t++){for(var c=s[t],o=!0,r=1;r<c.length;r++){var b=c[r];0!==n[b]&&(o=!1)}o&&(s.splice(t--,1),e=a(a.s=c[0]))}return e}var o={},n={app:0},s=[];function a(t){if(o[t])return o[t].exports;var c=o[t]={i:t,l:!1,exports:{}};return e[t].call(c.exports,c,c.exports,a),c.l=!0,c.exports}a.m=e,a.c=o,a.d=function(e,t,c){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:c})},a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var c=Object.create(null);if(a.r(c),Object.defineProperty(c,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)a.d(c,o,function(t){return e[t]}.bind(null,o));return c},a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],b=r.push.bind(r);r.push=t,r=r.slice();for(var i=0;i<r.length;i++)t(r[i]);var u=b;s.push([0,"chunk-vendors"]),c()})({0:function(e,t,c){e.exports=c("56d7")},"0575":function(e,t,c){},2787:function(e,t,c){"use strict";c("0575")},"42e6":function(e,t,c){"use strict";c("9859")},"56d7":function(e,t,c){"use strict";c.r(t);var o=c("7a23");const n={id:"nav"},s=Object(o["g"])("Home"),a=Object(o["g"])(" | "),r=Object(o["g"])("About"),b=Object(o["g"])("| "),i=Object(o["g"])("Pokemons"),u=Object(o["g"])("| "),l=Object(o["g"])("Usuarios");function j(e,t){const c=Object(o["C"])("router-link"),j=Object(o["C"])("router-view");return Object(o["v"])(),Object(o["e"])(o["a"],null,[Object(o["f"])("div",n,[Object(o["h"])(c,{to:"/"},{default:Object(o["K"])(()=>[s]),_:1}),a,Object(o["h"])(c,{to:"/about"},{default:Object(o["K"])(()=>[r]),_:1}),b,Object(o["h"])(c,{to:"/pokemons"},{default:Object(o["K"])(()=>[i]),_:1}),u,Object(o["h"])(c,{to:"/usuarios"},{default:Object(o["K"])(()=>[l]),_:1})]),Object(o["h"])(j)],64)}c("dd2f");const O={};O.render=j;var f=O,p=c("6c02"),d=c("cf05"),m=c.n(d);const v={class:"home"},h=Object(o["f"])("img",{alt:"Vue logo",src:m.a},null,-1);function g(e,t,c,n,s,a){const r=Object(o["C"])("HelloWorld");return Object(o["v"])(),Object(o["e"])("div",v,[h,Object(o["h"])(r)])}Object(o["y"])("data-v-0356c81a");const k={class:"hello"};function y(e,t,c,n,s,a){return Object(o["v"])(),Object(o["e"])("div",k)}Object(o["w"])();var w={name:"HelloWorld",props:{msg:String}};c("724d");w.render=y,w.__scopeId="data-v-0356c81a";var _=w,P={name:"Home",components:{HelloWorld:_}};P.render=g;var x=P;const E={class:"about"},I=Object(o["f"])("h1",null,"This is an about page",-1),C=[I];function M(e,t){return Object(o["v"])(),Object(o["e"])("div",E,C)}const U={};U.render=M;var H=U,S=c("77ba");const K=Object(S["b"])({id:"pokemons",state:()=>({pokemons:[],users:[]}),actions:{async morePokemons(){const e=699*Math.random()+1,t=await fetch("https://pokeapi.co/api/v2/pokemon?limit=3&offset="+e),c=await t.json(),o=c.results.map(async e=>{const t=await fetch(e.url),c=await t.json();return c.stats.forEach(e=>{e["percent_base"]=100*e.base_stat/200}),{item:e,info:c}}),n=await Promise.all(o);this.$state.pokemons=[...n,...this.$state.pokemons]},async moreUsers(){const e=await fetch("https://randomuser.me/api/?results=3"),t=await e.json();this.$state.users=[...t.results,...this.$state.users]}},getters:{getPokemons(e){return e.pokemons},getUsers(e){return console.log(e),e.users}}}),B={key:0,class:"pokedex"},$=["data-name","tabindex"],T={class:"pokemon-figure"},W=["src","alt"],A={class:"pokemon-description"},J={class:"pokemon-id"},N={class:"pokemon-name"},V={class:"pokemon-types"},q={class:"pokemon-stats"},z={class:"stat-bar"};var D={setup(e){const t=K();return(e,c)=>0!=Object(o["I"])(t).getPokemons.length?(Object(o["v"])(),Object(o["e"])("section",B,[(Object(o["v"])(!0),Object(o["e"])(o["a"],null,Object(o["B"])(Object(o["I"])(t).getPokemons,(e,t)=>(Object(o["v"])(),Object(o["e"])("div",{class:"pokemon",key:t,"data-name":e.item.name,"data-type":"fire",tabindex:t},[Object(o["f"])("figure",T,[Object(o["f"])("img",{src:e.info.sprites.other["official-artwork"].front_default,alt:e.item.name,width:"215"},null,8,W)]),Object(o["f"])("section",A,[Object(o["f"])("span",J,"#"+Object(o["E"])(e.info.id),1),Object(o["f"])("h1",N,Object(o["E"])(e.item.name),1),Object(o["f"])("div",V,[(Object(o["v"])(!0),Object(o["e"])(o["a"],null,Object(o["B"])(e.info.types,(e,t)=>(Object(o["v"])(),Object(o["e"])("span",{class:"pokemon-type",key:t},Object(o["E"])(e.type.name),1))),128))])]),Object(o["f"])("section",q,[(Object(o["v"])(!0),Object(o["e"])(o["a"],null,Object(o["B"])(e.info.stats,(e,t)=>(Object(o["v"])(),Object(o["e"])("div",{class:"stat-row",key:t},[Object(o["f"])("div",null,Object(o["E"])(e.stat.name),1),Object(o["f"])("div",z,[Object(o["f"])("div",{class:"stat-bar-bg",style:Object(o["r"])({width:e.percent_base+"%"})},Object(o["E"])(e.base_stat),5)])]))),128))])],8,$))),128))])):Object(o["d"])("",!0)}},F=(c("2787"),D),G={setup(e){const t=K();return(e,c)=>(Object(o["v"])(),Object(o["e"])("button",{onClick:c[0]||(c[0]=(...e)=>Object(o["I"])(t).morePokemons&&Object(o["I"])(t).morePokemons(...e))},"Mas Pokemones !! "))}},L=G;const Q={class:"about"},R={class:"pokedex-control"};var X={setup(e){return(e,t)=>(Object(o["v"])(),Object(o["e"])("div",Q,[Object(o["f"])("div",R,[Object(o["h"])(L)]),Object(o["h"])(F)]))}},Y=(c("722a"),X);Object(o["y"])("data-v-46c58393");const Z={class:"usuarios"},ee=["src"],te={class:"col-md-12"},ce=Object(o["f"])("label",{for:""},"Nombre",-1),oe={class:"col-md-12"},ne=Object(o["f"])("label",{for:""},"Correo",-1),se={class:"col-md-12"},ae=Object(o["f"])("label",{for:""},"Phone",-1),re=Object(o["f"])("div",{class:"col-md-12"},null,-1);Object(o["w"])();var be={setup(e){const t=K();return(e,c)=>{const n=Object(o["C"])("center");return Object(o["v"])(),Object(o["e"])(o["a"],null,[Object(o["h"])(n,null,{default:Object(o["K"])(()=>[Object(o["f"])("button",{onClick:c[0]||(c[0]=(...e)=>Object(o["I"])(t).moreUsers&&Object(o["I"])(t).moreUsers(...e))},"Mas usuarios !! ")]),_:1}),Object(o["f"])("div",Z,[(Object(o["v"])(!0),Object(o["e"])(o["a"],null,Object(o["B"])(Object(o["I"])(t).getUsers,(e,t)=>(Object(o["v"])(),Object(o["e"])("div",{class:"usuario",key:t},[Object(o["f"])("img",{src:e.picture.large,alt:""},null,8,ee),Object(o["f"])("div",te,[ce,Object(o["g"])(" "+Object(o["E"])(e.name.first)+" "+Object(o["E"])(e.name.last),1)]),Object(o["f"])("div",oe,[ne,Object(o["g"])(" "+Object(o["E"])(e.email),1)]),Object(o["f"])("div",se,[ae,Object(o["g"])(" "+Object(o["E"])(e.phone),1)]),re]))),128))])],64)}}};c("42e6");be.__scopeId="data-v-46c58393";var ie=be;const ue=[{path:"/",name:"Home",component:x},{path:"/about",name:"About",component:H},{path:"/pokemons",name:"Pokemons",component:Y},{path:"/usuarios",name:"Usuarios",component:ie}],le=Object(p["a"])({history:Object(p["b"])("/"),routes:ue});var je=le;Object(o["c"])(f).use(je).use(Object(S["a"])()).mount("#app")},"68dc":function(e,t,c){},"722a":function(e,t,c){"use strict";c("c06e")},"724d":function(e,t,c){"use strict";c("dbef")},9859:function(e,t,c){},c06e:function(e,t,c){},cf05:function(e,t,c){e.exports=c.p+"img/logo.82b9c7a5.png"},dbef:function(e,t,c){},dd2f:function(e,t,c){"use strict";c("68dc")}});
//# sourceMappingURL=app.5c6eb9e0.js.map