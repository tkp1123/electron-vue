<template>
  <div>
    <el-card class="box-card" shadow="never">
      <el-row :gutter="20" style="padding: 10px">
        <el-card shadow="never" style="padding: 10px">
          <el-row>
            <el-col :span="20" :xs="24">
              <el-row>
                <el-col :span="10">
                  <el-date-picker
                    v-model="value1"
                    type="daterange"
                    range-separator="至"
                    start-placeholder="起始日期"
                    end-placeholder="截至日期"
                  >
                  </el-date-picker>
                </el-col>
              </el-row>
            </el-col>
            <el-col :span="4" :xs="24" class="text-right">
              <el-button type="primary" @click="search()">查询</el-button>
            </el-col>
          </el-row>
        </el-card>
      </el-row>
      <el-row>
        <el-table :data="tableData" border stripe style="width: 100%">
          <el-table-column prop="tiaoma" label="产品条码号"></el-table-column>
          <el-table-column
            prop="bianhao"
            label="产品物料编号"
          ></el-table-column>
          <el-table-column prop="jinshijian" label="进时间"></el-table-column>
          <el-table-column prop="chushijian" label="出时间"></el-table-column>
          <el-table-column prop="tongguo" label="通过时长"></el-table-column>
          <el-table-column prop="mingcheng" label="设备名称"></el-table-column>
          <el-table-column prop="gongxu" label="工序"></el-table-column>
        </el-table>
      </el-row>
    </el-card>
  </div>
</template>
<script>
export default {
  //进出时间
  name: 'InAndOut',
  data() {
    return {
      value1: '',
      tableData: [
        {
          tiaoma: '20211415',
          bianhao: 'MB100010002',
          jinshijian: '2021-4-25 16:31:37',
          chushijian: '2021-4-25 16:31:58',
          tongguo: '1',
          mingcheng: '清洗机',
          gongxu: '清洗',
        },
        {
          tiaoma: '20211415',
          bianhao: 'MB100010002',
          jinshijian: '2021-4-25 16:31:37',
          chushijian: '2021-4-25 16:31:58',
          tongguo: '1',
          mingcheng: '清洗机',
          gongxu: '清洗',
        },
        {
          tiaoma: '20211415',
          bianhao: 'MB100010002',
          jinshijian: '2021-4-25 16:31:37',
          chushijian: '2021-4-25 16:31:58',
          tongguo: '1',
          mingcheng: '溶胶机',
          gongxu: '溶胶',
        },
        {
          tiaoma: '20211415',
          bianhao: 'MB100010002',
          jinshijian: '2021-4-25 16:31:37',
          chushijian: '2021-4-25 16:31:58',
          tongguo: '1',
          mingcheng: '龙门架',
          gongxu: '运送',
        },
      ],
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
</style>