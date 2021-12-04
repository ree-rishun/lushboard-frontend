<template>
  <div class="list">
    <div class="category">
      <ul>
        <li
          :class="$route.query.category ? '' : 'selected'"
          @click="$router.push('/teams')">
          全て
        </li>
        <li
          v-for="category in categories"
          :key="category.id"
          :class="category.id === $route.query.category ? 'selected' : ''"
          @click="$router.push('/teams?category=' + category.id)">
          {{ category.name }}
        </li>
      </ul>
    </div>
    <div class="teams">
      <div
        v-for="team in teams"
        :key="team.id"
        class="team">
        <img
          class="icon"
          :src="team.icon"
          :alt="team.name">
        <h3>{{ team.name }}</h3>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'list',
    data () {
      return {
        teams: [],
        categories: [],
        category_id: '',
      }
    },
    mounted() {
      this.category_id = this.$route.query.category
      console.log(this.category_id)

      // TODO: データの取得処理
      for (let i = 0; i < 10; i++) {
        this.teams.push({
          icon: 'https://pbs.twimg.com/media/FFiBoQSVgAEIlta.jpg',
          name: '東京野球サークル',
          id: 'test' + i,
        })
      }

      // TODO: カテゴリ一覧の取得
      this.categories = [
        {
          id: '1',
          name: '野球',
        },
        {
          id: '2',
          name: 'サッカー',
        },
        {
          id: '3',
          name: 'バスケ',
        },
        {
          id: '4',
          name: 'サイクリング',
        },
        {
          id: '5',
          name: 'ボルダリング',
        },
        {
          id: '6',
          name: 'スノーボード',
        },
      ]
    },
  }
</script>

<style scoped lang="scss">
  .category {
    width: 100%;
    overflow-x: scroll;
    -ms-overflow-style: none;
    scrollbar-width: none;
    &::-webkit-scrollbar {
      display:none;
    }
    ul {
      display: block;
      width: 200%;
      border-bottom: solid #cccccc 1px;
      li {
        display: inline-block;
        padding: 5px 10px;
        margin: 0 10px;
        font-weight: bold;
        color: #999999;

        &.selected {
          border-bottom: solid 2px #333333;
          color: #333333;
        }
      }
    }
  }

  .teams {
    margin: 30px 0 0 10%;
    .team {
      margin-bottom: 20px;
      img {
        display: inline-block;
        width: 65px;
        height: 65px;
        border-radius: 33px;
      }
      h3 {
        display: inline-block;
        height: 65px;
        line-height: 65px;
        width: calc(90% - 65px);
        margin-left: 5%;
        vertical-align: top;
      }
    }
  }
</style>