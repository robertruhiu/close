(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-vendors~e8391b81"],{"0e44":function(e,t,n){"use strict";var r=n("9436"),c=n("e55b");t["a"]=function(e,t,n){function u(e,t,n){try{return(n=t.getItem(e))&&void 0!==n?JSON.parse(n):void 0}catch(e){}}if(t=(e=e||{}).storage||window&&window.localStorage,n=e.key||"vuex",!function(e){try{return e.setItem("@@",1),e.removeItem("@@"),!0}catch(e){}return!1}(t))throw new Error("Invalid storage instance given");return function(o){var i=Object(c["a"])(e,"getState",u)(n,t);"object"==typeof i&&null!==i&&o.replaceState(Object(r["a"])(o.state,i,{arrayMerge:e.arrayMerger||function(e,t){return t},clone:!1})),(e.subscriber||function(e){return function(t){return e.subscribe(t)}})(o)(function(r,u){(e.filter||function(){return!0})(r)&&(e.setState||function(e,t,n){return n.setItem(e,JSON.stringify(t))})(n,(e.reducer||function(e,t){return 0===t.length?e:t.reduce(function(t,n){return Object(c["b"])(t,n,Object(c["a"])(e,n))},{})})(u,e.paths||[]),t)})}}}}]);
//# sourceMappingURL=chunk-vendors~e8391b81.4add2e90.js.map