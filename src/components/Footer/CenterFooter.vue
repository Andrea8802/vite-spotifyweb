<script>
export default {
    name: "CenterFooter"

}
</script>

<template>
    <div class="foot center">
        <div class="icon">
            <fa icon="fa-solid fa-shuffle" />
            <fa icon="fa-solid fa-backward-step" />
            <fa icon="fa-regular fa-circle-play" id="play" />
            <fa icon="fa-solid fa-forward-step" />
            <fa icon="fa-solid fa-rotate-right" />
        </div>
        <br>
        <div class="bar-section">
            <span>
                0:25
            </span>
            <div class="bar">
                <div class="light-bar">
                    <div class="point"></div>
                </div>
            </div>
            <span>
                4:35
            </span>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@use '../../styles/partials/mixins' as *;
@include footerGeneralRules;
@include barFooter;


.foot.center {
    width: 50%;
    height: 100%;
    flex-direction: column;
    justify-content: center;
    gap: 5px;

    .icon {
        color: white;
        font-size: 20px;
        @include d-flex(flex-start, center);
        gap: 20px;
        height: 20%;
        cursor: pointer;
    }

    #play {
        font-size: 32px;
        width: 40px;
        cursor: pointer;
        transition: all 0.2s ease;

        &:hover {
            font-size: 36px;
        }
    }

    .bar-section {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 20px;
        color: lightgray;
        font-size: 10px;
        font-weight: bold;
        height: 20%;
        width: 100%;

        .bar {
            width: 60%;

            .light-bar {
                width: 20%;
            }


        }
    }
}
</style>
