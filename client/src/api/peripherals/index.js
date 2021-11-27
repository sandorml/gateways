import api from "../config";


export const apiFetchPeripherals = (id) => api.get(`/peripheral/gateway/${id}`);
