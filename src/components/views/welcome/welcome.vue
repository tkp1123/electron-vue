<template>
  <div class="contain">
    <el-row :gutter="20">
      <el-card class="box-card" shadow="never" style="padding: 10px">
        <el-row :gutter="20" style="padding: 10px; text-align: center">
          <el-col :span="24">
            <img class="img-bg" src="../../../assets/chanxian.png" />
            <img class="img-circle1" src="../../../assets/111.png" />
            <img class="img-circle2" src="../../../assets/111.png" />
            <img class="img-circle3" src="../../../assets/111.png" />
            <img class="img-circle4" src="../../../assets/111.png" />
            <img class="img-circle5" src="../../../assets/111.png" />
            <img class="img-circle6" src="../../../assets/111.png" />
            <img class="img-circle7" src="../../../assets/111.png" />
            <img class="img-circle8" src="../../../assets/111.png" />
          </el-col>
        </el-row>
      </el-card>
    </el-row>
  </div>
</template>
<script>
export default {
  //首页
  name: 'welcome',
  data() {
    return {}
  },
}
</script>
<style  lang="less" scoped>
.contain {
  height: calc(100vh - 65px);
  background-color: #000;
}
.el-row {
  margin: 0 !important;
}
.img-bg {
  width: 100%;
}
.el-card {
  background-color: #000;
  border: 1px solid #000;
}
.img-circle1 {
  position: absolute;
  width: 60px;
  height: 30px;
  animation-name: circle1;
  animation-duration: 5s;
  animation-iteration-count: 1;
  animation-fill-mode: both;
}
@keyframes circle1 {
  from {
    right: 210px;
    top: 150px;
  }
  to {
    right: 210px;
    top: 70px;
  }
}
.img-circle2 {
  position: absolute;
  width: 60px;
  height: 30px;
  animation-name: circle2;
  animation-duration: 5s;
  animation-iteration-count: 1;
  animation-fill-mode: both;
}
@keyframes circle2 {
  from {
    right: 210px;
    top: 70px;
  }
  to {
    right: 360px;
    top: 70px;
  }
}
.img-circle3 {
  position: absolute;
  width: 60px;
  height: 30px;
  animation-name: circle3;
  animation-duration: 5s;
  animation-iteration-count: 1;
  animation-fill-mode: both;
}
@keyframes circle3 {
  from {
    right: 360px;
    top: 70px;
  }
  to {
    right: 510px;
    top: 70px;
  }
}
.img-circle4 {
  position: absolute;
  width: 60px;
  height: 30px;
  animation-name: circle4;
  animation-duration: 5s;
  animation-iteration-count: 1;
  animation-fill-mode: both;
}
@keyframes circle4 {
  from {
    right: 510px;
    top: 70px;
  }
  to {
    right: 660px;
    top: 70px;
  }
}
.img-circle5 {
  position: absolute;
  width: 60px;
  height: 30px;
  animation-name: circle5;
  animation-duration: 5s;
  animation-iteration-count: 1;
  animation-fill-mode: both;
}
@keyframes circle5 {
  from {
    right: 660px;
    top: 70px;
  }
  to {
    right: 760px;
    top: 70px;
  }
}
.img-circle6 {
  position: absolute;
  width: 60px;
  height: 30px;
  animation-name: circle6;
  animation-duration: 5s;
  animation-iteration-count: 1;
  animation-fill-mode: both;
}
@keyframes circle6 {
  from {
    right: 760px;
    top: 70px;
  }
  to {
    right: 850px;
    top: 70px;
  }
}
.img-circle7 {
  position: absolute;
  width: 60px;
  height: 30px;
  animation-name: circle7;
  animation-duration: 5s;
  animation-iteration-count: 1;
  animation-fill-mode: both;
}
@keyframes circle7 {
  from {
    right: 850px;
    top: 70px;
  }
  to {
    right: 959px;
    top: 70px;
  }
}
.img-circle8 {
  position: absolute;
  width: 60px;
  height: 30px;
  animation-name: circle8;
  animation-duration: 5s;
  animation-iteration-count: 1;
  animation-fill-mode: both;
}
@keyframes circle8 {
  from {
    right: 959px;
    top: 70px;
  }
  to {
    right: 1059px;
    top: 70px;
  }
}
</style>