import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import ImageModal from '../components/ImageModal';

const products = [
  {
    id: 1,
    name: "Sports Runner Pro",
    image: "src/assets/images/shoe/1.jpg"
  },
  {
    id: 2,
    name: "Comfort Walker Elite",
    image: "src/assets/images/shoe/2.jpg"
  },
  {
    id: 3,
    name: "Urban Style X",
    image: "src/assets/images/shoe/3.jpg"
  },
  {
    id: 4,
    name: "Performance Trail",
    image: "src/assets/images/shoe/4.jpg"
  },
  {
    id: 5,
    name: "Casual Flex",
    image: "src/assets/images/shoe/5.jpg"
  }
];

const collaborations = [
  {
    id: 1,
    name: "Skechers",
    logo: "src/assets/images/logo/skechersLogo.png"
  },
  {
    id: 2,
    name: "Steve Madden",
    logo: "src/assets/images/logo/theNorthFaceLogo.png"
  },
  {
    id: 3,
    name: "Crocs",
    logo: "src/assets/images/logo/crocsLogo.png"
  }
];

export default function Home() {
  const navigate = useNavigate();
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section 
        className="h-screen bg-cover bg-center relative"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1515955656352-a1fa3ffcd111?auto=format&fit=crop&q=80")'
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-5xl md:text-6xl font-bold mb-4">Jialun R&D Technology</h1>
            <p className="text-xl md:text-2xl max-w-2xl mx-auto">
              Innovating footwear since 2014. From China to Vietnam, we craft cutting-edge sports shoes and sandals.
            </p>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Our Products</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <div key={product.id} className="group relative transform transition-all hover:scale-105">
                <div 
                  className="aspect-square overflow-hidden rounded-lg bg-gray-200 cursor-pointer shadow-lg"
                  onClick={() => setSelectedImage(product.image)}
                >
                  <img
                    src={`${product.image}?auto=format&fit=crop&w=800`}
                    alt={product.name}
                    className="h-full w-full object-cover object-center group-hover:opacity-75 transition-opacity"
                  />
                </div>
                <h3 className="mt-4 text-lg font-medium text-gray-900">{product.name}</h3>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <button
              onClick={() => navigate('/products')}
              className="inline-flex items-center px-8 py-4 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors transform hover:scale-105"
            >
              View All Products
              <ArrowRight className="ml-2 h-5 w-5" />
            </button>
          </div>
        </div>
      </section>

      {/* Collaborations Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Our Collaborations</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {collaborations.map((collab) => (
              <div key={collab.id} className="flex flex-col items-center justify-center transform transition-all hover:scale-105">
                <div className="w-48 h-48 bg-white shadow-lg p-6 flex items-center justify-center">
                  <img
                    src={`${collab.logo}?auto=format&fit=crop&w=400`}
                    alt={collab.name}
                    className="h-32 object-contain"
                  />
                </div>
                <h3 className="mt-4 text-xl font-bold text-gray-900">{collab.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Competencies Section */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Our Core Competitiveness</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg transform transition-all hover:scale-105">
              <div className="bg-blue-50 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4">Complete Facilities</h3>
              <p className="text-gray-600">State-of-the-art manufacturing facilities in Mainland China, DG and Vietnam</p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-lg transform transition-all hover:scale-105">
              <div className="bg-blue-50 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4">Professional Management</h3>
              <p className="text-gray-600">Expert production management team ensuring quality and efficiency</p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-lg transform transition-all hover:scale-105">
              <div className="bg-blue-50 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4">Material Innovation</h3>
              <p className="text-gray-600">Continuous research and development in new materials</p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-lg transform transition-all hover:scale-105">
              <div className="bg-blue-50 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4">Manufacturing Expertise</h3>
              <p className="text-gray-600">Specialized in sneakers and sandals manufacturing</p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-lg transform transition-all hover:scale-105">
              <div className="bg-blue-50 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4">Quality Assurance</h3>
              <p className="text-gray-600">Rigorous quality control and professional manufacturing capabilities</p>
            </div>
          </div>
        </div>
      </section>

      {selectedImage && (
        <ImageModal
          imageUrl={selectedImage}
          onClose={() => setSelectedImage(null)}
        />
      )}
    </div>
  );
}