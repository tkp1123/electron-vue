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
              <el-button type="primary" @click="getProcessing_log_search()">
                查询
              </el-button>
            </el-col>
          </el-row>
        </el-card>
      </el-row>
      <el-row>
        <el-table :data="tableData" border stripe style="width: 100%">
          <el-table-column
            prop="productSerialNumber"
            label="产品条码号"
          ></el-table-column>
          <el-table-column
            prop="partMaterialCode"
            label="产品物料编号"
          ></el-table-column>
          <el-table-column prop="deviceName" label="设备名称"></el-table-column>
          <el-table-column
            prop="operationShortName"
            label="工序"
          ></el-table-column>
          <el-table-column
            prop="entryTime"
            label="进时间"
            :formatter="formatDate"
          ></el-table-column>
          <el-table-column
            prop="exitTime"
            label="出时间"
            :formatter="formatDate"
          ></el-table-column>
          <el-table-column
            prop="processingTime"
            label="通过时长"
          ></el-table-column>
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
import { processing_log } from '@/api/cloudApi'
import { dateUtil } from '../../../common/dateUtil'
export default {
  //进出时间
  name: 'InAndOut',
  data() {
    return {
      parameterName: '',
      value1: '',
      tableData: [],
      total: 0,
      currentPage: 1,
      pageSize: 10,
    }
  },

  mounted() {
    this.getProcessing_log()
  },
  methods: {
    getProcessing_log() {
      let param = {
        pageIndex: this.currentPage,
        pageSize: this.pageSize,
        sortDirection: 'DESC',
        createBegin: dateUtil.dateValue(this.value1[0]),
        createEnd: dateUtil.dateValue(this.value1[1]),
      }
      processing_log(param).then((res) => {
        if (res.name == '') {
          this.tableData = res.data.items
          this.total = res.data.itemCount
        }
      })
    },
    getProcessing_log_search() {
      this.currentPage = 1
      this.getProcessing_log()
    },
    handleSizeChange(val) {
      this.pageSize = val
      this.currentPage = 1
      this.getProcessing_log()
    },
    handleCurrentChange(val) {
      this.currentPage = val
      this.getProcessing_log()
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