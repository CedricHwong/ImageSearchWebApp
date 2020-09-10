/**
 * 全局配置文件
 */
export default {
  title: " ",
  logo: " ",//菜单收回显示
  key: 'saber',//配置主键,目前用于存储
  // indexTitle: 'Saber Admin',
  indexTitle: '',
  clientId: 'saber', // 客户端id
  clientSecret: 'saber_secret', // 客户端密钥
  tenantMode: true, // 是否开启租户模式
  lockPage: '/lock',
  tokenTime: 3000,
  //http的status默认放行不才用统一处理的,
  statusWhiteList: [],
  //配置首页不可关闭
  isFirstPage: false,
  fistPage: {
    label: "首页",
    value: "/wel/index",
    params: {},
    query: {},
    meta: {
      i18n: 'dashboard'
    },
    group: [],
    close: false
  },
  //配置菜单的属性
  menu: {
    iconDefault: 'iconfont icon-caidan',
    props: {
      label: 'name',
      path: 'path',
      icon: 'source',
      children: 'children'
    }
  },

  //流程设计器地址
  //flowDesignUrl: 'http://47.105.182.122:8105',
  //update by zcg at 2019年11月29日18:50:52
  //production   服务器内部访问地址
  //development  服务器外部访问地址
  //test         本地测试地址
  flowDesignUrl: process.env.NODE_ENV === 'production'? 'http://172.31.195.110:8105': (process.env.NODE_ENV === 'test'?'http://localhost:8105':'http://47.105.182.122:8105'),
  // flowDesignUrl: 'http://172.31.195.110:8105',
}
