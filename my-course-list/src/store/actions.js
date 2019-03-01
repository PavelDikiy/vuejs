import * as mutations from './mutation-types';

export const addCourseSt = ({commit, dispatch, state}, obj) => {
  commit(mutations.ADD_COURSE, obj);
  dispatch('storeCourse');
  /*state.listCourses.push({
   id: Date.now(),
   name: this.addName,
   code: this.addCode
   });*/
};

export const storeCourse = ({state}) => {
  localStorage.setItem('listCourses', JSON.stringify(state.listCourses));
};

export const editCourseSt = ({commit, dispatch, state}, obj) => {
  commit(mutations.EDIT_COURSE, obj);

  dispatch('storeCourse');
};

export const delCourseSt = ({commit, dispatch, state}, id) => {
  commit(mutations.DELETE_COURSE, id);

  dispatch('storeCourse');
};