import {
  apiCreatePeripheral,
  apiDeletePeripheral,
  apiFetchPeripherals,
  apiUpdatePeripheral
} from "../../api/peripherals";

export const SET_PERIPHERALS = "SET_PERIPHERALS";
export const CREATE_PERIPHERAL = "CREATE_PERIPHERAL";
export const SET_MAX_PERIPHERAL = "SET_MAX_PERIPHERAL";
export const EDIT_PERIPHERAL = "EDIT_PERIPHERAL";
export const DELETE_PERIPHERAL = "DELETE_PERIPHERAL";

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

export const updatePeripheral = (peripheral) => async (dispatch) => {
  try {
    const { data } = await apiUpdatePeripheral(peripheral);
    dispatch(editPeripheral(data));
  } catch (error) {
    console.error(error);
  }
};

export const deletePeripheral = (peripheral) => async (dispatch) => {
  try {
    const { data } = await apiDeletePeripheral(peripheral);
    dispatch(removePeripheral(data));
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

export const newPeripheral = (peripheral) => {
  return {
    type: CREATE_PERIPHERAL,
    peripheral,
  };
};

export const editPeripheral = (peripheral) => {
  return {
    type: EDIT_PERIPHERAL,
    peripheral,
  };
};

export const removePeripheral = (peripheral) => {
  return {
    type: DELETE_PERIPHERAL,
    peripheral,
  };
};

export const setMaxPeripheral = () => {
  return {
    type: SET_MAX_PERIPHERAL,
  };
};
