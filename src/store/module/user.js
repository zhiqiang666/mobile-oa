const state = {
  userName: "susan"
}
const getters = {
  firstletter: (state) => {
    return state.userName.substring(0, 1)
  }
}
const mutations = {
  SET_USER_NAME(state, params) {
    state.userName = params
  }
}
const actions = {

}
export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}
