import Vue from 'vue'
import Router from 'vue-router'
import Personal from './personal'

Vue.use(Router)



let RouteList = [
  {
    path: '/',
    component: resolve => require(['@/views/Layout/App.vue'], resolve),
    meta: {
      title: '首页',
      keepAlive: false,
    },
    children: [
      {
        path: '/',
        name: 'Dashboard',
        meta: {
          title: '首页',
          keepAlive: false
        },
        component: resolve => require(['@/views/Home/Index.vue'], resolve),
      },
      {
        path: '/structure',
        name: 'organizationManage',
        meta: {
          title: '组织架构',
          keepAlive: false
        },
        component: resolve => require(['@/views/organization/structure.vue'], resolve),
      },
      {
        path: '/role',
        name: 'Role',
        meta: {
          title: '角色管理',
          keepAlive: false
        },
        component: resolve => require(['@/views/organization/role.vue'], resolve),
      },{
        path: '/personnel',
        name: 'Personnel',
        meta: {
          title: '人员管理',
          keepAlive: false
        },
        component: resolve => require(['@/views/organization/personnel.vue'], resolve),
      },
      {
        path: '/data_bank',
        name: 'DataBank',
        meta: {
          title: '资料库',
          keepAlive: false
        },
        component: resolve => require(['@/views/MeansManage/Index.vue'], resolve),
      },
      {
        path: '/course',
        name: 'Course',
        meta: {
          title: '课程库',
          keepAlive: true
        },
        component: resolve => require(['@/views/Course/course.vue'], resolve),
      },
      {
        path: '/train',
        name: 'Train',
        meta: {
          title: '训练列表',
          keepAlive: true
        },
        component: resolve => require(['@/views/Train/train.vue'], resolve),
      },
      {
        path: '/exam_subject',
        name: 'ExamSubject',
        meta: {
          title: '考试科目管理',
          keepAlive: true
        },
        component: resolve => require(['@/views/examination/subject.vue'], resolve),
      },
      {
        path: '/evaluate',
        name: 'evaluate',
        meta: {
          title: '考试评价',
          keepAlive: true
        },
        component: resolve => require(['@/views/examination/evaluate.vue'], resolve),
      },
      //个人中心，可能有修改密码，头像修改等路由
      Personal.index,
    ]
  },
  {
    path: '/login',
    name: 'Login',
    meta: {
      title: '后台登录',
      keepAlive: false
    },
    components: {
      blank: resolve => require(['@/views/Login/Login.vue'], resolve),
    }
  },

]
export default new Router({routes: RouteList})


