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

  created() {
    clearInterval(store.tempoTraccia)
    // Chiamate api per traccie e artisti più popolari
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

      // In caso di errore, mostrare l'avviso sul loader e non mostrare la pagina
      this.loadingError = true;

    }).finally(() => {
      // Mostrare la pagina se la chiamata va a buon fine
      if (this.loadingError) return;
      this.pageLoaded = true;
      console.log(store.topTracks);
      store.trackPreview.title = store.topTracks[0].title;
      store.trackPreview.artist = store.topTracks[0].subtitle;
      store.trackPreview.img = store.topTracks[0].images.coverarthq;
      store.audioTraccia = new Audio(store.topTracks[0].hub.actions[1].uri)

      store.audioTraccia.addEventListener("loadeddata", () => {
        store.durataTraccia = Math.ceil(store.audioTraccia.duration);
        if (store.durataTraccia >= 60) {
          let minuti = 1
          let secondi = store.durataTraccia - 60
          store.durataTraccia = `0${minuti}:${secondi}`
        }
      });
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
