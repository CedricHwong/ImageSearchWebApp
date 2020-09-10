import Layout from '@/page/index/'

/**
 * 
 * @param flowList
 */
export function getRouters(flowList) {
  let routes = [];
  // const flowList = await Store.state.dict.flowRoutes;
  for (let i = 0; i < flowList.length; i++) {
    const element = flowList[i];
      // console.log(element)
      // console.log(element.key || element.processDefinitionKey)
      let key = element.key || element.processDefinitionKey;
      let name = element.name || element.processDefinitionName;
    let formItem = {
      path: '/work/process/' + key,
      component: Layout,
      redirect: '/work/process/' + key + '/form',
      children: [{
        path: 'form/:processDefinitionId',
        name: name,
        meta: {
          i18n: 'work',
          remark: key
        },
        component: () =>
          import( /* webpackChunkName: "views" */ '@/views/work/process/form/form')
      }, {
        path: 'handle/:taskId/:processInstanceId/:businessId',
        name: '处理' + name,
        meta: {
          i18n: 'work',
          remark: key
        },
        component: () =>
          import( /* webpackChunkName: "views" */ '@/views/work/process/form/handle')
      }, {
        path: 'detail/:processInstanceId/:businessId',
        name: name + '详情',
        meta: {
          i18n: 'work',
          remark: key
        },
        component: () =>
          import( /* webpackChunkName: "views" */ '@/views/work/process/form/detail')
      }]
    }
    routes.push(formItem);
  }
  // console.log(routes)
  return routes;
}
