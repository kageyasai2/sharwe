<template>
  <div>
    <div class="top-wrapper">
      <div class="container">
        <div class="top-items">
          <h1>Sharwe</h1>
          <h2>あなたの自慢の作品をみんなに共有しよう</h2>
        </div>
        <div class="top-items signin">
          
        </div>
      </div>
    </div>
    <div class="main-wrapper" />
  </div>
</template>
<script>
import SigninForm from '~/components/SigninForm'
export default {
  layout: 'Lp',
  components: {
    SigninForm
  }
}
</script>
<style lang="scss" scoped>
@import "~/assets/scss/lp.scss";
</style>
