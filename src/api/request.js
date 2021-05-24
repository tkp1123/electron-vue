import axios from 'axios'
import { Message } from 'element-ui';
import store from '@/store'
const service = axios.create({
    baseURL: '',
    timeout: 10 * 1000
})
service.interceptors.request.use(config => {
    let token = 'Bearer ' + store.state.user.token
    config.headers.Authorization = token;
    return config
}, error => {
    Promise.reject(error)
})
service.interceptors.response.use(response => {
    if (response.data.code == 403) {
        Message({
            message: response.data.msg,
            type: 'error',
            duration: 1500
        })
    }
    return response.data
}, error => {
    if (error && error.response) {
        Message({
            message: '服务器出错',
            type: 'error',
            duration: 1500
        })
    } else {
        if (JSON.stringify(error).includes('timeout')) {
            Message({
                message: '服务器响应超时，请刷新当前页',
                type: 'error',
                duration: 1500
            })
        }
    }
    return Promise.resolve(error.response)
})

export default service