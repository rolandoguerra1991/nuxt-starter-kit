<script setup lang="ts">
import type { DropdownMenuItem } from '@nuxt/ui'

const supabase = useSupabase()
const toast = useToast()

const items = computed(() => [
  {
    label: 'Profile',
    to: '/profile',
    icon: 'ic:outline-person',
  },
  {
    label: 'Logout',
    icon: 'ic:outline-logout',
    onSelect: async () => {
      const { error } = await supabase.auth.signOut()

      if (error) {
        console.error('Error logging out:', error)
        toast.add({
          title: error.message,
          color: 'error'
        })
        return
      }

      navigateTo('/auth/login')
    },
  },
] satisfies DropdownMenuItem[])
</script>

<template>
  <div class="h-screen flex flex-col bg-slate-100">
    <div class="flex h-16 bg-white shadow border-b border-slate-100 w-full justify-between">
      <div class="flex items-center px-4">
        <h1 class="text-lg font-semibold">
          <ULink to="/home">
            My Application
          </ULink>
        </h1>
      </div>
      <div class="flex px-4">
        <UDropdownMenu :items="items" :content="{ align: 'start' }" :ui="{ content: 'w-24' }">
          <UButton color="neutral" variant="link" icon="ic:outline-menu" />
        </UDropdownMenu>
      </div>
    </div>
    <div class="flex-1 p-4 overflow-y-auto">
      <slot />
    </div>
  </div>
</template>