import * as types from './mutation-types';

export default {
  [types.ADD_COURSE](state, obj){
    obj.id = Date.now();
    state.listCourses.push(obj);
  },
  [types.EDIT_COURSE](state, obj){
    console.log(obj);
    for (let i = 0; state.listCourses.length; i++) {
      if (state.listCourses[i].id === obj.id) {
        state.listCourses[i] = obj;
        break;
      }
    }
  },
  [types.DELETE_COURSE](state, id){
    state.listCourses = state.listCourses.filter((item) => {
      return item.id !== id;
    });
  }
}
