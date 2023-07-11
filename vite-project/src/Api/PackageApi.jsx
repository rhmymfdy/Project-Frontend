import axios from "axios";

const api = axios.create({
    baseURL: "http://localhost:5000",
});

const apis = {
    getPackage: () => api.get('/package'),
    getPackageId: (id) => api.get(`/package/${id}`),
    getPackageByCategory: (category) => api.get(`/package/category/${category}`),
    postPackage: () => api.post('/package'),
    // updateFrame: (id_frame) => api.put(`/frame/${id_frame}`, post_shop),
    deletePackage: (id) => api.delete(`/package/${id}`)
}

export default apis;