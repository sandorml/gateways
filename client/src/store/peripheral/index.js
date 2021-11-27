import { SET_PERIPHERALS } from "./actions";

const initialState = {
  peripherals: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_PERIPHERALS:
      return {
        ...state,
        peripherals: action.peripherals,
      };
    default:
      return state;
  }
};

export default reducer;
