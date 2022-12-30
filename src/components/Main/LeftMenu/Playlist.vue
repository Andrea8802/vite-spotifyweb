<script>
export default {
    name: "Playlist",
    data() {
        return {
            playlists: [
                {
                    name: "Playlist1",
                    link: "#",
                    active: true
                },

                {
                    name: "Playlist2",
                    link: "#",
                    active: false
                },

                {
                    name: "Playlist3",
                    link: "#",
                    active: false
                },

                {
                    name: "Playlist4",
                    link: "#",
                    active: false
                },

                {
                    name: "Playlist5",
                    link: "#",
                    active: false
                },

                {
                    name: "Playlist6",
                    link: "#",
                    active: false
                },

                {
                    name: "Playlist7",
                    link: "#",
                    active: false
                },

                {
                    name: "Playlist8",
                    link: "#",
                    active: false
                }
            ]
        }
    },
    methods: {
        linkClicked(info) {
            this.playlists.forEach(Element => Element.active = false)
            info.active = true;
        }
    }
}
</script>

<template>

    <section>
        <div class="playlist">
            <ul>
                <li v-for="info in playlists" @click="linkClicked(info)">
                    <a :href="info.link" :class="info.active ? 'link-active' : ''">
                        {{ info.name }}
                    </a>
                </li>
            </ul>
        </div>
    </section>

</template>

<style lang="scss" scoped>
.playlist {
    padding-left: 5px;

    li {
        margin-top: 15px;

        &:hover a {
            color: white;
        }

        a {
            color: gray;
            font-weight: bold;
            font-size: 13px;
            transition: all 0.2s ease;
        }

    }

    .link-active {
        color: white;
    }
}

/* S Version */
@media screen and (max-width: 642px) {
    .playlist {
        display: none;
    }
}
</style>