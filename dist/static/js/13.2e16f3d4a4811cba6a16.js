webpackJsonp([13],{DhxD:function(e,t){},pi9Q:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var l={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("el-card",{staticClass:"box-card",attrs:{shadow:"never"}},[a("el-row",{staticStyle:{padding:"10px"},attrs:{gutter:20}},[a("el-card",{staticStyle:{padding:"10px"},attrs:{shadow:"never"}},[a("el-row",[a("el-col",{attrs:{span:16,xs:24,sm:20,md:20}},[a("el-row",{attrs:{gutter:20}},[a("el-col",{staticClass:"col-padd",attrs:{span:4,xs:24,sm:24,md:8,lg:4}},[a("el-upload",{staticClass:"upload-demo",attrs:{action:"https://jsonplaceholder.typicode.com/posts/","on-preview":e.handlePreview,"on-remove":e.handleRemove,"before-remove":e.beforeRemove,multiple:!1,limit:1,accept:".xlsx","on-exceed":e.handleExceed,"file-list":e.fileList}},[a("el-button",{attrs:{icon:"el-icon-plus",type:"primary"}},[e._v("添加工单")])],1)],1),e._v(" "),a("el-col",{staticClass:"col-padd",attrs:{span:7,xs:24,sm:24,md:8,lg:7}},[a("el-input",{attrs:{clearable:"",placeholder:"请输入生产批次号"},model:{value:e.queryInfo,callback:function(t){e.queryInfo=t},expression:"queryInfo"}})],1)],1)],1),e._v(" "),a("el-col",{staticClass:"text-right",attrs:{span:2}},[a("el-button",{attrs:{type:"primary"},on:{click:function(t){return e.search()}}},[e._v("查询")])],1),e._v(" "),a("el-col",{staticClass:"text-right",attrs:{span:2}},[a("el-button",{attrs:{type:"primary"},on:{click:function(t){return e.search()}}},[e._v("提交")])],1)],1)],1)],1),e._v(" "),"021"==e.parameterName?a("el-row",[a("el-table",{staticStyle:{width:"100%"},attrs:{data:e.tableData,border:"",stripe:""}},[a("el-table-column",{attrs:{prop:"RequestCode",label:"产线编号"}}),e._v(" "),a("el-table-column",{attrs:{prop:"LineCode",label:"托盘编号"}}),e._v(" "),a("el-table-column",{attrs:{prop:"OperationCode",label:"物料编号"}}),e._v(" "),a("el-table-column",{attrs:{prop:"OperationShortName",label:"物料描述"}}),e._v(" "),a("el-table-column",{attrs:{prop:"EventCode",label:"门扇尺寸-高"}}),e._v(" "),a("el-table-column",{attrs:{prop:"EventCode",label:"门扇尺寸-宽"}}),e._v(" "),a("el-table-column",{attrs:{prop:"EventCode",label:"门扇尺寸-厚"}}),e._v(" "),a("el-table-column",{attrs:{prop:"EventCode",label:"门扇款式"}}),e._v(" "),a("el-table-column",{attrs:{prop:"EventCode",label:"物料数量"}}),e._v(" "),a("el-table-column",{attrs:{label:"工艺信息"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-button",{attrs:{size:"mini"},on:{click:function(a){return e.handleDetail(t.$index,t.row)}}},[e._v("详情")])]}}],null,!1,2209823160)})],1),e._v(" "),a("el-row",[a("el-pagination",{attrs:{"current-page":1,"page-sizes":[10,20,30],"page-size":10,layout:"total, sizes, prev, pager, next, jumper",total:6},on:{"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange}})],1)],1):"029"==e.parameterName?a("el-row",[a("el-table",{staticStyle:{width:"100%"},attrs:{data:e.tableData,border:"",stripe:""}},[a("el-table-column",{attrs:{prop:"RequestCode",label:"产线编号"}}),e._v(" "),a("el-table-column",{attrs:{prop:"LineCode",label:"物料编号"}}),e._v(" "),a("el-table-column",{attrs:{prop:"OperationCode",label:"物料描述"}}),e._v(" "),a("el-table-column",{attrs:{prop:"OperationShortName",label:"材料"}}),e._v(" "),a("el-table-column",{attrs:{prop:"EventCode",label:"颜色"}}),e._v(" "),a("el-table-column",{attrs:{prop:"EventCode",label:"规格"}}),e._v(" "),a("el-table-column",{attrs:{prop:"EventCode",label:"投入物料数量"}}),e._v(" "),a("el-table-column",{attrs:{prop:"EventCode",label:"输出物料尺寸"}}),e._v(" "),a("el-table-column",{attrs:{label:"工艺信息"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-button",{attrs:{size:"mini"},on:{click:function(a){return e.handleDetail(t.$index,t.row)}}},[e._v("详情")])]}}])})],1),e._v(" "),a("el-row",[a("el-pagination",{attrs:{"current-page":1,"page-sizes":[10,20,30],"page-size":10,layout:"total, sizes, prev, pager, next, jumper",total:6},on:{"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange}})],1)],1):"011"==e.parameterName?a("el-row",[a("el-table",{staticStyle:{width:"100%"},attrs:{data:e.tableData,border:"",stripe:""}},[a("el-table-column",{attrs:{prop:"RequestCode",label:"物料序号"}}),e._v(" "),a("el-table-column",{attrs:{prop:"LineCode",label:"物料编号"}}),e._v(" "),a("el-table-column",{attrs:{prop:"OperationCode",label:"物料描述"}}),e._v(" "),a("el-table-column",{attrs:{prop:"OperationShortName",label:"材质"}}),e._v(" "),a("el-table-column",{attrs:{prop:"EventCode",label:"颜色"}}),e._v(" "),a("el-table-column",{attrs:{prop:"EventCode",label:"规格"}}),e._v(" "),a("el-table-column",{attrs:{prop:"EventCode",label:"上料口编号"}}),e._v(" "),a("el-table-column",{attrs:{prop:"EventCode",label:"投入物料的数量"}}),e._v(" "),a("el-table-column",{attrs:{prop:"EventCode",label:"封边材料"}}),e._v(" "),a("el-table-column",{attrs:{prop:"EventCode",label:"封边类型"}}),e._v(" "),a("el-table-column",{attrs:{prop:"EventCode",label:"开槽工艺"}})],1),e._v(" "),a("el-row",[a("el-pagination",{attrs:{"current-page":1,"page-sizes":[10,20,30],"page-size":10,layout:"total, sizes, prev, pager, next, jumper",total:6},on:{"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange}})],1)],1):"014"==e.parameterName?a("el-row",[a("el-table",{staticStyle:{width:"100%"},attrs:{data:e.tableData,border:"",stripe:""}},[a("el-table-column",{attrs:{prop:"RequestCode",label:"物料序号"}}),e._v(" "),a("el-table-column",{attrs:{prop:"LineCode",label:"物料编号"}}),e._v(" "),a("el-table-column",{attrs:{prop:"OperationCode",label:"物料描述"}}),e._v(" "),a("el-table-column",{attrs:{prop:"OperationShortName",label:"材质"}}),e._v(" "),a("el-table-column",{attrs:{prop:"EventCode",label:"颜色"}}),e._v(" "),a("el-table-column",{attrs:{prop:"EventCode",label:"规格"}}),e._v(" "),a("el-table-column",{attrs:{prop:"EventCode",label:"温度"}}),e._v(" "),a("el-table-column",{attrs:{prop:"EventCode",label:"投入物料的数量"}})],1),e._v(" "),a("el-row",[a("el-pagination",{attrs:{"current-page":1,"page-sizes":[10,20,30],"page-size":10,layout:"total, sizes, prev, pager, next, jumper",total:6},on:{"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange}})],1)],1):e._e()],1)],1)},staticRenderFns:[]};var r=a("VU/8")({name:"workOrder",data:function(){return{parameterName:"",queryInfo:"",State:"",fileList:[],tableData:[{RequestCode:"xxx1",LineCode:"xxx",OperationCode:"xxx",OperationShortName:"xxx",EventCode:"xxx"},{RequestCode:"xxx2",LineCode:"xxx",OperationCode:"xxx",OperationShortName:"xxx",EventCode:"xxx"},{RequestCode:"xxx3",LineCode:"xxx",OperationCode:"xxx",OperationShortName:"xxx",EventCode:"xxx"},{RequestCode:"xxx4",LineCode:"xxx",OperationCode:"xxx",OperationShortName:"xxx",EventCode:"xxx"},{RequestCode:"xxx5",LineCode:"xxx",OperationCode:"xxx",OperationShortName:"xxx",EventCode:"xxx"},{RequestCode:"xxx6",LineCode:"xxx",OperationCode:"xxx",OperationShortName:"xxx",EventCode:"xxx"}]}},created:function(){this.parameterName=this.$store.state.parameterName.parameterName},methods:{handleSizeChange:function(e){},handleCurrentChange:function(e){},handleRemove:function(e,t){},handleDetail:function(e,t){this.$router.push("/workOrderDetail")},handlePreview:function(e){},handleExceed:function(e,t){this.$message.warning("当前限制选择 3 个文件，本次选择了 "+e.length+" 个文件，共选择了 "+(e.length+t.length)+" 个文件")},beforeRemove:function(e,t){return this.$confirm("确定移除 "+e.name+"？")}}},l,!1,function(e){a("DhxD")},"data-v-67258eb9",null);t.default=r.exports}});
//# sourceMappingURL=13.2e16f3d4a4811cba6a16.js.map