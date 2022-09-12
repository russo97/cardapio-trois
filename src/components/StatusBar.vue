<template>
  <section
    class="statusbar p-fixed"
    :class="{ 'statusbar--visible': selectedServices.length }"
  >
    <div class="statusbar__wrapper d-flex align-items-center justify-content-between">
      <strong class="statusbar__message d-flex align-items-center">
        {{ selectedServices.length }} {{ selectionText }}
      </strong>

      <a
        :href="href"
        target="_blank"
        class="statusbar__information d-flex align-items-center"
      >
        Informações

        <svg
          class="w-5 h-5"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M4.25 5.5a.75.75 0 00-.75.75v8.5c0 .414.336.75.75.75h8.5a.75.75 0 00.75-.75v-4a.75.75 0 011.5 0v4A2.25 2.25 0 0112.75 17h-8.5A2.25 2.25 0 012 14.75v-8.5A2.25 2.25 0 014.25 4h5a.75.75 0 010 1.5h-5z"
          />

          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M6.194 12.753a.75.75 0 001.06.053L16.5 4.44v2.81a.75.75 0 001.5 0v-4.5a.75.75 0 00-.75-.75h-4.5a.75.75 0 000 1.5h2.553l-9.056 8.194a.75.75 0 00-.053 1.06z"
          />
        </svg>
      </a>
    </div>
  </section>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "StatusBar",

  computed: {
    ...mapState([
      'selectedServices'
    ]),

    selectionText () {
      return this.selectedServices.length < 2
        ? "serviço selecionado"
        : "serviços selecionados";
    },

    href () {
      const selectedServices = this.selectedServices.map(({ title }) => title);

      if (!selectedServices.length) return '#';

      if (selectedServices.length < 2) {
        return `https://api.whatsapp.com/send?phone=5581994310804&text=Olá, desejo informações sobre ${selectedServices[0]}`
      }

      return `https://api.whatsapp.com/send?phone=5581994310804&text=Olá, desejo informações sobre esses servicos: ${selectedServices.join(', ')}.`;
    }
  }
}
</script>

<style lang="scss" scoped>
  .statusbar {
    left: 0;
    top: 100%;
    width: 100%;
    height: 70px;
    transition: .4s ease-in-out;
    background-color: rgb(111, 130, 124);

    &--visible {
      top: calc(100% - 70px);
    }

    &__wrapper {
      height: 100%;
      margin: 0 auto;
      padding: 0 20px;
      max-width: 1180px;
    }

    &__message,
    &__information {
      color: #fff;
      font: 500 .875rem "Lexend", sans-serif;
    }

    &__message {
      height: 70px;
    }

    &__information svg {
      width: 18px;
      margin-inline: 8px 0;
    }
  }
</style>