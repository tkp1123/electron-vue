<template>
  <div>
    <el-row class="page-header">
      <el-page-header @back="goBack" content="详情页面"> </el-page-header>
    </el-row>

    <el-row :gutter="20" style="padding: 10px">
      <el-card shadow="never" style="padding: 10px">
        <el-row>
          <el-col :span="20" :xs="24">
            <el-row>
              <el-col :span="7">
                <el-input
                  v-model="queryInfo"
                  clearable
                  placeholder="请输入部件条码"
                >
                </el-input>
              </el-col>
            </el-row>
          </el-col>
          <el-col :span="4" :xs="24" class="text-right">
            <el-button type="primary" @click="submit_interaction_ng_report()"
              >提交</el-button
            >
          </el-col>
        </el-row>
      </el-card>
    </el-row>

    <el-row :gutter="20" style="padding: 10px">
      <el-col :span="12">
        <el-table :data="NOKSequenceNumber" border stripe style="width: 100%">
          <el-table-column
            prop="PartMatDescription"
            label="部件条码（不良品）"
          ></el-table-column>
          <el-table-column label="操作">
            <template slot-scope="scope">
              <el-button
                size="mini"
                type="warning"
                @click="cancelItem(scope.$index, scope.row)"
                >报废</el-button
              >
              <el-button
                size="mini"
                type="primary"
                @click="cancelItem(scope.$index, scope.row)"
                >取消</el-button
              >
            </template>
          </el-table-column>
        </el-table>
      </el-col>
      <el-col :span="12">
        <el-table
          :data="ScrappedSequenceNumber"
          border
          stripe
          style="width: 100%"
        >
          <el-table-column
            prop="PartMatDescription"
            label="部件条码（报废）"
          ></el-table-column>
          <el-table-column label="操作">
            <template slot-scope="scope">
              <el-button
                size="mini"
                type="warning"
                @click="cancelItem(scope.$index, scope.row)"
                >不良品</el-button
              >
              <el-button
                size="mini"
                type="primary"
                @click="cancelItem(scope.$index, scope.row)"
                >取消</el-button
              >
            </template>
          </el-table-column>
        </el-table>
      </el-col>
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
      queryInfo: '',
      //托盘号
      PalletCode: '',
      //不良品数组
      NOKSequenceNumber: [
        {
          RequestCode: 'xxx1',
        },
        {
          RequestCode: 'xxx2',
        },
        {
          RequestCode: 'xxx3',
        },
        {
          RequestCode: 'xxx4',
        },
        {
          RequestCode: 'xxx5',
        },
        {
          RequestCode: 'xxx6',
        },
      ],
      //报废品数组
      ScrappedSequenceNumber: [
        {
          RequestCode: 'xxx1',
        },
        {
          RequestCode: 'xxx2',
        },
        {
          RequestCode: 'xxx3',
        },
        {
          RequestCode: 'xxx4',
        },
        {
          RequestCode: 'xxx5',
        },
        {
          RequestCode: 'xxx6',
        },
      ],
    }
  },
  methods: {
    goBack() {
      this.$router.push('/abnormal')
    },
    submit_interaction_ng_report() {
      let param = {
        NOKSequenceNumber: this.NOKSequenceNumber,
        PalletCode: this.PalletCode,
        ScrappedSequenceNumber: this.ScrappedSequenceNumber,
      }
      interaction_ng_report(param).then((res) => {
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