<template>
  <div class="contain">
    <el-card style="margin: 20px" shadow="never">
      <el-row style="padding: 10px 30px" :gutter="30">
        <el-col :span="12">
          <el-col :span="12">已完成批次数 : 1</el-col>
          <el-col :span="12">已完成板件数 : 1</el-col>
        </el-col>
      </el-row>
    </el-card>
    <el-row :gutter="20" style="padding: 20px">
      <el-col
        :span="4"
        class="title_flex"
        v-if="
          parameterName == '021' ||
          parameterName == '011' ||
          parameterName == '029'
        "
      >
        <div>工作状态：</div>
        <img class="img-title" src="../../../assets/green.png" />
      </el-col>
      <el-col :span="4" v-if="parameterName == '021'" class="title_flex">
        <div>线体状态：</div>
        <img class="img-title" src="../../../assets/green.png" />
      </el-col>
      <el-col :span="4" v-if="parameterName == '021'" class="title_flex">
        <div>溶胶机状态：</div>
        <img class="img-title" src="../../../assets/green.png" />
      </el-col>
      <el-col :span="4" v-if="parameterName == '021'" class="title_flex">
        <div>清洗机状态：</div>
        <img class="img-title" src="../../../assets/green.png" />
      </el-col>

      <el-col :span="4" v-if="parameterName == '029'" class="title_flex">
        <div>线体状态：</div>
        <img class="img-title" src="../../../assets/green.png" />
      </el-col>
      <el-col :span="4" v-if="parameterName == '029'" class="title_flex">
        <div>多片锯状态：</div>
        <img class="img-title" src="../../../assets/green.png" />
      </el-col>
      <el-col :span="4" v-if="parameterName == '029'" class="title_flex">
        <div>液压升降状态：</div>
        <img class="img-title" src="../../../assets/green.png" />
      </el-col>

      <el-col :span="4" v-if="parameterName == '011'" class="title_flex">
        <div>线体状态：</div>
        <img class="img-title" src="../../../assets/green.png" />
      </el-col>
      <el-col :span="4" v-if="parameterName == '011'" class="title_flex">
        <div>封边机1状态：</div>
        <img class="img-title" src="../../../assets/green.png" />
      </el-col>
      <el-col :span="4" v-if="parameterName == '011'" class="title_flex">
        <div>封边机2状态：</div>
        <img class="img-title" src="../../../assets/green.png" />
      </el-col>
      <el-col :span="4" v-if="parameterName == '011'" class="title_flex">
        <div>龙门机1状态：</div>
        <img class="img-title" src="../../../assets/green.png" />
      </el-col>
      <el-col :span="4" v-if="parameterName == '011'" class="title_flex">
        <div>龙门机2状态：</div>
        <img class="img-title" src="../../../assets/green.png" />
      </el-col>
    </el-row>
    <el-row :gutter="20" style="padding: 20px" v-if="parameterName == '014'">
      <el-col :span="4" class="title_flex">
        <div>工作状态：</div>
        <img class="img-title" src="../../../assets/green.png" />
      </el-col>
      <el-col :span="4" class="title_flex">
        <div>线体状态：</div>
        <img class="img-title" src="../../../assets/green.png" />
      </el-col>

      <el-col :span="4" class="title_flex">
        <div>单层动力分片机状态：</div>
        <img class="img-title" src="../../../assets/green.png" />
      </el-col>
      <el-col :span="4" class="title_flex">
        <div>平面砂光机状态：</div>
        <img class="img-title" src="../../../assets/green.png" />
      </el-col>

      <el-col :span="4" class="title_flex">
        <div>异性砂光机状态：</div>
        <img class="img-title" src="../../../assets/green.png" />
      </el-col>
      <el-col :span="4" class="title_flex">
        <div>包覆机状态：</div>
        <img class="img-title" src="../../../assets/green.png" />
      </el-col>
    </el-row>
    <el-row :gutter="20" style="padding: 20px" v-if="parameterName == '014'">
      <el-col :span="4" class="title_flex">
        <div>热熔胶机状态：</div>
        <img class="img-title" src="../../../assets/green.png" />
      </el-col>
      <el-col :span="4" class="title_flex">
        <div>线条跟踪切断器机状态：</div>
        <img class="img-title" src="../../../assets/green.png" />
      </el-col>

      <el-col :span="4" class="title_flex">
        <div>定尺切割锯液压状态：</div>
        <img class="img-title" src="../../../assets/green.png" />
      </el-col>
    </el-row>
    <el-row :gutter="20" v-if="parameterName == '029'" class="title_flex">
      <el-col :span="24">
        <img class="img-bg" src="../../../assets/029-1.png" />
        <div class="img-circle12">
          <img src="../../../assets/111.png" class="img" />
          <div class="img-circle-text">20210525-xxxx</div>
        </div>
        <div class="img-circle13">
          <img src="../../../assets/111.png" class="img" />
          <div class="img-circle-text">20210525-xxxx</div>
        </div>
        <div class="img-circle14">
          <img src="../../../assets/111.png" class="img" />
          <div class="img-circle-text">20210525-xxxx</div>
        </div>
        <div class="img-circle15">
          <img src="../../../assets/111.png" class="img" />
          <div class="img-circle-text">20210525-xxxx</div>
        </div>
        <div class="img-circle16">
          <img src="../../../assets/111.png" class="img" />
          <div class="img-circle-text">20210525-xxxx</div>
        </div>
        <div class="img-circle17">
          <img src="../../../assets/111.png" class="img" />
          <div class="img-circle-text">20210525-xxxx</div>
        </div>
        <div class="img-circle18">
          <img src="../../../assets/111.png" class="img" />
          <div class="img-circle-text">20210525-xxxx</div>
        </div>
        <div class="img-circle19">
          <img src="../../../assets/111.png" class="img" />
          <div class="img-circle-text">20210525-xxxx</div>
        </div>
        <div class="img-circle20">
          <img src="../../../assets/111.png" class="img" />
          <div class="img-circle-text">20210525-xxxx</div>
        </div>
        <div class="img-circle21">
          <img src="../../../assets/111.png" class="img" />
          <div class="img-circle-text">20210525-xxxx</div>
        </div>
        <div class="img-circle22">
          <img src="../../../assets/111.png" class="img" />
          <div class="img-circle-text">20210525-xxxx</div>
        </div>
        <div class="img-circle23">
          <img src="../../../assets/111.png" class="img" />
          <div class="img-circle-text">20210525-xxxx</div>
        </div>
        <div class="img-circle24">
          <img src="../../../assets/111.png" class="img" />
          <div class="img-circle-text">20210525-xxxx</div>
        </div>
        <div class="img-circle25">
          <img src="../../../assets/111.png" class="img" />
          <div class="img-circle-text">20210525-xxxx</div>
        </div>
      </el-col>
    </el-row>
    <el-row :gutter="20" v-else-if="parameterName == '021'">
      <el-col :span="24">
        <img class="img-bg" src="../../../assets/021-1.png" />
        <div class="img-circle1">
          <img src="../../../assets/111.png" class="img" />
          <div class="img-circle-text">20210525-xxxx</div>
        </div>
        <div class="img-circle2">
          <img src="../../../assets/111.png" class="img" />
          <div class="img-circle-text">20210525-xxxx</div>
        </div>
        <div class="img-circle3">
          <img src="../../../assets/111.png" class="img" />
          <div class="img-circle-text">20210525-xxxx</div>
        </div>
        <div class="img-circle4">
          <img src="../../../assets/111.png" class="img" />
          <div class="img-circle-text">20210525-xxxx</div>
        </div>
        <div class="img-circle5">
          <img src="../../../assets/111.png" class="img" />
          <div class="img-circle-text">20210525-xxxx</div>
        </div>
        <div class="img-circle6">
          <img src="../../../assets/111.png" class="img" />
          <div class="img-circle-text">20210525-xxxx</div>
        </div>
        <div class="img-circle7">
          <img src="../../../assets/111.png" class="img" />
          <div class="img-circle-text">20210525-xxxx</div>
        </div>
        <div class="img-circle8">
          <img src="../../../assets/111.png" class="img" />
          <div class="img-circle-text">20210525-xxxx</div>
        </div>
        <div class="img-circle9">
          <img src="../../../assets/111.png" class="img" />
          <div class="img-circle-text">20210525-xxxx</div>
        </div>
        <div class="img-circle10">
          <img src="../../../assets/111.png" class="img" />
          <div class="img-circle-text">20210525-xxxx</div>
        </div>
        <div class="img-circle11">
          <img src="../../../assets/111.png" class="img" />
          <div class="img-circle-text">20210525-xxxx</div>
        </div>
      </el-col>
    </el-row>
    <el-row :gutter="20" v-else-if="parameterName == '011'">
      <el-col :span="24">
        <img class="img-bg" src="../../../assets/011-1.png" />
        <div class="img-circle26">
          <img src="../../../assets/111.png" class="img" />
          <div class="img-circle-text">20210525-xxxx</div>
        </div>
        <div class="img-circle27">
          <img src="../../../assets/111.png" class="img" />
          <div class="img-circle-text">20210525-xxxx</div>
        </div>
        <div class="img-circle28">
          <img src="../../../assets/111.png" class="img" />
          <div class="img-circle-text">20210525-xxxx</div>
        </div>
        <div class="img-circle29">
          <img src="../../../assets/111.png" class="img" />
          <div class="img-circle-text">20210525-xxxx</div>
        </div>
        <div class="img-circle30">
          <img src="../../../assets/111.png" class="img" />
          <div class="img-circle-text">20210525-xxxx</div>
        </div>
        <div class="img-circle31">
          <img src="../../../assets/111.png" class="img" />
          <div class="img-circle-text">20210525-xxxx</div>
        </div>
        <div class="img-circle32">
          <img src="../../../assets/111.png" class="img" />
          <div class="img-circle-text">20210525-xxxx</div>
        </div>
        <div class="img-circle33">
          <img src="../../../assets/111.png" class="img" />
          <div class="img-circle-text">20210525-xxxx</div>
        </div>
        <div class="img-circle34">
          <img src="../../../assets/111.png" class="img" />
          <div class="img-circle-text">20210525-xxxx</div>
        </div>
        <div class="img-circle35">
          <img src="../../../assets/111.png" class="img" />
          <div class="img-circle-text">20210525-xxxx</div>
        </div>
        <div class="img-circle36">
          <img src="../../../assets/111.png" class="img" />
          <div class="img-circle-text">20210525-xxxx</div>
        </div>
        <div class="img-circle37">
          <img src="../../../assets/111.png" class="img" />
          <div class="img-circle-text">20210525-xxxx</div>
        </div>
      </el-col>
    </el-row>
    <el-row :gutter="20" v-else-if="parameterName == '014'">
      <el-col :span="24">
        <img class="img-bg" src="../../../assets/014.png" />
        <div class="img-circle38">
          <img src="../../../assets/111.png" class="img" />
          <div class="img-circle-text">20210525-xxxx</div>
        </div>
        <div class="img-circle39">
          <img src="../../../assets/111.png" class="img" />
          <div class="img-circle-text">20210525-xxxx</div>
        </div>
        <div class="img-circle40">
          <img src="../../../assets/111.png" class="img" />
          <div class="img-circle-text">20210525-xxxx</div>
        </div>
        <div class="img-circle41">
          <img src="../../../assets/111.png" class="img" />
          <div class="img-circle-text">20210525-xxxx</div>
        </div>
        <div class="img-circle42">
          <img src="../../../assets/111.png" class="img" />
          <div class="img-circle-text">20210525-xxxx</div>
        </div>
        <div class="img-circle43">
          <img src="../../../assets/111.png" class="img" />
          <div class="img-circle-text">20210525-xxxx</div>
        </div>
        <div class="img-circle44">
          <img src="../../../assets/111.png" class="img" />
          <div class="img-circle-text">20210525-xxxx</div>
        </div>
        <div class="img-circle45">
          <img src="../../../assets/111.png" class="img" />
          <div class="img-circle-text">20210525-xxxx</div>
        </div>
        <div class="img-circle46">
          <img src="../../../assets/111.png" class="img" />
          <div class="img-circle-text">20210525-xxxx</div>
        </div>
        <div class="img-circle47">
          <img src="../../../assets/111.png" class="img" />
          <div class="img-circle-text">20210525-xxxx</div>
        </div>
        <div class="img-circle48">
          <img src="../../../assets/111.png" class="img" />
          <div class="img-circle-text">20210525-xxxx</div>
        </div>
        <div class="img-circle49">
          <img src="../../../assets/111.png" class="img" />
          <div class="img-circle-text">20210525-xxxx</div>
        </div>
        <div class="img-circle50">
          <img src="../../../assets/111.png" class="img" />
          <div class="img-circle-text">20210525-xxxx</div>
        </div>
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
      tableData4: [
        {
          userName: '线体',
          statusDate: '离线',
        },
        {
          userName: '龙门机1',
          statusDate: '离线',
        },
        {
          userName: '封边机1',
          statusDate: '离线',
        },
        {
          userName: '龙门机2',
          statusDate: '离线',
        },
        {
          userName: '封边机2',
          statusDate: '离线',
        },
      ],
      tableData5: [
        {
          userName: '线体',
          statusDate: '离线',
        },
        {
          userName: '单层动力分片机',
          statusDate: '离线',
        },
        {
          userName: '平面砂光机',
          statusDate: '离线',
        },
        {
          userName: '异形砂光机',
          statusDate: '离线',
        },
        {
          userName: '包覆机',
          statusDate: '离线',
        },
        {
          userName: '线条跟踪切断器机',
          statusDate: '离线',
        },
        {
          userName: '定尺切割锯液压',
          statusDate: '离线',
        },
        {
          userName: '热熔胶机',
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
      } else if (this.parameterName == '021') {
        this.tableData = this.tableData2
      } else if (this.parameterName == '011') {
        this.tableData = this.tableData4
      } else if (this.parameterName == '014') {
        this.tableData = this.tableData5
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
.img-title {
  width: 40px;
  height: 40px;
}

.img-bg {
  width: 100%;
}
.title_flex {
  display: flex;
  // justify-content: center;
  align-content: center;
  align-items: center;
}
// .el-card {
//   background-color: #000;
//   border: 1px solid #000;
// }
.img-circle-text {
  position: absolute;
  top: 6px;
  color: #fff;
  font-size: 12px;
}
.img {
  width: 90px;
  height: 30px;
}
.img-circle1 {
  position: absolute;
  width: 90px;
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
  width: 90px;
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
  width: 90px;
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
  width: 90px;
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
  width: 90px;
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
  width: 90px;
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
  width: 90px;
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
  width: 90px;
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
  width: 90px;
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
  width: 90px;
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
  width: 90px;
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
  width: 90px;
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
  width: 90px;
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
  width: 90px;
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
  width: 90px;
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
  width: 90px;
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
  width: 90px;
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
  width: 90px;
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
  width: 90px;
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
  width: 90px;
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
  width: 90px;
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
  width: 90px;
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
  width: 90px;
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
.img-circle26 {
  position: absolute;
  width: 90px;
  height: 20px;
  animation-name: circle26;
  animation-duration: 5s;
  animation-iteration-count: 1;
  animation-fill-mode: both;
}
@keyframes circle26 {
  from {
    right: 5%;
    top: 64.5%;
  }
  to {
    right: 14%;
    top: 64.5%;
  }
}
.img-circle27 {
  position: absolute;
  width: 90px;
  height: 20px;
  animation-name: circle27;
  animation-duration: 5s;
  animation-iteration-count: 1;
  animation-fill-mode: both;
}
@keyframes circle27 {
  from {
    right: 14%;
    top: 64.5%;
  }
  to {
    right: 27%;
    top: 64.5%;
  }
}
.img-circle28 {
  position: absolute;
  width: 90px;
  height: 20px;
  animation-name: circle28;
  animation-duration: 5s;
  animation-iteration-count: 1;
  animation-fill-mode: both;
}
@keyframes circle28 {
  from {
    right: 27%;
    top: 64.5%;
  }
  to {
    right: 45%;
    top: 64.5%;
  }
}
.img-circle29 {
  position: absolute;
  width: 90px;
  height: 20px;
  animation-name: circle29;
  animation-duration: 5s;
  animation-iteration-count: 1;
  animation-fill-mode: both;
}
@keyframes circle29 {
  from {
    right: 45%;
    top: 64.5%;
  }
  to {
    right: 61%;
    top: 64.5%;
  }
}
.img-circle30 {
  position: absolute;
  width: 90px;
  height: 20px;
  animation-name: circle30;
  animation-duration: 5s;
  animation-iteration-count: 1;
  animation-fill-mode: both;
}
@keyframes circle30 {
  from {
    right: 61%;
    top: 64.5%;
  }
  to {
    right: 61%;
    top: 48%;
  }
}
.img-circle31 {
  position: absolute;
  width: 90px;
  height: 20px;
  animation-name: circle31;
  animation-duration: 5s;
  animation-iteration-count: 1;
  animation-fill-mode: both;
}
@keyframes circle31 {
  from {
    right: 61%;
    top: 48%;
  }
  to {
    right: 46%;
    top: 48%;
  }
}
.img-circle32 {
  position: absolute;
  width: 90px;
  height: 20px;
  animation-name: circle32;
  animation-duration: 5s;
  animation-iteration-count: 1;
  animation-fill-mode: both;
}
@keyframes circle32 {
  from {
    right: 46%;
    top: 48%;
  }
  to {
    right: 28%;
    top: 48%;
  }
}
.img-circle33 {
  position: absolute;
  width: 90px;
  height: 20px;
  animation-name: circle33;
  animation-duration: 5s;
  animation-iteration-count: 1;
  animation-fill-mode: both;
}
@keyframes circle33 {
  from {
    right: 28%;
    top: 48%;
  }
  to {
    right: 28%;
    top: 30%;
  }
}
.img-circle34 {
  position: absolute;
  width: 90px;
  height: 20px;
  animation-name: circle34;
  animation-duration: 5s;
  animation-iteration-count: 1;
  animation-fill-mode: both;
}
@keyframes circle34 {
  from {
    right: 28%;
    top: 30%;
  }
  to {
    right: 45%;
    top: 30%;
  }
}
.img-circle35 {
  position: absolute;
  width: 90px;
  height: 20px;
  animation-name: circle35;
  animation-duration: 5s;
  animation-iteration-count: 1;
  animation-fill-mode: both;
}
@keyframes circle35 {
  from {
    right: 45%;
    top: 30%;
  }
  to {
    right: 65%;
    top: 30%;
  }
}
.img-circle36 {
  position: absolute;
  width: 90px;
  height: 20px;
  animation-name: circle36;
  animation-duration: 5s;
  animation-iteration-count: 1;
  animation-fill-mode: both;
}
@keyframes circle36 {
  from {
    right: 65%;
    top: 30%;
  }
  to {
    right: 83%;
    top: 30%;
  }
}
.img-circle37 {
  position: absolute;
  width: 90px;
  height: 20px;
  animation-name: circle37;
  animation-duration: 5s;
  animation-iteration-count: 1;
  animation-fill-mode: both;
}
@keyframes circle37 {
  from {
    right: 83%;
    top: 30%;
  }
  to {
    right: 93%;
    top: 30%;
  }
}
.img-circle38 {
  position: absolute;
  width: 90px;
  height: 20px;
  animation-name: circle38;
  animation-duration: 5s;
  animation-iteration-count: 1;
  animation-fill-mode: both;
}
@keyframes circle38 {
  from {
    right: 1%;
    top: 70%;
  }
  to {
    right: 1%;
    top: 47%;
  }
}

.img-circle39 {
  position: absolute;
  width: 90px;
  height: 20px;
  animation-name: circle39;
  animation-duration: 5s;
  animation-iteration-count: 1;
  animation-fill-mode: both;
}
@keyframes circle39 {
  from {
    right: 1%;
    top: 47%;
  }
  to {
    right: 9%;
    top: 47%;
  }
}
.img-circle40 {
  position: absolute;
  width: 90px;
  height: 20px;
  animation-name: circle40;
  animation-duration: 5s;
  animation-iteration-count: 1;
  animation-fill-mode: both;
}
@keyframes circle40 {
  from {
    right: 9%;
    top: 47%;
  }
  to {
    right: 18%;
    top: 47%;
  }
}
.img-circle41 {
  position: absolute;
  width: 90px;
  height: 20px;
  animation-name: circle41;
  animation-duration: 5s;
  animation-iteration-count: 1;
  animation-fill-mode: both;
}
@keyframes circle41 {
  from {
    right: 18%;
    top: 47%;
  }
  to {
    right: 28%;
    top: 47%;
  }
}
.img-circle42 {
  position: absolute;
  width: 90px;
  height: 20px;
  animation-name: circle42;
  animation-duration: 5s;
  animation-iteration-count: 1;
  animation-fill-mode: both;
}
@keyframes circle42 {
  from {
    right: 28%;
    top: 47%;
  }
  to {
    right: 37%;
    top: 47%;
  }
}
.img-circle43 {
  position: absolute;
  width: 90px;
  height: 20px;
  animation-name: circle43;
  animation-duration: 5s;
  animation-iteration-count: 1;
  animation-fill-mode: both;
}
@keyframes circle43 {
  from {
    right: 37%;
    top: 47%;
  }
  to {
    right: 48%;
    top: 47%;
  }
}
.img-circle44 {
  position: absolute;
  width: 90px;
  height: 20px;
  animation-name: circle44;
  animation-duration: 5s;
  animation-iteration-count: 1;
  animation-fill-mode: both;
}
@keyframes circle44 {
  from {
    right: 48%;
    top: 47%;
  }
  to {
    right: 58%;
    top: 47%;
  }
}
.img-circle45 {
  position: absolute;
  width: 90px;
  height: 20px;
  animation-name: circle45;
  animation-duration: 5s;
  animation-iteration-count: 1;
  animation-fill-mode: both;
}
@keyframes circle45 {
  from {
    right: 58%;
    top: 47%;
  }
  to {
    right: 67%;
    top: 47%;
  }
}
.img-circle46 {
  position: absolute;
  width: 90px;
  height: 20px;
  animation-name: circle46;
  animation-duration: 5s;
  animation-iteration-count: 1;
  animation-fill-mode: both;
}
@keyframes circle46 {
  from {
    right: 67%;
    top: 47%;
  }
  to {
    right: 75.5%;
    top: 47%;
  }
}
.img-circle47 {
  position: absolute;
  width: 90px;
  height: 20px;
  animation-name: circle47;
  animation-duration: 5s;
  animation-iteration-count: 1;
  animation-fill-mode: both;
}
@keyframes circle47 {
  from {
    right: 75.5%;
    top: 47%;
  }
  to {
    right: 83%;
    top: 47%;
  }
}
.img-circle48 {
  position: absolute;
  width: 90px;
  height: 20px;
  animation-name: circle48;
  animation-duration: 5s;
  animation-iteration-count: 1;
  animation-fill-mode: both;
}
@keyframes circle48 {
  from {
    right: 83%;
    top: 47%;
  }
  to {
    right: 92%;
    top: 47%;
  }
}
.img-circle49 {
  position: absolute;
  width: 90px;
  height: 20px;
  animation-name: circle49;
  animation-duration: 5s;
  animation-iteration-count: 1;
  animation-fill-mode: both;
}
@keyframes circle49 {
  from {
    right: 92%;
    top: 47%;
  }
  to {
    right: 92%;
    top: 72%;
  }
}
.img-circle50 {
  position: absolute;
  width: 90px;
  height: 20px;
  animation-name: circle50;
  animation-duration: 5s;
  animation-iteration-count: 1;
  animation-fill-mode: both;
}
@keyframes circle50 {
  from {
    right: 92%;
    top: 72%;
  }
  to {
    right: 92%;
    top: 90%;
  }
}
</style>