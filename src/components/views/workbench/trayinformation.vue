<template>
  <div>
    <el-card class="box-card" shadow="never">
      <el-row :gutter="20" style="padding: 10px">
        <el-card shadow="never" style="padding: 10px">
          <el-row :gutter="20">
            <el-col :span="20" :xs="24">
              <el-row :gutter="10">
                <el-col :span="7">
                  <el-input v-model="palletCode" placeholder="请输入托盘编号">
                  </el-input>
                </el-col>
              </el-row>
            </el-col>
            <el-col :span="4" :xs="24" class="text-right">
              <el-button type="primary" @click="search_get_pallet_entry()"
                >查询</el-button
              >
            </el-col>
          </el-row>
        </el-card>
      </el-row>
    </el-card>
    <el-row :gutter="20" style="padding: 0 20px">
      <el-card shadow="never" style="padding: 10px">
        <el-row :gutter="10">
          <el-col :span="24" :xs="24">
            <el-row :gutter="10">
              <el-col :span="12" :offset="9">
                <el-col :span="24" class="panel-content-title"
                  >生产批次号 :{{ productionBatchCode }}</el-col
                >
                <el-col :span="24" class="panel-content-title"
                  >托盘编号 :{{ PalletCode }}</el-col
                >
                <el-col :span="24" class="panel-content-title"
                  >顺序号 :{{ sequenceNumber }}</el-col
                >
                <el-col :span="24" class="panel-content-title"
                  >任务单号 :{{ taskNumber }}</el-col
                >
                <el-col :span="24" class="panel-content-title"
                  >产品条码号 :{{ productSerialNumber }}</el-col
                >
                <el-col :span="24" class="panel-content-title"
                  >产品物料编号 :{{ partMaterialCode }}</el-col
                >
                <el-col :span="24" class="panel-content-title"
                  >等待时间 :xxx</el-col
                >
              </el-col>
            </el-row>
          </el-col>
        </el-row>
      </el-card>
    </el-row>
  </div>
</template>
<script>
import { pallet_entry } from '@/api/cloudApi'
export default {
  //托盘上线
  name: 'trayinformation',
  data() {
    return {
      palletCode: '',
      productionBatchCode: '',
      PalletCode: '',
      sequenceNumber: '',
      taskNumber: '',
      productSerialNumber: '',
      partMaterialCode: '',
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
          vm.palletCode = arr[1]
          vm.$notify({
            title: '提示',
            type: 'error',
            message: '请扫描托盘码',
            position: 'bottom-right',
            duration: '5000',
          })
        } else if (arr[0] == 'QRTOLT') {
          vm.palletCode = arr[1]
          vm.get_pallet_entry()
        } else {
          vm.palletCode = arr[1]
          vm.$notify({
            title: '提示',
            type: 'error',
            message: '请扫描托盘码',
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
    get_pallet_entry() {
      let param = {
        PalletCode: this.palletCode,
      }
      if (param.PalletCode) {
        pallet_entry({ PalletCode: this.palletCode }).then((res) => {
          console.log(res)
          if (res.name != '') {
            this.$notify({
              title: '提示',
              type: 'error',
              message: res.message,
              position: 'bottom-right',
              duration: '5000',
            })
          } else {
          }
        })
      }
    },
    search_get_pallet_entry() {
      this.get_pallet_entry()
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