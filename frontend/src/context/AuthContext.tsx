import React, { createContext, useContext, useState, useEffect } from 'react';
import api from '../services/api'; // నీ API సర్వీస్

interface AuthContextType {
  user: any;
  isLoggedIn: boolean;
  login: (email: string, password: string) => Promise<void>;
  register: (name: string, email: string, password: string) => Promise<void>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<any>(null);

  // పేజీ రీలోడ్ అయినప్పుడు లోకల్ స్టోరేజ్‌లో టోకెన్ ఉందేమో చెక్ చేస్తాం
  useEffect(() => {
    const token = localStorage.getItem('token');
    const savedUser = localStorage.getItem('user');
    if (token && savedUser) {
      setUser(JSON.parse(savedUser));
      // API హెడర్స్ లో టోకెన్ సెట్ చేస్తున్నాం
      api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    }
  }, []);

  const login = async (email: string, password: string) => {
    // 📌 ఇక్కడ నీ బ్యాకెండ్ లాగిన్ API ఎండ్ పాయింట్ వస్తుంది
    const res = await api.post('/auth/login', { email, password });
    const { token, user } = res.data;
    
    localStorage.setItem('token', token);
    localStorage.setItem('user', JSON.stringify(user));
    api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    setUser(user);
  };

  const register = async (name: string, email: string, password: string) => {
    // 📌 ఇక్కడ నీ బ్యాకెండ్ రిజిస్టర్ API ఎండ్ పాయింట్ వస్తుంది
    const res = await api.post('/auth/register', { name, email, password });
    const { token, user } = res.data;
    
    localStorage.setItem('token', token);
    localStorage.setItem('user', JSON.stringify(user));
    api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    setUser(user);
  };

  const logout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    delete api.defaults.headers.common['Authorization'];
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, isLoggedIn: !!user, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error('useAuth must be used within an AuthProvider');
  return context;
};