<template>
  <article
    :class="additionalClasses"
    class="service cursor-pointer"
  >
    <div
      v-hammer:tap="onTap"
      class="service__wrapper d-flex flex-wrap align-items-center"
    >
      <div class="service__pill" />

      <div class="service__info d-flex flex-column flex-md-row">
        <div class="service__text d-flex flex-column">
          <h3 class="service__title">
            {{ service.title }}
          </h3>

          <p class="service__description">
            {{ service.description }}
          </p>
        </div>

        <strong class="service__price d-block d-md-flex align-items-md-center justify-content-md-center">
          {{ service.price }}
        </strong>
      </div>
    </div>
  </article>
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
  name: "ServiceItem",

  props: {
    service: {
      type: Object,
      required: true
    }
  },

  computed: {
    ...mapState([
      'selectedServices'
    ]),

    additionalClasses () {
      const isSelected = this.selectedServices.find(({ id }) => id === this.service.id);

      return {
        'service--selected': isSelected
      }
    }
  },

  methods: {
    ...mapActions([
      'selectService',
      'removeService'
    ]),

    onTap () {
      const isSelectedService = this.selectedServices.find(({ id }) => id === this.service.id);

      if (!isSelectedService) {
        return this.selectService(this.service);
      }

      this.removeService(this.service.id);
    }
  }
}
</script>

<style lang="scss" scoped>
  .service {
    --pillColor: red;

    transition: .4s ease-in-out;

    &--selected {
      background-color: rgba(var(--pillColor), .1);
    }

    &__wrapper {
      padding: 15px 0;
      touch-action: initial !important;
    }

    &__info {
      flex: 1;
    }

    &__pill {
      flex: 0 0 13px;
      @include sizedBox(13px, 33px);

      border-radius: 13px;
      background-color: rgb(var(--pillColor));
    }

    &__text {
      margin-inline: 14px 0;
      flex: 1 0 calc(100% - 27px);
    }

    &__title,
    &__price,
    &__description {
      --fs: .8125rem;
    }

    &__title,
    &__price {
      font: 700 var(--fs) "Lexend", sans-serif;
    }

    &__title {
      color: #505050;
    }

    &__description {
      margin: 7px 0 0;

      color: #AEB1AA;
      font: 400 var(--fs) "Lexend", sans-serif;
    }

    &__price {
      color: #DBA06D;
      margin: 12px 0 0 14px;
    }

    @media (min-width: 768px) {
      &__title,
      &__price,
      &__description {
        --fs: 1rem;
      }

      &__text {
        flex: 1 0;
      }

      &__price {
        margin: 0;
        width: 180px;
      }
    }
  }
</style>