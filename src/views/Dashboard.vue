<template>
  <div class="test-wrap">
    <full-loading :show="loading" :text="loadingText" />
    <a-card class="card">
      <img alt="Vue logo" src="../assets/mylogo.png">
    </a-card>
    <a-card class="card">
      <HelloWorld msg="Welcome to Your Vue.js + TypeScript App"/>
    </a-card>
  </div>
</template>

<script lang="ts">
    import {Options, Vue, setup} from 'vue-class-component'; // @ is an alias to /src
    import {defineComponent} from 'vue'
    import HelloWorld from "@/components/HelloWorld.vue";

@Options({
  components: {
    HelloWorld
  }
})
export default class Home extends Vue {}
</script>

<style lang="less" scoped>
.icons-list ::v-deep(.anticon) {
  margin-right: 6px;
  font-size: 40px;
  position: relative;
  z-index: 999;
  color: #f00;
}
.card {
  margin-top: 30px;
  position: relative;
}
.icons-list ::v-deep(.anticon) {
  margin-right: 6px;
  font-size: 40px;
  position: relative;
  z-index: 999;
  color: #f00;
}
.row {
  min-height: 60px;
}
.test {
  color: @primary;
}
.card {
  margin-top: 30px;
  position: relative;
  padding: 20px;
}
.test-wrap {
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-items: center;
  margin: 20px;
  border: 1px solid #eee;
  box-shadow: 1px 1px 10px #eee;
  padding: 30px 10px;
}
@media (max-width: 580px) {
  .chart-wrapper {
    padding: 8px;
  }
}
</style>

