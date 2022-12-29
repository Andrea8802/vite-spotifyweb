<script>
import LeftMenu from './LeftMenu/LeftMenu.vue';
import Content from './ContentSection/Content.vue';

export default {
    name: "AppMain",
    components: {
        LeftMenu,
        Content
    }
}
</script>

<template>

    <main>
        <LeftMenu />
        <Content />
    </main>

</template>

<style lang="scss" scoped>
@use '../../styles/partials/mixins' as *;

main {
    width: 100%;
    @include d-flex(center, flex-start);
    height: calc(100vh - 90px)
}
</style>