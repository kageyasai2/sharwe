<template>
  <div>ログインしています......</div>
</template>

<script>
export default {
  async mounted () {
    if (!this.$auth.$state.loggedIn) {
      return this.$router.push('/')
    }

    try {
      const user = this.$auth.$state.user
      const strategy = this.$auth.$state.strategy
      const sendData = {
        oauth: {
          uid: user.sub,
          provider: strategy,
          nickname: user.name,
          email: user.email,
          thumbnail: user.picture
        }
      }
      const response = await this.$axios.post('/api/auth/sign_in', sendData)
      const headerInfo = response.data.data
      this.$store.dispatch('user/signIn', { headerInfo, loggedIn: true })
      this.$router.push(`/user/${headerInfo.id}/mypage`)
    } catch (err) {
      this.$auth.logout('google')
      this.$router.push('/')
    }
  }
}
</script>
