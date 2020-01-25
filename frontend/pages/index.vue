<template>
  <div class="top-wrapper">
    <div class="top-message">
      <h1>Sharwe</h1>
      <p>利用者が作成したハンドメイド作品をみんなと共有するサービスです</p>
      <p>作品を投稿または検索をしてお気に入りの作品を見つけよう</p>
    </div>
    <v-btn to="/auth/signIn" nuxt>
      ログイン
    </v-btn>
    <v-btn to="/auth/signUp" nuxt>
      新規登録
    </v-btn>
    <v-btn @click="logout" nuxt>
      ログアウト
    </v-btn>
    <i class="mdi mdi-twitter" />
    <p>twitter共有つける</p>
  </div>
</template>
<script>
export default {
  layout: 'Lp',
  methods: {
    logout () {
      const response = this.$axios.delete('/api/auth/sign_out')
        .then((response) => {
          console.log(response)
        }).catch((err) => {
          console.log(err)
        })
      console.log(response)
    }
  }
}
</script>
<style lang="scss" scoped>
@import "~/assets/scss/lp.scss";
</style>
