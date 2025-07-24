import React, { useState } from 'react';
import { FaWhatsapp, FaUtensils, FaLeaf, FaHeart, FaGlobe, FaStar, FaClock } from 'react-icons/fa';
import { useEffect } from 'react';

const Restaurant = ({ language, translations }) => {
   useEffect(() => {
    // Faire défiler vers le haut au chargement de la page
    window.scrollTo(0, 0);
}, []);
  const [activeFilter, setActiveFilter] = useState('all');
  const whatsappNumber = "+237690051632";
  
  const getWhatsappUrl = (dishName, message) => {
    const fullMessage = language === 'fr' 
      ? `Bonjour, je souhaite réserver une table au restaurant FUX. ${message}`
      : `Hello, I would like to book a table at FUX restaurant. ${message}`;
    return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(fullMessage)}`;
  };

  const dishes = [
    {
      id: 1,
      name: language === 'fr' ? 'Pad Thaï aux Crevettes' : 'Shrimp Pad Thai',
      category: 'thai',
      price: '8,500',
      image: 'https://images.unsplash.com/photo-1559314809-0f31657def5e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      description: language === 'fr' 
        ? 'Nouilles de riz sautées avec crevettes fraîches, légumes croquants et sauce tamarind authentique.'
        : 'Stir-fried rice noodles with fresh shrimp, crispy vegetables and authentic tamarind sauce.',
      spicy: 2
    },
    {
      id: 2,
      name: language === 'fr' ? 'Canard Laqué de Pékin' : 'Peking Duck',
      category: 'chinese',
      price: '12,000',
      image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2081&q=80',
      description: language === 'fr' 
        ? 'Canard rôti traditionnel servi avec crêpes, concombre, oignons verts et sauce hoisin.'
        : 'Traditional roasted duck served with pancakes, cucumber, green onions and hoisin sauce.',
      spicy: 0
    },
    {
      id: 3,
      name: language === 'fr' ? 'Sushi Assortiment Premium' : 'Premium Sushi Assortment',
      category: 'japanese',
      price: '15,000',
      image: 'https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2006&q=80',
      description: language === 'fr' 
        ? 'Sélection de sushis et sashimis avec poissons frais du jour, préparés par notre chef japonais.'
        : 'Selection of sushi and sashimi with fresh fish of the day, prepared by our Japanese chef.',
      spicy: 0
    },
    {
      id: 4,
      name: language === 'fr' ? 'Curry Vert Thaï' : 'Thai Green Curry',
      category: 'thai',
      price: '7,500',
      image: 'https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      description: language === 'fr' 
        ? 'Curry épicé au lait de coco, basilic thaï, aubergines et votre choix de viande.'
        : 'Spicy curry with coconut milk, Thai basil, eggplant and your choice of meat.',
      spicy: 3
    },
    {
      id: 5,
      name: language === 'fr' ? 'Ramen Tonkotsu' : 'Tonkotsu Ramen',
      category: 'japanese',
      price: '9,000',
      image: 'https://images.unsplash.com/photo-1569718212165-3a8278d5f624?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2080&q=80',
      description: language === 'fr' 
        ? 'Bouillon riche à base d\'os de porc, nouilles fraîches, porc chashu et œuf mariné.'
        : 'Rich pork bone broth, fresh noodles, chashu pork and marinated egg.',
      spicy: 1
    },
    {
      id: 6,
      name: language === 'fr' ? 'Porc Aigre-Doux' : 'Sweet and Sour Pork',
      category: 'chinese',
      price: '8,000',
      image: 'https://images.unsplash.com/photo-1603133872878-684f208fb84b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1935&q=80',
      description: language === 'fr' 
        ? 'Porc croustillant avec ananas, poivrons et sauce aigre-douce traditionnelle chinoise.'
        : 'Crispy pork with pineapple, bell peppers and traditional Chinese sweet and sour sauce.',
      spicy: 0
    }
  ];

  const features = [
    {
      icon: <FaUtensils className="text-4xl text-red-600" />,
      title: translations.restaurant.features.cuisine,
      description: language === 'fr' 
        ? 'Plats authentiques préparés par nos chefs asiatiques expérimentés'
        : 'Authentic dishes prepared by our experienced Asian chefs'
    },
    {
      icon: <FaHeart className="text-4xl text-pink-600" />,
      title: translations.restaurant.features.experience,
      description: language === 'fr' 
        ? 'Chaque repas est une aventure culinaire mémorable'
        : 'Every meal is a memorable culinary adventure'
    },
    {
      icon: <FaLeaf className="text-4xl text-green-600" />,
      title: translations.restaurant.features.quality,
      description: language === 'fr' 
        ? 'Ingrédients frais et de première qualité sélectionnés avec soin'
        : 'Fresh, top-quality ingredients carefully selected'
    },
    {
      icon: <FaGlobe className="text-4xl text-blue-600" />,
      title: translations.restaurant.features.atmosphere,
      description: language === 'fr' 
        ? 'Ambiance chaleureuse inspirée des traditions asiatiques'
        : 'Warm atmosphere inspired by Asian traditions'
    }
  ];

  const filters = [
    { key: 'all', label: language === 'fr' ? 'Tous les plats' : 'All dishes' },
    { key: 'chinese', label: language === 'fr' ? 'Chinois' : 'Chinese' },
    { key: 'japanese', label: language === 'fr' ? 'Japonais' : 'Japanese' },
    { key: 'thai', label: language === 'fr' ? 'Thaï' : 'Thai' }
  ];

  const filteredDishes = activeFilter === 'all' 
    ? dishes 
    : dishes.filter(dish => dish.category === activeFilter);

  const getSpicyLevel = (level) => {
    const spicyIcons = [];
    for (let i = 0; i < 3; i++) {
      spicyIcons.push(
        <span key={i} className={i < level ? 'text-red-500' : 'text-gray-300'}>
          🌶️
        </span>
      );
    }
    return spicyIcons;
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section 
        className="relative bg-cover bg-center bg-no-repeat py-32"
        style={{
          backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url("https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80")'
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h1 className="text-5xl lg:text-6xl font-bold mb-6">
            {translations.restaurant.title}
          </h1>
          <p className="text-xl lg:text-2xl mb-4">
            {translations.restaurant.subtitle}
          </p>
          <p className="text-lg max-w-3xl mx-auto mb-8">
            {translations.restaurant.description}
          </p>
          <a
            href={getWhatsappUrl(
              '',
              language === 'fr' 
                ? 'Je souhaite réserver une table pour ce soir.'
                : 'I would like to book a table for tonight.'
            )}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-3 bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors duration-200 shadow-lg hover:shadow-xl"
          >
            <FaWhatsapp size={24} />
            <span>{translations.restaurant.cta}</span>
          </a>
        </div>
      </section>

      {/* Restaurant Features */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              {language === 'fr' ? 'Pourquoi choisir FUX RESTAURANT ?' : 'Why choose FUX RESTAURANT?'}
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center p-6">
                <div className="flex justify-center mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Menu Filters */}
      <section className="py-8 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              {language === 'fr' ? 'Notre Menu' : 'Our Menu'}
            </h2>
            <p className="text-lg text-gray-600">
              {language === 'fr' 
                ? 'Découvrez nos spécialités asiatiques authentiques'
                : 'Discover our authentic Asian specialties'
              }
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-4">
            {filters.map((filter) => (
              <button
                key={filter.key}
                onClick={() => setActiveFilter(filter.key)}
                className={`px-6 py-3 rounded-lg font-semibold transition-colors duration-200 ${
                  activeFilter === filter.key
                    ? 'bg-red-600 text-white'
                    : 'bg-white text-gray-700 hover:bg-gray-100'
                }`}
              >
                {filter.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Menu Items */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredDishes.map((dish) => (
              <div key={dish.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-200">
                <div 
                  className="h-48 bg-cover bg-center"
                  style={{ backgroundImage: `url(${dish.image})` }}
                ></div>
                
                <div className="p-6">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-xl font-bold text-gray-900">
                      {dish.name}
                    </h3>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-red-600">
                        {dish.price}
                      </div>
                      <div className="text-gray-500 text-sm">FCFA</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center mb-3">
                    <span className="bg-red-100 text-red-800 text-xs font-semibold px-2.5 py-0.5 rounded mr-2">
                      {dish.category.charAt(0).toUpperCase() + dish.category.slice(1)}
                    </span>
                    {dish.spicy > 0 && (
                      <div className="flex items-center">
                        {getSpicyLevel(dish.spicy)}
                      </div>
                    )}
                  </div>
                  
                  <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                    {dish.description}
                  </p>
                  
                  <a
                    href={getWhatsappUrl(
                      dish.name,
                      language === 'fr' 
                        ? `Je souhaite commander le plat "${dish.name}" au prix de ${dish.price} FCFA.`
                        : `I would like to order the "${dish.name}" dish at ${dish.price} FCFA.`
                    )}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center space-x-2 bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg font-semibold transition-colors duration-200"
                  >
                    <FaWhatsapp />
                    <span>{language === 'fr' ? 'Commander' : 'Order'}</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Opening Hours & Info */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center mb-6">
                <FaClock className="text-3xl text-blue-600 mr-4" />
                <h3 className="text-2xl font-bold text-gray-900">
                  {language === 'fr' ? 'Horaires d\'ouverture' : 'Opening Hours'}
                </h3>
              </div>
              
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="font-semibold text-gray-700">
                    {language === 'fr' ? 'Lundi - Vendredi' : 'Monday - Friday'}
                  </span>
                  <span className="text-gray-600">11:00 - 22:00</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-semibold text-gray-700">
                    {language === 'fr' ? 'Samedi - Dimanche' : 'Saturday - Sunday'}
                  </span>
                  <span className="text-gray-600">10:00 - 23:00</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-semibold text-gray-700">
                    {language === 'fr' ? 'Jours fériés' : 'Public holidays'}
                  </span>
                  <span className="text-gray-600">12:00 - 21:00</span>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center mb-6">
                <FaStar className="text-3xl text-yellow-500 mr-4" />
                <h3 className="text-2xl font-bold text-gray-900">
                  {language === 'fr' ? 'Informations' : 'Information'}
                </h3>
              </div>
              
              <div className="space-y-4">
                <div>
                  <span className="font-semibold text-gray-700">
                    {language === 'fr' ? 'Capacité:' : 'Capacity:'}
                  </span>
                  <span className="text-gray-600 ml-2">
                    {language === 'fr' ? '80 personnes' : '80 people'}
                  </span>
                </div>
                <div>
                  <span className="font-semibold text-gray-700">
                    {language === 'fr' ? 'Réservation:' : 'Reservation:'}
                  </span>
                  <span className="text-gray-600 ml-2">
                    {language === 'fr' ? 'Recommandée' : 'Recommended'}
                  </span>
                </div>
                <div>
                  <span className="font-semibold text-gray-700">
                    {language === 'fr' ? 'Livraison:' : 'Delivery:'}
                  </span>
                  <span className="text-gray-600 ml-2">
                    {language === 'fr' ? 'Disponible' : 'Available'}
                  </span>
                </div>
                <div>
                  <span className="font-semibold text-gray-700">
                    {language === 'fr' ? 'Parking:' : 'Parking:'}
                  </span>
                  <span className="text-gray-600 ml-2">
                    {language === 'fr' ? 'Gratuit' : 'Free'}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-red-600 to-orange-500 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">
            {language === 'fr' 
              ? 'Prêt pour une expérience culinaire unique ?' 
              : 'Ready for a unique culinary experience?'
            }
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            {language === 'fr'
              ? 'Réservez votre table dès maintenant et laissez-vous transporter par les saveurs authentiques de l\'Asie.'
              : 'Book your table now and let yourself be transported by the authentic flavors of Asia.'
            }
          </p>
          <a
            href={getWhatsappUrl(
              '',
              language === 'fr' 
                ? 'Je souhaite réserver une table au restaurant. Pouvez-vous me donner plus d\'informations sur vos disponibilités ?'
                : 'I would like to book a table at the restaurant. Can you give me more information about your availability?'
            )}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-3 bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors duration-200 shadow-lg hover:shadow-xl"
          >
            <FaWhatsapp size={24} />
            <span>{language === 'fr' ? 'Réserver une table' : 'Book a table'}</span>
          </a>
        </div>
      </section>
    </div>
  );
};

export default Restaurant;

