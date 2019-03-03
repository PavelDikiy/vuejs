import * as mutations from './mutation-types';

/*Courses*/
export const addCourseSt = ({commit, dispatch}, obj) => {
  commit(mutations.ADD_COURSE, obj);
  dispatch('storeCourse');
};

export const storeCourse = ({state}) => {
  localStorage.setItem('listCourses', JSON.stringify(state.listCourses));
};

export const editCourseSt = ({commit, dispatch}, obj) => {
  commit(mutations.EDIT_COURSE, obj);

  dispatch('storeCourse');
};

export const delCourseSt = ({commit, dispatch}, id) => {
  commit(mutations.DELETE_COURSE, id);

  dispatch('storeCourse');
};

/*Users*/
export const addUserSt = ({commit, dispatch}, obj) => {
  commit(mutations.ADD_USERS, obj);
  dispatch('storeUser');
};

export const storeUser = ({state}) => {
  localStorage.setItem('listUsers', JSON.stringify(state.listUsers));
};

export const editUserSt = ({commit, dispatch}, obj) => {
  commit(mutations.EDIT_USERS, obj);

  dispatch('storeUser');
};

export const delUserSt = ({commit, dispatch}, id) => {
  commit(mutations.DELETE_USERS, id);

  dispatch('storeUser');
};