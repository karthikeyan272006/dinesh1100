import React from 'react';
import { Award, Star, Users, Trophy } from 'lucide-react';

const Coaches: React.FC = () => {
  const coaches = [
    {
      name: 'Marcus Johnson',
      title: 'Head Coach & Founder',
      experience: '15 years',
      specialties: ['Youth Development', 'Leadership', 'Game Strategy'],
      achievements: ['Former College Player', 'Coach of the Year 2022', '200+ Players Trained'],
      image: 'https://images.pexels.com/photos/8032748/pexels-photo-8032748.jpeg?auto=compress&cs=tinysrgb&w=400',
      quote: 'Basketball is more than a game - it builds character, discipline, and lifelong friendships.'
    },
    {
      name: 'Sarah Williams',
      title: 'Skills Development Coach',
      experience: '12 years',
      specialties: ['Shooting Techniques', 'Ball Handling', 'Conditioning'],
      achievements: ['Former WNBA Player', 'Olympic Training Camp', 'Skills Coach Certification'],
      image: 'https://images.pexels.com/photos/8032752/pexels-photo-8032752.jpeg?auto=compress&cs=tinysrgb&w=400',
      quote: 'Perfect practice makes perfect. Every rep counts towards your basketball dreams.'
    },
    {
      name: 'David Chen',
      title: 'Defense Specialist',
      experience: '10 years',
      specialties: ['Defensive Systems', 'Team Strategy', 'Mental Toughness'],
      achievements: ['D1 Assistant Coach', 'Championship Winning Coach', 'Defensive Specialist Award'],
      image: 'https://images.pexels.com/photos/8961334/pexels-photo-8961334.jpeg?auto=compress&cs=tinysrgb&w=400',
      quote: 'Defense wins championships. It\'s about heart, hustle, and determination.'
    },
    {
      name: 'Amanda Rodriguez',
      title: 'Youth Program Director',
      experience: '8 years',
      specialties: ['Youth Psychology', 'Fundamental Skills', 'Character Building'],
      achievements: ['Child Development Degree', 'Youth Coach of the Year', '300+ Kids Coached'],
      image: 'https://images.pexels.com/photos/8032804/pexels-photo-8032804.jpeg?auto=compress&cs=tinysrgb&w=400',
      quote: 'Teaching kids basketball is about nurturing their love for the game and building confidence.'
    }
  ];

  return (
    <section id="coaches" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Meet Our Coaches
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Learn from experienced professionals who have played and coached at the highest levels. 
            Our coaching staff brings decades of combined experience and passion for the game.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {coaches.map((coach, index) => (
            <div key={index} className="bg-white rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 group">
              <div className="md:flex">
                <div className="md:w-1/3">
                  <img 
                    src={coach.image} 
                    alt={coach.name}
                    className="w-full h-64 md:h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="md:w-2/3 p-8">
                  <div className="flex items-center gap-2 mb-2">
                    <h3 className="text-2xl font-bold text-gray-900">{coach.name}</h3>
                    <Star className="h-5 w-5 text-yellow-500" />
                  </div>
                  <p className="text-orange-600 font-medium mb-2">{coach.title}</p>
                  <p className="text-gray-600 mb-4">{coach.experience} of experience</p>

                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Specialties:</h4>
                    <div className="flex flex-wrap gap-2">
                      {coach.specialties.map((specialty, idx) => (
                        <span key={idx} className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm">
                          {specialty}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Achievements:</h4>
                    <ul className="space-y-1">
                      {coach.achievements.map((achievement, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-sm text-gray-600">
                          <Trophy className="h-4 w-4 text-yellow-500" />
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <blockquote className="bg-gray-50 p-4 rounded-xl border-l-4 border-orange-500">
                    <p className="text-gray-700 italic">"{coach.quote}"</p>
                  </blockquote>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Coaching Philosophy */}
        <div className="bg-gradient-to-br from-orange-500 to-red-500 rounded-3xl p-8 md:p-12 text-white">
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold mb-4">Our Coaching Philosophy</h3>
            <p className="text-xl opacity-90">Building champions through dedication, discipline, and passion</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <Award className="h-12 w-12 mx-auto mb-4 opacity-90" />
              <h4 className="text-xl font-bold mb-3">Individual Excellence</h4>
              <p className="opacity-90">Every player deserves personalized attention to reach their full potential and achieve their basketball goals.</p>
            </div>
            <div className="text-center">
              <Users className="h-12 w-12 mx-auto mb-4 opacity-90" />
              <h4 className="text-xl font-bold mb-3">Team Unity</h4>
              <p className="opacity-90">Basketball is a team sport. We emphasize cooperation, communication, and collective success.</p>
            </div>
            <div className="text-center">
              <Star className="h-12 w-12 mx-auto mb-4 opacity-90" />
              <h4 className="text-xl font-bold mb-3">Character Building</h4>
              <p className="opacity-90">We develop not just better players, but better people with strong values and leadership skills.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Coaches;