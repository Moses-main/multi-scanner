import React from "react";
import { Link } from "react-router-dom";
import { FaUserAlt, FaUserPlus, FaListUl } from "react-icons/fa";

// Navigation Component
function Navigation() {
  return (
    <header className="bg-navy-800 p-4 shadow-lg">
      <div className="container mx-auto gap-6 flex justify-between items-center">
        <h1 className="text-white text-2xl font-bold">Multi Scan</h1>
        <nav>
          <ul className="flex space-x-6">
            <li className="text-white hover:text-purple-300">
              <Link to="/login" className="flex items-center space-x-2">
                <FaUserAlt />
                <span>Sign In</span>
              </Link>
            </li>
            <li className="text-white hover:text-purple-300">
              <Link to="/waitlist" className="flex items-center space-x-2">
                <FaListUl />
                <span>Waitlist</span>
              </Link>
            </li>
            <li className="text-white hover:text-purple-300">
              <Link to="/signup" className="flex items-center space-x-2">
                <FaUserPlus />
                <span>Sign Up</span>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Navigation;
