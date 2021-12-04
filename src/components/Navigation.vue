<template>
  <nav>
    <img src="../assets/img/logo.svg" alt="LUSHBOARD" class="logo" />
  </nav>
</template>

<script>
  export default {
    name: 'Navigation'
  }
</script>

<style scoped lang="scss">
  nav {
    display: block;
    height: 80px;
    .logo {
      display: block;
      height: 60px;
      width: auto;
      margin: 0 auto;
    }
  }
</style>