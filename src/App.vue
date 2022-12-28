<script>
import AppHeader from './components/AppHeader.vue'
import AppMain from './components/Main/AppMain.vue'

export default {
  name: "App",
  components: {
    AppHeader,
    AppMain
  }
}
</script>

<template>
  <AppHeader />
  <AppMain />


</template>

<style lang="scss">
@use './styles/general.scss' as *;
</style>
