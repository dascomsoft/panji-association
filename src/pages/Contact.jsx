import React, { useState } from 'react';
import { FaWhatsapp, FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock, FaCar, FaHotel, FaUtensils } from 'react-icons/fa';
import { useEffect } from 'react';


const Contact = ({ language, translations }) => {

 useEffect(() => {
    // Faire défiler vers le haut au chargement de la page
    window.scrollTo(0, 0);
}, []);


  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });

  const whatsappNumber = "+237690051632";

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const message = language === 'fr' 
      ? `Bonjour, je suis ${formData.name}.

📧 Email: ${formData.email}
📞 Téléphone: ${formData.phone}
🔧 Service souhaité: ${formData.service}

💬 Message:
${formData.message}

Merci de me recontacter pour plus d'informations.`
      : `Hello, I am ${formData.name}.

📧 Email: ${formData.email}
📞 Phone: ${formData.phone}
🔧 Desired service: ${formData.service}

💬 Message:
${formData.message}

Please contact me back for more information.`;

    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const services = [
    { value: 'car-wash', label: language === 'fr' ? 'Lavage Auto' : 'Car Wash' },
    { value: 'hotel', label: language === 'fr' ? 'Hôtel' : 'Hotel' },
    { value: 'restaurant', label: language === 'fr' ? 'Restaurant' : 'Restaurant' },
    { value: 'other', label: language === 'fr' ? 'Autre' : 'Other' }
  ];

  const contactInfo = [
    {
      icon: <FaMapMarkerAlt className="text-3xl text-blue-600" />,
      title: translations.contact.info.address,
      details: [
        'Carrefour GOLF, Yaoundé',
        'Cameroun'
      ]
    },
    {
      icon: <FaPhone className="text-3xl text-green-600" />,
      title: translations.contact.info.phone,
      details: [
        '+237 690-051-632',
        '+237 698-108-081',
        '+237 681-438-661'
      ]
    },
    {
      icon: <FaEnvelope className="text-3xl text-orange-500" />,
      title: translations.contact.info.email,
      details: [
        'fuxcenter.carwash@gmail.com'
      ]
    },
    {
      icon: <FaClock className="text-3xl text-purple-600" />,
      title: translations.contact.info.hours,
      details: [
        language === 'fr' ? 'Lun - Ven: 7h00 - 19h00' : 'Mon - Fri: 7:00 AM - 7:00 PM',
        language === 'fr' ? 'Sam - Dim: 8h00 - 18h00' : 'Sat - Sun: 8:00 AM - 6:00 PM'
      ]
    }
  ];

  const quickActions = [
    {
      icon: <FaCar className="text-4xl text-blue-600" />,
      title: language === 'fr' ? 'Réserver un Lavage' : 'Book a Car Wash',
      description: language === 'fr' ? 'Choisissez votre forfait de lavage' : 'Choose your wash package',
      action: () => {
        const message = language === 'fr' 
          ? 'Bonjour, je souhaite réserver un service de lavage automobile. Pouvez-vous me donner plus d\'informations sur vos forfaits ?'
          : 'Hello, I would like to book a car wash service. Can you give me more information about your packages?';
        window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`, '_blank');
      }
    },
    {
      icon: <FaHotel className="text-4xl text-green-600" />,
      title: language === 'fr' ? 'Réserver une Chambre' : 'Book a Room',
      description: language === 'fr' ? 'Réservez votre séjour à l\'hôtel' : 'Book your hotel stay',
      action: () => {
        const message = language === 'fr' 
          ? 'Bonjour, je souhaite réserver une chambre d\'hôtel. Pouvez-vous me donner plus d\'informations sur vos disponibilités et tarifs ?'
          : 'Hello, I would like to book a hotel room. Can you give me more information about your availability and rates?';
        window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`, '_blank');
      }
    },
    {
      icon: <FaUtensils className="text-4xl text-red-600" />,
      title: language === 'fr' ? 'Réserver une Table' : 'Book a Table',
      description: language === 'fr' ? 'Réservez au restaurant' : 'Make a restaurant reservation',
      action: () => {
        const message = language === 'fr' 
          ? 'Bonjour, je souhaite réserver une table au restaurant. Pouvez-vous me donner plus d\'informations sur vos disponibilités ?'
          : 'Hello, I would like to book a table at the restaurant. Can you give me more information about your availability?';
        window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`, '_blank');
      }
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}

      <section
        className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-orange-600 font-extrabold text-white py-20 lg:py-32"
        style={{
          backgroundImage: `url('carwash4.jpg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}>
        {/* Overlay sombre */}
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-6xl font-bold mb-6">
            {translations.contact.title}
          </h1>
          <p className="text-2xl max-w-3xl mx-auto">
            {translations.contact.subtitle}
          </p>
        </div>
      </section>

      {/* Quick Actions */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              {language === 'fr' ? 'Réservations Rapides' : 'Quick Bookings'}
            </h2>
            <p className="text-lg text-gray-600">
              {language === 'fr' 
                ? 'Réservez directement via WhatsApp en un clic'
                : 'Book directly via WhatsApp with one click'
              }
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {quickActions.map((action, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-8 text-center hover:shadow-xl transition-shadow duration-200">
                <div className="flex justify-center mb-6">
                  {action.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {action.title}
                </h3>
                <p className="text-gray-600 mb-6">
                  {action.description}
                </p>
                <button
                  onClick={action.action}
                  className="inline-flex items-center space-x-2 bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-200 w-full justify-center"
                >
                  <FaWhatsapp />
                  <span>{language === 'fr' ? 'Réserver' : 'Book'}</span>
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-gray-50 rounded-lg p-8">
              <h3 className="text-3xl font-bold text-gray-900 mb-6">
                {language === 'fr' ? 'Envoyez-nous un message' : 'Send us a message'}
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    {translations.contact.form.name}
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder={translations.contact.form.name}
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    {translations.contact.form.email}
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder={translations.contact.form.email}
                  />
                </div>
                
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    {translations.contact.form.phone}
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder={translations.contact.form.phone}
                  />
                </div>
                
                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
                    {translations.contact.form.service}
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="">{translations.contact.form.service}</option>
                    {services.map((service) => (
                      <option key={service.value} value={service.label}>
                        {service.label}
                      </option>
                    ))}
                  </select>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    {translations.contact.form.message}
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows="4"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder={translations.contact.form.message}
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center space-x-3 bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors duration-200"
                >
                  <FaWhatsapp size={20} />
                  <span>{translations.contact.form.send}</span>
                </button>
              </form>
            </div>
            
            {/* Contact Info */}
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-8">
                {language === 'fr' ? 'Nos Coordonnées' : 'Our Contact Information'}
              </h3>
              
              <div className="space-y-8">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      {info.icon}
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-gray-900 mb-2">
                        {info.title}
                      </h4>
                      {info.details.map((detail, detailIndex) => (
                        <p key={detailIndex} className="text-gray-600 text-lg">
                          {detail}
                        </p>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
              
              {/* Map Placeholder */}
              <div className="mt-8 bg-gray-200 rounded-lg h-64 flex items-center justify-center">
                <div className="text-center">
                  <FaMapMarkerAlt className="text-4xl text-gray-400 mx-auto mb-2" />
                  <p className="text-gray-600">
                    {language === 'fr' ? 'Carte à venir' : 'Map coming soon'}
                  </p>
                  <p className="text-sm text-gray-500">Carrefour GOLF, Yaoundé</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-orange-500 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">
            {language === 'fr' 
              ? 'Besoin d\'aide immédiate ?' 
              : 'Need immediate help?'
            }
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            {language === 'fr'
              ? 'Notre équipe est disponible pour répondre à toutes vos questions et vous aider avec vos réservations.'
              : 'Our team is available to answer all your questions and help you with your bookings.'
            }
          </p>
          <a
            href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
              language === 'fr' 
                ? 'Bonjour, j\'ai besoin d\'aide concernant vos services FUX CENTER.'
                : 'Hello, I need help regarding your FUX CENTER services.'
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-3 bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors duration-200 shadow-lg hover:shadow-xl"
          >
            <FaWhatsapp size={24} />
            <span>{language === 'fr' ? 'Chattez avec nous' : 'Chat with us'}</span>
          </a>
        </div>
      </section>
    </div>
  );
};

export default Contact;

