<script>
import Card from './Card.vue'

export default {
    name: "ForYouSection",

    components: {
        Card
    },

    data() {
        return {
            forYouTrack: [
                {
                    img: "radar.jpeg",
                    title: "Release Radar"
                },

                {
                    img: "mixdaily.jpeg",
                    title: "Daily Mix 1"
                }

            ]
        }
    }
}

</script>

<template>
    <h3>
        Recently played
    </h3>

    <section>
        <Card :data="forYouTrack" />
    </section>
</template>

<style lang="scss" scoped>
section {
    margin: 30px 0 50px;
    display: flex;
    justify-content: flex-start;
    flex-wrap: wrap;
    gap: 10px;
}

h3 {
    color: white;
    font-weight: bold;
    font-size: 25px;
}

.sub-title {
    color: gray;
    font-weight: bold;
    font-size: 12px;
    margin-top: 5px;
}
</style>