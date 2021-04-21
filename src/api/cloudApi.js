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
export function mes_info_parameterName(param) {
    return http.get(`${resquest}/api/mes-info/parameterName/${param.parameterName}`)
}
//mes接口修改 /api/mes-info
export function mes_info_upgrade(param, data) {
    console.log(data)
    return http.put(`${resquest}/api/mes-info/${param.id}`, qs.stringify(data))
}
//根据部件顺序号获取全部任务信息    贴皮工序
export function siemens_task_all(params) {
    return http.get(`${resquest}/api/siemens/task-all/${params}`)
}
//托盘绑定    MES提供给产线上位机调用的产品与托盘绑定信息的接口
export function bing_pallet(params) {
    return http.post(`${resquest}/api/siemens-interaction/bing-pallet`, params)
}
//异常产品提报
//1.MES提供给产线上位机调用的不良品反馈信息接口  /api/siemens-interaction/ng-report
export function interaction_ng_report(params) {
    return http.post(`${resquest}/api/siemens-interaction/ng-report`, params)
}
//2.异常产品提报分页查询 /api/siemens/abnormal-parts
export function abnormal_parts(params) {
    return http.get(`${resquest}/api/siemens/abnormal-parts`, params)
}
//3.异常产品详情分页查询  /api/siemens/abnormal-parts/parts
export function abnormal_parts_parts(params) {
    return http.get(`${resquest}/api/siemens/abnormal-parts/parts`, params)
}

//签到打卡   查询用户列表
export function api_users_all() {
    return http.get(`${resquest}/api/users/all`)
}

//签到打卡, 获取用户记录分页查询   /api/users/user-log
export function api_users_user_log(params) {
    return http.get(`${resquest}/api/users/user-log`, params)
}

//签到打卡 修改用户状态 /api/users/updateUserStatus/{id}
export function user_updateUserStatus(param) {
    return http.post(`${resquest}/api/users/updateUserStatus/${param}`)
}
