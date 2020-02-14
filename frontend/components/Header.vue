<template>
  <div>
    <v-navigation-drawer
      v-model="drawer"
      app
      temporary
    >
      <v-list-item v-if="this.$auth.$state.loggedIn" two-line>
        <v-list-item-avatar>
          <v-img :src="this.$auth.$state.user.picture" />
        </v-list-item-avatar>

        <v-list-item-content>
          <v-list-item-title>{{ this.$auth.$state.user.name }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>

      <v-divider />

      <v-list dense>
        <v-list-item to="/home">
          <v-list-item-icon>
            <v-icon>menu_book</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>レシピ検索</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item v-if="this.$auth.$state.loggedIn" :to="{ name: 'user-id-mypage', params: { id: headerInfo.id}}">
          <v-list-item-icon>
            <v-icon>home</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>マイページ</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item v-if="this.$auth.$state.loggedIn" @click="signOut" class="signout">
          <v-list-item-icon>
            <v-icon>exit_to_app</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>ログアウト</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item v-else @click="signIn" class="signin">
          <v-list-item-icon>
            <v-icon>account_circle</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>ログイン</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar
      class="app-bar"
      dense
      app
      flat
      height="60"
    >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" class="d-flex d-sm-none" />
      <v-toolbar-title>
        <nuxt-link to="/">
          <img class="title-logo" src="~assets/images/image1.png">
        </nuxt-link>
      </v-toolbar-title>
      <v-toolbar-items>
        <v-btn to="/home" class="d-none d-sm-flex d-md-flex d-lg-flex" text nuxt>
          <v-icon left>
            menu_book
          </v-icon>
          レシピ検索
        </v-btn>
        <v-btn v-if="!currentUser.loggedIn" @click="signIn" class="signin d-none d-sm-flex d-md-flex d-lg-flex" text nuxt>
          <v-icon left>
            account_circle
          </v-icon>
          ログイン
        </v-btn>
        <the-header-icon
          v-else
          :current-user="currentUser"
        />
      </v-toolbar-items>
      <v-spacer />
    </v-app-bar>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import TheHeaderIcon from '~/components/organisms/TheHeaderIcon.vue'

export default {
  components: {
    TheHeaderIcon
  },
  data: () => {
    return {
      thumbnail: 'https://cdn.vuetifyjs.com/images/john.jpg',
      isHydrated: false,
      drawer: false
    }
  },
  computed: {
    currentUser () {
      return this.$auth.$state
    },
    ...mapState('user', [
      'headerInfo'
    ])
  },
  mounted () {
    this.isHydrated = true
  },
  methods: {
    signIn () {
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
@import '~/assets/scss/header.scss';
</style>
