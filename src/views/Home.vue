<template>
  <div id="home" v-cloak>
    <brand id="brand" />
    <about id="about" />
    <portfolio id="portfolio" />
    <contacts id="contact" />
    <bottom-page id="bottom-page" />
  </div>
</template>

<script>
import About from '../components/About.vue'
import Brand from '../components/Brand.vue'
import Contacts from '../components/Contacts.vue'
import Portfolio from '../components/Portfolio.vue'
import BottomPage from '../components/BottomPage.vue'

export default {
  name: 'Home',
  components: {
    Brand,
    About,
    Portfolio,
    Contacts,
    BottomPage
  },
  data() {
    return {
      
    }
  }
}
</script>

<style>
* {
  transition: .5s;
}

[v-cloak] {
  display: none;
}
html {
  scroll-behavior: smooth;
  scroll-padding-top: 60px;
}
#home {
  scroll-margin-top: 10px;
}
#section-header h1 {
    font-weight: bold;
    display: flex;
    justify-content: center;
}
</style>
