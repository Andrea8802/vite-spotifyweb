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
                    title: "A cure for well",
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
        Creato per Jonh Doe
    </h3>

    <div class="sub-title">
        Più ascolti, più accurati saranno i suggerimenti.
    </div>

    <section>
        <Card :data="recently" />
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