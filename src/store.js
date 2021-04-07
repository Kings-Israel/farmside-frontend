import axios from 'axios'
import Vuex from 'vuex'
import Vue from 'vue'

Vue.use(Vuex)
export default new Vuex.Store({
    state: {
        booking: null,
        message: null
    },
    mutations: {
        BOOKING_SENT(state){
            state.booking = true
        },
        BOOKING_FAILED(state){
            state.booking = false
        },
        MESSAGE_SENT(state){
            state.message = true
        },
        MESSAGE_FAILED(state){
            state.message = false
        }
    },
    actions: {
        async sendMessage({commit}, message){
            console.log('message')
            let response = await axios.post('https://farmside-functions.netlify.app/.netlify/functions/message', message)
            if(response.data.message == 'success'){
                commit('MESSAGE_SENT')
            } else {
                commit('MESSAGE_FAILED')
            }
        },
        async sendBooking({commit}, booking) {
            console.log('Booking')
            let response = await axios.post('https://farmside-functions.netlify.app/.netlify/functions/booking', booking)
            if(response.data.message == 'success'){
                commit('BOOKING_SENT')
            } else {
                commit('BOOKING_FAILED')
            }
        },
    },
    getters: {
        booking: state => state.booking,
        message: state => state.message,
    }
})