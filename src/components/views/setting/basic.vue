<template>
  <div>
    <el-card class="box-card" shadow="never">
      <el-row :gutter="20" style="padding: 10px">
        <el-card shadow="never" style="padding: 10px">
          <el-row>
            <el-col :span="20" :xs="24">
              <el-row>
                <el-col :span="7">
                  <el-input
                    v-model="queryInfo"
                    clearable
                    placeholder="请输入序号"
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
      <el-row>
        <el-table :data="tableData" border stripe style="width: 100%">
          <el-table-column prop="xuhao" label="序号"></el-table-column>
          <el-table-column prop="mingcheng" label="参数名称"></el-table-column>
          <el-table-column prop="zhi" label="参数值"></el-table-column>
          <el-table-column prop="shuoming" label="参数说明"></el-table-column>
          <el-table-column label="操作">
            <template slot-scope="scope">
              <el-button
                size="mini"
                type="warning"
                @click="editList(scope.$index, scope.row)"
                >编辑</el-button
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
    <el-dialog
      title="编辑参数"
      :visible.sync="editDialogVisible"
      width="50%"
      destroy-on-close
    >
      <el-form :model="formEdit" label-width="80px">
        <el-form-item label="序号" prop="name">
          <el-input v-model="formEdit.xuhao" :disabled="true"></el-input>
        </el-form-item>
        <el-form-item label="参数名称" prop="email">
          <el-input v-model="formEdit.mingcheng" type="email"></el-input>
        </el-form-item>
        <el-form-item label="参数值" prop="mobile">
          <el-input v-model="formEdit.zhi" type="phone"></el-input>
        </el-form-item>
        <el-form-item label="参数说明" prop="address">
          <el-input v-model="formEdit.shuoming" type="text"></el-input>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="editCancel()">取 消</el-button>
        <el-button type="primary" @click="editOk()">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>
<script>
export default {
  //基本参数
  name: 'basic',
  data() {
    return {
      queryInfo: '',
      editDialogVisible: false,
      tableData: [
        {
          xuhao: '1',
          mingcheng: 'xxx',
          zhi: 'xxx',
          shuoming: 'xxx',
        },
        {
          xuhao: '2',
          mingcheng: 'xxx',
          zhi: 'xxx',
          shuoming: 'xxx',
        },
        {
          xuhao: '3',
          mingcheng: 'xxx',
          zhi: 'xxx',
          shuoming: 'xxx',
        },
        {
          xuhao: '4',
          mingcheng: 'xxx',
          zhi: 'xxx',
          shuoming: 'xxx',
        },
        {
          xuhao: '5',
          mingcheng: 'xxx',
          zhi: 'xxx',
          shuoming: 'xxx',
        },
        {
          xuhao: '6',
          mingcheng: 'xxx',
          zhi: 'xxx',
          shuoming: 'xxx',
        },
      ],
      formEdit: {
        xuhao: '',
        mingcheng: '',
        zhi: '',
        shuoming: '',
      },
    }
  },
  methods: {
    handleSizeChange(val) {},
    handleCurrentChange(val) {},
    editList(index, row) {
      this.formEdit.xuhao = row.xuhao
      this.formEdit.mingcheng = row.mingcheng
      this.formEdit.zhi = row.zhi
      this.formEdit.shuoming = row.shuoming
      this.editDialogVisible = true
    },
    editCancel() {
      this.formEdit = {
        xuhao: '',
        mingcheng: '',
        zhi: '',
        shuoming: '',
      }
      this.editDialogVisible = false
    },
    editOk() {
      this.formEdit = {
        xuhao: '',
        mingcheng: '',
        zhi: '',
        shuoming: '',
      }
      this.editDialogVisible = false
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
</style>