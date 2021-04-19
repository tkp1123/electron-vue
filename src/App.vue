<template>
  <div id="app">
    <transition name="fade" mode="out-in">
      <router-view></router-view>
    </transition>
  </div>
</template>
<script>
import { webSoc } from './common/socket'
export default {
  name: 'App',
  data() {
    return {}
  },
  mounted() {},
  methods: {},
}
</script>

<style>
</style>
