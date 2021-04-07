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