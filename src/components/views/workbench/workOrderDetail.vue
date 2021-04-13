<template>
  <div>
    <el-row class="page-header">
      <el-page-header @back="goBack" content="详情页面"> </el-page-header>
    </el-row>
    <el-row :gutter="10">
      <el-col :span="12" :xs="24" :sm="24" :md="24" :lg="24" :xl="12">
        <el-card shadow="never" style="margin: 30px">
          <div slot="header">
            <div class="dp-fx">
              <div class="dp-fx-title">工艺信息</div>
            </div>
          </div>
          <el-row :gutter="10">
            <el-col :span="24" :xs="24">
              <el-row>
                <el-col
                  :span="12"
                  :xs="24"
                  :sm="24"
                  :md="24"
                  :lg="12"
                  :xl="12"
                  class="panel-content-title"
                  >产出物料的物料编码 :xxx</el-col
                >
                <el-col
                  :span="12"
                  :xs="24"
                  :sm="24"
                  :md="24"
                  :lg="12"
                  :xl="12"
                  class="panel-content-title"
                  >产出物料的物料名称或描述 :xxx</el-col
                >
              </el-row>
              <el-row>
                <el-col
                  :span="12"
                  :xs="24"
                  :sm="24"
                  :md="24"
                  :lg="12"
                  :xl="12"
                  class="panel-content-title"
                  >产出物料的数量 :xxx</el-col
                >
                <el-col
                  :span="12"
                  :xs="24"
                  :sm="24"
                  :md="24"
                  :lg="12"
                  :xl="12"
                  class="panel-content-title"
                  >生产批次号 :xxx</el-col
                >
              </el-row>
              <el-row>
                <el-col
                  :span="12"
                  :xs="24"
                  :sm="24"
                  :md="24"
                  :lg="12"
                  :xl="12"
                  class="panel-content-title"
                  >请求（操作）时间 :xxx</el-col
                >
                <el-col :span="12" :xs="24"></el-col>
              </el-row>
            </el-col>
            <el-col :span="12" :xs="24"> </el-col>
          </el-row>
        </el-card>
      </el-col>
    </el-row>
    <el-row class="page-tabs">
      <MaterielList></MaterielList>
    </el-row>
  </div>
</template>
<script>
import MaterielList from './workOrdeTemplate/materielList'
export default {
  //自建工单详情
  name: 'workOrderDetail',
  components: {
    MaterielList,
  },
  data() {
    return {
      activeName: 'first',
    }
  },
  methods: {
    goBack() {
      this.$router.push('/workOrder')
    },
    handleClick(tab, event) {},
  },
}
</script>
<style  lang="less" scoped>
.page-header {
  padding: 30px;
}
.page-tabs {
  padding: 0 30px 30px 30px;
}
.dp-fx {
  display: flex;
}
.dp-fx-title {
  font-size: 16px;
  padding: 5px 0 0 5px;
}
.el-row {
  margin: 0 !important;
}
.panel-content-title {
  display: flex;
  color: #999;
  flex-direction: column;
  justify-content: center;
  font-size: 14px;
  padding: 5px;
}
</style>