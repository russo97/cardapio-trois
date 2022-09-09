<template>
  <header class="header">
    <div class="header__wrapper d-flex align-items-center">
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
      height: 100px;
      margin: 0 auto;
      padding: 0 20px;
      max-width: 1180px;
    }
  }
</style>