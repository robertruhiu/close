(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["app~34d92494"],{"17d6":function(t,e,s){"use strict";var n=s("75fc"),i=(s("28a5"),s("96cf"),s("3b8d")),r=s("d225"),a=s("bf80"),o=s("688c"),c=s("da05"),u=s("290c"),h=s("66e3"),l=s("113c"),p=s("c1df"),d=s.n(p),b=s("2ee4"),f=(s("da93"),function t(e,s,n,i,a,o){Object(r["a"])(this,t),this.id=e,this.title=s,this.skills=n,this.applicants=i,this.test=a,this.interview=o});e["a"]={name:"index",data:function(){return{currentUserProfile:null,jobs:null,myjobs:[],visible:!1,job:{},inputVisible:!1,currentUser:{},inputValue:"",recommendationtags:["Django","Javascript","Python","Php","Postgres","Sql","Html","Css","bootstrap","React","Java","React Native","Redux","Flask ","Go","Expressjs","Vuejs","Angular","Ios","flutter","Ionic","Rails","Meteor","AI","Cybersecurity","Blockchain","Arduino","Spring","Bitcoin","Kotlin","Scala","Nativescript ","Android","Website","Mobile"],selectedTags:[]}},components:{ARow:u["a"],ACol:c["b"],Pageheader:h["a"],RecruiterSider:l["a"],FormWizard:b["FormWizard"],TabContent:b["TabContent"]},mounted:function(){var t=Object(i["a"])(regeneratorRuntime.mark(function t(){var e,s,n,i,r,c,u,h,l,p,d;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return e={headers:{Authorization:"JWT "+this.$store.state.token}},t.next=3,a["a"].currentuser(this.$store.state.user.pk,e);case 3:return this.currentUserProfile=t.sent.data,t.next=6,o["a"].myjobs(this.$store.state.user.pk,e);case 6:this.jobs=t.sent.data,s=0;case 8:if(!(s<2)){t.next=25;break}return t.next=11,o["a"].applicants(this.jobs[s].id,e);case 11:for(this.applicants=t.sent.data,n=0,i=0,r=0;r<this.applicants.length;r++)"test"==this.applicants[r].stage?n++:"interview"==this.applicants[r].stage&&i++;c=this.jobs[s].tech_stack.split(","),u=this.jobs[s].id,h=this.jobs[s].title,l=c,p=this.applicants.length,d=new f(u,h,l,p,n,i),this.myjobs.push(d);case 22:s++,t.next=8;break;case 25:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}(),methods:{moment:d.a,disabledDate:function(t){return t&&t<d()().endOf("day")},onCollapse:function(t,e){console.log(t,e)},onBreakpoint:function(t){console.log(t)},onComplete:function(){var t=Object(i["a"])(regeneratorRuntime.mark(function t(){var e,s=this;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:e={headers:{Authorization:"JWT "+this.$store.state.token}},o["a"].createjob(this.job,e).then(function(t){s.visible=!1,s.$router.push({name:"managejobs"})}).catch(function(t){s.visible=!1,s.$router.push({name:"recruiter"})});case 2:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}(),logout:function(){this.$store.dispatch("setToken",null),this.$store.dispatch("setUser",null),this.$store.dispatch("setisLoggedIn",!1),this.$store.dispatch("setUsertype",null),this.$store.dispatch("setUser_id",null),this.$router.push({name:"home"})},navigateTo:function(t){this.$router.push(t)},showDrawer:function(){var t=Object(i["a"])(regeneratorRuntime.mark(function t(){var e;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return e={headers:{Authorization:"JWT "+this.$store.state.token}},this.currentUser=this.$store.state.user.pk,this.job.posted_by=this.currentUser,t.next=5,a["a"].currentuser(this.$store.state.user.pk,e);case 5:this.currentUserProfile=t.sent.data,this.job.company=this.currentUserProfile.company,this.visible=!0;case 8:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}(),onClose:function(){this.visible=!1},showInput:function(){this.inputVisible=!0,this.$nextTick(function(){this.$refs.input.focus()})},handleInputChange:function(t){this.inputValue=t.target.value},handleInputConfirm:function(){var t=this.inputValue,e=this.tags;t&&-1===e.indexOf(t)&&(e=[].concat(Object(n["a"])(e),[t]));var s=e.join(", ");this.job.tech_stack=s,Object.assign(this,{tags:e,inputVisible:!1,inputValue:""})},handleChange:function(t,e){var s=this.selectedTags,i=e?[].concat(Object(n["a"])(s),[t]):s.filter(function(e){return e!==t});this.selectedTags=i;var r=this.selectedTags.join(", ");this.job.tech_stack=r}}}}}]);
//# sourceMappingURL=app~34d92494.27538e07.js.map