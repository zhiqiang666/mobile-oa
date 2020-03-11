import vue from 'vue'
const mutations = {
  setMyTel(state, param) {
    state.myTel = param
  },
  setApp(state) {
    vue.set(state, 'appVersion', 'V2.0')
  },
  setStateValue(state, value) {
    state.stateValue = value
  }
}
export default mutations
