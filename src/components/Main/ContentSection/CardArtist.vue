<script>
import { store } from '../../../store'

export default {
    name: "CardArtist",
    props: ["data"],

    data() {
        return {
            store
        }
    },

    methods: {
        openArtist(link) {
            window.open(link);
        },

        searchArtist(nome) {
            window.open("https://www.google.com/search?q=" + nome)
        }
    }
}

</script>

<template>

    <!-- Card ricercate -->
    <div class="card circle" v-for="info in data" @click="openArtist(info.artist.weburl)"
        v-if="store.ricercaEffettuata">
        <div class="play-hover circle">

        </div>

        <img src="../../../assets/img/artist-null.svg" :alt="info.artist.title" v-if="info.artist.avatar == null"
            class="null">
        <img :src="info.artist.avatar" :alt="info.artist.title" v-else="">

        <h6>
            {{ info.artist.name }}
        </h6>
    </div>



    <!-- Card traccie popolari -->
    <div class="card circle" v-for="info in data" @click="searchArtist(info.subtitle)" v-else="">
        <div class="play-hover circle">

        </div>

        <img src="../../../assets/img/artist-null.svg" :alt="info.title" v-if="info.images == null" class="null">
        <img :src="info.images.background" :alt="info.title" v-else="">

        <h6>
            {{ info.subtitle }}
        </h6>
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
        border-radius: 50%;
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
        background-color: rgba(0, 0, 0, 0.3);
        position: absolute;
        top: 0px;
        display: none;
        justify-content: center;
        align-items: center;
        border-radius: 50%;
        box-shadow: 0px 0px 10px gray;

    }
}
</style>