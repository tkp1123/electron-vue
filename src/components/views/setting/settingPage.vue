<template>
  <div>
    <el-row :gutter="20" style="padding: 10px">
      <el-row class="ivu-card-body">
        <el-col class="demo-form">
          <el-form :model="formList" label-width="140px">
            <el-form-item label="工作模式 : ">
              <el-select v-model="formList.mode" placeholder="请选择">
                <el-option label="自动" value="1"></el-option>
                <el-option label="手动" value="2"></el-option>
                <el-option label="自建工单" value="3"></el-option>
                <el-option label="调机" value="4"></el-option>
                <el-option label="维修" value="5"></el-option>
                <el-option label="保养" value="6"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="使用时长上传设定 :">
              <el-select v-model="formList.time" placeholder="请选择">
                <el-option label="1小时" value="shanghai"></el-option>
                <el-option label="6小时" value="beijing"></el-option>
                <el-option label="12小时" value="beijing"></el-option>
                <el-option label="1天" value="beijing"></el-option>
                <el-option label="1周" value="beijing"></el-option>
                <el-option label="1个月" value="beijing"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="清空 : ">
              <el-button type="primary">清空</el-button>
            </el-form-item>
          </el-form>
        </el-col>
      </el-row>
    </el-row>
    <el-dialog
      title="请输入管理员密码"
      :visible.sync="dialogVisible"
      width="30%"
      :before-close="handleClose"
      :show-close="false"
      center
    >
      <el-form :model="form" label-width="80px">
        <el-input v-model="form.password" type="password"></el-input>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogCancel()">取 消</el-button>
        <el-button type="primary" @click="dialogOk()">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>
<script>
export default {
  //设置页面
  name: 'settingPage',
  data() {
    return {
      queryInfo: '',
      dialogVisible: true,
      form: {
        password: '',
      },
      formList: {
        mode: '',
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