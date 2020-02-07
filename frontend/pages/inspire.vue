<template>
  <v-layout>
    <v-flex class="text-center">
      <v-btn @click="signOut">
        signOut
      </v-btn>
      <img
        src="/v.png"
        alt="Vuetify.js"
        class="mb-5"
      >
      <blockquote class="blockquote">
        &#8220;First, solve the problem. Then, write the code.&#8221;
        <footer>
          <small>
            <em>&mdash;John Johnson</em>
          </small>
        </footer>
      </blockquote>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  methods: {
    signOut () {
      this.$auth.logout('google')
      this.$store.dispatch('user/signOut')
    }
  }
}
</script>
