import React from 'react'
import DarkMode from './DarkMode'
import { Link, useNavigate } from 'react-router-dom'

function Navbar() {
    const navigate = useNavigate()
    return (
        <div>
            <nav className="flex justify-between items-center px-6 py-4 bg-gray-900 text-white shadow-md">
                {/* Logo Section */}
                <div onClick={() => navigate('/')} className="text-4xl font-bold tracking-wide text-blue-400">
                    ABCEFGhiji
                </div>

                {/* Navigation Links */}
                <div className="flex space-x-6 text-lg font-medium">
                    <Link to={'/about'} className="hover:text-blue-400 transition duration-300">
                        About
                    </Link>
                    <Link to={'/blog'} className="hover:text-blue-400 transition duration-300">
                        Blog
                    </Link>
                    <Link to={'/Contact'} className="hover:text-blue-400 transition duration-300">
                        Contact
                    </Link>
                    <Link to={'/Join'} className="hover:text-blue-400 transition duration-300">
                        Join
                    </Link>
                    <Link to={'/Portfolio'} className="hover:text-blue-400 transition duration-300">
                        Portfolio
                    </Link>
                    <div>
                        <DarkMode />
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar
