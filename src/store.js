import { reactive } from 'vue';
export const store = reactive({
    // Array per risposte API
    topTracks: [],
    traccieTrovate: [],
    artistiTrovati: [],

    // Ricerca Utente
    ricercaUtente: "",  // v-model per input text
    elementoCercato: "",    // variabile per salvare la ricerca
    ricercaEffettuata: false, // Flag ricerca finita
    ricercaInCorso: false, // Flag ricerca in corso

    // Gestione errori
    erroreRicerca: false, // Flag errore ricerca elemento
    loadingError: false, // Flag errore cariamento app

    // Info preview tracce
    trackPreview: {
        title: "",
        artist: "",
        img: "",
        trackClicked: false // Gestione tasto play
    },

    audioTraccia: "",
    timeTrack: "00:00",
    secondsTrack: 0,
    minuteTrack: 0,

    conteggioTempo: (() => {
        if (store.secondsTrack === 59) {
            store.minuteTrack++;
            store.secondsTrack = 0;
        } else {
            store.secondsTrack++
        }

        if (store.secondsTrack >= 10) {
            store.timeTrack = `0${store.minuteTrack}:${store.secondsTrack}`
        } else if (store.minuteTrack >= 10) {
            store.timeTrack = `${store.minuteTrack}:0${store.secondsTrack}`
        } else {
            store.timeTrack = `0${store.minuteTrack}:0${store.secondsTrack}`
        }
    }),

    playPausa: "",

    // Links del left menù
    linksLeftMenu: [
        {
            name: "Home",
            img: "home.svg",
            link: "#",
            active: true
        },

        {
            name: "Cerca",
            img: "search.svg",
            link: "#",
            active: false
        },

        {
            name: "La Tua Libreria",
            img: "libreria.svg",
            link: "#",
            active: false
        }
    ]
})
