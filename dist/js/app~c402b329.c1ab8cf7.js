(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["app~c402b329"],{c6d4:function(e,t,n){"use strict";n("386d"),n("6b54"),n("6762"),n("2fdb"),n("28a5"),n("96cf");var i=n("3b8d"),a=n("d225"),s=(n("034b"),n("96c7")),l=n("290c"),r=n("da05"),o=n("bf80"),c=n("2b0e"),h=function e(t,n,i,s,l,r,o,c){Object(a["a"])(this,e),this.id=t,this.name=n,this.skills=i,this.about=s,this.location=l,this.availabilty=r,this.experience=o,this.portfolio=c},d=n("ce04");c["default"].use(d);var u=["Fulltime","Contract","Remote","Parttime"],p=["Fulltime","Contract","Remote","Parttime"],g=["1 year","2 years","3 years","4 years above"],f=["1 year","2 years","3 years","4 years above"];t["a"]={name:"talent",data:function(){return{visible:!1,devs:null,alldevs:null,search:"",profile:{},country:null,checkedList:p,indeterminate:!0,checkAll:!1,plainOptions:u,checkedList1:f,indeterminate1:!0,checkAll1:!1,mydevs:null,tags:[],dataSource:["react","angular","javascript"],plainOptions1:g,pStyle:{fontSize:"16px",color:"rgba(0,0,0,0.85)",lineHeight:"24px",display:"block",marginBottom:"16px"},pStyle2:{marginBottom:"24px"},listData:[],pagination:{onChange:function(e){return e},pageSize:3},actions:[{type:"star-o",text:"156"},{type:"like-o",text:"156"},{type:"message",text:"2"}]}},components:{ACol:r["b"],ARow:l["a"],Pageheader:s["a"]},mounted:function(){var e=Object(i["a"])(regeneratorRuntime.mark(function e(){var t,n,i,a,s,l,r,c,d,u;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,o["a"].devs();case 2:return this.devs=e.sent.data,e.next=5,o["a"].allusers();case 5:for(this.alldevs=e.sent.data,t=0;t<this.alldevs.length;t++)for(n=0;n<this.devs.length;n++)this.alldevs[t].id===this.devs[n].id&&(i=this.devs[n].skills.split(","),a=this.devs[n].id,s=this.alldevs[t].first_name[0].toUpperCase()+this.alldevs[t].last_name[0].toUpperCase(),l=i,r=this.devs[n].about,c=this.devs[n].country,d=this.devs[n].availabilty,u=new h(a,s,l,r,c,d),this.listData.push(u));case 7:case"end":return e.stop()}},e,this)}));function t(){return e.apply(this,arguments)}return t}(),methods:{navigateTo:function(e){this.$router.push(e)},onClose:function(){this.visible=!1},onChange:function(e){this.indeterminate=!!e.length&&e.length<u.length,this.checkAll=e.length===u.length},onCheckAllChange:function(e){Object.assign(this,{checkedList:e.target.checked?u:[],indeterminate:!1,checkAll:e.target.checked})},onChange1:function(e){this.indeterminate1=!!e.length&&e.length<g.length,this.checkAll1=e.length===g.length},onCheckAllChange1:function(e){Object.assign(this,{checkedList1:e.target.checked?g:[],indeterminate1:!1,checkAll1:e.target.checked})},filterOption:function(e,t){return t.componentOptions.children[0].text.toUpperCase().indexOf(e.toUpperCase())>=0}},computed:{filteredList:function(){var e=this;return this.listData.filter(function(t){return t.skills.toString().toLowerCase().includes(e.search.toLowerCase())})}}}}}]);
//# sourceMappingURL=app~c402b329.c1ab8cf7.js.map