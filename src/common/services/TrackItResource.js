import api from "./api";

const TrackItResource = {
    createUser: (body) => api.post("/auth/sign-up", body),
    login: (body) => api.post("/auth/login", body),
    createHabit: (body) => api.post("/habits", body),
    getHabits: () => api.get("/habits"),
    deleteHabit: (habitId) => api.delete(`/habits/${habitId}`),
};

export default TrackItResource;
