<script setup>
const companyLogos = [
    { name: 'Zapier', icon: '/icons/zapier-icon.svg' },
    { name: 'Spotify', icon: '/icons/spotify-icon.svg' },
    { name: 'Zoom', icon: '/icons/zoom-icon.svg' },
    { name: 'Amazon', icon: '/icons/amazon-icon.svg' },
    { name: 'Adobe', icon: '/icons/adobe-icon.svg' },
    { name: 'Notion', icon: '/icons/notion-icon.svg' },
    { name: 'Netflix', icon: '/icons/netflix-icon.svg' },
];

</script>

<template>
    <div>
        <div class="max-w-screen-xl mt-16 mx-auto text-center">
            <div class="relative px-4 md:px-6 lg:px-8">
                <NuxtImg src="/icons/line-icon.svg" alt="Lines Icons"
                    class="absolute max-[400px]:left-[5%] left-[20%] lg:left-[25%] -top-7 size-7" />
                <div class="bg-white/95 flex items-center space-x-2 sm:space-x-4 py-2 sm:py-3 px-2 sm:px-3 
                          max-w-[280px] sm:max-w-sm md:max-w-md lg:max-w-xl mx-auto rounded-lg">

                    <div class="p-1.5 sm:p-2 bg-orange-95 size-6 sm:size-8 md:size-10 lg:size-12 
                              flex justify-center items-center rounded-md">
                        <NuxtImg src="/icons/fast-icon.svg" alt="Fast Icon" class="size-3 sm:size-4 md:size-5" />
                    </div>
                    <h1 class="text-xs sm:text-sm md:text-xl lg:text-3xl font-semibold">
                        <span class="text-orange">Unlock</span> Your Creative Potential
                    </h1>
                </div>
            </div>
            <div class="space-y-3 sm:space-y-4 mt-3 sm:mt-4 px-4 sm:px-6">
                <p class="text-xs sm:text-sm md:text-xl lg:text-3xl font-medium">
                    with Online Design and Development Courses.
                </p>
                <p class="text-[10px] sm:text-xs md:text-sm">
                    Learn from Industry Experts and Enhance Your Skills.
                </p>
            </div>

            <div class="flex justify-center space-x-2 sm:space-x-4 mt-6 sm:mt-9 items-center px-4">
                <Button buttonName="Explore Courses"
                    class="bg-orange text-white text-xs sm:text-sm md:text-base py-2 sm:py-3" />
                <Button buttonName="View Pricing"
                    class="bg-white text-black text-xs sm:text-sm md:text-base py-2 sm:py-3" />
            </div>
        </div>

        <div class="max-w-screen-xl mx-auto mt-16 p-4 overflow-hidden bg-white rounded-lg">
            <div class="relative flex items-center">
                <div class="flex animate-scroll">
                    <div v-for="logo in companyLogos" :key="logo.name"
                        class="flex min-w-[160px] items-center justify-center border-r-2 border-gray-95 py-4">
                        <NuxtImg :src="logo.icon" :alt="`${logo.name} Icon`" class="h-8 w-auto" />
                    </div>
                </div>
                <div class="flex animate-scroll">
                    <div v-for="logo in companyLogos" :key="`${logo.name}-2`"
                        class="flex min-w-[160px] items-center justify-center border-r-2 border-gray-95 py-4">
                        <NuxtImg :src="logo.icon" :alt="`${logo.name} Icon`" class="h-8 w-auto" />
                    </div>
                </div>
            </div>
        </div>

        <div
            class="mt-12 max-w-screen-xl max-[890px]:mx-5 max-[890px]:h-80 mx-auto h-[90dvh] bg-center bg-main-learn bg-cover rounded-lg object-cover">
        </div>

        <div>
            
        </div>
    </div>
</template>

<style>
@keyframes scroll {
    0% {
        transform: translateX(0);
    }

    100% {
        transform: translateX(-100%);
    }
}

.animate-scroll {
    animation: scroll 30s linear infinite;
}
</style>