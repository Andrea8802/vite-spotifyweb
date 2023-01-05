<script>
import { store } from '../store'
import axios from 'axios';

export default {
    name: "AppHeader",
    data() {
        return {
            ricercaUtente: ""
        }
    },

    methods: {
        cerca() {
            const options = {
                method: 'GET',
                url: 'https://shazam.p.rapidapi.com/search',
                params: { term: this.ricercaUtente, locale: 'en-US', offset: '0', limit: '10' },
                headers: {
                    'X-RapidAPI-Key': 'b85ad614f4mshf86bd9a5ac77e66p15e702jsn25b99193398b',
                    'X-RapidAPI-Host': 'shazam.p.rapidapi.com'
                }
            }

            axios.request(options).then(response => {
                console.log(response.data);

                store.traccieTrovate = response.data.tracks.hits;
                store.artistiTrovati = response.data.artists.hits;

                console.log(store.traccieTrovate);
                console.log(store.artistiTrovati);

            }).catch(error => {
                console.log(error);
            }).finally(() => {
                store.ricercaEffettuata = true;
            })
        }
    }
}
</script>

<template>
    <header>
        <img src="src/assets/img/logo.svg" alt="Logo" id="logo-l">
        <img src="src/assets/img/logo-small.svg" alt="Logo" class="logo-s">

        <div>
            <input type="search" name="ricerca" v-model="ricercaUtente" @keyup.enter="cerca">
            <button @click="cerca">
                Cerca
            </button>
        </div>

        <a href="https://www.spotify.com/it/premium/" class="upgrade">
            EFFETTUA L'UPGRADE
        </a>
    </header>
</template>

<style lang="scss" scoped>
@use '../styles/partials/mixins' as *;

header {
    height: 90px;
    position: fixed;
    top: 0px;
    right: 0px;
    left: 0px;
    z-index: 500;
    background-color: rgba(0, 0, 0, 0.5);
    padding: 0 15px;
    @include d-flex(space-between, center);
    overflow: hidden;

    #logo-l {
        height: 45%;
    }

    .logo-s {
        display: none;
        filter: invert(0);
        margin-left: 4px;
        height: 55%;
    }

    .upgrade {
        border: 2px solid white;
        border-radius: 30px;
        color: white;
        font-weight: 600;
        padding: 15px 40px;
        font-size: 12px;
        font-weight: bold;
        transition: all 0.2s ease;

        &:hover {
            background-color: white;
            color: black;
        }

    }
}


/* S Version */
@media screen and (max-width: 642px) {
    header {
        margin-left: 60px;
        justify-content: flex-end;

        #logo-l {
            display: none;
        }

        .upgrade {
            padding: 12px 22px;
            font-size: 12px;
        }

    }
}

/* XS Version */
@media screen and (max-width: 440px) {
    header {
        display: none;
    }

}

// Altezza
@media screen and (max-height: 550px) {
    header {
        margin-left: 0px;
        justify-content: space-between;

        .logo-s {
            display: inline-block;
        }

        #logo-l {
            display: none;
        }
    }
}

@media screen and (max-height: 550px) and (min-width: 400px) {
    header {
        .logo-s {
            display: none;
        }

        #logo-l {
            display: inline-block;
        }
    }

}
</style>
