export default defineNuxtRouteMiddleware(async () => {
  const supabase = useSupabase()
  const user = await supabase.auth.getUser()

  if (!user.data.user) {
    return navigateTo('/auth/login')
  }
})
