'use client';
import { useState } from 'react';
import { Search } from 'lucide-react';
import { Bell, Home, Settings, User } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { cn } from "@/lib/utils"


export default function Header() {
  const [q, setQ] = useState('');
  return (
          <header className="flex items-center justify-between px-6 py-3 bg-white shadow-md border-b">
      {/* Left Section: Logo + Menu */}
      <div className="flex items-center gap-6">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <img
            src="/logo.svg"
            alt="Logo"
            className="w-8 h-8"
          />
          <span className="font-semibold text-lg">Rudronix</span>
        </div>

        {/* Horizontal Menu */}
        <nav className="hidden md:flex items-center gap-5 text-sm font-medium text-gray-600">
          <a
            href="#"
            className="flex items-center gap-2 hover:text-black transition-colors"
          >
            <Home className="w-4 h-4" /> Home
          </a>
          <a
            href="#"
            className="flex items-center gap-2 hover:text-black transition-colors"
          >
            <Settings className="w-4 h-4" /> Settings
          </a>
          <a
            href="#"
            className="flex items-center gap-2 hover:text-black transition-colors"
          >
            <User className="w-4 h-4" /> Profile
          </a>
        </nav>
      </div>

      {/* Right Section: Notification + User Info + Logout */}
      <div className="flex items-center gap-4">
        {/* Notification Icon */}
        <Button
          variant="ghost"
          size="icon"
          className="relative"
        >
          <Bell className="w-5 h-5" />
          <span className="absolute top-1 right-1 h-2 w-2 bg-red-500 rounded-full"></span>
        </Button>

        {/* User Info */}
        <div className="hidden sm:flex flex-col items-end">
          <span className="text-sm font-medium">Vijay Perumal</span>
          <span className="text-xs text-gray-500">Admin</span>
        </div>

        {/* Avatar */}
        <Avatar className="w-9 h-9 border">
          <AvatarImage src="/user-avatar.jpg" alt="User" />
          <AvatarFallback>VP</AvatarFallback>
        </Avatar>

        {/* Logout Button */}
        <Button variant="outline" size="sm">
          Logout
        </Button>
      </div>
    </header>

  );
}


//  <header className="bg-white border-b">
//       <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
//         <div className="flex items-center gap-4 w-full">
//           <div className="relative flex-1">
//             <Search className="absolute left-3 top-2.5 h-5 w-5 text-slate-400" />
//             <input
//               aria-label="Search"
//               value={q}
//               onChange={(e) => setQ(e.target.value)}
//               placeholder="Search patients, visits..."
//               className="pl-10 pr-4 py-2 border rounded-md w-full focus:outline-none focus:ring-2 focus:ring-primary"
//             />
//           </div>
//           <div className="ml-4">
//             <button className="px-3 py-2 rounded-md border">+ New</button>
//           </div>
//         </div>

//         <div className="flex items-center gap-4">
            
//           <div className="text-sm text-slate-600">Vijay</div>
//           <div className="h-8 w-8 rounded-full bg-blue-500 text-white grid place-items-center">V</div>
//         </div>
//       </div>
//     </header>