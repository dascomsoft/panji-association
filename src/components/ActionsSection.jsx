
import { Users, BookOpen, Trophy, Target } from 'lucide-react';
import React from 'react';

const Activities = () => {
  const activities = [
    {
      icon: Users,
      title: "Formation Football",
      description: "Entraînements techniques et tactiques adaptés à chaque niveau, de 8 à 18 ans.",
      features: [
        "Entraînements 3 fois par semaine",
        "Matchs le weekend",
        "Stages de vacances",
        "Participation aux tournois"
      ]
    },
    {
      icon: BookOpen,
      title: "Suivi Éducatif",
      description: "Accompagnement scolaire personnalisé pour garantir la réussite académique.",
      features: [
        "Aide aux devoirs",
        "Cours de soutien",
        "Suivi des notes",
        "Orientation scolaire"
      ]
    },
    {
      icon: Trophy,
      title: "Compétitions",
      description: "Participation active aux championnats locaux et régionaux.",
      features: [
        "Championnat départemental",
        "Tournois inter-écoles",
        "Festivals de football",
        "Matchs amicaux"
      ]
    },
    {
      icon: Target,
      title: "Développement Personnel",
      description: "Formation du caractère et des valeurs citoyennes.",
      features: [
        "Éducation civique",
        "Leadership",
        "Esprit d'équipe",
        "Confiance en soi"
      ]
    }
  ];

  return (
    <section id="activites" className="pb-20 pt-36 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Nos Activités</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Un programme complet qui allie formation sportive, suivi éducatif 
            et développement personnel pour épanouir chaque jeune.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {activities.map((activity, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center mb-6">
                <div className="bg-green-100 p-3 rounded-lg">
                  <activity.icon className="text-green-600" size={32} />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 ml-4">{activity.title}</h3>
              </div>
              
              <p className="text-gray-600 mb-6 leading-relaxed">
                {activity.description}
              </p>
              
              <ul className="space-y-3">
                {activity.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-gray-700">
                    <div className="w-2 h-2 bg-green-600 rounded-full mr-3"></div>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-green-600 rounded-2xl p-8 text-center text-white">
          <h3 className="text-3xl font-bold mb-4">Horaires d'entraînement</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
            <div>
              <h4 className="text-xl font-semibold mb-2">Lundi - Mercredi - Vendredi</h4>
              <p className="text-green-100">16h00 - 18h00</p>
              <p className="text-sm text-green-200 mt-1">Entraînements techniques</p>
            </div>
            <div>
              <h4 className="text-xl font-semibold mb-2">Mardi - Jeudi</h4>
              <p className="text-green-100">17h00 - 18h30</p>
              <p className="text-sm text-green-200 mt-1">Soutien scolaire</p>
            </div>
            <div>
              <h4 className="text-xl font-semibold mb-2">Samedi</h4>
              <p className="text-green-100">14h00 - 17h00</p>
              <p className="text-sm text-green-200 mt-1">Matchs et compétitions</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Activities;
