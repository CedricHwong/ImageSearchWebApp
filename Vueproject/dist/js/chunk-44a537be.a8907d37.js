(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-44a537be"],{"0116":function(e,t,a){"use strict";var l=a("4c75"),n=a.n(l);n.a},"4c75":function(e,t,a){},"70cb":function(e,t,a){},"8e773":function(e,t,a){},be3a:function(e,t,a){"use strict";var l=a("8e773"),n=a.n(l);n.a},c54c:function(e,t,a){"use strict";a.r(t);var l=function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("div",{staticClass:"app-container"},[l("div",{staticClass:"filter-container"},[l("span",{staticClass:"title"},[e._v("订单号：")]),l("el-input",{staticClass:"filter-item",attrs:{clearable:"",placeholder:"请输入内容"},model:{value:e.listQuery.purchasing,callback:function(t){e.$set(e.listQuery,"purchasing",t)},expression:"listQuery.purchasing"}}),l("span",{staticClass:"title",staticStyle:{"margin-left":"24px"}},[e._v("采购单号：")]),l("el-input",{staticClass:"filter-item",attrs:{clearable:"",placeholder:"请输入内容"},model:{value:e.listQuery.purchasing,callback:function(t){e.$set(e.listQuery,"purchasing",t)},expression:"listQuery.purchasing"}}),l("span",{staticClass:"title",staticStyle:{"margin-left":"24px"}},[e._v("筛选：")]),l("el-select",{staticClass:"filter-item",attrs:{placeholder:"全部"},model:{value:e.listQuery.status,callback:function(t){e.$set(e.listQuery,"status",t)},expression:"listQuery.status"}},e._l(e.examineStatus,(function(e){return l("el-option",{key:e.id,attrs:{label:e.name,value:e.id}})})),1),l("div",{staticClass:"filter-btns"},[l("el-button",{staticClass:"filter-btn",attrs:{icon:"el-icon-refresh"},on:{click:e.handleReset}},[e._v("重置")]),l("el-button",{staticClass:"filter-btn",attrs:{type:"primary",icon:"el-icon-search"},on:{click:e.handleFilter}},[e._v("查询")])],1)],1),l("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.listLoading,expression:"listLoading"}],attrs:{data:e.list,size:"small","element-loading-text":"正在查询中。。。",border:"",fit:"","highlight-current-row":"","header-cell-class-name":"table-header","cell-class-name":"table-cell"}},[l("el-table-column",{attrs:{align:"center",label:"订单号",prop:"id"}}),l("el-table-column",{attrs:{align:"center",label:"采购酒店",prop:"purchasing"}}),l("el-table-column",{attrs:{align:"center","min-width":"100",label:"采购物品",prop:"creditCode"}}),l("el-table-column",{attrs:{align:"center","min-width":"100",label:"采购数量",prop:"number"}}),l("el-table-column",{attrs:{align:"center","min-width":"100",label:"总价 (元)",prop:"total"}}),l("el-table-column",{attrs:{align:"center","min-width":"100",label:"加价",prop:"increase"}}),l("el-table-column",{attrs:{align:"center","min-width":"100",label:"供应商",prop:"supplier"}}),l("el-table-column",{attrs:{align:"center","min-width":"100",label:"状态",prop:"status"}}),l("el-table-column",{attrs:{align:"center","min-width":"100",label:"采购单号",prop:"orderNumber"}}),l("el-table-column",{attrs:{align:"center",label:"操作",width:"80","class-name":"small-padding fixed-width"},scopedSlots:e._u([{key:"default",fn:function(t){return[l("el-button",{attrs:{type:"text"},on:{click:function(a){return e.handleLook(t.row)}}},[e._v("查看")])]}}])})],1),l("c-drawer",{attrs:{drawer:e.drawer,title:"订单状态：待付款——未提交支付凭证"},on:{handleClose:function(t){e.drawer=!1}}},[l("el-form",[l("div",{staticClass:"detail-from-bt"},[e._v("订单详情")]),e._l(e.detailForm,(function(t,a){return l("el-form-item",{key:a,attrs:{label:t.name,"label-width":e.formLabelWidth}},[l("el-input",{attrs:{autocomplete:"off",disabled:""},model:{value:t.value,callback:function(a){e.$set(t,"value",a)},expression:"item.value"}})],1)})),l("div",{staticClass:"detail-from-bt"},[e._v("支付凭证")]),e._l(e.detailFromVoucher,(function(t,a){return l("el-form-item",{key:a,attrs:{label:t.name,"label-width":e.formLabelWidth}},[l("el-input",{attrs:{autocomplete:"off",disabled:""},model:{value:t.value,callback:function(a){e.$set(t,"value",a)},expression:"item.value"}})],1)})),l("img",{staticClass:"receipt",attrs:{src:a("cc3c"),alt:""}}),l("div",{staticClass:"detail-from-bt"},[e._v("发票信息")]),e._l(e.detailFormInfo,(function(t,a){return l("el-form-item",{key:a,attrs:{label:t.name,"label-width":e.formLabelWidth}},[l("el-input",{attrs:{autocomplete:"off",disabled:""},model:{value:t.value,callback:function(a){e.$set(t,"value",a)},expression:"item.value"}})],1)})),l("div",{staticClass:"demo-drawer__footer"},[l("el-button",{attrs:{type:"danger",plain:""},on:{click:e.handleNo}},[e._v("驳回")]),l("el-button",{attrs:{type:"primary"},on:{click:e.handleAgree}},[e._v("通过")]),l("el-button",{attrs:{plain:""},on:{click:e.handleNo}},[e._v("返回")]),l("el-button",{attrs:{type:"primary"},on:{click:e.handleAgree}},[e._v("签订合同")])],1)],2)],1)],1)},n=[],i=a("ea2c"),r=[{id:"55555",purchasing:"吉林省吉宝利酒店厨房设备有限公司",creditCode:"001",number:"100",total:"2000.00",increase:"1.7%",supplier:"蒙牛乳业集团",status:"通过",orderNumber:"77777"}],s=[{name:"采购单号",value:"111"},{name:"采购酒店:",value:"111"},{name:"采购商品:",value:"111"},{name:"采购数量:",value:"111"},{name:"核单价:",value:"111"},{name:"商品总价:",value:"111"},{name:"收货人:",value:"111"},{name:"收货手机:",value:"111"},{name:"收货地址:",value:"111"},{name:"发货地:",value:"111"},{name:"订单号:",value:"111"},{name:"创建时间:",value:"111"},{name:"需付款:",value:"111"}],c=[{name:"状态:",value:"111"},{name:"发票类型:",value:"111"},{name:"税点:",value:"111"}],o=[{name:"付款账号:",value:"111"},{name:"付款银行:",value:"111"},{name:"开户行:",value:"111"}],u={name:"orderManage",components:{CDrawer:i["a"]},data:function(){return{search1:[],search2:[],search3:[],list:r,detailForm:s,detailFormInfo:c,detailFromVoucher:o,total:0,listLoading:!1,listQuery:{page:1,limit:20,purchasing:"",status:"",provinceId:"",cityId:"",areaId:""},examineStatus:[{id:0,name:"待付款"},{id:1,name:"已付款"}],drawer:!1,form:{name:"",region:"",date1:"",date2:"",delivery:!1,type:[],resource:"",desc:""},formLabelWidth:"120px"}},computed:{},watch:{"listQuery.provinceId":function(e,t){this.listQuery.cityId="",this.search2=[],this.listQuery.areaId="",this.search3=[]}},created:function(){this.getList()},methods:{handleAgree:function(){var e=this;this.$confirm("确定审核通过吗？","审核提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){e.drawer=!1})).catch((function(){}))},handleNo:function(){var e=this;this.$prompt("请输入审核驳回理由","审核驳回",{confirmButtonText:"确定",cancelButtonText:"取消",inputPlaceholder:"原因"}).then((function(t){t.value;e.drawer=!1})).catch((function(){}))},handleClose:function(e){e()},handleReset:function(){this.listQuery={page:1,limit:20,purchasing:"",provinceId:"",cityId:"",areaId:""},this.getList(),this.list=[]},handleChange:function(){},getList:function(){this.listLoading=!1},handleFilter:function(){this.listQuery.page=1,this.getList()},handleLook:function(){this.drawer=!0}}},d=u,m=(a("0116"),a("be3a"),a("2877")),p=Object(m["a"])(d,l,n,!1,null,"4b6d4b80",null);t["default"]=p.exports},cc3c:function(e,t,a){e.exports=a.p+"img/image_receipt.c2a68533.png"},ea2c:function(e,t,a){"use strict";var l=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("el-drawer",{staticClass:"drawer",attrs:{title:e.title,visible:e.drawer,direction:e.direction,"before-close":e.handleClose,size:e.size,modal:!1},on:{"update:visible":function(t){e.drawer=t}}},[a("div",{staticClass:"drawer-content"},[a("div",{staticClass:"drawer-box"},[e._t("default")],2),e.foot?a("div",{staticClass:"drawer-footer"},[e._t("foot")],2):e._e()])])},n=[],i={name:"c-drawer",props:{drawer:{type:Boolean,default:function(){return!1}},title:{type:String,default:""},foot:{type:Boolean,default:function(){return!1}},size:{type:String,default:"60%"},direction:{type:String,default:"rtl"}},data:function(){return{}},methods:{handleClose:function(){this.$emit("handleClose",!1)},handleSubmit:function(){this.$emit("handleSubmit")}}},r=i,s=(a("f6d3"),a("2877")),c=Object(s["a"])(r,l,n,!1,null,null,null);t["a"]=c.exports},f6d3:function(e,t,a){"use strict";var l=a("70cb"),n=a.n(l);n.a}}]);