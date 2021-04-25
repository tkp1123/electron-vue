<template>
  <div>
    <el-card class="box-card" shadow="never">
      <el-row>
        <el-table :data="tableData" border stripe style="width: 100%">
          <el-table-column type="index" width="50"> </el-table-column>
          <el-table-column prop="RequestCode" label="时间"></el-table-column>
          <el-table-column prop="LineCode" label="操作"></el-table-column>
          <el-table-column
            prop="OperationCode"
            label="用户名称"
          ></el-table-column>
        </el-table>
        <el-row>
          <el-pagination
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            :current-page="1"
            :page-sizes="[10, 20, 30]"
            :page-size="10"
            layout="total, sizes, prev, pager, next, jumper"
            :total="6"
          ></el-pagination>
        </el-row>
      </el-row>
    </el-card>
  </div>
</template>
<script>
export default {
  //操作记录
  name: 'operationrecord',
  data() {
    return {
      value1: '',
      tableData: [
        {
          RequestCode: '2021年4月25日 15:37:07',
          LineCode: '登入',
          OperationCode: 'admin',
        },
        {
          RequestCode: '2021年4月25日 15:37:07',
          LineCode: '辊台1前进',
          OperationCode: 'admin',
        },
        {
          RequestCode: '2021年4月25日 15:37:07',
          LineCode: '辊台2前进',
          OperationCode: 'admin',
        },
        {
          RequestCode: '2021年4月25日 15:37:07',
          LineCode: '翻板辊台前进',
          OperationCode: 'admin',
        },
        {
          RequestCode: '2021年4月25日 15:37:07',
          LineCode: '皮带4前进',
          OperationCode: 'admin',
        },
        {
          RequestCode: '2021年4月25日 15:37:07',
          LineCode: '登入',
          OperationCode: 'admin',
        },
      ],
    }
  },
  methods: {
    handleSizeChange(val) {},
    handleCurrentChange(val) {},
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
</style>