(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-vendors~0786cf79"],{d994:function(e,t,n){"use strict";var a=n("92fa"),i=n.n(a),s=n("6042"),c=n.n(s),o=n("8e8e"),d=n.n(o),r=n("41b2"),h=n.n(r),u=n("4d91"),f=n("4d26"),l=n.n(f),p=n("daa3"),b=n("b488");t["a"]={name:"Checkbox",mixins:[b["a"]],inheritAttrs:!1,model:{prop:"checked",event:"change"},props:Object(p["r"])({prefixCls:u["a"].string,name:u["a"].string,id:u["a"].string,type:u["a"].string,defaultChecked:u["a"].oneOfType([u["a"].number,u["a"].bool]),checked:u["a"].oneOfType([u["a"].number,u["a"].bool]),disabled:u["a"].bool,tabIndex:u["a"].oneOfType([u["a"].string,u["a"].number]),readOnly:u["a"].bool,autoFocus:u["a"].bool,value:u["a"].any},{prefixCls:"rc-checkbox",type:"checkbox",defaultChecked:!1}),data:function(){var e=Object(p["q"])(this,"checked")?this.checked:this.defaultChecked;return{sChecked:e}},watch:{checked:function(e){this.sChecked=e}},mounted:function(){var e=this;this.$nextTick(function(){e.autoFocus&&e.$refs.input&&e.$refs.input.focus()})},methods:{focus:function(){this.$refs.input.focus()},blur:function(){this.$refs.input.blur()},handleChange:function(e){var t=Object(p["k"])(this);t.disabled||("checked"in t||(this.sChecked=e.target.checked),this.$forceUpdate(),this.__emit("change",{target:h()({},t,{checked:e.target.checked}),stopPropagation:function(){e.stopPropagation()},preventDefault:function(){e.preventDefault()},nativeEvent:h()({},e,{shiftKey:this.eventShiftKey})}),this.eventShiftKey=!1)},onClick:function(e){this.__emit("click",e),this.eventShiftKey=e.shiftKey}},render:function(){var e,t=arguments[0],n=Object(p["k"])(this),a=n.prefixCls,s=n.name,o=n.id,r=n.type,u=n.disabled,f=n.readOnly,b=n.tabIndex,k=n.autoFocus,y=n.value,v=d()(n,["prefixCls","name","id","type","disabled","readOnly","tabIndex","autoFocus","value"]),C=Object(p["f"])(this),g=Object.keys(h()({},v,C)).reduce(function(e,t){return"aria-"!==t.substr(0,5)&&"data-"!==t.substr(0,5)&&"role"!==t||(e[t]=v[t]),e},{}),m=this.sChecked,x=l()(a,(e={},c()(e,a+"-checked",m),c()(e,a+"-disabled",u),e));return t("span",{class:x},[t("input",i()([{attrs:{name:s,id:o,type:r,readOnly:f,disabled:u,tabIndex:b,autoFocus:k},class:a+"-input",domProps:{checked:!!m,value:y},ref:"input"},{attrs:g,on:h()({},this.$listeners,{change:this.handleChange,click:this.onClick})}])),t("span",{class:a+"-inner"})])}}}}]);
//# sourceMappingURL=chunk-vendors~0786cf79.1463a237.js.map