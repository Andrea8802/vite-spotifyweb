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
            if (store.trackPreview.trackClicked) {
                store.trackPreview.trackClicked = false;
            } else {
                store.trackPreview.trackClicked = true;
            }
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
            <fa icon="fa-regular fa-circle-pause" class="play" v-if="store.trackPreview.trackClicked"
                @click="clickPause" />
            <fa icon="fa-regular fa-circle-play" class="play" v-else @click="clickPause" />
            <fa icon="fa-solid fa-forward-step" />
            <fa icon="fa-solid fa-rotate-right" />
        </div>
        <br>

        <!-- Sezione barra temporale -->
        <div class="bar-section">
            <span>
                0:25
            </span>

            <!-- Barra -->
            <div class="bar">

                <!-- Barra onHover -->
                <div class="light-bar">
                    <div class="point"></div>
                </div>
            </div>
            <span>
                4:35
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
                width: 20%;
            }


        }
    }
}
</style>
