const state = {
    parameterName: ''
}
const mutations = {
    SET_PARAMETERNAME: (state, data) => {
        state.parameterName = data
    },

}
export default {
    namespaced: true,
    state,
    mutations
}
