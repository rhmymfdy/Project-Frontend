import axios from "axios";

const api = axios.create({
    baseURL: "http://localhost:5000",
});

const apis = {
    getOrder: () => api.get('/order'),
    getOrderById: (id) => api.get(`/order/${id}`),
    postOrder: (namaPembeli,alamat,frameId) => api.post(`/order`,namaPembeli,alamat,frameId)
}

export default apis;