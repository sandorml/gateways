import { SET_GATEWAYS, SEARCH_GATEWAY, SELECT_GATEWAY, CREATE_GATEWAY } from "./actions";

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
    default:
      return state;
  }
};
export default reducer;
