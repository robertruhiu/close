(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-vendors~2596970d"],{7387:function(e,s,o){"use strict";var n=o("41b2"),i=o.n(n),l=o("4d26"),t=o.n(l),r=o("7b05"),c=function(e){var s=void 0;return s=e.infinite?Math.ceil(e.slideCount/e.slidesToScroll):Math.ceil((e.slideCount-e.slidesToShow)/e.slidesToScroll)+1,s};s["a"]={functional:!0,render:function(e,s){var o=arguments[0],n=s.props,l=s.listeners,a=n.slideCount,d=n.slidesToScroll,u=n.slidesToShow,p=n.infinite,v=n.currentSlide,f=n.appendDots,S=n.customPaging,m=n.clickHandler,w=n.dotsClass,T=c({slideCount:a,slidesToScroll:d,slidesToShow:u,infinite:p}),h=l.mouseenter,k=l.mouseover,b=l.mouseleave,C={mouseenter:h,mouseover:k,mouseleave:b},y=Array.apply(null,Array(T+1).join("0").split("")).map(function(e,s){var n=s*d,i=s*d+(d-1),l=t()({"slick-active":v>=n&&v<=i}),c={message:"dots",index:s,slidesToScroll:d,currentSlide:v};function a(e){e&&e.preventDefault(),m(c)}return o("li",{key:s,class:l},[Object(r["a"])(S({i:s}),{on:{click:a}})])});return Object(r["a"])(f({dots:y}),{class:w,on:i()({},C)})}}}}]);
//# sourceMappingURL=chunk-vendors~2596970d.db1f7e76.js.map