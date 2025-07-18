<script setup lang="ts">
definePageMeta({
  layout: 'auth',
  middleware: 'un-authenticated'
})

const state = reactive({
  email: ''
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

        <UButton type="submit" block>
          Send Reset Link
        </UButton>
    </UForm>

    <p class="text-center mt-2">
      Remembered your password?
      <ULink to="/auth/login" class="text-primary">
        Login
      </ULink>
    </p>
  </UCard>
</template>