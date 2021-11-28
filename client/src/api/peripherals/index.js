import api from "../config";


export const apiFetchPeripherals = (id) => api.get(`/peripheral/gateway/${id}`);

export const apiCreatePeripheral = (peripheral) => api.post("/peripheral",peripheral);

export const apiUpdatePeripheral = (peripheral) => api.patch(`/peripheral/${peripheral._id}`,peripheral);
