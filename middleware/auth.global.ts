// export default defineNuxtRouteMiddleware((to) => {
//   if (to.path === '/login') return
//   const token = useCookie('authToken').value
//   if (!token) {
//     return navigateTo('/login')
//   }
// })

export default defineNuxtRouteMiddleware((to) => {
  const token = useCookie('authToken')
  if (!token.value && to.path !== '/login') {
    return navigateTo('/login')
  }
})
