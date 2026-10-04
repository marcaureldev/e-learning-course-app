<script setup lang="ts">
interface FooterColumn {
  title: string
  links: { label: string; to: string }[]
}

const columns: FooterColumn[] = [
  {
    title: 'Home',
    links: [
      { label: 'Benefits', to: '/#benefits' },
      { label: 'Our Courses', to: '/#courses' },
      { label: 'Our Testimonials', to: '/#testimonials' },
      { label: 'Our FAQ', to: '/#faq' },
    ],
  },
  {
    title: 'About Us',
    links: [
      { label: 'Company', to: '/about' },
      { label: 'Achievements', to: '/about' },
      { label: 'Our Goals', to: '/about' },
    ],
  },
]

// La maquette ne fournit aucune URL de compte : ces adresses pointent vers la
// racine de chaque plateforme et sont à remplacer par les comptes réels.
const socials = [
  {
    name: 'Facebook',
    icon: '/icons/facebook-icon.svg',
    href: 'https://facebook.com',
  },
  {
    name: 'Twitter',
    icon: '/icons/twitter-icon.svg',
    href: 'https://twitter.com',
  },
  {
    name: 'LinkedIn',
    icon: '/icons/linkedin-icon.svg',
    href: 'https://linkedin.com',
  },
]

const contacts = [
  {
    icon: '/icons/mail-icon.svg',
    label: 'hello@skillbridge.com',
    href: 'mailto:hello@skillbridge.com',
  },
  {
    icon: '/icons/phone-icon.svg',
    label: '+91 91813 23 2309',
    href: 'tel:+9191813232309',
  },
  {
    icon: '/icons/location-icon.svg',
    label: 'Somewhere in the World',
    href: undefined,
  },
]
</script>

<template>
  <footer
    class="mt-12 bg-white pt-12 pb-7.5 lg:mt-15 lg:pt-20 3xl:mt-25 3xl:pt-25"
  >
    <UiContainer>
      <div class="flex flex-col gap-10 lg:gap-12.5">
        <div
          class="flex flex-col justify-between gap-10 lg:flex-row lg:items-start"
        >
          <div class="flex flex-col gap-8 lg:gap-10">
            <NuxtImg
              src="/icons/logo-icon.svg"
              alt=""
              aria-hidden="true"
              width="54"
              height="54"
              class="size-11 3xl:size-13.5"
            />
            <ul class="flex flex-wrap gap-4 lg:w-98 lg:gap-5">
              <li v-for="contact in contacts" :key="contact.label">
                <component
                  :is="contact.href ? 'a' : 'span'"
                  :href="contact.href"
                  class="flex items-center gap-1.5 rounded-md text-base leading-normal text-grey-15 3xl:text-lg"
                  :class="
                    contact.href ? 'transition-colors hover:text-orange-50' : ''
                  "
                >
                  <NuxtImg
                    :src="contact.icon"
                    alt=""
                    aria-hidden="true"
                    width="24"
                    height="24"
                    class="size-5 shrink-0 3xl:size-6"
                  />
                  {{ contact.label }}
                </component>
              </li>
            </ul>
          </div>

          <div class="flex flex-wrap gap-8 lg:w-201.75 lg:gap-7.5">
            <nav
              v-for="column in columns"
              :key="column.title"
              class="flex flex-1 flex-col gap-3.5"
              :aria-label="column.title"
            >
              <h2
                class="text-lg leading-normal font-semibold text-grey-15 3xl:text-xl"
              >
                {{ column.title }}
              </h2>
              <ul class="flex flex-col gap-2">
                <li v-for="link in column.links" :key="link.label">
                  <NuxtLink
                    :to="link.to"
                    class="rounded text-base leading-normal text-grey-35 transition-colors hover:text-orange-50 focus-visible:ring-2 focus-visible:ring-orange-50 focus-visible:outline-hidden 3xl:text-lg"
                  >
                    {{ link.label }}
                  </NuxtLink>
                </li>
              </ul>
            </nav>

            <div class="flex flex-1 flex-col gap-3.5">
              <h2
                class="text-lg leading-normal font-semibold text-grey-15 3xl:text-xl"
              >
                Social Profiles
              </h2>
              <ul class="flex gap-3.5">
                <li v-for="social in socials" :key="social.name">
                  <a
                    :href="social.href"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="flex rounded-lg border border-white-95 bg-white-97 p-3 transition-colors hover:bg-white-95 focus-visible:ring-2 focus-visible:ring-orange-50 focus-visible:outline-hidden 3xl:p-3.5"
                    :aria-label="`${social.name} (opens in a new tab)`"
                  >
                    <NuxtImg
                      :src="social.icon"
                      alt=""
                      aria-hidden="true"
                      width="24"
                      height="24"
                      class="size-5 3xl:size-6"
                    />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <hr class="border-white-95" />

        <p
          class="text-center text-base leading-normal text-grey-40 3xl:text-lg"
        >
          &copy; 2023 Skillbridge. All rights reserved.
        </p>
      </div>
    </UiContainer>
  </footer>
</template>
