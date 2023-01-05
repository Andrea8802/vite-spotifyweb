import { reactive } from 'vue';
export const store = reactive({
    topTracks: [],
    traccieTrovate: [],
    artistiTrovati: [],

    ricercaUtente: "",
    elementoCercato: "",
    ricercaEffettuata: false,
    ricercaAvviata: false,

    erroreRicerca: false
})
