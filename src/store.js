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

    trackPreview: {
        title: "",
        artist: "",
        img: "",
        trackClicked: false
    },

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
