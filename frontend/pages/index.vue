<template>
  <div class="top-wrapper">
    <div class="top-message">
      <h1>Sharwe</h1>
      <p>利用者が作成したハンドメイド作品をみんなと共有するサービスです</p>
      <p>作品を投稿または検索をしてお気に入りの作品を見つけよう</p>
    </div>
    <div>
      <v-btn v-if="!this.$store.getters['user/fetchIsSignIn']" to="/auth/signIn" nuxt>
        ログイン
      </v-btn>
      <v-btn v-else @click="signOut">
        ログアウト
      </v-btn>
    </div>
    <div>
      <v-btn to="/auth/signUp" nuxt>
        新規登録
      </v-btn>
    </div>
    <i class="mdi mdi-twitter" />
    <p>twitter共有つける</p>
  </div>
</template>
<script>
export default {
  layout: 'Lp',
  methods: {
    async signOut () {
      try {
        const headers = this.$store.getters['user/fetchHeaderInfo']
        const headerItems = {
          headers: {
            'uid': headers.uid,
            'client': headers.client,
            'access-token': headers['access-token']
          }
        }
        await this.$axios.delete('/api/auth/sign_out', headerItems)
        this.$store.dispatch('user/signOut')
      } catch (err) {
        console.log(err)
      }
    }
  }
}
</script>
<style lang="scss" scoped>
@import "~/assets/scss/lp.scss";
</style>
