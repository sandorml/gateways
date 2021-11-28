import {
  apiFetchGateways,
  apiCreateGateway,
  apiUpdateGateway,
} from "../../api/gateways";

export const SET_GATEWAYS = "SET_GATEWAYS";
export const SEARCH_GATEWAY = "SEARCH_GATEWAY";
export const SELECT_GATEWAY = "SELECT_GATEWAY";
export const CREATE_GATEWAY = "CREATE_GATEWAY";
export const UPDATE_GATEWAY = "UPDATE_GATEWAY";

export const fetchGateways = () => async (dispatch) => {
  try {
    const { data } = await apiFetchGateways();
    dispatch(setGateways(data));
    if (data.length) {
      dispatch(selectGateway(data[0]));
    }
  } catch (error) {
    console.error(error);
  }
};

export const fetchAndSearchGateways = (search) => async (dispatch) => {
  try {
    const { data } = await apiFetchGateways();

    const filteredGateways = data.filter(
      (gateway) => gateway.name.toLowerCase().indexOf(search.toLowerCase()) >= 0
    );

    dispatch(searchGateways(search, filteredGateways));
  } catch (error) {
    console.error(error);
  }
};

export const createGateway =
  (serial, name, ipv4Address) => async (dispatch) => {
    try {
      const { data } = await apiCreateGateway({ serial, name, ipv4Address });
      dispatch(newGateway(data));
    } catch (error) {
      console.error(error);
    }
  };

export const updateGateway = (gateway) => async (dispatch) => {
  try {
    const { data } = await apiUpdateGateway(gateway);
    dispatch(editGateway(data));
    dispatch(selectGateway(data));
  } catch (error) {
    console.error(error);
  }
};

export const setGateways = (gateways) => {
  return {
    type: SET_GATEWAYS,
    gateways,
  };
};

export const searchGateways = (search, gateways) => {
  return {
    type: SEARCH_GATEWAY,
    search,
    gateways,
  };
};

export const selectGateway = (gateway) => {
  return {
    type: SELECT_GATEWAY,
    gateway,
  };
};

export const newGateway = (gateway) => {
  return {
    type: CREATE_GATEWAY,
    gateway,
  };
};

export const editGateway = (gateway) => {
  return {
    type: UPDATE_GATEWAY,
    gateway,
  };
};
