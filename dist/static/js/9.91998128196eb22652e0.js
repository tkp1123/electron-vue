webpackJsonp([9],{GMEz:function(t,e){},nFVf:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=a("zKIC"),l={name:"bindTray",data:function(){return{parameterName:"",palletCode:"",EXIT_CODE:"",tableData:[],PartSerialNumber:[]}},created:function(){this.parameterName=this.$store.state.parameterName.parameterName},mounted:function(){var t="",e=this;document.onkeydown=function(){if(13!==event.keyCode){var a=event.key;"Shift"!==a&&(t+=a)}else{var r=t.split("@");"QRPART"==r[0]?(e.palletCode=r[1],e.dealData(r[1])):"QRTOLT"==r[0]?e.palletCode=r[1]:(e.palletCode=r[1],e.$notify({title:"提示",type:"error",message:"请扫描部件序列号码",position:"bottom-right",duration:"5000"})),t="",r=[]}}},methods:{bing_pallet_submit:function(){var t=this;""!=this.palletCode?0!=this.PartSerialNumber.length?Object(r.q)({PartSerialNumber:this.PartSerialNumber},{PalletCode:this.palletCode}).then(function(e){""==e.name?(t.tableData=[],t.PartSerialNumber=[],t.$notify({title:"提示",type:"success",message:"操作成功",position:"bottom-right",duration:"5000"})):t.$notify({title:"提示",type:"error",message:e.message,position:"bottom-right",duration:"5000"})}):this.$notify({title:"提示",type:"error",message:"未扫描生产条码号",position:"bottom-right",duration:"5000"}):this.$notify({title:"提示",type:"error",message:"未扫描托盘号",position:"bottom-right",duration:"5000"})},handleCancel:function(t,e){this.tableData.splice(t,1),this.PartSerialNumber.splice(t,1)},dealData:function(t){for(var e=!1,a=0;a<this.tableData.length;a++)t==this.tableData[a].sequence&&(e=!0);if(0==e||0==this.tableData.length){var r=t.split("MB");if(!r)return void this.$notify({title:"提示",type:"error",message:"扫码错误",position:"bottom-right",duration:"5000"});this.PartSerialNumber.push(r[1]),this.tableData.push({sequence:t})}}}},i={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("el-row",{staticStyle:{padding:"50px 100px"},attrs:{gutter:30}},[a("el-card",{attrs:{shadow:"never"}},[a("el-row",{staticStyle:{padding:"10px"},attrs:{gutter:10}},[a("el-card",{staticStyle:{padding:"10px"},attrs:{shadow:"never"}},[a("el-row",[a("el-col",{attrs:{span:18,xs:24}},[a("el-row",[a("el-col",{attrs:{span:12}},[t._v("\n                  托盘号:\n                  "),a("el-input",{staticStyle:{width:"200px"},attrs:{clearable:"",placeholder:"请输入托盘号/生产条码号"},model:{value:t.palletCode,callback:function(e){t.palletCode=e},expression:"palletCode"}})],1),t._v(" "),"029"==t.parameterName?a("el-col",{attrs:{span:12}},[t._v("\n                  数量:\n                  "),a("el-input",{staticStyle:{width:"200px"},attrs:{clearable:"",placeholder:"请输入数量"},model:{value:t.palletCode,callback:function(e){t.palletCode=e},expression:"palletCode"}})],1):t._e()],1)],1),t._v(" "),"029"==t.parameterName?a("el-col",{staticClass:"text-center",attrs:{span:2}},[a("el-button",{attrs:{type:"primary"},on:{click:function(e){return t.bing_pallet_submit()}}},[t._v("\n                确认\n              ")])],1):t._e(),t._v(" "),a("el-col",{staticClass:"text-center",attrs:{span:2}},[a("el-button",{attrs:{type:"primary"},on:{click:function(e){return t.bing_pallet_submit()}}},[t._v("\n                提交\n              ")])],1)],1)],1)],1),t._v(" "),a("el-row",[a("el-table",{staticStyle:{width:"100%"},attrs:{data:t.tableData,border:"",stripe:""}},[a("el-table-column",{attrs:{prop:"sequence",label:"顺序号"}}),t._v(" "),a("el-table-column",{attrs:{label:"操作"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-button",{attrs:{size:"mini",type:"primary"},on:{click:function(a){return t.handleCancel(e.$index,e.row)}}},[t._v("取消")])]}}])})],1)],1)],1)],1)],1)},staticRenderFns:[]};var n=a("VU/8")(l,i,!1,function(t){a("GMEz")},"data-v-7a1a4795",null);e.default=n.exports}});
//# sourceMappingURL=9.91998128196eb22652e0.js.map