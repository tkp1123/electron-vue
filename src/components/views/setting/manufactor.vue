<template>
  <div>
    <el-card class="box-card" shadow="never">
      <el-row :gutter="20" style="padding: 10px">
        <el-card shadow="never" style="padding: 10px">
          <el-row>
            <el-col :span="16" :xs="24">
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
            <el-col :span="8" :xs="24" class="text-right">
              <el-button type="primary" @click="getMes_info_search()">
                保存
              </el-button>
              <el-button type="primary" @click="getMes_info_search()">
                查询
              </el-button>
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
            :current-page="currentPage"
            :page-sizes="[10, 20, 30]"
            :page-size="pageSize"
            layout="total, sizes, prev, pager, next, jumper"
            :total="total"
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
import { mes_info, mes_info_upgrade } from '@/api/cloudApi'
export default {
  //厂家参数
  name: 'manufactor',
  data() {
    return {
      queryInfo: '',
      editDialogVisible: false,
      tableData: [],
      total: 0,
      currentPage: 1,
      pageSize: 10,
      formEdit: {
        xuhao: '',
        mingcheng: '',
        zhi: '',
        shuoming: '',
      },
    }
  },
  mounted() {
    this.getMes_info()
  },
  methods: {
    getMes_info() {
      let param = {
        sortProperties: this.queryInfo,
        pageIndex: this.currentPage,
        pageSize: this.pageSize,
        sortDirection: 'ASC',
        parameterType: 'FACTORY',
      }
      mes_info(param).then((res) => {
        if (res.name == '') {
          this.tableData = res.data.items
          this.total = res.data.itemCount
        }
      })
    },
    getMes_info_search() {
      this.currentPage = 1
      this.getMes_info()
    },
    handleSizeChange(val) {
      this.pageSize = val
      this.currentPage = 1
    },
    handleCurrentChange(val) {
      this.currentPage = val
    },
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