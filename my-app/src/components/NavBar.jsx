import { Link, NavLink } from 'react-router-dom';

export default function NavBar() {
  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/clubs', label: 'Clubs' },
    { path: '/about', label: 'About' },
  ];

  return (
    <nav className="bg-gray-800 text-white p-4 shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link to="/" className="text-xl font-bold">
          Campus Club Finder
        </Link>
        <div className="space-x-4">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                isActive
                  ? 'text-yellow-300 font-semibold'
                  : 'hover:text-yellow-300'
              }
            >
              {item.label}
            </NavLink>
          ))}
        </div>
      </div>
    </nav>
  );
}

