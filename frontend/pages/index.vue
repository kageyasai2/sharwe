<template>
  <div class="top-wrapper">
    <div class="top-message">
      <h1>Sharwe</h1>
      <p>利用者が作成したハンドメイド作品をみんなと共有するサービスです</p>
      <p>作品を投稿または検索をしてお気に入りの作品を見つけよう</p>
    </div>
    <v-btn v-if="!this.$store.getters['user/fetchIsSignedIn']" to="/auth/signIn" nuxt>
      ログイン
    </v-btn>
    <v-btn v-else @click="signOut">
      ログアウト
    </v-btn>
    <v-btn to="/auth/signUp" nuxt>
      新規登録
    </v-btn>
    <i class="mdi mdi-twitter" />
    <p>twitter共有つける</p>
  </div>
</template>
<script>
export default {
  layout: 'Lp',
  mounted () {
    console.log(this.$store.getters['user/fetchHeaderInfo'])
  },
  methods: {
    signOut () {
      const headers = this.$store.getters['user/fetchHeaderInfo']
      const headerItems = {
        'uid': headers.uid,
        'client': headers.client,
        'access-token': headers['access-token']
      }
      const response = this.$axios.delete('/api/auth/sign_out', {
        headers: headerItems
      }).then((response) => {
        this.$store.dispatch('user/signOut')
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
