import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-blue-400" />
                <a href="mailto:Victor.wang@jialuncn.com" className="hover:text-blue-400">
                  Victor.wang@jialuncn.com
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-blue-400" />
                <a href="tel:+86 13503020949" className="hover:text-blue-400">
                  +86 13503020949
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-blue-400" />
                <span>Dongguan, Guangdong, China</span>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="/" className="hover:text-blue-400">Home</a></li>
              <li><a href="/about" className="hover:text-blue-400">About Us</a></li>
              <li><a href="/products" className="hover:text-blue-400">Products</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">About Jialun R&D</h3>
            <p className="text-gray-400">
              Innovating footwear since 2014. From China to Vietnam, we craft cutting-edge 
              sports shoes and sandals with dedication to quality and innovation.
            </p>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-800 text-center">
          <p className="text-gray-400">
            © {new Date().getFullYear()} Jialun R&D Technology. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}