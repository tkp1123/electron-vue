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
          <el-table-column prop="EventCode" label="动力辊台1"></el-table-column>
          <el-table-column
            prop="RequestCode"
            label="动力辊台2"
          ></el-table-column>
          <el-table-column prop="LineCode" label="翻板辊台"></el-table-column>
          <el-table-column
            prop="OperationCode"
            label="翻板机"
          ></el-table-column>
          <el-table-column
            prop="OperationShortName"
            label="皮带机1"
          ></el-table-column>
          <el-table-column
            prop="OperationShortName"
            label="皮带机2"
          ></el-table-column>
          <el-table-column
            prop="OperationShortName"
            label="皮带机3"
          ></el-table-column>
          <el-table-column
            prop="OperationShortName"
            label="皮带机4"
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
  //速度
  name: 'speed',
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