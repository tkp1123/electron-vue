<template>
  <div>
    <el-card class="box-card" shadow="never">
      <el-row :gutter="10">
        <el-col :span="24" :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
          <el-card shadow="never">
            <el-row :gutter="10">
              <el-col :span="20" :xs="24">
                <el-row :gutter="10">
                  <el-col :span="12" :xs="24">
                    <el-row>
                      <el-col :span="12" :xs="24" class="panel-content-title"
                        >工序编号 :xxx</el-col
                      >
                      <el-col :span="12" :xs="24" class="panel-content-title"
                        >工序短名称 :xxx</el-col
                      >
                    </el-row>
                    <el-row>
                      <el-col :span="12" :xs="24" class="panel-content-title"
                        >生产批次号 :xxx</el-col
                      >
                      <el-col :span="12" :xs="24" class="panel-content-title"
                        >总任务数 :xxx</el-col
                      >
                    </el-row>
                    <el-row>
                      <el-col :span="12" :xs="24" class="panel-content-title"
                        >当前任务单序号 :xxx</el-col
                      >
                      <el-col :span="12" :xs="24" class="panel-content-title"
                        >当前任务单生产数量 :xxx</el-col
                      >
                    </el-row>
                  </el-col>
                  <el-col :span="12" :xs="24"> </el-col>
                </el-row>
              </el-col>
              <el-col :span="4" :xs="24">
                <el-row>
                  <el-col :span="24" class="row-button">
                    <el-button type="primary" @click="search()"
                      >切换手动模式</el-button
                    ></el-col
                  >
                  <el-col :span="24" class="row-button">
                    <el-button type="primary" @click="search()"
                      >请求接口数据</el-button
                    ></el-col
                  >
                </el-row>
              </el-col>
            </el-row>
          </el-card>
        </el-col>
      </el-row>
      <el-row>
        <el-table :data="tableData" border stripe style="width: 100%">
          <el-table-column
            prop="RequestCode"
            label="品类类型"
          ></el-table-column>
          <el-table-column
            prop="LineCode"
            label="门扇尺寸-高(mm)"
          ></el-table-column>
          <el-table-column
            prop="OperationCode"
            label="门扇尺寸-宽(mm)"
          ></el-table-column>
          <el-table-column
            prop="OperationShortName"
            label="门扇尺寸-厚(mm)"
          ></el-table-column>
          <el-table-column prop="EventCode" label="门扇款式"></el-table-column>
          <el-table-column prop="EventCode" label="颜色"></el-table-column>
          <el-table-column
            prop="EventCode"
            label="部件顺序号"
          ></el-table-column>
          <el-table-column
            prop="EventCode"
            label="部件唯一码"
          ></el-table-column>
          <el-table-column prop="EventCode" label="完成状态"></el-table-column>
          <!-- <el-table-column label="操作">
            <template slot-scope="scope">
              <el-button
                size="mini"
                type="primary"
                @click="handleDetail(scope.$index, scope.row)"
                >加工</el-button
              >
            </template>
          </el-table-column> -->
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
  //MES任务
  name: 'taskMES',
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
    handleDetail(index, row) {
      this.$confirm('是否加工?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning',
      })
        .then(() => {
          this.$message({
            type: 'success',
            message: '成功!',
          })
        })
        .catch(() => {
          this.$message({
            type: 'info',
            message: '取消',
          })
        })
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

.panel-content-title {
  display: flex;
  color: #999;
  flex-direction: column;
  justify-content: center;
  font-size: 14px;
  padding: 5px;
}
.row-button {
  padding: 10px;
}
</style>