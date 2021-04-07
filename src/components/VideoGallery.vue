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
                    title: "Minions1",
                    content: "Minions 1",
                    video: {
                        url: 'https://www.youtube.com/embed/WwD21cFvy68?rel=0&showinfo=0&controls=0&fs=0&modestbranding=1&color=white&iv_load_policy=3&autohide=1&enablejsapi=1',
                        props: { 
                            allow: 'accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture'
                         }
                    }
                },
                {
                    title: "Minions2",
                    content: "Minions 2",
                    video: {
                        url: 'https://www.youtube.com/embed/wM7zqDG5Iws?rel=0&showinfo=0&controls=0&fs=0&modestbranding=1&color=white&iv_load_policy=3&autohide=1&enablejsapi=1',
                        props: { 
                            allow: 'accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture'
                         }
                    }
                },
                {
                    title: "Minions3",
                    content: "Minions 3",
                    video: {
                        url: 'https://www.youtube.com/embed/PjfP2tmjtQM?rel=0&showinfo=0&controls=0&fs=0&modestbranding=1&color=white&iv_load_policy=3&autohide=1&enablejsapi=1',
                        props: { 
                            allow: 'accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture'
                         }
                    }
                },
                {
                    title: "Minions4",
                    content: "Minions 4",
                    video: {
                        url: 'https://www.youtube.com/embed/P9-FCC6I7u0?rel=0&showinfo=0&controls=0&fs=0&modestbranding=1&color=white&iv_load_policy=3&autohide=1&enablejsapi=1',
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