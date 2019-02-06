import { INIT_FAVORITE } from 'actions/types';

const initialState = {
  favorite: [],
};

export default (state = initialState, action) => {
  const { payload } = action;
  switch (action.type) {
    case INIT_FAVORITE: {
      // favorite is array of objects
      const { favorite } = payload;
      return {
        ...state,
        favorite,
      };
    }
    default: {
      return state;
    }
  }
};
