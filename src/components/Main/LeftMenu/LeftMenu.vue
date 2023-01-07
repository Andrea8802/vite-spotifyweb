<script>
import Playlist from './Playlist.vue';
import Pages from './Pages.vue';

export default {
    name: "LeftMenu",
    components: {
        Playlist,
        Pages
    }
}
</script>

<template>
    <nav class="left-menu">
        <!-- Sezione superiore -->
        <div class="top">
            <!-- Sezione con gestione pagine -->
            <Pages />

            <!-- Sezione per creare playlist -->
            <div class="create">
                <h6>
                    PLAYLIST
                </h6>
                <a href="#">
                    <span class="icon">
                        <fa icon="fa-solid fa-square-plus" />
                    </span>
                    Crea Playlist
                </a>
            </div>
        </div>

        <!-- Sezione centrale con playlist -->
        <div class="middle">
            <Playlist />
        </div>

        <!-- Sezione inferiore  -->
        <div class="bottom">

            <!-- Download app -->
            <a href="https://www.spotify.com/it/download" class="download">
                <img src="src/assets/img/download.svg" alt="">
                <span>
                    Installa app
                </span>
            </a>
            <hr>

            <!-- Gestione profilo utente -->
            <a href="#" class="profile">
                <img src="src/assets/img/profile.svg" alt="">
                <span>
                    User Name
                </span>
            </a>
        </div>
    </nav>
</template>

<style lang="scss" scoped>
@use 'src/styles/partials/mixins' as *;

.left-menu {
    width: 230px;
    height: calc(100vh - 90px);
    padding: 90px 10px 0;
    background-color: black;
    color: white;
    @include d-flex(flex-start, flex-start);
    flex-direction: column;

    img {
        vertical-align: middle;
        filter: invert(0.5);
    }

}

.create {
    h6 {
        font-size: 14px;
        font-weight: bold;
        margin: 20px 0 10px
    }

    a {
        font-size: 15px;
        font-weight: bold;
        color: grey;
        transition: all 0.3s ease;
    }

    .icon {
        font-size: 44px;
        vertical-align: middle;
        margin-right: 5px;
    }

    &:hover a {
        color: white;
    }
}

.middle {
    overflow-y: scroll;
    height: 100%;
    width: 100%;

}

.bottom {
    margin: 10px 0;

    hr {
        margin: 8px 0;
    }

    .download {
        font-size: 12px;
        color: grey;
        font-weight: bold;

        &:hover span {
            color: white;
        }

        &:hover img {
            filter: invert(0);
        }

        * {
            transition: all 0.3s ease;
        }

        img {
            width: 20px;
            height: 20px;
            padding-right: 2px;
        }
    }
}

.profile {
    font-size: 14px;
    font-weight: bold;
    color: white;

    img {
        width: 25px;
        height: 25px;
        background-color: gray;
        filter: invert(0);
        border-radius: 50%;
        margin-right: 8px;
    }
}



/* S Version */
@media screen and (max-width: 642px) {
    .left-menu {
        width: 60px;
        padding: 10px 0 0;
        align-items: center;

        .logo-s {
            display: inline-block;
        }

        .selected {
            border: 0px;
            margin: 0px;
            padding: 0px;
        }

        .create,
        .pages span {
            display: none;
        }

        .bottom {
            width: 100%;
            @include d-flex(center, center);
            flex-direction: column;

            .download img {
                width: 23px;
                height: 24px;
            }

            span,
            hr {
                display: none;
            }

            img {
                display: block;
                margin: 8px 0;
            }
        }
    }
}

@media screen and (max-height: 550px) {
    .left-menu {
        display: none;
    }
}
</style>