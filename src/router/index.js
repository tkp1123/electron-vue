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
        //手动页面
        {
          path: '/manual',
          name: 'manual',
          component: resolve => require(['@/components/views/manual/manual'], resolve)
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
        //报警页面
        {
          path: '/warnning',
          name: 'warnning',
          component: resolve => require(['@/components/views/warnning/warnning'], resolve)
        },
      ]
    }
  ]
})
//挂载路由导航守卫
router.beforeEach(function (to, from, next) {

  next();
})
export default router