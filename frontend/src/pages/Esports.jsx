import React from 'react';

function Esports() {
  return (
    <div className="min-h-screen flex flex-col items-center p-6">
      {/* Hero Section */}
      <div className="text-center py-12">
        <h1 className="text-5xl font-extrabold text-blue-400">Code Storm Esports</h1>
        <p className="mt-4 text-lg">
          Elevating competitive gaming with strategy, innovation, and passion. 
        </p>
      </div>
      
      {/* Esports Services */}
      <div className="grid md:grid-cols-3 gap-6 max-w-5xl w-full">
        {[
          { title: 'Professional Teams', desc: 'We build and manage elite esports teams competing at the highest level.' },
          { title: 'Tournament Management', desc: 'Organizing world-class esports events with seamless execution.' },
          { title: 'Streaming & Content', desc: 'Creating engaging esports content and live-streaming experiences.' },
          { title: 'Sponsorships & Branding', desc: 'Connecting brands with esports audiences for impactful partnerships.' },
          { title: 'Coaching & Training', desc: 'Developing players with expert coaching and in-depth analysis.' },
          { title: 'Community Engagement', desc: 'Building passionate gaming communities and interactive experiences.' }
        ].map((service, index) => (
          <div key={index} className="p-6 rounded-lg shadow-lg hover:shadow-xl hover:scale-105 transition-all">
            <h3 className="text-2xl font-semibold text-blue-400">{service.title}</h3>
            <p className="mt-2">{service.desc}</p>
          </div>
        ))}
      </div>

      {/* Call to Action */}
      <div className="mt-12 text-center">
        <h2 className="text-3xl font-bold text-blue-400">Join the Code Storm Esports Revolution</h2>
        <p className="text-lg mt-3">Be part of the next big wave in esports. Compete. Stream. Succeed.</p>
        <button className="mt-6 px-6 py-3 bg-blue-500 hover:bg-blue-600 rounded-fullfont-semibold transition-all">
          Get Started
        </button>
      </div>
    </div>
  );
}

export default Esports;