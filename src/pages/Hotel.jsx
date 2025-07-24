import React, { useState } from 'react';
import { FaWhatsapp, FaBed, FaWifi, FaCar, FaConciergeBell, FaCoffee, FaSwimmingPool, FaStar } from 'react-icons/fa';
import { useEffect } from 'react';

const Hotel = ({ language, translations }) => {

   useEffect(() => {
    // Faire défiler vers le haut au chargement de la page
    window.scrollTo(0, 0);
}, []);


  const [activeFilter, setActiveFilter] = useState('all');
  const whatsappNumber = "+237690051632";
  
  const getWhatsappUrl = (roomType, message) => {
    const fullMessage = language === 'fr' 
      ? `Bonjour, je souhaite réserver ${roomType}. ${message}`
      : `Hello, I would like to book ${roomType}. ${message}`;
    return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(fullMessage)}`;
  };

  const rooms = [
    {
      id: 1,
      type: language === 'fr' ? 'Chambre Standard' : 'Standard Room',
      category: 'standard',
      price: '25,000',
      image: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      features: [
        language === 'fr' ? 'Lit double confortable' : 'Comfortable double bed',
        language === 'fr' ? 'Salle de bain privée' : 'Private bathroom',
        language === 'fr' ? 'Wi-Fi gratuit' : 'Free Wi-Fi',
        language === 'fr' ? 'Climatisation' : 'Air conditioning'
      ],
      description: language === 'fr' 
        ? 'Chambre confortable avec tous les équipements essentiels pour un séjour agréable.'
        : 'Comfortable room with all essential amenities for a pleasant stay.'
    },
    {
      id: 2,
      type: language === 'fr' ? 'Chambre Deluxe' : 'Deluxe Room',
      category: 'deluxe',
      price: '35,000',
      image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      features: [
        language === 'fr' ? 'Lit king size' : 'King size bed',
        language === 'fr' ? 'Salle de bain avec baignoire' : 'Bathroom with bathtub',
        language === 'fr' ? 'Balcon avec vue' : 'Balcony with view',
        language === 'fr' ? 'Mini-bar' : 'Mini-bar',
        language === 'fr' ? 'Service en chambre 24h/24' : '24h room service'
      ],
      description: language === 'fr' 
        ? 'Chambre spacieuse avec des équipements premium et une vue magnifique.'
        : 'Spacious room with premium amenities and beautiful view.'
    },
    {
      id: 3,
      type: language === 'fr' ? 'Suite Executive' : 'Executive Suite',
      category: 'suite',
      price: '50,000',
      image: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2074&q=80',
      features: [
        language === 'fr' ? 'Salon séparé' : 'Separate living room',
        language === 'fr' ? 'Chambre avec lit king size' : 'Bedroom with king size bed',
        language === 'fr' ? 'Salle de bain luxueuse' : 'Luxurious bathroom',
        language === 'fr' ? 'Terrasse privée' : 'Private terrace',
        language === 'fr' ? 'Service de conciergerie' : 'Concierge service'
      ],
      description: language === 'fr' 
        ? 'Suite luxueuse avec salon séparé, parfaite pour les voyages d\'affaires ou les occasions spéciales.'
        : 'Luxurious suite with separate living room, perfect for business trips or special occasions.'
    },
    {
      id: 4,
      type: language === 'fr' ? 'Suite Présidentielle' : 'Presidential Suite',
      category: 'suite',
      price: '75,000',
      image: 'https://images.unsplash.com/photo-1578683010236-d716f9a3f461?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      features: [
        language === 'fr' ? 'Deux chambres' : 'Two bedrooms',
        language === 'fr' ? 'Grand salon' : 'Large living room',
        language === 'fr' ? 'Salle à manger' : 'Dining room',
        language === 'fr' ? 'Jacuzzi privé' : 'Private jacuzzi',
        language === 'fr' ? 'Butler personnel' : 'Personal butler'
      ],
      description: language === 'fr' 
        ? 'Le summum du luxe avec des espaces généreux et des services personnalisés.'
        : 'The pinnacle of luxury with generous spaces and personalized services.'
    }
  ];

  const amenities = [
    {
      icon: <FaWifi className="text-3xl text-blue-600" />,
      title: language === 'fr' ? 'Wi-Fi Gratuit' : 'Free Wi-Fi',
      description: language === 'fr' ? 'Internet haut débit dans tout l\'hôtel' : 'High-speed internet throughout the hotel'
    },
    {
      icon: <FaCar className="text-3xl text-green-600" />,
      title: language === 'fr' ? 'Parking Gratuit' : 'Free Parking',
      description: language === 'fr' ? 'Parking sécurisé pour nos clients' : 'Secure parking for our guests'
    },
    {
      icon: <FaConciergeBell className="text-3xl text-orange-500" />,
      title: language === 'fr' ? 'Service 24h/24' : '24/7 Service',
      description: language === 'fr' ? 'Réception et service disponibles 24h/24' : 'Reception and service available 24/7'
    },
    {
      icon: <FaCoffee className="text-3xl text-purple-600" />,
      title: language === 'fr' ? 'Restaurant' : 'Restaurant',
      description: language === 'fr' ? 'Cuisine asiatique authentique' : 'Authentic Asian cuisine'
    },
    {
      icon: <FaSwimmingPool className="text-3xl text-cyan-600" />,
      title: language === 'fr' ? 'Piscine' : 'Swimming Pool',
      description: language === 'fr' ? 'Piscine extérieure avec terrasse' : 'Outdoor pool with terrace'
    }
  ];

  const filters = [
    { key: 'all', label: language === 'fr' ? 'Toutes' : 'All' },
    { key: 'standard', label: language === 'fr' ? 'Standard' : 'Standard' },
    { key: 'deluxe', label: language === 'fr' ? 'Deluxe' : 'Deluxe' },
    { key: 'suite', label: language === 'fr' ? 'Suites' : 'Suites' }
  ];

  const filteredRooms = activeFilter === 'all' 
    ? rooms 
    : rooms.filter(room => room.category === activeFilter);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section 
        className="relative bg-cover bg-center bg-no-repeat py-32"
        style={{
          backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("https://images.unsplash.com/photo-1564501049412-61c2a3083791?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2132&q=80")'
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h1 className="text-5xl lg:text-6xl font-bold mb-6">
            {translations.hotel.title}
          </h1>
          <p className="text-xl lg:text-2xl mb-4">
            {translations.hotel.subtitle}
          </p>
          <p className="text-lg max-w-3xl mx-auto mb-8">
            {translations.hotel.description}
          </p>
          <a
            href={getWhatsappUrl(
              language === 'fr' ? 'une chambre' : 'a room',
              language === 'fr' ? 'Pouvez-vous me donner plus d\'informations sur vos disponibilités ?' : 'Can you give me more information about your availability?'
            )}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-3 bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors duration-200 shadow-lg hover:shadow-xl"
          >
            <FaWhatsapp size={24} />
            <span>{translations.hotel.cta}</span>
          </a>
        </div>
      </section>

      {/* Hotel Features */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              {language === 'fr' ? 'Pourquoi choisir FUX HOTEL ?' : 'Why choose FUX HOTEL?'}
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {Object.entries(translations.hotel.features).map(([key, feature], index) => {
              const icons = [
                <FaBed className="text-4xl text-blue-600" />,
                <FaConciergeBell className="text-4xl text-green-600" />,
                <FaStar className="text-4xl text-orange-500" />,
                <FaCar className="text-4xl text-purple-600" />
              ];
              
              return (
                <div key={key} className="text-center p-6">
                  <div className="flex justify-center mb-4">
                    {icons[index]}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {feature}
                  </h3>
                  <p className="text-gray-600">
                    {language === 'fr' 
                      ? ['Chambres modernes et confortables', 'Service attentionné 24h/24', 'Confort et qualité premium', 'Emplacement idéal à Yaoundé'][index]
                      : ['Modern and comfortable rooms', 'Attentive 24/7 service', 'Premium comfort and quality', 'Ideal location in Yaoundé'][index]
                    }
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Room Filters */}
      <section className="py-8 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {filters.map((filter) => (
              <button
                key={filter.key}
                onClick={() => setActiveFilter(filter.key)}
                className={`px-6 py-3 rounded-lg font-semibold transition-colors duration-200 ${
                  activeFilter === filter.key
                    ? 'bg-blue-600 text-white'
                    : 'bg-white text-gray-700 hover:bg-gray-100'
                }`}
              >
                {filter.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Rooms */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {filteredRooms.map((room) => (
              <div key={room.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-200">
                <div 
                  className="h-64 bg-cover bg-center"
                  style={{ backgroundImage: `url(${room.image})` }}
                ></div>
                
                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-2xl font-bold text-gray-900">
                      {room.type}
                    </h3>
                    <div className="text-right">
                      <div className="text-3xl font-bold text-blue-600">
                        {room.price}
                      </div>
                      <div className="text-gray-500 text-sm">
                        FCFA / {language === 'fr' ? 'nuit' : 'night'}
                      </div>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 mb-4">
                    {room.description}
                  </p>
                  
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-2">
                      {language === 'fr' ? 'Équipements:' : 'Amenities:'}
                    </h4>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-1">
                      {room.features.map((feature, index) => (
                        <li key={index} className="flex items-center text-sm text-gray-600">
                          <div className="w-2 h-2 bg-blue-600 rounded-full mr-2"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <a
                    href={getWhatsappUrl(
                      room.type,
                      language === 'fr' 
                        ? `Je souhaite réserver cette chambre au prix de ${room.price} FCFA par nuit.`
                        : `I would like to book this room at ${room.price} FCFA per night.`
                    )}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center space-x-2 bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-200"
                  >
                    <FaWhatsapp />
                    <span>{translations.hotel.cta}</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Amenities */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              {language === 'fr' ? 'Nos Équipements' : 'Our Amenities'}
            </h2>
            <p className="text-lg text-gray-600">
              {language === 'fr' 
                ? 'Profitez de nos installations modernes et de nos services de qualité'
                : 'Enjoy our modern facilities and quality services'
              }
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {amenities.map((amenity, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6 text-center">
                <div className="flex justify-center mb-4">
                  {amenity.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {amenity.title}
                </h3>
                <p className="text-gray-600">
                  {amenity.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-orange-500 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">
            {language === 'fr' 
              ? 'Prêt pour un séjour inoubliable ?' 
              : 'Ready for an unforgettable stay?'
            }
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            {language === 'fr'
              ? 'Réservez dès maintenant votre chambre et découvrez l\'hospitalité exceptionnelle de FUX HOTEL.'
              : 'Book your room now and discover the exceptional hospitality of FUX HOTEL.'
            }
          </p>
          <a
            href={getWhatsappUrl(
              language === 'fr' ? 'une chambre' : 'a room',
              language === 'fr' 
                ? 'Je souhaite faire une réservation. Pouvez-vous me donner plus d\'informations sur vos disponibilités et tarifs ?'
                : 'I would like to make a reservation. Can you give me more information about your availability and rates?'
            )}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-3 bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors duration-200 shadow-lg hover:shadow-xl"
          >
            <FaWhatsapp size={24} />
            <span>{language === 'fr' ? 'Réserver maintenant' : 'Book now'}</span>
          </a>
        </div>
      </section>
    </div>
  );
};

export default Hotel;


