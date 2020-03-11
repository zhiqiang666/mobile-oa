import { getUsername } from '@/api/app'
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
  async updateUserName({ commit }) {
    const {info:{newName}} = await getUsername()
    commit('SET_USER_NAME',newName)
  },
  updateUserNames({ commit, state, rootState }) {
    //根模块
    dispatch('setName', '')
  },
  setName() {

  }
}
export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}
