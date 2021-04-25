<template>
  <div>
    <el-card class="box-card" shadow="never">
      <el-row :gutter="10">
        <el-col :span="24" :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
          <el-card shadow="never">
            <el-row :gutter="10">
              <el-col :span="20" :xs="24">
                <el-row :gutter="10">
                  <el-col :span="12" :xs="24">
                    <el-row>
                      <el-col :span="12" :xs="24" class="panel-content-title"
                        >工序编号 :{{ operationCode }}</el-col
                      >
                      <el-col :span="12" :xs="24" class="panel-content-title"
                        >工序短名称 :{{ operationShortName }}</el-col
                      >
                    </el-row>
                    <el-row>
                      <el-col :span="12" :xs="24" class="panel-content-title"
                        >生产批次号 :{{ productionBatchCode }}</el-col
                      >
                      <el-col :span="12" :xs="24" class="panel-content-title"
                        >总任务数 :{{ taskNumber }}</el-col
                      >
                    </el-row>
                    <el-row>
                      <el-col :span="12" :xs="24" class="panel-content-title"
                        >当前任务单序号 :{{ taskSequenceNumber }}</el-col
                      >
                      <el-col :span="12" :xs="24" class="panel-content-title"
                        >当前任务单生产数量 :{{ quantity }}</el-col
                      >
                    </el-row>
                  </el-col>
                  <el-col :span="12" :xs="24"> </el-col>
                </el-row>
              </el-col>
              <el-col :span="4" :xs="24">
                <el-row>
                  <el-col :span="24">
                    <el-button type="primary" @click="get_ask_task()">
                      批次获取
                    </el-button>
                  </el-col>
                </el-row>
              </el-col>
            </el-row>
          </el-card>
        </el-col>
      </el-row>
      <el-row v-if="parameterName != '029'">
        <el-table :data="tableData_029" border stripe style="width: 100%">
          <el-table-column
            prop="MatSequenceNumber"
            label="物料序号"
          ></el-table-column>
          <el-table-column
            prop="MaterailCode"
            label="物料编码"
          ></el-table-column>
          <el-table-column
            prop="MaterialDescription"
            label="物料描述"
          ></el-table-column>
          <el-table-column
            prop="MeterailQuality"
            label="材质"
          ></el-table-column>
          <el-table-column prop="Color" label="颜色"></el-table-column>
          <el-table-column prop="Specification" label="规格"></el-table-column>
          <el-table-column
            prop="EntranceCode"
            label="上料口编号"
          ></el-table-column>
          <el-table-column
            prop="MaterialQuantity"
            label="投入物料数量"
          ></el-table-column>
          <el-table-column
            prop="Completed"
            label="已加工大板数"
          ></el-table-column>
          <el-table-column prop="Size" label="输出物料尺寸"></el-table-column>
          <el-table-column prop="State" label="完成状态">
            <template slot-scope="scope">
              <span v-if="scope.row.State == 'UNPROCESSED'">进行中</span>
              <span v-else-if="scope.row.State == 'ONE_PROCESSING'">
                未执行
              </span>
              <span v-else-if="scope.row.State == 'TWO_PROCESSING'">
                已完成
              </span>
            </template>
          </el-table-column>
        </el-table>
        <el-row>
          <el-pagination
            @size-change="handleSizeChange_029"
            @current-change="handleCurrentChange_029"
            :current-page="currentPage_029"
            :page-sizes="[10, 20, 30]"
            :page-size="pageSize_029"
            layout="total, sizes, prev, pager, next, jumper"
            :total="total_029"
          ></el-pagination>
        </el-row>
      </el-row>
      <el-row v-else>
        <el-table :data="tableData_021" border stripe style="width: 100%">
          <el-table-column
            prop="categoryType"
            label="品类类型"
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
            prop="sequenceNumber"
            label="部件顺序号"
          ></el-table-column>
          <el-table-column
            prop="partSerialNumber"
            label="部件唯一码"
          ></el-table-column>
          <el-table-column prop="sequenceStatus" label="完成状态">
            <template slot-scope="scope">
              <span v-if="scope.row.sequenceStatus == 'UNPROCESSED'"
                >未加工</span
              >
              <span v-else-if="scope.row.sequenceStatus == 'ONE_PROCESSING'"
                >第一次加工中</span
              >
              <span v-else-if="scope.row.sequenceStatus == 'TWO_PROCESSING'"
                >第二次加工中</span
              >
              <span v-else-if="scope.row.sequenceStatus == 'COMPLETE'"
                >加工完成</span
              >
              <span v-else-if="scope.row.sequenceStatus == 'REJECTS'"
                >不良品</span
              >
              <span v-else-if="scope.row.sequenceStatus == 'SCRAPPED'"
                >报废</span
              >
            </template>
          </el-table-column>
        </el-table>
        <el-row>
          <el-pagination
            @size-change="handleSizeChange_021"
            @current-change="handleCurrentChange_021"
            :current-page="currentPage_021"
            :page-sizes="[10, 20, 30]"
            :page-size="pageSize_021"
            layout="total, sizes, prev, pager, next, jumper"
            :total="total_021"
          ></el-pagination>
        </el-row>
      </el-row>
    </el-card>
    <el-dialog
      title="批次获取"
      :visible.sync="dialogVisible"
      width="50%"
      destroy-on-close
    >
      <el-form :model="form" label-width="100px">
        <el-form-item label="生产任务号:" prop="name">
          <el-input v-model="form.TaskNumber" type="number"></el-input>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogDataReset()">取 消</el-button>
        <el-button type="primary" @click="dialogOk()">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>
<script>
import { first_task, part_sets, ask_task } from '@/api/cloudApi'
export default {
  //MES任务
  name: 'taskMES',
  data() {
    return {
      id: '',
      operationCode: '',
      operationShortName: '',
      productionBatchCode: '',
      quantity: '',
      taskSequenceNumber: '',
      taskNumber: '',
      parameterName: '',
      total_021: 0,
      currentPage_021: 1,
      pageSize_021: 10,
      tableData_021: [],
      total_029: 0,
      currentPage_029: 1,
      pageSize_029: 10,
      tableData_029: [],
      dialogVisible: false,
      form: {
        TaskNumber: '',
      },
    }
  },
  created() {
    this.parameterName = this.$store.state.parameterName.parameterName
  },
  mounted() {
    this.get_first_task()
  },
  methods: {
    get_first_task() {
      first_task().then((res) => {
        console.log(res)
        if (res.name == '') {
          this.operationCode = res.data.operationCode
          this.operationShortName = res.data.operationShortName
          this.productionBatchCode = res.data.productionBatchCode
          this.quantity = res.data.quantity
          this.taskNumber = res.data.taskNumber
          this.taskSequenceNumber = res.data.taskSequenceNumber
          this.id = res.data.id
          this.get_part_sets(res.data.id)
        }
      })
    },
    get_part_sets(val) {
      let param = {
        tasksId: val,
        pageIndex: this.currentPage_021,
        pageSize: this.pageSize_021,
        sortDirection: 'DESC',
      }
      part_sets(param).then((res) => {
        if (res.name == '') {
          this.tableData_021 = res.data.items
          this.total_021 = res.data.itemCount
          if (res.data.extras.length > 0) {
            if (res.data.extras[0].task.length > 0) {
              console.log(res.data.extras[0].task[0])
              for (let x = 0; x < this.tableData_021.length; x++) {
                for (let y = 0; y < res.data.extras[0].task.length; y++) {
                  if (
                    this.tableData_021[x].tasksId ==
                    res.data.extras[0].task[y].id
                  ) {
                    this.tableData_021[x].color =
                      res.data.extras[0].task[y].color
                    this.tableData_021[x].categoryType =
                      res.data.extras[0].task[y].categoryType
                    this.tableData_021[x].doorLeafHeight =
                      res.data.extras[0].task[y].doorLeafHeight
                    this.tableData_021[x].doorLeafWidth =
                      res.data.extras[0].task[y].doorLeafWidth
                    this.tableData_021[x].doorLeafThickness =
                      res.data.extras[0].task[y].doorLeafThickness
                    this.tableData_021[x].doorLeafStyle =
                      res.data.extras[0].task[y].doorLeafStyle
                  }
                }
              }
            }
          }
        }
      })
    },
    handleSizeChange_021(val) {
      this.pageSize_021 = val
      this.currentPage_021 = 1
      this.get_first_task()
    },
    handleCurrentChange_021(val) {
      this.currentPage_021 = val
      this.get_first_task()
    },
    get_ask_task() {
      this.dialogVisible = true
    },
    dialogDataReset() {
      this.form.TaskNumber = ''
    },
    dialogOk() {
      ask_task({ TaskNumber: this.form.TaskNumber }).then((res) => {
        if (res.name == '') {
          this.dialogVisible = false
          this.form.TaskNumber = ''
          this.get_first_task()
        }
      })
    },
    handleSizeChange_029(val) {
      this.pageSize_029 = val
      this.currentPage_029 = 1
      this.get_first_task()
    },
    handleCurrentChange_029(val) {
      this.currentPage_029 = val
      this.get_first_task()
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
.row-button {
  padding: 10px;
}
</style>