import React from "react";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 bg-gray-900 border-t border-gray-800">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <p className="text-gray-500">
          © {currentYear} Portfolio. Built with Next.js & Tailwind CSS.
        </p>
      </div>
    </footer>
  );
};

export default Footer;