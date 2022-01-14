<template>
    <div class="grid grid-cols-2 divide-x-4 p-8 h-full " :class="{
        'blur-sm': visible
    }">
        <div class="grid grid-rows-5 divide-y-4 p-8 w-full h-full">
            <div class="row-span-2 flex flex-row items-center">
                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                    width="256" height="256"
                    viewBox="0 0 172 172"
                    style=" fill:#000000;"><g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><path d="M0,172v-172h172v172z" fill="none"></path><g fill="#ebdbb2"><path d="M124.57376,26.12373c-0.54981,0.01612 -1.06915,0.25624 -1.43758,0.66466l-13.58513,15.05682c-8.61404,-2.5446 -17.55318,-3.8191 -26.53513,-3.78323c-17.97266,0 -34.90023,4.89786 -47.66048,13.79181c-12.21603,8.514 -19.26404,19.73214 -20.05652,31.79465h-6.56456c-1.1132,0 -2.01562,0.90243 -2.01562,2.01563c0,1.1132 0.90243,2.01563 2.01563,2.01563h6.53635c0.69472,14.00859 9.71362,26.81316 25.04178,35.48471v20.61685c0,1.1132 0.90243,2.01563 2.01563,2.01563h18.8125c1.1132,0 2.01563,-0.90243 2.01563,-2.01562v-12.04717c13.07011,2.75334 26.57051,2.75334 39.64063,0v12.04717c0,1.1132 0.90243,2.01563 2.01563,2.01563h18.8125c1.1132,0 2.01563,-0.90243 2.01563,-2.01562v-20.62669c9.48049,-5.46402 16.65291,-12.50052 20.84978,-20.45216l17.01012,-2.00513c1.01535,-0.11914 1.78071,-0.97953 1.78073,-2.00184v-25.36c0.00123,-1.03056 -0.77512,-1.89607 -1.79976,-2.00644l-16.72011,-1.79779c-4.02823,-7.8297 -10.94689,-14.82097 -20.11294,-20.32094v-21.07155c0.00006,-0.54485 -0.22047,-1.06652 -0.61132,-1.44613c-0.39085,-0.3796 -0.91874,-0.58481 -1.46336,-0.56884zM122.61719,33.38116v16.9819c0.00034,0.71978 0.38447,1.38476 1.00781,1.74464c9.36157,5.40859 16.27947,12.38749 20.00469,20.17856c0.30139,0.63027 0.90766,1.05953 1.60226,1.13445l16.01805,1.72299v21.75917l-16.30084,1.92049c-0.67854,0.0801 -1.27031,0.49848 -1.57208,1.11148c-3.89184,7.90495 -11.06042,14.91802 -20.72971,20.28026c-0.6409,0.35547 -1.03836,1.03079 -1.03799,1.76367v19.78685h-14.78125v-12.54451c-0.00014,-0.6155 -0.2815,-1.1972 -0.76394,-1.57941c-0.48244,-0.38222 -1.11307,-0.52306 -1.71228,-0.38241c-14.05391,3.34514 -28.69676,3.34514 -42.75067,0c-0.59921,-0.14065 -1.22985,0.00019 -1.71228,0.38241c-0.48244,0.38222 -0.7638,0.96392 -0.76394,1.57941v12.54451h-14.78125v-19.78685c-0.00015,-0.73881 -0.40449,-1.41832 -1.05374,-1.77089c-15.27541,-8.29967 -24.03659,-20.79428 -24.03659,-34.27612c0,-24.17205 28.60363,-43.83788 63.76251,-43.83788c9.00571,-0.04082 17.9643,1.30129 26.56268,3.97942c0.75267,0.23822 1.57512,0.0151 2.1042,-0.57083zM77.10159,48.70569c-0.02781,0.00117 -0.05559,0.00292 -0.08333,0.00525c-27.7743,2.36601 -47.41373,16.78343 -50.03303,36.72938c-0.14495,1.10396 0.63248,2.1164 1.73644,2.26134c1.10396,0.14495 2.1164,-0.63248 2.26134,-1.73644c2.36265,-17.99214 20.567,-31.03876 46.37775,-33.23747c1.09173,-0.09468 1.90783,-1.04421 1.83736,-2.13778c-0.07047,-1.09357 -1.00168,-1.9305 -2.09653,-1.88429zM122.43807,66.97426c-3.46361,-0.0001 -6.58623,2.08626 -7.91174,5.2862c-1.32552,3.19994 -0.59289,6.88327 1.85626,9.33241c2.44914,2.44914 6.13247,3.18177 9.33241,1.85626c3.19994,-1.32551 5.2863,-4.44813 5.2862,-7.91174c-0.00532,-4.72708 -3.83605,-8.5578 -8.56312,-8.56313zM122.2491,71.00944c1.23362,-0.05141 2.43481,0.40271 3.32589,1.25737c0.89107,0.85466 1.39488,2.03588 1.39495,3.27057c-0.00237,2.50201 -2.02987,4.5298 -4.53187,4.53253c-2.46761,0.00197 -4.48332,-1.97056 -4.53477,-4.43763c-0.05145,-2.46707 1.88026,-4.52193 4.34581,-4.62284z"></path></g></g>
                </svg>
                <span class="text-6xl ml-16">=<span class="text-dark_yellow"> ${{ balance }}</span></span>
            </div>
            <div class="mt-8 row-span-3 relative w-full">
                <ul class="pr-6 h-5/6 absolute overflow-auto w-full scrollbar scrollbar-thumb-dark_yellow scrollbar-thumb-rounded scrollbar-thin hover:scrollbar-thumb-white">
                    <li v-for="t in transactions" :key="t.id">
                        <Transaction :id="t.id" :name="t.name" :amount="t.amount" @click="openModal(t)"></Transaction>
                    </li>
                </ul>
                <button class=" absolute bottom-0 w-full border-dark_yellow border-4 p-2 bg-dark_yellow text-primary font-bold rounded-md hover:bg-white hover:border-white transition-all" @click="openModal({ name: '', amount: 0}, create=true)">
                    Add Transaction
                </button>
            </div>
        </div>
    </div>
    <Modal :toggled="visible" @close="visible = false">
        <div class="w-full h-full px-10 py-20"  v-if="edit_transation">
            <form class="flex flex-col justify-between w-full h-full" @submit.prevent="handleSubmit()">  
                <div>
                    <label for="name">Name</label>
                    <input type="text" id="name" v-model="edit_transation.name" class="mt-2 bg-primary border-dark_yellow rounded-md p-2 border-2 w-full focus:bg-white focus:text-primary focus:transition-all focus:outline-none" :class="{ 'focus:border-4': !validEdit, 'focus:border-danger': !validEdit}" autocomplete="off">
                </div>
                <div>
                    <label for="price">Amount</label>
                    <div class="grid grid-cols-12 gap-3">
                        <input type="number" id="price" v-model="edit_transation.amount" class=" col-span-11 mt-2 bg-primary border-dark_yellow rounded-md p-2 border-2 w-full focus:bg-white focus:text-primary focus:transition-all focus:outline-none focus:border-white">
                    <span class="text-center border-2 rounded-md mt-2 border-dark_yellow pt-2 font-extrabold">$</span>
                    </div>
                </div>
                <div class="flex flex-row items-stretch gap-6">
                    <button type="submit" class="border-2 p-6 flex-1 rounded-md border-dark_yellow hover:bg-white hover:text-primary hover:border-white hover:transition-all" @click="closeModal()" :disabled="!validEdit">Save</button>
                    <button class="border-2 p-6 flex-1 rounded-md border-dark_yellow hover:bg-danger2 hover:border-danger2 hover:transition-all" @click="removeTransaction(edit_transation)" >Delete</button>
                </div>
            </form>
        </div>
    </Modal>
</template>

<script setup>
import { computed, ref } from 'vue'
import Transaction from '../components/Transaction.vue';
import Modal from '../components/Modal.vue'
import { calculate_balance } from '../util';

const visible = ref(false)
const edit_transation = ref(null)
const transactions = ref([])
const balance = computed(() => calculate_balance(transactions.value))
const validEdit = computed(() => edit_transation.value.name.length !== 0 && edit_transation.value.amount != 0)
const openModal = (t, create=false) => {
    visible.value = true;
    if (create) {
        t.create = true
    }
    edit_transation.value = t;
}
const closeModal = () => {
    visible.value = false;
    console.log(edit_transation.value)
    if (edit_transation.value.create) {
        delete edit_transation.value.create
        transactions.value.push(edit_transation.value)
    }
    edit_transation.value = null

}
const removeTransaction = (t) => {
    closeModal()
    transactions.value.splice(transactions.value.indexOf(t), 1)
}
const handleSubmit = () => {
    console.table("hi")
}
</script> 

<style>
input[type=number]::-webkit-inner-spin-button, 
input[type=number]::-webkit-outer-spin-button { 
  -webkit-appearance: none; 
  margin: 0; 
}</style>