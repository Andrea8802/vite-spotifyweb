<script>
export default {
    name: "Card",
    props: {
        data: Array
    }
}

</script>

<template>
    <div class="card" :class="info.circle === true ? 'circle' : ''" v-for="info in data">
        <div class="play-hover" :class="info.circle === true ? 'circle' : ''">
            <div class="icon">
                <fa icon="fa-regular fa-circle-play" />
            </div>
        </div>
        <img :src="'src/assets/img/' + info.img" :alt="info.title">

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
    max-width: 180px;
    min-height: 280px;
    text-align: center;
    position: relative;
    cursor: pointer;

    &:hover .play-hover {
        display: flex;
    }

    img {
        width: 100%;
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