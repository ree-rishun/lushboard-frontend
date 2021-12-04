<template>
  <footer>
    <h3>新しいつながりを見つけよう</h3>
    <ul>
      <li><router-link to="/">グループを探す</router-link></li>
      <li><router-link to="/">イベントを探す</router-link></li>
      <li><router-link to="/">友達を見つける</router-link></li>
    </ul>
    <h3>自分を磨こう</h3>
    <ul>
      <li><router-link to="/">ダッシュボード</router-link></li>
    </ul>
    <img src="../assets/img/logo_w.svg" alt="LUSHBOARD" class="logo" />
  </footer>
</template>

<script>
  export default {
    name: 'Footer'
  }
</script>

<style scoped lang="scss">
  footer {
    display: block;
    background-color: #333333;
    h3 {
      font-weight: bold;
      color: #FFFFFF;
      font-size: 20px;
      padding: 25px 0 0 5vw;
    }
    ul {
      padding: 0 0 0 5vw;
      li {
        display: inline-block;
        width: auto;
        margin: 10px 20px 0 0;
        font-size: 18px;
        color: #E5E5E5;

        :link, :visited {
          color: #E5E5E5;
          text-decoration: none;
        }
      }
    }
    .logo {
      display: block;
      height: 60px;
      width: auto;
      margin: 20px auto 0;
    }
  }
</style>