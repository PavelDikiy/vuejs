import {deffaultNoteState} from './defaults';
import {clone} from 'lodash';

export default {
  note: clone(deffaultNoteState),
  notes: JSON.parse(localStorage.getItem('notes')) || [],
  saveTimeout: null
}