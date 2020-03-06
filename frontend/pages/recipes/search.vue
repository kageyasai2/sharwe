<template>
  <div>
    <SearchBtn />
    <div class="new-recipes mt-5">
      <h2>検索結果</h2>
      <p><small>{{ searchParams }}で検索しました</small></p>
      <small>12件のレシピが見つかりました</small>
      <v-row>
        <v-col
          v-for="item in items"
          :key="item.id"
          md="4"
          sm="6"
        >
          <v-card class="new-recipe-item">
            <a href="/" class="recipe-link">
              <v-img v-bind:src="require('@/assets/images/main-logo.png')" class="recipe-image" />
            </a>
            <h3 class="recipe-title text-truncate">
              <a class="recipe-link" href="/">
                簡単！！空のペットボトルでシャンデリア
              </a>
            </h3>
            <v-card-text class="recipe-description">
              作り方はとても簡単です。誰でも簡単に作れるものです。不要になったペットボトルでもおk...
            </v-card-text>
            <v-card-actions>
              <v-list-item class="grow">
                <v-list-item-avatar color="grey darken-3">
                  <v-img
                    class="elevation-6"
                    src="https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairShortCurly&accessoriesType=Prescription02&hairColor=Black&facialHairType=Blank&clotheType=Hoodie&clotheColor=White&eyeType=Default&eyebrowType=DefaultNatural&mouthType=Default&skinColor=Light"
                  />
                </v-list-item-avatar>

                <v-list-item-content>
                  <v-list-item-title>{{ item.userName }}</v-list-item-title>
                </v-list-item-content>

                <v-row
                  align="center"
                  justify="end"
                >
                  <v-icon class="mr-1" onclick="console.log(12345)">
                    mdi-heart
                  </v-icon>
                  <span class="subheading mr-2">256</span>
                  <v-icon class="mr-1">
                    mdi-share-variant
                  </v-icon>
                  <span class="subheading">45</span>
                </v-row>
              </v-list-item>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import SearchBtn from '~/components/atoms/SearchBtn.vue'
export default {
  components: {
    SearchBtn
  },
  data: () => ({
    items: [
      { id: 1, userName: 'test' },
      { id: 2, userName: 'test' },
      { id: 3, userName: 'test' },
      { id: 4, userName: 'test' },
      { id: 5, userName: 'test' },
      { id: 6, userName: 'test' },
      { id: 7, userName: 'test' },
      { id: 8, userName: 'test' },
      { id: 9, userName: 'test' },
      { id: 10, userName: 'test' },
      { id: 11, userName: 'test' },
      { id: 12, userName: 'test' }
    ]
  }),
  computed: {
    ...mapGetters({
      searchParams: 'recipe/searchParams'
    })
  }
}
</script>

<style lang="scss" scoped>
@import "~/assets/scss/recipe.scss";
</style>
