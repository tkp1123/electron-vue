<template>
  <div>
    <el-card class="box-card" shadow="never">
      <el-row :gutter="20">
        <el-card shadow="never" style="padding: 10px">
          <el-row :gutter="20">
            <el-col :span="18" :xs="24">
              <el-row>
                <el-col :span="7">
                  <el-select v-model="name" placeholder="请选择用户名称">
                    <el-option label="aa" value="1"></el-option>
                    <el-option label="bb" value="2"></el-option>
                    <el-option label="cc" value="3"></el-option>
                    <el-option label="dd" value="4"></el-option>
                    <el-option label="ee" value="5"></el-option>
                    <el-option label="ff" value="6"></el-option>
                  </el-select>
                </el-col>
              </el-row>
            </el-col>
            <el-col :span="6" :xs="24" class="text-right">
              <el-button type="primary">上班打卡 / 下班打卡</el-button>
            </el-col>
          </el-row>
        </el-card>
      </el-row>
      <el-row>
        <el-table
          :data="tableData"
          border
          stripe
          style="width: 100%"
          :header-cell-style="{ 'text-align': 'center' }"
        >
          <el-table-column
            prop="RequestCode"
            label="打卡记录"
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
  //签到
  name: 'punchClock',
  data() {
    return {
      name: '',
      tableData: [
        {
          RequestCode: '2021.04.15 18:21 AA 下班打卡',
          LineCode: 'xxx',
          OperationCode: 'xxx',
          OperationShortName: 'xxx',
          EventCode: 'xxx',
        },
        {
          RequestCode: '2021.04.15 14:21 AA 上班打卡',
          LineCode: 'xxx',
          OperationCode: 'xxx',
          OperationShortName: 'xxx',
          EventCode: 'xxx',
        },
        {
          RequestCode: '2021.04.14 18:21 AA 下班打卡',
          LineCode: 'xxx',
          OperationCode: 'xxx',
          OperationShortName: 'xxx',
          EventCode: 'xxx',
        },
        {
          RequestCode: '2021.04.14 14:21 AA 上班打卡',
          LineCode: 'xxx',
          OperationCode: 'xxx',
          OperationShortName: 'xxx',
          EventCode: 'xxx',
        },
        {
          RequestCode: '2021.04.13 18:21 AA 下班打卡',
          LineCode: 'xxx',
          OperationCode: 'xxx',
          OperationShortName: 'xxx',
          EventCode: 'xxx',
        },
        {
          RequestCode: '2021.04.13 14:21 AA 上班打卡',
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
    dialogCancel() {
      this.$router.push('/basic')
    },
    dialogOk() {
      this.dialogVisible = false
    },
    handleClose(done) {
      return
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
.ivu-card-body {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.demo-form {
  padding-top: 50px;
  width: 550px;
}
.el-row {
  margin: 0 !important;
}
</style>