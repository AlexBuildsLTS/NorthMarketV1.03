import {NavLink} from 'react-router-dom';
import {BarChart2, Home, Info, Megaphone, MessageSquare, Settings, Users,} from 'lucide-react';
import type {User} from '../../../types/auth';

interface DashboardSidebarProps {
  user: User | null;
}

const DashboardSidebar: React.FC<DashboardSidebarProps> = ({ user }) => {
  const navItems = [
    { icon: Home, label: 'Home', path: '/dashboard' },
    { icon: BarChart2, label: 'Analytics', path: '/dashboard/analytics' },
    { icon: Users, label: 'Clients', path: '/dashboard/clients' },
      ...(user?.isSeller
          ? [{icon: Megaphone, label: 'Advertisement', path: '/dashboard/ads'}]
          : []),
    { icon: Settings, label: 'Settings', path: '/dashboard/settings' },
    { icon: Info, label: 'About', path: '/dashboard/about' },
    { icon: MessageSquare, label: 'Feedback', path: '/dashboard/feedback' },
  ];

  return (
      <div className="w-64 bg-navy-800 border-r border-navy-700">
          <div className="h-full flex flex-col">
              <div className="p-4">
                  <h2 className="text-xl font-bold text-white">NorthMarket</h2>
              </div>

              <nav className="flex-1 px-2 py-4 space-y-1">
                  {navItems.map((item) => (
                      <NavLink
                          key={item.path}
                          to={item.path}
                          className={({isActive}) =>
                              `flex items-center px-4 py-2 rounded-lg transition-colors ${
                                  isActive
                                      ? 'bg-navy-700 text-emerald-500'
                                      : 'text-gray-400 hover:bg-navy-700 hover:text-white'
                              }`
                          }
                      >
                          <item.icon className="w-5 h-5 mr-3"/>
                          {item.label}
                      </NavLink>
                  ))}
              </nav>

              {user && (
                  <div className="p-4 border-t border-navy-700">
                      <div className="flex items-center">
                          <div className="w-10 h-10 rounded-full bg-emerald-500 flex items-center justify-center">
                <span className="text-white font-medium">
                  {user.name[0].toUpperCase()}
                </span>
                          </div>
                          <div className="ml-3">
                              <p className="text-sm font-medium text-white">{user.name}</p>
                              <p className="text-xs text-gray-400">{user.email}</p>
                          </div>
                      </div>
                  </div>
              )}
          </div>
      </div>
  );
};

export default DashboardSidebar;
