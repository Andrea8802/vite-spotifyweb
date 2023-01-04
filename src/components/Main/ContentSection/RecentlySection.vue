<script>
import Card from './Card.vue'
import axios from 'axios'
import { store } from '../../../store'

export default {
    name: "RecentlySection",

    components: {
        Card
    },

    data() {
        return {
            // recently: [
            //     {
            //         img: "metal_lifting.jpg",
            //         title: "Heavy Metal",
            //         subtitle: "Subtitle"
            //     },

            //     {
            //         img: "stranger.jpeg",
            //         title: "Stranger Things, Vol. 1 (a Netflix Original Series Soundtrack)",
            //         subtitle: "Kyle Dixon & Micheal Stein"
            //     },

            //     {
            //         img: "aquietplace.jpeg",
            //         title: "A quiet place",
            //         subtitle: "Subtitle"
            //     },

            //     {
            //         img: "split.jpeg",
            //         title: "Split",
            //         subtitle: "Subtitle"
            //     },

            //     {
            //         img: "cure.jpeg",
            //         title: "A cure for wellness",
            //         subtitle: "Subtitle"
            //     },

            //     {
            //         img: "sinister.jpeg",
            //         title: "Sinister",
            //         subtitle: "Subtitle"
            //     }
            // ]
            store
        }
    },
    mounted() {
        const options = {
            method: 'GET',
            url: store.topAPI,
            params: { locale: 'en-US', pageSize: '20', startFrom: '0' },
            headers: {
                'X-RapidAPI-Key': 'b85ad614f4mshf86bd9a5ac77e66p15e702jsn25b99193398b',
                'X-RapidAPI-Host': 'shazam.p.rapidapi.com'
            }
        };

        axios.request(options).then(function (response) {
            store.topTracks = response.data.tracks
            console.log(response.data.tracks);
        }).catch(function (error) {
            console.error(error);
        }).finally(() => {
            store.apiLoaded = true;
        })
    }

}

</script>

<template>
    <h3>
        Recently played
    </h3>

    <section>
        <Card />
    </section>
</template>

<style lang="scss" scoped>
@use 'src/styles/partials/mixins' as *;
@include sectionStyle;
</style>