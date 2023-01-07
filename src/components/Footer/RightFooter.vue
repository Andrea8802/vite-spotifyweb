<script>
export default {
    name: "RightFooter"
}
</script>

<template>
    <div class="foot right">

        <!-- Icone -->
        <div class="icon">
            <fa icon="fa-solid fa-list-ul" />
            <fa icon="fa-solid fa-display" />
            <fa icon="fa-solid fa-volume-high" />
        </div>

        <!-- Barra temporale -->
        <div class="bar">

            <!-- Barra onHover -->
            <div class="light-bar">
                <div class="point"></div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@use '../../styles/partials/mixins' as *;
@include footerGeneralRules;
@include barFooter;

.foot.right {
    justify-content: flex-end;
    gap: 20px;

    .icon {
        color: var(--dark-white);
        font-size: 14px;
        display: flex;
        gap: 20px;
        cursor: pointer;

        *:hover {
            color: white;
        }
    }

    .bar {
        width: 130px;

        .light-bar {
            width: 20%;
        }
    }
}
</style>
