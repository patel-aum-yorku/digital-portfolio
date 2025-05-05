import React from 'react';
import { NavLink } from 'react-router-dom';
import { AiOutlineHome } from 'react-icons/ai';
import { FaProjectDiagram, FaBriefcase } from 'react-icons/fa';
import { FiMail } from 'react-icons/fi';

const menuItems = [
  { to: '/',         Icon: AiOutlineHome,    label: 'Home' },
  { to: '/projects', Icon: FaProjectDiagram, label: 'Projects' },
  { to: '/work',     Icon: FaBriefcase,      label: 'Work' },
  { to: '/contact',  Icon: FiMail,           label: 'Contact' },
];

export default function Navbar() {
  return (
    <nav className="fixed top-4 left-0 w-full z-50 pointer-events-none">
      <ul className="mx-auto flex justify-center space-x-6 max-w-screen-lg">
        {menuItems.map(({ to, Icon, label }) => (
          <li key={to} className="pointer-events-auto">
            <NavLink
              to={to}
              end
              className={({ isActive }) =>
                `group relative flex items-center justify-center
                 w-20 h-18 clip-hexagon
                 bg-white/10 backdrop-blur-lg
                 transition-transform duration-300
                 ${isActive
                   ? 'scale-110 border-2 border-amber-400 shadow-[0_0_20px_rgba(255,193,7,0.8)]'
                   : 'hover:scale-110 hover:border-2 hover:border-amber-400 hover:shadow-[0_0_15px_rgba(255,193,7,0.6)]'}`
              }
            >
              <Icon className="w-6 h-6 text-white" />
              <span
                className="
                  absolute bottom-1 mb-1
                   opacity-0
                  group-hover:opacity-100
                  transition-opacity duration-200 font-medium
    bg-clip-text text-transparent text-xs
    bg-gradient-to-r from-gray-200 via-gray-100 to-white
    drop-shadow-[0_0_4px_rgba(255,255,255,0.6)]
                "
              >
                {label}
              </span>
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}
