import React from 'react';
import { Mail, Phone, MapPin, Contact2 } from 'lucide-react';

export default function Contact() {
  return (
    <div className="pt-20">
      {/* Header Banner */}
      <div className="relative bg-gradient-to-br from-blue-900 to-blue-700 h-[400px]">
        <div className="container mx-auto px-4 h-full flex flex-col items-center justify-center">
          <div className="bg-white/10 p-4 rounded-full mb-6 backdrop-blur-sm">
            <Contact2 className="w-16 h-16 text-white" />
          </div>
          <h1 className="text-5xl font-bold text-white text-center mb-4">Get in Touch</h1>
          <p className="text-xl text-blue-100 text-center max-w-2xl">
            Connect with our team across our global locations
          </p>
        </div>
      </div>

      <div className="bg-gray-50 py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <h2 className="text-3xl font-bold mb-8">Contact Information</h2>
              
              {/* Victor Wang */}
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <h3 className="text-xl font-bold mb-4">Victor Wang</h3>
                <div className="space-y-3">
                  <a href="mailto:Victor.wang@jialuncn.com" 
                     className="flex items-center space-x-3 text-blue-600 hover:text-blue-800">
                    <Mail className="h-5 w-5" />
                    <span>Victor.wang@jialuncn.com</span>
                  </a>
                  <a href="tel:+86 13503020949" 
                     className="flex items-center space-x-3 text-blue-600 hover:text-blue-800">
                    <Phone className="h-5 w-5" />
                    <span>+86 13503020949</span>
                  </a>
                </div>
              </div>

              {/* Harley He */}
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <h3 className="text-xl font-bold mb-4">Harley He</h3>
                <div className="space-y-3">
                  <a href="mailto:Harley.he@jialuncn.com" 
                     className="flex items-center space-x-3 text-blue-600 hover:text-blue-800">
                    <Mail className="h-5 w-5" />
                    <span>Harley.he@jialuncn.com</span>
                  </a>
                  <a href="tel:+86 13922124339" 
                     className="flex items-center space-x-3 text-blue-600 hover:text-blue-800">
                    <Phone className="h-5 w-5" />
                    <span>+86 13922124339</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Locations */}
            <div>
              <h2 className="text-3xl font-bold mb-8">Our Locations</h2>
              
              {/* DG Development Center */}
              <div className="bg-white p-6 rounded-xl shadow-lg mb-6">
                <h3 className="text-xl font-bold mb-4">DG Development Center</h3>
                <div className="space-y-2">
                  <p className="font-semibold">DG LONGWONG (JIALUN) FOOTWEAR CO., LTD</p>
                  <p className="flex items-start space-x-3">
                    <MapPin className="h-5 w-5 mt-1 flex-shrink-0 text-blue-600" />
                    <span>Longwang Shoes Industry, No. 16, Tingkeng Road, Tingshan Village, Houjie Town, Dongguan City, Guangdong Province, China</span>
                  </p>
                </div>
              </div>

              {/* China Factory */}
              <div className="bg-white p-6 rounded-xl shadow-lg mb-6">
                <h3 className="text-xl font-bold mb-4">China Factory</h3>
                <div className="space-y-2">
                  <p className="font-semibold">UNAM JIAQI NEW MATERIAL TECHNOLOGY CO.,LTD</p>
                  <p className="flex items-start space-x-3">
                    <MapPin className="h-5 w-5 mt-1 flex-shrink-0 text-blue-600" />
                    <span>No. 8, Xinyuan Road, Tantang Industrial Part, ZhuQuan Town, Jiahe Country ChenZhou City, Hunan Province, China</span>
                  </p>
                </div>
              </div>

              {/* VN Factory */}
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <h3 className="text-xl font-bold mb-4">VN Factory</h3>
                <div className="space-y-2">
                  <p className="font-semibold">LONG WONG FOOTWEAR CO.,LTD</p>
                  <p className="flex items-start space-x-3">
                    <MapPin className="h-5 w-5 mt-1 flex-shrink-0 text-blue-600" />
                    <span>Thong Nhat Residential Group Kien Xuong Town, Kien Xuong District, Thai Binh Province, Vietnam</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}