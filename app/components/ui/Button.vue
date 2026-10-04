<script setup lang="ts">
type Variant = 'primary' | 'secondary' | 'soft' | 'ghost'
type Size = 'sm' | 'md' | 'lg'

const props = withDefaults(defineProps<{
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
  primary: 'bg-orange-50 font-semibold text-white hover:bg-orange-50/90',
  secondary: 'border border-white-95 bg-white font-medium text-grey-15 hover:bg-white-95',
  soft: 'border border-white-95 bg-white-99 font-medium text-grey-15 hover:bg-white-95',
  ghost: 'text-grey-30 hover:bg-white-95 hover:text-grey-10',
}

// `md` est le gabarit du Login dans la navbar, `lg` celui des boutons de
// section. La maquette leur donne les mêmes valeurs en mobile et en laptop, et
// ne les agrandit qu'au palier desktop.
const sizeClasses: Record<Size, string> = {
  sm: 'rounded-md px-4 py-2 text-sm',
  md: 'rounded-md px-6 py-3 text-sm 3xl:rounded-lg 3xl:px-[34px] 3xl:py-[14px] 3xl:text-[18px]',
  lg: 'rounded-md px-5 py-3.5 text-sm 3xl:rounded-lg 3xl:px-[24px] 3xl:py-[18px] 3xl:text-[18px]',
}
</script>

<template>
  <component
    :is="tag"
    :to="props.to"
    :type="props.to ? undefined : props.type"
    :disabled="props.to ? undefined : props.disabled"
    class="inline-flex items-center justify-center gap-2 whitespace-nowrap leading-normal transition-colors focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-orange-50 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-60"
    :class="[variantClasses[props.variant], sizeClasses[props.size]]"
  >
    <slot />
  </component>
</template>
