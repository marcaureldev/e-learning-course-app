<script setup lang="ts">
import type { NuxtError } from '#app'

const props = defineProps<{ error: NuxtError }>()

const isNotFound = computed(() => props.error.statusCode === 404)

useSeoMeta({
  title: () => (isNotFound.value ? 'Page not found' : 'Something went wrong'),
})
</script>

<template>
  <NuxtLayout>
    <section class="mx-auto flex max-w-container flex-col items-center px-4 py-24 text-center">
      <p class="text-sm font-semibold text-orange-50">
        {{ props.error.statusCode }}
      </p>
      <h1 class="mt-4 text-3xl font-semibold md:text-4xl">
        {{ isNotFound ? 'Page not found' : 'Something went wrong' }}
      </h1>
      <p class="mt-4 max-w-prose text-sm text-grey-30">
        {{ isNotFound
          ? "The page you're looking for doesn't exist or has been moved."
          : 'An unexpected error occurred. Please try again in a moment.' }}
      </p>
      <UiButton
        to="/"
        variant="primary"
        size="lg"
        class="mt-8"
      >
        Back to home
      </UiButton>
    </section>
  </NuxtLayout>
</template>
