<script>
export default {
    name: "TopMenu",

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
    },

    methods: {
        linkClicked(info) {
            this.linksNav.forEach(Element => Element.active = false)
            info.active = true;
        }
    }


}

</script>

<template>
    <nav class="top-menu">
        <ul>

            <li v-for="info in linksNav" @click="linkClicked(info)">
                <a :href="info.link" :class="info.active ? 'active-item' : ''">
                    {{ info.name }}
                </a>
                <hr v-if="info.active">
            </li>

        </ul>
    </nav>
</template>

<style lang="scss" scoped>
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
</style>