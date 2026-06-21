'use client'
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Mail, Lock, Eye, EyeClosed, ArrowRight } from 'lucide-react';
import { cn } from "../../lib/utils";
import { signInWithPopup } from 'firebase/auth';
import { auth, googleProvider } from '../../lib/firebase.ts';
import { useAuthStore } from '../../store/authStore';

function Input({ className, ...props }: React.ComponentProps<"input">) {
  return <input className={cn("flex h-10 w-full rounded-md border border-white/10 bg-white/5 px-3 py-1 text-sm text-white placeholder:text-white/30 focus:outline-none focus:border-white/30", className)} {...props} />;
}

export function SignInCard({ onSuccess }: { onSuccess?: () => void }) {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
const { setAuth } = useAuthStore();  const navigate = useNavigate();

  const handleGoogleLogin = async () => {
    try {
      setIsLoading(true);
      const result = await signInWithPopup(auth, googleProvider);
      const user = result.user;
      // ensure required fields are non-nullable for store; cast to any to satisfy TS
      const authUser = { ...user, full_name: user.displayName ?? "", email: user.email ?? "" } as any;
      setAuth(authUser, user.refreshToken ?? "");
      if (onSuccess) onSuccess();
      navigate('/dashboard');
    } catch (error) { console.error(error); alert("Firebase keys set cheyyi bro!"); }
    finally { setIsLoading(false); }
  };

  return (
    <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="w-full max-w-sm mx-auto">
      <div className="bg-[#0a0a0a]/90 backdrop-blur-xl rounded-2xl p-8 border border-white/10 shadow-2xl">
        <div className="text-center mb-6"><h1 className="text-xl font-bold text-white">Welcome Back</h1></div>
        <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
          <Input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
          <div className="relative flex items-center">
            <Input type={showPassword ? "text" : "password"} placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
            <div onClick={() => setShowPassword(!showPassword)} className="absolute right-3 cursor-pointer text-white/40">
              {showPassword ? <Eye size={16} /> : <EyeClosed size={16} />}
            </div>
          </div>
          <button type="submit" className="w-full bg-white text-black font-semibold h-10 rounded-lg">Sign In</button>
          <div className="text-center text-xs text-white/40">or</div>
          <button type="button" onClick={handleGoogleLogin} className="w-full bg-white/5 border border-white/10 text-white h-10 rounded-lg flex items-center justify-center gap-2">
            Sign in with Google
          </button>
        </form>
      </div>
    </motion.div>
  );
}