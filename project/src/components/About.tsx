import React from 'react';
import { Target, Heart, Zap, Award } from 'lucide-react';

const About: React.FC = () => {
  const values = [
    {
      icon: Target,
      title: 'Excellence',
      description: 'We strive for perfection in every aspect of training and player development.'
    },
    {
      icon: Heart,
      title: 'Passion',
      description: 'Our love for basketball drives us to inspire and motivate every player.'
    },
    {
      icon: Zap,
      title: 'Innovation',
      description: 'Cutting-edge training methods and technology to maximize potential.'
    },
    {
      icon: Award,
      title: 'Success',
      description: 'Proven track record of developing champions at all levels.'
    }
  ];

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            About Our Academy
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Founded in 2010, Elite Basketball Academy has been shaping the future of basketball 
            through comprehensive training programs and exceptional coaching.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h3 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h3>
            <p className="text-lg text-gray-600 mb-6">
              What started as a small community program has grown into one of the most respected 
              basketball academies in the region. We've trained over 500 players, with many going 
              on to play at collegiate and professional levels.
            </p>
            <p className="text-lg text-gray-600 mb-6">
              Our state-of-the-art facilities combined with experienced coaching staff provide 
              the perfect environment for players to develop their skills, build confidence, 
              and achieve their basketball dreams.
            </p>
            <div className="bg-gradient-to-r from-orange-500 to-red-500 text-white p-6 rounded-2xl">
              <p className="text-lg font-medium">
                "Every great player was once a beginner. Every pro was once an amateur. 
                Every icon was once an unknown."
              </p>
              <p className="text-right mt-2 opacity-90">- Coach Marcus Johnson, Founder</p>
            </div>
          </div>
          
          <div className="relative">
            <div className="bg-gradient-to-br from-orange-400 to-red-500 rounded-3xl p-8 text-white">
              <h4 className="text-2xl font-bold mb-6">By the Numbers</h4>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span>Years of Excellence</span>
                  <span className="text-2xl font-bold">14+</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Players Trained</span>
                  <span className="text-2xl font-bold">500+</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>College Scholarships</span>
                  <span className="text-2xl font-bold">85+</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Professional Players</span>
                  <span className="text-2xl font-bold">12</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Values */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 text-center group">
              <div className="bg-gradient-to-br from-orange-400 to-red-500 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <value.icon className="h-8 w-8 text-white" />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h4>
              <p className="text-gray-600">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;