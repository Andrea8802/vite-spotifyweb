import { reactive } from 'vue';
export const store = reactive({
    topTracks: [],
    traccieTrovate: [],
    artistiTrovati: [],

    ricercaUtente: "",
    elementoCercato: "",
    ricercaEffettuata: false,
    ricercaAvviata: false,

    erroreRicerca: false,
    loadingError: false,

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
