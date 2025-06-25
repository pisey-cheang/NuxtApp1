<template>
  <div class="w-full h-screen flex">
    <div class="w-3/5 flex flex-col justify-center items-center p-10 bg-white">
      <img src="/logocanadia.jpg" alt="Logo" class="h-[60px] w-auto mb-10" />

      <div class="w-full max-w-md">
        <div class="mb-10 text-center">
          <h1 class="font-bold text-2xl mb-2">Login to Your Account</h1>
          <p class="text-gray-600 text-sm">
            Log in so you can continue building and editing your onboarding flows.
          </p>
        </div>

        <form @submit.prevent="handleLogin">
          <div class="relative mb-4">
            <input
              v-model="email"
              type="email"
              required
              id="email"
              class="input peer"
              placeholder=" "
            />
            <label for="email" class="floating-label">Email</label>
          </div>

          <div class="relative mb-4">
            <input
              v-model="password"
              type="password"
              required
              id="password"
              class="input peer"
              placeholder=" "
            />
            <label for="password" class="floating-label">Password</label>
          </div>

          <button type="submit" class="btn-primary">
            Log In
          </button>
        </form>
      </div>
    </div>

    <div class="w-2/5 bg-sky-500 flex items-center rounded-bl-custom-round justify-center text-white p-10">
      <div class="text-center max-w-md">
        <h1 class="font-bold text-2xl mb-4">login in to Your Account</h1>
        <p class="mb-6">
          Create an account to start building your onboarding experience with us.
        </p>
        <NuxtLink to="/register">
          <button class="bg-white text-sky-600 font-semibold py-2 px-6 rounded hover:bg-emerald-100 transition">
            Register
          </button>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup>
  import { ref } from 'vue'
  import { useRouter, useNuxtApp } from '#app'

  const email = ref('')
  const password = ref('')
  const router = useRouter()
  const { $api } = useNuxtApp()

  const handleLogin = async () => {
  try {
    const payload = {
      mainFN: 'EXT',
      project: 'login',
      mth: 'NA',
      REQDATA: {
        paraURL: 'sdf/sdfsf/login',
        REQTEXT: {
          email: email.value,
          password: password.value,
        }
      }
    }

    const res = await $api.post('/auth/login', payload)
    if (res.data.status?.code === '00') {
      // localStorage.setItem('authToken', res.data.data.token)

      const token = useCookie('authToken')
      token.value = res.data.data.token
      router.push('/')
    } else {
      alert('Login failed: ' + (res.data.status?.message || 'Unknown error'))
    }
  } catch (err) {
    console.error(err)
    alert('Login failed: ' + (err.response?.data?.message || err.message))
  }
}
</script>



<style scoped>
.input {
  @apply block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent border border-gray-300 rounded appearance-none focus:outline-none focus:ring-0 focus:border-blue-600;
}

.floating-label {
  @apply absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-2;
}

.btn-primary {
  @apply w-full bg-sky-500 text-white py-3 rounded-lg hover:bg-sky-400 transition;
}
</style>
