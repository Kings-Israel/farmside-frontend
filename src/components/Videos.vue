<template>
    <div id="videos">
        <div class="container mb-5">
            <div id="videos section-content" class="videos-section">
                <vueper-slides
                    :breakpoints="breakpoints"
                    :bullets="false"
                    class="no-shadow"
                    arrows-outside
                    fixed-height="630px">
                    <vueper-slide 
                        v-for="(slide, i) in carouselVideos" 
                        :key="i" 
                        :video="slide.video"
                    />
                </vueper-slides>
            </div>
        </div>
    </div>
</template>

<script>
import { VueperSlides, VueperSlide } from 'vueperslides'
import 'vueperslides/dist/vueperslides.css'
export default {
    name: "Videos",
    props: ['carouselVideos'],
    components : {
        VueperSlides, VueperSlide
    },
    data() {
        return {
            breakpoints: {
                980: {
                    fixedHeight: "390px"
                },
                580: {
                    fixedHeight: "310px",
                    arrowsOutside: false
                }
            }
        }
    }
}
</script>

<style scoped>

</style>