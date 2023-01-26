<template>
<div class="app">
  <weather-info/>
</div>
</template>

<script>

import WeatherInfo from '@/components/WeatherInfo';

export default {
  name: 'App',
  components: {
    WeatherInfo
  },

};
</script>

<style>
body {
  background-color: rgb(216, 216, 216);
}

</style>
