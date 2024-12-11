<script setup>
const props = defineProps({
    buttonName: String,
})

</script>

<template>
    <button class="p-2 rounded-lg px-3 py-2">
        {{ buttonName }}
    </button>
</template>