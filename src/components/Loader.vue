<script>
export default {
    name: "Loader",

    props: ["error"]

}
</script>

<template>

    <div class="loading">
        <img src="src/assets/img/logo-loading.png" alt="" class="logo">
        <h2 v-if="error" class="error">
            Errore! Riprova più tardi
        </h2>
        <div class="loader" v-if="!error">
            <h2>
                Caricamento in corso...
            </h2>
            <img src="src/assets/img/page-loader-img.svg" alt="">
        </div>


    </div>


</template>

<style lang="scss" scoped>
@use '../styles/partials/mixins' as *;

.loading {
    background-color: black;
    width: 100%;
    height: 100vh;
    @include d-flex(center, center);
    flex-direction: column;

    .logo {
        width: 28%;
    }

    .error {
        margin-top: 130px
    }

    .loader {
        @include d-flex(center, center);
        flex-direction: column;
        gap: 40px;
        margin-top: 130px;

    }

    h2 {
        color: #a5a5a5;
        font-size: 40px;
    }
}
</style>
