<template>
  <div>
    <el-row class="page-header">
      <el-page-header @back="goBack" content="修改权限"></el-page-header>
    </el-row>
    <el-row :gutter="20" style="padding: 20px">
      <el-card shadow="never" style="padding: 20px">
        <el-checkbox-group
          v-model="roleMeg"
          class="item-box"
          @change="handleCheckedCitiesChange"
        >
          <el-checkbox
            v-for="item in resourceMeg"
            :label="item.id"
            :key="item.id"
            >{{ item.name }}</el-checkbox
          >
        </el-checkbox-group>
      </el-card>
    </el-row>
    <el-row
      :gutter="20"
      style="margin: 20px 0px 35px 25px; display: flex; justify-content: center"
    >
      <el-button @click="goBack()">返回</el-button>
      <el-button type="primary" @click="saveRole()">保存</el-button>
    </el-row>
  </div>
</template>
<script>
import {
  api_resource_meg,
  api_resource_role_meg,
  api_role_res_put,
} from '@/api/cloudApi'
export default {
  //角色修改权限
  name: 'roleEdit',
  data() {
    return {
      id: this.$route.query.id,
      resourceMeg: [],
      roleMeg: ['1', '10003'],
    }
  },
  mounted() {
    this.getResourceMeg()
  },
  methods: {
    getResourceMeg() {
      api_resource_meg().then((res) => {
        if (res.name == '') {
          this.resourceMeg = res.data
          this.get_api_resource_role_meg()
        }
      })
    },
    get_api_resource_role_meg() {
      api_resource_role_meg({ id: this.id }).then((res) => {
        if (res.name == '') {
          for (let x = 0; x < res.data.length; x++) {
            this.roleMeg.push(res.data[x].id)
          }
        }
      })
    },
    handleCheckedCitiesChange(val) {},
    goBack() {
      this.$router.push('/roleManage')
    },
    saveRole() {
      let formData = new FormData()
      let res = this.roleMeg
        .map((x) => x)
        .join(',')
        .split(',')
      formData.append('id', this.id)
      res.forEach((x) => {
        formData.append('res', x)
      })
      api_role_res_put(formData).then((res) => {
        if (res.name == '') {
          this.$message({
            message: '保存成功',
            type: 'success',
          })
          this.goBack()
        }
      })
    },
  },
}
</script>
<style  lang="less" scoped>
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
.item-box > label {
  margin: 0 35px 15px 0;
}

.item-box {
  display: flex;
  flex-wrap: wrap;
  padding: 35px;
}
</style>