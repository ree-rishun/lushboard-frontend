<template>
  <div class="edit">
    <h2>プロフィール編集</h2>

    <input
      class=""
      type="text"
      v-model="user.name"
      placeholder="名前を入力してください">


    <textarea
      class=""
      v-model="user.description"
      placeholder="プロフィール文を入力してください" />

    <label class="icon_input">
      <input
        type="file">
    </label>

    <button
      class="nomal_button"
      @click="updateProfile">
      更新
    </button>

    <button
      class="cancel_button"
      @click="$router.push('/')">
      キャンセル
    </button>
  </div>
</template>

<script>
  export default {
    name: 'Edit',
    data () {
      return {
        user: {},
      }
    },
    methods: {
      updateProfile () {
        // TODO: 更新処理を追加

        // 更新完了後ホームへ戻る
        this.$router.push('/')
      }
    },
    mounted () {
      // TODO: 現状のパラメータ取得処理を追加
    }
  }
</script>

<style scoped lang="scss">
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

  .icon_input {
    margin-left: 10%;
  }

  textarea {
    width: 76%;
    padding: 0 2%;
    height: 120px;
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

  .cancel_button {
    display: block;
    width: 80%;
    height: 40px;
    margin: 20px 0 0 10%;
    background-color: #cccccc;
    border-radius: 10px;
    font-size: 20px;
    color: #FFFFFF;
    font-weight: bold;
    outline: none;
    border: none;
  }
</style>