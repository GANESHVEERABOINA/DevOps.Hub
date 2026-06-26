import { useAuthStore } from "../../store/authStore";
import { LogOut, User, Settings } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "./avatar";

export function UserProfileMenu() {
  const { user, logout } = useAuthStore();
  
  // బ్యాకెండ్ పంపే డేటా లో picture ఉంటే తీసుకుంటుంది
  const avatarUrl = user?.picture || user?.photoURL || user?.avatar || "";
  const userName = user?.full_name || user?.name || "User";
  const userEmail = user?.email || "";
  const userInitial = userName.charAt(0).toUpperCase();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="outline-none">
        <div className="group relative h-10 w-10 rounded-full border-2 border-white/20 hover:border-purple-500/50 transition-all duration-300 shadow-lg cursor-pointer flex items-center justify-center bg-black">
          <Avatar className="h-full w-full">
            <AvatarImage 
              src={avatarUrl} 
              alt={userName} 
              className="object-cover" 
              referrerPolicy="no-referrer" 
            />
            {/* ఫోటో లేకపోతే ఈ లెటర్ వస్తుంది */}
            <AvatarFallback className="bg-gradient-to-tr from-purple-500 to-pink-500 text-white font-bold">
              {userInitial}
            </AvatarFallback>
          </Avatar>
        </div>
      </DropdownMenuTrigger>
      
      <DropdownMenuContent align="end" className="w-56 mt-2 bg-[#0a0a0a] border border-white/10 text-white shadow-2xl rounded-xl z-[150]">
        <DropdownMenuLabel className="font-normal p-3">
          <div className="flex flex-col space-y-1">
            <p className="text-sm font-medium leading-none text-white">{userName}</p>
            <p className="text-xs leading-none text-white/50 truncate">{userEmail}</p>
          </div>
        </DropdownMenuLabel>
        <DropdownMenuSeparator className="bg-white/10" />
        <DropdownMenuItem className="p-3 hover:bg-white/10 cursor-pointer rounded-md">
          <User className="mr-2 h-4 w-4 text-white/70" />
          <span>Profile</span>
        </DropdownMenuItem>
        <DropdownMenuItem className="p-3 hover:bg-white/10 cursor-pointer rounded-md">
          <Settings className="mr-2 h-4 w-4 text-white/70" />
          <span>Settings</span>
        </DropdownMenuItem>
        <DropdownMenuSeparator className="bg-white/10" />
        <DropdownMenuItem onClick={logout} className="p-3 text-red-400 hover:bg-red-500/10 cursor-pointer rounded-md">
          <LogOut className="mr-2 h-4 w-4" />
          <span>Log out</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}