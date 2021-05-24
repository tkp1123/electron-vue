<template>
  <!-- 侧边  -->
  <el-scrollbar wrap-class="scrollbar-wrapper">
    <div class="nav_title">
      <img class="img" src="@/assets/logo.png" />
      <!-- <span v-if="!getCollapse">管理系统</span> -->
    </div>
    <div class="sign-button" @click="pointClick">
      <div>签到</div>
    </div>
    <el-menu
      background-color="#eceff4"
      text-color="#515a6e"
      active-text-color="#2d8cf0"
      unique-opened
      :router="true"
      :collapse="getCollapse"
      :collapse-transition="false"
      :default-active="$route.path"
    >
      <template v-for="menu in menuList">
        <el-submenu
          :index="menu.id + ''"
          v-if="menu.children && menu.resource"
          :key="menu.id"
        >
          <template slot="title" v-if="menu.resource">
            <i :class="menu.icon"></i>
            <span>{{ menu.autoName }}</span>
          </template>
          <el-menu-item
            v-for="child in menu.children"
            :index="'/' + child.path"
            :key="child.id"
          >
            <i class="el-icon-menu"></i>
            <span>{{ child.autoName }}</span>
          </el-menu-item>
        </el-submenu>
        <el-menu-item
          :index="'/' + menu.path"
          v-else-if="menu.resource"
          :key="menu.id"
        >
          <i :class="menu.icon"></i>
          <span slot="title">{{ menu.autoName }}</span>
        </el-menu-item>
      </template>
    </el-menu>
  </el-scrollbar>
</template>
<script>
import jsonNav029 from '@/api/nav029.json'
import jsonNav021 from '@/api/nav021.json'
import { Resources } from '@/util/Resources'
import { Validation } from '@/util/Validation'
export default {
  computed: {
    getCollapse() {
      return this.$store.state.collapse.isCollapse
    },
  },
  data() {
    return {
      menuList: '',
      Resources: Resources,
      Validation: Validation,
      menuList029: [
        {
          id: '1',
          autoName: '首页',
          path: 'welcome',
          icon: 'iconfont icon-shouye-yuanshijituantubiao',
          resource: true,
        },
        {
          id: '2',
          autoName: '任务列表',
          path: 'taskList',
          icon: 'iconfont icon-renwu',
          resource: true,
          children: [
            {
              id: '2-1',
              autoName: '任务和工艺信息',
              path: 'taskInformation',
              children: [],
            },
          ],
        },
        {
          id: '3',
          autoName: '工作台',
          path: 'workbench',
          icon: 'iconfont icon-gongzuotai',
          resource: true,
          children: [
            {
              id: '3-1',
              autoName: 'MES任务',
              path: 'taskMES',
              children: [],
            },
            {
              id: '3-3',
              autoName: '托盘绑定',
              path: 'bindTray',
              children: [],
            },
            {
              id: '3-4',
              autoName: '自建工单',
              path: 'workOrder',
              children: [],
            },
            {
              id: '3-7',
              autoName: '批次完工信息',
              path: 'batchFinished',
              children: [],
            },
          ],
        },
        {
          id: '4',
          autoName: '手动页面',
          path: 'manual',
          icon: 'iconfont icon-shoudongtongbu',
          resource: true,
          children: [
            {
              id: '4-1',
              autoName: '主页面',
              path: 'manualMain',
              children: [],
            },
            {
              id: '4-2',
              autoName: '手动控制',
              path: 'manualControl',
              children: [],
            },
          ],
        },
        {
          id: '5',
          autoName: 'IO监控',
          path: 'ioStream',
          icon: 'iconfont icon-liucheng',
          resource: true,
          children: [
            {
              id: '5-1',
              autoName: 'PLC1输出',
              path: 'plc1OutPut',
              children: [],
            },
            {
              id: '5-2',
              autoName: 'PLC2输出',
              path: 'plc2OutPut',
              children: [],
            },
            {
              id: '5-3',
              autoName: 'PLC输入1',
              path: 'PLCInPut1',
              children: [],
            },
            {
              id: '5-4',
              autoName: 'PLC输入2',
              path: 'PLCInPut2',
              children: [],
            },
          ],
        },
        {
          id: '6',
          autoName: '设置页面',
          path: 'setting',
          icon: 'iconfont icon-xianxingtubiaozhizuomoban-19',
          resource: true,
          children: [
            {
              id: '6-1',
              autoName: '基本参数',
              path: 'basic',
              children: [],
            },
            {
              id: '6-2',
              autoName: '速度',
              path: 'speed',
              children: [],
            },
            {
              id: '6-3',
              autoName: '电机参数',
              path: 'electricMotor',
              children: [],
            },
            {
              id: '6-4',
              autoName: '厂家参数',
              path: 'manufactor',
              children: [],
            },
            {
              id: '6-5',
              autoName: '设置',
              path: 'settingPage',
              children: [],
            },
            {
              id: '6-6',
              autoName: 'MES接口',
              path: 'mesInterface',
              children: [],
            },
            {
              id: '6-7',
              autoName: '工艺参数',
              path: 'processParameters',
              children: [],
            },
          ],
        },
        {
          id: '7',
          autoName: '日志管理',
          path: 'setting',
          icon: 'iconfont icon-rizhi',
          resource: true,
          children: [
            {
              id: '7-1',
              autoName: '报警页面',
              path: 'warnning',
            },
            {
              id: '7-2',
              autoName: '操作记录',
              path: 'operationrecord',
            },
            {
              id: '7-3',
              autoName: '进出时间',
              path: 'InAndOut',
            },
          ],
        },
        {
          id: '8',
          autoName: '权限管理',
          path: 'setting',
          icon: 'iconfont icon-yonghu',
          resource: Validation.checkResource(Resources.ROLE),
          children: [
            {
              id: '8-1',
              autoName: '用户管理',
              path: 'userManage',
            },
            {
              id: '8-2',
              autoName: '角色管理',
              path: 'roleManage',
            },
          ],
        },
      ],
      menuList021: [
        {
          id: '1',
          autoName: '首页',
          path: 'welcome',
          icon: 'iconfont icon-shouye-yuanshijituantubiao',
          resource: true,
        },
        {
          id: '2',
          autoName: '任务列表',
          path: 'taskList',
          icon: 'iconfont icon-renwu',
          resource: true,
          children: [
            {
              id: '2-1',
              autoName: '任务和工艺信息',
              path: 'taskInformation',
              children: [],
            },
          ],
        },
        {
          id: '3',
          autoName: '工作台',
          path: 'workbench',
          icon: 'iconfont icon-gongzuotai',
          resource: true,
          children: [
            {
              id: '3-1',
              autoName: 'MES任务',
              path: 'taskMES',
              children: [],
            },
            {
              id: '3-2',
              autoName: '贴皮工序',
              path: 'stickingSkin',
              children: [],
            },
            {
              id: '3-3',
              autoName: '托盘绑定',
              path: 'bindTray',
              children: [],
            },
            {
              id: '3-4',
              autoName: '自建工单',
              path: 'workOrder',
              children: [],
            },
            {
              id: '3-5',
              autoName: '异常产品提报',
              path: 'abnormal',
              children: [],
            },
            {
              id: '3-6',
              autoName: '部件托盘上线',
              path: 'trayinformation',
              children: [],
            },
          ],
        },
        {
          id: '4',
          autoName: '手动页面',
          path: 'manual',
          icon: 'iconfont icon-shoudongtongbu',
          resource: true,
          children: [
            {
              id: '4-1',
              autoName: '主页面',
              path: 'manualMain',
              children: [],
            },
            {
              id: '4-2',
              autoName: '手动控制',
              path: 'manualControl',
              children: [],
            },
          ],
        },
        {
          id: '5',
          autoName: 'IO监控',
          path: 'ioStream',
          icon: 'iconfont icon-liucheng',
          resource: true,
          children: [
            {
              id: '5-1',
              autoName: 'PLC1输出',
              path: 'plc1OutPut',
              children: [],
            },
            {
              id: '5-2',
              autoName: 'PLC2输出',
              path: 'plc2OutPut',
              children: [],
            },
            {
              id: '5-3',
              autoName: 'PLC输入1',
              path: 'PLCInPut1',
              children: [],
            },
            {
              id: '5-4',
              autoName: 'PLC输入2',
              path: 'PLCInPut2',
              children: [],
            },
          ],
        },
        {
          id: '6',
          autoName: '设置页面',
          path: 'setting',
          icon: 'iconfont icon-xianxingtubiaozhizuomoban-19',
          resource: true,
          children: [
            {
              id: '6-1',
              autoName: '基本参数',
              path: 'basic',
              children: [],
            },
            {
              id: '6-2',
              autoName: '速度',
              path: 'speed',
              children: [],
            },
            {
              id: '6-3',
              autoName: '电机参数',
              path: 'electricMotor',
              children: [],
            },
            {
              id: '6-4',
              autoName: '厂家参数',
              path: 'manufactor',
              children: [],
            },
            {
              id: '6-5',
              autoName: '设置',
              path: 'settingPage',
              children: [],
            },
            {
              id: '6-6',
              autoName: 'MES接口',
              path: 'mesInterface',
              children: [],
            },
            {
              id: '6-7',
              autoName: '工艺参数',
              path: 'processParameters',
              children: [],
            },
          ],
        },
        {
          id: '7',
          autoName: '日志管理',
          path: 'setting',
          icon: 'iconfont icon-rizhi',
          resource: true,
          children: [
            {
              id: '7-1',
              autoName: '报警页面',
              path: 'warnning',
            },
            {
              id: '7-2',
              autoName: '操作记录',
              path: 'operationrecord',
            },
            {
              id: '7-3',
              autoName: '进出时间',
              path: 'InAndOut',
            },
          ],
        },
        {
          id: '8',
          autoName: '权限管理',
          path: 'setting',
          icon: 'iconfont icon-yonghu',
          resource: Validation.checkResource(Resources.ROLE),
          children: [
            {
              id: '8-1',
              autoName: '用户管理',
              path: 'userManage',
            },
            {
              id: '8-2',
              autoName: '角色管理',
              path: 'roleManage',
            },
          ],
        },
      ],
    }
  },
  mounted() {
    let parameterName = this.$store.state.parameterName.parameterName
    if (parameterName == '029') {
      this.menuList = this.menuList029
    } else {
      this.menuList = this.menuList021
    }
  },
  methods: {
    pointClick() {
      this.$router.push('/punchClock')
    },
  },
}
</script>
<style lang="less" scoped>
.img {
  width: 45px;
  height: 45px;
}

.iconfont {
  margin-right: 10px;
  font-size: 18px;
}
.nav_title {
  color: #515a6e;
  min-height: 65px;
  font-size: 18px;
  font-weight: 500;
  background-color: #eceff4;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
}
.sign-button {
  z-index: 1002;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  color: #000;
  font-size: 14px;
  font-weight: 500;
  min-height: 50px;
  background-color: #c0e3f780;
  text-align: center;
  border: solid 1px #c0e3f7;
  display: flex;
  justify-content: center;
  align-items: center;
}

.sign-button:active {
  color: #409eff;
  background-color: #c0e3f7;
}
.el-menu-item.is-active {
  background-color: #2d8cf0 !important;
  color: #c0e3f7 !important;
}
</style>