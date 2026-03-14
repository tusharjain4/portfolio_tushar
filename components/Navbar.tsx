"use client";

import React from "react";

const Navbar: React.FC = () => {
  return (
    <nav className="fixed top-0 w-full bg-gray-950/90 backdrop-blur-sm z-50 border-b border-gray-800">
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        <a href="#hero" className="text-xl font-bold text-white hover:text-blue-400 transition-colors">
          Portfolio
        </a>
        <div className="flex space-x-6">
          <a href="#about" className="text-gray-300 hover:text-white transition-colors text-sm">
            About
          </a>
          <a href="#skills" className="text-gray-300 hover:text-white transition-colors text-sm">
            Skills
          </a>
          <a href="#projects" className="text-gray-300 hover:text-white transition-colors text-sm">
            Projects
          </a>
          <a href="#contact" className="text-gray-300 hover:text-white transition-colors text-sm">
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;