<script setup lang="ts">
interface CompanyLogo {
  name: string
  icon: string
}

const companyLogos: CompanyLogo[] = [
  { name: 'Zapier', icon: '/icons/zapier-icon.svg' },
  { name: 'Spotify', icon: '/icons/spotify-icon.svg' },
  { name: 'Zoom', icon: '/icons/zoom-icon.svg' },
  { name: 'Amazon', icon: '/icons/amazon-icon.svg' },
  { name: 'Adobe', icon: '/icons/adobe-icon.svg' },
  { name: 'Notion', icon: '/icons/notion-icon.svg' },
  { name: 'Netflix', icon: '/icons/netflix-icon.svg' },
]

useSeoMeta({
  title: 'Unlock Your Creative Potential',
  description: 'Online design and development courses. Learn from industry experts and enhance your skills.',
  ogTitle: 'Unlock Your Creative Potential | Online Courses',
  ogDescription: 'Online design and development courses. Learn from industry experts and enhance your skills.',
  ogType: 'website',
})
</script>

<template>
  <div>
    <!-- Hero -->
    <section class="mx-auto mt-16 max-w-container text-center">
      <div class="relative px-4 md:px-6 lg:px-8">
        <NuxtImg
          src="/icons/line-icon.svg"
          alt=""
          aria-hidden="true"
          class="absolute -top-7 left-[20%] size-7 max-[400px]:left-[5%] lg:left-[25%]"
        />
        <div
          class="mx-auto flex max-w-[280px] items-center space-x-2 rounded-lg bg-white px-2 py-2 sm:max-w-sm sm:space-x-4 sm:px-3 sm:py-3 md:max-w-md lg:max-w-xl"
        >
          <div
            class="flex size-6 items-center justify-center rounded-md bg-orange-95 p-1.5 sm:size-8 sm:p-2 md:size-10 lg:size-12"
          >
            <NuxtImg
              src="/icons/fast-icon.svg"
              alt=""
              aria-hidden="true"
              class="size-3 sm:size-4 md:size-5"
            />
          </div>
          <h1 class="text-xs font-semibold sm:text-sm md:text-xl lg:text-3xl">
            <span class="text-orange-50">Unlock</span> Your Creative Potential
          </h1>
        </div>
      </div>

      <div class="mt-3 space-y-3 px-4 sm:mt-4 sm:space-y-4 sm:px-6">
        <p class="text-xs font-medium sm:text-sm md:text-xl lg:text-3xl">
          with Online Design and Development Courses.
        </p>
        <p class="text-[10px] text-grey-30 sm:text-xs md:text-sm">
          Learn from Industry Experts and Enhance Your Skills.
        </p>
      </div>

      <div class="mt-6 flex items-center justify-center space-x-2 px-4 sm:mt-9 sm:space-x-4">
        <UiButton
          to="/courses"
          variant="primary"
          size="lg"
        >
          Explore Courses
        </UiButton>
        <UiButton
          to="/pricing"
          variant="secondary"
          size="lg"
        >
          View Pricing
        </UiButton>
      </div>
    </section>

    <!-- Entreprises qui font confiance -->
    <section class="mx-auto mt-16 max-w-container overflow-hidden rounded-lg bg-white p-4">
      <h2 class="sr-only">
        Trusted by teams at leading companies
      </h2>
      <div class="flex items-center">
        <ul class="flex animate-marquee">
          <li
            v-for="logo in companyLogos"
            :key="logo.name"
            class="flex min-w-[160px] items-center justify-center border-r-2 border-white-95 py-4"
          >
            <NuxtImg
              :src="logo.icon"
              :alt="logo.name"
              class="h-8 w-auto"
            />
          </li>
        </ul>
        <!-- Second exemplaire : assure la continuité visuelle du défilement, masqué aux lecteurs d'écran. -->
        <ul
          class="flex animate-marquee"
          aria-hidden="true"
        >
          <li
            v-for="logo in companyLogos"
            :key="`${logo.name}-duplicate`"
            class="flex min-w-[160px] items-center justify-center border-r-2 border-white-95 py-4"
          >
            <NuxtImg
              :src="logo.icon"
              alt=""
              class="h-8 w-auto"
            />
          </li>
        </ul>
      </div>
    </section>

    <!-- Visuel principal -->
    <div
      class="mx-5 mt-12 h-80 rounded-lg bg-main-learn bg-cover bg-center lg:mx-auto lg:h-[90dvh] lg:max-w-container"
      role="img"
      aria-label="Students learning online"
    />
  </div>
</template>
