const state = {
    plc_parameter: '',
    plc_io: ''
}
const mutations = {
    SET_PLC_PARAMETER: (state, data) => {
        state.plc_parameter = data
    },
    SET_PLC_IO: (state, data) => {
        state.plc_io = data
    },

}
export default {
    namespaced: true,
    state,
    mutations
}
