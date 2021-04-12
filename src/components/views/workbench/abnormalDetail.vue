<template>
  <div>
    <el-row class="page-header">
      <el-page-header @back="goBack" content="详情页面"> </el-page-header>
    </el-row>
    <!-- <el-row :gutter="20" style="padding: 10px">
      <el-card shadow="never">
        <el-row>
          <el-col :span="20" :xs="24">
            <el-row :gutter="20">
              <el-col :span="7" :xs="24">
                <el-input
                  v-model="queryInfo"
                  clearable
                  placeholder="请输入生产批次号"
                >
                </el-input>
              </el-col>
              <el-col :span="7" :xs="24">
                <el-select v-model="status" placeholder="请选择状态">
                  <el-option label="不良品" value="shanghai"></el-option>
                  <el-option label="报废" value="beijing"></el-option>
                </el-select>
              </el-col>
            </el-row>
          </el-col>
          <el-col :span="4" :xs="24" class="text-right">
            <el-button type="primary" @click="search()">查询</el-button>
          </el-col>
        </el-row>
      </el-card>
    </el-row> -->
    <el-row :gutter="20" class="page-tabs">
      <el-table :data="tableData" border stripe style="width: 100%">
        <el-table-column
          prop="PartMatCode"
          label="生产批次号"
        ></el-table-column>
        <el-table-column
          prop="PartMatDescription"
          label="顺序号"
        ></el-table-column>
        <el-table-column
          prop="PartMatDescription"
          label="部件条码"
        ></el-table-column>
        <el-table-column
          prop="PartMatDescription"
          label="状态"
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
  </div>
</template>
<script>
export default {
  //异常产品提报详情
  name: 'abnormalDetail',
  data() {
    return {
      queryInfo: '',
      status: '',
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
      this.$router.push('/abnormal')
    },
  },
}
</script>
<style  lang="less" scoped>
.page-header {
  padding: 30px;
}
.page-tabs {
  padding: 20px;
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
  color: #999;
  flex-direction: column;
  justify-content: center;
  font-size: 14px;
  padding: 5px;
}
.el-table {
  margin-top: 15px;
  font-size: 14px;
}
.el-pagination {
  padding-top: 20px;
}
</style>