<template>
  <v-row justify="center">
    <v-dialog v-model="dialog" persistent max-width="600px">
      <template v-slot:activator="{ on }">
        <v-btn v-on="on" class="signup" height="50" rounded>
          新規登録
        </v-btn>
      </template>
      <v-card>
        <v-card-title>
          <span class="headline btn-text-color">新規登録</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-row>
              <v-col cols="12">
                <v-text-field label="Email*" required />
              </v-col>
              <v-col cols="12">
                <v-text-field label="Password*" type="password" required />
              </v-col>
            </v-row>
          </v-container>
          <small>*印は入力必須項目です</small>
        </v-card-text>
        <v-card-actions>
          <v-spacer />
          <v-btn @click="dialog = false" text>
            <span class="btn-text-color">
              閉じる
            </span>
          </v-btn>
          <v-btn @click="dialog = false" text>
            <span class="btn-text-color">
              作成
            </span>
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
export default {
  data: () => ({
    dialog: false
  })
}
</script>

<style lang="scss" scoped>
@import '~/assets/scss/signupDialog.scss';
</style>
