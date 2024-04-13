import axios from "axios";

const apiBase = import.meta.env.VITE_VUE_APP_API_URL;
const apiDefault = 'https://dohlmpicjcxrbdqzyxdx.supabase.co/storage/v1/object/public/me-storage/response.json';
let apiUrl = apiDefault;

if(apiBase != '') apiUrl = apiBase;
else apiUrl = apiDefault;

export const apiClient = axios.create({
    baseURL: apiUrl,
});

export const apiServer = axios.create({
    baseURL: '/api/cessions/registries',
});

export default {
    async getProducts() {
        return await apiClient.get()
    },
    async getExport(id) {
        return await apiServer.get(`/${id}/export`)
    },
    async deleteProducts(id) {
        return await apiServer.delete(`/${id}`)
    },
}


