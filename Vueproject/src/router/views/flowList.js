import Layout from '@/page/index/'
import Store from '../../store/';

// let routes = []
// // const flowList = Store.state.dict.flowRoutes;

// // var flowList;
// let promise = new Promise(function (resolve) {
//   const flowList = Store.state.dict.flowRoutes;
//   resolve(flowList)
// })
// promise.then(function (value) {
//   console.log(value)
//   for (let i = 0; i < value.length; i++) {
//     const element = value[i];
//     //   console.log(element)
//     let formItem = {
//       path: '/work/process/' + element.routeValue,
//       component: Layout,
//       redirect: '/work/process/' + element.routeValue + '/form',
//       children: [{
//         path: 'form/:processDefinitionId',
//         name: element.routeName,
//         meta: {
//           i18n: 'work',
//           remark: element.routeValue
//         },
//         component: () =>
//           import( /* webpackChunkName: "views" */ '@/views/work/process/form/form')
//       }, {
//         path: 'handle/:taskId/:processInstanceId/:businessId',
//         name: '处理' + element.routeName,
//         meta: {
//           i18n: 'work',
//           remark: element.routeValue
//         },
//         component: () =>
//           import( /* webpackChunkName: "views" */ '@/views/work/process/form/handle')
//       }, {
//         path: 'detail/:processInstanceId/:businessId',
//         name: element.routeName + '详情',
//         meta: {
//           i18n: 'work',
//           remark: element.routeValue
//         },
//         component: () =>
//           import( /* webpackChunkName: "views" */ '@/views/work/process/form/detail')
//       }]
//     }
//     routes.push(formItem);
//   }
// }).catch(function (error) {
//   console.log(error);
// })
// console.log(flowList)
//添加流程表单页面路由

// console.log(routes)
// export default routes;

export async function getRoutes() {
  let routes = [];
  const flowList = await Store.state.dict.flowRoutes;
  // console.log(flowList)
  for (let i = 0; i < flowList.length; i++) {
    const element = flowList[i];
    //   console.log(element)
    let formItem = {
      path: '/work/process/' + element.routeValue,
      component: Layout,
      redirect: '/work/process/' + element.routeValue + '/form',
      children: [{
        path: 'form/:processDefinitionId',
        name: element.routeName,
        meta: {
          i18n: 'work',
          remark: element.routeValue
        },
        component: () =>
          import( /* webpackChunkName: "views" */ '@/views/work/process/form/form')
      }, {
        path: 'handle/:taskId/:processInstanceId/:businessId',
        name: '处理' + element.routeName,
        meta: {
          i18n: 'work',
          remark: element.routeValue
        },
        component: () =>
          import( /* webpackChunkName: "views" */ '@/views/work/process/form/handle')
      }, {
        path: 'detail/:processInstanceId/:businessId',
        name: element.routeName + '详情',
        meta: {
          i18n: 'work',
          remark: element.routeValue
        },
        component: () =>
          import( /* webpackChunkName: "views" */ '@/views/work/process/form/detail')
      }]
    }
    routes.push(formItem);
  }
  console.log(routes)
  return routes;
}