<template>
  <v-row justify="center">
    <v-dialog v-model="dialog" persistent max-width="600px">
      <template v-slot:activator="{ on }">
        <v-btn v-on="on" class="signin" height="50" rounded>
          ログイン
        </v-btn>
      </template>
      <v-card>
        <v-card-title>
          <span class="headline btn-text-color">ログイン</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-row>
              <v-col cols="12">
                <v-text-field
                  v-model="email"
                  :error-messages="emailErrors"
                  @input="$v.email.$touch()"
                  @blur="$v.email.$touch()"
                  label="Email*"
                  required
                />
              </v-col>
              <v-col cols="12">
                <v-text-field
                  v-model="password"
                  :error-messages="passwordErrors"
                  @input="$v.password.$touch()"
                  @blur="$v.password.$touch()"
                  label="Password*"
                  type="password"
                  required
                />
              </v-col>
            </v-row>
          </v-container>
          <small>*印は入力必須項目です</small>
        </v-card-text>
        <v-card-actions>
          <v-spacer />
          <v-btn @click="close" text>
            <span class="btn-text-color">
              閉じる
            </span>
          </v-btn>
          <v-btn @click="submit" text>
            <span class="btn-text-color">
              ログイン
            </span>
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
import { required, minLength, maxLength, email } from 'vuelidate/lib/validators'
import { validateEmail, validatePassword } from '~/plugins/utils/vuelidates.js'

export default {
  data: () => ({
    dialog: false,
    email: '',
    password: ''
  }),

  validations: {
    email: {
      required,
      email
    },
    password: {
      required,
      minLength: minLength(6),
      maxLength: maxLength(64)
    }
  },

  computed: {
    emailErrors () {
      return validateEmail(this.$v.email)
    },
    passwordErrors () {
      return validatePassword(this.$v.password)
    }
  },

  methods: {
    submit () {
      if (this.$v.$touch()) {
        this.dialog = false
        this.clearInputValue()
      }
    },
    close () {
      this.dialog = false
      this.$v.$reset()
      this.clearInputValue()
    },
    clearInputValue () {
      this.email = ''
      this.password = ''
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~/assets/scss/signinDialog.scss';
</style>
