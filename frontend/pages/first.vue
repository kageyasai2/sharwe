<template>
  <div>
    <p>Sharweにご登録頂きありがとうございます。</p>
    <p>本サービスはまだβ版で機能制限などがありますがご了承ください。</p>
    <v-btn :to="{ name: 'user-id-mypage', params: { id: currentUser.id}}" nuxt>
      >マイページ
    </v-btn>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  middleware: 'authenticated',
  computed: {
    ...mapState('user', [
      'currentUser'
    ])
  }
}
</script>
