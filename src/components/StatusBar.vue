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
        class="statusbar__information d-flex align-items-center justify-content-center"
      >
        <svg
          width="31.5"
          height="31.5"
          viewBox="0 0 31.5 31.5"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="#fff"
            transform="translate(0 -2.25)"
            d="M26.782,6.827A15.614,15.614,0,0,0,2.215,25.664L0,33.75l8.276-2.173a15.562,15.562,0,0,0,7.46,1.9h.007A15.76,15.76,0,0,0,31.5,17.866,15.671,15.671,0,0,0,26.782,6.827ZM15.743,30.846a12.951,12.951,0,0,1-6.609-1.807l-.471-.281L3.755,30.045l1.308-4.788-.309-.492a13,13,0,1,1,24.11-6.9,13.119,13.119,0,0,1-13.12,12.98Zm7.116-9.717c-.387-.2-2.306-1.139-2.665-1.266s-.619-.2-.879.2-1.005,1.266-1.237,1.533-.457.3-.844.1a10.617,10.617,0,0,1-5.309-4.641c-.4-.689.4-.64,1.146-2.13a.723.723,0,0,0-.035-.682c-.1-.2-.879-2.116-1.2-2.9-.316-.759-.64-.654-.879-.668s-.485-.014-.745-.014a1.445,1.445,0,0,0-1.041.485A4.383,4.383,0,0,0,7.8,14.4a7.641,7.641,0,0,0,1.589,4.036c.2.26,2.749,4.2,6.666,5.892,2.475,1.069,3.445,1.16,4.683.977a4,4,0,0,0,2.63-1.856,3.262,3.262,0,0,0,.225-1.856C23.505,21.417,23.245,21.319,22.859,21.129Z"
          />
        </svg>

        <span class="mobile-message text-center d-inline d-md-none">
          Finalizar agendamento
        </span>

        <span class="desktop-message text-center d-none d-md-inline">
          Finalize seu agendamento aqui
        </span>
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

    &__information {
      padding: 4px 8px;
      border-radius: 5px;
      border: solid 2px #fff;

      svg {
        width: 18px;
        flex: 0 0 18px;
        margin-inline: 0 8px;
      }
    }
  }
</style>