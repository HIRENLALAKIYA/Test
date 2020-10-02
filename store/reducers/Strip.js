import { LOAD_STRIP } from "../actions/Strip";

const initialState = {
  stripItems: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case LOAD_STRIP:
      const lodedStripData = action.stripList;
      return {
        stripItems: lodedStripData,
      };
  }
  return state;
};
