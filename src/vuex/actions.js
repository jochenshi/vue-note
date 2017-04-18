/**
 * Created by Jincheng on 2017/4/18.
 */
import * as types from './mutation-types'

export default {
  addNote ({commit}) {
    commit(types.ADD_NOTE)
  },
  editNote ({commit}, text) {
    commit(types.EDIT_NOTE, text)
  },
  deleteNote ({commit}) {
    commit(types.DELETE_NOTE)
  },
  toggleFavourite ({commit}) {
    commit(types.TOGGLE_FAVOURITE)
  },
  updateNote ({commit}, note) {
    commit(types.SET_ACTIVE_NOTE, note)
  }
}
