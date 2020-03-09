const state = {
  userName: "susan"
}
const getters = {
  firstletter:(state)=>{
    return state.userName.substring(0,1)
  }
}
const mutaions = {

}
const actions = {

}
export default {
  namespaced: true,
  state,
  getters,
  mutaions,
  actions
}
