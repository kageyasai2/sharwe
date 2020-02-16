<template>
  <div class="header-icon">
    <v-menu offset-y>
      <template v-slot:activator="{ on }">
        <v-btn
          v-on="on"
          class="avatar-btn d-none d-sm-flex d-md-flex d-lg-flex"
          text
        >
          <v-avatar>
            <img :src="currentUser.user.picture" class="avatar">
          </v-avatar>
        </v-btn>
      </template>

      <v-list>
        <v-list-item @click="signOut">
          <v-list-item-title>ログアウト</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
  </div>
</template>

<script>
export default {
  props: {
    currentUser: {
      type: Object,
      required: true
    }
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

<style>
.header-icon {
  padding-top: 0 !important;
}
.avatar-btn {
  height: 48px !important;
}

</style>
