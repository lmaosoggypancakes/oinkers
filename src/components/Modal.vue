<template>
    <div
        class="fixed w-screen h-screen top-0 "
        :class="{
            'z-50': toggled,
            'z-0': !toggled,
            'hidden': !toggled
        }"
    >
        <div class="flex w-screen h-screen items-center justify-center">
            <div
                class="top-0 w-10/12 h-5/6 rounded-xl bg-primary border-4 border-dark_yellow overflow-auto transition-all"
            >
                <button
                    class="border-l-4 border-b-4 border-b-dark_yellow px-4 py-2 font-extrabold rounded-bl-md border-l-dark_yellow float-right hover:bg-white hover:border-white hover:text-primary transition-all"
                    @click="close"
                >X</button>
                <slot></slot>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, computed, watch } from 'vue';
const props = defineProps({
    toggled: false,
})
const emits = defineEmits(['close'])
const close = () => {
    emits('close');
}
</script>