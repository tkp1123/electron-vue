<template>
  <div>
    <el-card class="box-card" shadow="never">
      <el-row :gutter="20" style="padding: 10px">
        <el-card shadow="never" style="padding: 10px">
          <el-row>
            <el-col :span="16" :xs="24">
              <el-row :gutter="20">
                <el-col :span="7">
                  <el-input
                    v-model="queryInfo"
                    clearable
                    placeholder="请输入生产批次号"
                  >
                  </el-input>
                </el-col>
              </el-row>
            </el-col>
            <el-col :span="6" :xs="24" class="text-right">
              <el-button type="primary" @click="goSubmit()"
                >异常产品提报</el-button
              >
            </el-col>
            <el-col :span="2" :xs="24" class="text-right">
              <el-button type="primary" @click="abnormal_parts_search()"
                >查询</el-button
              >
            </el-col>
          </el-row>
        </el-card>
      </el-row>
      <el-row>
        <el-table :data="tableData" border stripe style="width: 100%">
          <el-table-column
            prop="productionBatchCode"
            label="生产批次号"
          ></el-table-column>
          <el-table-column prop="palletCode" label="托盘编号"></el-table-column>
          <el-table-column
            prop="nokQuantity"
            label="不良品数量"
          ></el-table-column>
          <el-table-column
            prop="scrappedQuantity"
            label="报废数量"
          ></el-table-column>
          <el-table-column
            prop="created"
            label="请求（操作）时间"
            :formatter="formatDate"
          ></el-table-column>
          <el-table-column label="操作">
            <template slot-scope="scope">
              <el-button
                size="mini"
                type="primary"
                @click="handleDetail(scope.$index, scope.row)"
                >详情</el-button
              >
            </template>
          </el-table-column>
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
    </el-card>
  </div>
</template>
<script>
import { abnormal_parts } from '@/api/cloudApi'
import { dateUtil } from '../../../common/dateUtil'
export default {
  //异常产品提报
  name: 'abnormal',
  data() {
    return {
      queryInfo: '',
      total: 0,
      currentPage: 1,
      pageSize: 10,
      tableData: [],
    }
  },
  mounted() {
    this.get_abnormal_parts()
  },
  methods: {
    get_abnormal_parts() {
      let param = {
        productionBatchCode: this.queryInfo,
        pageIndex: this.currentPage,
        pageSize: this.pageSize,
        sortDirection: 'DESC',
      }
      abnormal_parts(param).then((res) => {
        if (res.name == '') {
          this.tableData = res.data.items
          this.total = res.data.itemCount
        }
      })
    },
    handleSizeChange(val) {
      this.pageSize = val
      console.log(`每页 ${val} 条`)
      this.currentPage = 1
      this.get_abnormal_parts()
    },
    handleCurrentChange(val) {
      this.currentPage = val
      console.log(`当前页: ${val}`)
      this.get_abnormal_parts()
    },
    abnormal_parts_search() {
      this.currentPage = 1
      this.get_abnormal_parts()
    },
    handleDetail(index, row) {
      this.$router.push({
        path: '/abnormalDetail',
        query: { id: row.productionBatchCode },
      })
    },
    goSubmit() {
      this.$router.push('/abnormalSubmit')
    },
    formatDate(row, column, cellValue) {
      if (!cellValue) return ''
      return dateUtil.fullFormatter(new Date(cellValue))
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
</style>