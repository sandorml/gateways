import {
  apiCreatePeripheral,
  apiFetchPeripherals,
} from "../../api/peripherals";

export const SET_PERIPHERALS = "SET_PERIPHERALS";
export const CREATE_PERIPHERAL = "CREATE_PERIPHERAL";
export const SET_MAX_PERIPHERAL = "SET_MAX_PERIPHERAL";

export const fetchPeripherals = (gatewayId) => async (dispatch) => {
  try {
    const { data } = await apiFetchPeripherals(gatewayId);
    dispatch(setPeripherals(data));
  } catch (error) {
    console.error(error);
  }
};

export const createPeripheral =
  (uid, vendor, status, gateway) => async (dispatch) => {
    try {
      const { data } = await apiCreatePeripheral({
        uid,
        vendor,
        status,
        gateway,
      });
      dispatch(newPeripheral(data));
    } catch (error) {
      if (error?.response?.status) {
        dispatch(setMaxPeripheral());
      } else {
        console.error(error);
      }
    }
  };

export const setPeripherals = (peripherals) => {
  return {
    type: SET_PERIPHERALS,
    peripherals,
  };
};

export const newPeripheral = (peripheral) => {
  return {
    type: CREATE_PERIPHERAL,
    peripheral,
  };
};

export const setMaxPeripheral = () => {
  return {
    type: SET_MAX_PERIPHERAL,
  };
};
