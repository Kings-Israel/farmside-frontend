import axios from 'axios'
import Vuex from 'vuex'
import Vue from 'vue'

Vue.use(Vuex)
export default new Vuex.Store({
    state: {
        // aboutMain: '',
        // aboutSub: '',
        // aboutImages: {},
        // portfolioImages: '',
        booking: null,
        message: null
    },
    mutations: {
//         ABOUT_MAIN(state, aboutMain) {
//             state.aboutMain = aboutMain
//         },
//         ABOUT_SUB(state, aboutSub) {
//             state.aboutSub = aboutSub
//         },
//         ABOUT_IMAGES(state, aboutImages) {
//             state.aboutImages = aboutImages
//         },
//         PORTFOLIO_IMAGES(state, portfolioImages){
//             state.portfolioImages = portfolioImages
//         },
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
//         async aboutMain({commit}) {
//             let aboutMain = await axios.get('/about/aboutMain')
//             commit('ABOUT_MAIN', aboutMain.data.content)
//         },
//         async aboutSub({commit}) {
//             let aboutSub = await axios.get('/about/aboutSub')
//             commit('ABOUT_SUB', aboutSub.data.content)
//         },
        async sendMessage({commit}, message){
            let response = await axios.post('/message', message)
            if(response.data.message == 'success'){
                commit('MESSAGE_SENT')
            } else {
                commit('MESSAGE_FAILED')
            }
        },
        async sendBooking({commit}, booking) {
            let response = await axios.post('/bookings/book', booking)
            if(response.data.message == 'success'){
                commit('BOOKING_SENT')
            } else {
                commit('BOOKING_FAILED')
            }
        },
//         async getAboutImages({commit}) {
//             let response = await axios.get('/about/images')
//             commit('ABOUT_IMAGES', {image1: response.data.images[0].fileName, image2: response.data.images[1].fileName, image3: response.data.images[2].fileName})
//         },
//         async getPortfolioImages({commit}) {
//             let response = await axios.get('/portfolio/images')
//             commit('PORTFOLIO_IMAGES', response.data.images)
//         },
//         emailSubscription({commit}, email) {
//             axios.post('/subscription/email', email)
//             .then(repsonse => {
//                 console.log(repsonse.data)
//             })
//         }
    },
    getters: {
//         aboutMain: state => state.aboutMain,
//         aboutSub: state => state.aboutSub,
//         aboutImages: state => state.aboutImages,
//         portfolioImages: state => state.portfolioImages,
        booking: state => state.booking,
        message: state => state.message,
    }
})