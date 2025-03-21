import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import DarkMode from './DarkMode';

function Navbar() {
    const navigate = useNavigate();
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="shadow-md sticky top-0 w-full z-50  ">
            <div className="flex justify-between items-center px-6 py-4">
                {/* Brand Name */}
                <div onClick={() => navigate('/')} className="cursor-pointer text-3xl font-bold tracking-wide text-blue-500">
                    CODESTORM
                </div>

                {/* Mobile Menu Button */}
                <div className="sm:hidden">
                    <button onClick={() => setIsOpen(!isOpen)} className="focus:outline-none">
                        {isOpen ? 'Close' : 'Menu'}
                    </button>
                </div>

                {/* Navigation Links */}
                <div className="sm:flex space-x-6 text-lg font-medium hidden">
                    <Link to="/about" className="hover:text-blue-500 transition duration-300">About</Link>
                    <Link to="/blog" className="hover:text-blue-500 transition duration-300">Blog</Link>
                    <Link to="/contact" className="hover:text-blue-500 transition duration-300">Contact</Link>
                    <Link to="/join" className="hover:text-blue-500 transition duration-300">Join</Link>
                    <Link to="/esports" className="hover:text-blue-500 transition duration-300">Esports</Link>
                    <Link to="/service" className="hover:text-blue-500 transition duration-300">Service</Link>
                    <Link to="/portfolio" className="hover:text-blue-500 transition duration-300">Portfolio</Link>
                    <DarkMode />
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="sm:hidden flex flex-col space-y-4 px-6 pb-4 text-lg font-medium border-t border-gray-200 dark:border-gray-700">
                    <Link to="/about" className="hover:text-blue-500 transition duration-300" onClick={() => setIsOpen(false)}>About</Link>
                    <Link to="/blog" className="hover:text-blue-500 transition duration-300" onClick={() => setIsOpen(false)}>Blog</Link>
                    <Link to="/contact" className="hover:text-blue-500 transition duration-300" onClick={() => setIsOpen(false)}>Contact</Link>
                    <Link to="/join" className="hover:text-blue-500 transition duration-300" onClick={() => setIsOpen(false)}>Join</Link>
                    <Link to="/exports" className="hover:text-blue-500 transition duration-300" onClick={() => setIsOpen(false)}>Esports</Link>
                    <Link to="/service" className="hover:text-blue-500 transition duration-300" onClick={() => setIsOpen(false)}>Service</Link>
                    <Link to="/portfolio" className="hover:text-blue-500 transition duration-300" onClick={() => setIsOpen(false)}>Portfolio</Link>
                    <DarkMode />
                </div>
            )}
        </nav>
    );
}

export default Navbar;
