<template>
  <div id="app">
    <Navigation/>
    <router-view/>
    <Footer/>
  </div>
</template>

<style lang="scss">
  @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+JP&display=swap');
  * {
    font-family: 'Noto Sans JP', sans-serif;
  }
</style>
<script>
  import Navigation from './components/Navigation'
  import Footer from './components/Footer'
  export default {
    components: {Footer, Navigation}
  }
</script>