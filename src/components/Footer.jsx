import { MapPin, Mail } from 'lucide-react'
import React from 'react'
export default function Footer() {
  return (
    <footer className="border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          {/* Company Info */}
          <div>
            <h3 className="text-[16px]  uppercase mb-4 text-black font-serif font-[400]">Auscultech DX</h3>
            <div className="flex items-start gap-2 text-gray-600">
              <MapPin className="w-5 h-5 text-[#FF5757] shrink-0 mt-1" />
              <p className="text-sm">
                2601 University Blvd W, #301<br />
                Silver Spring, Maryland 20902
              </p>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-[16px]  uppercase mb-4 text-black font-serif font-[400]">Contact</h3>
            <div className="flex items-center gap-2 text-gray-600">
              <Mail className="w-5 h-5 text-[#FF5757]" />
              <a 
                href="mailto:contact@auscultechdx.com" 
                className="text-sm hover:text-[#FF5757] transition-colors"
              >
                contact@auscultechdx.com
              </a>
            </div>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-[16px]  uppercase mb-4 text-black font-serif font-[400]">Follow Us</h3>
            <a 
              href="#" 
              className="inline-block bg-black rounded-full p-2 hover:opacity-80 transition-opacity"
              aria-label="Social Media"
            >
              <div className="w-4 h-4 bg-white rounded-full"></div>
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center text-sm text-gray-600 mt-8">
          Copyright © 2020 | AuscultTech DX
        </div>
      </div>
    </footer>
  )
}

