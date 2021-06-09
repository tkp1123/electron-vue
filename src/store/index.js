import Vue from 'vue'
import Vuex from 'vuex'
import collapse from './collapse'
import getters from './getters'
import parameterName from './parameterName'
import mqtt from './mqtt'
import user from './user';
Vue.use(Vuex)
export default new Vuex.Store({
    modules: {
        collapse,
        parameterName,
        user,
        mqtt
    },
    getters,
})