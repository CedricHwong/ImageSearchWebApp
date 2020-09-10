(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-bbecfa4c"],{"28a7":function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"app-container"},[a("div",{staticClass:"filter-container",staticStyle:{"margin-left":"15px"}},[a("span",{staticClass:"title"},[t._v("类目ID：")]),a("el-input",{staticClass:"filter-item",attrs:{clearable:"",placeholder:"请输入内容"},model:{value:t.listQuery.id,callback:function(e){t.$set(t.listQuery,"id",e)},expression:"listQuery.id"}}),a("span",{staticClass:"title",staticStyle:{"margin-left":"24px"}},[t._v("类目名称：")]),a("el-input",{staticClass:"filter-item",attrs:{clearable:"",placeholder:"请输入内容"},model:{value:t.listQuery.supplierContent,callback:function(e){t.$set(t.listQuery,"supplierContent",e)},expression:"listQuery.supplierContent"}}),a("div",{staticClass:"filter-btns"},[a("el-button",{staticClass:"filter-btn",attrs:{icon:"el-icon-refresh"},on:{click:t.handleReset}},[t._v("重置")]),a("el-button",{staticClass:"filter-btn",attrs:{type:"primary",icon:"el-icon-search"},on:{click:t.handleFilter}},[t._v("查询")]),a("el-button",{staticClass:"filter-btn",attrs:{type:"primary",icon:"el-icon-plus"},on:{click:t.handleAdd}},[t._v("添加")])],1)],1),a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.listLoading,expression:"listLoading"}],staticStyle:{width:"98%",margin:"0 auto"},attrs:{data:t.list,size:"small","element-loading-text":"正在查询中。。。",border:"",fit:"","highlight-current-row":"","header-cell-class-name":"table-header","cell-class-name":"table-cell"}},[a("el-table-column",{attrs:{align:"center",label:"ID",prop:"id"}}),a("el-table-column",{attrs:{align:"center",label:"类目名称",prop:"categoryName"}}),a("el-table-column",{attrs:{align:"center","min-width":"100",label:"级别",prop:"level"}}),a("el-table-column",{attrs:{align:"center","min-width":"100",label:"数量单位",prop:"quantityUnit"}}),a("el-table-column",{attrs:{align:"center",label:"操作",width:"200","class-name":"small-padding fixed-width"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-button",{attrs:{type:"text",size:"medium"},on:{click:function(a){return t.handleEdit(e.row)}}},[t._v("编辑")]),a("el-button",{attrs:{type:"text",size:"medium"},on:{click:function(a){return t.handleDelete(e.row)}}},[t._v("删除")])]}}])})],1),a("el-dialog",{attrs:{title:t.textMap[t.dialogStatus],visible:t.dialogFormVisible},on:{"update:visible":function(e){t.dialogFormVisible=e}}},[a("el-form",{ref:"dataForm",staticStyle:{width:"500px","margin-left":"50px"},attrs:{rules:t.rules,model:t.dataForm,"status-icon":"","label-position":"left","label-width":"100px"}},[a("el-form-item",{attrs:{label:"商品分类名称",prop:"hotelName"}},[a("el-input",{model:{value:t.dataForm.categoryName,callback:function(e){t.$set(t.dataForm,"categoryName",e)},expression:"dataForm.categoryName"}})],1),a("el-form-item",{attrs:{label:"商品单位",prop:"telPhone"}},[a("el-input",{model:{value:t.dataForm.goodsUnit,callback:function(e){t.$set(t.dataForm,"goodsUnit",e)},expression:"dataForm.goodsUnit"}})],1),a("el-form-item",{attrs:{label:"所属分类",prop:"userName"}},[a("el-select",{staticClass:"filter-item",attrs:{placeholder:"请选择分类"},model:{value:t.listQuery.belongCategory,callback:function(e){t.$set(t.listQuery,"belongCategory",e)},expression:"listQuery.belongCategory"}},t._l(t.listQuery.categorys,(function(t){return a("el-option",{key:t.id,attrs:{label:t.name,value:t.id}})})),1)],1)],1),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(e){t.dialogFormVisible=!1}}},[t._v("取消")]),"add"==t.dialogStatus?a("el-button",{attrs:{type:"primary"},on:{click:t.addData}},[t._v("确定")]):a("el-button",{attrs:{type:"primary",loading:t.submitLoading},on:{click:t.updateData}},[t._v("确定")])],1)],1),a("router-view")],1)},l=[],o=[{id:"55555",categoryName:"酒店用品",level:"一级",quantityUnit:"条"}],r={data:function(){return{listQuery:{id:"",supplierContent:"",categorys:[{id:"0",name:"一级分类"},{id:"1",name:"二级分类"},{id:"2",name:"三级分类"}],belongCategory:""},submitLoading:!1,listLoading:!1,list:o,dialogFormVisible:!1,dialogStatus:"",textMap:{update:"编辑",create:"添加"},rules:{categoryName:[{required:!0,message:"商品分类名称不能为空",trigger:"blur"}],goodsUnit:[{required:!0,message:"商品不能为空",trigger:"blur"}],belongCategory:[{required:!0,message:"所属分类不能为空",trigger:"blur"}]},dataForm:{id:void 0,categoryName:"",goodsUnit:"",belongCategory:""}}},methods:{handleEdit:function(t){var e=this;console.log("row->",t),this.dialogFormVisible=!0,this.dataForm={id:t.id,categoryName:t.categoryName,goodsUnit:t.quantityUnit,belongCategory:this.listQuery.belongCategory},this.dialogStatus="update",console.log(this.dataForm),this.$nextTick((function(){e.$refs["dataForm"].clearValidate()}))},handleDelete:function(){},handleReset:function(){this.list=[]},handleFilter:function(){},resetForm:function(){this.dataForm={id:void 0,categoryName:"",goodsUnit:"",belongCategory:""}},handleAdd:function(){var t=this;this.dialogFormVisible=!0,this.resetForm(),this.dialogStatus="add",this.$nextTick((function(){t.$refs["dataForm"].clearValidate()}))},addData:function(){var t=this;this.$refs["dataForm"].validate((function(e){if(e){var a={categoryName:t.dataForm.categoryName,goodsUnit:t.dataForm.goodsUnit,belongCategory:t.dataForm.belongCategory};console.log("addData->params->",a),t.dialogFormVisible=!1}}))},updateData:function(){var t=this;this.$refs["dataForm"].validate((function(e){if(e){var a=t.dataForm.id,i={id:a,categoryName:t.dataForm.categoryName,goodsUnit:t.dataForm.goodsUnit,belongCategory:t.dataForm.belongCategory};console.log("updateData->params->",i)}})),this.dialogFormVisible=!1}}},n=r,s=(a("e7011"),a("4187"),a("2877")),d=Object(s["a"])(n,i,l,!1,null,"9d1fc3ac",null);e["default"]=d.exports},4187:function(t,e,a){"use strict";var i=a("50da"),l=a.n(i);l.a},"50da":function(t,e,a){},c193:function(t,e,a){},e7011:function(t,e,a){"use strict";var i=a("c193"),l=a.n(i);l.a}}]);