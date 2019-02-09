import { SHOW_SIDEBAR, HIDE_SIDEBAR } from 'actions/types';

const initialState = false;

export default (state = initialState, action) => {
  switch (action.type) {
    case SHOW_SIDEBAR: {
      return true;
    }
    case HIDE_SIDEBAR: {
      return false;
    }
    default: {
      return state;
    }
  }
};
