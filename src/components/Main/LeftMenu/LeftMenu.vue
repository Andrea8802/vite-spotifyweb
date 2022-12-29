<script>
import Playlist from './Playlist.vue';

export default {
    name: "LeftMenu",
    components: {
        Playlist
    },
    data() {
        return {
            linkMenu: [
                {
                    name: "Home",
                    img: "home.svg",
                    link: "#",
                    active: true
                },

                {
                    name: "Cerca",
                    img: "search.svg",
                    link: "#",
                    active: false
                },

                {
                    name: "La Tua Libreria",
                    img: "libreria.svg",
                    link: "#",
                    active: false
                }
            ]
        }
    },
    methods: {
        linkClicked(info) {
            this.linkMenu.forEach(Element => Element.active = false)
            info.active = true;
        }
    }
}
</script>

<template>
    <nav class="left-menu">
        <div class="top">
            <ul class="pages">
                <li>
                    <img src="src/assets/img/logo-small.svg" alt="Small Logo" class="logo-s">
                </li>

                <li v-for="info in linkMenu" @click="linkClicked(info)">
                    <a :href="info.link" :class="info.active ? 'selected' : ''">
                        <img :src="'src/assets/img/' + info.img" :alt="info.name">
                        <span>
                            {{ info.name }}
                        </span>
                    </a>
                </li>

            </ul>

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

        <div class="middle">
            <Playlist />
        </div>

        <div class="bottom">
            <a href="#" class="download">
                <img src="src/assets/img/download.svg" alt="">
                <span>
                    Installa app
                </span>
            </a>
            <hr>
            <a href="#" class="profile">
                <img src="src/assets/img/profile.svg" alt="">
                <span>
                    Jonh Doe
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

    .logo-s {
        display: none;
        filter: invert(0);
        margin-left: 4px;
        height: 55%;
    }

    .pages {

        img {
            width: 30px;
            height: 30px;
            padding-right: 2px;
        }

        li {
            margin: 8px 0;
            cursor: pointer;

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
    }

    .logo-s {
        filter: invert(0);
    }

    .selected {
        border-left: 3px solid #adff2f;
        padding-left: 6px;
        padding: 3px 0 6px;

        img {
            filter: invert(0);
        }

        a {
            color: white;
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
}


/* S Version */
@media screen and (max-width: 642px) {

    .left-menu {
        width: 60px;
        padding: 10px 0 0;
        align-items: center;
    }

    .selected {
        border-left: 0px;
        margin-left: 0px;
        padding-left: 0px;
    }

    .playlist,
    .create,
    .pages span,
    .bottom span,
    .left-menu hr {
        display: none;
    }

    .bottom img {
        display: block;
        margin: 8px 0;
    }

    .download img {
        width: 23px;
        height: 24px;
        margin-bottom: 15px;
    }

    .left-menu {
        .logo-s {
            display: inline-block;
        }
    }


}

@media screen and (max-height: 550px) {
    .left-menu {
        display: none;
    }
}
</style>