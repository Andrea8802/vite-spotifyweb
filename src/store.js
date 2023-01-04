import { reactive } from 'vue';
export const store = reactive({
    topAPI: "https://shazam.p.rapidapi.com/charts/track",
    topTracks: [],
    apiLoaded: false
})
