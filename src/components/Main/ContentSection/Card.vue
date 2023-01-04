<script>
import { store } from '../../../store'

export default {
    name: "Card",
    data() {
        return {
            store,
            imgCard: []
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
    <div class="card" :class="info.circle === true ? 'circle' : ''" v-for="(info, index) in store.topTracks"
        @click="openMusic(info.hub.actions[1].uri)">
        <div class="play-hover" :class="info.circle === true ? 'circle' : ''">
            <div class="icon">
                <fa icon="fa-regular fa-circle-play" />
            </div>
        </div>

        <img src="../../../assets/img/img-null.svg" :alt="info.title" v-if="info.images == null" class="null">
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

    .play-hover.circle {
        border-radius: 50%;

        img {
            border-radius: 50%;
        }
    }
}

.card.circle {
    img {
        border-radius: 50%;
    }
}
</style>