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

// `md` et `lg` reprennent les deux gabarits de bouton de la maquette - celui du
// Login dans la navbar et ceux du hero - réduits sous le point de rupture `sm`,
// où la maquette mobile resserre les boutons.
const sizeClasses: Record<Size, string> = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-2.5 text-sm sm:px-[34px] sm:py-[14px] sm:text-[18px]',
  lg: 'px-5 py-3 text-sm sm:px-[24px] sm:py-[18px] sm:text-[18px]',
}
</script>

<template>
  <component
    :is="tag"
    :to="props.to"
    :type="props.to ? undefined : props.type"
    :disabled="props.to ? undefined : props.disabled"
    class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg leading-normal transition-colors focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-orange-50 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-60"
    :class="[variantClasses[props.variant], sizeClasses[props.size]]"
  >
    <slot />
  </component>
</template>
