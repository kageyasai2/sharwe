<template>
  <div>
    <div class="top-wrapper">
      <div class="top-message">
        <img class="title-logo" src="~assets/images/image1.png">
        <p>ハンドメイド作品のレシピをみんなと共有するサービスです</p>
        <p>レシピを投稿または検索をしてお気に入りの作品を見つけよう</p>
      </div>
      <div>
        <v-btn v-if="!this.$auth.$state.loggedIn" @click="signin">
          Googleアカウントでログイン
        </v-btn>
        <v-btn v-else @click="signOut">
          ログアウト
        </v-btn>
      </div>
    </div>
    <div class="service-wrapper">
      <br>
      <p>＊本サービスはβ版のため提供できない機能がございます。＊</p>
      <p>＊ご了承ください＊</p>
      <p class="service-title">
        Sharweが提供する機能
      </p>
      <p class="warning-msg">
        レシピ作成とお気に入り機能を利用するためにはログインが必要です
      </p>
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
  </div>
</template>
<script>
export default {
  layout: 'Lp',
  mounted () {
    console.log(this.$auth.$state)
  },
  methods: {
    signin () {
      this.$auth.loginWith('google')
    },
    signOut () {
      this.$auth.logout('google')
      this.$store.dispatch('user/signOut')
    }
  }
}
</script>
<style lang="scss" scoped>
@import "~/assets/scss/lp.scss";
</style>
