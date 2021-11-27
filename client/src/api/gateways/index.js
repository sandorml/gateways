import api from "../config";


export const apiFetchGateways = () => api.get("/gateway");
