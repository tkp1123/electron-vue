<template>
  <div>
    <el-card class="box-card" shadow="never">
      <el-row :gutter="20" style="padding: 10px">
        <el-card shadow="never" style="padding: 10px">
          <el-row>
            <el-col :span="20" :xs="24">
              <el-row>
                <el-col :span="4">
                  <el-button
                    type="primary"
                    icon="el-icon-plus"
                    @click="add_role()"
                    >添加角色</el-button
                  >
                </el-col>
                <el-col :span="7">
                  <el-input
                    v-model="queryInfo"
                    clearable
                    placeholder="请输入名称"
                  >
                  </el-input>
                </el-col>
              </el-row>
            </el-col>
            <el-col :span="4" :xs="24" class="text-right">
              <el-button type="primary" @click="role_search()">查询</el-button>
            </el-col>
          </el-row>
        </el-card>
      </el-row>
      <el-row>
        <el-table :data="tableData" border stripe style="width: 100%">
          <el-table-column prop="id" label="角色ID"></el-table-column>
          <el-table-column prop="type" label="角色类型"></el-table-column>
          <el-table-column prop="name" label="角色名称"></el-table-column>
          <el-table-column prop="description" label="描述"></el-table-column>
          <el-table-column
            prop="created"
            label="创建时间"
            :formatter="formatCreated"
          ></el-table-column>
          <el-table-column
            prop="updated"
            label="修改时间"
            :formatter="formatCreated"
          ></el-table-column>
          <el-table-column label="操作" width="200">
            <template slot-scope="scope">
              <el-button
                size="mini"
                type="warning"
                @click="editRole(scope.$index, scope.row)"
              >
                修改权限
              </el-button>
              <el-button
                size="mini"
                type="warning"
                @click="editList(scope.$index, scope.row)"
              >
                编辑
              </el-button>
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
      title="添加角色"
      :visible.sync="dialogVisible"
      width="50%"
      destroy-on-close
    >
      <el-form :model="form" label-width="80px">
        <el-form-item label="名称" prop="name">
          <el-input v-model="form.name" type="text"></el-input>
        </el-form-item>
        <el-form-item label="描述" prop="description">
          <el-input v-model="form.description" type="text"></el-input>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="addCancel()">取 消</el-button>
        <el-button type="primary" @click="addOk()">确 定</el-button>
      </span>
    </el-dialog>
    <el-dialog
      title="修改角色"
      :visible.sync="editDialogVisible"
      width="50%"
      destroy-on-close
    >
      <el-form :model="formEdit" label-width="80px">
        <el-form-item label="名称" prop="name">
          <el-input v-model="formEdit.name" type="text"></el-input>
        </el-form-item>
        <el-form-item label="描述" prop="description">
          <el-input v-model="formEdit.description" type="text"></el-input>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="EditCancel()">取 消</el-button>
        <el-button type="primary" @click="EditOk()">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>
<script>
import { api_role, api_role_post, api_role_put } from '@/api/cloudApi'
import { Resources } from '@/util/Resources'
import { Validation } from '@/util/Validation'
import { dateUtil } from '../../../common/dateUtil'
export default {
  //角色管理
  name: 'roleManage',
  data() {
    return {
      queryInfo: '',
      tableData: [],
      total: 0,
      currentPage: 1,
      pageSize: 10,
      dialogVisible: false,
      editDialogVisible: false,
      form: {
        name: '',
        description: '',
      },
      formEdit: {
        name: '',
        description: '',
        id: '',
      },
    }
  },
  mounted() {
    this.role_info()
  },
  methods: {
    role_info() {
      let param = {
        sortProperties: this.queryInfo,
        pageIndex: this.currentPage,
        pageSize: this.pageSize,
        sortDirection: 'ASC',
        parameterType: 'BASIC',
      }
      api_role(param).then((res) => {
        if (res.name == '') {
          this.tableData = res.data.items
          this.total = res.data.itemCount
        }
      })
    },
    add_role() {
      if (Validation.checkResource(Resources.ROLE_ADD)) {
        //do something
        this.dialogVisible = true
      } else {
        this.$message.error('您无权这么做')
      }
    },
    role_search() {
      this.currentPage = 1
      this.role_info()
    },
    handleSizeChange(val) {
      this.pageSize = val
      this.currentPage = 1
    },
    handleCurrentChange(val) {
      this.currentPage = val
    },
    editList(index, row) {
      if (Validation.checkResource(Resources.ROLE_UPDATE)) {
        //do something
        if (row.type === 'ROOT') {
          this.$message.error('您无权这么做')
          return
        }
        this.formEdit.id = row.id
        this.formEdit.name = row.name
        this.formEdit.description = row.description
        this.editDialogVisible = true
      } else {
        this.$message.error('您无权这么做')
      }
    },
    editRole(index, row) {
      if (Validation.checkResource(Resources.ROLE_UPDATE)) {
        //do something
        if (row.type === 'ROOT') {
          this.$message.error('您无权这么做')
          return
        }
        this.$router.push({
          path: '/roleEdit',
          query: { id: row.id },
        })
      } else {
        this.$message.error('您无权这么做')
      }
    },
    addCancel() {
      this.form = {
        name: '',
        description: '',
      }
      this.dialogVisible = false
    },
    addOk() {
      api_role_post(this.form).then((res) => {
        if (res.name == '') {
          this.form = {
            name: '',
            description: '',
          }
          this.dialogVisible = false
          this.role_search()
        }
      })
    },
    EditCancel() {
      this.formEdit = {
        name: '',
        description: '',
        id: '',
      }
      this.editDialogVisible = false
    },
    EditOk() {
      api_role_put(this.formEdit).then((res) => {
        if (res.name == '') {
          this.formEdit = {
            name: '',
            description: '',
            id: '',
          }
          this.editDialogVisible = false
          this.role_search()
        }
      })
    },
    formatCreated(row, column, cellValue) {
      if (!cellValue) return ''
      return dateUtil.fullFormatter(new Date(cellValue))
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