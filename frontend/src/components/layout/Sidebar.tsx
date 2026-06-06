import { NavLink } from 'react-router-dom';

const links = [
  { to: '/dashboard', label: 'Dashboard' },
  { to: '/questions', label: 'Interview Q&A' },
  { to: '/roadmaps', label: 'Roadmaps' },
  { to: '/projects', label: 'Projects' },
  { to: '/mock-interview', label: 'Mock Interview' },
  { to: '/hr-questions', label: 'HR Questions' },
  { to: '/salary-insights', label: 'Salary Insights' },
  { to: '/resume-builder', label: 'Resume Builder' },
  { to: '/bookmarks', label: 'Bookmarks' },
  { to: '/achievements', label: 'Achievements' },
  { to: '/company-questions', label: 'Company Wise' },
];

export default function Sidebar() {
  return (
    <aside className="w-64 bg-black border-r overflow-y-auto">
      <nav className="p-4 space-y-2">
        {links.map(link => (
          <NavLink
            key={link.to}
            to={link.to}
            className={({ isActive }) => `block px-3 py-2 rounded ${isActive ? 'bg-primary text-white' : 'text-white hover:bg-gray-700'}`}
          >
            {link.label}
          </NavLink>
        ))}
      </nav>
    </aside>
  );
}