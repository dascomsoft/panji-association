import React from 'react';
import { Link } from 'react-router-dom';
import { FaCar, FaHotel, FaUtensils, FaWhatsapp, FaArrowRight } from 'react-icons/fa';
import { useEffect } from 'react';



const Home = ({ language, translations }) => {


  useEffect(() => {
    // Faire défiler vers le haut au chargement de la page
    window.scrollTo(0, 0);
  }, []);

  const whatsappNumber = "+237690051632";
  const whatsappMessage = language === 'fr'
    ? "Bonjour, je souhaite réserver un service chez FUX CENTER."
    : "Hello, I would like to book a service at FUX CENTER.";
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

  const services = [
    {
      icon: <FaCar className="text-4xl text-blue-600" />,
      title: translations.home.services.carWash,
      description: language === 'fr'
        ? "Services de lavage automobile professionnel avec des techniques avancées"
        : "Professional car wash services with advanced techniques",
      link: "/services"
    },
    {
      icon: <FaHotel className="text-4xl text-orange-500" />,
      title: translations.home.services.hotel,
      description: language === 'fr'
        ? "Hébergement hôtelier exceptionnel avec service personnalisé"
        : "Exceptional hotel accommodation with personalized service",
      link: "/hotel"
    },
    {
      icon: <FaUtensils className="text-4xl text-green-600" />,
      title: translations.home.services.restaurant,
      description: language === 'fr'
        ? "Expérience culinaire asiatique authentique et mémorable"
        : "Authentic and memorable Asian culinary experience",
      link: "/restaurant"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section
        className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-orange-600 text-white py-20 lg:py-32"
        style={{
          backgroundImage: `url('business.webp')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}>
        {/* Overlay sombre */}
        <div className="absolute inset-0 bg-black opacity-40"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl lg:text-7xl font-bold mb-6">
            {translations.home.hero.title}
          </h1>
          <p className="text-xl lg:text-2xl mb-4 text-orange-200">
            {translations.home.hero.subtitle}
          </p>
          <p className="text-lg lg:text-xl mb-8 max-w-3xl mx-auto text-gray-200">
            {translations.home.hero.description}
          </p>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-3 bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors duration-200 shadow-lg hover:shadow-xl"
          >
            <FaWhatsapp size={24} />
            <span>{translations.home.hero.cta}</span>
          </a>
        </div>
      </section>








  {/* New Attractive Sections */}
      
      {/* Excellence Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div data-aos="fade-right">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                {language === 'fr' ? 'Excellence & Innovation' : 'Excellence & Innovation'}
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                {language === 'fr' 
                  ? 'Chez FUX CENTER, nous redéfinissons les standards de l\'entretien automobile avec des techniques avancées et un service personnalisé. Notre approche innovante garantit des résultats exceptionnels pour chaque véhicule.'
                  : 'At FUX CENTER, we redefine automotive maintenance standards with advanced techniques and personalized service. Our innovative approach guarantees exceptional results for every vehicle.'
                }
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">500+</div>
                  <p className="text-gray-600">{language === 'fr' ? 'Clients Satisfaits' : 'Satisfied Clients'}</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-600 mb-2">24/7</div>
                  <p className="text-gray-600">{language === 'fr' ? 'Service Disponible' : 'Service Available'}</p>
                </div>
              </div>
            </div>
            <div data-aos="fade-left">
              <img 
                src="car-wash-service.jpg" 
                alt="Professional Car Wash Service"
                className="rounded-lg shadow-2xl w-full h-96 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Luxury Hotel Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div data-aos="fade-right">
              <img 
                src="hotel-lobby.jpg" 
                alt="Luxury Hotel Lobby"
                className="rounded-lg shadow-2xl w-full h-96 object-cover"
              />
            </div>
            <div data-aos="fade-left">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                {language === 'fr' ? 'Hospitalité de Luxe' : 'Luxury Hospitality'}
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                {language === 'fr' 
                  ? 'Découvrez notre hôtel moderne où le confort rencontre l\'élégance. Nos chambres spacieuses et nos services personnalisés créent une expérience inoubliable pour chaque séjour.'
                  : 'Discover our modern hotel where comfort meets elegance. Our spacious rooms and personalized services create an unforgettable experience for every stay.'
                }
              </p>
              <div className="flex flex-wrap gap-4 mb-8">
                <span className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium">
                  {language === 'fr' ? 'Wi-Fi Gratuit' : 'Free Wi-Fi'}
                </span>
                <span className="bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-medium">
                  {language === 'fr' ? 'Piscine' : 'Swimming Pool'}
                </span>
                <span className="bg-purple-100 text-purple-800 px-4 py-2 rounded-full text-sm font-medium">
                  {language === 'fr' ? 'Service 24h/24' : '24/7 Service'}
                </span>
              </div>
              <Link
                to="/hotel"
                className="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-200"
              >
                {language === 'fr' ? 'Découvrir l\'Hôtel' : 'Discover Hotel'}
                <FaArrowRight className="ml-2" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Asian Cuisine Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div data-aos="fade-right">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                {language === 'fr' ? 'Cuisine Asiatique Authentique' : 'Authentic Asian Cuisine'}
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                {language === 'fr' 
                  ? 'Savourez une expérience culinaire exceptionnelle dans notre restaurant asiatique. Nos chefs experts préparent des plats authentiques qui éveillent tous vos sens.'
                  : 'Savor an exceptional culinary experience in our Asian restaurant. Our expert chefs prepare authentic dishes that awaken all your senses.'
                }
              </p>
              <div className="grid grid-cols-3 gap-4 mb-8">
                <div className="text-center">
                  <div className="text-2xl font-bold text-red-600 mb-1">🍜</div>
                  <p className="text-sm text-gray-600">{language === 'fr' ? 'Chinoise' : 'Chinese'}</p>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-600 mb-1">🍣</div>
                  <p className="text-sm text-gray-600">{language === 'fr' ? 'Japonaise' : 'Japanese'}</p>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-orange-600 mb-1">🍛</div>
                  <p className="text-sm text-gray-600">{language === 'fr' ? 'Thaïlandaise' : 'Thai'}</p>
                </div>
              </div>
              <Link
                to="/restaurant"
                className="inline-flex items-center bg-orange-600 hover:bg-orange-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-200"
              >
                {language === 'fr' ? 'Voir le Menu' : 'View Menu'}
                <FaArrowRight className="ml-2" />
              </Link>
            </div>
            <div data-aos="fade-left">
              <img 
                src="restaurant-interior.jpg" 
                alt="Asian Restaurant Interior"
                className="rounded-lg shadow-2xl w-full h-96 object-cover"
              />
            </div>
          </div>
        </div>
      </section>









































{/* 




      

      <div
        className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-orange-600 text-white py-20 lg:py-32"
        style={{
          backgroundImage: `url('multiservices.jpg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}>
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12" data-aos="fade-up">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                {translations.home.about.title}
              </h2>
              <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
                {translations.home.about.description}
              </p>
            </div>
            <div className="text-center">
              <Link
                to="/about"
                className="inline-flex items-center space-x-2 text-blue-600 hover:text-blue-800 font-semibold text-lg transition-colors duration-200"
              >
                <span>{language === 'fr' ? 'En savoir plus' : 'Learn more'}</span>
                <FaArrowRight />
              </Link>
            </div>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12" data-aos="fade-up">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                {translations.home.services.title}
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg shadow-lg p-8 text-center hover:shadow-xl transition-shadow duration-200"
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                >
                  <div className="flex justify-center mb-6">
                    {service.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  <Link
                    to={service.link}
                    className="inline-flex items-center space-x-2 text-blue-600 hover:text-blue-800 font-semibold transition-colors duration-200"
                  >
                    <span>{language === 'fr' ? 'Découvrir' : 'Discover'}</span>
                    <FaArrowRight />
                  </Link>
                </div>
              ))}
            </div>

            <div className="text-center mt-12">
              <Link
                to="/services"
                className="inline-flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-200"
              >
                <span>{translations.home.services.viewAll}</span>
                <FaArrowRight />
              </Link>
            </div>
          </div>
        </section>
      </div> */}

<div className="relative py-16 overflow-hidden">
  {/* Background image floutée */}
  <div
    className="absolute inset-0 z-0"
    style={{
      backgroundImage: "url('/cabinet5.jpg')",
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      filter: 'blur(1px)', // flou sur l'image
      transform: 'scale(1.05)', // évite les bords visibles du flou
    }}
  ></div>

  {/* Overlay sombre au-dessus du flou */}
  <div className="absolute inset-0 bg-black opacity-50 z-0"></div>

  {/* Contenu avec position relative */}
  <div className="relative z-10">

    {/* About Section */}
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 text-white" data-aos="fade-up">
          <h2 className="text-4xl font-bold mb-6">
            {translations.home.about.title}
          </h2>
          <p className="text-lg max-w-4xl mx-auto leading-relaxed">
            {translations.home.about.description}
          </p>
        </div>
        <div className="text-center">
          <Link
            to="/about"
            className="inline-flex items-center space-x-2 border-1 px-5 py-3 rounded-lg text-orange-300 hover:text-white font-semibold text-lg transition-colors duration-200"
          >
            <span>{language === 'fr' ? 'En savoir plus' : 'Learn more'}</span>
            <FaArrowRight />
          </Link>
        </div>
      </div>
    </section>

    {/* Services Section */}
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
        <div className="text-center mb-12" data-aos="fade-up">
          <h2 className="text-4xl font-bold mb-6">
            {translations.home.services.title}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white/90 rounded-lg shadow-lg p-8 text-center hover:shadow-xl transition-shadow duration-200 text-gray-900"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="flex justify-center mb-6">{service.icon}</div>
              <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
              <p className="mb-6 leading-relaxed">{service.description}</p>
              <Link
                to={service.link}
                className="inline-flex items-center space-x-2 border-5 px-5 py-3 rounded-lg text-blue-600 hover:text-blue-800 font-semibold transition-colors duration-200"
              >
                <span>{language === 'fr' ? 'Découvrir' : 'Discover'}</span>
                <FaArrowRight />
              </Link>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            to="/services"
            className="inline-flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-200"
          >
            <span>{translations.home.services.viewAll}</span>
            <FaArrowRight />
          </Link>
        </div>
      </div>
    </section>

  </div>
</div>



















      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-orange-500 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">
            {language === 'fr'
              ? 'Prêt à découvrir nos services ?'
              : 'Ready to discover our services?'
            }
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            {language === 'fr'
              ? 'Contactez-nous dès maintenant pour réserver votre service ou obtenir plus d\'informations.'
              : 'Contact us now to book your service or get more information.'
            }
          </p>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-3 bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors duration-200 shadow-lg hover:shadow-xl"
          >
            <FaWhatsapp size={24} />
            <span>{language === 'fr' ? 'Contactez-nous' : 'Contact us'}</span>
          </a>
        </div>
      </section>
    </div>
  );
};

export default Home;

