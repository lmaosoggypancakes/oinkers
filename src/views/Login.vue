<template>
    <div class="w-full h-full p-8">
        <div class="border-2 border-white w-full h-full p-8">
            <span class="text-3xl text-center w-full block">Login</span>
            <form @submit.prevent="login" class="flex flex-col h-full">
                <div class="my-10">
                    <label class="block text-xl">Username</label>
                    <input type="text" v-model="username" class="h-10 bg-white outline-0 focus:bg-primary rounded-lg px-2 text-primary hover:text-white"/>
                </div>
                <div>
                    <label class="block text-xl">Password</label>
                    <input type="password" v-model="password" class="h-10 bg-white outline-0 focus:bg-primary rounded-lg px-2"/>
                </div>
            </form>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import axios from 'axios'
import { API_URL } from '../config';
import { store } from '../util/store';
import { router } from '../util/router';
const username = ref("")
const password = ref("")

const login = async () => {
    const req = await axios.post(API_URL, {
            username: username.value,
            password: password.value
        }).catch(alert)
    console.log(req);
    if (req.status == 200) // ok
    {
        store.token.setToken(req.data.access_token);
        router.push("/")
    } else {
        alert("Invalid login!!!!")
        username.value = ""
        password.value = ""
    }
}
</script>