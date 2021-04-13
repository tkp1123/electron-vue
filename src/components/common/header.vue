<template>
  <!-- 头部  -->
  <div class="navbar">
    <el-row :gutter="10">
      <el-col :span="4" class="text-left">
        <i
          :class="getCollapse ? 'el-icon-s-unfold' : 'el-icon-s-fold'"
          style="padding-left: 20px"
          @click="pointClick"
        ></i>
      </el-col>
      <el-col :span="16" class="text-right">
        <el-row>
          <el-col>工作模式 : 自动</el-col>
        </el-row>
      </el-col>
      <el-col :span="4" class="text-right-dropdown">
        <el-dropdown>
          <span class="el-dropdown-link user-span">
            <img src="@/assets/touxiang.jpg" class="head-portrait" />
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>
              <i class="icon iconfont icon-user"></i>
              <span class="icon-span">个人信息</span>
            </el-dropdown-item>
            <el-dropdown-item>
              <i class="icon iconfont icon-edit-square"></i>
              <span class="icon-span">修改资料</span>
            </el-dropdown-item>
            <el-dropdown-item divided @click.native="loginout">
              <i class="icon iconfont icon-poweroff"></i>
              <span class="icon-span">退出</span>
            </el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </el-col>
    </el-row>
  </div>
</template>
<script>
export default {
  computed: {
    getCollapse() {
      return this.$store.state.isCollapse
    },
  },
  data() {
    return {}
  },
  methods: {
    loginout() {
      var that = this
      this.$confirm('此操作将退出登录, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning',
      }).then(function () {
        window.localStorage.clear()
        that.$router.push('/login')
        that.$message({
          type: 'success',
          message: '退出成功!',
        })
      })
    },
    pointClick() {
      this.$store.commit('collapse')
    },
  },
}
</script>
<style lang="less" scoped>
.el-header {
  background-color: #fff;
  display: flex;
  justify-content: space-between;
  padding-left: 0;
  align-items: center;
  color: #515a6e;
  width: 100%;
  font-size: 20px;
}
.img {
  width: 45px;
  height: 45px;
}
.iconfont {
  margin-right: 10px;
  font-size: 25px;
}
.toggle_button {
  background-color: #4a5064;
  font-size: 10px;
  line-height: 24px;
  color: #fff;
  text-align: center;
  letter-spacing: 0.2em;
  cursor: pointer;
}
.head-portrait {
  width: 45px;
  border-radius: 50%;
  margin: 10px 10px 0 0;
  float: right;
}
.navbar {
  background-color: #fff;
  padding-left: 0;
  align-items: center;
  color: #515a6e;
  width: 100%;
  border-bottom: 1px solid #0000001a;
}
.el-row {
  margin: 0 !important;
}
.text-right {
  text-align: right;
  line-height: 65px;
}
.text-right-dropdown {
  text-align: right;
}
.text-left {
  text-align: left;
  line-height: 65px;
}
</style>