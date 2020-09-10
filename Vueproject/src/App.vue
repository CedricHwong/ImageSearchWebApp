<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  name: "app",
  data() {
    return {};
  },
  watch: {},
  created() {},
  methods: {},
  computed: {}
};
</script>
<style lang="scss">
#app {
  width: 100%;
  height: 100%;
  overflow: hidden;
}

.filter-container {
  font-family: PingFangSC-Regular;
  font-size: 14px;
  color: #424242;
  letter-spacing: 0;
  text-align: justify;
  // margin-bottom: 20px;
  // margin-left: 20px;

  .title {
    font-size: 14px;
    color: #424242;
  }
}

.filter-btn {
  padding-left: 26px;
  padding-right: 26px;
}

.filter-item {
  width: 150px;
  height: 30px;
  line-height: 30px;
  border-radius: 4px;
  margin-right: 24px;
  margin-bottom: 36px;
}

.filter-btns {
  margin-bottom: 12px;
}

.filter-title {
  font-size: 14px;
  color: #424242;
}

.el-input__icon {
  height: 100%;
  width: 25px;
  text-align: center;
  -webkit-transition: all 0.3s;
  transition: all 0.3s;
  line-height: 30px;
}

.el-table tr {
  .cell {
    font-size: 14px;
    color: #616164;
  }

  td {
    padding: 13px 0;
  }
}

.el-table th {
  background-color: #fafafa;
  padding: 14px 0;

  .cell {
    font-size: 16px;
    color: #252525;
  }
}

.el-table .cell {
  color: #424242;
}

.table-header {
  font-size: 14px;
  color: #252525;
  background: #fafafa;
}

.table-cell {
  font-size: 14px;
  color: #606226;
}

.el-input__icon {
  height: 100%;
  width: 25px;
  text-align: center;
  -webkit-transition: all 0.3s;
  transition: all 0.3s;
  line-height: 40px;
}
</style>
