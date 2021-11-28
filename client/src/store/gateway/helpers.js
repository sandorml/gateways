export function updateGateway(state, action) {
  const i = state.gateways.findIndex((e) => e.serial === action.gateway.serial);
  state.gateways[i] = action.gateway;
  return { ...state, gateways: [...state.gateways] };
}
