<template>
  <div>
    <el-row class="page-header">
      <el-page-header @back="goBack" content="新建工单"></el-page-header>
    </el-row>
    <el-row class="header-style">
      <div class="ivu-card-head">
        <i class="iconfont icon-gongzuotai"></i>
        新建工单
      </div>
      <div class="ivu-card-extra">
        <label style="color: rgb(255, 59, 48)">*</label>
        为必填
      </div>
    </el-row>
    <el-row class="ivu-card-body">
      <el-col class="demo-form">
        <el-form :model="form" label-width="80px" :rules="rules">
          <el-form-item label="长" prop="length">
            <el-input v-model="form.length" type="text"></el-input>
          </el-form-item>
          <el-form-item label="宽" prop="width">
            <el-input v-model="form.width" type="text"></el-input>
          </el-form-item>
          <el-form-item label="高" prop="height">
            <el-input v-model="form.height" type="text"></el-input>
          </el-form-item>
          <el-form-item label="颜色">
            <el-select v-model="form.color" placeholder="请选择颜色">
              <el-option label="颜色一" value="shanghai"></el-option>
              <el-option label="颜色二" value="beijing"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="总量" prop="num">
            <el-input v-model="form.num" type="text"></el-input>
          </el-form-item>
          <el-form-item label="品类型号">
            <el-select v-model="form.model" placeholder="请选择品类型号">
              <el-option label="型号一" value="shanghai"></el-option>
              <el-option label="型号二" value="beijing"></el-option>
            </el-select>
          </el-form-item>
        </el-form>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="12" class="row-button-left">
        <el-button>返回</el-button>
      </el-col>
      <el-col :span="12" class="row-button-right">
        <el-button type="primary">提交</el-button>
      </el-col>
    </el-row>
  </div>
</template>
<script>
export default {
  //添加工单
  name: 'addWorkOrder',
  data() {
    return {
      form: {
        length: '',
        width: '',
        height: '',
        color: '',
        num: '',
        model: '',
      },
      rules: {
        length: [
          {
            required: true,
            message: '请输入长',
            trigger: 'blur',
          },
        ],
        width: [
          {
            required: true,
            message: '请输入宽',
            trigger: 'blur',
          },
        ],
        height: [
          {
            required: true,
            message: '请输入高',
            trigger: 'blur',
          },
        ],
        color: [
          {
            required: true,
            message: '请选择颜色',
            trigger: 'blur',
          },
        ],
        num: [
          {
            required: true,
            message: '请输入总量',
            trigger: 'blur',
          },
        ],
        model: [
          {
            required: true,
            message: '请选择品类型号',
            trigger: 'blur',
          },
        ],
      },
    }
  },
  methods: {
    goBack() {
      this.$router.push('/workOrder')
    },
  },
}
</script>
<style  lang="less" scoped>
.header-style {
  padding: 0 40px;
}
.ivu-card-head {
  border-bottom: 1px solid #e8eaec;
  padding: 14px 16px;
  line-height: 1;
}
.ivu-card-extra {
  position: absolute;
  right: 55px;
  top: 20px;
  font-size: 12px;
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
.row-button-right {
  padding: 10px 40px;
  text-align: left;
}
.row-button-left {
  padding: 10px 40px;
  text-align: right;
}
.page-header {
  padding: 30px;
}
</style>