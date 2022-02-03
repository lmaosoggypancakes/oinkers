import { Storage } from "@capacitor/storage"
import axios from "axios"
import { API_URL } from '../config'
export const store = {
    token: {
        async setToken(token) {
            await Storage.set({
                key: "__token",
                value: token
            })
        },
        async getToken() {
            const { value } = await Storage.get({ key: "__token"})
            return value
        },
        async clearToken() {
            await this.setToken("")
        },
        async isValid() {
            return !!(await this.getToken())
        }
    },
    transactions: {
        async addTransaction(t) {
            t.user = {
                connect: {
                    username: await store.user.getUsername()
                }
            }
            const response = await axios.post(API_URL + "transactions", t, {
                headers: {
                    Authorization: `Bearer ${await store.token.getToken()}`                    
                }
            }).catch(alert)
            if (response.status == 200) {
                console.log(response.data);
                return response.data
            } 
            return false
        },


        async editTransaction(t) {
            const response = await axios.put(API_URL + "transactions/" + t.id, t, {
                headers: {
                    Authorization: `Bearer ${await store.token.getToken()}`
                }
            }).catch(alert)
            return response.data
        },
        async removeTrasaction(t) {
            console.log("Transaction to be removed: ");
            console.table(t)
            const response = await axios.delete(API_URL + "transactions/" + t.id, {
                headers: {
                    Authorization: `Bearer ${await store.token.getToken()}`
                }
            }).catch(alert)
            if (response.status == 200) {
                console.log(response.data);
                return response.data
            }
            return false
        },

        async getTransactions() {
            const url = API_URL + "transactions/" + (await store.user.getUsername())
            console.log(url);
            const response = await axios.get(url, {
                headers: {
                    Authorization: `Bearer ${await store.token.getToken()}`
                }
            }).catch(alert) 
            if (response.status == 200) {
                return response.data
            }
            return false
        }
    },
    user: {
        async setUsername(username) {
            await Storage.set({
                key: "__username",
                value: username
            })
        },
        async getUsername() {
            const { value } = await Storage.get({
                key: "__username"
            })
            return value
        }
    }
}