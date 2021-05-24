<template>
  <div>
    <el-row class="page-header">
      <el-page-header @back="goBack" content="修改用户"></el-page-header>
    </el-row>
    <el-row :gutter="20" style="padding: 10px">
      <el-row class="ivu-card-body">
        <el-col class="demo-form">
          <el-form :model="form" label-width="140px">
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
            <el-form-item>
              <el-button type="primary" @click="onSubmit()">立即修改</el-button>
              <el-button @click="goBack()">取消</el-button>
            </el-form-item>
          </el-form>
        </el-col>
      </el-row>
    </el-row>
  </div>
</template>

<script>
import { api_role, api_users_get, api_users_put } from '@/api/cloudApi'
export default {
  //用户修改
  name: 'userEdit',
  data() {
    return {
      id: this.$route.query.id,
      roleList: [],
      form: {
        password: '',
        trueName: '',
        userName: '',
        roleId: '',
      },
    }
  },
  mounted() {
    this.get_api_users_get()
  },
  methods: {
    get_api_users_get() {
      api_users_get(this.id).then((res) => {
        if (res.name == '') {
          this.form.password = res.data.password
          this.form.trueName = res.data.trueName
          this.form.userName = res.data.userName
          this.form.roleId = res.data.roleId
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
          if (res.name == '') {
            this.roleList = res.data.items
          }
        }
      })
    },
    onSubmit() {
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
      let formData = new FormData()
      formData.append('trueName', this.form.trueName)
      formData.append('userName', this.form.userName)
      formData.append('roleId', this.form.roleId)
      api_users_put(this.id, formData).then((res) => {
        if (res.name == '') {
          this.$message({
            message: '修改成功',
            type: 'success',
          })
          this.goBack()
        }
      })
    },

    goBack() {
      this.$router.push('/userManage')
    },
  },
}
</script>
<style lang="less" scoped>
.page-header {
  padding: 30px;
}
.el-row {
  margin: 0 !important;
}

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