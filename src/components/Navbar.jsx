import React, { useState } from 'react'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <div className="w-full h-auto flex items-center justify-center py-8">
      <div className="w-[90%] md:w-[80%] lg:w-[70%] relative flex flex-col items-center justify-center">
        {/* Navbar Container */}
        <div className={`w-full h-[8vh] flex items-center justify-between px-4 md:px-8 py-3 rounded-full ${!isMenuOpen ? "shadow-lg" : "shadow-none"}`}>
          {/* Logo */}
          <a href='/' className="text-xl flex items-center justify-center gap-2 md:text-3xl font-bold text-gray-800 hover:text-gray-600 cursor-pointer transition-colors">
            <div>SoftSell</div>
            <div><img className='w-8 h-8' src="/ss.webp" alt="" srcset="" /></div>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex gap-6 text-lg font-semibold text-gray-700">
            <a href="#steps" className="hover:text-gray-500 transition-colors">How</a>
            <a href="#why" className="hover:text-gray-500 transition-colors">Uses</a>
            <a href="#testimonials" className="hover:text-gray-500 transition-colors">Testimonials</a>
            <a href="#contact" className="hover:text-gray-500 transition-colors">Contact</a>
          </div>


          {/* Desktop Sign In */}
          <div className="hidden md:flex items-center">
            <a href="#contact" className="text-gray-800 font-semibold hover:text-gray-600 transition-colors">Sign In</a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center">
            <button
              onClick={toggleMenu}
              className="p-2 focus:outline-none focus:ring-2 focus:ring-gray-200 rounded-md"
            >
              {!isMenuOpen ? (
                <svg className="w-6 h-6 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                </svg>
              ) : (
                <svg className="w-6 h-6 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="w-full rounded-b-lg shadow-lg p-4 z-50 md:hidden mt-2">
            <div className="flex flex-col gap-4 text-lg font-semibold text-gray-700">
              <a href="#steps" className="hover:text-gray-500 transition-colors py-2 border-b border-gray-100">How</a>
              <a href="#why" className="hover:text-gray-500 transition-colors py-2 border-b border-gray-100">Uses</a>
              <a href="#testimonials" className="hover:text-gray-500 transition-colors py-2 border-b border-gray-100">Testimonials</a>
              <a href="#contact" className="text-gray-800 font-semibold hover:text-gray-600 transition-colors py-2">Contact</a>
              <a href="#contact" className="text-gray-800 font-semibold hover:text-gray-600 transition-colors py-2">Sign in</a>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Navbar