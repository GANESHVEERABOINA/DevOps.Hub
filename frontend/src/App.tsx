import { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useAuthStore } from './store/authStore';
import { Toaster } from 'react-hot-toast';
import { GoogleOAuthProvider } from '@react-oauth/google';
import AppRouter from './routes/AppRouter';
import { SignInPage } from '@/components/auth/SignInPage'; 

// 1. మనం ఇందాక క్రియేట్ చేసిన గ్లోబల్ బ్యాక్ గ్రౌండ్ ని ఇంపోర్ట్ చేసుకుంటున్నాం
import { GlobalAnimatedBackground } from '@/components/ui/global-animated-background';

const GOOGLE_CLIENT_ID = "577411332861-i26bd5oo16l7ncqst4ais00p71d761n9.apps.googleusercontent.com"; 

function App() {
  const { fetchUser, token } = useAuthStore();
  
  useEffect(() => { 
    if (token) {
      fetchUser(); 
    }
  }, [token]);

  return (
    <GoogleOAuthProvider clientId={GOOGLE_CLIENT_ID}>
      
      {/* 2. ఇక్కడ ఈ కాంపోనెంట్ పెడితే, ఇక నీ వెబ్‌సైట్ లోని ప్రతి పేజీ వెనకాల ఇదే ప్లే అవుతుంది */}
      <GlobalAnimatedBackground />

      <BrowserRouter>
        {/* 3. చాలా ముఖ్యం: ఈ కంటైనర్ కి 'bg-transparent' ఉండాలి, అప్పుడే వెనకున్న డాట్స్ కనిపిస్తాయి */}
        <div className="relative z-10 min-h-screen bg-transparent">
          <Routes>
            {/* Main App Routes */}
            <Route path="/*" element={<AppRouter />} />
            {/* Your custom sign-in page */}
            <Route path="/sign-in" element={<SignInPage />} />
          </Routes>
        </div>
        <Toaster position="bottom-right" />
      </BrowserRouter>
    </GoogleOAuthProvider>
  );
}

export default App;