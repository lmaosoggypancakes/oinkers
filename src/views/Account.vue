<template>
    <div class="w-full h-full p-8" :class="{
        'blur-md': visible
    }" v-if="!loading">
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
    <div class="h-full w-full flex flex-col items-center justify-center">
        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" class="animate-spin"
width="64" height="64"
viewBox="0 0 172 172"
style=" fill:#000000;"><g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><path d="M0,172v-172h172v172z" fill="none"></path><g fill="#ebdbb2"><path d="M86,0c-47.41968,0 -86,38.58032 -86,86c0,47.41968 38.58032,86 86,86c47.41968,0 86,-38.58032 86,-86c0,-47.41968 -38.58032,-86 -86,-86zM164.0486,75.48796c-4.67163,7.47286 -10.46786,12.87061 -19.78794,18.2526c-17.44557,10.07288 -40.24557,7.41031 -51.57865,-4.8864c19.98872,-3.99932 36.31799,-25.35497 36.31799,-49.43749c0,-8.34289 -1.05199,-15.03976 -3.19884,-21.34997c20.43139,12.01808 34.96243,32.93675 38.24745,57.42125zM115.89363,13.09194c4.1581,7.8053 5.93971,15.53361 5.93971,26.32473c0,20.16631 -13.72445,38.67087 -30.06859,42.308c2.80079,-8.34988 2.59214,-18.0947 -0.82016,-27.68422c-4.22371,-11.86979 -12.8951,-22.28385 -23.78857,-28.57218c-7.23578,-4.17822 -13.56829,-6.61683 -20.11907,-7.91072c11.50717,-6.57703 24.78676,-10.39088 38.96306,-10.39088c10.58116,0 20.66628,2.1276 29.89363,5.92527zM37.92113,23.66653c8.78599,0.31713 16.34852,2.63763 25.65154,8.00957c9.44124,5.45199 16.95784,14.47681 20.62166,24.76839c2.78417,7.82542 3.03087,15.66221 0.95357,22.36215c-13.45543,-15.32802 -40.13578,-18.80025 -60.9919,-6.75506c-7.26771,4.19528 -12.5631,8.47761 -16.96834,13.53111c0.13254,-25.19138 12.17249,-47.56621 30.73347,-61.91617zM7.9514,96.51204c4.67163,-7.47286 10.46786,-12.87061 19.78794,-18.2526c17.44863,-10.07594 40.24689,-7.40987 51.57909,4.8864c-19.98872,3.99888 -36.31843,25.35497 -36.31843,49.43749c0,8.34289 1.05199,15.03976 3.19884,21.34997c-20.43139,-12.01808 -34.96243,-32.93675 -38.24745,-57.42125zM56.10637,158.90806c-4.1581,-7.8053 -5.93971,-15.53361 -5.93971,-26.32473c0,-20.16631 13.72445,-38.67087 30.06859,-42.308c-2.80079,8.34988 -2.59214,18.0947 0.82016,27.68422c4.22371,11.86979 12.8951,22.28385 23.78857,28.57218c7.23578,4.17822 13.56829,6.61683 20.11907,7.91072c-11.50717,6.57703 -24.78676,10.39088 -38.96306,10.39088c-10.58116,0 -20.66628,-2.1276 -29.89363,-5.92527zM134.07887,148.33347c-8.78599,-0.31713 -16.34852,-2.63763 -25.65154,-8.00957c-9.44124,-5.45199 -16.95784,-14.47681 -20.62166,-24.76839c-2.78592,-7.83067 -3.03044,-15.67227 -0.94832,-22.37484c7.95796,9.06856 20.50444,14.02539 33.78971,14.02539c9.17529,0 18.67603,-2.33757 27.19694,-7.25765c7.26771,-4.19528 12.56266,-8.47761 16.96834,-13.53067c-0.13254,25.19138 -12.17249,47.56578 -30.73347,61.91573z"></path></g></g></svg>
    </div>
    <Modal :toggled="visible" @close="closeModal" :fs="false" v-if="user">
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
const loading = ref(true)
const _date = computed(() => {
    return moment(user.value.birthday).calendar()
})
const user = ref()
onBeforeMount(async () => {
    const response = await axios.get(API_URL + "users/" + await store.user.getUsername())
    response.data.birthday = moment(response.data.birthday).calendar()
    user.value = response.data
    loading.value = false
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