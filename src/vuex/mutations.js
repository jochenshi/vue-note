/**
 * Created by Jincheng on 2017/4/18.
 */
import * as types from './mutation-types'

export default {
  [types.ADD_NOTE] (state) {
    const newNote = {
      text: 'new note',
      favourite: false
    }
    state.notes.push(newNote)
    state.activeNote = newNote
  },
  [types.EDIT_NOTE] (state, text) {
    state.activeNote.text = text
  },
  [types.DELETE_NOTE] (state) {
    state.notes.$remove(state.activeNote)
    state.activeNote = state.notes[0]
  },
  [types.TOGGLE_FAVOURITE] (state) {
    state.activeNote.favourite = !state.activeNote.favourite
  },
  [types.SET_ACTIVE_NOTE] (state, note) {
    state.activeNote = note
  }
}
