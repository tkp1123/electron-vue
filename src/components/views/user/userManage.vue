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
                    @click="user_add()"
                    >添加用户</el-button
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
              <el-button type="primary" @click="user_search()">查询</el-button>
            </el-col>
          </el-row>
        </el-card>
      </el-row>
      <el-row>
        <el-table :data="tableData" border stripe style="width: 100%">
          <el-table-column prop="userName" label="登录名称"></el-table-column>
          <el-table-column prop="trueName" label="真实名称"></el-table-column>
          <el-table-column prop="userStatus" label="用户状态">
            <template slot-scope="scope">
              <span v-if="scope.row.userStatus == 'OFFLINE'">不在线</span>
              <span v-else-if="scope.row.userStatus == 'ONLINE'">在线</span>
            </template>
          </el-table-column>
          <el-table-column
            prop="registerDate"
            label="注册时间"
            :formatter="formatRegisterDate"
          ></el-table-column>
          <el-table-column
            prop="loginDate"
            label="登录时间"
            :formatter="formatRegisterDate"
          ></el-table-column>
          <el-table-column
            prop="signOutDate"
            label="退出时间"
            :formatter="formatRegisterDate"
          ></el-table-column>
          <el-table-column
            prop="updated"
            label="修改时间"
            :formatter="formatRegisterDate"
          ></el-table-column>
          <el-table-column label="操作" width="150">
            <template slot-scope="scope">
              <el-button
                size="mini"
                type="warning"
                @click="editList(scope.$index, scope.row)"
              >
                编辑
              </el-button>
              <el-button
                size="mini"
                type="danger"
                @click="deleteList(scope.$index, scope.row)"
              >
                删除
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
      title="添加用户"
      :visible.sync="dialogVisible"
      width="50%"
      destroy-on-close
    >
      <el-form :model="form" label-width="80px">
        <el-form-item label="登录名称" prop="name">
          <el-input v-model="form.userName" type="text"></el-input>
        </el-form-item>
        <el-form-item label="真实名称" prop="name">
          <el-input v-model="form.trueName" type="text"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="name">
          <el-input v-model="form.password" type="text"></el-input>
        </el-form-item>
        <el-form-item label="角色">
          <el-select v-model="form.roleId" placeholder="请选择角色">
            <el-option
              v-for="item in roleList"
              :key="item.id"
              :label="item.name"
              :value="item.id"
            >
            </el-option>
          </el-select>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="addCancel()">取 消</el-button>
        <el-button type="primary" @click="addOk()">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>
<script>
import {
  api_users,
  api_users_delete,
  api_role,
  api_users_post,
} from '@/api/cloudApi'
import { Resources } from '@/util/Resources'
import { Validation } from '@/util/Validation'
import { dateUtil } from '../../../common/dateUtil'
export default {
  //用户管理
  name: 'userManage',
  data() {
    return {
      queryInfo: '',
      tableData: [],
      total: 0,
      currentPage: 1,
      pageSize: 10,
      dialogVisible: false,
      form: {
        password: '',
        trueName: '',
        userName: '',
        roleId: '',
      },
      roleList: [],
    }
  },
  mounted() {
    this.user_info()
  },
  methods: {
    user_info() {
      let param = {
        sortProperties: this.queryInfo,
        pageIndex: this.currentPage,
        pageSize: this.pageSize,
        sortDirection: 'ASC',
        parameterType: 'BASIC',
      }
      api_users(param).then((res) => {
        if (res.name == '') {
          this.tableData = res.data.items
          this.total = res.data.itemCount
          this.get_api_role()
        }
      })
    },
    get_api_role() {
      let para = {
        pageIndex: 1,
        pageSize: 100,
        sortDirection: 'ASC',
      }
      api_role(para).then((res) => {
        if (res.name == '') {
          this.roleList = res.data.items
        }
      })
    },
    user_add() {
      if (Validation.checkResource(Resources.USERS_ADD)) {
        //do something
        this.dialogVisible = true
      } else {
        this.$message.error('您无权这么做')
      }
    },
    user_search() {
      this.currentPage = 1
      this.user_info()
    },
    handleSizeChange(val) {
      this.pageSize = val
      this.currentPage = 1
    },
    handleCurrentChange(val) {
      this.currentPage = val
    },
    editList(index, row) {
      console.log(Validation.checkResource(Resources.USERS_UPDATE))
      if (Validation.checkResource(Resources.USERS_UPDATE)) {
        //do something
        this.$router.push({
          path: '/userEdit',
          query: { id: row.id },
        })
      } else {
        this.$message.error('您无权这么做')
      }
    },
    deleteList(index, row) {
      if (Validation.checkResource(Resources.USERS_DELETE)) {
        //do something
        this.$confirm('是否删除', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning',
        }).then(() => {
          api_users_delete(row).then((res) => {
            if (res.name == '') {
              this.$message({
                message: '删除成功',
                type: 'success',
              })
              this.user_search()
            }
          })
        })
      } else {
        this.$message.error('您无权这么做')
      }
    },
    addCancel() {
      this.form = {
        password: '',
        trueName: '',
        userName: '',
        roleId: '',
      }
      this.dialogVisible = false
    },
    addOk() {
      if (this.form.userName == '') {
        this.$message.error('请输入登录名称')
        return
      }
      if (this.form.trueName == '') {
        this.$message.error('请输入真实名称')
        return
      }
      if (this.form.password == '') {
        this.$message.error('请输入密码')
        return
      }
      if (this.form.roleId == '') {
        this.$message.error('请输入选择角色')
        return
      }
      api_users_post(this.form).then((res) => {
        if (res.name == '') {
          this.form = {
            password: '',
            trueName: '',
            userName: '',
            roleId: '',
          }
          this.dialogVisible = false
          this.$message({
            message: '创建成功',
            type: 'success',
          })
          this.user_search()
        } else {
          this.$message.error(res.message)
        }
      })
    },
    formatRegisterDate(row, column, cellValue) {
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