(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-vendors~5461a6b2"],{a9d4:function(t,e,n){"use strict";var i=n("c544"),r=n("b6bb"),a=void 0;function o(t){return!t||null===t.offsetParent}e["a"]={name:"Wave",props:["insertExtraNode"],mounted:function(){var t=this;this.$nextTick(function(){var e=t.$el;1===e.nodeType&&(t.instance=t.bindAnimationEvent(e))})},beforeDestroy:function(){this.instance&&this.instance.cancel(),this.clickWaveTimeoutId&&clearTimeout(this.clickWaveTimeoutId),this.destroy=!0},methods:{isNotGrey:function(t){var e=(t||"").match(/rgba?\((\d*), (\d*), (\d*)(, [\.\d]*)?\)/);return!(e&&e[1]&&e[2]&&e[3])||!(e[1]===e[2]&&e[2]===e[3])},onClick:function(t,e){if(!(!t||o(t)||t.className.indexOf("-leave")>=0)){this.removeExtraStyleNode();var n=this.$props.insertExtraNode;this.extraNode=document.createElement("div");var r=this.extraNode;r.className="ant-click-animating-node";var s=this.getAttributeName();t.removeAttribute(s),t.setAttribute(s,"true"),a=a||document.createElement("style"),e&&"#ffffff"!==e&&"rgb(255, 255, 255)"!==e&&this.isNotGrey(e)&&!/rgba\(\d*, \d*, \d*, 0\)/.test(e)&&"transparent"!==e&&(r.style.borderColor=e,a.innerHTML="[ant-click-animating-without-extra-node]:after { border-color: "+e+"; }",document.body.contains(a)||document.body.appendChild(a)),n&&t.appendChild(r),i["a"].addStartEventListener(t,this.onTransitionStart),i["a"].addEndEventListener(t,this.onTransitionEnd)}},bindAnimationEvent:function(t){var e=this;if(t&&t.getAttribute&&!t.getAttribute("disabled")&&!(t.className.indexOf("disabled")>=0)){var n=function(n){if("INPUT"!==n.target.tagName&&!o(n.target)){e.resetEffect(t);var i=getComputedStyle(t).getPropertyValue("border-top-color")||getComputedStyle(t).getPropertyValue("border-color")||getComputedStyle(t).getPropertyValue("background-color");e.clickWaveTimeoutId=window.setTimeout(function(){return e.onClick(t,i)},0),r["a"].cancel(e.animationStartId),e.animationStart=!0,e.animationStartId=Object(r["a"])(function(){e.animationStart=!1},10)}};return t.addEventListener("click",n,!0),{cancel:function(){t.removeEventListener("click",n,!0)}}}},getAttributeName:function(){var t=this.$props.insertExtraNode;return t?"ant-click-animating":"ant-click-animating-without-extra-node"},resetEffect:function(t){if(t&&t!==this.extraNode&&t instanceof Element){var e=this.$props.insertExtraNode,n=this.getAttributeName();t.removeAttribute(n),this.removeExtraStyleNode(),e&&this.extraNode&&t.contains(this.extraNode)&&t.removeChild(this.extraNode),i["a"].removeStartEventListener(t,this.onTransitionStart),i["a"].removeEndEventListener(t,this.onTransitionEnd)}},onTransitionStart:function(t){if(!this.destroy){var e=this.$el;t&&t.target===e&&(this.animationStart||this.resetEffect(e))}},onTransitionEnd:function(t){t&&"fadeEffect"===t.animationName&&this.resetEffect(t.target)},removeExtraStyleNode:function(){a&&(a.innerHTML="")}},render:function(){return this.$slots["default"]&&this.$slots["default"][0]}}}}]);
//# sourceMappingURL=chunk-vendors~5461a6b2.5490a4d2.js.map