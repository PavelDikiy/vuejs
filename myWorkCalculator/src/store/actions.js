import * as mutations from './mutation-types';

export const getCreditList = ({commit}, datafetch) => {
  commit(mutations.GET_CREDITE_LIST, datafetch);
};

export const completeResult = ({commit}, obj) => {
  commit(mutations.COMPLATE_RESULT, obj);
};