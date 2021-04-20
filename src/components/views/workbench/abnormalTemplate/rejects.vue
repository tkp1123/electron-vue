<template>
  <div>
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
            <el-button type="primary" @click="search()">提交</el-button>
          </el-col>
        </el-row>
      </el-card>
    </el-row>
    <el-row :gutter="30">
      <el-col :span="12" :offset="6">
        <el-table :data="tableData" border stripe style="width: 100%">
          <el-table-column
            prop="PartMatDescription"
            label="部件条码"
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
                type="warning"
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
export default {
  //不良品
  data() {
    return {
      queryInfo: '',
      tableData: [
        {
          PartMatCode: 'xxx1',
          PartMatDescription: 'xxx',
          PartsQuantity: 'xxx',
          ProductionBatchCode: 'xxx',
          RequestTime: 'xxx',
        },
        {
          PartMatCode: 'xxx2',
          PartMatDescription: 'xxx',
          PartsQuantity: 'xxx',
          ProductionBatchCode: 'xxx',
          RequestTime: 'xxx',
        },
        {
          PartMatCode: 'xxx3',
          PartMatDescription: 'xxx',
          PartsQuantity: 'xxx',
          ProductionBatchCode: 'xxx',
          RequestTime: 'xxx',
        },
        {
          PartMatCode: 'xxx4',
          PartMatDescription: 'xxx',
          PartsQuantity: 'xxx',
          ProductionBatchCode: 'xxx',
          RequestTime: 'xxx',
        },
        {
          PartMatCode: 'xxx5',
          PartMatDescription: 'xxx',
          PartsQuantity: 'xxx',
          ProductionBatchCode: 'xxx',
          RequestTime: 'xxx',
        },
        {
          PartMatCode: 'xxx6',
          PartMatDescription: 'xxx',
          PartsQuantity: 'xxx',
          ProductionBatchCode: 'xxx',
          RequestTime: 'xxx',
        },
      ],
    }
  },
  methods: {
    search() {},
    cancelItem(index, row) {},
    done() {},
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
.page-tabs {
  padding: 30px;
}
.page-submit {
  padding: 50px 30px;
}
.middle-text {
  font-weight: 700;
  padding-left: 10px;
}
.middle-text-row {
  height: 300px;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 15px;
}
</style>