<template>
  <div id="app">
    <transition name="fade" mode="out-in">
      <router-view></router-view>
    </transition>
  </div>
</template>
<script>
import { webSoc } from './common/socket'
import store from './store'
export default {
  name: 'App',
  data() {
    return {
      code: '',
    }
  },
  mounted() {
    //let str = ''
    //QRPART@MB202110180002@M32005849@202109300218@3455644@@
    //QRPART   用于标识当前二维码为部件二维码
    //MB202110180002 为部件序列号SNR
    //M32005849 为物料编码
    //202109300218 为销售订单号
    //3455644 为SAP批次号
    //贴皮工序    部件序列号  QRPART
    //托盘绑定    托盘号/部件序列号  QRTOLT/QRPART
    //异常产品提报   部件序列号QRPART
    //异常产品提交   部件序列号QRPART
    // document.onkeydown = function () {
    //   if (event.keyCode !== 13) {
    //     let k = event.key
    //     if (k !== 'Shift') {
    //       str += k
    //     }
    //   } else {
    //     let arr = str.split('@')
    //     console.log(arr)
    //     if (arr[0] == 'QRPART') {
    //       store.commit('qrcode/SET_IDENTIFIER', arr[0])
    //       store.commit('qrcode/SET_SNR', arr[1])
    //       store.commit('qrcode/SET_MATERIEL_CODE', arr[2])
    //       store.commit('qrcode/SET_ORDER', arr[3])
    //       store.commit('qrcode/SET_SAP_BATCH', arr[4])
    //     } else if (arr[0] == 'QRTOLT') {
    //       store.commit('qrcode/SET_IDENTIFIER', arr[0])
    //       store.commit('qrcode/SET_TRAY_CODE', arr[1])
    //     }
    //     str = ''
    //   }
    // }
  },
}
</script>

<style>
</style>
