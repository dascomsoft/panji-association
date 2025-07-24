import React from 'react';
import { Link } from 'react-router-dom';
import { FaWhatsapp, FaPhone, FaEnvelope, FaMapMarkerAlt, FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';

const Footer = ({ language, translations }) => {
  const whatsappNumber = "+237690051632";
  const whatsappMessage = language === 'fr' 
    ? "Bonjour, je souhaite obtenir plus d'informations sur vos services FUX CENTER."
    : "Hello, I would like to get more information about your FUX CENTER services.";

  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

  const quickLinks = [
    { path: '/', label: translations.nav.home },
    { path: '/about', label: translations.nav.about },
    { path: '/services', label: translations.nav.services },
    { path: '/packages', label: translations.nav.packages }
  ];

  const services = [
    { path: '/hotel', label: translations.nav.hotel },
    { path: '/restaurant', label: translations.nav.restaurant },
    { path: '/contact', label: translations.nav.contact }
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="text-2xl font-bold">
              FUX <span className="text-orange-500">CENTER</span>
            </div>
            <p className="text-gray-300 text-sm">
              {translations.footer.description}
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                <FaFacebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                <FaInstagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                <FaTwitter size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">{translations.footer.quickLinks}</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link 
                    to={link.path} 
                    className="text-gray-300 hover:text-white transition-colors duration-200 text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">{translations.footer.services}</h3>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service.path}>
                  <Link 
                    to={service.path} 
                    className="text-gray-300 hover:text-white transition-colors duration-200 text-sm"
                  >
                    {service.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">{translations.footer.contact}</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <FaMapMarkerAlt className="text-orange-500 mt-1" size={16} />
                <span className="text-gray-300 text-sm">
                  Carrefour GOLF, Yaoundé<br />
                  Cameroun
                </span>
              </div>
              
              <div className="flex items-center space-x-3">
                <FaEnvelope className="text-orange-500" size={16} />
                <a 
                  href="mailto:fuxcenter.carwash@gmail.com" 
                  className="text-gray-300 hover:text-white transition-colors duration-200 text-sm"
                >
                  fuxcenter.carwash@gmail.com
                </a>
              </div>
              
              <div className="flex items-center space-x-3">
                <FaPhone className="text-orange-500" size={16} />
                <div className="text-gray-300 text-sm">
                  <div>+237 690-051-632</div>
                  <div>+237 698-108-081</div>
                  <div>+237 681-438-661</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm">
              © 2024 FUX CENTER. {translations.footer.rights}
            </div>
            
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 bg-green-500 text-white px-6 py-3 rounded-lg hover:bg-green-600 transition-colors duration-200"
            >
              <FaWhatsapp size={20} />
              <span className="font-medium">{translations.footer.whatsapp}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Sticky WhatsApp Button for Mobile */}
      <div className="fixed bottom-4 right-4 z-50 md:hidden">
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center w-14 h-14 bg-green-500 text-white rounded-full shadow-lg hover:bg-green-600 transition-colors duration-200"
        >
          <FaWhatsapp size={24} />
        </a>
      </div>
    </footer>
  );
};

export default Footer;

