(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-vendors~d285f63f"],{b081:function(a,e,t){"use strict";var n=t("92fa"),i=t.n(n),r=t("6042"),s=t.n(r),o=t("e834"),b=t.n(o),f=t("4d91"),c=t("b488"),d=t("daa3"),l=t("d9a5");function u(){}e["a"]={name:"TabBarTabsNode",mixins:[c["a"]],props:{activeKey:f["a"].oneOfType([f["a"].string,f["a"].number]),panels:f["a"].any.def([]),prefixCls:f["a"].string.def(""),tabBarGutter:f["a"].any.def(null),onTabClick:f["a"].func,saveRef:f["a"].func.def(u),getRef:f["a"].func.def(u),tabBarPosition:f["a"].string},render:function(){var a=this,e=arguments[0],t=this.$props,n=t.panels,r=t.activeKey,o=t.prefixCls,f=t.tabBarGutter,c=t.saveRef,u=t.tabBarPosition,v=[];return n.forEach(function(t,p){if(t){var h=Object(d["k"])(t),m=t.key,y=r===m?o+"-tab-active":"";y+=" "+o+"-tab";var k={on:{}},g=h.disabled||""===h.disabled;g?y+=" "+o+"-tab-disabled":k.on.click=function(){a.__emit("tabClick",m)};var T=[];r===m&&T.push({name:"ant-ref",value:c("activeTab")});var w=Object(d["h"])(t,"tab"),B=f&&p===n.length-1?0:f;B="number"===typeof B?B+"px":B;var C=s()({},Object(l["h"])(u)?"marginBottom":"marginRight",B);b()(void 0!==w,"There must be `tab` property or slot on children of Tabs."),v.push(e("div",i()([{attrs:{role:"tab","aria-disabled":g?"true":"false","aria-selected":r===m?"true":"false"}},k,{class:y,key:m,style:C},{directives:T}]),[w]))}}),e("div",{directives:[{name:"ant-ref",value:this.saveRef("navTabsContainer")}]},[v])}}}}]);
//# sourceMappingURL=chunk-vendors~d285f63f.3288c565.js.map