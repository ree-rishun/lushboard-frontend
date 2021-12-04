<template>
  <div id="app">
    <Navigation/>
    <router-view/>
  </div>
</template>

<style lang="scss">

</style>
<script>
  import Navigation from './components/Navigation'
  export default {
    components: {Navigation}
  }
</script>