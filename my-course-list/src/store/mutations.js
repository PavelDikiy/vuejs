import * as types from './mutation-types';

export default {
  /*Courses*/
  [types.ADD_COURSE](state, obj){
    obj.id = Date.now();
    state.listCourses.push(obj);
  },
  [types.EDIT_COURSE](state, obj){
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
  },
  /*Users*/
  [types.ADD_USERS](state, obj){
    obj.id = Date.now();
    state.listUsers.push(obj);
  },
  [types.EDIT_USERS](state, obj){
    for (let i = 0; state.listUsers.length; i++) {
      if (state.listUsers[i].id === obj.id) {
        state.listUsers[i] = obj;
        break;
      }
    }
  },
  [types.DELETE_USERS](state, id){
    state.listUsers = state.listUsers.filter((item) => {
      return item.id !== id;
    });
  }
}
