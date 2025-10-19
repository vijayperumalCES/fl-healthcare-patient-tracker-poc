import Link from 'next/link';
import { Home, Users2,Users, Calendar, Settings, Hospital } from 'lucide-react';

const items = [
  { href: '/', label: 'Dashboard', icon: Home },
  { href: '/patients', label: 'Patients', icon: Users2 },
  { href: '/doctors', label: 'Doctors', icon: Users },
  { href: '/visits', label: 'Visits', icon: Calendar },
  { href: '/settings', label: 'Settings', icon: Settings }
];

export default function Sidebar() {
  return (
    <aside className="w-72 bg-white border-r min-h-screen sticky top-0">
      <div className="p-4 border-b">
        <div className="flex items-center gap-3">
            <Hospital className="h-8 w-8 text-blue-600" />
            <h2 className="text-xl font-bold text-blue-600 tracking-tight">Healthcare Tracker</h2>
        </div>
      </div>
      <nav className="p-4">
        <ul className="space-y-2">
          {items.map((it) => (
            <li key={it.href}>
              <Link href={it.href} className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-slate-50">
                <it.icon className="h-5 w-5 text-slate-600" />
                <span className="text-slate-700">{it.label}</span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
}
