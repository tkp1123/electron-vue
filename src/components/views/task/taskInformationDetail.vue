<template>
  <div>
    <el-row class="page-header">
      <el-page-header @back="goBack" content="详情页面"> </el-page-header>
    </el-row>
    <el-row :gutter="10">
      <el-col :span="12" :xs="24" :sm="24" :md="24" :lg="24" :xl="12">
        <el-card shadow="never" style="margin: 30px">
          <div slot="header">
            <div class="dp-fx">
              <div class="dp-fx-title">工艺信息</div>
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
                  >产出物料的物料编码 :{{ partMatCode }}</el-col
                >
                <el-col
                  :span="12"
                  :xs="24"
                  :sm="24"
                  :md="24"
                  :lg="12"
                  :xl="12"
                  class="panel-content-title"
                  >产出物料的物料名称或描述 :{{ partMatDescription }}</el-col
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
                  >产出物料的数量 :{{ partsQuantity }}</el-col
                >
                <el-col
                  :span="12"
                  :xs="24"
                  :sm="24"
                  :md="24"
                  :lg="12"
                  :xl="12"
                  class="panel-content-title"
                  >生产批次号 :{{ productionBatchCode }}</el-col
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
                  >请求（操作）时间 :{{ createdTime }}</el-col
                >
                <el-col :span="12" :xs="24"></el-col>
              </el-row>
            </el-col>
            <el-col :span="12" :xs="24"> </el-col>
          </el-row>
        </el-card>
      </el-col>
    </el-row>
    <el-row>
      <el-card class="box-card" shadow="never">
        <el-card shadow="never" style="padding: 10px">
          <el-row :gutter="20">
            <el-col :span="20" :xs="24">
              <el-row :gutter="20">
                <el-col
                  class="col-padd"
                  :span="6"
                  :xl="6"
                  :lg="8"
                  :md="12"
                  :sm="12"
                  :xs="24"
                >
                  <el-input
                    v-model="taskSequenceNumber"
                    clearable
                    placeholder="请输入任务单序号"
                  >
                  </el-input>
                </el-col>
                <el-col
                  class="col-padd"
                  :span="6"
                  :xl="6"
                  :lg="8"
                  :md="12"
                  :sm="12"
                  :xs="24"
                >
                  <el-input
                    v-model="taskNumber"
                    clearable
                    placeholder="请输入生产任务单号"
                  >
                  </el-input>
                </el-col>
                <el-col
                  class="col-padd"
                  :span="4"
                  :xl="4"
                  :lg="8"
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
                  :lg="8"
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
            <el-col :span="2" :xs="24" class="text-right">
              <el-button type="primary" @click="getTask_sets_search()"
                >查询</el-button
              >
            </el-col>
            <el-col :span="2" :xs="24" class="text-right">
              <el-button type="primary" @click="getTask_sets_reset()"
                >重置</el-button
              >
            </el-col>
          </el-row>
        </el-card>
        <el-row>
          <el-table :data="tableData" border stripe style="width: 100%">
            <el-table-column
              prop="taskSequenceNumber"
              label="任务单序号"
            ></el-table-column>
            <el-table-column
              prop="categoryType"
              label="品类类型"
            ></el-table-column>
            <el-table-column
              prop="taskNumber"
              label="生产任务单号"
            ></el-table-column>
            <el-table-column
              prop="MaterialQuality"
              label="SPA下单的生产批次号"
            ></el-table-column>
            <el-table-column
              prop="quantity"
              label="任务单生产数量"
            ></el-table-column>
            <el-table-column
              prop="doorLeafHeight"
              label="门扇尺寸-高(mm)"
            ></el-table-column>
            <el-table-column
              prop="doorLeafWidth"
              label="门扇尺寸-宽(mm)"
            ></el-table-column>
            <el-table-column
              prop="doorLeafThickness"
              label="门扇尺寸-厚(mm)"
            ></el-table-column>
            <el-table-column
              prop="doorLeafStyle"
              label="门扇款式"
            ></el-table-column>
            <el-table-column prop="color" label="颜色"></el-table-column>
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
              label="完成时间"
              :formatter="formatUpdated"
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
    </el-row>
  </div>
</template>
<script>
import { process_info, task_sets } from '@/api/cloudApi'
import { dateUtil } from '../../../common/dateUtil'
export default {
  //任务和工艺信息详情
  name: 'taskInformationDetail',
  data() {
    return {
      id: this.$route.query.id,
      tableData: [],
      taskSequenceNumber: '',
      taskNumber: '',
      value1: '',
      taskStatus: '',
      total: 0,
      id: '',
      partMatCode: '',
      partMatDescription: '',
      partsQuantity: '',
      productionBatchCode: '',
      createdTime: '',
      currentPage: 1,
      pageSize: 10,
    }
  },
  mounted() {
    this.getProcess_info()
  },
  methods: {
    getProcess_info() {
      let param = {
        pageIndex: 1,
        pageSize: 10,
        sortDirection: 'DESC',
        IssueTaskId: this.id,
      }
      process_info(param).then((res) => {
        if (res.name == '') {
          this.process_infoData = res.data.items

          this.id = res.data.items[0].id
          this.partMatCode = res.data.items[0].partMatCode
          this.partMatDescription = res.data.items[0].partMatDescription
          this.partsQuantity = res.data.items[0].partsQuantity
          this.productionBatchCode = res.data.items[0].productionBatchCode
          this.createdTime = dateUtil.fullFormatter(
            new Date(res.data.items[0].created)
          )
          this.getTask_sets()
        }
      })
    },
    getTask_sets_search() {
      this.currentPage = 1
      this.getTask_sets()
    },
    getTask_sets_reset() {
      this.currentPage = 1
      this.taskSequenceNumber = ''
      this.taskNumber = ''
      this.taskStatus = ''
      this.value1 = ''
      this.getTask_sets()
    },
    getTask_sets() {
      let param = {
        pageIndex: this.currentPage,
        pageSize: this.pageSize,
        sortDirection: 'DESC',
        TaskSequenceNumber: this.taskSequenceNumber,
        TaskNumber: this.taskNumber,
        taskStatus: this.taskStatus,
        ProcessInfoId: this.process_infoData[0].id,
        createBegin: dateUtil.dateValue(this.value1[0]),
        createEnd: dateUtil.dateValue(this.value1[1]),
      }
      task_sets(param).then((res) => {
        if (res.name == '') {
          this.tableData = res.data.items
          this.total = res.data.itemCount
        }
      })
    },
    handleSizeChange(val) {
      this.pageSize = val
      this.currentPage = 1
      this.getTask_sets()
    },
    handleCurrentChange(val) {
      this.currentPage = val
      this.getTask_sets()
    },
    formatUpdated(row, column, cellValue) {
      if (!cellValue) return ''
      return dateUtil.fullFormatter(new Date(cellValue))
    },
    goBack() {
      this.$router.push('/taskInformation')
    },
  },
}
</script>
<style  lang="less" scoped>
.page-header {
  padding: 30px;
}
.page-tabs {
  padding: 0 30px 30px 30px;
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
.col-padd {
  padding: 5px 0;
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