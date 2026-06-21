import { Link } from "react-router-dom";
import { useAuthStore } from "../../store/authStore";

export default function Header({ onLoginClick }: { onLoginClick?: () => void }) {
  const { user, token, logout } = useAuthStore();

  return (
    <header className="flex justify-between items-center p-6 bg-transparent">
      <Link to="/" className="text-white font-bold text-xl">DEVOPS.HUB</Link>
      <div>
        {token && user ? (
          <button onClick={logout} className="w-10 h-10 rounded-full border border-white/20 overflow-hidden">
            <img src={user.photoURL} alt="Profile" className="w-full h-full object-cover" />
          </button>
        ) : (
          <button onClick={onLoginClick} className="px-4 py-2 bg-white/10 text-white rounded-lg hover:bg-white/20">
            Login
          </button>
        )}
      </div>
    </header>
  );
}