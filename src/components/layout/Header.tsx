'use client';
import { useState } from 'react';
import { Search } from 'lucide-react';

export default function Header() {
  const [q, setQ] = useState('');
  return (
    <header className="bg-white border-b">
      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
        <div className="flex items-center gap-4 w-full">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-2.5 h-5 w-5 text-slate-400" />
            <input
              aria-label="Search"
              value={q}
              onChange={(e) => setQ(e.target.value)}
              placeholder="Search patients, visits..."
              className="pl-10 pr-4 py-2 border rounded-md w-full focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>
          <div className="ml-4">
            <button className="px-3 py-2 rounded-md border">+ New</button>
          </div>
        </div>

        <div className="flex items-center gap-4">
            
          <div className="text-sm text-slate-600">Vijay</div>
          <div className="h-8 w-8 rounded-full bg-blue-500 text-white grid place-items-center">V</div>
        </div>
      </div>
    </header>
  );
}
