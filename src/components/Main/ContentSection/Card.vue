<script>
import { store } from '../../../store'
export default {
    name: "Card",
    props: ["data"],

    data() {
        return {
            store
        }
    },

    methods: {
        openMusic(link) {
            window.open(link);
        }
    }

}

</script>

<template>

    <!-- Card ricercate -->
    <div class="card" v-for="info in data" @click="openMusic(info.track.hub.actions[1].uri)"
        v-if="store.ricercaEffettuata">
        <div class="play-hover">
            <div class="icon">
                <fa icon="fa-regular fa-circle-play" />
            </div>
        </div>

        <img src="../../../assets/img/track-null.svg" :alt="info.track.title" v-if="info.track.images == null"
            class="null">
        <img :src="info.track.images.coverarthq" :alt="info.track.title" v-else="">

        <h6>
            {{ info.track.title }}
        </h6>

        <div class="sub-title">
            {{ info.track.subtitle }}
        </div>
    </div>



    <!-- Card traccie popolari -->
    <div class="card" v-for="info in data" @click="openMusic(info.hub.actions[1].uri)" v-else="store.ricercaEffettuata">
        <div class="play-hover">
            <div class="icon">
                <fa icon="fa-regular fa-circle-play" />
            </div>
        </div>

        <img src="../../../assets/img/track-null.svg" :alt="info.title" v-if="info.images == null" class="null">
        <img :src="info.images.coverarthq" :alt="info.title" v-else="">

        <h6>
            {{ info.title }}
        </h6>

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