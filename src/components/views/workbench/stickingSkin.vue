<template>
  <div>
    <el-row :gutter="20" style="padding: 20px">
      <el-card shadow="never" style="padding: 10px">
        <el-row>
          <el-col :span="20" :xs="24">
            <el-row>
              <el-col :span="7">
                <el-input
                  v-model="sequenceNumber"
                  clearable
                  placeholder="请扫码输入序号"
                >
                </el-input>
              </el-col>
            </el-row>
          </el-col>
          <el-col :span="4" :xs="24" class="text-right">
            <el-button type="primary" @click="search_getSiemens_task_all()"
              >查询</el-button
            >
          </el-col>
        </el-row>
      </el-card>
    </el-row>
    <!-- <el-row>
        <el-table :data="tableData" border stripe style="width: 100%">
          <el-table-column prop="RequestCode" label="批次号"></el-table-column>
          <el-table-column prop="LineCode" label="工序编号"></el-table-column>
          <el-table-column
            prop="OperationCode"
            label="工序短名称"
          ></el-table-column>
          <el-table-column
            prop="OperationShortName"
            label="部件顺序号"
          ></el-table-column>
          <el-table-column
            prop="OperationShortName"
            label="部件唯一码"
          ></el-table-column>
          <el-table-column
            prop="OperationShortName"
            label="门扇款式"
          ></el-table-column>
          <el-table-column
            prop="OperationShortName"
            label="颜色"
          ></el-table-column>
        </el-table>
      </el-row> -->
    <el-row :gutter="20" style="padding: 0 20px">
      <el-card shadow="never" style="padding: 10px">
        <el-row :gutter="10">
          <el-col :span="24" :xs="24">
            <el-row :gutter="10">
              <el-col :span="12" :offset="7">
                <el-col :span="24" class="panel-content-title">
                  <el-row :gutter="10">
                    <el-col :span="10">颜色 :</el-col>
                    <el-col :span="14">{{ Color }}</el-col>
                  </el-row>
                </el-col>
                <el-col :span="24" class="panel-content-title">
                  <el-row :gutter="10">
                    <el-col :span="10">批次号 :</el-col>
                    <el-col :span="14">{{ ProductionBatchCode }}</el-col>
                  </el-row>
                </el-col>
                <el-col :span="24" class="panel-content-title">
                  <el-row :gutter="10">
                    <el-col :span="10">门扇款式 :</el-col>
                    <el-col :span="14">{{ DoorPocket_Style }}</el-col>
                  </el-row>
                </el-col>
                <el-col :span="24" class="panel-content-title">
                  <el-row :gutter="10">
                    <el-col :span="10">部件顺序号 :</el-col>
                    <el-col :span="14">{{ SequenceNumber }}</el-col>
                  </el-row>
                </el-col>
                <el-col :span="24" class="panel-content-title">
                  <el-row :gutter="10">
                    <el-col :span="10">部件唯一码 :</el-col>
                    <el-col :span="14">{{ PartSerialNumber }}</el-col>
                  </el-row>
                </el-col>
              </el-col>
            </el-row>
          </el-col>
        </el-row>
      </el-card>
    </el-row>
  </div>
</template>
<script>
import { siemens_task_all } from '@/api/cloudApi'
export default {
  //贴皮工序
  name: 'stickingSkin',
  data() {
    return {
      sequenceNumber: '',
      //批次号
      ProductionBatchCode: '',
      //部件顺序号
      SequenceNumber: '',
      //部件唯一码
      PartSerialNumber: '',
      //门扇款式
      DoorPocket_Style: '',
      //颜色
      Color: '',
    }
  },
  mounted() {
    let str = ''
    let vm = this
    document.onkeydown = function () {
      if (event.keyCode !== 13) {
        let k = event.key
        if (k !== 'Shift') {
          str += k
        }
      } else {
        let arr = str.split('@')
        if (arr[0] == 'QRPART') {
          vm.sequenceNumber = arr[1]
          vm.getSiemens_task_all()
        } else if (arr[0] == 'QRTOLT') {
          vm.sequenceNumber = arr[1]
          vm.$notify({
            title: '提示',
            type: 'error',
            message: '请扫描部件序列号码',
            position: 'bottom-right',
            duration: '5000',
          })
        } else {
          vm.sequenceNumber = arr[1]
          vm.$notify({
            title: '提示',
            type: 'error',
            message: '请扫描部件序列号码',
            position: 'bottom-right',
            duration: '5000',
          })
        }
        str = ''
        arr = []
      }
    }
  },
  methods: {
    getSiemens_task_all() {
      if (this.sequenceNumber) {
        let val = this.sequenceNumber.split('MB')
        if (!val) {
          this.$notify({
            title: '提示',
            type: 'error',
            message: '扫码错误',
            position: 'bottom-right',
            duration: '5000',
          })
          return
        }
        siemens_task_all(parseInt(val[1])).then((res) => {
          if (res.name == '') {
            this.ProductionBatchCode =
              res.data.processInfoVo.productionBatchCode
            this.SequenceNumber =
              res.data.processInfoVo.taskSetsVos[0].partSetsVos[0].sequenceNumber
            this.PartSerialNumber =
              res.data.processInfoVo.taskSetsVos[0].partSetsVos[0].partSerialNumber
            this.DoorPocket_Style =
              res.data.processInfoVo.taskSetsVos[0].doorLeafStyle
            this.Color = res.data.processInfoVo.boardMaterialSetsVos[0].color
          } else {
            this.$notify({
              title: '提示',
              type: 'error',
              message: res.message,
              position: 'bottom-right',
              duration: '5000',
            })
          }
        })
      }
    },
    search_getSiemens_task_all() {
      this.getSiemens_task_all()
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
  color: #909399;
  flex-direction: column;
  justify-content: center;
  font-size: 35px;
  padding: 5px;
}
</style>