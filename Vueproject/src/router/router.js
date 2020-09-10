import Vue from "vue";
import Router from "vue-router";

/**
 * 说明
 * 需要展示左侧菜单 meta {
 *   type:1
 * }
 * 不需要展示左侧菜单 meta {
 *   type:2
 * }
 * 二级菜单 直接放入一级菜单内即可并增加name
 *
 * group {
 *   供应商:1286587979434823682,
 *   旅投:1288026384043610114,
 *   酒店集团:1288026487970074626,
 *   酒店:1286587868130578434
 * }
 *
 *
 */
Vue.use(Router);
export default new Router(
  {
    routes: [
      {
        path: "/",
        component: () => import(/* webpackChunkName: "user" */ "@/page/index"),
        redirect: "/main",
        props: true,
        children: [
          {
            path: "/main",
            component: () =>
              import(/* webpackChunkName: "user" */ "@/views/main/main"),
            meta: {
              name: "系统首页",
              type: 1
            },
            props: true
          }
        ]
      }
    ]
  }
);
