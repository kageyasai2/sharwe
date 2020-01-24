<template>
  <div class="top-wrapper">
    <div class="top-message">
      <h1>Sharwe</h1>
      <p>利用者が作成したハンドメイド作品をみんなと共有するサービスです</p>
      <p>作品を投稿または検索をしてお気に入りの作品を見つけよう</p>
    </div>
    <div class="signin-btn">
      <SigninDialog />
    </div>
    <div class="signup-btn">
      <SignupDialog />
    </div>
    <i class="mdi mdi-twitter"/>
  </div>
</template>
<script>
import SignupDialog from '~/components/SignupDialog.vue'
import SigninDialog from '~/components/SigninDialog.vue'

export default {
  layout: 'Lp',
  components: {
    SigninDialog,
    SignupDialog
  }
}
</script>
<style lang="scss" scoped>
@import "~/assets/scss/lp.scss";
</style>
