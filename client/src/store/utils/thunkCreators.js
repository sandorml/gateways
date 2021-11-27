import axios from "axios";
import {
  getPeripherals,
} from "../peripheral";


export const fetchPeripherals = () => async (dispatch) => {
    try {
      const { data } = await axios.get("/api/peripheral");
      dispatch(getPeripherals(data));
    } catch (error) {
      console.error(error);
    }
  };