<script>
export default {
    name: "Content",
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

            <h3>
                Recently played
            </h3>
            <section class="recently">
                <div class="card">
                    <div class="play-hover">
                        <div class="icon">
                            <fa icon="fa-regular fa-circle-play" />
                        </div>
                    </div>
                    <img src="src/assets/img/metal_lifting.jpg" alt="Heavy Metal">

                    <h6>
                        Heavy Metal
                    </h6>

                    <div class="sub-title">
                        Subtitle

                    </div>
                </div>

                <div class="card">
                    <div class="play-hover">
                        <div class="icon">
                            <fa icon="fa-regular fa-circle-play" />
                        </div>
                    </div>
                    <img src="src/assets/img/stranger.jpeg" alt="Stranger Things">
                    <h6>
                        Stranger Things, Vol. 1 (a Netflix Original Series Soundtrck)
                    </h6>
                    <div class="sub-title">
                        Kyle Dixon & Micheal Stein
                    </div>
                </div>

                <div class="card">
                    <div class="play-hover">
                        <div class="icon">
                            <fa icon="fa-regular fa-circle-play" />
                        </div>
                    </div>
                    <img src="src/assets/img/aquietplace.jpeg" alt="A quiet place">
                    <h6>
                        A quiet place
                    </h6>
                    <div class="sub-title">
                        Subtitle
                    </div>
                </div>

                <div class="card">
                    <div class="play-hover">
                        <div class="icon">
                            <fa icon="fa-regular fa-circle-play" />
                        </div>
                    </div>
                    <img src="src/assets/img/split.jpeg" alt="Split">
                    <h6>
                        Split
                    </h6>
                    <div class="sub-title">
                        Subtitle
                    </div>
                </div>

                <div class="card">
                    <div class="play-hover">
                        <div class="icon">
                            <fa icon="fa-regular fa-circle-play" />
                        </div>
                    </div>
                    <img src="src/assets/img/cure.jpeg" alt="A cure for wellness">
                    <h6>
                        A cure for wellness
                    </h6>
                    <div class="sub-title">
                        Subtitle
                    </div>
                </div>

                <div class="card">
                    <div class="play-hover">
                        <div class="icon">
                            <fa icon="fa-regular fa-circle-play" />
                        </div>
                    </div>
                    <img src="src/assets/img/sinister.jpeg" alt="Sinister">
                    <h6>
                        Sinister
                    </h6>
                    <div class="sub-title">
                        Subtitle
                    </div>
                </div>
            </section>

            <h3>
                Creato per Jonh Doe
            </h3>
            <div class="sub-title">
                Più ascolti, più accurati saranno i suggerimenti.
            </div>

            <section class="for-you">
                <div class="card">
                    <div class="play-hover">
                        <div class="icon">
                            <fa icon="fa-regular fa-circle-play" />
                        </div>
                    </div>
                    <img src="src/assets/img/radar.jpeg" alt="Release Radar">
                    <h6>
                        Release Radar
                    </h6>
                </div>
                <div class="card">
                    <div class="play-hover">
                        <div class="icon">
                            <fa icon="fa-regular fa-circle-play" />
                        </div>
                    </div>
                    <img src="src/assets/img/mixdaily.jpeg" alt="Daily Mix 1">
                    <h6>
                        Daily Mix 1
                    </h6>
                </div>
            </section>

            <h3>
                Artisti più popolari
            </h3>
            <div class="sub-title">
                Più ascolti, più accurati saranno i suggerimenti.
            </div>

            <section class="popular">
                <div class="circle card">
                    <div class="play-hover circle">
                        <div class="icon">
                            <fa icon="fa-regular fa-circle-play" />
                        </div>
                    </div>
                    <img src="src/assets/img/youg.jpeg" alt="Young">
                    <h6>
                        Lana Del Ray
                    </h6>
                </div>

                <div class="circle card">
                    <div class="play-hover circle">
                        <div class="icon">
                            <fa icon="fa-regular fa-circle-play" />
                        </div>
                    </div>
                    <img src="src/assets/img/einaudi.jpeg" alt="Ludovico Einaudi">
                    <h6>
                        Ludovico Einaudi
                    </h6>
                </div>
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