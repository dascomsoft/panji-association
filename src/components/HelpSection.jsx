import React, { useState } from 'react';
import { Heart, CreditCard, Smartphone, Users, Handshake, Gift, Check, ArrowRight } from 'lucide-react';

const HelpSection = () => {
  const [donationAmount, setDonationAmount] = useState('');
  const [volunteerForm, setVolunteerForm] = useState({
    name: '',
    email: '',
    phone: '',
    skills: '',
    availability: '',
    message: ''
  });

  const donationMethods = [
    {
      icon: Smartphone,
      title: "Mobile Money",
      description: "Orange Money, MTN MoMo",
      details: ["Orange: +237 6XX XX XX XX", "MTN: +237 6XX XX XX XX"],
      popular: true
    },
    {
      icon: CreditCard,
      title: "PayPal",
      description: "Paiement sécurisé international",
      details: ["Accepte toutes les cartes", "Sécurisé SSL"],
      popular: false
    },
    {
      icon: CreditCard,
      title: "Virement Bancaire",
      description: "Banque Atlantique Cameroun",
      details: ["IBAN: CM21 xxxx xxxx xxxx", "Swift: BAFRXXXXX"],
      popular: false
    }
  ];

  const predefinedAmounts = [5000, 10000, 25000, 50000, 100000, 250000];

  const volunteerOpportunities = [
    {
      title: "Formation & Mentorat",
      description: "Accompagner les jeunes entrepreneurs",
      skills: ["Business", "Marketing", "Finance"],
      time: "4h/semaine"
    },
    {
      title: "Événements & Communication",
      description: "Organisation d'événements caritatifs",
      skills: ["Communication", "Organisation", "Design"],
      time: "Ponctuel"
    },
    {
      title: "Terrain & Logistique",
      description: "Actions directes sur le terrain",
      skills: ["Logistique", "Animation", "Coordination"],
      time: "Week-ends"
    },
    {
      title: "Expertise Technique",
      description: "Conseils spécialisés selon vos compétences",
      skills: ["Tech", "Juridique", "Médical", "Ingénierie"],
      time: "Flexible"
    }
  ];

  const handleVolunteerSubmit = (e) => {
    e.preventDefault();
    console.log('Candidature bénévole:', volunteerForm);
    alert('Merci pour votre candidature ! Nous vous contacterons bientôt.');
  };

  return (
    <section id="aider" className="section-padding bg-gradient-to-br from-gray-50 to-white">
      <div className="container-custom">
        {/* En-tête de section */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Comment <span className="text-gradient">Nous Aider</span> ?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Votre contribution, qu'elle soit financière ou par votre engagement personnel, 
            fait la différence dans la vie de nombreux Camerounais.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Section Dons */}
          <div className="animate-fade-in-up">
            <div className="bg-white shadow-2xl rounded-lg">
              <div className="p-8">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-cameroon-red/10 rounded-full flex items-center justify-center mr-4">
                    <Heart className="w-6 h-6 text-cameroon-red" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-800">Faire un Don</h3>
                    <p className="text-gray-600">Chaque FCFA compte pour nos bénéficiaires</p>
                  </div>
                </div>

                {/* Montants prédéfinis */}
                <div className="mb-6">
                  <label className="text-sm font-semibold text-gray-700 mb-3 block">
                    Choisissez un montant (FCFA)
                  </label>
                  <div className="grid grid-cols-3 gap-3">
                    {predefinedAmounts.map((amount) => (
                      <button
                        key={amount}
                        onClick={() => setDonationAmount(amount.toString())}
                        className={`p-3 rounded-lg border-2 transition-all font-semibold ${
                          donationAmount === amount.toString()
                            ? 'border-cameroon-green bg-cameroon-green text-white'
                            : 'border-gray-200 hover:border-cameroon-green hover:text-cameroon-green'
                        }`}
                      >
                        {amount.toLocaleString()}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Montant personnalisé */}
                <div className="mb-6">
                  <label htmlFor="custom-amount" className="text-sm font-semibold text-gray-700 mb-2 block">
                    Ou saisissez un montant personnalisé
                  </label>
                  <input
                    id="custom-amount"
                    type="number"
                    placeholder="Montant en FCFA"
                    value={donationAmount}
                    onChange={(e) => setDonationAmount(e.target.value)}
                    className="text-lg p-4 w-full border rounded-md focus:ring-2 focus:ring-cameroon-green focus:border-cameroon-green outline-none"
                  />
                </div>

                {/* Impact du don */}
                {donationAmount && (
                  <div className="bg-cameroon-green/5 p-4 rounded-lg mb-6">
                    <h4 className="font-semibold text-cameroon-green mb-2">Impact de votre don :</h4>
                    <div className="text-sm text-gray-600 space-y-1">
                      {parseInt(donationAmount) >= 50000 && (
                        <div className="flex items-center">
                          <Check className="w-4 h-4 text-cameroon-green mr-2" />
                          Formation complète d'un jeune entrepreneur
                        </div>
                      )}
                      {parseInt(donationAmount) >= 25000 && (
                        <div className="flex items-center">
                          <Check className="w-4 h-4 text-cameroon-green mr-2" />
                          Microcrédit pour une femme rurale
                        </div>
                      )}
                      {parseInt(donationAmount) >= 10000 && (
                        <div className="flex items-center">
                          <Check className="w-4 h-4 text-cameroon-green mr-2" />
                          Fournitures scolaires pour 5 enfants
                        </div>
                      )}
                      <div className="flex items-center">
                        <Check className="w-4 h-4 text-cameroon-green mr-2" />
                        Chaque don contribue à nos actions collectives
                      </div>
                    </div>
                  </div>
                )}

                {/* Méthodes de paiement */}
                <div className="space-y-4">
                  <h4 className="font-semibold text-gray-800">Méthodes de paiement :</h4>
                  {donationMethods.map((method, index) => (
                    <div key={index} className="border rounded-lg p-4 hover:border-cameroon-green transition-colors cursor-pointer">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center">
                          <method.icon className="w-6 h-6 text-cameroon-green mr-3" />
                          <div>
                            <div className="font-semibold text-gray-800 flex items-center gap-2">
                              {method.title}
                              {method.popular && (
                                <span className="bg-cameroon-yellow text-black text-xs px-2 py-1 rounded-full">
                                  Populaire
                                </span>
                              )}
                            </div>
                            <div className="text-sm text-gray-600">{method.description}</div>
                          </div>
                        </div>
                        <ArrowRight className="w-5 h-5 text-gray-400" />
                      </div>
                      <div className="mt-2 pl-9 text-xs text-gray-500">
                        {method.details.map((detail, i) => (
                          <div key={i}>{detail}</div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>

                <button 
                  className={`w-full mt-6 bg-cameroon-red hover:bg-cameroon-red/90 text-white py-4 text-lg rounded-md transition-colors flex items-center justify-center ${
                    !donationAmount ? 'opacity-50 cursor-not-allowed' : ''
                  }`}
                  disabled={!donationAmount}
                >
                  Faire un don de {donationAmount ? parseInt(donationAmount).toLocaleString() : '0'} FCFA
                  <Heart className="ml-2 w-5 h-5" />
                </button>
              </div>
            </div>
          </div>

          {/* Section Bénévolat */}
          <div className="animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <div className="bg-white shadow-2xl rounded-lg">
              <div className="p-8">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-cameroon-green/10 rounded-full flex items-center justify-center mr-4">
                    <Users className="w-6 h-6 text-cameroon-green" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-800">Devenir Bénévole</h3>
                    <p className="text-gray-600">Partagez vos compétences et votre temps</p>
                  </div>
                </div>

                {/* Opportunités de bénévolat */}
                <div className="mb-8">
                  <h4 className="font-semibold text-gray-800 mb-4">Opportunités disponibles :</h4>
                  <div className="space-y-4">
                    {volunteerOpportunities.map((opportunity, index) => (
                      <div key={index} className="border rounded-lg p-4 hover:border-cameroon-green transition-colors">
                        <div className="flex justify-between items-start mb-2">
                          <h5 className="font-semibold text-gray-800">{opportunity.title}</h5>
                          <span className="text-xs border rounded-full px-2 py-1">
                            {opportunity.time}
                          </span>
                        </div>
                        <p className="text-sm text-gray-600 mb-3">{opportunity.description}</p>
                        <div className="flex flex-wrap gap-2">
                          {opportunity.skills.map((skill, i) => (
                            <span key={i} className="bg-cameroon-green/10 text-cameroon-green text-xs px-2 py-1 rounded-full">
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Formulaire de candidature */}
                <form onSubmit={handleVolunteerSubmit} className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="volunteer-name" className="block text-sm font-medium text-gray-700 mb-1">Nom complet *</label>
                      <input
                        id="volunteer-name"
                        value={volunteerForm.name}
                        onChange={(e) => setVolunteerForm({...volunteerForm, name: e.target.value})}
                        required
                        className="w-full p-2 border rounded-md focus:ring-2 focus:ring-cameroon-green focus:border-cameroon-green outline-none"
                      />
                    </div>
                    <div>
                      <label htmlFor="volunteer-email" className="block text-sm font-medium text-gray-700 mb-1">Email *</label>
                      <input
                        id="volunteer-email"
                        type="email"
                        value={volunteerForm.email}
                        onChange={(e) => setVolunteerForm({...volunteerForm, email: e.target.value})}
                        required
                        className="w-full p-2 border rounded-md focus:ring-2 focus:ring-cameroon-green focus:border-cameroon-green outline-none"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="volunteer-phone" className="block text-sm font-medium text-gray-700 mb-1">Téléphone</label>
                    <input
                      id="volunteer-phone"
                      value={volunteerForm.phone}
                      onChange={(e) => setVolunteerForm({...volunteerForm, phone: e.target.value})}
                      placeholder="+237 6XX XX XX XX"
                      className="w-full p-2 border rounded-md focus:ring-2 focus:ring-cameroon-green focus:border-cameroon-green outline-none"
                    />
                  </div>

                  <div>
                    <label htmlFor="volunteer-skills" className="block text-sm font-medium text-gray-700 mb-1">Vos compétences *</label>
                    <input
                      id="volunteer-skills"
                      value={volunteerForm.skills}
                      onChange={(e) => setVolunteerForm({...volunteerForm, skills: e.target.value})}
                      placeholder="Ex: Marketing, Informatique, Cuisine..."
                      required
                      className="w-full p-2 border rounded-md focus:ring-2 focus:ring-cameroon-green focus:border-cameroon-green outline-none"
                    />
                  </div>

                  <div>
                    <label htmlFor="volunteer-availability" className="block text-sm font-medium text-gray-700 mb-1">Disponibilité</label>
                    <input
                      id="volunteer-availability"
                      value={volunteerForm.availability}
                      onChange={(e) => setVolunteerForm({...volunteerForm, availability: e.target.value})}
                      placeholder="Ex: Week-ends, Soirs, Vacances..."
                      className="w-full p-2 border rounded-md focus:ring-2 focus:ring-cameroon-green focus:border-cameroon-green outline-none"
                    />
                  </div>

                  <div>
                    <label htmlFor="volunteer-message" className="block text-sm font-medium text-gray-700 mb-1">Message (optionnel)</label>
                    <textarea
                      id="volunteer-message"
                      value={volunteerForm.message}
                      onChange={(e) => setVolunteerForm({...volunteerForm, message: e.target.value})}
                      placeholder="Parlez-nous de votre motivation..."
                      rows={3}
                      className="w-full p-2 border rounded-md focus:ring-2 focus:ring-cameroon-green focus:border-cameroon-green outline-none"
                    />
                  </div>

                  <button 
                    type="submit" 
                    className="w-full bg-cameroon-green hover:bg-cameroon-green/90 text-white py-4 rounded-md transition-colors flex items-center justify-center"
                  >
                    Rejoindre l'équipe
                    <Users className="ml-2 w-5 h-5" />
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>

        {/* Section Partenariats */}
        <div className="mt-16 text-center animate-fade-in-up">
          <div className="bg-gradient-to-br from-cameroon-yellow/10 to-cameroon-green/10 rounded-lg">
            <div className="p-8">
              <Handshake className="w-16 h-16 text-cameroon-green mx-auto mb-6" />
              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                Vous représentez une entreprise ou une organisation ?
              </h3>
              <p className="text-gray-600 mb-6">
                Explorons ensemble des opportunités de partenariat pour maximiser notre impact social.
              </p>
              <button 
                className="border border-cameroon-green text-cameroon-green hover:bg-cameroon-green hover:text-white px-4 py-2 rounded-md transition-colors flex items-center justify-center mx-auto"
              >
                Discuter d'un partenariat
                <ArrowRight className="ml-2 w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HelpSection;