<template>
    {{ props.amount }}
</template>

<script setup>
import { defineProps } from 'vue';
const props = defineProps({
    id: Number,
    amount: Number,
    name: String
})
</script>