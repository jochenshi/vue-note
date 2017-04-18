/**
 * Created by Jincheng on 2017/4/18.
 */
import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'

Vue.use(Vuex)

const state = {
  notes: [],
  activeNote: []
}

export default new Vuex.Store({
  state,
  mutations
})
