<template>
  <div>
    <el-card class="box-card" shadow="never">
      <el-row :gutter="30">
        <el-col :span="7">
          <el-row>
            <el-input
              v-model="queryInfo"
              clearable
              placeholder="请输入请求编号"
            >
            </el-input>
          </el-row>
        </el-col>
        <el-col :span="4">
          <el-button type="primary" @click="search()">查询</el-button>
        </el-col>
      </el-row>
      <el-row>
        <el-table :data="tableData" border stripe style="width: 100%">
          <el-table-column
            prop="EventCode"
            label="夹板延时（S）"
          ></el-table-column>
          <el-table-column
            prop="RequestCode"
            label="放板延时（S）"
          ></el-table-column>
          <el-table-column
            prop="LineCode"
            label="X轴在地辊偏移量（MM）"
          ></el-table-column>
          <el-table-column
            prop="OperationCode"
            label="Y轴在地辊取板后提升（MM）"
          ></el-table-column>
          <el-table-column
            prop="OperationShortName"
            label="翻板夹紧延时（S）"
          ></el-table-column>

          <el-table-column
            prop="OperationShortName"
            label="翻板松开延时（S）"
          ></el-table-column>
          <el-table-column
            prop="OperationShortName"
            label="X轴在辊台偏移量（MM）"
          ></el-table-column>
          <el-table-column
            prop="OperationShortName"
            label="X轴在辊台放板提升（MM）"
          ></el-table-column>
          <el-table-column
            prop="OperationShortName"
            label="喷油时间（S）"
          ></el-table-column>
          <el-table-column
            prop="OperationShortName"
            label="喷油间隔（MIN）"
          ></el-table-column>
          <el-table-column
            prop="OperationShortName"
            label="X点动%"
          ></el-table-column>
          <el-table-column
            prop="OperationShortName"
            label="Y点动%"
          ></el-table-column>
          <el-table-column
            prop="OperationShortName"
            label="托板动作距离（mm）"
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
  //基本参数
  name: 'basic',
  data() {
    return {
      queryInfo: '',
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
</style>