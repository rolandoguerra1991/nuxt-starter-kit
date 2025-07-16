<script setup lang="ts">
definePageMeta({
  layout: 'auth'
})

const state = reactive({
  email: '',
  password: ''
})
</script>

<template>
  <UCard variant="subtle">
    <UForm
      :state
      class="space-y-4">
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

        <UButton type="submit" block>
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