import { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useAuthStore } from './store/authStore';
import { Toaster } from 'react-hot-toast';
import { GoogleOAuthProvider } from '@react-oauth/google';
import AppRouter from './routes/AppRouter';
import { SignInPage } from '@/components/auth/SignInPage'; // Make sure this path is correct based on your project structure

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
      <BrowserRouter>
        <Routes>
          {/* Main App Routes */}
          <Route path="/*" element={<AppRouter />} />
          {/* Your custom sign-in page */}
          <Route path="/sign-in" element={<SignInPage />} />
        </Routes>
        <Toaster position="bottom-right" />
      </BrowserRouter>
    </GoogleOAuthProvider>
  );
}

export default App;