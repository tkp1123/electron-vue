<template>
  <div>
    <el-row :gutter="30" style="padding: 50px 150px">
      <el-card shadow="never">
        <el-row :gutter="10" style="padding: 10px">
          <el-card shadow="never" style="padding: 10px">
            <el-row>
              <el-col :span="20" :xs="24">
                <el-row>
                  <el-col :span="14">
                    <el-row :gutter="10">
                      <el-col
                        :span="6"
                        style="text-align: right; line-height: 40px"
                        >托盘号:</el-col
                      >
                      <el-col :span="18">
                        <el-input
                          v-model="queryInfo"
                          clearable
                          placeholder="请输入托盘号/生产条码号"
                        >
                        </el-input>
                      </el-col>
                    </el-row>
                  </el-col>
                  <el-col
                    :span="10"
                    style="text-align: center; line-height: 40px"
                    >下线口 ：{{ EXIT_CODE.parameterData }}</el-col
                  >
                </el-row>
              </el-col>
              <el-col :span="4" :xs="24" class="text-center">
                <el-button type="primary" @click="bing_pallet_submit()"
                  >提交</el-button
                >
              </el-col>
            </el-row>
          </el-card>
        </el-row>
        <el-row>
          <el-table :data="tableData" border stripe style="width: 100%">
            <el-table-column
              prop="OperationShortName"
              label="顺序号"
            ></el-table-column>
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
import { mes_info_parameterName, bing_pallet } from '@/api/cloudApi'
export default {
  //托盘绑定
  name: 'bindTray',
  data() {
    return {
      queryInfo: '',
      EXIT_CODE: '',
      tableData: [],
    }
  },
  mounted() {
    this.getMes_info_parameterName()
  },
  methods: {
    getMes_info_parameterName() {
      let param = {
        parameterName: 'EXIT_CODE',
      }
      mes_info_parameterName(param).then((res) => {
        if (res.name == '') {
          this.EXIT_CODE = res.data
        }
      })
    },
    bing_pallet_submit() {
      let param = {
        ExitCode: this.EXIT_CODE.parameterData,
        //录入的托盘号
        PalletCode: this.queryInfo,
        //顺序号集合
        SequenceNumber: [],
      }
      bing_pallet(param).then((res) => {
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
            message: '操作失败',
            position: 'bottom-right',
            duration: '5000',
          })
        }
      })
    },
    handleCancel(index, row) {},
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
.text-center {
  text-align: center;
}
</style>