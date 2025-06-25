
import axios from 'axios'

export default defineNuxtPlugin((nuxtApp) => {
  const config = useRuntimeConfig()
  const api = axios.create({
    baseURL: config.public.apiBase, // from nuxt.config.ts
    headers: {
      'Content-Type': 'application/json',
    },
  })

  // Optional: Add token if exists
  api.interceptors.request.use((req) => {
    const token = localStorage.getItem('authToken')
    if (token) req.headers.Authorization = `Bearer ${token}`
    return req
  })

  return {
    provide: {
      api, 
    },
  }
})
