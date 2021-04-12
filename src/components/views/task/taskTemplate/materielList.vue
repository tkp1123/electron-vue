<template>
  <div>
    <el-card class="box-card" shadow="never">
      <el-card shadow="never" style="padding: 10px">
        <el-row :gutter="20">
          <el-col :span="20" :xs="24">
            <el-row :gutter="20">
              <el-col
                class="col-padd"
                :span="6"
                :xl="6"
                :lg="6"
                :md="12"
                :sm="12"
                :xs="24"
              >
                <el-input
                  v-model="queryInfo"
                  clearable
                  placeholder="请输入任务单序号"
                >
                </el-input>
              </el-col>
              <el-col
                class="col-padd"
                :span="6"
                :xl="6"
                :lg="6"
                :md="12"
                :sm="12"
                :xs="24"
              >
                <el-input
                  v-model="queryInfo"
                  clearable
                  placeholder="请输入生产任务单号"
                >
                </el-input>
              </el-col>
              <el-col
                class="col-padd"
                :span="4"
                :xl="4"
                :lg="4"
                :md="12"
                :sm="12"
                :xs="24"
              >
                <el-select v-model="State" placeholder="请选择完成状态">
                  <el-option label="已完成" value="1"> </el-option>
                  <el-option label="进行中" value="2"> </el-option>
                  <el-option label="未执行" value="3"> </el-option>
                </el-select>
              </el-col>
              <el-col
                class="col-padd"
                :span="6"
                :xl="6"
                :lg="6"
                :md="12"
                :sm="12"
                :xs="24"
              >
                <el-date-picker
                  v-model="value1"
                  type="daterange"
                  range-separator="至"
                  start-placeholder="起始日期"
                  end-placeholder="截至日期"
                >
                </el-date-picker>
              </el-col>
            </el-row>
          </el-col>
          <el-col :span="4" :xs="24" class="text-right">
            <el-button type="primary" @click="search()">查询</el-button>
          </el-col>
        </el-row>
      </el-card>
      <el-row>
        <el-table :data="tableData" border stripe style="width: 100%">
          <el-table-column
            prop="MatSequenceNumber"
            label="任务单序号"
          ></el-table-column>
          <el-table-column
            prop="MaterialCode"
            label="品类类型"
          ></el-table-column>
          <el-table-column
            prop="MaterialDescription"
            label="生产任务单号"
          ></el-table-column>
          <el-table-column
            prop="MaterialQuality"
            label="SPA下单的生产批次号"
          ></el-table-column>
          <el-table-column
            prop="Color"
            label="任务单生产数量"
          ></el-table-column>
          <el-table-column
            prop="Specification"
            label="门扇尺寸-高(mm)"
          ></el-table-column>
          <el-table-column
            prop="EntranceCode"
            label="门扇尺寸-宽(mm)"
          ></el-table-column>
          <el-table-column
            prop="MaterialQuantity"
            label="门扇尺寸-厚(mm)"
          ></el-table-column>
          <el-table-column
            prop="MaterialQuantity"
            label="门扇款式"
          ></el-table-column>
          <el-table-column
            prop="MaterialQuantity"
            label="颜色"
          ></el-table-column>
          <el-table-column
            prop="MaterialQuantity"
            label="部件顺序号"
          ></el-table-column>
          <el-table-column
            prop="MaterialQuantity"
            label="部件唯一码"
          ></el-table-column>
          <el-table-column
            prop="MaterialQuantity"
            label="完成情况"
          ></el-table-column>
          <el-table-column
            prop="MaterialQuantity"
            label="完成状态"
          ></el-table-column>
          <el-table-column
            prop="MaterialQuantity"
            label="完成时间"
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
      queryInfo: '',
      value1: '',
      State: '',
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
    search() {},
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
.col-padd {
  padding: 5px 0;
}
</style>