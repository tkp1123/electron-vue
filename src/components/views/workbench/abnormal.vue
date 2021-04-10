<template>
  <div>
    <el-card class="box-card" shadow="never">
      <el-row :gutter="20" style="padding: 10px">
        <el-card shadow="never" style="padding: 10px">
          <el-row>
            <el-col :span="20" :xs="24">
              <el-row>
                <el-col :span="7">
                  <el-input
                    v-model="queryInfo"
                    clearable
                    placeholder="请输入序号"
                  >
                  </el-input>
                </el-col>
              </el-row>
            </el-col>
            <el-col :span="4" :xs="24" class="text-right">
              <el-button type="primary" @click="search()">查询</el-button>
            </el-col>
          </el-row>
        </el-card>
      </el-row>
      <el-row>
        <el-table :data="tableData" border stripe style="width: 100%">
          <el-table-column prop="RequestCode" label="序号"></el-table-column>
          <el-table-column prop="LineCode" label="提交日期"></el-table-column>
          <el-table-column
            prop="OperationCode"
            label="不良数量"
          ></el-table-column>
          <el-table-column
            prop="OperationShortName"
            label="报废数量"
          ></el-table-column>
          <el-table-column label="操作">
            <template slot-scope="scope">
              <el-button
                size="mini"
                type="primary"
                @click="handleDetail(scope.$index, scope.row)"
                >详情</el-button
              >
            </template>
          </el-table-column>
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
  //异常产品提报
  name: 'abnormal',
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
    handleDetail(index, row) {
      this.$router.push('/abnormalDetail')
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
</style>