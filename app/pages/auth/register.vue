<script setup lang="ts">
const supabase = useSupabase()
const toast = useToast()

definePageMeta({
  layout: 'auth',
  middleware: 'un-authenticated'
})

const state = reactive({
  username: '',
  email: '',
  password: ''
})

const submitting = ref(false)

async function signUp() {
  submitting.value = true
  const { data, error } = await supabase.auth.signUp({
    email: state.email,
    password: state.password,
    options: {
      data: {
        username: state.username,
        emailRedirectTo: `${window.location.origin}/home`
      }
    }
  })

  if (error) {
    toast.add({
      title: 'Registration Failed',
      description: error.message,
      color: 'error'
    })
    submitting.value = false
    return
  }

  navigateTo('/auth/login')
}
</script>

<template>
  <UCard variant="subtle">
    <UForm
      :state
      @submit.prevent="signUp"
      class="space-y-4">
        <UFormField
          label="Username"
          name="username">
          <UInput
            v-model="state.username"
            type="text"
            class="w-full"
            placeholder="Enter your username" />
        </UFormField>

        <UFormField
          label="Email"
          name="email">
          <UInput
            v-model="state.email"
            type="email"
            class="w-full"
            placeholder="Enter your email" />
        </UFormField>

        <UFormField
          label="Password"
          name="password">
          <UInput
            v-model="state.password"
            type="password"
            class="w-full"
            placeholder="Enter your password" />
        </UFormField>

        <UButton
          type="submit"
          block
          :loading="submitting"
          :disabled="submitting">
          Register
        </UButton>
    </UForm>

    <p class="text-center mt-2">
      Already have an account?
      <ULink to="/auth/login" class="text-primary">
        Login
      </ULink>
    </p>
  </UCard>
</template>