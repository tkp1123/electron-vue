import { Resource } from './Resource'
export class Resources {
    static USERS = new Resource('用户管理', '1', '0');
    static USERS_ADD = new Resource('新增用户', '10001', '1');
    static USERS_UPDATE = new Resource('修改用户', '10003', '1');
    static USERS_DELETE = new Resource('删除用户', '10004', '1');
    static ROLE = new Resource('角色权限', '2', '0');
    static ROLE_ADD = new Resource('新增角色', '20001', '2');
    static ROLE_UPDATE = new Resource('编辑', '20003', '2');
    static ROLE_UPDATE_RES = new Resource('设置权限', '20006', '2');
    static SYSTEM = new Resource('系统管理', '3', '0');
    static SYSTEM_ADD = new Resource('添加参数', '30001', '3');
    static SYSTEM_UPDATE = new Resource('修改参数', '30002', '3');
    static SIEMENS = new Resource('西门子管理', '4', '0');
    static SIEMENS_ask_task = new Resource('批次工艺请求', '40001', '4');
    static SIEMENS_pallet_entry = new Resource('托盘上线请求', '40002', '4');
    static SIEMENS_part_entry = new Resource('部件扫描上线请求', '40003', '4');
    static SIEMENS_part_exit = new Resource('部件扫描下线请求', '40004', '4');
    static SIEMENS_lack_mat = new Resource('缺料请求', '40005', '4');
    static SIEMENS_bing_pallet = new Resource('产品与托盘绑定', '40006', '4');
    static SIEMENS_ng_report = new Resource('不良品反馈', '40007', '4');
    static SIEMENS_end_task = new Resource('批次完工', '40008', '4');
    static SIEMENS_remainder_mat = new Resource('剩余物料', '40009', '4');
    static SIEMENS_board_entry = new Resource('大板来料', '40010', '4');
}