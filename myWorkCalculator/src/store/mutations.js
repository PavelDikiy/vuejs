import * as types from './mutation-types';

export default {
  [types.GET_CREDITE_LIST] (state, datafetch){
    state.creditList = datafetch;
  },
  [types.COMPLATE_RESULT] (state, obj){
    state.result = obj;
  }
}