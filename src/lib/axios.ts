import axios from "axios";

export const API_URL = `http://localhost:8000`;
export const WS_URL = `ws://localhost:8001`;

export const axiosHttp = axios.create({
    baseURL: `${API_URL}`,
});

axiosHttp.interceptors.request.use(
    config => {
        try {
            const local_token = localStorage.getItem('auth-storage');
            if (local_token) {
                let parsed = JSON.parse(local_token);
                let token = parsed.state.profile.jwt;
                config.headers['Authorization'] = 'Bearer ' + token;
            }
        } catch (err) {

        }
        // config.headers['Content-Type'] = 'application/json';
        return config
    },
    error => {
        Promise.reject(error)
    }
)