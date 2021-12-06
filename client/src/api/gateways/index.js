import api from "../config";


export const apiFetchGateways = () => api.get("/gateway");

export const apiCreateGateway = (gateway) => api.post("/gateway",gateway);

export const apiUpdateGateway = (gateway) => api.patch(`/gateway/${gateway._id}`,gateway);

export const apiDeleteGateway = (gateway) => api.delete(`/gateway/${gateway._id}`);
