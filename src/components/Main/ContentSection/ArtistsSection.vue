<script>
import Card from './Card.vue'
import CardArtist from './CardArtist.vue'
import axios from 'axios';
import { store } from '../../../store'

export default {
    name: "ArtistsSection",

    components: {
        Card,
        CardArtist
    },

    data() {
        return {
            store
        }
    }
}

</script>

<template>

</template>

<style lang="scss" scoped>
@use 'src/styles/partials/mixins' as *;
@include sectionStyle;
</style>