<script setup lang="ts">
definePageMeta({
  layout: 'auth'
})

const state = reactive({
  username: '',
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

        <UButton type="submit" block>
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