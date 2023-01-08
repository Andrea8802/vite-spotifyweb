<script>
import { store } from '../../store'
export default {
    name: "CenterFooter",
    data() {
        return {
            store
        }
    },
    methods: {
        clickPause() {

            // Gestione tasto play/pausa
            if (store.trackStarted) {
                store.trackStarted = false;
                store.audioTraccia.pause();
                clearInterval(store.playPausa);

            } else {
                store.trackStarted = true;
                store.audioTraccia.play();
                store.playPausa = setInterval(store.conteggioTempo, 1000);

            }
        },

        // Funzione per far ripartire la musica
        onClickReset() {
            store.resetTrack = true;
            document.getElementById("btn-reset").classList.add("track-reset")

            setTimeout(() => document.getElementById("btn-reset").classList.remove("track-reset"), 500)
        }
    }

}
</script>

<template>
    <div class="foot center">

        <!-- Icone per la gestione della traccia -->
        <div class="icon">
            <fa icon="fa-solid fa-shuffle" />
            <fa icon="fa-solid fa-backward-step" />
            <fa icon="fa-regular fa-circle-pause" class="play" v-if="store.trackStarted" @click="clickPause" />
            <fa icon="fa-regular fa-circle-play" class="play" v-else @click="clickPause" />
            <fa icon="fa-solid fa-forward-step" />
            <fa icon="fa-solid fa-rotate-right" @click="onClickReset" id="btn-reset" />
        </div>
        <br>

        <!-- Sezione barra temporale -->
        <div class="bar-section">
            <span>
                {{ store.timeTrack }}
            </span>

            <!-- Barra -->
            <div class="bar">

                <!-- Barra tempo attuale -->
                <div class="light-bar">
                    <div class="point"></div>
                </div>
            </div>

            <!-- Durata traccia -->
            <span>
                {{ store.durataTraccia }}
            </span>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@use '../../styles/partials/mixins' as *;
@include footerGeneralRules;
@include barFooter;


.foot.center {
    width: 50%;
    height: 100%;
    flex-direction: column;
    justify-content: center;
    gap: 5px;

    .icon {
        color: white;
        font-size: 20px;
        @include d-flex(flex-start, center);
        gap: 20px;
        height: 20%;
        cursor: pointer;
    }

    .play {
        font-size: 32px;
        width: 40px;
        cursor: pointer;
        transition: all 0.2s ease;

        &:hover {
            font-size: 36px;
        }
    }

    .track-reset {
        animation: rotate 0.5s linear reverse;
    }

    @keyframes rotate {
        0% {
            transform: rotate(360deg);
        }
    }

    .bar-section {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 20px;
        color: lightgray;
        font-size: 10px;
        font-weight: bold;
        height: 20%;
        width: 100%;

        .bar {
            width: 60%;

            .light-bar {
                width: 0%;
            }


        }
    }
}
</style>
