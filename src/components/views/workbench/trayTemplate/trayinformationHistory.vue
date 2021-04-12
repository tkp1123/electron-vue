<template>
  <div>
    <el-row class="page-header">
      <el-page-header @back="goBack" content="详情页面"></el-page-header>
    </el-row>
    <el-row class="page-table">
      <el-card class="box-card" shadow="never">
        <el-row :gutter="20">
          <el-table :data="tableData" border stripe style="width: 100%">
            <el-table-column
              prop="PartMatCode"
              label="请求编号"
            ></el-table-column>
            <el-table-column
              prop="PartMatDescription"
              label="产线编号"
            ></el-table-column>
            <el-table-column
              prop="PartsQuantity"
              label="工序编号"
            ></el-table-column>
            <el-table-column
              prop="ProductionBatchCode"
              label="工序短名称"
            ></el-table-column>
            <el-table-column
              prop="RequestTime"
              label="事件码"
            ></el-table-column>
            <el-table-column
              prop="RequestTime"
              label="托盘号"
            ></el-table-column>
            <el-table-column
              prop="RequestTime"
              label="上料口编号"
            ></el-table-column>
            <el-table-column
              prop="RequestTime"
              label="当前在产的生产批次号"
            ></el-table-column>
            <el-table-column
              prop="RequestTime"
              label="请求（操作）时间"
            ></el-table-column>
          </el-table>
          <el-row>
            <el-pagination
              @size-change="handleSizeChange"
              @current-change="handleCurrentChange"
              :current-page="1"
              :page-sizes="[10, 20, 30]"
              :page-size="10"
              layout="total, sizes, prev, pager, next, jumper"
              :total="6"
            ></el-pagination>
          </el-row>
        </el-row>
      </el-card>
    </el-row>
  </div>
</template>
<script>
export default {
  //托盘上线历史页面
  name: 'trayinformationHistory',
  data() {
    return {
      tableData: [
        {
          PartMatCode: 'xxx1',
          PartMatDescription: 'xxx',
          PartsQuantity: 'xxx',
          ProductionBatchCode: 'xxx',
          RequestTime: 'xxx',
        },
        {
          PartMatCode: 'xxx2',
          PartMatDescription: 'xxx',
          PartsQuantity: 'xxx',
          ProductionBatchCode: 'xxx',
          RequestTime: 'xxx',
        },
        {
          PartMatCode: 'xxx3',
          PartMatDescription: 'xxx',
          PartsQuantity: 'xxx',
          ProductionBatchCode: 'xxx',
          RequestTime: 'xxx',
        },
        {
          PartMatCode: 'xxx4',
          PartMatDescription: 'xxx',
          PartsQuantity: 'xxx',
          ProductionBatchCode: 'xxx',
          RequestTime: 'xxx',
        },
        {
          PartMatCode: 'xxx5',
          PartMatDescription: 'xxx',
          PartsQuantity: 'xxx',
          ProductionBatchCode: 'xxx',
          RequestTime: 'xxx',
        },
        {
          PartMatCode: 'xxx6',
          PartMatDescription: 'xxx',
          PartsQuantity: 'xxx',
          ProductionBatchCode: 'xxx',
          RequestTime: 'xxx',
        },
      ],
    }
  },
  methods: {
    handleSizeChange(val) {},
    handleCurrentChange(val) {},
    goBack() {
      this.$router.push('/trayinformation')
    },
  },
}
</script>
<style  lang="less" scoped>
.page-header {
  padding: 30px;
}
.page-table {
  padding: 0 30px;
}
.el-row {
  margin: 0 !important;
}
.el-table {
  margin-top: 15px;
  font-size: 14px;
}
.el-pagination {
  padding-top: 20px;
}
</style>