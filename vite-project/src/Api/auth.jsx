import axios from "axios";

const api = axios.create({
    baseURL: "http://localhost:5000",
});

const apis = {
    getFrame: () => api.get('/frame',),
    getFrameById: (id_frame) => api.get(`/frame/${id_frame}`),
    postFrame: (post_shop) => api.post(`/frame`, post_shop),
    updateFrame: (id_frame) => api.put(`/frame/${id_frame}`, post_shop),
    deleteFrame: (id_frame) => api.delete(`/frame/${id_frame}`)
}

export default apis;