import Vue from 'vue'
import Vuex from 'vuex'
import collapse from './collapse'
import getters from './getters'
Vue.use(Vuex)
export default new Vuex.Store({
    modules: {
        collapse
    },
    getters,
})