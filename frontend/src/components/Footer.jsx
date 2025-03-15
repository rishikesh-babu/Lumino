import React from 'react';

function Footer() {
  return (
    <footer className="w-full bg-gray-900 text-white text-center py-6 shadow-lg">
      <p className="text-lg font-medium">&copy; {new Date().getFullYear()} Code Storm. All rights reserved.</p>
      <div className="mt-2 space-x-4">
        <a href="#" className="hover:text-blue-400">Privacy Policy</a>
        <span>|</span>
        <a href="#" className="hover:text-blue-400">Terms of Service</a>
        <span>|</span>
        <a href="#" className="hover:text-blue-400">Contact Us</a>
      </div>
    </footer>
  );
}

export default Footer;