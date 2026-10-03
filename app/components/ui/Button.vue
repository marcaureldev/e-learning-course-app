<script setup lang="ts">
type Variant = 'primary' | 'secondary' | 'ghost'
type Size = 'sm' | 'md' | 'lg'

const props = withDefaults(defineProps<{
  /** Rend un NuxtLink au lieu d'un <button> lorsqu'une destination est fournie. */
  to?: string
  variant?: Variant
  size?: Size
  type?: 'button' | 'submit' | 'reset'
  disabled?: boolean
}>(), {
  to: undefined,
  variant: 'primary',
  size: 'md',
  type: 'button',
  disabled: false,
})

const NuxtLink = resolveComponent('NuxtLink')

const tag = computed(() => (props.to ? NuxtLink : 'button'))

const variantClasses: Record<Variant, string> = {
  primary: 'bg-orange-50 text-white hover:bg-orange-50/90',
  secondary: 'bg-white text-grey-10 hover:bg-white-95',
  ghost: 'text-grey-30 hover:bg-white-95 hover:text-grey-10',
}

const sizeClasses: Record<Size, string> = {
  sm: 'px-3 py-2 text-xs',
  md: 'px-4 py-2.5 text-sm',
  lg: 'px-6 py-3 text-base',
}
</script>

<template>
  <component
    :is="tag"
    :to="props.to"
    :type="props.to ? undefined : props.type"
    :disabled="props.to ? undefined : props.disabled"
    class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-orange-50 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-60"
    :class="[variantClasses[props.variant], sizeClasses[props.size]]"
  >
    <slot />
  </component>
</template>
