<template>
  <v-row justify="center">
    <v-card class="signin">
      <v-card-title>
        <span class="headline btn-text-color">ログイン</span>
        <div v-if="errMsg == ''">
          <v-spacer />
        </div>
        <div v-else>
          <small>{{ errMsg }}</small>
        </div>
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
        <v-btn @click="submit" text>
          <span class="btn-text-color">
            ログイン
          </span>
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-row>
</template>

<script>
import { required, minLength, maxLength, email } from 'vuelidate/lib/validators'
import { validateEmail, validatePassword } from '~/plugins/utils/vuelidates.js'

export default {
  data: () => ({
    email: '',
    password: '',
    errMsg: ''
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
    async submit () {
      this.$v.$touch()
      if (this.$v.$invalid) { return }
      try {
        const sendData = {
          session: {
            email: this.email,
            password: this.password
          }
        }
        const response = await this.$axios.post('/api/auth/sign_in', sendData)
        const currentUser = response.data.data
        const headerInfo = response.headers
        this.$store.dispatch('user/signIn', {
          currentUser,
          headerInfo
        })
        this.$v.$reset()
        this.clearInputValue()
        this.$router.push(`/user/${currentUser.id}/mypage`)
      } catch (err) {
        console.log(err)
        this.errMsg = 'Eメールまたはパスワードが違います'
        this.$v.$reset()
      }
    },
    clearInputValue () {
      this.email = ''
      this.password = ''
      this.errMsg = ''
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~/assets/scss/signIn.scss';
</style>
