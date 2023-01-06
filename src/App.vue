<script>
import AppHeader from './components/AppHeader.vue'
import AppMain from './components/Main/AppMain.vue'
import AppFooter from './components/Footer/AppFooter.vue';
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
        'X-RapidAPI-Key': '644a0be476msh5287f3c17179483p17fb1cjsn8cd747d2fc3f',
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
