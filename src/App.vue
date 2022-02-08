<script setup>
window.screen.orientation.lock('portrait')
import { onBeforeMount, ref } from 'vue';
import { onBeforeRouteUpdate } from 'vue-router';
import { router } from './util/router';
import { store } from './util/store';
const navbarBlur = ref(false)
const isLoggedIn = ref()
onBeforeMount(async () => {
	isLoggedIn.value = await store.token.isValid()
})
const logout = async () => {
	isLoggedIn.value = false
	await store.token.clearToken()
	router.push("/login")
}
onBeforeRouteUpdate(async () => {
	isLoggedIn.value = await store.token.isValid()
})
</script>

<template>
	<div class="bg-primary text-white h-full relative" >
		<div class="w-screen h-full relative grid grid-rows-6">
			<div :class="{
				'row-span-5':  isLoggedIn,
				'row-span-6': !isLoggedIn
			}">
				<router-view @navbarBlur="navbarBlur = !navbarBlur" @login="isLoggedIn = true"></router-view>
			</div>
			<div class="row-span-1 px-4 w-screen bg-primary flex flex-col justify-center" id="navbar" :class="{ 'blur-md': navbarBlur}"  v-if="isLoggedIn">
				<ul class="flex flex-row justify-around w-full">
					<li>
						<router-link to="/account">
							<svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
								width="64" height="64"
								viewBox="0 0 172 172"
								style=" fill:#000000;"><g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><path d="M0,172v-172h172v172z" fill="none"></path><g fill="#ebdbb2"><path d="M86,21.5c-17.7627,0 -32.25,14.4873 -32.25,32.25c0,17.7627 14.4873,32.25 32.25,32.25c17.7627,0 32.25,-14.4873 32.25,-32.25c0,-17.7627 -14.4873,-32.25 -32.25,-32.25zM86,86c-29.60449,0 -53.75,24.14551 -53.75,53.75h10.75c0,-15.36914 8.0625,-28.68067 20.11426,-36.28125l22.88574,25.53125l22.88574,-25.53125c12.05176,7.60058 20.11426,20.91211 20.11426,36.28125h10.75c0,-29.60449 -24.14551,-53.75 -53.75,-53.75zM86,32.25c11.92578,0 21.5,9.57422 21.5,21.5c0,11.92578 -9.57422,21.5 -21.5,21.5c-11.92578,0 -21.5,-9.57422 -21.5,-21.5c0,-11.92578 9.57422,-21.5 21.5,-21.5zM86,96.75c4.40918,0 8.56641,0.83984 12.59766,2.09961l-12.59766,14.02539l-12.59766,-14.02539c4.03125,-1.25977 8.18848,-2.09961 12.59766,-2.09961z"></path></g></g>
							</svg>
						</router-link>
					</li>
					<li>
						<router-link to="/">
							<svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
								width="64" height="64"
								viewBox="0 0 172 172"
								style=" fill:#000000;"><g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><path d="M0,172v-172h172v172z" fill="none"></path><g fill="#dccba0"><path d="M26.875,32.25c-8.86035,0 -16.125,7.26465 -16.125,16.125v53.75c0,8.86035 7.26465,16.125 16.125,16.125h118.25c8.86035,0 16.125,-7.26465 16.125,-16.125v-53.75c0,-8.86035 -7.26465,-16.125 -16.125,-16.125zM32.25,43h107.5c0,5.87891 4.87109,10.75 10.75,10.75v43c-5.87891,0 -10.75,4.87109 -10.75,10.75h-107.5c0,-5.87891 -4.87109,-10.75 -10.75,-10.75v-43c5.87891,0 10.75,-4.87109 10.75,-10.75zM86,53.75c-11.7998,0 -21.5,9.7002 -21.5,21.5c0,11.7998 9.7002,21.5 21.5,21.5c11.7998,0 21.5,-9.7002 21.5,-21.5c0,-11.7998 -9.7002,-21.5 -21.5,-21.5zM43,64.5c-5.9209,0 -10.75,4.8291 -10.75,10.75c0,5.9209 4.8291,10.75 10.75,10.75c5.9209,0 10.75,-4.8291 10.75,-10.75c0,-5.9209 -4.8291,-10.75 -10.75,-10.75zM86,64.5c6.00489,0 10.75,4.74511 10.75,10.75c0,6.00489 -4.74511,10.75 -10.75,10.75c-6.00489,0 -10.75,-4.74511 -10.75,-10.75c0,-6.00489 4.74511,-10.75 10.75,-10.75zM129,64.5c-5.9209,0 -10.75,4.8291 -10.75,10.75c0,5.9209 4.8291,10.75 10.75,10.75c5.9209,0 10.75,-4.8291 10.75,-10.75c0,-5.9209 -4.8291,-10.75 -10.75,-10.75zM21.5,129c2.22558,6.25683 8.14649,10.75 15.11719,10.75h11.50586c17.7207,0 35.60938,1.38574 53.12011,4.07324l30.65429,4.70313c0.83984,0.12598 1.67969,0.20997 2.47754,0.20997c3.82129,0 7.55859,-1.34375 10.49805,-3.90528c3.56933,-3.06543 5.62695,-7.51659 5.62695,-12.26172v-3.56933h-12.09375c-5.45898,0 -9.6582,3.48535 -10.41406,8.0625l-25.11132,-3.86328c-18.05665,-2.77148 -36.49122,-4.19922 -54.75781,-4.19922z"></path></g></g>
							</svg>
						</router-link>
					</li>
					<li>
						<button @click="logout">
							<svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
								width="64" height="64"
								viewBox="0 0 172 172"
								style=" fill:#000000;"><g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><path d="M0,172v-172h172v172z" fill="none"></path><g fill="#ebdbb2"><path d="M26.875,10.75c-8.86035,0 -16.125,7.26465 -16.125,16.125v107.5c0,8.86035 7.26465,16.125 16.125,16.125h107.5c8.86035,0 16.125,-7.26465 16.125,-16.125v-26.875l-10.75,10.75v16.125c0,3.02344 -2.35156,5.375 -5.375,5.375h-107.5c-3.02344,0 -5.375,-2.35156 -5.375,-5.375v-107.5c0,-3.02344 2.35156,-5.375 5.375,-5.375h107.5c3.02344,0 5.375,2.35156 5.375,5.375v16.125l10.75,10.75v-26.875c0,-8.86035 -7.26465,-16.125 -16.125,-16.125zM115.35254,43.25196l-7.64258,7.55859l24.43946,24.43945h-78.39942v10.75h78.39942l-24.43946,24.39746l7.64258,7.64258l37.37304,-37.41504z"></path></g></g>
							</svg>
						</button>
					</li>
				</ul>
			</div>
		</div>
	</div>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=JetBrains+Mono&display=swap');
body { 
	margin: 0;
	padding: 0;
	font-family: 'JetBrains Mono'
}
.tooltip {
	@apply invisible absolute;
}

.has-tooltip:hover .tooltip {
	@apply visible z-50;
}

#app {
	height: 100vh;
}
</style>
