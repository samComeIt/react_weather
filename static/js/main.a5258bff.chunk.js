(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{10:function(e,a,t){"use strict";t.r(a);var n=t(0),c=t.n(n),r=t(3),o=t.n(r),l=(t(9),t(1));var s=function(){var e=Object(n.useState)(""),a=Object(l.a)(e,2),t=a[0],r=a[1],o=Object(n.useState)({}),s=Object(l.a)(o,2),i=s[0],m=s[1];return c.a.createElement("div",null,c.a.createElement("main",null,c.a.createElement("div",{className:"App"},c.a.createElement("div",{className:"search-box"},c.a.createElement("input",{type:"text",className:"search-bar",placeholder:"Search City ...",onChange:function(e){return r(e.target.value)},value:t,onKeyPress:function(e){"Enter"===e.key&&fetch("".concat("https://api.openweathermap.org/data/2.5/","weather?q=").concat(t,"&units=metric&APPID=").concat("017ac3946bf10c21bba27c0d6bb9cb01")).then((function(e){return e.json()})).then((function(e){m(e),r(""),console.log(i)}))}})),c.a.createElement("div",{className:"basic-box"},c.a.createElement("div",{className:"date"},function(e){var a=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"][e.getDay()],t=e.getDate(),n=["January","February","March","April","May","June","July","August","October","November","December"][e.getMonth()],c=e.getFullYear();return"".concat(a," ").concat(t," ").concat(n," ").concat(c)}(new Date))),"undefined"!=typeof i.main?c.a.createElement("div",null,c.a.createElement("div",{className:"location-box"},c.a.createElement("div",{className:"location"},i.name,", ",i.sys.country)),c.a.createElement("div",{className:"weather-box"},c.a.createElement("div",{className:"temperature"},Math.round(i.main.temp),"\xb0c"),c.a.createElement("div",{className:"weather"},i.weather[0].main))):"")),c.a.createElement("footer",null,c.a.createElement("a",{href:"https://www.freepik.com/free-photos-vectors/background"},"Background vector created by vectorpocket - www.freepik.com")))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(s,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},4:function(e,a,t){e.exports=t(10)},9:function(e,a,t){}},[[4,1,2]]]);
//# sourceMappingURL=main.a5258bff.chunk.js.map