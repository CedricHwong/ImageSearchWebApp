<!--<template>-->
<!--  <div>1111111</div>-->
<!--</template>-->
<template>
  <div>
    <div
        style="height:100%;overflow-y:auto;overflow-x:hidden;background:#fff"
        id="avue-view"
    >
      <keep-alive>
        <router-view class="avue-view" v-if="$route.meta.$keepAlive"/>
      </keep-alive>
      <router-view class="avue-view" v-if="!$route.meta.$keepAlive"/>
    </div>
  </div>
</template>

<style lang="scss" scoped>
// .avue-layout {
//   height: 100%;
//   .avue-main {
//     height: calc(100% - 64px);
//     .avue-view {
//       // height: auto;
//       height: calc(100% - 49px);
//     }
//   }
// }
</style>

<script>

export default {
  components: {
  },
  name: "index",
  data() {
    return {
    };
  },
  created() {
  },
  mounted() {
  },
  props: [],
};
</script>
