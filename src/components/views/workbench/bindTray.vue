<template>
  <div>
    <el-row :gutter="30" style="padding: 50px 100px">
      <el-card shadow="never">
        <el-row :gutter="10" style="padding: 10px">
          <el-card shadow="never" style="padding: 10px">
            <el-row>
              <el-col :span="18" :xs="24">
                <el-row>
                  <el-col :span="12">
                    托盘号:
                    <el-input
                      v-model="palletCode"
                      clearable
                      style="width: 200px"
                      placeholder="请输入托盘号/生产条码号"
                    >
                    </el-input>
                  </el-col>
                  <el-col :span="12" v-if="parameterName == '029'">
                    数量:
                    <el-input
                      v-model="palletCode"
                      clearable
                      style="width: 200px"
                      placeholder="请输入数量"
                    >
                    </el-input>
                  </el-col>
                </el-row>
              </el-col>
              <el-col
                :span="2"
                class="text-center"
                v-if="parameterName == '029'"
              >
                <el-button type="primary" @click="bing_pallet_submit()">
                  确认
                </el-button>
              </el-col>
              <el-col :span="2" class="text-center">
                <el-button type="primary" @click="bing_pallet_submit()">
                  提交
                </el-button>
              </el-col>
            </el-row>
          </el-card>
        </el-row>
        <el-row>
          <el-table :data="tableData" border stripe style="width: 100%">
            <el-table-column prop="sequence" label="顺序号"></el-table-column>
            <el-table-column label="操作">
              <template slot-scope="scope">
                <el-button
                  size="mini"
                  type="primary"
                  @click="handleCancel(scope.$index, scope.row)"
                  >取消</el-button
                >
              </template>
            </el-table-column>
          </el-table>
        </el-row>
      </el-card>
    </el-row>
  </div>
</template>
<script>
import { bing_pallet } from '@/api/cloudApi'
export default {
  //托盘绑定
  name: 'bindTray',
  data() {
    return {
      parameterName: '',
      palletCode: '',
      EXIT_CODE: '',
      tableData: [],
      PartSerialNumber: [],
    }
  },
  created() {
    this.parameterName = this.$store.state.parameterName.parameterName
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
          vm.dealData(arr[1])
        } else if (arr[0] == 'QRTOLT') {
          vm.palletCode = arr[1]
        } else {
          vm.palletCode = arr[1]
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
    bing_pallet_submit() {
      if (this.palletCode == '') {
        this.$notify({
          title: '提示',
          type: 'error',
          message: '未扫描托盘号',
          position: 'bottom-right',
          duration: '5000',
        })
        return
      }
      if (this.PartSerialNumber.length == 0) {
        this.$notify({
          title: '提示',
          type: 'error',
          message: '未扫描生产条码号',
          position: 'bottom-right',
          duration: '5000',
        })
        return
      }
      bing_pallet(
        { PartSerialNumber: this.PartSerialNumber },
        {
          PalletCode: this.palletCode,
        }
      ).then((res) => {
        if (res.name == '') {
          this.tableData = []
          this.PartSerialNumber = []
          this.$notify({
            title: '提示',
            type: 'success',
            message: '操作成功',
            position: 'bottom-right',
            duration: '5000',
          })
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
    },
    handleCancel(index, row) {
      this.tableData.splice(index, 1)
      this.PartSerialNumber.splice(index, 1)
    },
    dealData(val) {
      let flag = false
      for (let x = 0; x < this.tableData.length; x++) {
        if (val == this.tableData[x].sequence) {
          flag = true
        }
      }
      if (flag == false || this.tableData.length == 0) {
        let data = val.split('MB')
        if (!data) {
          this.$notify({
            title: '提示',
            type: 'error',
            message: '扫码错误',
            position: 'bottom-right',
            duration: '5000',
          })
          return
        }
        this.PartSerialNumber.push(data[1])
        this.tableData.push({ sequence: val })
      }
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
.text-right {
  text-align: right;
}
.text-center {
  text-align: center;
}
</style>