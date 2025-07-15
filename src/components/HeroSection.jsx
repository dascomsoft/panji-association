
import { ArrowRight, Users, Target, Trophy } from 'lucide-react';
import { Link } from 'react-router-dom';
import React from 'react';




const Hero = () => {
  
  return (
    <section className="relative bg-gradient-to-br from-green-50 to-white pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight">
              <span className="text-green-600">Pandji Foot</span>
              <br />
              <span className="text-gray-800">Études</span>
            </h1>
            <p className="text-xl text-gray-600 mt-6 leading-relaxed">
              L'association sportive qui forme les champions de demain à Bafang, 
              en alliant passion du football et excellence éducative.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Link
                to="/contact"
                className="bg-green-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors duration-200 flex items-center justify-center"
              >
                Nous rejoindre
                <ArrowRight className="ml-2" size={20} />
              </Link>
              <a
                href="https://wa.me/212701738228"
                target="_blank"
                rel="noopener noreferrer"
                className="border-2 border-green-600 text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-green-600 hover:text-white transition-colors duration-200 text-center"
              >
                Contacter sur WhatsApp
              </a>
            </div>
          </div>
          
          <div className="relative">
            <div className="bg-green-100 rounded-2xl p-8">
              <img
                src='/foot.jpg'
                alt="Jeunes footballeurs en entraînement"
                className="w-full h-80 object-cover rounded-xl shadow-lg"
              />
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center p-6 bg-white rounded-xl shadow-md">
            <Users className="mx-auto text-green-600 mb-4" size={48} />
            <h3 className="text-3xl font-bold text-gray-900">150+</h3>
            <p className="text-gray-600">Jeunes formés</p>
          </div>
          <div className="text-center p-6 bg-white rounded-xl shadow-md">
            <Target className="mx-auto text-green-600 mb-4" size={48} />
            <h3 className="text-3xl font-bold text-gray-900">95%</h3>
            <p className="text-gray-600">Réussite scolaire</p>
          </div>
          <div className="text-center p-6 bg-white rounded-xl shadow-md">
            <Trophy className="mx-auto text-green-600 mb-4" size={48} />
            <h3 className="text-3xl font-bold text-gray-900">12</h3>
            <p className="text-gray-600">Trophées gagnés</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
