import * as types from './mutation-types';
import {deffaultNoteState} from './defaults';
import {clone} from 'lodash';

export default{
  [types.SET_CURRENT_NOTE_ID] (state, id) {
    state.note.id = id;
  },
  [types.PREPEND_TO_NOTES] (state, note) {
    state.notes.unshift(note);
  },
  [types.TOUCH_LAST_SAVED] (state) {
    state.note.lastSaved = Date.now();
  },
  [types.SET_SAVE_TIMEOUT] (state, {callback, delay}) {
    state.saveTimeout = setTimeout(callback, delay)
  },
  [types.CLEAR_SAVE_TIMEOUT] (state) {
    clearInterval(state.saveTimeout);
    state.saveTimeout = null
  },
  [types.SET_CURRENT_NOTE] (state, note) {
    if (note === null) {
      state.note = clone(deffaultNoteState);
      return
    }
    state.note = note
  },
  [types.DELETE_NOTE] (state, id) {
    state.notes = state.notes.filter((note) => {
      return note.id !== id;
    })
  }

}