import apiClient from './api.js';

export const loginService = async (email, password) => {
    try {
        // Hacer petición post al endpoint de login en la API
        const response = await apiClient.post('/auth/login', {email, password});
        return response.data;
    } catch (error) {
        // Si el backend responde con un error, lo lanzamos para manejarlo en el frontend
        throw error.response?.data?.error || 'Error en la autenticación';
    }
};

export const saveAuthData = (token, user) => {
    localStorage.setItem('authToken', token);
    localStorage.setItem('authUser', JSON.stringify(user));
}