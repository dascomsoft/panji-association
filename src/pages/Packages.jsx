import React from 'react';
import { FaWhatsapp, FaCheck, FaStar, FaCrown } from 'react-icons/fa';
import { useEffect } from 'react';

const Packages = ({ language, translations }) => {

  useEffect(() => {
    // Faire défiler vers le haut au chargement de la page
    window.scrollTo(0, 0);
}, []);


  const whatsappNumber = "+237690051632";
  
  const getWhatsappUrl = (packageName, category, price) => {
    const message = language === 'fr' 
      ? `Bonjour, je souhaite réserver le forfait "${packageName}" ${category} au prix de ${price} FCFA.`
      : `Hello, I would like to book the "${packageName}" ${category} package at ${price} FCFA.`;
    return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
  };

  const packages = [
    {
      name: translations.packages.types.classic,
      icon: <FaStar className="text-yellow-500" />,
      description: language === 'fr' ? 'Services essentiels pour un nettoyage de base' : 'Essential services for basic cleaning',
      prices: { A: 5000, B: 7000, C: 10000 },
      color: 'blue',
      services: [
        language === 'fr' ? 'Service de nettoyage & décontamination des bordures externes' : 'External border cleaning & decontamination service',
        language === 'fr' ? 'Nettoyage & décontamination des poignées de portes' : 'Door handle cleaning & decontamination',
        language === 'fr' ? 'Nettoyage du rétroviseur et décontamination' : 'Mirror cleaning and decontamination',
        language === 'fr' ? 'Nettoyage garde boue & décontamination' : 'Mudguard cleaning & decontamination',
        language === 'fr' ? 'Traitement des jantes/ lavage extérieur' : 'Rim treatment/ exterior washing',
        language === 'fr' ? 'Nettoyage & décontamination intérieur' : 'Interior cleaning & decontamination',
        language === 'fr' ? 'Aspiration complète/ dépoussiérage intérieur' : 'Complete vacuuming/ interior dusting',
        language === 'fr' ? 'Nettoyage de vitres et nettoyages de tapis' : 'Window cleaning and carpet cleaning',
        language === 'fr' ? 'Nettoyage du coffre arrière' : 'Rear trunk cleaning',
        language === 'fr' ? 'Vérification des fluides automobiles' : 'Automotive fluid check',
        language === 'fr' ? 'Prélavage extérieur' : 'Exterior pre-wash'
      ]
    },
    {
      name: translations.packages.types.standard,
      icon: <FaStar className="text-orange-500" />,
      description: language === 'fr' ? 'Forfait Classic + services supplémentaires' : 'Classic package + additional services',
      prices: { A: 12000, B: 15000, C: 20000 },
      color: 'orange',
      services: [
        language === 'fr' ? 'Tous les services FUX CLASSIC' : 'All FUX CLASSIC services',
        language === 'fr' ? 'Nettoyage bas de caisse' : 'Undercarriage cleaning',
        language === 'fr' ? 'Soufflage moteur' : 'Engine blowing'
      ]
    },
    {
      name: translations.packages.types.prestige,
      icon: <FaStar className="text-purple-500" />,
      description: language === 'fr' ? 'Services premium pour votre véhicule' : 'Premium services for your vehicle',
      prices: { A: 10000, B: 12000, C: 15000 },
      color: 'purple',
      services: [
        language === 'fr' ? 'Tous les services FUX CLASSIC' : 'All FUX CLASSIC services',
        language === 'fr' ? 'Rénovation des phares/ soufflage moteur' : 'Headlight renovation/ engine blowing',
        language === 'fr' ? 'Nettoyage passage des roues' : 'Wheel well cleaning'
      ]
    },
    {
      name: translations.packages.types.gold,
      icon: <FaStar className="text-yellow-600" />,
      description: language === 'fr' ? 'Finition premium avec revêtement' : 'Premium finish with coating',
      prices: { A: 22000, B: 28000, C: 35000 },
      color: 'yellow',
      services: [
        language === 'fr' ? 'Tous les services FUX CLASSIC' : 'All FUX CLASSIC services',
        language === 'fr' ? 'Nettoyage & polissage des vitres' : 'Window cleaning & polishing',
        language === 'fr' ? 'Revêtement du verre/lustration du tableau de bord' : 'Glass coating/dashboard polishing'
      ]
    },
    {
      name: translations.packages.types.silver,
      icon: <FaCrown className="text-gray-400" />,
      description: language === 'fr' ? 'Service haut de gamme avec revêtement moteur' : 'High-end service with engine coating',
      prices: { A: 28000, B: 38000, C: 58000 },
      color: 'gray',
      services: [
        language === 'fr' ? 'Tous les services FUX CLASSIC' : 'All FUX CLASSIC services',
        language === 'fr' ? 'Nettoyage bas de caisse/ revêtement moteur' : 'Undercarriage cleaning/ engine coating',
        language === 'fr' ? 'Lustration du tableau de bord/ revêtement moteur' : 'Dashboard polishing/ engine coating'
      ]
    },
    {
      name: translations.packages.types.platinum,
      icon: <FaCrown className="text-gray-800" />,
      description: language === 'fr' ? 'Le summum du luxe automobile' : 'The pinnacle of automotive luxury',
      prices: { A: 58000, B: 68000, C: 75000 },
      color: 'gray',
      popular: true,
      services: [
        language === 'fr' ? 'Tous les services FUX CLASSIC' : 'All FUX CLASSIC services',
        language === 'fr' ? 'Nettoyage profond du véhicule' : 'Deep vehicle cleaning',
        language === 'fr' ? 'Désinsectification du véhicule' : 'Vehicle deinsectization',
        language === 'fr' ? 'Démontage des sièges/ portes lustrées' : 'Seat removal/ polished doors',
        language === 'fr' ? 'Lustration du tableau de bord' : 'Dashboard polishing',
        language === 'fr' ? 'Désinsectification du véhicule/ rénovation' : 'Vehicle deinsectization/ renovation'
      ]
    }
  ];

  const getColorClasses = (color, isPopular = false) => {
    const colors = {
      blue: {
        border: 'border-blue-500',
        bg: 'bg-blue-50',
        text: 'text-blue-600',
        button: 'bg-blue-600 hover:bg-blue-700'
      },
      orange: {
        border: 'border-orange-500',
        bg: 'bg-orange-50',
        text: 'text-orange-600',
        button: 'bg-orange-600 hover:bg-orange-700'
      },
      purple: {
        border: 'border-purple-500',
        bg: 'bg-purple-50',
        text: 'text-purple-600',
        button: 'bg-purple-600 hover:bg-purple-700'
      },
      yellow: {
        border: 'border-yellow-500',
        bg: 'bg-yellow-50',
        text: 'text-yellow-600',
        button: 'bg-yellow-600 hover:bg-yellow-700'
      },
      gray: {
        border: isPopular ? 'border-gold-500 border-2' : 'border-gray-500',
        bg: isPopular ? 'bg-gradient-to-br from-yellow-50 to-orange-50' : 'bg-gray-50',
        text: isPopular ? 'text-gold-600' : 'text-gray-600',
        button: isPopular ? 'bg-gradient-to-r from-yellow-600 to-orange-600 hover:from-yellow-700 hover:to-orange-700' : 'bg-gray-600 hover:bg-gray-700'
      }
    };
    return colors[color] || colors.blue;
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}

      <section
        className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-orange-600 font-extrabold text-white py-20 lg:py-32"
        style={{
          backgroundImage: `url('carwash2.jpg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}>
        {/* Overlay sombre */}
        <div className="absolute inset-0 bg-black opacity-30"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-6">
            {translations.packages.title}
          </h1>
          <p className="text-2xl max-w-3xl mx-auto">
            {translations.packages.subtitle}
          </p>
        </div>
      </section>

      {/* Categories Info */}
      <section className="py-8 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center p-4 bg-white rounded-lg shadow">
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                {translations.packages.categories.a}
              </h3>
              <p className="text-gray-600 text-sm">
                {language === 'fr' ? 'Véhicules compacts' : 'Compact vehicles'}
              </p>
            </div>
            <div className="text-center p-4 bg-white rounded-lg shadow">
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                {translations.packages.categories.b}
              </h3>
              <p className="text-gray-600 text-sm">
                {language === 'fr' ? 'Véhicules moyens' : 'Medium vehicles'}
              </p>
            </div>
            <div className="text-center p-4 bg-white rounded-lg shadow">
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                {translations.packages.categories.c}
              </h3>
              <p className="text-gray-600 text-sm">
                {language === 'fr' ? 'Véhicules grands/SUV' : 'Large vehicles/SUV'}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Packages */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {packages.map((pkg, index) => {
              const colorClasses = getColorClasses(pkg.color, pkg.popular);
              return (
                <div key={index} className={`relative bg-white rounded-lg shadow-lg border-2 ${colorClasses.border} ${pkg.popular ? 'transform scale-105' : ''}`}>
                  {pkg.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-4 py-1 rounded-full text-sm font-bold">
                        {language === 'fr' ? 'POPULAIRE' : 'POPULAR'}
                      </span>
                    </div>
                  )}
                  
                  <div className={`p-6 ${colorClasses.bg} rounded-t-lg`}>
                    <div className="flex items-center justify-center mb-4">
                      {pkg.icon}
                      <h3 className={`text-2xl font-bold ml-3 ${colorClasses.text}`}>
                        {pkg.name}
                      </h3>
                    </div>
                    <p className="text-gray-600 text-center mb-6">
                      {pkg.description}
                    </p>
                    
                    {/* Prices */}
                    <div className="space-y-3">
                      {Object.entries(pkg.prices).map(([category, price]) => (
                        <div key={category} className="flex justify-between items-center bg-white rounded-lg p-3">
                          <span className="font-semibold text-gray-700">
                            {translations.packages.categories[category.toLowerCase()]}
                          </span>
                          <div className="text-right">
                            <span className={`text-2xl font-bold ${colorClasses.text}`}>
                              {price.toLocaleString()}
                            </span>
                            <span className="text-gray-500 text-sm ml-1">FCFA</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <h4 className="font-bold text-gray-900 mb-4">
                      {language === 'fr' ? 'Services inclus:' : 'Included services:'}
                    </h4>
                    <ul className="space-y-2 mb-6">
                      {pkg.services.map((service, serviceIndex) => (
                        <li key={serviceIndex} className="flex items-start">
                          <FaCheck className="text-green-500 mt-1 mr-2 flex-shrink-0" size={12} />
                          <span className="text-gray-600 text-sm">{service}</span>
                        </li>
                      ))}
                    </ul>
                    
                    {/* Booking Buttons */}
                    <div className="space-y-2">
                      {Object.entries(pkg.prices).map(([category, price]) => (
                        <a
                          key={category}
                          href={getWhatsappUrl(pkg.name, category, price)}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`w-full inline-flex items-center justify-center space-x-2 ${colorClasses.button} text-white px-4 py-2 rounded-lg font-semibold transition-colors duration-200`}
                        >
                          <FaWhatsapp />
                          <span>
                            {translations.packages.cta} {category} - {price.toLocaleString()} FCFA
                          </span>
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Special Services */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              {language === 'fr' ? 'Services Spéciaux' : 'Special Services'}
            </h2>
            <p className="text-lg text-gray-600">
              {language === 'fr' 
                ? 'Services additionnels disponibles sur demande'
                : 'Additional services available on request'
              }
            </p>
          </div>
          
          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { name: language === 'fr' ? 'Rénovation de la Peinture' : 'Paint Renovation', price: language === 'fr' ? 'Sur devis' : 'Quote on request' },
                { name: language === 'fr' ? 'Désodorisant' : 'Deodorizer', price: '5,000 FCFA' },
                { name: language === 'fr' ? 'Nettoyage du Bas de Caisse' : 'Undercarriage Cleaning', price: '8,000 FCFA' },
                { name: language === 'fr' ? 'Élimination des Taches' : 'Stain Removal', price: '10,000 FCFA' },
                { name: language === 'fr' ? 'Nettoyage du Moteur' : 'Engine Cleaning', price: '15,000 FCFA' },
                { name: language === 'fr' ? 'Changement des Moquettes' : 'Carpet Replacement', price: language === 'fr' ? 'Sur devis' : 'Quote on request' }
              ].map((service, index) => (
                <div key={index} className="text-center p-4 border border-gray-200 rounded-lg">
                  <h3 className="font-bold text-gray-900 mb-2">{service.name}</h3>
                  <div className="text-xl font-bold text-blue-600 mb-3">{service.price}</div>
                  <a
                    href={getWhatsappUrl(service.name, '', service.price)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-2 bg-green-500 hover:bg-green-600 text-white px-3 py-1 rounded text-sm font-semibold transition-colors duration-200"
                  >
                    <FaWhatsapp size={14} />
                    <span>{language === 'fr' ? 'Commander' : 'Order'}</span>
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-orange-500 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">
            {language === 'fr' 
              ? 'Besoin d\'aide pour choisir ?' 
              : 'Need help choosing?'
            }
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            {language === 'fr'
              ? 'Nos experts sont là pour vous conseiller et vous aider à choisir le forfait parfait pour votre véhicule.'
              : 'Our experts are here to advise you and help you choose the perfect package for your vehicle.'
            }
          </p>
          <a
            href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
              language === 'fr' 
                ? 'Bonjour, j\'aimerais obtenir des conseils pour choisir le bon forfait pour mon véhicule.'
                : 'Hello, I would like to get advice on choosing the right package for my vehicle.'
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-3 bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors duration-200 shadow-lg hover:shadow-xl"
          >
            <FaWhatsapp size={24} />
            <span>{language === 'fr' ? 'Demander conseil' : 'Get advice'}</span>
          </a>
        </div>
      </section>
    </div>
  );
};

export default Packages;

