<script>
import { store } from '../../../store'
export default {
    name: "CardTrack",
    props: ["data"],

    data() {
        return {
            store
        }
    },

    methods: {

        // Funzione per apertura traccia al click (ricercata)
        openMusicSearched(info) {

            // Azzeramenti per cambio traccia
            store.azzeraInfo()
            clearInterval(store.playPausa);

            // Caricamento dati traccia selezionata
            store.trackPreview.title = info.track.title;
            store.trackPreview.artist = info.track.subtitle;
            store.trackPreview.img = info.track.images.coverarthq;
            store.trackStarted = true;

            // Caricamento audio
            store.audioTraccia = new Audio(info.track.hub.actions[1].uri)

            // Caricamento durtata traccia
            store.audioTraccia.addEventListener("loadeddata", () => {
                store.durataTraccia = Math.ceil(store.audioTraccia.duration);
                if (store.durataTraccia >= 60) {
                    let minuti = 1
                    let secondi = store.durataTraccia - 60
                    store.durataTraccia = `0${minuti}:${secondi}`
                }

                // Avvio traccia e aggiornamento tempo
                store.audioTraccia.play()
                store.playPausa = setInterval(store.conteggioTempo, 1000)

            });



        },
        // Funzione per apertura traccia al click (top)
        openMusicTop(info) {

            // Azzeramenti per cambio traccia
            store.azzeraInfo()
            clearInterval(store.playPausa);

            // Caricamento dati traccia selezionata
            store.trackPreview.title = info.title;
            store.trackPreview.artist = info.subtitle;
            store.trackPreview.img = info.images.coverarthq;
            store.trackStarted = true;

            // Caricamento audio
            store.audioTraccia = new Audio(info.hub.actions[1].uri);

            // Caricamento durtata traccia
            store.audioTraccia.addEventListener("loadeddata", () => {
                store.durataTraccia = Math.ceil(store.audioTraccia.duration);
                if (store.durataTraccia >= 60) {
                    let minuti = 1
                    let secondi = store.durataTraccia - 60
                    store.durataTraccia = `0${minuti}:${secondi}`
                }

                // Avvio traccia e aggiornamento tempo
                store.audioTraccia.play();
                store.playPausa = setInterval(store.conteggioTempo, 1000)
            });
        }
    }
}

</script>

<template>
    <!-- Card ricercate -->
    <div class="card" v-for="info in data" @click="openMusicSearched(info)" v-if="store.ricercaEffettuata">

        <!-- Play Hover -->
        <div class="play-hover">
            <div class="icon">
                <fa icon="fa-regular fa-circle-play" />
            </div>
        </div>

        <!-- Immagine sostituiva in caso di copertina mancante -->
        <img src="/src/assets/img/track-null.svg" :alt="info.track.title" v-if="info.track.images == null" class="null">

        <!-- Copertina -->
        <img :src="info.track.images.coverarthq" :alt="info.track.title" v-else="">

        <!-- Titolo -->
        <h6>
            {{ info.track.title }}
        </h6>

        <!-- Sottotitolo/nome artisti -->
        <div class="sub-title">
            {{ info.track.subtitle }}
        </div>
    </div>



    <!-- Card traccie popolari -->
    <div class="card" v-for="info in data" @click="openMusicTop(info)" v-else>

        <!-- Play Hover -->
        <div class="play-hover">
            <div class="icon">
                <fa icon="fa-regular fa-circle-play" />
            </div>
        </div>

        <!-- Immagine sostituiva in caso di copertina mancante -->
        <img src="/src/assets/img/track-null.svg" :alt="info.title" v-if="info.images == null" class="null">

        <!-- Copertina -->
        <img :src="info.images.coverarthq" :alt="info.title" v-else="">

        <!-- Titolo -->
        <h6>
            {{ info.title }}
        </h6>

        <!-- Sottotitolo/nome artisti -->
        <div class="sub-title">
            {{ info.subtitle }}
        </div>
    </div>
</template>

<style lang="scss" scoped>
.card {
    width: 180px;
    height: 280px;
    text-align: center;
    position: relative;
    cursor: pointer;

    &:hover .play-hover {
        display: flex;

    }

    &:hover .null {
        opacity: 0.2;
    }

    img {
        width: 100%;
    }

    .null {
        filter: invert(1);
    }

    h6 {
        color: white;
        font-weight: bold;
        font-size: 16px;
        margin-top: 10px;
    }

    .sub-title {
        color: gray;
        font-weight: bold;
        font-size: 12px;
        margin-top: 5px;

        &:hover {
            text-decoration: underline;
        }
    }

    .play-hover {
        width: 100%;
        height: 180px;
        background-color: rgba(0, 0, 0, 0.5);
        opacity: 1;
        transition: all 1s ease;
        position: absolute;
        top: 0px;
        display: none;
        justify-content: center;
        align-items: center;

        .icon {
            font-size: 60px;
            color: white;
        }

    }
}
</style>