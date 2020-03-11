import Vue from 'vue'
import Vuex from 'vuex'
import state from './state'
import getters from './getters'
import mutations from './mutations'
import actions from './actions'
import user from './module/user'
import saveState from './plugin/saveState';
Vue.use(Vuex)

export default new Vuex.Store({
  strict:process.env.NODE_ENV==='development',
  state: state,
  getters: getters,
  mutations: mutations,
  actions: actions,
  modules: {
    user
  },
  // plugins:[saveState]
})
