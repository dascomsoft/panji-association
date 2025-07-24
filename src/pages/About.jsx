import React from 'react';
import { FaWhatsapp, FaUsers, FaGlobe, FaCog } from 'react-icons/fa';
import { useEffect } from 'react';

const About = ({ language, translations }) => {

  useEffect(() => {
    // Faire défiler vers le haut au chargement de la page
    window.scrollTo(0, 0);
  }, []);


  const whatsappNumber = "+237690051632";
  const whatsappMessage = language === 'fr'
    ? "Bonjour, je souhaite en savoir plus sur FUX CENTER."
    : "Hello, I would like to know more about FUX CENTER.";
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

  const promoters = [
    { name: "Mr. WANG", role: language === 'fr' ? 'Directeur Général' : 'General Manager' },
    { name: "Mr. HASSAN", role: language === 'fr' ? 'Directeur Opérationnel' : 'Operations Director' },
    { name: "Mme. LU WEIRONG", role: language === 'fr' ? 'Directrice Marketing' : 'Marketing Director' },
    { name: "Mr. LU", role: language === 'fr' ? 'Directeur Technique' : 'Technical Director' },
    { name: "Mr. BEN", role: language === 'fr' ? 'Directeur Commercial' : 'Sales Director' },
    { name: "Mr. YACOUBA", role: language === 'fr' ? 'Directeur Régional' : 'Regional Director' },
    { name: "Mr. CHOUIBOU", role: language === 'fr' ? 'Directeur Qualité' : 'Quality Director' }
  ];

  const values = [
    {
      icon: <FaUsers className="text-4xl text-blue-600" />,
      title: language === 'fr' ? 'Satisfaction Client' : 'Customer Satisfaction',
      description: language === 'fr'
        ? 'La satisfaction de nos clients est au cœur de notre mission. Nous travaillons sans relâche pour assurer que chaque visite soit une expérience positive.'
        : 'Customer satisfaction is at the heart of our mission. We work tirelessly to ensure that every visit is a positive experience.'
    },
    {
      icon: <FaGlobe className="text-4xl text-green-600" />,
      title: language === 'fr' ? 'Expertise Internationale' : 'International Expertise',
      description: language === 'fr'
        ? 'Avec une expertise internationale, notamment grâce à la gestion de 344 Car Wash en Chine, nous apportons des technologies avancées.'
        : 'With international expertise, notably through the management of 344 Car Wash in China, we bring advanced technologies.'
    },
    {
      icon: <FaCog className="text-4xl text-orange-500" />,
      title: language === 'fr' ? 'Innovation' : 'Innovation',
      description: language === 'fr'
        ? 'Nous utilisons des technologies de pointe et des produits de haute qualité pour offrir un service inégalé.'
        : 'We use cutting-edge technologies and high-quality products to offer unmatched service.'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}

      <section
        className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-orange-600 font-extrabold text-white py-20 lg:py-32"
        style={{
          backgroundImage: `url('cabinet8.jpg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}>
        {/* Overlay sombre */}
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-6">
            {translations.about.title}
          </h1>
          <p className="text-xl max-w-3xl mx-auto">
            {language === 'fr'
              ? 'Découvrez l\'histoire et les valeurs qui font de FUX CENTER un leader dans son domaine.'
              : 'Discover the history and values that make FUX CENTER a leader in its field.'
            }
          </p>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div data-aos="fade-right">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                {translations.about.vision.title}
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                {translations.about.vision.content}
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                {language === 'fr'
                  ? 'Afin de résoudre le problème de mauvais nettoyage des véhicules au Cameroun observé depuis belle lurette. En effet, le problème de nettoyage automobile au Cameroun est resté jusqu\'à ce jour non résolu à cause du manque de professionnels du métier.'
                  : 'In order to solve the problem of poor vehicle cleaning in Cameroon observed for a long time. Indeed, the problem of automotive cleaning in Cameroon has remained unsolved to this day due to the lack of professionals in the trade.'
                }
              </p>
            </div>
            {/* <div className="bg-blue-50 p-8 rounded-lg" data-aos="fade-left">
              <div className="text-6xl font-bold text-blue-600 mb-4">344</div>
              <p className="text-xl font-semibold text-gray-800 mb-2">
                {language === 'fr' ? 'Car Wash en Chine' : 'Car Wash in China'}
              </p>
              <p className="text-gray-600">
                {language === 'fr'
                  ? 'Notre expertise internationale nous permet d\'offrir des services de qualité supérieure.'
                  : 'Our international expertise allows us to offer superior quality services.'
                }
              </p>
            </div> */}

              <div data-aos="fade-left">
              <img 
                src="cabinet2.jpg" 
                alt="Asian Restaurant Interior"
                className="rounded-lg shadow-2xl w-full h-96 object-cover"
              />
            </div>


          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              {translations.about.mission.title}
            </h2>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
              {translations.about.mission.content}
            </p>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              {language === 'fr' ? 'Nos Valeurs' : 'Our Values'}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="text-center p-6 border-3 px-5 py-3 rounded-lg hover:shadow-xl"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className="flex justify-center mb-6">
                  {value.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {value.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Development Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              {translations.about.development.title}
            </h2>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
              {translations.about.development.content}
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8">
            <p className="text-lg text-gray-600 leading-relaxed">
              {language === 'fr'
                ? 'Fort de son succès initial, l\'entreprise a diversifié ses activités en ouvrant un hôtel offrant une hospitalité exceptionnelle, des installations modernes et un service personnalisé. Par la suite, un restaurant a été lancé avec pour mission de créer une expérience culinaire mémorable. Aujourd\'hui, FUXING COMPANY est reconnu pour son excellence dans chacun de ses secteurs.'
                : 'Building on its initial success, the company diversified its activities by opening a hotel offering exceptional hospitality, modern facilities and personalized service. Subsequently, a restaurant was launched with the mission of creating a memorable culinary experience. Today, FUXING COMPANY is recognized for its excellence in each of its sectors.'
              }
            </p>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              {translations.about.team.title}
            </h2>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
              {translations.about.team.description}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {promoters.map((promoter, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-6 text-center">
                <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">
                    {promoter.name.split(' ')[1]?.[0] || promoter.name[0]}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {promoter.name}
                </h3>
                <p className="text-gray-600">
                  {promoter.role}
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
              ? 'Rejoignez la famille FUX CENTER'
              : 'Join the FUX CENTER family'
            }
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            {language === 'fr'
              ? 'Découvrez pourquoi des milliers de clients nous font confiance pour leurs besoins en entretien automobile, hôtellerie et restauration.'
              : 'Discover why thousands of customers trust us for their automotive maintenance, hospitality and catering needs.'
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

export default About;


