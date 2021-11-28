export function updateGateway(state, action) {
  const i = state.gateways.findIndex((e) => e._id === action.gateway._id);
  state.gateways[i] = action.gateway;
  return { ...state, gateways: [...state.gateways] };
}

export function deleteGateway(state, action) {
  const restOfGateways = state.gateways.filter(
    (e) => e._id !== action.gateway._id
  );

  return {
    ...state,
    selectedGateway: restOfGateways.length ? restOfGateways[0] : {},
    gateways: [...restOfGateways],
  };
}
