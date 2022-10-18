import api from "./api";

const TrackItResource = {
    createUser: (body) => {
        return api.post("/auth/sign-up", body);
    },
};

export default TrackItResource;
