(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-vendors~8685c95a"],{"0fe3":function(e,n,o){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var t="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},r=o("3041"),f=a(r),u=o("308c"),i=a(u),l=o("dc91"),d=a(l);function a(e){return e&&e.__esModule?e:{default:e}}var c=void 0;n.default=function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},o=arguments.length>2&&void 0!==arguments[2]&&arguments[2],r=(0,f.default)();if(c||(c=(0,i.default)(r)),n.events)throw new Error("Event handlers cannot be overwritten.");if("string"===typeof e&&!document.getElementById(e))throw new Error('Element "'+e+'" does not exist.');n.events=d.default.proxyEvents(r);var u=new Promise(function(o){if("object"===("undefined"===typeof e?"undefined":t(e))&&e.playVideo instanceof Function){var f=e;o(f)}else c.then(function(t){var f=new t.Player(e,n);return r.on("ready",function(){o(f)}),null})}),l=d.default.promisifyPlayer(u,o);return l.on=r.on,l.off=r.off,l},e.exports=n["default"]}}]);
//# sourceMappingURL=chunk-vendors~8685c95a.dfa9029b.js.map