<template>
  <div>
    <el-card class="box-card" shadow="never">
      <el-row :gutter="20" style="padding: 10px">
        <el-card shadow="never" style="padding: 10px">
          <el-row :gutter="20">
            <el-col :span="20" :xs="24">
              <el-row :gutter="10">
                <el-col :span="7">
                  <el-input
                    v-model="queryInfo"
                    clearable
                    placeholder="请输入托盘编号"
                  >
                  </el-input>
                </el-col>
              </el-row>
            </el-col>
            <el-col :span="4" :xs="24" class="text-right">
              <el-button type="primary" @click="search()">查询</el-button>
            </el-col>
          </el-row>
        </el-card>
      </el-row>
    </el-card>
    <el-row :gutter="20" style="padding: 0 20px">
      <el-card shadow="never" style="padding: 10px">
        <el-row :gutter="10">
          <el-col :span="24" :xs="24">
            <el-row :gutter="10">
              <el-col :span="12" :offset="9">
                <el-col :span="24" class="panel-content-title"
                  >生产批次号 :xxx</el-col
                >
                <el-col :span="24" class="panel-content-title"
                  >托盘编号 :xxx</el-col
                >
                <el-col :span="24" class="panel-content-title"
                  >顺序号 :xxx</el-col
                >
                <el-col :span="24" class="panel-content-title"
                  >任务单号 :xxx</el-col
                >
                <el-col :span="24" class="panel-content-title"
                  >产品条码号 :xxx</el-col
                >
                <el-col :span="24" class="panel-content-title"
                  >产品物料编号 :xxx</el-col
                >
                <el-col :span="24" class="panel-content-title"
                  >等待时间 :xxx</el-col
                >
              </el-col>
            </el-row>
          </el-col>
        </el-row>
      </el-card>
    </el-row>
  </div>
</template>
<script>
export default {
  //托盘上线
  name: 'trayinformation',
  data() {
    return {
      queryInfo: '',
    }
  },
  methods: {
    handleDetail(index, row) {
      this.$router.push('/trayinformationDetail')
    },
    checkHistory() {
      this.$router.push('/trayinformationHistory')
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
.el-row {
  margin: 0 !important;
}
.panel-content-title {
  display: flex;
  color: #909399;
  flex-direction: column;
  justify-content: center;
  font-size: 35px;
  padding: 5px;
}
</style>