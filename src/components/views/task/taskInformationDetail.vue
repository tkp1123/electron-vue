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
                  >产出物料的物料编码 :{{
                    process_infoData[0].partMatCode
                  }}</el-col
                >
                <el-col
                  :span="12"
                  :xs="24"
                  :sm="24"
                  :md="24"
                  :lg="12"
                  :xl="12"
                  class="panel-content-title"
                  >产出物料的物料名称或描述 :{{
                    process_infoData[0].partMatDescription
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
                  >产出物料的数量 :{{
                    process_infoData[0].partsQuantity
                  }}</el-col
                >
                <el-col
                  :span="12"
                  :xs="24"
                  :sm="24"
                  :md="24"
                  :lg="12"
                  :xl="12"
                  class="panel-content-title"
                  >生产批次号 :{{
                    process_infoData[0].productionBatchCode
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
                  >请求（操作）时间 :{{ process_infoData[0].created }}</el-col
                >
                <el-col :span="12" :xs="24"></el-col>
              </el-row>
            </el-col>
            <el-col :span="12" :xs="24"> </el-col>
          </el-row>
        </el-card>
      </el-col>
    </el-row>
    <el-row class="page-tabs">
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
                    v-model="queryInfo"
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
                    v-model="queryInfo"
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
                  <el-select v-model="State" placeholder="请选择完成状态">
                    <el-option label="已完成" value="1"> </el-option>
                    <el-option label="进行中" value="2"> </el-option>
                    <el-option label="未执行" value="3"> </el-option>
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
            <el-col :span="4" :xs="24" class="text-right">
              <el-button type="primary" @click="getTask_sets_search()"
                >查询</el-button
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
            <el-table-column
              prop="MaterialQuantity"
              label="部件顺序号"
            ></el-table-column>
            <el-table-column
              prop="MaterialQuantity"
              label="部件唯一码"
            ></el-table-column>
            <el-table-column
              prop="MaterialQuantity"
              label="完成情况"
            ></el-table-column>
            <el-table-column
              prop="MaterialQuantity"
              label="完成状态"
            ></el-table-column>
            <el-table-column
              prop="MaterialQuantity"
              label="完成时间"
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
      queryInfo: '',
      value1: '',
      State: '',
      total: 0,
      process_infoData: [
        {
          partMatCode: '',
          partMatDescription: '',
          partsQuantity: '',
          productionBatchCode: '',
          requestTime: '',
        },
      ],
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
        this.process_infoData = res.data.items
        this.getTask_sets()
      })
    },
    getTask_sets_search() {
      this.currentPage = 1
      this.getTask_sets()
    },
    getTask_sets() {
      let param = {
        pageIndex: this.currentPage,
        pageSize: this.pageSize,
        sortDirection: 'DESC',
        ProcessInfoId: this.process_infoData[0].id,
        createBegin: dateUtil.dateValue(this.value1[0]),
        createEnd: dateUtil.dateValue(this.value1[1]),
      }
      task_sets(param).then((res) => {
        this.tableData = res.data.items
        this.total = res.data.itemCount
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