import React from 'react';
import { Clock, Users, Dumbbell, Brain } from 'lucide-react';

const Training: React.FC = () => {
  const programs = [
    {
      title: 'Youth Development',
      age: 'Ages 8-12',
      description: 'Fundamental skills, fun games, and building love for basketball.',
      features: ['Basic dribbling & shooting', 'Team cooperation', 'Physical fitness', 'Sportsmanship'],
      duration: '1 hour',
      groupSize: '8-10 players',
      price: '$80/month',
      color: 'from-blue-400 to-blue-600'
    },
    {
      title: 'Teen Elite',
      age: 'Ages 13-17',
      description: 'Advanced techniques, game strategy, and competitive preparation.',
      features: ['Advanced skills training', 'Game situations', 'Mental toughness', 'College prep'],
      duration: '1.5 hours',
      groupSize: '6-8 players',
      price: '$120/month',
      color: 'from-orange-400 to-red-500'
    },
    {
      title: 'Adult League',
      age: 'Ages 18+',
      description: 'Maintain fitness, improve skills, and enjoy competitive games.',
      features: ['Skill refinement', 'League games', 'Fitness training', 'Networking'],
      duration: '2 hours',
      groupSize: '10-12 players',
      price: '$100/month',
      color: 'from-green-400 to-green-600'
    },
    {
      title: 'Personal Training',
      age: 'All Ages',
      description: 'One-on-one coaching tailored to individual goals and needs.',
      features: ['Personalized program', 'Flexible schedule', 'Individual attention', 'Rapid improvement'],
      duration: '1 hour',
      groupSize: '1-on-1',
      price: '$75/session',
      color: 'from-purple-400 to-purple-600'
    }
  ];

  return (
    <section id="training" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Training Programs
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive training programs designed for every skill level and age group. 
            Choose the perfect program to elevate your game.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {programs.map((program, index) => (
            <div key={index} className="bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden group hover:-translate-y-2">
              <div className={`bg-gradient-to-br ${program.color} p-6 text-white`}>
                <h3 className="text-2xl font-bold mb-2">{program.title}</h3>
                <p className="text-lg opacity-90">{program.age}</p>
              </div>
              
              <div className="p-6">
                <p className="text-gray-600 mb-6">{program.description}</p>
                
                <div className="space-y-4 mb-6">
                  <div className="flex items-center gap-3">
                    <Clock className="h-5 w-5 text-orange-500" />
                    <span className="text-gray-700">{program.duration}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Users className="h-5 w-5 text-orange-500" />
                    <span className="text-gray-700">{program.groupSize}</span>
                  </div>
                </div>

                <ul className="space-y-2 mb-6">
                  {program.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                      <span className="text-gray-600 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                <div className="border-t pt-4">
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-gray-600">Price:</span>
                    <span className="text-2xl font-bold text-gray-900">{program.price}</span>
                  </div>
                  <button className={`w-full bg-gradient-to-r ${program.color} text-white py-3 rounded-xl font-medium hover:shadow-lg transition-all duration-200 transform hover:scale-105`}>
                    Enroll Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Training Features */}
        <div className="mt-20 bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl p-8 md:p-12 text-white">
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold mb-4">What Makes Us Different</h3>
            <p className="text-xl text-gray-300">State-of-the-art facilities and comprehensive training approach</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <Dumbbell className="h-12 w-12 text-orange-500 mx-auto mb-4" />
              <h4 className="text-xl font-bold mb-3">Modern Equipment</h4>
              <p className="text-gray-300">Latest training technology and professional-grade equipment for optimal performance development.</p>
            </div>
            <div className="text-center">
              <Brain className="h-12 w-12 text-orange-500 mx-auto mb-4" />
              <h4 className="text-xl font-bold mb-3">Mental Training</h4>
              <p className="text-gray-300">Sports psychology and mental toughness training to develop champions on and off the court.</p>
            </div>
            <div className="text-center">
              <Users className="h-12 w-12 text-orange-500 mx-auto mb-4" />
              <h4 className="text-xl font-bold mb-3">Small Groups</h4>
              <p className="text-gray-300">Limited class sizes ensure personalized attention and maximum skill development for every player.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Training;