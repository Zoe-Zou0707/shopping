<template>
  <div id="app">
    <el-container>
      <Header></Header>
    </el-container>
    <el-container>
      <router-view />
    </el-container>
    <el-container>
      <Footer></Footer>
    </el-container>
  </div>
</template>

<script>
import Header from './components/Header'
import Footer from './components/Footer'
export default {
  name: 'App',
  components: {
    Header,
    Footer
  }
}
</script>

<style>
html,body{
  width:1200px;
  margin:0 auto;
}
</style>
