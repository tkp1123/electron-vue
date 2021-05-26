<template>
  <div>
    <el-card class="box-card" shadow="never">
      <el-row :gutter="20" style="padding: 10px">
        <el-card shadow="never" style="padding: 10px">
          <el-row>
            <el-col :span="16" :xs="24" :sm="20" :md="20">
              <el-row :gutter="20">
                <el-col
                  class="col-padd"
                  :span="4"
                  :xs="24"
                  :sm="24"
                  :md="8"
                  :lg="4"
                >
                  <el-upload
                    class="upload-demo"
                    action="https://jsonplaceholder.typicode.com/posts/"
                    :on-preview="handlePreview"
                    :on-remove="handleRemove"
                    :before-remove="beforeRemove"
                    :multiple="false"
                    :limit="1"
                    accept=".xlsx"
                    :on-exceed="handleExceed"
                    :file-list="fileList"
                  >
                    <el-button icon="el-icon-plus" type="primary"
                      >添加工单</el-button
                    ></el-upload
                  >
                </el-col>
                <el-col
                  class="col-padd"
                  :span="7"
                  :xs="24"
                  :sm="24"
                  :md="8"
                  :lg="7"
                >
                  <el-input
                    v-model="queryInfo"
                    clearable
                    placeholder="请输入生产批次号"
                  >
                  </el-input>
                </el-col>
              </el-row>
            </el-col>
            <el-col :span="2" class="text-right">
              <el-button type="primary" @click="search()">查询</el-button>
            </el-col>
            <el-col :span="2" class="text-right">
              <el-button type="primary" @click="search()">提交</el-button>
            </el-col>
          </el-row>
        </el-card>
      </el-row>
      <el-row v-if="parameterName == '021'">
        <el-table :data="tableData" border stripe style="width: 100%">
          <el-table-column
            prop="RequestCode"
            label="产线编号"
          ></el-table-column>
          <el-table-column prop="LineCode" label="托盘编号"></el-table-column>
          <el-table-column
            prop="OperationCode"
            label="物料编号"
          ></el-table-column>
          <el-table-column
            prop="OperationShortName"
            label="物料描述"
          ></el-table-column>
          <el-table-column
            prop="EventCode"
            label="门扇尺寸-高"
          ></el-table-column>
          <el-table-column
            prop="EventCode"
            label="门扇尺寸-宽"
          ></el-table-column>
          <el-table-column
            prop="EventCode"
            label="门扇尺寸-厚"
          ></el-table-column>
          <el-table-column prop="EventCode" label="门扇款式"></el-table-column>
          <el-table-column prop="EventCode" label="物料数量"></el-table-column>
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

      <el-row v-else-if="parameterName == '029'">
        <el-table :data="tableData" border stripe style="width: 100%">
          <el-table-column
            prop="RequestCode"
            label="产线编号"
          ></el-table-column>
          <el-table-column prop="LineCode" label="物料编号"></el-table-column>
          <el-table-column
            prop="OperationCode"
            label="物料描述"
          ></el-table-column>
          <el-table-column
            prop="OperationShortName"
            label="材料"
          ></el-table-column>
          <el-table-column prop="EventCode" label="颜色"></el-table-column>
          <el-table-column prop="EventCode" label="规格"></el-table-column>
          <el-table-column
            prop="EventCode"
            label="投入物料数量"
          ></el-table-column>
          <el-table-column
            prop="EventCode"
            label="输出物料尺寸"
          ></el-table-column>
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
      <el-row v-else-if="parameterName == '011'">
        <el-table :data="tableData" border stripe style="width: 100%">
          <el-table-column
            prop="RequestCode"
            label="物料序号"
          ></el-table-column>
          <el-table-column prop="LineCode" label="物料编号"></el-table-column>
          <el-table-column
            prop="OperationCode"
            label="物料描述"
          ></el-table-column>
          <el-table-column
            prop="OperationShortName"
            label="材质"
          ></el-table-column>
          <el-table-column prop="EventCode" label="颜色"></el-table-column>
          <el-table-column prop="EventCode" label="规格"></el-table-column>
          <el-table-column
            prop="EventCode"
            label="上料口编号"
          ></el-table-column>
          <el-table-column
            prop="EventCode"
            label="投入物料的数量"
          ></el-table-column>
          <el-table-column prop="EventCode" label="封边材料"></el-table-column>
          <el-table-column prop="EventCode" label="封边类型"></el-table-column>
          <el-table-column prop="EventCode" label="开槽工艺"></el-table-column>
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
      <el-row v-else-if="parameterName == '014'">
        <el-table :data="tableData" border stripe style="width: 100%">
          <el-table-column
            prop="RequestCode"
            label="物料序号"
          ></el-table-column>
          <el-table-column prop="LineCode" label="物料编号"></el-table-column>
          <el-table-column
            prop="OperationCode"
            label="物料描述"
          ></el-table-column>
          <el-table-column
            prop="OperationShortName"
            label="材质"
          ></el-table-column>
          <el-table-column prop="EventCode" label="颜色"></el-table-column>
          <el-table-column prop="EventCode" label="规格"></el-table-column>
          <el-table-column prop="EventCode" label="温度"></el-table-column>
          <el-table-column
            prop="EventCode"
            label="投入物料的数量"
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
  //自建工单
  name: 'workOrder',
  data() {
    return {
      parameterName: '',
      queryInfo: '',
      State: '',
      fileList: [],
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
  created() {
    this.parameterName = this.$store.state.parameterName.parameterName
  },
  methods: {
    handleSizeChange(val) {},
    handleCurrentChange(val) {},
    handleRemove(file, fileList) {},
    handleDetail(index, row) {
      this.$router.push('/workOrderDetail')
    },
    handlePreview(file) {},
    handleExceed(files, fileList) {
      this.$message.warning(
        `当前限制选择 3 个文件，本次选择了 ${files.length} 个文件，共选择了 ${
          files.length + fileList.length
        } 个文件`
      )
    },
    beforeRemove(file, fileList) {
      return this.$confirm(`确定移除 ${file.name}？`)
    },
    // addWorkOrder() {
    //   this.$router.push('/addWorkOrder')
    // },
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