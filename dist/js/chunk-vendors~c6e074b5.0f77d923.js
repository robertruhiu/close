(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-vendors~c6e074b5"],{"0a06":function(e,t,o){"use strict";var r=o("2444"),n=o("c532"),s=o("f6b49"),i=o("5270");function u(e){this.defaults=e,this.interceptors={request:new s,response:new s}}u.prototype.request=function(e){"string"===typeof e&&(e=n.merge({url:arguments[0]},arguments[1])),e=n.merge(r,{method:"get"},this.defaults,e),e.method=e.method.toLowerCase();var t=[i,void 0],o=Promise.resolve(e);this.interceptors.request.forEach(function(e){t.unshift(e.fulfilled,e.rejected)}),this.interceptors.response.forEach(function(e){t.push(e.fulfilled,e.rejected)});while(t.length)o=o.then(t.shift(),t.shift());return o},n.forEach(["delete","get","head","options"],function(e){u.prototype[e]=function(t,o){return this.request(n.merge(o||{},{method:e,url:t}))}}),n.forEach(["post","put","patch"],function(e){u.prototype[e]=function(t,o,r){return this.request(n.merge(r||{},{method:e,url:t,data:o}))}}),e.exports=u}}]);
//# sourceMappingURL=chunk-vendors~c6e074b5.0f77d923.js.map