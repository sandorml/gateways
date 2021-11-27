import api from "../config";


export const apiFetchPeripherals = (id) => api.get(`/peripheral/gateway/${id}`);

export const apiCreatePeripheral = (peripheral) => api.post("/peripheral",peripheral);
