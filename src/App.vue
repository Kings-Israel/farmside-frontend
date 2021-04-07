<template>
  <div id="app" v-cloak>
    <div class="fixednav">
      <b-navbar toggleable="lg" variant="faded" fixed="top" class="navbar">
        <b-navbar-brand href="#">
            <img src="./assets/images/Farmside.png" class="navbar-img" alt="">
        </b-navbar-brand>

        <b-navbar-toggle target="nav-collapse" type="dark"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>

          <!-- Right aligned nav items -->
          <b-navbar-nav class="ml-auto nav-class">
            <b-nav-item v-if="this.$route.name !== 'home'">
              <router-link class="nav-link" to="/">Home</router-link>
            </b-nav-item>
            <b-nav-item v-else class="nav-link" href="#home">Home</b-nav-item>
            <b-nav-item v-if="this.$route.name == 'home'" class="nav-link" href="#about">About</b-nav-item>
            <b-nav-item v-if="this.$route.name == 'home'" class="nav-link" href="#portfolio">Portfolio</b-nav-item>
            <b-nav-item>
              <router-link class="nav-link" to="/photographs">Gallery</router-link>
            </b-nav-item>
            <b-nav-item>
              <router-link class="nav-link" to="/downloads">Downloads</router-link>
            </b-nav-item>
            <b-nav-item>
              <router-link class="nav-link" to="/book">Book a Shoot</router-link>
            </b-nav-item>
            <b-nav-item v-if="this.$route.name == 'home'" class="nav-link" href="#contact">Contact Us</b-nav-item>
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>
    </div>
    <div class="content">
      <main class="App__main" v-cloak>
        <transition
        :name="transitionName"
        mode="out-in"
        >
          <router-view />
          
        </transition>
      </main>
    </div>
  </div>
</template>

<script>
const DEFAULT_TRANSITION = "fade";
export default {
  name: 'App',
  components: {
   
  },
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
  methods: {
    
    },
  mounted() {
    
  }
}
</script>

<style>
body {
  overflow-x: hidden;
}
[v-cloak] {
  display: none;
}
.navbar {
  background-color: #fff;
}
.content {
  margin-top: 65px;
}

.slide-left-enter-active,
.slide-left-leave-active,
.slide-right-enter-active,
.slide-right-leave-active {
  transition-duration: 0.5s;
  transition-property: height, opacity, transform;
  transition-timing-function: cubic-bezier(0.55, 0, 0.1, 1);
  overflow: hidden;
}


.slide-left-enter,
.slide-right-leave-active {
  opacity: 0;
  transform: translate(2em, 0);
}

.slide-left-leave-active,
.slide-right-enter {
  opacity: 0;
  transform: translate(-2em, 0);
}

.navbar-img {
    width: 250px;
    padding: -10px;
    margin-top: -15px;
}

.nav-link {
  margin-top: -10px;
  font-size: 18px;
  color: #000 !important;
  transition: .5s !important;
}
.nav-link :hover {
  font-size: 22px;
  background-color: #259946;
  color: #fff !important;
  padding: 4px;
  border-radius: 4px !important;
}

.show ul {
  background-color: #259946;
}

.nav-link {
  color: #000 !important;
}

.show ul > li {
  color: #000;
  text-align: center;
}

@media (max-width: 980px) {
  .navbar-img {
    width: 260px;
  }
  .nav-link {
    display: flex;
    justify-content: center;
    margin: 0;
  }
  .nav-link:hover {
    background-color: #000;
  }
}

@media (max-width: 580px) {
  .navbar-img {
    width: 200px;
  }
  .nav-link:hover {
    background-color: #000;
  }
}
</style>
