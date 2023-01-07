<script>
export default {
    name: "LeftFooter"
}
</script>

<template>
    <div class="foot left">

        <!-- Preview Copertina musica riprodotta-->
        <img src="src/assets/img/sinister.jpeg" alt="Cover Preview" class="cover-preview">

        <!-- Preview info musica riprodotta -->
        <span class="preview-info">

            <div class="music">
                Titolo
            </div>
            <div class="artist">
                <a href="#">
                    Artista
                </a>
            </div>
        </span>

        <!-- Icone -->
        <span class="icon">
            <fa icon="fa-regular fa-heart" />
            <fa icon="fa-regular fa-folder" />
        </span>
    </div>

</template>

<style lang="scss" scoped>
@use '../../styles/partials/mixins' as *;
@include footerGeneralRules;

.foot.left {
    img {
        height: 50%;
        margin-right: 10px;
    }

    .icon {
        color: gray;
        margin-left: 40px;
        cursor: pointer;

        * {
            margin-left: 15px;
        }

        *:hover {
            color: white;
        }
    }

    .music {
        color: white;
        font-weight: bold;
        font-size: 13px;
    }

    .artist a {
        color: gray;
        font-weight: bold;
        font-size: 10px;

        &:hover {
            text-decoration: underline;
            color: white;
        }
    }
}
</style>
