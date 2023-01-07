<script>
import { store } from '../store'
import axios from 'axios';

export default {
    name: "AppHeader",
    data() {
        return {
            store
        }
    },

    methods: {

        // Funzione per ricercare un elemento da un input
        cerca() {
            if (store.ricercaUtente === "") return;

            // Flag per controllare l'animazione del caricamento
            store.ricercaInCorso = true;

            store.erroreRicerca = false;

            // Variabile per salvare la ricerca anche se viene cancellato l'input
            store.elementoCercato = store.ricercaUtente;

            // Chiamata API per ricerca elemento
            const options = {
                method: 'GET',
                url: 'https://shazam.p.rapidapi.com/search',
                params: { term: store.ricercaUtente, locale: 'en-US', offset: '0', limit: '5' },
                headers: {
                    'X-RapidAPI-Key': '644a0be476msh5287f3c17179483p17fb1cjsn8cd747d2fc3f',
                    'X-RapidAPI-Host': 'shazam.p.rapidapi.com'
                }
            }

            axios.request(options).then(response => {
                store.traccieTrovate = response.data.tracks.hits;
                store.artistiTrovati = response.data.artists.hits;


            }).catch(error => {
                console.log(error);

                // Mostrare avviso in caso di ricerca senza risultato
                store.erroreRicerca = true;

            }).finally(() => {

                // Mostrare risultati se la ricerca va buon fine
                if (store.erroreRicerca) return;
                store.ricercaInCorso = false;
                store.ricercaEffettuata = true;
            })

            // Disattivare la voce del left menu attiva e evidenziare "Ricerca"
            store.linksLeftMenu.forEach(Element => Element.active = false)
            store.linksLeftMenu[1].active = true;


        }
    }
}
</script>

<template>
    <header>
        <img src="src/assets/img/logo.svg" alt="Logo" id="logo-l">
        <img src="src/assets/img/logo-small.svg" alt="Logo" class="logo-s">

        <!-- Ricerca elementi -->
        <div class="ricerca">
            <input type="search" name="ricerca" v-model="store.ricercaUtente" @keyup.enter="cerca">
            <button @click="cerca">
                CERCA
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

    .ricerca {
        @include d-flex(center, center);
        gap: 10px;

        input,
        button {
            background-color: rgb(10, 10, 10);
            border: 1px solid gray;
            color: white;
            font-weight: bold;
            border-radius: 20px;

        }

        input {
            padding: 10px 20px;
            width: 400px;
            font-size: 16px;

            &:focus {
                outline: none;
                border: 2px solid gray;
            }
        }

        button {
            padding: 11px 30px;
            cursor: pointer;
            font-size: 14px;


            &:active {
                outline: none;
                border: 2px solid gray;
            }
        }
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


@media screen and (max-width: 1130px) {
    header {
        .ricerca {
            input {
                width: 300px;
                font-size: 16px;
            }

            button {
                padding: 14px 20px;
                font-size: 14px;

            }
        }
    }
}

@media screen and (max-width: 980px) {
    header {
        .ricerca {
            margin-left: 50px;

            input {
                width: 280px;
                font-size: 16px;
            }

            button {
                padding: 13px 18px;
                font-size: 14px;

            }
        }
    }
}

/* M Version */
@media screen and (max-width: 890px) {

    .upgrade {
        display: none;
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

    }
}

@media screen and (max-width:460px) {
    header {
        .ricerca {
            input {
                width: 200px;
                font-size: 16px;
            }

            button {
                padding: 13px 18px;
                font-size: 14px;

            }
        }
    }
}

/* XS Version */
@media screen and (max-width: 380px) {
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
