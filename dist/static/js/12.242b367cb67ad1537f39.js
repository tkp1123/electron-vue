webpackJsonp([12],{"7rGe":function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=s("mvHQ"),o=s.n(r),a=s("zKIC"),i={name:"login",data:function(){return{form:{userName:"root",password:"123456"},rules:{userName:[{required:!0,message:"请输入用户名",trigger:"blur"},{min:3,max:10,message:"长度在 3 到 10 个字符",trigger:"blur"}],password:[{required:!0,message:"请输入密码",trigger:"blur"},{min:3,max:10,message:"长度在 3 到 10 个字符",trigger:"blur"}]}}},mounted:function(){},methods:{submitForm:function(t){var e=this;this.$refs[t].validate(function(t){if(!t)return e.$message.error("出错了");Object(a.u)(e.form).then(function(t){console.log(t),""==t.name&&(e.$store.commit("user/SET_TOKEN",t.data.accessToken),e.getRole())})})},getRole:function(){var t=this;Object(a.C)().then(function(e){""==e.name?(t.$store.commit("user/SET_ROLE",o()(e.data)),t.$router.push("/home")):t.$store.commit("user/SET_ROLE",[])})},resetForm:function(t){this.$refs[t].resetFields()}}},n={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"login-container"},[s("div",{staticClass:"login-box"},[t._m(0),t._v(" "),s("el-form",{ref:"form",staticClass:"login_form",attrs:{"label-width":"0px",model:t.form,rules:t.rules}},[s("el-form-item",{attrs:{prop:"userName"}},[s("el-input",{attrs:{"prefix-icon":"iconfont icongerenzhongxin"},model:{value:t.form.userName,callback:function(e){t.$set(t.form,"userName",e)},expression:"form.userName"}})],1),t._v(" "),s("el-form-item",{attrs:{prop:"password"}},[s("el-input",{attrs:{"prefix-icon":"iconfont iconmima",type:"password"},model:{value:t.form.password,callback:function(e){t.$set(t.form,"password",e)},expression:"form.password"}})],1),t._v(" "),s("div",{staticClass:"btns"},[s("el-button",{staticClass:"btns_button",attrs:{type:"primary",size:"medium",round:""},on:{click:function(e){return t.submitForm("form")}}},[t._v("登 录")])],1)],1)],1),t._v(" "),t._m(1)])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"login-top"},[e("span",[this._v("后台管理系统登录")]),this._v(" "),e("span",{staticClass:"bg1"}),this._v(" "),e("span",{staticClass:"bg2"})])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"footer"},[this._v("\n    ©版权所有 2014-2018 tkp"),e("span",{staticClass:"padding-5"},[this._v("|")]),e("a",{attrs:{target:"_blank",href:"https://github.com/tkp1123"}},[this._v("粤ICP备88888888号")])])}]};var m=s("VU/8")(i,n,!1,function(t){s("abjE")},"data-v-67d7eb89",null);e.default=m.exports},abjE:function(t,e){}});
//# sourceMappingURL=12.242b367cb67ad1537f39.js.map