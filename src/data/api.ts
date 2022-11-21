import axios from "axios";

const BASE_URL = "https://frontend-challenge-7bu3nxh76a-uc.a.run.app";

const api = axios.create({
    baseURL: BASE_URL,
});

export default api;
