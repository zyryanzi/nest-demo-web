<template>
  <a-config-provider :locale="currentLanguage">
    <div id="app">
      <full-loading :show="fullLoading" :text="loadingText">
        <img src="./assets/mylogo.png">
        <div>
          <p>
            If Element is successfully added to this project, you'll see an
            <code v-text="'<el-button>'"></code>
            below
          </p>
          <el-button>el-button</el-button>
        </div>
        <HelloWorld msg="Welcome to Your Vue.js App"/>
      </full-loading>
      <app-layout />
    </div>
  </a-config-provider>
</template>

<script lang="ts">
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'app',
  components: {
    HelloWorld
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
