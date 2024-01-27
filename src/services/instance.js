import axios from "axios";

// define the base url for the api
const baseURL = 'http://localhost:3001/api';

// define the axios instance
const authInstance = axios.create({
    baseURL,
    timeout: 5000,
    headers: {
        'Content-Type': 'application/json'
    }
});

// define the protected axios instance
const protectedInstance = axios.create({
    baseURL,
    timeout: 5000,
    headers: {
        'Content-Type': 'application/json'
    }
});

// define the interceptor for the protected axios instance
protectedInstance.interceptors.request.use(
    config => {
        const token = localStorage.getItem('token');
        if (token) {
            config.headers['Authorization'] = 'Bearer ' + token;
        }
        return config;
    }
);

// export the instances
export default {
    authInstance,
    protectedInstance
};