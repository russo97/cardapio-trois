<template>
  <main class="categorylist">
    <div class="categorylist__wrapper">
      <div
        :key="category.key"
        v-for="category in serviceList"
        class="categorylist__item"
      >
        <h2 class="categorylist__title">
          {{ category.name }}
        </h2>

        <section class="categorylist__list">
          <ServiceItem
            :key="index"
            :service="service"
            v-for="(service, index) in category.services"
          />
        </section>
      </div>
    </div>
  </main>
</template>

<script>
import { mapGetters } from "vuex"

import ServiceItem from "@/components/ServiceItem";

export default {
  name: "CategoryList",

  components: {
    ServiceItem
  },

  computed: {
    ...mapGetters([
      'serviceList'
    ])
  }
}
</script>

<style lang="scss" scoped>
  .categorylist {
    &__wrapper {
      margin: 0 auto;
      padding: 0 20px;
      max-width: 1180px;
    }

    &__item {
      & + & {
        margin: 25px 0 0;
      }
    }

    &__title {
      color: #505050;
      font: 700 1.25rem "Lexend", sans-serif;
    }

    &__list {
      padding: 12px 0 0 25px;

      .service + * {
        border-top: solid 1px #AEB1AA40;
      }

      .service:nth-child(3n - 2) {
        --pillColor: 219, 160, 109;
      }

      .service:nth-child(3n - 1) {
        --pillColor: 111, 130, 124;
      }

      .service:nth-child(3n - 0) {
        --pillColor: 226, 193, 229;
      }
    }
  }
</style>