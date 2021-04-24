<template>
  <div>
    <el-row style="padding: 10px">
      <el-card shadow="never" style="padding: 10px; margin: 10px">
        <el-row :gutter="20">
          <el-col :span="10" :offset="6">
            <el-form :model="form" label-width="180px">
              <el-form-item label="当前批次号 :">
                <el-col :span="24">{{ form.ProductionBatchCode }}</el-col>
              </el-form-item>
              <el-form-item label="产出物料 :">
                <el-col :span="24">{{ form.PartMaterialCode }}</el-col>
              </el-form-item>
              <el-form-item label="计划产出数量 :">
                <el-col :span="24">{{ form.PartsQuantity }}</el-col>
              </el-form-item>
              <el-form-item label="物料编号 :">
                <el-input v-model="form.MaterialCode"></el-input>
              </el-form-item>
              <el-form-item label="上线口 :">
                <el-input v-model="form.EntranceCode"></el-input>
              </el-form-item>
              <el-form-item label="消耗数量 :">
                <el-input v-model="form.UsedQuantity"></el-input>
              </el-form-item>
              <el-form-item label="报废数量 :">
                <el-input v-model="form.ScrappedQuantity"></el-input>
              </el-form-item>
              <el-form-item label="多产出数量 :">
                <el-input v-model="form.RedundantiPartsQuantity"></el-input>
              </el-form-item>
              <el-form-item>
                <el-button type="primary" @click="onSubmit">提交</el-button>
              </el-form-item>
            </el-form>
          </el-col>
        </el-row>
      </el-card>
    </el-row>
  </div>
</template>
<script>
export default {
  //批次完工信息
  name: 'batchFinished',
  data() {
    return {
      form: {
        ProductionBatchCode: 'xxx',
        PartMaterialCode: 'xxx',
        PartsQuantity: 'xxx',
        MaterialCode: '',
        EntranceCode: '',
        UsedQuantity: '',
        ScrappedQuantity: '',
        DefectQuantity: '',
        RedundantiPartsQuantity: '',
      },
    }
  },
  methods: {
    onSubmit() {},
  },
}
</script>

<style lang="less" scoped>
.el-row {
  margin: 0 !important;
}
</style>