(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-vendors~621989c9"],{"88ee":function(e,t,i){"use strict";var o=i("41b2"),n=i.n(o),s=i("2b0e"),u=i("46cf"),a=i.n(u),r=i("4d91"),p=i("705c"),c=i("daa3"),l=i("d41d"),h=i("f194"),d=i("6a21"),m=i("f3dd"),f=i("cb7d"),v=i("b488"),g=i("7b05"),b=i("98d3");function T(){return""}function C(){return window.document}s["default"].use(a.a,{name:"ant-ref"});var P=["click","mousedown","touchstart","mouseenter","mouseleave","focus","blur","contextmenu"];t["a"]={name:"Trigger",mixins:[v["a"]],props:{action:r["a"].oneOfType([r["a"].string,r["a"].arrayOf(r["a"].string)]).def([]),showAction:r["a"].any.def([]),hideAction:r["a"].any.def([]),getPopupClassNameFromAlign:r["a"].any.def(T),afterPopupVisibleChange:r["a"].func.def(f["c"]),popup:r["a"].any,popupStyle:r["a"].object.def({}),prefixCls:r["a"].string.def("rc-trigger-popup"),popupClassName:r["a"].string.def(""),popupPlacement:r["a"].string,builtinPlacements:r["a"].object,popupTransitionName:r["a"].oneOfType([r["a"].string,r["a"].object]),popupAnimation:r["a"].any,mouseEnterDelay:r["a"].number.def(0),mouseLeaveDelay:r["a"].number.def(.1),zIndex:r["a"].number,focusDelay:r["a"].number.def(0),blurDelay:r["a"].number.def(.15),getPopupContainer:r["a"].func,getDocument:r["a"].func.def(C),forceRender:r["a"].bool,destroyPopupOnHide:r["a"].bool.def(!1),mask:r["a"].bool.def(!1),maskClosable:r["a"].bool.def(!0),popupAlign:r["a"].object.def({}),popupVisible:r["a"].bool,defaultPopupVisible:r["a"].bool.def(!1),maskTransitionName:r["a"].oneOfType([r["a"].string,r["a"].object]),maskAnimation:r["a"].string,stretch:r["a"].string,alignPoint:r["a"].bool},provide:function(){return{vcTriggerContext:this}},inject:{vcTriggerContext:{default:function(){return{}}},savePopupRef:{default:function(){return f["c"]}}},data:function(){var e=this.$props,t=void 0;return t=Object(c["q"])(this,"popupVisible")?!!e.popupVisible:!!e.defaultPopupVisible,{sPopupVisible:t,point:null}},watch:{popupVisible:function(e){void 0!==e&&(this.sPopupVisible=e)},sPopupVisible:function(e){var t=this;this.$nextTick(function(){t.renderComponent(null,function(){t.afterPopupVisibleChange(e)})})}},beforeCreate:function(){var e=this;P.forEach(function(t){e["fire"+t]=function(i){e.fireEvents(t,i)}})},mounted:function(){var e=this;this.$nextTick(function(){e.renderComponent(null),e.updatedCal()})},updated:function(){var e=this;this.$nextTick(function(){e.updatedCal()})},beforeDestroy:function(){this.clearDelayTimer(),this.clearOutsideHandler(),clearTimeout(this.mouseDownTimeout)},methods:{updatedCal:function(){var e=this.$props,t=this.$data;if(t.sPopupVisible){var i=void 0;this.clickOutsideHandler||!this.isClickToHide()&&!this.isContextmenuToShow()||(i=e.getDocument(),this.clickOutsideHandler=Object(h["a"])(i,"mousedown",this.onDocumentClick)),this.touchOutsideHandler||(i=i||e.getDocument(),this.touchOutsideHandler=Object(h["a"])(i,"touchstart",this.onDocumentClick)),!this.contextmenuOutsideHandler1&&this.isContextmenuToShow()&&(i=i||e.getDocument(),this.contextmenuOutsideHandler1=Object(h["a"])(i,"scroll",this.onContextmenuClose)),!this.contextmenuOutsideHandler2&&this.isContextmenuToShow()&&(this.contextmenuOutsideHandler2=Object(h["a"])(window,"blur",this.onContextmenuClose))}else this.clearOutsideHandler()},onMouseenter:function(e){var t=this.$props.mouseEnterDelay;this.fireEvents("mouseenter",e),this.delaySetPopupVisible(!0,t,t?null:e)},onMouseMove:function(e){this.fireEvents("mousemove",e),this.setPoint(e)},onMouseleave:function(e){this.fireEvents("mouseleave",e),this.delaySetPopupVisible(!1,this.$props.mouseLeaveDelay)},onPopupMouseenter:function(){this.clearDelayTimer()},onPopupMouseleave:function(e){e&&e.relatedTarget&&!e.relatedTarget.setTimeout&&this._component&&this._component.getPopupDomNode&&Object(p["a"])(this._component.getPopupDomNode(),e.relatedTarget)||this.delaySetPopupVisible(!1,this.$props.mouseLeaveDelay)},onFocus:function(e){this.fireEvents("focus",e),this.clearDelayTimer(),this.isFocusToShow()&&(this.focusTime=Date.now(),this.delaySetPopupVisible(!0,this.$props.focusDelay))},onMousedown:function(e){this.fireEvents("mousedown",e),this.preClickTime=Date.now()},onTouchstart:function(e){this.fireEvents("touchstart",e),this.preTouchTime=Date.now()},onBlur:function(e){this.fireEvents("blur",e),this.clearDelayTimer(),this.isBlurToHide()&&this.delaySetPopupVisible(!1,this.$props.blurDelay)},onContextmenu:function(e){e.preventDefault(),this.fireEvents("contextmenu",e),this.setPopupVisible(!0,e)},onContextmenuClose:function(){this.isContextmenuToShow()&&this.close()},onClick:function(e){if(this.fireEvents("click",e),this.focusTime){var t=void 0;if(this.preClickTime&&this.preTouchTime?t=Math.min(this.preClickTime,this.preTouchTime):this.preClickTime?t=this.preClickTime:this.preTouchTime&&(t=this.preTouchTime),Math.abs(t-this.focusTime)<20)return;this.focusTime=0}this.preClickTime=0,this.preTouchTime=0,e&&e.preventDefault&&e.preventDefault(),e&&e.domEvent&&e.domEvent.preventDefault();var i=!this.$data.sPopupVisible;(this.isClickToHide()&&!i||i&&this.isClickToShow())&&this.setPopupVisible(!this.$data.sPopupVisible,e)},onPopupMouseDown:function(){var e=this,t=this.vcTriggerContext,i=void 0===t?{}:t;this.hasPopupMouseDown=!0,clearTimeout(this.mouseDownTimeout),this.mouseDownTimeout=setTimeout(function(){e.hasPopupMouseDown=!1},0),i.onPopupMouseDown&&i.onPopupMouseDown.apply(i,arguments)},onDocumentClick:function(e){if(!this.$props.mask||this.$props.maskClosable){var t=e.target,i=this.$el;Object(p["a"])(i,t)||this.hasPopupMouseDown||this.close()}},getPopupDomNode:function(){return this._component&&this._component.getPopupDomNode?this._component.getPopupDomNode():null},getRootDomNode:function(){return this.$el},handleGetPopupClassFromAlign:function(e){var t=[],i=this.$props,o=i.popupPlacement,n=i.builtinPlacements,s=i.prefixCls,u=i.alignPoint,a=i.getPopupClassNameFromAlign;return o&&n&&t.push(Object(f["b"])(n,s,e,u)),a&&t.push(a(e)),t.join(" ")},getPopupAlign:function(){var e=this.$props,t=e.popupPlacement,i=e.popupAlign,o=e.builtinPlacements;return t&&o?Object(f["a"])(o,t,i):i},savePopup:function(e){this._component=e,this.savePopupRef(e)},getComponent:function(){var e=this.$createElement,t=this,i={};this.isMouseEnterToShow()&&(i.mouseenter=t.onPopupMouseenter),this.isMouseLeaveToHide()&&(i.mouseleave=t.onPopupMouseleave),i.mousedown=this.onPopupMouseDown,i.touchstart=this.onPopupMouseDown;var o=t.handleGetPopupClassFromAlign,s=t.getRootDomNode,u=t.getContainer,a=t.$listeners,r=t.$props,p=r.prefixCls,l=r.destroyPopupOnHide,h=r.popupClassName,d=r.action,v=r.popupAnimation,g=r.popupTransitionName,b=r.popupStyle,T=r.mask,C=r.maskAnimation,P=r.maskTransitionName,O=r.zIndex,w=r.stretch,x=r.alignPoint,D=this.$data,k=D.sPopupVisible,y=D.point,$=this.getPopupAlign(),H={props:{prefixCls:p,destroyPopupOnHide:l,visible:k,point:x&&y,action:d,align:$,animation:v,getClassNameFromAlign:o,stretch:w,getRootDomNode:s,mask:T,zIndex:O,transitionName:g,maskAnimation:C,maskTransitionName:P,getContainer:u,popupClassName:h,popupStyle:b},on:n()({align:a.popupAlign||f["c"]},i),directives:[{name:"ant-ref",value:this.savePopup}]};return e(m["a"],H,[Object(c["h"])(t,"popup")])},getContainer:function(){var e=this.$props,t=document.createElement("div");t.style.position="absolute",t.style.top="0",t.style.left="0",t.style.width="100%";var i=e.getPopupContainer?e.getPopupContainer(this.$el):e.getDocument().body;return i.appendChild(t),this.popupContainer=t,t},setPopupVisible:function(e,t){var i=this.$props.alignPoint;this.clearDelayTimer(),this.$data.sPopupVisible!==e&&(Object(c["q"])(this,"popupVisible")||this.setState({sPopupVisible:e}),this.$listeners.popupVisibleChange&&this.$listeners.popupVisibleChange(e)),e&&i&&t&&this.setPoint(t)},setPoint:function(e){var t=this.$props.alignPoint;t&&e&&this.setState({point:{pageX:e.pageX,pageY:e.pageY}})},delaySetPopupVisible:function(e,t,i){var o=this,n=1e3*t;if(this.clearDelayTimer(),n){var s=i?{pageX:i.pageX,pageY:i.pageY}:null;this.delayTimer=Object(l["b"])(function(){o.setPopupVisible(e,s),o.clearDelayTimer()},n)}else this.setPopupVisible(e,i)},clearDelayTimer:function(){this.delayTimer&&(Object(l["a"])(this.delayTimer),this.delayTimer=null)},clearOutsideHandler:function(){this.clickOutsideHandler&&(this.clickOutsideHandler.remove(),this.clickOutsideHandler=null),this.contextmenuOutsideHandler1&&(this.contextmenuOutsideHandler1.remove(),this.contextmenuOutsideHandler1=null),this.contextmenuOutsideHandler2&&(this.contextmenuOutsideHandler2.remove(),this.contextmenuOutsideHandler2=null),this.touchOutsideHandler&&(this.touchOutsideHandler.remove(),this.touchOutsideHandler=null)},createTwoChains:function(e){var t=function(){},i=this.$listeners;return this.childOriginEvents[e]&&i[e]?this["fire"+e]:(t=this.childOriginEvents[e]||i[e]||t,t)},isClickToShow:function(){var e=this.$props,t=e.action,i=e.showAction;return-1!==t.indexOf("click")||-1!==i.indexOf("click")},isContextmenuToShow:function(){var e=this.$props,t=e.action,i=e.showAction;return-1!==t.indexOf("contextmenu")||-1!==i.indexOf("contextmenu")},isClickToHide:function(){var e=this.$props,t=e.action,i=e.hideAction;return-1!==t.indexOf("click")||-1!==i.indexOf("click")},isMouseEnterToShow:function(){var e=this.$props,t=e.action,i=e.showAction;return-1!==t.indexOf("hover")||-1!==i.indexOf("mouseenter")},isMouseLeaveToHide:function(){var e=this.$props,t=e.action,i=e.hideAction;return-1!==t.indexOf("hover")||-1!==i.indexOf("mouseleave")},isFocusToShow:function(){var e=this.$props,t=e.action,i=e.showAction;return-1!==t.indexOf("focus")||-1!==i.indexOf("focus")},isBlurToHide:function(){var e=this.$props,t=e.action,i=e.hideAction;return-1!==t.indexOf("focus")||-1!==i.indexOf("blur")},forcePopupAlign:function(){this.$data.sPopupVisible&&this._component&&this._component.$refs.alignInstance&&this._component.$refs.alignInstance.forceAlign()},fireEvents:function(e,t){this.childOriginEvents[e]&&this.childOriginEvents[e](t),this.__emit(e,t)},close:function(){this.setPopupVisible(!1)}},render:function(){var e=this,t=arguments[0],i=this.sPopupVisible,o=Object(c["c"])(this.$slots["default"]),n=this.$props,s=n.forceRender,u=n.alignPoint;o.length>1&&Object(d["a"])(!1,"Trigger $slots.default.length > 1, just support only one default",!0);var a=o[0];this.childOriginEvents=Object(c["i"])(a);var r={props:{},on:{},key:"trigger"};this.isContextmenuToShow()?r.on.contextmenu=this.onContextmenu:r.on.contextmenu=this.createTwoChains("contextmenu"),this.isClickToHide()||this.isClickToShow()?(r.on.click=this.onClick,r.on.mousedown=this.onMousedown,r.on.touchstart=this.onTouchstart):(r.on.click=this.createTwoChains("click"),r.on.mousedown=this.createTwoChains("mousedown"),r.on.touchstart=this.createTwoChains("onTouchstart")),this.isMouseEnterToShow()?(r.on.mouseenter=this.onMouseenter,u&&(r.on.mousemove=this.onMouseMove)):r.on.mouseenter=this.createTwoChains("mouseenter"),this.isMouseLeaveToHide()?r.on.mouseleave=this.onMouseleave:r.on.mouseleave=this.createTwoChains("mouseleave"),this.isFocusToShow()||this.isBlurToHide()?(r.on.focus=this.onFocus,r.on.blur=this.onBlur):(r.on.focus=this.createTwoChains("focus"),r.on.blur=function(t){!t||t.relatedTarget&&Object(p["a"])(t.target,t.relatedTarget)||e.createTwoChains("blur")(t)});var l=Object(g["a"])(a,r);return t(b["a"],{attrs:{parent:this,visible:i,autoMount:!1,forceRender:s,getComponent:this.getComponent,getContainer:this.getContainer,children:function(t){var i=t.renderComponent;return e.renderComponent=i,l}}})}}}}]);
//# sourceMappingURL=chunk-vendors~621989c9.045b1532.js.map