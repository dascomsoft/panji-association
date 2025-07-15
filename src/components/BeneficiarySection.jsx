import React, { useState } from 'react';
import { 
  FaFileAlt, 
  FaQuestionCircle, 
  FaCheckCircle, 
  FaClock, 
  FaUsers, 
  FaBullseye, 
  FaArrowRight, 
  FaExclamationCircle,
  FaUserTie,
  FaGraduationCap,
  FaSeedling,
  FaHeartbeat,
  FaLaptopCode,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaUser,
  FaCalendarAlt,
  FaMoneyBillWave,
  FaLightbulb,
  FaHandsHelping,
  FaChevronDown
} from 'react-icons/fa';

const BeneficiarySection = () => {
  const [applicationForm, setApplicationForm] = useState({
    name: '',
    email: '',
    phone: '',
    age: '',
    region: '',
    city: '',
    category: '',
    projectTitle: '',
    projectDescription: '',
    budget: '',
    timeline: '',
    impact: '',
    experience: '',
    references: ''
  });

  // Catégories de programmes
  const categories = [
    {
      id: 'entrepreneuriat',
      title: 'Entrepreneuriat & Business',
      description: 'Soutien à la création et au développement d\'entreprises',
      criteria: ['Avoir un projet viable', 'Être âgé de 18 à 35 ans', 'Résider au Cameroun'],
      support: ['Financement jusqu\'à 500,000 FCFA', 'Formation business', 'Mentorat 6 mois']
    },
    {
      id: 'education',
      title: 'Éducation & Formation',
      description: 'Bourses d\'études et programmes de formation',
      criteria: ['Situation financière précaire', 'Excellence académique', 'Engagement communautaire'],
      support: ['Frais de scolarité', 'Matériel pédagogique', 'Suivi personnalisé']
    },
    {
      id: 'agriculture',
      title: 'Agriculture & Rural',
      description: 'Développement agricole et soutien aux communautés rurales',
      criteria: ['Être agriculteur/trice', 'Projet innovant', 'Impact communautaire'],
      support: ['Équipements agricoles', 'Formation technique', 'Accès aux marchés']
    },
    {
      id: 'sante',
      title: 'Santé & Social',
      description: 'Accès aux soins et soutien social',
      criteria: ['Situation médicale critique', 'Ressources limitées', 'Dossier médical complet'],
      support: ['Prise en charge médicale', 'Médicaments', 'Suivi psychosocial']
    },
    {
      id: 'technologie',
      title: 'Innovation & Technologie',
      description: 'Projets tech et innovation numérique',
      criteria: ['Projet tech innovant', 'Potentiel de scale', 'Équipe constituée'],
      support: ['Financement initial', 'Incubation', 'Réseau professionnel']
    }
  ];

  // Régions du Cameroun
  const cameroonRegions = [
    'Adamaoua', 'Centre', 'Est', 'Extrême-Nord', 'Littoral', 
    'Nord', 'Nord-Ouest', 'Ouest', 'Sud', 'Sud-Ouest'
  ];

  // FAQ
  const faqItems = [
    {
      question: "Qui peut postuler pour devenir bénéficiaire ?",
      answer: "Tous les citoyens camerounais ou résidents permanents peuvent postuler, selon les critères spécifiques de chaque programme. Nous privilégions les projets ayant un impact social positif et les personnes dans le besoin."
    },
    {
      question: "Combien de temps prend le processus de sélection ?",
      answer: "Le processus complet prend généralement 4 à 6 semaines : 2 semaines pour l'évaluation initiale, 2 semaines pour l'étude approfondie, et 1-2 semaines pour la décision finale et la notification."
    },
    {
      question: "Quel type de soutien puis-je recevoir ?",
      answer: "Le soutien varie selon la catégorie : financement direct, formation, mentorat, équipements, prise en charge médicale, bourses d'études, ou accompagnement technique. Chaque cas est étudié individuellement."
    },
    {
      question: "Y a-t-il des obligations après avoir reçu l'aide ?",
      answer: "Oui, nous demandons un rapport d'utilisation des fonds, la participation à nos activités de suivi, et idéalement, l'engagement à aider d'autres bénéficiaires une fois votre situation améliorée."
    },
    {
      question: "Puis-je postuler plusieurs fois ?",
      answer: "Vous pouvez postuler une fois par an par catégorie. Si votre première demande n'est pas retenue, vous pouvez améliorer votre dossier et représenter l'année suivante."
    },
    {
      question: "Comment puis-je améliorer mes chances d'être sélectionné ?",
      answer: "Présentez un dossier complet et détaillé, démontrez l'impact social de votre projet, fournissez des références crédibles, et montrez votre engagement personnel dans la réussite du projet."
    }
  ];

  // Étapes du processus
  const processSteps = [
    {
      icon: FaFileAlt,
      title: "Candidature",
      description: "Remplissez le formulaire détaillé avec tous les documents requis"
    },
    {
      icon: FaClock,
      title: "Évaluation",
      description: "Notre équipe étudie votre dossier selon nos critères (2-3 semaines)"
    },
    {
      icon: FaUsers,
      title: "Entretien",
      description: "Entretien avec les candidats présélectionnés (si applicable)"
    },
    {
      icon: FaCheckCircle,
      title: "Décision",
      description: "Notification de la décision et début de l'accompagnement"
    }
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Candidature bénéficiaire:', applicationForm);
    alert('Votre candidature a été soumise avec succès ! Nous vous contacterons dans les prochaines semaines.');
  };

  return (
    <section id="beneficiaire" className="section-padding bg-white">
      <div className="container-custom">
        {/* En-tête de section */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Devenir <span className="text-gradient">Bénéficiaire</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Vous avez un projet ou traversez une période difficile ? 
            Découvrez comment la Fondation Maahlox peut vous accompagner vers la réussite.
          </p>
        </div>

        {/* Processus de candidature */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-center text-gray-800 mb-8">
            Notre processus en 4 étapes
          </h3>
          <div className="grid md:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="text-center animate-fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="relative">
                  <div className="w-16 h-16 bg-cameroon-green/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <step.icon className="w-6 h-6 text-cameroon-green" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-cameroon-green text-white rounded-full flex items-center justify-center text-sm font-bold">
                    {index + 1}
                  </div>
                  {index < processSteps.length - 1 && (
                    <div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-gray-200 -z-10"></div>
                  )}
                </div>
                <h4 className="font-bold text-gray-800 mb-2">{step.title}</h4>
                <p className="text-sm text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Catégories d'aide */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-center text-gray-800 mb-8">
            Nos programmes d'aide
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((category, index) => {
              let CategoryIcon;
              switch(category.id) {
                case 'entrepreneuriat':
                  CategoryIcon = FaUserTie;
                  break;
                case 'education':
                  CategoryIcon = FaGraduationCap;
                  break;
                case 'agriculture':
                  CategoryIcon = FaSeedling;
                  break;
                case 'sante':
                  CategoryIcon = FaHeartbeat;
                  break;
                case 'technologie':
                  CategoryIcon = FaLaptopCode;
                  break;
                default:
                  CategoryIcon = FaBullseye;
              }

              return (
                <div key={category.id} className="bg-white rounded-xl shadow-md group hover:shadow-xl transition-all duration-300 animate-fade-in-up p-6" style={{ animationDelay: `${index * 0.1}s` }}>
                  <div className="flex items-center justify-between mb-4">
                    <CategoryIcon className="w-8 h-8 text-cameroon-green" />
                    <span className="bg-cameroon-green/10 text-cameroon-green text-xs px-3 py-1 rounded-full">
                      Programme
                    </span>
                  </div>
                  
                  <h4 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-cameroon-green transition-colors">
                    {category.title}
                  </h4>
                  <p className="text-gray-600 mb-4">{category.description}</p>
                  
                  <div className="space-y-3">
                    <div>
                      <h5 className="font-semibold text-sm text-gray-800 mb-2">Critères :</h5>
                      <ul className="text-sm text-gray-600 space-y-1">
                        {category.criteria.map((criterion, i) => (
                          <li key={i} className="flex items-start">
                            <FaCheckCircle className="w-3 h-3 text-cameroon-green mr-2 mt-1 flex-shrink-0" />
                            {criterion}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <h5 className="font-semibold text-sm text-gray-800 mb-2">Support offert :</h5>
                      <ul className="text-sm text-gray-600 space-y-1">
                        {category.support.map((support, i) => (
                          <li key={i} className="flex items-start">
                            <FaArrowRight className="w-3 h-3 text-cameroon-yellow mr-2 mt-1 flex-shrink-0" />
                            {support}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Formulaire de candidature */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl shadow-2xl overflow-hidden">
              <div className="p-8">
                <div className="flex items-center mb-6">
                  <FaFileAlt className="w-8 h-8 text-cameroon-green mr-3" />
                  <div>
                    <h3 className="text-2xl font-bold text-gray-800">Formulaire de candidature</h3>
                    <p className="text-gray-600">Remplissez tous les champs requis</p>
                  </div>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Informations personnelles */}
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h4 className="font-bold text-gray-800 mb-4">Informations personnelles</h4>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Nom complet *</label>
                        <div className="relative">
                          <FaUser className="absolute left-3 top-3 text-gray-400" />
                          <input
                            id="name"
                            type="text"
                            className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cameroon-green focus:border-transparent"
                            value={applicationForm.name}
                            onChange={(e) => setApplicationForm({...applicationForm, name: e.target.value})}
                            required
                          />
                        </div>
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email *</label>
                        <div className="relative">
                          <FaEnvelope className="absolute left-3 top-3 text-gray-400" />
                          <input
                            id="email"
                            type="email"
                            className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cameroon-green focus:border-transparent"
                            value={applicationForm.email}
                            onChange={(e) => setApplicationForm({...applicationForm, email: e.target.value})}
                            required
                          />
                        </div>
                      </div>
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Téléphone *</label>
                        <div className="relative">
                          <FaPhoneAlt className="absolute left-3 top-3 text-gray-400" />
                          <input
                            id="phone"
                            type="tel"
                            className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cameroon-green focus:border-transparent"
                            value={applicationForm.phone}
                            onChange={(e) => setApplicationForm({...applicationForm, phone: e.target.value})}
                            placeholder="+237 6XX XX XX XX"
                            required
                          />
                        </div>
                      </div>
                      <div>
                        <label htmlFor="age" className="block text-sm font-medium text-gray-700 mb-1">Âge</label>
                        <div className="relative">
                          <FaCalendarAlt className="absolute left-3 top-3 text-gray-400" />
                          <input
                            id="age"
                            type="number"
                            className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cameroon-green focus:border-transparent"
                            value={applicationForm.age}
                            onChange={(e) => setApplicationForm({...applicationForm, age: e.target.value})}
                          />
                        </div>
                      </div>
                      <div>
                        <label htmlFor="region" className="block text-sm font-medium text-gray-700 mb-1">Région *</label>
                        <div className="relative">
                          <FaMapMarkerAlt className="absolute left-3 top-3 text-gray-400" />
                          <select
                            id="region"
                            className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cameroon-green focus:border-transparent"
                            value={applicationForm.region}
                            onChange={(e) => setApplicationForm({...applicationForm, region: e.target.value})}
                            required
                          >
                            <option value="">Sélectionnez votre région</option>
                            {cameroonRegions.map((region) => (
                              <option key={region} value={region}>{region}</option>
                            ))}
                          </select>
                        </div>
                      </div>
                      <div>
                        <label htmlFor="city" className="block text-sm font-medium text-gray-700 mb-1">Ville *</label>
                        <div className="relative">
                          <FaMapMarkerAlt className="absolute left-3 top-3 text-gray-400" />
                          <input
                            id="city"
                            type="text"
                            className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cameroon-green focus:border-transparent"
                            value={applicationForm.city}
                            onChange={(e) => setApplicationForm({...applicationForm, city: e.target.value})}
                            required
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Informations sur le projet/demande */}
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h4 className="font-bold text-gray-800 mb-4">Votre demande</h4>
                    <div className="space-y-4">
                      <div>
                        <label htmlFor="category" className="block text-sm font-medium text-gray-700 mb-1">Catégorie de soutien *</label>
                        <select
                          id="category"
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cameroon-green focus:border-transparent"
                          value={applicationForm.category}
                          onChange={(e) => setApplicationForm({...applicationForm, category: e.target.value})}
                          required
                        >
                          <option value="">Choisissez une catégorie</option>
                          {categories.map((category) => (
                            <option key={category.id} value={category.id}>{category.title}</option>
                          ))}
                        </select>
                      </div>

                      <div>
                        <label htmlFor="project-title" className="block text-sm font-medium text-gray-700 mb-1">Titre de votre projet/demande *</label>
                        <input
                          id="project-title"
                          type="text"
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cameroon-green focus:border-transparent"
                          value={applicationForm.projectTitle}
                          onChange={(e) => setApplicationForm({...applicationForm, projectTitle: e.target.value})}
                          placeholder="Ex: Création d'une boulangerie communautaire"
                          required
                        />
                      </div>

                      <div>
                        <label htmlFor="project-description" className="block text-sm font-medium text-gray-700 mb-1">Description détaillée *</label>
                        <textarea
                          id="project-description"
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cameroon-green focus:border-transparent"
                          value={applicationForm.projectDescription}
                          onChange={(e) => setApplicationForm({...applicationForm, projectDescription: e.target.value})}
                          placeholder="Décrivez votre projet, vos objectifs, et pourquoi vous avez besoin d'aide..."
                          rows={4}
                          required
                        />
                      </div>

                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <label htmlFor="budget" className="block text-sm font-medium text-gray-700 mb-1">Budget demandé (FCFA)</label>
                          <div className="relative">
                            <FaMoneyBillWave className="absolute left-3 top-3 text-gray-400" />
                            <input
                              id="budget"
                              type="number"
                              className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cameroon-green focus:border-transparent"
                              value={applicationForm.budget}
                              onChange={(e) => setApplicationForm({...applicationForm, budget: e.target.value})}
                              placeholder="Montant en FCFA"
                            />
                          </div>
                        </div>
                        <div>
                          <label htmlFor="timeline" className="block text-sm font-medium text-gray-700 mb-1">Délai de réalisation</label>
                          <input
                            id="timeline"
                            type="text"
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cameroon-green focus:border-transparent"
                            value={applicationForm.timeline}
                            onChange={(e) => setApplicationForm({...applicationForm, timeline: e.target.value})}
                            placeholder="Ex: 6 mois"
                          />
                        </div>
                      </div>

                      <div>
                        <label htmlFor="impact" className="block text-sm font-medium text-gray-700 mb-1">Impact attendu sur votre communauté</label>
                        <textarea
                          id="impact"
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cameroon-green focus:border-transparent"
                          value={applicationForm.impact}
                          onChange={(e) => setApplicationForm({...applicationForm, impact: e.target.value})}
                          placeholder="Comment votre projet va-t-il bénéficier à votre communauté ?"
                          rows={3}
                        />
                      </div>

                      <div>
                        <label htmlFor="experience" className="block text-sm font-medium text-gray-700 mb-1">Expérience et compétences pertinentes</label>
                        <textarea
                          id="experience"
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cameroon-green focus:border-transparent"
                          value={applicationForm.experience}
                          onChange={(e) => setApplicationForm({...applicationForm, experience: e.target.value})}
                          placeholder="Décrivez votre expérience dans le domaine..."
                          rows={3}
                        />
                      </div>

                      <div>
                        <label htmlFor="references" className="block text-sm font-medium text-gray-700 mb-1">Références (optionnel)</label>
                        <textarea
                          id="references"
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cameroon-green focus:border-transparent"
                          value={applicationForm.references}
                          onChange={(e) => setApplicationForm({...applicationForm, references: e.target.value})}
                          placeholder="Noms et contacts de personnes qui peuvent témoigner de votre sérieux"
                          rows={2}
                        />
                      </div>
                    </div>
                  </div>

                  <div className="bg-cameroon-yellow/10 p-4 rounded-lg">
                    <div className="flex items-start">
                      <FaExclamationCircle className="w-5 h-5 text-cameroon-yellow mr-3 mt-0.5" />
                      <div className="text-sm text-gray-700">
                        <p className="font-semibold mb-1">Documents requis après présélection :</p>
                        <ul className="list-disc list-inside space-y-1">
                          <li>Copie de la carte d'identité</li>
                          <li>Certificat de résidence</li>
                          <li>Business plan (pour l'entrepreneuriat)</li>
                          <li>Relevés de notes (pour l'éducation)</li>
                          <li>Certificats médicaux (selon le cas)</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <button 
                    type="submit" 
                    className="w-full bg-cameroon-green hover:bg-cameroon-green/90 text-white py-4 text-lg rounded-md transition-colors flex items-center justify-center"
                  >
                    Soumettre ma candidature
                    <FaArrowRight className="ml-2 w-5 h-5" />
                  </button>
                </form>
              </div>
            </div>
          </div>

          {/* FAQ */}
          <div>
            <div className="bg-white rounded-xl shadow-xl sticky top-8 overflow-hidden">
              <div className="p-6">
                <div className="flex items-center mb-6">
                  <FaQuestionCircle className="w-6 h-6 text-cameroon-red mr-3" />
                  <h3 className="text-xl font-bold text-gray-800">Questions fréquentes</h3>
                </div>

                <div className="space-y-4">
                  {faqItems.map((faq, index) => (
                    <details key={index} className="group">
                      <summary className="flex justify-between items-center cursor-pointer text-sm font-medium">
                        {faq.question}
                        <FaChevronDown className="ml-2 transition-transform transform group-open:rotate-180" />
                      </summary>
                      <p className="mt-2 text-sm text-gray-600">
                        {faq.answer}
                      </p>
                    </details>
                  ))}
                </div>

                <div className="mt-6 p-4 bg-cameroon-green/5 rounded-lg">
                  <h4 className="font-semibold text-cameroon-green mb-2">Besoin d'aide ?</h4>
                  <p className="text-sm text-gray-600 mb-3">
                    Notre équipe est là pour vous accompagner dans votre candidature.
                  </p>
                  <button className="w-full border border-gray-300 rounded-md px-4 py-2 text-sm hover:bg-gray-50 transition-colors flex items-center justify-center">
                    <FaHandsHelping className="mr-2" />
                    Nous contacter
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BeneficiarySection;