export const state = () => ({
  headerInfo: {
    id: null,
    accessToken: null,
    uid: null,
    loggedIn: false
  }
})

export const getters = {
  fetchHeaderInfo (state) {
    return state.headerInfo
  }
}

export const mutations = {
  setSignInState (state, { headerInfo, loggedIn }) {
    state.headerInfo.accessToken = headerInfo.accessToken
    state.headerInfo.uid = headerInfo.uid
    state.headerInfo.id = headerInfo.id
    state.headerInfo.loggedIn = loggedIn
  }
}

export const actions = {
  signIn ({ commit }, { headerInfo, loggedIn }) {
    commit('setSignInState', { headerInfo, loggedIn })
  },
  signOut ({ commit }) {
    const headerInfo = {
      accessToken: null,
      uid: null,
      id: null
    }
    commit('setSignInState', { headerInfo, loggedIn: false })
  }
}
