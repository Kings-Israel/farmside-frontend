<template>
    <div id="photos">
        <div class="container">
            <div id="section-content" class="photo-section">
                <vueper-slides 
                    autoplay
                    :breakpoints="breakpoints"
                    pauseOnHover
                    class="no-shadow"
                    :visible-slides="3"
                    :bullets="false"
                    :gap="1"
                    :touchable="false"
                    fixed-height="500px">
                    <vueper-slide v-for="(slide, i) in portfolioImages" :key="i" :image="slide.image" style="border-radius: 2px" />
                </vueper-slides>
            </div>
        </div>
    </div>
</template>

<script>
import { VueperSlides, VueperSlide } from 'vueperslides'
import 'vueperslides/dist/vueperslides.css'
export default {
    name: "Photos",
    components : { VueperSlides, VueperSlide },
    data() {
        return {
            breakpoints: {
                980: {
                    slideRatio: 1 / 5,
                    visibleSlides: "2",
                    fixedHeight: "390px"
                },
                580: {
                    visibleSlides: "1",
                    fixedHeight: "370px"
                }
            },
            portfolioImages: [
                {
                    image: 'https://images.unsplash.com/photo-1589317621382-0cbef7ffcc4c?ixid=MXwxMjA3fDB8MHx0b3BpYy1mZWVkfDh8dG93SlpGc2twR2d8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60'
                },
                {
                    image: 'https://images.unsplash.com/photo-1614247484197-9c6164bb532f?ixid=MXwxMjA3fDB8MHx0b3BpYy1mZWVkfDEwfHRvd0paRnNrcEdnfHxlbnwwfHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60'
                },
                {
                    image: 'https://images.unsplash.com/photo-1598586700390-7172442db3c3?ixid=MXwxMjA3fDB8MHx0b3BpYy1mZWVkfDEyfHRvd0paRnNrcEdnfHxlbnwwfHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60'
                },
                {
                    image: 'https://images.unsplash.com/photo-1507126117511-e87526de90e2?ixid=MXwxMjA3fDB8MHx0b3BpYy1mZWVkfDE3fHRvd0paRnNrcEdnfHxlbnwwfHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60'
                },
                {
                    image: 'https://images.unsplash.com/photo-1614492052748-7c182718eaa0?ixid=MXwxMjA3fDB8MHx0b3BpYy1mZWVkfDI1fHRvd0paRnNrcEdnfHxlbnwwfHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60'
                },
                {
                    image: 'https://images.unsplash.com/photo-1601511086638-a6d6946ed7fd?ixid=MXwxMjA3fDB8MHx0b3BpYy1mZWVkfDI5fHRvd0paRnNrcEdnfHxlbnwwfHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60'
                },
                {
                    image: 'https://images.unsplash.com/photo-1573072886302-dcf5319bd217?ixid=MXwxMjA3fDB8MHx0b3BpYy1mZWVkfDMyfHRvd0paRnNrcEdnfHxlbnwwfHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60'
                },
                {
                    image: 'https://images.unsplash.com/flagged/photo-1574526773876-67767dfed469?ixid=MXwxMjA3fDB8MHx0b3BpYy1mZWVkfDM0fHRvd0paRnNrcEdnfHxlbnwwfHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60'
                },
                {
                    image: 'https://images.unsplash.com/photo-1548259483-798906ada6bc?ixid=MXwxMjA3fDB8MHx0b3BpYy1mZWVkfDQ0fHRvd0paRnNrcEdnfHxlbnwwfHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60'
                },
                {
                    image: 'https://images.unsplash.com/photo-1614185798294-7c4ef0da24e7?ixid=MXwxMjA3fDB8MHx0b3BpYy1mZWVkfDQ3fHRvd0paRnNrcEdnfHxlbnwwfHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60'
                },
                {
                    image: 'https://images.unsplash.com/photo-1614269430675-c7db5ddfedf9?ixid=MXwxMjA3fDB8MHx0b3BpYy1mZWVkfDU3fHRvd0paRnNrcEdnfHxlbnwwfHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60'
                },
                {
                    image: 'https://images.unsplash.com/photo-1585870683904-a382fbb42754?ixid=MXwxMjA3fDB8MHx0b3BpYy1mZWVkfDY3fHRvd0paRnNrcEdnfHxlbnwwfHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60'
                },
            ]
        }
    }
}
</script>

<style scoped>

</style>