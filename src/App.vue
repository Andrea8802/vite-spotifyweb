<script>
import AppHeader from './components/AppHeader.vue'
import AppMain from './components/Main/AppMain.vue'
import AppFooter from './components/AppFooter.vue';
import Loader from './components/Loader.vue';

import axios from 'axios'
import { store } from './store'

export default {
  name: "App",

  data() {
    return {
      store,
      pageLoaded: "",
      loadingError: false
    }
  },

  components: {
    AppHeader,
    AppMain,
    AppFooter,
    Loader
  },

  mounted() {
    const options = {
      method: 'GET',
      url: 'https://shazam.p.rapidapi.com/charts/track',
      params: { locale: 'en-US', pageSize: '10', startFrom: '0' },
      headers: {
        'X-RapidAPI-Key': 'b85ad614f4mshf86bd9a5ac77e66p15e702jsn25b99193398b',
        'X-RapidAPI-Host': 'shazam.p.rapidapi.com'
      }
    };

    axios.request(options).then(response => {
      store.topTracks = response.data.tracks

    }).catch(error => {
      console.error(error);
      this.loadingError = true;

    }).finally(() => {
      if (this.loadingError) return;
      this.pageLoaded = true;
    })
  }
}
</script>

<template>
  <div v-if="pageLoaded">
    <AppHeader />
    <AppMain />
    <AppFooter />
  </div>

  <Loader :error="loadingError" v-else />

</template>

<style lang="scss">
@use './styles/general.scss' as *;
</style>
