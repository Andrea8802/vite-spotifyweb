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
        Creato per Jonh Doe
    </h3>

    <div class="sub-title">
        Più ascolti, più accurati saranno i suggerimenti.
    </div>

    <section>
        <Card :data="forYouTrack" />
    </section>
</template>

<style lang="scss" scoped>
@use 'src/styles/partials/mixins' as *;
@include sectionStyle;
</style>