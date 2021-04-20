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
              <el-button type="primary" @click="getMes_info_search()"
                >查询</el-button
              >
            </el-col>
          </el-row>
        </el-card>
      </el-row>
      <el-row>
        <el-table :data="tableData" border stripe style="width: 100%">
          <el-table-column prop="id" label="序号"></el-table-column>
          <el-table-column
            prop="parameterName"
            label="参数名称"
          ></el-table-column>
          <el-table-column
            prop="parameterData"
            label="参数值"
          ></el-table-column>
          <el-table-column
            prop="parameterContent"
            label="参数说明"
          ></el-table-column>
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
        <el-form-item label="序号" prop="id">
          <el-input v-model="formEdit.id" :disabled="true"></el-input>
        </el-form-item>
        <el-form-item label="参数名称" prop="parameterName">
          <el-input
            v-model="formEdit.parameterName"
            type="text"
            :disabled="true"
          ></el-input>
        </el-form-item>
        <el-form-item label="参数值" prop="parameterData">
          <el-input v-model="formEdit.parameterData" type="text"></el-input>
        </el-form-item>
        <el-form-item label="参数说明" prop="parameterContent">
          <el-input
            v-model="formEdit.parameterContent"
            type="text"
            :disabled="true"
          ></el-input>
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
import { dateUtil } from '../../../common/dateUtil'
export default {
  //mes接口
  name: 'mesInterface',
  data() {
    return {
      queryInfo: '',
      editDialogVisible: false,
      tableData: [],
      total: 0,
      currentPage: 1,
      pageSize: 10,
      formEdit: {
        id: '',
        parameterName: '',
        parameterData: '',
        parameterContent: '',
      },
    }
  },
  mounted() {
    this.getMes_info()
  },
  methods: {
    getMes_info() {
      let param = {
        id: this.queryInfo,
        pageIndex: this.currentPage,
        pageSize: this.pageSize,
        sortDirection: 'ASC',
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
      console.log(`每页 ${val} 条`)
      this.currentPage = 1
    },
    handleCurrentChange(val) {
      this.currentPage = val
      console.log(`当前页: ${val}`)
    },
    editList(index, row) {
      this.formEdit.id = row.id
      this.formEdit.parameterName = row.parameterName
      this.formEdit.parameterData = row.parameterData
      this.formEdit.parameterContent = row.parameterContent
      this.editDialogVisible = true
    },
    editCancel() {
      this.formEdit = {
        id: '',
        parameterName: '',
        parameterData: '',
        parameterContent: '',
      }
      this.editDialogVisible = false
    },
    editOk() {
      let param = {
        id: this.formEdit.id,
        parameterData: this.formEdit.parameterData,
      }
      mes_info_upgrade(param, {
        parameterData: param.parameterData,
      }).then((res) => {
        if (res.name == '') {
          this.$notify({
            title: '提示',
            type: 'success',
            message: '操作成功',
            position: 'bottom-right',
            duration: '5000',
          })
          this.formEdit = {
            id: '',
            parameterName: '',
            parameterData: '',
            parameterContent: '',
          }
          this.editDialogVisible = false
          this.getMes_info_search()
        } else {
          this.$notify({
            title: '提示',
            type: 'error',
            message: '操作失败',
            position: 'bottom-right',
            duration: '5000',
          })
        }
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
.text-right {
  text-align: right;
}
</style>