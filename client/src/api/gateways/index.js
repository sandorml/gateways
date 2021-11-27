import api from "../config";


export const apiFetchGateways = () => api.get("/gateway");

export const apiCreateGateway = (gateway) => api.post("/gateway",gateway);
