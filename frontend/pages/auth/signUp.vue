<template>
  <v-row justify="center">
    <v-card class="signup">
      <v-card-title>
        <span class="headline btn-text-color">新規登録</span>
      </v-card-title>
      <v-card-subtitle>
        <div v-if="errMsg == ''">
          <v-spacer />
        </div>
        <div v-else>
          <h4 class="err-msg">{{ errMsg }}</h4>
          <h4 class="err-msg">{{ errors.email }}</h4>
        </div>
      </v-card-subtitle>
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
        <v-btn @click="submit" text>
          <span class="btn-text-color">
            作成
          </span>
        </v-btn>
      </v-card-actions>
    </v-card>
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
    email: '',
    userName: '',
    password: '',
    rePassword: '',
    errMsg: '',
    errors: {
      email: ''
    }
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
    async submit () {
      this.$v.$touch()
      if (this.$v.$invalid) { return }
      try {
        const sendData = {
          userName: this.userName,
          email: this.email,
          password: this.password,
          password_confirmation: this.rePassword
        }
        const response = await this.$axios.post('/api/auth', sendData)
        this.$store.dispatch('user/signIn', {
          currentUser: response.data.data,
          headerInfo: response.headers
        })
        this.clearInputValue()
        this.$router.push(`/first`)
      } catch (err) {
        this.errMsg = '新規作成に失敗しました'
        if (err.response.data.errors.email[0]) {
          this.errors.email = this.email + err.response.data.errors.email[0]
        }
        this.$v.$reset()
        this.clearInputValue()
      }
    },
    clearInputValue () {
      this.email = ''
      this.userName = ''
      this.password = ''
      this.rePassword = ''
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~/assets/scss/signUp.scss';
</style>
