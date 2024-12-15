
import { useState } from 'react'
import { Menu, X } from 'lucide-react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <a href="/" className="flex items-center">
              <div className="relative w-8 h-8">
                <div className="absolute inset-0 text-blue-500">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                  </svg>
                </div>
              </div>
              <span className="ml-2 text-xl font-bold font-sfui ">
                <span className="text-blue-500">Auscul</span>
                <span className="text-red-500">Tech Dx</span>
              </span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8 font-sfui text-[20px]">
            <a href="/" className="text-blue-500 hover:text-blue-700">Home</a>
            <a href="/technology" className="text-gray-500 hover:text-gray-900">Technology</a>
            <a href="/team" className="text-gray-500 hover:text-gray-900">Team</a>
            <a href="/news" className="text-gray-500 hover:text-gray-900">News</a>
            <a href="/publications" className="text-gray-500 hover:text-gray-900">Publications</a>
            <a href="/careers" className="text-gray-500 hover:text-gray-900">Careers</a>
            <a href="/contact" className="text-gray-500 hover:text-gray-900">Contact</a>
            <a 
              href="/login" 
              className="bg-red-500 text-white px-4 py-2 rounded-[25px] hover:bg-red-600 transition-colors text-[17px]"
            >
              LOGIN
            </a>
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-500 hover:text-gray-900 p-2"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4">
            <div className="flex flex-col space-y-4 font-sfui font-[17px]">
              <a href="/" className="text-blue-500 hover:text-blue-700">Home</a>
              <a href="/technology" className="text-gray-500 hover:text-gray-900">Technology</a>
              <a href="/team" className="text-gray-500 hover:text-gray-900">Team</a>
              <a href="/news" className="text-gray-500 hover:text-gray-900">News</a>
              <a href="/publications" className="text-gray-500 hover:text-gray-900">Publications</a>
              <a href="/careers" className="text-gray-500 hover:text-gray-900">Careers</a>
              <a href="/contact" className="text-gray-500 hover:text-gray-900">Contact</a>
              <a 
                href="/login" 
                className="bg-red-500 text-white px-4 py-2 rounded-[25px] hover:bg-red-600 transition-colors inline-block text-center"
              >
                LOGIN
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}

