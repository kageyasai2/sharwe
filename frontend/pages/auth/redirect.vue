<template>
  <div>ログインしています......</div>
</template>

<script>
export default {
  mounted () {
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
    const response = this.$axios.post('/api/auth/sign_in', sendData)
      .then((res) => {
        console.log(res)
      })
      .catch((err) => {
        console.log(err)
      })
    console.log(response)
  }
}
</script>
