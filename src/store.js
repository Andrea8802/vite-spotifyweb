import { reactive } from 'vue';
export const store = reactive({
    topTracksAPI: "https://shazam.p.rapidapi.com/charts/track",
    topTracks: []

})
