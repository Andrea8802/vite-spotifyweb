<script>
import AppHeader from './components/AppHeader.vue'
import AppMain from './components/Main/AppMain.vue'
import AppFooter from './components/AppFooter.vue';
import axios from 'axios'
import { store } from './store'

export default {
  name: "App",

  components: {
    AppHeader,
    AppMain,
    AppFooter
  },

  mounted() {
    const options = {
      method: 'GET',
      url: store.topTracksAPI,
      params: { locale: 'en-US', pageSize: '20', startFrom: '0' },
      headers: {
        'X-RapidAPI-Key': 'b85ad614f4mshf86bd9a5ac77e66p15e702jsn25b99193398b',
        'X-RapidAPI-Host': 'shazam.p.rapidapi.com'
      }
    };

    axios.request(options).then(response => {
      store.topTracks = response.data.tracks
      console.log(response.data.tracks);
    }).catch(error => {
      console.error(error);
    })
  }
}
</script>

<template>
  <AppHeader />
  <AppMain />
  <AppFooter />


</template>

<style lang="scss">
@use './styles/general.scss' as *;
</style>
