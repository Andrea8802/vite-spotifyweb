<script>
export default {
    name: "AppHeader"
}
</script>

<template>
    <header>
        <img src="src/assets/img/logo.svg" alt="Logo" id="logo-l">
        <img src="src/assets/img/logo-small.svg" alt="Logo" class="logo-s">
        <a href="#" class="upgrade">
            EFFETTUA L'UPGRADE
        </a>
    </header>
</template>

<style lang="scss" scoped>
@use '../styles/partials/mixins' as *;

header {
    height: 90px;
    position: fixed;
    top: 0px;
    right: 0px;
    left: 0px;
    z-index: 500;
    background-color: rgba(0, 0, 0, 0.5);
    padding: 0 15px;
    @include d-flex(space-between, center);
    overflow: hidden;

    #logo-l {
        height: 45%;
    }

    .logo-s {
        display: none;
        filter: invert(0);
        margin-left: 4px;
        height: 55%;
    }

    .upgrade {
        border: 2px solid white;
        border-radius: 30px;
        color: white;
        font-weight: 600;
        padding: 15px 40px;
        font-size: 12px;
        transition: all 0.3s ease;

        &:hover {
            font-size: 14px;
            font-weight: bold;
            margin-right: -10px;
            background-color: white;
            color: black;
        }

    }
}


/* S Version */
@media screen and (max-width: 642px) {
    header {
        margin-left: 60px;
        justify-content: flex-end;
    }

    #logo-l {
        display: none;
    }

}

/* XS Version */
@media screen and (max-width: 440px) {

    header {
        display: none;
    }

}

@media screen and (max-height: 550px) {
    #logo-l {
        display: none;
    }

    header {
        margin-left: 0px;
        justify-content: space-between;
    }

    header {
        .logo-s {
            display: inline-block;
        }
    }

    .upgrade {
        font-size: 11px;
        padding: 15px 30px;
    }

    .upgrade:hover {
        font-size: 13px;
    }
}

@media screen and (max-height: 550px) and (min-width: 400px) {
    header {
        .logo-s {
            display: none;
        }
    }

    #logo-l {
        display: inline-block;
    }
}
</style>
