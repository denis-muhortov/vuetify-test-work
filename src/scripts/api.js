import axios from "axios";

const apiBase = import.meta.env.VITE_VUE_APP_API_URL;
const apiDefault = 'https://dohlmpicjcxrbdqzyxdx.supabase.co/storage/v1/object/public/me-storage/response.json';
let apiUrl = apiDefault;

if(apiBase != '') apiUrl = apiBase;
else apiUrl = apiDefault;

export const apiClient = axios.create({
    baseURL: apiUrl,
});
export default {
    async getProducts() {
        return await apiClient.get()
    },
}