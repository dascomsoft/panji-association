
import { Heart, Shield, Star } from 'lucide-react';
import React

 from 'react';

const About = () => {
  return (
    <section id="apropos" className="pb-20 pt-36 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">À propos de nous</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Découvrez notre histoire, notre mission et nos valeurs qui nous guident 
            dans la formation des jeunes talents de Bafang.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h3 className="text-3xl font-bold text-gray-900 mb-6">Notre Histoire</h3>
            <p className="text-gray-600 mb-4 leading-relaxed">
              Fondée en 2018 à Bafang, dans la région de l'Ouest du Cameroun, 
              l'Association Sportive Pandji Foot Études est née de la vision d'allier 
              sport et éducation pour offrir aux jeunes un avenir meilleur.
            </p>
            <p className="text-gray-600 mb-4 leading-relaxed">
              Notre association accueille des jeunes de 8 à 18 ans, en leur proposant 
              un encadrement sportif de qualité tout en veillant à leur réussite scolaire.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Aujourd'hui, nous sommes fiers d'avoir formé plus de 150 jeunes, 
              dont beaucoup ont intégré des clubs professionnels ou ont excellé 
              dans leurs études.
            </p>
          </div>
          
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=500&h=400&fit=crop"
              alt="Équipe de jeunes footballeurs"
              className="w-full h-80 object-cover rounded-xl shadow-lg"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center p-8 bg-green-50 rounded-xl">
            <Heart className="mx-auto text-green-600 mb-4" size={48} />
            <h4 className="text-xl font-bold text-gray-900 mb-4">Notre Mission</h4>
            <p className="text-gray-600">
              Former des jeunes équilibrés en alliant passion du football 
              et excellence éducative pour leur offrir un avenir prometteur.
            </p>
          </div>
          
          <div className="text-center p-8 bg-green-50 rounded-xl">
            <Shield className="mx-auto text-green-600 mb-4" size={48} />
            <h4 className="text-xl font-bold text-gray-900 mb-4">Nos Valeurs</h4>
            <p className="text-gray-600">
              Respect, discipline, solidarité et persévérance sont les piliers 
              qui guident notre approche pédagogique et sportive.
            </p>
          </div>
          
          <div className="text-center p-8 bg-green-50 rounded-xl">
            <Star className="mx-auto text-green-600 mb-4" size={48} />
            <h4 className="text-xl font-bold text-gray-900 mb-4">Notre Vision</h4>
            <p className="text-gray-600">
              Devenir le centre de formation de référence au Cameroun, 
              reconnu pour l'excellence de ses méthodes et ses résultats.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
