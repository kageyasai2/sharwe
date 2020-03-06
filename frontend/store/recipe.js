export const state = () => ({
  searchParams: {
    keyward: ''
  }
})

export const getters = {
  searchParams (state) {
    return state.searchParams.keyward
  }
}

export const mutations = {
  setSearchParams (state, searchParams) {
    state.searchParams.keyward = searchParams
  },
  resetSearchParams (state) {
    state.searchParams.keyward = null
  }
}
