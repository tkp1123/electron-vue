<template>
  <div>
    <el-card class="box-card" shadow="never">
      <el-row>
        <el-table :data="tableData" border stripe style="width: 100%">
          <el-table-column
            prop="MatSequenceNumber"
            label="物料序号"
          ></el-table-column>
          <el-table-column
            prop="MaterialCode"
            label="物料编码"
          ></el-table-column>
          <el-table-column
            prop="MaterialDescription"
            label="物料描述"
          ></el-table-column>
          <el-table-column
            prop="MaterialQuality"
            label="材质"
          ></el-table-column>
          <el-table-column prop="Color" label="颜色"></el-table-column>
          <el-table-column
            prop="Specification"
            label="规格（厚*宽*长）"
          ></el-table-column>
          <el-table-column
            prop="EntranceCode"
            label="上料口编号"
          ></el-table-column>
          <el-table-column
            prop="MaterialQuantity"
            label="投入物料的数量（总量）"
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
  //投入主板物料集合
  data() {
    return {
      tableData: [
        {
          MatSequenceNumber: 'xxx1',
          MaterialCode: 'xxx',
          MaterialDescription: 'xxx',
          MaterialQuality: 'xxx',
          Color: 'xxx',
          Specification: 'xxx',
          EntranceCode: 'xxx',
          MaterialQuantity: 'xxx',
        },
        {
          MatSequenceNumber: 'xxx2',
          MaterialCode: 'xxx',
          MaterialDescription: 'xxx',
          MaterialQuality: 'xxx',
          Color: 'xxx',
          Specification: 'xxx',
          EntranceCode: 'xxx',
          MaterialQuantity: 'xxx',
        },
        {
          MatSequenceNumber: 'xxx3',
          MaterialCode: 'xxx',
          MaterialDescription: 'xxx',
          MaterialQuality: 'xxx',
          Color: 'xxx',
          Specification: 'xxx',
          EntranceCode: 'xxx',
          MaterialQuantity: 'xxx',
        },
        {
          MatSequenceNumber: 'xxx4',
          MaterialCode: 'xxx',
          MaterialDescription: 'xxx',
          MaterialQuality: 'xxx',
          Color: 'xxx',
          Specification: 'xxx',
          EntranceCode: 'xxx',
          MaterialQuantity: 'xxx',
        },
        {
          MatSequenceNumber: 'xxx5',
          MaterialCode: 'xxx',
          MaterialDescription: 'xxx',
          MaterialQuality: 'xxx',
          Color: 'xxx',
          Specification: 'xxx',
          EntranceCode: 'xxx',
          MaterialQuantity: 'xxx',
        },
        {
          MatSequenceNumber: 'xxx6',
          MaterialCode: 'xxx',
          MaterialDescription: 'xxx',
          MaterialQuality: 'xxx',
          Color: 'xxx',
          Specification: 'xxx',
          EntranceCode: 'xxx',
          MaterialQuantity: 'xxx',
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