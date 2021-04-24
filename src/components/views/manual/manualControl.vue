<template>
  <div>
    <el-row :gutter="20">
      <el-card shadow="never">
        <el-row :gutter="20">
          <el-card shadow="never" style="padding: 10px; margin: 10px">
            <el-row :gutter="40" style="padding: 20px">
              <el-col :span="4">
                <el-button class="button_style"> 辊台1前进 </el-button>
              </el-col>
              <el-col :span="4">
                <el-button class="button_style"> 辊台2前进 </el-button>
              </el-col>
              <el-col :span="4">
                <el-button class="button_style"> 翻板辊台前进 </el-button>
              </el-col>
            </el-row>
            <el-row :gutter="40" style="padding: 20px">
              <el-col :span="4">
                <el-button class="button_style"> 皮带1前进 </el-button>
              </el-col>
              <el-col :span="4">
                <el-button class="button_style"> 皮带2前进 </el-button>
              </el-col>
              <el-col :span="4">
                <el-button class="button_style"> 皮带3前进 </el-button>
              </el-col>
              <el-col :span="4">
                <el-button class="button_style"> 皮带4前进 </el-button>
              </el-col>
            </el-row>
            <el-row :gutter="40" style="padding: 20px">
              <el-col :span="4">
                <el-button class="button_style"> 翻板正转 </el-button>
              </el-col>
              <el-col :span="4">
                <el-button class="button_style"> 翻板反转 </el-button>
              </el-col>
              <el-col :span="4">
                <el-button class="button_style"> 翻板夹紧 </el-button>
              </el-col>
            </el-row>
            <el-row :gutter="40" style="padding: 20px">
              <el-col :span="4">
                <el-button class="button_style"> 托板 </el-button>
              </el-col>
              <el-col :span="4">
                <el-button class="button_style"> 夹板 </el-button>
              </el-col>
            </el-row>
          </el-card>
        </el-row>
      </el-card>
    </el-row>
  </div>
</template>
<script>
export default {
  //主页面
  name: 'manualControl',
  data() {
    return {}
  },
}
</script>
<style  lang="less" scoped>
.el-row {
  margin: 0 !important;
}
.button_style {
  width: 100%;
  min-height: 80px;
  color: #000;
  font-size: 16px;
  background-color: #02fd04;
}
.button_style:active {
  box-shadow: 5px 5px 5px #02fd04;
}
</style>