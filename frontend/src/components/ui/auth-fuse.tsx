"use client";

import * as React from "react";
import { useState, useId } from "react";
import { Eye, EyeOff, X } from "lucide-react";
import { useGoogleLogin } from '@react-oauth/google';
import { useAuthStore } from "../../store/authStore"; 
import api from "../../services/api";
import { cn } from "../../lib/utils"; 

// ... Label, Input, Button, PasswordInput components ... (నువ్వు రాసినవే ఉంచు)

function AuthFormContainer({ isSignIn, onToggle, onSuccess }: { isSignIn: boolean; onToggle: () => void; onSuccess?: () => void }) {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    const handleGoogleLogin = useGoogleLogin({
      onSuccess: async (tokenResponse) => {
        try {
          const res = await api.post('/auth/google', { token: tokenResponse.access_token });
          if (res.data && res.data.token) {
            localStorage.setItem('token', res.data.token);
            localStorage.setItem('user', JSON.stringify(res.data.user));
            
            // STATE UPDATE (ఇది చాలా ముఖ్యం)
            useAuthStore.setState({ token: res.data.token, user: res.data.user });
            
            if (onSuccess) onSuccess();
          }
        } catch (err: any) {
          setError("Google login failed.");
          console.error(err);
        }
      },
      onError: () => setError("Google login failed.")
    });

    const handleSubmit = async (e: React.FormEvent) => {
      e.preventDefault();
      setError("");
      setLoading(true);

      try {
        let res;
        if (isSignIn) {
          res = await api.post('/auth/login', { email, password });
        } else {
          res = await api.post('/auth/register', { name, email, password });
        }
        
        if (res.data && res.data.token) {
          localStorage.setItem('token', res.data.token);
          localStorage.setItem('user', JSON.stringify(res.data.user));
          
          // STATE UPDATE
          useAuthStore.setState({ token: res.data.token, user: res.data.user });
          
          if (onSuccess) onSuccess(); 
        }
      } catch (err: any) {
        setError(err.response?.data?.message || "Invalid credentials.");
      } finally {
        setLoading(false);
      }
    };

    // ... (నీ JSX Form code ఇక్కడ పెట్టు) ...
    return (
        <div className="mx-auto grid w-full max-w-[380px] gap-8 bg-[#0a0a0a]/90 p-8 rounded-3xl border border-white/10 shadow-2xl">
           {/* Form content */}
           <button onClick={() => handleGoogleLogin()} className="w-full bg-white text-black p-2 rounded">Google Login</button>
        </div>
    )
}

export const AuthUI = ({ onSuccess }: { onSuccess?: () => void }) => {
  const [isSignIn, setIsSignIn] = useState(false); 
  return <AuthFormContainer isSignIn={isSignIn} onToggle={() => setIsSignIn(!isSignIn)} onSuccess={onSuccess} />
};