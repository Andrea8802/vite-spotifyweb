import { reactive } from 'vue';
export const store = reactive({
    // Array per risposte API
    topTracks: [],
    traccieTrovate: [],
    artistiTrovati: [],

    // Ricerca Utente
    ricercaUtente: "", // v-model per input text
    elementoCercato: "", // variabile per salvare la ricerca
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
    },


    playPausa: "", // Gestione start o stop del setInterval della traccia musicale
    audioTraccia: "", // Variabile che contiene l'audio della traccia

    timeTrack: "00:00", // Variabile per mostrare il tempo trascorso con la traccia
    minuteTrack: 0, // Variabile per gestire i minuti
    secondsTrack: 0, // Variabile per gestire i secondi

    barSize: 0, // Variabile per gestire la barra temporale
    resetTrack: false, // Flag per gestire il reset della traccia
    trackStarted: false, // Gestione tasto play

    conteggioTempo: (() => {
        let bar = document.querySelector(".foot.center .light-bar");

        // Se la traccia arriva alla fine o se viene resettata
        if (store.secondsTrack === 30 && store.minuteTrack === 1 || store.resetTrack) {
            clearInterval(store.playPausa);
            store.audioTraccia.pause();
            store.secondsTrack, store.minuteTrack, store.barSize = 0;
            store.timeTrack = "00:00";
            bar.style.transition = "all 0s linear"
            bar.style.width = store.barSize + "%";
            store.trackStarted = false;
            return;
        }
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

        // Gestione barra temporale traccia
        store.barSize += 1.11;
        bar.style.width = store.barSize + "%";
        bar.style.transition = "all 1s linear"

    }),


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
