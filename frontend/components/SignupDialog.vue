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
                <v-text-field
                  v-model="userName"
                  :error-messages="userNameErrors"
                  @input="$v.userName.$touch()"
                  @blur="$v.userName.$touch()"
                  label="userName*"
                  required
                />
              </v-col>
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
              <v-col cols="12">
                <v-text-field
                  v-model="rePassword"
                  :error-messages="rePasswordErrors"
                  @input="$v.rePassword.$touch()"
                  @blur="$v.rePassword.$touch()"
                  label="Re:password*"
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
          <v-btn @click="create" text>
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
import { required, sameAs, minLength, maxLength, email } from 'vuelidate/lib/validators'
import {
  validateUserName,
  validateEmail,
  validatePassword
} from '~/plugins/utils/vuelidates.js'

export default {
  data: () => ({
    dialog: false,
    email: '',
    userName: '',
    password: '',
    rePassword: ''
  }),

  validations: {
    userName: {
      required,
      minLength: minLength(4),
      maxLength: maxLength(32)
    },
    email: {
      required,
      email
    },
    password: {
      required,
      minLength: minLength(6),
      maxLength: maxLength(64)
    },
    rePassword: {
      required,
      sameAsPassword: sameAs('password')
    }
  },

  computed: {
    userNameErrors () {
      return validateUserName(this.$v.userName)
    },
    emailErrors () {
      return validateEmail(this.$v.email)
    },
    passwordErrors () {
      return validatePassword(this.$v.password)
    },
    rePasswordErrors () {
      const errors = []
      if (!this.$v.rePassword.$dirty) { return errors }
      !this.$v.rePassword.sameAsPassword && errors.push('Re:password dose not match password')
      !this.$v.rePassword.required && errors.push('Re:password is required')
      return errors
    }
  },

  methods: {
    create () {
      this.$v.$touch()
      if (this.$v.$invalid) { return }
      this.clearInputValue()
      this.$router.push('/home')
    },
    close () {
      this.$v.$reset()
      this.clearInputValue()
    },
    clearInputValue () {
      this.dialog = false
      this.email = ''
      this.userName = ''
      this.password = ''
      this.rePassword = ''
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~/assets/scss/signupDialog.scss';
</style>
