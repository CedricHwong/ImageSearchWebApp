import Layout from '@/page/index/'
// import Form from '@/mock/form'
// import {formPath} from '@/mock/formPath'


let routes =  [{
  path: '/wel',
  component: Layout,
  redirect: '/wel/index',
  children: [{
    path: 'index',
    name: '首页',
    meta: {
      i18n: 'dashboard'
    },
    component: () =>
      import( /* webpackChunkName: "views" */ '@/views/wel')
  }]
}, {
  path: '/info',
  component: Layout,
  redirect: '/info/index',
  children: [{
    path: 'index',
    name: '个人信息',
    meta: {
      i18n: 'info'
    },
    component: () =>
      import( /* webpackChunkName: "views" */ '@/views/user/info')
  }]
},
// {
//   path: '/work/process/leave',
//   component: Layout,
//   redirect: '/work/process/leave/form',
//   children: [{
//     path: 'form/:processDefinitionId',
//     name: '请假流程',
//     meta: {
//       i18n: 'work'
//     },
//     component: () =>
//       import( /* webpackChunkName: "views" */ '@/views/work/process/leave/form')
//   }, {
//     path: 'handle/:taskId/:processInstanceId/:businessId',
//     name: '处理请假流程',
//     meta: {
//       i18n: 'work'
//     },
//     component: () =>
//       import( /* webpackChunkName: "views" */ '@/views/work/process/leave/handle')
//   }, {
//     path: 'detail/:processInstanceId/:businessId',
//     name: '请假流程详情',
//     meta: {
//       i18n: 'work'
//     },
//     component: () =>
//       import( /* webpackChunkName: "views" */ '@/views/work/process/leave/detail')
//   }]
// }, {//报销流程
//   path: '/work/process/expense',
//   component: Layout,
//   redirect: '/work/process/expense/form',
//   children: [{
//     path: 'form/:processDefinitionId',
//     name: '报销流程',
//     meta: {
//       i18n: 'work'
//     },
//     component: () =>
//       import( /* webpackChunkName: "views" */ '@/views/work/process/form/form')
//   }, {
//     path: 'handle/:taskId/:processInstanceId/:businessId',
//     name: '处理报销流程',
//     meta: {
//       i18n: 'work'
//     },
//     component: () =>
//       import( /* webpackChunkName: "views" */ '@/views/work/process/expense/handle')
//   }, {
//     path: 'detail/:processInstanceId/:businessId',
//     name: '报销流程详情',
//     meta: {
//       i18n: 'work'
//     },
//     component: () =>
//       import( /* webpackChunkName: "views" */ '@/views/work/process/form/detail')
//   }]
// }, {//付款流程
//   path: '/work/process/payment',
//   component: Layout,
//   redirect: '/work/process/payment/form',
//   children: [{
//     path: 'form/:processDefinitionId',
//     name: '付款流程',
//     meta: {
//       i18n: 'work'
//     },
//     component: () =>
//       import( /* webpackChunkName: "views" */ '@/views/work/process/payment/form')
//   }, {
//     path: 'handle/:taskId/:processInstanceId/:businessId',
//     name: '处理付款流程',
//     meta: {
//       i18n: 'work'
//     },
//     component: () =>
//       import( /* webpackChunkName: "views" */ '@/views/work/process/payment/handle')
//   }, {
//     path: 'detail/:processInstanceId/:businessId',
//     name: '付款流程详情',
//     meta: {
//       i18n: 'work'
//     },
//     component: () =>
//       import( /* webpackChunkName: "views" */ '@/views/work/process/payment/detail')
//   }]
// }, {//企业贷款申请流程
//   path: '/work/process/loan',
//   component: Layout,
//   redirect: '/work/process/loan/form',
//   children: [{
//     path: 'form/:processDefinitionId',
//     name: '企业贷款申请流程',
//     meta: {
//       i18n: 'work'
//     },
//     component: () =>
//       import( /* webpackChunkName: "views" */ '@/views/work/process/form/form')
//   }, {
//     path: 'handle/:taskId/:processInstanceId/:businessId',
//     name: '处理企业贷款申请流程',
//     meta: {
//       i18n: 'work'
//     },
//     component: () =>
//       import( /* webpackChunkName: "views" */ '@/views/work/process/form/handle')
//   }, {
//     path: 'detail/:processInstanceId/:businessId',
//     name: '企业贷款申请流程详情',
//     meta: {
//       i18n: 'work'
//     },
//     component: () =>
//       import( /* webpackChunkName: "views" */ '@/views/work/process/form/detail')
//   }]
// }, {//印章申请流程
//   path: '/work/process/seal',
//   component: Layout,
//   redirect: '/work/process/seal/form',
//   children: [{
//     path: 'form/:processDefinitionId',
//     name: '印章申请流程',
//     meta: {
//       i18n: 'work'
//     },
//     component: () =>
//       import( /* webpackChunkName: "views" */ '@/views/work/process/form/form')
//   }, {
//     path: 'handle/:taskId/:processInstanceId/:businessId',
//     name: '处理印章申请流程',
//     meta: {
//       i18n: 'work'
//     },
//     component: () =>
//       import( /* webpackChunkName: "views" */ '@/views/work/process/form/handle')
//   }, {
//     path: 'detail/:processInstanceId/:businessId',
//     name: '印章申请流程详情',
//     meta: {
//       i18n: 'work'
//     },
//     component: () =>
//       import( /* webpackChunkName: "views" */ '@/views/work/process/form/detail')
//   }]
// }, {//个人贷款申请流程
//   path: '/work/process/personalloan',
//   component: Layout,
//   redirect: '/work/process/personalloan/form',
//   children: [{
//     path: 'form/:processDefinitionId',
//     name: '个人贷款申请流程',
//     meta: {
//       i18n: 'work'
//     },
//     component: () =>
//       import( /* webpackChunkName: "views" */ '@/views/work/process/form/form')
//   }, {
//     path: 'handle/:taskId/:processInstanceId/:businessId',
//     name: '处理个人贷款申请流程',
//     meta: {
//       i18n: 'work'
//     },
//     component: () =>
//       import( /* webpackChunkName: "views" */ '@/views/work/process/form/handle')
//   }, {
//     path: 'detail/:processInstanceId/:businessId',
//     name: '个人贷款申请流程详情',
//     meta: {
//       i18n: 'work'
//     },
//     component: () =>
//       import( /* webpackChunkName: "views" */ '@/views/work/process/form/detail')
//   }]
// }
]

// //添加流程表单页面路由
// for (let name in Form) {
//   // console.log(name);

//   let formItem = {
//     path: '/work/process/'+formPath[name],
//     component: Layout,
//     redirect: '/work/process/'+formPath[name]+'/form',
//     children: [{
//       path: 'form/:processDefinitionId',
//       name: name,
//       meta: {
//         i18n: 'work'
//       },
//       component: () =>
//         import( /* webpackChunkName: "views" */ '@/views/work/process/form/form')
//     }, {
//       path: 'handle/:taskId/:processInstanceId/:businessId',
//       name: '处理'+name,
//       meta: {
//         i18n: 'work'
//       },
//       component: () =>
//         import( /* webpackChunkName: "views" */ '@/views/work/process/form/handle')
//     }, {
//       path: 'detail/:processInstanceId/:businessId',
//       name: name+'详情',
//       meta: {
//         i18n: 'work'
//       },
//       component: () =>
//         import( /* webpackChunkName: "views" */ '@/views/work/process/form/detail')
//     }]
//   }
//   routes.push(formItem);
// }

export default routes;
