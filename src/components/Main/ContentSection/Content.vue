<script>
import RecentlySection from './RecentlySection.vue'
import ForYouSection from './ForYouSection.vue'
import ArtistsSection from './ArtistsSection.vue'

export default {
    name: "Content",
    components: {
        RecentlySection,
        ForYouSection,
        ArtistsSection
    }
}

</script>

<template>
    <section class="content">
        <div class="container">
            <nav class="top-menu">
                <ul>
                    <li>
                        <a href="#" class="active-item">
                            IN EVIDENZA
                        </a>
                        <hr>
                    </li>

                    <li>
                        <a href="#">
                            PODCAST
                        </a>
                    </li>

                    <li>
                        <a href="#">
                            CLASSIFICHE
                        </a>
                    </li>

                    <li>
                        <a href="#">
                            GENERI E MOOD
                        </a>
                    </li>

                    <li>
                        <a href="#">
                            NUOVE USCITE
                        </a>
                    </li>

                    <li>
                        <a href="#">
                            SCOPRI
                        </a>
                    </li>
                </ul>
            </nav>

            <RecentlySection />

            <ForYouSection />

            <ArtistsSection />

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

        .top-menu {
            ul {
                margin-bottom: 50px;
                list-style: none;
                display: flex;
                justify-content: center;
                gap: 25px;
                flex-wrap: wrap;
            }

            li {
                a {
                    color: gray;
                    font-weight: bold;
                    font-size: 13px;
                    display: inline-block;
                    padding-bottom: 3px;
                    transition: all 0.3s ease;

                    &:hover {
                        color: white;
                    }
                }
            }

            .active-item {
                color: white;
            }

            hr {
                border: 1px solid#adff2f;
                width: 30%;
                margin: auto;
            }
        }

        // Da sistemare
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

        .card {
            max-width: 180px;
            min-height: 280px;
            text-align: center;
            position: relative;
            cursor: pointer;

            &:hover .play-hover {
                display: flex;
            }

            img {
                width: 100%;
            }

            h6 {
                color: white;
                font-weight: bold;
                font-size: 16px;
                margin-top: 10px;
            }

            .play-hover {
                width: 100%;
                height: 180px;
                background-color: rgba(0, 0, 0, 0.5);
                position: absolute;
                top: 0px;
                display: none;
                justify-content: center;
                align-items: center;

                .icon {
                    font-size: 60px;
                    color: white;
                }
            }

            .play-hover.circle {
                border-radius: 50%;

                img {
                    border-radius: 50%;
                }
            }
        }

        .card.circle {
            img {
                border-radius: 50%;
            }
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