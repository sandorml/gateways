export function updatePeripheral(state, action) {
  const i = state.peripherals.findIndex((e) => e._id === action.peripheral._id);
  state.peripherals[i] = action.peripheral;
  return { ...state, peripherals: [...state.peripherals] };
}
