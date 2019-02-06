const initialState = {};

export default (state = initialState, action) => {
  const { payload } = action;
  switch (action.type) {
    case INIT_FAVORITES: {
      return {
        ...state,
      };
    }
    default: {
      return state;
    }
  }
};
