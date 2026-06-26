import { create } from 'zustand';
import api from '../services/api';

interface AuthState {
  user: any | null;
  token: string | null;
  // గూగుల్ లాగిన్ కోసం
  setAuth: (user: any, token: string) => void; 
  // నార్మల్ ఈమెయిల్ లాగిన్ కోసం
  login: (email: string, password: string) => Promise<void>;
  register: (email: string, password: string, full_name: string) => Promise<void>;
  logout: () => void;
  // App.tsx లో పేజీ లోడ్ అవ్వగానే వైట్ స్క్రీన్ రాకుండా యూజర్ డేటా తేవడానికి
  fetchUser: () => Promise<void>; 
}

export const useAuthStore = create<AuthState>((set, get) => ({
  user: JSON.parse(localStorage.getItem('user') || 'null'),
  token: localStorage.getItem('token'),
  
  // 1. Google Login Update
  setAuth: (user, token) => {
    localStorage.setItem('token', token);
    localStorage.setItem('user', JSON.stringify(user));
    set({ user, token });
  },

  // 2. Normal Login
  login: async (email, password) => {
    const { data } = await api.post('/auth/login', { email, password });
    localStorage.setItem('token', data.token);
    localStorage.setItem('user', JSON.stringify(data.user));
    set({ user: data.user, token: data.token });
  },

  // 3. Register
  register: async (email, password, full_name) => {
    const { data } = await api.post('/auth/register', { email, password, full_name });
    localStorage.setItem('token', data.token);
    localStorage.setItem('user', JSON.stringify(data.user));
    set({ user: data.user, token: data.token });
  },

  // 4. Logout
  logout: () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    set({ user: null, token: null });
    
    // ఈ ఒక్క లైన్ యాడ్ చెయ్: లాగౌట్ అవ్వగానే డైరెక్ట్ గా హోమ్ పేజీకి విసిరేస్తుంది!
    window.location.href = '/'; 
  },

  // 5. Fetch User (ఇది లేకపోతేనే నీకు ఇందాక వైట్ స్క్రీన్ వచ్చింది)
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