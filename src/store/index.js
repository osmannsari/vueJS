import Vuex from 'vuex';
import Vue from 'vue';
import actions from './actions';
import mutations from './mutations';
import getters from './getters';
import VuexPersist from 'vuex-persist';

const vuexPersist = new VuexPersist({
  storage: window.localStorage
})


Vue.use(Vuex)

const state = {
  invisible: true,
  token: localStorage.getItem('token'),
  user: localStorage.getItem('user'),
  newProjectName:null,
  
}
const store = new Vuex.Store({
  state,
  mutations,
  actions,
  getters,
  plugins: [vuexPersist.plugin],
})
export default store;

















// export default new Vuex.Store({
//   state,
//   mutations,
//   actions,
//   getters,

// })

