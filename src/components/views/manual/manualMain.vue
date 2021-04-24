<template>
  <div>
    <el-row :gutter="20">
      <el-card shadow="never">
        <el-row :gutter="20">
          <el-card shadow="never" style="padding: 10px; margin: 10px">
            <el-row :gutter="20">
              <el-col :span="18">
                <el-row :gutter="20">
                  <el-col :span="8">
                    <el-row :gutter="20">
                      <el-col :span="18">
                        <el-col style="padding: 10px">
                          <el-button class="button_style">
                            单机/联机
                          </el-button>
                        </el-col>
                        <el-col style="padding: 10px">
                          <el-button class="button_style"> 自动翻转 </el-button>
                        </el-col>
                        <el-col style="padding: 10px">
                          <el-button class="button_style"> 归零 </el-button>
                        </el-col>
                      </el-col>
                    </el-row>
                  </el-col>
                  <el-col :span="16">
                    <el-row :gutter="20">
                      <el-row :gutter="10">
                        <el-col :span="16">
                          <el-row>
                            <el-col :span="8" :offset="8">
                              <el-button class="button_style"> 上升 </el-button>
                            </el-col>
                          </el-row>
                          <el-row>
                            <el-col :span="8">
                              <el-button class="button_style"> 左移 </el-button>
                            </el-col>
                            <el-col :span="8" style="color: #fff">1</el-col>
                            <el-col :span="8">
                              <el-button class="button_style"> 右移 </el-button>
                            </el-col>
                          </el-row>
                          <el-row>
                            <el-col :span="8" :offset="8">
                              <el-button class="button_style"> 下降 </el-button>
                            </el-col>
                          </el-row>
                        </el-col>
                        <el-col :span="8"></el-col>
                      </el-row>
                    </el-row>
                    <el-row :gutter="40" style="padding-top: 50px">
                      <el-col :span="14">
                        <el-form
                          label-position="right"
                          :model="form"
                          label-width="auto"
                        >
                          <el-form-item label="X当前位置(mm)">
                            <el-input v-model="form.XPosition"></el-input>
                          </el-form-item>
                          <el-form-item label="Y当前位置(mm)">
                            <el-input v-model="form.YPosition"></el-input>
                          </el-form-item>
                        </el-form>
                      </el-col>
                      <el-col :span="10">
                        <el-button class="button_style">
                          上板次数清零
                        </el-button>
                      </el-col>
                    </el-row>
                  </el-col>
                </el-row>
                <el-row :gutter="20">
                  <el-col :span="6">
                    <el-button class="button_style"> 启动 </el-button>
                  </el-col>
                  <el-col :span="6">
                    <el-button class="button_style"> 停止 </el-button>
                  </el-col>
                  <el-col :span="6">
                    <el-button class="button_style"> 暂停 </el-button>
                  </el-col>
                  <el-col :span="6">
                    <el-button class="button_style"> 故障复位 </el-button>
                  </el-col>
                </el-row>
              </el-col>
              <el-col :span="6">
                <el-form
                  label-position="right"
                  :model="form"
                  label-width="auto"
                >
                  <el-form-item label="运行速度%">
                    <el-input v-model="form.speed"></el-input>
                  </el-form-item>
                  <el-form-item label="板长(mm)">
                    <el-input v-model="form.doorLeafHeight"></el-input>
                  </el-form-item>
                  <el-form-item label="板宽(mm)">
                    <el-input v-model="form.doorLeafWidth"></el-input>
                  </el-form-item>
                  <el-form-item label="板厚(mm)">
                    <el-input v-model="form.doorLeafThickness"></el-input>
                  </el-form-item>
                  <el-form-item label="上板次数">
                    <el-input v-model="form.quatity"></el-input>
                  </el-form-item>
                  <el-form-item label="当前上板次数">
                    <el-input v-model="form.nowQuatity"></el-input>
                  </el-form-item>
                  <el-form-item label="上板数量">
                    <el-input v-model="form.num"></el-input>
                  </el-form-item>
                </el-form>
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
  name: 'manualMain',
  data() {
    return {
      form: {
        speed: '0',
        doorLeafHeight: '0.0',
        doorLeafWidth: '0.0',
        doorLeafThickness: '0.0',
        quatity: '0',
        nowQuatity: '0',
        num: '0',
        XPosition: '0.00',
        YPosition: '0.00',
      },
    }
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
  background-color: #02fd04;
}
.button_style:active {
  box-shadow: 5px 5px 5px #02fd04;
}
</style>