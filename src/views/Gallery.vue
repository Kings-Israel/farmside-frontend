<template>
    <div id="gallery">
        <div id="section-header">
            <h1 id="gallery">Gallery</h1>
        </div>
        <div class="gallery-links">
            <router-link class="gallery-link" :to="{name: 'photographs'}">
                <vs-icon size='medium' icon="perm_media"></vs-icon>
                <!-- <vs-button color='dark' type='flat'><p>Photos</p></vs-button> -->
            </router-link>
            <router-link class="gallery-link" :to="{name: 'videos'}">
                <vs-icon size='medium' icon="theaters"></vs-icon>
                <!-- <vs-button color='dark' type='flat'>Videos</vs-button> -->
            </router-link>
        </div>

        <main class="App__main">
            <transition
            :name = "transitionName"
            mode="out-in"
            >
                <router-view />
            </transition>
        </main>
        <bottom-page />
    </div>
</template>

<script>
import BottomPage from '../components/BottomPage.vue';
const DEFAULT_TRANSITION = "fade";
export default {
  components: {BottomPage },
    name: "Gallery",
    data() {
        return {
            transitionName: DEFAULT_TRANSITION,
        }
    },
    created() {
    this.$router.beforeEach((to, from, next) => {
      let transitionName = to.meta.transitionName || from.meta.transitionName

      if(transitionName === 'slide') {
        const toDepth = to.path.split('/').length
        const fromDepth = from.path.split('/').length
        transitionName = toDepth < fromDepth ? 'slide-left' : 'slide-right'
      }

      this.transitionName = transitionName || DEFAULT_TRANSITION

      next()
    })
  },
}
</script>

<style scoped>
.gallery-links {
    display: flex;
    justify-content: center;
}

.gallery-link {
    text-decoration: none;
    color: #000;
    padding: 5px 5px 0px;
    margin-bottom: 0;
}

.gallery-link:hover {
    background-color: rgb(61, 61, 61);
    color: #fff;
    border-radius: 5px;
}
</style>