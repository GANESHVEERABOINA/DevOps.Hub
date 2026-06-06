import api from './api';
export const authService = {
  login: (email: string, password: string) => api.post('/auth/login', { email, password }),
  register: (email: string, password: string, full_name: string) => api.post('/auth/register', { email, password, full_name }),
};