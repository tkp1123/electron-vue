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
            label="X轴故障"
            width="100"
          ></el-table-column>
          <el-table-column
            prop="RequestCode"
            label="Y轴故障"
            width="100"
          ></el-table-column>
          <el-table-column
            prop="LineCode"
            label="三相异步电机过载"
            width="150"
          ></el-table-column>
          <el-table-column
            prop="OperationCode"
            label="变频器故障"
            width="100"
          ></el-table-column>
          <el-table-column
            prop="OperationShortName"
            label="三相相序不对"
            width="120"
          ></el-table-column>

          <el-table-column
            prop="OperationShortName"
            label="掉料"
            width="100"
          ></el-table-column>
          <el-table-column
            prop="OperationShortName"
            label="吸盘到达下限位"
            width="120"
          ></el-table-column>
          <el-table-column
            prop="OperationShortName"
            label="X轴碰到左限位"
            width="150"
          ></el-table-column>
          <el-table-column
            prop="OperationShortName"
            label="X轴碰到右限位"
            width="150"
          ></el-table-column>
          <el-table-column
            prop="OperationShortName"
            label="Y轴碰到上限位"
            width="150"
          ></el-table-column>
          <el-table-column
            prop="OperationShortName"
            label="Y轴碰到下限位"
            width="150"
          ></el-table-column>
          <el-table-column
            prop="OperationShortName"
            label="碰到软限位"
            width="100"
          ></el-table-column>
          <el-table-column
            prop="OperationShortName"
            label="碰到软限位"
            width="100"
          ></el-table-column>
          <el-table-column
            prop="OperationShortName"
            label="碰到软限位"
            width="100"
          ></el-table-column>
          <el-table-column
            prop="OperationShortName"
            label="碰到软限位"
            width="100"
          ></el-table-column>
          <el-table-column
            prop="OperationShortName"
            label="碰到软限位"
            width="100"
          ></el-table-column>
          <el-table-column
            prop="OperationShortName"
            label="碰到软限位"
            width="100"
          ></el-table-column>
          <el-table-column
            prop="OperationShortName"
            label="碰到软限位"
            width="100"
          ></el-table-column>
          <el-table-column
            prop="OperationShortName"
            label="失去联机信号"
            width="120"
          ></el-table-column>
          <el-table-column
            prop="OperationShortName"
            label="达到停机数量"
            width="120"
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
  //报警页面
  name: 'warnning',
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