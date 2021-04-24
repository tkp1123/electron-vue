<template>
  <div id="app">
    <transition name="fade" mode="out-in">
      <router-view></router-view>
    </transition>
  </div>
</template>
<script>
import { webSoc } from './common/socket'
import { mes_info_parameterName } from '@/api/cloudApi'
import store from './store'
export default {
  name: 'App',
  data() {
    return {
      code: '',
    }
  },
  mounted() {},
  created() {
    this.get_mes_info_parameterName()
  },
  methods: {
    get_mes_info_parameterName() {
      mes_info_parameterName('LINE_CODE').then((res) => {
        console.log(res.data)
        if (res.name == '') {
          store.commit(
            'parameterName/SET_PARAMETERNAME',
            res.data.parameterData
          )
        }
      })
    },
  },
}
</script>

<style>
</style>
