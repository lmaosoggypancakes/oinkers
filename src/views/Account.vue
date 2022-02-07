<template>
    <div class="w-full h-full p-8" :class="{
        'blur-md': visible
    }">
        <div class="w-full h-full p-8 border-2 border-white flex flex-col">
            <span class="block text-center text-3xl font-bold">Your Account</span>
            <form class="h-full flex flex-col justify-around" @submit.prevent="saveUser">
                <div>
                    <label class="block text-xl py-2 text-brown_green">Username</label>
                    <input
                        type="text"
                        class="w-full bg-white border-white text-primary hover:bg-primary hover:text-white border-2 outline-none p-2 rounded-lg"
                        v-model="user.username"
                    />
                </div>
                <div>
                    <label class="block text-xl py-2 text-brown_green">Password</label>
                    <input
                        type="password"
                        class="w-full bg-white border-white text-primary hover:bg-primary hover:text-white border-2 outline-none p-2 rounded-lg"
                        v-model="user.password"
                    />
                </div>
                <div>
                    <label class="block text-xl py-2 text-brown_green">Birthday</label>
                    <div class="flex flex-row gap-4">
<p
                        class="border-white border-2 p-2 rounded-lg w-3/4  text-center flex items-center justify-center"
                    >{{ _date }}</p>
                    <button class="border-white border-2 p-2 rounded-lg w-1/4 flex items-center" type="button" @click="openModal">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            x="0px"
                            y="0px"
                            width="48"
                            height="48"
                            viewBox="0 0 172 172"
                            style=" fill:#000000;"
                        >
                            <g
                                fill="none"
                                fill-rule="nonzero"
                                stroke="none"
                                stroke-width="1"
                                stroke-linecap="butt"
                                stroke-linejoin="miter"
                                stroke-miterlimit="10"
                                stroke-dasharray
                                stroke-dashoffset="0"
                                font-family="none"
                                font-weight="none"
                                font-size="none"
                                text-anchor="none"
                                style="mix-blend-mode: normal"
                            >
                                <path d="M0,172v-172h172v172z" fill="none" />
                                <g fill="#ebdbb2">
                                    <path
                                        d="M131.96744,14.33333c-1.83467,0 -3.66956,0.70211 -5.06706,2.09961l-14.33333,14.33333l-10.13411,10.13411l-80.93294,80.93294v28.66667h28.66667l105.40039,-105.40039c2.80217,-2.80217 2.80217,-7.33911 0,-10.13412l-18.53255,-18.53255c-1.3975,-1.3975 -3.23239,-2.09961 -5.06706,-2.09961zM131.96744,31.63411l8.39844,8.39844l-9.26628,9.26628l-8.39844,-8.39844zM112.56706,51.03451l8.39844,8.39844l-76.73372,76.73372h-8.39844v-8.39844z"
                                    />
                                </g>
                            </g>
                        </svg>
                    </button>
                    </div>
                </div>
                <div>
                    <button class="border-2 border-white p-2 rounded-lg w-full disabled:blur-sm" type="submit" :disabled="!(user.username && user.password)">Save</button>
                </div>
            </form>
        </div>
    </div>
    <Modal :toggled="visible" @close="closeModal" :fs="false">
        <div class="w-full px-8 flex flex-col gap-10 h-full">
            <span class="block text-center text-xl py-2">Select Birthday</span>
            <v-date-picker :max-date='new Date()' v-model="user.birthday"></v-date-picker>
        </div>
    </Modal>
</template>
<script setup>
import { Dialog } from "@capacitor/dialog"
import { computed, onBeforeMount, ref } from 'vue';
import axios from 'axios';
import { API_URL } from '../config';
import { store } from '../util/store';
import moment from 'moment';
import { router } from '../util/router';
import Modal from '../components/Modal.vue';
const emits = defineEmits(['navbarBlur'])
const visible = ref(false)
const _date = computed(() => {
    return moment(user.value.birthday).calendar()
})
const user = ref()
onBeforeMount(async () => {
    const response = await axios.get(API_URL + "users/" + await store.user.getUsername())
    response.data.birthday = moment(response.data.birthday).calendar()
    user.value = response.data
})
const saveUser = async () => {
    delete user.value.id
    user.value.birthday = moment(user.value.birthday).toISOString()
    const result = await axios.put(API_URL + "users/" + await store.user.getUsername(), user.value, {
        headers: {
            Authorization: `Bearer ${await store.token.getToken()}`
        }
    })
    if (result.status !== 200) {
        alert(result.status)
    }
    else {
        await Dialog.alert({
            title: "Success! :)",
            message: "Your account changes have been saved.",
            
        })
        await store.user.setUsername(user.value.username)
        router.push("/")
    }
}
const openModal = () => {
    visible.value = true
    emits('navbarBlur')
}
const closeModal = () => {
    visible.value = false
    emits('navbarBlur')
}
</script>