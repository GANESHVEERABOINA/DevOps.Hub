import { useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';
import AppRouter from './routes/AppRouter';
import { useAuthStore } from './store/authStore';
import { Toaster } from 'react-hot-toast';

function App() {
  const { fetchUser, token } = useAuthStore();
  useEffect(() => { if (token) fetchUser(); }, [token]);
  return (
    <BrowserRouter>
      <AppRouter />
      <Toaster position="bottom-right" />
    </BrowserRouter>
  );
}
export default App;