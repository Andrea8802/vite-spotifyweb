<script>
import Card from './Card.vue'

export default {
    name: "RecentlySection",

    components: {
        Card
    },

    data() {
        return {
            recently: [
                {
                    img: "metal_lifting.jpg",
                    title: "Heavy Metal",
                    subtitle: "Subtitle"
                },

                {
                    img: "stranger.jpeg",
                    title: "Stranger Things, Vol. 1 (a Netflix Original Series Soundtrack)",
                    subtitle: "Kyle Dixon & Micheal Stein"
                },

                {
                    img: "aquietplace.jpeg",
                    title: "A quiet place",
                    subtitle: "Subtitle"
                },

                {
                    img: "split.jpeg",
                    title: "Split",
                    subtitle: "Subtitle"
                },

                {
                    img: "cure.jpeg",
                    title: "A cure for wellness",
                    subtitle: "Subtitle"
                },

                {
                    img: "sinister.jpeg",
                    title: "Sinister",
                    subtitle: "Subtitle"
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
        <Card :data="recently" />
    </section>
</template>

<style lang="scss" scoped>
@use 'src/styles/partials/mixins' as *;
@include sectionStyle;
</style>