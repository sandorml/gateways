import {
  SET_PERIPHERALS,
  CREATE_PERIPHERAL,
  SET_MAX_PERIPHERAL,
  EDIT_PERIPHERAL,
  DELETE_PERIPHERAL
} from "./actions";

import { updatePeripheral, deletePeripheral } from "./helpers";

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
    case EDIT_PERIPHERAL:
      return updatePeripheral(state, action);
    case DELETE_PERIPHERAL:
      return deletePeripheral(state, action);
    default:
      return state;
  }
};

export default reducer;
