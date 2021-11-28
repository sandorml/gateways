import {
  SET_GATEWAYS,
  SEARCH_GATEWAY,
  SELECT_GATEWAY,
  CREATE_GATEWAY,
  UPDATE_GATEWAY,
} from "./actions";

import { updateGateway } from "./helpers";

const initialState = {
  gateways: [],
  search: "",
  selectedGateway: {},
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_GATEWAYS:
      return { ...state, gateways: action.gateways };
    case SEARCH_GATEWAY:
      return { ...state, search: action.search, gateways: action.gateways };
    case SELECT_GATEWAY:
      return { ...state, selectedGateway: action.gateway };
    case CREATE_GATEWAY:
      return {
        ...state,
        selectedGateway: action.gateway,
        gateways: [...state.gateways, action.gateway],
      };
    case UPDATE_GATEWAY:
      return updateGateway(state, action);
    default:
      return state;
  }
};
export default reducer;
