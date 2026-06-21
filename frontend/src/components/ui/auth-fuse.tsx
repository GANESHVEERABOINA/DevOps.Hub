"use client";
import React, { useState } from "react";
import { useGoogleLogin } from '@react-oauth/google';
import { useAuthStore } from "../../store/authStore"; 
import api from "../../services/api";

function AuthFormContainer({ onSuccess }: { onSuccess?: () => void }) {
    const { setAuth } = useAuthStore();
    const [loading, setLoading] = useState(false);

    const handleGoogleLogin = useGoogleLogin({
      onSuccess: async (tokenResponse) => {
        try {
          setLoading(true);
          const res = await api.post('/auth/google', { token: tokenResponse.access_token });
          if (res.data?.token) {
            // పర్ఫెక్ట్ గా స్టోర్ కి పంపుతున్నాం
            setAuth(res.data.user, res.data.token);
            if (onSuccess) onSuccess();
          }
        } catch (err) { console.error("Google login failed", err); }
        finally { setLoading(false); }
      },
      onError: () => console.error("Google login failed.")
    });

    return (
        <div className="mx-auto grid w-full max-w-[380px] gap-8 bg-[#0a0a0a]/90 p-8 rounded-3xl border border-white/10 shadow-2xl">
           <h2 className="text-white text-center font-bold text-xl">Login</h2>
           <button 
             onClick={() => handleGoogleLogin()} 
             disabled={loading}
             className="w-full bg-white text-black font-bold p-3 rounded-lg hover:bg-gray-200 transition-all"
           >
             {loading ? "Logging in..." : "Google Login"}
           </button>
        </div>
    )
}

export const AuthUI = ({ onSuccess }: { onSuccess?: () => void }) => {
  return <AuthFormContainer onSuccess={onSuccess} />
};