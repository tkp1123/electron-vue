<template>
  <div>
    <el-card class="box-card" shadow="never">
      <el-row :gutter="10">
        <el-col :span="12" :xs="24" :sm="24" :md="24" :lg="24" :xl="12">
          <el-card shadow="never" style="margin: 30px">
            <div slot="header">
              <div class="dp-fx">
                <div class="dp-fx-title">信息总览</div>
              </div>
            </div>
            <el-row :gutter="10">
              <el-col :span="24" :xs="24">
                <el-row>
                  <el-col
                    :span="12"
                    :xs="24"
                    :sm="24"
                    :md="24"
                    :lg="12"
                    :xl="12"
                    class="panel-content-title"
                    >批次总数 :xxx</el-col
                  >
                  <el-col
                    :span="12"
                    :xs="24"
                    :sm="24"
                    :md="24"
                    :lg="12"
                    :xl="12"
                    class="panel-content-title"
                    >已完成批次总次数 :xxx</el-col
                  >
                </el-row>
                <el-row>
                  <el-col
                    :span="12"
                    :xs="24"
                    :sm="24"
                    :md="24"
                    :lg="12"
                    :xl="12"
                    class="panel-content-title"
                    >任务总数 :xxx</el-col
                  >
                  <el-col
                    :span="12"
                    :xs="24"
                    :sm="24"
                    :md="24"
                    :lg="12"
                    :xl="12"
                    class="panel-content-title"
                    >已完成任务总次数 :xxx</el-col
                  >
                </el-row>
                <el-row>
                  <el-col
                    :span="12"
                    :xs="24"
                    :sm="24"
                    :md="24"
                    :lg="12"
                    :xl="12"
                    class="panel-content-title"
                    >板件总数:xxx</el-col
                  >
                  <el-col
                    :span="12"
                    :xs="24"
                    :sm="24"
                    :md="24"
                    :lg="12"
                    :xl="12"
                    class="panel-content-title"
                    >已完成板件总数:xxx</el-col
                  >
                </el-row>
              </el-col>
              <el-col :span="12" :xs="24"> </el-col>
            </el-row>
          </el-card>
        </el-col>
      </el-row>
      <el-row :gutter="20" style="padding: 10px">
        <el-card shadow="never" style="padding: 10px">
          <el-row>
            <el-col :span="20" :xs="24">
              <el-row :gutter="20">
                <el-col
                  class="col-padd"
                  :span="6"
                  :xl="6"
                  :lg="8"
                  :md="12"
                  :sm="12"
                  :xs="24"
                >
                  <el-input
                    v-model="queryInfo"
                    clearable
                    placeholder="请输入生产批次号"
                  >
                  </el-input>
                </el-col>
                <el-col
                  class="col-padd"
                  :span="4"
                  :xl="4"
                  :lg="8"
                  :md="12"
                  :sm="12"
                  :xs="24"
                >
                  <el-select
                    v-model="NOKQuantity"
                    placeholder="请选择不良品数量排序"
                  >
                    <el-option label="由高到低" value="1"> </el-option>
                    <el-option label="由低到高" value="2"> </el-option>
                  </el-select>
                </el-col>
                <el-col
                  class="col-padd"
                  :span="4"
                  :xl="4"
                  :lg="8"
                  :md="12"
                  :sm="12"
                  :xs="24"
                >
                  <el-select
                    v-model="ScrappedQuantity"
                    placeholder="请选择报废品数量排序"
                  >
                    <el-option label="由高到低" value="1"> </el-option>
                    <el-option label="由低到高" value="2"> </el-option>
                  </el-select>
                </el-col>
                <el-col
                  class="col-padd"
                  :span="4"
                  :xl="4"
                  :lg="8"
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
                  :lg="8"
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
      </el-row>
      <el-row>
        <el-table :data="tableData" border stripe style="width: 100%">
          <el-table-column
            prop="RequestCode"
            label="请求编号"
          ></el-table-column>
          <el-table-column prop="LineCode" label="产线编号"></el-table-column>
          <el-table-column
            prop="OperationCode"
            label="工序编号"
          ></el-table-column>
          <el-table-column
            prop="OperationShortName"
            label="工序短名称"
          ></el-table-column>
          <el-table-column
            prop="EventCode"
            label="产出物料的物料编码"
          ></el-table-column>
          <el-table-column
            prop="EventCode"
            label="产出物料的物料名称或描述"
          ></el-table-column>
          <el-table-column
            prop="EventCode"
            label="生产批次号"
          ></el-table-column>
          <el-table-column
            prop="EventCode"
            label="请求(操作)时间"
          ></el-table-column>
          <el-table-column
            prop="EventCode"
            label="不良品数量"
          ></el-table-column>
          <el-table-column
            prop="EventCode"
            label="报废品数量"
          ></el-table-column>
          <el-table-column prop="EventCode" label="总任务数"></el-table-column>
          <el-table-column
            prop="EventCode"
            label="已完成任务数"
          ></el-table-column>
          <el-table-column prop="EventCode" label="完成状态"></el-table-column>
          <el-table-column
            prop="EventCode"
            label="任务完成时间"
          ></el-table-column>
          <el-table-column prop="EventCode" label="是否报工"></el-table-column>
          <el-table-column label="工艺信息">
            <template slot-scope="scope">
              <el-button
                size="mini"
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
  //任务和工艺信息
  name: 'taskInformation',
  data() {
    return {
      queryInfo: '',
      NOKQuantity: '',
      ScrappedQuantity: '',
      value1: '',
      State: '',
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
      this.$router.push('/taskInformationDetail')
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
.col-padd {
  padding: 5px 0;
}
.dp-fx {
  display: flex;
}
.dp-fx-title {
  font-size: 16px;
  padding: 5px 0 0 5px;
}
.el-row {
  margin: 0 !important;
}
.panel-content-title {
  display: flex;
  color: #999;
  flex-direction: column;
  justify-content: center;
  font-size: 14px;
  padding: 5px;
}
</style>