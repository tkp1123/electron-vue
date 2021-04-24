<template>
  <div class="contain">
    <el-row style="padding: 10px">
      <el-col :span="12">
        <el-table
          :data="tableData2"
          border
          stripe
          :row-style="tableRowStyle"
          :cell-style="rowStyle"
          style="width: 100%"
          :header-cell-style="{
            'text-align': 'center',
            background: '#000',
            color: '#fff',
          }"
        >
          <el-table-column
            prop="userName"
            label="已完成批次数"
          ></el-table-column>
          <el-table-column
            prop="statusDate"
            label="已完成板件数"
          ></el-table-column>
        </el-table>
      </el-col>
    </el-row>
    <el-row :gutter="20">
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
        <img class="img-circle9" src="../../../assets/111.png" />
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
              :row-style="tableRowStyle"
              :cell-style="rowStyle"
              style="width: 100%"
              :header-cell-style="{
                'text-align': 'center',
                background: '#000',
                color: '#fff',
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
              :data="tableData3"
              border
              stripe
              :row-style="tableRowStyle"
              :cell-style="rowStyle"
              style="width: 100%"
              :header-cell-style="{
                'text-align': 'center',
                background: '#000',
                color: '#fff',
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
      tableData2: [
        {
          userName: '1',
          statusDate: '1',
        },
      ],
      tableData3: [
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
    }
  },
  methods: {
    tableRowStyle({ row, rowIndex }) {
      if (row) {
        return {
          backgroundColor: '#000',
          color: '#fff',
        }
      }
    },
    rowStyle({ row, column, rowIndex, columnIndex }) {
      if (rowIndex % 2 === 0) {
        return 'background:#000;color: #FFFFFF;'
      }
      if (rowIndex % 2 === 1) {
        return 'background:#000;color: #FFFFFF;'
      }
    },
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
    right: 370px;
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
    right: 370px;
    top: 70px;
  }
  to {
    right: 525px;
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
    right: 525px;
    top: 70px;
  }
  to {
    right: 680px;
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
    right: 680px;
    top: 70px;
  }
  to {
    right: 783px;
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
    right: 783px;
    top: 70px;
  }
  to {
    right: 880px;
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
    right: 880px;
    top: 70px;
  }
  to {
    right: 995px;
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
    right: 995px;
    top: 70px;
  }
  to {
    right: 1090px;
    top: 70px;
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
    right: 1090px;
    top: 70px;
  }
  to {
    right: 1270px;
    top: 70px;
  }
}
</style>