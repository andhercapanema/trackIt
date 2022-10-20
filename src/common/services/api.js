import axios from "axios";

const api = axios.create({
    baseURL: "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit",
    headers: {
        Authorization: `Bearer ${
            JSON.parse(localStorage.getItem("user"))?.token || ""
        }`,
    },
});

export default api;
