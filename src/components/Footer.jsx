
import { Phone, Mail, MapPin, Facebook, Heart } from 'lucide-react';
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Association Info */}
          <div>
            <div className="flex items-center mb-4">
              <div className="h-10 w-10 bg-green-600 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-lg">PF</span>
              </div>
              <span className="ml-3 text-xl font-bold">Pandji Foot Études</span>
            </div>
            <p className="text-gray-300 mb-4 leading-relaxed">
              L'association sportive qui forme les champions de demain à Bafang, 
              en alliant passion du football et excellence éducative.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://wa.me/212701738228"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-600 p-2 rounded-full hover:bg-green-700 transition-colors duration-200"
              >
                <Phone size={20} />
              </a>
              <a 
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-600 p-2 rounded-full hover:bg-blue-700 transition-colors duration-200"
              >
                <Facebook size={20} />
              </a>
              <a 
                href="mailto:pandjifootetude@gmail.com"
                className="bg-gray-600 p-2 rounded-full hover:bg-gray-700 transition-colors duration-200"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Liens rapides</h3>
            <ul className="space-y-2">
              <li>
                <a href="#accueil" className="text-gray-300 hover:text-green-400 transition-colors duration-200">
                  Accueil
                </a>
              </li>
              <li>
                <a href="#apropos" className="text-gray-300 hover:text-green-400 transition-colors duration-200">
                  À propos
                </a>
              </li>
              <li>
                <a href="#activites" className="text-gray-300 hover:text-green-400 transition-colors duration-200">
                  Nos activités
                </a>
              </li>
              <li>
                <a href="#equipe" className="text-gray-300 hover:text-green-400 transition-colors duration-200">
                  Notre équipe
                </a>
              </li>
              <li>
                <a href="#galerie" className="text-gray-300 hover:text-green-400 transition-colors duration-200">
                  Galerie
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-300 hover:text-green-400 transition-colors duration-200">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="text-green-400 mt-1 flex-shrink-0" size={18} />
                <p className="text-gray-300">
                  Bafang, Région de l'Ouest<br />
                  Cameroun
                </p>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="text-green-400 flex-shrink-0" size={18} />
                <a 
                  href="https://wa.me/212701738228"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-green-400 transition-colors duration-200"
                >
                  +212 701 738 228
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="text-green-400 flex-shrink-0" size={18} />
                <a 
                  href="mailto:pandjifootetude@gmail.com"
                  className="text-gray-300 hover:text-green-400 transition-colors duration-200"
                >
                  pandjifootetude@gmail.com
                </a>
              </div>
            </div>

            <div className="mt-6 p-4 bg-gray-800 rounded-lg">
              <h4 className="font-semibold mb-2">Horaires d'accueil</h4>
              <div className="text-sm text-gray-300 space-y-1">
                <p>Lun - Ven : 15h00 - 19h00</p>
                <p>Samedi : 13h00 - 18h00</p>
                <p>Dimanche : Fermé</p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2024 Association Sportive Pandji Foot Études. Tous droits réservés.
            </p>
            <p className="text-gray-400 text-sm flex items-center mt-4 md:mt-0">
              Fait avec <Heart className="text-red-500 mx-1" size={16} /> à Bafang
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
