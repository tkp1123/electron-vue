webpackJsonp([33],{"8BXP":function(t,e){},c4HX:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=a("zKIC"),r=a("hCKk"),n={name:"punchClock",data:function(){return{name:"",signStatus:"上班打卡 / 下班打卡",userList:[],tableData:[],total:0,currentPage:1,pageSize:10}},mounted:function(){this.get_api_users_all()},methods:{get_api_users_all:function(){var t=this;Object(s.j)().then(function(e){""==e.name&&(t.userList=e.data)})},get_api_users_user_log:function(t){var e=this,a={pageIndex:this.currentPage,pageSize:this.pageSize,sortDirection:"DESC",userName:t};Object(s.o)(a).then(function(t){""==t.name&&(e.tableData=t.data.items,e.total=t.data.itemCount)})},handleSizeChange:function(t){this.pageSize=t,this.currentPage=1,this.get_api_users_user_log(this.name)},handleCurrentChange:function(t){this.currentPage=t,this.get_api_users_user_log(this.name)},changeItem:function(t){this.get_api_users_user_log(t);for(var e="",a=0;a<this.userList.length;a++)t==this.userList[a].userName&&(e=this.userList[a].userStatus);switch(e){case"OFFLINE":this.signStatus="上班打卡";break;case"ONLINE":this.signStatus="下班打卡";break;default:this.signStatus="上班打卡 / 下班打卡"}},formatDate:function(t,e,a){return a?r.a.fullFormatter(new Date(a)):""},formatStatus:function(t,e,a){return a?"OFFLINE"==a?"下班打卡":"ONLINE"==a?"上班打卡":void 0:""},changeStatus:function(){for(var t=this,e="",a=0;a<this.userList.length;a++)this.name==this.userList[a].userName&&(e=this.userList[a].id);Object(s.G)(e).then(function(e){""==e.name?(t.$notify({title:"提示",type:"success",message:"打卡成功",position:"bottom-right",duration:"5000"}),t.get_api_users_user_log(t.name)):t.$notify({title:"提示",type:"error",message:"打卡失败",position:"bottom-right",duration:"5000"})})}}},i={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("el-card",{staticClass:"box-card",attrs:{shadow:"never"}},[a("el-row",{attrs:{gutter:20}},[a("el-card",{staticStyle:{padding:"10px"},attrs:{shadow:"never"}},[a("el-row",{attrs:{gutter:20}},[a("el-col",{attrs:{span:18,xs:24}},[a("el-row",[a("el-col",{attrs:{span:7}},[a("el-select",{attrs:{filterable:"",placeholder:"请选择用户名称"},on:{change:t.changeItem},model:{value:t.name,callback:function(e){t.name=e},expression:"name"}},t._l(t.userList,function(t){return a("el-option",{key:t.id,attrs:{label:t.userName,value:t.userName}})}),1)],1)],1)],1),t._v(" "),a("el-col",{staticClass:"text-right",attrs:{span:6,xs:24},nativeOn:{click:function(e){return t.changeStatus(e)}}},[a("el-button",{attrs:{type:"primary"}},[t._v(t._s(t.signStatus))])],1)],1)],1)],1),t._v(" "),a("el-row",[a("el-table",{staticStyle:{width:"100%"},attrs:{data:t.tableData,border:"",stripe:"","header-cell-style":{"text-align":"center"}}},[a("el-table-column",{attrs:{prop:"userName",label:"用户名"}}),t._v(" "),a("el-table-column",{attrs:{prop:"statusDate",label:"打卡时间",formatter:t.formatDate}}),t._v(" "),a("el-table-column",{attrs:{prop:"userStatus",label:"打卡状态",formatter:t.formatStatus}})],1),t._v(" "),a("el-row",[a("el-pagination",{attrs:{"current-page":t.currentPage,"page-sizes":[10,20,30],"page-size":t.pageSize,layout:"total, sizes, prev, pager, next, jumper",total:t.total},on:{"size-change":t.handleSizeChange,"current-change":t.handleCurrentChange}})],1)],1)],1)],1)},staticRenderFns:[]};var u=a("VU/8")(n,i,!1,function(t){a("8BXP")},"data-v-1f2e79dc",null);e.default=u.exports}});
//# sourceMappingURL=33.d4a33d20ef1adf315247.js.map