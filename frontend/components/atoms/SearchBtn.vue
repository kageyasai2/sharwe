<template>
  <div class="search-btn">
    <v-text-field
      v-model="searchWord"
      @keydown.enter="onSearch"
      append-icon="search"
      label="作品名・レシピ名・ジャンルで検索"
      hide-details
      single-line
      outlined
      dense
    />
  </div>
</template>

<script>
export default {
  data () {
    return {
      searchWord: ''
    }
  },
  methods: {
    onSearch (e) {
      if (e.type !== 'click' && e.keyCode !== 13) { return }
      this.$store.commit('recipe/setSearchParams', this.searchWord)

      this.$router.push({
        path: '/recipes/search',
        query: { keyword: this.searchWord }
      })
    }
  }
}
</script>
