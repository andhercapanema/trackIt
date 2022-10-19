import api from "./api";

const TrackItResource = {
    createUser: (body) => api.post("/auth/sign-up", body),
    login: (body) => api.post("/auth/login", body),
};

export default TrackItResource;
