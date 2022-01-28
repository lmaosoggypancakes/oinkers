<template>
    <div class="w-full border-4 grid grid-flow-row grid-cols-3 divide-x-4 divide-dark_yellow border-dark_yellow rounded-xl px-4 py-2 hover:bg-white hover:divide-primary hover:border-white hover:text-primary hover:transition-all hover:cursor-pointer my-4 text-sm">
        <span class="text-center">{{ timestamp }}</span>
        <span class="col-span-2 text-ellipsis text-center">
            {{ name }}
        </span>
    </div>
</template>

<script setup>
const props = defineProps({
    id: Number,
    amount: Number,
    name: String,
    timestamp: String
})
</script>