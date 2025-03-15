import React from 'react'

function Navbar() {
    return (
        <div>
            <nav className="flex justify-between items-center px-6 py-4 bg-gray-900 text-white shadow-md">
                {/* Log o Section */}
                <div className="text-4xl font-bold tracking-wide text-blue-400">
                    ABC
                </div>

                {/* Navigation Links */}
                <div className="flex space-x-6 text-lg font-medium">
                    <a href="#" className="hover:text-blue-400 transition duration-300">
                        About
                    </a>
                    <a href="#" className="hover:text-blue-400 transition duration-300">
                        Blog
                    </a>
                    <a href="#" className="hover:text-blue-400 transition duration-300">
                        Contact
                    </a>
                    <a href="#" className="hover:text-blue-400 transition duration-300">
                        Join
                    </a>
                    <a href="#" className="hover:text-blue-400 transition duration-300">
                        Portfolio
                    </a>
                </div>
            </nav>
        </div>
    )
}

export default Navbar
