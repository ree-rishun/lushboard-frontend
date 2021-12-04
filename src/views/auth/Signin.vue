<template>
  <div class="signin">
    <h2>SIGNIN</h2>

    <input
      class=""
      type="text"
      v-model="user.id"
      placeholder="IDを入力してください">

    <input
      class=""
      type="password"
      v-model="user.password"
      placeholder="パスワードを入力してください">

    <p class="annotation">
      会員でない方は<router-link to="/signup">新規登録</router-link>
    </p>

    <button
      class="nomal_button"
      @click="signinSubmit">
      サインイン
    </button>
  </div>
</template>

<script>
  export default {
    name: 'signin',
    data () {
      return {
        user: {
          id: '',
          password: '',
        }
      }
    },
    methods: {
      signinSubmit () {
        // TODO: サインイン処理を追加
      }
    }
  }
</script>

<style scoped lang="scss">
  .signin {
    min-height: 60vh;
  }

  h2 {
    text-align: center;
    font-weight: bold;
    font-size: 24px;
    margin-bottom: 30px;
  }

  input[type=text] {
    width: 76%;
    padding: 0 2%;
    height: 40px;
    margin: 30px 0 0 10%;
    border-radius: 5px;
    font-weight: bolder;
  }
  
  .annotation {
    width: 80%;
    margin: 20px 0 0 10%;

    :link, :visited {
      color: #FF6F00;
    }
  }
  
  .nomal_button {
    display: block;
    width: 80%;
    height: 40px;
    margin: 60px 0 0 10%;
    background-color: #FF6F00;
    border-radius: 10px;
    font-size: 20px;
    color: #FFFFFF;
    font-weight: bold;
    outline: none;
    border: none;
  }
</style>