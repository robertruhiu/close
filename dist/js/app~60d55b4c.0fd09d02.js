(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["app~60d55b4c"],{"199c":function(t,e,s){"use strict";s("96cf");var n=s("3b8d"),r=s("bf80");e["a"]={name:"app",mounted:function(){var t=Object(n["a"])(regeneratorRuntime.mark(function t(){var e,s=this;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:e={headers:{Authorization:"JWT "+this.$store.state.token}},r["a"].authenticated(this.$store.state.user.pk,e).then().catch(function(t){s.$store.dispatch("setToken",null),s.$store.dispatch("setUser",null),s.$store.dispatch("setisLoggedIn",!1),s.$store.dispatch("setUsertype",null),s.$store.dispatch("setUser_id",null),s.$router.push({name:"home"})});case 2:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}()}}}]);
//# sourceMappingURL=app~60d55b4c.0fd09d02.js.map