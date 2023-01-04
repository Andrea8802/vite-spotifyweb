<script>
import TopMenu from './TopMenu.vue'
import Card from './Card.vue';
import CardArtist from './CardArtist.vue';

export default {
    name: "Content",
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
            <TopMenu />

            <!-- Top Tracks -->
            <h3>
                Tracce più ascolate
            </h3>
            <section>
                <Card />
            </section>


            <!-- Artist -->
            <h3>
                Artisti più popolari
            </h3>
            <div class="sub-title">
                Artisti più ascoltati nell'ultimo periodo
            </div>
            <section>
                <CardArtist />
            </section>

        </div>
    </section>
</template>

<style lang="scss" scoped>
.content {
    width: calc(100% - 230px);
    height: 100%;
    overflow-y: scroll;
    padding-top: 110px;
    background-color: #141922;

    .container {
        width: 90%;
        margin: 0 auto;

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