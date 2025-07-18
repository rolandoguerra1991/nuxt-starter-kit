<script setup lang="ts">
definePageMeta({
  layout: 'auth',
  middleware: 'un-authenticated'
})

const state = reactive({
  password: '',
  confirmPassword: ''
})
</script>

<template>
  <UCard variant="subtle">
    <UForm
      :state
      class="space-y-4">
        <UFormField
          label="Password"
          name="password">
          <UInput
            v-model="state.password"
            type="password"
            class="w-full"
            placeholder="Enter new password" />
        </UFormField>

        <UFormField
          label="Confirm Password"
          name="confirmPassword">
          <UInput
            v-model="state.confirmPassword"
            type="password"
            class="w-full"
            placeholder="Confirm your password" />
        </UFormField>

        <UButton type="submit" block>
          Reset Password
        </UButton>
    </UForm>
  </UCard>
</template>