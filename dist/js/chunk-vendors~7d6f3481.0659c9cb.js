(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-vendors~7d6f3481"],{"1fff":function(e,s,t){"use strict";t.d(s,"a",function(){return d});var n=t("92fa"),r=t.n(n),i=t("6042"),o=t.n(i),c=t("4d91"),u=t("531c"),a={store:u["a"],rowKey:c["a"].oneOfType([c["a"].string,c["a"].number]),prefixCls:c["a"].string};function d(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"tr",s={name:"BodyRow",props:a,data:function(){var e=this.store.getState(),s=e.selectedRowKeys;return{selected:s.indexOf(this.rowKey)>=0}},mounted:function(){this.subscribe()},beforeDestroy:function(){this.unsubscribe&&this.unsubscribe()},methods:{subscribe:function(){var e=this,s=this.store,t=this.rowKey;this.unsubscribe=s.subscribe(function(){var s=e.store.getState(),n=s.selectedRowKeys,r=n.indexOf(t)>=0;r!==e.selected&&(e.selected=r)})}},render:function(){var s=arguments[0],t=o()({},this.prefixCls+"-row-selected",this.selected);return s(e,r()([{class:t},{on:this.$listeners}]),[this.$slots["default"]])}};return s}}}]);
//# sourceMappingURL=chunk-vendors~7d6f3481.0659c9cb.js.map