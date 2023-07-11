import axios from "axios";

const api = axios.create({
    baseURL: "http://localhost:5000",
});

const apis = {
    getFrame: () => api.get('/frame'),
    getFrameById: (id) => api.get(`/frame/${id}`),
    postFrame: (formData) => api.post(`/frame`,formData),
    // updateFrame: (uuid) => api.put(`/frame/${uuid}`, post_shop),
    deleteFrame: (uuid) => api.delete(`/frame/${uuid}`)
}

export default apis;