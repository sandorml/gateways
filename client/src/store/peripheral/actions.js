import { apiFetchPeripherals } from "../../api/peripherals";


export const SET_PERIPHERALS = "SET_PERIPHERALS";

export const fetchPeripherals = (gatewayId) => async (dispatch) => {
    try {
      const { data } = await apiFetchPeripherals(gatewayId);
      dispatch(setPeripherals(data));
    } catch (error) {
      console.error(error);
    }
  };
  

export const setPeripherals = (peripherals) => {
  return {
    type: SET_PERIPHERALS,
    peripherals,
  };
};
