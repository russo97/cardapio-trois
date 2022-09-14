<template>
  <header class="header">
    <div class="header__wrapper d-flex align-items-center justify-content-center flex-column">
      <figure
        class="header__logo"
        title="Menu de Procedimentos - Trois Beauté"
      >
        <img
          loading="lazy"
          alt="Trois Beauté"
          :src="require('@/assets/images/trois-logo-colorful.svg')"
        />
      </figure>

      <h1 class="header__pagetitle text-center">
        Olá! Selecione seus serviços
      </h1>
    </div>
  </header>
</template>

<script>
export default {
  name: "AppHeader"
}
</script>

<style lang="scss" scoped>
  .header {
    &__wrapper {
      height: 200px;
      margin: 0 auto;
      padding: 0 20px;
      max-width: 1180px;
    }

    &__logo {
      margin-inline: auto;

      &,
      img {
        width: 150px;
      }
    }

    &__pagetitle {
      margin: 20px 0 0;

      color: #505050;
      font: 500 1.5625rem "Lexend", sans-serif;
    }
  }
</style>