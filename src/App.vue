<template>
  <div class="wrapper wrapper--hasselection">
    <AppHeader />

    <CategoryList />

    <StatusBar />
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';

import AppHeader from "@/components/AppHeader";
import CategoryList from "@/components/CategoryList";
import StatusBar from "@/components/StatusBar";

export default {
  name: 'App',

  components: {
    StatusBar,
    AppHeader,
    CategoryList
  },

  computed: {
    ...mapState([
      'selectedServices'
    ])
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
  .wrapper {
    transition: .4s ease-in-out;

    &--hasselection {
      padding-bottom: 80px;
    }
  }
</style>
