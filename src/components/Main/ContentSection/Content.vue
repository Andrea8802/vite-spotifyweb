<script>
import TopMenu from './TopMenu.vue'
import Card from './Card.vue';
import CardArtist from './CardArtist.vue';
import { store } from '../../../store'

export default {
    name: "Content",

    data() {
        return {
            store
        }
    },

    components: {
        TopMenu,
        Card,
        CardArtist
    }
}

</script>

<template>
    <section class="content">
        <div class="container">

            <!-- Loading per ricerca elementi -->
            <div v-if="store.ricercaAvviata" class="loading">
                <h2 v-if="store.erroreRicerca">
                    La ricerca "{{ store.elementoCercato }}" non ha ottento nessun risulato
                </h2>
                <img src="src/assets/img/loading-img.svg" alt="" v-else>
            </div>

            <!-- Risultato -->
            <div v-else="">
                <TopMenu />

                <!-- Tracce -->
                <h3 v-if="store.ricercaEffettuata">
                    Tracce correlate a "{{ store.elementoCercato }}"
                </h3>
                <h3 v-else>
                    Tracce più ascolate
                </h3>
                <section>
                    <Card :data="store.ricercaEffettuata ? store.traccieTrovate : store.topTracks" />
                </section>


                <!-- Artisti -->
                <h3 v-if="store.ricercaEffettuata">
                    Artisti correlati a "{{ store.elementoCercato }}"
                </h3>
                <div v-else>
                    <h3>
                        Artisti più popolari
                    </h3>
                    <div class="sub-title">
                        Artisti più ascoltati nell'ultimo periodo
                    </div>
                </div>

                <section>
                    <CardArtist :data="store.ricercaEffettuata ? store.artistiTrovati : store.topTracks" />
                </section>
            </div>


        </div>
    </section>
</template>

<style lang="scss" scoped>
@use '../../../styles/partials/mixins' as *;

.content {
    width: calc(100% - 230px);
    height: 100%;
    overflow-y: scroll;
    padding-top: 110px;
    background-color: #141922;

    .container {
        width: 90%;
        margin: 0 auto;

        .loading {
            width: 100%;
            height: calc(100vh - 200px);
            @include d-flex(center, center);

            h2 {
                font-size: 30px;
                color: white;
            }
        }

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

    }
}

/* S Version */
@media screen and (max-width: 642px) {
    .content {
        width: calc(100% - 60px);
    }
}

@media screen and (max-height: 550px) {
    .content {
        width: 100%;
    }
}

/* XS Version */
@media screen and (max-width: 440px) {
    .content {
        padding-top: 30px;
    }
}
</style>