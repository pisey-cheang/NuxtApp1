<template>
  <aside class="p-4 space-y-4">
    <NuxtLink to="/" class="block hover:underline">Dashboard</NuxtLink>
    <NuxtLink to="/users" class="block hover:underline">Users</NuxtLink>
    <NuxtLink to="/settings" class="block hover:underline">Settings</NuxtLink>
    <button @click="logout" class="mt-4 text-red-500">Logout</button>
  </aside>
</template>

<script setup>
const logout = () => {
  useCookie('authToken').value = null
  navigateTo('/login')
}
</script>
