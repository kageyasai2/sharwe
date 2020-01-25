export const state = () => ({
  isSignedIn: false,
  currentUser: null,
  headerInfo: null
})

export const getters = {
  fetchIsSignIn (state) {
    return state.isSignedIn
  },
  fetchCurrentUser (state) {
    return state.currentUser
  },
  fetchHeaderInfo (state) {
    return state.headerInfo
  }
}

export const mutations = {
  setSignInState (state, { isSignedIn, currentUser, headerInfo }) {
    state.isSignedIn = isSignedIn
    state.currentUser = currentUser
    state.headerInfo = headerInfo
  }
}

export const actions = {
  signIn ({ commit }, { currentUser, headerInfo }) {
    const params = {
      isSignedIn: true,
      currentUser,
      headerInfo
    }
    commit('setSignInState', params)
  },
  signOut ({ commit }) {
    const params = {
      isSignedIn: false,
      currentUser: null,
      headerInfo: null
    }
    commit('setSignInState', params)
  }
}
