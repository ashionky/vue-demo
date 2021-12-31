<template>
  <el-row class="tac">
    <el-col :span="4" >
      <h5>教务系统</h5>
      <el-menu
        default-active="2"
        class="el-menu-vertical-demo"
        @open="handleOpen"
        @close="handleClose"
        background-color="#545c64"
        text-color="#fff"
        active-text-color="#ffd04b">
        <el-submenu index="1">
          <template slot="title">
            <i class="el-icon-location"></i>
            <span>导航栏</span>
          </template>
          <el-submenu index="1-1">
            <template slot="title">学生管理</template>
            <el-menu-item index="1-1-1">学生列表</el-menu-item>
          </el-submenu>
          <el-submenu index="1-2">
            <template slot="title">教师管理</template>
            <el-menu-item index="1-2-1">教师列表</el-menu-item>
          </el-submenu>
        </el-submenu>
      </el-menu>
    </el-col>
  </el-row>
</template>

<script>
  export default {
    methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      }
    }
  }
</script>
