const state = {
    token: window.localStorage.getItem('token'),
    role: window.localStorage.getItem('role')
}
const mutations = {
    SET_TOKEN: (state, data) => {
        state.token = data
        window.localStorage.setItem('token', data)
    },
    SET_ROLE: (state, data) => {
        state.role = data
        window.localStorage.setItem('role', data)
    },
    RESET_TOKEN_DATA: (state) => {
        state.token = ''
        window.localStorage.setItem('token', '')
    },
    RESET_SET_ROLE: (state) => {
        state.role = []
        window.localStorage.setItem('role', [])
    },
}
export default {
    namespaced: true,
    state,
    mutations
}