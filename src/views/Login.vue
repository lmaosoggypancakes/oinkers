<template>
    <div class="w-full h-full p-8">
        <div class="border-2 border-white w-full h-full p-8">
            <span class="text-3xl text-center w-full block font-bold">Login</span>
            <form @submit.prevent="login" class="flex flex-col h-full">
                <div class="my-10">
                    <label class="block text-xl">Username</label>
                    <input type="text" v-model="username" class="h-10 bg-white outline-0 focus:bg-primary rounded-lg px-2 text-primary hover:text-white w-full"/>
                </div>
                <div> 
                    <label class="block text-xl">Password</label>
                    <input type="password" v-model="password" class="h-10 bg-white outline-0 focus:bg-primary text-primary focus:text-white rounded-lg px-2 w-full"/>
                </div>
                <button class="w-full p-2 text-center my-10 border-white border-2 rounded-lg focus:border-primary focus:text-primary focus:bg-white">Login</button>
            </form>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import axios from 'axios'
import { API_URL, LOGIN_URL } from '../config';
import { store } from '../util/store';
import { router } from '../util/router';
const username = ref("")
const password = ref("")
const emits = defineEmits(['login'])
const login = async () => {
    try {
        const req = await axios.post(LOGIN_URL, {
                username: username.value,
                password: password.value
            })
        console.log(req);
        if (req.status == 201) // ok
        {
            await store.user.setUsername(username.value)
            await store.token.setToken(req.data.access_token);
            router.push("/")
            emits('login')
        }
    } catch(err) {
        alert("Invalid login :(")
        username.value = ""
        password.value = ""
    }

}
</script>