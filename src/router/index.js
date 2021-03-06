import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
const originalPush = Router.prototype.push
Router.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}
const router = new Router({
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/login',
      name: 'login',
      component: resolve => require(['@/components/views/login/login'], resolve)
    },
    {
      path: '/home',
      name: 'home',
      redirect: '/welcome',
      component: resolve => require(['@/components/common/home'], resolve),
      children: [
        //首页
        {
          path: '/welcome',
          name: 'welcome',
          component: resolve => require(['@/components/views/welcome/welcome'], resolve)
        },
        //任务列表
        // {
        //   path: '/taskList',
        //   name: 'taskList',
        //   component: resolve => require(['@/components/views/task/taskList'], resolve)
        // },
        //任务和工艺信息
        {
          path: '/taskInformation',
          name: 'taskInformation',
          component: resolve => require(['@/components/views/task/taskInformation'], resolve),
        },
        //任务和工艺信息详情
        {
          path: '/taskInformationDetail',
          name: 'taskInformationDetail',
          component: resolve => require(['@/components/views/task/taskInformationDetail'], resolve)
        },
        //工艺请求
        // {
        //   path: '/technology',
        //   name: 'technology',
        //   component: resolve => require(['@/components/views/task/technology'], resolve)
        // },
        //工艺请求详情
        // {
        //   path: '/technologyDetail',
        //   name: 'technologyDetail',
        //   component: resolve => require(['@/components/views/task/technologyDetail'], resolve)
        // },
        //工作台
        // {
        //   path: '/workbench',
        //   name: 'workbench',
        //   component: resolve => require(['@/components/views/workbench/workbench'], resolve)
        // },
        //MES任务
        {
          path: '/taskMES',
          name: 'taskMES',
          component: resolve => require(['@/components/views/workbench/taskMES'], resolve)
        },
        //贴皮工序
        {
          path: '/stickingSkin',
          name: 'stickingSkin',
          component: resolve => require(['@/components/views/workbench/stickingSkin'], resolve)
        },
        //托盘绑定
        {
          path: '/bindTray',
          name: 'bindTray',
          component: resolve => require(['@/components/views/workbench/bindTray'], resolve)
        },
        //自建工单
        {
          path: '/workOrder',
          name: 'workOrder',
          component: resolve => require(['@/components/views/workbench/workOrder'], resolve)
        },
        //自建工单详情
        {
          path: '/workOrderDetail',
          name: 'workOrderDetail',
          component: resolve => require(['@/components/views/workbench/workOrderDetail'], resolve)
        },
        //添加工单
        {
          path: '/addWorkOrder',
          name: 'addWorkOrder',
          component: resolve => require(['@/components/views/workbench/addWorkOrder'], resolve)
        },
        //异常产品提报
        {
          path: '/abnormal',
          name: 'abnormal',
          component: resolve => require(['@/components/views/workbench/abnormal'], resolve)
        },
        //异常产品提报详情
        {
          path: '/abnormalDetail',
          name: 'abnormalDetail',
          component: resolve => require(['@/components/views/workbench/abnormalDetail'], resolve)
        },
        //异常产品提交
        {
          path: '/abnormalsubmit',
          name: 'abnormalsubmit',
          component: resolve => require(['@/components/views/workbench/abnormalsubmit'], resolve)
        },
        //托盘上线
        {
          path: '/trayinformation',
          name: 'trayinformation',
          component: resolve => require(['@/components/views/workbench/trayinformation'], resolve)
        },
        //批次完工信息
        {
          path: '/batchFinished',
          name: 'batchFinished',
          component: resolve => require(['@/components/views/workbench/batchFinished'], resolve)
        },
        //托盘上线详情
        // {
        //   path: '/trayinformationDetail',
        //   name: 'trayinformationDetail',
        //   component: resolve => require(['@/components/views/workbench/trayinformationDetail'], resolve)
        // },
        // //托盘上线历史页面
        // {
        //   path: '/trayinformationHistory',
        //   name: 'trayinformationHistory',
        //   component: resolve => require(['@/components/views/workbench/trayTemplate/trayinformationHistory'], resolve)
        // },
        //手动页面
        //主页面 
        {
          path: '/manualMain',
          name: 'manualMain',
          component: resolve => require(['@/components/views/manual/manualMain'], resolve)
        },
        //手动控制
        {
          path: '/manualControl',
          name: 'manualControl',
          component: resolve => require(['@/components/views/manual/manualControl'], resolve)
        },
        //IO监控
        // {
        //   path: '/iostream',
        //   name: 'iostream',
        //   component: resolve => require(['@/components/views/ioStream/ioStream'], resolve)
        // },
        //PLC1输出
        {
          path: '/plc1OutPut',
          name: 'plc1OutPut',
          component: resolve => require(['@/components/views/ioStream/plc1OutPut'], resolve)
        },
        //PLC2输出
        {
          path: '/plc2OutPut',
          name: 'plc2OutPut',
          component: resolve => require(['@/components/views/ioStream/plc2OutPut'], resolve)
        },
        //PLC输入1
        {
          path: '/PLCInPut1',
          name: 'PLCInPut1',
          component: resolve => require(['@/components/views/ioStream/PLCInPut1'], resolve)
        },
        //PLC输入2
        {
          path: '/PLCInPut2',
          name: 'PLCInPut2',
          component: resolve => require(['@/components/views/ioStream/PLCInPut2'], resolve)
        },
        //设置页面
        // {
        //   path: '/setting',
        //   name: 'setting',
        //   component: resolve => require(['@/components/views/setting/setting'], resolve)
        // },
        //基本参数
        {
          path: '/basic',
          name: 'basic',
          component: resolve => require(['@/components/views/setting/basic'], resolve)
        },
        //速度
        {
          path: '/speed',
          name: 'speed',
          component: resolve => require(['@/components/views/setting/speed'], resolve)
        },
        //电机参数
        {
          path: '/electricMotor',
          name: 'electricMotor',
          component: resolve => require(['@/components/views/setting/electricMotor'], resolve)
        },
        //厂家参数
        {
          path: '/manufactor',
          name: 'manufactor',
          component: resolve => require(['@/components/views/setting/manufactor'], resolve)
        },
        //设置页面
        {
          path: '/settingPage',
          name: 'settingPage',
          component: resolve => require(['@/components/views/setting/settingPage'], resolve)
        },
        //mes接口
        {
          path: '/mesInterface',
          name: 'mesInterface',
          component: resolve => require(['@/components/views/setting/mesInterface'], resolve)
        },
        //工艺参数
        {
          path: '/processParameters',
          name: 'processParameters',
          component: resolve => require(['@/components/views/setting/processParameters'], resolve)
        },
        //报警页面
        {
          path: '/warnning',
          name: 'warnning',
          component: resolve => require(['@/components/views/warnning/warnning'], resolve)
        },
        //操作记录
        {
          path: '/operationrecord',
          name: 'operationrecord',
          component: resolve => require(['@/components/views/warnning/operationrecord'], resolve)
        },
        //进出时间
        {
          path: '/InAndOut',
          name: 'InAndOut',
          component: resolve => require(['@/components/views/warnning/InAndOut'], resolve)
        },
        //签到
        {
          path: '/punchClock',
          name: 'punchClock',
          component: resolve => require(['@/components/views/punchClock/punchClock'], resolve)
        },
        //用户管理
        {
          path: '/userManage',
          name: 'userManage',
          component: resolve => require(['@/components/views/user/userManage'], resolve)
        },
        //用户修改
        {
          path: '/userEdit',
          name: 'userEdit',
          component: resolve => require(['@/components/views/user/userTemplate/userEdit'], resolve)
        },
        //角色管理
        {
          path: '/roleManage',
          name: 'roleManage',
          component: resolve => require(['@/components/views/user/roleManage'], resolve)
        },
        //角色修改权限
        {
          path: '/roleEdit',
          name: 'roleEdit',
          component: resolve => require(['@/components/views/user/roleTemplate/roleEdit'], resolve)
        },
      ]
    }
  ]
})
//挂载路由导航守卫
router.beforeEach(function (to, from, next) {
  //在这里可以设置路由拦截
  if (to.path == '/login') return next();
  const token = window.localStorage.getItem('token');
  if (!token) return next('/login');
  next();
})
export default router