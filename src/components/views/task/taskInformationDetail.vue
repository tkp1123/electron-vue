<template>
  <div>
    <el-row class="page-header">
      <el-page-header @back="goBack" content="详情页面"> </el-page-header>
    </el-row>
    <el-row class="page-tabs">
      <el-tabs v-model="activeName" type="card" @tab-click="handleClick">
        <el-tab-pane label="工艺信息" name="first">
          <CraftList></CraftList>
        </el-tab-pane>
        <el-tab-pane label="投入主板物料集合" name="second">
          <MaterielList></MaterielList
        ></el-tab-pane>
        <el-tab-pane label="生产任务单集合" name="third"
          ><TaskList></TaskList
        ></el-tab-pane>
      </el-tabs>
    </el-row>
  </div>
</template>
<script>
import CraftList from './taskTemplate/craftList'
import MaterielList from './taskTemplate/materielList'
import TaskList from './taskTemplate/taskList'
export default {
  //任务和工艺信息详情
  name: 'taskInformationDetail',
  components: {
    CraftList,
    MaterielList,
    TaskList,
  },
  data() {
    return {
      activeName: 'first',
    }
  },
  methods: {
    goBack() {
      this.$router.push('/taskInformation')
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
</style>