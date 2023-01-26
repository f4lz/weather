import API from '@/share/api';

export default {
  state: {
    weather:[]
  },
  getters: {
    getWeather: (state) =>  {
      return state.weather
    }
  },
  mutations: {
    UPDATE_WEATHER(state, payload) {
      state.weather.push(payload)
    }
  },
  actions: {
    initWeather({dispatch}) {
      dispatch('weatherMoscow')
      dispatch('weatherPodolsk')
      dispatch('weatherLondon')
      dispatch('weatherEgypt')
      dispatch('weatherNewYork')
      dispatch('weatherDubai')
      dispatch('weatherHawaii')
    },
    async weatherMoscow({commit}) {
      const data = await API.weatherMoscow()
      commit('UPDATE_WEATHER', data)
    },
    async weatherPodolsk({commit}) {
      const data = await API.weatherPodolsk()
      commit('UPDATE_WEATHER', data)
    },
    async weatherLondon({commit}) {
      const data = await API.weatherLondon()
      commit('UPDATE_WEATHER', data)
    },
    async weatherEgypt({commit}) {
      const data = await API.weatherEgypt()
      commit('UPDATE_WEATHER', data)
    },
    async weatherNewYork({commit}) {
      const data = await API.weatherNewYork()
      commit('UPDATE_WEATHER', data)
    },
    async weatherDubai({commit}) {
      const data = await API.weatherDubai()
      commit('UPDATE_WEATHER', data)
    },
    async weatherHawaii({commit}) {
      const data = await API.weatherHawaii()
      commit('UPDATE_WEATHER', data)
    }
  },

}