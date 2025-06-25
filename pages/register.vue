<template>
  <div class="min-h-screen flex items-center justify-center bg-gray-100">
    <div class="bg-white p-8 rounded shadow-md w-full max-w-sm text-center">
      <img src="/logocanadia.jpg" alt="Logo" class="w-20 h-20 mx-auto mb-4" />
      <h2 class="text-2xl font-bold mb-6">Register</h2>
      <form @submit.prevent="handleRegister">
        <input v-model="email" type="email" placeholder="Email" class="input" />
        <input v-model="password" type="password" placeholder="Password" class="input" />
        <button type="submit" class="btn">Register</button>
        <p class="text-center text-sm mt-4">
          Already have an account?
          <NuxtLink to="/login" class="text-blue-500 underline">Login</NuxtLink>
        </p>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const email = ref('')
const password = ref('')
const router = useRouter()

const handleRegister = () => {
  localStorage.setItem('auth', 'true')
  router.push('/dashboard')
}
</script>

<style scoped>
.input {
  @apply w-full p-2 mb-4 border border-gray-300 rounded;
}
.btn {
  @apply w-full bg-green-500 text-white py-2 rounded hover:bg-green-600;
}
</style>
