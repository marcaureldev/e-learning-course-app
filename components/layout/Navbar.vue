<script setup lang="ts">
interface NavItem {
  name: string
  link: string
}

const navItems: NavItem[] = [
  { name: 'Home', link: '/' },
  { name: 'Courses', link: '/courses' },
  { name: 'About Us', link: '/about' },
  { name: 'Pricing', link: '/pricing' },
  { name: 'Contact', link: '/contact' },
]

const route = useRoute()
const open = ref(false)

const burgerRef = ref<HTMLButtonElement | null>(null)
const closeRef = ref<HTMLButtonElement | null>(null)

const isActive = (link: string) => route.path === link

const openMenu = async () => {
  open.value = true
  await nextTick()
  closeRef.value?.focus()
}

const closeMenu = async () => {
  open.value = false
  await nextTick()
  burgerRef.value?.focus()
}

// Verrou de défilement : empêche le fond de glisser sous le panneau ouvert.
watch(open, (isOpen) => {
  if (import.meta.server) return
  document.body.style.overflow = isOpen ? 'hidden' : ''
})

onBeforeUnmount(() => {
  if (import.meta.client) document.body.style.overflow = ''
})

// Fermeture au changement de route : le panneau ne doit pas survivre à la navigation.
watch(() => route.path, () => {
  open.value = false
})

const onKeydown = (event: KeyboardEvent) => {
  if (event.key === 'Escape' && open.value) closeMenu()
}

onMounted(() => window.addEventListener('keydown', onKeydown))
onBeforeUnmount(() => window.removeEventListener('keydown', onKeydown))
</script>

<template>
  <div>
    <nav
      class="mx-auto flex max-w-container items-center justify-between p-2"
      aria-label="Main"
    >
      <div class="flex items-center space-x-10">
        <NuxtLink
          to="/"
          aria-label="Online Courses — home"
          class="rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-50"
        >
          <NuxtImg
            src="/icons/logo-icon.svg"
            alt=""
            aria-hidden="true"
            class="size-10"
          />
        </NuxtLink>

        <ul class="hidden items-center space-x-6 text-sm lg:flex">
          <li
            v-for="item in navItems"
            :key="item.name"
          >
            <NuxtLink
              :to="item.link"
              :aria-current="isActive(item.link) ? 'page' : undefined"
              class="rounded-lg px-4 py-2 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-50"
              :class="isActive(item.link) ? 'bg-white-95 text-grey-10' : 'text-grey-30 hover:text-grey-10'"
            >
              {{ item.name }}
            </NuxtLink>
          </li>
        </ul>
      </div>

      <div class="flex items-center space-x-2">
        <UiButton
          to="/signup"
          variant="secondary"
          size="sm"
        >
          Sign Up
        </UiButton>
        <UiButton
          to="/login"
          variant="primary"
          size="sm"
        >
          Log In
        </UiButton>
        <button
          ref="burgerRef"
          type="button"
          class="rounded-lg p-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-50 lg:hidden"
          aria-label="Open menu"
          aria-controls="mobile-menu"
          :aria-expanded="open"
          @click="openMenu"
        >
          <NuxtImg
            src="/icons/burger-menu-icon.svg"
            alt=""
            aria-hidden="true"
            class="size-6"
          />
        </button>
      </div>
    </nav>

    <!-- Panneau de navigation mobile -->
    <div
      id="mobile-menu"
      class="fixed left-0 top-0 z-50 h-dvh w-full transform bg-white p-6 shadow-lg transition-transform duration-300 ease-in-out sm:w-1/2 lg:hidden"
      :class="open ? 'translate-x-0' : '-translate-x-full'"
      :aria-hidden="!open"
      :inert="!open"
    >
      <div class="mb-8 flex items-center justify-between">
        <NuxtImg
          src="/icons/logo-icon.svg"
          alt=""
          aria-hidden="true"
          class="size-8"
        />
        <button
          ref="closeRef"
          type="button"
          class="rounded-lg p-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-50"
          aria-label="Close menu"
          @click="closeMenu"
        >
          <IconsClose />
        </button>
      </div>
      <ul class="flex flex-col space-y-6">
        <li
          v-for="item in navItems"
          :key="item.name"
        >
          <NuxtLink
            :to="item.link"
            :aria-current="isActive(item.link) ? 'page' : undefined"
            class="rounded-lg transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-50"
            :class="isActive(item.link) ? 'text-orange-50' : 'text-grey-20 hover:text-orange-50'"
          >
            {{ item.name }}
          </NuxtLink>
        </li>
      </ul>
    </div>

    <!-- Voile de fond -->
    <div
      v-if="open"
      class="fixed inset-0 z-40 bg-black/50 lg:hidden"
      @click="closeMenu"
    />
  </div>
</template>
