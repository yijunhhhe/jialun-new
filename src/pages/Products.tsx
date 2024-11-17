import React, { useState } from 'react';
import { ShoppingBag } from 'lucide-react';
import ImageModal from '../components/ImageModal';

const products = [
  {
    id: 1,
    name: "Sports Runner Pro",
    category: "Sports",
    image: "/assets/images/shoe/1.jpg",
    description: "High-performance running shoe with advanced cushioning"
  },
  {
    id: 2,
    name: "Comfort Walker Elite",
    category: "Casual",
    image: "/assets/images/shoe/2.jpg",
    description: "Premium comfort for everyday wear"
  },
  {
    id: 3,
    name: "Urban Style X",
    category: "Fashion",
    image: "/assets/images/shoe/3.jpg",
    description: "Modern design meets street style"
  },
  {
    id: 4,
    name: "Performance Trail",
    category: "Sports",
    image: "/assets/images/shoe/4.jpg",
    description: "Rugged durability for trail running"
  },
  {
    id: 5,
    name: "Casual Flex",
    category: "Casual",
    image: "/assets/images/shoe/5.jpg",
    description: "Flexible comfort for casual wear"
  },
  {
    id: 6,
    name: "Fashion Forward",
    category: "Fashion",
    image: "/assets/images/shoe/6.jpg",
    description: "Trendsetting design for fashion enthusiasts"
  },
  {
    id: 7,
    name: "Athletic Pro",
    category: "Sports",
    image: "/assets/images/shoe/7.jpg",
    description: "Professional-grade athletic performance"
  },
  {
    id: 8,
    name: "Daily Comfort Plus",
    category: "Casual",
    image: "/assets/images/shoe/8.jpg",
    description: "Enhanced comfort for daily activities"
  }
];

const categories = ["All", "Sports", "Casual", "Fashion"];

export default function Products() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const filteredProducts = selectedCategory === "All"
    ? products
    : products.filter(product => product.category === selectedCategory);

  return (
    <div className="pt-20">
      {/* Header Banner */}
      <div className="relative bg-gradient-to-br from-blue-900 to-blue-700 h-[400px]">
        <div className="container mx-auto px-4 h-full flex flex-col items-center justify-center">
          <div className="bg-white/10 p-4 rounded-full mb-6 backdrop-blur-sm">
            <ShoppingBag className="w-16 h-16 text-white" />
          </div>
          <h1 className="text-5xl font-bold text-white text-center mb-4">Our Products</h1>
          <p className="text-xl text-blue-100 text-center max-w-2xl">
            Discover Our Range of Innovative Footwear
          </p>
        </div>
      </div>

      <div className="bg-gray-50 py-20">
        <div className="container mx-auto px-4">
          {/* Category Filter */}
          <div className="flex justify-center mb-12 space-x-4">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-full transition-all ${
                  selectedCategory === category
                    ? 'bg-blue-600 text-white shadow-lg'
                    : 'bg-white text-gray-600 hover:bg-blue-50'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {filteredProducts.map((product) => (
              <div
                key={product.id}
                className="bg-white rounded-xl shadow-lg overflow-hidden transform transition-all hover:scale-105"
              >
                <div
                  className="aspect-square overflow-hidden cursor-pointer"
                  onClick={() => setSelectedImage(product.image)}
                >
                  <img
                    src={`${product.image}?auto=format&fit=crop&w=800`}
                    alt={product.name}
                    className="h-full w-full object-cover object-center hover:opacity-75 transition-opacity"
                  />
                </div>
                <div className="p-6">
                  <div className="mb-2">
                    <span className="inline-block px-3 py-1 text-sm font-semibold text-blue-600 bg-blue-50 rounded-full">
                      {product.category}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{product.name}</h3>
                  <p className="text-gray-600">{product.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {selectedImage && (
        <ImageModal
          imageUrl={selectedImage}
          onClose={() => setSelectedImage(null)}
        />
      )}
    </div>
  );
}