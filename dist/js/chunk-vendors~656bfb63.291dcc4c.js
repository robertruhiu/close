(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-vendors~656bfb63"],{"98d3":function(n,e,t){"use strict";var o=t("2b0e"),i=t("4d91");e["a"]={props:{autoMount:i["a"].bool.def(!0),autoDestroy:i["a"].bool.def(!0),visible:i["a"].bool,forceRender:i["a"].bool.def(!1),parent:i["a"].any,getComponent:i["a"].func.isRequired,getContainer:i["a"].func.isRequired,children:i["a"].func.isRequired},mounted:function(){this.autoMount&&this.renderComponent()},updated:function(){this.autoMount&&this.renderComponent()},beforeDestroy:function(){this.autoDestroy&&this.removeContainer()},methods:{removeContainer:function(){this.container&&(this._component&&this._component.$destroy(),this.container.parentNode.removeChild(this.container),this.container=null,this._component=null)},renderComponent:function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=arguments[1],t=this.visible,i=this.forceRender,r=this.getContainer,s=this.parent,c=this;if(t||s.$refs._component||i){var a=this.componentEl;this.container||(this.container=r(),a=document.createElement("div"),this.componentEl=a,this.container.appendChild(a)),this._component?this._component.comProps=n:this._component=new o["default"]({el:a,parent:c.parent,data:{comProps:n},mounted:function(){this.$nextTick(function(){e&&e.call(c)})},updated:function(){this.$nextTick(function(){e&&e.call(c)})},render:function(){return c.getComponent(this.comProps)}})}}},render:function(){return this.children({renderComponent:this.renderComponent,removeContainer:this.removeContainer})}}}}]);
//# sourceMappingURL=chunk-vendors~656bfb63.291dcc4c.js.map