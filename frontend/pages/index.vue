<template>
  <div>
    <div class="top-wrapper">
      <div class="top-message">
        <h1>Sharwe</h1>
        <p>ハンドメイド作品のレシピをみんなと共有するサービスです</p>
        <p>レシピを投稿または検索をしてお気に入りの作品を見つけよう</p>
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
        <v-btn to="/auth/signUp" class="signup" nuxt>
          Sharweを始める
        </v-btn>
      </div>
    </div>
    <div class="service-wrapper">
      <p class="service-title">
        Sharweが提供する機能
      </p>
      <small>*が付いている機能はログイン必須です</small>
      <div class="service-items">
        <div class="service-item">
          <div class="service-icon">
            <v-icon size="80">
              search
            </v-icon>
            <p>レシピ検索</p>
          </div>
          <p class="service-txt">
            レシピの名前やジャンル等からレシピ検索することができます
          </p>
          <v-btn class="service-btn" to="/recipes/search" nuxt>
            >レシピ検索<v-icon>search</v-icon>
          </v-btn>
        </div>
        <div class="service-item">
          <div class="service-icon">
            <v-icon size="80">
              create
            </v-icon>
            <p>レシピ作成*</p>
          </div>
          <p class="service-txt">
            オリジナルのハンドメイド作品のレシピを作成して、みんなに公開することができます
          </p>
        </div>
        <div class="service-item">
          <div class="service-icon">
            <v-icon size="80">
              share
            </v-icon>
            <p>SNSでレシピを共有</p>
          </div>
          <p class="service-txt">
            レシピのURLをSNSでみんなに共有することができます
          </p>
        </div>
        <div class="service-item">
          <div class="service-icon">
            <v-icon size="80">
              favorite
            </v-icon>
            <p>お気に入り*</p>
          </div>
          <p class="service-txt">
            気に入ったレシピがあればお気に入りをして、自分だけのレシピブックを作成しましょう
          </p>
        </div>
      </div>
    </div>
    <div class="signup">
      <v-btn to="/auth/signUp" class="bottom-signup" nuxt>
        Sharweを始める
      </v-btn>
    </div>
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
