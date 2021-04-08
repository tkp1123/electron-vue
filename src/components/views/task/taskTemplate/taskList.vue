<template>
  <div>
    <el-card class="box-card" shadow="never">
      <el-row>
        <el-table :data="tableData" border stripe style="width: 100%">
          <el-table-column
            prop="TaskSequenceNumber"
            label="任务单序号"
          ></el-table-column>
          <el-table-column
            prop="CategoryType"
            label="品类类型"
          ></el-table-column>
          <el-table-column
            prop="TaskNumber"
            label="生产任务单号"
          ></el-table-column>
          <el-table-column
            prop="SAPBatchNumber"
            label="SAP下发的生产批次号"
          ></el-table-column>
          <el-table-column
            prop="SAPOrderDescription"
            label="SAP订单描述（原面单上的物料描述）"
          ></el-table-column>
          <el-table-column
            prop="Quantity"
            label="任务单生产数量"
          ></el-table-column>
          <el-table-column
            prop="Outside_Height"
            label="门套板竖板长度（原面单外径尺寸-高）(mm)"
          ></el-table-column>
          <el-table-column
            prop="Outside_Width"
            label="门套板横板长度（原面单外径尺寸-宽）(mm)"
          ></el-table-column>
          <el-table-column
            prop="Outside_Thickness"
            label="门套板的宽度（原面单外径尺寸-厚）(mm)"
          ></el-table-column>
          <el-table-column
            prop="DoorPocket_Style"
            label="门套款式"
          ></el-table-column>
          <el-table-column
            prop="DoorLeaf_Height"
            label="门扇尺寸-高(mm)"
          ></el-table-column>
          <el-table-column
            prop="DoorLeaf_Width"
            label="门扇尺寸-宽(mm)"
          ></el-table-column>
          <el-table-column
            prop="DoorLeaf_Thickness"
            label="门扇尺寸-厚(mm)"
          ></el-table-column>
          <el-table-column
            prop="DoorLeaf_Style"
            label="门扇款式"
          ></el-table-column>
          <el-table-column prop="Color" label="颜色"></el-table-column>
          <el-table-column
            prop="StripSides"
            label="线条面数(单面/双面)"
          ></el-table-column>
          <el-table-column
            prop="DoorCasing_PushSide"
            label="门套线-推面(mm)"
          ></el-table-column>
          <el-table-column
            prop="DoorCasing_PullSide"
            label="门套线-拉面(mm)"
          ></el-table-column>
          <el-table-column
            prop="DoorCasing_Width"
            label="门套线-线宽(mm)"
          ></el-table-column>
          <el-table-column
            prop="DoorHead_PushSide"
            label="门头-推面 (造型的文字描述)"
          ></el-table-column>
          <el-table-column
            prop="DoorHead_PullSide"
            label="门头-拉面(造型的文字描述)"
          ></el-table-column>
          <el-table-column
            prop="Comment"
            label="备注（客户特殊需求，可无）"
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
  //生产任务单集合
  data() {
    return {
      tableData: [
        {
          TaskSequenceNumber: 'xxx1',
          CategoryType: 'xxx',
          TaskNumber: 'xxx',
          SAPBatchNumber: 'xxx',
          SAPOrderDescription: 'xxx',
          Quantity: 'xxx',
          Outside_Height: 'xxx',
          Outside_Width: 'xxx',
          Outside_Thickness: 'xxx',
          DoorPocket_Style: 'xxx',
          DoorLeaf_Height: 'xxx',
          DoorLeaf_Width: 'xxx',
          DoorLeaf_Thickness: 'xxx',
          DoorLeaf_Style: 'xxx',
          Color: 'xxx',
          StripSides: 'xxx',
          DoorCasing_PushSide: 'xxx',
          DoorCasing_PullSide: 'xxx',
          DoorCasing_Width: 'xxx',
          DoorHead_PushSide: 'xxx',
          DoorHead_PullSide: 'xxx',
          Comment: 'xxx',
        },
        {
          TaskSequenceNumber: 'xxx2',
          CategoryType: 'xxx',
          TaskNumber: 'xxx',
          SAPBatchNumber: 'xxx',
          SAPOrderDescription: 'xxx',
          Quantity: 'xxx',
          Outside_Height: 'xxx',
          Outside_Width: 'xxx',
          Outside_Thickness: 'xxx',
          DoorPocket_Style: 'xxx',
          DoorLeaf_Height: 'xxx',
          DoorLeaf_Width: 'xxx',
          DoorLeaf_Thickness: 'xxx',
          DoorLeaf_Style: 'xxx',
          Color: 'xxx',
          StripSides: 'xxx',
          DoorCasing_PushSide: 'xxx',
          DoorCasing_PullSide: 'xxx',
          DoorCasing_Width: 'xxx',
          DoorHead_PushSide: 'xxx',
          DoorHead_PullSide: 'xxx',
          Comment: 'xxx',
        },
        {
          TaskSequenceNumber: 'xxx3',
          CategoryType: 'xxx',
          TaskNumber: 'xxx',
          SAPBatchNumber: 'xxx',
          SAPOrderDescription: 'xxx',
          Quantity: 'xxx',
          Outside_Height: 'xxx',
          Outside_Width: 'xxx',
          Outside_Thickness: 'xxx',
          DoorPocket_Style: 'xxx',
          DoorLeaf_Height: 'xxx',
          DoorLeaf_Width: 'xxx',
          DoorLeaf_Thickness: 'xxx',
          DoorLeaf_Style: 'xxx',
          Color: 'xxx',
          StripSides: 'xxx',
          DoorCasing_PushSide: 'xxx',
          DoorCasing_PullSide: 'xxx',
          DoorCasing_Width: 'xxx',
          DoorHead_PushSide: 'xxx',
          DoorHead_PullSide: 'xxx',
          Comment: 'xxx',
        },
        {
          TaskSequenceNumber: 'xxx4',
          CategoryType: 'xxx',
          TaskNumber: 'xxx',
          SAPBatchNumber: 'xxx',
          SAPOrderDescription: 'xxx',
          Quantity: 'xxx',
          Outside_Height: 'xxx',
          Outside_Width: 'xxx',
          Outside_Thickness: 'xxx',
          DoorPocket_Style: 'xxx',
          DoorLeaf_Height: 'xxx',
          DoorLeaf_Width: 'xxx',
          DoorLeaf_Thickness: 'xxx',
          DoorLeaf_Style: 'xxx',
          Color: 'xxx',
          StripSides: 'xxx',
          DoorCasing_PushSide: 'xxx',
          DoorCasing_PullSide: 'xxx',
          DoorCasing_Width: 'xxx',
          DoorHead_PushSide: 'xxx',
          DoorHead_PullSide: 'xxx',
          Comment: 'xxx',
        },
        {
          TaskSequenceNumber: 'xxx5',
          CategoryType: 'xxx',
          TaskNumber: 'xxx',
          SAPBatchNumber: 'xxx',
          SAPOrderDescription: 'xxx',
          Quantity: 'xxx',
          Outside_Height: 'xxx',
          Outside_Width: 'xxx',
          Outside_Thickness: 'xxx',
          DoorPocket_Style: 'xxx',
          DoorLeaf_Height: 'xxx',
          DoorLeaf_Width: 'xxx',
          DoorLeaf_Thickness: 'xxx',
          DoorLeaf_Style: 'xxx',
          Color: 'xxx',
          StripSides: 'xxx',
          DoorCasing_PushSide: 'xxx',
          DoorCasing_PullSide: 'xxx',
          DoorCasing_Width: 'xxx',
          DoorHead_PushSide: 'xxx',
          DoorHead_PullSide: 'xxx',
          Comment: 'xxx',
        },
        {
          TaskSequenceNumber: 'xxx6',
          CategoryType: 'xxx',
          TaskNumber: 'xxx',
          SAPBatchNumber: 'xxx',
          SAPOrderDescription: 'xxx',
          Quantity: 'xxx',
          Outside_Height: 'xxx',
          Outside_Width: 'xxx',
          Outside_Thickness: 'xxx',
          DoorPocket_Style: 'xxx',
          DoorLeaf_Height: 'xxx',
          DoorLeaf_Width: 'xxx',
          DoorLeaf_Thickness: 'xxx',
          DoorLeaf_Style: 'xxx',
          Color: 'xxx',
          StripSides: 'xxx',
          DoorCasing_PushSide: 'xxx',
          DoorCasing_PullSide: 'xxx',
          DoorCasing_Width: 'xxx',
          DoorHead_PushSide: 'xxx',
          DoorHead_PullSide: 'xxx',
          Comment: 'xxx',
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