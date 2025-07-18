<script setup lang="ts">
definePageMeta({
  layout: 'auth',
  middleware: 'un-authenticated'
})

const supabase = useSupabase()
const toast = useToast()

const submitting = ref(false)

const state = reactive({
  email: '',
  password: ''
})

async function signIn() {
  submitting.value = true
  const { error } = await supabase.auth.signInWithPassword({
    email: state.email,
    password: state.password
  })

  if (error) {
    toast.add({
      title: 'Login Failed',
      description: error.message,
      color: 'error'
    })
    submitting.value = false
    return
  }

  navigateTo('/home')
}
</script>

<template>
  <UCard variant="subtle">
    <UForm
      :state
      class="space-y-4"
      @submit.prevent="signIn">
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

        <template #hint>
          <ULink to="/auth/forgot-password" class="text-primary">
            Forgot password?
          </ULink>
        </template>

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
          Login
        </UButton>
    </UForm>

    <p class="text-center mt-2">
      Don't have an account?
      <ULink to="/auth/register" class="text-primary">
        Register
      </ULink>
    </p>
  </UCard>
</template>