<template>
  <div class="dashboard">
    <img src="https://pbs.twimg.com/profile_images/787511655416549376/t-xZBVmJ_400x400.jpg" alt="アイコン" class="icon">
    <h1>ReERishun</h1>
    <p class="description">
      サッカーが好きで学生の頃からサッカークラブに入っていました。今もフットサルを毎週水曜日にやっています！
    </p>

    <button
      class="edit_button"
      @click="$router.push('/edit')">
      プロフィール編集
    </button>

    <div class="cards">
      <div class="continue">
        <div class="card_icon">
          <img src="../../assets/img/directions_run_white_24dp.svg">
        </div>
        <div class="card_description">
          <h3>連続運動日</h3>
          <p>20<span>DAYS</span></p>
        </div>
      </div>
      <div class="rank">
        <div class="card_icon">
          <img src="../../assets/img/whatshot_white_24dp.svg">
        </div>
        <div class="card_description">
          <h3>運動ランク</h3>
          <p><span>RANK </span>A</p>
        </div>
      </div>
    </div>

    <h2>活動状況</h2>
    <ul class="glass">
      <li
        v-for="(week_glass, i) in glasses"
        :key="i">
        <span
          v-for="(glass, i) in week_glass"
          :key="i"
          :style="'background-color: ' + glass_color[glass]">
        </span>
      </li>
    </ul>

    <h2>所属チーム</h2>
    <div class="teams">
      <div
        class="team"
        v-for="team in teams"
        :key="team.id">
        <img :src="team.icon" :alt="team.name">
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {
      glasses: [],
      glass_color: ['#E5E5E5', '#A5FCAB', '#2FF23C', '#10BE1C'],
      teams: [
        {
          name: 'チームA',
          icon: 'https://pbs.twimg.com/media/FFiBoQSVgAEIlta.jpg',
          id: 'abcd',
        },
        {
          name: 'チームB',
          icon: 'https://pbs.twimg.com/media/FFiBoQSVgAEIlta.jpg',
          id: 'abcd',
        },
      ]
    }
  },
  mounted() {
    let glass_box = []
    for (let i = 0; i < 84; i++) {
      glass_box.push(0)
      if (glass_box.length === 7) {
        this.glasses.push(glass_box)
        glass_box = []
      }
    }
  }
}
</script>

<style scoped lang="scss">
  .dashboard {
    .icon {
      display: block;
      margin: 20px auto 10px;
      width: 140px;
      height: 140px;
      border-radius: 70px;
    }
    h1 {
      font-weight: bold;
      font-size: 20px;
      text-align: center;
    }
    .description {
      width: 80%;
      margin: 10px 0 0 10%;
    }
    .edit_button {
      display: block;
      width: 80%;
      height: 40px;
      margin: 20px 0 0 10%;
      background-color: #FF6F00;
      border-radius: 10px;
      font-size: 20px;
      color: #FFFFFF;
      font-weight: bold;
      outline: none;
      border: none;
    }

    h2 {
      font-size: 20px;
      font-weight: bold;
      margin: 20px 0 10px 10%;
    }

    .cards {
      display: block;
      text-align: center;
      margin-top: 20px;
      .continue, .rank {
        display: inline-block;
        width: 40%;
        padding: 10px 0;
        border-radius: 10px;
        color: #333333;
        .card_description {
          display: inline-block;
          margin-left: 10px;
          vertical-align: top;
          h3 {
            font-weight: bold;
            font-size: 13px;
            line-height: 13px;
            height: 13px;
          }
          p {
            font-weight: bold;
            font-size: 30px;
            line-height: 30px;
            height: 30px;
            span {
              font-size: 14px;
            }
          }
        }
        .card_icon {
          display: inline-block;
          width: 45px;
          height: 45px;
          border-radius: 10px;
          background-color: #333333;
          vertical-align: top;
          img {
            display: block;
            margin: 10% auto;
            height: 80%;
          }
        }
      }
      .continue {
        background-color: #CCD6FF;
        margin-right: 10px;
      }
      .rank {
        background-color: #FFBE8D;
      }
    }
    .glass {
      display: block;
      text-align: center;
      width: 100%;
      li {
        display: inline-block;
        width: 20px;
        vertical-align: top;
        margin-right: 5px;
        span {
          display: inline-block;
          width: 20px;
          height: 20px;
          border-radius: 5px;
        }
      }
    }
    .teams {
      margin-left: 10%;
      .team {
        display: inline-block;
        margin-right: 15px;
        img {
          width: 65px;
          height: 65px;
          border-radius: 33px;
        }
      }
    }
  }
</style>
