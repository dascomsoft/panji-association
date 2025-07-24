import React from 'react';
import { FaWhatsapp, FaCar, FaSprayCan, FaTools, FaShieldAlt, FaGem, FaWrench } from 'react-icons/fa';
import { useEffect } from 'react';

const Services = ({ language, translations }) => {

   useEffect(() => {
    // Faire défiler vers le haut au chargement de la page
    window.scrollTo(0, 0);
}, []);

  const whatsappNumber = "+237690051632";
  
  const getWhatsappUrl = (serviceName) => {
    const message = language === 'fr' 
      ? `Bonjour, je souhaite réserver le service "${serviceName}" chez FUX CENTER.`
      : `Hello, I would like to book the "${serviceName}" service at FUX CENTER.`;
    return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
  };

  const services = [
    {
      icon: <FaSprayCan className="text-4xl text-blue-600" />,
      title: translations.services.list.prelavage.title,
      description: translations.services.list.prelavage.description,
      category: language === 'fr' ? 'Extérieur' : 'Exterior'
    },
    {
      icon: <FaShieldAlt className="text-4xl text-green-600" />,
      title: translations.services.list.decontamination.title,
      description: translations.services.list.decontamination.description,
      category: language === 'fr' ? 'Extérieur' : 'Exterior'
    },
    {
      icon: <FaTools className="text-4xl text-orange-500" />,
      title: translations.services.list.phares.title,
      description: translations.services.list.phares.description,
      category: language === 'fr' ? 'Rénovation' : 'Renovation'
    },
    {
      icon: <FaCar className="text-4xl text-purple-600" />,
      title: translations.services.list.roues.title,
      description: translations.services.list.roues.description,
      category: language === 'fr' ? 'Extérieur' : 'Exterior'
    },
    {
      icon: <FaGem className="text-4xl text-cyan-600" />,
      title: translations.services.list.vitres.title,
      description: translations.services.list.vitres.description,
      category: language === 'fr' ? 'Finition' : 'Finishing'
    },
    {
      icon: <FaWrench className="text-4xl text-red-600" />,
      title: translations.services.list.interieur.title,
      description: translations.services.list.interieur.description,
      category: language === 'fr' ? 'Intérieur' : 'Interior'
    }
  ];

  const additionalServices = [
    {
      title: language === 'fr' ? 'Nettoyage Bas de Caisses' : 'Undercarriage Cleaning',
      description: language === 'fr' 
        ? 'Vos bas de caisses seront impeccablement propres grâce à notre nettoyage dédié, garantissant une protection contre les éclaboussures et la corrosion.'
        : 'Your undercarriage will be impeccably clean thanks to our dedicated cleaning, guaranteeing protection against splashes and corrosion.'
    },
    {
      title: language === 'fr' ? 'Nettoyage et Décontamination des Poignées de Portes' : 'Door Handle Cleaning and Decontamination',
      description: language === 'fr'
        ? 'Éliminez les germes et la crasse accumulée avec notre nettoyage complet des poignées de portes.'
        : 'Eliminate germs and accumulated grime with our complete door handle cleaning.'
    },
    {
      title: language === 'fr' ? 'Traitement des Jantes et Lavage Extérieur' : 'Rim Treatment and Exterior Washing',
      description: language === 'fr'
        ? 'Faites briller vos jantes et redonnez à votre voiture tout son éclat avec notre traitement premium des jantes et lavage extérieur.'
        : 'Make your rims shine and give your car back all its shine with our premium rim treatment and exterior washing.'
    },
    {
      title: language === 'fr' ? 'Aspiration Complète et Dépoussiérage Intérieur' : 'Complete Vacuuming and Interior Dusting',
      description: language === 'fr'
        ? 'Adieu la poussière! Notre service d\'aspiration complète et de dépoussiérage redonne à votre habitacle toute la propreté qu\'il mérite.'
        : 'Goodbye dust! Our complete vacuuming and dusting service gives your passenger compartment all the cleanliness it deserves.'
    },
    {
      title: language === 'fr' ? 'Vérification des Fluides Automobiles' : 'Automotive Fluid Check',
      description: language === 'fr'
        ? 'Roulez en toute sérénité avec notre service de vérification des fluides. Nous inspectons et complétons les fluides essentiels.'
        : 'Drive with complete peace of mind with our fluid checking service. We inspect and complete essential fluids.'
    },
    {
      title: language === 'fr' ? 'Rénovation de Sièges en Cuir et Similicuir' : 'Leather and Faux Leather Seat Renovation',
      description: language === 'fr'
        ? 'Offrez à vos sièges en cuir et similicuir une nouvelle jeunesse avec notre service de rénovation spécialisé.'
        : 'Give your leather and faux leather seats a new lease of life with our specialized renovation service.'
    }
  ];

  const specialServices = [
    {
      title: language === 'fr' ? 'Rénovation de la Peinture' : 'Paint Renovation',
      price: language === 'fr' ? 'Sur devis' : 'Quote on request'
    },
    {
      title: language === 'fr' ? 'Désodorisant' : 'Deodorizer',
      price: '5,000 FCFA'
    },
    {
      title: language === 'fr' ? 'Nettoyage du Bas de Caisse' : 'Undercarriage Cleaning',
      price: '8,000 FCFA'
    },
    {
      title: language === 'fr' ? 'Élimination des Taches' : 'Stain Removal',
      price: '10,000 FCFA'
    },
    {
      title: language === 'fr' ? 'Nettoyage du Moteur' : 'Engine Cleaning',
      price: '15,000 FCFA'
    },
    {
      title: language === 'fr' ? 'Changement des Moquettes' : 'Carpet Replacement',
      price: language === 'fr' ? 'Sur devis' : 'Quote on request'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}

      <section
        className="relative bg-gradient-to-br from-slate-500  to-slate-400  font-extrabold text-white py-20 lg:py-32"
        style={{
          backgroundImage: `url('carwash.jpeg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}>
        {/* Overlay sombre */}
        <div className="absolute inset-0 bg-slate-900 opacity-20"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-6">
            {translations.services.title}
          </h1>
          <p className="text-2xl max-w-3xl mx-auto">
            {translations.services.subtitle}
          </p>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-200">
                <div className="flex items-center mb-4">
                  {service.icon}
                  <div className="ml-4">
                    <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded">
                      {service.category}
                    </span>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {service.description}
                </p>
                <a
                  href={getWhatsappUrl(service.title)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg font-semibold transition-colors duration-200 w-full justify-center"
                >
                  <FaWhatsapp />
                  <span>{translations.services.cta}</span>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              {language === 'fr' ? 'Services Complémentaires' : 'Additional Services'}
            </h2>
            <p className="text-lg text-gray-600">
              {language === 'fr' 
                ? 'Des services supplémentaires pour un entretien complet de votre véhicule'
                : 'Additional services for complete maintenance of your vehicle'
              }
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {additionalServices.map((service, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {service.description}
                </p>
                <a
                  href={getWhatsappUrl(service.title)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 text-green-600 hover:text-green-800 font-semibold transition-colors duration-200"
                >
                  <FaWhatsapp />
                  <span>{translations.services.cta}</span>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Special Services */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              {language === 'fr' ? 'Services Spéciaux' : 'Special Services'}
            </h2>
            <p className="text-lg text-gray-600">
              {language === 'fr' 
                ? 'Services spécialisés pour des besoins particuliers'
                : 'Specialized services for particular needs'
              }
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {specialServices.map((service, index) => (
              <div key={index} className="bg-gradient-to-br from-blue-50 to-orange-50 rounded-lg p-6 text-center">
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  {service.title}
                </h3>
                <div className="text-2xl font-bold text-blue-600 mb-4">
                  {service.price}
                </div>
                <a
                  href={getWhatsappUrl(service.title)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg font-semibold transition-colors duration-200"
                >
                  <FaWhatsapp />
                  <span>{language === 'fr' ? 'Demander' : 'Request'}</span>
                </a>
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
              ? 'Besoin d\'un service personnalisé ?' 
              : 'Need a personalized service?'
            }
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            {language === 'fr'
              ? 'Nos experts sont à votre disposition pour créer un service sur mesure adapté à vos besoins spécifiques.'
              : 'Our experts are at your disposal to create a tailor-made service adapted to your specific needs.'
            }
          </p>
          <a
            href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
              language === 'fr' 
                ? 'Bonjour, je souhaite discuter d\'un service personnalisé pour mon véhicule.'
                : 'Hello, I would like to discuss a personalized service for my vehicle.'
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-3 bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors duration-200 shadow-lg hover:shadow-xl"
          >
            <FaWhatsapp size={24} />
            <span>{language === 'fr' ? 'Discutons de vos besoins' : 'Let\'s discuss your needs'}</span>
          </a>
        </div>
      </section>
    </div>
  );
};

export default Services;

