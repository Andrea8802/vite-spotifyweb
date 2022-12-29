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
@use 'src/styles/partials/mixins' as *;
@include sectionStyle;
</style>