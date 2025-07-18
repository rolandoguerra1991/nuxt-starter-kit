import { createClient } from '@supabase/supabase-js'

export default defineNuxtPlugin((nuxtApp) => {
  const config = useRuntimeConfig()

  const supabase = createClient(
    config.public.supabaseUrl,
    config.public.supabaseAnonKey,
    {
      auth: {
        storage: useCookieStorage(),
        autoRefreshToken: true,
        persistSession: true,
        detectSessionInUrl: true
      }
    }
  )

  nuxtApp.provide('supabase', supabase)
})

const useCookieStorage = () => {
  const cookie = useCookie('supabase.auth.token', {
    sameSite: 'lax',
    maxAge: 60 * 60 * 24 * 7
  })
  return {
    getItem: () => Promise.resolve(cookie.value ?? null),
    setItem: (_key: any, value: string) => {
      cookie.value = value
      return Promise.resolve()
    },
    removeItem: () => {
      cookie.value = null
      return Promise.resolve()
    }
  }
}