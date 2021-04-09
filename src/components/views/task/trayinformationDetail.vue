<template>
  <div>
    <el-row class="page-header">
      <el-page-header @back="goBack" content="详情页面"></el-page-header>
    </el-row>
    <el-row :gutter="10">
      <el-col :span="12" :xs="24" :sm="24" :md="24" :lg="24" :xl="12">
        <el-card shadow="never" style="margin: 30px">
          <div slot="header">
            <div class="dp-fx">
              <div class="dp-fx-title">部件集合</div>
            </div>
          </div>
          <el-row :gutter="10">
            <el-col :span="12" :xs="24">
              <el-row>
                <el-col :span="12" :xs="24" class="panel-content-title"
                  >事件码 :xxx</el-col
                >
                <el-col :span="12" :xs="24" class="panel-content-title"
                  >工序编号 :xxx</el-col
                >
              </el-row>
              <el-row>
                <el-col :span="12" :xs="24" class="panel-content-title"
                  >描述信息 :xxx</el-col
                >
                <el-col :span="12" :xs="24" class="panel-content-title"
                  >工序短名称 :xxx</el-col
                >
              </el-row>
              <el-row>
                <el-col :span="12" :xs="24" class="panel-content-title"
                  >产线编号 :xxx</el-col
                >
              </el-row>
            </el-col>
          </el-row>
        </el-card>
      </el-col>
    </el-row>
    <el-row class="page-table">
      <el-card class="box-card" shadow="never">
        <el-row>
          <el-table :data="tableData" border stripe style="width: 100%">
            <el-table-column
              prop="PartMatCode"
              label="顺序号"
            ></el-table-column>
            <el-table-column
              prop="PartMatDescription"
              label="生产批次号"
            ></el-table-column>
            <el-table-column
              prop="PartsQuantity"
              label="任务单号"
            ></el-table-column>
            <el-table-column
              prop="ProductionBatchCode"
              label="产品条码号"
            ></el-table-column>
            <el-table-column
              prop="RequestTime"
              label="产品物料编号"
            ></el-table-column>
            <el-table-column
              prop="RequestTime"
              label="产品数量"
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
  //托盘上线详情
  name: 'trayinformationDetail',
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
.dp-fx {
  display: flex;
}
.dp-fx-title {
  font-size: 16px;
  padding: 5px 0 0 5px;
}
.panel-content-title {
  display: flex;
  color: #999;
  flex-direction: column;
  justify-content: center;
  font-size: 14px;
  padding: 5px;
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