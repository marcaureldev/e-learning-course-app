<script setup>
const route = useRoute()

const navItems = [
    { name: "Home", link: "/" },
    { name: "Courses", link: "" },
    { name: "About Us", link: "" },
    { name: "Pricing", link: "" },
    { name: "Contact", link: "" },
];

const open = ref(false);

const menuOpen = () => {
    open.value = !open.value;
};
</script>

<template>
    <div>
        <div class="max-w-screen-xl mx-auto flex justify-between items-center p-2 max-[800px]:text-sm">
            <div class="flex space-x-10 items-center">
                <NuxtImg src="/icons/logo-icon.svg" alt="Online Courses Logo" class="size-10" />
                <ul class="min-[800px]:flex hidden items-center space-x-6">
                    <li v-for="item in navItems" :key="item.name"
                        :class="{ 'bg-gray-95 px-4 py-2 rounded-lg': route.path === item.link }">
                        <NuxtLink :to="item.link">
                            {{ item.name }}
                        </NuxtLink>
                    </li>
                </ul>
            </div>
            <div class="flex items-center space-x-2">
                <Button buttonName="Sign Up" />
                <Button buttonName="Log In" class="bg-orange text-white" />
                <NuxtImg src="/icons/burger-menu-icon.svg" alt="Burger Menu" class="min-[800px]:hidden"
                    @click="menuOpen" />
            </div>
        </div>

        <!-- Mobile Navbar -->
        <div class="fixed top-0 left-0 h-screen w-full sm:w-1/2 bg-white shadow-lg transform transition-transform duration-300 ease-in-out z-50 p-6"
            :class="[open ? 'translate-x-0' : '-translate-x-full']">
            <div class="flex justify-between items-center mb-8">
                <NuxtImg src="/icons/logo-icon.svg" alt="Online Courses Logo" class="size-8" />
                <IconsClose @click="menuOpen" />
            </div>
            <ul class="flex flex-col space-y-6">
                <li v-for="item in navItems" :key="item.name">
                    <NuxtLink :to="item.link" class="text-gray-800 hover:text-orange transition-colors"
                        :class="{ 'text-orange': route.path === item.link }" @click="open = false">
                        {{ item.name }}
                    </NuxtLink>
                </li>
            </ul>
        </div>
        <!-- Overlay -->
        <div v-if="open" @click="menuOpen" class="fixed inset-0 bg-black bg-opacity-50 min-[800px]:hidden z-40"></div>
    </div>
</template>
