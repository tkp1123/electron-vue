webpackJsonp([31],{"5YpY":function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=i("zKIC"),a={name:"electricMotor",data:function(){return{queryInfo:"",editDialogVisible:!1,tableData:[],total:0,currentPage:1,pageSize:10,formEdit:{xuhao:"",mingcheng:"",zhi:"",shuoming:""}}},mounted:function(){this.getMes_info()},methods:{getMes_info:function(){var t=this,e={sortProperties:this.queryInfo,pageIndex:this.currentPage,pageSize:this.pageSize,sortDirection:"ASC",parameterType:"MOTOR"};Object(n.v)(e).then(function(e){""==e.name&&(t.tableData=e.data.items,t.total=e.data.itemCount)})},getMes_info_search:function(){this.currentPage=1,this.getMes_info()},handleSizeChange:function(t){this.pageSize=t,this.currentPage=1},handleCurrentChange:function(t){this.currentPage=t},editList:function(t,e){this.formEdit.xuhao=e.xuhao,this.formEdit.mingcheng=e.mingcheng,this.formEdit.zhi=e.zhi,this.formEdit.shuoming=e.shuoming,this.editDialogVisible=!0},editCancel:function(){this.formEdit={xuhao:"",mingcheng:"",zhi:"",shuoming:""},this.editDialogVisible=!1},editOk:function(){this.formEdit={xuhao:"",mingcheng:"",zhi:"",shuoming:""},this.editDialogVisible=!1}}},o={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("el-card",{staticClass:"box-card",attrs:{shadow:"never"}},[i("el-row",{staticStyle:{padding:"10px"},attrs:{gutter:20}},[i("el-card",{staticStyle:{padding:"10px"},attrs:{shadow:"never"}},[i("el-row",[i("el-col",{attrs:{span:16,xs:24}},[i("el-row",[i("el-col",{attrs:{span:7}},[i("el-input",{attrs:{clearable:"",placeholder:"请输入序号"},model:{value:t.queryInfo,callback:function(e){t.queryInfo=e},expression:"queryInfo"}})],1)],1)],1),t._v(" "),i("el-col",{staticClass:"text-right",attrs:{span:8,xs:24}},[i("el-button",{attrs:{type:"primary"},on:{click:function(e){return t.getMes_info_search()}}},[t._v("\n              保存\n            ")]),t._v(" "),i("el-button",{attrs:{type:"primary"},on:{click:function(e){return t.getMes_info_search()}}},[t._v("\n              查询\n            ")])],1)],1)],1)],1),t._v(" "),i("el-row",[i("el-table",{staticStyle:{width:"100%"},attrs:{data:t.tableData,border:"",stripe:""}},[i("el-table-column",{attrs:{prop:"xuhao",label:"序号"}}),t._v(" "),i("el-table-column",{attrs:{prop:"mingcheng",label:"参数名称"}}),t._v(" "),i("el-table-column",{attrs:{prop:"zhi",label:"参数值"}}),t._v(" "),i("el-table-column",{attrs:{prop:"shuoming",label:"参数说明"}}),t._v(" "),i("el-table-column",{attrs:{label:"操作"},scopedSlots:t._u([{key:"default",fn:function(e){return[i("el-button",{attrs:{size:"mini",type:"warning"},on:{click:function(i){return t.editList(e.$index,e.row)}}},[t._v("编辑")])]}}])})],1),t._v(" "),i("el-row",[i("el-pagination",{attrs:{"current-page":t.currentPage,"page-sizes":[10,20,30],"page-size":t.pageSize,layout:"total, sizes, prev, pager, next, jumper",total:t.total},on:{"size-change":t.handleSizeChange,"current-change":t.handleCurrentChange}})],1)],1)],1),t._v(" "),i("el-dialog",{attrs:{title:"编辑参数",visible:t.editDialogVisible,width:"50%","destroy-on-close":""},on:{"update:visible":function(e){t.editDialogVisible=e}}},[i("el-form",{attrs:{model:t.formEdit,"label-width":"80px"}},[i("el-form-item",{attrs:{label:"序号",prop:"name"}},[i("el-input",{attrs:{disabled:!0},model:{value:t.formEdit.xuhao,callback:function(e){t.$set(t.formEdit,"xuhao",e)},expression:"formEdit.xuhao"}})],1),t._v(" "),i("el-form-item",{attrs:{label:"参数名称",prop:"email"}},[i("el-input",{attrs:{type:"email"},model:{value:t.formEdit.mingcheng,callback:function(e){t.$set(t.formEdit,"mingcheng",e)},expression:"formEdit.mingcheng"}})],1),t._v(" "),i("el-form-item",{attrs:{label:"参数值",prop:"mobile"}},[i("el-input",{attrs:{type:"phone"},model:{value:t.formEdit.zhi,callback:function(e){t.$set(t.formEdit,"zhi",e)},expression:"formEdit.zhi"}})],1),t._v(" "),i("el-form-item",{attrs:{label:"参数说明",prop:"address"}},[i("el-input",{attrs:{type:"text"},model:{value:t.formEdit.shuoming,callback:function(e){t.$set(t.formEdit,"shuoming",e)},expression:"formEdit.shuoming"}})],1)],1),t._v(" "),i("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[i("el-button",{on:{click:function(e){return t.editCancel()}}},[t._v("取 消")]),t._v(" "),i("el-button",{attrs:{type:"primary"},on:{click:function(e){return t.editOk()}}},[t._v("确 定")])],1)],1)],1)},staticRenderFns:[]};var r=i("VU/8")(a,o,!1,function(t){i("TOUr")},"data-v-2d19a199",null);e.default=r.exports},TOUr:function(t,e){}});
//# sourceMappingURL=31.2428e3e6adbc2f1cfb1b.js.map