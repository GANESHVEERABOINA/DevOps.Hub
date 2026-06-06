import { create } from 'zustand';
import api from '../services/api';

interface AuthState {
  user: any | null;
  token: string | null;
  login: (email: string, password: string) => Promise<void>;
  register: (email: string, password: string, full_name: string) => Promise<void>;
  logout: () => void;
  fetchUser: () => Promise<void>;
}

export const useAuthStore = create<AuthState>((set, get) => ({
  user: JSON.parse(localStorage.getItem('user') || 'null'),
  token: localStorage.getItem('token'),
  login: async (email, password) => {
    const { data } = await api.post('/auth/login', { email, password });
    localStorage.setItem('token', data.token);
    localStorage.setItem('user', JSON.stringify(data.user));
    set({ user: data.user, token: data.token });
  },
  register: async (email, password, full_name) => {
    const { data } = await api.post('/auth/register', { email, password, full_name });
    localStorage.setItem('token', data.token);
    localStorage.setItem('user', JSON.stringify(data.user));
    set({ user: data.user, token: data.token });
  },
  logout: () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    set({ user: null, token: null });
  },
  fetchUser: async () => {
    const token = get().token;
    if (!token) return;
    try {
      const { data } = await api.get('/users/me');
      localStorage.setItem('user', JSON.stringify(data));
      set({ user: data });
    } catch {
      get().logout();
    }
  },
}));