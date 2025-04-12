<template>
    <div class="portfolio">
        <div id="section-header">
            <h1>Portfolio</h1>
        </div>
        <div id="background">
            <img class="work-text" src="../assets/images/work2.png" alt="">
            <img class="photographs-text" src="../assets/images/photographs.png" alt="">
        </div>
        <photos />
        <div id="background">
            <img src="../assets/images/videos-text.png" alt="" class="videos-text">
        </div>
        <videos :carouselVideos="carouselVideos" />
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Photos from './Photos.vue'
import Videos from './Videos.vue'
export default {
    name: "Portfolio",
    components: { Videos, Photos },
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
            ]
        }
    },
    // mounted() {
    //     this.$store.dispatch('getPortfolioImages')
    // },
    // computed: {
    //     ...mapGetters([
    //         'portfolioImages'
    //     ])
    // }
}
</script>

<style scoped>
.portfolio {
    margin-top: 50px;
}
#background .work-text {
    opacity: 0.4;
    margin-top: 10px;
    right: 0;
    position: absolute;
}
#background .photographs-text {
    padding-top: 30px;
    opacity: 0.2;
    margin-top: 10px;
    position: absolute;
}
#background .videos-text {
    position: absolute;
    opacity: 0.5;
}

@media (max-width: 980px) {
    #background .work-text {
        width: 180px;
    }
    #background .photographs-text {
        width: 150px;
    }
    #background .videos-text {
        width: 120px;
    }
}
</style>