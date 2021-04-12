<template>
  <div>
    <el-row :gutter="20" style="padding: 10px">
      <el-row class="ivu-card-body">
        <el-col class="demo-form">
          <el-form :model="formList" label-width="140px">
            <el-form-item label="用户名称 : ">
              <el-select v-model="formList.mode" placeholder="请选择">
                <el-option label="aa" value="1"></el-option>
                <el-option label="bb" value="2"></el-option>
                <el-option label="cc" value="3"></el-option>
                <el-option label="dd" value="4"></el-option>
                <el-option label="ee" value="5"></el-option>
                <el-option label="ff" value="6"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item>
              <el-button type="primary">上班打卡 / 下班打卡</el-button>
            </el-form-item>
          </el-form>
        </el-col>
      </el-row>
    </el-row>
  </div>
</template>
<script>
export default {
  //签到
  name: 'punchClock',
  data() {
    return {
      queryInfo: '',
      formList: {
        name: '',
        time: '',
      },
    }
  },
  methods: {
    dialogCancel() {
      this.$router.push('/basic')
    },
    dialogOk() {
      this.dialogVisible = false
    },
    handleClose(done) {
      return
    },
  },
}
</script>
<style  lang="less" scoped>
.el-table {
  margin-top: 15px;
  font-size: 14px;
}
.el-pagination {
  padding-top: 20px;
}
.text-right {
  text-align: right;
}
.ivu-card-body {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.demo-form {
  padding-top: 50px;
  width: 550px;
}
.el-row {
  margin: 0 !important;
}
</style>