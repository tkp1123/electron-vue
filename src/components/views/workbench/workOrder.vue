<template>
  <div>
    <el-card class="box-card" shadow="never">
      <el-row :gutter="20" style="padding: 10px">
        <el-card shadow="never" style="padding: 10px">
          <el-row>
            <el-col :span="20" :xs="24" :sm="20" :md="20">
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
                    placeholder="请输入任务单序号"
                  >
                  </el-input>
                </el-col>
                <el-col
                  class="col-padd"
                  :span="7"
                  :xs="24"
                  :sm="24"
                  :md="8"
                  :lg="7"
                >
                  <el-select v-model="State" placeholder="请选择完成状态">
                    <el-option label="已完成" value="1"> </el-option>
                    <el-option label="进行中" value="2"> </el-option>
                    <el-option label="未执行" value="3"> </el-option>
                  </el-select>
                </el-col>
              </el-row>
            </el-col>
            <el-col :span="4" :xs="24" :sm="4" :md="4" class="text-right">
              <el-button type="primary" @click="search()">查询</el-button>
            </el-col>
          </el-row>
        </el-card>
      </el-row>
      <el-row>
        <el-table :data="tableData" border stripe style="width: 100%">
          <el-table-column
            prop="RequestCode"
            label="任务单序号"
          ></el-table-column>
          <el-table-column prop="LineCode" label="品类类型"></el-table-column>
          <el-table-column
            prop="OperationCode"
            label="任务单生产数量"
          ></el-table-column>
          <el-table-column
            prop="OperationShortName"
            label="门扇尺寸-高(mm)"
          ></el-table-column>
          <el-table-column
            prop="EventCode"
            label="门扇尺寸-宽(mm)"
          ></el-table-column>
          <el-table-column
            prop="EventCode"
            label="门扇尺寸-厚(mm)"
          ></el-table-column>
          <el-table-column prop="EventCode" label="门扇款式"></el-table-column>
          <el-table-column prop="EventCode" label="颜色"></el-table-column>
          <el-table-column prop="EventCode" label="状态"></el-table-column>
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
  methods: {
    handleSizeChange(val) {},
    handleCurrentChange(val) {},
    handleRemove(file, fileList) {
      console.log(file, fileList)
    },
    handlePreview(file) {
      console.log(file)
    },
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