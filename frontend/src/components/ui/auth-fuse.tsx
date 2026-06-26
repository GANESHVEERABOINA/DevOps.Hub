"use client";

import * as React from "react";
import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import { useGoogleLogin } from '@react-oauth/google';
import { useAuthStore } from "../../store/authStore"; 
import api from "../../services/api";

// 1. Toast నోటిఫికేషన్ కోసం ఇంపోర్ట్ (npm install react-hot-toast చేసి ఉండాలి)
import toast from "react-hot-toast"; 

export const AuthUI = ({ onSuccess }: { onSuccess?: () => void }) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    // స్టోర్ నుండి setAuth వాడితే బెటర్ (లేదా నువ్వు రాసిన setState అయినా పర్వాలేదు)
    const { setAuth } = useAuthStore();

    // గూగుల్ లాగిన్ లాజిక్
    const handleGoogleLogin = useGoogleLogin({
      onSuccess: async (tokenResponse) => {
        try {
          setLoading(true);
          const res = await api.post('/auth/google', { token: tokenResponse.access_token });
          if (res.data && res.data.token) {
            
            // స్టోర్ ని అప్‌డేట్ చేస్తున్నాం
            useAuthStore.setState({ token: res.data.token, user: res.data.user });
            localStorage.setItem('token', res.data.token);
            localStorage.setItem('user', JSON.stringify(res.data.user));
            
            // 2. గూగుల్ లాగిన్ సక్సెస్ మెసేజ్
            toast.success("Successfully logged in with Google! 🚀", {
              style: { background: '#0a0a0a', color: '#fff', border: '1px solid #333' }
            });
            
            if (onSuccess) onSuccess();
          }
        } catch (err: any) {
          setError("Google login failed.");
          console.error(err);
          toast.error("Google login failed. Please try again.");
        } finally {
          setLoading(false);
        }
      },
      onError: () => {
        setError("Google login failed.");
        toast.error("Google login cancelled.");
      }
    });

    // నార్మల్ ఈమెయిల్ లాగిన్ లాజిక్
    const handleEmailLogin = async (e: React.FormEvent) => {
      e.preventDefault();
      setError("");
      setLoading(true);

      try {
        const res = await api.post('/auth/login', { email, password });
        if (res.data && res.data.token) {
          
          useAuthStore.setState({ token: res.data.token, user: res.data.user });
          localStorage.setItem('token', res.data.token);
          localStorage.setItem('user', JSON.stringify(res.data.user));
          
          // 3. ఈమెయిల్ లాగిన్ సక్సెస్ మెసేజ్
          toast.success("Welcome back! 🎉", {
            style: { background: '#0a0a0a', color: '#fff', border: '1px solid #333' }
          });
          
          if (onSuccess) onSuccess(); 
        }
      } catch (err: any) {
        const errorMsg = err.response?.data?.message || "Invalid credentials.";
        setError(errorMsg);
        toast.error(errorMsg); // ఎర్రర్ వస్తే టోస్ట్ లో కూడా చూపిస్తాం
      } finally {
        setLoading(false);
      }
    };

    return (
        <div className="w-full max-w-sm mx-auto bg-[#0a0a0a]/95 backdrop-blur-2xl rounded-2xl p-8 border border-white/10 shadow-2xl">
            <div className="text-center mb-6">
                <h2 className="text-2xl font-bold text-white tracking-wide">Welcome User</h2>
                <p className="text-white/50 text-sm mt-1">Sign in to continue to DevOps.Hub</p>
            </div>

            {error && <p className="text-red-500 text-xs text-center mb-4">{error}</p>}

            <form className="space-y-4" onSubmit={handleEmailLogin}>
                <input
                    type="email"
                    placeholder="Email address"
                    className="w-full bg-white/5 border border-white/10 text-white placeholder:text-white/30 h-10 px-3 rounded-lg focus:outline-none focus:border-white/30 transition-colors"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                
                <div className="relative flex items-center">
                    <input
                        type={showPassword ? "text" : "password"}
                        placeholder="Password"
                        className="w-full bg-white/5 border border-white/10 text-white placeholder:text-white/30 h-10 px-3 rounded-lg focus:outline-none focus:border-white/30 transition-colors"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                    <div onClick={() => setShowPassword(!showPassword)} className="absolute right-3 cursor-pointer text-white/40 hover:text-white">
                        {showPassword ? <Eye size={18} /> : <EyeOff size={18} />}
                    </div>
                </div>

                <div className="flex items-center justify-between text-xs text-white/50">
                    <label className="flex items-center gap-2 cursor-pointer hover:text-white">
                        <input type="checkbox" className="rounded bg-transparent border-white/20" /> Remember me
                    </label>
                    <span className="cursor-pointer hover:text-white hover:underline">Forgot password?</span>
                </div>

                <button type="submit" disabled={loading} className="w-full bg-white text-black font-semibold h-10 rounded-lg hover:bg-gray-200 transition-colors mt-2 flex items-center justify-center">
                    {loading ? "Please wait..." : "Sign In"}
                </button>

                <div className="relative flex items-center py-3">
                    <div className="flex-grow border-t border-white/10"></div>
                    <span className="mx-3 text-xs text-white/40">or</span>
                    <div className="flex-grow border-t border-white/10"></div>
                </div>

                <button
                    type="button"
                    onClick={() => handleGoogleLogin()}
                    disabled={loading}
                    className="w-full bg-white/5 border border-white/10 text-white h-10 rounded-lg flex items-center justify-center gap-2 hover:bg-white/10 transition-colors"
                >
                    <div className="font-bold text-base">G</div>
                    <span className="text-sm">Sign in with Google</span>
                </button>
            </form>
        </div>
    );
};