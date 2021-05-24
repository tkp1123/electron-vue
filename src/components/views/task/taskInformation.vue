<template>
  <div>
    <el-card class="box-card" shadow="never">
      <el-row :gutter="10">
        <el-col :span="12" :xs="24" :sm="24" :md="24" :lg="24" :xl="12">
          <el-card shadow="never" style="margin: 30px">
            <div slot="header">
              <div class="dp-fx">
                <div class="dp-fx-title">信息总览</div>
              </div>
            </div>
            <el-row :gutter="10">
              <el-col :span="24" :xs="24">
                <el-row>
                  <el-col
                    :span="12"
                    :xs="24"
                    :sm="24"
                    :md="24"
                    :lg="12"
                    :xl="12"
                    class="panel-content-title"
                    >批次总数 :{{ taskDataCount.batchNumber }}</el-col
                  >
                  <el-col
                    :span="12"
                    :xs="24"
                    :sm="24"
                    :md="24"
                    :lg="12"
                    :xl="12"
                    class="panel-content-title"
                    >已完成批次总次数 :{{
                      taskDataCount.completeBatchNumber
                    }}</el-col
                  >
                </el-row>
                <el-row>
                  <el-col
                    :span="12"
                    :xs="24"
                    :sm="24"
                    :md="24"
                    :lg="12"
                    :xl="12"
                    class="panel-content-title"
                    >任务总数 :{{ taskDataCount.taskNumber }}</el-col
                  >
                  <el-col
                    :span="12"
                    :xs="24"
                    :sm="24"
                    :md="24"
                    :lg="12"
                    :xl="12"
                    class="panel-content-title"
                    >已完成任务总次数 :{{
                      taskDataCount.taskCompleteNumber
                    }}</el-col
                  >
                </el-row>
                <el-row>
                  <el-col
                    :span="12"
                    :xs="24"
                    :sm="24"
                    :md="24"
                    :lg="12"
                    :xl="12"
                    class="panel-content-title"
                    >板件总数 :{{ taskDataCount.partNumber }}</el-col
                  >
                  <el-col
                    :span="12"
                    :xs="24"
                    :sm="24"
                    :md="24"
                    :lg="12"
                    :xl="12"
                    class="panel-content-title"
                    >已完成板件总数 :{{
                      taskDataCount.partCompleteNumber
                    }}</el-col
                  >
                </el-row>
              </el-col>
              <el-col :span="12" :xs="24"> </el-col>
            </el-row>
          </el-card>
        </el-col>
      </el-row>
      <el-row :gutter="20" style="padding: 10px">
        <el-card shadow="never" style="padding: 10px">
          <el-row>
            <el-col :span="20" :xs="24">
              <el-row :gutter="20">
                <el-col
                  class="col-padd"
                  :span="6"
                  :xl="6"
                  :lg="12"
                  :md="12"
                  :sm="12"
                  :xs="24"
                >
                  <el-input
                    v-model="productionBatchCode"
                    clearable
                    placeholder="请输入生产批次号"
                  >
                  </el-input>
                </el-col>
                <el-col
                  class="col-padd"
                  :span="6"
                  :xl="6"
                  :lg="12"
                  :md="12"
                  :sm="12"
                  :xs="24"
                >
                  <el-select v-model="orderBy" placeholder="请选择排序">
                    <el-option label="不良品由高到低" value="nokQuantityDESC">
                    </el-option>
                    <el-option label="不良品由低到高" value="nokQuantityASC">
                    </el-option>
                    <el-option
                      label="报废由高到低"
                      value="scrappedQuantityDESC"
                    >
                    </el-option>
                    <el-option label="报废由低到高" value="scrappedQuantityASC">
                    </el-option>
                  </el-select>
                </el-col>
                <el-col
                  class="col-padd"
                  :span="6"
                  :xl="6"
                  :lg="12"
                  :md="12"
                  :sm="12"
                  :xs="24"
                >
                  <el-select v-model="taskStatus" placeholder="请选择完成状态">
                    <el-option label="已完成" value="COMPLETE"> </el-option>
                    <el-option label="进行中" value="PROCESSING"> </el-option>
                    <el-option label="未执行" value="INITIAL"> </el-option>
                  </el-select>
                </el-col>
                <el-col
                  class="col-padd"
                  :span="6"
                  :xl="6"
                  :lg="12"
                  :md="12"
                  :sm="12"
                  :xs="24"
                >
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
              <el-button type="primary" @click="getIssue_task_search()"
                >查询</el-button
              >
            </el-col>
          </el-row>
        </el-card>
      </el-row>
      <el-row>
        <el-table :data="tableData" border stripe style="width: 100%">
          <el-table-column
            prop="requestCode"
            label="请求编号"
          ></el-table-column>
          <el-table-column prop="lineCode" label="产线编号"></el-table-column>
          <el-table-column
            prop="operationCode"
            label="工序编号"
          ></el-table-column>
          <el-table-column
            prop="operationShortName"
            label="工序短名称"
          ></el-table-column>
          <el-table-column
            prop="partMatCode"
            label="产出物料的物料编码"
          ></el-table-column>
          <el-table-column
            prop="partMatDescription"
            label="产出物料的物料名称或描述"
          ></el-table-column>
          <el-table-column
            prop="productionBatchCode"
            label="生产批次号"
          ></el-table-column>
          <el-table-column
            prop="created"
            label="请求(操作)时间"
            :formatter="formatDate"
          ></el-table-column>
          <el-table-column
            v-if="parameterName != '029'"
            prop="nokQuantity"
            label="不良品数量"
          ></el-table-column>
          <el-table-column
            v-if="parameterName == '029'"
            prop="nokQuantity"
            label="消耗数量"
          ></el-table-column>
          <el-table-column
            v-if="parameterName == '029'"
            prop="nokQuantity"
            label="多产出数量"
          ></el-table-column>
          <el-table-column
            prop="scrappedQuantity"
            label="报废品数量"
          ></el-table-column>
          <el-table-column prop="taskNumber" label="总任务数"></el-table-column>
          <el-table-column
            prop="completeNumber"
            label="已完成任务数"
          ></el-table-column>
          <el-table-column prop="taskStatus" label="完成状态">
            <template slot-scope="scope">
              <span v-if="scope.row.taskStatus == 'INITIAL'">未执行</span>
              <span v-else-if="scope.row.taskStatus == 'PROCESSING'"
                >进行中</span
              >
              <span v-else>已完成</span>
            </template>
          </el-table-column>
          <el-table-column
            prop="updated"
            label="任务完成时间"
            :formatter="formatUpdated"
          ></el-table-column>
          <el-table-column prop="reportWork" label="是否报工">
            <template slot-scope="scope">
              <span v-if="scope.row.reportWork == true">是</span>
              <span v-else>否</span>
            </template>
          </el-table-column>
          <el-table-column prop="dataSource" label="数据来源">
            <template slot-scope="scope">
              <span v-if="scope.row.dataSource == '1'">MES</span>
              <span v-else>自建工单</span>
            </template>
          </el-table-column>
          <el-table-column label="工艺信息">
            <template slot-scope="scope">
              <el-button
                size="mini"
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
import { task_data_count, process_info } from '@/api/cloudApi'
import { dateUtil } from '../../../common/dateUtil'
export default {
  //任务和工艺信息
  name: 'taskInformation',
  data() {
    return {
      parameterName: '',
      productionBatchCode: '',
      orderBy: '',
      taskStatus: '',
      total: 0,
      currentPage: 1,
      pageSize: 10,
      value1: '',
      taskDataCount: '',
      tableData: [],
      taskNumber: [],
      issueTask: [],
    }
  },
  created() {
    this.parameterName = this.$store.state.parameterName.parameterName
  },
  mounted() {
    this.getIssue_task()
    this.get_task_data_count()
  },
  methods: {
    getIssue_task() {
      let param = {
        pageIndex: this.currentPage,
        pageSize: this.pageSize,
        sortDirection: 'DESC',
        productionBatchCode: '',
        sortProperties: '',
        taskStatus: this.taskStatus,
        createBegin: dateUtil.dateValue(this.value1[0]),
        createEnd: dateUtil.dateValue(this.value1[1]),
      }
      switch (this.orderBy) {
        case 'nokQuantityASC':
          param.sortProperties = 'nokQuantity'
          param.sortDirection = 'ASC'
          break
        case 'nokQuantityDESC':
          param.sortProperties = 'nokQuantity'
          param.sortDirection = 'DESC'
          break
        case 'scrappedQuantityASC':
          param.sortProperties = 'scrappedQuantity'
          param.sortDirection = 'ASC'
          break
        case 'scrappedQuantityDESC':
          param.sortProperties = 'scrappedQuantity'
          param.sortDirection = 'DESC'
          break
      }
      process_info(param).then((res) => {
        console.log(res)
        if (res.name == '') {
          this.tableData = res.data.items
          this.total = res.data.itemCount
          if (res.data.extras.length > 0) {
            if (res.data.extras[0].taskNumber) {
              this.taskNumber = res.data.extras[0].taskNumber
              if (this.taskNumber.length > 0) {
                for (let x = 0; x < this.tableData.length; x++) {
                  for (let y = 0; y < this.taskNumber.length; y++) {
                    if (this.tableData[x].id == this.taskNumber[y].id) {
                      this.tableData[x].taskNumber = this.taskNumber[
                        y
                      ].taskNumber
                      this.tableData[x].completeNumber = this.taskNumber[
                        y
                      ].completeNumber
                    }
                  }
                }
              }
            }
            if (res.data.extras[0].issueTask) {
              this.issueTask = res.data.extras[0].issueTask
              if (this.issueTask.length > 0) {
                for (let x = 0; x < this.tableData.length; x++) {
                  for (let y = 0; y < this.issueTask.length; y++) {
                    if (this.tableData[x].issueTaskId == this.issueTask[y].id) {
                      this.tableData[x].requestCode = this.issueTask[
                        y
                      ].requestCode
                      this.tableData[x].lineCode = this.issueTask[y].lineCode
                      this.tableData[x].operationCode = this.issueTask[
                        y
                      ].operationCode
                      this.tableData[x].operationShortName = this.issueTask[
                        y
                      ].operationShortName
                    }
                  }
                }
              }
            }
          }
        }
      })
    },
    get_task_data_count() {
      task_data_count().then((res) => {
        console.log(res)
        this.taskDataCount = res.data
      })
    },
    getIssue_task_search() {
      this.currentPage = 1
      this.getIssue_task()
    },
    dateValue(val) {
      if (!val) return ''
      let date = new Date(val).valueOf()
      return date
    },
    handleSizeChange(val) {
      this.pageSize = val
      this.currentPage = 1
      this.getIssue_task()
    },
    handleCurrentChange(val) {
      this.currentPage = val
      this.getIssue_task()
    },
    handleDetail(index, row) {
      this.$router.push({
        path: '/taskInformationDetail',
        query: { id: row.issueTaskId },
      })
    },
    formatDate(row, column, cellValue) {
      if (!cellValue) return ''
      return dateUtil.fullFormatter(new Date(cellValue))
    },
    formatUpdated(row, column, cellValue) {
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
.col-padd {
  padding: 5px 0;
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
</style>