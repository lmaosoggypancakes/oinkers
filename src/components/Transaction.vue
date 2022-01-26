<template>
    <div class="w-full border-4 grid grid-flow-row grid-cols-4 divide-x-4 divide-dark_yellow border-dark_yellow rounded-md px-4 py-2 hover:bg-white hover:divide-primary hover:border-white hover:text-primary hover:transition-all hover:cursor-pointer my-4">
        <span>{{ timestamp }}</span>
        <span class="col-span-2 pl-4 text-ellipsis">
            {{ name }}
        </span>
        <span>
            <p class="float-right">
                $ {{ amount }}
            </p>
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