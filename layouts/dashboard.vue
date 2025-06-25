<template>
  <el-container style="min-height: 100vh">
    <el-aside width="200px" class="bg-gray-800 text-white">
      <Sidebar />
    </el-aside>

    <el-container>
      <el-header height="64px">
        <Navbar />
      </el-header>

      <el-main>
        <slot />
      </el-main>
    </el-container>
  </el-container>
</template>

<script setup>
import Sidebar from '~/components/Sidebar.vue'
import Navbar from '~/components/Navbar.vue'
</script>
