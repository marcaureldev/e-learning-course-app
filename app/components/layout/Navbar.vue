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

watch(open, (isOpen) => {
  if (import.meta.server) return
  document.body.style.overflow = isOpen ? 'hidden' : ''
})

watch(() => route.path, () => {
  open.value = false
})

const onKeydown = (event: KeyboardEvent) => {
  if (event.key === 'Escape' && open.value) closeMenu()
}

onMounted(() => window.addEventListener('keydown', onKeydown))

onBeforeUnmount(() => {
  window.removeEventListener('keydown', onKeydown)
  document.body.style.overflow = ''
})
</script>

<template>
  <div>
    <UiContainer>
      <nav
        class="flex items-center justify-between border-b border-white-95 pb-5 pt-4 3xl:pb-6 3xl:pt-5"
        aria-label="Main"
      >
        <div class="flex items-center gap-6 lg:gap-12.5">
          <NuxtLink
            to="/"
            aria-label="Online Courses - home"
            class="shrink-0 rounded-lg focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-orange-50"
          >
            <NuxtImg
              src="/icons/logo-icon.svg"
              alt=""
              aria-hidden="true"
              width="54"
              height="54"
              class="size-11 3xl:size-13.5"
            />
          </NuxtLink>

          <ul class="hidden items-center gap-6.5 text-sm text-grey-15 lg:flex 3xl:text-[18px]">
            <li
              v-for="item in navItems"
              :key="item.name"
            >
              <NuxtLink
                :to="item.link"
                :aria-current="isActive(item.link) ? 'page' : undefined"
                class="rounded-lg transition-colors focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-orange-50"
                :class="isActive(item.link) ? 'rounded-md bg-white-95 px-5 py-3 3xl:rounded-lg 3xl:px-6 3xl:py-3.5' : 'hover:text-orange-50'"
              >
                {{ item.name }}
              </NuxtLink>
            </li>
          </ul>
        </div>

        <div class="flex items-center gap-4 lg:gap-7.5">
          <NuxtLink
            to="/signup"
            class="hidden rounded-lg text-sm text-grey-15 transition-colors hover:text-orange-50 focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-orange-50 sm:block 3xl:text-[18px]"
          >
            Sign Up
          </NuxtLink>
          <UiButton
            to="/login"
            variant="primary"
            size="md"
          >
            Login
          </UiButton>
          <button
            ref="burgerRef"
            type="button"
            class="rounded-lg p-1 focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-orange-50 lg:hidden"
            aria-label="Open menu"
            aria-controls="mobile-menu"
            :aria-expanded="open"
            @click="openMenu"
          >
            <NuxtImg
              src="/icons/burger-menu-icon.svg"
              alt=""
              aria-hidden="true"
              width="34"
              height="35"
            />
          </button>
        </div>
      </nav>
    </UiContainer>

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
          width="54"
          height="54"
          class="size-11"
        />
        <button
          ref="closeRef"
          type="button"
          class="rounded-lg p-1 focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-orange-50"
          aria-label="Close menu"
          @click="closeMenu"
        >
          <IconsClose />
        </button>
      </div>
      <ul class="flex flex-col space-y-6 text-sm 3xl:text-[18px]">
        <li
          v-for="item in navItems"
          :key="item.name"
        >
          <NuxtLink
            :to="item.link"
            :aria-current="isActive(item.link) ? 'page' : undefined"
            class="rounded-lg transition-colors focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-orange-50"
            :class="isActive(item.link) ? 'text-orange-50' : 'text-grey-15 hover:text-orange-50'"
          >
            {{ item.name }}
          </NuxtLink>
        </li>
      </ul>
    </div>

    <div
      v-if="open"
      class="fixed inset-0 z-40 bg-black/50 lg:hidden"
      @click="closeMenu"
    />
  </div>
</template>
