<template>
    <div class="about">
        <div id="section-header">
            <h1>About Us</h1>
        </div>
        <div id="background">
            <img src="../assets/images/about2.png" alt="">
        </div>
        <div class="container">
            <div id="section-content">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. At tellus at urna condimentum mattis pellentesque. Sed vulputate mi sit amet. Egestas fringilla phasellus faucibus scelerisque eleifend donec pretium vulputate. Nunc aliquet bibendum enim facilisis gravida neque. Adipiscing elit ut aliquam purus sit amet. Sagittis id consectetur purus ut faucibus pulvinar elementum integer enim. Faucibus pulvinar elementum integer enim neque volutpat ac. Iaculis urna id volutpat lacus laoreet non. In fermentum et sollicitudin ac orci phasellus.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. At tellus at urna condimentum mattis pellentesque. Sed vulputate mi sit amet. Egestas fringilla phasellus faucibus scelerisque eleifend donec pretium vulputate. Nunc aliquet bibendum enim facilisis gravida neque. Adipiscing elit ut aliquam purus sit amet. Sagittis id consectetur purus ut faucibus pulvinar elementum integer enim.</p>
            </div>
            <hr>
            
            <div id="section-header">
                <h1>Our Highlight of the Month</h1>
            </div>
            <div id="about-images" class="mt-4">
                <div class="row">
                    <div class="col-3" id="about-content">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu.</p>
                    </div>
                    <div class="col-3" id="about-image-1">
                        <img class="about-image-1" :src="image_links[0]" alt="">
                    </div>
                    <div class="col-3" id="about-image-2">
                        <img class="about-image-2" :src="image_links[1]" alt="">
                    </div>
                    <div class="col-3" id="about-image-3">
                        <img class="about-image-3" :src="image_links[2]" alt="">
                    </div>
                </div>
            </div>
            <div class="photo-section">
                <vueper-slides 
                    autoplay
                    class="no-shadow"
                    :visible-slides="1"
                    :bullets="false"
                    :gap="1"
                    :touchable="false"
                    fixed-height="650px">
                    <vueper-slide v-for="(slide, i) in image_links" :key="i" :image="slide" style="border-radius: 5px" />
                </vueper-slides>
            </div>
            <div id="section-content-2">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu.</p>
            </div>
        </div>
    </div>
</template>

<script>
import { VueperSlides, VueperSlide } from 'vueperslides'
import 'vueperslides/dist/vueperslides.css'
import { mapGetters } from 'vuex'
export default {
    name: "About",
    components : { VueperSlides, VueperSlide },
    data() {
        return {
            image_links: [
                'https://images.unsplash.com/photo-1530842025973-11b5f5013b2e?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1534&q=80',
                'https://images.unsplash.com/photo-1612730376550-e8f1275e1b51?ixid=MXwxMjA3fDB8MHx0b3BpYy1mZWVkfDEzfHRvd0paRnNrcEdnfHxlbnwwfHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60',
                'https://images.unsplash.com/photo-1526231237819-de846f3a7e16?ixid=MXwxMjA3fDB8MHx0b3BpYy1mZWVkfDE2fHRvd0paRnNrcEdnfHxlbnwwfHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60vv'
            ]
        }
    },
    // mounted() {
    //     this.$store.dispatch('aboutMain'),
    //     this.$store.dispatch('aboutSub'),
    //     this.$store.dispatch('getAboutImages')
    // },
    // computed: {
    //     ...mapGetters([
    //         'aboutMain', 'aboutSub', 'aboutImages'
    //     ])
    // }
}
</script>

<style scoped>
.about {
    margin-bottom: 100px;
}
.photo-section {
    display: none;
}
#section-content-2 {
    display: none;
}
#background {
    opacity: 0.15;
    margin-top: 10px;
    position: absolute;
    z-index: -1;
}
#background img {
    width: 270px;
}
#section-content p {
    font-size: 22px;
    text-align: center;
}
#about-images p {
    font-size: 20px;
}
#about-images img {
    width: 250px;
    padding: 3px;
    border: 1px solid black;
    border-radius: 4px;
}
.about-image-1 {
    margin-top: 40px;
    transform: rotate(20deg);
}
.about-image-2 {
    transform: rotate(-10deg);
}
.about-image-3 {
    margin-top: 10px;
    transform: rotate(20deg);
}

@media (max-width: 1080px) {
    #about-images img {
        width: 200px;
    }
    #about-content {
        display: none;
    }
    #section-content-2 {
        margin-top: 10px;
        text-align: center;
        display: block;
    }
    #about-images img {
        width: 250px;
    }
    .about-image-1 {
        margin-top: 0px;
        transform: none
    }
    .about-image-2 {
        margin-left: 90px;
        transform: none;
    }
    .about-image-3 {
        margin-top: 0px;
        margin-left: 180px;
        transform: none;
    }
}

@media (max-width: 980px) {
    #background img {
        width: 250px;
    }
    #about-images img {
        display: none;
    }
    #about-images p {
        display: none;
    }
    #section-header {
        text-align: center;
    }
    .photo-section {
        display: block;
    }
}
</style>