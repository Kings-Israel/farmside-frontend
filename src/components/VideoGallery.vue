<template>
    <div class="container mb-5" id="videos-gallery">
        <h3>Birthdays</h3>
        <vueper-slides
            :breakpoints="breakpoints"
            :bullets="false"
            class="no-shadow"
            arrows-outside
            fixed-height="640px">
            <vueper-slide 
                v-for="(slide, i) in carouselVideos" 
                :key="i" 
                :video="slide.video"
            />
        </vueper-slides>
        <br><hr>
        <h3>Graduations</h3>
        <vueper-slides
            :breakpoints="breakpoints"
            :bullets="false"
            class="no-shadow"
            arrows-outside
            fixed-height="640px">
            <vueper-slide 
                v-for="(slide, i) in carouselVideos" 
                :key="i" 
                :video="slide.video"
            />
        </vueper-slides>
        <br><hr>
        <h3>Music Videos</h3>
        <vueper-slides
            :breakpoints="breakpoints"
            :bullets="false"
            class="no-shadow"
            arrows-outside
            fixed-height="640px">
            <vueper-slide 
                v-for="(slide, i) in carouselVideos" 
                :key="i" 
                :video="slide.video"
            />
        </vueper-slides>
    </div>
</template>

<script>
import { VueperSlides, VueperSlide } from 'vueperslides'
export default {
    name: "VideoGallery",
    components: { VueperSlides, VueperSlide },
    data() {
        return {
            carouselVideos: [
                {
                    title: "24 in 254 Ep 4",
                    content: "24 in 254 Ep 4",
                    video: {
                        url: 'https://www.youtube.com/embed/wz092iZFP-s?si=Gw6mEwxYSoTWTS56',
                        props: { 
                            allow: 'accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture'
                         }
                    }
                },
                {
                    title: "24 in 254 Ep 3",
                    content: "24 in 254 Ep 3",
                    video: {
                        url: 'https://www.youtube.com/embed/W6MuhsnZBaA?si=aNT689i9bw4_TIBF',
                        props: { 
                            allow: 'accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture'
                         }
                    }
                },
                {
                    title: "Man of Valor",
                    content: "Man of Valor",
                    video: {
                        url: "https://www.youtube.com/embed/N4cPSpLTNe8?si=OgCdt2vojccQi1I2",
                        props: { 
                            allow: 'accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture'
                         }
                    }
                },
                {
                    title: "Minions4",
                    content: "Minions 4",
                    video: {
                        url: 'https://www.youtube.com/embed/zToczpO0FJ4?si=LCoLdxm8SBAKApeM',
                        props: { 
                            allow: 'accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture'
                         }
                    }
                },
            ],
            breakpoints: {
                980: {
                    slideRatio: 1 / 5,
                    visibleSlides: "1",
                    fixedHeight: "390px"
                },
                580: {
                    visibleSlides: "1",
                    fixedHeight: "370px",
                    arrowsInside: true
                }
            },
        }
    }
}
</script>

<style scoped>

</style>