<template>
  <div id="app">
    <transition name="fade" mode="out-in">
      <router-view></router-view>
    </transition>
  </div>
</template>
<script>
import { mes_info_parameterName } from '@/api/cloudApi'
import mqtt from 'mqtt'
import store from './store'
let option = {
  connectTimeout: 40000,
  clientId: 'mqtitId-Home',
  username: 'admin',
  password: 'XttpkkvU5HpZPGcR7ygo',
  clean: true,
}
let client = mqtt.connect('ws://192.168.2.25:8000', option)
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
    this.mqttMsg()
  },
  methods: {
    get_mes_info_parameterName() {
      store.commit('parameterName/SET_PARAMETERNAME', '021')
      //store.commit('parameterName/SET_PARAMETERNAME', '029')
      //store.commit('parameterName/SET_PARAMETERNAME', '011')
      //store.commit('parameterName/SET_PARAMETERNAME', '014')
      mes_info_parameterName('LINE_CODE').then((res) => {
        console.log(res.data)
        if (res.name == '') {
          //store.commit('parameterName/SET_PARAMETERNAME', res.data.parameterData)
        }
      })
    },
    mqttMsg() {
      client.on('connect', (e) => {
        console.log('连接成功！！！')
        client.subscribe('PLC_PARAMETER', { qos: 0 }, (error) => {
          if (!error) {
            console.log('订阅PLC_PARAMETER成功')
          }
        })
        client.subscribe('PLC_IO', { qos: 0 }, (error) => {
          if (!error) {
            console.log('订阅PLC_IO成功')
          }
        })
      })
      // 接收消息处理
      client.on('message', (topic, message) => {
        //console.log(topic)
        console.log('收到来自', topic, '的消息')
        //var obj = eval('(' + message.toString() + ')')
        //console.log(obj)
        if (topic === 'PLC_PARAMETER') {
          console.log(message.toString())
          store.commit('mqtt/SET_PLC_PARAMETER', message.toString())
        } else if (topic === 'PLC_IO') {
          //console.log(message.toString())
          store.commit('mqtt/SET_PLC_IO', message.toString())
        }
      })
    },
  },
}
</script>
<style>
</style>
