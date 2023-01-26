<template>
<div class="main" v-if="!loading">
  <div class="main__weather weather" v-for="weather, index in allWeather" :key="weather.location.name + index" >
    <div class="weather__card card" :class="{
      overcast: weather.current.condition.text === 'Overcast',
      clear: weather.current.condition.text === 'Clear',
      rain: weather.current.condition.text.includes('rain')
      }">
      <div class="card__main">
        <div class="card__main-info">
          <h1 class="card__main-name"> {{ weather.location.name }} </h1>
          <img :src="weather.current.condition.icon" width="70px" height="70px" alt="cloud" class="card__main-img">
        </div>
        <p class="card__main-country">{{ currentDate }}</p>
        <p class="card__info-temprature"> {{ weather.current.condition.text }}</p>
        <p class="card__info-temprature"> Temperature: {{ weather.current.temp_c }}°C</p>
      </div>
      <div class="card__info">
        <p class="card__info-temprature"> Feels Like: {{ weather.current.feelslike_c }}°C</p>
        <p class="card__info-wind"> Wind: {{ weather.current.wind_kph }} km/h</p>
        <p class="card__info-cloud"> Cloud: {{ weather.current.cloud }} octants</p>
        <p class="card__info-humidity"> Humidity: {{ weather.current.humidity }} %</p>
      </div>
    </div>
  </div>
</div>
</template>

<script>

export default {
  data: () => ({
    loading: true,
    allWeather: [],
    date: null
  }),

  async created() {
    await this.$store.dispatch('initWeather')
  },

  mounted() {
    this.allWeather = this.$store.getters.getWeather
    this.loading = false
  },
  
  computed: {
    currentDate() {
      return new Date().toLocaleString('eng',
      {
        day: 'numeric',
        month: 'long',
        year: 'numeric'
      });
    }
  }

}
</script>

<style scoped>

.weather {
  font-family: 'Secular One', sans-serif;
  max-width: 1440px;
  margin: 10px auto 30px;
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.card {
  border-radius: 10px;
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  width: 80%;
  color: white;
  padding: 70px 40px;
  background: -webkit-linear-gradient(45deg, rgb(22, 71, 150), rgb(123, 209, 255));
  background: -moz-linear-gradient(45deg, rgb(22, 71, 150), rgb(123, 209, 255));
  background: linear-gradient(45deg, rgb(22, 71, 150), rgb(123, 209, 255));
}

.card__info {
  display: flex;
  gap: 20px;
  flex-direction: column;
  justify-content: flex-end;
  font-size: 24px;
  padding: 0 30px;
}

.card__main {
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  gap: 20px;
  padding: 0 30px;
  font-size: 24px;
}

.card__main-info {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 20px;
}

.card__main-country {
  font-size: 20px;
  font-weight: 300;
}

.overcast {
  background: -webkit-linear-gradient(45deg, rgb(7, 41, 97), rgb(5, 92, 139));
  background: -moz-linear-gradient(45deg, rgb(7, 41, 97), rgb(5, 92, 139));
  background: linear-gradient(45deg, rgb(7, 41, 97), rgb(5, 92, 139));
}

.clear {
  background: -webkit-linear-gradient(45deg, rgb(11, 63, 146), rgb(7, 124, 187));
  background: -moz-linear-gradient(45deg, rgb(11, 63, 146), rgb(7, 124, 187));
  background: linear-gradient(45deg, rgb(11, 63, 146), rgb(7, 124, 187));
}

.rain {
  background: -webkit-linear-gradient(45deg, rgb(4, 22, 51), rgb(5, 92, 139));
  background: -moz-linear-gradient(45deg, rgb(4, 22, 51), rgb(5, 92, 139));
  background: linear-gradient(45deg, rgb(4, 22, 51), rgb(5, 92, 139));
}

.card__main-img {
  transform: scale(-1, 1)
}

</style>