import { getTel } from '@/api/app'
const actions = {
  // updateTel(r, { commit }) {
  //   getTel().then(res => {
  //     const { newTel } = res
  //     commit('setMyTel', newTel)
  //   }).catch(err => {
  //     console.log(err)
  //   })
  // }
  async updateTel({ commit }) {
    try {
      const { newTel } = await getTel()
      commit('setMyTel', newTel)
    } catch (err) {
      console.log(err)
    }
  }
}
export default actions
