<template>
  <div>
    <el-row class="page-header">
      <el-page-header @back="goBack" content="详情页面"> </el-page-header>
    </el-row>
    <el-row :gutter="20" style="padding: 10px">
      <el-card shadow="never" style="padding: 10px">
        <el-tabs v-model="activeName" type="card" @tab-click="handleClick">
          <el-tab-pane label="不良品" name="first">
            <el-row :gutter="20" style="padding: 10px">
              <el-card shadow="never" style="padding: 10px">
                <el-row>
                  <el-col :span="20" :xs="24">
                    <el-row>
                      <el-col :span="7">
                        <el-input
                          v-model="palletCodeNOK"
                          clearable
                          placeholder="请输入部件序列号"
                        >
                        </el-input>
                      </el-col>
                    </el-row>
                  </el-col>
                  <el-col :span="4" :xs="24" class="text-right">
                    <el-button
                      type="primary"
                      @click="submit_interaction_ng_report()"
                      >提交</el-button
                    >
                  </el-col>
                </el-row>
              </el-card>
            </el-row>
            <el-row :gutter="20">
              <el-col :span="12" :offset="6">
                <el-table
                  :data="NOKSequenceTable"
                  border
                  stripe
                  style="width: 100%"
                >
                  <el-table-column
                    prop="sequence"
                    label="部件条码（不良品）"
                  ></el-table-column>
                  <el-table-column label="操作">
                    <template slot-scope="scope">
                      <el-button
                        size="mini"
                        type="primary"
                        @click="cancelItemNOK(scope.$index, scope.row)"
                        >取消</el-button
                      >
                    </template>
                  </el-table-column>
                </el-table>
              </el-col>
            </el-row>
          </el-tab-pane>
          <el-tab-pane label="报废" name="second">
            <el-row :gutter="20" style="padding: 10px">
              <el-card shadow="never" style="padding: 10px">
                <el-row>
                  <el-col :span="20" :xs="24">
                    <el-row>
                      <el-col :span="7">
                        <el-input
                          v-model="palletCodeScra"
                          clearable
                          placeholder="请输入部件序列号"
                        >
                        </el-input>
                      </el-col>
                    </el-row>
                  </el-col>
                  <el-col :span="4" :xs="24" class="text-right">
                    <el-button
                      type="primary"
                      @click="submit_interaction_ng_report()"
                      >提交</el-button
                    >
                  </el-col>
                </el-row>
              </el-card>
            </el-row>
            <el-row :gutter="20">
              <el-col :span="12" :offset="6">
                <el-table
                  :data="ScrappedTable"
                  border
                  stripe
                  style="width: 100%"
                >
                  <el-table-column
                    prop="sequence"
                    label="部件条码（报废）"
                  ></el-table-column>
                  <el-table-column label="操作">
                    <template slot-scope="scope">
                      <el-button
                        size="mini"
                        type="primary"
                        @click="cancelItemScrap(scope.$index, scope.row)"
                        >取消</el-button
                      >
                    </template>
                  </el-table-column>
                </el-table>
              </el-col>
            </el-row>
          </el-tab-pane>
        </el-tabs>
      </el-card>
    </el-row>
  </div>
</template>
<script>
import { interaction_ng_report } from '@/api/cloudApi'
export default {
  //异常产品提交
  name: 'abnormalsubmit',
  data() {
    return {
      activeName: 'first',
      //报废输入框
      palletCodeScra: '',
      //不良品输入框
      palletCodeNOK: '',
      //托盘号
      PalletCode: '',
      //不良品数组
      NOKSequenceNumber: [],
      NOKSequenceTable: [],
      //报废品数组
      ScrappedSequenceNumber: [],
      ScrappedTable: [],
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
        if (vm.activeName == 'first') {
          let arr = str.split('@')
          if (arr[0] == 'QRPART') {
            vm.palletCodeNOK = arr[1]
            vm.dealData(arr[1])
          } else if (arr[0] == 'QRTOLT') {
            vm.palletCodeNOK = arr[1]
          } else {
            vm.palletCodeNOK = arr[1]
          }
          str = ''
          arr = []
        } else {
          let arr = str.split('@')
          if (arr[0] == 'QRPART') {
            vm.palletCodeScra = arr[1]
            vm.dealData(arr[1])
          } else if (arr[0] == 'QRTOLT') {
            vm.palletCodeScra = arr[1]
          } else {
            vm.palletCodeScra = arr[1]
          }
          str = ''
          arr = []
        }
      }
    }
  },
  methods: {
    goBack() {
      this.$router.push('/abnormal')
    },
    submit_interaction_ng_report() {
      // let param = {
      //   NOKSequenceNumber: this.NOKSequenceNumber,
      //   PalletCode: this.PalletCode,
      //   ScrappedSequenceNumber: this.ScrappedSequenceNumber,
      // }
      interaction_ng_report(
        {
          NOKSequenceNumber: this.NOKSequenceNumber,
          ScrappedSequenceNumber: this.ScrappedSequenceNumber,
        },
        {
          PalletCode: '',
          MaterialCode: '',
        }
      ).then((res) => {
        if (res.name == '') {
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
    dealData(val) {
      if (this.activeName == 'first') {
        let flagNOK = false
        for (let x = 0; x < this.NOKSequenceTable.length; x++) {
          if (val == this.NOKSequenceTable[x].sequence) {
            flagNOK = true
          }
        }
        if (flagNOK == false || this.NOKSequenceTable.length == 0) {
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
          this.NOKSequenceTable.push({ sequence: val })
          this.NOKSequenceNumber.push(data[1])
        }
      } else {
        let flagScra = false
        for (let x = 0; x < this.ScrappedTable.length; x++) {
          if (val == this.ScrappedTable[x].sequence) {
            flagScra = true
          }
        }
        if (flagScra == false || this.ScrappedTable.length == 0) {
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
          this.ScrappedTable.push({ sequence: val })
          this.ScrappedSequenceNumber.push(data[1])
        }
      }
    },
    cancelItemNOK(index, row) {
      this.NOKSequenceTable.splice(index, 1)
    },
    cancelItemScrap(index, row) {
      this.ScrappedTable.splice(index, 1)
    },
    handleClick(tab, event) {},
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
.page-header {
  padding: 30px;
}
.el-row {
  margin: 0 !important;
}
.page-tabs {
  padding: 0 30px 30px 30px;
}
</style>