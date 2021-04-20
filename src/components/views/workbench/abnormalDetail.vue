<template>
  <div>
    <el-row class="page-header">
      <el-page-header @back="goBack" content="详情页面"> </el-page-header>
    </el-row>
    <el-row :gutter="20" class="page-tabs">
      <el-table :data="tableData" border stripe style="width: 100%">
        <el-table-column
          prop="productionBatchCode"
          label="生产批次号"
        ></el-table-column>
        <el-table-column prop="sequenceNumber" label="顺序号"></el-table-column>
        <el-table-column
          prop="partSerialNumber"
          label="部件条码"
        ></el-table-column>
        <el-table-column prop="sequenceStatus" label="状态"></el-table-column>
      </el-table>
      <el-row>
        <el-pagination
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page="currentPage"
          :page-sizes="[10, 20, 30]"
          :page-size="pageSize"
          layout="total, sizes, prev, pager, next, jumper"
          :total="total"
        ></el-pagination>
      </el-row>
    </el-row>
  </div>
</template>
<script>
import { abnormal_parts_parts } from '@/api/cloudApi'
export default {
  //异常产品提报详情
  name: 'abnormalDetail',
  data() {
    return {
      id: this.$route.query.id,
      tableData: [],
      total: 0,
      currentPage: 1,
      pageSize: 10,
    }
  },
  mounted() {
    this.get_abnormal_parts_parts()
  },
  methods: {
    get_abnormal_parts_parts() {
      let param = {
        productionBatchCode: this.id,
        pageIndex: this.currentPage,
        pageSize: this.pageSize,
        sortDirection: 'DESC',
      }
      abnormal_parts_parts(param).then((res) => {
        if (res.name == '') {
          this.tableData = res.data.items
          this.total = res.data.itemCount
        }
      })
    },
    handleSizeChange(val) {
      this.pageSize = val
      this.currentPage = 1
      this.get_abnormal_parts_parts()
    },
    handleCurrentChange(val) {
      this.currentPage = val
      this.get_abnormal_parts_parts()
    },
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