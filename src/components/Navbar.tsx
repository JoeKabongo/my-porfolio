import React from 'react'

const Navbar = () => {
  return (
    <header>
      <nav className="flex justify-center bg-white px-6 py-3 rounded-full shadow-md flex space-x-6 text-gray-700 font-medium">
        <a href="#about" className="hover:text-blue-600">
          About
        </a>
        <a href="#projects" className="hover:text-blue-600">
          Projects
        </a>
        <a href="#contact" className="hover:text-blue-600">
          Contact
        </a>
      </nav>
    </header>
  )
}

export default Navbar
