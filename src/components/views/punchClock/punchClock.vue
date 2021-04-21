<template>
  <div>
    <el-card class="box-card" shadow="never">
      <el-row :gutter="20">
        <el-card shadow="never" style="padding: 10px">
          <el-row :gutter="20">
            <el-col :span="18" :xs="24">
              <el-row>
                <el-col :span="7">
                  <el-select
                    v-model="name"
                    filterable
                    @change="changeItem"
                    placeholder="请选择用户名称"
                  >
                    <el-option
                      v-for="item in userList"
                      :key="item.id"
                      :label="item.userName"
                      :value="item.userName"
                    >
                    </el-option>
                  </el-select>
                </el-col>
              </el-row>
            </el-col>
            <el-col
              :span="6"
              :xs="24"
              class="text-right"
              @click.native="changeStatus"
            >
              <el-button type="primary">{{ signStatus }}</el-button>
            </el-col>
          </el-row>
        </el-card>
      </el-row>
      <el-row>
        <el-table
          :data="tableData"
          border
          stripe
          style="width: 100%"
          :header-cell-style="{ 'text-align': 'center' }"
        >
          <el-table-column prop="userName" label="用户名"></el-table-column>
          <el-table-column
            prop="statusDate"
            label="打卡时间"
            :formatter="formatDate"
          ></el-table-column>
          <el-table-column
            prop="userStatus"
            label="打卡状态"
            :formatter="formatStatus"
          ></el-table-column>
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
  </div>
</template>
<script>
import {
  api_users_all,
  api_users_user_log,
  user_updateUserStatus,
} from '@/api/cloudApi'
import { dateUtil } from '../../../common/dateUtil'
export default {
  //签到
  name: 'punchClock',
  data() {
    return {
      name: '',
      signStatus: '上班打卡 / 下班打卡',
      userList: [],
      tableData: [],
      total: 0,
      currentPage: 1,
      pageSize: 10,
    }
  },
  mounted() {
    this.get_api_users_all()
  },
  methods: {
    get_api_users_all() {
      api_users_all().then((result) => {
        if (result.name == '') {
          this.userList = result.data
        }
      })
    },
    get_api_users_user_log(val) {
      let param = {
        pageIndex: this.currentPage,
        pageSize: this.pageSize,
        sortDirection: 'DESC',
        userName: val,
      }
      api_users_user_log(param).then((res) => {
        if (res.name == '') {
          this.tableData = res.data.items
          this.total = res.data.itemCount
        }
      })
    },
    handleSizeChange(val) {
      this.pageSize = val
      this.currentPage = 1
      this.get_api_users_user_log(this.name)
    },
    handleCurrentChange(val) {
      this.currentPage = val
      this.get_api_users_user_log(this.name)
    },
    changeItem(val) {
      this.get_api_users_user_log(val)
      let param = ''
      for (let x = 0; x < this.userList.length; x++) {
        if (val == this.userList[x].userName) {
          param = this.userList[x].userStatus
        }
      }
      switch (param) {
        case 'OFFLINE':
          this.signStatus = '上班打卡'
          break
        case 'ONLINE':
          this.signStatus = '下班打卡'
          break
        default:
          this.signStatus = '上班打卡 / 下班打卡'
          break
      }
    },
    formatDate(row, column, cellValue) {
      if (!cellValue) return ''
      return dateUtil.fullFormatter(new Date(cellValue))
    },
    formatStatus(row, column, cellValue) {
      if (!cellValue) return ''
      if (cellValue == 'OFFLINE') {
        return '下班打卡'
      }
      if (cellValue == 'ONLINE') {
        return '上班打卡'
      }
    },
    changeStatus() {
      let param = ''
      for (let x = 0; x < this.userList.length; x++) {
        if (this.name == this.userList[x].userName) {
          param = this.userList[x].id
        }
      }
      user_updateUserStatus(param).then((res) => {
        if (res.name == '') {
          this.$notify({
            title: '提示',
            type: 'success',
            message: '打卡成功',
            position: 'bottom-right',
            duration: '5000',
          })
        } else {
          this.$notify({
            title: '提示',
            type: 'error',
            message: '打卡失败',
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
.ivu-card-body {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.demo-form {
  padding-top: 50px;
  width: 550px;
}
.el-row {
  margin: 0 !important;
}
</style>