export default {
  async weatherMoscow() {
    try {
      const url = this.createUrl('Moscow')
      let response = await fetch(url)
      .then(response => response.json())
      return response
    } catch(e) {
      console.error(e)
    }
  },
  async weatherPodolsk() {
    try {
      const url = this.createUrl('Podolsk')
      let response = await fetch(url)
      .then(response => response.json())
      return response
    } catch(e) {
      console.error(e)
    }
  },
  async weatherLondon() {
    try {
      const url = this.createUrl('London')
      let response = await fetch(url)
      .then(response => response.json())
      return response
    } catch(e) {
      console.error(e)
    }
  },
  async weatherEgypt() {
    try {
      const url = this.createUrl('Egypt')
      let response = await fetch(url)
      .then(response => response.json())
      return response
    } catch(e) {
      console.error(e)
    }
  },
  async weatherNewYork() {
    try {
      const url = this.createUrl('New-York')
      let response = await fetch(url)
      .then(response => response.json())
      return response
    } catch(e) {
      console.error(e)
    }
  },
  async weatherDubai() {
    try {
      const url = this.createUrl('Dubai')
      let response = await fetch(url)
      .then(response => response.json())
      return response
    } catch(e) {
      console.error(e)
    }
  },
  async weatherHawaii() {
    try {
      const url = this.createUrl('Hawaii')
      let response = await fetch(url)
      .then(response => response.json())
      return response
    } catch(e) {
      console.error(e)
    }
  },

  createUrl(city) {
    const key = 'ba6d5b74358a4a649d6205952232601'
    const baseUrl = `http://api.weatherapi.com/v1/current.json`
    return `${baseUrl}?key=${key}&q=${city}&aqi=yes`
  }
}

