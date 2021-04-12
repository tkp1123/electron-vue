<template>
  <div>
    <el-row :gutter="20" style="padding: 20px">
      <el-card shadow="never" style="padding: 10px">
        <el-row>
          <el-col :span="20" :xs="24">
            <el-row>
              <el-col :span="7">
                <el-input
                  v-model="queryInfo"
                  clearable
                  placeholder="请输入序号"
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
    <!-- <el-row>
        <el-table :data="tableData" border stripe style="width: 100%">
          <el-table-column prop="RequestCode" label="批次号"></el-table-column>
          <el-table-column prop="LineCode" label="工序编号"></el-table-column>
          <el-table-column
            prop="OperationCode"
            label="工序短名称"
          ></el-table-column>
          <el-table-column
            prop="OperationShortName"
            label="部件顺序号"
          ></el-table-column>
          <el-table-column
            prop="OperationShortName"
            label="部件唯一码"
          ></el-table-column>
          <el-table-column
            prop="OperationShortName"
            label="门扇款式"
          ></el-table-column>
          <el-table-column
            prop="OperationShortName"
            label="颜色"
          ></el-table-column>
        </el-table>
      </el-row> -->
    <el-row :gutter="20" style="padding: 0 20px">
      <el-card shadow="never" style="padding: 10px">
        <el-row :gutter="10">
          <el-col :span="24" :xs="24">
            <el-row :gutter="10">
              <el-col :span="12" :offset="9">
                <el-col :span="24" class="panel-content-title"
                  >批次号 :xxx</el-col
                >
                <!-- <el-col :span="24" class="panel-content-title"
                  >工序编号 :xxx</el-col
                >
                <el-col :span="24" class="panel-content-title"
                  >工序短名称 :xxx</el-col
                > -->
                <el-col :span="24" class="panel-content-title"
                  >部件顺序号 :xxx</el-col
                >
                <el-col :span="24" class="panel-content-title"
                  >部件唯一码 :xxx</el-col
                >
                <el-col :span="24" class="panel-content-title"
                  >门扇款式 :xxx</el-col
                >
                <el-col :span="24" class="panel-content-title"
                  >颜色 :xxx</el-col
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
  //贴皮工序
  name: 'stickingSkin',
  data() {
    return {
      queryInfo: '',
    }
  },
  methods: {},
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
.dp-fx {
  display: flex;
}
.dp-fx-title {
  font-size: 16px;
  padding: 5px 0 0 5px;
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