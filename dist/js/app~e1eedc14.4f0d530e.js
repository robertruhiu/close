(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["app~e1eedc14"],{"23f5":function(e,r,t){"use strict";t.d(r,"a",function(){return a}),t.d(r,"b",function(){return n});var a=function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("a-layout",{staticStyle:{"min-height":"100vh"},attrs:{id:"components-layout-demo-side"}},[t("RecruiterSider"),t("a-layout",{style:{marginLeft:"200px",backgroundColor:"#F8FAFB"}},[t("a-layout-content",[t("Pageheader"),t("div",{style:{padding:"6px 20px",background:"#fff",minHeight:"75vh",maxWidth:"72rem",marginTop:"2%",marginLeft:"1%",marginRight:"1%"}},[t("a-form",{attrs:{form:e.form}},[t("a-row",{attrs:{gutter:16}},[t("a-col",{attrs:{span:12}},[t("a-row",{attrs:{gutter:16}},[t("a-col",{attrs:{span:24}},[t("a-form-item",{attrs:{label:"Company name","label-col":{span:24},"wrapper-col":{span:24}}},[t("a-input",{model:{value:e.currentUserProfile.company,callback:function(r){e.$set(e.currentUserProfile,"company",r)},expression:"currentUserProfile.company"}})],1)],1),t("a-col",{attrs:{span:24}},[t("a-form-item",{attrs:{label:"Company website link","label-col":{span:24},"wrapper-col":{span:24}}},[t("a-input",{model:{value:e.currentUserProfile.company_url,callback:function(r){e.$set(e.currentUserProfile,"company_url",r)},expression:"currentUserProfile.company_url"}})],1)],1),t("a-col",{attrs:{span:24}},[t("a-form-item",{attrs:{"label-col":{span:24},"wrapper-col":{span:24}}},[t("span",{attrs:{slot:"label"},slot:"label"},[e._v("Country : "+e._s(e.currentUserProfile.country))]),t("country-select",{staticClass:"ant-input",model:{value:e.currentUserProfile.country,callback:function(r){e.$set(e.currentUserProfile,"country",r)},expression:"currentUserProfile.country"}})],1)],1),t("a-col",{attrs:{span:24}},[t("a-form-item",{attrs:{label:"Company industry sector","label-col":{span:24},"wrapper-col":{span:24}}},[t("a-input",{model:{value:e.currentUserProfile.industry,callback:function(r){e.$set(e.currentUserProfile,"industry",r)},expression:"currentUserProfile.industry"}})],1)],1),t("a-col",{attrs:{span:24}},[t("a-form-item",{attrs:{label:"Your role at the Company","label-col":{span:24},"wrapper-col":{span:24}}},[t("a-input",{attrs:{placeholder:"Recruiter,CTO,HR,CEO etc"},model:{value:e.currentUserProfile.job_role,callback:function(r){e.$set(e.currentUserProfile,"job_role",r)},expression:"currentUserProfile.job_role"}})],1)],1)],1)],1),t("a-col",{staticStyle:{padding:"2% 4%"},attrs:{span:12}},[t("a-col",{attrs:{span:24}},[t("a-form-item",[t("p",[e._v("Pick skills to enable candidate\n                                        recommendations")]),t("div",[e._l(e.recommendationtags,function(r){return[t("a-checkable-tag",{key:r,staticStyle:{"border-color":"blue","font-size":"14px"},attrs:{checked:e.selectedTags.indexOf(r)>-1},on:{change:function(t){return e.handleChange(r,t)}}},[e._v("\n                                                "+e._s(r)+"\n                                            ")])]})],2)])],1)],1)],1),t("div",{staticStyle:{"text-align":"center"}},[t("a-button",{staticStyle:{width:"15rem"},attrs:{type:"primary"},on:{click:e.Save}},[e._v("Save")])],1)],1)],1)],1)],1)],1)},n=[]}}]);
//# sourceMappingURL=app~e1eedc14.4f0d530e.js.map