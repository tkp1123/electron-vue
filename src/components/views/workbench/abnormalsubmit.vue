<template>
  <div>
    <el-card class="box-card" shadow="never">
      <el-row class="page-tabs">
        <el-tabs v-model="activeName" type="card" @tab-click="handleClick">
          <el-tab-pane label="不良品" name="first">
            <Rejects></Rejects>
          </el-tab-pane>
          <el-tab-pane label="报废" name="second">
            <Scrap></Scrap>
          </el-tab-pane>
        </el-tabs>
      </el-row>
      <el-row justify="center">
        <el-col> </el-col>
      </el-row>
    </el-card>
  </div>
</template>
<script>
import Rejects from './abnormalTemplate/rejects'
import Scrap from './abnormalTemplate/scrap'
export default {
  //异常产品提交
  name: 'abnormalsubmit',
  components: {
    Rejects,
    Scrap,
  },
  data() {
    return {
      activeName: 'first',
      tableData: [
        {
          RequestCode: 'xxx1',
          LineCode: 'xxx',
          OperationCode: 'xxx',
          OperationShortName: 'xxx',
          EventCode: 'xxx',
        },
        {
          RequestCode: 'xxx2',
          LineCode: 'xxx',
          OperationCode: 'xxx',
          OperationShortName: 'xxx',
          EventCode: 'xxx',
        },
        {
          RequestCode: 'xxx3',
          LineCode: 'xxx',
          OperationCode: 'xxx',
          OperationShortName: 'xxx',
          EventCode: 'xxx',
        },
        {
          RequestCode: 'xxx4',
          LineCode: 'xxx',
          OperationCode: 'xxx',
          OperationShortName: 'xxx',
          EventCode: 'xxx',
        },
        {
          RequestCode: 'xxx5',
          LineCode: 'xxx',
          OperationCode: 'xxx',
          OperationShortName: 'xxx',
          EventCode: 'xxx',
        },
        {
          RequestCode: 'xxx6',
          LineCode: 'xxx',
          OperationCode: 'xxx',
          OperationShortName: 'xxx',
          EventCode: 'xxx',
        },
      ],
    }
  },
  methods: {
    handleSizeChange(val) {},
    handleCurrentChange(val) {},
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
.page-tabs {
  padding: 0 30px 30px 30px;
}
</style>