(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-vendors~765fb902"],{cedf:function(t,o,l){"use strict";var e=l("8c1e");function f(t,o,l){l=l||{},9===o.nodeType&&(o=e.getWindow(o));var f=l.allowHorizontalScroll,p=l.onlyScrollIfNeeded,s=l.alignWithTop,i=l.alignWithLeft,r=l.offsetTop||0,d=l.offsetLeft||0,c=l.offsetBottom||0,n=l.offsetRight||0;f=void 0===f||f;var a=e.isWindow(o),h=e.offset(t),v=e.outerHeight(t),T=e.outerWidth(t),L=void 0,w=void 0,W=void 0,g=void 0,b=void 0,u=void 0,F=void 0,k=void 0,H=void 0,m=void 0;a?(F=o,m=e.height(F),H=e.width(F),k={left:e.scrollLeft(F),top:e.scrollTop(F)},b={left:h.left-k.left-d,top:h.top-k.top-r},u={left:h.left+T-(k.left+H)+n,top:h.top+v-(k.top+m)+c},g=k):(L=e.offset(o),w=o.clientHeight,W=o.clientWidth,g={left:o.scrollLeft,top:o.scrollTop},b={left:h.left-(L.left+(parseFloat(e.css(o,"borderLeftWidth"))||0))-d,top:h.top-(L.top+(parseFloat(e.css(o,"borderTopWidth"))||0))-r},u={left:h.left+T-(L.left+W+(parseFloat(e.css(o,"borderRightWidth"))||0))+n,top:h.top+v-(L.top+w+(parseFloat(e.css(o,"borderBottomWidth"))||0))+c}),b.top<0||u.top>0?!0===s?e.scrollTop(o,g.top+b.top):!1===s?e.scrollTop(o,g.top+u.top):b.top<0?e.scrollTop(o,g.top+b.top):e.scrollTop(o,g.top+u.top):p||(s=void 0===s||!!s,s?e.scrollTop(o,g.top+b.top):e.scrollTop(o,g.top+u.top)),f&&(b.left<0||u.left>0?!0===i?e.scrollLeft(o,g.left+b.left):!1===i?e.scrollLeft(o,g.left+u.left):b.left<0?e.scrollLeft(o,g.left+b.left):e.scrollLeft(o,g.left+u.left):p||(i=void 0===i||!!i,i?e.scrollLeft(o,g.left+b.left):e.scrollLeft(o,g.left+u.left)))}t.exports=f}}]);
//# sourceMappingURL=chunk-vendors~765fb902.2e98d62c.js.map