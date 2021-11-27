import {
  SET_PERIPHERALS,
  CREATE_PERIPHERAL,
  SET_MAX_PERIPHERAL,
} from "./actions";

const initialState = {
  peripherals: [],
  maxPeripherals: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_PERIPHERALS:
      return {
        ...state,
        maxPeripherals: false,
        peripherals: action.peripherals,
      };
    case CREATE_PERIPHERAL:
      return {
        ...state,
        maxPeripherals: false,
        peripherals: [...state.peripherals, action.peripheral],
      };
    case SET_MAX_PERIPHERAL:
      return {
        ...state,
        maxPeripherals: true,
      };
    default:
      return state;
  }
};

export default reducer;
