(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["app~0ddabf23"],{d183:function(t,s,e){"use strict";e("28a5"),e("96cf");var i=e("3b8d"),n=e("d225"),a=e("bf80"),r=e("688c"),o=e("da05"),h=e("290c"),c=e("113c"),u=e("66e3"),p=function t(s,e,i,a,r,o){Object(n["a"])(this,t),this.id=s,this.title=e,this.skills=i,this.applicants=a,this.test=r,this.interview=o};s["a"]={name:"Managejob",data:function(){return{currentUserProfile:null,jobs:null,myjobs:[],applicants:null}},components:{ARow:h["a"],ACol:o["b"],RecruiterSider:c["a"],Pageheader:u["a"]},mounted:function(){var t=Object(i["a"])(regeneratorRuntime.mark(function t(){var s,e,i,n,o,h,c,u,l,d,b;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return s={headers:{Authorization:"JWT "+this.$store.state.token}},t.next=3,a["a"].currentuser(this.$store.state.user.pk,s);case 3:return this.currentUserProfile=t.sent.data,t.next=6,r["a"].myjobs(this.$store.state.user.pk,s);case 6:this.jobs=t.sent.data,e=0;case 8:if(!(e<this.jobs.length)){t.next=25;break}return t.next=11,r["a"].applicants(this.jobs[e].id,s);case 11:for(this.applicants=t.sent.data,i=0,n=0,o=0;o<this.applicants.length;o++)"test"==this.applicants[o].stage?i++:"interview"==this.applicants[o].stage&&n++;h=this.jobs[e].tech_stack.split(","),c=this.jobs[e].id,u=this.jobs[e].title,l=h,d=this.applicants.length,b=new p(c,u,l,d,i,n),this.myjobs.push(b);case 22:e++,t.next=8;break;case 25:case"end":return t.stop()}},t,this)}));function s(){return t.apply(this,arguments)}return s}(),methods:{logout:function(){this.$store.dispatch("setToken",null),this.$store.dispatch("setUser",null),this.$store.dispatch("setisLoggedIn",!1),this.$store.dispatch("setUsertype",null),this.$store.dispatch("setUser_id",null),this.$router.push({name:"home"})},navigateTo:function(t){this.$router.push(t)}}}}}]);
//# sourceMappingURL=app~0ddabf23.72ac02fd.js.map