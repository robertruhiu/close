(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-vendors~d322da17"],{ebe7:function(e,t,i){"use strict";var n=i("41b2"),s=i.n(n),l=i("c449"),a=i.n(l),r=i("4d91"),o=i("da30"),c=i("f43a"),u=i.n(c),p=i("3e91"),f=i("7b05"),h=i("b488"),v=i("daa3");t["a"]={name:"DropdownMenu",mixins:[h["a"]],props:{ariaId:r["a"].string,defaultActiveFirstOption:r["a"].bool,value:r["a"].any,dropdownMenuStyle:r["a"].object,multiple:r["a"].bool,prefixCls:r["a"].string,menuItems:r["a"].any,inputValue:r["a"].string,visible:r["a"].bool,backfillValue:r["a"].any,firstActiveValue:r["a"].string,menuItemSelectedIcon:r["a"].any},watch:{visible:function(e){e||(this.lastVisible=e)}},created:function(){this.rafInstance={cancel:function(){return null}},this.lastInputValue=this.$props.inputValue,this.lastVisible=!1},mounted:function(){var e=this;this.$nextTick(function(){e.scrollActiveItemToView()}),this.lastVisible=this.$props.visible},updated:function(){var e=this,t=this.$props;!this.prevVisible&&t.visible&&this.$nextTick(function(){e.scrollActiveItemToView()}),this.lastVisible=t.visible,this.lastInputValue=t.inputValue,this.prevVisible=this.visible},beforeDestroy:function(){this.rafInstance&&this.rafInstance.cancel&&this.rafInstance.cancel()},methods:{scrollActiveItemToView:function(){var e=this,t=this.firstActiveItem&&this.firstActiveItem.$el,i=this.$props,n=i.value,s=i.visible,l=i.firstActiveValue;if(t&&s){var r={onlyScrollIfNeeded:!0};n&&0!==n.length||!l||(r.alignWithTop=!0),this.rafInstance=a()(function(){u()(t,e.$refs.menuRef.$el,r)})}},renderMenu:function(){var e=this,t=this.$createElement,i=this.$props,n=i.menuItems,l=i.defaultActiveFirstOption,a=i.value,r=i.prefixCls,c=i.multiple,u=i.inputValue,h=i.firstActiveValue,d=i.dropdownMenuStyle,m=i.backfillValue,b=i.visible,I=Object(v["h"])(this,"menuItemSelectedIcon"),V=this.$listeners,y=V.menuDeselect,w=V.menuSelect,$=V.popupScroll;if(n&&n.length){var A=Object(p["j"])(n,a),g={props:{multiple:c,itemIcon:c?I:null,selectedKeys:A,prefixCls:r+"-menu"},on:{},style:d,ref:"menuRef",attrs:{role:"listbox"}};$&&(g.on.scroll=$),c?(g.on.deselect=y,g.on.select=w):g.on.click=w;var k={},x=n,O=l;if(A.length||h){i.visible&&!this.lastVisible?k.activeKey=A[0]||h:b||(A[0]&&(O=!1),k.activeKey=void 0);var S=!1,j=function(t){return!S&&-1!==A.indexOf(t.key)||!S&&!A.length&&-1!==h.indexOf(t.key)?(S=!0,Object(f["a"])(t,{directives:[{name:"ant-ref",value:function(t){e.firstActiveItem=t}}]})):t};x=n.map(function(e){if(Object(v["m"])(e).isMenuItemGroup){var t=e.componentOptions.children.map(j);return Object(f["a"])(e,{children:t})}return j(e)})}else this.firstActiveItem=null;var M=a&&a[a.length-1];return u===this.lastInputValue||M&&M===m||(k.activeKey=""),g.props=s()({},k,g.props,{defaultActiveFirst:O}),t(o["a"],g,[x])}return null}},render:function(){var e=arguments[0],t=this.renderMenu(),i=this.$listeners,n=i.popupFocus,s=i.popupScroll;return t?e("div",{style:{overflow:"auto",transform:"translateZ(0)"},attrs:{id:this.$props.ariaId,tabIndex:"-1"},on:{focus:n,mousedown:p["q"],scroll:s},ref:"menuContainer"},[t]):null}}}}]);
//# sourceMappingURL=chunk-vendors~d322da17.63359d95.js.map