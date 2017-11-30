<template>
  <div id="app">
    <el-container>
      <el-header id="header">
        <Headers />
      </el-header>
      <el-container>
        <el-aside width="200px">Aside</el-aside>
        <el-main>
          <router-view/>  
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import Headers from './components/Header.vue'

export default {
  name: 'app',
  components: {
    Headers
  }
}
</script>

<style>

</style>
