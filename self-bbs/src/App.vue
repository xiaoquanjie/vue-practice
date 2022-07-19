<template>
  <bbs-header></bbs-header>
  <router-view name="main"></router-view>
  <router-view name="side"></router-view> 
</template>

<script>
import BbsHeader from './components/BbsHeader.vue'

export default {
  name: 'App',
  components: {
    BbsHeader
  }
}
</script>

<style>
html {
  background-color: #DDDDDD;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  font-size: 20px;
}
</style>
