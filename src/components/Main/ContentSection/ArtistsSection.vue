<script>
import Card from './Card.vue'

export default {
    name: "ArtistsSection",

    components: {
        Card
    },

    data() {
        return {
            artists: [
                {
                    img: "youg.jpeg",
                    title: "Lana Del Ray",
                    circle: true
                },

                {
                    img: "einaudi.jpeg",
                    title: "Ludovico Einaudi",
                    circle: true
                }

            ]
        }
    }
}

</script>

<template>
    <h3>
        Artisti più popolari
    </h3>
    <div class="sub-title">
        Più ascolti, più accurati saranno i suggerimenti.
    </div>

    <section>
        <Card :data="artists" />
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