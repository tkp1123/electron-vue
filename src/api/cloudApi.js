import http from './http'
import qs from 'qs';
let resquest = "http://192.168.2.25:11205"

//issue-task MES任务需求单分页查询
export function issue_task(params) {
    return http.get(`${resquest}/api/siemens/issue-task`, params)
}
//process-info 工艺信息分页查询   /api/siemens/process-info
export function process_info(params) {
    return http.get(`${resquest}/api/siemens/process-info`, params)
}
//task-sets 生产任务单分页查询 /api/siemens/task-sets
export function task_sets(params) {
    return http.get(`${resquest}/api/siemens/task-sets`, params)
}
//mes接口 /api/mes-info
export function mes_info(params) {
    return http.get(`${resquest}/api/mes-info`, params)
}
//mes接口修改 /api/mes-info
export function mes_info_upgrade(param, data) {
    console.log(data)
    return http.put(`${resquest}/api/mes-info/${param.id}`, qs.stringify(data))
}
//根据部件顺序号获取全部任务信息    贴皮工序
export function siemens_task_all(params) {
    return http.get(`${resquest}/api/siemens/task-all/${param.id}`, params)
}
//托盘绑定    MES提供给产线上位机调用的产品与托盘绑定信息的接口
export function bing_pallet(params) {
    return http.post(`${resquest}/api/siemens-interaction/bing-pallet`, params)
}