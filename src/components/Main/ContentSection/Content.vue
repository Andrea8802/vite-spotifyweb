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
    },

    data() {
        return {
            linksNav: [
                {
                    name: "IN EVIDENZA",
                    link: "#",
                    active: true
                },

                {
                    name: "PODCAST",
                    link: "#",
                    active: false
                },

                {
                    name: "CLASSIFICHE",
                    link: "#",
                    active: false
                },

                {
                    name: "GENERI E MOOD",
                    link: "#",
                    active: false
                },

                {
                    name: "NUOVE USCITE",
                    link: "#",
                    active: false
                },

                {
                    name: "SCOPRI",
                    link: "#",
                    active: false
                },
            ]
        }
    }
}

</script>

<template>
    <section class="content">
        <div class="container">
            <nav class="top-menu">
                <ul>

                    <li v-for="info in linksNav">
                        <a :href="info.link" :class="info.active ? 'active-item' : ''">
                            {{ info.name }}
                        </a>
                        <hr v-if="info.active">
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