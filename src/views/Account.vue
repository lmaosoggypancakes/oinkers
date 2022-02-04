<template>
    <div class="w-full h-full p-8">
        <div class="w-full h-full p-8 border-2 border-white flex flex-col">
            <span class="block text-center text-3xl font-bold">Your Account</span>
            <div class="h-full flex flex-col justify-around">
                <div>
                    <label class="block text-xl py-2 text-brown_green">Username</label>
                    <input
                        type="text"
                        class="w-full bg-white border-white hover:bg-primary hover:text-white border-2 outline-none p-2 rounded-lg"
                        v-model="user.username"
                    />
                </div>
                <div>
                    <label class="block text-xl py-2 text-brown_green">Password</label>
                    <input
                        type="password"
                        class="w-full bg-white border-white hover:bg-primary hover:text-white border-2 outline-none p-2 rounded-lg"
                        v-model="user.password"
                    />
                </div>
                <div>
                    <label class="block text-xl py-2 text-brown_green">Birthday</label>
                    <div class="flex flex-row gap-4">
<p
                        class="border-white border-2 p-2 rounded-lg w-3/4  text-center flex items-center justify-center"
                    >{{ user.birthday }}</p>
                    <button class="border-white border-2 p-2 rounded-lg w-1/4 flex items-center">
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
            </div>
        </div>
    </div>
</template>
<script setup>
import { onBeforeMount, ref } from 'vue';
import axios from 'axios';
import { API_URL } from '../config';
import { store } from '../util/store';
import moment from 'moment';
const user = ref()
onBeforeMount(async () => {
    const response = await axios.get(API_URL + "users/" + await store.user.getUsername())
    response.data.birthday = moment(response.data.birthday).calendar()
    user.value = response.data
})
const confirmSave = async () => { }
const saveUser = async () => {
    if (await confirmSave()) {

    }
}
</script>