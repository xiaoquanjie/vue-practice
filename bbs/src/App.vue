<template>
  <cn-header></cn-header>
  <router-view name='main'></router-view>
  <router-view name='sidebar'></router-view>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import CnHeader from './components/CnHeader.vue'

export default {
  name: 'App',
  components: {
    HelloWorld,
    CnHeader
  }
}
</script>

<style>
html {
  background-color: #DDDDDD;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-size: 20px;
}
</style>
