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
            <el-button type="primary" @click="search()">查询</el-button>
          </el-col>
        </el-row>
      </el-card>
    </el-row>
    <el-row :gutter="30">
      <el-col :span="11" :xs="24" :sm="24" :md="24" :lg="11" :xl="11">
        <el-table :data="tableData" border stripe style="width: 100%">
          <el-table-column
            prop="PartMatCode"
            label="生产批次号"
          ></el-table-column>
          <el-table-column
            prop="PartMatDescription"
            label="数量"
          ></el-table-column>
          <!-- <el-table-column
            prop="PartMatDescription"
            label="顺序号"
          ></el-table-column>
          <el-table-column
            prop="PartMatDescription"
            label="部件条码"
          ></el-table-column> -->
        </el-table>
      </el-col>
      <el-col :span="2" :xs="24" :sm="24" :md="24" :lg="2" :xl="2">
        <el-row type="flex" class="middle-text-row">
          <el-col class="middle-text">>>></el-col>
        </el-row>
      </el-col>
      <el-col :span="11" :xs="24" :sm="24" :md="24" :lg="11" :xl="11">
        <el-table :data="tableData" border stripe style="width: 100%">
          <!-- <el-table-column
            prop="PartMatCode"
            label="生产批次号"
          ></el-table-column>
          <el-table-column
            prop="PartMatDescription"
            label="数量"
          ></el-table-column> -->
          <el-table-column
            prop="PartMatDescription"
            label="顺序号"
          ></el-table-column>
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
                >取消</el-button
              >
            </template>
          </el-table-column>
        </el-table>
      </el-col>
    </el-row>
    <el-row :gutter="10" class="page-submit">
      <el-col style="text-align: center">
        <el-button type="primary" @click="done()">提交</el-button>
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