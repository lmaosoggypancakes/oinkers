<template>
    <div class="p-8 h-full" :class="{
        'blur-md': visible
    }">
        <div class="w-full flex flex-col h-full">
            <div class="w-full h-1/2 flex flex-col items-center">
                <Logo />
            </div>
            <span class="text-center text-5xl py-5 text-brown_green">${{ balance }}</span>
            <div class="flex flex-row justify-center mb-2 pb-2">
                <button
                    class="border-white border-4 p-2 rounded-xl w-full bg-white text-primary"
                    @click="openModal({}, true)"
                >Add Transaction</button>
            </div>
            <div class="w-full relative h-40 overflow-y-scroll pt-4">
                <ul class="h-full w-full">
                    <Transaction
                        v-for="t in transactions"
                        :id="t.id"
                        :amount="t.amount"
                        :name="t.name"
                        :timestamp="t.timestamp"
                        @click="openModal(t)"
                    />
                </ul>
            </div>
        </div>
    </div>
    <Modal :toggled="visible" @close="closeModal">
        <form
            class="px-6 w-full h-3/4 flex flex-col justify-around"
            v-if="edit_transation"
            @submit.prevent
        >
            <div>
                <label class="text-center w-full block text-lg" for="name">Transaction Name</label>
                <input
                    v-model="edit_transation.name"
                    type="text"
                    id="name"
                    class="outline-0 mt-1 bg-primary rounded-md border-2 border-white h-10 w-full text-white px-2 font-bold"
                />
            </div>
            <div>
                <label class="text-center w-full block text-lg">Amount</label>
                <input
                    type="number"
                    v-model="edit_transation.amount"
                    class="outline-0 my-1 bg-primary rounded-md border-2 border-white h-10 w-full text-white px-2 font-bold"
                />
            </div>
            <div class="flex flex-row justify-around pt-2">
                <button
                    @click="removeTransaction"
                    class="border-2 border-dark_yellow rounded-md p-4"
                >
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
                                    d="M126.85,172h-81.7c-9.1375,0 -16.6625,-6.9875 -17.2,-16.6625l-6.9875,-129.5375c0,-1.075 0.5375,-2.15 1.075,-3.225c0.5375,-1.075 2.15,-1.075 3.225,-1.075h122.0125c1.075,0 2.15,0.5375 2.6875,1.075c0.5375,0.5375 1.075,2.15 1.075,3.225l-6.9875,130.075c-0.5375,9.1375 -8.0625,16.125 -17.2,16.125zM29.5625,29.5625l6.45,125.775c0,4.8375 4.3,8.6 9.1375,8.6h81.1625c4.8375,0 9.1375,-3.7625 9.1375,-8.6l6.45,-125.775z"
                                />
                                <path
                                    d="M168.2375,29.5625h-163.9375c-2.6875,0 -4.3,-1.6125 -4.3,-3.7625c0,-2.15 1.6125,-4.3 4.3,-4.3h163.9375c2.15,0 3.7625,1.6125 3.7625,4.3c0,2.6875 -1.6125,3.7625 -3.7625,3.7625z"
                                />
                                <path
                                    d="M130.075,29.5625h-88.15c-1.6125,0 -2.6875,-1.075 -3.7625,-2.15c-0.5375,-1.075 -0.5375,-2.6875 0.5375,-4.3l13.975,-21.5c0.5375,-1.075 1.6125,-1.6125 3.225,-1.6125h60.2c1.6125,0 2.6875,0.5375 3.225,1.6125l13.975,21.5c1.075,1.075 1.075,2.6875 0,4.3c-0.5375,1.075 -1.6125,2.15 -3.225,2.15zM49.45,21.5h73.6375l-8.6,-13.4375h-56.4375z"
                                />
                                <path
                                    d="M86,147.8125c-2.15,0 -4.3,-1.6125 -4.3,-4.3v-93.525c0,-2.15 1.6125,-4.3 4.3,-4.3c2.6875,0 4.3,1.6125 4.3,4.3v94.0625c0,2.15 -2.15,3.7625 -4.3,3.7625z"
                                />
                                <path
                                    d="M60.7375,133.3c-2.15,0 -4.3,-1.6125 -4.3,-4.3v-64.5c0,-2.15 1.6125,-4.3 4.3,-4.3c2.6875,0 3.7625,2.15 3.7625,4.3v64.5c0,2.15 -1.6125,4.3 -3.7625,4.3z"
                                />
                                <path
                                    d="M111.2625,133.3c-2.15,0 -4.3,-1.6125 -4.3,-4.3v-64.5c0,-2.15 1.6125,-4.3 4.3,-4.3c2.6875,0 4.3,1.6125 4.3,4.3v64.5c0,2.15 -2.15,4.3 -4.3,4.3z"
                                />
                            </g>
                        </g>
                    </svg>
                </button>
                <button
                    class="border-2 border-dark_yellow rounded-md p-4"
                    @click="createTransaction"
                >
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
                                    d="M24.08,13.76c-5.66036,0 -10.32,4.65964 -10.32,10.32v123.84c0,5.66037 4.65964,10.32 10.32,10.32h123.84c5.66037,0 10.32,-4.65963 10.32,-10.32v-102.51469c-0.00018,-0.91228 -0.36269,-1.78715 -1.00781,-2.43219l-28.20531,-28.20531c-0.64504,-0.64512 -1.5199,-1.00764 -2.43219,-1.00781zM24.08,20.64h17.2v41.28c0,5.66037 4.65963,10.32 10.32,10.32h65.36c5.66037,0 10.32,-4.65963 10.32,-10.32v-39.17031l24.08,24.08v101.09031c0,1.90763 -1.53237,3.44 -3.44,3.44h-17.2v-51.6c0,-5.66037 -4.65963,-10.32 -10.32,-10.32h-68.8c-5.66037,0 -10.32,4.65963 -10.32,10.32v51.6h-17.2c-1.90764,0 -3.44,-1.53237 -3.44,-3.44v-123.84c0,-1.90764 1.53236,-3.44 3.44,-3.44zM48.16,20.64h72.24v41.28c0,1.90763 -1.53237,3.44 -3.44,3.44h-65.36c-1.90763,0 -3.44,-1.53237 -3.44,-3.44zM99.76,27.52c-1.89978,0.00019 -3.43981,1.54022 -3.44,3.44v24.08c0.00019,1.89978 1.54022,3.43981 3.44,3.44h10.32c1.89978,-0.00019 3.43981,-1.54022 3.44,-3.44v-24.08c-0.00019,-1.89978 -1.54022,-3.43981 -3.44,-3.44zM103.2,34.4h3.44v17.2h-3.44zM51.6,96.32h68.8c1.90763,0 3.44,1.53237 3.44,3.44v51.6h-75.68v-51.6c0,-1.90763 1.53237,-3.44 3.44,-3.44zM27.52,137.6v6.88h6.88v-6.88zM137.6,137.6v6.88h6.88v-6.88z"
                                />
                            </g>
                        </g>
                    </svg>
                </button>
            </div>
        </form>
    </Modal>
</template>

<script setup>
const emits = defineEmits(['navbarBlur'])
import { computed, ref, watch } from 'vue'
import Transaction from '../components/Transaction.vue';
import Logo from '../components/Logo.vue'
import Modal from '../components/Modal.vue'
import { calculate_balance, running_total } from '../util';
import { LineChart } from 'vue-chart-3'
import { CategoryScale, Chart, LinearScale, LineController, LineElement } from 'chart.js'
import { PointElement } from 'chart.js';
const visible = ref(false)
const edit_transation = ref(null)
const editGoal = ref(false)
const transactions = ref(JSON.parse(localStorage.getItem('__transactions')))
console.log(transactions.value)
const balance = computed(() => calculate_balance(transactions.value))
const validEdit = computed(() => edit_transation.value.name.length !== 0)
const goal = ref(parseInt(localStorage.getItem("__goal")))
console.log("Goal value: " + goal.value)
const metGoal = computed(() => balance.value >= goal.value)
const goalLine = computed(() => {
    let ret = []
    for (let i in transactions.value) {
        console.log('asdfdas');
        ret.push(goal.value)
    }
    return ret
})
Chart.register(LineController, PointElement, LineElement, CategoryScale, LinearScale)
Chart.defaults.color = '#EBDBB2'
Chart.defaults.font.family = 'JetBrains Mono'
Chart.defaults.font.size = 12
Chart.defaults.elements.line.borderColor = '#D79921'
Chart.defaults.scale.beginAtZero = true
const watcher = watch(goal, (e, _e) => {
    localStorage.setItem("__goal", e)
})
const chartData = computed(() => {
    return {
        labels: transactions.value.map(t => t.timestamp),
        datasets: [
            {
                data: running_total(transactions.value),
                backgroundColor: ['#D79921']
            },
            {
                data: goalLine.value,
                borderColor: '#83A598',
            }
        ],
    }
})
const chartConfig = ref({
    responsize: true,
    maintainAspectRatio: false,
    scales: {
        x: {
            grid: {
                color: '#A89984'
            }
        },
        y: {
            grid: {
                color: '#A89984'
            }
        }
    }
})
const openModal = (t, create = false) => {
    emits('navbarBlur')
    visible.value = true;
    if (create) {
        t.create = true
    }
    edit_transation.value = t;
}

const createTransaction = () => {
    if (edit_transation.value.create) {
        delete edit_transation.value.create
        const now = new Date()
        edit_transation.value.timestamp = `${now.getMonth() + 1} / ${now.getFullYear()}`
        transactions.value.push(edit_transation.value)
        localStorage.setItem("__transactions", JSON.stringify(transactions.value))
    }
    closeModal()
}
const closeModal = () => {
    emits('navbarBlur')
    visible.value = false;
    edit_transation.value = null
}
const removeTransaction = (t) => {
    closeModal()
    transactions.value.splice(transactions.value.indexOf(t), 1)
    localStorage.setItem("__transactions", JSON.stringify(transactions.value))
}

</script> 

<style>
@import url("https://fonts.googleapis.com/css2?family=JetBrains+Mono&display=swap");
input[type="number"]::-webkit-inner-spin-button,
input[type="number"]::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
}
</style>