(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["app~32669d9b"],{"0b0a":function(t,e,i){"use strict";i("28a5"),i("96cf");var s=i("3b8d"),r=i("d225"),n=i("bf80"),o=i("113c"),a=i("688c"),c=i("125f"),h=i("290c"),l=i("da05"),p=i("1226"),u=function t(e,i,s,n,o,a,c){Object(r["a"])(this,t),this.key=e,this.title=i,this.description=s,this.company=n,this.duration=a,this.tags=c,this.location=o},d=function t(e,i,s,n,o){Object(r["a"])(this,t),this.key=e,this.title=i,this.description=s,this.demo=n,this.tags=o};e["a"]={name:"mycandidatesprofile",data:function(){return{currentUserProfile:{},currentUser:{},skilltags:[],visible:!1,inputVisible:!1,inputValue:"",application:{},experienceslist:[],experiences:[],portoliolist:[],portfolio:[],recentprojects:[],recruiter:null}},components:{ACol:l["b"],ARow:h["a"],RecruiterSider:o["a"],MyCandidatesHeader:c["a"]},mounted:function(){var t=Object(s["a"])(regeneratorRuntime.mark(function t(){var e,i,s,r,o,c,h,l,f,m,x,g,$,b,k,w,v;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return e={headers:{Authorization:"JWT "+this.$store.state.token}},t.next=3,n["a"].retrieveuser(this.$route.params.candidateId,e);case 3:return this.currentUser=t.sent.data,t.next=6,n["a"].currentuser(this.$route.params.candidateId,e);case 6:return this.currentUserProfile=t.sent.data,this.skilltags=this.currentUserProfile.skills.split(","),t.next=10,n["a"].portfolio(this.$route.params.candidateId,e);case 10:return this.portfoliolist=t.sent.data,t.next=13,n["a"].experience(this.$route.params.candidateId,e);case 13:return this.experienceslist=t.sent.data,this.recruiter=this.$store.state.user.pk,t.next=17,a["a"].retrievecandidate(this.$route.params.applicationId,e);case 17:for(this.application=t.sent.data,i=0;i<this.portfoliolist.length;i++)s=this.portfoliolist[i],r=this.portfoliolist[i].title,o=this.portfoliolist[i].description,c=this.portfoliolist[i].demo_link,h=this.portfoliolist[i].tech_tags.split(","),l=new d(s,r,o,c,h),this.portfolio.push(l);for(f=0;f<this.experienceslist.length;f++)m=this.experienceslist[f],x=this.experienceslist[f].title,g=this.experienceslist[f].description,$=this.experienceslist[f].company,b=this.experienceslist[f].location,k=this.experienceslist[f].duration,w=this.experienceslist[f].tech_tags.split(","),v=new u(m,x,g,$,b,k,w),this.experiences.push(v);return t.next=22,p["a"].myrecentprojects(this.$store.state.user.pk,e);case 22:this.recentprojects=t.sent.data;case 23:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}(),methods:{onChange:function(t){this.test=t},logout:function(){this.$store.dispatch("setToken",null),this.$store.dispatch("setUser",null),this.$store.dispatch("setisLoggedIn",!1),this.$store.dispatch("setUsertype",null),this.$store.dispatch("setUser_id",null),this.$router.push({name:"home"})},navigateTo:function(t){this.$router.push(t)},showModal:function(){this.visible=!0},handleOk:function(){this.visible=!1}}}}}]);
//# sourceMappingURL=app~32669d9b.30bbcfa6.js.map