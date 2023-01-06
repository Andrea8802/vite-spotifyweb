<script>
import LeftFooter from './LeftFooter.vue';
import CenterFooter from './CenterFooter.vue';
import RightFooter from './RightFooter.vue';

export default {
    name: "AppFooter",
    components: {
        LeftFooter,
        CenterFooter,
        RightFooter
    }

}
</script>

<template>

    <footer>
        <LeftFooter />
        <CenterFooter />
        <RightFooter />
    </footer>

</template>

<style lang="scss" scoped>
@use '../../styles/partials/mixins' as *;
@include footerGeneralRules;

footer {
    height: 90px;
    padding: 0 15px;
    @include d-flex(space-between, center);
    background-color: #282828;
}
</style>