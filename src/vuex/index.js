/**
 * Created by Jincheng on 2017/4/18.
 */
import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
import actions from './actions'

Vue.use(Vuex)

const state = {
  notes: [],
  activeNote: {}
}

const getters = {
  notes: state => state.notes,
  activeNote: state => state.activeNote
}

export default new Vuex.Store({
  state,
  actions,
  mutations,
  getters
})
