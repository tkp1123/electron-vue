<template>
  <div>
    <el-card class="box-card" shadow="never">
      <el-row>
        <el-table :data="tableData" border stripe style="width: 100%">
          <el-table-column
            prop="PartMatCode"
            label="产出物料的物料编码"
          ></el-table-column>
          <el-table-column
            prop="PartMatDescription"
            label="产出物料的物料名称或描述"
          ></el-table-column>
          <el-table-column
            prop="PartsQuantity"
            label="产出物料的数量"
          ></el-table-column>
          <el-table-column
            prop="ProductionBatchCode"
            label="生产批次号"
          ></el-table-column>
          <el-table-column
            prop="RequestTime"
            label="请求（操作）时间"
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
  //工艺信息集合
  data() {
    return {
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