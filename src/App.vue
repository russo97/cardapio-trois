<template>
  <div class="wrapper">
    <AppHeader />

    <CategoryList />
  </div>
</template>

<script>
import { mapActions } from 'vuex';

import AppHeader from "@/components/AppHeader";
import CategoryList from "@/components/CategoryList";

export default {
  name: 'App',

  components: {
    AppHeader,
    CategoryList
  },

  methods: {
    ...mapActions([
      'getServices'
    ])
  },

  mounted () {
    this.getServices();
  }
}
</script>

<style lang="scss">
  #app {
  }
</style>
