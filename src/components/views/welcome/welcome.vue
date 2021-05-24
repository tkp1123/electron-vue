<template>
  <div class="contain">
    <el-row style="padding: 10px">
      <el-col :span="12">
        <el-col :span="12">已完成批次数 : 1</el-col>
        <el-col :span="12">已完成板件数 : 1</el-col>
      </el-col>
    </el-row>
    <el-row :gutter="20" v-if="parameterName == '029'">
      <el-col :span="24">
        <img class="img-bg" src="../../../assets/029-1.png" />
        <img class="img-circle12" src="../../../assets/111.png" />
        <img class="img-circle13" src="../../../assets/111.png" />
        <img class="img-circle14" src="../../../assets/111.png" />
        <img class="img-circle15" src="../../../assets/111.png" />
        <img class="img-circle16" src="../../../assets/111.png" />
        <img class="img-circle17" src="../../../assets/111.png" />
        <img class="img-circle18" src="../../../assets/111.png" />
        <img class="img-circle19" src="../../../assets/111.png" />
        <img class="img-circle20" src="../../../assets/111.png" />
        <img class="img-circle21" src="../../../assets/111.png" />
        <img class="img-circle22" src="../../../assets/111.png" />
        <img class="img-circle23" src="../../../assets/111.png" />
        <img class="img-circle24" src="../../../assets/111.png" />
        <img class="img-circle25" src="../../../assets/111.png" />
      </el-col>
    </el-row>
    <el-row :gutter="20" v-else>
      <el-col :span="24">
        <img class="img-bg" src="../../../assets/021-1.png" />
        <img class="img-circle1" src="../../../assets/111.png" />
        <img class="img-circle2" src="../../../assets/111.png" />
        <img class="img-circle3" src="../../../assets/111.png" />
        <img class="img-circle4" src="../../../assets/111.png" />
        <img class="img-circle5" src="../../../assets/111.png" />
        <img class="img-circle6" src="../../../assets/111.png" />
        <img class="img-circle7" src="../../../assets/111.png" />
        <img class="img-circle8" src="../../../assets/111.png" />
        <img class="img-circle9" src="../../../assets/111.png" />
        <img class="img-circle10" src="../../../assets/111.png" />
        <img class="img-circle11" src="../../../assets/111.png" />
      </el-col>
    </el-row>
    <el-row :gutter="20">
      <el-card shadow="never">
        <el-row :gutter="20">
          <el-col :span="12">
            <el-table
              :data="tableData1"
              border
              stripe
              style="width: 100%"
              :header-cell-style="{
                'text-align': 'center',
              }"
            >
              <el-table-column
                prop="OperationCode"
                label="工位编号"
              ></el-table-column>
              <el-table-column
                prop="SequenceNumber"
                label="部件顺序号"
              ></el-table-column>
              <el-table-column
                prop="PartSerialNumber"
                label="序列号SNR"
              ></el-table-column>
              <el-table-column prop="State" label="状态"></el-table-column>
            </el-table>
          </el-col>
          <el-col :span="12">
            <el-table
              :data="tableData"
              border
              stripe
              style="width: 100%"
              :header-cell-style="{
                'text-align': 'center',
              }"
            >
              <el-table-column
                prop="userName"
                label="设备名称"
              ></el-table-column>
              <el-table-column prop="statusDate" label="状态"></el-table-column>
            </el-table>
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
    return {
      parameterName: '',
      tableData1: [
        {
          OperationCode: '1',
          SequenceNumber: '3455644',
          PartSerialNumber: 'MB2021101800',
          State: '空闲',
        },
        {
          OperationCode: '2',
          SequenceNumber: '3455644',
          PartSerialNumber: 'MB2021101800',
          State: '空闲',
        },
        {
          OperationCode: '3',
          SequenceNumber: '3455644',
          PartSerialNumber: 'MB2021101800',
          State: '空闲',
        },
        {
          OperationCode: '4',
          SequenceNumber: '3455644',
          PartSerialNumber: 'MB2021101800',
          State: '空闲',
        },
        {
          OperationCode: '5',
          SequenceNumber: '3455644',
          PartSerialNumber: 'MB2021101800',
          State: '空闲',
        },
      ],
      tableData: [],
      tableData2: [
        {
          userName: '线体',
          statusDate: '离线',
        },
        {
          userName: '溶胶机',
          statusDate: '离线',
        },
        {
          userName: '清洗机',
          statusDate: '离线',
        },
      ],
      tableData3: [
        {
          userName: '线体',
          statusDate: '离线',
        },
        {
          userName: '多片锯',
          statusDate: '离线',
        },
        {
          userName: '液压升降',
          statusDate: '离线',
        },
      ],
    }
  },
  created() {
    this.parameterName = this.$store.state.parameterName.parameterName
  },
  mounted() {
    this.getParameterName()
  },
  methods: {
    getParameterName() {
      if (this.parameterName == '029') {
        this.tableData = this.tableData3
      } else {
        this.tableData = this.tableData2
      }
    },
  },
}
</script>
<style  lang="less" scoped>
// .contain {
//   height: calc(100vh - 65px);
//   background-color: #000;
// }

.el-row {
  margin: 0 !important;
}
.img-bg {
  width: 100%;
}
// .el-card {
//   background-color: #000;
//   border: 1px solid #000;
// }
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
    right: 12%;
    top: 36%;
  }
  to {
    right: 12%;
    top: 19%;
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
    right: 12%;
    top: 19%;
  }
  to {
    right: 23%;
    top: 19%;
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
    right: 23%;
    top: 19%;
  }
  to {
    right: 32%;
    top: 19%;
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
    right: 32%;
    top: 19%;
  }
  to {
    right: 42%;
    top: 19%;
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
    right: 42%;
    top: 19%;
  }
  to {
    right: 51%;
    top: 19%;
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
    right: 51%;
    top: 19%;
  }
  to {
    right: 65%;
    top: 19%;
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
    right: 65%;
    top: 19%;
  }
  to {
    right: 78%;
    top: 19%;
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
    right: 78%;
    top: 19%;
  }
  to {
    right: 87%;
    top: 19%;
  }
}
.img-circle9 {
  position: absolute;
  width: 60px;
  height: 30px;
  animation-name: circle9;
  animation-duration: 5s;
  animation-iteration-count: 1;
  animation-fill-mode: both;
}
@keyframes circle9 {
  from {
    right: 87%;
    top: 19%;
  }
  to {
    right: 84%;
    top: 59.6%;
  }
}
.img-circle10 {
  position: absolute;
  width: 60px;
  height: 30px;
  animation-name: circle10;
  animation-duration: 5s;
  animation-iteration-count: 1;
  animation-fill-mode: both;
}
@keyframes circle10 {
  from {
    right: 84%;
    top: 59.6%;
  }
  to {
    right: 70%;
    top: 90%;
  }
}
.img-circle11 {
  position: absolute;
  width: 60px;
  height: 30px;
  animation-name: circle11;
  animation-duration: 5s;
  animation-iteration-count: 1;
  animation-fill-mode: both;
}
@keyframes circle11 {
  from {
    right: 70%;
    top: 90%;
  }
  to {
    right: 14%;
    top: 90%;
  }
}
.img-circle12 {
  position: absolute;
  width: 120px;
  height: 76px;
  animation-name: circle12;
  animation-duration: 5s;
  animation-iteration-count: 1;
  animation-fill-mode: both;
}
@keyframes circle12 {
  from {
    right: 10%;
    top: 43.5%;
  }
  to {
    right: 25%;
    top: 43.5%;
  }
}
.img-circle13 {
  position: absolute;
  width: 120px;
  height: 76px;
  animation-name: circle13;
  animation-duration: 5s;
  animation-iteration-count: 1;
  animation-fill-mode: both;
}
@keyframes circle13 {
  from {
    right: 25%;
    top: 43.5%;
  }
  to {
    right: 34%;
    top: 43.5%;
  }
}
.img-circle14 {
  position: absolute;
  width: 60px;
  height: 20px;
  animation-name: circle14;
  animation-duration: 5s;
  animation-iteration-count: 1;
  animation-fill-mode: both;
}
@keyframes circle14 {
  from {
    right: 35.5%;
    top: 45%;
  }
  to {
    right: 48%;
    top: 45%;
  }
}
.img-circle15 {
  position: absolute;
  width: 60px;
  height: 20px;
  animation-name: circle15;
  animation-duration: 5s;
  animation-iteration-count: 1;
  animation-fill-mode: both;
}
@keyframes circle15 {
  from {
    right: 35.5%;
    top: 49%;
  }
  to {
    right: 48%;
    top: 49%;
  }
}
.img-circle16 {
  position: absolute;
  width: 60px;
  height: 20px;
  animation-name: circle16;
  animation-duration: 5s;
  animation-iteration-count: 1;
  animation-fill-mode: both;
}
@keyframes circle16 {
  from {
    right: 35.5%;
    top: 53%;
  }
  to {
    right: 48%;
    top: 53%;
  }
}

.img-circle17 {
  position: absolute;
  width: 60px;
  height: 20px;
  animation-name: circle17;
  animation-duration: 5s;
  animation-iteration-count: 1;
  animation-fill-mode: both;
}
@keyframes circle17 {
  from {
    right: 48%;
    top: 45%;
  }
  to {
    right: 61%;
    top: 45%;
  }
}
.img-circle18 {
  position: absolute;
  width: 60px;
  height: 20px;
  animation-name: circle18;
  animation-duration: 5s;
  animation-iteration-count: 1;
  animation-fill-mode: both;
}
@keyframes circle18 {
  from {
    right: 48%;
    top: 49%;
  }
  to {
    right: 61%;
    top: 49%;
  }
}
.img-circle19 {
  position: absolute;
  width: 60px;
  height: 20px;
  animation-name: circle19;
  animation-duration: 5s;
  animation-iteration-count: 1;
  animation-fill-mode: both;
}
@keyframes circle19 {
  from {
    right: 48%;
    top: 53%;
  }
  to {
    right: 61%;
    top: 53%;
  }
}

.img-circle20 {
  position: absolute;
  width: 60px;
  height: 20px;
  animation-name: circle20;
  animation-duration: 5s;
  animation-iteration-count: 1;
  animation-fill-mode: both;
}
@keyframes circle20 {
  from {
    right: 61%;
    top: 45%;
  }
  to {
    right: 67%;
    top: 45%;
  }
}
.img-circle21 {
  position: absolute;
  width: 60px;
  height: 20px;
  animation-name: circle21;
  animation-duration: 5s;
  animation-iteration-count: 1;
  animation-fill-mode: both;
}
@keyframes circle21 {
  from {
    right: 61%;
    top: 49%;
  }
  to {
    right: 67%;
    top: 49%;
  }
}
.img-circle22 {
  position: absolute;
  width: 60px;
  height: 20px;
  animation-name: circle22;
  animation-duration: 5s;
  animation-iteration-count: 1;
  animation-fill-mode: both;
}
@keyframes circle22 {
  from {
    right: 61%;
    top: 53%;
  }
  to {
    right: 67%;
    top: 53%;
  }
}

.img-circle23 {
  position: absolute;
  width: 60px;
  height: 20px;
  animation-name: circle23;
  animation-duration: 5s;
  animation-iteration-count: 1;
  animation-fill-mode: both;
}
@keyframes circle23 {
  from {
    right: 67%;
    top: 45%;
  }
  to {
    right: 74%;
    top: 45%;
  }
}
.img-circle24 {
  position: absolute;
  width: 60px;
  height: 20px;
  animation-name: circle24;
  animation-duration: 5s;
  animation-iteration-count: 1;
  animation-fill-mode: both;
}
@keyframes circle24 {
  from {
    right: 67%;
    top: 49%;
  }
  to {
    right: 74%;
    top: 49%;
  }
}
.img-circle25 {
  position: absolute;
  width: 60px;
  height: 20px;
  animation-name: circle25;
  animation-duration: 5s;
  animation-iteration-count: 1;
  animation-fill-mode: both;
}
@keyframes circle25 {
  from {
    right: 67%;
    top: 53%;
  }
  to {
    right: 74%;
    top: 53%;
  }
}
</style>