import React from 'react';
import { ShieldCheck } from 'lucide-react';
import Parallax from './Parallax';

export default function Hero() {
  return (
    <Parallax
      backgroundImage="https://images.unsplash.com/photo-1557597774-9d273605dfa9?auto=format&fit=crop&q=80"
      className="h-[600px]"
    >
      <div className="h-full flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ShieldCheck className="h-16 w-16 text-blue-500 mx-auto mb-8" />
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Advanced Security Solutions for Modern Business
          </h1>
          <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
            Protect what matters most with state-of-the-art surveillance systems and 24/7 monitoring services.
          </p>
          <button className="bg-blue-600 text-white px-8 py-3 rounded-md text-lg font-semibold hover:bg-blue-700 transition-colors">
            Explore Products
          </button>
        </div>
      </div>
    </Parallax>
  );
}