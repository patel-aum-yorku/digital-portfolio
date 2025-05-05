import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4 fixed top-0 left-0 w-full z-10">
      <div className="container mx-auto">
        <ul className="flex space-x-4">
          <li>
            <Link to="/" className="text-white hover:text-gray-300">
              Home
            </Link>
          </li>
          <li>
            <Link to="/projects" className="text-white hover:text-gray-300">
              Projects
            </Link>
          </li>
          <li>
            <Link to="/work" className="text-white hover:text-gray-300">
              Work
            </Link>
          </li>
          <li>
            <Link to="/contact" className="text-white hover:text-gray-300">
              Contact
            </Link>
          </li>
          <li>
            <a
              href="https://forms.gle/your_google_form_link"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-gray-300"
            >
              Ask Me!
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
