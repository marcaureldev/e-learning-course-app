<script setup lang="ts">
interface CompanyLogo {
  name: string
  icon: string
  width: number
}

// La maquette n'affiche que les trois premiers en mobile ; les suivants
// apparaissent à partir de `lg`.
const companyLogos: CompanyLogo[] = [
  { name: 'Zapier', icon: '/icons/zapier-icon.svg', width: 69 },
  { name: 'Spotify', icon: '/icons/spotify-icon.svg', width: 100 },
  { name: 'Zoom', icon: '/icons/zoom-icon.svg', width: 70 },
  { name: 'Amazon', icon: '/icons/amazon-icon.svg', width: 79 },
  { name: 'Adobe', icon: '/icons/adobe-icon.svg', width: 95 },
  { name: 'Notion', icon: '/icons/notion-icon.svg', width: 92 },
  { name: 'Netflix', icon: '/icons/netflix-icon.svg', width: 79 },
]
</script>

<template>
  <section>
    <h2 class="sr-only">
      Trusted by teams at leading companies
    </h2>
    <ul class="flex divide-x divide-white-95 rounded-lg border border-white-95 bg-white-99 p-[10px] lg:rounded-xl lg:p-[30px]">
      <li
        v-for="(logo, index) in companyLogos"
        :key="logo.name"
        class="flex min-w-0 flex-1 items-center justify-center px-4 py-[20px] sm:px-[30px] lg:px-[40px] lg:py-[30px]"
        :class="{ 'max-lg:hidden': index >= 3 }"
      >
        <NuxtImg
          :src="logo.icon"
          :alt="logo.name"
          :width="logo.width"
          height="34"
          class="h-6 w-auto lg:h-[34px]"
        />
      </li>
    </ul>
  </section>
</template>
