import React from 'react';
import { Building2 } from 'lucide-react';

export default function About() {
  return (
    <div className="pt-20">
      {/* Header Banner */}
      <div className="relative bg-gradient-to-br from-blue-900 to-blue-700 h-[400px]">
        <div className="container mx-auto px-4 h-full flex flex-col items-center justify-center">
          <div className="bg-white/10 p-4 rounded-full mb-6 backdrop-blur-sm">
            <Building2 className="w-16 h-16 text-white" />
          </div>
          <h1 className="text-5xl font-bold text-white text-center mb-4">About Us</h1>
          <p className="text-xl text-blue-100 text-center max-w-2xl">
            Our Journey of Innovation and Excellence Since 2014
          </p>
        </div>
      </div>

      <div className="bg-gray-50 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="prose prose-lg mx-auto">
              <div className="mb-12">
                <p className="mb-6">
                  Jialun R&D Company was established in August 2014, specializing in shoe development 
                  and manufacturing as well as innovative research and development of new materials 
                  such as EVA/TPU/TPR.
                </p>

                <p className="mb-6">
                  In August 2018, Hunan Jiaqi New Material Technology Co., Ltd. (CHN-TW joint venture) 
                  covering an area of 45 acres. Specializing in the production of sports shoes/sandals 
                  and IP injection shoes. Authorized production by Skechers, Steve madden, Crocs, 
                  Speedo, VF (TNF), PEAK and other brands.
                </p>

                <p className="mb-6">
                  Dongguan Longwang (Jialun) Yanchuang Technology Co., Ltd. was established in 2020, 
                  dedicated to providing customers with finished shoe development, mold design, and 
                  new material development.
                </p>

                <p className="mb-6">
                  Long Wong Shoes Co., Ltd(VN). was established in Vietnam in March 2023, covering 
                  an area of 15,000 square meters. It specializes in the manufacturing and production 
                  of sports casual shoes and sandals, and has obtained patents from SKECHERS, SPEEDO 
                  (Pantland), TNF (VF), STEVE MADDEN and other brands. Authorized production.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}