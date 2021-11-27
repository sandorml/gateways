const GET_PERIPHERALS = "GET_PERIPHERALS";

export const getPeripherals = (peripherals) => {
  return {
    type: GET_PERIPHERALS,
    peripherals,
  };
};

const reducer = (state = {}, action) => {
  switch (action.type) {
    case GET_PERIPHERALS: {
      return action.peripherals;
    }
    default:
      return state;
  }
};

export default reducer;
