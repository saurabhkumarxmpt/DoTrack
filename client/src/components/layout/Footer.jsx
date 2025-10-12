import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-4 mt-10">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center text-center md:text-left">
        
        {/* Left Side */}
        <div className="mb-3 md:mb-0">
          <h2 className="text-lg font-semibold text-white">DoTrack</h2>
          <p className="text-sm">Save your ideas. Anytime, anywhere.</p>
        </div>

        {/* Center Links */}
        <div className="flex gap-4 mb-3 md:mb-0">
          <a href="#" className="hover:text-white text-sm">Home</a>
          <a href="#" className="hover:text-white text-sm">About</a>
          <a href="#" className="hover:text-white text-sm">Contact</a>
        </div>

        {/* Right Side */}
        <div>
          <p className="text-sm">
            © {new Date().getFullYear()} DoTrack. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
