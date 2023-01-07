<script>
import { store } from '../../../store';

export default {
    name: "Pages",

    data() {
        return {
            store
        }
    },

    methods: {

        // Funzione per gestire i link cliccati
        linkClicked(info) {

            // Cambio stato di attivo
            store.linksLeftMenu.forEach(Element => Element.active = false)
            info.active = true;

            // Se viene cliccato "Home" vengono mostrati i contenuti sulla home
            if (info.name === "Home") {

                // Nascondere risultati ricerca
                store.ricercaEffettuata = false;
                store.ricercaUtente = "";

                // Se viene cliccato "Cerca" vengono mostrati i contenuti ricercati
            } else if (info.name === "Cerca") {
                if (store.traccieTrovate.length === 0) return;

                // Mostrare risultati ricerca
                store.ricercaEffettuata = true;
                store.ricercaUtente = store.elementoCercato;

            }
        }
    }
}
</script>

<template>
    <ul class="pages">
        <li>
            <img src="src/assets/img/logo-small.svg" alt="Small Logo" class="logo-s">
        </li>

        <li v-for="info in store.linksLeftMenu" @click="linkClicked(info)">
            <a :href="info.link" :class="info.active ? 'selected' : ''">
                <img :src="'src/assets/img/' + info.img" :alt="info.name">
                <span>
                    {{ info.name }}
                </span>
            </a>
        </li>
    </ul>
</template>

<style lang="scss" scoped>
.pages {

    img {
        vertical-align: middle;
        filter: invert(0.5);
    }

    .logo-s {
        display: none;
        filter: invert(0);
        margin-left: 4px;
        height: 55%;
    }

    li {
        margin: 8px 0;
        cursor: pointer;

        img {
            width: 30px;
            height: 30px;
            padding-right: 2px;
        }


        &:hover a {
            color: white;
            transition: all 0.2s ease;
        }

        &:hover img {
            filter: invert(0);
            transition: all 0.2s ease;
        }
    }

    a {
        font-weight: bold;
        font-size: 13px;
        color: gray;
        padding-left: 5px;
        font-weight: 600;
    }

    .selected {
        border-left: 3px solid #adff2f;
        display: inline-block;
        padding-left: 10px;
        margin-left: -10px;

        img {
            filter: invert(0);
        }

        span {
            color: white;
        }
    }

}
</style>