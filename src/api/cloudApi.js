import http from './http'
import qs from 'qs';
let resquest = "http://192.168.2.25:11205"

//issue-task MES任务需求单分页查询
export function issue_task(params) {
    return http.get(`${resquest}/api/siemens/issue-task`, params)
}
//MES任务需求单分页查询 获取信息总览
export function task_data_count() {
    return http.get(`${resquest}/api/siemens/task-data-count`)
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
    return http.put(`${resquest}/api/mes-info/${param.id}`, qs.stringify(data))
}
//根据部件顺序号获取全部任务信息    贴皮工序
export function siemens_task_all(params) {
    return http.get(`${resquest}/api/siemens/task-all/${params}`)
}
//托盘绑定    MES提供给产线上位机调用的产品与托盘绑定信息的接口
export function bing_pallet(params, data) {
    return http.post(`${resquest}/api/siemens-interaction/bing-pallet?${qs.stringify(params, { indices: false })}`, qs.stringify(data))
}
//异常产品提报
//1.MES提供给产线上位机调用的不良品反馈信息接口  /api/siemens-interaction/ng-report
export function interaction_ng_report(params, data) {
    return http.post(`${resquest}/api/siemens-interaction/ng-report?${qs.stringify(params, { indices: false })}`, qs.stringify(data))
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

//托盘上线  MES提供给产线上位机调用的托盘上线数据请求接口 /api/siemens-interaction/pallet-entry
export function pallet_entry(params) {
    return http.post(`${resquest}/api/siemens-interaction/pallet-entry`, qs.stringify(params))
}


//获取MES任务总览  mes 任务 /api/siemens/first-task
export function first_task() {
    return http.get(`${resquest}/api/siemens/first-task`)
}

//part-sets 任务单部件分页查询  mes任务列表  /api/siemens/part-sets
export function part_sets(params) {
    return http.get(`${resquest}/api/siemens/part-sets`, params)
}

//MES提供给产线上位机调用的批次工艺请求接口     mes任务批次获取 /api/siemens-interaction/ask-task
export function ask_task(params) {
    return http.post(`${resquest}/api/siemens-interaction/ask-task`, qs.stringify(params))
}