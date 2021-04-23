import Vue from 'vue'
import Vuex from 'vuex'
import collapse from './collapse'
import getters from './getters'
import qrcode from './qrcode'
Vue.use(Vuex)
export default new Vuex.Store({
    modules: {
        collapse,
        qrcode
    },
    getters,
})