<template>
  <div>
    <el-menu
      :default-active="activeIndex"
      mode="horizontal"
      @select="handleSelect"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b">
      <el-submenu index="1">
        <template slot="title">前端</template>
        <router-link to="/qa"><el-menu-item index="2-1">练习题</el-menu-item></router-link>
        <router-link to="/code"><el-menu-item index="2-2">代码谱</el-menu-item></router-link>
      </el-submenu>
    </el-menu>
  </div>
</template>

<script>
export default {
  data() {
      return {
        activeIndex: '1'
      };
    },
    methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      }
    }
}
</script>

